const landingPage = document.querySelector("#landingPage");
const simulationPage = document.querySelector("#simulationPage");
const endingPage = document.querySelector("#endingPage");
const startupForm = document.querySelector("#startupForm");
const restartButton = document.querySelector("#restartButton");
const saveRunButton = document.querySelector("#saveRunButton");
const newRunButton = document.querySelector("#newRunButton");
const playAgainButton = document.querySelector("#playAgainButton");
const tryStrategyButton = document.querySelector("#tryStrategyButton");
const saveStartNewRunButton = document.querySelector("#saveStartNewRunButton");
const viewRunHistoryButton = document.querySelector("#viewRunHistoryButton");
const themeButton = document.querySelector("#themeButton");
const howToPlayButton = document.querySelector("#howToPlayButton");
const muteButton = document.querySelector("#muteButton");
const onboardingOverlay = document.querySelector("#onboardingOverlay");
const startSimulationButton = document.querySelector("#startSimulationButton");
const dismissOnboardingButton = document.querySelector("#dismissOnboardingButton");
const newRunOverlay = document.querySelector("#newRunOverlay");
const confirmNewRunButton = document.querySelector("#confirmNewRunButton");
const cancelNewRunButton = document.querySelector("#cancelNewRunButton");
const decisionButtons = document.querySelector("#decisionButtons");
const decisionResultPanel = document.querySelector("#decisionResultPanel");
const decisionResultTitle = document.querySelector("#decisionResultTitle");
const decisionResultChanges = document.querySelector("#decisionResultChanges");
const decisionResultInsight = document.querySelector("#decisionResultInsight");
const continueWeekButton = document.querySelector("#continueWeekButton");
const historyList = document.querySelector("#historyList");
const dossierNavButtons = document.querySelectorAll(".dossier-nav button");
const overviewView = document.querySelector("#overviewView");
const timelineView = document.querySelector("#timelineView");
const teamView = document.querySelector("#teamView");
const productView = document.querySelector("#productView");
const marketView = document.querySelector("#marketView");
const runsView = document.querySelector("#runsView");
const achievementsView = document.querySelector("#achievementsView");
const timelineFilterButtons = document.querySelectorAll(".timeline-filters button");
const timelineDetailList = document.querySelector("#timelineDetailList");
const trajectoryLabel = document.querySelector("#trajectoryLabel");
const summarySurvived = document.querySelector("#summarySurvived");
const summaryBestWeek = document.querySelector("#summaryBestWeek");
const summaryWorstWeek = document.querySelector("#summaryWorstWeek");
const summaryGrowthMoment = document.querySelector("#summaryGrowthMoment");
const teamStatusLine = document.querySelector("#teamStatusLine");
const teamSizeStat = document.querySelector("#teamSizeStat");
const teamCostStat = document.querySelector("#teamCostStat");
const teamMoraleStat = document.querySelector("#teamMoraleStat");
const teamEfficiencyStat = document.querySelector("#teamEfficiencyStat");
const teamMoraleBar = document.querySelector("#teamMoraleBar");
const teamEfficiencyBar = document.querySelector("#teamEfficiencyBar");
const teamStrongText = document.querySelector("#teamStrongText");
const teamWeakText = document.querySelector("#teamWeakText");
const teamRolesList = document.querySelector("#teamRolesList");
const teamActionMessage = document.querySelector("#teamActionMessage");
const productStatusLine = document.querySelector("#productStatusLine");
const productHealthBadge = document.querySelector("#productHealthBadge");
const productQualityStat = document.querySelector("#productQualityStat");
const productStabilityStat = document.querySelector("#productStabilityStat");
const productUxStat = document.querySelector("#productUxStat");
const productFeatureStat = document.querySelector("#productFeatureStat");
const productDebtStat = document.querySelector("#productDebtStat");
const productQualityBar = document.querySelector("#productQualityBar");
const productStabilityBar = document.querySelector("#productStabilityBar");
const productUxBar = document.querySelector("#productUxBar");
const productFeatureBar = document.querySelector("#productFeatureBar");
const productDebtBar = document.querySelector("#productDebtBar");
const productMonetizationModel = document.querySelector("#productMonetizationModel");
const productMonetizationPrice = document.querySelector("#productMonetizationPrice");
const productMonetizationNote = document.querySelector("#productMonetizationNote");
const productUpgradeList = document.querySelector("#productUpgradeList");
const productActionMessage = document.querySelector("#productActionMessage");
const roadmapBacklog = document.querySelector("#roadmapBacklog");
const roadmapProgress = document.querySelector("#roadmapProgress");
const roadmapShipped = document.querySelector("#roadmapShipped");
const createProductButton = document.querySelector("#createProductButton");
const createProductForm = document.querySelector("#createProductForm");
const cancelProductButton = document.querySelector("#cancelProductButton");
const productPortfolioList = document.querySelector("#productPortfolioList");
const marketStatusLine = document.querySelector("#marketStatusLine");
const marketFitBadge = document.querySelector("#marketFitBadge");
const marketSizeStat = document.querySelector("#marketSizeStat");
const marketDemandStat = document.querySelector("#marketDemandStat");
const marketCompetitionStat = document.querySelector("#marketCompetitionStat");
const marketDifferentiationStat = document.querySelector("#marketDifferentiationStat");
const marketPricingPowerStat = document.querySelector("#marketPricingPowerStat");
const marketPressureStat = document.querySelector("#marketPressureStat");
const marketSizeBar = document.querySelector("#marketSizeBar");
const marketDemandBar = document.querySelector("#marketDemandBar");
const marketCompetitionBar = document.querySelector("#marketCompetitionBar");
const marketDifferentiationBar = document.querySelector("#marketDifferentiationBar");
const marketPricingPowerBar = document.querySelector("#marketPricingPowerBar");
const marketPressureBar = document.querySelector("#marketPressureBar");
const marketMonetizationModel = document.querySelector("#marketMonetizationModel");
const marketMonetizationPrice = document.querySelector("#marketMonetizationPrice");
const marketMonetizationNote = document.querySelector("#marketMonetizationNote");
const segmentOptions = document.querySelector("#segmentOptions");
const positioningOptions = document.querySelector("#positioningOptions");
const pricingOptions = document.querySelector("#pricingOptions");
const marketActionList = document.querySelector("#marketActionList");
const marketActionMessage = document.querySelector("#marketActionMessage");
const marketReportText = document.querySelector("#marketReportText");
const marketWedgeText = document.querySelector("#marketWedgeText");
const marketRiskText = document.querySelector("#marketRiskText");
const achievementRankLine = document.querySelector("#achievementRankLine");
const achievementRankBadge = document.querySelector("#achievementRankBadge");
const achievementsUnlockedStat = document.querySelector("#achievementsUnlockedStat");
const achievementsTotalStat = document.querySelector("#achievementsTotalStat");
const achievementsCompletionStat = document.querySelector("#achievementsCompletionStat");
const achievementsCompletionBar = document.querySelector("#achievementsCompletionBar");
const achievementsRunStat = document.querySelector("#achievementsRunStat");
const achievementCategoryFilters = document.querySelector("#achievementCategoryFilters");
const achievementRarityFilters = document.querySelector("#achievementRarityFilters");
const achievementStatusFilters = document.querySelector("#achievementStatusFilters");
const achievementGrid = document.querySelector("#achievementGrid");
const achievementToast = document.querySelector("#achievementToast");
const runsArchiveLine = document.querySelector("#runsArchiveLine");
const runsArchiveCount = document.querySelector("#runsArchiveCount");
const bestRunsPanel = document.querySelector("#bestRunsPanel");
const compareRunA = document.querySelector("#compareRunA");
const compareRunB = document.querySelector("#compareRunB");
const runCompareResult = document.querySelector("#runCompareResult");
const runHistoryList = document.querySelector("#runHistoryList");

const weekNumber = document.querySelector("#weekNumber");
const companyName = document.querySelector("#companyName");
const companyContext = document.querySelector("#companyContext");
const usersStat = document.querySelector("#usersStat");
const revenueStat = document.querySelector("#revenueStat");
const cashStat = document.querySelector("#cashStat");
const growthStat = document.querySelector("#growthStat");
const burnStat = document.querySelector("#burnStat");
const runwayStat = document.querySelector("#runwayStat");
const runwayStatPill = document.querySelector("#runwayStatPill");
const reputationStat = document.querySelector("#reputationStat");
const qualityStat = document.querySelector("#qualityStat");
const streakStat = document.querySelector("#streakStat");
const runwayLabel = document.querySelector("#runwayLabel");
const reputationLabel = document.querySelector("#reputationLabel");
const qualityLabel = document.querySelector("#qualityLabel");
const runwayBar = document.querySelector("#runwayBar");
const reputationBar = document.querySelector("#reputationBar");
const qualityBar = document.querySelector("#qualityBar");
const scenarioTitle = document.querySelector("#scenarioTitle");
const scenarioText = document.querySelector("#scenarioText");
const eventBadge = document.querySelector("#eventBadge");
const historyCount = document.querySelector("#historyCount");
const insightText = document.querySelector("#insightText");
const guidedTip = document.querySelector("#guidedTip");
const decisionWeekLabel = document.querySelector("#decisionWeekLabel");
const profileName = document.querySelector("#profileName");
const profileType = document.querySelector("#profileType");
const profileStyle = document.querySelector("#profileStyle");
const profileGoal = document.querySelector("#profileGoal");
const runwayWarningText = document.querySelector("#runwayWarningText");
const burnSourceTotal = document.querySelector("#burnSourceTotal");
const burnTeamSource = document.querySelector("#burnTeamSource");
const burnProductSource = document.querySelector("#burnProductSource");
const burnMarketingSource = document.querySelector("#burnMarketingSource");
const burnOptionalSource = document.querySelector("#burnOptionalSource");
const burnSourceNote = document.querySelector("#burnSourceNote");
const stopMarketingButton = document.querySelector("#stopMarketingButton");
const pauseDevelopmentButton = document.querySelector("#pauseDevelopmentButton");
const cutCostsButton = document.querySelector("#cutCostsButton");
const sideGrowthLabel = document.querySelector("#sideGrowthLabel");
const sideUsersLabel = document.querySelector("#sideUsersLabel");
const sideInsightText = document.querySelector("#sideInsightText");
const nextEventLabel = document.querySelector("#nextEventLabel");
const nextEventBar = document.querySelector("#nextEventBar");
const resultToast = document.querySelector("#resultToast");
const endingEyebrow = document.querySelector("#endingEyebrow");
const endingTitle = document.querySelector("#endingTitle");
const endingReason = document.querySelector("#endingReason");
const summaryWeeks = document.querySelector("#summaryWeeks");
const summaryPeakUsers = document.querySelector("#summaryPeakUsers");
const summaryRevenue = document.querySelector("#summaryRevenue");
const summaryScore = document.querySelector("#summaryScore");
const endingInsight = document.querySelector("#endingInsight");
const endingScoreComparison = document.querySelector("#endingScoreComparison");
const keyDecisionsList = document.querySelector("#keyDecisionsList");
const endingAchievementsList = document.querySelector("#endingAchievementsList");

const MAX_WEEKS = 48;
const MIN_SUCCESS_WEEK = 30;

const founderStyles = {
  balanced: {
    label: "Balanced",
    growthMultiplier: 1,
    cashMultiplier: 1,
    stability: 1,
    qualityMultiplier: 1,
    risk: 1,
  },
  risk: {
    label: "Risk-taker",
    growthMultiplier: 1.35,
    cashMultiplier: 1.22,
    stability: 0.78,
    qualityMultiplier: 0.92,
    risk: 1.45,
  },
  conservative: {
    label: "Conservative",
    growthMultiplier: 0.78,
    cashMultiplier: 0.82,
    stability: 1.35,
    qualityMultiplier: 1.12,
    risk: 0.72,
  },
};

const goals = {
  profit: {
    label: "Profit",
    endingText: "Revenue and cash mattered most in this run.",
  },
  growth: {
    label: "Growth",
    endingText: "Users and growth rate mattered most in this run.",
  },
  stability: {
    label: "Stability",
    endingText: "Reputation, quality, and low burn mattered most in this run.",
  },
};

const startupTypes = {
  saas: {
    label: "SaaS",
    usersMultiplier: 0.68,
    lateUsersMultiplier: 0.9,
    revenueMultiplier: 1.08,
    burnMultiplier: 1.08,
    startingCash: 11200,
    startingBurn: 220,
    qualityDrift: 1,
    reputationDrift: 1,
    risk: 0.9,
    note: "Slow user growth, steadier recurring revenue.",
  },
  marketplace: {
    label: "Marketplace",
    usersMultiplier: 0.46,
    lateUsersMultiplier: 1.35,
    revenueMultiplier: 0.62,
    burnMultiplier: 1.28,
    startingCash: 12200,
    startingBurn: 260,
    qualityDrift: 0,
    reputationDrift: 0,
    risk: 1.12,
    note: "Very slow start, but high growth potential after liquidity builds.",
  },
  creator: {
    label: "Creator Tool",
    usersMultiplier: 1.02,
    lateUsersMultiplier: 0.8,
    revenueMultiplier: 0.78,
    burnMultiplier: 1.02,
    startingCash: 10200,
    startingBurn: 180,
    qualityDrift: -1,
    reputationDrift: -1,
    risk: 1.22,
    note: "Fast early growth with unstable retention.",
  },
  agency: {
    label: "Agency",
    usersMultiplier: 0.52,
    lateUsersMultiplier: 0.5,
    revenueMultiplier: 1.32,
    burnMultiplier: 0.9,
    startingCash: 9400,
    startingBurn: 140,
    qualityDrift: 2,
    reputationDrift: 2,
    risk: 0.72,
    note: "Quick revenue and safer runway, but limited scaling.",
  },
  ai: {
    label: "AI Product",
    usersMultiplier: 1.06,
    lateUsersMultiplier: 0.95,
    revenueMultiplier: 0.9,
    burnMultiplier: 1.55,
    startingCash: 13600,
    startingBurn: 360,
    qualityDrift: -1,
    reputationDrift: -2,
    risk: 1.45,
    note: "Hype-driven growth with higher burn and competition risk.",
  },
};

const teamRoles = {
  engineer: {
    label: "Engineer",
    icon: "EN",
    cost: 640,
    impact: "Product quality, stability",
    strengths: ["Product"],
  },
  designer: {
    label: "Designer",
    icon: "UX",
    cost: 470,
    impact: "UX, retention, reputation",
    strengths: ["Design"],
  },
  marketer: {
    label: "Marketer",
    icon: "MK",
    cost: 540,
    impact: "User growth, campaigns",
    strengths: ["Growth"],
  },
  sales: {
    label: "Sales",
    icon: "SL",
    cost: 560,
    impact: "Revenue, pipeline",
    strengths: ["Revenue"],
  },
  operations: {
    label: "Operations",
    icon: "OP",
    cost: 450,
    impact: "Burn efficiency, stability",
    strengths: ["Ops"],
  },
};

const productUpgrades = {
  onboarding: {
    label: "Improve Onboarding",
    cost: 460,
    workUnits: 6,
    impact: "+UX, +reputation, better retention",
    effects: { ux: 10, stability: 1, featureDepth: 0, technicalDebt: 2, quality: 4, reputation: 5, users: 8, growthRate: 1 },
  },
  bugs: {
    label: "Fix Bugs",
    cost: 390,
    workUnits: 5,
    impact: "+stability, +reputation, -debt",
    effects: { ux: 2, stability: 11, featureDepth: 0, technicalDebt: -8, quality: 5, reputation: 4, users: 2, growthRate: -1 },
  },
  coreFeature: {
    label: "Add Core Feature",
    cost: 760,
    workUnits: 10,
    impact: "+features, +growth, +debt",
    effects: { ux: 0, stability: -3, featureDepth: 13, technicalDebt: 9, quality: 4, reputation: 2, users: 14, growthRate: 5 },
  },
  uiux: {
    label: "Improve UI/UX",
    cost: 540,
    workUnits: 7,
    impact: "+UX, +retention, +trust",
    effects: { ux: 12, stability: 1, featureDepth: 1, technicalDebt: 3, quality: 5, reputation: 6, users: 6, growthRate: 1 },
  },
  performance: {
    label: "Optimize Performance",
    cost: 540,
    workUnits: 6,
    impact: "+stability, +quality",
    effects: { ux: 4, stability: 9, featureDepth: 0, technicalDebt: -2, quality: 7, reputation: 3, users: 4, growthRate: 1 },
  },
  debt: {
    label: "Reduce Technical Debt",
    cost: 620,
    workUnits: 8,
    impact: "-debt, +stability, slower growth",
    effects: { ux: 1, stability: 10, featureDepth: -1, technicalDebt: -14, quality: 5, reputation: 2, users: -2, growthRate: -3 },
  },
};

const pricingModels = {
  free: {
    label: "Free",
    basePrice: 0,
    conversion: 0,
    growth: 1.32,
    revenue: 0,
    expectation: 0.86,
    note: "Fast adoption, no direct revenue.",
  },
  freemium: {
    label: "Freemium",
    basePrice: 9,
    conversion: 0.08,
    growth: 1.12,
    revenue: 0.9,
    expectation: 1,
    note: "Growth with some upgrade conversion.",
  },
  subscription: {
    label: "Subscription",
    basePrice: 19,
    conversion: 0.16,
    growth: 0.82,
    revenue: 1.08,
    expectation: 1.08,
    note: "Steady recurring revenue, slower adoption.",
  },
  oneTime: {
    label: "One-time purchase",
    basePrice: 49,
    conversion: 0.12,
    growth: 0.9,
    revenue: 0.78,
    expectation: 1.02,
    note: "Quick cash, weaker recurring revenue.",
  },
  enterprise: {
    label: "Enterprise",
    basePrice: 999,
    conversion: 0.035,
    growth: 0.52,
    revenue: 1.45,
    expectation: 1.25,
    note: "High deal value, slow sales and high expectations.",
  },
};

const pricingBands = {
  free: { min: 0, max: 0, recommendedMax: 0 },
  freemium: { min: 5, max: 29, recommendedMax: 29 },
  subscription: { min: 9, max: 99, recommendedMax: 99 },
  oneTime: { min: 19, max: 299, recommendedMax: 299 },
  enterprise: { min: 500, max: 5000, recommendedMax: 5000 },
};

const segmentPriceTolerance = {
  students: 14,
  creators: 34,
  founders: 74,
  smallBusinesses: 89,
  developers: 44,
  enterprises: 1600,
};

const marketSegments = {
  students: {
    label: "Students",
    note: "High adoption potential, low pricing power.",
    icon: "ST",
    stats: { marketSize: 10, demand: 8, competition: 4, differentiation: -2, pricingPower: -14 },
    effects: { users: 12, revenue: -120, cash: 0, burnRate: 0, reputation: 1, productQuality: 0, growthRate: 3 },
  },
  creators: {
    label: "Creators",
    note: "Viral potential with medium pricing power.",
    icon: "CR",
    stats: { marketSize: 7, demand: 9, competition: 6, differentiation: 2, pricingPower: 0 },
    effects: { users: 10, revenue: 40, cash: 0, burnRate: 0, reputation: 2, productQuality: 0, growthRate: 3 },
  },
  founders: {
    label: "Founders",
    note: "Strong willingness to pay, competitive niche.",
    icon: "FD",
    stats: { marketSize: 0, demand: 7, competition: 10, differentiation: 3, pricingPower: 8 },
    effects: { users: 5, revenue: 220, cash: 0, burnRate: 0, reputation: 2, productQuality: 0, growthRate: 1 },
  },
  smallBusinesses: {
    label: "Small Businesses",
    note: "Steady revenue with slower adoption.",
    icon: "SB",
    stats: { marketSize: 5, demand: 4, competition: 5, differentiation: 0, pricingPower: 7 },
    effects: { users: 3, revenue: 270, cash: 0, burnRate: 15, reputation: 1, productQuality: 0, growthRate: -1 },
  },
  developers: {
    label: "Developers",
    note: "High expectations, strong word of mouth if quality is good.",
    icon: "DV",
    stats: { marketSize: 3, demand: 6, competition: 7, differentiation: 6, pricingPower: 5 },
    effects: { users: 6, revenue: 120, cash: 0, burnRate: 20, reputation: 0, productQuality: -1, growthRate: 1 },
  },
  enterprises: {
    label: "Enterprises",
    note: "High revenue potential, slow sales cycle, higher support cost.",
    icon: "EN",
    stats: { marketSize: -4, demand: 2, competition: 8, differentiation: 1, pricingPower: 18 },
    effects: { users: -2, revenue: 650, cash: 0, burnRate: 90, reputation: 1, productQuality: 0, growthRate: -3 },
  },
};

const marketPositionings = {
  cheapest: {
    label: "Cheapest option",
    note: "Adoption rises, revenue and trust get more fragile.",
    icon: "$",
    stats: { marketSize: 5, demand: 5, competition: 7, differentiation: -6, pricingPower: -12 },
    effects: { users: 14, revenue: -220, cash: 0, burnRate: 20, reputation: -3, productQuality: 0, growthRate: 4 },
  },
  premium: {
    label: "Premium product",
    note: "Higher revenue, slower adoption.",
    icon: "PR",
    stats: { marketSize: -3, demand: -1, competition: 2, differentiation: 4, pricingPower: 14 },
    effects: { users: -2, revenue: 470, cash: 0, burnRate: 25, reputation: 3, productQuality: 0, growthRate: -2 },
  },
  niche: {
    label: "Niche specialist",
    note: "Sharper trust and differentiation, smaller total market.",
    icon: "NS",
    stats: { marketSize: -8, demand: 3, competition: -6, differentiation: 14, pricingPower: 5 },
    effects: { users: 3, revenue: 150, cash: 0, burnRate: 0, reputation: 5, productQuality: 0, growthRate: 0 },
  },
  fastest: {
    label: "Fastest solution",
    note: "Speed wins impatient buyers, but support pressure rises.",
    icon: "FS",
    stats: { marketSize: 2, demand: 6, competition: 5, differentiation: 5, pricingPower: 1 },
    effects: { users: 9, revenue: 90, cash: 0, burnRate: 45, reputation: 0, productQuality: -1, growthRate: 3 },
  },
  community: {
    label: "Community-first brand",
    note: "Trust compounds, monetization is slower.",
    icon: "CM",
    stats: { marketSize: 1, demand: 4, competition: -2, differentiation: 8, pricingPower: -2 },
    effects: { users: 7, revenue: -40, cash: 0, burnRate: 20, reputation: 5, productQuality: 0, growthRate: 2 },
  },
};

const marketPricing = {
  free: {
    label: "Free",
    note: "Fast adoption, no monetization signal.",
    icon: "FR",
    stats: { demand: 9, competition: 4, differentiation: -4, pricingPower: -18 },
    effects: { users: 16, revenue: -320, cash: 0, burnRate: 30, reputation: 1, productQuality: 0, growthRate: 5 },
  },
  freemium: {
    label: "Freemium",
    note: "Balanced adoption with upgrade paths.",
    icon: "FM",
    stats: { demand: 5, competition: 3, differentiation: 0, pricingPower: -4 },
    effects: { users: 9, revenue: 120, cash: 0, burnRate: 15, reputation: 1, productQuality: 0, growthRate: 2 },
  },
  subscription: {
    label: "Subscription",
    note: "Recurring revenue with slower adoption.",
    icon: "SU",
    stats: { demand: 4, competition: 5, differentiation: -3, pricingPower: -8 },
    effects: { users: 8, revenue: 80, cash: 0, burnRate: 10, reputation: -1, productQuality: 0, growthRate: 2 },
  },
  oneTime: {
    label: "One-time purchase",
    note: "Quick revenue, weaker recurring compounding.",
    icon: "OT",
    stats: { demand: -2, competition: 1, differentiation: 3, pricingPower: 12 },
    effects: { users: -3, revenue: 430, cash: 0, burnRate: 15, reputation: 2, productQuality: 0, growthRate: -2 },
  },
  enterprise: {
    label: "Enterprise",
    note: "High deal value, slow sales and heavier support.",
    icon: "ET",
    stats: { demand: -5, competition: 5, differentiation: 2, pricingPower: 18 },
    effects: { users: -5, revenue: 780, cash: 0, burnRate: 95, reputation: 1, productQuality: 0, growthRate: -4 },
  },
};

const marketActions = {
  interviews: {
    label: "Run user interviews",
    cost: 240,
    impact: "+differentiation, +reputation, slower growth this week",
    market: { demand: 3, differentiation: 7, pricingPower: 1, competitorPressure: -2 },
    effects: { users: -1, revenue: 0, cash: 0, burnRate: 0, reputation: 4, productQuality: 1, growthRate: -1 },
  },
  competitors: {
    label: "Study competitors",
    cost: 170,
    impact: "-competitor pressure, +positioning clarity",
    market: { competition: -2, differentiation: 5, competitorPressure: -8 },
    effects: { users: 0, revenue: 0, cash: 0, burnRate: 0, reputation: 2, productQuality: 0, growthRate: 0 },
  },
  pricing: {
    label: "Test pricing",
    cost: 180,
    impact: "+pricing power, possible adoption friction",
    market: { demand: -1, pricingPower: 7, differentiation: 2, competitorPressure: 1 },
    effects: { users: -2, revenue: 360, cash: 0, burnRate: 0, reputation: -1, productQuality: 0, growthRate: -1 },
  },
  nicheCampaign: {
    label: "Launch niche campaign",
    cost: 480,
    impact: "+growth if your differentiation is high",
    market: { demand: 4, differentiation: 3, competitorPressure: 4 },
    effects: { users: 18, revenue: 140, cash: 0, burnRate: 20, reputation: 2, productQuality: 0, growthRate: 4 },
  },
  community: {
    label: "Build community",
    cost: 340,
    impact: "+reputation, +long-term growth stability",
    market: { demand: 2, differentiation: 5, competitorPressure: -3 },
    effects: { users: 7, revenue: 0, cash: 0, burnRate: 20, reputation: 6, productQuality: 0, growthRate: 2 },
  },
};

