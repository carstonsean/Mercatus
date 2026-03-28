const HALF_POINT = 0.5;
const LINE_STEP = 1;
const PRESSURE_STEP = 2;
const BOT_PRESSURE_MULTIPLIER = 1;
const STARTING_BANKROLL = 200;
const SWIPE_THRESHOLD = 60;
const DEFAULT_USER_NAME = "Demo Trader";
const USER_NAME_KEY = "mercatus-user-name";
const HAS_AUTHENTICATED_KEY = "mercatus-has-authenticated";
const ADMIN_ACCESS_KEY = "mercatus-admin-access";
const ADMIN_PASSWORD = "binthechin";
const LIVE_SYNC_MS = 2500;
const PRIZE_POOL_POLL_MS = 10000;

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
const BOT_BEHAVIOUR_PRESETS = {
  BALANCED: { crowdStyle: 50, liquidityStyle: 40, fadeStyle: 45, frequencyStyle: 50, edgeStyle: 50 },
  MOMENTUM: { crowdStyle: 84, liquidityStyle: 22, fadeStyle: 18, frequencyStyle: 70, edgeStyle: 38 },
  CONTRARIAN: { crowdStyle: 14, liquidityStyle: 34, fadeStyle: 72, frequencyStyle: 42, edgeStyle: 62 },
  MARKET_MAKER: { crowdStyle: 50, liquidityStyle: 88, fadeStyle: 55, frequencyStyle: 58, edgeStyle: 28 },
  PUBLIC: { crowdStyle: 76, liquidityStyle: 18, fadeStyle: 12, frequencyStyle: 82, edgeStyle: 24 }
};

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
let popularFeaturedMarketIds = [];
let popularFeaturedRoundNumber = null;
let popularFeaturedRequest = null;

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
  adminMarketFilter: "ACTIVE",
  adminMarketLimit: 24,
  adminTradeFilter: "OPEN",
  adminTradeLimit: 60
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
  authClose: document.getElementById("auth-close"),
  authHeaderSignup: document.getElementById("auth-header-signup"),
  authHeroEntry: document.getElementById("auth-hero-entry"),
  appFrame: document.querySelector(".mobile-frame"),
  headerBalance: document.getElementById("header-balance"),
  navButtons: [...document.querySelectorAll(".nav-button")],
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
  botConfigForm: document.getElementById("bot-config-form"),
  botSeasonWeight: document.getElementById("bot-season-weight"),
  botFormWeight: document.getElementById("bot-form-weight"),
  botVenueWeight: document.getElementById("bot-venue-weight"),
  botOpponentWeight: document.getElementById("bot-opponent-weight"),
  botMatchupWeight: document.getElementById("bot-matchup-weight"),
  botNoiseWeight: document.getElementById("bot-noise-weight"),
  botActivityWeight: document.getElementById("bot-activity-weight"),
  botThresholdWeight: document.getElementById("bot-threshold-weight"),
  botBehaviourPresets: document.getElementById("bot-behaviour-presets"),
  botCrowdStyle: document.getElementById("bot-crowd-style"),
  botLiquidityStyle: document.getElementById("bot-liquidity-style"),
  botFadeStyle: document.getElementById("bot-fade-style"),
  botFrequencyStyle: document.getElementById("bot-frequency-style"),
  botEdgeStyle: document.getElementById("bot-edge-style"),
  botCrowdStyleLabel: document.getElementById("bot-crowd-style-label"),
  botLiquidityLabel: document.getElementById("bot-liquidity-label"),
  botFadeLabel: document.getElementById("bot-fade-label"),
  botFrequencyLabel: document.getElementById("bot-frequency-label"),
  botEdgeLabel: document.getElementById("bot-edge-label"),
  botBehaviourSummary: document.getElementById("bot-behaviour-summary"),
  botConfigFeedback: document.getElementById("bot-config-feedback"),
  botSummary: document.getElementById("bot-summary"),
  botArchetypeSummary: document.getElementById("bot-archetype-summary"),
  botPerformanceList: document.getElementById("bot-performance-list"),
  createBot: document.getElementById("create-bot"),
  createRandomProbBot: document.getElementById("create-random-prob-bot"),
  botRunFeedback: document.getElementById("bot-run-feedback"),
  botLog: document.getElementById("bot-log"),
  adminDashboard: document.getElementById("admin-dashboard"),
  adminMarketControls: document.getElementById("admin-market-controls"),
  adminMarketList: document.getElementById("admin-market-list"),
  adminTradeControls: document.getElementById("admin-trade-controls"),
  positionsBody: document.getElementById("positions-body"),
  resetDemo: document.getElementById("reset-demo"),
  toast: document.getElementById("toast")
};

init();

async function init() {
  bindEvents();
  const savedUserName = localStorage.getItem(USER_NAME_KEY);
  if (savedUserName) {
    elements.userName.value = savedUserName;
    elements.authUsername.value = savedUserName;
  }
  // Render immediately so the app is never a blank screen while waiting for the server
  renderAll();
  renderAuthPreview();
  syncPopularFeaturedPlayers();
  // Sync session without touching credentials on failure — completeLogin() would
  // clear the saved username if syncSession() throws, which logs the user out silently.
  try {
    await syncSession();
  } catch (error) {
    console.warn("Startup session sync failed", error.message);
  }
  // If the current game isn't in the active round (e.g. it's a prior-round default),
  // switch to the first active-round game so Match Centre isn't blank on first load.
  if (!getActiveRoundGames().some((game) => game.id === uiState.currentGameId)) {
    const firstActiveGame = getActiveRoundGames()[0];
    if (firstActiveGame) {
      uiState.currentGameId = firstActiveGame.id;
      uiState.currentTeam = firstActiveGame.homeTeam;
    }
  }
  syncSelectedMarket();
  renderAll();
  if (savedUserName) {
    renderAuthGate(false);
    dismissGuestHero();
  }
  startLiveSync();
}

