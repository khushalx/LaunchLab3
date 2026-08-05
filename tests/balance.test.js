'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const APP_ROOT = path.resolve(__dirname, '..');
const RUN_COUNT = 45;
const HORIZON_WEEK = 104;
const MAX_RANDOM_EMPIRE_RATE = 0.1;

class FakeClassList {
  constructor() {
    this.values = new Set(['is-hidden']);
  }

  add(...values) {
    values.forEach((value) => this.values.add(value));
  }

  remove(...values) {
    values.forEach((value) => this.values.delete(value));
  }

  toggle(value, force) {
    const enabled = force === undefined ? !this.values.has(value) : force;
    enabled ? this.values.add(value) : this.values.delete(value);
    return enabled;
  }

  contains(value) {
    return this.values.has(value);
  }
}

function createElement() {
  return {
    classList: new FakeClassList(),
    style: { setProperty() {} },
    dataset: {},
    innerHTML: '',
    textContent: '',
    value: '',
    disabled: false,
    scrollTop: 0,
    scrollHeight: 0,
    append() {},
    appendChild() {},
    addEventListener() {},
    removeEventListener() {},
    setAttribute() {},
    getAttribute() { return null; },
    focus() {},
    reset() {},
    contains() { return false; },
    closest() { return null; },
    querySelector() { return createElement(); },
    querySelectorAll() { return []; },
  };
}

function createGameContext() {
  const elements = new Map();
  const storageValues = new Map();
  let runId = 0;

  const localStorage = {
    getItem(key) {
      return storageValues.get(key) ?? null;
    },
    setItem(key, value) {
      storageValues.set(key, String(value));
    },
    removeItem(key) {
      storageValues.delete(key);
    },
  };

  const document = {
    body: createElement(),
    documentElement: createElement(),
    querySelector(selector) {
      if (!elements.has(selector)) elements.set(selector, createElement());
      return elements.get(selector);
    },
    querySelectorAll() { return []; },
    createElement,
    addEventListener() {},
  };

  const window = {
    setTimeout(callback) { callback(); return 1; },
    clearTimeout() {},
    requestAnimationFrame(callback) { callback(); },
    addEventListener() {},
    AudioContext: null,
    webkitAudioContext: null,
  };

  const context = vm.createContext({
    AbortController,
    Date,
    Intl,
    Math,
    URL,
    clearTimeout,
    console,
    crypto: { randomUUID: () => `balance-run-${++runId}` },
    document,
    fetch: async () => ({ ok: false, json: async () => ({ code: 'AI_NOT_CONFIGURED' }) }),
    localStorage,
    setTimeout,
    window,
  });

  vm.runInContext(fs.readFileSync(path.join(APP_ROOT, 'app.js'), 'utf8'), context, { filename: 'app.js' });

  // Keep the simulation faithful while avoiding DOM rendering and storage work
  // that cannot affect game balance. Immediate event effects and weekly company
  // progression normally happen in render(), so retain those two operations.
  vm.runInContext(`
    render = function balanceTestRender() {
      applyImmediateEventEffect(activePrompt);
      updateCompanyProgress({ suppressToast: true });
    };
    showResultToast = function noop() {};
    playSound = function noop() {};
    showPromotionToast = function noop() {};
    checkAchievements = function noop() {};
    renderAIState = function noop() {};
    updateSystemActionLock = function noop() {};
  `, context);

  return context;
}

function startupConfig(index) {
  const types = ['saas', 'marketplace', 'creator', 'agency', 'ai'];
  const styles = ['balanced', 'risk', 'conservative'];
  const goals = ['profit', 'growth', 'stability'];
  return {
    idea: `Balance Seed ${index}`,
    audience: 'founders',
    niche: 'workflow software',
    startupType: types[index % types.length],
    style: styles[Math.floor(index / types.length) % styles.length],
    goal: goals[Math.floor(index / (types.length * styles.length)) % goals.length],
  };
}

function verifyValuationCannotInstantlyPromote(context) {
  const result = vm.runInContext(`(() => {
    const config = ${JSON.stringify(startupConfig(0))};
    startGame({ get(key) { return config[key]; } });

    const empireThreshold = companyStages[companyStages.length - 1].minValuation;
    state.company.valuation = empireThreshold * 4;
    state.company.lastValuationWeek = 0;
    state.company.stageIndex = 0;
    state.company.highestStageIndex = 0;
    state.company.stage = companyStages[0].id;

    updateCompanyProgress({ suppressToast: true, force: true });
    return {
      stageIndex: currentCompanyStageIndex(),
      stage: currentCompanyStage().id,
      valuation: state.company.valuation,
    };
  })()`, context);

  assert.equal(
    result.stageIndex,
    0,
    `A fresh company must not promote from valuation alone (received ${result.stage} at ${result.valuation})`,
  );
}