const achievementStorageKey = "launchlab_achievements";
const onboardingStorageKey = "launchlab_onboarding_seen";
const currentRunStorageKey = "launchlab_current_run";
const runHistoryStorageKey = "launchlab_run_history";
const achievementDefinitions = [
  { id: "first_100_users", title: "First 100 Users", description: "Reach 100 users in a run.", category: "Growth", rarity: "Common", reward: "Growth file opened." },
  { id: "first_1000_users", title: "First 1,000 Users", description: "Reach 1,000 users in a run.", category: "Growth", rarity: "Rare", reward: "Traction credibility unlocked." },
  { id: "growth_machine", title: "Growth Machine", description: "Hit 25% growth or better.", category: "Growth", rarity: "Epic", reward: "Momentum badge earned." },
  { id: "viral_moment", title: "Viral Moment", description: "Gain at least 100 users in one week.", category: "Growth", rarity: "Epic", reward: "Viral log stamped." },
  { id: "first_dollar", title: "First Dollar", description: "Generate any revenue.", category: "Revenue", rarity: "Common", reward: "Monetization file opened." },
  { id: "profitable_week", title: "Profitable Week", description: "Finish a week with revenue greater than burn.", category: "Revenue", rarity: "Rare", reward: "Sustainability signal unlocked." },
  { id: "one_k_revenue", title: "$1K Revenue", description: "Reach $1,000 total revenue.", category: "Revenue", rarity: "Rare", reward: "Revenue credibility unlocked." },
  { id: "revenue_engine", title: "Revenue Engine", description: "Reach $10,000 total revenue.", category: "Revenue", rarity: "Epic", reward: "Business model badge earned." },
  { id: "survive_5", title: "Survive 5 Weeks", description: "Survive through week 5.", category: "Survival", rarity: "Common", reward: "Operator patience unlocked." },
  { id: "survive_10", title: "Survive 10 Weeks", description: "Survive through week 10.", category: "Survival", rarity: "Rare", reward: "Founder endurance badge earned." },
  { id: "runway_master", title: "Runway Master", description: "Keep at least 16 weeks of runway after week 6.", category: "Survival", rarity: "Epic", reward: "Cash discipline stamped." },
  { id: "ship_first_upgrade", title: "Ship First Upgrade", description: "Ship any product upgrade.", category: "Product", rarity: "Common", reward: "Product lab opened." },
  { id: "product_market_fit", title: "Product-Market Fit", description: "Reach Strong Fit or Category Leader.", category: "Product", rarity: "Epic", reward: "Retention loop discovered." },
  { id: "debt_crusher", title: "Debt Crusher", description: "Reduce technical debt to 10 or below.", category: "Product", rarity: "Rare", reward: "Stable release cadence unlocked." },
  { id: "first_hire", title: "First Hire", description: "Grow the team beyond the founding engineer.", category: "Team", rarity: "Common", reward: "Hiring file opened." },
  { id: "balanced_team", title: "Balanced Team", description: "Have at least one person in three different roles.", category: "Team", rarity: "Rare", reward: "Cross-functional team badge earned." },
  { id: "high_morale_team", title: "High Morale Team", description: "Reach 90 morale with at least three team members.", category: "Team", rarity: "Epic", reward: "Culture advantage unlocked." },
  { id: "niche_specialist", title: "Niche Specialist", description: "Choose niche specialist positioning with 65+ differentiation.", category: "Market", rarity: "Common", reward: "Sharper wedge stamped." },
  { id: "strong_market_fit", title: "Strong Market Fit", description: "Reach Strong Fit.", category: "Market", rarity: "Rare", reward: "Market pull badge earned." },
  { id: "category_leader", title: "Category Leader", description: "Reach Category Leader market status.", category: "Market", rarity: "Legendary", reward: "Category command unlocked." },
  { id: "ran_out_of_cash", title: "Ran Out of Cash", description: "Fail because cash reached zero.", category: "Failure", rarity: "Common", reward: "Failure report archived." },
  { id: "reputation_collapse", title: "Reputation Collapse", description: "Fail because reputation reached zero.", category: "Failure", rarity: "Rare", reward: "Trust lesson archived." },
  { id: "traction_lost", title: "Traction Lost", description: "Fail because users reached zero.", category: "Failure", rarity: "Rare", reward: "Traction lesson archived." },
  { id: "bootstrapped_hero", title: "Bootstrapped Hero", description: "Survive 20 weeks with positive cash and no outside lifeline.", category: "Special", rarity: "Epic", reward: "Independence badge earned." },
  { id: "unicorn_architect", title: "Unicorn Architect", description: "Reach the Unicorn ending.", category: "Special", rarity: "Legendary", reward: "Legendary founder rank progress." },
  { id: "comeback_story", title: "Comeback Story", description: "Recover from 4 or fewer runway weeks to 10+ weeks.", category: "Special", rarity: "Epic", reward: "Resilience report stamped." },
];

const founderRanks = [
  { title: "Rookie Founder", percent: 0 },
  { title: "Scrappy Builder", percent: 12 },
  { title: "Rising Operator", percent: 28 },
  { title: "Startup Strategist", percent: 48 },
  { title: "Elite Founder", percent: 68 },
  { title: "Unicorn Architect", percent: 88 },
];

const scenarios = [
  {
    type: "scenario",
    title: "You have one focused week. Where does the team spend it?",
    text: "Momentum is fragile. A strong call can create a flywheel, but ignoring the wrong constraint can compound quickly.",
    decisions: [
      {
        label: "Improve the core product",
        hint: "Quality rises, churn falls, but acquisition slows.",
        effects: { productQuality: 11, users: 6, cash: -650, burnRate: 60, growthRate: -1, reputation: 4 },
        insight: "You invested in retention before scale. Growth cooled for the week, but the product became easier to trust.",
      },
      {
        label: "Push a noisy marketing sprint",
        hint: "More users arrive, but weak onboarding can leak trust.",
        effects: { users: 38, cash: -1150, burnRate: 130, growthRate: 9, reputation: -4, productQuality: -2 },
        insight: "You bought attention. It worked, but some new users hit rough edges because quality did not rise with demand.",
      },
      {
        label: "Push for paid annual plans",
        hint: "Cash runway improves, but growth becomes more selective.",
        effects: { cash: 1800, revenue: 650, burnRate: -35, reputation: -2, growthRate: -1, users: 4 },
        insight: "Revenue discipline bought time without outside capital. Growth cooled slightly, but the business became more sustainable.",
      },
    ],
  },
  {
    type: "scenario",
    title: "Early customers ask for features outside your niche.",
    text: "The requests sound lucrative, but broadening too soon can make the product harder to explain.",
    decisions: [
      {
        label: "Stay narrow and say no",
        hint: "Sharper positioning, slower short-term revenue.",
        effects: { reputation: 7, productQuality: 8, users: 7, revenue: 180, growthRate: 1, cash: -280 },
        insight: "Focus made the product easier to recommend. You left some money on the table to protect clarity.",
      },
      {
        label: "Build the custom feature",
        hint: "Revenue jumps, complexity and burn rise.",
        effects: { revenue: 980, cash: 360, burnRate: 170, productQuality: -3, users: 5, growthRate: -2 },
        insight: "You monetized demand, but custom work pulled attention away from the broader product.",
      },
      {
        label: "Turn requests into a paid beta",
        hint: "Balanced monetization with some delivery risk.",
        effects: { revenue: 620, cash: 120, burnRate: 90, productQuality: 4, reputation: 3, users: 12 },
        insight: "You converted uncertainty into a paid learning loop. It is slower than pure services, but more reusable.",
      },
    ],
  },
  {
    type: "scenario",
    title: "Your activation rate is stuck.",
    text: "People sign up, poke around, and leave before they see the product's value.",
    decisions: [
      {
        label: "Rewrite onboarding around one job",
        hint: "Quality and trust rise, acquisition pauses.",
        effects: { productQuality: 10, reputation: 7, growthRate: -2, cash: -520, users: 3 },
        insight: "You reduced confusion. The top of funnel slowed, but more users now understand why the product exists.",
      },
      {
        label: "Add founder-led concierge setup",
        hint: "Great learning, higher burn.",
        effects: { users: 16, revenue: 340, cash: -420, burnRate: 140, reputation: 8, productQuality: 3 },
        insight: "Hands-on onboarding improved trust and uncovered product gaps, but it made the company more expensive to run.",
      },
      {
        label: "Discount annual plans",
        hint: "Quick cash, possible reputation damage.",
        effects: { revenue: 780, cash: 520, users: 10, reputation: -6, growthRate: 3 },
        insight: "Discounting created cash, but it trained some customers to see price as the main reason to buy.",
      },
    ],
  },
  {
    type: "scenario",
    title: "The team is tired and your roadmap is overloaded.",
    text: "Every choice has an opportunity cost. You can buy speed, buy focus, or buy breathing room.",
    decisions: [
      {
        label: "Cut the roadmap in half",
        hint: "Lower burn and better quality, less hype.",
        effects: { burnRate: -180, productQuality: 8, reputation: 4, growthRate: -3, users: -2 },
        insight: "You chose focus over scope. The product got calmer, and the company became less fragile.",
      },
      {
        label: "Hire contractors for speed",
        hint: "Ship faster, spend faster.",
        effects: { productQuality: 5, users: 20, cash: -1600, burnRate: 260, growthRate: 7, reputation: -1 },
        insight: "You increased output, but the added burn means the next few weeks need stronger revenue or tighter focus.",
      },
      {
        label: "Pause feature work for sales",
        hint: "Revenue focus, product debt grows.",
        effects: { revenue: 900, cash: 640, users: 8, productQuality: -4, growthRate: 1, reputation: -2 },
        insight: "Sales brought oxygen into the business, but product debt started to build behind the scenes.",
      },
    ],
  },
  {
    type: "scenario",
    title: "A larger company wants a partnership.",
    text: "The logo would impress the market. The integration would consume a lot of your tiny team's attention.",
    decisions: [
      {
        label: "Take the partnership",
        hint: "Big distribution, big distraction.",
        effects: { users: 64, revenue: 1100, cash: -900, burnRate: 190, growthRate: 10, productQuality: -5 },
        insight: "The partnership opened distribution, but the product roadmap bent around someone else's priorities.",
      },
      {
        label: "Negotiate a narrow pilot",
        hint: "Smaller upside, cleaner learning.",
        effects: { users: 26, revenue: 720, reputation: 5, cash: -260, growthRate: 5, productQuality: 2 },
        insight: "You kept leverage by shrinking the ask. The upside is lower, but the company stayed coherent.",
      },
      {
        label: "Decline and serve current users",
        hint: "Protect quality, miss a visibility spike.",
        effects: { productQuality: 9, reputation: 8, users: 6, revenue: 260, growthRate: -1 },
        insight: "You defended product quality and trust. It is less glamorous, but current users became more likely to stay.",
      },
    ],
  },
];

const randomEvents = [
  {
    type: "event",
    title: "Users love your new feature.",
    text: "One product is finally clicking. Users are sharing workflows and asking for more depth.",
    immediate: { users: 18, revenue: 260, reputation: 5, growthRate: 3 },
    decisions: [
      {
        label: "Double down on the product",
        hint: "More depth, more debt.",
        effects: { users: 16, revenue: 520, cash: -420, productQuality: 5, growthRate: 4 },
        insight: "You leaned into the signal. The product got stronger, but the roadmap became heavier.",
      },
      {
        label: "Package it as a paid tier",
        hint: "Revenue up, adoption slows.",
        effects: { revenue: 980, cash: 520, users: -2, reputation: -1, growthRate: -1 },
        insight: "You captured willingness to pay. Some users slowed down, but revenue quality improved.",
      },
      {
        label: "Keep polishing retention",
        hint: "Trust and quality over hype.",
        effects: { productQuality: 7, reputation: 5, cash: -220, growthRate: -1 },
        insight: "You made the product stickier instead of louder. That usually compounds quietly.",
      },
    ],
  },
  {
    type: "event",
    title: "Pricing backlash hits your product.",
    text: "Users like the product, but the price now feels ahead of the value they experience.",
    immediate: { users: -8, reputation: -7, growthRate: -3 },
    decisions: [
      {
        label: "Roll back the price increase",
        hint: "Trust recovery, revenue hit.",
        effects: { reputation: 6, users: 8, revenue: -380, growthRate: 2 },
        insight: "You protected trust by admitting the price/value mismatch.",
      },
      {
        label: "Add value before changing price",
        hint: "Cash down, quality up.",
        effects: { productQuality: 8, cash: -560, reputation: 4, growthRate: -1 },
        insight: "You chose to earn the price with a better product instead of arguing about it.",
      },
      {
        label: "Hold the line",
        hint: "Revenue signal, churn risk.",
        effects: { revenue: 620, users: -10, reputation: -4, growthRate: -2 },
        insight: "The price filtered for serious buyers, but the broader market trust took damage.",
      },
    ],
  },
  {
    type: "event",
    title: "Low conversion rate worries the team.",
    text: "People try the product, but too few become paying customers.",
    immediate: { revenue: -240, growthRate: -2 },
    decisions: [
      {
        label: "Improve the paywall moment",
        hint: "UX and revenue improve.",
        effects: { revenue: 520, productQuality: 4, reputation: 2, cash: -300 },
        insight: "A clearer value moment made pricing easier to accept.",
      },
      {
        label: "Lower the entry price",
        hint: "Growth up, ARPU down.",
        effects: { users: 12, revenue: -120, reputation: 2, growthRate: 3 },
        insight: "You reduced friction, but each user is worth less until expansion improves.",
      },
      {
        label: "Talk to lost buyers",
        hint: "Learning over instant revenue.",
        effects: { cash: -160, reputation: 3, productQuality: 3, growthRate: -1 },
        insight: "The team learned why buyers hesitate, which improves future product and pricing calls.",
      },
    ],
  },
  {
    type: "event",
    title: "High churn due to product bugs.",
    text: "A product is getting usage, but instability is making customers leave faster than you can replace them.",
    immediate: { users: -14, revenue: -260, reputation: -8, productQuality: -4 },
    decisions: [
      {
        label: "Freeze new features and stabilize",
        hint: "Quality up, growth pauses.",
        effects: { productQuality: 10, reputation: 6, cash: -360, growthRate: -3 },
        insight: "You stopped the leak before pouring more users into a broken funnel.",
      },
      {
        label: "Compensate paying users",
        hint: "Cash down, trust recovery.",
        effects: { reputation: 8, revenue: -420, cash: -420, users: 5 },
        insight: "You bought patience from customers while the product recovered.",
      },
      {
        label: "Patch only the top complaint",
        hint: "Cheaper, partial recovery.",
        effects: { productQuality: 5, reputation: 2, cash: -120, users: -3 },
        insight: "The patch helped, but deeper stability issues are still waiting.",
      },
    ],
  },
  {
    type: "event",
    title: "User churn spikes after a weak retention week.",
    text: "New signups are not sticking. The numbers look fine on the surface, but returning usage is slipping.",
    immediate: { users: -18, revenue: -220, reputation: -5, growthRate: -4 },
    decisions: [
      {
        label: "Interview churned users",
        hint: "Learning up, growth pauses.",
        effects: { productQuality: 5, reputation: 5, cash: -260, growthRate: -2, users: 2 },
        insight: "You traded vanity growth for real retention learning. It slowed the week, but clarified the product gaps.",
      },
      {
        label: "Launch a win-back offer",
        hint: "Revenue recovery, weaker pricing signal.",
        effects: { users: 12, revenue: 420, cash: -360, reputation: 1, growthRate: 1 },
        insight: "Discounting brought some users back, but it did not fully solve why they left.",
      },
      {
        label: "Ignore churn and keep acquiring",
        hint: "Growth optics, trust risk.",
        effects: { users: 18, cash: -720, reputation: -6, productQuality: -3, growthRate: 4 },
        insight: "The top of funnel looked better, but retention debt kept growing underneath it.",
      },
    ],
  },
  {
    type: "event",
    title: "A slow growth period shakes confidence.",
    text: "The market is not rejecting you, but the easy users are gone and every next customer takes more work.",
    immediate: { users: -6, revenue: -120, growthRate: -6 },
    decisions: [
      {
        label: "Narrow the segment",
        hint: "Smaller market, sharper demand.",
        effects: { users: 4, revenue: 120, reputation: 4, growthRate: 1 },
        insight: "Narrowing made the story easier to believe. Growth stayed modest, but quality improved.",
      },
      {
        label: "Add a referral push",
        hint: "Cheap growth if users are happy.",
        effects: { users: 16, cash: -380, reputation: -1, growthRate: 3 },
        insight: "The referral push created motion, but it only works sustainably if the product keeps earning it.",
      },
      {
        label: "Cut experiments to save runway",
        hint: "Cash discipline, less upside.",
        effects: { cash: 220, burnRate: -90, users: -3, growthRate: -2, reputation: 1 },
        insight: "You protected survival. The company became calmer, but the growth ceiling moved down this week.",
      },
    ],
  },
  {
    type: "event",
    title: "Support load is eating the roadmap.",
    text: "More users means more questions, edge cases, and bugs. The team is spending less time on forward motion.",
    immediate: { burnRate: 80, productQuality: -3, growthRate: -2 },
    decisions: [
      {
        label: "Document the common workflows",
        hint: "Lower support pressure, small cost.",
        effects: { cash: -240, burnRate: -60, reputation: 3, productQuality: 3, users: 2 },
        insight: "Documentation reduced repeated support drag and gave the product a calmer operating rhythm.",
      },
      {
        label: "Hire temporary support",
        hint: "Trust recovery, burn pressure.",
        effects: { cash: -520, burnRate: 120, reputation: 6, productQuality: 1, growthRate: 1 },
        insight: "Users felt heard, but the company bought that trust with runway.",
      },
      {
        label: "Let response times slip",
        hint: "Preserve focus, trust drops.",
        effects: { productQuality: 3, users: -7, reputation: -7, growthRate: -1 },
        insight: "The roadmap moved, but users noticed the silence. Trust got more expensive to rebuild.",
      },
    ],
  },
  {
    type: "event",
    title: "Competitor launched a similar product.",
    text: "Their announcement is polished and the market is suddenly comparing you side by side.",
    immediate: { users: -8, reputation: -4, growthRate: -2 },
    decisions: [
      {
        label: "Differentiate with a niche campaign",
        hint: "Win clarity instead of shouting louder.",
        effects: { users: 22, cash: -720, reputation: 5, growthRate: 5, productQuality: 2 },
        insight: "You sharpened the story. The competitor still exists, but customers now understand who you serve best.",
      },
      {
        label: "Race them feature for feature",
        hint: "Competitive, expensive, and risky.",
        effects: { users: 28, cash: -1350, burnRate: 210, growthRate: 8, productQuality: -6, reputation: -3 },
        insight: "The race created momentum, but chasing a competitor pulled you away from your own strongest users.",
      },
      {
        label: "Publish proof from real customers",
        hint: "Trust over noise.",
        effects: { reputation: 9, users: 14, revenue: 420, cash: -180, growthRate: 3 },
        insight: "Customer proof turned comparison into credibility. You grew more slowly, but with stronger trust.",
      },
    ],
  },
  {
    type: "event",
    title: "Your product went viral overnight.",
    text: "Signups are pouring in. The opportunity is real, and so is the operational strain.",
    immediate: { users: 75, growthRate: 14, burnRate: 120, reputation: -2 },
    decisions: [
      {
        label: "Scale infrastructure immediately",
        hint: "Protect trust with a cash hit.",
        effects: { cash: -1500, burnRate: 180, reputation: 7, productQuality: 5, growthRate: 2 },
        insight: "You spent to keep the viral moment from breaking the product. Cash fell, but trust held.",
      },
      {
        label: "Capture emails before scaling",
        hint: "Cheap validation, some frustrated users.",
        effects: { users: 36, cash: -120, reputation: -5, growthRate: 7, revenue: 260 },
        insight: "You conserved cash, but some people bounced while waiting. Viral attention is perishable.",
      },
      {
        label: "Launch a paid fast-track",
        hint: "Monetize demand, risk backlash.",
        effects: { revenue: 1450, cash: 1080, users: 20, reputation: -7, growthRate: 3 },
        insight: "You turned urgency into revenue. It worked financially, but some users saw the move as opportunistic.",
      },
    ],
  },
  {
    type: "event",
    title: "A server crash takes the app down.",
    text: "The outage is short, but public enough that your next response matters.",
    immediate: { users: -14, reputation: -10, revenue: -160, growthRate: -4 },
    decisions: [
      {
        label: "Post a transparent incident report",
        hint: "Trust recovery with little direct growth.",
        effects: { reputation: 10, productQuality: 3, users: 4, cash: -80, growthRate: 1 },
        insight: "Transparency did not erase the outage, but it told users you can be trusted when things break.",
      },
      {
        label: "Overbuild reliability this week",
        hint: "Quality up, speed down, cash down.",
        effects: { productQuality: 12, cash: -920, burnRate: 70, reputation: 6, growthRate: -3 },
        insight: "You chose resilience. The roadmap slowed, but future growth is less likely to collapse under load.",
      },
      {
        label: "Offer credits to affected accounts",
        hint: "Goodwill at a revenue cost.",
        effects: { reputation: 8, revenue: -360, cash: -360, users: 8, growthRate: 2 },
        insight: "Credits protected goodwill. The immediate revenue pain bought patience from your existing customers.",
      },
    ],
  },
  {
    type: "event",
    title: "User backlash starts spreading on social media.",
    text: "A loud thread claims the product overpromises. Some criticism is fair, some is theater.",
    immediate: { reputation: -12, users: -10, growthRate: -3 },
    decisions: [
      {
        label: "Publicly own the product gaps",
        hint: "Trust recovery, slower sales.",
        effects: { reputation: 12, productQuality: 5, growthRate: -2, users: 2 },
        insight: "Owning the gaps made the company feel honest. It slowed hype, but reduced long-term trust damage.",
      },
      {
        label: "Ship the most requested fix",
        hint: "Quality signal with delivery pressure.",
        effects: { productQuality: 10, reputation: 7, cash: -720, burnRate: 90, users: 9 },
        insight: "A concrete fix worked better than a statement alone. It cost focus, but restored confidence.",
      },
      {
        label: "Counter with aggressive ads",
        hint: "Attention rises, trust may sink.",
        effects: { users: 30, cash: -1100, reputation: -7, growthRate: 7, productQuality: -2 },
        insight: "You outshouted the backlash for a moment, but trust got weaker because the product concern remained.",
      },
    ],
  },
  {
    type: "event",
    title: "Your lead engineer is burned out.",
    text: "The product is moving, but the team is carrying too much hidden stress.",
    immediate: { productQuality: -3, reputation: -2, growthRate: -1 },
    decisions: [
      {
        label: "Pause feature work for recovery",
        hint: "Morale stabilizes, growth slows.",
        effects: { productQuality: 4, reputation: 3, growthRate: -3, cash: -180 },
        insight: "You protected the team from compounding fatigue. The roadmap slowed, but execution risk fell.",
      },
      {
        label: "Hire engineering support",
        hint: "Quality capacity improves, burn rises.",
        effects: { productQuality: 8, burnRate: 220, cash: -620, reputation: 2 },
        insight: "You bought product capacity with runway. The company can ship better, but burn is heavier.",
      },
      {
        label: "Push through the sprint",
        hint: "Short-term output, morale risk.",
        effects: { users: 10, productQuality: 2, reputation: -6, growthRate: 3 },
        insight: "The sprint created motion, but the team absorbed the cost. Morale may suffer later.",
      },
    ],
  },
  {
    type: "event",
    title: "Marketing wants more budget.",
    text: "The growth team sees a channel opening, but it will pressure runway.",
    immediate: { cash: -180, growthRate: 1 },
    decisions: [
      {
        label: "Approve a focused campaign",
        hint: "Growth potential with runway cost.",
        effects: { users: 28, cash: -980, burnRate: 80, growthRate: 7, reputation: -1 },
        insight: "You gave growth a controlled bet. It can work, but only if conversion follows.",
      },
      {
        label: "Ask for organic experiments",
        hint: "Slower, cheaper learning.",
        effects: { users: 10, cash: -160, growthRate: 2, reputation: 2 },
        insight: "You preserved runway and kept the team experimenting, but the upside is smaller.",
      },
      {
        label: "Redirect budget to sales",
        hint: "Less reach, more revenue discipline.",
        effects: { revenue: 760, users: 5, cash: 260, growthRate: -1 },
        insight: "You chose revenue over reach. It is less flashy, but the runway story improves.",
      },
    ],
  },
  {
    type: "event",
    title: "Designer suggests a UI overhaul.",
    text: "The current interface works, but users keep stumbling before the value moment.",
    immediate: { reputation: -1 },
    decisions: [
      {
        label: "Run a fast UX overhaul",
        hint: "Retention and trust improve, shipping slows.",
        effects: { productQuality: 9, reputation: 7, cash: -520, growthRate: -2 },
        insight: "The UX push made the product easier to adopt. Acquisition slowed while the team focused inward.",
      },
      {
        label: "Test only the onboarding screen",
        hint: "Smaller scope, useful signal.",
        effects: { productQuality: 4, reputation: 3, cash: -180, users: 5 },
        insight: "You reduced risk by narrowing the experiment. The improvement is modest but clean.",
      },
      {
        label: "Keep the roadmap unchanged",
        hint: "Saves time, ignores friction.",
        effects: { users: 8, productQuality: -3, reputation: -4, growthRate: 2 },
        insight: "You kept shipping, but unresolved UX friction continued to tax retention.",
      },
    ],
  },
  {
    type: "event",
    title: "Users are confused by onboarding.",
    text: "Support tickets show people understand the promise, but not the first steps.",
    immediate: { reputation: -4, users: -5, growthRate: -2 },
    decisions: [
      {
        label: "Rewrite onboarding this week",
        hint: "UX and trust improve, feature work pauses.",
        effects: { productQuality: 8, reputation: 8, cash: -320, growthRate: -2, users: 6 },
        insight: "You removed friction before scaling harder. Adoption should be healthier next cycle.",
      },
      {
        label: "Add tooltip guidance",
        hint: "Small UX patch, low cost.",
        effects: { productQuality: 4, reputation: 3, cash: -120, users: 4 },
        insight: "A focused UX patch reduced confusion without derailing the roadmap.",
      },
      {
        label: "Keep pushing acquisition",
        hint: "Growth now, retention risk later.",
        effects: { users: 22, reputation: -5, productQuality: -2, growthRate: 5 },
        insight: "You filled the funnel, but unresolved onboarding friction kept leaking trust.",
      },
    ],
  },
  {
    type: "event",
    title: "A bug caused churn.",
    text: "A reliability issue hit a few active users and some are publicly annoyed.",
    immediate: { users: -10, reputation: -8, productQuality: -5 },
    decisions: [
      {
        label: "Declare a bug bash",
        hint: "Stability improves, growth slows.",
        effects: { productQuality: 10, reputation: 6, cash: -260, growthRate: -2 },
        insight: "You chose reliability over speed. It is less exciting, but reduces crisis risk.",
      },
      {
        label: "Compensate affected users",
        hint: "Trust recovery at revenue cost.",
        effects: { reputation: 8, revenue: -320, cash: -320, users: 4 },
        insight: "Compensation bought patience while the product recovered.",
      },
      {
        label: "Patch quietly",
        hint: "Cheap, but trust recovery is weaker.",
        effects: { productQuality: 5, reputation: 1, cash: -80, users: -2 },
        insight: "The bug improved, but the trust story stayed thin because users saw little accountability.",
      },
    ],
  },
  {
    type: "event",
    title: "Power users want an advanced feature.",
    text: "Your best users are asking for depth, but it may add complexity for everyone else.",
    immediate: { growthRate: 1 },
    decisions: [
      {
        label: "Build the advanced feature",
        hint: "Depth and revenue potential up, debt rises.",
        effects: { productQuality: 5, users: 12, revenue: 720, cash: -520, growthRate: 5 },
        insight: "You served power users and created expansion potential, but complexity increased.",
      },
      {
        label: "Prototype it with five users",
        hint: "Slower, cleaner learning.",
        effects: { productQuality: 3, reputation: 3, cash: -180, users: 5, growthRate: 1 },
        insight: "A small prototype protected the core product while testing demand.",
      },
      {
        label: "Say no and polish core flows",
        hint: "Focus and trust up, less expansion.",
        effects: { productQuality: 7, reputation: 5, users: 2, growthRate: -1 },
        insight: "You protected simplicity. The product became easier to use, but less powerful.",
      },
    ],
  },
  {
    type: "event",
    title: "Technical debt is slowing releases.",
    text: "Every small change now takes longer than it should. The team can feel it.",
    immediate: { growthRate: -3, productQuality: -3 },
    decisions: [
      {
        label: "Spend the week reducing debt",
        hint: "Stability up, short-term growth down.",
        effects: { productQuality: 8, reputation: 3, cash: -420, growthRate: -3 },
        insight: "You paid down hidden product drag. Growth slowed, but future releases should be safer.",
      },
      {
        label: "Refactor only the riskiest area",
        hint: "Moderate cost, targeted stability.",
        effects: { productQuality: 5, reputation: 2, cash: -220, growthRate: -1 },
        insight: "You narrowed the refactor to protect runway while reducing the biggest risk.",
      },
      {
        label: "Ignore debt and ship",
        hint: "Momentum now, crisis risk later.",
        effects: { users: 14, productQuality: -6, reputation: -4, growthRate: 4 },
        insight: "You kept moving, but the product foundation got more brittle.",
      },
    ],
  },
];

