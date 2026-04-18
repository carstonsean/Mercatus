const HALF_POINT = 0.5;
const LINE_STEP = 1;
const PRESSURE_STEP = 2;
const BOT_PRESSURE_MULTIPLIER = 1;
const BOT_NAME_PREFIXES = new Set([
  "ari","beau","cruz","dax","eli","finn","hudson","jett",
  "kai","luca","milo","nash","remy","rory","taj","zeke"
]);
const BOT_NAME_SUFFIXES = new Set([
  "aces","atlas","comets","crew","dash","flux","forge","nova",
  "orbit","raiders","shift","signal","slate","volt","wave","yard"
]);
const STARTING_BANKROLL = 200;
const SWIPE_THRESHOLD = 60;
const DEFAULT_USER_NAME = "Demo Trader";
const USER_NAME_KEY = "mercatus-user-name";
const HAS_AUTHENTICATED_KEY = "mercatus-has-authenticated";
const HAS_SEEN_ONBOARDING_KEY = "hasSeenOnboarding";
const AUTH_TOKEN_KEY = "authToken";
const DISMISSED_HOW_IT_WORKS_KEY = "dismissedHowItWorks";
const PENDING_CHALLENGE_KEY = "crowdiq_pending_challenge_id";
const ADMIN_ACCESS_KEY = "mercatus-admin-access";
const LIVE_SYNC_MS = 5000;
const PRIZE_POOL_POLL_MS = 10000;
const ONBOARDING_POPUP_DELAY_MS = 800;
const WHOLE_NUMBER_FORMATTER = new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 });

const seed = window.MERCATUS_SEED;
const derivedData = window.MERCATUS_DERIVED || {};
const roundGames = seed.roundGames;
const TEAM_COLORS = seed.TEAM_COLORS;
const SEEDED_ROUND_NUMBERS = [...new Set(roundGames.map((game) => parseRoundNumberFromLabel(game.roundLabel)).filter(Number.isFinite))].sort((left, right) => left - right);
const CURRENT_ROUND_NUMBER = SEEDED_ROUND_NUMBERS[SEEDED_ROUND_NUMBERS.length - 1] || 1;
const CURRENT_ROUND_LABEL = roundGames.find((game) => parseRoundNumberFromLabel(game.roundLabel) === CURRENT_ROUND_NUMBER)?.roundLabel || `Round ${CURRENT_ROUND_NUMBER}`;
const AVAILABLE_ROUND_NUMBERS = [...new Set([
  ...SEEDED_ROUND_NUMBERS,
  ...((derivedData.metadata?.roundsIncluded) || []).map((round) => Number(round)).filter(Number.isFinite)
])].sort((left, right) => left - right);
const APP_MODAL_TITLES = {
  "how-it-works": "How It Works",
  "account-settings": "Account Settings",
  leaderboard: "Leaderboard",
  "contact-us": "Contact Us",
  "prize-pool-info": "Prize Pool",
  "market-confidence-info": "Market Confidence",
  "home-value-leaderboard": "Top Value Players",
  "home-projected-leaderboard": "Top Projected Players",
  "challenge-friends": "Challenge a Friend"
};
const SHAREABLE_CONTENT_TEMPLATES = [
  {
    id: "player-spotlight",
    name: "Player Spotlight",
    description: "One player. Full crowd data and form.",
    requiresPlayer: true
  },
  {
    id: "value-alert",
    name: "Value Alert",
    description: "One player. Their value gap front and centre.",
    requiresPlayer: true
  },
  {
    id: "match-preview",
    name: "Match Preview",
    description: "One game. Top projected players per side.",
    requiresMatch: true
  },
  {
    id: "round-rankings-value",
    name: "Round Rankings (Value)",
    description: "Top 5 value picks this round."
  },
  {
    id: "round-rankings-projected",
    name: "Round Rankings (Projected)",
    description: "Top 5 projected players this round."
  }
];
const SHAREABLE_ASPECT_RATIOS = [
  { id: "1:1", label: "1:1" },
  { id: "3:4", label: "3:4" },
  { id: "9:16", label: "9:16" }
];
const SHAREABLE_THEMES = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" }
];
const HOW_IT_WORKS_SECTIONS = [
  {
    title: "Trading Basics",
    paragraphs: [
      "Each player market on CrowdIQ is a live fantasy projection. You take a position by choosing whether a player will finish Over or Under the listed line, then entering your stake before the market locks at kickoff.",
      "If your order is matched, it becomes a live position in your portfolio. If it is only partially matched, the unmatched portion stays available until it is matched or removed."
    ]
  },
  {
    title: "Market Confidence",
    paragraphs: [
      "Market Confidence shows how much real crowd activity is behind a projection. It increases when more traders participate, more positions are matched, and more volume flows through the market.",
      "A higher confidence score means the line has stronger crowd involvement, while a lower score suggests the market is still light and may move more easily. It is a read on activity, not a prediction guarantee."
    ]
  },
  {
    title: "Quick Pick",
    paragraphs: [
      "Quick Pick is the fastest way to get involved in live markets. Instead of opening a full trade ticket, you are shown one open player market at a time and can instantly choose Over or Under with a fixed $1 stake.",
      "It is designed for speed, so you can move through active opportunities quickly while still following the same market rules as the main trading screens."
    ]
  },
  {
    title: "Prize Pool",
    paragraphs: [
      "The Prize Pool is CrowdIQ's weekly contest mode. You pay the entry fee, receive a lineup of players, and make an Over or Under call on each one.",
      "As matches are completed and picks settle, your correct percentage and rank update against the rest of the field. The highest-ranked entries share the prize pool."
    ]
  },
  {
    title: "How Matches Work",
    paragraphs: [
      "Markets stay open only until kickoff, then they lock automatically. Once a player's real fantasy score is known, the market settles and matched positions are graded as wins or losses based on the line you entered.",
      "Your portfolio shows whether a position is matched, unmatched, partially matched, or settled, so you can always see what is still live and what has already resolved."
    ]
  }
];
const MARKET_CONFIDENCE_EXPLANATION = "Market confidence estimates how trustworthy the projection is based on crowd participation. More matched trades, volume, and unique traders lift it, with diminishing returns as activity builds.";
const PRIZE_POOL_EXPLANATION_PARAGRAPHS = [
  "Enter for $10 and receive a weekly lineup of 13 randomly assigned starting players plus 4 interchange players.",
  "For every assigned player, lock in an Over or Under pick against the listed fantasy line before entries close.",
  "As real scores settle, each pick is graded correct or incorrect and your rank updates by correct pick percentage across the full entry.",
  "The highest percentages finish on top of the leaderboard and the prize pool is split across the leading entries."
];
const PRIZE_POOL_EXPLANATION_LABELS = [
  "ENTRY",
  "YOUR PICKS",
  "SCORING",
  "PRIZES"
];

const authPreviewMarkets = typeof seed.buildRoundMarkets === "function" ? seed.buildRoundMarkets() : [];

let state = {
  bankrolls: {},
  markets: authPreviewMarkets,
  walletTransactions: [],
  activeRoundNumber: CURRENT_ROUND_NUMBER,
  activeRoundLabel: CURRENT_ROUND_LABEL
};
let backendState = { mode: "local", user: null, dashboard: null };
let prizePoolState = null;
let toastTimer = null;
let syncTimer = null;
let kickoffTimer = null;
let syncInFlight = false;
let scrollInteractionTimer = null;
let isScrollInteractionActive = false;
let pendingRenderAfterScroll = false;
let homePrizePoolAnimationFrame = null;
let prizePoolPollTimer = null;
let prizePoolLastPolledAmount = null;
let prizePoolJarSurging = false;
let prizePoolJarSurgeTimer = null;
let prizePoolShareFitFrame = null;
let authFocusTimer = null;
let onboardingPopupTimer = null;
let popularFeaturedMarketIds = [];
let popularFeaturedRoundNumber = null;
let popularFeaturedRequest = null;
let appChromeRenderKey = "";
let isStakeInputInteractionActive = false;
let pendingRenderAfterStakeInput = false;
let adminAnalyticsRefreshTimer = null;
let adminSignupsChart = null;
let adminActiveUsersChart = null;
let adminSourcesChart = null;
let marketViewTrackKey = "";
let marketViewTrackedAt = 0;
const MAX_SINGLE_BID = 10;

const uiState = {
  activeScreen: "home",
  activeHomePanel: "value",
  activeHomeFeaturedIndex: 0,
  activeHomeGameIndex: 0,
  activeHomeGameTouched: false,
  activeAccountView: "portfolio",
  currentGameId: "raiders-bulldogs",
  currentTeam: "Raiders",
  selectedMarketId: "",
  expandedMarketId: "",
  marketTradeSides: {},
  stakeDrafts: {},
  focusStakeMarketId: "",
  searchTerm: "",
  adminOpen: false,
  adminShareableView: "main",
  adminShareableTemplateId: "",
  adminShareableAspectRatio: "1:1",
  adminShareableTheme: "dark",
  adminShareablePlayerQuery: "",
  adminShareableSelectedMarketId: "",
  adminShareableSelectedGameId: "",
  adminShareableOutputOpen: false,
  portfolioFilter: "ALL",
  portfolioSort: "MOST_RECENT",
  walletFilter: "ALL",
  walletAmountDraft: "25",
  pendingTradeMarketId: "",
  leaderboardSort: "BALANCE",
  leaderboardTimeFilter: "ALL_TIME",
  quickPickShuffleSeed: String(Date.now()),
  quickPickMarketIds: [],
  quickPickSeenMarketIds: [],
  quickPickActiveIndex: 0,
  quickPickPendingCardId: "",
  quickPickPendingSide: "",
  quickPickPendingRequestId: "",
  prizePoolPendingSide: "",
  prizePoolPendingAction: "",
  prizePoolStandingsExpanded: false,
  prizePoolSubmissionToastShown: false,
  prizePoolHowItWorksExpanded: false,
  prizePoolInterchangeRulesExpanded: false,
  prizePoolShareOpen: false,
  prizePoolInterchangeDividerSeenDraftId: "",
  appMenuOpen: false,
  activeAppModal: "",
  challengeModalStep: "select",
  challengeSelectedTradeIds: [],
  expandedPortfolioPositionKey: "",
  challengeCreatePending: false,
  challengeCreateError: "",
  challengeCreatedUrl: "",
  challengeCreatedTradeCount: 0,
  challengeExcludedTradeCount: 0,
  challengeCopyStateUntil: 0,
  challengeRouteShareId: "",
  challengeRouteLoading: false,
  challengeRouteError: "",
  challengeRouteSession: null,
  challengeRouteIndex: 0,
  challengeRouteReview: [],
  challengeRouteAcceptPending: false,
  challengeRouteMatchedUntil: 0,
  challengeRouteAcceptError: "",
  challengeRouteAuthMode: "",
  challengeRouteAuthDraft: "",
  challengeRouteAuthPending: false,
  challengeRouteAuthError: "",
  portfolioHighlightPositionKey: "",
  portfolioHighlightUntil: 0,
  contactEmailDraft: "",
  contactMessageDraft: "",
  contactFormSubmitted: false,
  contactFormFeedback: "",
  adminMarketFilter: "ACTIVE",
  adminMarketLimit: 24,
  adminTradeFilter: "OPEN",
  adminTradeLimit: 60,
  adminActiveTab: "operations",
  adminAnalyticsRange: "30d",
  adminAnalyticsOverview: null,
  adminAnalyticsTrends: null,
  adminAnalyticsSources: null,
  adminAnalyticsReturning: null,
  adminAnalyticsFunnel: null,
  adminAnalyticsLoading: false,
  adminAffiliatesLoading: false,
  adminAffiliatesLoaded: false,
  adminAffiliatesError: "",
  adminAffiliates: [],
  adminAffiliateReferrals: []
};

const elements = {
  authGate: document.getElementById("auth-gate"),
  authForm: document.getElementById("auth-form"),
  authUsername: document.getElementById("auth-username"),
  authFeedback: document.getElementById("auth-feedback"),
  authTickerMarquee: document.getElementById("auth-ticker-marquee"),
  authLiveBadge: document.getElementById("auth-live-badge"),
  authHeroCtaCopy: document.getElementById("auth-hero-cta-copy"),
  authPhoneMockup: document.getElementById("auth-phone-mockup"),
  onboardingOverlay: document.getElementById("onboarding-overlay"),
  howItWorksNavShell: document.getElementById("how-it-works-nav-shell"),
  howItWorksNavButton: document.getElementById("how-it-works-nav-button"),
  howItWorksNavDismiss: document.getElementById("how-it-works-nav-dismiss"),
  authClose: document.getElementById("auth-close"),
  authHeaderSignup: document.getElementById("auth-header-signup"),
  authHeroEntry: document.getElementById("auth-hero-entry"),
  challengeRoute: document.getElementById("challenge-route"),
  appFrame: document.querySelector(".mobile-frame"),
  headerBalance: document.getElementById("header-balance"),
  headerMenuButton: document.getElementById("header-menu-button"),
  navButtons: [...document.querySelectorAll(".nav-button[data-screen-target]")],
  screens: [...document.querySelectorAll(".screen")],
  screenScrolls: [...document.querySelectorAll(".screen .screen-scroll")],
  homeTopProjected: document.getElementById("home-top-projected"),
  homeBiggestGainers: document.getElementById("home-biggest-gainers"),
  homeBiggestLosers: document.getElementById("home-biggest-losers"),
  homeBestValue: document.getElementById("home-best-value"),
  homeMostOverpriced: document.getElementById("home-most-overpriced"),
  homeMostTraded: document.getElementById("home-most-traded"),
  homeUserLeaderboard: document.getElementById("home-user-leaderboard"),
  homeLeaderboardLink: document.getElementById("home-leaderboard-link"),
  homeCarousel: document.getElementById("home-carousel"),
  homeCarouselNav: document.getElementById("home-carousel-nav"),
  homeCarouselMeta: document.getElementById("home-carousel-meta"),
  homeGuestHero: document.getElementById("home-guest-hero"),
  homeFeaturedSlate: document.getElementById("home-featured-slate"),
  homePrizePoolBanner: document.getElementById("home-prize-pool-banner"),
  homeGamesStrip: document.getElementById("home-games-strip"),
  homeUnauthBottom: document.getElementById("home-unauth-bottom"),
  searchInput: document.getElementById("search-input"),
  searchResults: document.getElementById("search-results"),
  marketsScreenScroll: document.getElementById("markets-screen-scroll"),
  teamToggle: document.getElementById("team-toggle"),
  selectedMarketPanel: document.getElementById("selected-market-panel"),
  marketsList: document.getElementById("markets-list"),
  leaderboardScreenScroll: document.getElementById("leaderboard-screen-scroll"),
  leaderboardSummary: document.getElementById("leaderboard-summary"),
  leaderboardSortChips: document.getElementById("leaderboard-sort-chips"),
  leaderboardTimeChips: document.getElementById("leaderboard-time-chips"),
  leaderboardList: document.getElementById("leaderboard-list"),
  leaderboardBackButton: document.getElementById("leaderboard-back-button"),
  portfolioPageSubtitle: document.getElementById("portfolio-page-subtitle"),
  accountViewSwitch: document.getElementById("account-view-switch"),
  accountViewTabs: [...document.querySelectorAll("[data-account-view]")],
  accountPortfolioView: document.getElementById("account-portfolio-view"),
  accountWalletView: document.getElementById("account-wallet-view"),
  prizePoolView: document.getElementById("prize-pool-view"),
  portfolioBalancePill: document.getElementById("portfolio-balance-pill"),
  portfolioSummary: document.getElementById("portfolio-summary"),
  portfolioPrizePoolCard: document.getElementById("portfolio-prize-pool-card"),
  portfolioChallengeEntry: document.getElementById("portfolio-challenge-entry"),
  portfolioFilters: document.getElementById("portfolio-filters"),
  portfolioSortButton: document.getElementById("portfolio-sort-button"),
  portfolioList: document.getElementById("portfolio-list"),
  walletSummary: document.getElementById("wallet-summary"),
  walletAmountInput: document.getElementById("wallet-amount-input"),
  walletAmountPresets: document.getElementById("wallet-amount-presets"),
  walletDepositButton: document.getElementById("wallet-deposit-button"),
  walletWithdrawButton: document.getElementById("wallet-withdraw-button"),
  walletFeedback: document.getElementById("wallet-feedback"),
  walletFilters: document.getElementById("wallet-filters"),
  walletTransactionList: document.getElementById("wallet-transaction-list"),
  quickPickDeck: document.getElementById("quick-take-deck"),
  prizePoolShell: document.getElementById("prize-pool-shell"),
  userName: document.getElementById("user-name"),
  logoutButton: document.getElementById("logout-button"),
  profileSummary: document.getElementById("profile-summary"),
  openAdminButton: document.getElementById("open-admin-button"),
  adminShell: document.getElementById("admin-shell"),
  openShareableContentButton: document.getElementById("open-shareable-content-button"),
  adminShareableWorkspace: document.getElementById("admin-shareable-workspace"),
  adminTabControls: document.getElementById("admin-tab-controls"),
  adminTabPanels: [...document.querySelectorAll(".admin-tab-panel")],
  closeAdminButton: document.getElementById("close-admin-button"),
  adminRoundForm: document.getElementById("admin-round-form"),
  adminRoundSelect: document.getElementById("admin-round-select"),
  adminRoundSummary: document.getElementById("admin-round-summary"),
  adminRoundFeedback: document.getElementById("admin-round-feedback"),
  openingMarket: document.getElementById("opening-market"),
  openingLineInput: document.getElementById("opening-line-input"),
  currentLineInput: document.getElementById("current-line-input"),
  settlementMarket: document.getElementById("settlement-market"),
  finalScoreInput: document.getElementById("final-score-input"),
  openingLineForm: document.getElementById("opening-line-form"),
  settlementForm: document.getElementById("settlement-form"),
  settleRoundButton: document.getElementById("settle-round-button"),
  undoSettlementButton: document.getElementById("undo-settlement-button"),
  openingFeedback: document.getElementById("opening-feedback"),
  settlementFeedback: document.getElementById("settlement-feedback"),
  botSummary: document.getElementById("bot-summary"),
  botPerformanceList: document.getElementById("bot-performance-list"),
  createRandomProbBot: document.getElementById("create-random-prob-bot"),
  purgeLegacyBots: document.getElementById("purge-legacy-bots"),
  botRunFeedback: document.getElementById("bot-run-feedback"),
  botLog: document.getElementById("bot-log"),
  adminDashboard: document.getElementById("admin-dashboard"),
  adminAnalyticsControls: document.getElementById("admin-analytics-controls"),
  adminAnalyticsOverview: document.getElementById("admin-analytics-overview"),
  adminAnalyticsFunnel: document.getElementById("admin-analytics-funnel"),
  adminSignupsChart: document.getElementById("admin-signups-chart"),
  adminActiveUsersChart: document.getElementById("admin-active-users-chart"),
  adminSourcesChart: document.getElementById("admin-sources-chart"),
  adminContactList: document.getElementById("admin-contact-list"),
  adminMarketControls: document.getElementById("admin-market-controls"),
  adminMarketList: document.getElementById("admin-market-list"),
  adminTradeControls: document.getElementById("admin-trade-controls"),
  adminAffiliateSummary: document.getElementById("admin-affiliate-summary"),
  adminAffiliateReferralsBody: document.getElementById("admin-affiliate-referrals-body"),
  adminAffiliateFeedback: document.getElementById("admin-affiliate-feedback"),
  positionsBody: document.getElementById("positions-body"),
  resetDemo: document.getElementById("reset-demo"),
  toast: document.getElementById("toast")
};

const onboardingModal = typeof window.createCrowdIQOnboardingModal === "function"
  ? window.createCrowdIQOnboardingModal({
      host: elements.onboardingOverlay,
      onSkip: handleOnboardingSkip,
      onComplete: handleOnboardingComplete,
      onLogin: handleOnboardingLogin
    })
  : null;

init();

async function init() {
  bindEvents();
  resetHowItWorksToolbarDismissal();
  syncChallengeRouteFromLocation();
  const savedUserName = localStorage.getItem(USER_NAME_KEY);
  if (savedUserName) {
    if (elements.userName) {
      elements.userName.value = savedUserName;
    }
    elements.authUsername.value = savedUserName;
  }
  // Render immediately so the app is never a blank screen while waiting for the server
  renderAll();
  scheduleOnboardingPopup();
  renderAuthPreview();
  syncPopularFeaturedPlayers();
  // Sync session without touching credentials on failure — completeLogin() would
  // clear the saved username if syncSession() throws, which logs the user out silently.
  try {
    await syncSession();
  } catch (error) {
    console.warn("Startup session sync failed", error.message);
  }
  normalizeNavigationState();
  syncSelectedMarket();
  await maybeLoadChallengeRoute();
  renderAll();
  if (savedUserName) {
    renderAuthGate(false);
    dismissGuestHero();
  }
  startLiveSync();
}

function bindEvents() {
  window.addEventListener("popstate", async () => {
    syncChallengeRouteFromLocation();
    await maybeLoadChallengeRoute();
    renderAll();
  });
  window.addEventListener("pageshow", () => {
    handlePageResume();
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      handlePageResume();
    }
  });
  [elements.authHeaderSignup, elements.authHeroEntry].forEach((button) =>
    button?.addEventListener("click", () => {
      elements.authUsername?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => elements.authUsername?.focus(), 120);
    })
  );

  elements.authClose?.addEventListener("click", () => {
    renderAuthGate(false);
  });

  elements.authGate?.addEventListener("click", (event) => {
    if (event.target === elements.authGate) {
      renderAuthGate(false);
    }
  });

  elements.navButtons.forEach((button) =>
    button.addEventListener("click", () => {
      if (button.dataset.screenTarget === "markets") {
        focusPreferredMatchCentreGame(true);
      }
      uiState.activeScreen = button.dataset.screenTarget;
      renderAll();
    })
  );

  elements.searchInput.addEventListener("input", () => {
    uiState.searchTerm = elements.searchInput.value.trim().toLowerCase();
    renderSearchResults();
  });

  elements.authForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userName = elements.authUsername.value.trim();
    await completeLogin(userName);
  });

  elements.howItWorksNavButton?.addEventListener("click", () => {
    openOnboardingPopup();
  });

  elements.howItWorksNavDismiss?.addEventListener("click", (event) => {
    event.stopPropagation();
    dismissHowItWorksToolbarButton();
  });

  elements.logoutButton?.addEventListener("click", async () => {
    await handleLogout();
  });

  elements.portfolioSortButton.addEventListener("click", () => {
    const sortOptions = ["MOST_RECENT", "HIGHEST_STAKE", "HIGHEST_PL"];
    const currentIndex = sortOptions.indexOf(uiState.portfolioSort);
    uiState.portfolioSort = sortOptions[(currentIndex + 1 + sortOptions.length) % sortOptions.length];
    renderPortfolio();
  });

  elements.leaderboardSortChips.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-leaderboard-sort]");
    if (!chip) return;
    uiState.leaderboardSort = chip.dataset.leaderboardSort;
    renderLeaderboard();
  });
  elements.leaderboardTimeChips?.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-leaderboard-time-filter]");
    if (!chip) return;
    uiState.leaderboardTimeFilter = chip.dataset.leaderboardTimeFilter;
    renderLeaderboard();
  });
  elements.accountViewSwitch?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-account-view]");
    if (!button) return;
    uiState.activeAccountView = button.dataset.accountView;
    renderScreens();
  });
  elements.headerBalance?.addEventListener("click", () => {
    if (!isAuthenticated()) {
      openAuthPrompt("signup");
      return;
    }
    uiState.activeScreen = "account";
    uiState.activeAccountView = "wallet";
    renderAll();
  });
  elements.headerMenuButton?.addEventListener("click", () => {
    openAppMenu();
  });
  elements.walletAmountInput?.addEventListener("input", () => {
    uiState.walletAmountDraft = elements.walletAmountInput.value;
  });
  elements.walletAmountPresets?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-wallet-amount]");
    if (!button) return;
    uiState.walletAmountDraft = button.dataset.walletAmount || "";
    if (elements.walletAmountInput) {
      elements.walletAmountInput.value = uiState.walletAmountDraft;
    }
  });
  elements.walletDepositButton?.addEventListener("click", async () => {
    await submitWalletDeposit();
  });
  elements.walletWithdrawButton?.addEventListener("click", async () => {
    await submitWalletWithdrawal();
  });

  elements.homeLeaderboardLink?.addEventListener("click", () => {
    openFullLeaderboard();
  });
  elements.leaderboardBackButton?.addEventListener("click", () => {
    uiState.activeScreen = "home";
    renderAll();
  });
  elements.homeCarousel?.addEventListener("scroll", handleHomeCarouselScroll, { passive: true });
  elements.homeCarouselNav?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-home-panel-target]");
    if (!button) return;
    scrollHomeCarouselTo(button.dataset.homePanelTarget);
  });

  elements.openAdminButton?.addEventListener("click", async () => {
    await handleOpenAdminTools();
  });
  elements.openShareableContentButton?.addEventListener("click", () => {
    openShareableContentLibrary();
  });
  elements.adminShareableWorkspace?.addEventListener("click", handleAdminShareableWorkspaceClick);
  elements.adminShareableWorkspace?.addEventListener("input", handleAdminShareableWorkspaceInput);
  elements.adminShareableWorkspace?.addEventListener("change", handleAdminShareableWorkspaceChange);

  elements.closeAdminButton.addEventListener("click", () => {
    closeShareableContentOutput();
    uiState.adminOpen = false;
    uiState.adminShareableView = "main";
    stopAdminAnalyticsPolling();
    renderAdminShell();
  });

  elements.adminRoundForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveActiveRound();
  });
  elements.openingMarket.addEventListener("change", syncOpeningForm);
  elements.openingLineForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveLines();
  });
  elements.settlementForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await settleMarket();
  });
  elements.settleRoundButton?.addEventListener("click", async () => {
    await settleCurrentRoundFromImportedScores();
  });
  elements.undoSettlementButton?.addEventListener("click", async () => {
    await undoSettlementBatch();
  });
  elements.createRandomProbBot?.addEventListener("click", async () => {
    await createSimulationBot();
  });
  elements.purgeLegacyBots?.addEventListener("click", async () => {
    await purgeLegacyBots();
  });
  elements.resetDemo.addEventListener("click", async () => {
    await api("/api/admin/reset", {});
    await syncSession();
    uiState.expandedMarketId = "";
    syncSelectedMarket();
    renderAll();
  });

  elements.adminMarketControls?.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-admin-market-filter]");
    if (filterButton) {
      uiState.adminMarketFilter = filterButton.dataset.adminMarketFilter;
      renderAdminMarkets();
      return;
    }
    const limitButton = event.target.closest("[data-admin-market-limit]");
    if (limitButton) {
      uiState.adminMarketLimit = Number(limitButton.dataset.adminMarketLimit);
      renderAdminMarkets();
    }
  });

  elements.adminTradeControls?.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-admin-trade-filter]");
    if (filterButton) {
      uiState.adminTradeFilter = filterButton.dataset.adminTradeFilter;
      renderAdminTable();
      return;
    }
    const limitButton = event.target.closest("[data-admin-trade-limit]");
    if (limitButton) {
      uiState.adminTradeLimit = Number(limitButton.dataset.adminTradeLimit);
      renderAdminTable();
    }
  });

  elements.adminAnalyticsControls?.addEventListener("click", (event) => {
    const rangeButton = event.target.closest("[data-analytics-range]");
    if (!rangeButton) return;
    const nextRange = rangeButton.dataset.analyticsRange;
    if (!nextRange || nextRange === uiState.adminAnalyticsRange) return;
    uiState.adminAnalyticsRange = nextRange;
    renderAdminAnalyticsControls();
    void refreshAdminAnalytics(true);
  });

  elements.adminTabControls?.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-admin-tab]");
    if (!tabButton) return;
    void setActiveAdminTab(tabButton.dataset.adminTab || "operations");
  });

  bindSwipeNavigation();
  document.addEventListener("scroll", trackScrollInteraction, { passive: true, capture: true });
  document.addEventListener("wheel", trackScrollInteraction, { passive: true });
  document.addEventListener("touchmove", trackScrollInteraction, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    refreshSharedState();
  });
  window.addEventListener("resize", schedulePrizePoolShareFit);

  document.addEventListener("click", (event) => {
    const confidenceTrigger = event.target.closest(".market-confidence-trigger");
    if (confidenceTrigger) {
      event.preventDefault();
      event.stopPropagation();
      openAppModal("market-confidence-info");
      return;
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (uiState.activeAppModal) {
      closeAppModal();
      return;
    }
    if (uiState.appMenuOpen) {
      closeAppMenu();
    }
  });
}

function handleHomeCarouselScroll() {
  const carousel = elements.homeCarousel;
  if (!carousel) return;
  const sections = [...carousel.querySelectorAll(".home-carousel-section")];
  if (!sections.length) return;
  const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
  let activeSection = sections[0];
  let smallestDistance = Number.POSITIVE_INFINITY;
  sections.forEach((section) => {
    const sectionCenter = section.offsetLeft + section.offsetWidth / 2;
    const distance = Math.abs(sectionCenter - carouselCenter);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      activeSection = section;
    }
  });
  const panelKey = activeSection.dataset.homePanel || "movers";
  if (uiState.activeHomePanel !== panelKey) {
    uiState.activeHomePanel = panelKey;
    renderHomeCarouselControls();
  }
}

function scrollHomeCarouselTo(panelKey) {
  const carousel = elements.homeCarousel;
  const panel = carousel?.querySelector(`[data-home-panel="${panelKey}"]`);
  if (!carousel || !panel) return;
  uiState.activeHomePanel = panelKey;
  renderHomeCarouselControls();
  carousel.scrollTo({ left: panel.offsetLeft, behavior: "smooth" });
}

function bindSwipeNavigation() {
  return;
}

function hasAdminAccess() {
  return window.sessionStorage.getItem(ADMIN_ACCESS_KEY) === "granted";
}

async function requestAdminAccess() {
  if (hasAdminAccess()) return true;
  const password = window.prompt("Enter admin password");
  if (!password) {
    return false;
  }
  try {
    await api("/api/admin/auth", { password }, { includeUserName: false });
    window.sessionStorage.setItem(ADMIN_ACCESS_KEY, "granted");
    return true;
  } catch (error) {
    window.sessionStorage.removeItem(ADMIN_ACCESS_KEY);
    showToast("Admin access denied", error.message || "Incorrect password.");
    return false;
  }
}

function applySharedSnapshot(response) {
  const nextState = response.state && typeof response.state === "object" ? response.state : {};
  const hasMarketPayload = Array.isArray(nextState.markets) && nextState.markets.length > 0;
  const preservedMarkets = hasMarketPayload
    ? nextState.markets
    : (Array.isArray(state.markets) && state.markets.length ? state.markets : authPreviewMarkets);
  const nextActiveRoundNumber = Number.isFinite(Number(nextState.activeRoundNumber))
    ? Number(nextState.activeRoundNumber)
    : activeRoundNumber();
  state = {
    ...state,
    ...nextState,
    markets: preservedMarkets,
    walletTransactions: Array.isArray(nextState.walletTransactions) ? nextState.walletTransactions : (state.walletTransactions || []),
    contactMessages: Array.isArray(nextState.contactMessages) ? nextState.contactMessages : (state.contactMessages || []),
    activeRoundNumber: nextActiveRoundNumber,
    activeRoundLabel: nextState.activeRoundLabel || roundLabelForNumber(nextActiveRoundNumber)
  };
  backendState = response.backend || { mode: "local", user: null, dashboard: null };
  prizePoolState = response.prizePool || null;
}

async function syncSession(options = {}) {
  const response = await api("/api/session", {
    userName: currentUserName(),
    logUserAuthEvent: Boolean(options.logUserAuthEvent)
  });
  applySharedSnapshot(response);
  if (popularFeaturedRoundNumber !== activeRoundNumber()) {
    popularFeaturedMarketIds = [];
  }
  syncPopularFeaturedPlayers();
}

async function completeLogin(userName) {
  if (!userName) {
    elements.authFeedback.textContent = "Enter a username to continue.";
    return;
  }
  elements.authFeedback.textContent = "Entering crowdIQ...";
  elements.authUsername.disabled = true;
  try {
    if (elements.userName) {
      elements.userName.value = userName;
    }
    localStorage.setItem(USER_NAME_KEY, userName);
    localStorage.setItem(HAS_AUTHENTICATED_KEY, "true");
    randomizeQuickPickOrder();
    await syncSession({ logUserAuthEvent: true });
    localStorage.setItem(AUTH_TOKEN_KEY, "true");
    syncSelectedMarket();
    renderAll();
    renderAuthGate(false);
    dismissGuestHero();
    startLiveSync();
    elements.authFeedback.textContent = "";
    redirectToPendingChallengeIfNeeded();
  } catch (error) {
    localStorage.removeItem(USER_NAME_KEY);
    elements.authFeedback.textContent = error.message;
  } finally {
    elements.authUsername.disabled = false;
  }
}

function isAuthenticated() {
  return Boolean(localStorage.getItem(USER_NAME_KEY)?.trim());
}

function hasSignedUp() {
  return localStorage.getItem(AUTH_TOKEN_KEY) === "true";
}

function hasSeenOnboarding() {
  return localStorage.getItem(HAS_SEEN_ONBOARDING_KEY) != null;
}

function shouldShowOnboardingPopup() {
  return Boolean(onboardingModal)
    && !isAuthenticated()
    && !hasSeenOnboarding()
    && uiState.activeScreen === "home"
    && !isChallengeRouteActive();
}

function scheduleOnboardingPopup() {
  if (onboardingPopupTimer || !shouldShowOnboardingPopup()) {
    return;
  }
  onboardingPopupTimer = window.setTimeout(() => {
    onboardingPopupTimer = null;
    if (!shouldShowOnboardingPopup()) {
      return;
    }
    openOnboardingPopup();
  }, ONBOARDING_POPUP_DELAY_MS);
}

function openOnboardingPopup() {
  window.clearTimeout(onboardingPopupTimer);
  onboardingPopupTimer = null;
  uiState.appMenuOpen = false;
  uiState.activeAppModal = "";
  renderAppChrome();
  onboardingModal?.show();
}

function openOnboardingSignupPopup() {
  window.clearTimeout(onboardingPopupTimer);
  onboardingPopupTimer = null;
  markOnboardingSeen();
  onboardingModal?.show("signup");
}

function dismissOnboardingPopup() {
  window.clearTimeout(onboardingPopupTimer);
  onboardingPopupTimer = null;
  onboardingModal?.hide();
}

function markOnboardingSeen() {
  localStorage.setItem(HAS_SEEN_ONBOARDING_KEY, "true");
}

function handleOnboardingSkip() {
  markOnboardingSeen();
  dismissOnboardingPopup();
}

async function handleOnboardingComplete(userName) {
  const trimmedUserName = String(userName || "").trim();
  if (!trimmedUserName) {
    return { ok: false, message: "Enter a username to continue." };
  }
  uiState.activeScreen = "home";
  await completeLogin(trimmedUserName);
  if (!isAuthenticated()) {
    return { ok: false, message: elements.authFeedback?.textContent || "Something went wrong." };
  }
  markOnboardingSeen();
  dismissOnboardingPopup();
  return { ok: true };
}

function handleOnboardingLogin() {
  markOnboardingSeen();
  dismissOnboardingPopup();
}

function resetHowItWorksToolbarDismissal() {
  if (!hasSignedUp()) {
    localStorage.removeItem(DISMISSED_HOW_IT_WORKS_KEY);
  }
}

async function handleLogout() {
  stopLiveSync();
  stopPrizePoolPolling();
  stopKickoffTimer();
  randomizeQuickPickOrder();
  uiState.prizePoolSubmissionToastShown = false;
  uiState.prizePoolShareOpen = false;
  uiState.appMenuOpen = false;
  uiState.activeAppModal = "";
  renderPrizePoolShareOverlay();
  renderAppChrome();
  localStorage.removeItem(USER_NAME_KEY);
  backendState = { mode: "local", user: null, dashboard: null };
  elements.authUsername.value = "";
  elements.authFeedback.textContent = "";
  if (elements.userName) {
    elements.userName.value = "";
  }
  uiState.activeScreen = "home";
  uiState.activeAccountView = "portfolio";
  renderAuthGate(false);
  state = {
    ...state,
    bankrolls: {},
    markets: authPreviewMarkets,
    walletTransactions: [],
    activeRoundNumber: CURRENT_ROUND_NUMBER,
    activeRoundLabel: CURRENT_ROUND_LABEL
  };
  prizePoolState = null;
  normalizeNavigationState();
  syncSelectedMarket();
  renderAll();
  try {
    await syncSession();
    normalizeNavigationState();
    syncSelectedMarket();
    renderAll();
  } catch (error) {
    console.warn("Logout guest sync failed", error.message);
  }
  startLiveSync();
}

async function handleOpenAdminTools() {
  if (!await requestAdminAccess()) return;
  uiState.adminOpen = true;
  uiState.adminActiveTab = "operations";
  renderAdminShell();
  await refreshAdminAnalytics(true);
}

async function setActiveAdminTab(nextTab) {
  const normalizedTab = nextTab === "affiliates" ? "affiliates" : "operations";
  if (uiState.adminActiveTab === normalizedTab) {
    return;
  }
  uiState.adminActiveTab = normalizedTab;
  renderAdminShell();
  if (normalizedTab === "affiliates") {
    await refreshAdminAffiliates();
    return;
  }
  await refreshAdminAnalytics(true);
}

function startAdminAnalyticsPolling() {
  if (adminAnalyticsRefreshTimer) return;
  adminAnalyticsRefreshTimer = window.setInterval(() => {
    void refreshAdminAnalytics(false);
  }, 60000);
}

function stopAdminAnalyticsPolling() {
  if (adminAnalyticsRefreshTimer) {
    window.clearInterval(adminAnalyticsRefreshTimer);
    adminAnalyticsRefreshTimer = null;
  }
}

async function refreshAdminAnalytics(forceLoadingState) {
  if (!uiState.adminOpen || !hasAdminAccess()) return;
  if (forceLoadingState) {
    uiState.adminAnalyticsLoading = true;
    renderAdminAnalyticsControls();
    renderAdminAnalytics();
  }
  try {
    const range = uiState.adminAnalyticsRange;
    const [overview, trends, sources, returning, funnel] = await Promise.all([
      apiGet(`/api/admin/analytics/overview?range=${encodeURIComponent(range)}`),
      apiGet(`/api/admin/analytics/trends?range=${encodeURIComponent(range)}`),
      apiGet(`/api/admin/analytics/sources?range=${encodeURIComponent(range)}`),
      apiGet(`/api/admin/analytics/returning?range=${encodeURIComponent(range)}`),
      apiGet(`/api/admin/analytics/funnel?range=${encodeURIComponent(range)}`)
    ]);
    uiState.adminAnalyticsOverview = overview;
    uiState.adminAnalyticsTrends = trends;
    uiState.adminAnalyticsSources = sources;
    uiState.adminAnalyticsReturning = returning;
    uiState.adminAnalyticsFunnel = funnel;
  } catch (error) {
    if (String(error.message || "").toLowerCase().includes("admin access")) {
      window.sessionStorage.removeItem(ADMIN_ACCESS_KEY);
      uiState.adminOpen = false;
      stopAdminAnalyticsPolling();
    }
  } finally {
    uiState.adminAnalyticsLoading = false;
    renderAdminAnalyticsControls();
    renderAdminAnalytics();
    renderAdminShell();
  }
}

function shouldShowHowItWorksToolbarButton() {
  return Boolean(elements.howItWorksNavShell)
    && !isAuthenticated()
    && !hasSignedUp()
    && localStorage.getItem(DISMISSED_HOW_IT_WORKS_KEY) !== "true";
}

function renderHowItWorksToolbarButton() {
  elements.howItWorksNavShell?.classList.toggle("is-hidden", !shouldShowHowItWorksToolbarButton());
}

function dismissHowItWorksToolbarButton() {
  localStorage.setItem(DISMISSED_HOW_IT_WORKS_KEY, "true");
  renderHowItWorksToolbarButton();
}

function hasAuthenticatedBefore() {
  return localStorage.getItem(HAS_AUTHENTICATED_KEY) === "true";
}

function openAuthPrompt(mode = "signup") {
  if (onboardingModal) {
    openOnboardingSignupPopup();
    return;
  }
  // If home screen is active, scroll to the inline form instead of opening overlay
  if (uiState.activeScreen === "home") {
    const inlineInput = document.getElementById("inline-auth-username");
    if (inlineInput) {
      inlineInput.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => inlineInput.focus(), 120);
      return;
    }
  }
  elements.authFeedback.textContent = "";
  renderAuthGate(true);
}

function renderAuthGate(isOpen) {
  window.clearTimeout(authFocusTimer);
  elements.authGate.classList.toggle("is-hidden", !isOpen);
  elements.authGate.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("auth-prompt-open", Boolean(isOpen));
  if (isOpen) {
    authFocusTimer = window.setTimeout(() => {
      elements.authUsername?.focus();
      elements.authUsername?.select();
    }, 140);
  }
}

function renderGuestHero() {
  const hero = elements.homeGuestHero;
  if (!hero) return;
  if (isAuthenticated()) {
    hero.innerHTML = "";
    hero.classList.add("is-hidden");
    return;
  }
  hero.classList.remove("is-hidden");
  hero.innerHTML = `
    <div class="auth-hero-inline">
      <section class="auth-copy auth-hero">
        <p class="eyebrow">crowdIQ Live</p>
        <h2 class="auth-hero-title">The crowd<br>sets the projection.</h2>
        <p class="auth-hero-subtitle">Browse live NRL fantasy player projections before you sign up to trade.</p>
        <div class="auth-live-signal">
          <span class="auth-live-dot" aria-hidden="true"></span>
          <span>Market live &middot; ${activeRoundLabel()}</span>
        </div>
      </section>
    </div>
    <div class="guest-hero-divider"></div>
  `;
}

function renderGuestUnauthBottom() {
  const container = elements.homeUnauthBottom;
  if (!container) return;
  container.innerHTML = "";
}

function dismissGuestHero() {
  const hero = elements.homeGuestHero;
  if (!hero || hero.classList.contains("is-hidden")) return;
  hero.classList.add("is-dismissing");
  window.setTimeout(() => {
    hero.innerHTML = "";
    hero.classList.remove("is-dismissing");
    hero.classList.add("is-hidden");
  }, 300);
}

function ensureSeededMarketState() {
  if (Array.isArray(state.markets) && state.markets.length) {
    return;
  }
  state = {
    ...state,
    markets: authPreviewMarkets,
    activeRoundNumber: state.activeRoundNumber || CURRENT_ROUND_NUMBER,
    activeRoundLabel: state.activeRoundLabel || CURRENT_ROUND_LABEL
  };
}

function renderAuthPreview() {
  const markets = state.markets?.length
    ? getActiveRoundMarkets()
    : authPreviewMarkets.filter((market) => marketRoundNumber(market) === activeRoundNumber());
  const roundLabel = activeRoundLabel();
  const liveTradeCount = markets.length
    ? markets.reduce((total, market) => total + tradeCountFor(market), 0)
    : 0;
  const tickerSegment = `${roundLabel} now open &middot; ${liveTradeCount} trades placed &middot; Live projections moving &middot; Markets close at kick-off`;
  const featuredMarkets = markets
    .slice()
    .sort((left, right) => authPreviewActivity(right) - authPreviewActivity(left) || projectionValue(right) - projectionValue(left))
    .slice(0, 3);
  const previewRows = featuredMarkets.length
    ? featuredMarkets.map((market) => {
        const movement = getMovementText(market);
        return {
          playerName: market.playerName,
          team: market.team,
          position: market.position,
          line: formatLine(market.currentLine),
          movementLabel: `${movement.arrow} ${movement.label}`.trim(),
          movementClassName: movement.value >= 0 ? "is-up" : "is-down"
        };
      })
    : [
        {
          playerName: "Kalyn Ponga",
          team: "Knights",
          position: "Fullback",
          line: "54.5 pts",
          movementLabel: "↑ 2.0 today",
          movementClassName: "is-up"
        },
        {
          playerName: "Nathan Cleary",
          team: "Panthers",
          position: "Halfback",
          line: "61.5 pts",
          movementLabel: "↑ 1.5 today",
          movementClassName: "is-up"
        },
        {
          playerName: "Daly Cherry-Evans",
          team: "Roosters",
          position: "Five-Eighth",
          line: "43.0 pts",
          movementLabel: "↑ 0.5 today",
          movementClassName: "is-up"
        }
      ];

  if (elements.authTickerMarquee) {
    elements.authTickerMarquee.innerHTML = `${tickerSegment} &middot; ${tickerSegment}`;
  }
  if (elements.authLiveBadge) {
    elements.authLiveBadge.innerHTML = `Market live &middot; ${roundLabel}`;
  }
  if (elements.authHeroCtaCopy) {
    elements.authHeroCtaCopy.textContent = `Start with ${formatStake(STARTING_BANKROLL)} in crowdIQ cash`;
  }
  if (!elements.authPhoneMockup) return;
  elements.authPhoneMockup.innerHTML = `
    <div class="auth-phone-status">
      <span class="auth-phone-status-dot" aria-hidden="true"></span>
      <span>${roundLabel}</span>
    </div>
    <div class="auth-phone-section-head">
      <div>
        <span class="auth-phone-label">Live market</span>
        <strong>Most traded now</strong>
      </div>
      <span class="auth-phone-trades">${liveTradeCount} trades</span>
    </div>
    <div class="auth-phone-market-list">
      ${previewRows
        .map(
          (market) => `
            <article class="auth-phone-market-row">
              <div class="auth-phone-market-copy">
                <strong>${market.playerName}</strong>
                <span>${market.team} &middot; ${market.position}</span>
              </div>
              <div class="auth-phone-market-metrics">
                <span>${market.line}</span>
                <strong class="${market.movementClassName}">${market.movementLabel}</strong>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function startLiveSync() {
  stopLiveSync();
  if (backendState.mode === "local") {
    return;
  }
  syncTimer = window.setInterval(() => {
    refreshSharedState();
  }, LIVE_SYNC_MS);
}

function stopLiveSync() {
  if (!syncTimer) return;
  window.clearInterval(syncTimer);
  syncTimer = null;
}

async function refreshSharedState() {
  if (syncInFlight) return;
  syncInFlight = true;
  const previousRenderSignature = buildRenderSignature(state, backendState);
  try {
    await syncSession();
    await maybeLoadChallengeRoute(true);
    const nextRenderSignature = buildRenderSignature(state, backendState);
    if (nextRenderSignature === previousRenderSignature) {
      return;
    }
    if (isStakeInputInteractionActive) {
      pendingRenderAfterStakeInput = true;
      return;
    }
    if (isScrollInteractionActive) {
      pendingRenderAfterScroll = true;
      return;
    }
    applyLiveStateRender();
  } catch (error) {
    console.warn("Mercatus live sync failed", error);
  } finally {
    syncInFlight = false;
  }
}

async function handlePageResume() {
  if (syncInFlight) {
    return;
  }
  ensureSeededMarketState();
  try {
    await syncSession();
    await maybeLoadChallengeRoute(true);
  } catch (error) {
    console.warn("Resume session sync failed", error.message);
    ensureSeededMarketState();
  }
  startLiveSync();
  applyLiveStateRender();
}

function renderAll() {
  normalizeNavigationState();
  safelyRender("challenge route", renderChallengeRoute);
  safelyRender("header balance", renderHeaderBalance);
  safelyRender("app chrome", renderAppChrome);
  safelyRender("guest hero", renderGuestHero);
  safelyRender("screens", renderScreens);
  safelyRender("how it works toolbar", renderHowItWorksToolbarButton);
  safelyRender("team toggle", renderTeamToggle);
  safelyRender("selectors", renderSelectors);
  safelyRender("home", renderHome);
  safelyRender("search results", renderSearchResults);
  safelyRender("selected market", renderSelectedMarket);
  safelyRender("markets list", renderMarketsList);
  safelyRender("portfolio", renderPortfolio);
  safelyRender("wallet", renderWallet);
  safelyRender("quick take", renderQuickTake);
  safelyRender("prize pool", renderPrizePool);
  safelyRender("prize pool share overlay", renderPrizePoolShareOverlay);
  safelyRender("leaderboard", renderLeaderboard);
  safelyRender("profile summary", renderProfileSummary);
  safelyRender("admin shell", renderAdminShell);
  safelyRender("admin analytics controls", renderAdminAnalyticsControls);
  safelyRender("admin shareable workspace", renderAdminShareableWorkspace);
  safelyRender("admin dashboard", renderAdminDashboard);
  safelyRender("admin analytics", renderAdminAnalytics);
  safelyRender("admin affiliates", renderAdminAffiliates);
  safelyRender("admin contact inbox", renderAdminContactInbox);
  safelyRender("admin markets", renderAdminMarkets);
  safelyRender("bot simulation", renderBotSimulation);
  safelyRender("admin table", renderAdminTable);
  safelyRender("shareable content output", renderShareableContentOutput);
  safelyRender("opening form", syncOpeningForm);
  safelyRender("kickoff refresh", scheduleKickoffRefresh);
  safelyRender("prize pool polling", syncPrizePoolPolling);
}

function renderHeaderBalance() {
  if (!elements.headerBalance) return;
  if (!isAuthenticated()) {
    elements.headerBalance.innerHTML = `<button class="header-signup-button" type="button">Sign Up Now</button>`;
    return;
  }
  const bankroll = getDisplayedCash(currentUserName());
  elements.headerBalance.innerHTML = `<i class="ph-fill ph-wallet header-balance-icon" aria-hidden="true"></i><span class="header-balance-label">Wallet</span><strong>${formatStake(bankroll)}</strong>`;
}

function openAppMenu() {
  uiState.appMenuOpen = true;
  renderAppChrome();
}

function closeAppMenu() {
  if (!uiState.appMenuOpen) return;
  uiState.appMenuOpen = false;
  renderAppChrome();
}

function openAppModal(modalKey) {
  if (!APP_MODAL_TITLES[modalKey]) return;
  if (modalKey === "how-it-works") {
    uiState.appMenuOpen = false;
    renderAppChrome();
    openOnboardingPopup();
    return;
  }
  uiState.appMenuOpen = false;
  uiState.activeAppModal = modalKey;
  if (modalKey !== "contact-us") {
    uiState.contactFormSubmitted = false;
  }
  renderAppChrome();
}

function closeAppModal() {
  if (!uiState.activeAppModal) return;
  if (uiState.activeAppModal === "challenge-friends") {
    resetChallengeModalState();
  }
  uiState.activeAppModal = "";
  renderAppChrome();
}

async function submitAccountSettingsUsername() {
  const input = document.getElementById("account-settings-username");
  if (!input) return;
  const nextUserName = input.value.trim();
  const currentName = currentUserName();
  if (!nextUserName || nextUserName === currentName) {
    input.value = currentName;
    return;
  }
  await completeLogin(nextUserName);
  if (isAuthenticated()) {
    input.value = currentUserName();
  } else {
    input.value = currentName;
  }
}

function handleAppMenuSignup() {
  uiState.appMenuOpen = false;
  renderAppChrome();
  if (isAuthenticated()) return;
  openAuthPrompt("signup");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function ensureAppChromeHost() {
  let host = document.getElementById("app-chrome-host");
  if (!host) {
    host = document.createElement("div");
    host.id = "app-chrome-host";
    host.className = "app-chrome-host";
    document.body.appendChild(host);
  }
  return host;
}

function renderAppChrome() {
  const host = document.getElementById("app-chrome-host");
  const hasVisibleChrome = uiState.appMenuOpen || Boolean(uiState.activeAppModal);
  if (!hasVisibleChrome) {
    if (host) host.remove();
    document.body.classList.remove("app-chrome-open");
    appChromeRenderKey = "";
    return;
  }

  const renderKey = JSON.stringify({
    menuOpen: uiState.appMenuOpen,
    activeModal: uiState.activeAppModal,
    contactSubmitted: uiState.contactFormSubmitted,
    challengeModalStep: uiState.activeAppModal === "challenge-friends" ? uiState.challengeModalStep : "",
    challengeSelectedTradeIds: uiState.activeAppModal === "challenge-friends" ? uiState.challengeSelectedTradeIds : [],
    challengeCreatePending: uiState.activeAppModal === "challenge-friends" ? uiState.challengeCreatePending : false,
    challengeCreateError: uiState.activeAppModal === "challenge-friends" ? uiState.challengeCreateError : "",
    challengeCreatedUrl: uiState.activeAppModal === "challenge-friends" ? uiState.challengeCreatedUrl : "",
    challengeCreatedTradeCount: uiState.activeAppModal === "challenge-friends" ? uiState.challengeCreatedTradeCount : 0,
    challengeExcludedTradeCount: uiState.activeAppModal === "challenge-friends" ? uiState.challengeExcludedTradeCount : 0,
    challengeCopyStateUntil: uiState.activeAppModal === "challenge-friends" ? uiState.challengeCopyStateUntil : 0
  });
  const chromeHost = ensureAppChromeHost();
  if (appChromeRenderKey === renderKey) {
    document.body.classList.add("app-chrome-open");
    return;
  }
  appChromeRenderKey = renderKey;
  chromeHost.innerHTML = `
    ${uiState.appMenuOpen ? appMenuMarkup() : ""}
    ${uiState.activeAppModal ? appModalMarkup(uiState.activeAppModal) : ""}
  `;

  chromeHost.querySelector(".app-menu-backdrop")?.addEventListener("click", () => {
    closeAppMenu();
  });
  chromeHost.querySelector(".app-menu-close")?.addEventListener("click", () => {
    closeAppMenu();
  });
  chromeHost.querySelectorAll("[data-app-modal-target]").forEach((button) => {
    button.addEventListener("click", () => {
      openAppModal(button.dataset.appModalTarget);
    });
  });
  chromeHost.querySelectorAll("[data-app-screen-target]").forEach((button) => {
    button.addEventListener("click", () => {
      closeAppMenu();
      if (button.dataset.appScreenTarget === "leaderboard") {
        openFullLeaderboard();
      }
    });
  });
  chromeHost.querySelector("[data-app-signup]")?.addEventListener("click", () => {
    handleAppMenuSignup();
  });
  chromeHost.querySelector(".app-modal-close")?.addEventListener("click", () => {
    closeAppModal();
  });
  chromeHost.querySelector(".app-modal-backdrop")?.addEventListener("click", () => {
    closeAppModal();
  });
  chromeHost.querySelector("#account-settings-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitAccountSettingsUsername();
  });
  chromeHost.querySelector("#account-settings-username")?.addEventListener("change", async () => {
    await submitAccountSettingsUsername();
  });
  chromeHost.querySelector("#account-settings-logout")?.addEventListener("click", async () => {
    closeAppModal();
    await handleLogout();
  });
  chromeHost.querySelector("#account-settings-admin")?.addEventListener("click", () => {
    closeAppModal();
    handleOpenAdminTools();
  });
  chromeHost.querySelector("#contact-us-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    submitContactForm();
  });
  chromeHost.querySelector("#contact-email-input")?.addEventListener("input", (event) => {
    uiState.contactEmailDraft = event.target.value;
    uiState.contactFormFeedback = "";
  });
  chromeHost.querySelector("#contact-message-input")?.addEventListener("input", (event) => {
    uiState.contactMessageDraft = event.target.value;
    uiState.contactFormFeedback = "";
  });
  chromeHost.querySelectorAll("[data-full-leaderboard-market-id]").forEach((button) => {
    button.addEventListener("click", () => {
      closeAppModal();
      openMarketFromHome(button.dataset.fullLeaderboardMarketId);
    });
  });
  bindChallengeFriendsModalEvents(chromeHost);

  document.body.classList.add("app-chrome-open");
}

function appMenuMarkup() {
  const signedIn = isAuthenticated();
  const accountHeader = signedIn
    ? `<button class="app-menu-account-header" type="button" data-app-modal-target="account-settings"><span class="app-menu-account-name">${escapeHtml(currentUserName())}</span><span class="app-menu-account-subtext">View Account Settings</span></button><div class="app-menu-divider" aria-hidden="true"></div>`
    : "";
  const signupRow = signedIn
    ? ""
    : `<div class="app-menu-footer"><div class="app-menu-divider" aria-hidden="true"></div><button class="app-menu-signup-button" type="button" data-app-signup>Sign Up Now</button></div>`;
  return `
    <div class="app-menu-overlay">
      <button class="app-menu-backdrop" type="button" aria-label="Close navigation menu"></button>
      <aside class="app-menu-panel" aria-label="App menu">
        <button class="app-menu-close icon-tap-button" type="button" aria-label="Close navigation menu">✕</button>
        <div class="app-menu-list">
          ${accountHeader}
          <button class="app-menu-item" type="button" data-app-modal-target="how-it-works"><i class="ph-fill ph-lightbulb app-menu-item-icon" aria-hidden="true"></i><span>How It Works</span></button>
          <button class="app-menu-item" type="button" data-app-screen-target="leaderboard"><i class="ph-fill ph-trophy app-menu-item-icon" aria-hidden="true"></i><span>Leaderboard</span></button>
          <button class="app-menu-item" type="button" data-app-modal-target="contact-us"><i class="ph-fill ph-envelope-simple app-menu-item-icon" aria-hidden="true"></i><span>Contact Us</span></button>
          ${signupRow}
        </div>
      </aside>
    </div>
  `;
}

function appModalMarkup(modalKey) {
  if (isHomeLeaderboardModal(modalKey)) {
    return homeLeaderboardModalMarkup(modalKey);
  }
  if (isInfoCardModal(modalKey)) {
    return infoCardModalMarkup(modalKey);
  }
  const isHowItWorks = modalKey === "how-it-works";
  const isChallengeFriends = modalKey === "challenge-friends";
  return `
    <div class="app-modal-overlay">
      <button class="app-modal-backdrop" type="button" aria-label="Close ${APP_MODAL_TITLES[modalKey]}"></button>
      <section class="app-modal-shell ${isHowItWorks ? "app-modal-shell-flow" : ""} ${isChallengeFriends ? "challenge-modal-shell" : ""}" role="dialog" aria-modal="true" aria-labelledby="app-modal-title">
        <header class="app-modal-header">
          <h2 id="app-modal-title">${APP_MODAL_TITLES[modalKey]}</h2>
          <button class="app-modal-close icon-tap-button" type="button" aria-label="Close ${APP_MODAL_TITLES[modalKey]}">✕</button>
        </header>
        <div class="app-modal-body ${isHowItWorks ? "app-modal-body-flow" : ""} ${isChallengeFriends ? "challenge-modal-body" : ""}">
          ${appModalContentMarkup(modalKey)}
        </div>
      </section>
    </div>
  `;
}

function isInfoCardModal(modalKey) {
  return modalKey === "prize-pool-info" || modalKey === "market-confidence-info";
}

function isHomeLeaderboardModal(modalKey) {
  return modalKey === "home-value-leaderboard" || modalKey === "home-projected-leaderboard";
}

function homeLeaderboardModalMarkup(modalKey) {
  const config = getHomeLeaderboardModalConfig(modalKey);
  return `
    <div class="app-modal-overlay home-full-leaderboard-overlay">
      <button class="app-modal-backdrop" type="button" aria-label="Close ${config.title}"></button>
      <section class="home-full-leaderboard-modal" role="dialog" aria-modal="true" aria-labelledby="app-modal-title">
        <button class="app-modal-close home-full-leaderboard-close" type="button" aria-label="Close ${config.title}">✕</button>
        <div class="home-full-leaderboard-inner">
          <header class="home-full-leaderboard-header">
            <div class="home-full-leaderboard-brand-row">
              <h1 class="brand-wordmark home-full-leaderboard-wordmark"><span class="brand-wordmark-crowd">crowd</span><span class="brand-wordmark-iq">IQ</span></h1>
              <span class="home-full-leaderboard-round-badge">ROUND ${activeRoundNumber()}</span>
            </div>
            <div class="home-full-leaderboard-divider" aria-hidden="true"></div>
            <div class="home-full-leaderboard-title-block">
              <h2 id="app-modal-title">${config.title}</h2>
              <p>${config.subtitle}</p>
            </div>
          </header>
          <div class="home-full-leaderboard-list">
            ${config.variant === "value" ? homeValueLeaderboardHeaderMarkup() : ""}
            ${config.rows.map((row, index) => homeLeaderboardModalRowMarkup(row, index, config)).join("")}
          </div>
          <footer class="home-full-leaderboard-footer">
            <span>Live crowd projections · NRL Fantasy</span>
            <span>crowdiq.live</span>
          </footer>
        </div>
      </section>
    </div>
  `;
}

function homeValueLeaderboardHeaderMarkup() {
  return `
    <div class="home-full-leaderboard-value-list-header" aria-hidden="true">
      <span></span>
      <span class="home-full-leaderboard-value-list-labels">
        <span>NRL Price</span>
        <span>CrowdIQ</span>
        <span></span>
      </span>
    </div>
  `;
}

function getHomeLeaderboardModalConfig(modalKey) {
  const homeData = getHomeLeaderboardPreviewData();
  if (modalKey === "home-value-leaderboard") {
    return {
      variant: "value",
      title: "Top Value Players",
      subtitle: "Best projection gaps vs NRL Fantasy price",
      rows: homeData.bestValue.slice(0, 10)
    };
  }
  return {
    variant: "projected",
    title: "Top Projected Players",
    subtitle: "Highest crowd projections this round",
    rows: homeData.topProjected.slice(0, 10),
    metricFormatter: (row) => {
      const market = row.market || row;
      return `<strong class="home-full-leaderboard-metric">${market.currentLine.toFixed(1)} <span>pts</span></strong>`;
    }
  };
}

function homeLeaderboardModalRowMarkup(row, index, config) {
  const market = row.market || row;
  const matchup = matchupContext(market);
  const valueMetaMarkup = `
    <span class="home-full-leaderboard-value-meta">
      <span class="home-full-leaderboard-value-matchup"><span class="home-team-badge" style="${homeTeamPillStyle(market.team)}">${homeTeamAbbreviation(market.team)}</span><span>${escapeHtml(`vs ${homeTeamAbbreviation(matchup.opponent)}`)}</span></span>
      <span class="home-full-leaderboard-value-position">${escapeHtml(market.position)}</span>
    </span>
  `;
  return `
    <button class="home-full-leaderboard-row" type="button" data-full-leaderboard-market-id="${market.id}">
      <span class="home-full-leaderboard-accent" aria-hidden="true"></span>
      <span class="home-full-leaderboard-rank ${homeRankTone(index)}">${index + 1}</span>
      <span class="home-full-leaderboard-copy">
        <strong>${escapeHtml(market.playerName)}</strong>
        ${config.variant === "value"
          ? valueMetaMarkup
          : `<span class="home-full-leaderboard-meta"><span class="home-team-badge" style="${homeTeamPillStyle(market.team)}">${homeTeamAbbreviation(market.team)}</span><span>${escapeHtml(market.position)}</span></span>`}
      </span>
      ${config.variant === "value" ? homeValueLeaderboardMetricMarkup(row) : config.metricFormatter(row)}
    </button>
  `;
}

function homeValueLeaderboardMetricMarkup(row) {
  const market = row.market || row;
  const impliedScore = Number(row.impliedScore);
  const valueGap = Number(row.value);
  return `
    <span class="home-full-leaderboard-value-columns">
      <span class="home-full-leaderboard-value-values">
        <span class="home-full-leaderboard-value-price">${Number.isFinite(impliedScore) ? impliedScore.toFixed(1) : "--"}</span>
        <strong class="home-full-leaderboard-value-projection">${market.currentLine.toFixed(1)}</strong>
        <span class="home-full-leaderboard-value-gap">${Number.isFinite(valueGap) ? formatSignedLine(Math.abs(valueGap)) : "--"}</span>
      </span>
    </span>
  `;
}

function infoCardModalMarkup(modalKey) {
  const config = modalKey === "prize-pool-info"
    ? {
        kicker: "PRIZE POOL",
        title: "How the Prize Pool works.",
        body: prizePoolInfoBodyMarkup(),
        illustration: prizePoolInfoIllustrationMarkup()
      }
    : {
        kicker: "MARKET CONFIDENCE",
        title: "What is Market Confidence?",
        body: `<p>${MARKET_CONFIDENCE_EXPLANATION}</p>`,
        illustration: marketConfidenceInfoIllustrationMarkup()
      };
  return `
    <div class="app-modal-overlay app-modal-overlay-card">
      <button class="app-modal-backdrop" type="button" aria-label="Close ${APP_MODAL_TITLES[modalKey]}"></button>
      <section class="info-card-modal" role="dialog" aria-modal="true" aria-labelledby="app-modal-title">
        <button class="app-modal-close info-card-modal-close icon-tap-button" type="button" aria-label="Close ${APP_MODAL_TITLES[modalKey]}">✕</button>
        <header class="info-card-modal-topbar">
          <span class="info-card-modal-kicker">${config.kicker}</span>
        </header>
        <div class="info-card-modal-illustration" aria-hidden="true">
          ${config.illustration}
        </div>
        <h2 class="info-card-modal-title" id="app-modal-title">${config.title}</h2>
        <div class="info-card-modal-copy">${config.body}</div>
      </section>
    </div>
  `;
}

function prizePoolInfoBodyMarkup() {
  return PRIZE_POOL_EXPLANATION_PARAGRAPHS.map((paragraph, index) => `
    <article class="info-rule-row">
      <span class="info-rule-label">${PRIZE_POOL_EXPLANATION_LABELS[index]}</span>
      <p>${paragraph}</p>
    </article>
  `).join("");
}

function prizePoolInfoIllustrationMarkup() {
  return `
    <div class="info-preview-prize-pool-icon" aria-hidden="true">
      <i class="ph-fill ph-trophy"></i>
    </div>
  `;
}

function marketConfidenceInfoIllustrationMarkup() {
  return `
    <div class="info-preview-confidence-dials" aria-hidden="true">
      ${marketConfidenceModalDialMarkup(0)}
      ${marketConfidenceModalDialMarkup(50)}
      ${marketConfidenceModalDialMarkup(100)}
    </div>
  `;
}

function marketConfidenceModalDialMarkup(confidence) {
  const tone = confidence >= 70 ? "high" : confidence >= 40 ? "mid" : "low";
  const needle = -78 + (Math.max(0, Math.min(100, confidence)) / 100) * 156;
  return `
    <div class="info-preview-confidence-dial-group ${tone}">
      <span class="market-confidence market-confidence-preview ${tone}" aria-label="Market confidence ${confidence}%">
        <span class="market-confidence-body">
          <span class="market-confidence-dial" style="--needle-angle:${needle}deg">
            <svg viewBox="0 0 120 76" aria-hidden="true">
              <path class="dial-arc" d="M14 62 A46 46 0 0 1 106 62" pathLength="100" />
              <path class="dial-tick" d="M24 58 L31 55" />
              <path class="dial-tick" d="M38 39 L42 45" />
              <path class="dial-tick" d="M60 30 L60 38" />
              <path class="dial-tick" d="M82 39 L78 45" />
              <path class="dial-tick" d="M96 58 L89 55" />
              <text x="18" y="74">E</text>
              <text x="98" y="74">F</text>
            </svg>
            <span class="market-confidence-needle"></span>
            <span class="market-confidence-pivot"></span>
          </span>
        </span>
      </span>
      <span class="info-preview-confidence-caption">${confidence}%</span>
    </div>
  `;
}

function appModalContentMarkup(modalKey) {
  if (modalKey === "challenge-friends") {
    return challengeFriendsModalMarkup();
  }
  if (modalKey === "how-it-works") {
    return HOW_IT_WORKS_SECTIONS.map((section) => `
      <section class="app-modal-flow-section">
        <div class="app-modal-flow-heading">
          <span class="app-modal-flow-accent" aria-hidden="true"></span>
          <h3>${section.title}</h3>
        </div>
        <div class="app-modal-flow-copy">
          ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </section>
    `).join("");
  }
  if (modalKey === "account-settings") {
    return `
      <section class="app-modal-flow-section app-modal-settings-section">
        <p class="eyebrow">Profile Settings</p>
        <div class="app-modal-settings-heading">
          <h3>Account details</h3>
        </div>
        <form id="account-settings-form" class="account-settings-form">
          <label class="account-settings-field">
            <span>Username</span>
            <input id="account-settings-username" name="accountSettingsUsername" type="text" maxlength="24" value="${escapeHtml(currentUserName())}" placeholder="Casey…" autocomplete="username" autocapitalize="words" spellcheck="false">
          </label>
        </form>
      </section>
      <section class="app-modal-flow-section app-modal-settings-section">
        <p class="eyebrow">Account Actions</p>
        <div class="app-modal-settings-heading">
          <h3>Account actions</h3>
        </div>
        <p class="section-meta app-modal-settings-subtext">Manage your session and admin access.</p>
        <div class="account-settings-actions">
          <button id="account-settings-logout" class="secondary-button account-settings-action-button" type="button">Log out</button>
          <button id="account-settings-admin" class="secondary-button account-settings-action-button" type="button">Open admin tools</button>
        </div>
      </section>
    `;
  }
  if (modalKey === "leaderboard") {
    return `
      <section class="app-modal-section">
        <h3>Leaderboard</h3>
        <p>Leaderboard coming soon.</p>
      </section>
    `;
  }
  if (modalKey === "contact-us") {
    return `
      <section class="app-modal-section">
        <form id="contact-us-form" class="contact-form">
          <label class="contact-form-field">
            <span>Your Email</span>
            <input
              id="contact-email-input"
              type="email"
              value="${escapeHtml(uiState.contactEmailDraft)}"
              placeholder="you@example.com"
              autocomplete="email"
            >
          </label>
          <label class="contact-form-field">
            <span>Your Message</span>
            <textarea
              id="contact-message-input"
              rows="5"
              placeholder="How can we help?…"
            >${escapeHtml(uiState.contactMessageDraft)}</textarea>
          </label>
          <button class="primary-button contact-submit-button" type="submit">Send Message</button>
          ${uiState.contactFormSubmitted ? `<p class="contact-confirmation">Thanks for reaching out. Your message is now in the admin inbox.</p>` : ""}
          ${uiState.contactFormFeedback ? `<p class="feedback">${escapeHtml(uiState.contactFormFeedback)}</p>` : ""}
        </form>
      </section>
    `;
  }
  return "";
}

function renderScreens() {
  const challengeActive = isChallengeRouteActive();
  elements.navButtons.forEach((button) =>
    button.classList.toggle("active", !challengeActive && button.dataset.screenTarget === uiState.activeScreen)
  );
  elements.screens.forEach((screen) =>
    screen.classList.toggle("active", !challengeActive && screen.dataset.screen === uiState.activeScreen)
  );
  document.querySelector(".bottom-nav")?.classList.toggle("is-hidden", challengeActive);
  document.querySelector(".app-header")?.classList.toggle("is-hidden", challengeActive);
  elements.accountViewTabs?.forEach((button) =>
    button.classList.toggle("active", button.dataset.accountView === uiState.activeAccountView)
  );
  elements.accountPortfolioView?.classList.toggle("active", uiState.activeAccountView === "portfolio");
  elements.accountWalletView?.classList.toggle("active", uiState.activeAccountView === "wallet");
  elements.toast?.classList.toggle("toast-low", ["quickpick", "prizepool"].includes(uiState.activeScreen));
}

function renderTeamToggle() {
  const game = currentGame();
  const teams = [game.homeTeam, game.awayTeam];
  if (!teams.includes(uiState.currentTeam)) uiState.currentTeam = game.homeTeam;
  elements.teamToggle.innerHTML = teams
    .map((team) => {
      const colors = TEAM_COLORS[team] ?? TEAM_COLORS[normalizeTeamName(team)] ?? { primary: "#151d2a", secondary: "#f5f7fb" };
      return `<button class="team-toggle-button ${team === uiState.currentTeam ? "active" : ""}" type="button" data-team="${team}" style="--team-primary:${colors.primary};--team-secondary:${colors.secondary};">${team}</button>`;
    })
    .join("");
  elements.teamToggle.querySelectorAll(".team-toggle-button").forEach((button) =>
    button.addEventListener("click", () => {
      uiState.currentTeam = button.dataset.team;
      uiState.expandedMarketId = "";
      uiState.focusStakeMarketId = "";
      syncSelectedMarket();
      renderAll();
    })
  );
}

function renderSelectors() {
  const adminMarkets = getAdminRoundMarkets();
  const options = adminMarkets
    .map((market) => `<option value="${market.id}">${market.playerName} (${formatLine(market.currentLine)})</option>`)
    .join("");
  elements.openingMarket.innerHTML = options;
  elements.settlementMarket.innerHTML = adminMarkets
    .map((market) => `<option value="${market.id}">${market.playerName}${market.settlement ? " (resolved)" : ""}</option>`)
    .join("");
}

function renderSearchResults() {
  renderMarketRows(elements.searchResults, filterMarkets(uiState.searchTerm), "No player matches that search yet.");
}

function renderMarketsList() {
  renderMarketRows(elements.marketsList, getVisibleMarkets(), "No player matches that team filter.", { expandable: true });
}

function renderMarketRows(container, markets, emptyMessage, options = {}) {
  const template = document.getElementById("market-row-template");
  const expandable = Boolean(options.expandable);
  container.innerHTML = "";
  if (!markets.length) {
    container.innerHTML = `<div class="section-meta">${emptyMessage}</div>`;
    return;
  }
  markets.forEach((market) => {
    const row = template.content.firstElementChild.cloneNode(true);
    const movement = getMovementText(market);
    const metrics = getMarketTradeMetrics(market);
    const isExpanded = expandable && market.id === uiState.expandedMarketId;
    const status = getMarketStatus(market);
    const teamColors = TEAM_COLORS[market.team] ?? TEAM_COLORS[normalizeTeamName(market.team)] ?? { primary: "#101722", secondary: "#ffffff" };
    row.dataset.marketId = market.id;
    row.classList.toggle("is-selected", market.id === uiState.selectedMarketId);
    row.classList.toggle("is-expanded", isExpanded);
    row.classList.toggle("is-locked", status.className === "status-locked");
    row.querySelector(".player-name").textContent = market.playerName;
    row.querySelector(".player-meta").textContent = `${market.position} | Avg ${market.seasonAverage.toFixed(1)}`;
    const teamPill = row.querySelector(".match-centre-team-pill");
    if (teamPill) {
      teamPill.textContent = homeTeamAbbreviation(market.team);
      teamPill.style.background = teamColors.primary;
      teamPill.style.color = teamColors.secondary || "#ffffff";
      teamPill.style.border = "none";
      teamPill.style.boxShadow = "none";
    }
    row.querySelector(".projection-line").textContent = market.currentLine.toFixed(1);
    row.querySelector(".projection-move").textContent = `${movement.arrow} ${movement.label}`;
    row.querySelector(".projection-move").className = `projection-move ${movement.className}`;
    row.querySelector(".market-confidence-slot")?.remove();
    row.addEventListener("click", () => {
      uiState.currentGameId = market.gameId;
      uiState.currentTeam = market.team;
      uiState.selectedMarketId = market.id;
      uiState.expandedMarketId = expandable && uiState.expandedMarketId !== market.id ? market.id : "";
      uiState.focusStakeMarketId = "";
      uiState.activeScreen = "markets";
      trackMarketViewed(market.id, "market-list");
      renderAll();
    });
    if (isExpanded) {
      const panel = document.createElement("article");
      panel.className = "inline-market-panel is-expanded-card match-expanded-card";
      panel.dataset.marketId = market.id;
      panel.innerHTML = marketDetailMarkup(market);
      container.appendChild(panel);
      bindTradeSheetEvents(panel, market.id);
      if (uiState.focusStakeMarketId === market.id) {
        uiState.focusStakeMarketId = "";
        window.requestAnimationFrame(() => {
          const stakeInput = panel.querySelector("#stake-input");
          if (!stakeInput) return;
          isStakeInputInteractionActive = true;
          stakeInput?.focus();
          stakeInput?.select();
        });
      }
      return;
    }
    container.appendChild(row);
  });
}

function renderSelectedMarket() {
  const game = currentGame();
  const preview = adjacentGame(1) || adjacentGame(-1) || game;
  const currentStatus = getGameLockStatus(game);
  const previewStatus = getGameLockStatus(preview);
  const swipeHint = currentGameIndex() === 0
    ? "Swipe left to next game"
    : currentGameIndex() === roundGames.length - 1
      ? "Swipe right to previous game"
      : "Swipe left or right to change game";
  const homeColors = TEAM_COLORS[game.homeTeam] ?? TEAM_COLORS[normalizeTeamName(game.homeTeam)] ?? { primary: "#101722", secondary: "#68d9ff" };
  const awayColors = TEAM_COLORS[game.awayTeam] ?? TEAM_COLORS[normalizeTeamName(game.awayTeam)] ?? { primary: "#101722", secondary: "#00ffa3" };
  elements.selectedMarketPanel.innerHTML = `<div class="match-card-stack"><div class="market-note-card preview-card ${previewStatus.isLocked ? "is-locked" : ""}" style="--match-primary:${teamPrimary(preview.homeTeam)};--match-secondary:${teamSecondary(preview.awayTeam)};"><p class="eyebrow">Queue</p><h3>${preview.title}</h3><span class="market-note-meta">${formatGameKickoffLabel(preview)}</span><p>${preview.venue}</p><div class="match-lock-row"><span class="status-chip ${previewStatus.isLocked ? "status-locked" : "status-open"}">${previewStatus.label}</span></div></div><div class="market-note-card active-card ${currentStatus.isLocked ? "is-locked" : ""}" style="--match-primary:${homeColors.primary};--match-secondary:${awayColors.secondary};"><p class="eyebrow">Match centre</p><h3>${game.title}</h3><span class="market-note-meta">${formatGameKickoffLabel(game)}</span><p>${game.venue}</p><div class="match-lock-row"><span class="status-chip ${currentStatus.isLocked ? "status-locked" : "status-open"}">${currentStatus.label}</span><div class="swipe-hint">${swipeHint}</div></div></div></div>`;
  bindMatchCardSwipe();
}

function renderLeaderboard() {
  const rows = getLeaderboardRows({ sort: uiState.leaderboardSort, timeFilter: uiState.leaderboardTimeFilter });
  const leaders = rows.slice(0, 3);
  elements.leaderboardSummary.innerHTML = [
    leaderboardMetricCard("Leader", leaders[0] ? leaders[0].userName : "No users yet"),
    leaderboardMetricCard("Top balance", leaders[0] ? formatStake(leaders[0].balance) : formatStake(STARTING_BANKROLL)),
    leaderboardMetricCard("Most trades", rows.length ? String(Math.max(...rows.map((row) => row.tradesCount))) : "0"),
    leaderboardMetricCard("Best win rate", rows.length ? `${Math.max(...rows.map((row) => row.winRate))}%` : "0%")
  ].join("");
  renderLeaderboardControls();
  if (!rows.length) {
    elements.leaderboardList.innerHTML = `<div class="portfolio-empty-state"><strong>No rankings yet</strong><span>No traders have placed a position yet.</span></div>`;
    return;
  }
  const activeUser = currentUserName().toLowerCase();
  elements.leaderboardList.innerHTML = rows
    .map(
      (row, index) =>
        leaderboardRowMarkup(row, index, row.userName.toLowerCase() === activeUser)
    )
    .join("");
}

function renderLeaderboardControls() {
  const sortOptions = [
    ["BALANCE", "Top balance"],
    ["WIN_RATE", "Win rate"],
    ["TRADES", "Most trades"]
  ];
  const timeOptions = [
    ["THIS_ROUND", "This Round"],
    ["ALL_TIME", "All Time"]
  ];
  elements.leaderboardSortChips.innerHTML = sortOptions
    .map(
      ([value, label]) =>
        `<button class="portfolio-chip ${uiState.leaderboardSort === value ? "active" : ""}" type="button" data-leaderboard-sort="${value}">${label}</button>`
    )
    .join("");
  elements.leaderboardTimeChips.innerHTML = timeOptions
    .map(
      ([value, label]) =>
        `<button class="portfolio-chip ${uiState.leaderboardTimeFilter === value ? "active" : ""}" type="button" data-leaderboard-time-filter="${value}">${label}</button>`
    )
    .join("");
}

function getMarketTradeSide(marketId) {
  return uiState.marketTradeSides[marketId] || "OVER";
}

function openInlineTrade(market, side) {
  uiState.currentGameId = market.gameId;
  uiState.currentTeam = market.team;
  uiState.selectedMarketId = market.id;
  uiState.expandedMarketId = market.id;
  uiState.marketTradeSides[market.id] = side;
  uiState.focusStakeMarketId = market.id;
  uiState.activeScreen = "markets";
  trackMarketViewed(market.id, "inline-trade");
  renderAll();
}

function marketDetailMarkup(market) {
  const stakeDraft = uiState.stakeDrafts[market.id] ?? 10;
  const isPending = uiState.pendingTradeMarketId === market.id;
  const isLocked = isMarketLocked(market);
  const isGuest = !isAuthenticated();
  const currentPair = linePairForMarket(market);
  const side = getMarketTradeSide(market.id);
  const status = getMarketStatus(market);
  const movement = getMovementText(market);
  const nextLine = calculateNextLine(market, side, 10);
  const metrics = getMarketTradeMetrics(market);
  const performance = quickPickPerformanceSummary(market);
  const matchup = matchupContext(market);
  const teamColors = TEAM_COLORS[market.team] ?? TEAM_COLORS[normalizeTeamName(market.team)] ?? { primary: "#101722", secondary: "#68d9ff" };
  const controlsDisabled = isPending || isLocked || isGuest;
  const executionCopy = isGuest
    ? "Browse the live projection and sign up when you're ready to place a position."
    : isLocked
      ? "Trading closed at kickoff for this match."
      : "Fills against waiting orders first, then shifts the projection if needed.";
  return `<div class="trade-ticket trade-ticket-compact trade-ticket-quick quick-take-card player-card-shell ${controlsDisabled ? "is-locked" : ""}" style="--quick-primary-soft:${hexToRgba(teamColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(teamColors.secondary, 0.18)};${playerCardTone(market)}"><div class="quick-take-backdrop"></div><div class="quick-take-topline"><span class="eyebrow">Match Centre</span></div><div class="quick-take-header"><div><h3>${market.playerName}</h3><p>${market.team} | ${market.position}</p><p class="quick-take-context">${matchup.label}</p></div><div class="quick-take-status-block"><span class="status-chip ${status.className}">${status.label}</span>${marketConfidenceMarkup(metrics.confidence, true)}</div></div><div class="trade-ticket-metric-row"><div class="trade-ticket-projection-block"><div class="quick-take-line trade-ticket-projection">${market.currentLine.toFixed(1)}</div><span class="quick-take-move trade-ticket-projection-delta ${movement.className}">${movement.arrow} ${movement.label}</span></div><div class="trade-ticket-metric-meta"><span class="trade-ticket-next-mid">Next mid ${nextLine.toFixed(1)}</span></div></div><div class="quick-take-stats"><div class="quick-take-stats-head"><span class="trade-label">Last 5 Games</span><span class="quick-take-season-average">Season avg ${performance.seasonAverageLabel}</span></div><div class="quick-take-score-row">${performance.lastFive.map((entry) => `<span class="quick-take-score-pill ${entry.isMissing ? "is-missing" : ""}" title="${entry.label}">${entry.value}</span>`).join("")}</div><div class="quick-take-statline">${isLocked ? `<span>Trading closed at kickoff</span>` : isGuest ? `<span>Read-only until you sign up</span>` : ""}<span>${metrics.unmatchedOrderCount} unmatched orders</span></div></div><form id="trade-form" class="trade-form-grid trade-ticket-form ${isPending ? "is-pending" : ""} ${controlsDisabled ? "is-locked" : ""}"><div class="trade-actions"><button type="button" class="trade-button trade-over ${side === "OVER" ? "active" : ""}" data-side="OVER" ${controlsDisabled ? "disabled" : ""}><span class="trade-button-label">Over</span><span class="trade-button-price">${currentPair.overLine.toFixed(1)}</span></button><button type="button" class="trade-button trade-under ${side === "UNDER" ? "active" : ""}" data-side="UNDER" ${controlsDisabled ? "disabled" : ""}><span class="trade-button-label">Under</span><span class="trade-button-price">${currentPair.underLine.toFixed(1)}</span></button></div><div class="stake-section"><div class="stake-row compact-stake-row"><label><span class="trade-label">Stake</span><input id="stake-input" name="stake" type="number" min="1" max="${MAX_SINGLE_BID}" step="1" inputmode="numeric" enterkeyhint="done" value="${Math.min(stakeDraft, MAX_SINGLE_BID)}" required ${controlsDisabled ? "disabled" : ""}></label><div class="stake-preview"><span class="trade-label">Return</span><strong id="stake-return">${formatStake(Math.min(stakeDraft, MAX_SINGLE_BID) * 2)}</strong></div></div><div class="stake-module-head"><span class="trade-label">Quick add</span><div class="quick-stakes"><button type="button" class="quick-stake-button" data-stake-add="5" ${controlsDisabled ? "disabled" : ""}>+5</button><button type="button" class="quick-stake-button" data-stake-add="10" ${controlsDisabled ? "disabled" : ""}>+10</button><button type="button" class="quick-stake-button" data-stake-add="25" ${controlsDisabled ? "disabled" : ""}>+25</button><button type="button" class="quick-stake-button" data-stake-max="true" ${controlsDisabled ? "disabled" : ""}>MAX 10</button></div></div><p class="trade-label stake-cap-note">Single bids are capped at ${formatStake(MAX_SINGLE_BID)}.</p></div><div class="trade-note-row"><span class="trade-label">Execution</span><button type="button" class="trade-note-button" data-trade-note-toggle aria-label="Explain execution">ⓘ</button><span class="trade-note-popover" role="note">${executionCopy}</span></div><button class="primary-button trade-confirm-button ${isPending ? "is-loading" : ""}" type="submit" ${isPending || isLocked ? "disabled" : ""}>${isPending ? "Placing..." : isLocked ? "Locked" : isGuest ? "Sign up to trade" : "Confirm position"}</button><p id="trade-feedback" class="feedback" aria-live="polite">${isPending ? "Submitting trade..." : isLocked ? "This market locked at kickoff." : isGuest ? "Browse every player market now. Sign up to place a position." : ""}</p></form></div>`;
}

function bindTradeSheetEvents(panel, marketId) {
  const tradeForm = panel.querySelector("#trade-form");
  const stakeInput = panel.querySelector("#stake-input");
  const stakeReturn = panel.querySelector("#stake-return");
  const tradeNoteToggle = panel.querySelector("[data-trade-note-toggle]");
  const tradeNotePopover = panel.querySelector(".trade-note-popover");
  let replaceStakeOnNextDigit = !Object.prototype.hasOwnProperty.call(uiState.stakeDrafts, marketId)
    && Number(stakeInput?.value) === MAX_SINGLE_BID;
  if (tradeNoteToggle && tradeNotePopover) {
    tradeNoteToggle.addEventListener("click", () => {
      tradeNotePopover.classList.toggle("is-visible");
    });
  }

  const market = findMarket(marketId);
  tradeForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitTrade(marketId, Number(stakeInput?.value) || 0, panel);
  });

  if (isMarketLocked(market)) {
    return;
  }

  if (!isAuthenticated()) {
    return;
  }

  panel.querySelectorAll(".trade-button").forEach((button) =>
    button.addEventListener("click", () => {
      uiState.marketTradeSides[marketId] = button.dataset.side;
      uiState.focusStakeMarketId = marketId;
      renderAll();
    })
  );

  panel.querySelectorAll(".quick-stake-button").forEach((button) =>
    button.addEventListener("click", () => {
      replaceStakeOnNextDigit = false;
      if (button.dataset.stakeMax) {
        stakeInput.value = String(normalizeStakeInputValue(Math.max(1, Math.floor(Math.min(getUserCash(currentUserName()), MAX_SINGLE_BID)))));
      } else {
        stakeInput.value = String(normalizeStakeInputValue((Number(stakeInput.value) || 0) + Number(button.dataset.stakeAdd || 0)));
      }
      uiState.stakeDrafts[marketId] = Number(stakeInput.value) || 0;
      stakeReturn.textContent = formatStake((Number(stakeInput.value) || 0) * 2);
    })
  );

  stakeInput.addEventListener("beforeinput", (event) => {
    if (!replaceStakeOnNextDigit) return;
    if (event.inputType === "insertText" || event.inputType === "insertReplacementText") {
      const nextDigits = String(event.data || "").replace(/\D/g, "");
      if (!nextDigits) return;
      event.preventDefault();
      const normalizedStake = normalizeStakeInputValue(nextDigits);
      stakeInput.value = String(normalizedStake);
      uiState.stakeDrafts[marketId] = normalizedStake;
      stakeReturn.textContent = formatStake(normalizedStake * 2);
      replaceStakeOnNextDigit = false;
      return;
    }
    if (event.inputType.startsWith("delete")) {
      replaceStakeOnNextDigit = false;
    }
  });

  stakeInput.addEventListener("input", () => {
    isStakeInputInteractionActive = true;
    replaceStakeOnNextDigit = false;
    const normalizedStake = normalizeStakeInputValue(stakeInput.value);
    if (String(normalizedStake) !== String(stakeInput.value)) {
      stakeInput.value = String(normalizedStake);
    }
    uiState.stakeDrafts[marketId] = normalizedStake;
    stakeReturn.textContent = formatStake(normalizedStake * 2);
  });

  stakeInput.addEventListener("focus", () => {
    isStakeInputInteractionActive = true;
    if (replaceStakeOnNextDigit) {
      window.requestAnimationFrame(() => {
        if (document.activeElement === stakeInput) {
          stakeInput.select();
        }
      });
    }
  });

  stakeInput.addEventListener("blur", () => {
    isStakeInputInteractionActive = false;
    uiState.stakeDrafts[marketId] = normalizeStakeInputValue(stakeInput.value);
    if (pendingRenderAfterStakeInput) {
      pendingRenderAfterStakeInput = false;
      applyLiveStateRender();
      return;
    }
    stakeReturn.textContent = formatStake((Number(stakeInput.value) || 0) * 2);
  });

  if (isMarketLocked(market)) {
    tradeForm.querySelector("button[type='submit']").disabled = true;
  }
}

function trackScrollInteraction() {
  isScrollInteractionActive = true;
  window.clearTimeout(scrollInteractionTimer);
  scrollInteractionTimer = window.setTimeout(() => {
    isScrollInteractionActive = false;
    if (pendingRenderAfterScroll) {
      pendingRenderAfterScroll = false;
      applyLiveStateRender();
    }
  }, 180);
}

function applyLiveStateRender() {
  const pageScrollPosition = capturePageScrollPosition();
  const scrollPositions = captureScreenScrollPositions();
  const namedScrollPositions = captureNamedScrollPositions();
  const persistentScrollPositions = capturePersistentScrollPositions();
  syncSelectedMarket();
  renderAll();
  restorePageScrollPosition(pageScrollPosition);
  restoreScreenScrollPositions(scrollPositions);
  restoreNamedScrollPositions(namedScrollPositions);
  restorePersistentScrollPositions(persistentScrollPositions);
}

async function submitTrade(marketId, stake, panel) {
  const feedback = panel.querySelector("#trade-feedback");
  if (!isAuthenticated()) {
    if (feedback) feedback.textContent = "Sign in to place a position.";
    openAuthPrompt("signup");
    return;
  }
  const tradeSide = getMarketTradeSide(marketId);
  const market = findMarket(marketId);
  if (isMarketLocked(market)) {
    feedback.textContent = "This market locked at kickoff.";
    return;
  }
  if (!Number.isFinite(stake) || stake <= 0) {
    feedback.textContent = "Enter a valid stake.";
    return;
  }
  if (stake > MAX_SINGLE_BID) {
    feedback.textContent = `Single bids are capped at ${formatStake(MAX_SINGLE_BID)}.`;
    return;
  }
  uiState.pendingTradeMarketId = marketId;
  isStakeInputInteractionActive = false;
  renderAll();
  try {
    const response = await executeTrade(marketId, stake, tradeSide);
    if (response.state) {
      applySharedSnapshot({ ...response, backend: response.backend || backendState, prizePool: response.prizePool || prizePoolState });
    } else {
      applyIncrementalTradeResponse(response, marketId);
    }
    const submittedTrade = response.trade;
    delete uiState.stakeDrafts[marketId];
    uiState.pendingTradeMarketId = "";
    uiState.focusStakeMarketId = "";
    renderAll();
    triggerBalanceFlash();
    const toastMessage = submittedTrade?.status === "MATCHED"
      ? `Matched ${formatStake(submittedTrade.matchedStake || stake)} on ${tradeSide}`
      : submittedTrade?.status === "PARTIALLY_MATCHED"
        ? `Matched ${formatStake(submittedTrade.matchedStake || 0)} and left ${formatStake(submittedTrade.unmatchedStake || 0)} available`
        : `Posted ${formatStake(submittedTrade?.unmatchedStake || stake)} on ${tradeSide}`;
    showToast("Position submitted", toastMessage);
    if (backendState.mode !== "local") {
      refreshSharedState();
    }
  } catch (error) {
    uiState.pendingTradeMarketId = "";
    uiState.focusStakeMarketId = marketId;
    renderAll();
    const refreshedFeedback = document.querySelector("#trade-feedback");
    if (refreshedFeedback) {
      refreshedFeedback.textContent = error.message;
    }
    return;
  }
}

function executeTrade(marketId, stake, side) {
  return api("/api/trades", {
    userName: currentUserName(),
    marketId,
    side,
    stake
  });
}

async function submitWalletDeposit() {
  const amount = Number(uiState.walletAmountDraft || elements.walletAmountInput?.value || 0);
  if (!Number.isFinite(amount) || amount <= 0) {
    if (elements.walletFeedback) {
      elements.walletFeedback.textContent = "Enter a valid deposit amount.";
    }
    return;
  }
  if (elements.walletFeedback) {
    elements.walletFeedback.textContent = "Depositing...";
  }
  try {
    const response = await api("/api/wallet/deposit", {
      userName: currentUserName(),
      amount
    });
    applySharedSnapshot({ ...response, backend: backendState, prizePool: response.prizePool || prizePoolState });
    if (elements.walletFeedback) {
      elements.walletFeedback.textContent = response.message || "Deposit completed.";
    }
    triggerBalanceFlash();
    renderAll();
  } catch (error) {
    if (elements.walletFeedback) {
      elements.walletFeedback.textContent = error.message;
    }
  }
}

async function submitWalletWithdrawal() {
  const amount = Number(uiState.walletAmountDraft || elements.walletAmountInput?.value || 0);
  if (!Number.isFinite(amount) || amount <= 0) {
    if (elements.walletFeedback) {
      elements.walletFeedback.textContent = "Enter a valid withdrawal amount.";
    }
    return;
  }
  if (elements.walletFeedback) {
    elements.walletFeedback.textContent = "Submitting withdrawal request...";
  }
  try {
    const response = await api("/api/wallet/withdraw", {
      userName: currentUserName(),
      amount
    });
    applySharedSnapshot({ ...response, backend: backendState, prizePool: response.prizePool || prizePoolState });
    if (elements.walletFeedback) {
      elements.walletFeedback.textContent = response.message || "Withdrawal request recorded.";
    }
    renderAll();
  } catch (error) {
    if (elements.walletFeedback) {
      elements.walletFeedback.textContent = error.message;
    }
  }
}

function applyIncrementalTradeResponse(response, marketId) {
  if (response.prizePool) {
    prizePoolState = response.prizePool;
  }
  if (response.backend) {
    backendState = response.backend;
  }
  if (Number.isFinite(Number(response.balance))) {
    state.bankrolls[currentUserName()] = Number(response.balance);
  }
  const market = findMarket(marketId);
  if (!market) return;
  if (response.market) {
    Object.assign(market, response.market);
  }
  if (response.trade && !market.trades.some((trade) => trade.id === response.trade.id)) {
    market.trades.push(response.trade);
  }
}

function executeQuickTakeTrade(marketId, side) {
  return api("/api/trades", {
    userName: currentUserName(),
    marketId,
    side,
    stake: 1,
    quickPick: true
  });
}

function renderPortfolio() {
  const portfolio = getPortfolioData();
  const openTrades = portfolio.openPositions;
  const settledTrades = portfolio.settledPositions;
  const realized = portfolio.realized;
  const cash = portfolio.balance;
  const winRate = portfolio.winRate;
  const matchedBalance = openTrades.reduce((sum, trade) => sum + (Number(trade.matchedStake) || 0), 0);
  const unmatchedBalance = openTrades.reduce((sum, trade) => sum + (Number(trade.unmatchedStake) || 0), 0);
  const leaderboardRows = getLeaderboardRows();
  const rank = leaderboardRows.findIndex((row) => row.userName.toLowerCase() === currentUserName().toLowerCase()) + 1;
  const positions = sortPortfolioPositions(filterPortfolioPositions(buildPortfolioItems(openTrades, settledTrades)));
  if (elements.portfolioBalancePill) {
    elements.portfolioBalancePill.innerHTML = `<span>Wallet</span><strong>${formatStake(cash)}</strong>`;
  }
  elements.portfolioSummary.innerHTML = portfolioPerformanceCardMarkup({
    realized,
    winRate,
    rank,
    cash,
    openPositions: openTrades.length,
    matchedBalance,
    unmatchedBalance
  });
  renderPortfolioChallengeEntry();
  renderPortfolioPrizePoolCard();
  renderPortfolioFilters();
  renderPortfolioPositionCards(elements.portfolioList, positions, "No positions match that filter yet.");
}

function renderPortfolioPrizePoolCard() {
  if (!elements.portfolioPrizePoolCard) return;
  const view = prizePoolState;
  if (!view) {
    elements.portfolioPrizePoolCard.innerHTML = "";
    return;
  }
  if (view.hasEntry && view.entry) {
    const hasLivePrizePoolResults = view.isFinal || (Number(view.entry.startingSettledCount) || 0) > 0;
    const correctPct = Math.round((Number(view.entry.correctPct) || 0) * 100);
    const progress = hasLivePrizePoolResults ? Math.max(0, Math.min(100, correctPct)) : 0;
    elements.portfolioPrizePoolCard.innerHTML = `
      <button class="profile-prize-pool-card is-entered" type="button" data-open-prize-pool="lineup">
        <div class="profile-prize-pool-topline">
          <span class="profile-prize-pool-kicker">PRIZE POOL · ROUND ${view.roundNumber}</span>
          <span class="profile-prize-pool-status">Entered</span>
        </div>
        <div class="profile-prize-pool-stats">
          <span><em>Stake</em><strong>${formatStake(view.entryFee || 10)}</strong></span>
          <span><em>Correct %</em><strong>${prizePoolPercentLabel(view.entry.correctPct, { settledCount: view.entry.startingSettledCount, isFinal: view.isFinal })}</strong></span>
          <span><em>Rank</em><strong class="is-rank">${view.entry.rank ? `#${view.entry.rank}` : "—"}</strong></span>
        </div>
        <div class="portfolio-performance-progress profile-prize-pool-progress"><span style="width:${progress}%"></span></div>
      </button>
    `;
    elements.portfolioPrizePoolCard.querySelector("[data-open-prize-pool]")?.addEventListener("click", () => {
      uiState.activeScreen = "prizepool";
      renderAll();
    });
    return;
  }
  elements.portfolioPrizePoolCard.innerHTML = `
    <article class="profile-prize-pool-card is-empty">
      <p class="profile-prize-pool-empty-copy">You haven't entered this week's Prize Pool</p>
      <button class="profile-prize-pool-enter-button" type="button" data-enter-prize-pool>Enter for ${formatStake(view.entryFee || 10)}</button>
    </article>
  `;
  elements.portfolioPrizePoolCard.querySelector("[data-enter-prize-pool]")?.addEventListener("click", async () => {
    uiState.activeScreen = "prizepool";
    renderAll();
    await startPrizePoolDraft();
  });
}

let activePortfolioSwipeCard = null;
let portfolioSwipeDismissBound = false;
let portfolioExpandDismissBound = false;
let portfolioHighlightClearTimer = null;
const portfolioRenderedPositionKeys = new Set();
const PORTFOLIO_SWIPE_ACTION_WIDTH = 80;
const PORTFOLIO_SWIPE_OPEN_THRESHOLD = 40;

function renderPortfolioPositionCards(container, trades, emptyMessage) {
  container.innerHTML = "";
  activePortfolioSwipeCard = null;
  bindPortfolioPositionSwipeDismiss();
  bindPortfolioPositionExpandDismiss();
  if (!trades.length) {
    uiState.expandedPortfolioPositionKey = "";
    container.innerHTML = `<div class="portfolio-empty-state"><strong>No positions yet</strong><span>${emptyMessage}</span></div>`;
    return;
  }
  const visiblePositionKeys = new Set();
  trades.forEach((trade) => {
    const market = findMarket(trade.marketId);
    const status = portfolioPositionStatus(trade);
    const entryProjection = trade.side === "OVER" ? trade.entryOverLine ?? trade.entryLine : trade.entryUnderLine ?? trade.entryLine;
    const playerName = trade.playerName ?? market?.playerName ?? "Unknown player";
    const teamName = trade.team ?? market?.team ?? "";
    const teamLabel = homeTeamAbbreviation(teamName);
    const teamStyle = homeTeamPillStyle(teamName);
    const matchup = matchupContext(market || {});
    const kickoffLabel = formatPortfolioCardKickoff(market);
    const projectionDirectionLabel = trade.side === "OVER" ? "Over" : "Under";
    const projectionValueLabel = Number(entryProjection).toFixed(1);
    const isMatched = status.label === "Matched";
    const isSettled = trade.portfolioState === "SETTLED";
    const isMarketShareable = !isMarketLocked(market) && marketRoundNumber(market) === activeRoundNumber();
    const statusLabel = isMatched ? "MATCHED" : "UNMATCHED";
    const cancelableOrderIds = Array.isArray(trade.cancelableOrderIds) ? trade.cancelableOrderIds : [];
    const canSwipeToCancel = !isMatched && cancelableOrderIds.length > 0;
    const canExpandInlineActions = !isSettled && !isMatched && cancelableOrderIds.length > 0;
    const challengeTradeIds = isMarketShareable ? cancelableOrderIds.slice() : [];
    const challengeTradeId = isMarketShareable ? (challengeTradeIds[0] || "") : "";
    const positionKey = `${trade.portfolioState || "OPEN"}:${trade.marketId}:${trade.side}`;
    const isExpanded = canExpandInlineActions && uiState.expandedPortfolioPositionKey === positionKey;
    const isFirstRender = !portfolioRenderedPositionKeys.has(positionKey);
    const isChallengeHighlight = uiState.portfolioHighlightPositionKey === positionKey && uiState.portfolioHighlightUntil > Date.now();
    portfolioRenderedPositionKeys.add(positionKey);
    visiblePositionKeys.add(positionKey);
    const card = document.createElement("article");
    card.className = `portfolio-position-card ${isMatched ? "is-matched" : "is-unmatched"}${canSwipeToCancel ? " is-swipeable" : ""}${isExpanded ? " is-expanded" : ""}${isFirstRender ? " is-first-render" : ""}${isFirstRender && isMatched ? " is-first-render-matched" : ""}${isChallengeHighlight ? " is-challenge-highlight" : ""}`;
    card.dataset.positionKey = positionKey;
    card.innerHTML = `
      <div class="portfolio-position-card-main">
        ${canSwipeToCancel ? `<button class="portfolio-position-action-button" type="button" aria-label="Cancel unmatched position"><span aria-hidden="true">✕</span></button>` : ""}
        <div class="portfolio-position-swipe-shell">
          <div class="portfolio-position-shell ${canExpandInlineActions ? "is-expandable" : ""}" ${canExpandInlineActions ? `role="button" tabindex="0" aria-expanded="${isExpanded ? "true" : "false"}"` : ""}>
            <div class="portfolio-position-status-rail ${isMatched ? "is-matched" : "is-unmatched"}">
              <span class="portfolio-position-status-text">${statusLabel}</span>
            </div>
            <div class="portfolio-position-body">
              <div class="portfolio-position-row portfolio-position-row-primary">
                <h4 class="portfolio-position-title">${escapeHtml(playerName)}</h4>
                <div class="portfolio-position-stake-block">
                  <span class="portfolio-position-stake-label">Stake</span>
                  <strong class="portfolio-position-stake">${formatStake(trade.stake)}</strong>
                </div>
              </div>
              <div class="portfolio-position-row portfolio-position-row-secondary">
                <div class="portfolio-position-meta-stack">
                  <div class="portfolio-position-matchup">
                    <span class="portfolio-position-team-badge" style="${teamStyle}">${escapeHtml(teamLabel)}</span>
                    <span class="portfolio-position-matchup-text">vs ${escapeHtml(matchup.opponent || "Opponent")}</span>
                  </div>
                  <span class="portfolio-position-kickoff">${escapeHtml(kickoffLabel)}</span>
                </div>
                <strong class="portfolio-position-projection"><span class="portfolio-position-projection-direction">${projectionDirectionLabel}</span> <span class="portfolio-position-projection-value">${projectionValueLabel}</span></strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${canExpandInlineActions ? `
        <div class="portfolio-inline-actions" aria-hidden="${isExpanded ? "false" : "true"}">
          <div class="portfolio-inline-actions-inner">
            <button class="portfolio-inline-action-button is-cancel" type="button" data-inline-cancel>Cancel Trade</button>
            <button class="portfolio-inline-action-button is-challenge" type="button" data-inline-challenge ${!challengeTradeId ? "disabled" : ""}>Challenge Friend</button>
          </div>
        </div>
      ` : ""}
    `;
    if (canSwipeToCancel) {
      const actionButton = card.querySelector(".portfolio-position-action-button");
      actionButton?.addEventListener("click", async (event) => {
        event.stopPropagation();
        await cancelPendingOrders(cancelableOrderIds);
      });
      bindPortfolioPositionCardSwipe(card);
    }
    if (canExpandInlineActions) {
      const cardMain = card.querySelector(".portfolio-position-card-main");
      const shell = card.querySelector(".portfolio-position-shell.is-expandable");
      const openInlineActions = () => {
        togglePortfolioPositionExpansion(positionKey);
      };
      cardMain?.addEventListener("click", (event) => {
        if (event.target.closest(".portfolio-position-action-button")) return;
        if (event.target.closest(".portfolio-inline-action-button")) return;
        openInlineActions();
      });
      shell?.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openInlineActions();
      });
      card.querySelector("[data-inline-cancel]")?.addEventListener("click", async (event) => {
        event.stopPropagation();
        await cancelPendingOrders(cancelableOrderIds);
      });
      card.querySelector("[data-inline-challenge]")?.addEventListener("click", async (event) => {
        event.stopPropagation();
        await openPortfolioChallengeModal(challengeTradeIds, positionKey);
      });
    }
    container.appendChild(card);
  });
  if (uiState.portfolioHighlightPositionKey && uiState.portfolioHighlightUntil > Date.now()) {
    window.requestAnimationFrame(() => {
      const highlightedCard = container.querySelector(`.portfolio-position-card[data-position-key="${uiState.portfolioHighlightPositionKey}"]`);
      highlightedCard?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
  if (uiState.expandedPortfolioPositionKey && !visiblePositionKeys.has(uiState.expandedPortfolioPositionKey)) {
    uiState.expandedPortfolioPositionKey = "";
  }
}

function bindPortfolioPositionSwipeDismiss() {
  if (portfolioSwipeDismissBound) return;
  document.addEventListener("pointerdown", (event) => {
    if (!activePortfolioSwipeCard) return;
    if (activePortfolioSwipeCard.contains(event.target)) return;
    closePortfolioPositionSwipe(activePortfolioSwipeCard);
  });
  portfolioSwipeDismissBound = true;
}

function bindPortfolioPositionExpandDismiss() {
  if (portfolioExpandDismissBound) return;
  document.addEventListener("pointerdown", (event) => {
    if (!uiState.expandedPortfolioPositionKey) return;
    const expandedCard = elements.portfolioList?.querySelector(`.portfolio-position-card[data-position-key="${uiState.expandedPortfolioPositionKey}"]`);
    if (!expandedCard) {
      uiState.expandedPortfolioPositionKey = "";
      return;
    }
    if (expandedCard.contains(event.target)) return;
    collapseExpandedPortfolioPosition();
  });
  portfolioExpandDismissBound = true;
}

function togglePortfolioPositionExpansion(positionKey) {
  uiState.expandedPortfolioPositionKey = uiState.expandedPortfolioPositionKey === positionKey ? "" : positionKey;
  renderPortfolio();
}

function collapseExpandedPortfolioPosition() {
  if (!uiState.expandedPortfolioPositionKey) return;
  uiState.expandedPortfolioPositionKey = "";
  renderPortfolio();
}

function setPortfolioPositionSwipeState(card, isOpen) {
  if (!card?.classList.contains("is-swipeable")) return;
  const shell = card.querySelector(".portfolio-position-swipe-shell");
  if (!shell) return;
  if (isOpen && activePortfolioSwipeCard && activePortfolioSwipeCard !== card) {
    closePortfolioPositionSwipe(activePortfolioSwipeCard);
  }
  card.classList.toggle("is-swipe-open", isOpen);
  shell.style.transform = isOpen ? `translateX(-${PORTFOLIO_SWIPE_ACTION_WIDTH}px)` : "translateX(0px)";
  activePortfolioSwipeCard = isOpen ? card : activePortfolioSwipeCard === card ? null : activePortfolioSwipeCard;
}

function closePortfolioPositionSwipe(card) {
  setPortfolioPositionSwipeState(card, false);
}

function bindPortfolioPositionCardSwipe(card) {
  const shell = card.querySelector(".portfolio-position-swipe-shell");
  if (!shell) return;
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let startOffset = 0;
  let currentOffset = 0;
  let isDragging = false;

  const applyOffset = (offset) => {
    currentOffset = Math.max(-PORTFOLIO_SWIPE_ACTION_WIDTH, Math.min(0, offset));
    shell.style.transform = `translateX(${currentOffset}px)`;
  };

  const finishGesture = () => {
    if (pointerId !== null && shell.hasPointerCapture?.(pointerId)) {
      shell.releasePointerCapture(pointerId);
    }
    const shouldOpen = currentOffset <= -PORTFOLIO_SWIPE_OPEN_THRESHOLD;
    card.classList.remove("is-swipe-dragging");
    setPortfolioPositionSwipeState(card, shouldOpen);
    pointerId = null;
    isDragging = false;
    startOffset = 0;
    currentOffset = shouldOpen ? -PORTFOLIO_SWIPE_ACTION_WIDTH : 0;
  };

  shell.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (activePortfolioSwipeCard && activePortfolioSwipeCard !== card) {
      closePortfolioPositionSwipe(activePortfolioSwipeCard);
    }
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    startOffset = card.classList.contains("is-swipe-open") ? -PORTFOLIO_SWIPE_ACTION_WIDTH : 0;
    currentOffset = startOffset;
    isDragging = false;
    shell.setPointerCapture?.(pointerId);
  });

  shell.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    if (!isDragging) {
      if (Math.abs(deltaX) < 8) return;
      if (Math.abs(deltaX) <= Math.abs(deltaY)) {
        if (shell.hasPointerCapture?.(pointerId)) {
          shell.releasePointerCapture(pointerId);
        }
        pointerId = null;
        return;
      }
      isDragging = true;
      card.classList.add("is-swipe-dragging");
    }
    event.preventDefault();
    applyOffset(startOffset + deltaX);
  });

  shell.addEventListener("pointerup", (event) => {
    if (event.pointerId !== pointerId) return;
    finishGesture();
  });

  shell.addEventListener("pointercancel", (event) => {
    if (event.pointerId !== pointerId) return;
    finishGesture();
  });
}

function formatPortfolioCardKickoff(market) {
  const game = roundGames.find((roundGame) => roundGame.id === market?.gameId);
  const kickoffAt = kickoffTimestampForGame(game);
  if (!Number.isFinite(kickoffAt)) return game?.kickoff || "";
  const date = new Date(kickoffAt);
  const weekday = date.toLocaleString([], { weekday: "short" });
  const day = date.toLocaleString([], { day: "numeric" });
  const month = date.toLocaleString([], { month: "short" });
  const time = date.toLocaleString([], { hour: "numeric", minute: "2-digit" });
  return `${weekday} ${day} ${month} · ${time}`;
}

function renderPortfolioFilters() {
  const filters = [
    ["ALL", "All"],
    ["OPEN", "Open"],
    ["SETTLED", "Settled"],
    ["MATCHED", "Matched"],
    ["UNMATCHED", "Unmatched"],
    ["OVER", "Over"],
    ["UNDER", "Under"]
  ];
  elements.portfolioFilters.innerHTML = filters
    .map(
      ([value, label]) =>
        `<button class="portfolio-chip ${uiState.portfolioFilter === value ? "active" : ""}" type="button" data-filter="${value}">${label}</button>`
    )
    .join("");
  elements.portfolioFilters.querySelectorAll(".portfolio-chip").forEach((button) =>
    button.addEventListener("click", () => {
      uiState.portfolioFilter = button.dataset.filter;
      renderPortfolio();
    })
  );
  elements.portfolioSortButton.innerHTML = `<span>Sort</span><strong>${portfolioSortLabel(uiState.portfolioSort)}</strong>`;
}

function renderWallet() {
  if (!elements.walletSummary || !elements.walletTransactionList) return;
  const wallet = getWalletData();
  const selectedAmount = uiState.walletAmountDraft || "25";
  if (elements.walletAmountInput && elements.walletAmountInput.value !== selectedAmount) {
    elements.walletAmountInput.value = selectedAmount;
  }
  elements.walletSummary.innerHTML = [
    summaryStat("Available", formatStake(wallet.availableBalance)),
    summaryStat("In Play", formatStake(wallet.inPlay)),
    summaryStat("Deposits", formatStake(wallet.totalDeposits)),
    summaryStat("Winnings", formatStake(wallet.totalWinnings), wallet.totalWinnings > 0 ? 1 : 0)
  ].join("");
  renderWalletFilters();
  renderWalletTransactions(wallet.transactions);
}

function renderWalletFilters() {
  if (!elements.walletFilters) return;
  const filters = [
    ["ALL", "All"],
    ["FUNDS", "Funds"],
    ["ENTRIES", "Entries"],
    ["WINNINGS", "Winnings"],
    ["PRIZEPOOL", "Prize Pool"],
    ["WITHDRAWALS", "Withdrawals"]
  ];
  elements.walletFilters.innerHTML = filters
    .map(([value, label]) => `<button class="portfolio-chip ${uiState.walletFilter === value ? "active" : ""}" type="button" data-wallet-filter="${value}">${label}</button>`)
    .join("");
  elements.walletFilters.querySelectorAll("[data-wallet-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      uiState.walletFilter = button.dataset.walletFilter;
      renderWallet();
    })
  );
}

function renderWalletTransactions(transactions) {
  if (!elements.walletTransactionList) return;
  if (!transactions.length) {
    elements.walletTransactionList.innerHTML = `<div class="portfolio-empty-state"><strong>No wallet transactions yet</strong><span>Your deposits, entries, winnings, refunds, and withdrawal requests will appear here.</span></div>`;
    return;
  }
  elements.walletTransactionList.innerHTML = transactions
    .map((transaction) => {
      const view = walletTransactionView(transaction);
      return `
        <article class="wallet-transaction-card">
          <div class="wallet-transaction-main">
            <div class="wallet-transaction-copy">
              <div class="wallet-transaction-topline">
                <span class="wallet-transaction-title">${view.title}</span>
                <span class="wallet-transaction-pill ${view.pillClassName}">${view.pillLabel}</span>
              </div>
              <p class="wallet-transaction-subtitle">${view.subtitle}</p>
              <div class="wallet-transaction-meta">
                <span>${formatTimestamp(transaction.createdAt)}</span>
                <span>Balance ${formatStake(transaction.balanceAfter)}</span>
              </div>
            </div>
            <div class="wallet-transaction-amount ${view.amountClassName}">${view.amountLabel}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function getWalletData() {
  const userName = currentUserName();
  const transactions = filterWalletTransactions(getUserWalletTransactions(userName));
  const allTransactions = getUserWalletTransactions(userName);
  const openPositions = getPortfolioData().openPositions || [];
  const inPlay = openPositions.reduce((sum, trade) => sum + (Number(trade.matchedStake) || 0), 0);
  const totalDeposits = allTransactions
    .filter((transaction) => ["OPENING_BALANCE", "DEPOSIT"].includes(transaction.type))
    .reduce((sum, transaction) => sum + Math.max(0, Number(transaction.amount) || 0), 0);
  const totalWinnings = allTransactions
    .filter((transaction) => ["TRADE_SETTLEMENT_WIN", "TRADE_REFUND", "PRIZE_POOL_PAYOUT"].includes(transaction.type))
    .reduce((sum, transaction) => sum + Math.max(0, Number(transaction.amount) || 0), 0);
  return {
    availableBalance: getDisplayedCash(userName),
    inPlay,
    totalDeposits,
    totalWinnings,
    transactions
  };
}

function getUserWalletTransactions(userName) {
  if (!userName) return [];
  return (state.walletTransactions || [])
    .filter((transaction) => transaction.userName?.toLowerCase?.() === userName.toLowerCase())
    .slice()
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
}

function filterWalletTransactions(transactions) {
  return transactions.filter((transaction) => {
    if (uiState.walletFilter === "ALL") return true;
    if (uiState.walletFilter === "FUNDS") return ["OPENING_BALANCE", "DEPOSIT"].includes(transaction.type);
    if (uiState.walletFilter === "ENTRIES") return ["TRADE_MATCH", "TRADE_REFUND"].includes(transaction.type);
    if (uiState.walletFilter === "WINNINGS") return ["TRADE_SETTLEMENT_WIN", "PRIZE_POOL_PAYOUT"].includes(transaction.type);
    if (uiState.walletFilter === "PRIZEPOOL") return ["PRIZE_POOL_ENTRY", "PRIZE_POOL_PAYOUT"].includes(transaction.type);
    if (uiState.walletFilter === "WITHDRAWALS") return transaction.type === "WITHDRAWAL_REQUEST";
    return true;
  });
}

function walletTransactionView(transaction) {
  const requestedAmount = Number(transaction.requestedAmount) || 0;
  const amount = Number(transaction.amount) || 0;
  const baseView = {
    title: transaction.title || "Wallet update",
    subtitle: transaction.subtitle || "Account activity",
    pillLabel: transaction.status === "REJECTED" ? "Demo only" : "Completed",
    pillClassName: transaction.status === "REJECTED" ? "is-muted" : "is-completed",
    amountClassName: amount > 0 ? "positive" : amount < 0 ? "negative" : "neutral",
    amountLabel: amount === 0 && requestedAmount > 0 ? `${formatStake(requestedAmount)} requested` : formatSignedStake(amount)
  };
  if (transaction.type === "WITHDRAWAL_REQUEST") {
    return {
      ...baseView,
      pillLabel: transaction.status === "REJECTED" ? "Rejected" : baseView.pillLabel,
      pillClassName: transaction.status === "REJECTED" ? "is-rejected" : baseView.pillClassName,
      amountClassName: "neutral"
    };
  }
  if (transaction.type === "TRADE_MATCH" || transaction.type === "PRIZE_POOL_ENTRY") {
    return { ...baseView, pillLabel: "Entry", pillClassName: "is-entry" };
  }
  if (transaction.type === "TRADE_SETTLEMENT_WIN" || transaction.type === "PRIZE_POOL_PAYOUT") {
    return { ...baseView, pillLabel: "Win", pillClassName: "is-win" };
  }
  if (transaction.type === "TRADE_REFUND") {
    return { ...baseView, pillLabel: "Refund", pillClassName: "is-refund" };
  }
  if (transaction.type === "DEPOSIT" || transaction.type === "OPENING_BALANCE") {
    return { ...baseView, pillLabel: "Funds", pillClassName: "is-funds" };
  }
  return baseView;
}

function buildPortfolioItems(openTrades, settledTrades) {
  return [
    ...openTrades.map((trade) => ({ ...trade, portfolioState: "OPEN" })),
    ...settledTrades.map((trade) => ({ ...trade, portfolioState: "SETTLED" }))
  ];
}

function filterPortfolioPositions(trades) {
  return trades.filter((trade) => {
    if (uiState.portfolioFilter === "ALL") return true;
    if (uiState.portfolioFilter === "OPEN") return trade.portfolioState === "OPEN";
    if (uiState.portfolioFilter === "SETTLED") return trade.portfolioState === "SETTLED";
    if (uiState.portfolioFilter === "MATCHED") {
      return trade.portfolioState === "OPEN" && (Number(trade.matchedStake) || 0) > 0;
    }
    if (uiState.portfolioFilter === "UNMATCHED") {
      return trade.portfolioState === "OPEN" && (Number(trade.unmatchedStake) || 0) > 0;
    }
    return trade.side === uiState.portfolioFilter;
  });
}

function sortPortfolioPositions(trades) {
  return trades.slice().sort((a, b) => {
    if (uiState.portfolioSort === "HIGHEST_STAKE") {
      return b.stake - a.stake;
    }
    if (uiState.portfolioSort === "HIGHEST_PL") {
      return portfolioProfitFor(b) - portfolioProfitFor(a);
    }
    return new Date(b.timestamp || 0) - new Date(a.timestamp || 0);
  });
}

function portfolioProfitFor(trade) {
  const market = findMarket(trade.marketId);
  if (trade.result) return trade.result.profit;
  if (!market) return 0;
  return (market.currentLine - trade.entryLine) * (trade.side === "OVER" ? 1 : -1);
}

function portfolioSortLabel(sortKey) {
  if (sortKey === "HIGHEST_STAKE") return "Highest stake";
  if (sortKey === "HIGHEST_PL") return "Highest P/L";
  return "Most recent";
}

function portfolioMetricCard(label, value, tone = 0) {
  return `<article class="portfolio-metric-card"><span>${label}</span><strong class="${tone > 0 ? "positive" : tone < 0 ? "negative" : ""}">${value}</strong></article>`;
}

function portfolioPerformanceCardMarkup({ realized, winRate, rank, cash, openPositions, matchedBalance, unmatchedBalance }) {
  const progress = Math.max(0, Math.min(100, Number(winRate) || 0));
  return `<article class="portfolio-performance-card">
    <div class="portfolio-performance-primary">
      <span><em>P&L</em><strong class="${realized > 0 ? "positive" : realized < 0 ? "negative" : ""}">${formatSignedStake(realized)}</strong></span>
      <span><em>Win Rate</em><strong>${winRate}%</strong></span>
      <span><em>Rank</em><strong class="rank-value">${rank ? `#${rank}` : "—"}</strong></span>
    </div>
    <div class="portfolio-performance-secondary">
      <span><em>Balance</em><strong>${formatStake(cash)}</strong></span>
      <span><em>Open Positions</em><strong>${openPositions}</strong></span>
      <span><em>Matched Stake</em><strong>${formatStake(matchedBalance)}</strong></span>
      <span><em>Unmatched Stake</em><strong>${formatStake(unmatchedBalance)}</strong></span>
    </div>
    <div class="portfolio-performance-progress"><span style="width:${progress}%"></span></div>
  </article>`;
}

function renderQuickTake() {
  if (!elements.quickPickDeck) return;
  syncQuickTakeQueue();
  const queue = getQuickTakeQueueMarkets();
  if (!queue.length) {
    elements.quickPickDeck.innerHTML = `<div class="portfolio-empty-state"><strong>No open markets right now</strong><span>Quick Pick only shows player markets that are currently open.</span></div>`;
    return;
  }
  const activeIndex = Math.min(uiState.quickPickActiveIndex, queue.length - 1);
  const current = queue[activeIndex];
  const next = queue[activeIndex + 1];
  const currentPair = linePairForMarket(current);
  const movement = getMovementText(current);
  const metrics = getMarketTradeMetrics(current);
  const matchup = matchupContext(current);
  const performance = quickPickPerformanceSummary(current);
  const isPending = uiState.quickPickPendingCardId === current.id;
  const isLocked = isMarketLocked(current);
  const isGuest = !isAuthenticated();
  const teamColors = TEAM_COLORS[current.team] ?? TEAM_COLORS[normalizeTeamName(current.team)] ?? { primary: "#101722", secondary: "#68d9ff" };
  const nextColors = next ? TEAM_COLORS[next.team] ?? TEAM_COLORS[normalizeTeamName(next.team)] ?? { primary: "#101722", secondary: "#68d9ff" } : null;
  elements.quickPickDeck.innerHTML = `${next ? `<article class="quick-take-card is-back" style="--quick-primary-soft:${hexToRgba(nextColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(nextColors.secondary, 0.18)};"><div class="quick-take-backdrop"></div><div class="quick-take-mini"><span class="eyebrow">Up next</span><strong>${next.playerName}</strong><span>${next.team} | ${next.position}</span><span class="quick-take-mini-context">${matchupContext(next).label}</span></div></article>` : ""}<article class="quick-take-card is-front player-card-shell ${isPending || isLocked || isGuest ? "is-locked" : ""}" data-market-id="${current.id}" data-card-id="${current.id}" style="--quick-primary-soft:${hexToRgba(teamColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(teamColors.secondary, 0.18)};${playerCardTone(current)}"><div class="quick-take-backdrop"></div><div class="quick-take-topline"><span class="eyebrow">Quick Pick</span><span class="quick-take-counter">${queue.length - activeIndex} left</span></div><div class="quick-take-header"><div><h3>${current.playerName}</h3><p>${current.team} | ${current.position}</p><p class="quick-take-context">${matchup.label}</p></div><div class="quick-take-status-block"><span class="status-chip ${isLocked ? "status-locked" : "status-open"}">${isLocked ? "Locked" : "Open"}</span>${marketConfidenceMarkup(metrics.confidence)}</div></div><div class="quick-take-line">${current.currentLine.toFixed(1)}</div><div class="quick-take-move ${movement.className}">${movement.arrow} ${movement.label}</div><div class="quick-take-stats"><div class="quick-take-stats-head"><span class="trade-label">Last 5 Games</span><span class="quick-take-season-average">Season avg ${performance.seasonAverageLabel}</span></div><div class="quick-take-score-row">${performance.lastFive.map((entry) => `<span class="quick-take-score-pill ${entry.isMissing ? "is-missing" : ""}" title="${entry.label}">${entry.value}</span>`).join("")}</div><div class="quick-take-statline">${isLocked ? `<span>Trading closed at kickoff</span>` : isGuest ? `<span>Read-only until you sign up</span>` : ""}<span>${metrics.unmatchedOrderCount} unmatched orders</span></div></div><div class="quick-take-actions"><button class="quick-take-action quick-take-under" type="button" data-quick-side="UNDER" ${isPending || isLocked || isGuest ? "disabled" : ""}>${isPending && uiState.quickPickPendingSide === "UNDER" ? "Submitting..." : isLocked ? "Locked" : isGuest ? "Sign up to trade" : `Under ${currentPair.underLine.toFixed(1)}`}</button><button class="quick-take-action quick-take-over" type="button" data-quick-side="OVER" ${isPending || isLocked || isGuest ? "disabled" : ""}>${isPending && uiState.quickPickPendingSide === "OVER" ? "Submitting..." : isLocked ? "Locked" : isGuest ? "Sign up to trade" : `Over ${currentPair.overLine.toFixed(1)}`}</button><button class="quick-take-skip" type="button" data-quick-skip="true" ${isPending ? "disabled" : ""}>${isPending && uiState.quickPickPendingSide === "SKIP" ? "Skipping..." : "Skip"}</button></div></article>`;
  const activeCard = elements.quickPickDeck.querySelector(".quick-take-card.is-front");
  activeCard?.querySelectorAll("[data-quick-side]").forEach((button) =>
    button.addEventListener("click", async () => {
      await submitQuickTake(current.id, button.dataset.quickSide, activeCard);
    })
  );
  activeCard?.querySelector("[data-quick-skip]")?.addEventListener("click", () => {
    skipQuickTake(current.id, activeCard);
  });
}

function renderPortfolioChallengeEntry() {
  if (!elements.portfolioChallengeEntry) return;
  elements.portfolioChallengeEntry.innerHTML = "";
}

function renderChallengeRoute() {
  if (!elements.challengeRoute) return;
  const active = isChallengeRouteActive();
  elements.challengeRoute.classList.toggle("is-hidden", !active);
  elements.challengeRoute.classList.toggle("is-active", active);
  document.getElementById("app-content")?.classList.toggle("challenge-mode", active);
  if (!active) {
    elements.challengeRoute.innerHTML = "";
    return;
  }
  if (uiState.challengeRouteLoading) {
    elements.challengeRoute.innerHTML = `<div class="challenge-shell"><div class="challenge-loading">Loading challenge...</div></div>`;
    return;
  }
  if (uiState.challengeRouteError) {
    elements.challengeRoute.innerHTML = `<div class="challenge-shell"><div class="challenge-error-card"><h2>Challenge unavailable</h2><p>${escapeHtml(uiState.challengeRouteError)}</p><button class="secondary-button" type="button" data-challenge-home>Back to Home</button></div></div>`;
    elements.challengeRoute.querySelector("[data-challenge-home]")?.addEventListener("click", () => {
      window.location.href = "/";
    });
    return;
  }
  if (!uiState.challengeRouteSession) {
    elements.challengeRoute.innerHTML = `<div class="challenge-shell"><div class="challenge-loading">Loading challenge...</div></div>`;
    return;
  }
  elements.challengeRoute.innerHTML = isAuthenticated()
    ? challengeAcceptanceMarkup()
    : challengeLandingMarkup();
  bindChallengeRouteEvents();
}

function challengeLandingMarkup() {
  const session = uiState.challengeRouteSession || { trades: [], created_by_username: "A friend" };
  const firstTrade = session.trades?.[0];
  const moreCount = Math.max((session.trades?.length || 0) - 1, 0);
  if (uiState.challengeRouteAuthMode) {
    return challengeAuthEntryMarkup(uiState.challengeRouteAuthMode);
  }
  return `
    <div class="challenge-shell challenge-shell-landing">
      <div class="challenge-brand-row"><h1 class="brand-wordmark"><span class="brand-wordmark-crowd">crowd</span><span class="brand-wordmark-iq">IQ</span></h1><button class="challenge-link-button challenge-header-link" type="button" data-challenge-how>How it works?</button></div>
      <section class="challenge-stack">
        <header class="challenge-header-block">
          <h2>${escapeHtml(session.created_by_username)} challenged you to a trade</h2>
          <p>${escapeHtml(challengeSupportingCopy())}</p>
        </header>
        ${firstTrade ? challengePreviewCardMarkup(firstTrade, session.created_by_username) : challengeUnavailableStateMarkup(session.unavailable_reason)}
        ${moreCount ? `<p class="challenge-more-copy">...and ${moreCount} more trades to review</p>` : ""}
        <div class="challenge-action-stack">
          <button class="primary-button challenge-cta-button" type="button" data-challenge-begin-accept>Accept</button>
          <button class="challenge-signin-link" type="button" data-challenge-begin-signin>Already have an account? Sign In</button>
        </div>
      </section>
    </div>
  `;
}

function challengeAuthEntryMarkup(mode = "signup") {
  const isSignIn = mode === "signin";
  const heading = isSignIn ? "Sign in." : "Create your account.";
  const subheading = isSignIn
    ? "Enter your username to accept this challenge."
    : "Pick a username to get started. No email required.";
  const buttonLabel = isSignIn ? "Continue" : "Get Started";
  return `
    <div class="challenge-shell">
      <div class="challenge-brand-row"><h1 class="brand-wordmark"><span class="brand-wordmark-crowd">crowd</span><span class="brand-wordmark-iq">IQ</span></h1></div>
      <section class="challenge-stack">
        <article class="challenge-auth-card">
          <h2>${heading}</h2>
          <p class="challenge-modal-muted">${subheading}</p>
          <form class="challenge-auth-form" data-challenge-auth-form>
            <input
              class="challenge-auth-input"
              type="text"
              name="challengeUsername"
              maxlength="24"
              placeholder="Casey"
              value="${escapeHtml(uiState.challengeRouteAuthDraft)}"
              autocomplete="username"
            >
            ${uiState.challengeRouteAuthError ? `<p class="feedback challenge-inline-error">${escapeHtml(uiState.challengeRouteAuthError)}</p>` : ""}
            <button class="primary-button challenge-cta-button ${uiState.challengeRouteAuthPending ? "is-loading" : ""}" type="submit" ${uiState.challengeRouteAuthPending ? "disabled" : ""}>${uiState.challengeRouteAuthPending ? "Loading…" : buttonLabel}</button>
          </form>
        </article>
      </section>
    </div>
  `;
}

function challengeFriendsModalMarkup() {
  const copied = uiState.challengeCopyStateUntil > Date.now();
  return `
    <section class="challenge-modal-section challenge-modal-link-sheet">
      ${uiState.challengeCreateError ? `<p class="feedback challenge-inline-error">${escapeHtml(uiState.challengeCreateError)}</p>` : ""}
      <div class="challenge-link-field ${uiState.challengeCreatePending ? "is-loading" : ""}" data-challenge-link tabindex="0" aria-busy="${uiState.challengeCreatePending ? "true" : "false"}">${uiState.challengeCreatePending ? "Generating link..." : escapeHtml(uiState.challengeCreatedUrl)}</div>
      <button class="challenge-cta-button challenge-copy-link-button" type="button" data-challenge-copy ${uiState.challengeCreatePending || !uiState.challengeCreatedUrl ? "disabled" : ""}>${copied ? "Copied!" : "Copy Link"}</button>
      <p class="challenge-modal-muted">Share with a friend to take the opposite side of your bet. If you're right, they lose.</p>
    </section>
  `;
}

function challengeTradeRowMarkup(trade) {
  const tradeId = String(trade.id);
  const selected = uiState.challengeSelectedTradeIds.includes(tradeId);
  return `
    <button class="challenge-trade-row" type="button" data-challenge-trade-id="${tradeId}">
      <span class="challenge-trade-check ${selected ? "is-selected" : ""}"></span>
      <span class="challenge-trade-copy">
        <strong>${escapeHtml(trade.playerName || trade.market?.playerName || "Unknown player")}</strong>
        <span>${escapeHtml(formatChallengeTradeDirection(trade))}</span>
        <span>${escapeHtml(`${homeTeamAbbreviation(trade.market?.team || trade.team || "")} · vs ${trade.market?.opponent || ""}`)}</span>
        <span>${escapeHtml(formatPortfolioCardKickoff(trade.market || findMarket(trade.marketId)))}</span>
      </span>
    </button>
  `;
}

async function openPortfolioChallengeModal(tradeIds, positionKey = "") {
  const candidateTradeIds = Array.isArray(tradeIds) ? tradeIds.map((tradeId) => String(tradeId)).filter(Boolean) : [String(tradeIds || "")].filter(Boolean);
  if (!candidateTradeIds.length) return;
  resetChallengeModalState();
  uiState.challengeSelectedTradeIds = candidateTradeIds.slice();
  uiState.challengeCreatePending = true;
  uiState.challengeCreateError = "";
  uiState.activeAppModal = "challenge-friends";
  uiState.expandedPortfolioPositionKey = positionKey;
  renderAppChrome();
  let lastError = null;
  for (const tradeId of candidateTradeIds) {
    try {
      const response = await api("/api/share/create", {
        trade_id: tradeId
      });
      uiState.challengeModalStep = "link";
      uiState.challengeCreatePending = false;
      uiState.challengeCreatedUrl = response.share_url;
      uiState.challengeCreatedTradeCount = 1;
      uiState.challengeExcludedTradeCount = Math.max(0, candidateTradeIds.length - 1);
      uiState.challengeSelectedTradeIds = [tradeId];
      renderAppChrome();
      return;
    } catch (error) {
      lastError = error;
    }
  }
  uiState.challengeCreatePending = false;
  uiState.challengeCreateError = lastError?.message || "Unable to create challenge link right now";
  renderAppChrome();
}

function bindChallengeFriendsModalEvents(chromeHost) {
  if (uiState.activeAppModal !== "challenge-friends") return;
  const copyButton = chromeHost.querySelector("[data-challenge-copy]");
  let lastCopyAttemptAt = 0;
  const runCopy = async () => {
    const copied = await copyTextToClipboard(uiState.challengeCreatedUrl);
    if (copied) {
      uiState.challengeCopyStateUntil = Date.now() + 2000;
      renderAppChrome();
      showToast("Link copied!");
      window.setTimeout(() => {
        renderAppChrome();
      }, 2000);
      return;
    }
    showToast("Copy failed", "Press and hold the link field to copy it manually.");
  };
  copyButton?.addEventListener("touchend", async (event) => {
    event.preventDefault();
    lastCopyAttemptAt = Date.now();
    await runCopy();
  }, { passive: false });
  copyButton?.addEventListener("click", async (event) => {
    event.preventDefault();
    if (Date.now() - lastCopyAttemptAt < 500) {
      return;
    }
    lastCopyAttemptAt = Date.now();
    await runCopy();
  });
}

function challengePreviewCardMarkup(trade, creator) {
  return `
    <article class="challenge-preview-card challenge-preview-card-entry">
      ${challengeBetSlipCardMarkup(trade, creator)}
    </article>
  `;
}

function challengeBetSlipCardMarkup(trade, creator) {
  const market = trade.market || {};
  const resolvedMarket = findMarket(trade.marketId) || {
    playerName: market.player_name,
    team: market.team,
    opponent: market.opponent,
    gameId: market.game_id
  };
  const game = findGame(market.game_id || resolvedMarket.gameId);
  const performance = quickPickPerformanceSummary(resolvedMarket);
  const teamCode = homeTeamAbbreviation(market.team || trade.team || "");
  const opponentCode = homeTeamAbbreviation(market.opponent || "Opponent");
  const teamStyle = homeTeamPillStyle(market.team || trade.team || "");
  const opponentStyle = homeTeamPillStyle(market.opponent || "");
  const yourPick = oppositeChallengeDirection(trade);
  const challengerPick = formatChallengeTradeDirection(trade);
  const stake = Number(trade.unmatchedStake || trade.stake || 0);
  return `
    ${challengeKickoffBadgeMarkup(trade)}
    <div class="challenge-betslip-section challenge-betslip-section-top">
      <h3>${escapeHtml(market.player_name || "Unknown player")}</h3>
      <p class="challenge-betslip-subline"><span class="challenge-team-pill" style="${teamStyle}">${escapeHtml(teamCode)}</span><span>vs</span><span class="challenge-team-pill" style="${opponentStyle}">${escapeHtml(opponentCode)}</span></p>
      <p class="challenge-preview-meta challenge-betslip-datetime">${escapeHtml(formatChallengeLandingDateTime(market.kickoff_time))}</p>
      <p class="challenge-preview-meta challenge-betslip-venue">${escapeHtml(game?.venue || matchupContext(resolvedMarket).venue || "")}</p>
    </div>
    <div class="challenge-betslip-section challenge-betslip-section-performance">
      <div class="challenge-betslip-season-block">
        <p class="challenge-betslip-performance-label">Season Avg</p>
        <div class="challenge-betslip-season-pill">${escapeHtml(performance.seasonAverageLabel)}</div>
      </div>
      <div class="challenge-betslip-performance-divider" aria-hidden="true"></div>
      <div class="challenge-betslip-last-five-block">
        <p class="challenge-betslip-performance-label">Last 5 Games</p>
        <div class="challenge-betslip-last-five">
          ${performance.lastFive.map((entry) => `<span class="challenge-betslip-game-chip ${entry.isMissing ? "is-missing" : ""}" title="${escapeHtml(entry.label)}">${escapeHtml(entry.value)}</span>`).join("")}
        </div>
      </div>
    </div>
    <div class="challenge-betslip-section challenge-betslip-section-picks">
      <div class="challenge-betslip-pick-row challenge-betslip-pick-row-primary"><span>Your Pick</span><strong>${escapeHtml(yourPick)}</strong></div>
      <div class="challenge-betslip-pick-row challenge-betslip-pick-row-secondary"><span>${escapeHtml(`${creator}'s Pick`)}</span><span>${escapeHtml(challengerPick)}</span></div>
    </div>
    <div class="challenge-betslip-section challenge-betslip-section-stake">
      <div class="challenge-betslip-stake-row"><span>Your Stake</span><span>${formatStake(stake)}</span></div>
      <div class="challenge-betslip-stake-row"><span>You Win</span><span>${formatStake(stake * 2)}</span></div>
    </div>
  `;
}

function challengeAcceptanceMarkup() {
  const session = uiState.challengeRouteSession || { trades: [], created_by_username: "A friend" };
  const total = session.trades?.length || 0;
  const index = Math.min(uiState.challengeRouteIndex, Math.max(total - 1, 0));
  if (!total || index >= total) {
    return challengeUnavailableStateMarkup(session.unavailable_reason);
  }
  const trade = currentChallengeTradeRecord();
  const review = uiState.challengeRouteReview.find((entry) => entry.tradeId === trade.id);
  const unavailable = !trade || isChallengeTradeUnavailable(trade);
  return `
    <div class="challenge-shell">
      <section class="challenge-stack challenge-stack-wide">
        <header class="challenge-accept-header">
          <div>
            <h2>${escapeHtml(session.created_by_username)} challenged you</h2>
          </div>
          <div class="challenge-header-actions">
            <span>Trade ${index + 1} of ${total}</span>
            <button class="icon-tap-button challenge-close-button" type="button" data-challenge-home>✕</button>
          </div>
        </header>
        <article class="challenge-accept-card ${unavailable ? "is-unavailable" : ""}">
          ${uiState.challengeRouteMatchedUntil > Date.now() && review?.tradeId === trade.id ? `<div class="challenge-match-overlay"><div>✓</div><strong>Trade Matched!</strong></div>` : ""}
          ${!unavailable
            ? challengeBetSlipCardMarkup(trade, session.created_by_username)
            : `<span class="challenge-label">UNAVAILABLE</span><p class="challenge-muted-copy">${escapeHtml(challengeUnavailableMessage(challengeUnavailableReasonForTrade(trade)))}</p>`}
        </article>
        <div class="challenge-action-stack">
          ${unavailable ? `<button class="primary-button challenge-cta-button" type="button" data-challenge-next>Next</button>` : `
            <button class="primary-button challenge-cta-button ${uiState.challengeRouteAcceptPending ? "is-loading" : ""}" type="button" data-challenge-accept ${uiState.challengeRouteAcceptPending ? "disabled" : ""}>${uiState.challengeRouteAcceptPending ? "Matching…" : "Accept"}</button>
            <button class="secondary-button challenge-secondary-button" type="button" data-challenge-decline ${uiState.challengeRouteAcceptPending ? "disabled" : ""}>Decline</button>
          `}
        </div>
        ${unavailable ? `<button class="secondary-button challenge-secondary-button" type="button" data-challenge-home>Browse open markets</button>` : ""}
      </section>
    </div>
  `;
}

function challengeSummaryMarkup() {
  const session = uiState.challengeRouteSession || {};
  const review = uiState.challengeRouteReview || [];
  if (!review.length && !session.settled_summary) {
    return `
      <div class="challenge-shell">
        <section class="challenge-stack challenge-stack-wide">
          <header class="challenge-header-block">
            <h2>Challenge unavailable</h2>
          </header>
          ${challengeUnavailableStateMarkup(session.unavailable_reason)}
          <button class="primary-button challenge-cta-button" type="button" data-challenge-home>Explore CrowdIQ</button>
        </section>
      </div>
    `;
  }
  return `
    <div class="challenge-shell">
      <section class="challenge-stack challenge-stack-wide">
        <header class="challenge-header-block">
          <h2>Challenge Complete</h2>
          <p>Here's how it went</p>
        </header>
        <div class="challenge-summary-list">
          ${review.map((entry) => challengeSummaryRowMarkup(entry)).join("")}
        </div>
        ${challengeSummaryOutcomeMarkup(session.settled_summary)}
        <button class="primary-button challenge-cta-button" type="button" data-challenge-home>Explore CrowdIQ</button>
      </section>
    </div>
  `;
}

function challengeSummaryRowMarkup(entry) {
  const icon = entry.status === "matched" ? "✓" : entry.status === "declined" ? "✕" : "−";
  const label = entry.status === "matched" ? "Matched" : entry.status === "declined" ? "Declined" : "No longer available";
  const className = entry.status === "matched" ? "is-positive" : entry.status === "expired" ? "is-expired" : "";
  return `<div class="challenge-summary-row"><span class="challenge-summary-icon ${className}">${icon}</span><span>${escapeHtml(entry.playerName)}</span><strong class="${className}">${label}</strong></div>`;
}

function challengeOpponentMeta(trade) {
  const market = trade.market || {};
  return `${homeTeamAbbreviation(market.team || "")} · vs ${market.opponent || "Opponent"} · ${formatChallengeKickoff(market.kickoff_time)}`;
}

function challengeSupportingCopy() {
  return "Take the opposite side of their bet. If you're right when the match ends, you win the stake.";
}

function challengeKickoffBadgeMarkup(trade) {
  const kickoffAt = Number(new Date(trade?.market?.kickoff_time || "").getTime());
  if (!Number.isFinite(kickoffAt) || kickoffAt <= Date.now()) {
    return "";
  }
  const minutesUntilKickoff = Math.max(1, Math.ceil((kickoffAt - Date.now()) / 60000));
  const wholeHoursUntilKickoff = Math.max(1, Math.floor(minutesUntilKickoff / 60));
  const isImminent = minutesUntilKickoff < 30;
  const label = minutesUntilKickoff >= 60
    ? `Kicks off in ${wholeHoursUntilKickoff} hour${wholeHoursUntilKickoff === 1 ? "" : "s"}`
    : `Kicks off in ${minutesUntilKickoff} min${minutesUntilKickoff === 1 ? "" : "s"}`;
  return `<span class="challenge-match-status ${isImminent ? "is-imminent" : ""}">${escapeHtml(label)}</span>`;
}

function challengeUnavailableStateMarkup(reason) {
  return `
    <div class="challenge-error-card">
      <p>${escapeHtml(challengeUnavailableMessage(reason))}</p>
      <button class="secondary-button challenge-secondary-button" type="button" data-challenge-home>Browse open markets</button>
    </div>
  `;
}

function challengeUnavailableMessage(reason) {
  if (reason === "filled") {
    return "Someone else accepted this challenge first.";
  }
  if (reason === "moved") {
    return "The line has moved and this challenge is no longer available.";
  }
  return "This challenge has expired — the match is already underway or finished.";
}

function challengeUnavailableReasonForTrade(trade) {
  const kickoffAt = Number(new Date(trade.market?.kickoff_time || "").getTime());
  if (trade.result || (Number.isFinite(kickoffAt) && kickoffAt <= Date.now())) {
    return "expired";
  }
  if (!(Number(trade.unmatchedStake) > 0) || String(trade.status || "") === "MATCHED") {
    return "filled";
  }
  return "moved";
}

function challengeSummaryOutcomeMarkup(settledSummary) {
  if (!settledSummary?.player_name) {
    return `<p class="challenge-more-copy">Match in progress — check your Portfolio for results when the game ends.</p>`;
  }
  const finalScore = Number.isFinite(Number(settledSummary.final_score))
    ? Number(settledSummary.final_score).toFixed(1)
    : "No result";
  const winner = settledSummary.winner_name
    ? `${settledSummary.winner_name} won the stake.`
    : settledSummary.outcome === "VOID" || settledSummary.outcome === "MIDDLE"
      ? "No one won the stake."
      : "Result recorded.";
  return `<p class="challenge-more-copy">${escapeHtml(`${settledSummary.player_name} finished on ${finalScore}. ${winner}`)}</p>`;
}

function challengePreviewState(trade, session = uiState.challengeRouteSession || {}) {
  if (session?.settled_summary?.player_name) return "settled";
  if (!trade) {
    return session?.unavailable_reason === "filled" ? "matched" : "expired";
  }
  const reason = challengeUnavailableReasonForTrade(trade);
  if (reason === "filled") return "matched";
  if (reason === "expired") return "expired";
  if (reason === "moved") return "expired";
  return "available";
}

function formatChallengeKickoff(kickoffTime) {
  const timestamp = Number(new Date(kickoffTime || "").getTime());
  if (!Number.isFinite(timestamp)) return "";
  return new Date(timestamp).toLocaleString([], { weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
}

function formatChallengeLandingDateTime(kickoffTime) {
  const timestamp = Number(new Date(kickoffTime || "").getTime());
  if (!Number.isFinite(timestamp)) return "";
  const date = new Date(timestamp);
  const weekday = date.toLocaleString([], { weekday: "short" });
  const day = date.toLocaleString([], { day: "numeric" });
  const month = date.toLocaleString([], { month: "short" });
  const time = date.toLocaleString([], { hour: "numeric", minute: "2-digit" });
  return `${weekday}, ${day} ${month} at ${time}`;
}

function isChallengeTradeUnavailable(trade) {
  const kickoffAt = Number(new Date(trade.market?.kickoff_time || "").getTime());
  return !(Number(trade.unmatchedStake) > 0) || (Number.isFinite(kickoffAt) && kickoffAt <= Date.now());
}

function bindChallengeRouteEvents() {
  elements.challengeRoute.querySelector("[data-challenge-begin-accept]")?.addEventListener("click", () => {
    uiState.challengeRouteAuthMode = "signup";
    uiState.challengeRouteAuthDraft = "";
    uiState.challengeRouteAuthError = "";
    renderChallengeRoute();
    elements.challengeRoute.querySelector(".challenge-auth-input")?.focus();
  });
  elements.challengeRoute.querySelector("[data-challenge-begin-signin]")?.addEventListener("click", () => {
    uiState.challengeRouteAuthMode = "signin";
    uiState.challengeRouteAuthDraft = "";
    uiState.challengeRouteAuthError = "";
    renderChallengeRoute();
    elements.challengeRoute.querySelector(".challenge-auth-input")?.focus();
  });
  elements.challengeRoute.querySelector(".challenge-auth-input")?.addEventListener("input", (event) => {
    uiState.challengeRouteAuthDraft = event.target.value;
    uiState.challengeRouteAuthError = "";
  });
  elements.challengeRoute.querySelector("[data-challenge-auth-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitChallengeAuthAndAccept();
  });
  elements.challengeRoute.querySelector("[data-challenge-how]")?.addEventListener("click", () => {
    openOnboardingPopup();
  });
  elements.challengeRoute.querySelectorAll("[data-challenge-home]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "/";
    });
  });
  elements.challengeRoute.querySelector("[data-challenge-next]")?.addEventListener("click", () => {
    markChallengeReviewStatus(currentChallengeTradeRecord(), "expired");
    advanceChallengeTrade();
  });
  elements.challengeRoute.querySelector("[data-challenge-decline]")?.addEventListener("click", () => {
    markChallengeReviewStatus(currentChallengeTradeRecord(), "declined");
    advanceChallengeTrade();
  });
  elements.challengeRoute.querySelector("[data-challenge-accept]")?.addEventListener("click", async () => {
    await acceptCurrentChallengeTrade();
  });
}

async function submitChallengeAuthAndAccept() {
  const nextUserName = String(uiState.challengeRouteAuthDraft || "").trim();
  if (!nextUserName) {
    uiState.challengeRouteAuthError = "Enter a username to continue.";
    renderChallengeRoute();
    return;
  }
  uiState.challengeRouteAuthPending = true;
  uiState.challengeRouteAuthError = "";
  renderChallengeRoute();
  try {
    await completeLogin(nextUserName);
    if (!isAuthenticated()) {
      uiState.challengeRouteAuthError = elements.authFeedback?.textContent || "Something went wrong.";
      return;
    }
    uiState.challengeRouteAuthMode = "";
    await maybeLoadChallengeRoute(true);
    await acceptCurrentChallengeTrade();
  } catch (error) {
    uiState.challengeRouteAuthError = error.message;
  } finally {
    uiState.challengeRouteAuthPending = false;
    renderChallengeRoute();
  }
}

async function acceptCurrentChallengeTrade() {
  let trade = currentChallengeTradeRecord();
  if (!trade) {
    await maybeLoadChallengeRoute(true);
    trade = currentChallengeTradeRecord();
  }
  if (!trade) {
    uiState.challengeRouteAcceptError = "This challenge could not be loaded. Please refresh and try again.";
    renderChallengeRoute();
    return;
  }
  uiState.challengeRouteAcceptPending = true;
  uiState.challengeRouteAcceptError = "";
  renderChallengeRoute();
  try {
    const response = await api("/api/share/accept", {
      share_session_id: uiState.challengeRouteShareId,
      trade_id: trade.id
    });
    if (response.state || response.backend || response.prizePool) {
      applySharedSnapshot({
        ...response,
        backend: response.backend || backendState,
        prizePool: response.prizePool || prizePoolState
      });
    } else if (Number.isFinite(Number(response.balance))) {
      state.bankrolls[currentUserName()] = Number(response.balance);
    }
    markChallengeReviewStatus(trade, "matched");
    try {
      await syncSession();
    } catch (error) {
      console.warn("Challenge accept sync failed", error.message);
    }
    openAcceptedChallengePortfolio(response.matched_trade || trade);
  } catch (error) {
    uiState.challengeRouteAcceptPending = false;
    showToast(error.message === "Insufficient balance" ? "Insufficient balance" : "Unable to accept", error.message);
    renderChallengeRoute();
  }
}

function openAcceptedChallengePortfolio(trade) {
  const positionKey = trade?.marketId && trade?.side ? `OPEN:${trade.marketId}:${trade.side}` : "";
  if (window.location.pathname !== "/") {
    window.history.replaceState({}, "", "/");
  }
  uiState.activeScreen = "account";
  uiState.activeAccountView = "portfolio";
  uiState.portfolioFilter = "ALL";
  uiState.portfolioSort = "MOST_RECENT";
  uiState.challengeRouteAcceptPending = false;
  uiState.challengeRouteMatchedUntil = 0;
  uiState.challengeRouteAuthMode = "";
  uiState.challengeRouteAuthDraft = "";
  uiState.challengeRouteAuthError = "";
  uiState.challengeRouteAuthPending = false;
  uiState.portfolioHighlightPositionKey = positionKey;
  uiState.portfolioHighlightUntil = Date.now() + 2200;
  syncChallengeRouteFromLocation();
  void maybeLoadChallengeRoute(true);
  renderAll();
  schedulePortfolioHighlightClear();
}

function schedulePortfolioHighlightClear() {
  if (portfolioHighlightClearTimer) {
    window.clearTimeout(portfolioHighlightClearTimer);
  }
  const remaining = uiState.portfolioHighlightUntil - Date.now();
  if (!uiState.portfolioHighlightPositionKey || remaining <= 0) {
    uiState.portfolioHighlightPositionKey = "";
    uiState.portfolioHighlightUntil = 0;
    return;
  }
  portfolioHighlightClearTimer = window.setTimeout(() => {
    uiState.portfolioHighlightPositionKey = "";
    uiState.portfolioHighlightUntil = 0;
    renderPortfolio();
  }, remaining);
}

function markChallengeReviewStatus(trade, status) {
  if (!trade) return;
  uiState.challengeRouteReview = uiState.challengeRouteReview.map((entry) =>
    entry.tradeId === trade.id ? { ...entry, status } : entry
  );
}

function advanceChallengeTrade() {
  uiState.challengeRouteAcceptPending = false;
  uiState.challengeRouteMatchedUntil = 0;
  uiState.challengeRouteIndex += 1;
  renderAll();
}

async function submitQuickTake(marketId, side, card) {
  const activeCardId = getActiveQuickTakeMarketId();
  if (!marketId || marketId !== activeCardId || uiState.quickPickPendingRequestId) return;
  if (!isAuthenticated()) {
    openAuthPrompt("signup");
    showToast("Sign in required", "Sign in to place a Quick Pick trade.", { placement: "top" });
    renderQuickTake();
    return;
  }
  if (isMarketLocked(findMarket(marketId))) {
    renderQuickTake();
    showToast("Quick Pick locked", "This match has already kicked off.");
    return;
  }
  const requestId = `${marketId}:${Date.now()}`;
  uiState.quickPickPendingCardId = marketId;
  uiState.quickPickPendingSide = side;
  uiState.quickPickPendingRequestId = requestId;
  renderQuickTake();
  try {
    const response = await executeQuickTakeTrade(marketId, side);
    if (uiState.quickPickPendingRequestId !== requestId) return;
    applyQuickTakeTradeResponse(response, marketId);
    const submittedTrade = response.trade;
    const liveCard = elements.quickPickDeck.querySelector(`.quick-take-card.is-front[data-card-id="${marketId}"]`) || card;
    if (liveCard) {
      liveCard.classList.add(side === "OVER" ? "is-exit-over" : "is-exit-under");
      await wait(140);
    }
    advanceQuickTakeQueue(marketId);
    uiState.quickPickPendingCardId = "";
    uiState.quickPickPendingSide = "";
    uiState.quickPickPendingRequestId = "";
    renderHeaderBalance();
    renderQuickTake();
    triggerBalanceFlash();
    const toastMessage = submittedTrade?.status === "MATCHED"
      ? `Matched $1 on ${side}`
      : submittedTrade?.status === "PARTIALLY_MATCHED"
        ? `Matched ${formatStake(submittedTrade.matchedStake || 0)} and left ${formatStake(submittedTrade.unmatchedStake || 0)} available`
        : `Posted ${formatStake(submittedTrade?.unmatchedStake || 1)} on ${side}`;
    showToast("Quick Pick submitted", toastMessage, { placement: "top" });
    if (backendState.mode !== "local") {
      window.setTimeout(() => {
        refreshSharedState();
      }, 150);
    }
  } catch (error) {
    if (uiState.quickPickPendingRequestId !== requestId) return;
    uiState.quickPickPendingCardId = "";
    uiState.quickPickPendingSide = "";
    uiState.quickPickPendingRequestId = "";
    renderQuickTake();
    showToast("Quick Pick failed", error.message);
  }
}

function applyQuickTakeTradeResponse(response, marketId) {
  if (response.prizePool) {
    prizePoolState = response.prizePool;
  }
  if (response.backend) {
    backendState = response.backend;
  }
  if (Number.isFinite(Number(response.balance))) {
    state.bankrolls[currentUserName()] = Number(response.balance);
  }
  const market = findMarket(marketId);
  if (!market) return;
  if (response.market) {
    Object.assign(market, response.market);
  }
  if (response.trade && !market.trades.some((trade) => trade.id === response.trade.id)) {
    market.trades.push(response.trade);
  }
}

function syncPrizePoolPolling() {
  if (uiState.activeScreen !== "prizepool") {
    stopPrizePoolPolling();
    return;
  }
  if (prizePoolLastPolledAmount == null) {
    prizePoolLastPolledAmount = Number(prizePoolState?.poolAmount) || 0;
  }
  if (prizePoolPollTimer) return;
  prizePoolPollTimer = window.setInterval(() => {
    const nextAmount = Number(prizePoolState?.poolAmount) || 0;
    if (nextAmount > (prizePoolLastPolledAmount || 0)) {
      triggerPrizePoolJarSurge();
    }
    prizePoolLastPolledAmount = nextAmount;
  }, PRIZE_POOL_POLL_MS);
}

function stopPrizePoolPolling() {
  if (prizePoolPollTimer) {
    window.clearInterval(prizePoolPollTimer);
    prizePoolPollTimer = null;
  }
  prizePoolLastPolledAmount = null;
}

function triggerPrizePoolJarSurge() {
  prizePoolJarSurging = false;
}

function isPrizePoolInterchangePick(pick) {
  return pick?.position === "INTERCHANGE" || String(pick?.slotId || "").startsWith("INT");
}

function splitPrizePoolPicks(picks = []) {
  return {
    starting: picks.filter((pick) => !isPrizePoolInterchangePick(pick)),
    interchange: picks.filter((pick) => isPrizePoolInterchangePick(pick))
  };
}

function prizePoolDraftNeedsInterchangeDivider(draft) {
  if (!draft) return false;
  const startingSlots = Number(draft.startingSlots) || 13;
  const interchangeSlots = Number(draft.interchangeSlots) || 4;
  return draft.currentIndex >= startingSlots
    && draft.currentIndex < startingSlots + interchangeSlots
    && uiState.prizePoolInterchangeDividerSeenDraftId !== draft.id;
}

function renderPrizePool() {
  if (!elements.prizePoolShell) return;
  const view = prizePoolState;
  if (!view) {
    elements.prizePoolShell.innerHTML = `<div class="portfolio-empty-state"><strong>Prize Pool loading</strong><span>Fetching this week's pool and leaderboard.</span></div>`;
    return;
  }
  if (view.hasEntry && view.entry) {
    renderPrizePoolEntryState(view);
    return;
  }
  if (view.draft) {
    renderPrizePoolDraftState(view);
    return;
  }
  const payouts = prizePoolPayoutRows(view);
  elements.prizePoolShell.innerHTML = `
    <section class="prize-pool-strip">
      <section class="prize-pool-hero ${prizePoolJarSurging ? "is-surging" : ""}">
        <p class="prize-pool-kicker">Prize Pool</p>
        <h2 class="prize-pool-hero-title">Weekly Cash Pool</h2>
        <p class="prize-pool-hero-copy">Pay $10, get 13 randomly assigned players plus 4 interchange players, lock in Over or Under on each line. Highest correct percentage wins.</p>
        <div class="prize-pool-info-row">
          <span class="prize-pool-how-label">How it works</span>
          <button id="prize-pool-info" class="prize-pool-info-button" type="button" aria-label="Explain Prize Pool">i</button>
        </div>
        ${renderPrizePoolTipJar(view)}
      </section>
      <section class="section-block prize-pool-breakdown-block">
        <div class="section-heading compact-heading">
          <div>
            <p class="eyebrow">Live Payouts</p>
            <h3>Current breakdown</h3>
          </div>
        </div>
        <div class="prize-pool-payout-grid">${payouts}</div>
      </section>
      <div class="prize-pool-sticky-cta">
        ${view.canEnter ? `<button id="prize-pool-enter" class="primary-button prize-pool-enter-button prize-pool-cta-live" type="button">${uiState.prizePoolPendingAction === "start" ? "Opening…" : "Enter for $10"}</button>` : `<button class="secondary-button prize-pool-cta-muted" type="button" disabled>Entry Closed</button>`}
      </div>
      ${!view.canEnter ? `<div class="portfolio-empty-state"><strong>Entry closed</strong><span>Prize Pool stays open only while at least one round game has not yet kicked off.</span></div>` : ""}
      ${renderPrizePoolLeaderboard(view, "Current Standings")}
    </section>
  `;
  elements.prizePoolShell.querySelector("#prize-pool-enter")?.addEventListener("click", async () => {
    await startPrizePoolDraft();
  });
  elements.prizePoolShell.querySelector("#prize-pool-info")?.addEventListener("click", () => {
    openAppModal("prize-pool-info");
  });
  animatePrizePoolDeltaValue();
}

function renderPrizePoolDraftState(view) {
  const draft = view.draft;
  const currentCard = draft.currentCard;
  if (draft.readyToSubmit) {
    const split = splitPrizePoolPicks(draft.picks);
    elements.prizePoolShell.innerHTML = `
      <section class="hero-strip prize-pool-strip">
        <div class="portfolio-title-row"><div><p class="eyebrow">Prize Pool</p><h2>Review your team</h2></div></div>
        <p class="section-meta prize-pool-subtitle">Your projection lines are now locked. Submit once to enter this week's pool.</p>
        <section class="section-block prize-pool-summary-block">
          <div class="prize-pool-section-label">Starting 13</div>
          <div class="prize-pool-team-list">
            ${split.starting.map((pick, index) => prizePoolPickRowMarkup(pick, index + 1)).join("")}
          </div>
          <div class="prize-pool-line-divider"></div>
          <div class="prize-pool-section-head"><div class="prize-pool-section-label is-interchange">Interchange</div></div>
          <div class="prize-pool-team-list prize-pool-team-list-interchange">
            ${split.interchange.map((pick, index) => prizePoolPickRowMarkup(pick, index + 1)).join("")}
          </div>
        </section>
        <div class="prize-pool-sticky-cta">
          <button id="prize-pool-submit" class="primary-button prize-pool-submit-button prize-pool-cta-live" type="button">${uiState.prizePoolPendingAction === "submit" ? "Submitting…" : "Submit Team"}</button>
        </div>
      </section>
    `;
    elements.prizePoolShell.querySelector("#prize-pool-submit")?.addEventListener("click", async () => {
      await submitPrizePoolEntry();
    });
    return;
  }
  if (prizePoolDraftNeedsInterchangeDivider(draft)) {
    elements.prizePoolShell.innerHTML = `
      <section class="section-block prize-pool-interchange-intro">
        <p class="eyebrow">Prize Pool</p>
        <h2>Now pick your 4 interchange players</h2>
        <p class="section-meta prize-pool-subtitle">These replace any starting player who doesn't take the field. They also act as your tiebreaker.</p>
        <button id="prize-pool-start-interchange" class="primary-button prize-pool-enter-button prize-pool-cta-live" type="button">Continue</button>
      </section>
    `;
    elements.prizePoolShell.querySelector("#prize-pool-start-interchange")?.addEventListener("click", () => {
      uiState.prizePoolInterchangeDividerSeenDraftId = draft.id;
      renderPrizePool();
    });
    return;
  }
  if (!currentCard) {
    elements.prizePoolShell.innerHTML = `<div class="portfolio-empty-state"><strong>No eligible player available</strong><span>One of the required positions has already locked across all remaining games.</span></div>`;
    return;
  }
  const market = findMarket(currentCard.marketId);
  const movement = market ? getMovementText(market) : { className: "", arrow: "", label: "Live line" };
  const matchup = market ? matchupContext(market) : { label: currentCard.team };
  const performance = market ? quickPickPerformanceSummary(market) : { seasonAverageLabel: "—", lastFive: [] };
  const teamColors = TEAM_COLORS[currentCard.team] ?? TEAM_COLORS[normalizeTeamName(currentCard.team)] ?? { primary: "#101722", secondary: "#68d9ff" };
  const isInterchange = Boolean(currentCard.isInterchange);
  elements.prizePoolShell.innerHTML = `
    <section class="hero-strip prize-pool-strip">
      <div class="portfolio-title-row"><div><p class="eyebrow">Prize Pool</p><h2>Pick ${draft.currentIndex + 1} of ${draft.totalSlots}</h2></div></div>
      <p class="section-meta prize-pool-subtitle">Players are assigned at random. Tap Over or Under and that pick locks instantly.</p>
    </section>
    <section class="section-block quick-take-stage-block">
      <article class="quick-take-card is-front player-card-shell prize-pool-card ${isInterchange ? "is-interchange" : ""}" data-card-id="${currentCard.marketId}" style="--quick-primary-soft:${hexToRgba(teamColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(teamColors.secondary, 0.18)};${market ? playerCardTone(market) : ""}">
        <div class="quick-take-backdrop"></div>
        <div class="quick-take-topline"><span class="eyebrow">${isInterchange ? "Interchange" : "Prize Pool"}</span><span class="quick-take-counter">${draft.totalSlots - draft.currentIndex} left</span></div>
        <div class="prize-pool-position-pill ${isInterchange ? "is-interchange" : ""}">${currentCard.positionLabel}</div>
        <div class="quick-take-header"><div><h3>${currentCard.playerName}</h3><p>${currentCard.team} | ${currentCard.position === "INTERCHANGE" ? currentCard.positionLabel : currentCard.position}</p><p class="quick-take-context">${matchup.label}</p></div></div>
        <div class="quick-take-line">${Number(currentCard.line).toFixed(1)}</div>
        <div class="quick-take-move ${movement.className}">${movement.arrow} ${movement.label}</div>
        <div class="quick-take-stats"><div class="quick-take-stats-head"><span class="trade-label">Last 5 Games</span><span class="quick-take-season-average">Season avg ${performance.seasonAverageLabel}</span></div><div class="quick-take-score-row">${performance.lastFive.map((entry) => `<span class="quick-take-score-pill ${entry.isMissing ? "is-missing" : ""}" title="${entry.label}">${entry.value}</span>`).join("")}</div></div>
        <div class="quick-take-actions">
      <button class="quick-take-action quick-take-under" type="button" data-prize-side="UNDER" ${uiState.prizePoolPendingAction === "pick" ? "disabled" : ""}>Under ${Number(currentCard.line).toFixed(1)}</button>
      <button class="quick-take-action quick-take-over" type="button" data-prize-side="OVER" ${uiState.prizePoolPendingAction === "pick" ? "disabled" : ""}>Over ${Number(currentCard.line).toFixed(1)}</button>
        </div>
      </article>
    </section>
  `;
  const activeCard = elements.prizePoolShell.querySelector(".quick-take-card.is-front");
  elements.prizePoolShell.querySelectorAll("[data-prize-side]").forEach((button) =>
    button.addEventListener("click", async () => {
      await submitPrizePoolDraftPick(button.dataset.prizeSide, activeCard);
    })
  );
}

function renderPrizePoolEntryState(view) {
  const entry = view.entry;
  const split = splitPrizePoolPicks(entry.picks || []);
  const summaryPct = Number(entry.correctPct) || 0;
  const hasLivePrizePoolResults = view.isFinal || (Number(entry.startingSettledCount) || 0) > 0;
  const payoutCards = view.isFinal
    ? `<div class="prize-pool-final-banner"><strong>Final rank #${entry.rank}</strong><span>${entry.payout ? `Payout ${formatStake(entry.payout)}` : "No payout this week"}</span></div>`
    : "";
  const standings = (view.leaderboard || []).slice(0, uiState.prizePoolStandingsExpanded ? undefined : 5);
  elements.prizePoolShell.innerHTML = `
    <section class="hero-strip prize-pool-strip">
      <div class="portfolio-title-row"><div><p class="eyebrow">Prize Pool</p><h2>${currentUserName()}'s Round ${view.roundNumber} Lineup</h2><p class="section-meta prize-pool-subtitle">${view.roundLabel} · Settles ${formatPrizePoolSettlement(view.settlementAt)}</p></div></div>
      <div class="prize-pool-team-header-card">
        <div>
          <strong>${currentUserName()}</strong>
          <span>Round ${view.roundNumber} · Entered ${formatPrizePoolEntryDate(entry.submittedAt)}</span>
        </div>
        <span class="prize-pool-entered-badge">Entered</span>
      </div>
      <div class="prize-pool-live-balance"><span>Prize Pool</span><strong>${formatStake(prizePoolDisplayAmount(view))}</strong></div>
      <div class="prize-pool-inline-stats-card">
        <div class="prize-pool-inline-stats">
          <span><em>Starting</em><strong>${entry.startingCorrectCount || 0}/${split.starting.length || Number(view.startingSlotCount) || 13}</strong></span>
          <span><em>Correct %</em><strong>${prizePoolPercentLabel(summaryPct, { settledCount: entry.startingSettledCount, isFinal: view.isFinal })}</strong></span>
          <span><em>Rank</em><strong>#${entry.rank || "—"}</strong></span>
        </div>
        <div class="prize-pool-progress"><span style="width:${hasLivePrizePoolResults ? Math.max(0, Math.min(100, summaryPct * 100)) : 0}%"></span></div>
      </div>
      <button id="prize-pool-share-lineup" class="prize-pool-share-trigger" type="button"><i class="ph-fill ph-share-network" aria-hidden="true"></i><span>Share Lineup</span></button>
      ${payoutCards}
    </section>
    <section class="section-block prize-pool-summary-block">
      <div class="prize-pool-section-label">Starting 13</div>
      <div class="prize-pool-team-list">
        ${split.starting.map((pick, index) => prizePoolPickRowMarkup(pick, index + 1, true)).join("")}
      </div>
      <div class="prize-pool-line-divider"></div>
      <div class="prize-pool-section-head">
        <div class="prize-pool-section-label is-interchange">Interchange</div>
        <button id="prize-pool-toggle-interchange-rules" class="secondary-button inline-section-button prize-pool-inline-info" type="button">${uiState.prizePoolInterchangeRulesExpanded ? "Hide Interchange Rules" : "Interchange Rules"}</button>
      </div>
      ${uiState.prizePoolInterchangeRulesExpanded ? `<div class="prize-pool-inline-rules"><p>Interchange replaces unavailable starting players in the order assigned.</p><p>If teams tie on correct %, the side with more correct interchange picks wins the tiebreak.</p></div>` : ""}
      <div class="prize-pool-team-list prize-pool-team-list-interchange">
        ${split.interchange.map((pick, index) => prizePoolPickRowMarkup(pick, index + 1, true)).join("") || `<div class="portfolio-empty-state"><strong>No interchange picks recorded</strong><span>This entry was created before interchange slots were added.</span></div>`}
      </div>
    </section>
    <section class="section-block prize-pool-leaderboard-block">
      <div class="section-heading compact-heading"><div><p class="eyebrow">Standings</p><h3>Current Standings</h3></div><button id="prize-pool-toggle-standings" class="secondary-button inline-section-button" type="button">${uiState.prizePoolStandingsExpanded ? "Collapse" : "View Full Standings"}</button></div>
      <div class="prize-pool-board">${standings.map((row) => prizePoolCompactStandingsRow(row)).join("")}</div>
    </section>
  `;
  elements.prizePoolShell.querySelector("#prize-pool-toggle-standings")?.addEventListener("click", () => {
    uiState.prizePoolStandingsExpanded = !uiState.prizePoolStandingsExpanded;
    renderPrizePool();
  });
  elements.prizePoolShell.querySelector("#prize-pool-toggle-interchange-rules")?.addEventListener("click", () => {
    uiState.prizePoolInterchangeRulesExpanded = !uiState.prizePoolInterchangeRulesExpanded;
    renderPrizePool();
  });
  elements.prizePoolShell.querySelector("#prize-pool-share-lineup")?.addEventListener("click", () => {
    openPrizePoolShareOverlay();
  });
}

function renderPrizePoolLeaderboard(view, heading) {
  const currentUser = currentUserName().toLowerCase();
  const rows = (view.leaderboard || []).length
    ? view.leaderboard.map((row) => {
      const tone = row.rank === 1 ? "is-first" : row.rank === 2 ? "is-second" : row.rank === 3 ? "is-third" : "";
      const hasLivePrizePoolResults = view.isFinal || (Number(row.startingSettledCount) || 0) > 0;
      const width = hasLivePrizePoolResults ? Math.max(0, Math.min(100, (Number(row.correctPct) || 0) * 100)) : 0;
      return `<article class="prize-pool-leader-card ${row.userName.toLowerCase() === currentUser ? "is-current-user" : ""}"><div class="prize-pool-rank-badge ${tone}">${row.rank}</div><div class="prize-pool-leader-copy"><div class="prize-pool-leader-top"><strong>${row.userName}</strong><span>${prizePoolPercentLabel(row.correctPct, { settledCount: row.startingSettledCount, isFinal: view.isFinal })}</span></div><div class="prize-pool-progress"><span style="width:${width}%"></span></div><div class="prize-pool-leader-foot">${row.startingCorrectCount || 0} starting correct · ${row.interchangeCorrectCount || 0} interchange${view.isFinal && row.payout ? ` | ${formatStake(row.payout)}` : ""}</div></div></article>`;
    }).join("")
    : `<div class="portfolio-empty-state"><strong>No entrants yet</strong><span>The pool amount updates as users submit teams.</span></div>`;
  return `
    <section class="section-block leaderboard-list-block prize-pool-leaderboard-block">
      <div class="section-heading compact-heading"><div><p class="eyebrow">Standings</p><h3>${heading}</h3></div></div>
      <div class="prize-pool-board">${rows}</div>
    </section>
  `;
}

function prizePoolPickRowMarkup(pick, index, includeResult = false) {
  const statusTone = pick.resultStatus === "CORRECT" ? "correct" : pick.resultStatus === "INCORRECT" ? "incorrect" : "pending";
  const isInterchange = isPrizePoolInterchangePick(pick);
  const resultMeta = includeResult
    ? pick.resultStatus === "PENDING"
      ? `<span class="prize-pool-result-chip pending"><span aria-hidden="true">◷</span><span>Pending</span></span>`
      : `<span class="prize-pool-result-chip ${statusTone}"><span aria-hidden="true">${pick.resultStatus === "CORRECT" ? "✅" : "❌"}</span><span>${Number(pick.actualScore).toFixed(1)}</span></span>`
    : "";
  return `<article class="prize-pool-pick-row is-${statusTone} ${isInterchange ? "is-interchange" : ""}"><div class="prize-pool-pick-copy"><span class="prize-pool-position-label ${isInterchange ? "is-interchange" : ""}">${pick.positionLabel}</span><strong>${pick.playerName}</strong><span class="prize-pool-team-meta">${pick.team}</span></div><div class="prize-pool-call-block"><span class="prize-pool-call-pill ${pick.side === "OVER" ? "over" : "under"}">${pick.side}</span><strong>${Number(pick.line).toFixed(1)}</strong></div><div class="prize-pool-pick-status">${resultMeta || `<span class="prize-pool-result-chip pending"><span aria-hidden="true">◷</span><span>Pending</span></span>`}</div></article>`;
}

function prizePoolCompactStandingsRow(row) {
  return `<article class="prize-pool-compact-row"><span class="prize-pool-compact-rank">#${row.rank}</span><strong>${row.userName}</strong><span>${prizePoolPercentLabel(row.correctPct, { settledCount: row.startingSettledCount, isFinal: false })}</span><small>${row.interchangeCorrectCount || 0} INT</small></article>`;
}

function prizePoolPayoutRows(view) {
  const pool = prizePoolDisplayAmount(view);
  return [["1st", 0.5, "is-first", "Gold"], ["2nd", 0.3, "is-second", "Silver"], ["3rd", 0.2, "is-third", "Bronze"]]
    .map(([label, split, tone, iconLabel]) => `<article class="prize-pool-payout-card ${tone}"><span class="prize-pool-payout-rank">${label} <small>${iconLabel}</small></span><strong>${formatStake(pool * split)}</strong><p>${Math.round(split * 100)}%</p></article>`)
    .join("");
}

function prizePoolStatCard(label, value, foot, accent = "money") {
  return `<article class="prize-pool-stat-card"><span class="prize-pool-stat-label">${label}</span><strong class="prize-pool-stat-value ${accent === "settlement" ? "" : accent === "count" ? "is-secondary" : ""}">${value}</strong><span class="prize-pool-stat-foot">${foot}</span></article>`;
}

function prizePoolDisplayAmount(view) {
  return Math.max(Number(view?.poolAmount) || 0, Number(view?.seedAmount) || 100);
}

function prizePoolPercentLabel(value, options = {}) {
  if (!options.isFinal && (Number(options.settledCount) || 0) <= 0) {
    return "Pending";
  }
  return `${((Number(value) || 0) * 100).toFixed(0)}%`;
}

function formatPrizePoolSettlement(timestamp) {
  if (!timestamp) return "Monday";
  return new Date(timestamp).toLocaleString([], { weekday: "short", month: "short", day: "numeric" });
}

const PRIZE_POOL_SHARE_ROW_ORDER = [
  { key: "HOK", slots: ["HK"], align: "center" },
  { key: "MID", slots: ["P1", "LK", "P2"], align: "spread" },
  { key: "EDG", slots: ["SR1", "SR2"], align: "spread" },
  { key: "HLF", slots: ["HB", "FE"], align: "spread" },
  { key: "CTR", slots: ["C1", "C2"], align: "spread" },
  { key: "WFB", slots: ["W1", "FB", "W2"], align: "spread" }
];

const PRIZE_POOL_SHARE_POSITION_TO_SLOT = {
  FULLBACK: ["FB"],
  WINGER: ["W1", "W2"],
  CENTRE: ["C1", "C2"],
  "FIVE-EIGHTH": ["FE"],
  HALFBACK: ["HB"],
  HOOKER: ["HK"],
  PROP: ["P1", "P2"],
  "2ND ROW": ["SR1", "SR2"],
  LOCK: ["LK"]
};

function openPrizePoolShareOverlay() {
  if (!prizePoolState?.entry) return;
  uiState.prizePoolShareOpen = true;
  renderPrizePoolShareOverlay();
}

function closePrizePoolShareOverlay() {
  if (!uiState.prizePoolShareOpen) return;
  uiState.prizePoolShareOpen = false;
  renderPrizePoolShareOverlay();
}

function ensurePrizePoolShareOverlay() {
  let overlay = document.getElementById("prize-pool-share-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "prize-pool-share-overlay";
    overlay.className = "prize-pool-share-overlay";
    document.body.appendChild(overlay);
  }
  return overlay;
}

function renderPrizePoolShareOverlay() {
  const overlay = document.getElementById("prize-pool-share-overlay");
  if (!uiState.prizePoolShareOpen || !prizePoolState?.entry) {
    if (overlay) overlay.remove();
    document.body.classList.remove("prize-pool-share-open");
    if (prizePoolShareFitFrame) {
      window.cancelAnimationFrame(prizePoolShareFitFrame);
      prizePoolShareFitFrame = null;
    }
    return;
  }
  const view = prizePoolState;
  const entry = view.entry;
  const split = splitPrizePoolPicks(entry.picks || []);
  const shareOverlay = ensurePrizePoolShareOverlay();
  const formation = buildPrizePoolShareFormation(split.starting);
  shareOverlay.innerHTML = `
    <div class="prize-pool-share-backdrop">
      <button class="prize-pool-share-close" type="button" aria-label="Close share lineup view">✕ Close</button>
      <div class="prize-pool-share-card">
        <div class="prize-pool-share-topbar">
          <h1 class="brand-wordmark prize-pool-share-wordmark"><span class="brand-wordmark-crowd">crowd</span><span class="brand-wordmark-iq">IQ</span></h1>
          <span class="prize-pool-share-round">ROUND ${view.roundNumber || currentRoundNumber() || "—"}</span>
        </div>
        <section class="prize-pool-share-hero">
          <h2>${currentUserName()}'s Lineup</h2>
          <p>Rank #${entry.rank || "—"} · Settles ${formatPrizePoolShareSettlement(view.settlementAt)}</p>
          <div class="prize-pool-share-pool-lockup">
            <span>PRIZE POOL</span>
            <strong>${formatStake(prizePoolDisplayAmount(view))}</strong>
          </div>
        </section>
        <section class="prize-pool-share-formation-shell">
          <div class="prize-pool-share-formation-scale" data-prize-pool-share-scale>
            ${formation}
          </div>
        </section>
        <footer class="prize-pool-share-footer">
          <span>crowdiq.app</span>
          <em>Hold to save · Share your lineup</em>
        </footer>
      </div>
    </div>
  `;
  shareOverlay.querySelector(".prize-pool-share-close")?.addEventListener("click", () => {
    closePrizePoolShareOverlay();
  });
  document.body.classList.add("prize-pool-share-open");
  schedulePrizePoolShareFit();
}

function buildPrizePoolShareFormation(picks = []) {
  const slotMap = assignPrizePoolShareSlots(picks);
  return PRIZE_POOL_SHARE_ROW_ORDER
    .map((row, rowIndex) => {
      const cards = row.slots.map((slotId) => {
        const pick = slotMap.get(slotId);
        return pick ? prizePoolSharePlayerCardMarkup(pick) : `<div class="prize-pool-share-player-card is-empty" aria-hidden="true"></div>`;
      }).join("");
      return `
        <div class="prize-pool-share-row ${row.align === "center" ? "is-center" : ""}">
          <span class="prize-pool-share-row-label">${row.key}</span>
          <div class="prize-pool-share-row-cards prize-pool-share-row-cards-${row.slots.length}">
            ${cards}
          </div>
        </div>
        ${rowIndex < PRIZE_POOL_SHARE_ROW_ORDER.length - 1 ? `<div class="prize-pool-share-row-divider"></div>` : ""}
      `;
    })
    .join("");
}

function assignPrizePoolShareSlots(picks = []) {
  const remaining = [...picks];
  const assigned = new Map();
  PRIZE_POOL_SHARE_ROW_ORDER.flatMap((row) => row.slots).forEach((slotId) => {
    const exactIndex = remaining.findIndex((pick) => String(pick?.slotId || "").toUpperCase() === slotId);
    if (exactIndex >= 0) {
      assigned.set(slotId, remaining.splice(exactIndex, 1)[0]);
    }
  });
  remaining.splice(0).forEach((pick) => {
    const candidateSlots = prizePoolShareSlotCandidates(pick);
    const openSlot = candidateSlots.find((slotId) => !assigned.has(slotId));
    if (openSlot) {
      assigned.set(openSlot, pick);
      return;
    }
    const fallbackSlot = PRIZE_POOL_SHARE_ROW_ORDER.flatMap((row) => row.slots).find((slotId) => !assigned.has(slotId));
    if (fallbackSlot) assigned.set(fallbackSlot, pick);
  });
  return assigned;
}

function prizePoolShareSlotCandidates(pick) {
  const rawPosition = String(pick?.position || pick?.positionLabel || "").toUpperCase();
  const normalized = rawPosition
    .replace(/\bSECOND\b/g, "2ND")
    .replace(/\bROW\b/g, "ROW")
    .replace(/\s+/g, " ")
    .trim();
  return PRIZE_POOL_SHARE_POSITION_TO_SLOT[normalized] || [];
}

function prizePoolSharePlayerCardMarkup(pick) {
  const isSettled = pick.resultStatus && pick.resultStatus !== "PENDING" && Number.isFinite(Number(pick.actualScore));
  const surname = prizePoolShareSurname(pick.playerName);
  return `
    <article class="prize-pool-share-player-card">
      <strong class="prize-pool-share-player-name" title="${pick.playerName}">${surname}</strong>
      <span class="prize-pool-share-call-pill ${pick.side === "OVER" ? "is-over" : "is-under"}">${pick.side}</span>
      <span class="prize-pool-share-line ${isSettled ? `is-${pick.resultStatus === "CORRECT" ? "correct" : "incorrect"}` : ""}">${isSettled ? `${Number(pick.actualScore).toFixed(1)} ${pick.resultStatus === "CORRECT" ? "✅" : "❌"}` : Number(pick.line).toFixed(1)}</span>
    </article>
  `;
}

function prizePoolShareSurname(playerName) {
  const parts = String(playerName || "").trim().split(/\s+/).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : "Player";
}

function formatPrizePoolShareSettlement(timestamp) {
  if (!timestamp) return "Mon 00 Mar";
  return new Date(timestamp).toLocaleDateString("en-NZ", { weekday: "short", day: "2-digit", month: "short" }).replace(",", "");
}

function schedulePrizePoolShareFit() {
  if (!uiState.prizePoolShareOpen) return;
  if (prizePoolShareFitFrame) {
    window.cancelAnimationFrame(prizePoolShareFitFrame);
  }
  prizePoolShareFitFrame = window.requestAnimationFrame(() => {
    prizePoolShareFitFrame = null;
    fitPrizePoolShareFormation();
  });
}

function fitPrizePoolShareFormation() {
  const shell = document.querySelector(".prize-pool-share-formation-shell");
  const scaleNode = document.querySelector("[data-prize-pool-share-scale]");
  if (!shell || !scaleNode) return;
  scaleNode.style.transform = "scale(1)";
  const availableHeight = shell.clientHeight;
  const naturalHeight = scaleNode.scrollHeight;
  if (!availableHeight || !naturalHeight) return;
  const scale = Math.max(0.74, Math.min(1, availableHeight / naturalHeight));
  scaleNode.style.transform = `scale(${scale})`;
}

function renderPrizePoolTipJar(view) {
  const deltaAmount = Number(view.recentDeltaAmount) || Number(view.entryFee) || 10;
  const deltaLabel = view.recentDeltaWindowLabel || "in the last hour";
  return `
    <div class="prize-pool-jar-block">
      <div class="prize-pool-hero-balance-lockup">
        <div class="prize-pool-tipjar-amount">${formatStake(prizePoolDisplayAmount(view))}</div>
        <div class="prize-pool-tipjar-delta">+${formatStake(deltaAmount)} ${deltaLabel}</div>
      </div>
    </div>
  `;
}

function formatPrizePoolEntryDate(timestamp) {
  if (!timestamp) return "today";
  return new Date(timestamp).toLocaleString([], { month: "short", day: "numeric" });
}

function animatePrizePoolDeltaValue() {
  const node = elements.prizePoolShell?.querySelector("[data-prize-pool-delta-value]");
  if (!node) return;
  const target = Number(node.dataset.prizePoolDeltaValue) || 0;
  const start = performance.now();
  const duration = 800;
  const step = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    node.textContent = `+${formatStake(Math.round(target * progress))}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

async function startPrizePoolDraft() {
  uiState.prizePoolPendingAction = "start";
  renderPrizePool();
  try {
    const response = await api("/api/prize-pool/draft/start", { userName: currentUserName() });
    applySharedSnapshot({ ...response, backend: backendState });
    uiState.prizePoolPendingAction = "";
    uiState.prizePoolPendingSide = "";
    uiState.prizePoolInterchangeDividerSeenDraftId = "";
    renderAll();
  } catch (error) {
    uiState.prizePoolPendingAction = "";
    renderPrizePool();
    showToast("Prize Pool unavailable", error.message);
  }
}

async function submitPrizePoolDraftPick(side, card) {
  if (!prizePoolState?.draft?.id || !side) return;
  uiState.prizePoolPendingAction = "pick";
  renderPrizePool();
  try {
    const response = await api("/api/prize-pool/draft/pick", {
      userName: currentUserName(),
      draftId: prizePoolState.draft.id,
      side
    });
    const marketId = prizePoolState?.draft?.currentCard?.marketId;
    const liveCard = marketId
      ? elements.prizePoolShell.querySelector(`.quick-take-card.is-front[data-card-id="${marketId}"]`) || card
      : card;
    if (liveCard) {
      liveCard.classList.add(side === "OVER" ? "is-exit-over" : "is-exit-under");
      await wait(140);
    }
    applySharedSnapshot({ ...response, backend: backendState });
    uiState.prizePoolPendingAction = "";
    renderAll();
  } catch (error) {
    uiState.prizePoolPendingAction = "";
    renderPrizePool();
    showToast("Prize Pool pick failed", error.message);
  }
}

async function submitPrizePoolEntry() {
  if (!isAuthenticated()) {
    openAuthPrompt("signup");
    return;
  }
  if (!prizePoolState?.draft?.id) return;
  uiState.prizePoolPendingAction = "submit";
  renderPrizePool();
  try {
    const response = await api("/api/prize-pool/submit", {
      userName: currentUserName(),
      draftId: prizePoolState.draft.id
    });
    applySharedSnapshot({ ...response, backend: backendState });
    uiState.prizePoolPendingAction = "";
    renderAll();
    triggerBalanceFlash();
    showPrizePoolSubmissionToast();
  } catch (error) {
    uiState.prizePoolPendingAction = "";
    renderPrizePool();
    showToast("Prize Pool submit failed", error.message);
  }
}

function showPrizePoolSubmissionToast() {
  if (uiState.prizePoolSubmissionToastShown) return;
  uiState.prizePoolSubmissionToastShown = true;
  document.querySelectorAll(".prize-pool-submission-toast").forEach((node) => node.remove());
  const toast = document.createElement("div");
  toast.className = "toast visible toast-low prize-pool-submission-toast";
  toast.setAttribute("aria-live", "polite");
  toast.innerHTML = `<span class="toast-title">Team Submitted</span><span class="toast-meta">Your lineup is locked for this round.</span>`;
  document.body.appendChild(toast);
  window.setTimeout(() => {
    toast.remove();
  }, 2500);
}

function renderProfileSummary() {
  const userName = currentUserName();
  if (elements.portfolioPageSubtitle) {
    elements.portfolioPageSubtitle.textContent = userName;
  }
  if (elements.profileSummary) {
    elements.profileSummary.innerHTML = "";
  }
}

function renderAdminShell() {
  elements.adminShell.classList.toggle("is-open", uiState.adminOpen);
  elements.adminShell.setAttribute("aria-hidden", String(!uiState.adminOpen));
  elements.adminShell.classList.toggle("shareable-active", uiState.adminShareableView !== "main");
  renderAdminTabs();
  if (uiState.adminOpen && uiState.adminActiveTab === "operations") {
    startAdminAnalyticsPolling();
  } else {
    stopAdminAnalyticsPolling();
  }
  if (elements.adminRoundSelect) {
    elements.adminRoundSelect.innerHTML = getAvailableRoundOptions()
      .map((roundNumber) => `<option value="${roundNumber}">${roundLabelForNumber(roundNumber)}</option>`)
      .join("");
    elements.adminRoundSelect.value = String(activeRoundNumber());
  }
  if (elements.adminRoundSummary) {
    const marketCount = state.markets.filter((market) => marketRoundNumber(market) === activeRoundNumber()).length;
    elements.adminRoundSummary.textContent = `${activeRoundLabel()} is active. ${marketCount} seeded markets belong to this round.`;
  }
  if (elements.settleRoundButton) {
    elements.settleRoundButton.textContent = `Settle ${activeRoundLabel()} from imported scores`;
  }
  if (elements.undoSettlementButton) {
    elements.undoSettlementButton.disabled = !state.lastSettlementBatch;
  }
}

function renderAdminTabs() {
  const activeTab = uiState.adminActiveTab === "affiliates" ? "affiliates" : "operations";
  if (elements.adminTabControls) {
    [...elements.adminTabControls.querySelectorAll("[data-admin-tab]")].forEach((button) => {
      const isActive = button.dataset.adminTab === activeTab;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  }
  elements.adminTabPanels.forEach((panel) => {
    const isActive = panel.dataset.adminTabPanel === activeTab;
    panel.classList.toggle("is-active", isActive);
  });
}

function openShareableContentLibrary() {
  uiState.adminShareableView = "library";
  uiState.adminShareableTemplateId = "";
  uiState.adminShareablePlayerQuery = "";
  uiState.adminShareableSelectedMarketId = "";
  uiState.adminShareableSelectedGameId = "";
  uiState.adminShareableAspectRatio = "1:1";
  uiState.adminShareableTheme = "dark";
  renderAdminShareableWorkspace();
}

function selectShareableTemplate(templateId) {
  uiState.adminShareableTemplateId = templateId;
  uiState.adminShareableView = "config";
  uiState.adminShareableAspectRatio = "1:1";
  uiState.adminShareableTheme = "dark";
  uiState.adminShareablePlayerQuery = "";
  uiState.adminShareableSelectedMarketId = "";
  uiState.adminShareableSelectedGameId = "";
  renderAdminShareableWorkspace();
}

function closeShareableContentOutput() {
  uiState.adminShareableOutputOpen = false;
  renderShareableContentOutput();
}

function handleAdminShareableWorkspaceClick(event) {
  const backButton = event.target.closest("[data-shareable-back]");
  if (backButton) {
    if (uiState.adminShareableView === "config") {
      uiState.adminShareableView = "library";
    } else {
      uiState.adminShareableView = "main";
      uiState.adminShareableTemplateId = "";
      uiState.adminShareablePlayerQuery = "";
    }
    renderAdminShareableWorkspace();
    return;
  }
  const templateButton = event.target.closest("[data-shareable-template-id]");
  if (templateButton) {
    selectShareableTemplate(templateButton.dataset.shareableTemplateId);
    return;
  }
  const ratioButton = event.target.closest("[data-shareable-aspect]");
  if (ratioButton) {
    uiState.adminShareableAspectRatio = ratioButton.dataset.shareableAspect;
    renderAdminShareableWorkspace();
    return;
  }
  const themeButton = event.target.closest("[data-shareable-theme]");
  if (themeButton) {
    uiState.adminShareableTheme = themeButton.dataset.shareableTheme;
    renderAdminShareableWorkspace();
    return;
  }
  const playerButton = event.target.closest("[data-shareable-market-id]");
  if (playerButton) {
    const market = findMarket(playerButton.dataset.shareableMarketId);
    uiState.adminShareableSelectedMarketId = market?.id || "";
    uiState.adminShareablePlayerQuery = market?.playerName || "";
    renderAdminShareableWorkspace();
    return;
  }
  const generateButton = event.target.closest("[data-shareable-generate]");
  if (generateButton && !generateButton.disabled && isShareableContentReady()) {
    uiState.adminShareableOutputOpen = true;
    renderShareableContentOutput();
  }
}

function handleAdminShareableWorkspaceInput(event) {
  if (event.target.matches("[data-shareable-player-search]")) {
    uiState.adminShareablePlayerQuery = event.target.value;
    renderAdminShareableWorkspace();
  }
}

function handleAdminShareableWorkspaceChange(event) {
  if (event.target.matches("[data-shareable-match-select]")) {
    uiState.adminShareableSelectedGameId = event.target.value;
    renderAdminShareableWorkspace();
  }
}

function renderAdminShareableWorkspace() {
  if (!elements.adminShareableWorkspace) return;
  elements.adminShell?.classList.toggle("shareable-active", uiState.adminShareableView !== "main");
  if (uiState.adminShareableView === "main" || !uiState.adminOpen) {
    elements.adminShareableWorkspace.innerHTML = "";
    return;
  }
  if (uiState.adminShareableView === "library") {
    elements.adminShareableWorkspace.innerHTML = shareableTemplateLibraryMarkup();
    return;
  }
  elements.adminShareableWorkspace.innerHTML = shareableTemplateConfigMarkup();
}

function shareableTemplateLibraryMarkup() {
  return `
    <section class="admin-shareable-screen">
      ${shareableWorkspaceHeaderMarkup()}
      <div class="admin-shareable-library">
        ${SHAREABLE_CONTENT_TEMPLATES.map((template) => `
          <button class="admin-shareable-template-card" type="button" data-shareable-template-id="${template.id}">
            <span class="admin-shareable-template-copy">
              <strong>${escapeHtml(template.name)}</strong>
              <span>${escapeHtml(template.description)}</span>
            </span>
            <span class="admin-shareable-chevron" aria-hidden="true">›</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function shareableTemplateConfigMarkup() {
  const template = getShareableTemplate(uiState.adminShareableTemplateId);
  if (!template) {
    uiState.adminShareableView = "library";
    return shareableTemplateLibraryMarkup();
  }
  const selectedMarket = getSelectedShareableMarket();
  const selectedGame = getSelectedShareableGame();
  const playerResults = getShareablePlayerSearchResults(uiState.adminShareablePlayerQuery, selectedMarket?.id);
  return `
    <section class="admin-shareable-screen">
      ${shareableWorkspaceHeaderMarkup()}
      <div class="admin-shareable-config-shell">
        <div class="admin-shareable-config-block">
          <span class="admin-shareable-config-label">Template</span>
          <strong class="admin-shareable-config-title">${escapeHtml(template.name)}</strong>
          <span class="admin-shareable-config-copy">${escapeHtml(template.description)}</span>
        </div>
        <div class="admin-shareable-config-block">
          <span class="admin-shareable-config-label">Aspect Ratio</span>
          <div class="admin-shareable-toggle-row">
            ${SHAREABLE_ASPECT_RATIOS.map((option) => `
              <button class="admin-shareable-toggle ${uiState.adminShareableAspectRatio === option.id ? "is-active" : ""}" type="button" data-shareable-aspect="${option.id}">${option.label}</button>
            `).join("")}
          </div>
        </div>
        <div class="admin-shareable-config-block">
          <span class="admin-shareable-config-label">Colour Mode</span>
          <div class="admin-shareable-toggle-row admin-shareable-toggle-row--two-up">
            ${SHAREABLE_THEMES.map((option) => `
              <button class="admin-shareable-toggle ${uiState.adminShareableTheme === option.id ? "is-active" : ""}" type="button" data-shareable-theme="${option.id}">${option.label}</button>
            `).join("")}
          </div>
        </div>
        ${template.requiresPlayer ? `
          <div class="admin-shareable-config-block">
            <label class="admin-shareable-field">
              <span class="admin-shareable-config-label">Search Player…</span>
              <input class="admin-shareable-input" type="search" value="${escapeHtml(uiState.adminShareablePlayerQuery)}" placeholder="Search player…" data-shareable-player-search>
            </label>
            ${playerResults.length ? `<div class="admin-shareable-results">${playerResults.map((market) => shareablePlayerResultMarkup(market)).join("")}</div>` : uiState.adminShareablePlayerQuery.trim() ? `<div class="admin-shareable-empty">No current round players match that search.</div>` : ""}
            ${selectedMarket ? `<div class="admin-shareable-selection">${shareableTeamBadgeMarkup(selectedMarket.team)}<span>${escapeHtml(selectedMarket.playerName)}</span><span class="admin-shareable-selection-tick">✓</span></div>` : ""}
          </div>
        ` : ""}
        ${template.requiresMatch ? `
          <div class="admin-shareable-config-block">
            <label class="admin-shareable-field">
              <span class="admin-shareable-config-label">Select match</span>
              <select class="admin-shareable-input admin-shareable-select" data-shareable-match-select>
                <option value="">Select match</option>
                ${getShareableMatchOptions().map((game) => `<option value="${game.id}" ${selectedGame?.id === game.id ? "selected" : ""}>${escapeHtml(formatShareableFixtureOption(game))}</option>`).join("")}
              </select>
            </label>
          </div>
        ` : ""}
        <button class="admin-shareable-generate-button" type="button" data-shareable-generate ${isShareableContentReady() ? "" : "disabled"}>Generate Content</button>
      </div>
    </section>
  `;
}

function shareableWorkspaceHeaderMarkup() {
  return `
    <header class="admin-shareable-header">
      <button class="admin-shareable-back" type="button" data-shareable-back aria-label="Back to admin tools">‹ Back</button>
      <h3>Generate Shareable Content</h3>
    </header>
  `;
}

function shareablePlayerResultMarkup(market) {
  return `
    <button class="admin-shareable-result" type="button" data-shareable-market-id="${market.id}">
      <span>${escapeHtml(market.playerName)}</span>
      ${shareableTeamBadgeMarkup(market.team)}
    </button>
  `;
}

function shareableTeamBadgeMarkup(team) {
  return `<span class="home-team-badge admin-shareable-team-badge" style="${homeTeamPillStyle(team)}">${escapeHtml(homeTeamAbbreviation(team))}</span>`;
}

function getShareableTemplate(templateId) {
  return SHAREABLE_CONTENT_TEMPLATES.find((template) => template.id === templateId) || null;
}

function getShareableMatchOptions() {
  return getActiveRoundGames()
    .slice()
    .sort((left, right) => kickoffTimestampForGame(left) - kickoffTimestampForGame(right));
}

function getShareablePlayerSearchResults(query, selectedMarketId) {
  const normalizedQuery = String(query || "").trim().toLowerCase();
  const markets = getAdminRoundMarkets()
    .slice()
    .sort((left, right) => left.playerName.localeCompare(right.playerName));
  if (!normalizedQuery) {
    return selectedMarketId ? markets.filter((market) => market.id === selectedMarketId) : [];
  }
  return markets
    .filter((market) => market.playerName.toLowerCase().includes(normalizedQuery))
    .slice(0, 8);
}

function getSelectedShareableMarket() {
  return findMarket(uiState.adminShareableSelectedMarketId);
}

function getSelectedShareableGame() {
  return findGame(uiState.adminShareableSelectedGameId);
}

function isShareableContentReady() {
  const template = getShareableTemplate(uiState.adminShareableTemplateId);
  if (!template) return false;
  if (template.requiresPlayer) return Boolean(getSelectedShareableMarket());
  if (template.requiresMatch) return Boolean(getSelectedShareableGame());
  return true;
}

function renderShareableContentOutput() {
  let overlay = document.getElementById("shareable-content-output");
  if (!uiState.adminShareableOutputOpen || !isShareableContentReady()) {
    overlay?.remove();
    document.body.classList.remove("shareable-content-output-open");
    return;
  }
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "shareable-content-output";
    overlay.className = "shareable-content-output";
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = shareableContentOutputMarkup();
  overlay.querySelector("[data-shareable-output-close]")?.addEventListener("click", () => {
    closeShareableContentOutput();
  });
  document.body.classList.add("shareable-content-output-open");
}

function shareableContentOutputMarkup() {
  const template = getShareableTemplate(uiState.adminShareableTemplateId);
  const aspectClass = `ratio-${uiState.adminShareableAspectRatio.replace(":", "-")}`;
  const themeClass = `theme-${uiState.adminShareableTheme}`;
  const lockedCanvas = isRebuiltShareableTemplate(template?.id) ? getShareableCanvasSize(uiState.adminShareableAspectRatio) : null;
  return `
    <div class="shareable-content-output-backdrop ${themeClass}">
      <button class="shareable-content-output-close" type="button" data-shareable-output-close aria-label="Close generated content">✕</button>
      <div class="shareable-content-canvas ${aspectClass} ${themeClass} ${lockedCanvas ? "is-pixel-locked" : ""}" ${lockedCanvas ? `style="width:${lockedCanvas.width}px;height:${lockedCanvas.height}px;"` : ""}>
        ${shareableCanvasMarkup(template)}
      </div>
    </div>
  `;
}

function shareableCanvasMarkup(template) {
  if (!template) return "";
  if (template.id === "player-spotlight") return playerSpotlightMarkup();
  if (template.id === "value-alert") return valueAlertMarkup();
  if (template.id === "match-preview") return matchPreviewMarkup();
  if (template.id === "round-rankings-value") return roundRankingsValueMarkup();
  return roundRankingsProjectedMarkup();
}

function isRebuiltShareableTemplate(templateId) {
  return ["value-alert", "match-preview", "round-rankings-value"].includes(templateId);
}

function getShareableCanvasSize(ratio) {
  if (ratio === "3:4") return { width: 1080, height: 1440 };
  if (ratio === "9:16") return { width: 1080, height: 1920 };
  return { width: 1080, height: 1080 };
}

function shareableBrandingTopMarkup() {
  const roundNumber = activeRoundNumber() || currentRoundNumber() || "—";
  return `
    <header class="shareable-branding-row">
      <h1 class="brand-wordmark shareable-brand-wordmark"><span class="brand-wordmark-crowd">crowd</span><span class="brand-wordmark-iq">IQ</span></h1>
      <span class="shareable-round-badge">ROUND ${escapeHtml(roundNumber)}</span>
    </header>
    <div class="shareable-divider"></div>
  `;
}

function shareableFooterMarkup() {
  return `<footer class="shareable-footer">crowdiq.live</footer>`;
}

function shareableRebuiltChromeMarkup() {
  const roundNumber = activeRoundNumber() || currentRoundNumber() || "—";
  return `
    <header class="shareable-fixed-branding-row">
      <h1 class="brand-wordmark shareable-fixed-wordmark"><span class="brand-wordmark-crowd">crowd</span><span class="brand-wordmark-iq">IQ</span></h1>
      <span class="shareable-fixed-round-badge">ROUND ${escapeHtml(roundNumber)}</span>
    </header>
    <div class="shareable-fixed-divider shareable-fixed-divider--top"></div>
    <div class="shareable-fixed-divider shareable-fixed-divider--bottom"></div>
    <footer class="shareable-fixed-footer">crowdiq.live</footer>
  `;
}

function shareableThemeTokens() {
  return uiState.adminShareableTheme === "light"
    ? {
        primary: "#0D0D1A",
        secondary: "#666666",
        surface: "#FFFFFF",
        divider: "#E0E0E0",
        circle: "rgba(0, 200, 83, 0.04)",
        rankOther: "#E0E0E0",
        rankText: "#0D0D1A"
      }
    : {
        primary: "#FFFFFF",
        secondary: "#888888",
        surface: "#1A1A2E",
        divider: "#2A2A3E",
        circle: "rgba(0, 200, 83, 0.04)",
        rankOther: "#2A2A3E",
        rankText: "#FFFFFF"
      };
}

function shareableAppFontFamily() {
  return window.getComputedStyle(document.body).fontFamily || "inherit";
}

function fitShareableText(text, startSize, minSize, maxWidth, weight = 800) {
  const canvas = fitShareableText.canvas || (fitShareableText.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  const family = shareableAppFontFamily();
  let size = startSize;
  while (size > minSize) {
    context.font = `${weight} ${size}px ${family}`;
    if (context.measureText(String(text || "")).width <= maxWidth) break;
    size -= 2;
  }
  return size;
}

function shareableRankCircleTone(index) {
  const tokens = shareableThemeTokens();
  if (index === 0) return { background: "#FFD700", color: "#0D0D1A" };
  if (index === 1) return { background: "#C0C0C0", color: "#0D0D1A" };
  if (index === 2) return { background: "#CD7F32", color: "#FFFFFF" };
  return { background: tokens.rankOther, color: tokens.rankText };
}

function shareableRankCircleMarkup(index) {
  const tone = shareableRankCircleTone(index);
  return `<span class="shareable-fixed-rank-circle" style="background:${tone.background};color:${tone.color};">${index + 1}</span>`;
}

function shareableFixedTeamBadgeMarkup(team) {
  return `<span class="home-team-badge shareable-fixed-team-badge" style="${homeTeamPillStyle(team)}">${escapeHtml(homeTeamAbbreviation(team))}</span>`;
}

function formatShareableGameDate(game) {
  const kickoffAt = kickoffTimestampForGame(game);
  if (!Number.isFinite(kickoffAt)) return "";
  return new Date(kickoffAt).toLocaleString([], { month: "short", day: "numeric" });
}

function formatShareableGameTime(game) {
  const kickoffAt = kickoffTimestampForGame(game);
  if (!Number.isFinite(kickoffAt)) return game?.kickoff || "";
  return new Date(kickoffAt).toLocaleString([], { hour: "numeric", minute: "2-digit" });
}

function formatShareableGameDateTime(game, detailed = false) {
  const kickoffAt = kickoffTimestampForGame(game);
  if (!Number.isFinite(kickoffAt)) return game?.kickoff || "";
  return new Date(kickoffAt).toLocaleString([], detailed
    ? { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" }
    : { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function formatShareableFixtureOption(game) {
  return `${game.homeTeam} vs ${game.awayTeam} · ${formatShareableGameDate(game)} · ${formatShareableGameTime(game)}`;
}

function playerSpotlightMarkup() {
  const market = getSelectedShareableMarket();
  if (!market) return "";
  const performance = quickPickPerformanceSummary(market);
  const seasonAverage = Number(performance.seasonAverageLabel);
  const metrics = getMarketTradeMetrics(market);
  const matchup = matchupContext(market);
  return `
    <div class="shareable-template shareable-template-player-spotlight ${uiState.adminShareableAspectRatio === "9:16" ? "has-depth" : ""}">
      ${shareableBrandingTopMarkup()}
      <div class="shareable-section-label">PLAYER SPOTLIGHT</div>
      <h2 class="shareable-player-name">${escapeHtml(market.playerName)}</h2>
      <div class="shareable-meta-row">${shareableTeamBadgeMarkup(market.team)}<span>${escapeHtml(market.position)}</span><span>${escapeHtml(`vs ${matchup.opponent}`)}</span></div>
      <div class="shareable-divider"></div>
      <section class="shareable-hero-stat">
        <span class="shareable-micro-label shareable-micro-label--accent">CROWD PROJECTION</span>
        <strong>${market.currentLine.toFixed(1)}</strong>
        <span class="shareable-subtext">Season avg ${performance.seasonAverageLabel}</span>
      </section>
      <section class="shareable-form-block">
        <span class="shareable-micro-label">LAST 5</span>
        <div class="shareable-last-five">
          ${performance.lastFive.map((entry) => {
            const score = Number(entry.score);
            const tone = entry.isMissing ? "is-missing" : score >= seasonAverage ? "is-up" : "is-down";
            return `<span class="shareable-last-five-pill ${tone}">${escapeHtml(entry.value)}</span>`;
          }).join("")}
        </div>
      </section>
      <section class="shareable-confidence-block">
        <span class="shareable-micro-label">MARKET CONFIDENCE</span>
        <div class="shareable-confidence-dial">${marketConfidenceMarkup(metrics.confidence, true)}</div>
      </section>
      ${shareableFooterMarkup()}
    </div>
  `;
}

function valueAlertMarkup() {
  const market = getSelectedShareableMarket();
  if (!market) return "";
  const ratio = uiState.adminShareableAspectRatio;
  const matchup = matchupContext(market);
  const performance = quickPickPerformanceSummary(market);
  const impliedScore = priceImpliedProjectionForMarket(market);
  const valueGap = Number.isFinite(impliedScore) ? roundToHalf(market.currentLine - impliedScore) : null;
  const specs = ratio === "9:16"
    ? {
        playerZoneTop: 100,
        playerZoneHeight: 320,
        playerStartSize: 88,
        playerMinSize: 54,
        heroTop: 420,
        heroHeight: 640,
        heroSize: 180,
        secondaryTop: 1060,
        secondaryHeight: 160,
        secondaryLabel: 14,
        secondaryValue: 22,
        footerDividerTop: 1870,
        footerTop: 1871,
        circleSize: 600,
        showSeason: true
      }
    : ratio === "3:4"
      ? {
          playerZoneTop: 100,
          playerZoneHeight: 280,
          playerStartSize: 80,
          playerMinSize: 50,
          heroTop: 380,
          heroHeight: 480,
          heroSize: 144,
          secondaryTop: 860,
          secondaryHeight: 120,
          secondaryLabel: 13,
          secondaryValue: 20,
          footerDividerTop: 1390,
          footerTop: 1391,
          circleSize: 500,
          showSeason: false
        }
      : {
          playerZoneTop: 100,
          playerZoneHeight: 220,
          playerStartSize: 72,
          playerMinSize: 44,
          heroTop: 322,
          heroHeight: 358,
          heroSize: 120,
          secondaryTop: 680,
          secondaryHeight: 80,
          secondaryLabel: 11,
          secondaryValue: 18,
          footerDividerTop: 1030,
          footerTop: 1031,
          circleSize: 0,
          showSeason: false
        };
  const nameSize = fitShareableText(market.playerName, specs.playerStartSize, specs.playerMinSize, 1016, 900);
  const tokens = shareableThemeTokens();
  return `
    <div class="shareable-fixed-template shareable-fixed-template--value-alert shareable-fixed-template--${ratio.replace(":", "-")}">
      ${shareableRebuiltChromeMarkup()}
      <div class="shareable-fixed-label" style="top:61px;">VALUE ALERT</div>
      <section class="shareable-fixed-player-zone" style="top:${specs.playerZoneTop}px;height:${specs.playerZoneHeight}px;">
        <h2 class="shareable-fixed-player-name" style="font-size:${nameSize}px;">${escapeHtml(market.playerName)}</h2>
        <div class="shareable-fixed-player-meta">${shareableFixedTeamBadgeMarkup(market.team)}<span>${escapeHtml(market.position)}</span><span>${escapeHtml(`vs ${homeTeamAbbreviation(matchup.opponent)}`)}</span></div>
      </section>
      <div class="shareable-fixed-divider" style="top:${ratio === "1:1" ? 320 : ratio === "3:4" ? 380 : 420}px;"></div>
      ${specs.circleSize ? `<div class="shareable-fixed-value-circle" style="width:${specs.circleSize}px;height:${specs.circleSize}px;top:${specs.heroTop + (specs.heroHeight / 2) - (specs.circleSize / 2)}px;background:${tokens.circle};"></div>` : ""}
      <section class="shareable-fixed-hero-zone" style="top:${specs.heroTop}px;height:${specs.heroHeight}px;">
        <span class="shareable-fixed-hero-label">POINTS ABOVE PRICE</span>
        <strong class="shareable-fixed-value-number" style="font-size:${specs.heroSize}px;">${Number.isFinite(valueGap) ? `${valueGap >= 0 ? "+" : ""}${valueGap.toFixed(1)}` : "--"}</strong>
      </section>
      <section class="shareable-fixed-secondary-metrics" style="top:${specs.secondaryTop}px;height:${specs.secondaryHeight}px;--label-size:${specs.secondaryLabel}px;--value-size:${specs.secondaryValue}px;">
        <div class="shareable-fixed-secondary-metric">
          <span>NRL Price</span>
          <strong class="is-secondary">${Number.isFinite(impliedScore) ? impliedScore.toFixed(1) : formatShareablePrice(market.fantasyPrice)}</strong>
        </div>
        <div class="shareable-fixed-secondary-metric">
          <span>CrowdIQ</span>
          <strong>${market.currentLine.toFixed(1)}</strong>
        </div>
      </section>
      ${specs.showSeason ? `<div class="shareable-fixed-season-average" style="top:${specs.secondaryTop + specs.secondaryHeight + 24}px;">Season avg ${escapeHtml(performance.seasonAverageLabel)}</div>` : ""}
    </div>
  `;
}

function matchPreviewMarkup() {
  const game = getSelectedShareableGame();
  if (!game) return "";
  const ratio = uiState.adminShareableAspectRatio;
  const count = ratio === "9:16" ? 7 : ratio === "3:4" ? 5 : 3;
  const rows = getGameMarkets(game.id)
    .filter((market) => marketRoundNumber(market) === activeRoundNumber())
    .slice()
    .sort((left, right) => right.currentLine - left.currentLine)
    .slice(0, count);
  const titleText = `${game.homeTeam} vs ${game.awayTeam}`;
  const titleSize = fitShareableText(titleText, ratio === "9:16" ? 44 : ratio === "3:4" ? 40 : 36, 24, 1016, 900);
  const titleParts = `
    ${shareableFixedTeamBadgeMarkup(game.homeTeam)}
    <span>${escapeHtml(game.homeTeam)}</span>
    <span>vs</span>
    <span>${escapeHtml(game.awayTeam)}</span>
    ${shareableFixedTeamBadgeMarkup(game.awayTeam)}
  `;
  const headerBottom = ratio === "9:16" ? 360 : ratio === "3:4" ? 320 : 280;
  const rowsStart = ratio === "9:16" ? 360 : ratio === "3:4" ? 320 : 311;
  const rowHeight = ratio === "9:16" ? 214.2857142857 : ratio === "3:4" ? 214 : 239;
  const footerDividerTop = ratio === "9:16" ? 1870 : ratio === "3:4" ? 1390 : 1030;
  const footerTop = ratio === "9:16" ? 1870 : ratio === "3:4" ? 1390 : 1031;
  const metaText = `${escapeHtml(game.venue || "")} · ${escapeHtml(formatShareableGameDateTime(game, ratio === "9:16"))}`;
  return `
    <div class="shareable-fixed-template shareable-fixed-template--match-preview shareable-fixed-template--${ratio.replace(":", "-")}">
      ${shareableRebuiltChromeMarkup()}
      <div class="shareable-fixed-label" style="top:61px;">MATCH PREVIEW</div>
      <section class="shareable-fixed-match-header-zone" style="top:100px;height:${headerBottom - 100}px;">
        <div class="shareable-fixed-match-title" style="font-size:${titleSize}px;">${titleParts}</div>
        <div class="shareable-fixed-match-meta">${metaText}</div>
      </section>
      <div class="shareable-fixed-divider" style="top:${headerBottom}px;"></div>
      <div class="shareable-fixed-column-header shareable-fixed-column-header--single" style="top:${headerBottom + 1}px;">CrowdIQ</div>
      <div class="shareable-fixed-divider" style="top:${headerBottom + (ratio === "1:1" ? 30 : ratio === "3:4" ? 40 : 40)}px;"></div>
      <section class="shareable-fixed-rows-zone" style="top:${rowsStart}px;">
        ${rows.map((market, index) => shareableMatchPreviewRowMarkup(market, index, game, rows.length, rowHeight, ratio)).join("")}
      </section>
    </div>
  `;
}

function shareableMatchPreviewRowMarkup(market, index, game, totalRows, rowHeight, ratio) {
  const top = rowHeight * index;
  const showContext = ratio !== "1:1";
  const bottomText = ratio === "9:16"
    ? `${escapeHtml(market.position)} · ${escapeHtml(formatShareableGameTime(game))}`
    : ratio === "3:4"
      ? `${escapeHtml(market.position)} · ${escapeHtml(`vs ${homeTeamAbbreviation(opponentForMarket(market))}`)}`
      : `${shareableFixedTeamBadgeMarkup(market.team)}<span>${escapeHtml(market.position)}</span>`;
  return `
    <div class="shareable-fixed-row shareable-fixed-row--match" style="top:${top}px;height:${rowHeight}px;">
      ${shareableRankCircleMarkup(index)}
      <div class="shareable-fixed-row-copy">
        <strong>${escapeHtml(market.playerName)}</strong>
        <div class="shareable-fixed-row-meta">
          ${ratio === "1:1" ? bottomText : `${shareableFixedTeamBadgeMarkup(market.team)}<span>${bottomText}</span>`}
        </div>
      </div>
      <strong class="shareable-fixed-row-value shareable-fixed-row-value--large">${market.currentLine.toFixed(1)}</strong>
      ${index < totalRows - 1 ? `<div class="shareable-fixed-row-divider"></div>` : ""}
    </div>
  `;
}

function roundRankingsValueMarkup() {
  const ratio = uiState.adminShareableAspectRatio;
  const count = ratio === "9:16" ? 7 : ratio === "3:4" ? 5 : 4;
  const rows = getHomeLeaderboardPreviewData().bestValue.slice(0, count);
  const headerStart = ratio === "9:16" ? 61 : 61;
  const headlineBottom = ratio === "9:16" ? 280 : ratio === "3:4" ? 240 : 200;
  const subtitleBottom = ratio === "9:16" ? 330 : ratio === "3:4" ? 290 : 240;
  const columnsTop = ratio === "9:16" ? 330 : ratio === "3:4" ? 290 : 241;
  const rowsTop = ratio === "9:16" ? 370 : ratio === "3:4" ? 320 : 271;
  const rowHeight = ratio === "9:16" ? 214.2857142857 : ratio === "3:4" ? 214 : 189.75;
  const footerDividerTop = ratio === "9:16" ? 1870 : ratio === "3:4" ? 1390 : 1030;
  const footerTop = ratio === "9:16" ? 1870 : ratio === "3:4" ? 1390 : 1031;
  return `
    <div class="shareable-fixed-template shareable-fixed-template--rankings-value shareable-fixed-template--${ratio.replace(":", "-")}">
      ${shareableRebuiltChromeMarkup()}
      <section class="shareable-fixed-headline-zone" style="top:${headerStart}px;height:${headlineBottom - headerStart}px;">
        <h2 class="shareable-fixed-headline" style="font-size:${ratio === "9:16" ? 80 : ratio === "3:4" ? 72 : 64}px;">TOP VALUE PICKS</h2>
      </section>
      <section class="shareable-fixed-subtitle-zone" style="top:${headlineBottom}px;height:${subtitleBottom - headlineBottom}px;">
        <p class="shareable-fixed-subtitle">Best projection gaps vs NRL Fantasy price</p>
      </section>
      <div class="shareable-fixed-divider" style="top:${subtitleBottom}px;"></div>
      <div class="shareable-fixed-column-header shareable-fixed-column-header--value" style="top:${columnsTop}px;">
        ${ratio !== "1:1" ? `<span class="shareable-fixed-column-opponent">Opponent</span>` : ""}
        <span class="shareable-fixed-column-price">NRL Price</span>
        <span class="shareable-fixed-column-crowd">CrowdIQ</span>
      </div>
      <div class="shareable-fixed-divider" style="top:${ratio === "9:16" ? 370 : ratio === "3:4" ? 320 : 270}px;"></div>
      <section class="shareable-fixed-rows-zone" style="top:${rowsTop}px;">
        ${rows.map((row, index) => shareableRankingsValueRowMarkup(row, index, rows.length, rowHeight, ratio)).join("")}
      </section>
    </div>
  `;
}

function shareableRankingsValueRowMarkup(row, index, totalRows, rowHeight, ratio) {
  const market = row.market || row;
  const top = rowHeight * index;
  const game = findGame(market.gameId);
  const opponent = opponentForMarket(market);
  const metaLine = `${shareableFixedTeamBadgeMarkup(market.team)}<span>${escapeHtml(market.position)}</span>`;
  const extraLine = ratio === "9:16"
    ? `${escapeHtml(`vs ${homeTeamAbbreviation(opponent)}`)} · ${escapeHtml(formatShareableGameTime(game))}`
    : ratio === "3:4"
      ? escapeHtml(`vs ${homeTeamAbbreviation(opponent)}`)
      : "";
  return `
    <div class="shareable-fixed-row shareable-fixed-row--value ${index % 2 === 1 ? "is-alt" : ""}" style="top:${top}px;height:${rowHeight}px;">
      ${shareableRankCircleMarkup(index)}
      <div class="shareable-fixed-row-copy">
        <strong>${escapeHtml(market.playerName)}</strong>
        <div class="shareable-fixed-row-meta">${metaLine}</div>
        ${extraLine ? `<div class="shareable-fixed-row-submeta">${extraLine}</div>` : ""}
      </div>
      ${ratio !== "1:1" ? `<span class="shareable-fixed-row-opponent">${escapeHtml(`vs ${homeTeamAbbreviation(opponent)}`)}</span>` : ""}
      <span class="shareable-fixed-row-price">${Number.isFinite(row.impliedScore) ? row.impliedScore.toFixed(1) : "--"}</span>
      <strong class="shareable-fixed-row-value">${market.currentLine.toFixed(1)}</strong>
      <strong class="shareable-fixed-row-gap">${row.value >= 0 ? "+" : ""}${Number(row.value).toFixed(1)}</strong>
      ${index < totalRows - 1 ? `<div class="shareable-fixed-row-divider"></div>` : ""}
    </div>
  `;
}

function roundRankingsProjectedMarkup() {
  const limit = uiState.adminShareableAspectRatio === "1:1" ? 4 : uiState.adminShareableAspectRatio === "3:4" ? 5 : 7;
  const rows = getHomeLeaderboardPreviewData().topProjected.slice(0, limit).map((market) => ({ market }));
  return `
    <div class="shareable-template shareable-template-rankings">
      ${shareableBrandingTopMarkup()}
      <h2 class="shareable-ranking-title">TOP PROJECTED</h2>
      <p class="shareable-ranking-subtitle">Highest crowd projections this round</p>
      <div class="shareable-divider"></div>
      <div class="shareable-list-header"><span></span><span>CrowdIQ</span></div>
      <div class="shareable-rank-list">
        ${rows.map((row, index) => `
          <div class="shareable-rank-row ${index % 2 === 1 ? "is-alt" : ""}">
            <span class="shareable-rank-circle ${homeRankTone(index)}">${index + 1}</span>
            <div class="shareable-rank-copy">
              <strong>${escapeHtml(row.market.playerName)}</strong>
              <span>${shareableTeamBadgeMarkup(row.market.team)}<span>${escapeHtml(row.market.position)}</span></span>
            </div>
            <strong class="shareable-rank-value">${row.market.currentLine.toFixed(1)}</strong>
          </div>
        `).join("")}
      </div>
      ${shareableFooterMarkup()}
    </div>
  `;
}

function formatShareablePrice(price) {
  const numeric = Number(price);
  if (!Number.isFinite(numeric) || numeric <= 0) return "--";
  if (numeric >= 1000) return `$${Math.round(numeric).toLocaleString()}`;
  return `${numeric.toFixed(1)}`;
}

function renderAdminMarkets() {
  const filteredMarkets = getAdminMarkets();
  const totalMarkets = getAdminRoundMarkets().length;
  elements.adminMarketControls.innerHTML = `<div><p class="panel-label">Visible markets</p><p class="section-meta">Showing ${filteredMarkets.length} of ${totalMarkets} markets. Defaults focus on open or moved markets to keep admin fast.</p></div><div class="portfolio-chip-row">${[
    ["ACTIVE", "Open only"],
    ["MOVED", "Moved"],
    ["ACTION", "Needs action"],
    ["ALL", "All"]
  ]
    .map(
      ([value, label]) =>
        `<button class="portfolio-chip ${uiState.adminMarketFilter === value ? "active" : ""}" type="button" data-admin-market-filter="${value}">${label}</button>`
    )
    .join("")}</div><div class="portfolio-chip-row">${[
    [12, "12"],
    [24, "24"],
    [48, "48"],
    [9999, "All"]
  ]
    .map(
      ([value, label]) =>
        `<button class="portfolio-chip ${uiState.adminMarketLimit === value ? "active" : ""}" type="button" data-admin-market-limit="${value}">${label}</button>`
    )
    .join("")}</div>`;
  elements.adminMarketList.innerHTML = filteredMarkets
    .map((market) => {
      const movement = getMovementText(market);
      const status = getMarketStatus(market);
      const tradeCount = market.trades.length;
      const availableLiquidity = market.totalOverStake + market.totalUnderStake;
      const liveExposure = getMarketTradeMetrics(market).liveExposure;
      const netPressure = Number(market.netPressure) || 0;
      return `<article class="admin-market-card"><p class="eyebrow">${gameTitleFor(market.gameId)} | ${market.team}</p><h3>${market.playerName}</h3><div class="position-grid">${positionMetric("Open", market.initialLine.toFixed(1))}${positionMetric("Current", market.currentLine.toFixed(1))}${positionMetric("Move", movement.label, movement.value)}${positionMetric("Trades", String(tradeCount))}${positionMetric("Live", formatStake(liveExposure))}${positionMetric("Avail", formatStake(availableLiquidity))}${positionMetric("Market lean", marketLeanLabel(netPressure))}${positionMetric("Status", status.label)}</div></article>`;
    })
    .join("") || `<div class="section-meta">No markets match that admin filter.</div>`;
}

function renderAdminDashboard() {
  if (!elements.adminDashboard) return;
  const summary = getAdminDashboardSummary();
  const cards = [
    adminDashboardCard("Total traded", formatStake(summary.totalTradedValue), `${summary.totalTrades} executed trades across the market`),
    adminDashboardCard("Matched live", formatStake(summary.liveExposure), `${summary.matchedOpenTrades} matched positions not settled yet`),
    adminDashboardCard("Available liquidity", formatStake(summary.availableLiquidity), `${summary.pendingTrades} unmatched orders still waiting to match`),
    adminDashboardCard("Market lean", marketLeanLabel(summary.netPressure), `${formatStake(summary.overPressure)} over vs ${formatStake(summary.underPressure)} under`),
    adminDashboardCard("Bot share", `${summary.botShare}%`, `${summary.botTrades} of ${summary.totalTrades} trades came from bots`),
    adminDashboardCard("Needs action", String(summary.marketsNeedingAction), `${summary.activeMarkets} open markets, ${summary.resolvedMarkets} resolved`),
    adminDashboardCard("Contact inbox", String(summary.contactMessageCount), `${summary.newContactMessageCount} new messages waiting for review`)
  ];
  if (summary.latestRoundMetrics) {
    const metrics = summary.latestRoundMetrics;
    cards.push(
      adminDashboardCard("Round profit", formatStake(metrics.roundProfit), `${metrics.roundLabel} | ${metrics.middleOutcomeCount} middle results with no user payout`),
      adminDashboardCard("Round matched", formatStake(metrics.totalMatchedVolume), `${metrics.roundLabel} | matched volume across settled trades`),
      adminDashboardCard("Round users", String(metrics.participatingUsers), `${metrics.roundLabel} | average spend ${formatStake(metrics.averageSpendPerUser)}`),
      adminDashboardCard("Avg spend / user", formatStake(metrics.averageSpendPerUser), `${metrics.roundLabel} | ${metrics.totalTrades} total trades placed`),
      adminDashboardCard("Unmatched volume", formatStake(metrics.unmatchedVolume), `${metrics.roundLabel} | unmatched orders left on the book at settlement`)
    );
  }
  elements.adminDashboard.innerHTML = cards.join("");
}

function renderAdminAnalyticsControls() {
  if (!elements.adminAnalyticsControls) return;
  if (!uiState.adminOpen) {
    elements.adminAnalyticsControls.innerHTML = "";
    return;
  }
  const options = [
    ["today", "Today"],
    ["7d", "Last 7 Days"],
    ["30d", "Last 30 Days"],
    ["all", "All Time"]
  ];
  elements.adminAnalyticsControls.innerHTML = options
    .map(([value, label]) => `<button class="portfolio-chip ${uiState.adminAnalyticsRange === value ? "active" : ""}" type="button" data-analytics-range="${value}">${label}</button>`)
    .join("");
}

function renderAdminAnalytics() {
  if (!elements.adminAnalyticsOverview || !elements.adminAnalyticsFunnel) return;
  if (!uiState.adminOpen) {
    elements.adminAnalyticsOverview.innerHTML = "";
    elements.adminAnalyticsFunnel.innerHTML = "";
    adminSignupsChart?.destroy();
    adminActiveUsersChart?.destroy();
    adminSourcesChart?.destroy();
    adminSignupsChart = null;
    adminActiveUsersChart = null;
    adminSourcesChart = null;
    return;
  }
  const overview = uiState.adminAnalyticsOverview;
  const returning = uiState.adminAnalyticsReturning;
  const funnel = uiState.adminAnalyticsFunnel;
  const loadingMarkup = `<div class="section-meta">Loading analytics…</div>`;
  elements.adminAnalyticsOverview.innerHTML = overview?.cards
    ? [
        adminAnalyticsCard(overview.cards.active_users),
        adminAnalyticsCard(overview.cards.signups),
        adminAnalyticsCard(overview.cards.visitors),
        adminAnalyticsCard(overview.cards.total_users),
        adminAnalyticsCard(overview.cards.trades),
        adminAnalyticsCard({
          ...overview.cards.return_rate,
          sparkline: Array.isArray(returning?.daily_return_rate) ? returning.daily_return_rate.map((entry) => Number(entry.rate) || 0) : (overview.cards.return_rate?.sparkline || [])
        })
      ].join("")
    : uiState.adminAnalyticsLoading ? loadingMarkup : `<div class="section-meta">Analytics data is not available yet.</div>`;
  elements.adminAnalyticsFunnel.innerHTML = funnel
    ? [
        adminDashboardCard("Total visitors", formatWholeNumber(funnel.total_unique_visitors), `Unique visitor sessions in ${formatAnalyticsRangeLabel(funnel.range?.label)}`),
        adminDashboardCard("Total signups", formatWholeNumber(funnel.total_signups), `Users who completed signup in ${formatAnalyticsRangeLabel(funnel.range?.label)}`),
        adminDashboardCard("Conversion rate", `${Number(funnel.conversion_rate || 0).toFixed(1)}%`, "Signups divided by unique visitors")
      ].join("")
    : uiState.adminAnalyticsLoading ? loadingMarkup : `<div class="section-meta">Open admin analytics to start loading data.</div>`;
  renderAdminAnalyticsCharts();
}

function renderAdminAnalyticsCharts() {
  const trends = uiState.adminAnalyticsTrends;
  const sources = uiState.adminAnalyticsSources;
  if (typeof window.Chart !== "function") return;
  const signupsSeries = Array.isArray(trends?.daily_signups) ? trends.daily_signups : [];
  const activeSeries = Array.isArray(trends?.daily_active_users) ? trends.daily_active_users : [];
  const labels = signupsSeries.map((entry) => formatChartDate(entry.date));
  adminSignupsChart = renderAdminLineChart(adminSignupsChart, elements.adminSignupsChart, {
    labels,
    label: "Daily Signups",
    data: signupsSeries.map((entry) => Number(entry.count) || 0)
  });
  adminActiveUsersChart = renderAdminLineChart(adminActiveUsersChart, elements.adminActiveUsersChart, {
    labels: activeSeries.map((entry) => formatChartDate(entry.date)),
    label: "Daily Active Users",
    data: activeSeries.map((entry) => Number(entry.count) || 0)
  });
  adminSourcesChart = renderAdminBarChart(adminSourcesChart, elements.adminSourcesChart, {
    labels: Array.isArray(sources?.sources) ? sources.sources.map((entry) => entry.source) : [],
    label: "Sessions",
    data: Array.isArray(sources?.sources) ? sources.sources.map((entry) => Number(entry.sessions) || 0) : []
  });
}

function renderAdminLineChart(existingChart, canvas, { labels, label, data }) {
  if (!canvas || typeof window.Chart !== "function") return existingChart;
  existingChart?.destroy();
  const styles = getComputedStyle(document.documentElement);
  const lineColor = styles.getPropertyValue("--color-accent").trim() || "#68d9ff";
  const gridColor = styles.getPropertyValue("--border-subtle").trim() || "rgba(255,255,255,0.12)";
  const textColor = styles.getPropertyValue("--text-secondary").trim() || "rgba(255,255,255,0.72)";
  return new window.Chart(canvas.getContext("2d"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label,
        data,
        borderColor: lineColor,
        backgroundColor: "transparent",
        borderWidth: 2,
        tension: 0.35,
        pointRadius: 0,
        pointHoverRadius: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor,
            maxRotation: 0,
            autoSkip: true
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor,
            precision: 0
          }
        }
      }
    }
  });
}

function renderAdminBarChart(existingChart, canvas, { labels, label, data }) {
  if (!canvas || typeof window.Chart !== "function") return existingChart;
  existingChart?.destroy();
  const styles = getComputedStyle(document.documentElement);
  const fillColor = styles.getPropertyValue("--color-accent").trim() || "#68d9ff";
  const gridColor = styles.getPropertyValue("--border-subtle").trim() || "rgba(255,255,255,0.12)";
  const textColor = styles.getPropertyValue("--text-secondary").trim() || "rgba(255,255,255,0.72)";
  return new window.Chart(canvas.getContext("2d"), {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label,
        data,
        backgroundColor: fillColor,
        borderRadius: 8,
        maxBarThickness: 48
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: textColor
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor,
            precision: 0
          }
        }
      }
    }
  });
}

function adminAnalyticsCard(card) {
  if (!card) return "";
  return `<article class="admin-dashboard-card admin-analytics-card"><p class="panel-label">${escapeHtml(card.label || "")}</p><strong>${escapeHtml(String(card.display_value ?? ""))}</strong><div class="admin-analytics-card-row"><span class="admin-analytics-comparison ${comparisonClassName(card.comparison)}">${escapeHtml(formatComparisonLabel(card.comparison))}</span>${sparklineMarkup(card.sparkline)}</div><p class="section-meta">${escapeHtml(card.meta || "")}</p></article>`;
}

function sparklineMarkup(points) {
  if (!Array.isArray(points) || !points.length) {
    return `<span class="admin-sparkline admin-sparkline-empty" aria-hidden="true"></span>`;
  }
  const width = 88;
  const height = 24;
  const normalized = points.map((value) => Number(value) || 0);
  const min = Math.min(...normalized);
  const max = Math.max(...normalized);
  const range = max - min || 1;
  const path = normalized.map((value, index) => {
    const x = normalized.length === 1 ? width / 2 : (index / (normalized.length - 1)) * width;
    const y = height - (((value - min) / range) * (height - 4)) - 2;
    return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(" ");
  return `<svg class="admin-sparkline" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true"><path d="${path}"></path></svg>`;
}

function comparisonClassName(comparison) {
  if (!comparison || !comparison.direction) return "is-flat";
  return comparison.direction === "up" ? "is-up" : comparison.direction === "down" ? "is-down" : "is-flat";
}

function formatComparisonLabel(comparison) {
  if (!comparison || comparison.percentage == null || comparison.direction === "flat") {
    return "—";
  }
  return comparison.label || "—";
}

function formatAnalyticsRangeLabel(label) {
  return String(label || "the selected range").toLowerCase();
}

function formatWholeNumber(value) {
  return WHOLE_NUMBER_FORMATTER.format(Number(value) || 0);
}

function formatChartDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00Z`);
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
}

async function refreshAdminAffiliates() {
  if (!uiState.adminOpen || !hasAdminAccess()) return;
  uiState.adminAffiliatesLoading = true;
  uiState.adminAffiliatesError = "";
  renderAdminAffiliates();
  try {
    const payload = await apiGet("/api/admin/affiliates");
    uiState.adminAffiliates = Array.isArray(payload?.affiliates) ? payload.affiliates : [];
    uiState.adminAffiliateReferrals = Array.isArray(payload?.referrals) ? payload.referrals : [];
    uiState.adminAffiliatesLoaded = true;
  } catch (error) {
    if (String(error.message || "").toLowerCase().includes("admin access")) {
      window.sessionStorage.removeItem(ADMIN_ACCESS_KEY);
      uiState.adminOpen = false;
      stopAdminAnalyticsPolling();
    }
    uiState.adminAffiliatesError = error.message || "Unable to load affiliate data.";
  } finally {
    uiState.adminAffiliatesLoading = false;
    renderAdminAffiliates();
    renderAdminShell();
  }
}

function renderAdminAffiliates() {
  if (!elements.adminAffiliateSummary || !elements.adminAffiliateReferralsBody || !elements.adminAffiliateFeedback) return;
  if (!uiState.adminOpen) {
    elements.adminAffiliateSummary.innerHTML = "";
    elements.adminAffiliateReferralsBody.innerHTML = "";
    elements.adminAffiliateFeedback.textContent = "";
    return;
  }
  if (uiState.adminActiveTab !== "affiliates") {
    return;
  }
  if (uiState.adminAffiliatesLoading) {
    elements.adminAffiliateFeedback.textContent = "Loading affiliate signups…";
    elements.adminAffiliateSummary.innerHTML = "";
    elements.adminAffiliateReferralsBody.innerHTML = "";
    return;
  }
  if (uiState.adminAffiliatesError) {
    elements.adminAffiliateFeedback.textContent = uiState.adminAffiliatesError;
    elements.adminAffiliateSummary.innerHTML = "";
    elements.adminAffiliateReferralsBody.innerHTML = "";
    return;
  }
  elements.adminAffiliateFeedback.textContent = "";
  const affiliates = Array.isArray(uiState.adminAffiliates) ? uiState.adminAffiliates : [];
  const referrals = Array.isArray(uiState.adminAffiliateReferrals) ? uiState.adminAffiliateReferrals : [];
  const totalReferredSignups = referrals.length;
  elements.adminAffiliateSummary.innerHTML = [
    adminDashboardCard("Tracked affiliates", String(affiliates.length), "Affiliate codes currently registered"),
    adminDashboardCard("Total referred signups", String(totalReferredSignups), "Users permanently linked at signup"),
    ...affiliates.map((affiliate) => adminDashboardCard(affiliate.name || affiliate.code, String(Number(affiliate.total_signups) || 0), `${affiliate.code || "unknown"} signups`))
  ].join("");
  elements.adminAffiliateReferralsBody.innerHTML = referrals.length
    ? referrals
      .map((referral) => `<tr><td>${escapeHtml(referral.affiliate_name || referral.affiliate_code || "")}</td><td>${escapeHtml(referral.username || "(unknown user)")}</td><td>${escapeHtml(formatAffiliateSignupDate(referral.referred_at))}</td></tr>`)
      .join("")
    : `<tr><td colspan="3" class="section-meta">No referred signups have been captured yet.</td></tr>`;
}

function formatAffiliateSignupDate(value) {
  if (!value) return "—";
  const timestamp = new Date(value).getTime();
  if (!Number.isFinite(timestamp)) return "—";
  return formatTimestamp(value);
}

function trackMarketViewed(marketId, source = "markets") {
  const market = findMarket(marketId);
  if (!market) return;
  const nextKey = String(market.id);
  const now = Date.now();
  if (marketViewTrackKey === nextKey && now - marketViewTrackedAt < 15000) return;
  marketViewTrackKey = nextKey;
  marketViewTrackedAt = now;
  void api("/api/analytics/market-view", {
    marketId: market.id,
    source
  }, {
    includeUserName: isAuthenticated()
  }).catch(() => {});
}

function skipQuickTake(marketId, card) {
  const activeCardId = getActiveQuickTakeMarketId();
  if (!marketId || marketId !== activeCardId || uiState.quickPickPendingRequestId) return;
  uiState.quickPickPendingCardId = marketId;
  uiState.quickPickPendingSide = "SKIP";
  renderQuickTake();
  card?.classList.add("is-exit-under");
  window.setTimeout(() => {
    uiState.quickPickPendingCardId = "";
    uiState.quickPickPendingSide = "";
    moveQuickTakeToBack(marketId);
    renderQuickTake();
  }, 120);
}

async function submitContactForm() {
  try {
    const response = await api("/api/contact", {
      userName: currentUserName(),
      email: uiState.contactEmailDraft,
      message: uiState.contactMessageDraft
    });
    applySharedSnapshot({ ...response, backend: backendState, prizePool: prizePoolState });
    uiState.contactFormSubmitted = true;
    uiState.contactFormFeedback = "";
    uiState.contactMessageDraft = "";
    renderAppChrome();
    renderAdminDashboard();
    renderAdminContactInbox();
  } catch (error) {
    uiState.contactFormSubmitted = false;
    uiState.contactFormFeedback = error.message;
    renderAppChrome();
  }
}

function currentChallengeShareId() {
  const match = window.location.pathname.match(/^\/challenge\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : "";
}

function syncChallengeRouteFromLocation() {
  uiState.challengeRouteShareId = currentChallengeShareId();
}

function isChallengeRouteActive() {
  return Boolean(uiState.challengeRouteShareId);
}

async function maybeLoadChallengeRoute(force = false) {
  const shareId = uiState.challengeRouteShareId;
  if (!shareId) {
    uiState.challengeRouteLoading = false;
    uiState.challengeRouteError = "";
    uiState.challengeRouteSession = null;
    uiState.challengeRouteIndex = 0;
    uiState.challengeRouteReview = [];
    uiState.challengeRouteAuthMode = "";
    uiState.challengeRouteAuthDraft = "";
    uiState.challengeRouteAuthPending = false;
    uiState.challengeRouteAuthError = "";
    return;
  }
  if (!force && uiState.challengeRouteSession && uiState.challengeRouteSession.shareId === shareId) {
    return;
  }
  uiState.challengeRouteLoading = true;
  uiState.challengeRouteError = "";
  try {
    const previousReview = uiState.challengeRouteReview.slice();
    const previousIndex = uiState.challengeRouteIndex;
    const session = await apiGet(`/api/share/${encodeURIComponent(shareId)}`);
    uiState.challengeRouteSession = {
      ...session,
      shareId
    };
    const nextReview = previousReview.slice();
    (session.trades || []).forEach((trade) => {
      if (nextReview.some((entry) => entry.tradeId === trade.id)) return;
      nextReview.push({
        tradeId: trade.id,
        playerName: trade.market?.player_name || "Unknown player",
        status: "pending"
      });
    });
    uiState.challengeRouteReview = nextReview;
    uiState.challengeRouteIndex = force ? Math.min(previousIndex, Math.max((session.trades || []).length - 1, 0)) : 0;
    uiState.challengeRouteAuthError = "";
  } catch (error) {
    uiState.challengeRouteSession = null;
    uiState.challengeRouteError = error.message;
  } finally {
    uiState.challengeRouteLoading = false;
  }
}

function redirectToPendingChallengeIfNeeded() {
  const shareId = localStorage.getItem(PENDING_CHALLENGE_KEY);
  if (!shareId) {
    return;
  }
  localStorage.removeItem(PENDING_CHALLENGE_KEY);
  window.location.href = `/challenge/${encodeURIComponent(shareId)}`;
}

function beginChallengeAuthRedirect(mode = "signup") {
  if (uiState.challengeRouteShareId) {
    localStorage.setItem(PENDING_CHALLENGE_KEY, uiState.challengeRouteShareId);
  }
  openAuthPrompt(mode);
}

function resetChallengeModalState() {
  uiState.challengeModalStep = "link";
  uiState.challengeSelectedTradeIds = [];
  uiState.challengeCreatePending = false;
  uiState.challengeCreateError = "";
  uiState.challengeCreatedUrl = "";
  uiState.challengeCreatedTradeCount = 0;
  uiState.challengeExcludedTradeCount = 0;
  uiState.challengeCopyStateUntil = 0;
}

function getEligibleChallengeTrades() {
  return getUserTrades(currentUserName())
    .filter((trade) => (Number(trade.unmatchedStake) || 0) > 0 && !trade.result)
    .map((trade) => {
      const market = findMarket(trade.marketId);
      return market && !isMarketLocked(market) && marketRoundNumber(market) === activeRoundNumber() ? { ...trade, market } : null;
    })
    .filter(Boolean)
    .sort((left, right) => new Date(right.timestamp || 0) - new Date(left.timestamp || 0));
}

function formatChallengeTradeDirection(trade) {
  const line = trade.side === "OVER"
    ? Number(trade.entryOverLine ?? trade.entryLine)
    : Number(trade.entryUnderLine ?? trade.entryLine);
  return `${trade.side === "OVER" ? "Over" : "Under"} ${line.toFixed(1)}`;
}

function oppositeChallengeDirection(trade) {
  const line = trade.side === "OVER"
    ? Number(trade.entryUnderLine ?? trade.entryLine)
    : Number(trade.entryOverLine ?? trade.entryLine);
  return `${trade.side === "OVER" ? "Under" : "Over"} ${line.toFixed(1)}`;
}

function currentChallengeTradeRecord() {
  const trades = uiState.challengeRouteSession?.trades || [];
  return trades[uiState.challengeRouteIndex] || null;
}

function renderAdminContactInbox() {
  if (!elements.adminContactList) return;
  const messages = getContactMessages();
  if (!messages.length) {
    elements.adminContactList.innerHTML = `<div class="section-meta">No contact messages have been submitted yet.</div>`;
    return;
  }
  elements.adminContactList.innerHTML = messages
    .map(
      (entry) => `<article class="admin-contact-card"><div class="admin-contact-card-head"><div><strong>${escapeHtml(entry.email)}</strong>${entry.userName ? `<span class="admin-contact-user">Signed in as ${escapeHtml(entry.userName)}</span>` : `<span class="admin-contact-user">Guest submission</span>`}</div><span class="status-chip status-open">${escapeHtml(entry.status || "NEW")}</span></div><p class="admin-contact-message">${escapeHtml(entry.message)}</p><p class="section-meta">${formatContactTimestamp(entry.submittedAt)}</p></article>`
    )
    .join("");
}

function renderBotSimulation() {
  if (!elements.botSummary || !state.botSimulation) return;
  const config = state.botSimulation.config || {};
  const logs = config.logs || [];
  const bots = state.botSimulation.bots || [];
  const displayLogs = logs.map((log) => ({ ...log }));
  const botCount = bots.length;
  const activeBotCount = bots.filter((bot) => getDisplayedCash(bot.userName) >= 1).length;
  const totalBotBankroll = bots.reduce((sum, bot) => sum + getDisplayedCash(bot.userName), 0);
  const performance = getBotPerformanceSummary();
  elements.botSummary.innerHTML = `${positionMetric("Bots", String(botCount))}${positionMetric("Active", String(activeBotCount))}${positionMetric("Bot bankroll", formatStake(totalBotBankroll))}${positionMetric("Settled P/L", formatSignedStake(performance.totalRealizedProfit), performance.totalRealizedProfit)}${positionMetric("Recent events", String(displayLogs.length))}${positionMetric("Settled trades", String(performance.totalSettledTrades))}`;
  if (elements.botPerformanceList) {
    elements.botPerformanceList.innerHTML = performance.bots.length
      ? performance.bots
          .map(
            (row, index) =>
              `<article class="bot-performance-row"><div class="bot-performance-cell bot-performance-bot"><span class="bot-performance-label">Bot</span><div><p class="eyebrow">#${index + 1} Random Prob</p><h4>${row.userName}</h4></div></div><div class="bot-performance-cell"><span class="bot-performance-label">P/L</span><strong class="bot-performance-value ${row.realizedProfit > 0 ? "positive" : row.realizedProfit < 0 ? "negative" : ""}">${formatSignedStake(row.realizedProfit)}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Bankroll</span><strong class="bot-performance-value">${formatStake(row.bankroll)}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">ROI</span><strong class="bot-performance-value ${row.realizedProfit > 0 ? "positive" : row.realizedProfit < 0 ? "negative" : ""}">${formatPercentage(row.roi)}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Win rate</span><strong class="bot-performance-value">${row.winRate}%</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Settled</span><strong class="bot-performance-value">${row.settledTrades}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Open exp.</span><strong class="bot-performance-value">${formatStake(row.openExposure)}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Avg stake</span><strong class="bot-performance-value">${formatStake(row.averageSettledStake)}</strong></div></article>`
          )
          .join("")
      : `<div class="section-meta">Bot results will appear here once trades have been placed.</div>`;
  }
  elements.botLog.innerHTML = displayLogs.length
    ? displayLogs
        .slice(0, 12)
        .map(
          (log) =>
            `<article class="bot-log-card"><div class="bot-log-head"><strong>${log.botName}</strong><span>Tick ${log.tick}</span></div><p>${log.playerName} Â· ${log.side} Â· Edge ${Number(log.edge).toFixed(1)}</p><span>${log.reason}</span></article>`
        )
        .join("")
    : `<div class="section-meta">No bot events yet. Create a bot to start autonomous Quick Pick activity.</div>`;
}

function renderAdminTable() {
  const trades = getAdminTrades();
  const allTradesCount = getAdminRoundMarkets().reduce((sum, market) => sum + market.trades.length, 0);
  elements.adminTradeControls.innerHTML = `<div><p class="panel-label">Visible trades</p><p class="section-meta">Showing ${trades.length} of ${allTradesCount} trades. Default view prioritizes open and recent activity.</p></div><div class="portfolio-chip-row">${[
    ["OPEN", "Open"],
    ["BOTS", "Bots"],
    ["HUMANS", "Humans"],
    ["SETTLED", "Settled"],
    ["ALL", "All"]
  ]
    .map(
      ([value, label]) =>
        `<button class="portfolio-chip ${uiState.adminTradeFilter === value ? "active" : ""}" type="button" data-admin-trade-filter="${value}">${label}</button>`
    )
    .join("")}</div><div class="portfolio-chip-row">${[
    [25, "25"],
    [60, "60"],
    [120, "120"],
    [9999, "All"]
  ]
    .map(
      ([value, label]) =>
        `<button class="portfolio-chip ${uiState.adminTradeLimit === value ? "active" : ""}" type="button" data-admin-trade-limit="${value}">${label}</button>`
    )
    .join("")}</div>`;
  const rows = trades
    .map(({ trade, market }) => {
      const profit = trade.result ? trade.result.profit : null;
      const status = trade.result ? trade.result.outcome : getTradeStatus(trade).label;
      return `<tr><td>${trade.userName}</td><td>${market.playerName}</td><td>${trade.side}</td><td>${formatStake(trade.stake)}</td><td>${trade.entryLine.toFixed(1)}</td><td>${market.currentLine.toFixed(1)}</td><td>${status}</td><td>${trade.result ? formatTradeFinalScore(trade.result) : "-"}</td><td class="${profit > 0 ? "positive" : profit < 0 ? "negative" : ""}">${trade.result ? formatSignedStake(profit) : "Unmatched"}</td></tr>`;
    });
  elements.positionsBody.innerHTML = rows.join("") || `<tr><td colspan="9">No trades yet.</td></tr>`;
}

function getAdminMarkets() {
  const sortedMarkets = getAdminRoundMarkets()
    .slice()
    .sort((left, right) => adminMarketRank(right) - adminMarketRank(left));
  const filteredMarkets = sortedMarkets.filter((market) => {
    if (uiState.adminMarketFilter === "ACTIVE") return isMarketOpen(market);
    if (uiState.adminMarketFilter === "MOVED") return Math.abs(getMovementValue(market)) >= 1;
    if (uiState.adminMarketFilter === "ACTION") return !market.settlement && (market.manuallyLocked || market.trades.length > 0 || Math.abs(getMovementValue(market)) >= 1);
    return true;
  });
  return filteredMarkets.slice(0, uiState.adminMarketLimit);
}

function adminMarketRank(market) {
  const openBonus = isMarketOpen(market) ? 1000 : 0;
  const actionBonus = market.manuallyLocked ? 300 : 0;
  const movementScore = Math.abs(getMovementValue(market)) * 100;
  const tradeScore = market.trades.length * 10;
  const exposureScore = (market.totalOverStake + market.totalUnderStake) * 2;
  return openBonus + actionBonus + movementScore + tradeScore + exposureScore;
}

function getAdminTrades() {
  const trades = getAdminRoundMarkets().flatMap((market) =>
    market.trades.map((trade) => ({ trade, market }))
  );
  const filteredTrades = trades
    .filter(({ trade }) => {
      const isBot = isBotTrade(trade);
      const isOpen = !trade.result;
      if (uiState.adminTradeFilter === "OPEN") return isOpen;
      if (uiState.adminTradeFilter === "BOTS") return isBot;
      if (uiState.adminTradeFilter === "HUMANS") return !isBot;
      if (uiState.adminTradeFilter === "SETTLED") return Boolean(trade.result);
      return true;
    })
    .sort((left, right) => new Date(right.trade.timestamp) - new Date(left.trade.timestamp));
  return filteredTrades.slice(0, uiState.adminTradeLimit);
}

function isBotTrade(trade) {
  if (!trade) return false;
  if (trade.botId || trade.botSource || trade.archetype) return true;
  return getBotRosterMap().has(trade.userName)
    || isGeneratedBotName(trade.userName)
    || trade.userName?.startsWith("Bot ")
    || trade.userName?.includes(" Bot ");
}

function getAdminDashboardSummary() {
  const adminRoundMarkets = getAdminRoundMarkets();
  const allTrades = adminRoundMarkets.flatMap((market) => market.trades || []);
  const latestRoundMetrics = getLatestRoundMetrics();
  const totalTradedValue = allTrades.reduce((sum, trade) => sum + (Number(trade.stake) || 0), 0);
  const openTrades = allTrades.filter((trade) => !trade.result);
  const liveExposure = openTrades.reduce((sum, trade) => sum + (Number(trade.matchedStake) || 0), 0);
  const availableLiquidity = openTrades.reduce((sum, trade) => sum + (Number(trade.unmatchedStake) || 0), 0);
  const matchedOpenTrades = openTrades.filter((trade) => (Number(trade.matchedStake) || 0) > 0).length;
  const pendingTrades = openTrades.filter((trade) => (Number(trade.unmatchedStake) || 0) > 0).length;
  const overPressure = adminRoundMarkets.reduce((sum, market) => sum + Math.max(0, Number(market.netPressure) || 0), 0);
  const underPressure = adminRoundMarkets.reduce((sum, market) => sum + Math.max(0, -(Number(market.netPressure) || 0)), 0);
  const netPressure = overPressure - underPressure;
  const botTrades = allTrades.filter((trade) => isBotTrade(trade)).length;
  const activeMarkets = adminRoundMarkets.filter((market) => !market.settlement).length;
  const resolvedMarkets = adminRoundMarkets.length - activeMarkets;
  const marketsNeedingAction = adminRoundMarkets.filter((market) => adminMarketRank(market) >= 300).length;
  const botShare = allTrades.length ? Math.round((botTrades / allTrades.length) * 100) : 0;
  const contactMessages = getContactMessages();

  return {
    totalTrades: allTrades.length,
    totalTradedValue,
    openTrades: openTrades.length,
    liveExposure,
    availableLiquidity,
    matchedOpenTrades,
    pendingTrades,
    overPressure,
    underPressure,
    netPressure,
    botTrades,
    botShare,
    activeMarkets,
    resolvedMarkets,
    marketsNeedingAction,
    contactMessageCount: contactMessages.length,
    newContactMessageCount: contactMessages.filter((entry) => (entry.status || "NEW") === "NEW").length,
    latestRoundMetrics
  };
}

function getLatestRoundMetrics() {
  const metrics = Array.isArray(state.roundMetricsHistory) ? state.roundMetricsHistory.slice() : [];
  return metrics.sort((left, right) => new Date(right.settledAt || 0) - new Date(left.settledAt || 0))[0] || null;
}

function getBotPerformanceSummary() {
  const botMap = getBotRosterMap();
  const botRows = new Map();
  const allBotLogs = state.botSimulation?.config?.logs || [];
  botMap.forEach((bot, userName) => {
    botRows.set(userName, {
      userName,
      archetype: bot.archetype || "random-prob",
      archetypeLabel: labelForBotArchetype(bot.archetype, bot),
      bankroll: getDisplayedCash(userName),
      settledTrades: 0,
      wins: 0,
      realizedProfit: 0,
      settledStake: 0,
      openExposure: 0,
      loggedEdges: []
    });
  });
  getLikelyBotUserNames().forEach((userName) => {
    if (botRows.has(userName)) return;
    botRows.set(userName, {
      userName,
      archetype: "random-prob",
      archetypeLabel: "Random Prob",
      bankroll: getDisplayedCash(userName),
      settledTrades: 0,
      wins: 0,
      realizedProfit: 0,
      settledStake: 0,
      openExposure: 0,
      loggedEdges: []
    });
  });
  const allBotTrades = state.markets.flatMap((market) =>
    (market.trades || [])
      .filter((trade) => isBotTrade(trade))
      .map((trade) => ({ trade }))
  );
  allBotTrades.forEach(({ trade }) => {
    const bot = botMap.get(trade.userName);
    const archetypeKey = bot?.archetype || trade.archetype || "random-prob";
    const archetypeLabel = labelForBotArchetype(archetypeKey, bot);
    if (!botRows.has(trade.userName)) {
      botRows.set(trade.userName, {
        userName: trade.userName,
        archetype: archetypeKey,
        archetypeLabel,
        bankroll: getDisplayedCash(trade.userName),
        settledTrades: 0,
        wins: 0,
        realizedProfit: 0,
        settledStake: 0,
        openExposure: 0,
        loggedEdges: []
      });
    }
    const row = botRows.get(trade.userName);
    const activeStake = getTradeExposureStake(trade);
    if (trade.result) {
      row.settledTrades += 1;
      row.realizedProfit += Number(trade.result.profit) || 0;
      row.settledStake += activeStake;
      if (trade.result.outcome === "WIN") {
        row.wins += 1;
      }
    } else {
      row.openExposure += (Number(trade.matchedStake) || 0) + (Number(trade.unmatchedStake) || 0);
    }
  });
  allBotLogs.forEach((log) => {
    const row = botRows.get(log.botName);
    if (row && Number.isFinite(Number(log.edge))) {
      row.loggedEdges.push(Number(log.edge));
    }
  });
  const bots = [...botRows.values()]
    .map((row) => {
      const roi = row.settledStake ? row.realizedProfit / row.settledStake : 0;
      return {
        ...row,
        winRate: row.settledTrades ? Math.round((row.wins / row.settledTrades) * 100) : 0,
        roi,
        averageSettledStake: row.settledTrades ? row.settledStake / row.settledTrades : 0,
        averageLoggedEdge: row.loggedEdges.length
          ? row.loggedEdges.reduce((sum, value) => sum + value, 0) / row.loggedEdges.length
          : 0
      };
    })
    .sort((left, right) => {
      if (right.realizedProfit !== left.realizedProfit) return right.realizedProfit - left.realizedProfit;
      if (right.roi !== left.roi) return right.roi - left.roi;
      if (right.winRate !== left.winRate) return right.winRate - left.winRate;
      return right.bankroll - left.bankroll;
    });
  const archetypeMap = new Map();
  bots.forEach((row) => {
    if (!archetypeMap.has(row.archetype)) {
      archetypeMap.set(row.archetype, {
        archetype: row.archetype,
        label: row.archetypeLabel,
        botCount: 0,
        settledTrades: 0,
        wins: 0,
        realizedProfit: 0,
        settledStake: 0,
        openExposure: 0
      });
    }
    const summary = archetypeMap.get(row.archetype);
    summary.botCount += 1;
    summary.settledTrades += row.settledTrades;
    summary.wins += row.wins;
    summary.realizedProfit += row.realizedProfit;
    summary.settledStake += row.settledStake;
    summary.openExposure += row.openExposure;
  });
  const archetypes = [...archetypeMap.values()]
    .map((row) => ({
      ...row,
      winRate: row.settledTrades ? Math.round((row.wins / row.settledTrades) * 100) : 0,
      roi: row.settledStake ? row.realizedProfit / row.settledStake : 0
    }))
    .sort((left, right) => {
      if (right.realizedProfit !== left.realizedProfit) return right.realizedProfit - left.realizedProfit;
      if (right.roi !== left.roi) return right.roi - left.roi;
      return right.botCount - left.botCount;
    });
  return {
    bots,
    archetypes,
    totalRealizedProfit: bots.reduce((sum, row) => sum + row.realizedProfit, 0),
    totalSettledTrades: bots.reduce((sum, row) => sum + row.settledTrades, 0)
  };
}

function getBotRosterMap() {
  return new Map((state.botSimulation?.bots || []).map((bot) => [bot.userName, bot]));
}

function isGeneratedBotName(userName) {
  const trimmed = String(userName || "").trim();
  if (!trimmed) return false;
  const [first, second, ...rest] = trimmed.split(/\s+/);
  if (rest.length) return false;
  return BOT_NAME_PREFIXES.has(String(first || "").toLowerCase()) && BOT_NAME_SUFFIXES.has(String(second || "").toLowerCase());
}

function getLikelyBotUserNames() {
  const names = new Set();
  Object.keys(state.bankrolls || {}).forEach((userName) => {
    if (isGeneratedBotName(userName)) {
      names.add(userName);
    }
  });
  return [...names];
}

function getTradeExposureStake(trade) {
  const matchedStake = Number(trade.matchedStake) || 0;
  const refundedStake = Number(trade.refundedStake) || 0;
  if (matchedStake || refundedStake) {
    return matchedStake + refundedStake;
  }
  return (Number(trade.stake) || 0) + refundedStake;
}

function labelForBotArchetype(archetypeKey, bot = null) {
  const rawLabel = bot?.config?.baseLabel || bot?.config?.label || archetypeKey || "Random Prob";
  return String(rawLabel)
    .replace(/\s+Variant$/i, "")
    .replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

function adminDashboardCard(label, value, meta) {
  return `<article class="admin-dashboard-card"><p class="panel-label">${label}</p><strong>${value}</strong><p class="section-meta">${meta}</p></article>`;
}

async function saveActiveRound() {
  try {
    const roundNumber = Number(elements.adminRoundSelect?.value);
    const response = await api("/api/admin/active-round", { roundNumber });
    applySharedSnapshot({ ...response, backend: backendState, prizePool: response.prizePool ?? prizePoolState });
    renderAll();
    if (elements.adminRoundFeedback) {
      elements.adminRoundFeedback.textContent = `${activeRoundLabel()} is now active in admin tools.`;
    }
    refreshSharedState();
  } catch (error) {
    if (elements.adminRoundFeedback) {
      elements.adminRoundFeedback.textContent = error.message;
    }
  }
}

async function saveLines() {
  try {
    const response = await api("/api/admin/lines", {
      marketId: elements.openingMarket.value,
      openingLine: Number(elements.openingLineInput.value),
      currentLine: Number(elements.currentLineInput.value)
    });
    applySharedSnapshot({ ...response, backend: backendState, prizePool: prizePoolState });
    renderAll();
    elements.openingFeedback.textContent = `${findMarket(elements.openingMarket.value)?.playerName ?? "Market"} updated.`;
    refreshSharedState();
  } catch (error) {
    elements.openingFeedback.textContent = error.message;
  }
}

async function settleMarket() {
  try {
    const settledMarketId = elements.settlementMarket.value;
    const response = await api("/api/admin/settle", {
      marketId: settledMarketId,
      finalScore: Number(elements.finalScoreInput.value)
    });
    applySharedSnapshot({ ...response, backend: backendState, prizePool: prizePoolState });
    renderAll();
    elements.finalScoreInput.value = "";
    elements.settlementFeedback.textContent = `${findMarket(settledMarketId)?.playerName ?? "Market"} settled.`;
    refreshSharedState();
  } catch (error) {
    elements.settlementFeedback.textContent = error.message;
  }
}

async function settleCurrentRoundFromImportedScores() {
  try {
    const response = await api("/api/admin/settle-round", {});
    applySharedSnapshot({ ...response, backend: backendState, prizePool: prizePoolState });
    renderAll();
    const settledCount = response.settlementBatch?.settledCount ?? 0;
    const scoredCount = response.settlementBatch?.scoredCount ?? 0;
    const voidCount = response.settlementBatch?.voidCount ?? 0;
    const roundMetrics = response.settlementBatch?.roundMetrics;
    const baseMessage = voidCount
      ? `${activeRoundLabel()} settled for ${settledCount} markets. ${scoredCount} used official scores and ${voidCount} were voided with stake refunds.`
      : `${activeRoundLabel()} settled for ${settledCount} markets.`;
    elements.settlementFeedback.textContent = roundMetrics
      ? `${baseMessage} Profit ${formatStake(roundMetrics.roundProfit)} | matched ${formatStake(roundMetrics.totalMatchedVolume)} | users ${roundMetrics.participatingUsers} | avg spend ${formatStake(roundMetrics.averageSpendPerUser)} | unmatched ${formatStake(roundMetrics.unmatchedVolume)}.`
      : baseMessage;
    refreshSharedState();
  } catch (error) {
    elements.settlementFeedback.textContent = error.message;
  }
}

async function undoSettlementBatch() {
  try {
    const response = await api("/api/admin/undo-settlement", {});
    applySharedSnapshot({ ...response, backend: backendState, prizePool: prizePoolState });
    renderAll();
    elements.settlementFeedback.textContent = `Restored ${response.restoredCount ?? 0} settled markets from the last batch.`;
    refreshSharedState();
  } catch (error) {
    elements.settlementFeedback.textContent = error.message;
  }
}

async function createSimulationBot() {
  try {
    const response = await api("/api/admin/bots/create", {});
    applySharedSnapshot({ ...response, backend: backendState, prizePool: prizePoolState });
    renderAll();
    const botName = response.bot?.userName || "Random Prob bot";
    elements.botRunFeedback.textContent = `${botName} created with $200 and started auto-playing as a 50/50 random-probability bot.`;
    showToast("Bot created", `${botName} joined the Quick Pick market.`);
  } catch (error) {
    elements.botRunFeedback.textContent = error.message;
  }
}

async function purgeLegacyBots() {
  const confirmed = window.confirm("Delete legacy bot users (excluding currently active bots) from data and leaderboard?");
  if (!confirmed) return;
  try {
    const response = await api("/api/admin/bots/purge", { includeActiveBots: false });
    applySharedSnapshot({ ...response, backend: backendState, prizePool: response.prizePool ?? prizePoolState });
    renderAll();
    const preview = (response.deletedUsers || []).slice(0, 4).join(", ");
    const suffix = response.deletedUsers?.length > 4 ? " ..." : "";
    elements.botRunFeedback.textContent = response.deletedCount
      ? `Deleted ${response.deletedCount} legacy bots${preview ? `: ${preview}${suffix}` : ""}.`
      : "No legacy bot users found.";
    refreshSharedState();
  } catch (error) {
    elements.botRunFeedback.textContent = error.message;
  }
}

function syncOpeningForm() {
  const market = findMarket(elements.openingMarket.value || uiState.selectedMarketId || getAdminRoundMarkets()[0]?.id);
  if (!market) {
    elements.openingLineInput.value = "";
    elements.currentLineInput.value = "";
    return;
  }
  elements.openingMarket.value = market.id;
  elements.openingLineInput.value = market.initialLine.toFixed(1);
  elements.currentLineInput.value = market.currentLine.toFixed(1);
  elements.settlementMarket.value = market.id;
}

function shiftGame(direction) {
  const nextGame = adjacentGame(direction);
  if (!nextGame) return;
  uiState.currentGameId = nextGame.id;
  uiState.currentTeam = nextGame.homeTeam;
  uiState.expandedMarketId = "";
  syncSelectedMarket();
  renderAll();
}

function focusPreferredMatchCentreGame(force = false) {
  const preferredGame = nextGameToLock();
  if (!preferredGame) return;
  if (!force) return;
  uiState.currentGameId = preferredGame.id;
  uiState.currentTeam = preferredGame.homeTeam;
  uiState.expandedMarketId = "";
  syncSelectedMarket();
}

function syncSelectedMarket() {
  normalizeNavigationState();
  const visibleMarkets = getVisibleMarkets();
  if (!visibleMarkets.some((market) => market.id === uiState.selectedMarketId)) {
    uiState.selectedMarketId = visibleMarkets[0]?.id ?? getGameMarkets(uiState.currentGameId)[0]?.id ?? "";
  }
  if (uiState.expandedMarketId && !visibleMarkets.some((market) => market.id === uiState.expandedMarketId)) {
    uiState.expandedMarketId = "";
  }
  syncQuickTakeQueue();
}

function safelyRender(label, callback) {
  try {
    return callback();
  } catch (error) {
    console.error(`Render failed: ${label}`, error);
    return null;
  }
}

function safelyCompute(label, callback, fallbackValue) {
  try {
    return callback();
  } catch (error) {
    console.error(`Compute failed: ${label}`, error);
    return fallbackValue;
  }
}

function normalizeNavigationState() {
  const activeGames = getActiveRoundGames();
  const fallbackGame = activeGames[0] || roundGames[0] || null;
  if (!fallbackGame) return;
  if (!activeGames.some((game) => game.id === uiState.currentGameId)) {
    uiState.currentGameId = fallbackGame.id;
  }
  const resolvedGame = activeGames.find((game) => game.id === uiState.currentGameId) || fallbackGame;
  if (![resolvedGame.homeTeam, resolvedGame.awayTeam].includes(uiState.currentTeam)) {
    uiState.currentTeam = resolvedGame.homeTeam;
  }
  if (!isAuthenticated() && uiState.activeScreen === "account") {
    uiState.activeScreen = "home";
    uiState.activeAccountView = "portfolio";
  }
}

function currentGame() {
  return getActiveRoundGames().find((game) => game.id === uiState.currentGameId) ?? getActiveRoundGames()[0] ?? roundGames[0];
}

function findGame(gameId) {
  return roundGames.find((game) => game.id === gameId) || null;
}

function getGameMarkets(gameId) {
  return state.markets.filter((market) => market.gameId === gameId);
}

function getVisibleMarkets() {
  return getGameMarkets(uiState.currentGameId).filter((market) => market.team === uiState.currentTeam);
}

function syncQuickTakeQueue() {
  const openMarkets = state.markets.filter(isMarketOpen);
  const postOnlyMarkets = openMarkets.filter((market) => !hasRestingQuickTakeLiquidity(market));
  const quickTakeSourceMarkets = postOnlyMarkets.length ? postOnlyMarkets : openMarkets;
  const sortedOpenIds = quickTakeSourceMarkets
    .sort(compareQuickTakeMarkets)
    .map((market) => market.id);
  const openIdSet = new Set(sortedOpenIds);
  let nextSeen = uiState.quickPickSeenMarketIds.filter((marketId) => openIdSet.has(marketId));
  const seenSet = new Set(nextSeen);
  const currentQueue = uiState.quickPickMarketIds.filter((marketId) => openIdSet.has(marketId) && !seenSet.has(marketId));
  const queuedSet = new Set(currentQueue);
  const appendedQueue = sortedOpenIds.filter((marketId) => !seenSet.has(marketId) && !queuedSet.has(marketId));
  let nextQueue = [...currentQueue, ...appendedQueue];
  if (!nextQueue.length) {
    uiState.quickPickShuffleSeed = randomToken();
    const reshuffledOpenIds = state.markets
      .filter(isMarketOpen)
      .sort(compareQuickTakeMarkets)
      .map((market) => market.id);
    nextSeen = [];
    nextQueue = [...reshuffledOpenIds];
  }
  const activeCardId = uiState.quickPickPendingCardId || uiState.quickPickMarketIds[uiState.quickPickActiveIndex] || nextQueue[0] || "";
  let nextActiveIndex = activeCardId ? nextQueue.indexOf(activeCardId) : 0;
  if (nextActiveIndex < 0) {
    nextActiveIndex = Math.min(uiState.quickPickActiveIndex, Math.max(nextQueue.length - 1, 0));
  }
  if (!arraysEqual(nextSeen, uiState.quickPickSeenMarketIds)) {
    uiState.quickPickSeenMarketIds = nextSeen;
  }
  if (!arraysEqual(nextQueue, uiState.quickPickMarketIds)) {
    uiState.quickPickMarketIds = nextQueue;
  }
  if (uiState.quickPickActiveIndex !== nextActiveIndex) {
    uiState.quickPickActiveIndex = nextActiveIndex;
  }
}

function hasRestingQuickTakeLiquidity(market) {
  return Array.isArray(market?.trades) && market.trades.some((trade) =>
    trade &&
    ["PENDING", "PARTIALLY_MATCHED"].includes(String(trade.status || "")) &&
    Number(trade.unmatchedStake) > 0
  );
}

function getQuickTakeQueueMarkets() {
  syncQuickTakeQueue();
  return uiState.quickPickMarketIds.map((marketId) => findMarket(marketId)).filter(Boolean);
}

function getActiveQuickTakeMarketId() {
  syncQuickTakeQueue();
  return uiState.quickPickMarketIds[uiState.quickPickActiveIndex] || "";
}

function advanceQuickTakeQueue(marketId) {
  if (marketId && !uiState.quickPickSeenMarketIds.includes(marketId)) {
    uiState.quickPickSeenMarketIds = [...uiState.quickPickSeenMarketIds, marketId];
  }
  uiState.quickPickMarketIds = uiState.quickPickMarketIds.filter((id) => id !== marketId);
  uiState.quickPickActiveIndex = Math.min(uiState.quickPickActiveIndex, Math.max(uiState.quickPickMarketIds.length - 1, 0));
  syncQuickTakeQueue();
}

function restoreQuickTakeMarket(marketId) {
  uiState.quickPickSeenMarketIds = uiState.quickPickSeenMarketIds.filter((id) => id !== marketId);
  uiState.quickPickMarketIds = [marketId, ...uiState.quickPickMarketIds.filter((id) => id !== marketId)];
  uiState.quickPickActiveIndex = 0;
}

function moveQuickTakeToBack(marketId) {
  if (!marketId) return;
  const remainingQueue = uiState.quickPickMarketIds.filter((id) => id !== marketId);
  uiState.quickPickMarketIds = [...remainingQueue, marketId];
  uiState.quickPickActiveIndex = 0;
  syncQuickTakeQueue();
}

function normalizeStakeInputValue(value) {
  const nextValue = Math.floor(Number(value) || 0);
  if (!Number.isFinite(nextValue) || nextValue <= 0) {
    return 1;
  }
  return Math.min(MAX_SINGLE_BID, nextValue);
}

function getContactMessages() {
  return Array.isArray(state.contactMessages)
    ? state.contactMessages.slice().sort((left, right) => new Date(right.submittedAt || 0) - new Date(left.submittedAt || 0))
    : [];
}

function formatContactTimestamp(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Received recently";
  }
  return date.toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function getUserTrades(userName) {
  if (!userName) return [];
  return state.markets.flatMap((market) =>
    market.trades
      .filter((trade) => trade.userName.toLowerCase() === userName.toLowerCase())
      .map((trade) => ({ ...trade, marketId: market.id }))
  );
}

function getUserCash(userName) {
  if (!userName) return STARTING_BANKROLL;
  if (typeof state.bankrolls?.[userName] === "number") {
    return Number(state.bankrolls[userName]) || 0;
  }
  return STARTING_BANKROLL;
}

function getDisplayedCash(userName) {
  if (backendState.mode === "supabase" && backendState.user?.username?.toLowerCase() === userName.toLowerCase()) {
    return Number(backendState.user.balance) || 0;
  }
  return getUserCash(userName);
}

function getPortfolioData() {
  if (backendState.mode === "supabase" && backendState.dashboard?.portfolio) {
    return {
      balance: Number(backendState.dashboard.portfolio.balance) || 0,
      openPositions: backendState.dashboard.portfolio.openPositions || [],
      settledPositions: backendState.dashboard.portfolio.settledPositions || [],
      realized: Number(backendState.dashboard.portfolio.realized) || 0,
      winRate: Number(backendState.dashboard.portfolio.winRate) || 0
    };
  }
  const userTrades = getUserTrades(currentUserName());
  const openTrades = aggregateOpenPositions(userTrades.filter((trade) => trade.status !== "SETTLED" && trade.status !== "CANCELLED"));
  const settledTrades = userTrades.filter((trade) => trade.result);
  const realized = settledTrades.reduce((sum, trade) => sum + trade.result.profit, 0);
  const winRate = settledTrades.length
    ? Math.round((settledTrades.filter((trade) => trade.result?.outcome === "WIN").length / settledTrades.length) * 100)
    : 0;
  return {
    balance: getUserCash(currentUserName()),
    openPositions: openTrades,
    settledPositions: settledTrades,
    realized,
    winRate
  };
}

function getLeaderboardRows(options = {}) {
  const timeFilter = options.timeFilter || uiState.leaderboardTimeFilter;
  const sort = options.sort || uiState.leaderboardSort;
  if (timeFilter === "ALL_TIME" && backendState.mode === "supabase" && backendState.dashboard?.leaderboard?.length) {
    return sortLeaderboardRows(backendState.dashboard.leaderboard, sort);
  }
  return sortLeaderboardRows(buildLeaderboardRows(timeFilter), sort);
}

function getHomeLeaderboardPreviewData() {
  const homeMarkets = getActiveRoundMarkets();
  const topProjected = homeMarkets
    .slice()
    .sort((left, right) => right.currentLine - left.currentLine)
    .slice(0, 20);
  const biggestGainers = homeMarkets
    .slice()
    .filter((market) => getMovementValue(market) > 0)
    .sort((left, right) => getMovementValue(right) - getMovementValue(left) || right.currentLine - left.currentLine)
    .slice(0, 20);
  const biggestLosers = homeMarkets
    .slice()
    .filter((market) => getMovementValue(market) < 0)
    .sort((left, right) => getMovementValue(left) - getMovementValue(right) || left.currentLine - right.currentLine)
    .slice(0, 20);
  const fallbackMovers = homeMarkets
    .slice()
    .sort((left, right) => right.currentLine - left.currentLine || right.seasonAverage - left.seasonAverage)
    .slice(0, 20);
  const projectionComparisons = safelyCompute("home projection comparisons", () =>
    homeMarkets
      .map((market) => {
        const impliedScore = priceImpliedProjectionForMarket(market);
        return {
          market,
          impliedScore,
          value: roundToHalf(market.currentLine - impliedScore)
        };
      })
      .filter((entry) => Number.isFinite(entry.impliedScore))
      .sort((left, right) => Math.abs(right.value) - Math.abs(left.value) || right.market.currentLine - left.market.currentLine),
  []);
  const bestValue = projectionComparisons
    .filter((entry) => entry.value > 0)
    .sort((left, right) => right.value - left.value || right.market.currentLine - left.market.currentLine)
    .slice(0, 20);
  const mostOverpriced = projectionComparisons
    .filter((entry) => entry.value < 0)
    .sort((left, right) => left.value - right.value || left.market.currentLine - right.market.currentLine)
    .slice(0, 20);
  const mostConfident = homeMarkets
    .slice()
    .sort((left, right) => getMarketTradeMetrics(right).confidence - getMarketTradeMetrics(left).confidence || projectionValue(right) - projectionValue(left))
    .slice(0, 20);
  return {
    homeMarkets,
    topProjected,
    biggestGainers,
    biggestLosers,
    fallbackMovers,
    projectionComparisons,
    bestValue,
    mostOverpriced,
    mostConfident
  };
}

function renderHome() {
  const homeData = getHomeLeaderboardPreviewData();
  const {
    homeMarkets,
    topProjected,
    biggestGainers,
    biggestLosers,
    fallbackMovers,
    bestValue,
    mostOverpriced,
    mostConfident
  } = homeData;
  const leaderboardRows = safelyCompute("home leaderboard rows", () => getLeaderboardRows({ sort: "BALANCE", timeFilter: "ALL_TIME" }), []);

  const fallbackFeaturedMarkets = (topProjected.length ? topProjected : fallbackMovers).slice(0, 8);
  const popularFeaturedMarkets = resolvePopularFeaturedMarkets(homeMarkets);
  safelyRender("home carousel controls", renderHomeCarouselControls);
  safelyRender("home featured slate", () => renderHomeFeaturedSlate(popularFeaturedMarkets.length ? popularFeaturedMarkets : fallbackFeaturedMarkets));
  safelyRender("home prize pool banner", () => renderHomePrizePoolBanner(prizePoolState));
  safelyRender("home games strip", renderHomeGamesStrip);
  safelyRender("home unauth bottom", renderGuestUnauthBottom);

  safelyRender("home gainers", () => renderHomeMarketLeaderboard(elements.homeBiggestGainers, biggestGainers.length ? biggestGainers : fallbackMovers.slice(0, 20), ({ market }) => {
    const movement = getMovementText(market);
    return {
      badge: homeTeamAbbreviation(market.team),
      badgeTone: movement.value > 0 ? "move-up" : "move-flat",
      title: market.playerName,
      meta: market.team,
      detail: market.position,
      statPrimary: `${market.currentLine.toFixed(1)} pts`,
      statSecondary: movement.value === 0 ? "—" : movement.label,
      inlinePrimaryClass: "is-muted",
      statSecondaryClass: movement.className,
      metricLayout: "inline"
    };
  }, {
    variant: "compact-list-group",
    headingTitle: "Gainers"
  }));

  safelyRender("home losers", () => renderHomeMarketLeaderboard(elements.homeBiggestLosers, biggestLosers.length ? biggestLosers : fallbackMovers.slice().reverse().slice(0, 20), ({ market }) => {
    const movement = getMovementText(market);
    return {
      badge: homeTeamAbbreviation(market.team),
      badgeTone: movement.value < 0 ? "move-down" : "move-flat",
      title: market.playerName,
      meta: market.team,
      detail: market.position,
      statPrimary: `${market.currentLine.toFixed(1)} pts`,
      statSecondary: movement.value === 0 ? "—" : movement.label,
      inlinePrimaryClass: "is-muted",
      statSecondaryClass: movement.className,
      metricLayout: "inline"
    };
  }, {
    variant: "compact-list-group",
    headingTitle: "Losers"
  }));

  safelyRender("home market confidence", () => renderHomeMarketLeaderboard(elements.homeMostTraded, mostConfident, ({ market }) => {
    const metrics = getMarketTradeMetrics(market);
    return {
      title: market.playerName,
      badge: homeTeamAbbreviation(market.team),
      meta: market.team,
      detail: market.position,
      statPrimary: `${metrics.confidence}%`,
      statSecondary: `${market.currentLine.toFixed(1)} pts`,
      confidence: metrics.confidence
    };
  }, {
    variant: "featured-market-confidence",
    headingTitle: "Market Confidence"
  }));

  safelyRender("home projected", () => renderHomeMarketLeaderboard(elements.homeTopProjected, topProjected, ({ market }) => ({
    badge: homeTeamAbbreviation(market.team),
    badgeTone: "",
    title: market.playerName,
    meta: market.team,
    detail: market.position,
    statPrimary: `${market.currentLine.toFixed(1)} pts`
  }), {
    variant: "compact-projection-group",
    headingTitle: "Projected"
  }));

  safelyRender("home value", () => renderHomeMarketLeaderboard(elements.homeBestValue, bestValue, ({ market, impliedScore, value }) => ({
    badge: homeTeamAbbreviation(market.team),
    badgeTone: value > 0 ? "move-up" : value < 0 ? "move-down" : "move-flat",
    cardClassName: "home-comparison-subcard",
    title: market.playerName,
    meta: market.team,
    detail: market.position,
    statPrimary: formatSignedLine(value),
    statSecondary: `Price ${impliedScore.toFixed(1)} • Proj ${market.currentLine.toFixed(1)}`,
    statSecondaryClass: "home-comparison-metric"
  }), {
    variant: "compact-list-group",
    headingTitle: "Value",
    emptyMessage: "Projection comparisons will appear here once official Fantasy prices are available."
  }));

  safelyRender("home overpriced", () => renderHomeMarketLeaderboard(elements.homeMostOverpriced, mostOverpriced, ({ market, impliedScore, value }) => ({
    badge: homeTeamAbbreviation(market.team),
    badgeTone: "move-down",
    cardClassName: "home-comparison-subcard",
    title: market.playerName,
    meta: market.team,
    detail: market.position,
    statPrimary: formatSignedLine(value),
    statSecondary: `Price ${impliedScore.toFixed(1)} • Proj ${market.currentLine.toFixed(1)}`,
    statSecondaryClass: "home-comparison-metric"
  }), {
    variant: "compact-list-group",
    headingTitle: "Overpriced",
    emptyMessage: "Overpriced players will appear here once official Fantasy prices are available."
  }));

  safelyRender("home user leaderboard", () => renderHomeUserLeaderboard(elements.homeUserLeaderboard, leaderboardRows));

  window.requestAnimationFrame(() => {
    syncHomeCarouselPosition();
  });
}

function renderHomeFeaturedSlate(featuredMarkets) {
  if (!elements.homeFeaturedSlate) return;
  const items = Array.isArray(featuredMarkets) ? featuredMarkets.filter(Boolean).slice(0, 8) : [];
  if (!items.length) {
    elements.homeFeaturedSlate.innerHTML = "";
    return;
  }
  uiState.activeHomeFeaturedIndex = Math.max(0, Math.min(uiState.activeHomeFeaturedIndex || 0, items.length - 1));
  const featuredMarket = items[uiState.activeHomeFeaturedIndex];
  const movement = getMovementText(featuredMarket);
  const matchup = matchupContext(featuredMarket);
  elements.homeFeaturedSlate.innerHTML = `<div class="home-featured-carousel" aria-label="Featured this week players"><div class="home-featured-stage"><button class="home-featured-slate" type="button" data-market-id="${featuredMarket.id}" style="${teamSurfaceTone(featuredMarket.team)}"><div class="home-featured-copy"><span class="home-featured-label">Featured This Week</span><strong class="home-featured-name">${featuredMarket.playerName}</strong><div class="home-featured-meta"><span class="home-team-badge" style="${homeTeamPillStyle(featuredMarket.team)}">${homeTeamAbbreviation(featuredMarket.team)}</span><span>${featuredMarket.team}</span><span>${matchup.label}</span></div></div><div class="home-featured-metric"><span class="home-featured-metric-label">Crowd projection</span><strong>${featuredMarket.currentLine.toFixed(1)}<small>pts</small></strong><span class="home-featured-support">Season avg ${Number(featuredMarket.seasonAverage || 0).toFixed(1)}</span><span class="home-featured-trend ${movement.className}">${homeMovementLabel(movement)}</span></div></button></div><div class="home-featured-dots">${items.map((item, index) => `<button class="home-featured-dot ${index === uiState.activeHomeFeaturedIndex ? "active" : ""}" type="button" data-featured-index="${index}" aria-label="Show featured player ${index + 1}"></button>`).join("")}</div></div>`;
  elements.homeFeaturedSlate.querySelector("[data-market-id]")?.addEventListener("click", () => {
    openMarketFromHome(featuredMarket.id);
  });
  elements.homeFeaturedSlate.querySelectorAll("[data-featured-index]").forEach((button) =>
    button.addEventListener("click", () => {
      uiState.activeHomeFeaturedIndex = Number(button.dataset.featuredIndex) || 0;
      renderHomeFeaturedSlate(items);
    })
  );
  bindHomeFeaturedSwipe(items);
}

function renderHomePrizePoolBanner(view) {
  if (!elements.homePrizePoolBanner) return;
  if (!view) {
    elements.homePrizePoolBanner.innerHTML = "";
    return;
  }
  const poolAmount = prizePoolDisplayAmount(view);
  elements.homePrizePoolBanner.innerHTML = `<button class="home-prize-pool-banner" type="button"><span class="home-prize-pool-label"><span class="home-prize-pool-icon" aria-hidden="true">💰</span><span>Prize Pool</span></span><span class="home-prize-pool-divider" aria-hidden="true"></span><span class="home-prize-pool-amount" data-home-prize-pool-amount="${poolAmount}">${formatStake(0)}</span><span class="home-prize-pool-chevron" aria-hidden="true">›</span></button>`;
  elements.homePrizePoolBanner.querySelector(".home-prize-pool-banner")?.addEventListener("click", () => {
    uiState.activeScreen = "prizepool";
    renderAll();
  });
  animateHomePrizePoolAmount(poolAmount);
}

function renderHomeGamesStrip() {
  if (!elements.homeGamesStrip) return;
  const games = getActiveRoundGames()
    .slice()
    .sort((left, right) => kickoffTimestampForGame(left) - kickoffTimestampForGame(right));
  if (!games.length) {
    elements.homeGamesStrip.innerHTML = "";
    return;
  }
  const openPositions = getPortfolioData().openPositions || [];
  const positionCountsByGameId = openPositions.reduce((counts, position) => {
    const market = findMarket(position.marketId);
    if (!market?.gameId) return counts;
    counts.set(market.gameId, (counts.get(market.gameId) || 0) + 1);
    return counts;
  }, new Map());
  const nextUpcomingIndex = games.findIndex((game) => !isGameLocked(game));
  if (!uiState.activeHomeGameTouched) {
    uiState.activeHomeGameIndex = nextUpcomingIndex >= 0 ? nextUpcomingIndex : 0;
  } else {
    uiState.activeHomeGameIndex = ((uiState.activeHomeGameIndex % games.length) + games.length) % games.length;
  }
  elements.homeGamesStrip.innerHTML = `
    <div class="games-carousel">
      <div class="games-carousel-viewport">
        ${homeGameCardMarkup(games[uiState.activeHomeGameIndex], positionCountsByGameId.get(games[uiState.activeHomeGameIndex].id) || 0)}
      </div>
      <div class="home-featured-dots games-carousel-dots">
        ${games.map((game, index) => `<button class="home-featured-dot ${index === uiState.activeHomeGameIndex ? "active" : ""}" type="button" data-home-game-index="${index}" aria-label="Show game ${index + 1}: ${homeTeamAbbreviation(game.homeTeam)} vs ${homeTeamAbbreviation(game.awayTeam)}"></button>`).join("")}
      </div>
    </div>
  `;
  elements.homeGamesStrip.querySelectorAll("[data-home-game-id]").forEach((card) =>
    card.addEventListener("click", () => {
      openMatchCentreGame(card.dataset.homeGameId);
    })
  );
  elements.homeGamesStrip.querySelectorAll("[data-home-game-index]").forEach((dot) =>
    dot.addEventListener("click", () => {
      uiState.activeHomeGameTouched = true;
      uiState.activeHomeGameIndex = Number(dot.dataset.homeGameIndex) || 0;
      renderHomeGamesStrip();
    })
  );
  bindHomeGamesSwipe(games);
}

function homeGameCardMarkup(game, openPositionCount = 0) {
  const status = homeGameStatus(game);
  const topMarkets = getActiveRoundMarkets()
    .filter((m) => m.gameId === game.id)
    .sort((a, b) => b.currentLine - a.currentLine)
    .slice(0, 3);
  const projHTML = topMarkets.length
    ? `<div class="game-card-proj-list">${topMarkets.map((m, i) => `<div class="game-card-proj-row"><span class="game-card-proj-rank">${i + 1}</span><span class="home-team-badge game-card-proj-badge" style="${homeTeamPillStyle(m.team)}">${homeTeamAbbreviation(m.team)}</span><span class="game-card-proj-name">${m.playerName}</span><span class="game-card-proj-pts">${m.currentLine.toFixed(1)}</span></div>`).join("")}</div>`
    : "";
  const positionsHTML = openPositionCount > 0
    ? `<div class="game-card-positions"><span class="game-card-positions-copy"><span class="game-card-positions-dot" aria-hidden="true"></span><span>${openPositionCount} position${openPositionCount === 1 ? "" : "s"}</span></span></div>`
    : "";
  return `<button class="game-card${openPositionCount > 0 ? " has-positions" : ""}${topMarkets.length > 0 ? " has-projections" : ""}" type="button" data-home-game-id="${game.id}" style="--match-primary:${teamPrimary(game.homeTeam)}CC;--match-secondary:${teamPrimary(game.awayTeam)}CC;"><div class="game-card-copy"><div class="game-card-topline"><span class="game-card-status ${status.className}">${status.label}</span><span class="game-card-kickoff">${formatHomeGameKickoffTime(game)}</span></div><div class="game-card-teams">${game.title || `${homeTeamAbbreviation(game.homeTeam)} vs ${homeTeamAbbreviation(game.awayTeam)}`}</div><div class="game-card-meta">${game.venue || ""}</div>${projHTML}</div>${positionsHTML}</button>`;
}

function homeGameStatus(game) {
  if (!isGameLocked(game)) {
    return { label: "OPEN", className: "is-open" };
  }
  return { label: "LOCKED", className: "is-locked" };
}

function formatHomeGameKickoffTime(game) {
  const kickoffAt = kickoffTimestampForGame(game);
  if (!Number.isFinite(kickoffAt)) return game?.kickoff || "";
  return new Date(kickoffAt).toLocaleString([], {
    weekday: "short",
    hour: "numeric",
    minute: "2-digit"
  });
}

function openMatchCentreGame(gameId) {
  const game = findGame(gameId);
  if (!game) return;
  uiState.activeScreen = "markets";
  uiState.currentGameId = game.id;
  uiState.currentTeam = game.homeTeam;
  uiState.expandedMarketId = "";
  syncSelectedMarket();
  renderAll();
}

function bindHomeGamesSwipe(items) {
  const viewport = elements.homeGamesStrip?.querySelector(".games-carousel-viewport");
  if (!viewport || !items.length) return;
  let touchStartX = 0;
  let touchEndX = 0;
  viewport.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches?.[0]?.screenX || 0;
  }, { passive: true });
  viewport.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches?.[0]?.screenX || 0;
    if (touchStartX - touchEndX > 50) {
      uiState.activeHomeGameTouched = true;
      uiState.activeHomeGameIndex = (uiState.activeHomeGameIndex + 1) % items.length;
      renderHomeGamesStrip();
    }
    if (touchEndX - touchStartX > 50) {
      uiState.activeHomeGameTouched = true;
      uiState.activeHomeGameIndex = (uiState.activeHomeGameIndex - 1 + items.length) % items.length;
      renderHomeGamesStrip();
    }
  }, { passive: true });
}

function animateHomePrizePoolAmount(targetAmount) {
  const amountNode = elements.homePrizePoolBanner?.querySelector("[data-home-prize-pool-amount]");
  if (!amountNode) return;
  if (homePrizePoolAnimationFrame) {
    window.cancelAnimationFrame(homePrizePoolAnimationFrame);
    homePrizePoolAnimationFrame = null;
  }
  const previousAmount = Number(amountNode.dataset.renderedAmount) || 0;
  const startAmount = previousAmount > 0 ? previousAmount : 0;
  const startTime = performance.now();
  const duration = 800;
  const step = (now) => {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const nextValue = Math.round(startAmount + ((targetAmount - startAmount) * eased));
    amountNode.textContent = formatStake(nextValue);
    amountNode.dataset.renderedAmount = String(nextValue);
    if (progress < 1) {
      homePrizePoolAnimationFrame = window.requestAnimationFrame(step);
    } else {
      amountNode.textContent = formatStake(targetAmount);
      amountNode.dataset.renderedAmount = String(targetAmount);
      homePrizePoolAnimationFrame = null;
    }
  };
  homePrizePoolAnimationFrame = window.requestAnimationFrame(step);
}

function bindHomeFeaturedSwipe(items) {
  const stage = elements.homeFeaturedSlate?.querySelector(".home-featured-stage");
  if (!stage || !items.length) return;
  let touchStartX = 0;
  stage.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches?.[0]?.clientX || 0;
  }, { passive: true });
  stage.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches?.[0]?.clientX || 0;
    const deltaX = touchEndX - touchStartX;
    if (Math.abs(deltaX) < 32) return;
    if (deltaX < 0) {
      uiState.activeHomeFeaturedIndex = (uiState.activeHomeFeaturedIndex + 1) % items.length;
    } else {
      uiState.activeHomeFeaturedIndex = (uiState.activeHomeFeaturedIndex - 1 + items.length) % items.length;
    }
    renderHomeFeaturedSlate(items);
  }, { passive: true });
}

function resolvePopularFeaturedMarkets(homeMarkets) {
  if (!Array.isArray(popularFeaturedMarketIds) || !popularFeaturedMarketIds.length) {
    return [];
  }
  const marketsById = new Map((homeMarkets || []).map((market) => [market.id, market]));
  return popularFeaturedMarketIds.map((marketId) => marketsById.get(marketId)).filter(Boolean);
}

async function syncPopularFeaturedPlayers(force = false) {
  const roundNumber = activeRoundNumber();
  if (!force && popularFeaturedRoundNumber === roundNumber && popularFeaturedMarketIds.length) {
    return popularFeaturedMarketIds;
  }
  if (popularFeaturedRequest) {
    return popularFeaturedRequest;
  }
  popularFeaturedRequest = (async () => {
    try {
      const response = await fetch("/api/popular-players", { method: "GET" });
      if (!response.ok) {
        throw new Error(`Popular players request failed with ${response.status}`);
      }
      const data = await response.json();
      popularFeaturedMarketIds = Array.isArray(data.players)
        ? data.players.map((player) => player.marketId).filter(Boolean)
        : [];
      popularFeaturedRoundNumber = roundNumber;
      if (uiState.activeScreen === "home") {
        renderHome();
      }
      return popularFeaturedMarketIds;
    } catch (error) {
      console.warn("Popular featured players unavailable", error.message);
      return [];
    } finally {
      popularFeaturedRequest = null;
    }
  })();
  return popularFeaturedRequest;
}

function homeTeamAbbreviation(team) {
  const map = {
    Broncos: "BRI",
    Raiders: "CBR",
    Bulldogs: "CAN",
    Sharks: "CRO",
    Dolphins: "DOL",
    Titans: "GLD",
    "Sea Eagles": "MAN",
    Storm: "MEL",
    Knights: "NEW",
    Warriors: "NZW",
    Cowboys: "NQL",
    Eels: "PAR",
    Panthers: "PEN",
    Rabbitohs: "SOU",
    Dragons: "STI",
    Roosters: "SYD",
    "Wests Tigers": "WST",
    Tigers: "WST"
  };
  return map[String(team || "")] || String(team || "").slice(0, 3).toUpperCase();
}

function homeTeamPillStyle(team) {
  const colors = TEAM_COLORS[team] ?? TEAM_COLORS[normalizeTeamName(team)] ?? null;
  if (!colors?.primary) {
    return "";
  }
  return `background:${colors.primary};color:${colors.secondary || "#ffffff"};`;
}

function homeMarketsQuietText() {
  return "—";
}

function homeMovementLabel(movement) {
  if (!movement || !Number.isFinite(Number(movement.value))) return "—";
  if (Number(movement.value) === 0) return "—";
  return movement.label;
}

function formatHomeMovementValue(value) {
  const numeric = Number(value) || 0;
  if (numeric === 0) return "—";
  return `${numeric > 0 ? "+" : "-"}${Math.abs(numeric).toFixed(1)}`;
}

function homeRankTone(index) {
  if (index === 0) return "is-gold";
  if (index === 1) return "is-silver";
  if (index === 2) return "is-bronze";
  return "";
}

function homeRankMarkup(index) {
  return `<span class="home-card-rank ${homeRankTone(index)}">${index + 1}</span>`;
}

function renderHomeMetricMarkup(view = {}, fallbackTone = "") {
  if (view.metricLayout === "inline") {
    return `<div class="home-projection-metric home-inline-metric${view.metricHero ? " is-hero" : ""}"><span class="home-inline-metric-primary ${view.inlinePrimaryClass || ""}">${view.statPrimary || ""}</span><strong class="${view.statSecondaryClass || fallbackTone || ""}">${view.statSecondary || "—"}</strong></div>`;
  }
  return `<div class="home-projection-metric"><strong class="${view.statPrimaryClass || fallbackTone || ""}">${view.statPrimary || "—"}</strong>${view.statSecondary ? `<span class="${view.statSecondaryClass || ""}">${view.statSecondary}</span>` : ""}</div>`;
}

function isRoundStarted() {
  return getActiveRoundGames().some((game) => isGameLocked(game));
}

function renderHomeCarouselControls() {
  if (!elements.homeCarouselNav || !elements.homeCarouselMeta) return;
  const panels = [
    { key: "value", label: "Value", detail: "Best projection gaps vs price" },
    { key: "overpriced", label: "Overpriced", detail: "Weakest projection gaps vs price" },
    { key: "gainers", label: "Gainers", detail: "Biggest gainers" },
    { key: "losers", label: "Losers", detail: "Biggest losers" },
    { key: "activity", label: "Market Confidence", detail: "Highest-confidence lines" },
    { key: "projected", label: "Projected", detail: "Top current lines" }
  ];
  if (!panels.some((panel) => panel.key === uiState.activeHomePanel)) {
    uiState.activeHomePanel = panels[0].key;
  }
  elements.homeCarouselNav.innerHTML = panels
    .map(
      (panel) =>
        `<button class="home-carousel-tab ${uiState.activeHomePanel === panel.key ? "active" : ""}" type="button" data-home-panel-target="${panel.key}">${panel.label}</button>`
    )
    .join("");
  const activeIndex = panels.findIndex((panel) => panel.key === uiState.activeHomePanel);
  const activePanel = panels[activeIndex] || panels[0];
  elements.homeCarouselMeta.innerHTML = `<div class="home-carousel-progress">${panels
    .map((panel) => `<span class="home-carousel-dot ${panel.key === uiState.activeHomePanel ? "active" : ""}"></span>`)
    .join("")}</div><div class="home-carousel-status"><strong>${String((activeIndex >= 0 ? activeIndex : 0) + 1).padStart(2, "0")} / ${String(panels.length).padStart(2, "0")}</strong><span>${activePanel.detail}</span></div>`;
}

function syncHomeCarouselPosition() {
  const carousel = elements.homeCarousel;
  const panel = carousel?.querySelector(`[data-home-panel="${uiState.activeHomePanel}"]`);
  if (!carousel || !panel) return;
  const targetLeft = panel.offsetLeft;
  if (Math.abs(carousel.scrollLeft - targetLeft) > 8) {
    carousel.scrollLeft = targetLeft;
  }
}

function sortLeaderboardRows(rows, sort = uiState.leaderboardSort) {
  return rows.slice().sort((a, b) => {
    if (sort === "WIN_RATE") {
      if (b.winRate !== a.winRate) return b.winRate - a.winRate;
      if (b.balance !== a.balance) return b.balance - a.balance;
      return b.tradesCount - a.tradesCount;
    }
    if (sort === "TRADES") {
      if (b.tradesCount !== a.tradesCount) return b.tradesCount - a.tradesCount;
      if (b.balance !== a.balance) return b.balance - a.balance;
      return b.winRate - a.winRate;
    }
    if (b.balance !== a.balance) return b.balance - a.balance;
    if (b.realized !== a.realized) return b.realized - a.realized;
    return b.tradesCount - a.tradesCount;
  });
}

function leaderboardMetricCard(label, value) {
  return `<article class="leaderboard-metric-card"><span>${label}</span><strong>${value}</strong></article>`;
}

function buildLeaderboardRows(timeFilter = "ALL_TIME") {
  const scopedMarkets = timeFilter === "THIS_ROUND" ? getActiveRoundMarkets() : state.markets;
  return [...new Set([...Object.keys(state.bankrolls), ...scopedMarkets.flatMap((market) => market.trades.map((trade) => trade.userName))])]
    .map((userName) => {
      const trades = scopedMarkets.flatMap((market) => (market.trades || []).filter((trade) => trade.userName === userName));
      const settled = trades.filter((trade) => trade.result);
      const wins = settled.filter((trade) => trade.result?.outcome === "WIN").length;
      const realized = settled.reduce((sum, trade) => sum + trade.result.profit, 0);
      const largestOpen = aggregateOpenPositions(trades.filter((trade) => trade.status !== "SETTLED" && trade.status !== "CANCELLED")).sort((a, b) => (b.activeStake ?? b.stake) - (a.activeStake ?? a.stake))[0];
      return {
        userName,
        balance: timeFilter === "THIS_ROUND" ? trades.reduce((sum, trade) => sum + (Number(trade.matchedStake) || 0), 0) + realized : getUserCash(userName),
        tradesCount: trades.length,
        winRate: settled.length ? Math.round((wins / settled.length) * 100) : 0,
        realized,
        largestOpen
      };
    })
    .sort((a, b) => {
      if (b.balance !== a.balance) return b.balance - a.balance;
      if (b.realized !== a.realized) return b.realized - a.realized;
      return b.tradesCount - a.tradesCount;
    });
}

function renderHomeMarketLeaderboard(container, rows, presenter, options = {}) {
  if (!container) return;
  const scrollKey = options.scrollKey || container.id || "home-group";
  const fullLeaderboardLinkMarkup = options.fullLeaderboardKey
    ? `<button class="home-full-leaderboard-link" type="button" data-home-full-leaderboard="${options.fullLeaderboardKey}">View full leaderboard →</button>`
    : "";
  if (!rows.length) {
    container.innerHTML = `<div class="portfolio-empty-state"><strong>No markets yet</strong><span>${options.emptyMessage || "Market activity will appear here once trading begins."}</span></div>${fullLeaderboardLinkMarkup}`;
    container.querySelector("[data-home-full-leaderboard]")?.addEventListener("click", () => {
      openAppModal(options.fullLeaderboardKey);
    });
    return;
  }
  const summaryMarkup = (options.summaryItems || []).length
    ? `<div class="home-group-summary">${options.summaryItems
        .map((item) => `<span><strong>${item.value}</strong><em>${item.label}</em></span>`)
        .join("")}</div>`
    : "";
  const headingMarkup = options.variant === "featured-market-confidence"
    ? `<div class="home-group-card-head has-action"><div class="home-group-card-title"><h3>${options.headingTitle || ""}</h3>${summaryMarkup}</div><button class="market-confidence-info home-market-confidence-info" type="button" data-home-market-confidence-info aria-label="Explain market confidence">i</button></div>`
    : `<div class="home-group-card-head"><h3>${options.headingTitle || ""}</h3>${summaryMarkup}</div>`;
  const visibleRows = options.skipFirstListItem ? rows.slice(1) : rows;
  if (!visibleRows.length) {
    container.innerHTML = `<article class="home-group-card">${headingMarkup}<div class="portfolio-empty-state compact-empty"><strong>No additional players yet</strong><span>${options.emptyMessage || "More player movement will appear here as the round develops."}</span></div></article>${fullLeaderboardLinkMarkup}`;
    container.querySelector("[data-home-full-leaderboard]")?.addEventListener("click", () => {
      openAppModal(options.fullLeaderboardKey);
    });
    return;
  }
  if (options.variant === "compact-projection-group") {
    container.innerHTML = `<article class="home-group-card">${headingMarkup}<div class="home-group-card-body" data-scroll-key="${scrollKey}">${visibleRows
      .map((row, index) => {
        const market = row.market || row;
        const view = presenter({ market, ...row }, index);
        const note = view.note ? `<span class="home-card-note">${view.note}</span>` : "";
        return `<button class="home-projection-subcard" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}">${homeRankMarkup(index)}<div class="home-projection-copy"><div class="home-card-mainline"><strong>${market.playerName}</strong></div><div class="home-projection-meta-row"><span class="home-team-badge" style="${homeTeamPillStyle(market.team)}">${homeTeamAbbreviation(market.team)}</span><span>${market.position}</span></div>${note}</div><div class="home-projection-metric"><strong>${view.statPrimary || `${market.currentLine.toFixed(1)} pts`}</strong></div></button>`;
      })
      .join("")}</div></article>${fullLeaderboardLinkMarkup}`;
    container.querySelectorAll("[data-market-id]").forEach((card) =>
      card.addEventListener("click", () => {
        openMarketFromHome(card.dataset.marketId);
      })
    );
    container.querySelector("[data-home-full-leaderboard]")?.addEventListener("click", () => {
      openAppModal(options.fullLeaderboardKey);
    });
    return;
  }
  if (options.variant === "compact-list-group") {
    container.innerHTML = `<article class="home-group-card">${headingMarkup}<div class="home-group-card-body" data-scroll-key="${scrollKey}">${visibleRows
      .map((row, index) => {
        const market = row.market || row;
        const view = presenter({ market, ...row }, index);
        const note = view.note ? `<span class="home-card-note">${view.note}</span>` : "";
        const isHeroCard = index === 0 && (options.headingTitle === "Gainers" || options.headingTitle === "Losers");
        return `<button class="home-projection-subcard home-list-subcard ${view.cardClassName || ""} ${isHeroCard ? "is-rank-hero" : ""}" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}">${homeRankMarkup(index)}<div class="home-projection-copy"><div class="home-card-mainline"><strong>${view.title}</strong></div><div class="home-projection-meta-row"><span class="home-team-badge ${view.badgeTone || ""}" style="${homeTeamPillStyle(market.team)}">${view.badge || homeTeamAbbreviation(market.team)}</span><span>${view.detail}</span></div>${note}</div>${renderHomeMetricMarkup({ ...view, metricHero: isHeroCard }, view.badgeTone)}</button>`;
      })
      .join("")}</div></article>${fullLeaderboardLinkMarkup}`;
    container.querySelectorAll("[data-market-id]").forEach((card) =>
      card.addEventListener("click", () => {
        openMarketFromHome(card.dataset.marketId);
      })
    );
    container.querySelector("[data-home-full-leaderboard]")?.addEventListener("click", () => {
      openAppModal(options.fullLeaderboardKey);
    });
    return;
  }
  if (options.variant === "featured-market-confidence") {
    container.innerHTML = `<article class="home-group-card home-group-card-featured">${headingMarkup}<div class="home-group-card-body" data-scroll-key="${scrollKey}">${visibleRows
      .map((row, index) => {
        const market = row.market || row;
        const view = presenter({ market, ...row }, index);
        const note = view.note ? `<span class="home-card-note">${view.note}</span>` : "";
        const confidence = Number(view.confidence) || 0;
        const confidenceClassName = confidence >= 71 ? "is-high" : confidence >= 41 ? "is-mid" : "is-low";
        return `<button class="home-projection-subcard home-list-subcard home-confidence-subcard" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}">${homeRankMarkup(index)}<div class="home-confidence-row"><div class="home-confidence-copy"><div class="home-card-mainline"><strong>${view.title}</strong></div><div class="home-projection-meta-row"><span class="home-team-badge" style="${homeTeamPillStyle(market.team)}">${view.badge || homeTeamAbbreviation(market.team)}</span><span>${view.detail || matchupContext(market).label}</span></div>${note}</div><div class="home-confidence-metric-block"><div class="home-confidence-primary">${createHomeConfidenceGauge(confidence)}<span class="home-confidence-percent ${confidenceClassName}">${view.statPrimary || `${confidence}%`}</span></div><strong class="home-confidence-projection">${view.statSecondary || `${market.currentLine.toFixed(1)} pts`}</strong></div></div></button>`;
      })
      .join("")}</div></article>`;
    container.querySelectorAll("[data-market-id]").forEach((card) =>
      card.addEventListener("click", () => {
        openMarketFromHome(card.dataset.marketId);
      })
    );
    container.querySelector("[data-home-market-confidence-info]")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openAppModal("market-confidence-info");
    });
    return;
  }
  container.innerHTML = visibleRows
    .map((row, index) => {
      const market = row.market || row;
      const view = presenter({ market, ...row }, index);
      const note = view.note ? `<span class="home-card-note">${view.note}</span>` : "";
      return `<button class="home-leaderboard-card" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}">${homeRankMarkup(index)}<div class="home-card-copy"><div class="home-card-topline"><strong>${view.title}</strong></div><div class="home-projection-meta-row"><span class="home-team-badge ${view.badgeTone || ""}" style="${homeTeamPillStyle(market.team)}">${view.badge || homeTeamAbbreviation(market.team)}</span><span>${view.detail}</span></div>${note}<span class="home-projection-label">Crowd projection ${market.currentLine.toFixed(1)} pts</span></div><div class="home-card-metric"><strong>${view.statPrimary}</strong></div></button>`;
    })
    .join("");
  container.querySelectorAll("[data-market-id]").forEach((card) =>
    card.addEventListener("click", () => {
      openMarketFromHome(card.dataset.marketId);
    })
  );
}

function renderHomeUserLeaderboard(container, rows) {
  if (!container) return;
  if (!rows.length) {
    container.innerHTML = `<div class="portfolio-empty-state"><strong>No leaderboard yet</strong><span>Community rankings will appear once users place trades.</span></div>`;
    return;
  }
  const activeUser = currentUserName().toLowerCase();
  const topRows = rows.slice(0, 3);
  const currentUserRow = rows.find((row) => row.userName.toLowerCase() === activeUser) || null;
  const showCurrentUserRow = currentUserRow && !topRows.some((row) => row.userName.toLowerCase() === activeUser);
  container.innerHTML = `<article class="home-leaderboard-snapshot-card"><div class="home-leaderboard-snapshot-head"><div><p class="eyebrow">Leaderboard</p></div><button class="home-leaderboard-snapshot-link" type="button" data-open-leaderboard="true">View full leaderboard →</button></div><div class="home-leaderboard-snapshot-body">${topRows
    .map((row, index) => homeLeaderboardSnapshotRowMarkup(row, index, row.userName.toLowerCase() === activeUser))
    .join("")}${showCurrentUserRow ? `<div class="home-leaderboard-current-divider">— #${rows.findIndex((row) => row.userName.toLowerCase() === activeUser) + 1} You —</div>${homeLeaderboardSnapshotRowMarkup(currentUserRow, rows.findIndex((row) => row.userName.toLowerCase() === activeUser), true)}` : ""}</div></article>`;
  container.querySelectorAll("[data-open-leaderboard]").forEach((button) =>
    button.addEventListener("click", () => {
      openFullLeaderboard();
    })
  );
}

function homeLeaderboardSnapshotRowMarkup(row, index, isCurrentUser = false) {
  const metaLabel = row.tradesCount === 0 && row.winRate === 0 ? "—" : `${row.tradesCount} trades | ${row.winRate}% win rate`;
  return `<button class="home-leaderboard-snapshot-row ${isCurrentUser ? "is-current-user" : ""}" type="button" data-open-leaderboard="true"><div class="leaderboard-rank ${homeRankTone(index)}">${index + 1}</div><div class="home-leaderboard-snapshot-copy"><strong>${row.userName}</strong><span>${metaLabel}</span></div><div class="home-leaderboard-snapshot-balance">${formatStake(row.balance)}</div></button>`;
}

function leaderboardRowMarkup(row, index, isCurrentUser = false) {
  const metaLabel = row.tradesCount === 0 && row.winRate === 0 ? "—" : `${row.tradesCount} trades | ${row.winRate}% win rate`;
  const openPositionLabel = row.largestOpen ? `${row.largestOpen.playerName ?? findMarket(row.largestOpen.marketId)?.playerName ?? "Unknown"} ${row.largestOpen.side} ${row.largestOpen.entryLine.toFixed(1)} | ${formatStake(row.largestOpen.stake)}` : "No open position";
  return `<article class="leaderboard-card ${index < 3 ? "is-top-rank" : ""} ${isCurrentUser ? "is-current-user" : ""}"><div class="leaderboard-rank ${homeRankTone(index)}">${index + 1}</div><div class="leaderboard-copy"><strong>${row.userName}</strong><span class="leaderboard-meta">${metaLabel}</span><span class="leaderboard-position">${openPositionLabel}</span></div><div class="leaderboard-metric"><strong>${formatStake(row.balance)}</strong><span class="${row.realized > 0 ? "positive" : row.realized < 0 ? "negative" : ""}">${formatSignedStake(row.realized)}</span></div></article>`;
}

function openFullLeaderboard() {
  uiState.activeScreen = "leaderboard";
  renderAll();
  window.requestAnimationFrame(() => {
    elements.leaderboardScreenScroll?.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function filterMarkets(term) {
  if (!term) return state.markets;
  return state.markets.filter((market) => `${market.playerName} ${market.team} ${market.position}`.toLowerCase().includes(term));
}

function openMarketFromHome(marketId) {
  const market = findMarket(marketId);
  if (!market) return;
  uiState.activeScreen = "markets";
  uiState.currentGameId = market.gameId;
  uiState.currentTeam = market.team;
  uiState.selectedMarketId = market.id;
  uiState.expandedMarketId = market.id;
  trackMarketViewed(market.id, "home");
  renderAll();
  scrollExpandedMarketIntoView(market.id);
}

function renderHomeSplitMarketLeaderboard(container, options = {}) {
  if (!container) return;
  const gainers = options.gainers || [];
  const losers = options.losers || [];
  const fallbackRows = options.fallbackRows || [];
  const fallbackGainers = !gainers.length && !losers.length ? fallbackRows.slice(0, 10) : [];
  const fallbackLosers = !gainers.length && !losers.length ? fallbackRows.slice(10, 20) : [];
  const buildCard = (rows, headingEyebrow, headingTitle) => {
    if (!rows.length) {
      return `<article class="home-group-card"><div class="home-group-card-head"><p class="eyebrow">${headingEyebrow}</p><h3>${headingTitle}</h3></div><div class="portfolio-empty-state compact-empty"><strong>No movement yet</strong><span>This side of the board is still flat.</span></div></article>`;
    }
    const keySlug = headingTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return `<article class="home-group-card"><div class="home-group-card-head"><p class="eyebrow">${headingEyebrow}</p><h3>${headingTitle}</h3></div><div class="home-group-card-body" data-scroll-key="${container.id || "home-movers"}:${keySlug}">${rows
      .map((row, index) => {
        const market = row.market || row;
        const view = options.presenter({ market, ...row }, index);
        return `<button class="home-projection-subcard home-list-subcard" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}"><span class="home-card-rank">${index + 1}</span><div class="home-projection-copy"><strong>${view.title}</strong><span>${view.detail}</span></div><div class="home-projection-metric"><strong>${view.statPrimary}</strong><span>${view.statSecondary}</span></div></button>`;
      })
      .join("")}</div></article>`;
  };
  container.innerHTML = `<div class="home-split-grid">${buildCard(gainers.length ? gainers : fallbackGainers, "What's moving", "Biggest Gainers")}${buildCard(losers.length ? losers : fallbackLosers, "What's fading", "Biggest Losers")}</div>`;
  container.querySelectorAll("[data-market-id]").forEach((card) =>
    card.addEventListener("click", () => {
      openMarketFromHome(card.dataset.marketId);
    })
  );
}

function calculateCurrentLine(market) {
  const imbalance = calculatePressureImbalance(market);
  const steps = Math.trunc(imbalance / PRESSURE_STEP) + (market.manualAdjustmentSteps ?? 0);
  return normalizeProjectionLine(market.initialLine + steps * LINE_STEP);
}

function calculateNextLine(market, side, stake) {
  let nextLine = Number(market.currentLine) || 0;
  let pressureBalance = Number(market.pressureBalance) || 0;
  pressureBalance += (side === "OVER" ? 1 : -1) * stake;
  while (Math.abs(pressureBalance) >= PRESSURE_STEP) {
    nextLine += Math.sign(pressureBalance) * LINE_STEP;
    pressureBalance -= Math.sign(pressureBalance) * PRESSURE_STEP;
  }
  return normalizeProjectionLine(nextLine);
}

function calculatePressureImbalance(market) {
  return Number(market.netPressure) || 0;
}


function getMovementValue(market) {
  return roundToHalf(market.currentLine - market.initialLine);
}

function getMovementText(market) {
  const value = getMovementValue(market);
  if (value > 0) return { value, arrow: "\u2191", label: `+${value.toFixed(1)}`, className: "move-up" };
  if (value < 0) return { value, arrow: "\u2193", label: `${value.toFixed(1)}`, className: "move-down" };
  return { value: 0, arrow: "\u2192", label: "0.0", className: "move-flat" };
}

function quickPickPerformanceSummary(market) {
  const roundNumber = currentRoundNumber();
  const playerKey = normalizePlayerKey(market.playerName);
  const seasonScores = (derivedData.roundScoresByPlayer?.[playerKey] || [])
    .filter((entry) => Number.isFinite(Number(entry?.score)))
    .sort((left, right) => Number(left.round) - Number(right.round));
  const recentSeasonScores = seasonScores
    .filter((entry) => !Number.isFinite(roundNumber) || Number(entry.round) < roundNumber)
    .slice(-5)
    .map((entry) => ({
      label: `Round ${entry.round}`,
      value: String(Math.round(Number(entry.score))),
      score: Number(entry.score),
      isMissing: false
    }));
  const needsPreviousSeasonFill = Number(roundNumber) === 3 ? Math.max(0, 5 - recentSeasonScores.length) : 0;
  const previousSeasonFill = Array.from({ length: needsPreviousSeasonFill }, (_, index) => ({
    label: `Previous season game ${index + 1} unavailable`,
    value: "—",
    score: null,
    isMissing: true
  }));
  const lastFive = [...previousSeasonFill, ...recentSeasonScores].slice(-5);
  const availableScores = seasonScores
    .filter((entry) => !Number.isFinite(roundNumber) || Number(entry.round) < roundNumber)
    .map((entry) => Number(entry.score))
    .filter(Number.isFinite);
  const stats = fantasyPlayerStatsFor(market);
  const seasonAverage = availableScores.length
    ? availableScores.reduce((sum, score) => sum + score, 0) / availableScores.length
    : Number(stats?.seasonAverage ?? market.seasonAverage ?? market.initialLine ?? 0);
  const seasonAverageLabel = Number.isFinite(seasonAverage) ? seasonAverage.toFixed(1) : "—";
  return {
    lastFive: lastFive.length ? lastFive : Array.from({ length: 5 }, (_, index) => ({
      label: `Game ${index + 1} unavailable`,
      value: "—",
      score: null,
      isMissing: true
    })),
    seasonAverageLabel
  };
}

function getMarketStatus(market) {
  if (market.settlement) return { label: "Resolved", className: "status-resolved" };
  if (isMarketLocked(market)) return { label: "Locked", className: "status-locked" };
  return { label: "Open", className: "status-open" };
}

function getTradeStatus(trade) {
  if (!trade.result) {
    if (trade.status === "PARTIALLY_MATCHED") return { label: "Partial match", className: "status-open" };
    if (trade.status === "PENDING") return { label: "Unmatched", className: "status-locked" };
    if (trade.status === "MATCHED") return { label: "Matched", className: "status-open" };
    if (trade.status === "CANCELLED") return { label: "Cancelled", className: "status-locked" };
    return { label: "Open", className: "status-open" };
  }
  if (trade.result.outcome === "WIN") return { label: "Win", className: "status-win" };
  if (trade.result.outcome === "LOSS") return { label: "Loss", className: "status-loss" };
  if (trade.result.outcome === "MIDDLE") return { label: "Middle", className: "status-loss" };
  return { label: "Void", className: "status-push" };
}

function applyStatusChip(element, status) {
  element.className = `status-chip ${status.className}`;
  element.textContent = status.label;
}

function portfolioPositionStatus(trade) {
  if (trade.result || trade.status === "CANCELLED") {
    return { label: "Settled", className: "status-push" };
  }
  if (trade.status === "PENDING" || trade.status === "PARTIALLY_MATCHED" || (Number(trade.unmatchedStake) || 0) > 0) {
    return { label: "Unmatched", className: "status-locked" };
  }
  return { label: "Matched", className: "status-open" };
}

function summaryStat(label, value, tone = 0) {
  return `<div class="summary-stat"><span>${label}</span><strong class="${tone > 0 ? "positive" : tone < 0 ? "negative" : ""}">${value}</strong></div>`;
}

function positionMetric(label, value, tone = 0) {
  return `<div class="position-metric"><span>${label}</span><strong class="${tone > 0 ? "positive" : tone < 0 ? "negative" : ""}">${value}</strong></div>`;
}

function currentUserName() {
  return localStorage.getItem(USER_NAME_KEY)?.trim() || elements.authUsername?.value.trim() || DEFAULT_USER_NAME;
}

function findMarket(marketId) {
  return state.markets.find((market) => market.id === marketId);
}

function gameTitleFor(gameId) {
  return roundGames.find((game) => game.id === gameId)?.title ?? "Round game";
}

function projectionValue(market) {
  return Number(market?.currentLine ?? market?.initialLine ?? 0);
}

function initialMovement(market) {
  return Number(market?.currentLine ?? market?.initialLine ?? 0) - Number(market?.initialLine ?? 0);
}

function authPreviewActivity(market) {
  return Number(market?.trades?.length || 0) * 100 + projectionValue(market);
}

function matchupContextForPreview(market) {
  const game = roundGames.find((roundGame) => roundGame.id === market.gameId);
  if (!game) return { label: market.team };
  const isHome = game.homeTeam === market.team;
  const opponent = isHome ? game.awayTeam : game.homeTeam;
  return { label: `vs ${opponent} (${isHome ? "Home" : "Away"})` };
}

function movementCopyForPreview(market) {
  const value = initialMovement(market);
  if (value > 0) return `+${value.toFixed(1)} pts`;
  if (value < 0) return `${value.toFixed(1)} pts`;
  return "Holding steady";
}

function normalizePlayerKey(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function stableHash(value) {
  let hash = 2166136261;
  const input = String(value || "");
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function randomToken() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function randomizeQuickPickOrder() {
  uiState.quickPickShuffleSeed = randomToken();
  uiState.quickPickSeenMarketIds = [];
  uiState.quickPickMarketIds = [];
  uiState.quickPickActiveIndex = 0;
  uiState.quickPickPendingCardId = "";
  uiState.quickPickPendingSide = "";
  uiState.quickPickPendingRequestId = "";
}

function quickPickShuffleRank(market) {
  return stableHash(`${uiState.quickPickShuffleSeed}:${market?.id || ""}`);
}

function fantasyPlayerStatsFor(market) {
  return derivedData.playerStatsByName?.[normalizePlayerKey(market.playerName)] || null;
}

function parseRoundNumberFromLabel(label) {
  const match = String(label || "").match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

function roundLabelForNumber(roundNumber) {
  return roundGames.find((game) => parseRoundNumberFromLabel(game.roundLabel) === Number(roundNumber))?.roundLabel || `Round ${roundNumber}`;
}

function getAvailableRoundOptions() {
  return AVAILABLE_ROUND_NUMBERS.length ? AVAILABLE_ROUND_NUMBERS : [3];
}

function activeRoundNumber() {
  const roundNumber = Number(state.activeRoundNumber ?? prizePoolState?.roundNumber);
  return Number.isFinite(roundNumber) ? roundNumber : (parseRoundNumberFromLabel(CURRENT_ROUND_LABEL) || 3);
}

function activeRoundLabel() {
  const roundLabel = state.activeRoundLabel ?? prizePoolState?.roundLabel;
  return roundLabel || roundLabelForNumber(activeRoundNumber());
}

function marketRoundNumber(market) {
  return parseRoundNumberFromLabel(roundGames.find((game) => game.id === market?.gameId)?.roundLabel);
}

function getActiveRoundGames() {
  return roundGames.filter((game) => parseRoundNumberFromLabel(game.roundLabel) === activeRoundNumber());
}

function getActiveRoundMarkets() {
  return state.markets.filter((market) => marketRoundNumber(market) === activeRoundNumber());
}

function getAdminRoundMarkets() {
  return getActiveRoundMarkets();
}

function currentRoundNumber() {
  return activeRoundNumber();
}

function pricedAtProjectionFromPrice(price) {
  const normalizedPrice = Number(price);
  if (!Number.isFinite(normalizedPrice) || normalizedPrice <= 0) return null;
  return Math.round((normalizedPrice / 12800) * 10) / 10;
}

function priceImpliedProjectionForMarket(market) {
  const stats = fantasyPlayerStatsFor(market);
  const pricedAtProjection = pricedAtProjectionFromPrice(stats?.currentPrice ?? market?.fantasyPrice);
  if (pricedAtProjection !== null) return pricedAtProjection;
  return Number(stats?.priceImpliedProjection ?? market.priceImpliedProjection ?? 0) || null;
}

function confidenceLabel(confidence) {
  if (confidence >= 70) return "High confidence";
  if (confidence >= 40) return "Building confidence";
  return "Early market";
}

function optionalTrendText(market) {
  const movement = getMovementText(market);
  if (movement.value > 0) return `${movement.arrow} ${movement.label} today`;
  if (movement.value < 0) return `${movement.arrow} ${movement.label} today`;
  return "Holding steady";
}

function tradeCountFor(market) {
  if (Number.isFinite(Number(market?.tradeMetrics?.tradeCount))) {
    return Number(market.tradeMetrics.tradeCount) || 0;
  }
  return market.trades?.length || 0;
}

function tradeVolumeFor(market) {
  return formatStake(getMarketTradeMetrics(market).volume);
}

function formatSignedLine(value) {
  if (value === 0) return "0.0";
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}`;
}

function clampNumber(value, min, max) {
  return Math.max(min, Math.min(max, Number(value) || 0));
}

function opponentForMarket(market) {
  const game = roundGames.find((roundGame) => roundGame.id === market.gameId);
  if (!game) return "Opponent";
  return game.homeTeam === market.team ? game.awayTeam : game.homeTeam;
}

function matchupContext(market) {
  const game = roundGames.find((roundGame) => roundGame.id === market.gameId);
  if (!game) return { opponent: "Opponent", venue: "Home", label: "vs Opponent" };
  const isHome = game.homeTeam === market.team;
  const opponent = isHome ? game.awayTeam : game.homeTeam;
  return {
    opponent,
    venue: isHome ? "Home" : "Away",
    label: `vs ${opponent} (${isHome ? "Home" : "Away"})`
  };
}

function formatStake(value) {
  return `$${WHOLE_NUMBER_FORMATTER.format(Math.abs(value))}`;
}

function formatSignedStake(value) {
  if (value === 0) return "$0";
  return `${value > 0 ? "+" : "-"}$${WHOLE_NUMBER_FORMATTER.format(Math.abs(value))}`;
}

function formatPercentage(value) {
  return `${(Number(value) * 100).toFixed(0)}%`;
}

function formatLine(value) {
  return `${value.toFixed(1)} pts`;
}

function formatTimestamp(timestamp) {
  return new Date(timestamp).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function formatTradeFinalScore(result) {
  return Number.isFinite(Number(result?.finalScore)) ? Number(result.finalScore).toFixed(1) : "No result";
}

function formatTradeResultLabel(result) {
  return Number.isFinite(Number(result?.finalScore)) ? `Final ${Number(result.finalScore).toFixed(1)}` : "No result";
}


function getMarketTradeMetrics(market) {
  if (market?.tradeMetrics && typeof market.tradeMetrics === "object") {
    const matchedTradeCount = Number(market.tradeMetrics.matchedTradeCount) || 0;
    const volume = Number(market.tradeMetrics.volume) || 0;
    const uniqueTraders = Number(market.tradeMetrics.uniqueTraders) || 0;
    return {
      volume,
      liveExposure: Number(market.tradeMetrics.liveExposure) || 0,
      availableLiquidity: Number(market.tradeMetrics.availableLiquidity) || 0,
      netPressure: Number(market.tradeMetrics.netPressure) || 0,
      unmatchedOrderCount: Number(market.tradeMetrics.unmatchedOrderCount) || 0,
      matchedTradeCount,
      uniqueTraders,
      confidence: Number.isFinite(Number(market.tradeMetrics.confidence))
        ? Number(market.tradeMetrics.confidence)
        : marketConfidenceScore({ matchedTradeCount, volume, uniqueTraders })
    };
  }
  const trades = market.trades || [];
  const volume = trades.reduce((sum, trade) => sum + (Number(trade.stake) || 0), 0);
  const openTrades = trades.filter((trade) => !trade.result && trade.status !== "CANCELLED");
  const matchedTrades = trades.filter((trade) => (Number(trade.matchedStake) || 0) > 0);
  const liveExposure = openTrades.reduce((sum, trade) => sum + (Number(trade.matchedStake) || 0), 0);
  const availableLiquidity = openTrades.reduce((sum, trade) => sum + (Number(trade.unmatchedStake) || 0), 0);
  const unmatchedOrderCount = openTrades.filter((trade) => (Number(trade.unmatchedStake) || 0) > 0).length;
  const matchedTradeCount = matchedTrades.length;
  const uniqueTraders = new Set(trades.map((trade) => trade.userName).filter(Boolean)).size;
  const confidence = marketConfidenceScore({ matchedTradeCount, volume, uniqueTraders });
  return {
    volume,
    liveExposure,
    availableLiquidity,
    netPressure: Number(market.netPressure) || 0,
    unmatchedOrderCount,
    matchedTradeCount,
    uniqueTraders,
    confidence
  };
}

function marketConfidenceScore({ matchedTradeCount, volume, uniqueTraders }) {
  const matchedSignal = 1 - Math.exp(-matchedTradeCount / 6);
  const volumeSignal = 1 - Math.exp(-volume / 220);
  const traderSignal = 1 - Math.exp(-uniqueTraders / 5);
  return Math.round(Math.min(0.97, matchedSignal * 0.45 + volumeSignal * 0.4 + traderSignal * 0.15) * 100);
}

function compareQuickTakeMarkets(left, right) {
  return quickPickShuffleRank(left) - quickPickShuffleRank(right)
    || left.id.localeCompare(right.id);
}

function marketConfidenceMarkup(confidence, compact = false) {
  const tone = confidence >= 70 ? "high" : confidence >= 40 ? "mid" : "low";
  const needle = -78 + (Math.max(0, Math.min(100, confidence)) / 100) * 156;
  if (compact) {
    return `<button class="market-confidence market-confidence-trigger compact ${tone}" type="button" aria-label="Explain market confidence. Current confidence ${confidence}%"><span class="market-confidence-body"><span class="market-confidence-dial" style="--needle-angle:${needle}deg"><svg viewBox="0 0 120 76" aria-hidden="true"><path class="dial-arc" d="M14 62 A46 46 0 0 1 106 62" pathLength="100" /><path class="dial-tick" d="M24 58 L31 55" /><path class="dial-tick" d="M38 39 L42 45" /><path class="dial-tick" d="M60 30 L60 38" /><path class="dial-tick" d="M82 39 L78 45" /><path class="dial-tick" d="M96 58 L89 55" /><text x="18" y="74">E</text><text x="98" y="74">F</text></svg><span class="market-confidence-needle"></span><span class="market-confidence-pivot"></span></span><span class="market-confidence-value">${confidence}%</span></span></button>`;
  }
  return `<span class="market-confidence ${tone}" aria-label="Market confidence ${confidence}%"><span class="market-confidence-head"><span class="market-confidence-label">Market confidence</span></span><button class="market-confidence-trigger market-confidence-body" type="button" aria-label="Explain market confidence. Current confidence ${confidence}%"><span class="market-confidence-dial" style="--needle-angle:${needle}deg"><svg viewBox="0 0 120 76" aria-hidden="true"><path class="dial-arc" d="M14 62 A46 46 0 0 1 106 62" pathLength="100" /><path class="dial-tick" d="M24 58 L31 55" /><path class="dial-tick" d="M38 39 L42 45" /><path class="dial-tick" d="M60 30 L60 38" /><path class="dial-tick" d="M82 39 L78 45" /><path class="dial-tick" d="M96 58 L89 55" /><text x="18" y="74">E</text><text x="98" y="74">F</text></svg><span class="market-confidence-needle"></span><span class="market-confidence-pivot"></span></span><span class="market-confidence-value">${confidence}%</span></button></span>`;
}

function marketConfidenceRowIcon(confidence) {
  const tone = confidence >= 70 ? "high" : confidence >= 40 ? "mid" : "low";
  const needle = -78 + (Math.max(0, Math.min(100, confidence)) / 100) * 156;
  return `<span class="market-confidence-row-icon ${tone}" aria-label="Market confidence ${confidence}%"><svg viewBox="0 0 28 18" aria-hidden="true"><path class="confidence-row-arc" d="M3 15 A11 11 0 0 1 25 15" /><path class="confidence-row-tick" d="M8 14 L10 12" /><path class="confidence-row-tick" d="M14 8 L14 11" /><path class="confidence-row-tick" d="M20 14 L18 12" /></svg><span class="market-confidence-row-needle" style="--needle-angle:${needle}deg"></span><span class="market-confidence-row-pivot"></span></span>`;
}

function playerCardTone(market) {
  const colors = TEAM_COLORS[market.team] ?? TEAM_COLORS[normalizeTeamName(market.team)] ?? { primary: "#101722", secondary: "#68d9ff" };
  const matchup = matchupContext(market);
  const opponentColors = TEAM_COLORS[matchup.opponent] ?? TEAM_COLORS[normalizeTeamName(matchup.opponent)] ?? { primary: "#101722", secondary: "#47d6cd" };
  return `--player-card-primary:${hexToRgba(colors.primary, 0.24)};--player-card-secondary:${hexToRgba(opponentColors.secondary || opponentColors.primary, 0.18)};`;
}

function teamSurfaceTone(team) {
  const colors = TEAM_COLORS[team] ?? TEAM_COLORS[normalizeTeamName(team)] ?? { primary: "#101722", secondary: "#68d9ff" };
  return `--team-surface-primary:${hexToRgba(colors.primary, 0.46)};--team-surface-secondary:${hexToRgba(colors.secondary || colors.primary, 0.26)};`;
}

function marketLeanLabel(netPressure) {
  if (netPressure > 0) return `Over +${Math.abs(netPressure).toFixed(0)}`;
  if (netPressure < 0) return `Under +${Math.abs(netPressure).toFixed(0)}`;
  return "Balanced";
}

function roundToHalf(value) {
  return Math.round(value * 2) / 2;
}

function createHomeConfidenceGauge(percentage) {
  const radius = 16;
  const circumference = Math.PI * radius;
  const fillLength = (Math.max(0, Math.min(100, Number(percentage) || 0)) / 100) * circumference;
  const gapLength = circumference - fillLength;
  const colour = percentage >= 71 ? "#00C853" : percentage >= 41 ? "#F59E0B" : "#FF3D3D";
  return `
    <svg class="home-confidence-gauge" width="36" height="20" viewBox="0 0 36 20" aria-hidden="true">
      <path d="M 2 18 A 16 16 0 0 1 34 18" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3" stroke-linecap="round"></path>
      <path d="M 2 18 A 16 16 0 0 1 34 18" fill="none" stroke="${colour}" stroke-width="3" stroke-linecap="round" stroke-dasharray="${fillLength} ${gapLength}" class="gauge-fill"></path>
    </svg>
  `;
}

function isMarketOpen(market) {
  return !isMarketLocked(market);
}

function stopKickoffTimer() {
  if (!kickoffTimer) return;
  window.clearTimeout(kickoffTimer);
  kickoffTimer = null;
}

function scheduleKickoffRefresh() {
  stopKickoffTimer();
  const nextGame = nextScheduledKickoff();
  if (!nextGame) return;
  const nextKickoff = kickoffTimestampForGame(nextGame);
  if (!Number.isFinite(nextKickoff)) return;
  kickoffTimer = window.setTimeout(() => {
    renderAll();
  }, Math.min(Math.max(nextKickoff - Date.now(), 0) + 50, 2147483647));
}

function nextScheduledKickoff() {
  return getActiveRoundGames().find((game) => {
    const kickoffAt = kickoffTimestampForGame(game);
    return Number.isFinite(kickoffAt) && kickoffAt > Date.now();
  }) || null;
}

function nextGameToLock() {
  const activeRoundGames = getActiveRoundGames();
  return activeRoundGames.find((game) => !isGameLocked(game)) || activeRoundGames[activeRoundGames.length - 1] || null;
}

function kickoffTimestampForGame(game) {
  if (!game) return null;
  const kickoffAt = Number(new Date(game.kickoffAt || "").getTime());
  if (Number.isFinite(kickoffAt) && kickoffAt > 0) return kickoffAt;
  const fallback = parseKickoffLabel(game.kickoff);
  return Number.isFinite(fallback) ? fallback : null;
}

function parseKickoffLabel(label) {
  const match = String(label || "").match(/^[A-Za-z]{3}\s+(\d{1,2})\s+([A-Za-z]{3})\s+(\d{1,2}):(\d{2})\s+(AM|PM)$/i);
  if (!match) return null;
  const [, day, monthLabel, hourLabel, minuteLabel, period] = match;
  const monthMap = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
  const month = monthMap[monthLabel];
  if (month === undefined) return null;
  let hour = Number(hourLabel);
  if (period.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (period.toUpperCase() === "AM" && hour === 12) hour = 0;
  const now = Date.now();
  let year = new Date().getFullYear();
  let ts = new Date(year, month, Number(day), hour, Number(minuteLabel), 0, 0).getTime();
  if (ts < now - 180 * 24 * 60 * 60 * 1000) {
    ts = new Date(year + 1, month, Number(day), hour, Number(minuteLabel), 0, 0).getTime();
  }
  return ts;
}

function isGameLocked(game, now = Date.now()) {
  if (isGameForceOpen(game)) return false;
  const kickoffAt = kickoffTimestampForGame(game);
  return Number.isFinite(kickoffAt) ? now >= kickoffAt : false;
}

function isGameForceOpen(game) {
  if (!game) return false;
  const forceOpenGameIds = Array.isArray(state.forceOpenGameIds) ? state.forceOpenGameIds : [];
  return forceOpenGameIds.includes(game.id);
}

function isMarketLocked(market, now = Date.now()) {
  if (!market) return true;
  if (market.settlement || market.manuallyLocked) return true;
  return isGameLocked(findGame(market.gameId), now);
}

function getGameLockStatus(game) {
  const isLocked = isGameLocked(game);
  return {
    isLocked,
    label: isLocked ? "Locked" : "Open"
  };
}

function formatGameKickoffLabel(game) {
  const kickoffAt = kickoffTimestampForGame(game);
  if (!Number.isFinite(kickoffAt)) return game?.kickoff || "";
  return new Date(kickoffAt).toLocaleString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}

function normalizeProjectionLine(value) {
  return Math.round(value);
}

function shuffleArray(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function arraysEqual(left, right) {
  if (left.length !== right.length) return false;
  return left.every((value, index) => value === right[index]);
}

function hexToRgba(hex, alpha) {
  const cleaned = hex.replace("#", "");
  const normalized = cleaned.length === 3
    ? cleaned.split("").map((char) => char + char).join("")
    : cleaned;
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function captureScreenScrollPositions() {
  return new Map(
    elements.screenScrolls
      .map((element) => [element.closest(".screen")?.dataset.screen, element.scrollTop])
      .filter(([screenKey]) => Boolean(screenKey))
  );
}

function restoreScreenScrollPositions(scrollPositions) {
  if (!(scrollPositions instanceof Map) || !scrollPositions.size) return;
  window.requestAnimationFrame(() => {
    elements.screenScrolls.forEach((element) => {
      const screenKey = element.closest(".screen")?.dataset.screen;
      if (!screenKey || !scrollPositions.has(screenKey)) return;
      element.scrollTop = scrollPositions.get(screenKey);
    });
  });
}

function captureNamedScrollPositions() {
  return new Map(
    [...document.querySelectorAll("[data-scroll-key]")]
      .map((element) => [element.dataset.scrollKey, element.scrollTop])
      .filter(([scrollKey]) => Boolean(scrollKey))
  );
}

function restoreNamedScrollPositions(scrollPositions) {
  if (!(scrollPositions instanceof Map) || !scrollPositions.size) return;
  window.requestAnimationFrame(() => {
    document.querySelectorAll("[data-scroll-key]").forEach((element) => {
      const scrollKey = element.dataset.scrollKey;
      if (!scrollKey || !scrollPositions.has(scrollKey)) return;
      element.scrollTop = scrollPositions.get(scrollKey);
    });
  });
}

function capturePersistentScrollPositions() {
  const persistentTargets = [
    ["home-carousel", elements.homeCarousel, "top"],
    ["home-carousel-nav", elements.homeCarouselNav, "top"],
    ["bot-log", elements.botLog, "smart"]
  ];
  return new Map(
    persistentTargets
      .filter(([, element]) => element)
      .map(([key, element, mode]) => [
        key,
        captureElementScrollPosition(element, mode)
      ])
  );
}

function restorePersistentScrollPositions(scrollPositions) {
  if (!(scrollPositions instanceof Map) || !scrollPositions.size) return;
  window.requestAnimationFrame(() => {
    const persistentTargets = [
      ["home-carousel", elements.homeCarousel],
      ["home-carousel-nav", elements.homeCarouselNav],
      ["bot-log", elements.botLog]
    ];
    persistentTargets.forEach(([key, element]) => {
      const position = scrollPositions.get(key);
      if (!element || !position) return;
      restoreElementScrollPosition(element, position);
    });
  });
}

function capturePageScrollPosition() {
  return {
    left: window.scrollX,
    top: window.scrollY
  };
}

function restorePageScrollPosition(position) {
  if (!position) return;
  window.requestAnimationFrame(() => {
    window.scrollTo(position.left, position.top);
  });
}

function captureElementScrollPosition(element, mode = "top") {
  if (!element) return null;
  if (mode === "smart") {
    const isNearTop = element.scrollTop <= 8;
    return {
      mode: isNearTop ? "top" : "bottom",
      left: element.scrollLeft,
      top: element.scrollTop,
      bottomOffset: element.scrollHeight - element.scrollTop
    };
  }
  return {
    mode: "top",
    left: element.scrollLeft,
    top: element.scrollTop
  };
}

function restoreElementScrollPosition(element, position) {
  if (!element || !position) return;
  element.scrollLeft = position.left || 0;
  if (position.mode === "bottom" && Number.isFinite(position.bottomOffset)) {
    element.scrollTop = Math.max(0, element.scrollHeight - position.bottomOffset);
    return;
  }
  element.scrollTop = position.top || 0;
}

function buildRenderSignature(nextState, nextBackendState) {
  try {
    return JSON.stringify({
      state: nextState,
      backend: nextBackendState,
      prizePool: prizePoolState
    });
  } catch (error) {
    return `${Date.now()}`;
  }
}

function aggregateOpenPositions(trades) {
  const grouped = new Map();
  trades.forEach((trade) => {
    const key = `${trade.marketId}|${trade.side}`;
    const current = grouped.get(key) ?? {
      marketId: trade.marketId,
      side: trade.side,
      stake: 0,
      activeStake: 0,
      matchedStake: 0,
      unmatchedStake: 0,
      cancelableOrderIds: [],
      weightedLineTotal: 0,
      entryUnderLine: trade.entryUnderLine ?? trade.entryLine,
      entryOverLine: trade.entryOverLine ?? trade.entryLine,
      timestamp: trade.timestamp,
      status: trade.status,
      playerName: trade.playerName,
      position: trade.position
    };
    const activeStake = (trade.matchedStake || 0) + (trade.unmatchedStake || 0);
    current.stake += trade.stake;
    current.activeStake += activeStake;
    current.matchedStake += trade.matchedStake || 0;
    current.unmatchedStake += trade.unmatchedStake || 0;
    current.weightedLineTotal += (trade.entryLine || 0) * (activeStake || trade.stake);
    if (trade.unmatchedStake > 0) {
      current.cancelableOrderIds.push(trade.id);
    }
    if (current.unmatchedStake > 0 && current.matchedStake > 0) {
      current.status = "PARTIALLY_MATCHED";
    } else if (current.unmatchedStake > 0) {
      current.status = "PENDING";
    } else {
      current.status = "MATCHED";
    }
    if (new Date(trade.timestamp) > new Date(current.timestamp)) {
      current.timestamp = trade.timestamp;
    }
    grouped.set(key, current);
  });
  return [...grouped.values()].map((holding) => ({
    ...holding,
    entryLine: holding.activeStake ? roundToHalf(holding.weightedLineTotal / holding.activeStake) : HALF_POINT,
    result: null
  }));
}

function linePairForMidpoint(midpoint) {
  return {
    underLine: roundToHalf(midpoint - HALF_POINT),
    overLine: roundToHalf(midpoint + HALF_POINT)
  };
}

function linePairForMarket(market) {
  return linePairForMidpoint(market.currentLine);
}

async function cancelPendingOrders(orderIds) {
  try {
    const response = await api("/api/orders/cancel", {
      userName: currentUserName(),
      orderIds
    });
    applySharedSnapshot(response);
    renderAll();
    refreshSharedState();
    showToast("Unmatched order cancelled", "The waiting order has been removed from the book.");
  } catch (error) {
    showToast("Unable to cancel", error.message);
  }
}

function currentGameIndex() {
  return roundGames.findIndex((game) => game.id === uiState.currentGameId);
}

function adjacentGame(direction) {
  const nextIndex = currentGameIndex() + direction;
  if (nextIndex < 0 || nextIndex >= roundGames.length) {
    return null;
  }
  return roundGames[nextIndex];
}

function scrollExpandedMarketIntoView(marketId) {
  window.requestAnimationFrame(() => {
    const expandedCard = elements.marketsList.querySelector(`.inline-market-panel.is-expanded-card[data-market-id="${marketId}"], .market-row.is-expanded[data-market-id="${marketId}"]`);
    if (!expandedCard) {
      return;
    }
    expandedCard.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function teamPrimary(team) {
  return (TEAM_COLORS[team] ?? TEAM_COLORS[normalizeTeamName(team)] ?? { primary: "#101722" }).primary;
}

function teamSecondary(team) {
  return (TEAM_COLORS[team] ?? TEAM_COLORS[normalizeTeamName(team)] ?? { secondary: "#68d9ff" }).secondary;
}

function bindMatchCardSwipe() {
  const activeCard = elements.selectedMarketPanel.querySelector(".active-card");
  const previewCard = elements.selectedMarketPanel.querySelector(".preview-card");
  if (!activeCard || !previewCard) return;
  let startX = 0;
  let startY = 0;
  let currentDelta = 0;
  let previewDirection = 1;
  let swipeIntent = null;

  activeCard.addEventListener(
    "touchstart",
    (event) => {
      startX = event.changedTouches[0].clientX;
      startY = event.changedTouches[0].clientY;
      currentDelta = 0;
      swipeIntent = null;
      activeCard.style.transition = "none";
    },
    { passive: true }
  );

  activeCard.addEventListener(
    "touchmove",
    (event) => {
      const deltaX = event.changedTouches[0].clientX - startX;
      const deltaY = event.changedTouches[0].clientY - startY;
      if (swipeIntent === null) {
        if (Math.abs(deltaY) > 8 && Math.abs(deltaY) > Math.abs(deltaX)) {
          swipeIntent = "vertical";
        } else if (Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY)) {
          swipeIntent = "horizontal";
        } else {
          return;
        }
      }
      if (swipeIntent !== "horizontal") {
        activeCard.style.transform = "";
        return;
      }
      currentDelta = deltaX;
      previewDirection = currentDelta < 0 ? 1 : -1;
      const preview = adjacentGame(previewDirection);
      if (!preview) {
        activeCard.style.transform = "";
        return;
      }
      const previewStatus = getGameLockStatus(preview);
      previewCard.querySelector("h3").textContent = preview.title;
      previewCard.querySelector(".market-note-meta").textContent = formatGameKickoffLabel(preview);
      previewCard.querySelector("p:not(.eyebrow)").textContent = preview.venue;
      previewCard.classList.toggle("is-locked", previewStatus.isLocked);
      previewCard.querySelector(".match-lock-row .status-chip").className = `status-chip ${previewStatus.isLocked ? "status-locked" : "status-open"}`;
      previewCard.querySelector(".match-lock-row .status-chip").textContent = previewStatus.label;
      previewCard.style.setProperty("--match-primary", teamPrimary(preview.homeTeam));
      previewCard.style.setProperty("--match-secondary", teamSecondary(preview.awayTeam));
      activeCard.style.transform = `translateX(${currentDelta}px) rotate(${currentDelta / 30}deg)`;
    },
    { passive: true }
  );

  activeCard.addEventListener(
    "touchend",
    () => {
      activeCard.style.transition = "";
      if (swipeIntent !== "horizontal" || Math.abs(currentDelta) < SWIPE_THRESHOLD || !adjacentGame(previewDirection)) {
        activeCard.style.transform = "";
        return;
      }
      activeCard.classList.add(currentDelta < 0 ? "swipe-away-left" : "swipe-away-right");
      window.setTimeout(() => {
        activeCard.classList.remove("swipe-away-left", "swipe-away-right");
        activeCard.style.transform = "";
        shiftGame(previewDirection);
      }, 220);
    },
    { passive: true }
  );

  activeCard.addEventListener(
    "touchcancel",
    () => {
      activeCard.style.transition = "";
      activeCard.style.transform = "";
      swipeIntent = null;
      currentDelta = 0;
    },
    { passive: true }
  );
}

function comparisonPercent(currentLine, seasonAverage) {
  const max = Math.max(currentLine, seasonAverage, 1);
  return Math.max(18, Math.min(100, (seasonAverage / max) * 100));
}

function normalizeTeamName(team) {
  return team === "Tigers" ? "Wests Tigers" : team;
}

function triggerBalanceFlash() {
  elements.headerBalance.classList.remove("balance-flash");
  window.requestAnimationFrame(() => elements.headerBalance.classList.add("balance-flash"));
}

function showToast(title, meta, options = {}) {
  if (!elements.toast) return;
  clearTimeout(toastTimer);
  elements.toast.classList.remove("toast-top");
  if (options.placement === "top") {
    elements.toast.classList.add("toast-top");
  }
  elements.toast.innerHTML = `<span class="toast-title">${title}</span>${meta ? `<span class="toast-meta">${meta}</span>` : ""}`;
  elements.toast.classList.add("visible");
  elements.toast.setAttribute("aria-hidden", "false");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("visible");
    elements.toast.classList.remove("toast-top");
    elements.toast.setAttribute("aria-hidden", "true");
  }, 2400);
}

async function copyTextToClipboard(value) {
  const text = String(value || "");
  if (!text) return false;
  if (shouldPreferLegacyClipboardCopy()) {
    const legacyCopied = legacyCopyTextToClipboard(text);
    if (legacyCopied) return true;
  }
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      void error;
    }
  }
  return legacyCopyTextToClipboard(text);
}

function shouldPreferLegacyClipboardCopy() {
  return /iPad|iPhone|iPod/i.test(navigator.userAgent || "") || Number(navigator.maxTouchPoints) > 0;
}

function legacyCopyTextToClipboard(text) {
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.top = "0";
  helper.style.left = "0";
  helper.style.width = "1px";
  helper.style.height = "1px";
  helper.style.opacity = "0";
  helper.style.pointerEvents = "none";
  helper.style.contain = "strict";
  document.body.appendChild(helper);
  helper.focus();
  helper.select();
  helper.setSelectionRange(0, helper.value.length);
  try {
    return document.execCommand("copy");
  } catch (error) {
    void error;
    return false;
  } finally {
    helper.remove();
  }
}

async function copyChallengeLink(value, linkNode) {
  const text = String(value || "");
  if (!text) return false;
  if (navigator.share) {
    try {
      await navigator.share({ url: text });
      return true;
    } catch (error) {
      if (error?.name === "AbortError") {
        return true;
      }
    }
  }
  if (await copyTextToClipboard(text)) {
    return true;
  }
  return selectTextContent(linkNode);
}

function selectTextContent(node) {
  if (!node) return false;
  const selection = window.getSelection?.();
  if (!selection) return false;
  const range = document.createRange();
  range.selectNodeContents(node);
  selection.removeAllRanges();
  selection.addRange(range);
  if (typeof node.focus === "function") {
    node.focus();
  }
  return true;
}

async function api(url, payload, options = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);
  try {
    const headers = {
      "Content-Type": "application/json"
    };
    if (options.includeUserName !== false) {
      headers["X-User-Name"] = currentUserName();
    }
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError" || String(error.message).toLowerCase().includes("aborted")) {
      throw new Error("Request timed out — please try again");
    }
    throw error;
  }
}

async function apiGet(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-User-Name": currentUserName()
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError" || String(error.message).toLowerCase().includes("aborted")) {
      throw new Error("Request timed out — please try again");
    }
    throw error;
  }
}