function verifyBalanceGuards(context) {
  const result = vm.runInContext(`(() => {
    const config = ${JSON.stringify(startupConfig(1))};
    startGame({ get(key) { return config[key]; } });
    audioMuted = true;
    state.cash = 100000;
    recalculateDerivedState();

    const initialFocusMax = weeklyFocusMax();
    hireRole('operations');
    const focusAfterOperationsHire = {
      max: weeklyFocusMax(),
      remaining: focusRemaining(),
      operations: state.team.roles.operations,
    };

    startGame({ get(key) { return config[key]; } });
    state.cash = 1000000;
    state.revenue = 10000;
    state.growthRate = 8;
    state.reputation = 90;
    state.team.morale = 90;
    const core = state.product.products[0];
    core.users = 1000;
    core.revenue = 10000;
    core.productQuality = 85;
    core.stability = 85;
    core.ux = 85;
    core.technicalDebt = 10;
    syncAggregateProductStats();
    state.week = 2;
    resetFocusForNewWeek();
    state.company.valuation = 200000;
    state.company.smoothedWeeklyRevenue = 1000;
    state.company.lastValuationWeek = 0;
    updateCompanyProgress({ suppressToast: true, force: true });
    const firstForcedHold = state.company.readiness.weeksHeld;
    updateCompanyProgress({ suppressToast: true, force: true });
    updateCompanyProgress({ suppressToast: true, force: true });
    const repeatedForcedHold = state.company.readiness.weeksHeld;

    state.cash = 1e308;
    state.totalRevenue = 1e308;
    state.peakUsers = 1e308;
    state.company.valuation = 1e308;
    state.company.smoothedWeeklyRevenue = 1e308;
    state.balance.pressure = 1e308;
    state.economy.optionalExpenses = 1e308;
    core.users = 1e308;
    core.revenue = 1e308;
    core.growth = 1e308;
    ensureRestoredStateSchema();
    recalculateDerivedState();
    const sanitizedNumbers = [
      state.cash,
      state.totalRevenue,
      state.peakUsers,
      state.users,
      state.revenue,
      state.company.valuation,
      state.company.smoothedWeeklyRevenue,
      state.balance.pressure,
      state.economy.optionalExpenses,
      core.users,
      core.revenue,
      core.growth,
    ];

    startGame({ get(key) { return config[key]; } });
    const usersBeforeEarlyEvent = state.users;
    applyImmediateEventEffect({
      type: 'event',
      title: 'Early traction shock',
      immediate: { users: -999 },
    });
    const usersAfterEarlyEvent = state.users;

    return {
      initialFocusMax,
      focusAfterOperationsHire,
      firstForcedHold,
      repeatedForcedHold,
      sanitizedNumbers,
      usersBeforeEarlyEvent,
      usersAfterEarlyEvent,
    };
  })()`, context);

  assert.equal(result.focusAfterOperationsHire.operations, 1, 'Operations hire should complete when two Focus is available');
  assert.equal(result.focusAfterOperationsHire.max, result.initialFocusMax, 'A hire must not manufacture extra Focus in the current week');
  assert.equal(result.focusAfterOperationsHire.remaining, 0, 'The two-Focus hire should consume the frozen weekly budget');
  assert.equal(result.firstForcedHold, 1, 'A qualified company should earn one readiness week');
  assert.equal(result.repeatedForcedHold, result.firstForcedHold, 'Forced valuation refreshes cannot manufacture sustained readiness weeks');
  assert.ok(result.sanitizedNumbers.every(Number.isFinite), 'Restored extreme values must be sanitized to finite game numbers');
  assert.equal(result.usersAfterEarlyEvent, 6, 'Early immediate events may remove at most 40% of the user base');
  assert.ok(result.usersAfterEarlyEvent < result.usersBeforeEarlyEvent, 'The early-event protection must still allow a real loss');
}