const marketEvents = [
  {
    type: "event",
    title: "A competitor copies your strongest feature.",
    text: "The market is starting to notice your traction, and a rival is trying to collapse your differentiation.",
    immediate: { users: -6, reputation: -3, growthRate: -2 },
    decisions: [
      {
        label: "Double down on your niche wedge",
        hint: "Differentiation and trust rise, market size narrows.",
        effects: { users: 8, revenue: 180, cash: -260, reputation: 6, productQuality: 2, growthRate: 1 },
        insight: "You made the comparison harder by serving a sharper segment instead of matching every feature.",
      },
      {
        label: "Start a pricing war",
        hint: "Users rise, revenue and reputation take pressure.",
        effects: { users: 28, revenue: -420, cash: -360, reputation: -6, growthRate: 6 },
        insight: "Lower prices attracted attention, but it trained the market to compare you on cost.",
      },
      {
        label: "Publish customer proof",
        hint: "Credibility improves with moderate growth.",
        effects: { users: 12, revenue: 320, cash: -120, reputation: 8, growthRate: 2 },
        insight: "Proof gave buyers a reason to trust your product beyond the feature checklist.",
      },
    ],
  },
  {
    type: "event",
    title: "Customers say your positioning is unclear.",
    text: "People like pieces of the product, but they struggle to explain why it is different.",
    immediate: { reputation: -4, growthRate: -2 },
    decisions: [
      {
        label: "Rewrite the homepage around one buyer",
        hint: "Sharper message, smaller audience.",
        effects: { users: 6, cash: -220, reputation: 7, productQuality: 1, growthRate: 1 },
        insight: "A clearer story reduced confusion. The market got narrower, but more believable.",
      },
      {
        label: "Survey the broad audience",
        hint: "More signal, slower momentum.",
        effects: { users: -2, cash: -160, reputation: 4, productQuality: 2, growthRate: -1 },
        insight: "Research slowed the week, but gave you better language for buyer pain.",
      },
      {
        label: "Keep all segments in the message",
        hint: "Maximum reach, weak clarity.",
        effects: { users: 14, revenue: 120, reputation: -5, growthRate: 3 },
        insight: "The broader message created reach, but buyers still struggled to remember the wedge.",
      },
    ],
  },
  {
    type: "event",
    title: "A niche community starts talking about your product.",
    text: "The conversation is small but intense. If you handle it well, it could become a durable channel.",
    immediate: { users: 18, reputation: 4, growthRate: 4 },
    decisions: [
      {
        label: "Host a founder AMA",
        hint: "Trust and community rise, time cost.",
        effects: { users: 14, cash: -120, reputation: 7, growthRate: 2 },
        insight: "Direct community contact turned attention into trust.",
      },
      {
        label: "Offer a community-only plan",
        hint: "Revenue signal, pricing risk.",
        effects: { users: 10, revenue: 650, cash: 240, reputation: 2, growthRate: 1 },
        insight: "You converted community energy into revenue without fully abandoning the broader market.",
      },
      {
        label: "Ignore it and keep shipping",
        hint: "Product focus, missed distribution.",
        effects: { productQuality: 5, users: -4, reputation: -2, growthRate: -1 },
        insight: "The product improved, but the market conversation cooled while you were heads down.",
      },
    ],
  },
  {
    type: "event",
    title: "A bigger company undercuts your pricing.",
    text: "Buyers are asking why they should pay you when a larger brand is cheaper.",
    immediate: { revenue: -240, reputation: -3, growthRate: -2 },
    decisions: [
      {
        label: "Move upmarket with premium proof",
        hint: "Revenue power rises, adoption slows.",
        effects: { users: -3, revenue: 760, cash: -180, reputation: 5, growthRate: -1 },
        insight: "You stopped competing on price and reframed the product around value.",
      },
      {
        label: "Bundle services around the product",
        hint: "Revenue and support load both rise.",
        effects: { users: 5, revenue: 820, cash: 220, burnRate: 120, reputation: 3 },
        insight: "Services helped justify price, but support complexity increased.",
      },
      {
        label: "Match their discount",
        hint: "Defensive growth, weaker pricing power.",
        effects: { users: 20, revenue: -300, cash: -220, reputation: -3, growthRate: 4 },
        insight: "Discounting protected some growth, but weakened your pricing story.",
      },
    ],
  },
  {
    type: "event",
    title: "A new regulation changes buyer behavior.",
    text: "The market is recalibrating. Some buyers freeze, while others urgently need safer tooling.",
    immediate: { users: -4, growthRate: -2, burnRate: 35 },
    decisions: [
      {
        label: "Position around compliance readiness",
        hint: "Trust and revenue rise, delivery gets heavier.",
        effects: { users: 4, revenue: 720, cash: -300, burnRate: 80, reputation: 7, growthRate: 1 },
        insight: "You turned regulatory pressure into a reason to buy, but support expectations rose.",
      },
      {
        label: "Wait for the market to settle",
        hint: "Protect runway, miss urgent demand.",
        effects: { cash: 120, burnRate: -35, reputation: 1, users: -3, growthRate: -1 },
        insight: "You conserved focus during uncertainty, but urgent buyers moved elsewhere.",
      },
      {
        label: "Run expert interviews",
        hint: "Better market read, short-term slowdown.",
        effects: { users: -1, cash: -180, reputation: 4, productQuality: 2, growthRate: -1 },
        insight: "You learned before overcommitting. The payoff is better positioning, not instant growth.",
      },
    ],
  },
];

const recoveryPrompts = [
  {
    type: "scenario",
    title: "Runway triage meeting.",
    text: "Cash is tight, but the company is not dead. You can trade speed, morale, or short-term growth for breathing room.",
    decisions: [
      {
        label: "Emergency cost-cutting",
        hint: "Burn drops now, morale takes a hit.",
        effects: { users: -2, revenue: -120, cash: 180, burnRate: -420, reputation: -1, productQuality: 0, growthRate: -2 },
        insight: "You cut optional spend and tightened operations. It buys time, but the team feels the pressure.",
      },
      {
        label: "Pause growth experiments",
        hint: "Stop marketing burn, protect quality.",
        effects: { users: -1, revenue: -80, cash: 80, burnRate: -320, reputation: 2, productQuality: 2, growthRate: -3 },
        insight: "You stopped paying for noisy acquisition and focused on retention. Growth slows, but runway stabilizes.",
      },
      {
        label: "Lower price for adoption",
        hint: "More users, less immediate revenue.",
        effects: { users: 12, revenue: -180, cash: -80, burnRate: 0, reputation: 2, productQuality: 0, growthRate: 2 },
        insight: "You made the product easier to adopt. This can rebuild traction, but it does not solve burn alone.",
      },
    ],
  },
  {
    type: "scenario",
    title: "Traction recovery sprint.",
    text: "User growth is stalling. The next move needs to rebuild momentum without lighting the runway on fire.",
    decisions: [
      {
        label: "Improve UX bottleneck",
        hint: "Trust and retention before growth.",
        effects: { users: 4, revenue: 90, cash: -180, burnRate: 0, reputation: 4, productQuality: 4, growthRate: 1 },
        insight: "You removed friction before buying traffic. Growth is smaller now, but future users are more likely to stay.",
      },
      {
        label: "Run targeted campaign",
        hint: "Focused growth with controlled spend.",
        effects: { users: 14, revenue: 120, cash: -260, burnRate: 80, reputation: 1, productQuality: 0, growthRate: 3 },
        insight: "You spent on a narrow segment instead of a broad push, so acquisition is more controlled.",
      },
      {
        label: "Interview lost users",
        hint: "Less growth now, better roadmap.",
        effects: { users: -1, revenue: 0, cash: -90, burnRate: -60, reputation: 3, productQuality: 3, growthRate: 0 },
        insight: "You slowed down to learn why people leave. The payoff is better fit and less wasted spend.",
      },
    ],
  },
  {
    type: "scenario",
    title: "Trust repair window.",
    text: "Reputation is bruised, but users are still listening. A visible product or support move can reset the story.",
    decisions: [
      {
        label: "Fix the loudest bugs",
        hint: "Quality and reputation recover.",
        effects: { users: 1, revenue: 60, cash: -220, burnRate: -80, reputation: 7, productQuality: 5, growthRate: 0 },
        insight: "You addressed the most painful reliability issue. Trust recovers because the fix is visible.",
      },
      {
        label: "Publish a transparent plan",
        hint: "Trust up, slower growth.",
        effects: { users: 0, revenue: 0, cash: -60, burnRate: -40, reputation: 5, productQuality: 1, growthRate: -1 },
        insight: "You reset expectations with honesty. It does not create instant growth, but it reduces reputation risk.",
      },
      {
        label: "White-glove angry customers",
        hint: "Revenue and trust, higher service load.",
        effects: { users: 3, revenue: 240, cash: -140, burnRate: 70, reputation: 6, productQuality: 1, growthRate: 1 },
        insight: "You saved the most important customers with hands-on support, but that support has a cost.",
      },
    ],
  },
];

let startup = {};
let state = {};
let activePrompt = scenarios[0];
let rng = Math.random;
let turnsUntilEvent = 2;
let audioMuted = false;
let audioContext = null;
let toastTimer = null;
let achievementToastTimer = null;
let activeCenterView = "overview";
let activeTimelineFilter = "all";
let activeAchievementCategory = "all";
let activeAchievementRarity = "all";
let activeAchievementStatus = "all";
let currentTheme = "dark";
let pendingResolution = null;

function createInitialMarketState() {
  const segment = inferInitialSegment();
  return {
    marketSize: 65,
    demand: 58,
    competition: 45,
    differentiation: 48,
    pricingPower: 45,
    competitorPressure: 35,
    segment,
    positioning: "niche",
    pricing: "freemium",
    message: "",
    lastAction: "Market map initialized.",
  };
}

function createInitialMonetizationState() {
  const pricingModel = startup.goal === "profit" ? "subscription" : "freemium";
  return {
    pricingModel,
    price: pricingModels[pricingModel].basePrice,
    targetSegment: inferInitialSegment(),
    positioning: "niche",
  };
}

function inferInitialSegment() {
  const text = `${startup.audience || ""} ${startup.niche || ""}`.toLowerCase();
  if (text.includes("student") || text.includes("college")) return "students";
  if (text.includes("creator") || text.includes("influencer") || text.includes("writer")) return "creators";
  if (text.includes("developer") || text.includes("engineer") || text.includes("dev")) return "developers";
  if (text.includes("enterprise") || text.includes("company") || text.includes("corporate")) return "enterprises";
  if (text.includes("business") || text.includes("shop") || text.includes("local")) return "smallBusinesses";
  return "founders";
}

function createInitialProduct(id) {
  const model = startup.goal === "profit" ? "subscription" : startup.goal === "growth" ? "freemium" : "freemium";
  return {
    id,
    name: startup.idea || "Core Product",
    type: startupTypes[startup.startupType]?.label || "SaaS",
    targetSegment: startup.audience || marketSegments[inferInitialSegment()]?.label || "Founders",
    pricingModel: model,
    price: pricingModels[model].basePrice,
    useGlobalPricing: true,
    users: 10,
    revenue: 0,
    productQuality: 55,
    stability: 60,
    featureDepth: 35,
    technicalDebt: 25,
    active: true,
    growth: 0,
  };
}

function startGame(formData) {
  startup = {
    idea: formData.get("idea").trim(),
    audience: formData.get("audience").trim(),
    niche: formData.get("niche").trim(),
    startupType: formData.get("startupType"),
    style: formData.get("style"),
    goal: formData.get("goal"),
  };

  const type = startupTypes[startup.startupType];
  rng = createSeededRandom(`${startup.idea}|${startup.audience}|${startup.niche}|${startup.startupType}|${startup.style}|${startup.goal}`);
  turnsUntilEvent = randomBetween(2, 3);
  state = {
    runId: createRunId(),
    runStartedAt: new Date().toISOString(),
    week: 1,
    users: 10,
    revenue: 0,
    totalRevenue: 0,
    cash: type.startingCash,
    burnRate: type.startingBurn,
    reputation: 70,
    productQuality: 55,
    growthRate: 4,
    peakUsers: 10,
    bestStreak: 0,
    streak: 0,
    team: {
      roles: {
        engineer: 1,
        designer: 0,
        marketer: 0,
        sales: 0,
        operations: 0,
      },
      morale: 76,
      efficiency: 76,
      layoffs: 0,
      message: "",
    },
    economy: {
      marketingSpend: 0,
      optionalExpenses: Math.round(type.startingBurn * 0.25),
      developmentPausedWeeks: 0,
    },
    product: {
      stability: 60,
      ux: 55,
      featureDepth: 35,
      technicalDebt: 25,
      nextProductId: 2,
      products: [
        createInitialProduct(1),
      ],
      roadmap: {
        backlog: ["Improve Onboarding", "Fix Bugs", "Add Core Feature"],
        inProgress: [],
        shipped: [],
      },
      completedUpgradeIds: [],
      message: "",
    },
    market: createInitialMarketState(),
    monetization: createInitialMonetizationState(),
    history: [],
    achievements: loadAchievements(),
    achievementsThisRun: [],
    hadCriticalRunway: false,
    lastDelta: null,
    lastInsight: "Choose your first move. Every option has a cost.",
    currentEventImpact: "",
    immediateAppliedPromptId: null,
  };
  pendingResolution = null;

  activeCenterView = "overview";
  activeTimelineFilter = "all";
  activeAchievementCategory = "all";
  activeAchievementRarity = "all";
  activeAchievementStatus = "all";
  setCenterView("overview");
  setTimelineFilter("all");
  setAchievementFilter("category", "all");
  setAchievementFilter("rarity", "all");
  setAchievementFilter("status", "all");
  activePrompt = choosePrompt(scenarios);
  landingPage.classList.add("is-hidden");
  endingPage.classList.add("is-hidden");
  endingPage.classList.remove("ending-failure", "ending-success", "ending-unicorn");
  simulationPage.classList.remove("is-hidden");
  companyName.textContent = startup.idea;
  companyContext.textContent = `${type.label} · ${founderStyles[startup.style].label} founder · ${goals[startup.goal].label} goal · ${type.note}`;
  profileName.textContent = startup.idea;
  profileType.textContent = type.label;
  profileStyle.textContent = founderStyles[startup.style].label;
  profileGoal.textContent = goals[startup.goal].label;
  syncMonetizationToMarketAndProducts();
  state.burnRate = calculateCurrentBurnRate();
  render();
}