function bindEvents() {
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

  elements.userName.addEventListener("change", async () => {
    elements.userName.value = localStorage.getItem(USER_NAME_KEY) || currentUserName();
  });

  elements.authForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userName = elements.authUsername.value.trim();
    await completeLogin(userName);
  });

  elements.logoutButton.addEventListener("click", async () => {
    stopLiveSync();
    stopPrizePoolPolling();
    stopKickoffTimer();
    randomizeQuickPickOrder();
    uiState.prizePoolSubmissionToastShown = false;
    uiState.prizePoolShareOpen = false;
    renderPrizePoolShareOverlay();
    localStorage.removeItem(USER_NAME_KEY);
    backendState = { mode: "local", user: null, dashboard: null };
    elements.authUsername.value = "";
    elements.authFeedback.textContent = "";
    elements.userName.value = "";
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
    syncSelectedMarket();
    renderAll();
    try {
      await syncSession();
      syncSelectedMarket();
      renderAll();
    } catch (error) {
      console.warn("Logout guest sync failed", error.message);
    }
    startLiveSync();
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

  elements.openAdminButton.addEventListener("click", () => {
    if (!requestAdminAccess()) return;
    uiState.adminOpen = true;
    renderAdminShell();
  });

  elements.closeAdminButton.addEventListener("click", () => {
    uiState.adminOpen = false;
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
  elements.botConfigForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveBotConfig();
  });
  elements.botBehaviourPresets?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-bot-preset]");
    if (!button) return;
    applyBotBehaviourPreset(button.dataset.botPreset);
  });
  [
    elements.botCrowdStyle,
    elements.botLiquidityStyle,
    elements.botFadeStyle,
    elements.botFrequencyStyle,
    elements.botEdgeStyle
  ].forEach((input) =>
    input?.addEventListener("input", () => {
      renderBotBehaviourSummary();
    })
  );
  elements.createBot?.addEventListener("click", async () => {
    await createSimulationBot();
  });
  elements.createRandomProbBot?.addEventListener("click", async () => {
    await createSimulationBot("random-prob");
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
    const infoButton = event.target.closest(".market-confidence-info");
    if (infoButton) {
      event.preventDefault();
      event.stopPropagation();
      const confidence = infoButton.closest(".market-confidence");
      const isOpen = confidence?.classList.contains("is-open");
      document.querySelectorAll(".market-confidence.is-open").forEach((entry) => entry.classList.remove("is-open"));
      if (confidence && !isOpen) confidence.classList.add("is-open");
      return;
    }

    if (!event.target.closest(".market-confidence")) {
      document.querySelectorAll(".market-confidence.is-open").forEach((entry) => entry.classList.remove("is-open"));
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

function requestAdminAccess() {
  if (hasAdminAccess()) return true;
  const password = window.prompt("Enter admin password");
  if (password !== ADMIN_PASSWORD) {
    showToast("Admin access denied", "Incorrect password.");
    return false;
  }
  window.sessionStorage.setItem(ADMIN_ACCESS_KEY, "granted");
  return true;
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
    activeRoundNumber: nextActiveRoundNumber,
    activeRoundLabel: nextState.activeRoundLabel || roundLabelForNumber(nextActiveRoundNumber)
  };
  backendState = response.backend || { mode: "local", user: null, dashboard: null };
  prizePoolState = response.prizePool || null;
}

async function syncSession() {
  const response = await api("/api/session", { userName: currentUserName() });
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
    elements.userName.value = userName;
    localStorage.setItem(USER_NAME_KEY, userName);
    localStorage.setItem(HAS_AUTHENTICATED_KEY, "true");
    randomizeQuickPickOrder();
    await syncSession();
    syncSelectedMarket();
    renderAll();
    renderAuthGate(false);
    dismissGuestHero();
    startLiveSync();
    elements.authFeedback.textContent = "";
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

function hasAuthenticatedBefore() {
  return localStorage.getItem(HAS_AUTHENTICATED_KEY) === "true";
}

function openAuthPrompt(mode = "signup") {
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
  hero.innerHTML = "";
  hero.classList.add("is-hidden");
}

function renderGuestUnauthBottom() {
  const container = elements.homeUnauthBottom;
  if (!container) return;
  if (isAuthenticated()) {
    container.innerHTML = "";
    return;
  }
  const softCtaHTML = `<div class="home-unauth-soft-cta"><button class="home-soft-cta-button" type="button" id="home-soft-cta-btn">Browse every player line now. Sign up to trade &rarr;</button></div>`;

  const howItWorksHTML = `<section class="home-unauth-section auth-feature-list"><p class="auth-feature-eyebrow">HOW IT WORKS</p><div class="auth-feature-item"><i class="ph-fill ph-arrows-down-up" aria-hidden="true"></i><span>Pick over or under on live player projections</span></div><div class="auth-feature-item"><i class="ph-fill ph-chart-line-up" aria-hidden="true"></i><span>Watch the crowd move the line in real time</span></div><div class="auth-feature-item"><i class="ph-fill ph-trophy" aria-hidden="true"></i><span>See where the market settles before kick-off</span></div></section>`;

  const conversionCtaHTML = `<section class="home-unauth-section home-unauth-conversion-cta"><form class="stack-form auth-form" id="inline-auth-form"><label class="auth-field-label">CHOOSE YOUR USERNAME<input id="inline-auth-username" name="inlineAuthUsername" type="text" maxlength="24" placeholder="Johnny" required></label><button class="primary-button auth-submit-button" type="submit">Enter the Market</button><p id="inline-auth-feedback" class="feedback" aria-live="polite"></p></form></section>`;

  container.innerHTML = softCtaHTML + howItWorksHTML + conversionCtaHTML;

  container.querySelector("#home-soft-cta-btn")?.addEventListener("click", () => {
    openAuthPrompt("signup");
  });

  const form = container.querySelector("#inline-auth-form");
  const input = container.querySelector("#inline-auth-username");
  const feedback = container.querySelector("#inline-auth-feedback");
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userName = input?.value.trim();
    if (!userName) {
      if (feedback) feedback.textContent = "Enter a username to continue.";
      return;
    }
    if (feedback) feedback.textContent = "Entering crowdIQ...";
    if (input) input.disabled = true;
    if (elements.authUsername) elements.authUsername.value = userName;
    await completeLogin(userName);
    if (!isAuthenticated() && feedback) {
      feedback.textContent = elements.authFeedback?.textContent || "Something went wrong.";
    }
    if (input) input.disabled = false;
  });
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
    const nextRenderSignature = buildRenderSignature(state, backendState);
    if (nextRenderSignature === previousRenderSignature) {
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

function renderAll() {
  renderHeaderBalance();
  renderGuestHero();
  renderScreens();
  renderTeamToggle();
  renderSelectors();
  renderHome();
  renderSearchResults();
  renderSelectedMarket();
  renderMarketsList();
  renderPortfolio();
  renderWallet();
  renderQuickTake();
  renderPrizePool();
  renderPrizePoolShareOverlay();
  renderLeaderboard();
  renderProfileSummary();
  renderAdminShell();
  renderAdminDashboard();
  renderAdminMarkets();
  renderBotSimulation();
  renderAdminTable();
  syncOpeningForm();
  scheduleKickoffRefresh();
  syncPrizePoolPolling();
}

function renderHeaderBalance() {
  if (!elements.headerBalance) return;
  if (!isAuthenticated()) {
    elements.headerBalance.innerHTML = `<button class="header-signup-button" type="button">Sign Up Now to Trade</button>`;
    return;
  }
  const bankroll = getDisplayedCash(currentUserName());
  elements.headerBalance.innerHTML = `<i class="ph-fill ph-wallet header-balance-icon" aria-hidden="true"></i><span class="header-balance-label">Wallet</span><strong>${formatStake(bankroll)}</strong>`;
}

function renderScreens() {
  elements.navButtons.forEach((button) =>
    button.classList.toggle("active", button.dataset.screenTarget === uiState.activeScreen)
  );
  elements.screens.forEach((screen) =>
    screen.classList.toggle("active", screen.dataset.screen === uiState.activeScreen)
  );
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
    row.querySelector(".market-confidence-slot").innerHTML = `<span class="status-chip ${status.className}">${status.label}</span>`;
    row.addEventListener("click", () => {
      uiState.currentGameId = market.gameId;
      uiState.currentTeam = market.team;
      uiState.selectedMarketId = market.id;
      uiState.expandedMarketId = expandable && uiState.expandedMarketId !== market.id ? market.id : "";
      uiState.focusStakeMarketId = "";
      uiState.activeScreen = "markets";
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
  return `<div class="trade-ticket trade-ticket-compact trade-ticket-quick quick-take-card player-card-shell ${controlsDisabled ? "is-locked" : ""}" style="--quick-primary-soft:${hexToRgba(teamColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(teamColors.secondary, 0.18)};${playerCardTone(market)}"><div class="quick-take-backdrop"></div><div class="quick-take-topline"><span class="eyebrow">Match Centre</span></div><div class="quick-take-header"><div><h3>${market.playerName}</h3><p>${market.team} | ${market.position}</p><p class="quick-take-context">${matchup.label}</p></div><div class="quick-take-status-block"><span class="status-chip ${status.className}">${status.label}</span>${marketConfidenceMarkup(metrics.confidence, true)}</div></div><div class="trade-ticket-metric-row"><div class="trade-ticket-projection-block"><div class="quick-take-line trade-ticket-projection">${market.currentLine.toFixed(1)}</div><span class="quick-take-move trade-ticket-projection-delta ${movement.className}">${movement.arrow} ${movement.label}</span></div><div class="trade-ticket-metric-meta"><span class="trade-ticket-next-mid">Next mid ${nextLine.toFixed(1)}</span></div></div><div class="quick-take-stats"><div class="quick-take-stats-head"><span class="trade-label">Last 5 Games</span><span class="quick-take-season-average">Season avg ${performance.seasonAverageLabel}</span></div><div class="quick-take-score-row">${performance.lastFive.map((entry) => `<span class="quick-take-score-pill ${entry.isMissing ? "is-missing" : ""}" title="${entry.label}">${entry.value}</span>`).join("")}</div><div class="quick-take-statline">${isLocked ? `<span>Trading closed at kickoff</span>` : isGuest ? `<span>Read-only until you sign up</span>` : ""}<span>${metrics.unmatchedOrderCount} unmatched orders</span></div></div><form id="trade-form" class="trade-form-grid trade-ticket-form ${isPending ? "is-pending" : ""} ${controlsDisabled ? "is-locked" : ""}"><div class="trade-actions"><button type="button" class="trade-button trade-over ${side === "OVER" ? "active" : ""}" data-side="OVER" ${controlsDisabled ? "disabled" : ""}><span class="trade-button-label">Over</span><span class="trade-button-price">${currentPair.overLine.toFixed(1)}</span></button><button type="button" class="trade-button trade-under ${side === "UNDER" ? "active" : ""}" data-side="UNDER" ${controlsDisabled ? "disabled" : ""}><span class="trade-button-label">Under</span><span class="trade-button-price">${currentPair.underLine.toFixed(1)}</span></button></div><div class="stake-section"><div class="stake-row compact-stake-row"><label><span class="trade-label">Stake</span><input id="stake-input" name="stake" type="number" min="1" step="1" value="${stakeDraft}" required ${controlsDisabled ? "disabled" : ""}></label><div class="stake-preview"><span class="trade-label">Return</span><strong id="stake-return">${formatStake(stakeDraft * 2)}</strong></div></div><div class="stake-module-head"><span class="trade-label">Quick add</span><div class="quick-stakes"><button type="button" class="quick-stake-button" data-stake-add="5" ${controlsDisabled ? "disabled" : ""}>+5</button><button type="button" class="quick-stake-button" data-stake-add="10" ${controlsDisabled ? "disabled" : ""}>+10</button><button type="button" class="quick-stake-button" data-stake-add="25" ${controlsDisabled ? "disabled" : ""}>+25</button><button type="button" class="quick-stake-button" data-stake-max="true" ${controlsDisabled ? "disabled" : ""}>MAX</button></div></div></div><div class="trade-note-row"><span class="trade-label">Execution</span><button type="button" class="trade-note-button" data-trade-note-toggle aria-label="Explain execution">ⓘ</button><span class="trade-note-popover" role="note">${executionCopy}</span></div><button class="primary-button trade-confirm-button ${isPending ? "is-loading" : ""}" type="submit" ${isPending || isLocked ? "disabled" : ""}>${isPending ? "Placing..." : isLocked ? "Locked" : isGuest ? "Sign up to trade" : "Confirm position"}</button><p id="trade-feedback" class="feedback" aria-live="polite">${isPending ? "Submitting trade..." : isLocked ? "This market locked at kickoff." : isGuest ? "Browse every player market now. Sign up to place a position." : ""}</p></form></div>`;
}

function bindTradeSheetEvents(panel, marketId) {
  const tradeForm = panel.querySelector("#trade-form");
  const stakeInput = panel.querySelector("#stake-input");
  const stakeReturn = panel.querySelector("#stake-return");
  const tradeNoteToggle = panel.querySelector("[data-trade-note-toggle]");
  const tradeNotePopover = panel.querySelector(".trade-note-popover");
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
      if (button.dataset.stakeMax) {
        stakeInput.value = String(Math.max(1, Math.floor(getUserCash(currentUserName()))));
      } else {
        stakeInput.value = String((Number(stakeInput.value) || 0) + Number(button.dataset.stakeAdd || 0));
      }
      uiState.stakeDrafts[marketId] = Number(stakeInput.value) || 0;
      stakeReturn.textContent = formatStake((Number(stakeInput.value) || 0) * 2);
    })
  );

  stakeInput.addEventListener("input", () => {
    uiState.stakeDrafts[marketId] = Number(stakeInput.value) || 0;
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
  uiState.pendingTradeMarketId = marketId;
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

function renderPositionCards(container, trades, emptyMessage) {
  const template = document.getElementById("position-card-template");
  container.innerHTML = "";
  if (!trades.length) {
    container.innerHTML = `<div class="portfolio-empty-state"><strong>No positions yet</strong><span>${emptyMessage}</span></div>`;
    return;
  }
  trades.forEach((trade) => {
      const market = findMarket(trade.marketId);
      const card = template.content.firstElementChild.cloneNode(true);
      const status = getTradeStatus(trade);
      const plValue = trade.result ? trade.result.profit : market ? (market.currentLine - trade.entryLine) * (trade.side === "OVER" ? 1 : -1) : 0;
      const timeLabel = trade.result ? `${formatTradeResultLabel(trade.result)} · ${formatTimestamp(trade.timestamp)}` : `Updated ${formatTimestamp(trade.timestamp)}`;
      applyStatusChip(card.querySelector(".status-chip"), status);
      card.querySelector(".position-side-badge").textContent = trade.side;
      card.querySelector(".position-side-badge").className = `position-side-badge ${trade.side === "OVER" ? "side-over" : "side-under"}`;
      card.querySelector(".position-title").textContent = market?.playerName ?? "Unknown player";
      card.querySelector(".position-meta").textContent = `${market?.position ?? "Market"} Â· Line ${trade.entryLine.toFixed(1)} Â· Stake ${formatStake(trade.stake)}`;
      card.querySelector(".position-pl-value").textContent = formatSignedStake(plValue);
      card.querySelector(".position-pl-value").className = `position-pl-value ${plValue > 0 ? "positive" : plValue < 0 ? "negative" : ""}`;
      card.querySelector(".position-time").textContent = timeLabel;
      container.appendChild(card);
    });
}

function renderPortfolioPositionCards(container, trades, emptyMessage) {
  const template = document.getElementById("position-card-template");
  container.innerHTML = "";
  if (!trades.length) {
    container.innerHTML = `<div class="portfolio-empty-state"><strong>No positions yet</strong><span>${emptyMessage}</span></div>`;
    return;
  }
  trades.forEach((trade) => {
    const market = findMarket(trade.marketId);
    const card = template.content.firstElementChild.cloneNode(true);
    const status = portfolioPositionStatus(trade);
    const currentLine = trade.currentLine ?? market?.currentLine;
    const plValue = trade.result ? trade.result.profit : currentLine !== undefined ? (currentLine - trade.entryLine) * (trade.side === "OVER" ? 1 : -1) : 0;
    const timeLabel = `Updated ${formatTimestamp(trade.timestamp)}`;
    applyStatusChip(card.querySelector(".status-chip"), status);
    card.querySelector(".position-side-badge").textContent = trade.side;
    card.querySelector(".position-side-badge").className = `position-side-badge ${trade.side === "OVER" ? "side-over" : "side-under"}`;
    card.querySelector(".position-title").textContent = trade.playerName ?? market?.playerName ?? "Unknown player";
    const lineLabel = trade.side === "OVER" ? trade.entryOverLine ?? trade.entryLine : trade.entryUnderLine ?? trade.entryLine;
    card.querySelector(".position-meta").textContent = `${trade.position ?? market?.position ?? "Market"} | Line ${Number(lineLabel).toFixed(1)} | Stake ${formatStake(trade.stake)}`;
    card.querySelector(".position-pl-value").textContent = formatSignedStake(plValue);
    card.querySelector(".position-pl-value").className = `position-pl-value ${plValue > 0 ? "positive" : plValue < 0 ? "negative" : ""}`;
    card.querySelector(".position-time").textContent = timeLabel;
    card.classList.remove("is-win", "is-loss", "is-unmatched", "is-matched", "is-settled");
    if (trade.result?.outcome === "WIN" || trade.status === "MATCHED") {
      card.classList.add("is-win");
    } else if (trade.result?.outcome === "LOSS" || trade.result?.outcome === "MIDDLE") {
      card.classList.add("is-loss");
    } else if (trade.status === "PENDING" || trade.status === "PARTIALLY_MATCHED") {
      card.classList.add("is-unmatched");
    } else if (trade.result || trade.status === "CANCELLED") {
      card.classList.add("is-settled");
    }
    const actionButton = card.querySelector(".position-action");
    if ((trade.cancelableOrderIds || []).length) {
      actionButton.hidden = false;
      actionButton.textContent = "Cancel";
      actionButton.addEventListener("click", async (event) => {
        event.stopPropagation();
        await cancelPendingOrders(trade.cancelableOrderIds);
      });
    } else {
      actionButton.hidden = true;
    }
    container.appendChild(card);
  });
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
  const teamColors = TEAM_COLORS[current.team] ?? TEAM_COLORS[normalizeTeamName(current.team)] ?? { primary: "#101722", secondary: "#68d9ff" };
  const nextColors = next ? TEAM_COLORS[next.team] ?? TEAM_COLORS[normalizeTeamName(next.team)] ?? { primary: "#101722", secondary: "#68d9ff" } : null;
  elements.quickPickDeck.innerHTML = `${next ? `<article class="quick-take-card is-back" style="--quick-primary-soft:${hexToRgba(nextColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(nextColors.secondary, 0.18)};"><div class="quick-take-backdrop"></div><div class="quick-take-mini"><span class="eyebrow">Up next</span><strong>${next.playerName}</strong><span>${next.team} | ${next.position}</span><span class="quick-take-mini-context">${matchupContext(next).label}</span></div></article>` : ""}<article class="quick-take-card is-front player-card-shell ${isPending || isLocked ? "is-locked" : ""}" data-market-id="${current.id}" data-card-id="${current.id}" style="--quick-primary-soft:${hexToRgba(teamColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(teamColors.secondary, 0.18)};${playerCardTone(current)}"><div class="quick-take-backdrop"></div><div class="quick-take-topline"><span class="eyebrow">Quick Pick</span><span class="quick-take-counter">${queue.length - activeIndex} left</span></div><div class="quick-take-header"><div><h3>${current.playerName}</h3><p>${current.team} | ${current.position}</p><p class="quick-take-context">${matchup.label}</p></div><div class="quick-take-status-block"><span class="status-chip ${isLocked ? "status-locked" : "status-open"}">${isLocked ? "Locked" : "Open"}</span>${marketConfidenceMarkup(metrics.confidence)}</div></div><div class="quick-take-line">${current.currentLine.toFixed(1)}</div><div class="quick-take-move ${movement.className}">${movement.arrow} ${movement.label}</div><div class="quick-take-stats"><div class="quick-take-stats-head"><span class="trade-label">Last 5 Games</span><span class="quick-take-season-average">Season avg ${performance.seasonAverageLabel}</span></div><div class="quick-take-score-row">${performance.lastFive.map((entry) => `<span class="quick-take-score-pill ${entry.isMissing ? "is-missing" : ""}" title="${entry.label}">${entry.value}</span>`).join("")}</div><div class="quick-take-statline">${isLocked ? `<span>Trading closed at kickoff</span>` : ""}<span>${metrics.unmatchedOrderCount} unmatched orders</span></div></div><div class="quick-take-actions"><button class="quick-take-action quick-take-under" type="button" data-quick-side="UNDER" ${isPending || isLocked ? "disabled" : ""}>${isPending && uiState.quickPickPendingSide === "UNDER" ? "Submitting..." : isLocked ? "Locked" : `Under ${currentPair.underLine.toFixed(1)}`}</button><button class="quick-take-action quick-take-over" type="button" data-quick-side="OVER" ${isPending || isLocked ? "disabled" : ""}>${isPending && uiState.quickPickPendingSide === "OVER" ? "Submitting..." : isLocked ? "Locked" : `Over ${currentPair.overLine.toFixed(1)}`}</button></div></article>`;
  const activeCard = elements.quickPickDeck.querySelector(".quick-take-card.is-front");
  activeCard?.querySelectorAll("[data-quick-side]").forEach((button) =>
    button.addEventListener("click", async () => {
      await submitQuickTake(current.id, button.dataset.quickSide, activeCard);
    })
  );
}

async function submitQuickTake(marketId, side, card) {
  const activeCardId = getActiveQuickTakeMarketId();
  if (!marketId || marketId !== activeCardId || uiState.quickPickPendingRequestId) return;
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
    showToast("Quick Pick submitted", toastMessage);
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
      <section class="section-block prize-pool-how-block">
        <button id="prize-pool-toggle-how" class="prize-pool-collapse-button" type="button" aria-expanded="${uiState.prizePoolHowItWorksExpanded}">
          <span>How it works</span>
          <span aria-hidden="true">${uiState.prizePoolHowItWorksExpanded ? "−" : "+"}</span>
        </button>
        ${uiState.prizePoolHowItWorksExpanded ? `<div class="prize-pool-how-copy"><p>Starting 13: one player per position, randomly assigned.</p><p>Interchange 4: randomly assigned, any position. Replaces any starting player who does not play due to injury or non-selection.</p><p>Tiebreak: if two users finish with equal correct %, the user with more correct interchange picks wins.</p><p>Substitution order: first interchange replaces first unavailable starting player, in the order they were assigned.</p></div>` : ""}
      </section>
      <div class="prize-pool-sticky-cta">
        ${view.canEnter ? `<button id="prize-pool-enter" class="primary-button prize-pool-enter-button prize-pool-cta-live" type="button">${uiState.prizePoolPendingAction === "start" ? "Opening..." : "Enter for $10"}</button>` : `<button class="secondary-button prize-pool-cta-muted" type="button" disabled>Entry Closed</button>`}
      </div>
      ${!view.canEnter ? `<div class="portfolio-empty-state"><strong>Entry closed</strong><span>Prize Pool stays open only while at least one round game has not yet kicked off.</span></div>` : ""}
      ${renderPrizePoolLeaderboard(view, "Current Standings")}
    </section>
  `;
  elements.prizePoolShell.querySelector("#prize-pool-enter")?.addEventListener("click", async () => {
    await startPrizePoolDraft();
  });
  elements.prizePoolShell.querySelector("#prize-pool-toggle-how")?.addEventListener("click", () => {
    uiState.prizePoolHowItWorksExpanded = !uiState.prizePoolHowItWorksExpanded;
    renderPrizePool();
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
          <button id="prize-pool-submit" class="primary-button prize-pool-submit-button prize-pool-cta-live" type="button">${uiState.prizePoolPendingAction === "submit" ? "Submitting..." : "Submit Team"}</button>
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
    adminDashboardCard("Needs action", String(summary.marketsNeedingAction), `${summary.activeMarkets} open markets, ${summary.resolvedMarkets} resolved`)
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

function renderBotSimulation() {
  if (!elements.botSummary || !state.botSimulation) return;
  const config = state.botSimulation.config || {};
  const logs = config.logs || [];
  const bots = state.botSimulation.bots || [];
  const displayLogs = logs.map((log) => ({
    ...log,
    reason: `${log.archetypeLabel ? `${log.archetypeLabel} personality Â· ` : ""}${log.reason}`
  }));
  const botCount = bots.length;
  const activeBotCount = bots.filter((bot) => getDisplayedCash(bot.userName) >= 1).length;
  const totalBotBankroll = bots.reduce((sum, bot) => sum + getDisplayedCash(bot.userName), 0);
  const performance = getBotPerformanceSummary();
  elements.botSeasonWeight.value = String(config.globalWeights?.season ?? 1);
  elements.botFormWeight.value = String(config.globalWeights?.form ?? 1);
  elements.botVenueWeight.value = String(config.globalWeights?.venue ?? 1);
  elements.botOpponentWeight.value = String(config.globalWeights?.opponent ?? 1);
  elements.botMatchupWeight.value = String(config.globalWeights?.matchup ?? 1);
  elements.botNoiseWeight.value = String(config.globalWeights?.noise ?? 1);
  elements.botSeasonWeight.disabled = true;
  elements.botNoiseWeight.disabled = true;
  elements.botActivityWeight.value = String(config.globalWeights?.activity ?? 1);
  elements.botThresholdWeight.value = String(config.globalWeights?.threshold ?? 1);
  syncBotBehaviourInputs(config.behaviour);
  renderBotBehaviourSummary();
  elements.botSummary.innerHTML = `${positionMetric("Bots", String(botCount))}${positionMetric("Active", String(activeBotCount))}${positionMetric("Bot bankroll", formatStake(totalBotBankroll))}${positionMetric("Settled P/L", formatSignedStake(performance.totalRealizedProfit), performance.totalRealizedProfit)}${positionMetric("Recent events", String(displayLogs.length))}${positionMetric("Settled trades", String(performance.totalSettledTrades))}`;
  if (elements.botArchetypeSummary) {
    elements.botArchetypeSummary.innerHTML = performance.archetypes.length
      ? performance.archetypes
          .map((row) =>
            adminDashboardCard(
              row.label,
              formatSignedStake(row.realizedProfit),
              `${row.botCount} bots | ${row.settledTrades} settled | ${row.winRate}% win | ROI ${formatPercentage(row.roi)} | Open ${formatStake(row.openExposure)}`
            )
          )
          .join("")
      : `<div class="section-meta">No bot personalities to compare yet. Create a bot and let it trade into a few settled markets first.</div>`;
  }
  if (elements.botPerformanceList) {
    elements.botPerformanceList.innerHTML = performance.bots.length
      ? performance.bots
          .map(
            (row, index) =>
              `<article class="bot-performance-row"><div class="bot-performance-cell bot-performance-bot"><span class="bot-performance-label">Bot</span><div><p class="eyebrow">#${index + 1} ${row.archetypeLabel}</p><h4>${row.userName}</h4></div></div><div class="bot-performance-cell"><span class="bot-performance-label">P/L</span><strong class="bot-performance-value ${row.realizedProfit > 0 ? "positive" : row.realizedProfit < 0 ? "negative" : ""}">${formatSignedStake(row.realizedProfit)}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Bankroll</span><strong class="bot-performance-value">${formatStake(row.bankroll)}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">ROI</span><strong class="bot-performance-value ${row.realizedProfit > 0 ? "positive" : row.realizedProfit < 0 ? "negative" : ""}">${formatPercentage(row.roi)}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Win rate</span><strong class="bot-performance-value">${row.winRate}%</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Settled</span><strong class="bot-performance-value">${row.settledTrades}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Open exp.</span><strong class="bot-performance-value">${formatStake(row.openExposure)}</strong></div><div class="bot-performance-cell"><span class="bot-performance-label">Avg stake</span><strong class="bot-performance-value">${formatStake(row.averageSettledStake)}</strong></div></article>`
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
  return trade.userName?.startsWith("Bot ") || trade.userName?.includes(" Bot ");
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
      archetype: bot.archetype || "custom",
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
  const allBotTrades = state.markets.flatMap((market) =>
    (market.trades || [])
      .filter((trade) => isBotTrade(trade))
      .map((trade) => ({ trade }))
  );
  allBotTrades.forEach(({ trade }) => {
    const bot = botMap.get(trade.userName);
    const archetypeKey = bot?.archetype || trade.archetype || "custom";
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

function getTradeExposureStake(trade) {
  const matchedStake = Number(trade.matchedStake) || 0;
  const refundedStake = Number(trade.refundedStake) || 0;
  if (matchedStake || refundedStake) {
    return matchedStake + refundedStake;
  }
  return (Number(trade.stake) || 0) + refundedStake;
}

function labelForBotArchetype(archetypeKey, bot = null) {
  const rawLabel = bot?.config?.baseLabel || bot?.config?.label || archetypeKey || "Custom";
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

async function saveBotConfig() {
  try {
    const response = await api("/api/admin/bots/config", {
      behaviour: getBotBehaviourDraft(),
      globalWeights: {
        season: Number(elements.botSeasonWeight.value),
        form: Number(elements.botFormWeight.value),
        venue: Number(elements.botVenueWeight.value),
        opponent: Number(elements.botOpponentWeight.value),
        matchup: Number(elements.botMatchupWeight.value),
        noise: Number(elements.botNoiseWeight.value),
        activity: Number(elements.botActivityWeight.value),
        threshold: Number(elements.botThresholdWeight.value)
      }
    });
    applySharedSnapshot({ ...response, backend: backendState, prizePool: prizePoolState });
    renderAll();
    elements.botConfigFeedback.textContent = "Bot settings updated.";
  } catch (error) {
    elements.botConfigFeedback.textContent = error.message;
  }
}

async function createSimulationBot(mode = "default") {
  try {
    const response = await api("/api/admin/bots/create", { mode });
    applySharedSnapshot({ ...response, backend: backendState, prizePool: prizePoolState });
    renderAll();
    const botName = response.bot?.userName || "Quick Pick bot";
    const botDescription = mode === "random-prob" ? "50/50 random-probability bot" : "Quick Pick bot";
    elements.botRunFeedback.textContent = `${botName} created with $200 and started auto-playing as a ${botDescription}.`;
    showToast("Bot created", `${botName} joined the Quick Pick market.`);
  } catch (error) {
    elements.botRunFeedback.textContent = error.message;
  }
}

function applyBotBehaviourPreset(presetKey) {
  const preset = BOT_BEHAVIOUR_PRESETS[presetKey];
  if (!preset) return;
  if (elements.botCrowdStyle) elements.botCrowdStyle.value = String(preset.crowdStyle);
  if (elements.botLiquidityStyle) elements.botLiquidityStyle.value = String(preset.liquidityStyle);
  if (elements.botFadeStyle) elements.botFadeStyle.value = String(preset.fadeStyle);
  if (elements.botFrequencyStyle) elements.botFrequencyStyle.value = String(preset.frequencyStyle);
  if (elements.botEdgeStyle) elements.botEdgeStyle.value = String(preset.edgeStyle);
  renderBotBehaviourSummary();
}

function syncBotBehaviourInputs(behaviour = {}) {
  const draft = behaviourToSliderValues(behaviour);
  if (elements.botCrowdStyle) elements.botCrowdStyle.value = String(draft.crowdStyle);
  if (elements.botLiquidityStyle) elements.botLiquidityStyle.value = String(draft.liquidityStyle);
  if (elements.botFadeStyle) elements.botFadeStyle.value = String(draft.fadeStyle);
  if (elements.botFrequencyStyle) elements.botFrequencyStyle.value = String(draft.frequencyStyle);
  if (elements.botEdgeStyle) elements.botEdgeStyle.value = String(draft.edgeStyle);
}

function behaviourToSliderValues(behaviour = {}) {
  const crowdStyle = Number.isFinite(Number(behaviour.crowdFollow))
    ? Math.round(((Number(behaviour.crowdFollow) + 1) / 2) * 100)
    : BOT_BEHAVIOUR_PRESETS.BALANCED.crowdStyle;
  return {
    crowdStyle: clampNumber(crowdStyle, 0, 100),
    liquidityStyle: clampNumber(Math.round((Number(behaviour.liquidityProviding) || 0.4) * 100), 0, 100),
    fadeStyle: clampNumber(Math.round((Number(behaviour.fadeExtremeMoves) || 0.45) * 100), 0, 100),
    frequencyStyle: clampNumber(Math.round((((Number(behaviour.tradingFrequency) || 1) - 0.6) / 0.9) * 100), 0, 100),
    edgeStyle: clampNumber(Math.round((((Number(behaviour.edgeRequirement) || 1) - 0.7) / 0.8) * 100), 0, 100)
  };
}

function getBotBehaviourDraft() {
  const crowdValue = Number(elements.botCrowdStyle?.value || BOT_BEHAVIOUR_PRESETS.BALANCED.crowdStyle);
  const liquidityValue = Number(elements.botLiquidityStyle?.value || BOT_BEHAVIOUR_PRESETS.BALANCED.liquidityStyle);
  const fadeValue = Number(elements.botFadeStyle?.value || BOT_BEHAVIOUR_PRESETS.BALANCED.fadeStyle);
  const frequencyValue = Number(elements.botFrequencyStyle?.value || BOT_BEHAVIOUR_PRESETS.BALANCED.frequencyStyle);
  const edgeValue = Number(elements.botEdgeStyle?.value || BOT_BEHAVIOUR_PRESETS.BALANCED.edgeStyle);
  return {
    crowdFollow: roundToTwo((crowdValue - 50) / 50),
    liquidityProviding: roundToTwo(liquidityValue / 100),
    fadeExtremeMoves: roundToTwo(fadeValue / 100),
    tradingFrequency: roundToTwo(0.6 + (frequencyValue / 100) * 0.9),
    edgeRequirement: roundToTwo(0.7 + (edgeValue / 100) * 0.8)
  };
}

function renderBotBehaviourSummary() {
  const draft = getBotBehaviourDraft();
  const crowdLabel = describeCrowdStyle(draft.crowdFollow);
  const liquidityLabel = describeLiquidityStyle(draft.liquidityProviding);
  const fadeLabel = describeFadeStyle(draft.fadeExtremeMoves);
  const frequencyLabel = describeFrequencyStyle(draft.tradingFrequency);
  const edgeLabel = describeEdgeStyle(draft.edgeRequirement);
  if (elements.botCrowdStyleLabel) elements.botCrowdStyleLabel.textContent = crowdLabel;
  if (elements.botLiquidityLabel) elements.botLiquidityLabel.textContent = liquidityLabel;
  if (elements.botFadeLabel) elements.botFadeLabel.textContent = fadeLabel;
  if (elements.botFrequencyLabel) elements.botFrequencyLabel.textContent = frequencyLabel;
  if (elements.botEdgeLabel) elements.botEdgeLabel.textContent = edgeLabel;
  if (elements.botBehaviourSummary) {
    elements.botBehaviourSummary.innerHTML = [
      portfolioMetricCard("Crowd style", crowdLabel),
      portfolioMetricCard("Liquidity", liquidityLabel),
      portfolioMetricCard("Fade moves", fadeLabel),
      portfolioMetricCard("Frequency", frequencyLabel),
      portfolioMetricCard("Edge required", edgeLabel)
    ].join("");
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
  const visibleMarkets = getVisibleMarkets();
  if (!visibleMarkets.some((market) => market.id === uiState.selectedMarketId)) {
    uiState.selectedMarketId = visibleMarkets[0]?.id ?? getGameMarkets(uiState.currentGameId)[0]?.id ?? "";
  }
  if (uiState.expandedMarketId && !visibleMarkets.some((market) => market.id === uiState.expandedMarketId)) {
    uiState.expandedMarketId = "";
  }
  syncQuickTakeQueue();
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
  const sortedOpenIds = state.markets
    .filter(isMarketOpen)
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

function renderHome() {
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
  const projectionComparisons = homeMarkets
    .map((market) => {
      const impliedScore = priceImpliedProjectionForMarket(market);
      return {
        market,
        impliedScore,
        value: roundToHalf(market.currentLine - impliedScore)
      };
    })
    .filter((entry) => Number.isFinite(entry.impliedScore))
    .sort((left, right) => Math.abs(right.value) - Math.abs(left.value) || right.market.currentLine - left.market.currentLine);
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
  const leaderboardRows = getLeaderboardRows({ sort: "BALANCE", timeFilter: "ALL_TIME" });

  const fallbackFeaturedMarkets = (topProjected.length ? topProjected : fallbackMovers).slice(0, 8);
  const popularFeaturedMarkets = resolvePopularFeaturedMarkets(homeMarkets);
  renderHomeCarouselControls();
  renderHomeFeaturedSlate(popularFeaturedMarkets.length ? popularFeaturedMarkets : fallbackFeaturedMarkets);
  renderHomePrizePoolBanner(prizePoolState);
  renderHomeGamesStrip();
  renderGuestUnauthBottom();

  renderHomeMarketLeaderboard(elements.homeBiggestGainers, biggestGainers.length ? biggestGainers : fallbackMovers.slice(0, 20), ({ market }) => {
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
  });

  renderHomeMarketLeaderboard(elements.homeBiggestLosers, biggestLosers.length ? biggestLosers : fallbackMovers.slice().reverse().slice(0, 20), ({ market }) => {
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
  });

  renderHomeMarketLeaderboard(elements.homeMostTraded, mostConfident, ({ market }) => {
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
  });

  renderHomeMarketLeaderboard(elements.homeTopProjected, topProjected, ({ market }) => ({
    badge: homeTeamAbbreviation(market.team),
    badgeTone: "",
    title: market.playerName,
    meta: market.team,
    detail: market.position,
    statPrimary: `${market.currentLine.toFixed(1)} pts`
  }), {
    variant: "compact-projection-group",
    headingTitle: "Projected"
  });

  renderHomeMarketLeaderboard(elements.homeBestValue, bestValue, ({ market, impliedScore, value }) => ({
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
  });

  renderHomeMarketLeaderboard(elements.homeMostOverpriced, mostOverpriced, ({ market, impliedScore, value }) => ({
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
  });

  renderHomeUserLeaderboard(elements.homeUserLeaderboard, leaderboardRows);

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
  return `<button class="game-card${openPositionCount > 0 ? " has-positions" : ""}${topMarkets.length > 0 ? " has-projections" : ""}" type="button" data-home-game-id="${game.id}" style="--match-primary:${teamPrimary(game.homeTeam)}CC;--match-secondary:${teamPrimary(game.awayTeam)}CC;"><div class="game-card-copy"><div class="game-card-topline"><span class="game-card-status ${status.className}">${status.label}</span><span class="game-card-kickoff">${formatHomeGameKickoffTime(game)}</span></div><div class="game-card-teams">${game.title || `${homeTeamAbbreviation(game.homeTeam)} vs ${homeTeamAbbreviation(game.awayTeam)}`}</div><div class="game-card-meta">${game.venue || ""}</div>${projHTML}</div><div class="game-card-positions">${openPositionCount > 0 ? `<span class="game-card-positions-copy"><span class="game-card-positions-dot" aria-hidden="true"></span><span>${openPositionCount} position${openPositionCount === 1 ? "" : "s"}</span></span>` : ""}</div></button>`;
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
  if (!rows.length) {
    container.innerHTML = `<div class="portfolio-empty-state"><strong>No markets yet</strong><span>${options.emptyMessage || "Market activity will appear here once trading begins."}</span></div>`;
    return;
  }
  const summaryMarkup = (options.summaryItems || []).length
    ? `<div class="home-group-summary">${options.summaryItems
        .map((item) => `<span><strong>${item.value}</strong><em>${item.label}</em></span>`)
        .join("")}</div>`
    : "";
  const visibleRows = options.skipFirstListItem ? rows.slice(1) : rows;
  if (!visibleRows.length) {
    container.innerHTML = `<article class="home-group-card"><div class="home-group-card-head"><h3>${options.headingTitle || ""}</h3>${summaryMarkup}</div><div class="portfolio-empty-state compact-empty"><strong>No additional players yet</strong><span>${options.emptyMessage || "More player movement will appear here as the round develops."}</span></div></article>`;
    return;
  }
  if (options.variant === "compact-projection-group") {
    container.innerHTML = `<article class="home-group-card"><div class="home-group-card-head"><h3>${options.headingTitle || ""}</h3>${summaryMarkup}</div><div class="home-group-card-body" data-scroll-key="${scrollKey}">${visibleRows
      .map((row, index) => {
        const market = row.market || row;
        const view = presenter({ market, ...row }, index);
        const note = view.note ? `<span class="home-card-note">${view.note}</span>` : "";
        return `<button class="home-projection-subcard" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}">${homeRankMarkup(index)}<div class="home-projection-copy"><div class="home-card-mainline"><strong>${market.playerName}</strong></div><div class="home-projection-meta-row"><span class="home-team-badge" style="${homeTeamPillStyle(market.team)}">${homeTeamAbbreviation(market.team)}</span><span>${market.position}</span></div>${note}</div><div class="home-projection-metric"><strong>${view.statPrimary || `${market.currentLine.toFixed(1)} pts`}</strong></div></button>`;
      })
      .join("")}</div></article>`;
    container.querySelectorAll("[data-market-id]").forEach((card) =>
      card.addEventListener("click", () => {
        openMarketFromHome(card.dataset.marketId);
      })
    );
    return;
  }
  if (options.variant === "compact-list-group") {
    container.innerHTML = `<article class="home-group-card"><div class="home-group-card-head"><h3>${options.headingTitle || ""}</h3>${summaryMarkup}</div><div class="home-group-card-body" data-scroll-key="${scrollKey}">${visibleRows
      .map((row, index) => {
        const market = row.market || row;
        const view = presenter({ market, ...row }, index);
        const note = view.note ? `<span class="home-card-note">${view.note}</span>` : "";
        const isHeroCard = index === 0 && (options.headingTitle === "Gainers" || options.headingTitle === "Losers");
        return `<button class="home-projection-subcard home-list-subcard ${view.cardClassName || ""} ${isHeroCard ? "is-rank-hero" : ""}" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}">${homeRankMarkup(index)}<div class="home-projection-copy"><div class="home-card-mainline"><strong>${view.title}</strong></div><div class="home-projection-meta-row"><span class="home-team-badge ${view.badgeTone || ""}" style="${homeTeamPillStyle(market.team)}">${view.badge || homeTeamAbbreviation(market.team)}</span><span>${view.detail}</span></div>${note}</div>${renderHomeMetricMarkup({ ...view, metricHero: isHeroCard }, view.badgeTone)}</button>`;
      })
      .join("")}</div></article>`;
    container.querySelectorAll("[data-market-id]").forEach((card) =>
      card.addEventListener("click", () => {
        openMarketFromHome(card.dataset.marketId);
      })
    );
    return;
  }
  if (options.variant === "featured-market-confidence") {
    container.innerHTML = `<article class="home-group-card home-group-card-featured"><div class="home-group-card-head"><h3>${options.headingTitle || ""}</h3>${summaryMarkup}</div><div class="home-group-card-body" data-scroll-key="${scrollKey}">${visibleRows
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
    .join("")}${showCurrentUserRow ? `<div class="home-leaderboard-current-divider">— #${rows.findIndex((row) => row.userName.toLowerCase() === activeUser) + 1} You —</div>${homeLeaderboardSnapshotRowMarkup(currentUserRow, rows.findIndex((row) => row.userName.toLowerCase() === activeUser), true)}` : ""}</div><button class="home-leaderboard-snapshot-footer" type="button" data-open-leaderboard="true">View full leaderboard →</button></article>`;
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
    .sort((left, right) => Number(right.round) - Number(left.round));
  const recentSeasonScores = seasonScores
    .filter((entry) => !Number.isFinite(roundNumber) || Number(entry.round) < roundNumber)
    .slice(0, 5)
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
  return elements.userName.value.trim() || DEFAULT_USER_NAME;
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
  return market.trades?.length || 0;
}

function tradeVolumeFor(market) {
  return formatStake(getMarketTradeMetrics(market).volume);
}

function formatSignedLine(value) {
  if (value === 0) return "0.0";
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}`;
}

function describeCrowdStyle(value) {
  if (value <= -0.45) return "Fade crowd";
  if (value < -0.15) return "Leaning contrarian";
  if (value < 0.15) return "Neutral";
  if (value < 0.45) return "Leaning momentum";
  return "Follow crowd";
}

function describeLiquidityStyle(value) {
  if (value < 0.25) return "Directional";
  if (value < 0.55) return "Balanced";
  if (value < 0.8) return "Liquidity first";
  return "Market making";
}

function describeFadeStyle(value) {
  if (value < 0.25) return "Low";
  if (value < 0.6) return "Moderate";
  return "Strong";
}

function describeFrequencyStyle(value) {
  if (value < 0.85) return "Selective";
  if (value < 1.15) return "Balanced";
  return "Active";
}

function describeEdgeStyle(value) {
  if (value < 0.9) return "Low threshold";
  if (value < 1.2) return "Balanced";
  return "High conviction";
}

function roundToTwo(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
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
  return `$${Math.abs(value).toFixed(0)}`;
}

function formatSignedStake(value) {
  if (value === 0) return "$0";
  return `${value > 0 ? "+" : "-"}$${Math.abs(value).toFixed(0)}`;
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
  if (compact) {
    return `<span class="market-confidence compact ${tone}" aria-label="Market confidence ${confidence}%"><span class="market-confidence-mini-icon" aria-hidden="true"></span><span class="market-confidence-value">${confidence}%</span></span>`;
  }
  const needle = -78 + (Math.max(0, Math.min(100, confidence)) / 100) * 156;
  return `<span class="market-confidence ${compact ? "compact" : ""} ${tone}" aria-label="Market confidence ${confidence}%"><span class="market-confidence-head"><span class="market-confidence-label">Market confidence</span><button class="market-confidence-info" type="button" aria-label="Explain market confidence">i</button></span><span class="market-confidence-popover" role="note">Market confidence estimates how trustworthy the projection is based on crowd participation. More matched trades, volume, and unique traders lift it, with diminishing returns as activity builds.</span><span class="market-confidence-body"><span class="market-confidence-dial" style="--needle-angle:${needle}deg"><svg viewBox="0 0 120 76" aria-hidden="true"><path class="dial-arc" d="M14 62 A46 46 0 0 1 106 62" pathLength="100" /><path class="dial-tick" d="M24 58 L31 55" /><path class="dial-tick" d="M38 39 L42 45" /><path class="dial-tick" d="M60 30 L60 38" /><path class="dial-tick" d="M82 39 L78 45" /><path class="dial-tick" d="M96 58 L89 55" /><text x="18" y="74">E</text><text x="98" y="74">F</text></svg><span class="market-confidence-needle"></span><span class="market-confidence-pivot"></span></span><span class="market-confidence-value">${confidence}%</span></span></span>`;
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

function showToast(title, meta) {
  if (!elements.toast) return;
  clearTimeout(toastTimer);
  elements.toast.innerHTML = `<span class="toast-title">${title}</span><span class="toast-meta">${meta}</span>`;
  elements.toast.classList.add("visible");
  elements.toast.setAttribute("aria-hidden", "false");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("visible");
    elements.toast.setAttribute("aria-hidden", "true");
  }, 2400);
}

async function api(url, payload) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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