async function runRandomNoManagementSimulation(context, index) {
  const config = startupConfig(index);
  return vm.runInContext(`(async () => {
    const config = ${JSON.stringify(config)};
    startGame({ get(key) { return config[key]; } });
    audioMuted = true;

    let choiceSeed = ${0x9e3779b9 ^ index};
    let firstEmpireWeek = null;
    let failureWeek = null;
    const nonFinite = [];

    const nextChoiceIndex = (length) => {
      choiceSeed ^= choiceSeed << 13;
      choiceSeed ^= choiceSeed >>> 17;
      choiceSeed ^= choiceSeed << 5;
      return (choiceSeed >>> 0) % length;
    };

    const inspectFiniteValues = () => {
      const coreValues = {
        week: state.week,
        users: state.users,
        revenue: state.revenue,
        totalRevenue: state.totalRevenue,
        cash: state.cash,
        burnRate: state.burnRate,
        reputation: state.reputation,
        productQuality: state.productQuality,
        growthRate: state.growthRate,
        stageIndex: state.company?.stageIndex,
        highestStageIndex: state.company?.highestStageIndex,
        valuation: state.company?.valuation,
        smoothedWeeklyRevenue: state.company?.smoothedWeeklyRevenue,
        readinessTarget: state.company?.readiness?.targetStageIndex,
        readinessWeeks: state.company?.readiness?.weeksHeld,
        readinessPillars: state.company?.readiness?.pillarsPassed,
        readinessResilience: state.company?.readiness?.resilience,
        readinessRunway: state.company?.readiness?.projectedRunway,
        balanceVersion: state.balance?.version,
        focusSpent: state.balance?.focusSpent,
        focusWeek: state.balance?.focusWeek,
        pressure: state.balance?.pressure,
        overloadRisk: state.balance?.overloadRisk,
        criticalWeeks: state.balance?.criticalWeeks,
        graceUntilWeek: state.balance?.graceUntilWeek,
        morale: state.team?.morale,
        efficiency: state.team?.efficiency,
        stability: state.product?.stability,
        ux: state.product?.ux,
        featureDepth: state.product?.featureDepth,
        technicalDebt: state.product?.technicalDebt,
        demand: state.market?.demand,
        competition: state.market?.competition,
        differentiation: state.market?.differentiation,
        competitorPressure: state.market?.competitorPressure,
        marketingSpend: state.economy?.marketingSpend,
        optionalExpenses: state.economy?.optionalExpenses,
        developmentPausedWeeks: state.economy?.developmentPausedWeeks,
      };

      Object.entries(coreValues).forEach(([name, value]) => {
        if (typeof value !== 'number' || !Number.isFinite(value)) {
          nonFinite.push({ week: state.week, name, value: String(value) });
        }
      });

      (state.product?.products || []).forEach((product, productIndex) => {
        ['users', 'revenue', 'productQuality', 'stability', 'ux', 'featureDepth', 'technicalDebt', 'growth']
          .forEach((name) => {
            const value = product[name];
            if (typeof value !== 'number' || !Number.isFinite(value)) {
              nonFinite.push({ week: state.week, name: 'products[' + productIndex + '].' + name, value: String(value) });
            }
          });
      });
    };

    while (state.week <= ${HORIZON_WEEK}) {
      inspectFiniteValues();
      if (currentCompanyStageIndex() === companyStages.length - 1 && firstEmpireWeek === null) {
        firstEmpireWeek = state.week;
      }
      if (pendingResolution?.ending) {
        failureWeek = state.week;
        break;
      }

      const decisions = activePrompt?.decisions || [];
      if (!decisions.length) throw new Error('Week ' + state.week + ' has no playable decisions');
      makeDecision(decisions[nextChoiceIndex(decisions.length)]);
      inspectFiniteValues();

      if (pendingResolution?.ending) {
        failureWeek = state.week;
        break;
      }
      if (state.week >= ${HORIZON_WEEK}) break;
      await continueToNextWeek();
    }

    return {
      firstEmpireWeek,
      failureWeek,
      finalWeek: state.week,
      finalStageIndex: currentCompanyStageIndex(),
      finalValuation: state.company?.valuation,
      nonFinite,
    };
  })()`, context);
}

async function verifyRandomNoManagementBalance(context) {
  const runs = [];
  for (let index = 0; index < RUN_COUNT; index += 1) {
    runs.push(await runRandomNoManagementSimulation(context, index));
  }

  const nonFinite = runs.flatMap((run, runIndex) => run.nonFinite.map((entry) => ({ runIndex, ...entry })));
  assert.deepEqual(nonFinite, [], `Simulation values must remain finite: ${JSON.stringify(nonFinite.slice(0, 5))}`);

  const empireRuns = runs.filter((run) => run.firstEmpireWeek !== null && run.firstEmpireWeek <= HORIZON_WEEK);
  const empireRate = empireRuns.length / runs.length;
  assert.ok(
    empireRate <= MAX_RANDOM_EMPIRE_RATE,
    `Random no-management play reached Business Empire in ${empireRuns.length}/${runs.length} runs (${Math.round(empireRate * 100)}%); expected at most ${Math.round(MAX_RANDOM_EMPIRE_RATE * 100)}% by Week ${HORIZON_WEEK}`,
  );

  return {
    empireRuns: empireRuns.length,
    empireRate,
    failures: runs.filter((run) => run.failureWeek !== null).length,
  };
}

(async () => {
  const context = createGameContext();
  verifyValuationCannotInstantlyPromote(context);
  verifyBalanceGuards(context);
  const summary = await verifyRandomNoManagementBalance(context);
  console.log(
    `LaunchLab balance regression passed: ${summary.empireRuns}/${RUN_COUNT} random no-management runs reached Empire by Week ${HORIZON_WEEK}; ${summary.failures} runs failed.`,
  );
})().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