function createRunId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `run_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function render() {
  applyImmediateEventEffect(activePrompt);

  weekNumber.textContent = state.week;
  usersStat.textContent = state.users.toLocaleString();
  revenueStat.textContent = formatMoney(state.revenue);
  cashStat.textContent = formatMoney(state.cash);
  burnStat.textContent = formatMoney(state.burnRate);
  const runwayWeeks = calculateRunwayWeeks();
  runwayStat.textContent = `${runwayWeeks}w`;
  runwayStatPill.classList.remove("runway-safe", "runway-warning", "runway-danger");
  runwayStatPill.classList.add(runwayClass(runwayWeeks));
  reputationStat.textContent = state.reputation;
  streakStat.textContent = state.streak;
  if (qualityStat) {
    qualityStat.textContent = state.productQuality;
  }
  growthStat.textContent = `${state.growthRate}%`;
  growthStat.className = state.growthRate >= 0 ? "gain" : "loss";
  updateProgressBars();
  pulseChangedStats(state.lastDelta);
  scenarioTitle.textContent = activePrompt.title;
  scenarioText.textContent = activePrompt.text;
  eventBadge.classList.toggle("is-hidden", activePrompt.type !== "event");
  eventBadge.textContent = state.currentEventImpact || "Random event";
  historyCount.textContent = state.history.length;
  decisionWeekLabel.textContent = state.week;
  insightText.textContent = state.lastInsight;
  renderGuidedTip();
  sideInsightText.textContent = state.lastInsight;
  sideGrowthLabel.textContent = `${state.growthRate}%`;
  sideUsersLabel.textContent = `${state.users.toLocaleString()} users`;
  nextEventLabel.textContent = turnsUntilEvent === 1 ? "1 week" : `${turnsUntilEvent} weeks`;
  nextEventBar.style.width = `${turnsUntilEvent === 1 ? 68 : 34}%`;

  decisionButtons.innerHTML = "";
  activePrompt.decisions.forEach((decision, index) => {
    const button = document.createElement("button");
    button.className = `decision-button ${classifyDecision(decision.effects)}`;
    button.type = "button";
    button.disabled = Boolean(pendingResolution);
    button.innerHTML = `<i>${String(index + 1).padStart(2, "0")}</i><strong>${decision.label}</strong><span>${decision.hint}</span><em>${decisionPreview(decision.effects)}</em>`;
    button.addEventListener("click", () => makeDecision(decision));
    decisionButtons.append(button);
  });
  renderDecisionResult();

  renderHistory();
  renderTimelineView();
  renderTeamView();
  renderProductView();
  renderMarketView();
  renderAchievementsView();
  renderRunsView();
  persistCurrentRun();
}

function applyImmediateEventEffect(prompt) {
  if (prompt.type !== "event" || !prompt.immediate || state.immediateAppliedPromptId === prompt.title) {
    return;
  }

  const immediate = normalizeEffects(prompt.immediate);
  applyEffects(immediate);
  state.peakUsers = Math.max(state.peakUsers, state.users);
  state.immediateAppliedPromptId = prompt.title;
  state.currentEventImpact = `Event impact: ${summarizeEffects(immediate)}`;
}

function calculateStreakBonus() {
  if (state.streak < 2) {
    return { users: 0, growthRate: 0 };
  }

  return {
    users: Math.round(Math.max(1, state.users * 0.03)),
    growthRate: Math.min(5, Math.ceil(state.streak * 0.6)),
  };
}

function classifyOutcome(delta) {
  const strongPositive = delta.users >= 15 || delta.revenue >= 600 || delta.reputation >= 6;
  const badOutcome = delta.cash < -1200 || delta.reputation <= -6 || delta.users <= -12 || delta.growthRate <= -6;

  if (badOutcome && !strongPositive) {
    return "bad";
  }
  if (strongPositive) {
    return "good";
  }
  return "mixed";
}

function updateStreak(outcome) {
  if (outcome === "good") {
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    return;
  }

  if (outcome === "bad") {
    state.streak = 0;
  }
}

function calculateTeamEffects() {
  const roles = state.team.roles;
  const efficiencyMultiplier = state.team.efficiency / 100;
  return normalizeEffects({
    users: Math.round((roles.marketer * 4 + roles.designer * 1.4) * efficiencyMultiplier),
    revenue: Math.round((roles.sales * 125 + roles.operations * 32) * efficiencyMultiplier),
    cash: 0,
    burnRate: 0,
    reputation: Math.round((roles.designer * 2 + roles.operations) * efficiencyMultiplier),
    productQuality: Math.round((roles.engineer * 2.2 + roles.designer * 0.8) * efficiencyMultiplier),
    growthRate: Math.round((roles.marketer * 1.05 + roles.sales * 0.35 - lowMoraleDrag()) * efficiencyMultiplier),
  });
}

function recalculateDerivedState() {
  if (!state.team || !state.product || !state.market) return;
  syncMonetizationToMarketAndProducts();
  syncAggregateProductStats();
  state.team.efficiency = calculateTeamEfficiency();
  state.burnRate = calculateCurrentBurnRate();
  state.peakUsers = Math.max(state.peakUsers, state.users);
  if (calculateRunwayWeeks() <= 4) {
    state.hadCriticalRunway = true;
  }
}

function syncMonetizationToMarketAndProducts() {
  if (!state.monetization || !state.market || !state.product) return;
  state.market.pricing = state.monetization.pricingModel;
  state.monetization.targetSegment = state.market.segment;
  state.monetization.positioning = state.market.positioning;
  state.product.products?.forEach((product) => {
    if (product.useGlobalPricing !== false) {
      product.pricingModel = state.monetization.pricingModel;
      product.price = state.monetization.price;
      product.targetSegment = marketSegments[state.market.segment]?.label || product.targetSegment;
    }
  });
}

function setGlobalMonetization(pricingModel, price = pricingModels[pricingModel]?.basePrice, reason = "") {
  const model = pricingModels[pricingModel] ? pricingModel : "freemium";
  state.monetization.pricingModel = model;
  state.monetization.price = clampGlobalPrice(model, price ?? pricingModels[model].basePrice);
  syncMonetizationToMarketAndProducts();
  if (reason) {
    state.product.message = reason;
    state.market.message = reason;
  }
}

function clampGlobalPrice(model, price) {
  const band = pricingBands[model] || pricingBands.freemium;
  const adjusted = clamp(Math.round(price), band.min, band.max);
  if (adjusted !== Math.round(price)) {
    state.product.message = "Price adjusted to realistic range.";
    state.market.message = "Price adjusted to realistic range.";
  }
  return model === "free" ? 0 : adjusted;
}

function monetizationNote() {
  const model = state.monetization?.pricingModel || "freemium";
  const notes = {
    free: "No direct revenue, faster user growth, more runway pressure.",
    freemium: "Balanced growth with modest paid conversion.",
    subscription: "Recurring revenue with slower growth.",
    oneTime: "Quick purchase revenue, weaker recurring compounding.",
    enterprise: "High revenue only with strong product, reputation, and market fit.",
  };
  return notes[model];
}

function activeProducts() {
  return state.product?.products?.filter((product) => product.active) || [];
}

function syncAggregateProductStats() {
  const products = activeProducts();
  if (!products.length) return;
  const weighted = (key) => Math.round(products.reduce((sum, product) => sum + product[key] * Math.max(1, product.users), 0) / products.reduce((sum, product) => sum + Math.max(1, product.users), 0));
  state.productQuality = weighted("productQuality");
  state.product.stability = weighted("stability");
  state.product.featureDepth = weighted("featureDepth");
  state.product.technicalDebt = weighted("technicalDebt");
  state.product.ux = clamp(Math.round(state.productQuality * 0.55 + state.product.stability * 0.25 + state.product.featureDepth * 0.2 - state.product.technicalDebt * 0.12), 0, 100);
  state.users = products.reduce((sum, product) => sum + product.users, 0);
  state.revenue = products.reduce((sum, product) => sum + product.revenue, 0);
}

function calculateRunway(cash, burnRate) {
  if (burnRate <= 0) return 99;
  return Math.max(0, Math.floor(cash / burnRate));
}

function calculateProductHealth(productQuality, stability, technicalDebt) {
  const score = productQuality * 0.35 + stability * 0.35 + (100 - technicalDebt) * 0.3;
  if (score >= 78) return "Excellent";
  if (score >= 58) return "Healthy";
  if (score >= 38) return "Fragile";
  return "Broken";
}

function calculateMarketFit(demand, differentiation, reputation, productQuality, growthRate, competitorPressure) {
  const score =
    demand * 0.24 +
    differentiation * 0.22 +
    reputation * 0.2 +
    clamp(growthRate + 20, 0, 100) * 0.16 +
    productQuality * 0.18;
  if (score >= 78 && competitorPressure < 70) return "Category Leader";
  if (score >= 64) return "Strong Fit";
  if (score >= 46) return "Emerging Fit";
  return "Weak Fit";
}

function calculateChurnRisk() {
  const product = state.product;
  const productRisk = (100 - state.productQuality) * 0.28 + (100 - product.stability) * 0.32 + (100 - state.reputation) * 0.28 + product.technicalDebt * 0.12;
  return clamp(Math.round(productRisk), 0, 100);
}

function calculateGrowthPotential() {
  const roles = state.team.roles;
  const fitBonus = marketFitRank(marketFitStatus()) * 9;
  const teamBonus = roles.marketer * 5 + roles.sales * 2;
  const qualityGate = state.productQuality < 45 || state.product.stability < 45 ? -14 : state.productQuality > 70 ? 8 : 0;
  return clamp(Math.round(state.market.demand * 0.35 + state.productQuality * 0.2 + fitBonus + teamBonus + qualityGate), 0, 100);
}

function calculateDevCapacity() {
  const roles = state.team?.roles || {};
  if (state.economy?.developmentPausedWeeks > 0) {
    return 0.4;
  }
  const baseCapacity = (roles.engineer || 0) * 2 + (roles.designer || 0) * 1 + (roles.operations || 0) * 0.5;
  const morale = state.team?.morale || 70;
  const moraleMultiplier = morale < 35 ? 0.6 : morale < 55 ? 0.8 : morale > 82 ? 1.12 : 1;
  return Math.max(0.5, Number((baseCapacity * moraleMultiplier).toFixed(1)));
}

function upgradeWorkMultiplier(upgradeKey) {
  const roles = state.team?.roles || {};
  let multiplier = 1;
  if (["bugs", "performance", "debt", "coreFeature"].includes(upgradeKey) && (roles.engineer || 0) < 1) {
    multiplier += 0.45;
  }
  if (["onboarding", "uiux"].includes(upgradeKey) && (roles.designer || 0) < 1) {
    multiplier += 0.35;
  }
  if ((roles.operations || 0) < 1 && state.product.roadmap.inProgress.length >= 2) {
    multiplier += 0.15;
  }
  return multiplier;
}

function effectiveWorkUnits(upgradeKey) {
  return Math.ceil(productUpgrades[upgradeKey].workUnits * upgradeWorkMultiplier(upgradeKey));
}

function lowMoraleDrag() {
  return state.team.morale < 45 ? 2 : 0;
}

function updateTeamMorale(delta, outcome) {
  let moraleChange = 0;
  if (outcome === "good" || delta.users >= 15 || delta.revenue >= 600) moraleChange += 4;
  if (outcome === "bad" || delta.cash < -1000 || delta.growthRate < -4) moraleChange -= 5;
  if (calculateRunwayWeeks() <= 4) moraleChange -= 4;
  if (calculateRunwayWeeks() >= 10) moraleChange += 1;
  state.team.morale = clamp(state.team.morale + moraleChange, 0, 100);
  state.team.efficiency = calculateTeamEfficiency();
}

function applyCrossSystemEffects(effects, context = {}) {
  if (!state.team || !state.product || !state.market) return;
  const label = `${context.title || ""} ${context.decision || ""}`.toLowerCase();
  const churnRisk = calculateChurnRisk();
  const growthPotential = calculateGrowthPotential();

  if (effects.productQuality > 0) {
    state.product.stability = clamp(state.product.stability + Math.ceil(effects.productQuality / 5), 0, 100);
    state.product.ux = clamp(state.product.ux + Math.ceil(effects.productQuality / 7), 0, 100);
    state.market.differentiation = clamp(state.market.differentiation + Math.ceil(effects.productQuality / 9), 0, 100);
  }
  if (effects.productQuality < 0) {
    state.product.technicalDebt = clamp(state.product.technicalDebt + Math.ceil(Math.abs(effects.productQuality) / 2), 0, 100);
    state.product.stability = clamp(state.product.stability - Math.ceil(Math.abs(effects.productQuality) / 3), 0, 100);
  }

  if (label.includes("bug") || label.includes("reliability") || label.includes("incident") || label.includes("crash")) {
    state.product.stability = clamp(state.product.stability + Math.max(1, Math.round(effects.productQuality / 3)), 0, 100);
    state.product.technicalDebt = clamp(state.product.technicalDebt - Math.max(1, Math.round(Math.max(0, effects.productQuality) / 4)), 0, 100);
  }
  if (label.includes("feature") || label.includes("roadmap") || label.includes("sprint")) {
    state.product.featureDepth = clamp(state.product.featureDepth + Math.max(1, Math.round(Math.max(0, effects.growthRate) / 2)), 0, 100);
    state.product.technicalDebt = clamp(state.product.technicalDebt + (effects.growthRate > 2 ? 2 : 0), 0, 100);
  }
  if (label.includes("onboarding") || label.includes("ux") || label.includes("design")) {
    state.product.ux = clamp(state.product.ux + Math.max(1, Math.round(Math.max(0, effects.reputation) / 3)), 0, 100);
  }

  if (effects.users > 8 || effects.growthRate > 2) {
    state.market.demand = clamp(state.market.demand + Math.ceil(Math.max(effects.users, 0) / 20) + Math.max(0, Math.round(effects.growthRate / 3)), 0, 100);
    state.market.competitorPressure = clamp(state.market.competitorPressure + Math.ceil(Math.max(effects.users, 0) / 24), 0, 100);
    if (state.productQuality < 50 || state.product.stability < 50 || churnRisk > 62) {
      effects.reputation -= 3;
      state.market.differentiation = clamp(state.market.differentiation - 2, 0, 100);
      state.product.technicalDebt = clamp(state.product.technicalDebt + 2, 0, 100);
    }
  }

  if (label.includes("campaign") || label.includes("marketing") || label.includes("ads") || label.includes("acquisition")) {
    state.market.demand = clamp(state.market.demand + 3, 0, 100);
    state.market.competitorPressure = clamp(state.market.competitorPressure + 3, 0, 100);
    if (state.productQuality < 55 || state.product.stability < 55) {
      effects.reputation -= 4;
      effects.users -= Math.max(2, Math.round(Math.max(0, effects.users) * 0.15));
    }
  }

  if (effects.revenue > 500) {
    state.market.pricingPower = clamp(state.market.pricingPower + 2, 0, 100);
    state.team.morale = clamp(state.team.morale + 1, 0, 100);
  }
  if (effects.cash < -900 || effects.burnRate > 120) {
    state.team.morale = clamp(state.team.morale - 3, 0, 100);
  }
  if (effects.users < -8 || effects.reputation < -5) {
    state.team.morale = clamp(state.team.morale - 3, 0, 100);
    state.market.demand = clamp(state.market.demand - 2, 0, 100);
  }
  if (growthPotential < 45 && effects.users > 10) {
    effects.users -= 3;
    effects.growthRate -= 1;
  }

  state.team.efficiency = calculateTeamEfficiency();
}

function calculateTeamEfficiency() {
  const teamSize = getTeamSize();
  if (teamSize === 0) return 55;

  const counts = Object.values(state.team.roles);
  const maxRole = Math.max(...counts);
  const imbalancePenalty = maxRole / teamSize > 0.62 ? 14 : maxRole / teamSize > 0.48 ? 7 : 0;
  const opsBonus = Math.min(state.team.roles.operations * 4, 12);
  const moraleBase = state.team.morale * 0.72;
  return clamp(Math.round(moraleBase + 24 + opsBonus - imbalancePenalty), 25, 100);
}

function getTeamSize() {
  return Object.values(state.team.roles).reduce((sum, count) => sum + count, 0);
}

function getTeamCost() {
  return Object.entries(state.team.roles).reduce((sum, [role, count]) => sum + teamRoles[role].cost * count, 0);
}

function ensureEconomyState() {
  if (!state.economy) {
    state.economy = {
      marketingSpend: 0,
      optionalExpenses: 0,
      developmentPausedWeeks: 0,
    };
  }
}

function calculateProductMaintenanceCost() {
  const products = state.product?.products || [];
  const activeCount = products.filter((product) => product.active).length;
  const earlyDiscount = state.week <= 10 ? 0.72 : state.week <= 25 ? 0.9 : 1;
  const pauseDiscount = state.economy?.developmentPausedWeeks > 0 ? 0.62 : 1;
  const maintenance = products.reduce((sum, product) => {
    if (!product.active) return sum + 10;
    const usageLoad = Math.min(180, product.users * 0.035);
    const debtLoad = product.technicalDebt * 0.85;
    const productLoad = 34 + activeCount * 8 + usageLoad + debtLoad;
    return sum + productLoad;
  }, 0);
  return Math.round(maintenance * earlyDiscount * pauseDiscount);
}

function burnSources() {
  ensureEconomyState();
  const opsDiscount = clamp((state.team?.roles?.operations || 0) * 0.04, 0, 0.14);
  const team = Math.round(getTeamCost() * (1 - opsDiscount));
  const product = calculateProductMaintenanceCost();
  const marketing = Math.max(0, Math.round(state.economy.marketingSpend || 0));
  const optional = Math.max(0, Math.round(state.economy.optionalExpenses || 0));
  const total = Math.max(120, team + product + marketing + optional);
  return { team, product, marketing, optional, total };
}

function calculateCurrentBurnRate() {
  return burnSources().total;
}

function routeBurnEffect(effects, label = "") {
  ensureEconomyState();
  const delta = Math.round(effects.burnRate || 0);
  if (!delta) return;

  if (delta > 0) {
    const earlyMultiplier = state.week <= 10 ? 0.22 : state.week <= 25 ? 0.36 : 0.5;
    const routed = Math.max(10, Math.round(delta * earlyMultiplier));
    const marketingText = `${label}`.toLowerCase();
    if (marketingText.includes("marketing") || marketingText.includes("campaign") || marketingText.includes("ads") || marketingText.includes("growth")) {
      state.economy.marketingSpend = clamp((state.economy.marketingSpend || 0) + routed, 0, 1600);
    } else {
      state.economy.optionalExpenses = clamp((state.economy.optionalExpenses || 0) + routed, 0, 1800);
    }
  } else {
    reduceBurnSources(Math.abs(delta));
  }

  effects.burnRate = 0;
  state.burnRate = calculateCurrentBurnRate();
}

function reduceBurnSources(amount) {
  ensureEconomyState();
  let remaining = Math.max(0, amount);
  const optionalCut = Math.min(state.economy.optionalExpenses || 0, remaining);
  state.economy.optionalExpenses -= optionalCut;
  remaining -= optionalCut;
  const marketingCut = Math.min(state.economy.marketingSpend || 0, remaining);
  state.economy.marketingSpend -= marketingCut;
}

function decayBurnSourcesForNewWeek() {
  ensureEconomyState();
  state.economy.marketingSpend = Math.max(0, Math.round((state.economy.marketingSpend || 0) * 0.78));
  state.economy.optionalExpenses = Math.max(0, Math.round((state.economy.optionalExpenses || 0) * 0.9));
  if (state.economy.developmentPausedWeeks > 0) {
    state.economy.developmentPausedWeeks -= 1;
  }
  state.burnRate = calculateCurrentBurnRate();
}

function hireRole(role) {
  const runwayWeeks = calculateRunwayWeeks();
  const cost = teamRoles[role].cost;
  if (state.cash < cost * 3 || runwayWeeks <= 4) {
    state.team.message = "Not enough runway to safely hire.";
    renderTeamView();
    return;
  }

  const before = captureStats();
  state.team.roles[role] += 1;
  const onboardingCost = Math.round(cost * 0.45);
  state.cash -= onboardingCost;
  state.team.morale = clamp(state.team.morale + 2, 0, 100);
  const effects = roleHireEffects(role);
  applyEffects(effects);
  applyRoleStateEffects(role, "hire");
  recalculateDerivedState();
  state.team.message = `${teamRoles[role].label} hired. Burn increased by ${formatMoney(cost)} per week.`;
  recordSystemAction({
    before,
    title: `Hired ${teamRoles[role].label}`,
    decision: `Hire ${teamRoles[role].label}`,
    insight: teamHireInsight(role),
    type: "Team Event",
  });
  checkAchievements();
  render();
}

function fireRole(role) {
  if (state.team.roles[role] <= 0) {
    state.team.message = `No ${teamRoles[role].label.toLowerCase()} to remove.`;
    renderTeamView();
    return;
  }

  const cost = teamRoles[role].cost;
  const before = captureStats();
  state.team.roles[role] -= 1;
  state.team.morale = clamp(state.team.morale - 8, 0, 100);
  state.team.efficiency = clamp(calculateTeamEfficiency() - 5, 25, 100);
  state.team.layoffs += 1;
  const effects = normalizeEffects({
    users: role === "marketer" ? -5 : 0,
    revenue: role === "sales" ? -160 : 0,
    reputation: -2,
    productQuality: role === "engineer" || role === "designer" ? -2 : 0,
    growthRate: role === "marketer" ? -2 : 0,
  });
  applyEffects(effects);
  applyRoleStateEffects(role, "fire");
  recalculateDerivedState();
  state.team.message = `${teamRoles[role].label} removed. Burn dropped, but morale took a hit.`;
  recordSystemAction({
    before,
    title: `Removed ${teamRoles[role].label}`,
    decision: `Fire ${teamRoles[role].label}`,
    insight: "You reduced burn, but layoffs weaken morale and make future execution less reliable.",
    type: "Team Event",
  });
  checkAchievements();
  render();
}

function roleHireEffects(role) {
  const productWeak = state.productQuality < 55 || state.product.stability < 55;
  const map = {
    engineer: { productQuality: 2, reputation: 1, growthRate: -1 },
    designer: { productQuality: 1, reputation: 2, users: 2 },
    marketer: { users: productWeak ? 3 : 8, growthRate: 2, reputation: productWeak ? -2 : 0 },
    sales: { revenue: 220, cash: 120, growthRate: -1 },
    operations: { burnRate: -55, reputation: 1, productQuality: 1 },
  };
  return normalizeEffects(map[role]);
}

function applyRoleStateEffects(role, action) {
  const direction = action === "hire" ? 1 : -1;
  if (role === "engineer") {
    state.product.stability = clamp(state.product.stability + 2 * direction, 0, 100);
    state.product.technicalDebt = clamp(state.product.technicalDebt - 2 * direction, 0, 100);
  }
  if (role === "designer") {
    state.product.ux = clamp(state.product.ux + 3 * direction, 0, 100);
  }
  if (role === "marketer") {
    state.market.demand = clamp(state.market.demand + 3 * direction, 0, 100);
    state.market.competitorPressure = clamp(state.market.competitorPressure + 1 * direction, 0, 100);
  }
  if (role === "sales") {
    state.market.pricingPower = clamp(state.market.pricingPower + 2 * direction, 0, 100);
  }
  if (role === "operations") {
    state.product.stability = clamp(state.product.stability + 1 * direction, 0, 100);
    state.market.competitorPressure = clamp(state.market.competitorPressure - 2 * direction, 0, 100);
  }
}

function teamHireInsight(role) {
  const insights = {
    engineer: "Engineering capacity improves product quality over time and can reduce technical debt, but payroll pressure rises immediately.",
    designer: "Design capacity improves UX and trust. It works best when growth is not outrunning onboarding quality.",
    marketer: "Marketing adds demand and growth potential. If the product is weak, those new users can turn into reputation risk.",
    sales: "Sales improves revenue motion and pricing power, but can pull focus toward buyer promises.",
    operations: "Operations improves burn discipline and stability, trading speed for a calmer company.",
  };
  return insights[role];
}

function calculateProductEffects() {
  const product = state.product;
  const debtPenalty = product.technicalDebt > 70 ? 5 : product.technicalDebt > 50 ? 2 : 0;
  const qualityDrag = state.productQuality < 40 ? 4 : 0;
  return normalizeEffects({
    users: Math.round((product.ux - 50) / 11 + (product.featureDepth - 35) / 14 - debtPenalty - qualityDrag),
    revenue: Math.round((product.featureDepth - 35) * 5.5),
    cash: 0,
    burnRate: 0,
    reputation: Math.round((product.ux - 50) / 14 + (product.stability - 55) / 16 - debtPenalty),
    productQuality: Math.round((product.stability + product.ux + product.featureDepth - product.technicalDebt) / 70 - 2),
    growthRate: Math.round((product.featureDepth - 35) / 24 - debtPenalty),
  });
}

function updateProductPressure(delta) {
  if (delta.growthRate > 5 || delta.users > 20) {
    state.product.technicalDebt = clamp(state.product.technicalDebt + 2, 0, 100);
    state.product.stability = clamp(state.product.stability - 1, 0, 100);
  }
  if (state.product.technicalDebt > 70) {
    state.product.stability = clamp(state.product.stability - 2, 0, 100);
  }
  state.product.message = productHealth() === "Broken"
    ? "Product risk is high. Stabilize before scaling."
    : "";
}

function applyProductUpgrade(upgradeKey) {
  const upgrade = productUpgrades[upgradeKey];
  if (!upgrade) return;
  if (state.product.roadmap.inProgress.length >= 2) {
    state.product.message = "Team is at full capacity.";
    renderProductView();
    return;
  }
  if (state.product.roadmap.inProgress.some((item) => item.key === upgradeKey)) {
    state.product.message = `${upgrade.label} is already in progress.`;
    renderProductView();
    return;
  }
  if (state.cash < upgrade.cost || calculateRunwayWeeks() <= 3) {
    state.product.message = "Not enough runway to safely start this upgrade.";
    renderProductView();
    return;
  }

  const before = captureStats();
  state.cash -= upgrade.cost;
  const totalWork = effectiveWorkUnits(upgradeKey);
  state.product.roadmap.inProgress.push({
    key: upgradeKey,
    label: upgrade.label,
    workTotal: totalWork,
    workRemaining: totalWork,
    startedWeek: state.week,
  });
  state.product.roadmap.backlog = state.product.roadmap.backlog.filter((item) => item !== upgrade.label);
  if (!state.product.roadmap.backlog.includes(upgrade.label)) {
    state.product.roadmap.backlog.push(upgrade.label);
  }
  if (state.product.roadmap.inProgress.length >= 2 && calculateDevCapacity() < 3) {
    state.product.technicalDebt = clamp(state.product.technicalDebt + 2, 0, 100);
    state.team.morale = clamp(state.team.morale - 4, 0, 100);
  }
  recalculateDerivedState();
  state.product.message = `${upgrade.label} started. ${totalWork} work units remaining.`;
  recordSystemAction({
    before,
    title: `Started ${upgrade.label}`,
    decision: `Start ${upgrade.label}`,
    insight: `You committed ${formatMoney(upgrade.cost)} and ${totalWork} work units. Effects apply only when the work ships.`,
    type: "Product Event",
  });
  checkAchievements();
  render();
}

function applyUpgradeToPrimaryProduct(upgradeKey, upgrade) {
  const target = activeProducts().sort((a, b) => b.users - a.users)[0];
  if (!target) return;
  target.productQuality = clamp(target.productQuality + upgrade.effects.quality, 0, 100);
  target.stability = clamp(target.stability + upgrade.effects.stability, 0, 100);
  target.featureDepth = clamp(target.featureDepth + upgrade.effects.featureDepth, 0, 100);
  target.technicalDebt = clamp(target.technicalDebt + upgrade.effects.technicalDebt, 0, 100);
  target.users = Math.max(0, target.users + upgrade.effects.users);
  if (upgradeKey === "coreFeature") {
    target.featureDepth = clamp(target.featureDepth + 3, 0, 100);
  }
}

function progressProductDevelopment() {
  const inProgress = state.product?.roadmap?.inProgress || [];
  if (!inProgress.length) return [];

  const completed = [];
  const capacity = calculateDevCapacity();
  const workPerUpgrade = capacity / inProgress.length;
  const overloaded = inProgress.length >= 2 && capacity < 3;

  inProgress.forEach((item) => {
    const delayRoll = overloaded && rng() < 0.28;
    const workDone = delayRoll ? Math.max(0.2, workPerUpgrade * 0.55) : workPerUpgrade;
    item.workRemaining = Math.max(0, Number((item.workRemaining - workDone).toFixed(1)));
    if (delayRoll) {
      state.product.technicalDebt = clamp(state.product.technicalDebt + 1, 0, 100);
      state.team.morale = clamp(state.team.morale - 1, 0, 100);
    }
    if (item.workRemaining <= 0) {
      completed.push(item);
    }
  });

  if (overloaded) {
    state.team.morale = clamp(state.team.morale - 2, 0, 100);
  }

  completed.forEach((item) => completeProductUpgrade(item));
  state.product.roadmap.inProgress = inProgress.filter((item) => item.workRemaining > 0);
  return completed;
}

function completeProductUpgrade(item) {
  const upgrade = productUpgrades[item.key];
  if (!upgrade) return;
  const before = captureStats();
  state.product.ux = clamp(state.product.ux + upgrade.effects.ux, 0, 100);
  state.product.stability = clamp(state.product.stability + upgrade.effects.stability, 0, 100);
  state.product.featureDepth = clamp(state.product.featureDepth + upgrade.effects.featureDepth, 0, 100);
  state.product.technicalDebt = clamp(state.product.technicalDebt + upgrade.effects.technicalDebt, 0, 100);
  state.productQuality = clamp(state.productQuality + upgrade.effects.quality, 0, 100);
  state.reputation = clamp(state.reputation + upgrade.effects.reputation, 0, 100);
  state.users = Math.max(0, state.users + upgrade.effects.users);
  state.growthRate = clamp(state.growthRate + upgrade.effects.growthRate, -35, 80);
  applyUpgradeToPrimaryProduct(item.key, upgrade);
  applyProductUpgradeCrossEffects(item.key, upgrade);
  state.product.roadmap.shipped.unshift(`Week ${state.week}: ${upgrade.label}`);
  state.product.completedUpgradeIds.push(`${item.key}-${state.week}`);
  recalculateDerivedState();
  state.product.message = `${upgrade.label} completed and shipped.`;
  recordSystemAction({
    before,
    title: `Shipped ${upgrade.label}`,
    decision: upgrade.label,
    insight: productUpgradeInsight(item.key),
    type: "Product Event",
  });
}

function applyProductUpgradeCrossEffects(upgradeKey, upgrade) {
  if (upgradeKey === "onboarding" || upgradeKey === "uiux") {
    state.market.demand = clamp(state.market.demand + (state.market.demand > 60 ? 2 : 4), 0, 100);
    state.market.differentiation = clamp(state.market.differentiation + 2, 0, 100);
    if (state.market.demand >= 60) {
      state.growthRate = clamp(state.growthRate + 1, -35, 80);
    }
  }
  if (upgradeKey === "bugs" || upgradeKey === "performance" || upgradeKey === "debt") {
    state.team.morale = clamp(state.team.morale + 2, 0, 100);
    state.market.competitorPressure = clamp(state.market.competitorPressure - 1, 0, 100);
  }
  if (upgradeKey === "coreFeature") {
    state.market.demand = clamp(state.market.demand + 3, 0, 100);
    state.market.competitorPressure = clamp(state.market.competitorPressure + 4, 0, 100);
    if (state.product.stability < 55) {
      state.reputation = clamp(state.reputation - 3, 0, 100);
    }
  }
}

function productUpgradeInsight(upgradeKey) {
  const insights = {
    onboarding: "Better onboarding improves UX, reputation, and future retention. It also makes demand easier to convert.",
    bugs: "Fixing bugs raises stability and trust while lowering technical debt and churn risk.",
    coreFeature: "A new core feature improves growth potential, but technical debt and competition pressure rise.",
    uiux: "UX polish improves product quality and conversion, especially when market demand is already warm.",
    performance: "Performance work strengthens stability and lowers future product crisis odds.",
    debt: "Debt reduction slows short-term momentum, but improves stability, morale, and future shipping safety.",
  };
  return insights[upgradeKey] || "Product work changed both product health and future market outcomes.";
}

function createProduct(formData) {
  const modelKey = formData.get("pricingModel") || state.monetization.pricingModel || "freemium";
  setGlobalMonetization(modelKey, pricingModels[modelKey]?.basePrice, `Changed pricing model to ${pricingModels[modelKey]?.label || "Freemium"}.`);
  const model = pricingModels[modelKey] || pricingModels.freemium;
  const name = formData.get("productName").trim() || `${startup.idea} ${state.product.nextProductId}`;
  const createCost = Math.round(360 + activeProducts().length * 180 + model.basePrice * 0.55);
  if (state.cash < createCost || calculateRunwayWeeks() <= 3) {
    state.product.message = "Not enough runway to safely create a new product.";
    renderProductView();
    return;
  }

  const before = captureStats();
  const product = {
    id: state.product.nextProductId,
    name,
    type: formData.get("productType") || "Tool",
    targetSegment: formData.get("targetSegment").trim() || marketSegments[state.market.segment]?.label || "Founders",
    pricingModel: state.monetization.pricingModel,
    price: state.monetization.price,
    useGlobalPricing: true,
    users: 0,
    revenue: 0,
    productQuality: 34,
    stability: 42,
    featureDepth: 18,
    technicalDebt: 32 + activeProducts().length * 4,
    active: true,
    growth: 0,
  };
  state.product.nextProductId += 1;
  state.product.products.push(product);
  state.cash -= createCost;
  state.product.technicalDebt = clamp(state.product.technicalDebt + 4, 0, 100);
  state.team.morale = clamp(state.team.morale - (activeProducts().length > getTeamSize() ? 3 : 1), 0, 100);
  state.market.demand = clamp(state.market.demand + 2, 0, 100);
  recalculateDerivedState();
  state.product.message = `${product.name} created for ${formatMoney(createCost)}.`;
  createProductForm.classList.add("is-hidden");
  createProductForm.reset();
  recordSystemAction({
    before,
    title: `Created ${product.name}`,
    decision: `Create ${product.type}`,
    insight: "A new product opens a revenue path, but it starts rough and adds workload, burn, and technical debt.",
    type: "Product Event",
  });
  checkAchievements();
  render();
}

function applyProductEntityAction(productId, action) {
  const product = state.product.products.find((item) => item.id === Number(productId));
  if (!product) return;
  const before = captureStats();
  let insight = "";
  let title = "";

  if (action === "upgrade") {
    const cost = Math.round(220 + product.featureDepth * 4 + product.technicalDebt * 2);
    if (state.cash < cost || calculateRunwayWeeks() <= 3) {
      state.product.message = "Not enough runway to upgrade this product.";
      renderProductView();
      return;
    }
    state.cash -= cost;
    product.productQuality = clamp(product.productQuality + 7, 0, 100);
    product.stability = clamp(product.stability + 4, 0, 100);
    product.featureDepth = clamp(product.featureDepth + 5, 0, 100);
    product.technicalDebt = clamp(product.technicalDebt + 2, 0, 100);
    state.market.demand = clamp(state.market.demand + 2, 0, 100);
    title = `Upgraded ${product.name}`;
    insight = "The product improved and demand got warmer, but feature work added some debt and consumed cash.";
  }

  if (action === "priceUp") {
    const step = pricingStep(product);
    const nextPrice = state.monetization.price + step;
    setGlobalMonetization(state.monetization.pricingModel, nextPrice);
    state.growthRate = clamp(state.growthRate - 1, -35, 80);
    state.market.pricingPower = clamp(state.market.pricingPower + 2, 0, 100);
    const pressure = productPricePressure(product);
    if (product.productQuality < 58 || product.stability < 55 || pressure.warning === "Too Expensive" || pressure.warning === "Enterprise Only") {
      state.reputation = clamp(state.reputation - 3, 0, 100);
      product.users = Math.max(0, product.users - Math.max(1, Math.round(product.users * (pressure.warning === "Fair Price" ? 0.04 : 0.12))));
    }
    title = `Raised price for ${product.name}`;
    insight = priceInsight(product);
  }

  if (action === "priceDown") {
    const step = pricingStep(product);
    setGlobalMonetization(state.monetization.pricingModel, state.monetization.price - step);
    state.growthRate = clamp(state.growthRate + 1, -35, 80);
    state.market.demand = clamp(state.market.demand + 2, 0, 100);
    state.market.pricingPower = clamp(state.market.pricingPower - 2, 0, 100);
    title = `Lowered price for ${product.name}`;
    insight = priceInsight(product);
  }

  if (action === "pivot") {
    const cost = 320;
    if (state.cash < cost) {
      state.product.message = "Not enough cash to pivot this product.";
      renderProductView();
      return;
    }
    state.cash -= cost;
    product.targetSegment = marketSegments[state.market.segment]?.label || product.targetSegment;
    product.productQuality = clamp(product.productQuality + 2, 0, 100);
    product.featureDepth = clamp(product.featureDepth - 4, 0, 100);
    product.technicalDebt = clamp(product.technicalDebt - 4, 0, 100);
    product.users = Math.max(0, Math.round(product.users * 0.82));
    state.market.differentiation = clamp(state.market.differentiation + 5, 0, 100);
    title = `Pivoted ${product.name}`;
    insight = "The pivot sharpens positioning and reduces debt, but some existing users churn from the change.";
  }

  if (action === "toggle") {
    product.active = !product.active;
    state.team.morale = clamp(state.team.morale + (product.active ? -1 : 2), 0, 100);
    title = `${product.active ? "Resumed" : "Paused"} ${product.name}`;
    insight = product.active
      ? "Resuming the product reopens growth and revenue, but workload and burn return."
      : "Pausing the product reduces chaos and burn, but it stops that product's growth and revenue.";
  }

  recalculateDerivedState();
  state.product.message = title;
  recordSystemAction({
    before,
    title,
    decision: actionLabel(action),
    insight,
    type: "Product Event",
  });
  checkAchievements();
  render();
}

function pricingStep(product) {
  const modelKey = state.monetization?.pricingModel || product.pricingModel;
  const model = pricingModels[modelKey] || pricingModels.freemium;
  if (modelKey === "enterprise") return 250;
  if (modelKey === "free") return 0;
  return Math.max(2, Math.round(model.basePrice * 0.22));
}

function priceInsight(product) {
  const pressure = productPricePressure(product);
  const model = pricingModels[state.monetization?.pricingModel || product.pricingModel] || pricingModels.freemium;
  const conversion = Math.round(productConversionRate(product, model, marketFitRank(marketFitStatus())) * 1000) / 10;
  const warning = pressure.warning === "Fair Price"
    ? "Fair price for this audience."
    : pressure.warning === "Expensive"
      ? "Expensive for this audience: expect slower growth."
      : pressure.warning === "Enterprise Only"
        ? "Enterprise pricing needs strong product quality, reputation, and market fit or conversion is almost zero."
        : "Price is too high for this audience. Conversion, growth, and reputation will suffer.";
  return `${warning} Expected conversion is about ${conversion}%, with ${pressure.growthMultiplier < 0.5 ? "heavy" : pressure.growthMultiplier < 0.85 ? "moderate" : "low"} growth friction.`;
}

function actionLabel(action) {
  return {
    upgrade: "Upgrade product",
    priceUp: "Increase price",
    priceDown: "Decrease price",
    pivot: "Pivot product",
    toggle: "Toggle product",
  }[action] || action;
}

function productHealth() {
  return calculateProductHealth(state.productQuality, state.product.stability, state.product.technicalDebt);
}

function calculateMarketEffects() {
  const market = state.market;
  if (!market) return normalizeEffects();

  const segmentEffects = marketSegments[market.segment].effects;
  const positioningEffects = marketPositionings[market.positioning].effects;
  const pricingEffects = marketPricing[state.monetization?.pricingModel || market.pricing].effects;
  const fitMultiplier = marketFitMultiplier();
  const pressurePenalty = market.competitorPressure > 78 ? 0.55 : market.competitorPressure > 62 ? 0.75 : 1;
  const differentiationShield = market.differentiation > 70 ? 4 : market.differentiation > 58 ? 2 : 0;
  const weakFitDrag = marketFitStatus() === "Weak Fit" ? 5 : 0;
  const base = combineEffects(segmentEffects, positioningEffects, pricingEffects);

  return normalizeEffects({
    users: Math.round(base.users * fitMultiplier * pressurePenalty * 0.72 + (market.demand - 55) / 8 - weakFitDrag),
    revenue: Math.round(base.revenue * (0.55 + market.pricingPower / 125)),
    cash: 0,
    burnRate: 0,
    reputation: Math.round(base.reputation + (market.differentiation - market.competition) / 28 + differentiationShield - weakFitDrag / 2),
    productQuality: base.productQuality,
    growthRate: Math.round(base.growthRate + (market.demand - market.competition) / 22 + (market.differentiation - 50) / 30 - weakFitDrag / 2),
  });
}

function marketFitMultiplier() {
  const fit = marketFitStatus();
  if (fit === "Category Leader") return 1.3;
  if (fit === "Strong Fit") return 1.14;
  if (fit === "Emerging Fit") return 1;
  return 0.74;
}

function updateMarketPressure(delta) {
  if (!state.market) return;
  const market = state.market;
  const attractiveMarket = (market.marketSize + market.demand + market.pricingPower) / 3;
  const growthSignal = delta.users > 20 || delta.growthRate > 5 ? 4 : delta.users < -8 ? -2 : 0;
  const differentiationGap = market.differentiation < 45 ? 5 : market.differentiation > 70 ? -4 : 0;
  const competitionBase = Math.round((market.competition - 50) / 10);
  market.competitorPressure = clamp(
    Math.round(market.competitorPressure + growthSignal + differentiationGap + competitionBase + (attractiveMarket > 68 ? 2 : 0)),
    0,
    100,
  );
  if (market.competitorPressure > 78) {
    market.message = "Competitor pressure is high. Sharpen positioning before rivals define the category.";
  } else if (market.differentiation < 40) {
    market.message = "Your positioning is getting blurry. Differentiation needs work.";
  } else {
    market.message = "";
  }
}

function applyMarketChoice(kind, key) {
  if (!state.market) return;
  const map = kind === "segment" ? marketSegments : kind === "positioning" ? marketPositionings : marketPricing;
  const option = map[key];
  if (!option) return;
  const currentKey = kind === "pricing" ? state.monetization.pricingModel : state.market[kind];
  if (currentKey === key) {
    state.market.message = `${option.label} is already active.`;
    state.market.lastAction = option.note;
    renderMarketView();
    return;
  }

  const previousKey = kind === "pricing" ? state.monetization.pricingModel : state.market[kind];
  const previousOption = map[previousKey];
  const before = captureStats();
  state.market[kind] = key;
  if (kind === "pricing") {
    setGlobalMonetization(key, pricingModels[key].basePrice, `Changed pricing model to ${option.label}.`);
  }
  applyMarketStatDelta(relativeMarketStats(previousOption?.stats || {}, option.stats || {}));
  const immediateEffects = scaleEffects(option.effects || {}, kind === "pricing" ? 0.36 : 0.24);
  if (kind === "pricing" && key === "oneTime" && state.market.segment === "students") {
    immediateEffects.reputation -= 2;
    immediateEffects.users -= 3;
  }
  if (kind === "pricing" && key === "enterprise") {
    state.economy.optionalExpenses = clamp((state.economy.optionalExpenses || 0) + 45, 0, 1800);
  }
  applyEffects(immediateEffects);
  recalculateDerivedState();
  state.market.message = `${kind === "segment" ? "Segment" : kind === "positioning" ? "Positioning" : "Pricing"} set to ${option.label}.`;
  state.market.lastAction = option.note;
  recordSystemAction({
    before,
    title: kind === "pricing" ? `Changed pricing model to ${option.label}` : `Changed ${kindLabel(kind)} to ${option.label}`,
    decision: option.label,
    insight: `${option.note} Market choices now feed future growth, revenue quality, reputation, and competitor pressure.`,
    type: "Market Event",
  });
  checkAchievements();
  render();
}

function kindLabel(kind) {
  if (kind === "segment") return "target segment";
  if (kind === "positioning") return "positioning";
  return "pricing";
}

function scaleEffects(effects = {}, scale = 1) {
  const normalized = normalizeEffects(effects);
  Object.keys(normalized).forEach((key) => {
    normalized[key] = Math.round(normalized[key] * scale);
  });
  return normalized;
}

function relativeMarketStats(previousStats, nextStats) {
  const keys = ["marketSize", "demand", "competition", "differentiation", "pricingPower", "competitorPressure"];
  return keys.reduce((delta, key) => {
    delta[key] = (nextStats[key] || 0) - (previousStats[key] || 0);
    return delta;
  }, {});
}

function applyMarketAction(actionKey) {
  const action = marketActions[actionKey];
  if (!action || !state.market) return;
  if (state.cash < action.cost || calculateRunwayWeeks() <= 3) {
    state.market.message = "Not enough runway to safely run this market play.";
    renderMarketView();
    return;
  }

  const before = captureStats();
  const effects = normalizeEffects({
    ...action.effects,
    cash: (action.effects.cash || 0) - action.cost,
  });
  applyMarketStatDelta(action.market);
  applyEffects(effects);
  applyMarketActionCrossEffects(actionKey);
  recalculateDerivedState();
  state.market.message = `${action.label} completed for ${formatMoney(action.cost)}.`;
  state.market.lastAction = action.impact;
  recordSystemAction({
    before,
    title: action.label,
    decision: action.label,
    insight: marketActionInsight(actionKey),
    type: "Market Event",
  });
  checkAchievements();
  render();
}

function applyMarketActionCrossEffects(actionKey) {
  if (actionKey === "interviews") {
    state.product.ux = clamp(state.product.ux + 2, 0, 100);
    state.product.featureDepth = clamp(state.product.featureDepth + 1, 0, 100);
  }
  if (actionKey === "competitors") {
    state.market.competitorPressure = clamp(state.market.competitorPressure - 2, 0, 100);
    state.market.differentiation = clamp(state.market.differentiation + 1, 0, 100);
  }
  if (actionKey === "pricing") {
    if (state.market.pricingPower >= 55) {
      state.revenue = Math.round(state.revenue + 180);
    } else {
      state.growthRate = clamp(state.growthRate - 1, -35, 80);
    }
  }
  if (actionKey === "nicheCampaign") {
    if (state.productQuality < 55 || state.product.stability < 55) {
      state.reputation = clamp(state.reputation - 3, 0, 100);
    }
    state.market.competitorPressure = clamp(state.market.competitorPressure + 2, 0, 100);
  }
  if (actionKey === "community") {
    state.team.morale = clamp(state.team.morale + 2, 0, 100);
    state.market.competitorPressure = clamp(state.market.competitorPressure - 1, 0, 100);
  }
}

function marketActionInsight(actionKey) {
  const insights = {
    interviews: "User interviews improve differentiation and also make the product roadmap smarter.",
    competitors: "Studying competitors lowers pressure and sharpens positioning before the market defines you.",
    pricing: "Pricing tests affect revenue quality, growth friction, and buyer trust at the same time.",
    nicheCampaign: "Campaigns can create traction, but weak product quality converts attention into reputation risk.",
    community: "Community building improves trust and long-term demand while slightly stabilizing the team.",
  };
  return insights[actionKey] || "Market action changed positioning, demand, and future growth pressure.";
}

function applyMarketStatDelta(delta = {}) {
  const market = state.market;
  market.marketSize = clamp(market.marketSize + (delta.marketSize || 0), 0, 100);
  market.demand = clamp(market.demand + (delta.demand || 0), 0, 100);
  market.competition = clamp(market.competition + (delta.competition || 0), 0, 100);
  market.differentiation = clamp(market.differentiation + (delta.differentiation || 0), 0, 100);
  market.pricingPower = clamp(market.pricingPower + (delta.pricingPower || 0), 0, 100);
  market.competitorPressure = clamp(market.competitorPressure + (delta.competitorPressure || 0), 0, 100);
}

function loadAchievements() {
  try {
    return JSON.parse(localStorage.getItem(achievementStorageKey)) || {};
  } catch {
    return {};
  }
}

function saveAchievements() {
  localStorage.setItem(achievementStorageKey, JSON.stringify(state.achievements || {}));
}

function readStorageJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorageJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function loadRunHistory() {
  const history = readStorageJson(runHistoryStorageKey, []);
  return Array.isArray(history) ? history : [];
}

function saveRunHistory(history) {
  writeStorageJson(runHistoryStorageKey, history.slice(0, 80));
}

function upsertRunHistory(run) {
  const history = loadRunHistory();
  const index = history.findIndex((item) => item.id === run.id);
  if (index >= 0) {
    history[index] = run;
  } else {
    history.unshift(run);
  }
  history.sort((a, b) => new Date(b.startedAt || 0) - new Date(a.startedAt || 0));
  saveRunHistory(history);
  return history;
}

function currentRunSnapshot(status = "active", ending = null) {
  const finalStatus = ending
    ? ending.type === "failure" ? "failed" : "completed"
    : status;
  const score = Object.keys(state).length ? calculateGoalScore() : 0;
  const importantHistory = [...(state.history || [])]
    .sort((a, b) => decisionImpactScore(b.delta || {}) - decisionImpactScore(a.delta || {}))
    .slice(0, 8)
    .map((entry) => `Week ${entry.week}: ${entry.decision} (${formatPlainDelta(entry.delta || {})})`);
  const timelineSummary = importantHistory.length
    ? importantHistory
    : (state.history || []).slice(-5).map((entry) => `Week ${entry.week}: ${entry.title}`);

  return {
    id: state.runId,
    name: startup.idea || "Untitled startup",
    startedAt: state.runStartedAt,
    endedAt: finalStatus === "active" ? null : new Date().toISOString(),
    status: finalStatus,
    startupIdea: startup.idea || "Untitled startup",
    startupType: startup.startupType || "saas",
    founderStyle: startup.style || "balanced",
    goal: startup.goal || "profit",
    startupAudience: startup.audience || "",
    startupNiche: startup.niche || "",
    finalWeek: state.week || 0,
    finalStats: {
      users: state.users || 0,
      revenue: state.revenue || 0,
      cash: state.cash || 0,
      burnRate: state.burnRate || 0,
      reputation: state.reputation || 0,
      productQuality: state.productQuality || 0,
      growthRate: state.growthRate || 0,
    },
    peakUsers: state.peakUsers || 0,
    totalRevenue: state.totalRevenue || 0,
    bestWeek: bestHistoryWeek(),
    endingType: ending?.title || null,
    score,
    achievementsUnlocked: [...(state.achievementsThisRun || [])],
    timelineSummary,
  };
}

function bestHistoryWeek() {
  const best = [...(state.history || [])].sort((a, b) => timelineImpactScore(b.delta || {}) - timelineImpactScore(a.delta || {}))[0];
  return best?.week || null;
}

function persistCurrentRun(status = "active", { includeHistory = false, ending = null } = {}) {
  if (!state.runId) return null;
  const run = currentRunSnapshot(status, ending);
  writeStorageJson(currentRunStorageKey, run);
  if (includeHistory || run.status !== "active") {
    upsertRunHistory(run);
  }
  return run;
}

function manualSaveRun() {
  const run = persistCurrentRun("active", { includeHistory: true });
  if (run) {
    showRunMessage("Run saved");
    renderRunsView();
  }
}

function showRunMessage(message) {
  resultToast.className = "result-toast result-mixed";
  resultToast.textContent = message;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    resultToast.classList.add("is-hidden");
  }, 1500);
}

function checkAchievements(context = {}) {
  if (!state.achievements) return;

  const latest = state.history[state.history.length - 1];
  if (calculateRunwayWeeks() <= 4) {
    state.hadCriticalRunway = true;
  }

  const checks = {
    first_100_users: state.users >= 100,
    first_1000_users: state.users >= 1000,
    growth_machine: state.growthRate >= 25,
    viral_moment: latest?.delta?.users >= 100,
    first_dollar: state.revenue > 0 || state.totalRevenue > 0,
    profitable_week: state.revenue > state.burnRate,
    one_k_revenue: state.totalRevenue >= 1000 || state.revenue >= 1000,
    revenue_engine: state.totalRevenue >= 10000 || state.revenue >= 10000,
    survive_5: state.week >= 5,
    survive_10: state.week >= 10,
    runway_master: state.week >= 6 && calculateRunwayWeeks() >= 16,
    ship_first_upgrade: state.product?.roadmap?.shipped?.length > 0,
    product_market_fit: marketFitRank(marketFitStatus()) >= 2,
    debt_crusher: state.product?.technicalDebt <= 10,
    first_hire: getTeamSize() > 1,
    balanced_team: Object.values(state.team?.roles || {}).filter((count) => count > 0).length >= 3,
    high_morale_team: state.team?.morale >= 90 && getTeamSize() >= 3,
    niche_specialist: state.market?.positioning === "niche" && state.market?.differentiation >= 65,
    strong_market_fit: marketFitStatus() === "Strong Fit" || marketFitStatus() === "Category Leader",
    category_leader: marketFitStatus() === "Category Leader",
    ran_out_of_cash: context.ending?.title === "You ran out of money" || state.cash <= 0,
    reputation_collapse: context.ending?.title === "Users lost trust" || state.reputation <= 0,
    traction_lost: context.ending?.title === "You lost all traction" || state.users <= 0,
    bootstrapped_hero: state.week >= 20 && state.cash > 0,
    unicorn_architect: context.ending?.type === "unicorn",
    comeback_story: state.hadCriticalRunway && calculateRunwayWeeks() >= 10,
  };

  achievementDefinitions.forEach((achievement) => {
    if (checks[achievement.id]) {
      unlockAchievement(achievement.id);
    }
  });
}

function unlockAchievement(id) {
  if (state.achievements[id]) return;
  const achievement = achievementDefinitions.find((item) => item.id === id);
  if (!achievement) return;

  const unlockedAt = `Week ${Math.max(1, state.week)}`;
  state.achievements[id] = {
    unlockedAt,
    date: new Date().toISOString(),
  };
  state.achievementsThisRun.push(id);
  saveAchievements();
  showAchievementToast(achievement);
}

function showAchievementToast(achievement) {
  achievementToast.className = `achievement-toast rarity-${achievement.rarity.toLowerCase()}`;
  achievementToast.innerHTML = `
    <span>🏆 Achievement Unlocked</span>
    <strong>${achievement.title}</strong>
    <small>${achievement.rarity}</small>
  `;
  window.clearTimeout(achievementToastTimer);
  achievementToastTimer = window.setTimeout(() => {
    achievementToast.classList.add("is-hidden");
  }, 2600);
}

function marketFitStatus() {
  const market = state.market;
  if (!market) return "Emerging Fit";
  return calculateMarketFit(
    market.demand,
    market.differentiation,
    state.reputation,
    state.productQuality,
    state.growthRate,
    market.competitorPressure,
  );
}

function marketFitRank(fit) {
  return { "Weak Fit": 0, "Emerging Fit": 1, "Strong Fit": 2, "Category Leader": 3 }[fit] || 0;
}

function makeDecision(decision) {
  if (pendingResolution) return;
  playSound("click");
  const before = captureStats();
  const baseEffects = normalizeEffects(decision.effects);
  const styleAdjusted = applyFounderStyle(baseEffects);
  const typeAdjusted = applyStartupType(styleAdjusted);
  const strategicEffects = applySystemFeedback(typeAdjusted, decision.label);
  const variance = controlledVariance(strategicEffects);
  const finalEffects = combineEffects(strategicEffects, variance);
  const streakBonus = calculateStreakBonus();
  const teamEffects = calculateTeamEffects();
  const productEffects = calculateProductEffects();
  const marketEffects = calculateMarketEffects();

  finalEffects.users += streakBonus.users;
  finalEffects.growthRate += streakBonus.growthRate;
  combineInto(finalEffects, teamEffects);
  combineInto(finalEffects, productEffects);
  combineInto(finalEffects, marketEffects);
  applyCrossSystemEffects(finalEffects, {
    title: activePrompt.title,
    decision: decision.label,
    type: activePrompt.type,
  });
  applyDifficultyCurve(finalEffects);
  const insightEffects = { ...finalEffects };
  routeBurnEffect(finalEffects, `${activePrompt.title} ${decision.label}`);

  const weeklyRevenue = calculateWeeklyRevenue(finalEffects);
  finalEffects.revenue += weeklyRevenue;
  finalEffects.cash += weeklyRevenue - weeklyOperatingCost();

  applyEffects(finalEffects);
  const completedUpgrades = progressProductDevelopment();
  state.peakUsers = Math.max(state.peakUsers, state.users);

  const after = captureStats();
  const delta = diffStats(before, after);
  const outcome = classifyOutcome(delta);
  updateStreak(outcome);
  updateTeamMorale(delta, outcome);
  updateProductPressure(delta);
  updateMarketPressure(delta);
  recalculateDerivedState();
  state.lastDelta = delta;
  state.history.push({
    week: state.week,
    title: activePrompt.title,
    decision: decision.label,
    insight: buildInsight(decision, insightEffects),
    delta,
    outcome,
  });
  state.lastInsight = state.history[state.history.length - 1].insight;
  if (completedUpgrades.length) {
    state.lastInsight += ` Shipped this week: ${completedUpgrades.map((item) => item.label).join(", ")}.`;
  }
  showResultToast(delta, outcome);
  playSound(outcome === "bad" ? "negative" : "positive");

  const ending = evaluateEnding();
  checkAchievements();
  pendingResolution = {
    decision: decision.label,
    delta,
    insight: state.lastInsight,
    outcome,
    ending,
    continueWeek: ending ? null : state.week + 1,
  };
  render();
}

function weeklyOperatingCost() {
  state.burnRate = calculateCurrentBurnRate();
  return state.burnRate;
}

function continueToNextWeek() {
  if (!pendingResolution) return;
  const ending = pendingResolution.ending;
  pendingResolution = null;
  if (ending) {
    checkAchievements({ ending });
    showEnding(ending);
    return;
  }
  state.week += 1;
  decayBurnSourcesForNewWeek();
  activePrompt = nextPrompt();
  render();
}

function applyFounderStyle(effects) {
  const style = founderStyles[startup.style];
  const adjusted = { ...effects };

  adjusted.users = Math.round(adjusted.users * style.growthMultiplier);
  adjusted.growthRate = Math.round(adjusted.growthRate * style.growthMultiplier);
  adjusted.cash = Math.round(adjusted.cash * (adjusted.cash < 0 ? style.cashMultiplier : 1));
  adjusted.reputation = Math.round(adjusted.reputation * style.stability);
  adjusted.productQuality = Math.round(adjusted.productQuality * style.qualityMultiplier);

  if (startup.style === "risk" && adjusted.growthRate > 0) {
    adjusted.burnRate += 45;
  }
  if (startup.style === "conservative" && adjusted.cash < 0) {
    adjusted.burnRate -= 35;
  }

  return adjusted;
}

function applyStartupType(effects) {
  const type = startupTypes[startup.startupType];
  const adjusted = { ...effects };
  const hasMarketLiquidity = startup.startupType === "marketplace" && state.users > 180;
  const usersMultiplier = hasMarketLiquidity ? type.lateUsersMultiplier : type.usersMultiplier;

  adjusted.users = Math.round(adjusted.users * usersMultiplier);
  adjusted.revenue = Math.round(adjusted.revenue * type.revenueMultiplier);
  adjusted.burnRate = Math.round(adjusted.burnRate * type.burnMultiplier);
  adjusted.productQuality += type.qualityDrift;
  adjusted.reputation += type.reputationDrift;

  if (startup.startupType === "agency" && adjusted.users > 14) {
    adjusted.users = 14 + Math.round((adjusted.users - 14) * 0.35);
    adjusted.burnRate += 45;
  }

  if (startup.startupType === "creator" && adjusted.users > 18) {
    adjusted.reputation -= 3;
    adjusted.growthRate += 2;
  }

  if (startup.startupType === "ai" && adjusted.users > 20) {
    adjusted.burnRate += 110;
    adjusted.reputation -= randomBetween(0, 4);
  }

  if (startup.startupType === "marketplace" && state.users < 80) {
    adjusted.revenue -= 90;
    adjusted.growthRate -= 2;
  }

  if (startup.startupType === "saas" && adjusted.productQuality > 0) {
    adjusted.revenue += 140;
  }

  return adjusted;
}

function applySystemFeedback(effects, decisionLabel) {
  const adjusted = { ...effects };
  const runwayWeeks = calculateRunwayWeeks();

  if (state.productQuality < 40 && adjusted.users > 10) {
    adjusted.reputation -= 5;
    adjusted.growthRate -= 3;
    adjusted.users -= Math.round(adjusted.users * 0.2);
  }

  if (state.reputation < 35 && adjusted.users > 0) {
    adjusted.users -= 6;
    adjusted.revenue -= 120;
  }

  if (state.cash < state.burnRate * 2) {
    adjusted.growthRate -= 3;
    adjusted.reputation -= 3;
  }

  if (runwayWeeks <= 3) {
    adjusted.reputation -= state.week <= 10 ? 2 : 5;
    adjusted.growthRate -= state.week <= 10 ? 2 : 5;
    adjusted.users -= Math.max(1, Math.round(state.users * (state.week <= 10 ? 0.025 : 0.06)));
  } else if (runwayWeeks <= 5) {
    adjusted.reputation -= state.week <= 10 ? 1 : 3;
    adjusted.growthRate -= state.week <= 10 ? 1 : 3;
    adjusted.users -= Math.max(1, Math.round(state.users * (state.week <= 10 ? 0.015 : 0.04)));
  } else if (runwayWeeks <= 8) {
    adjusted.growthRate -= state.week <= 10 ? 0 : 1;
    adjusted.reputation -= state.week <= 10 ? 0 : 1;
  }

  if (state.productQuality > 72 && adjusted.reputation > 0) {
    adjusted.users += 5;
    adjusted.revenue += 90;
  }

  return adjusted;
}

function applyDifficultyCurve(effects) {
  const week = state.week;
  const fitRank = marketFitRank(marketFitStatus());
  const hasBalancedBase = state.productQuality >= 62 && state.reputation >= 55 && fitRank >= 1 && calculateRunwayWeeks() >= 5;
  const hasStrongBase = state.productQuality >= 72 && state.reputation >= 65 && fitRank >= 2 && calculateRunwayWeeks() >= 7;
  const growthScale = week <= 10 ? 0.45 : week <= 25 ? 0.62 : week <= 40 ? (hasStrongBase ? 0.88 : hasBalancedBase ? 0.72 : 0.52) : (hasStrongBase ? 0.95 : 0.48);
  const revenueScale = week <= 10 ? 0.62 : week <= 25 ? 0.78 : hasBalancedBase ? 0.95 : 0.72;
  const competitionDrag = state.market?.competitorPressure > 70 ? 4 : state.market?.competitorPressure > 55 ? 2 : 0;

  if (effects.users > 0) {
    const earlyCap = week <= 10 ? 18 : week <= 25 ? Math.max(30, Math.round(state.users * 0.18)) : week <= 40 ? Math.max(42, Math.round(state.users * 0.22)) : Math.max(55, Math.round(state.users * 0.25));
    effects.users = Math.min(Math.round(effects.users * growthScale), earlyCap);
  }
  if (effects.revenue > 0) {
    effects.revenue = Math.round(effects.revenue * revenueScale);
  }
  if (effects.growthRate > 0) {
    effects.growthRate = Math.round(effects.growthRate * growthScale);
  }

  if (week > 10) {
    state.market.competition = clamp(state.market.competition + (week > 40 ? 2 : 1), 0, 100);
    state.market.competitorPressure = clamp(state.market.competitorPressure + (week > 25 ? 2 : 1), 0, 100);
  }

  if (week > 14 && !hasBalancedBase) {
    effects.users -= Math.max(2, Math.round(state.users * 0.025));
    effects.growthRate -= 2 + competitionDrag;
    effects.reputation -= 1;
  }

  if (week > 24) {
    effects.growthRate -= hasStrongBase ? 1 : 4;
    effects.reputation -= hasStrongBase ? 0 : 2;
  }

  return effects;
}

function controlledVariance(effects) {
  const style = founderStyles[startup.style];
  const type = startupTypes[startup.startupType];
  const risk = style.risk * type.risk;
  const swing = Math.round(3 * risk);
  const cashSwing = Math.round(180 * risk);

  return normalizeEffects({
    users: effects.users === 0 ? 0 : randomBetween(-swing, swing + 4),
    revenue: randomBetween(-cashSwing, cashSwing),
    cash: randomBetween(-cashSwing, Math.round(cashSwing * 0.8)),
    growthRate: randomBetween(-Math.ceil(risk * 2), Math.ceil(risk * 2)),
    reputation: randomBetween(-Math.ceil(style.risk * 2), Math.ceil(style.stability * 2)),
    productQuality: randomBetween(-1, 2),
  });
}

function calculateWeeklyRevenue(effects) {
  const productRevenue = simulateProductPortfolio(effects);
  if (activeProducts().length) {
    return productRevenue;
  }

  const type = startupTypes[startup.startupType];
  const userBase = Math.max(0, state.users + effects.users);
  const qualityMultiplier = 0.65 + state.productQuality / 120;
  const reputationMultiplier = 0.65 + state.reputation / 140;
  const monetization = startup.goal === "profit" ? 1.22 : startup.goal === "growth" ? 0.82 : 1;
  const marketplacePenalty = startup.startupType === "marketplace" && userBase < 160 ? 0.58 : 1;
  const agencyCeiling = startup.startupType === "agency" ? Math.min(userBase, 180) : userBase;
  const revenueBase = startup.startupType === "agency" ? agencyCeiling * 7.8 : userBase * 4.3;
  const maturityMultiplier = state.week <= 8 ? 0.7 : state.week <= 20 ? 0.88 : 1;
  const fitMultiplier = 0.78 + marketFitRank(marketFitStatus()) * 0.08;
  return Math.round(revenueBase * qualityMultiplier * reputationMultiplier * monetization * type.revenueMultiplier * marketplacePenalty * maturityMultiplier * fitMultiplier);
}

function simulateProductPortfolio(effects) {
  const products = activeProducts();
  if (!products.length) return 0;

  const fitRank = marketFitRank(marketFitStatus());
  const marketPull = 0.72 + state.market.demand / 120 + fitRank * 0.08;
  const teamGrowth = state.team.roles.marketer * 0.04 + state.team.roles.sales * 0.015;
  const workloadPenalty = Math.max(0, products.length - Math.max(1, state.team.roles.engineer + state.team.roles.operations)) * 0.1;
  let totalRevenue = 0;
  let totalUserDelta = 0;
  let totalReputationDelta = 0;

  products.forEach((product) => {
    const modelKey = state.monetization?.pricingModel || product.pricingModel;
    const model = pricingModels[modelKey] || pricingModels.freemium;
    const price = state.monetization?.price ?? product.price;
    const pressure = productPricePressure(product);
    const qualityScore = (product.productQuality + product.stability + state.reputation) / 3;
    const priceFriction = Math.max(0, pressure.ratio - 1) * 0.18;
    const growthBase = (state.growthRate / 100 + effects.growthRate / 180 + teamGrowth + (qualityScore - 55) / 260) * model.growth * marketPull * pressure.growthMultiplier;
    const churn = Math.max(0.01, calculateProductChurn(product) + workloadPenalty + priceFriction);
    const rawUserDelta = Math.round(product.users * (growthBase - churn) + effects.users / products.length);
    const stageCap = state.week <= 10
      ? Math.max(6, Math.round(product.users * 0.1))
      : state.week <= 25
        ? Math.max(16, Math.round(product.users * 0.15))
        : Math.max(34, Math.round(product.users * 0.2));
    const userDelta = clamp(rawUserDelta, -Math.max(5, Math.round(product.users * 0.18)), stageCap);
    product.users = Math.max(0, product.users + userDelta);
    product.growth = userDelta;

    const conversion = productConversionRate(product, model, fitRank);
    const revenueBaseUsers = modelKey === "oneTime"
      ? Math.max(0, userDelta)
      : modelKey === "enterprise"
        ? Math.max(0, Math.floor(product.users * 0.12))
        : product.users;
    const revenue = modelKey === "free" ? 0 : Math.round(revenueBaseUsers * conversion * price * model.revenue);
    product.revenue = Math.max(0, revenue);
    totalRevenue += product.revenue;
    totalUserDelta += userDelta;

    if (product.stability < 45 || product.technicalDebt > 70) {
      product.productQuality = clamp(product.productQuality - 1, 0, 100);
      totalReputationDelta -= 1;
    }
    if (pressure.warning === "Too Expensive" || pressure.warning === "Enterprise Only") {
      totalReputationDelta -= 1;
    }
    if (product.productQuality >= 72 && product.stability >= 66 && product.users > 25) {
      totalReputationDelta += 1;
    }
  });

  effects.users += totalUserDelta;
  effects.reputation += clamp(totalReputationDelta, -4, 4);
  if (products.length > state.team.roles.engineer + state.team.roles.operations + 1) {
    effects.productQuality -= 1;
    state.team.morale = clamp(state.team.morale - 1, 0, 100);
  }
  syncAggregateProductStats();
  return totalRevenue;
}

function productConversionRate(product, model, fitRank) {
  const modelKey = state.monetization?.pricingModel || product.pricingModel;
  const activeModel = pricingModels[modelKey] || model;
  const price = state.monetization?.price ?? product.price;
  if (price <= 0 || activeModel.conversion === 0) return 0;
  const pressure = productPricePressure(product);
  const qualityLift = (product.productQuality - 50) / 260;
  const reputationLift = (state.reputation - 55) / 320;
  const fitLift = fitRank * 0.018;
  const pricePenalty = activeModel.basePrice > 0 ? Math.max(0, (price - activeModel.basePrice) / (activeModel.basePrice * 10)) : 0;
  const base = clamp(activeModel.conversion + qualityLift + reputationLift + fitLift - pricePenalty, 0.001, 0.42);
  return clamp(base * pressure.conversionMultiplier, 0.0001, 0.42);
}

function calculateProductChurn(product) {
  const model = pricingModels[state.monetization?.pricingModel || product.pricingModel] || pricingModels.freemium;
  const pressure = productPricePressure(product);
  const qualityRisk = (100 - product.productQuality) / 620;
  const stabilityRisk = (100 - product.stability) / 520;
  const debtRisk = product.technicalDebt / 920;
  const expectationRisk = (model.expectation - 1) * 0.04;
  return qualityRisk + stabilityRisk + debtRisk + expectationRisk + pressure.churnPenalty;
}

function productPricePressure(product) {
  const segmentKey = segmentKeyForProduct(product);
  const tolerance = segmentPriceTolerance[segmentKey] || 55;
  const modelKey = state.monetization?.pricingModel || product.pricingModel;
  const price = state.monetization?.price ?? product.price;
  const model = pricingModels[modelKey] || pricingModels.freemium;
  if (modelKey === "free" || price <= 0) {
    return { ratio: 0, conversionMultiplier: 1, growthMultiplier: 1.12, churnPenalty: 0, warning: "Fair Price" };
  }
  const enterpriseUnqualified = modelKey === "enterprise" && !enterpriseQualified();
  const ratio = price / Math.max(1, tolerance);
  let conversionMultiplier = 1 / Math.pow(Math.max(1, ratio), modelKey === "enterprise" ? 1.35 : 2.25);
  let growthMultiplier = 1 / Math.pow(Math.max(1, ratio), modelKey === "enterprise" ? 0.8 : 1.4);
  let churnPenalty = Math.max(0, ratio - 1) * 0.045;
  let warning = "Fair Price";
  if (ratio > 1.15) warning = "Expensive";
  if (ratio > 1.8) warning = "Too Expensive";
  if (modelKey === "enterprise") warning = enterpriseUnqualified ? "Enterprise Only" : ratio > 1.2 ? "Expensive" : "Fair Price";
  if (enterpriseUnqualified) {
    conversionMultiplier *= 0.04;
    growthMultiplier *= 0.35;
    churnPenalty += 0.08;
  }
  if (ratio > 2.5) {
    conversionMultiplier *= 0.1;
    growthMultiplier *= 0.35;
    churnPenalty += 0.08;
  }
  return {
    ratio,
    conversionMultiplier: clamp(conversionMultiplier, 0.01, 1.2),
    growthMultiplier: clamp(growthMultiplier, 0.08, 1.15),
    churnPenalty: clamp(churnPenalty, 0, 0.3),
    warning,
  };
}

function enterpriseQualified() {
  return state.productQuality >= 70 && state.reputation >= 65 && marketFitRank(marketFitStatus()) >= 2;
}

function segmentKeyForProduct(product) {
  const text = `${product.targetSegment || ""} ${state.market?.segment || ""}`.toLowerCase();
  if (text.includes("student")) return "students";
  if (text.includes("creator")) return "creators";
  if (text.includes("developer")) return "developers";
  if (text.includes("enterprise")) return "enterprises";
  if (text.includes("business")) return "smallBusinesses";
  return state.market?.segment || "founders";
}

function applyEffects(effects) {
  routeBurnEffect(effects);
  if (!activeProducts().length) {
    state.users = Math.max(0, Math.round(state.users + effects.users));
  }
  state.revenue = activeProducts().length ? Math.max(0, Math.round(effects.revenue || state.revenue)) : Math.max(0, Math.round(state.revenue + effects.revenue));
  state.totalRevenue = Math.max(0, Math.round(state.totalRevenue + Math.max(0, effects.revenue)));
  state.cash = Math.round(state.cash + effects.cash);
  state.burnRate = calculateCurrentBurnRate();
  state.reputation = clamp(Math.round(state.reputation + effects.reputation), 0, 100);
  state.productQuality = clamp(Math.round(state.productQuality + effects.productQuality), 0, 100);
  state.growthRate = clamp(Math.round(state.growthRate + effects.growthRate), -35, 80);
}

function evaluateEnding() {
  if (state.cash <= 0) {
    return { type: "failure", title: "You ran out of money", reason: "Cash hit zero before the business could support its burn." };
  }
  if (state.users <= 0) {
    return { type: "failure", title: "You lost all traction", reason: "The user base hit zero, leaving no one to learn from or sell to." };
  }
  if (state.reputation <= 0) {
    return { type: "failure", title: "Users lost trust", reason: "Reputation collapsed, making acquisition and retention impossible." };
  }

  const fitRank = marketFitRank(marketFitStatus());
  const runwayWeeks = calculateRunwayWeeks();
  const balancedWin = state.productQuality >= 65 && state.reputation >= 60 && fitRank >= 2 && runwayWeeks >= 5;

  if (state.week >= MIN_SUCCESS_WEEK && state.users >= 25000 && state.revenue >= 180000 && state.growthRate >= 24 && balancedWin) {
    return { type: "unicorn", title: "Unicorn", reason: "You hit breakout scale before the clock ran out." };
  }

  if (state.week >= MAX_WEEKS) {
    if (state.users >= 10000 && state.revenue >= 90000 && state.growthRate >= 18 && balancedWin) {
      return { type: "success", title: "High Growth Startup", reason: "You built a fast-growing company with serious market pull and enough operating discipline to keep going." };
    }
    if (state.revenue >= state.burnRate * 6 && state.cash > 0 && state.productQuality >= 60 && state.reputation >= 55 && fitRank >= 1) {
      return { type: "success", title: "Profitable Business", reason: "You created a steady business that can support its costs without losing trust or product quality." };
    }
    if (state.users >= 6500 && state.growthRate >= 14 && state.revenue >= 40000 && balancedWin) {
      return { type: "success", title: "High Growth Startup", reason: "You survived with strong audience momentum and a balanced foundation." };
    }
    return { type: "success", title: "Small Profitable Business", reason: "You survived the startup gauntlet, but the company still needs better balance before it can claim a stronger ending." };
  }

  return null;
}

function showEnding(ending) {
  const score = calculateGoalScore();
  const previousBest = bestRunBy(loadRunHistory().filter((run) => run.id !== state.runId), (run) => run.score || 0);
  persistCurrentRun(ending.type === "failure" ? "failed" : "completed", { includeHistory: true, ending });
  simulationPage.classList.add("is-hidden");
  endingPage.classList.remove("is-hidden");
  endingPage.classList.toggle("ending-failure", ending.type === "failure");
  endingPage.classList.toggle("ending-success", ending.type === "success");
  endingPage.classList.toggle("ending-unicorn", ending.type === "unicorn");
  endingEyebrow.textContent = ending.type === "failure" ? "Run failed" : "Run complete";
  endingTitle.textContent = endingTitleFor(ending);
  endingReason.textContent = ending.reason;
  summaryWeeks.textContent = state.week;
  summaryPeakUsers.textContent = state.peakUsers.toLocaleString();
  summaryRevenue.textContent = formatMoney(state.totalRevenue);
  summaryScore.textContent = `${score} / 1000`;
  endingInsight.textContent = `${goals[startup.goal].endingText} Best streak: ${state.bestStreak}. Final cash: ${formatMoney(state.cash)}. Final runway: ${calculateRunwayWeeks()} weeks.`;
  endingScoreComparison.textContent = previousBest
    ? `Previous best: ${previousBest.score || 0}. ${score > (previousBest.score || 0) ? "New archive record." : `${Math.max(0, (previousBest.score || 0) - score)} points short of your best.`}`
    : "First archived run. Future runs will compare against this score.";
  renderKeyDecisions();
  renderEndingAchievements();
  playSound(ending.type === "failure" ? "negative" : "positive");
}

function calculateGoalScore() {
  const survival = clamp((state.week / MAX_WEEKS) * 220, 0, 220);
  const userScore = clamp(Math.sqrt(state.peakUsers) * 16, 0, 230);
  const revenueScore = clamp(Math.sqrt(state.totalRevenue) * 3.1, 0, 230);
  const growthScore = clamp((state.growthRate + 35) * 3.2, 0, 210);
  const resilienceScore = clamp(state.reputation * 1.1 + state.productQuality * 0.8 + Math.max(0, state.cash) / 180, 0, 210);

  const scoreMap = {
    profit: survival + revenueScore * 1.55 + userScore * 0.55 + growthScore * 0.35 + resilienceScore * 0.7,
    growth: survival + userScore * 1.5 + growthScore * 1.12 + revenueScore * 0.48 + resilienceScore * 0.35,
    stability: survival + resilienceScore * 1.65 + revenueScore * 0.75 + userScore * 0.35 + growthScore * 0.3,
  };

  const streakBonus = clamp(state.bestStreak * 12, 0, 120);
  return clamp(Math.round(scoreMap[startup.goal] + streakBonus), 0, 1000);
}

function endingTitleFor(ending) {
  if (ending.type === "failure") {
    return "💀 Your Startup Failed";
  }
  if (ending.type === "unicorn") {
    return "🦄 Unicorn";
  }
  if (ending.title.includes("High Growth")) {
    return "🚀 High Growth Startup";
  }
  if (ending.title.includes("Profitable")) {
    return "💰 Profitable Business";
  }
  return ending.title;
}

function renderKeyDecisions() {
  keyDecisionsList.innerHTML = "";
  const keyEntries = [...state.history]
    .sort((a, b) => decisionImpactScore(b.delta) - decisionImpactScore(a.delta))
    .slice(0, 3);

  if (keyEntries.length === 0) {
    const item = document.createElement("li");
    item.textContent = "No major decisions recorded.";
    keyDecisionsList.append(item);
    return;
  }

  keyEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Week ${entry.week}: ${entry.decision}</strong><span>${formatPlainDelta(entry.delta)}</span>`;
    keyDecisionsList.append(item);
  });
}

