'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const APP_ROOT = path.resolve(__dirname, '..');

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
  const storage = {
    shouldThrow: false,
    getItem(key) {
      return storageValues.get(key) ?? null;
    },
    setItem(key, value) {
      if (this.shouldThrow) throw new Error('Storage quota exceeded');
      storageValues.set(key, String(value));
    },
    removeItem(key) {
      storageValues.delete(key);
    },
  };
  const documentElement = createElement();
  const document = {
    body: createElement(),
    documentElement,
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
    crypto: { randomUUID: () => 'test-run-id' },
    document,
    fetch: async () => ({ ok: false, json: async () => ({ code: 'AI_NOT_CONFIGURED' }) }),
    localStorage: storage,
    setTimeout,
    window,
  });
  vm.runInContext(fs.readFileSync(path.join(APP_ROOT, 'app.js'), 'utf8'), context, { filename: 'app.js' });
  return { context, storage };
}

function verifyStaticHooks() {
  const html = fs.readFileSync(path.join(APP_ROOT, 'index.html'), 'utf8');
  const javascript = fs.readFileSync(path.join(APP_ROOT, 'app.js'), 'utf8');
  const css = fs.readFileSync(path.join(APP_ROOT, 'styles.css'), 'utf8');
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gu)].map((match) => match[1]);
  const uniqueIds = new Set(ids);
  const hooks = [...javascript.matchAll(/document\.querySelector\(["']#([^"']+)["']\)/gu)].map((match) => match[1]);
  let braceDepth = 0;

  for (const character of css.replace(/\/\*[\s\S]*?\*\//gu, '')) {
    if (character === '{') braceDepth += 1;
    if (character === '}') braceDepth -= 1;
    assert.ok(braceDepth >= 0, 'CSS cannot close a block before it opens');
  }

  assert.equal(uniqueIds.size, ids.length, 'HTML IDs must be unique');
  assert.deepEqual([...new Set(hooks)].filter((id) => !uniqueIds.has(id)), [], 'Every direct JavaScript ID hook must exist');
  assert.equal(braceDepth, 0, 'CSS blocks must be balanced');
}