function renderEndingAchievements() {
  endingAchievementsList.innerHTML = "";
  const unlockedThisRun = state.achievementsThisRun
    .map((id) => achievementDefinitions.find((achievement) => achievement.id === id))
    .filter(Boolean);
  const totalUnlocked = Object.keys(state.achievements || {}).length;
  const completion = Math.round((totalUnlocked / achievementDefinitions.length) * 100);
  const rank = founderRankFor(completion);

  if (unlockedThisRun.length === 0) {
    endingAchievementsList.innerHTML = `<p>No new trophies this run. Total completion: ${completion}% · ${rank.title}.</p>`;
    return;
  }

  endingAchievementsList.innerHTML = `
    <p>${unlockedThisRun.length} new trophy${unlockedThisRun.length === 1 ? "" : "ies"} · ${completion}% complete · ${rank.title}</p>
    <div>
      ${unlockedThisRun.map((achievement) => `<span class="ending-achievement-pill rarity-${achievement.rarity.toLowerCase()}">${achievement.title}</span>`).join("")}
    </div>
  `;
}

function decisionImpactScore(delta) {
  return Math.abs(delta.users || 0) + Math.abs(delta.revenue || 0) / 40 + Math.abs(delta.cash || 0) / 60 + Math.abs(delta.reputation || 0) * 5 + Math.abs(delta.growthRate || 0) * 4;
}

function nextPrompt() {
  turnsUntilEvent -= 1;
  if (turnsUntilEvent <= 0) {
    turnsUntilEvent = state.week <= 10 ? randomBetween(2, 3) : state.week >= 18 ? randomBetween(1, 2) : randomBetween(1, 3);
    const stateDrivenPrompt = chooseStateDrivenEvent(activePrompt.title);
    if (stateDrivenPrompt) {
      return stateDrivenPrompt;
    }
    if (shouldTriggerSetback()) {
      return choosePrompt(randomEvents.filter((event) => event.title.includes("churn") || event.title.includes("slow growth") || event.title.includes("Support load") || event.title.includes("bug") || event.title.includes("crash")), activePrompt.title);
    }
    if (state.market && (state.market.competitorPressure >= 58 || rng() < (state.week >= 16 ? 0.42 : 0.3))) {
      return choosePrompt(marketEvents, activePrompt.title);
    }
    return choosePrompt(randomEvents, activePrompt.title);
  }
  state.currentEventImpact = "";
  return choosePrompt(scenarios, activePrompt.title);
}

function chooseStateDrivenEvent(avoidTitle = "") {
  const candidates = [];
  const products = activeProducts();
  const weakestProduct = products.sort((a, b) => (a.stability + a.productQuality - a.technicalDebt) - (b.stability + b.productQuality - b.technicalDebt))[0];
  const modelKey = state.monetization?.pricingModel || "freemium";
  const globalBasePrice = pricingModels[modelKey]?.basePrice || 0;
  const globalPrice = state.monetization?.price ?? 0;
  const priceyWeakProduct = products.find((product) => globalPrice > globalBasePrice * 1.35 && product.productQuality < 60);

  const recoveryCandidate =
    calculateRunwayWeeks() <= 5 ? "Runway triage meeting."
      : state.users < 25 && state.week >= 4 ? "Traction recovery sprint."
      : state.reputation < 42 ? "Trust repair window."
      : "";
  if (recoveryCandidate && recoveryCandidate !== avoidTitle) {
    const prompt = recoveryPrompts.find((item) => item.title === recoveryCandidate);
    if (prompt) return prompt;
  }

  if (weakestProduct?.technicalDebt >= 65 || weakestProduct?.stability <= 42) {
    candidates.push("High churn due to product bugs.", "Low conversion rate worries the team.");
  }
  if (priceyWeakProduct) {
    candidates.push("Pricing backlash hits your product.");
  }
  if (products.some((product) => product.productQuality >= 72 && product.growth > 8)) {
    candidates.push("Users love your new feature.");
  }
  if (state.product?.technicalDebt >= 62 || state.product?.stability <= 42) {
    candidates.push("Technical debt is slowing releases.", "A bug caused churn.", "A server crash takes the app down.");
  }
  if (state.team?.morale <= 42) {
    candidates.push("Your lead engineer is burned out.", "Support load is eating the roadmap.");
  }
  if (state.market?.competitorPressure >= 68 && state.market?.differentiation < 58) {
    candidates.push("Competitor launched a similar product.", "A bigger company undercuts your pricing.");
  }
  if (calculateRunwayWeeks() <= 4) {
    candidates.push("A slow growth period shakes confidence.", "Marketing wants more budget.");
  }
  if (state.productQuality < 52 && state.growthRate >= 10) {
    candidates.push("User backlash starts spreading on social media.", "User churn spikes after a weak retention week.");
  }
  if (marketFitRank(marketFitStatus()) >= 2 && state.productQuality >= 70 && state.reputation >= 65) {
    candidates.push("Your product went viral overnight.", "A niche community starts talking about your product.");
  }

  if (!candidates.length || rng() > (state.week <= 10 ? 0.88 : 0.72)) return null;
  const pool = [...randomEvents, ...marketEvents].filter((event) => candidates.includes(event.title));
  return pool.length ? choosePrompt(pool, avoidTitle) : null;
}

function shouldTriggerSetback() {
  const runwayWeeks = calculateRunwayWeeks();
  if (state.week <= 6 && runwayWeeks > 4 && state.reputation >= 45 && state.productQuality >= 45) {
    return false;
  }
  const pressure =
    (runwayWeeks <= 5 ? (state.week <= 10 ? 0.12 : 0.24) : 0) +
    (state.productQuality < 55 ? (state.week <= 10 ? 0.08 : 0.16) : 0) +
    (state.reputation < 55 ? (state.week <= 10 ? 0.07 : 0.14) : 0) +
    (state.market?.competitorPressure > 60 ? 0.14 : 0) +
    (state.week >= 26 ? 0.2 : state.week >= 11 ? 0.1 : 0);
  return rng() < Math.min(0.58, pressure);
}

function choosePrompt(pool, avoidTitle = "") {
  let prompt = pool[randomIndex(pool.length)];
  if (pool.length > 1) {
    while (prompt.title === avoidTitle) {
      prompt = pool[randomIndex(pool.length)];
    }
  }
  return prompt;
}

function buildInsight(decision, effects) {
  const tradeoff = strongestTradeoff(effects);
  const runwayWeeks = calculateRunwayWeeks();
  const runwayWarning = runwayWeeks <= 4
    ? ` Runway is critical at ${runwayWeeks} weeks, so every burn increase is dangerous.`
    : runwayWeeks <= 8
      ? ` Runway is getting tight at ${runwayWeeks} weeks.`
      : "";
  return `${decision.insight} ${tradeoff}${runwayWarning}`;
}

function strongestTradeoff(effects) {
  if (effects.users > 20 && effects.productQuality < 0) {
    return "The trade-off is clear: acquisition climbed while product quality took a hit.";
  }
  if (effects.users < 0) {
    const expensiveProduct = activeProducts().some((product) => {
      const warning = productPricePressure(product).warning;
      return warning === "Too Expensive" || warning === "Enterprise Only";
    });
    if (expensiveProduct) {
      return "Users dropped because the current price creates too much conversion friction for this audience.";
    }
    if (state.productQuality < 50 || state.product?.stability < 50) {
      return "Users dropped because product quality or stability is making retention harder.";
    }
  }
  if (effects.cash < -900 && effects.growthRate > 4) {
    return "You bought momentum with runway, so cash management matters more next week.";
  }
  if (effects.burnRate > 0) {
    return "Burn increased because this move added ongoing operating spend, now visible in Burn Sources.";
  }
  if (effects.burnRate < 0) {
    return "Burn decreased because you reduced optional operating load instead of only chasing growth.";
  }
  if (effects.productQuality > 7 && effects.growthRate < 0) {
    return "Quality improved, but short-term growth slowed while the team focused inward.";
  }
  if (effects.reputation < -4) {
    return "The move created pressure on trust, which can weaken future retention.";
  }
  if (effects.revenue > 900 || effects.cash > 900) {
    return "The company gained financial breathing room, opening more strategic options.";
  }
  return "The result nudged multiple parts of the business instead of moving one stat in isolation.";
}

function renderHistory() {
  historyList.innerHTML = "";

  if (state.history.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "timeline-entry current-entry";
    emptyItem.innerHTML = `
      <div class="week-chip">Week ${state.week}</div>
      <div>
        <mark>${promptBadge(activePrompt)}</mark>
        <strong>${activePrompt.title}</strong>
        <span>${activePrompt.text}</span>
      </div>
    `;
    historyList.append(emptyItem);
    return;
  }

  state.history.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "timeline-entry";
    item.innerHTML = `
      <div class="week-chip">Week ${entry.week}</div>
      <div>
        <mark>${entry.outcome === "bad" ? "Damage Report" : entry.outcome === "good" ? "Momentum Log" : "Founder Note"}</mark>
        <strong>${entry.title}</strong>
        <span>You chose: ${entry.decision}</span>
        <small>${formatDelta(entry.delta)}</small>
        <p>${entry.insight}</p>
      </div>
    `;
    historyList.append(item);
  });

  const currentItem = document.createElement("li");
  currentItem.className = "timeline-entry current-entry";
  currentItem.innerHTML = `
    <div class="week-chip">Week ${state.week}</div>
    <div>
      <mark>${promptBadge(activePrompt)}</mark>
      <strong>${activePrompt.title}</strong>
      <span>${activePrompt.text}</span>
    </div>
  `;
  historyList.append(currentItem);
  historyList.scrollTop = historyList.scrollHeight;
}

function promptBadge(prompt) {
  if (prompt.type === "event") {
    if (prompt.title.toLowerCase().includes("user") || prompt.title.toLowerCase().includes("onboarding")) {
      return "User Feedback";
    }
    return "Market Event";
  }
  return "Week Report";
}