async function verifyEngine() {
  const { context, storage } = createGameContext();
  const result = await vm.runInContext(`(async () => {
    const form = {
      get(key) {
        return {
          idea: 'TestCo',
          audience: 'founders',
          niche: 'workflow',
          startupType: 'saas',
          style: 'balanced',
          goal: 'profit',
        }[key];
      },
    };
    startGame(form);

    const core = state.product.products[0];
    const originalStability = core.stability;
    const originalDebt = core.technicalDebt;
    applyRoleStateEffects('engineer', 'hire');
    recalculateDerivedState();
    const engineerStability = core.stability;
    const engineerDebt = core.technicalDebt;

    const uxBeforeUpgrade = core.ux;
    applyUpgradeToPrimaryProduct('uiux', productUpgrades.uiux);
    syncAggregateProductStats();

    const uxBeforeResearch = core.ux;
    const featuresBeforeResearch = core.featureDepth;
    applyMarketActionCrossEffects('interviews');
    recalculateDerivedState();
    const uxAfterResearch = core.ux;
    const featuresAfterResearch = core.featureDepth;

    core.active = false;
    core.users = 100;
    core.revenue = 500;
    decayPausedProductsForNewWeek();
    const pausedSnapshot = { users: core.users, revenue: core.revenue };
    core.active = true;
    recalculateDerivedState();

    const priceBeforeCooldownAttempt = state.monetization.price;
    state.monetization.lastPriceChangeWeek = state.week;
    core.lastManagedWeek = null;
    applyProductEntityAction(core.id, 'priceUp');
    const priceAfterCooldownAttempt = state.monetization.price;
    state.monetization.lastPriceChangeWeek = null;

    const originalValuation = state.company.valuation;
    state.week = 2;
    state.revenue = 100000000;
    updateCompanyProgress();
    const spikeValuation = state.company.valuation;
    state.revenue = 500000000;
    updateCompanyProgress();
    const sameWeekValuation = state.company.valuation;

    audioMuted = true;
    state.cash = 1000000000;
    state.reputation = 90;
    core.users = Math.max(1000, core.users);
    core.active = true;
    syncAggregateProductStats();
    pendingResolution = null;
    const smokeStartWeek = state.week;
    for (let turn = 0; turn < 12; turn += 1) {
      makeDecision(activePrompt.decisions[turn % activePrompt.decisions.length]);
      if (pendingResolution?.ending) throw new Error('Protected smoke run ended unexpectedly');
      await continueToNextWeek();
    }
    const smokeEndWeek = state.week;
    const smokeHistoryCount = state.history.length;

    state.cash = 100;
    state.users = Math.max(1, state.users);
    state.reputation = 70;
    pendingResolution = null;
    const crashEvent = {
      type: 'event',
      title: 'Sudden bank freeze',
      text: 'Cash is inaccessible.',
      immediate: { cash: -200 },
      decisions: [],
    };
    applyImmediateEventEffect(crashEvent);
    const endingTitle = pendingResolution?.ending?.title;
    const cashAfterFirstImpact = state.cash;
    applyImmediateEventEffect(crashEvent);
    const cashAfterSecondImpact = state.cash;

    state.week = 30;
    state.cash = 20000;
    state.revenue = 1000;
    state.company = {
      valuation: 75000000,
      stageIndex: 6,
      highestStageIndex: 6,
      stage: 'business-empire',
      valuationModelVersion: 1,
    };
    state.product.ux = 77;
    delete core.ux;
    delete state.monetization.lastPriceChangeWeek;
    state.market.lastChoiceWeek.pricing = state.week;
    ensureRestoredStateSchema();
    const migration = {
      modelVersion: state.company.valuationModelVersion,
      stageIndex: state.company.highestStageIndex,
      valuation: state.company.valuation,
      productUx: core.ux,
      lastPriceChangeWeek: state.monetization.lastPriceChangeWeek,
    };

    return {
      cashAfterFirstImpact,
      cashAfterSecondImpact,
      engineerDebt,
      engineerStability,
      endingTitle,
      featuresAfterResearch,
      featuresBeforeResearch,
      originalDebt,
      originalStability,
      originalValuation,
      migration,
      pausedSnapshot,
      priceAfterCooldownAttempt,
      priceBeforeCooldownAttempt,
      sameWeekValuation,
      smokeEndWeek,
      smokeHistoryCount,
      smokeStartWeek,
      spikeValuation,
      uxAfterResearch,
      uxBeforeResearch,
      uxBeforeUpgrade,
      uxAfterUpgrade: uxBeforeResearch,
    };
  })()`, context);

  assert.equal(result.engineerStability, result.originalStability + 2, 'Engineer stability must persist');
  assert.equal(result.engineerDebt, result.originalDebt - 2, 'Engineer debt reduction must persist');
  assert.equal(result.uxAfterUpgrade, result.uxBeforeUpgrade + 12, 'UI/UX upgrade must persist');
  assert.equal(result.uxAfterResearch, result.uxBeforeResearch + 2, 'Research UX benefit must persist');
  assert.equal(result.featuresAfterResearch, result.featuresBeforeResearch + 1, 'Research feature benefit must persist');
  assert.equal(result.pausedSnapshot.users, 92, 'Paused products must lose inactive users');
  assert.equal(result.pausedSnapshot.revenue, 0, 'Paused products must stop revenue');
  assert.equal(result.priceAfterCooldownAttempt, result.priceBeforeCooldownAttempt, 'Global price cooldown must block portfolio bypasses');
  assert.ok(
    result.spikeValuation <= Math.max(result.originalValuation + 50000, Math.round(result.originalValuation * 1.3)),
    'One-week valuation spikes must be capped',
  );
  assert.equal(result.sameWeekValuation, result.spikeValuation, 'Valuation may only update once per week');
  assert.equal(result.smokeEndWeek, result.smokeStartWeek + 12, 'Weekly decisions must continue advancing the run');
  assert.ok(result.smokeHistoryCount >= 12, 'Weekly decisions must be recorded during a sustained run');
  assert.equal(result.endingTitle, 'You ran out of money', 'Fatal immediate events must create an ending');
  assert.equal(result.cashAfterSecondImpact, result.cashAfterFirstImpact, 'The same event instance may only apply once');
  assert.equal(result.migration.modelVersion, 2, 'Legacy valuations must migrate to the current model');
  assert.ok(result.migration.stageIndex < 6 && result.migration.valuation < 500000000, 'Legacy inflated empire saves must be recalibrated');
  assert.equal(result.migration.productUx, 77, 'Legacy products must inherit their saved aggregate UX');
  assert.equal(result.migration.lastPriceChangeWeek, 30, 'Legacy pricing cooldown state must migrate safely');

  storage.shouldThrow = true;
  assert.equal(vm.runInContext('saveAchievements()', context), false, 'Achievement storage failures must be non-fatal');
}

(async () => {
  verifyStaticHooks();
  await verifyEngine();
  console.log('LaunchLab engine and static integration tests passed.');
})().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