function renderTimelineView() {
  const entries = state.history.map((entry) => ({
    ...entry,
    eventType: inferEventType(entry),
    impact: timelineImpactScore(entry.delta),
  }));
  const visibleEntries = entries.filter((entry) => matchesTimelineFilter(entry, activeTimelineFilter));

  summarySurvived.textContent = state.history.length;
  const bestEntry = [...entries].sort((a, b) => b.impact - a.impact)[0];
  const worstEntry = [...entries].sort((a, b) => a.impact - b.impact)[0];
  const growthEntry = [...entries].sort((a, b) => b.delta.users - a.delta.users)[0];
  summaryBestWeek.textContent = bestEntry ? `Week ${bestEntry.week}` : "-";
  summaryWorstWeek.textContent = worstEntry ? `Week ${worstEntry.week}` : "-";
  summaryGrowthMoment.textContent = growthEntry && growthEntry.delta.users > 0 ? `+${growthEntry.delta.users} users` : "-";
  trajectoryLabel.textContent = `Current trajectory: ${currentTrajectory()}`;

  timelineDetailList.innerHTML = "";

  if (state.history.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "timeline-empty";
    emptyItem.textContent = "Your founder story will appear here after your first decision.";
    timelineDetailList.append(emptyItem);
    return;
  }

  if (visibleEntries.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "timeline-empty";
    emptyItem.textContent = "No entries match this filter yet.";
    timelineDetailList.append(emptyItem);
    return;
  }

  visibleEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.className = `timeline-detail-entry ${entry.outcome === "good" ? "entry-win" : entry.outcome === "bad" ? "entry-loss" : "entry-mixed"} ${entry.week === state.week - 1 ? "latest-entry" : ""}`;
    item.innerHTML = `
      <div class="timeline-node">${entry.eventType.icon}</div>
      <article>
        <div class="timeline-detail-top">
          <span>Week ${entry.week}</span>
          <mark>${entry.eventType.label}</mark>
        </div>
        <h3>${entry.title}</h3>
        <p class="decision-line">Decision: ${entry.decision}</p>
        <p class="outcome-line">${timelineOutcomeSummary(entry)}</p>
        <small>${formatDelta(entry.delta)}</small>
        <p>${entry.insight}</p>
      </article>
    `;
    timelineDetailList.append(item);
  });
}

function inferEventType(entry) {
  if (entry.eventTypeOverride) {
    const iconMap = {
      "Team Event": "TM",
      "Product Event": "PR",
      "Market Event": "ME",
      "Crisis Event": "CR",
    };
    const groupMap = {
      "Team Event": "team",
      "Product Event": "product",
      "Market Event": "market",
      "Crisis Event": "losses",
    };
    return { label: entry.eventTypeOverride, icon: iconMap[entry.eventTypeOverride] || "FN", group: groupMap[entry.eventTypeOverride] || "all" };
  }
  const text = `${entry.title} ${entry.decision} ${entry.insight}`.toLowerCase();

  if (entry.week === 1) return { label: "Launch Day", icon: "LD", group: "market" };
  if (text.includes("viral") || entry.delta.users >= 30) return { label: "Growth Spike", icon: "GS", group: "wins" };
  if (text.includes("user") || text.includes("onboarding") || text.includes("complain")) return { label: "User Feedback", icon: "UF", group: "product" };
  if (text.includes("market") || text.includes("partnership") || text.includes("launch") || text.includes("pricing") || text.includes("positioning") || text.includes("community") || text.includes("regulation")) return { label: "Market Event", icon: "ME", group: "market" };
  if (text.includes("outage") || text.includes("crash") || text.includes("quality") || text.includes("reliability")) return { label: "Product Crisis", icon: "PC", group: "product" };
  if (text.includes("runway") || text.includes("cash") || text.includes("burn")) return { label: "Failure Risk", icon: "FR", group: "losses" };
  if (text.includes("competitor")) return { label: "Competitor Move", icon: "CM", group: "market" };
  if (entry.outcome === "bad" || entry.delta.cash < -1200 || entry.delta.reputation <= -6) return { label: "Failure Risk", icon: "FR", group: "losses" };
  if (entry.outcome === "good") return { label: "Small Win", icon: "SW", group: "wins" };
  return { label: "Founder Note", icon: "FN", group: "all" };
}

function matchesTimelineFilter(entry, filter) {
  if (filter === "all") return true;
  if (filter === "wins") return entry.outcome === "good" || entry.eventType.group === "wins";
  if (filter === "losses") return entry.outcome === "bad" || entry.eventType.group === "losses";
  if (filter === "market") return entry.eventType.group === "market";
  if (filter === "product") return entry.eventType.group === "product";
  if (filter === "team") return entry.eventType.group === "team";
  return true;
}

function timelineImpactScore(delta) {
  return (delta.users || 0) + (delta.reputation || 0) * 5 + (delta.growthRate || 0) * 4 + (delta.revenue || 0) / 80 + (delta.cash || 0) / 160;
}

function timelineOutcomeSummary(entry) {
  if (entry.outcome === "good") {
    return "Momentum improved after this call.";
  }
  if (entry.outcome === "bad") {
    return "This decision increased pressure on the company.";
  }
  return "A trade-off move with mixed consequences.";
}

function currentTrajectory() {
  const recent = state.history.slice(-3);
  const recentScore = recent.reduce((score, entry) => score + timelineImpactScore(entry.delta), 0);
  const runwayWeeks = calculateRunwayWeeks();

  if (runwayWeeks <= 4 || recentScore < -20 || state.reputation < 35) return "Risky";
  if (recentScore > 35 || state.growthRate >= 15) return "Rising";
  return "Stable";
}

function setCenterView(view) {
  activeCenterView = view;
  simulationPage.dataset.activeView = view;
  overviewView.classList.toggle("is-hidden", view !== "overview");
  timelineView.classList.toggle("is-hidden", view !== "timeline");
  teamView.classList.toggle("is-hidden", view !== "team");
  productView.classList.toggle("is-hidden", view !== "product");
  marketView.classList.toggle("is-hidden", view !== "market");
  runsView.classList.toggle("is-hidden", view !== "runs");
  achievementsView.classList.toggle("is-hidden", view !== "achievements");
  dossierNavButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  if (view === "timeline") {
    renderTimelineView();
  }
  if (view === "team") {
    renderTeamView();
  }
  if (view === "product") {
    renderProductView();
  }
  if (view === "market") {
    renderMarketView();
  }
  if (view === "runs") {
    renderRunsView();
  }
  if (view === "achievements") {
    renderAchievementsView();
  }
}

function setTimelineFilter(filter) {
  activeTimelineFilter = filter;
  timelineFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderTimelineView();
}

function setAchievementFilter(kind, value) {
  if (kind === "category") {
    activeAchievementCategory = value;
  } else if (kind === "rarity") {
    activeAchievementRarity = value;
  } else {
    activeAchievementStatus = value;
  }
  updateAchievementFilterButtons();
  renderAchievementsView();
}

function updateAchievementFilterButtons() {
  achievementCategoryFilters.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.achievementCategory === activeAchievementCategory);
  });
  achievementRarityFilters.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.achievementRarity === activeAchievementRarity);
  });
  achievementStatusFilters.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.achievementStatus === activeAchievementStatus);
  });
}

function renderAchievementsView() {
  if (!state.achievements) return;

  const achievements = achievementDefinitions.map((definition) => ({
    ...definition,
    unlocked: Boolean(state.achievements[definition.id]),
    unlockedAt: state.achievements[definition.id]?.unlockedAt || null,
  }));
  const unlockedCount = achievements.filter((achievement) => achievement.unlocked).length;
  const totalCount = achievements.length;
  const completion = totalCount ? Math.round((unlockedCount / totalCount) * 100) : 0;
  const rank = founderRankFor(completion);

  achievementsUnlockedStat.textContent = unlockedCount;
  achievementsTotalStat.textContent = totalCount;
  achievementsCompletionStat.textContent = `${completion}%`;
  achievementsCompletionBar.style.width = `${completion}%`;
  achievementsRunStat.textContent = state.achievementsThisRun.length;
  achievementRankBadge.textContent = rank.title;
  achievementRankLine.textContent = `${rank.title} · ${unlockedCount}/${totalCount} trophies archived.`;

  const visible = achievements.filter(matchesAchievementFilters);
  achievementGrid.innerHTML = "";

  if (visible.length === 0) {
    const empty = document.createElement("article");
    empty.className = "achievement-empty";
    empty.textContent = "No achievements match these filters yet.";
    achievementGrid.append(empty);
    return;
  }

  visible.forEach((achievement) => {
    const card = document.createElement("article");
    card.className = `achievement-card ${achievement.unlocked ? "unlocked" : "locked"} rarity-${achievement.rarity.toLowerCase()}`;
    card.innerHTML = `
      <div class="achievement-icon">${achievement.unlocked ? "🏆" : "◆"}</div>
      <div>
        <div class="achievement-card-top">
          <span>${achievement.category}</span>
          <mark>${achievement.rarity}</mark>
        </div>
        <h3>${achievement.title}</h3>
        <p>${achievement.description}</p>
        <small>${achievement.unlocked ? `Unlocked ${achievement.unlockedAt}` : achievement.reward}</small>
      </div>
    `;
    achievementGrid.append(card);
  });
}

function renderRunsView() {
  const history = loadRunHistory();
  const activeRun = state.runId ? currentRunSnapshot("active") : readStorageJson(currentRunStorageKey, null);
  const runs = activeRun
    ? [activeRun, ...history.filter((run) => run.id !== activeRun.id)]
    : history;

  runsArchiveCount.textContent = `${history.length} saved`;
  runsArchiveLine.textContent = history.length
    ? "Founder archive ready. Compare outcomes, delete old files, or relaunch a setup."
    : "No saved runs yet. Save your current run to begin the archive.";

  renderBestRunsPanel(history);
  renderRunCompareControls(history);
  renderRunHistoryList(runs);
}

function renderBestRunsPanel(history) {
  const bestScore = bestRunBy(history, (run) => run.score || 0);
  const longest = bestRunBy(history, (run) => run.finalWeek || 0);
  const revenue = bestRunBy(history, (run) => run.totalRevenue || 0);
  const users = bestRunBy(history, (run) => run.peakUsers || 0);
  const ending = bestRunBy(history, (run) => endingRank(run));
  const cards = [
    ["Best score", bestScore ? `${bestScore.score} pts` : "-", bestScore?.name],
    ["Longest survival", longest ? `${longest.finalWeek} weeks` : "-", longest?.name],
    ["Highest revenue", revenue ? formatMoney(revenue.totalRevenue) : "-", revenue?.name],
    ["Highest users", users ? users.peakUsers.toLocaleString() : "-", users?.name],
    ["Best ending", ending ? ending.endingType || ending.status : "-", ending?.name],
  ];

  bestRunsPanel.innerHTML = cards.map(([label, value, name]) => `
    <article>
      <span>${label}</span>
      <strong>${escapeHTML(value)}</strong>
      <p>${name ? escapeHTML(name) : "Archive empty"}</p>
    </article>
  `).join("");
}

function bestRunBy(history, getValue) {
  return [...history].sort((a, b) => getValue(b) - getValue(a))[0] || null;
}

function endingRank(run) {
  const ending = `${run.endingType || ""}`.toLowerCase();
  if (ending.includes("unicorn")) return 5;
  if (ending.includes("high growth")) return 4;
  if (ending.includes("profitable")) return 3;
  if (run.status === "completed") return 2;
  if (run.status === "active") return 1;
  return 0;
}

function renderRunCompareControls(history) {
  const options = history.map((run) => `<option value="${run.id}">${escapeHTML(run.name)} · ${run.score || 0} pts</option>`).join("");
  const emptyOption = `<option value="">Select run</option>`;
  compareRunA.innerHTML = emptyOption + options;
  compareRunB.innerHTML = emptyOption + options;
  if (history[0]) compareRunA.value = history[0].id;
  if (history[1]) compareRunB.value = history[1].id;
  renderRunComparison();
}

function renderRunComparison() {
  const history = loadRunHistory();
  const runA = history.find((run) => run.id === compareRunA.value);
  const runB = history.find((run) => run.id === compareRunB.value);
  if (!runA || !runB) {
    runCompareResult.innerHTML = `<p>Select two saved runs to compare.</p>`;
    return;
  }

  const rows = [
    ["Score", `${runA.score || 0}`, `${runB.score || 0}`],
    ["Weeks", `${runA.finalWeek || 0}`, `${runB.finalWeek || 0}`],
    ["Peak users", (runA.peakUsers || 0).toLocaleString(), (runB.peakUsers || 0).toLocaleString()],
    ["Total revenue", formatMoney(runA.totalRevenue || 0), formatMoney(runB.totalRevenue || 0)],
    ["Reputation", `${runA.finalStats?.reputation || 0}`, `${runB.finalStats?.reputation || 0}`],
    ["Product", `${runA.finalStats?.productQuality || 0}`, `${runB.finalStats?.productQuality || 0}`],
    ["Ending", runA.endingType || runA.status, runB.endingType || runB.status],
  ];

  runCompareResult.innerHTML = `
    <table>
      <thead><tr><th>Metric</th><th>${escapeHTML(runA.name)}</th><th>${escapeHTML(runB.name)}</th></tr></thead>
      <tbody>${rows.map(([label, a, b]) => `<tr><td>${label}</td><td>${escapeHTML(a)}</td><td>${escapeHTML(b)}</td></tr>`).join("")}</tbody>
    </table>
  `;
}

function renderRunHistoryList(runs) {
  runHistoryList.innerHTML = "";
  if (!runs.length) {
    const empty = document.createElement("article");
    empty.className = "run-card";
    empty.innerHTML = `<h3>No runs saved yet</h3><p>Use Save Run after starting a simulation to archive the current founder file.</p>`;
    runHistoryList.append(empty);
    return;
  }

  runs.forEach((run) => {
    const card = document.createElement("article");
    const isLiveRun = state.runId === run.id && run.status === "active";
    card.className = `run-card status-${run.status}`;
    card.dataset.runId = run.id;
    card.innerHTML = `
      <div class="run-card-top">
        <div>
          <span class="status-badge">${run.status}</span>
          <h3>${escapeHTML(run.name)}</h3>
          <p>${escapeHTML(startupTypes[run.startupType]?.label || run.startupType)} · ${escapeHTML(founderStyles[run.founderStyle]?.label || run.founderStyle)} · ${escapeHTML(goals[run.goal]?.label || run.goal)}</p>
        </div>
        <strong>${run.score || 0}</strong>
      </div>
      <dl class="run-stats">
        <div><dt>Weeks</dt><dd>${run.finalWeek || 0}</dd></div>
        <div><dt>Peak users</dt><dd>${(run.peakUsers || 0).toLocaleString()}</dd></div>
        <div><dt>Revenue</dt><dd>${formatMoney(run.totalRevenue || 0)}</dd></div>
        <div><dt>Ending</dt><dd>${escapeHTML(run.endingType || run.status)}</dd></div>
        <div><dt>Date</dt><dd>${formatRunDate(run.startedAt)}</dd></div>
      </dl>
      <div class="run-summary">
        <p>${(run.timelineSummary || []).map(escapeHTML).join("</p><p>") || "No timeline summary saved."}</p>
      </div>
      <div class="run-actions">
        <button type="button" data-run-action="view" data-run-id="${run.id}">View Summary</button>
        <button type="button" data-run-action="restart" data-run-id="${run.id}">Restart Setup</button>
        ${isLiveRun ? "" : `<button type="button" data-run-action="delete" data-run-id="${run.id}">Delete</button>`}
      </div>
    `;
    runHistoryList.append(card);
  });
}

function formatRunDate(dateString) {
  if (!dateString) return "-";
  try {
    return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", year: "numeric" }).format(new Date(dateString));
  } catch {
    return "-";
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

function handleRunHistoryAction(event) {
  const button = event.target.closest("button[data-run-action]");
  if (!button) return;
  const id = button.dataset.runId;
  const action = button.dataset.runAction;
  const history = loadRunHistory();
  const run = history.find((item) => item.id === id) || (state.runId === id ? currentRunSnapshot("active") : null);
  if (!run) return;

  if (action === "view") {
    button.closest(".run-card")?.classList.toggle("is-expanded");
    return;
  }
  if (action === "delete") {
    saveRunHistory(history.filter((item) => item.id !== id));
    const current = readStorageJson(currentRunStorageKey, null);
    if (current?.id === id) {
      localStorage.removeItem(currentRunStorageKey);
    }
    renderRunsView();
    showRunMessage("Run deleted");
    return;
  }
  if (action === "restart") {
    startRunFromSnapshot(run);
  }
}

function startRunFromSnapshot(run) {
  abandonCurrentRun();
  const formData = new FormData();
  formData.set("idea", run.startupIdea || run.name || "New startup");
  formData.set("audience", run.startupAudience || "early adopters");
  formData.set("niche", run.startupNiche || "replay strategy");
  formData.set("startupType", run.startupType || "saas");
  formData.set("style", run.founderStyle || "balanced");
  formData.set("goal", run.goal || "profit");
  startGame(formData);
}

function matchesAchievementFilters(achievement) {
  const categoryMatch = activeAchievementCategory === "all" || achievement.category.toLowerCase() === activeAchievementCategory;
  const rarityMatch = activeAchievementRarity === "all" || achievement.rarity.toLowerCase() === activeAchievementRarity;
  const statusMatch =
    activeAchievementStatus === "all" ||
    (activeAchievementStatus === "unlocked" && achievement.unlocked) ||
    (activeAchievementStatus === "locked" && !achievement.unlocked);
  return categoryMatch && rarityMatch && statusMatch;
}

function founderRankFor(completion) {
  return [...founderRanks].reverse().find((rank) => completion >= rank.percent) || founderRanks[0];
}

function renderTeamView() {
  if (!state.team) return;

  const teamSize = getTeamSize();
  const teamCost = getTeamCost();
  state.team.efficiency = calculateTeamEfficiency();
  teamSizeStat.textContent = teamSize;
  teamCostStat.textContent = formatMoney(teamCost);
  teamMoraleStat.textContent = state.team.morale;
  teamEfficiencyStat.textContent = state.team.efficiency;
  teamMoraleBar.style.width = `${state.team.morale}%`;
  teamEfficiencyBar.style.width = `${state.team.efficiency}%`;
  teamMoraleBar.className = state.team.morale < 40 ? "bar-danger" : state.team.morale < 65 ? "bar-risk" : "bar-good";
  teamEfficiencyBar.className = state.team.efficiency < 45 ? "bar-danger" : state.team.efficiency < 70 ? "bar-risk" : "bar-good";
  teamStatusLine.textContent = teamSize <= 2
    ? "Lean team. Every hire changes runway."
    : state.team.morale < 45
      ? "Team pressure is high. Morale needs attention."
      : "Team operating rhythm is stable.";

  const strengths = getTeamStrengths();
  teamStrongText.textContent = strengths.strong.length ? strengths.strong.join(", ") : "Founder focus";
  teamWeakText.textContent = strengths.weak.length ? strengths.weak.join(", ") : "No glaring gap";
  teamActionMessage.textContent = state.team.message;

  teamRolesList.innerHTML = "";
  Object.entries(teamRoles).forEach(([role, config]) => {
    const count = state.team.roles[role];
    const row = document.createElement("article");
    row.className = "team-role-row";
    row.innerHTML = `
      <div class="role-icon">${config.icon}</div>
      <div class="role-copy">
        <strong>${config.label}</strong>
        <span>${config.impact}</span>
        <em>${formatMoney(config.cost)} / week</em>
      </div>
      <div class="role-count">${count}</div>
      <div class="role-actions">
        <button type="button" data-action="hire" data-role="${role}">Hire</button>
        <button type="button" data-action="fire" data-role="${role}">Fire</button>
      </div>
    `;
    teamRolesList.append(row);
  });
}

function getTeamStrengths() {
  const scores = {
    Product: state.team.roles.engineer * 3 + state.team.roles.designer,
    Design: state.team.roles.designer * 3,
    Growth: state.team.roles.marketer * 3,
    Revenue: state.team.roles.sales * 3,
    Ops: state.team.roles.operations * 3,
  };
  const ordered = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return {
    strong: ordered.filter(([, score]) => score >= 3).slice(0, 3).map(([label]) => label),
    weak: ordered.filter(([, score]) => score === 0).slice(0, 3).map(([label]) => label),
  };
}

function renderProductView() {
  if (!state.product) return;

  const health = productHealth();
  productStatusLine.textContent = health === "Excellent"
    ? "Product is compounding trust and growth."
    : health === "Healthy"
      ? "Product health is stable."
      : health === "Fragile"
        ? "Product is fragile. Bugs and debt can slow growth."
        : "Product is broken. Stabilize before scaling.";
  productHealthBadge.textContent = health;
  productHealthBadge.className = `health-${health.toLowerCase()}`;
  setProductMetric(productQualityStat, productQualityBar, state.productQuality, false);
  setProductMetric(productStabilityStat, productStabilityBar, state.product.stability, false);
  setProductMetric(productUxStat, productUxBar, state.product.ux, false);
  setProductMetric(productFeatureStat, productFeatureBar, state.product.featureDepth, false);
  setProductMetric(productDebtStat, productDebtBar, state.product.technicalDebt, true);
  renderMonetizationSummary(productMonetizationModel, productMonetizationPrice, productMonetizationNote);
  productActionMessage.textContent = state.product.message;

  productUpgradeList.innerHTML = "";
  const fullCapacity = state.product.roadmap.inProgress.length >= 2;
  Object.entries(productUpgrades).forEach(([key, upgrade]) => {
    const card = document.createElement("article");
    card.className = "product-upgrade-card";
    const alreadyRunning = state.product.roadmap.inProgress.some((item) => item.key === key);
    const workUnits = effectiveWorkUnits(key);
    card.innerHTML = `
      <div>
        <strong>${upgrade.label}</strong>
        <span>${upgrade.impact}</span>
        <em>${formatMoney(upgrade.cost)} · ${workUnits} work</em>
      </div>
      <button type="button" data-upgrade="${key}" ${fullCapacity || alreadyRunning ? "disabled" : ""}>${alreadyRunning ? "In Progress" : "Start"}</button>
    `;
    productUpgradeList.append(card);
  });

  renderRoadmapList(roadmapBacklog, state.product.roadmap.backlog);
  renderRoadmapList(roadmapProgress, state.product.roadmap.inProgress);
  renderRoadmapList(roadmapShipped, state.product.roadmap.shipped.slice(0, 6));
  renderProductPortfolio();
}

function renderProductPortfolio() {
  if (!productPortfolioList || !state.product?.products) return;
  productPortfolioList.innerHTML = "";

  if (state.product.products.length === 0) {
    const empty = document.createElement("article");
    empty.className = "product-entity-card";
    empty.innerHTML = `<p>No products yet. Create one to start generating product-based revenue.</p>`;
    productPortfolioList.append(empty);
    return;
  }

  state.product.products.forEach((product) => {
    const modelKey = state.monetization?.pricingModel || product.pricingModel;
    const model = pricingModels[modelKey] || pricingModels.freemium;
    const price = state.monetization?.price ?? product.price;
    const card = document.createElement("article");
    card.className = `product-entity-card ${product.active ? "" : "paused"}`;
    card.innerHTML = `
      <div class="product-entity-top">
        <div>
          <span>${product.type} · ${product.targetSegment}</span>
          <h3>${product.name}</h3>
        </div>
        <mark>${product.active ? "Active" : "Paused"}</mark>
      </div>
      <div class="product-entity-stats">
        <span><b>${product.users.toLocaleString()}</b> users</span>
        <span><b>${formatMoney(product.revenue)}</b> / week</span>
        <span><b>${model.label}</b> ${formatMoney(price)}</span>
        <span class="${priceBadgeClass(product)}"><b>${productPricePressure(product).warning}</b></span>
        <span><b>${Math.round(productConversionRate(product, model, marketFitRank(marketFitStatus())) * 1000) / 10}%</b> conv <button class="help-tip" type="button" aria-label="Conversion: estimated percentage of users who become paying customers.">?</button></span>
        <span><b>${productHealthFor(product)}</b> health</span>
        <span><b>${formatSigned(product.growth)}</b> growth</span>
      </div>
      <div class="product-entity-bars">
        <label>Quality <i>${product.productQuality}</i><div class="meter"><span style="width:${product.productQuality}%"></span></div></label>
        <label>Stability <i>${product.stability}</i><div class="meter"><span style="width:${product.stability}%"></span></div></label>
        <label>Debt <i>${product.technicalDebt}</i><div class="meter"><span class="${product.technicalDebt > 65 ? "bar-danger" : product.technicalDebt > 42 ? "bar-risk" : "bar-good"}" style="width:${product.technicalDebt}%"></span></div></label>
      </div>
      <div class="product-entity-actions">
        <button type="button" data-product-action="upgrade" data-product-id="${product.id}">Upgrade</button>
        <button type="button" data-product-action="priceUp" data-product-id="${product.id}" ${modelKey === "free" ? "disabled" : ""}>Price +</button>
        <button type="button" data-product-action="priceDown" data-product-id="${product.id}" ${modelKey === "free" ? "disabled" : ""}>Price -</button>
        <button type="button" data-product-action="pivot" data-product-id="${product.id}">Pivot</button>
        <button type="button" data-product-action="toggle" data-product-id="${product.id}">${product.active ? "Pause" : "Resume"}</button>
      </div>
    `;
    productPortfolioList.append(card);
  });
}

function productHealthFor(product) {
  return calculateProductHealth(product.productQuality, product.stability, product.technicalDebt);
}

function priceBadgeClass(product) {
  const warning = productPricePressure(product).warning;
  if (warning === "Fair Price") return "price-fair";
  if (warning === "Expensive") return "price-expensive";
  return "price-too-expensive";
}

function renderMonetizationSummary(modelElement, priceElement, noteElement) {
  if (!state.monetization || !modelElement) return;
  const model = pricingModels[state.monetization.pricingModel] || pricingModels.freemium;
  modelElement.textContent = model.label;
  priceElement.textContent = formatMoney(state.monetization.price);
  noteElement.textContent = monetizationNote();
}

function formatSigned(value) {
  if (value > 0) return `+${value}`;
  return String(value);
}

function renderMarketView() {
  if (!state.market) return;

  const fit = marketFitStatus();
  marketFitBadge.textContent = fit;
  marketFitBadge.className = `fit-${fit.toLowerCase().replaceAll(" ", "-")}`;
  marketStatusLine.textContent = fit === "Category Leader"
    ? "The market is starting to move around your category."
    : fit === "Strong Fit"
      ? "Clear market pull. Competitors will notice."
      : fit === "Emerging Fit"
        ? "The wedge is forming, but the story still needs pressure-testing."
        : "Weak market fit. Narrow the buyer, message, or price.";

  setMarketMetric(marketSizeStat, marketSizeBar, state.market.marketSize, false);
  setMarketMetric(marketDemandStat, marketDemandBar, state.market.demand, false);
  setMarketMetric(marketCompetitionStat, marketCompetitionBar, state.market.competition, true);
  setMarketMetric(marketDifferentiationStat, marketDifferentiationBar, state.market.differentiation, false);
  setMarketMetric(marketPricingPowerStat, marketPricingPowerBar, state.market.pricingPower, false);
  setMarketMetric(marketPressureStat, marketPressureBar, state.market.competitorPressure, true);
  renderMonetizationSummary(marketMonetizationModel, marketMonetizationPrice, marketMonetizationNote);

  renderMarketChoices(segmentOptions, "segment", marketSegments);
  renderMarketChoices(positioningOptions, "positioning", marketPositionings);
  renderMarketChoices(pricingOptions, "pricing", marketPricing);
  renderMarketActions();

  const segment = marketSegments[state.market.segment];
  const positioning = marketPositionings[state.market.positioning];
  const pricing = marketPricing[state.monetization.pricingModel];
  marketActionMessage.textContent = state.market.message;
  marketWedgeText.textContent = `${segment.label} · ${positioning.label} · ${pricing.label}`;
  marketRiskText.textContent = marketRiskTextFor();
  marketReportText.textContent = state.market.lastAction || "Your market read will update as you make choices.";
}

function renderMarketChoices(container, kind, options) {
  container.innerHTML = "";
  Object.entries(options).forEach(([key, option]) => {
    const button = document.createElement("button");
    const activeKey = kind === "pricing" ? state.monetization.pricingModel : state.market[kind];
    button.className = `market-choice ${activeKey === key ? "active" : ""}`;
    button.type = "button";
    button.dataset.marketKind = kind;
    button.dataset.marketKey = key;
    button.innerHTML = `<i>${option.icon}</i><strong>${option.label}</strong><span>${option.note}</span>`;
    container.append(button);
  });
}

function renderMarketActions() {
  marketActionList.innerHTML = "";
  Object.entries(marketActions).forEach(([key, action]) => {
    const card = document.createElement("article");
    card.className = "market-action-card";
    card.innerHTML = `
      <div>
        <strong>${action.label}</strong>
        <span>${action.impact}</span>
        <em>${formatMoney(action.cost)}</em>
      </div>
      <button type="button" data-market-action="${key}">Run</button>
    `;
    marketActionList.append(card);
  });
}

function setMarketMetric(statElement, barElement, value, inverse) {
  statElement.textContent = value;
  barElement.style.width = `${value}%`;
  const danger = inverse ? value > 72 : value < 38;
  const risk = inverse ? value > 55 : value < 58;
  barElement.className = danger ? "bar-danger" : risk ? "bar-risk" : "bar-good";
}

function marketRiskTextFor() {
  if (state.market.competitorPressure >= 78) return "High pressure: competitors are likely to copy, discount, or reframe the category.";
  if (state.market.competition >= 70 && state.market.differentiation < 55) return "Crowded lane: buyers may compare you directly against alternatives.";
  if (state.market.pricingPower < 35) return "Pricing risk: growth may rise while revenue quality stays weak.";
  if (state.market.demand < 42) return "Demand risk: this market needs more validation before scaling spend.";
  return "Competitor pressure is manageable.";
}

function setProductMetric(statElement, barElement, value, inverse) {
  statElement.textContent = value;
  barElement.style.width = `${value}%`;
  const danger = inverse ? value > 70 : value < 40;
  const risk = inverse ? value > 45 : value < 65;
  barElement.className = danger ? "bar-danger" : risk ? "bar-risk" : "bar-good";
}

function renderRoadmapList(element, items) {
  element.innerHTML = "";
  if (items.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "Empty";
    element.append(empty);
    return;
  }
  items.forEach((item) => {
    const li = document.createElement("li");
    if (typeof item === "object") {
      const progress = clamp(Math.round(((item.workTotal - item.workRemaining) / item.workTotal) * 100), 0, 100);
      const perWeek = Math.max(0.5, calculateDevCapacity() / Math.max(1, state.product.roadmap.inProgress.length));
      const weeksLeft = Math.max(1, Math.ceil(item.workRemaining / perWeek));
      li.innerHTML = `
        <strong>${item.label}</strong>
        <div class="roadmap-progress"><span style="width:${progress}%"></span></div>
        <small>${item.workRemaining} / ${item.workTotal} work remaining · ~${weeksLeft} week${weeksLeft === 1 ? "" : "s"} left</small>
      `;
    } else {
      li.textContent = item;
    }
    element.append(li);
  });
}

function formatDelta(delta) {
  return [
    formatChange(delta.users, "users"),
    formatChange(delta.revenue, "revenue"),
    formatChange(delta.cash, "cash"),
    formatChange(delta.burnRate, "burn"),
    formatChange(delta.reputation, "rep"),
    formatChange(delta.productQuality, "quality"),
    formatChange(delta.growthRate, "growth"),
    formatChange(delta.productStability, "stability"),
    formatChange(delta.userExperience, "UX"),
    formatChange(delta.technicalDebt, "debt"),
    formatChange(delta.marketDemand, "demand"),
    formatChange(delta.differentiation, "diff"),
    formatChange(delta.teamMorale, "morale"),
  ].filter(Boolean).join(" · ");
}

function formatPlainDelta(delta) {
  return [
    formatPlainChange(delta.users, "users"),
    formatPlainChange(delta.revenue, "revenue"),
    formatPlainChange(delta.cash, "cash"),
    formatPlainChange(delta.reputation, "rep"),
    formatPlainChange(delta.growthRate, "growth"),
    formatPlainChange(delta.productStability, "stability"),
    formatPlainChange(delta.marketDemand, "demand"),
  ].filter(Boolean).join(" · ");
}

function summarizeEffects(effects) {
  return [
    formatPlainChange(effects.users, "users"),
    formatPlainChange(effects.reputation, "rep"),
    formatPlainChange(effects.growthRate, "growth"),
  ].join(", ");
}

function captureStats() {
  return {
    users: state.users,
    revenue: state.revenue,
    cash: state.cash,
    burnRate: state.burnRate,
    reputation: state.reputation,
    productQuality: state.productQuality,
    growthRate: state.growthRate,
    teamMorale: state.team?.morale || 0,
    teamEfficiency: state.team?.efficiency || 0,
    productStability: state.product?.stability || 0,
    userExperience: state.product?.ux || 0,
    featureDepth: state.product?.featureDepth || 0,
    technicalDebt: state.product?.technicalDebt || 0,
    marketDemand: state.market?.demand || 0,
    competition: state.market?.competition || 0,
    differentiation: state.market?.differentiation || 0,
    pricingPower: state.market?.pricingPower || 0,
  };
}

function diffStats(before, after) {
  return Object.keys(before).reduce((delta, key) => {
    delta[key] = after[key] - before[key];
    return delta;
  }, {});
}

function normalizeEffects(effects = {}) {
  return {
    users: effects.users || 0,
    revenue: effects.revenue || 0,
    cash: effects.cash || 0,
    burnRate: effects.burnRate || 0,
    reputation: effects.reputation || 0,
    productQuality: effects.productQuality || 0,
    growthRate: effects.growthRate || 0,
  };
}

function combineEffects(...effectSets) {
  return effectSets.reduce((combined, effects) => {
    Object.keys(combined).forEach((key) => {
      combined[key] += effects[key] || 0;
    });
    return combined;
  }, normalizeEffects());
}

function combineInto(target, effects) {
  Object.keys(target).forEach((key) => {
    target[key] += effects[key] || 0;
  });
}

function formatChange(value, label) {
  if (!value) return "";
  const prefix = value >= 0 ? "+" : "";
  const isMoney = ["revenue", "cash", "burn"].includes(label);
  const negativeIsGood = ["burn", "debt", "competition"].includes(label);
  const moneyOut = label === "burn" ? value > 0 : value < 0;
  const moneyIn = label === "burn" ? value < 0 : value > 0;
  const tone = isMoney
    ? moneyIn
      ? "delta-positive money-change money-in"
      : moneyOut
        ? "delta-negative money-change money-out"
        : "delta-neutral money-change"
    : value > 0 && !negativeIsGood
      ? "delta-positive"
      : value < 0 && !negativeIsGood
        ? "delta-negative"
        : value !== 0
          ? negativeIsGood && value < 0
            ? "delta-positive"
            : "delta-negative"
          : "delta-neutral";
  const indicator = value > 0 ? "↑" : value < 0 ? "↓" : "–";
  const wrapped = (text) => `<b class="${tone}"><i>${indicator}</i>${text}</b>`;
  if (["revenue", "cash", "burn"].includes(label)) {
    return wrapped(`${prefix}${formatMoney(value)} ${label}`);
  }
  if (label === "growth") {
    return wrapped(`${prefix}${value}% ${label}`);
  }
  return wrapped(`${prefix}${value} ${label}`);
}

function formatPlainChange(value, label) {
  if (!value) return "";
  const prefix = value >= 0 ? "+" : "";
  if (["revenue", "cash", "burn"].includes(label)) {
    const indicator = value > 0 ? "↑ " : value < 0 ? "↓ " : "";
    return `${indicator}${prefix}${formatMoney(value)} ${label}`;
  }
  if (label === "growth") {
    const indicator = value > 0 ? "↑ " : value < 0 ? "↓ " : "";
    return `${indicator}${prefix}${value}% ${label}`;
  }
  const indicator = value > 0 ? "↑ " : value < 0 ? "↓ " : "";
  return `${indicator}${prefix}${value} ${label}`;
}

function updateProgressBars() {
  state.burnRate = calculateCurrentBurnRate();
  const runwayWeeks = calculateRunwayWeeks();
  const runwayPercent = clamp((runwayWeeks / 24) * 100, 0, 100);
  runwayLabel.textContent = runwayWeeks <= 4 ? `${runwayWeeks} weeks left` : `${runwayWeeks} weeks`;
  reputationLabel.textContent = state.reputation;
  qualityLabel.textContent = state.productQuality;
  runwayBar.style.width = `${runwayPercent}%`;
  reputationBar.style.width = `${state.reputation}%`;
  qualityBar.style.width = `${state.productQuality}%`;
  runwayBar.className = runwayWeeks <= 3 ? "bar-danger" : runwayWeeks <= 5 ? "bar-risk" : "bar-good";
  runwayWarningText.textContent = runwayWeeks <= 3
    ? "Critical: less than 3 weeks of runway. Every spend decision can end the run."
    : runwayWeeks <= 5
      ? "Danger: runway is getting scary."
      : runwayWeeks <= 8
      ? "Warning: sustainability pressure rising."
      : "Cash position stable.";
  reputationBar.className = state.reputation < 35 ? "bar-danger" : state.reputation < 60 ? "bar-risk" : "bar-good";
  qualityBar.className = state.productQuality < 40 ? "bar-danger" : state.productQuality < 65 ? "bar-risk" : "bar-good";
  renderBurnSources();
}

function renderBurnSources() {
  const sources = burnSources();
  burnSourceTotal.textContent = formatMoney(sources.total);
  burnTeamSource.textContent = formatMoney(sources.team);
  burnProductSource.textContent = formatMoney(sources.product);
  burnMarketingSource.textContent = formatMoney(sources.marketing);
  burnOptionalSource.textContent = formatMoney(sources.optional);
  stopMarketingButton.disabled = sources.marketing <= 0;
  pauseDevelopmentButton.disabled = state.economy?.developmentPausedWeeks > 0;
  cutCostsButton.disabled = false;
  burnSourceNote.textContent = state.economy?.developmentPausedWeeks > 0
    ? `Development paused for ${state.economy.developmentPausedWeeks} week${state.economy.developmentPausedWeeks === 1 ? "" : "s"}. Product maintenance is reduced, but shipping is slow.`
    : "Burn comes from team payroll, product maintenance, and explicit optional spend.";
}

function recordSystemAction({ before, title, decision, insight, type = "Founder Note" }) {
  const after = captureStats();
  const delta = diffStats(before, after);
  const outcome = classifyOutcome(delta);
  state.lastDelta = delta;
  state.lastInsight = insight;
  state.history.push({
    week: state.week,
    title,
    decision,
    insight,
    delta,
    outcome,
    eventTypeOverride: type,
  });
  showResultToast(delta, outcome);
  playSound(outcome === "bad" ? "negative" : "positive");
}

function renderDecisionResult() {
  if (!pendingResolution) {
    decisionResultPanel.classList.add("is-hidden");
    continueWeekButton.textContent = "Continue";
    return;
  }
  decisionResultPanel.classList.remove("is-hidden");
  decisionResultTitle.textContent = pendingResolution.decision;
  decisionResultChanges.innerHTML = formatDelta(pendingResolution.delta);
  decisionResultInsight.textContent = pendingResolution.insight;
  continueWeekButton.textContent = pendingResolution.ending
    ? "View ending"
    : `Continue to Week ${pendingResolution.continueWeek}`;
}

function renderGuidedTip() {
  const tips = {
    1: "Week 1 guide: focus on building a stable product.",
    2: "Week 2 guide: growth is good, but do not ignore quality.",
    3: "Week 3 guide: watch burn and runway before spending hard.",
  };
  const tip = tips[state.week];
  guidedTip.textContent = tip || "";
  guidedTip.classList.toggle("is-hidden", !tip);
}

function calculateRunwayWeeks() {
  if (state.economy && state.team && state.product) {
    state.burnRate = calculateCurrentBurnRate();
  }
  return calculateRunway(state.cash, state.burnRate);
}

function stopMarketingSpend() {
  if (!state.economy || state.economy.marketingSpend <= 0) return;
  const before = captureStats();
  state.economy.marketingSpend = 0;
  state.growthRate = clamp(state.growthRate - 2, -35, 80);
  state.team.morale = clamp(state.team.morale + 1, 0, 100);
  recalculateDerivedState();
  recordSystemAction({
    before,
    title: "Stopped marketing spend",
    decision: "Stop Marketing",
    insight: "You cut paid growth spend. Burn dropped immediately, but near-term growth is slower.",
    type: "Failure Risk",
  });
  render();
}

function pauseProductDevelopment() {
  ensureEconomyState();
  if (state.economy.developmentPausedWeeks > 0) return;
  const before = captureStats();
  state.economy.developmentPausedWeeks = 3;
  state.growthRate = clamp(state.growthRate - 1, -35, 80);
  state.team.morale = clamp(state.team.morale - 2, 0, 100);
  recalculateDerivedState();
  recordSystemAction({
    before,
    title: "Paused product development",
    decision: "Pause Development",
    insight: "You slowed shipping to reduce maintenance load and protect runway. In-progress upgrades will move slowly until development resumes.",
    type: "Product Event",
  });
  render();
}

function cutOperatingCosts() {
  ensureEconomyState();
  const before = captureStats();
  state.economy.optionalExpenses = Math.max(0, Math.round((state.economy.optionalExpenses || 0) * 0.45));
  state.economy.marketingSpend = Math.max(0, Math.round((state.economy.marketingSpend || 0) * 0.55));
  state.team.morale = clamp(state.team.morale - 4, 0, 100);
  state.reputation = clamp(state.reputation - 1, 0, 100);
  state.growthRate = clamp(state.growthRate - 2, -35, 80);
  state.cash = Math.round(state.cash + 120);
  recalculateDerivedState();
  recordSystemAction({
    before,
    title: "Emergency cost cuts",
    decision: "Cut Costs",
    insight: "You renegotiated tools and paused non-essential spend. Runway improves, but morale and growth take a short-term hit.",
    type: "Failure Risk",
  });
  render();
}

function runwayClass(runwayWeeks) {
  if (runwayWeeks <= 4) {
    return "runway-danger";
  }
  if (runwayWeeks <= 8) {
    return "runway-warning";
  }
  return "runway-safe";
}

function pulseChangedStats(delta) {
  if (!delta) {
    return;
  }

  const statMap = [
    [usersStat, delta.users, true],
    [revenueStat, delta.revenue, true],
    [cashStat, delta.cash, true],
    [burnStat, delta.burnRate, false],
    [runwayStat, delta.cash - delta.burnRate, true],
    [growthStat, delta.growthRate, true],
    [reputationStat, delta.reputation, true],
  ];

  statMap.forEach(([element, value, positiveIsGood]) => {
    element.classList.remove("flash-positive", "flash-negative", "flash-risk");
    if (value === 0) {
      return;
    }
    const isPositive = positiveIsGood ? value > 0 : value < 0;
    const className = Math.abs(value) <= 2 ? "flash-risk" : isPositive ? "flash-positive" : "flash-negative";
    window.requestAnimationFrame(() => {
      element.classList.add(className);
    });
  });
}

function showResultToast(delta, outcome) {
  const highlights = [
    ["users", delta.users],
    ["revenue", delta.revenue],
    ["cash", delta.cash],
    ["rep", delta.reputation],
    ["growth", delta.growthRate],
    ["quality", delta.productQuality],
    ["stability", delta.productStability],
    ["demand", delta.marketDemand],
    ["morale", delta.teamMorale],
  ]
    .filter(([, value]) => Number.isFinite(value) && value !== 0)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
    .slice(0, 4);

  resultToast.className = `result-toast result-${outcome}`;
  resultToast.innerHTML = highlights.map(([label, value]) => `<span>${formatChange(value, label)}</span>`).join("");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    resultToast.classList.add("is-hidden");
  }, 1700);
}

function classifyDecision(effects = {}) {
  const normalized = normalizeEffects(effects);
  const positives = Number(normalized.users > 0) + Number(normalized.revenue > 0) + Number(normalized.cash > 0) + Number(normalized.reputation > 0) + Number(normalized.productQuality > 0) + Number(normalized.growthRate > 0);
  const negatives = Number(normalized.cash < 0) + Number(normalized.burnRate > 0) + Number(normalized.reputation < 0) + Number(normalized.productQuality < 0) + Number(normalized.growthRate < 0) + Number(normalized.users < 0);
  if (positives > 0 && negatives > 0) {
    return "choice-risk";
  }
  if (positives >= negatives) {
    return "choice-positive";
  }
  return "choice-negative";
}

function decisionPreview(effects = {}) {
  const normalized = normalizeEffects(effects);
  const preview = [];
  if (normalized.users) preview.push(formatShortChange(normalized.users, "users"));
  if (normalized.cash) preview.push(formatShortChange(normalized.cash, "cash"));
  if (normalized.reputation) preview.push(formatShortChange(normalized.reputation, "rep"));
  if (normalized.productQuality) preview.push(formatShortChange(normalized.productQuality, "quality"));
  if (normalized.growthRate) preview.push(formatShortChange(normalized.growthRate, "growth"));
  return preview.slice(0, 3).join(" · ");
}

function formatShortChange(value, label) {
  const prefix = value > 0 ? "+" : "";
  if (label === "cash") {
    return `${prefix}${formatMoney(value)}`;
  }
  if (label === "growth") {
    return `${prefix}${value}% ${label}`;
  }
  return `${prefix}${value} ${label}`;
}

function formatMoney(value) {
  const absValue = Math.abs(value);
  const prefix = value < 0 ? "-" : "";

  if (absValue >= 1000000) {
    return `${prefix}$${(absValue / 1000000).toFixed(1)}M`;
  }
  if (absValue >= 1000) {
    return `${prefix}$${(absValue / 1000).toFixed(1)}K`;
  }
  return `${prefix}$${absValue.toLocaleString()}`;
}

function createSeededRandom(seedText) {
  let seed = 2166136261;
  for (let index = 0; index < seedText.length; index += 1) {
    seed ^= seedText.charCodeAt(index);
    seed = Math.imul(seed, 16777619);
  }

  return function random() {
    seed += 0x6d2b79f5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function randomBetween(min, max) {
  return Math.floor(rng() * (max - min + 1)) + min;
}

function randomIndex(length) {
  return Math.floor(rng() * length);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playSound(type) {
  if (audioMuted) {
    return;
  }

  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;
  const settings = {
    click: { start: 330, end: 430, duration: 0.055, volume: 0.025, wave: "triangle" },
    positive: { start: 520, end: 760, duration: 0.16, volume: 0.04, wave: "sine" },
    negative: { start: 180, end: 95, duration: 0.22, volume: 0.045, wave: "sawtooth" },
  }[type];

  oscillator.type = settings.wave;
  oscillator.frequency.setValueAtTime(settings.start, now);
  oscillator.frequency.exponentialRampToValueAtTime(settings.end, now + settings.duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(settings.volume, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + settings.duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + settings.duration + 0.02);
}

function toggleAudio() {
  audioMuted = !audioMuted;
  muteButton.textContent = audioMuted ? "Muted" : "Sound on";
  muteButton.setAttribute("aria-pressed", String(audioMuted));
  if (!audioMuted) {
    playSound("click");
  }
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === "dark" ? "Light" : "Dark";
  themeButton.setAttribute("aria-pressed", String(theme === "light"));
}

function toggleTheme() {
  setTheme(currentTheme === "dark" ? "light" : "dark");
}

function hasSeenOnboarding() {
  try {
    return localStorage.getItem(onboardingStorageKey) === "true";
  } catch (error) {
    return false;
  }
}

function markOnboardingSeen() {
  try {
    localStorage.setItem(onboardingStorageKey, "true");
  } catch (error) {
    // Local storage can be unavailable in hardened browser modes.
  }
}

function openOnboarding() {
  onboardingOverlay.classList.remove("is-hidden");
  startSimulationButton.focus();
}

function closeOnboarding(remember = true) {
  if (remember) {
    markOnboardingSeen();
  }
  onboardingOverlay.classList.add("is-hidden");
}

function showOnboardingOnFirstVisit() {
  if (!hasSeenOnboarding()) {
    openOnboarding();
  }
}

function openNewRunConfirm() {
  if (!state.runId) {
    resetToLanding();
    return;
  }
  newRunOverlay.classList.remove("is-hidden");
  confirmNewRunButton.focus();
}

function closeNewRunConfirm() {
  newRunOverlay.classList.add("is-hidden");
}

function abandonCurrentRun() {
  if (state.runId && !endingPage.classList.contains("is-hidden")) {
    return;
  }
  if (state.runId) {
    persistCurrentRun("abandoned", { includeHistory: true });
  }
}

function confirmStartNewRun() {
  abandonCurrentRun();
  closeNewRunConfirm();
  resetToLanding();
}

function saveAndStartNewRun() {
  const current = readStorageJson(currentRunStorageKey, null);
  if (current?.id) {
    upsertRunHistory(current);
  }
  resetToLanding();
}

function viewRunHistoryFromEnding() {
  endingPage.classList.add("is-hidden");
  landingPage.classList.add("is-hidden");
  simulationPage.classList.remove("is-hidden");
  setCenterView("runs");
}

function restartCurrentRun() {
  abandonCurrentRun();
  const formData = new FormData();
  formData.set("idea", startup.idea || "New startup");
  formData.set("audience", startup.audience || "early adopters");
  formData.set("niche", startup.niche || "productivity");
  formData.set("startupType", startup.startupType || "saas");
  formData.set("style", startup.style || "balanced");
  formData.set("goal", startup.goal || "profit");
  startGame(formData);
}

function resetToLanding() {
  simulationPage.classList.add("is-hidden");
  endingPage.classList.add("is-hidden");
  newRunOverlay.classList.add("is-hidden");
  landingPage.classList.remove("is-hidden");
  startupForm.reset();
  document.querySelector("#ideaInput").focus();
}

startupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  startGame(new FormData(startupForm));
});

dossierNavButtons.forEach((button) => {
  button.addEventListener("click", () => setCenterView(button.dataset.view));
});

timelineFilterButtons.forEach((button) => {
  button.addEventListener("click", () => setTimelineFilter(button.dataset.filter));
});

achievementCategoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-achievement-category]");
  if (!button) return;
  setAchievementFilter("category", button.dataset.achievementCategory);
});

achievementRarityFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-achievement-rarity]");
  if (!button) return;
  setAchievementFilter("rarity", button.dataset.achievementRarity);
});

achievementStatusFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-achievement-status]");
  if (!button) return;
  setAchievementFilter("status", button.dataset.achievementStatus);
});

teamRolesList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "hire") {
    hireRole(button.dataset.role);
  } else {
    fireRole(button.dataset.role);
  }
});

productUpgradeList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-upgrade]");
  if (!button) return;
  applyProductUpgrade(button.dataset.upgrade);
});

createProductButton.addEventListener("click", () => {
  createProductForm.classList.toggle("is-hidden");
  if (!createProductForm.classList.contains("is-hidden")) {
    createProductForm.querySelector("input")?.focus();
  }
});

cancelProductButton.addEventListener("click", () => {
  createProductForm.classList.add("is-hidden");
  createProductForm.reset();
});

createProductForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createProduct(new FormData(createProductForm));
});

productPortfolioList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-product-action]");
  if (!button) return;
  applyProductEntityAction(button.dataset.productId, button.dataset.productAction);
});

marketView.addEventListener("click", (event) => {
  const choiceButton = event.target.closest("button[data-market-kind]");
  if (choiceButton) {
    applyMarketChoice(choiceButton.dataset.marketKind, choiceButton.dataset.marketKey);
    return;
  }

  const actionButton = event.target.closest("button[data-market-action]");
  if (actionButton) {
    applyMarketAction(actionButton.dataset.marketAction);
  }
});

runHistoryList.addEventListener("click", handleRunHistoryAction);
compareRunA.addEventListener("change", renderRunComparison);
compareRunB.addEventListener("change", renderRunComparison);
continueWeekButton.addEventListener("click", continueToNextWeek);
restartButton.addEventListener("click", resetToLanding);
saveRunButton.addEventListener("click", manualSaveRun);
newRunButton.addEventListener("click", openNewRunConfirm);
stopMarketingButton.addEventListener("click", stopMarketingSpend);
pauseDevelopmentButton.addEventListener("click", pauseProductDevelopment);
cutCostsButton.addEventListener("click", cutOperatingCosts);
confirmNewRunButton.addEventListener("click", confirmStartNewRun);
cancelNewRunButton.addEventListener("click", closeNewRunConfirm);
playAgainButton.addEventListener("click", restartCurrentRun);
tryStrategyButton.addEventListener("click", resetToLanding);
saveStartNewRunButton.addEventListener("click", saveAndStartNewRun);
viewRunHistoryButton.addEventListener("click", viewRunHistoryFromEnding);
themeButton.addEventListener("click", toggleTheme);
howToPlayButton.addEventListener("click", openOnboarding);
muteButton.addEventListener("click", toggleAudio);
startSimulationButton.addEventListener("click", () => closeOnboarding(true));
dismissOnboardingButton.addEventListener("click", () => closeOnboarding(true));
onboardingOverlay.addEventListener("click", (event) => {
  if (event.target === onboardingOverlay) {
    closeOnboarding(false);
  }
});
newRunOverlay.addEventListener("click", (event) => {
  if (event.target === newRunOverlay) {
    closeNewRunConfirm();
  }
});

setTheme("dark");
showOnboardingOnFirstVisit();
