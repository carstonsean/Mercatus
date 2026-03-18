const HALF_POINT = 0.5;
const LINE_STEP = 1;
const PRESSURE_STEP = 2;
const BOT_PRESSURE_MULTIPLIER = 1;
const STARTING_BANKROLL = 1000;
const SWIPE_THRESHOLD = 60;
const DEFAULT_USER_NAME = "Demo Trader";
const USER_NAME_KEY = "mercatus-user-name";
const ADMIN_ACCESS_KEY = "mercatus-admin-access";
const ADMIN_PASSWORD = "binthechin";
const LIVE_SYNC_MS = 2500;

const seed = window.MERCATUS_SEED;
const derivedData = window.MERCATUS_DERIVED || {};
const roundGames = seed.roundGames;
const TEAM_COLORS = seed.TEAM_COLORS;
const CURRENT_ROUND_LABEL = roundGames[0]?.roundLabel || "Current round";
const BOT_BEHAVIOUR_PRESETS = {
  BALANCED: { crowdStyle: 50, liquidityStyle: 40, fadeStyle: 45, frequencyStyle: 50, edgeStyle: 50 },
  MOMENTUM: { crowdStyle: 84, liquidityStyle: 22, fadeStyle: 18, frequencyStyle: 70, edgeStyle: 38 },
  CONTRARIAN: { crowdStyle: 14, liquidityStyle: 34, fadeStyle: 72, frequencyStyle: 42, edgeStyle: 62 },
  MARKET_MAKER: { crowdStyle: 50, liquidityStyle: 88, fadeStyle: 55, frequencyStyle: 58, edgeStyle: 28 },
  PUBLIC: { crowdStyle: 76, liquidityStyle: 18, fadeStyle: 12, frequencyStyle: 82, edgeStyle: 24 }
};

let state = { bankrolls: {}, markets: [] };
let backendState = { mode: "local", user: null, dashboard: null };
let toastTimer = null;
let syncTimer = null;
let syncInFlight = false;
const authPreviewMarkets = typeof seed.buildRoundMarkets === "function" ? seed.buildRoundMarkets() : [];

const uiState = {
  activeScreen: "home",
  activeHomePanel: "movers",
  currentGameId: "tigers-cowboys",
  currentTeam: "Tigers",
  selectedMarketId: "",
  expandedMarketId: "",
  marketTradeSides: {},
  stakeDrafts: {},
  focusStakeMarketId: "",
  searchTerm: "",
  adminOpen: false,
  portfolioFilter: "ALL",
  portfolioSort: "MOST_RECENT",
  pendingTradeMarketId: "",
  leaderboardSort: "BALANCE",
  quickTakeMarketIds: [],
  quickTakeSeenMarketIds: [],
  quickTakePendingMarketId: "",
  quickTakePendingSide: "",
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
  authPreviewList: document.getElementById("auth-preview-list"),
  appFrame: document.querySelector(".mobile-frame"),
  headerBalance: document.getElementById("header-balance"),
  navButtons: [...document.querySelectorAll(".nav-button")],
  screens: [...document.querySelectorAll(".screen")],
  homeTopProjected: document.getElementById("home-top-projected"),
  homeBiggestMovers: document.getElementById("home-biggest-movers"),
  homeBestValue: document.getElementById("home-best-value"),
  homeMostTraded: document.getElementById("home-most-traded"),
  homeUserLeaderboard: document.getElementById("home-user-leaderboard"),
  homeLeaderboardLink: document.getElementById("home-leaderboard-link"),
  homeCarousel: document.getElementById("home-carousel"),
  homeCarouselNav: document.getElementById("home-carousel-nav"),
  homeCarouselMeta: document.getElementById("home-carousel-meta"),
  searchInput: document.getElementById("search-input"),
  searchResults: document.getElementById("search-results"),
  marketsScreenScroll: document.getElementById("markets-screen-scroll"),
  teamToggle: document.getElementById("team-toggle"),
  selectedMarketPanel: document.getElementById("selected-market-panel"),
  marketsList: document.getElementById("markets-list"),
  leaderboardSummary: document.getElementById("leaderboard-summary"),
  leaderboardBalancePill: document.getElementById("leaderboard-balance-pill"),
  leaderboardSortChips: document.getElementById("leaderboard-sort-chips"),
  leaderboardList: document.getElementById("leaderboard-list"),
  portfolioBalancePill: document.getElementById("portfolio-balance-pill"),
  portfolioSummary: document.getElementById("portfolio-summary"),
  portfolioFilters: document.getElementById("portfolio-filters"),
  portfolioSortButton: document.getElementById("portfolio-sort-button"),
  portfolioList: document.getElementById("portfolio-list"),
  quickTakeDeck: document.getElementById("quick-take-deck"),
  userName: document.getElementById("user-name"),
  logoutButton: document.getElementById("logout-button"),
  profileSummary: document.getElementById("profile-summary"),
  openAdminButton: document.getElementById("open-admin-button"),
  adminShell: document.getElementById("admin-shell"),
  closeAdminButton: document.getElementById("close-admin-button"),
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
  renderAuthPreview();
  const savedUserName = localStorage.getItem(USER_NAME_KEY);
  if (!savedUserName) {
    renderAuthGate(false);
    return;
  }
  elements.userName.value = savedUserName;
  elements.authUsername.value = savedUserName;
  await completeLogin(savedUserName);
}

function bindEvents() {
  elements.navButtons.forEach((button) =>
    button.addEventListener("click", () => {
      uiState.activeScreen = button.dataset.screenTarget;
      renderScreens();
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

  elements.logoutButton.addEventListener("click", () => {
    stopLiveSync();
    localStorage.removeItem(USER_NAME_KEY);
    backendState = { mode: "local", user: null, dashboard: null };
    elements.authUsername.value = "";
    elements.authFeedback.textContent = "";
    elements.userName.value = "";
    renderAuthGate(false);
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

  elements.homeLeaderboardLink?.addEventListener("click", () => {
    openFullLeaderboard();
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
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    refreshSharedState();
  });

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

async function syncSession() {
  const response = await api("/api/session", { userName: currentUserName() });
  state = response.state;
  backendState = response.backend || { mode: "local", user: null, dashboard: null };
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
    await syncSession();
    syncSelectedMarket();
    renderAll();
    renderAuthGate(true);
    startLiveSync();
    elements.authFeedback.textContent = "";
  } catch (error) {
    localStorage.removeItem(USER_NAME_KEY);
    elements.authFeedback.textContent = error.message;
  } finally {
    elements.authUsername.disabled = false;
  }
}

function renderAuthGate(isAuthenticated) {
  elements.authGate.classList.toggle("is-hidden", isAuthenticated);
  elements.appFrame.classList.toggle("is-authenticated", isAuthenticated);
}

function renderAuthPreview() {
  if (!elements.authPreviewList) return;
  const markets = state.markets?.length ? state.markets : authPreviewMarkets;
  const highestProjection = markets.slice().sort((left, right) => projectionValue(right) - projectionValue(left))[0];
  const biggestMover = markets.slice().sort((left, right) => Math.abs(initialMovement(right)) - Math.abs(initialMovement(left)) || projectionValue(right) - projectionValue(left))[0];
  const mostActive = markets.slice().sort((left, right) => authPreviewActivity(right) - authPreviewActivity(left) || projectionValue(right) - projectionValue(left))[0];
  const topTrader = getLeaderboardRows().slice(0, 1)[0];
  const items = [
    {
      label: "Most active market",
      value: mostActive ? mostActive.playerName : "Opening soon",
      meta: mostActive ? matchupContextForPreview(mostActive).label : "Trading activity builds after market open"
    },
    {
      label: "Biggest mover today",
      value: biggestMover ? movementCopyForPreview(biggestMover) : "No move yet",
      meta: biggestMover ? biggestMover.playerName : "Live movement appears as orders match"
    },
    {
      label: "Highest projection",
      value: highestProjection ? `${projectionValue(highestProjection).toFixed(1)} pts` : "0.0 pts",
      meta: highestProjection ? highestProjection.playerName : "Top projected player"
    },
    {
      label: "Top trader",
      value: topTrader ? topTrader.userName : "Board opens with first trade",
      meta: topTrader ? `${formatStake(topTrader.balance)} wallet` : "Compete once the market is live"
    }
  ];
  elements.authPreviewList.innerHTML = items
    .map(
      (item) =>
        `<article class="auth-preview-card"><span>${item.label}</span><strong>${item.value}</strong><p>${item.meta}</p></article>`
    )
    .join("");
}

function startLiveSync() {
  stopLiveSync();
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
  try {
    await syncSession();
    syncSelectedMarket();
    renderAll();
  } catch (error) {
    console.warn("Mercatus live sync failed", error);
  } finally {
    syncInFlight = false;
  }
}

function renderAll() {
  renderHeaderBalance();
  renderScreens();
  renderTeamToggle();
  renderSelectors();
  renderHome();
  renderSearchResults();
  renderSelectedMarket();
  renderMarketsList();
  renderPortfolio();
  renderQuickTake();
  renderLeaderboard();
  renderProfileSummary();
  renderAdminShell();
  renderAdminDashboard();
  renderAdminMarkets();
  renderBotSimulation();
  renderAdminTable();
  syncOpeningForm();
}

function renderHeaderBalance() {
  const bankroll = getDisplayedCash(currentUserName());
  elements.headerBalance.innerHTML = `<span>Wallet</span> ${formatStake(bankroll)}`;
}

function renderScreens() {
  elements.navButtons.forEach((button) =>
    button.classList.toggle("active", button.dataset.screenTarget === uiState.activeScreen)
  );
  elements.screens.forEach((screen) =>
    screen.classList.toggle("active", screen.dataset.screen === uiState.activeScreen)
  );
  elements.toast?.classList.toggle("toast-low", uiState.activeScreen === "quicktake");
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
  const options = state.markets
    .map((market) => `<option value="${market.id}">${market.playerName} (${formatLine(market.currentLine)})</option>`)
    .join("");
  elements.openingMarket.innerHTML = options;
  elements.settlementMarket.innerHTML = state.markets
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
    const comparisonWidth = comparisonPercent(market.currentLine, market.seasonAverage);
    const metrics = getMarketTradeMetrics(market);
    const isExpanded = expandable && market.id === uiState.expandedMarketId;
    row.dataset.marketId = market.id;
    row.classList.toggle("is-selected", market.id === uiState.selectedMarketId);
    row.classList.toggle("is-expanded", isExpanded);
    row.querySelector(".player-name").textContent = market.playerName;
    row.querySelector(".player-meta").textContent = `${market.position} | Avg ${market.seasonAverage.toFixed(1)}`;
    row.querySelector(".season-average").textContent = "";
    row.querySelector(".projection-line").textContent = market.currentLine.toFixed(1);
    row.querySelector(".projection-move").textContent = `${movement.arrow} ${movement.label}`;
    row.querySelector(".projection-move").className = `projection-move ${movement.className}`;
    row.querySelector(".market-confidence-slot").innerHTML = "";
    row.querySelector(".projection-average").textContent = "";
    row.querySelector(".comparison-fill").style.width = `${comparisonWidth}%`;
    row.addEventListener("click", () => {
      uiState.currentGameId = market.gameId;
      uiState.currentTeam = market.team;
      uiState.selectedMarketId = market.id;
      uiState.expandedMarketId = expandable && uiState.expandedMarketId !== market.id ? market.id : "";
      uiState.focusStakeMarketId = "";
      uiState.activeScreen = "markets";
      renderAll();
    });
    container.appendChild(row);

    if (isExpanded) {
      const panel = document.createElement("article");
      panel.className = "inline-market-panel";
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
    }
  });
}

function renderSelectedMarket() {
  const game = currentGame();
  const preview = adjacentGame(1) || adjacentGame(-1) || game;
  const swipeHint = currentGameIndex() === 0
    ? "Swipe left to next game"
    : currentGameIndex() === roundGames.length - 1
      ? "Swipe right to previous game"
      : "Swipe left or right to change game";
  const homeColors = TEAM_COLORS[game.homeTeam] ?? TEAM_COLORS[normalizeTeamName(game.homeTeam)] ?? { primary: "#101722", secondary: "#68d9ff" };
  const awayColors = TEAM_COLORS[game.awayTeam] ?? TEAM_COLORS[normalizeTeamName(game.awayTeam)] ?? { primary: "#101722", secondary: "#00ffa3" };
  elements.selectedMarketPanel.innerHTML = `<div class="match-card-stack"><div class="market-note-card preview-card" style="--match-primary:${teamPrimary(preview.homeTeam)};--match-secondary:${teamSecondary(preview.awayTeam)};"><p class="eyebrow">Queue</p><h3>${preview.title}</h3><span class="market-note-meta">${preview.kickoff}</span><p>${preview.venue}</p></div><div class="market-note-card active-card" style="--match-primary:${homeColors.primary};--match-secondary:${awayColors.secondary};"><p class="eyebrow">Match centre</p><h3>${game.title}</h3><span class="market-note-meta">${game.kickoff}</span><p>${game.venue}</p><div class="swipe-hint">${swipeHint}</div></div></div>`;
  bindMatchCardSwipe();
}

function renderLeaderboard() {
  const rows = getLeaderboardRows();
  const leaders = rows.slice(0, 3);
  const bankroll = getDisplayedCash(currentUserName());
  elements.leaderboardBalancePill.innerHTML = `<span>Wallet</span><strong>${formatStake(bankroll)}</strong>`;
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
  elements.leaderboardList.innerHTML = rows
    .map(
      (row, index) =>
        `<article class="leaderboard-card ${index < 3 ? "is-top-rank" : ""}"><div class="leaderboard-rank">${index + 1}</div><div class="leaderboard-copy"><strong>${row.userName}</strong><span class="leaderboard-meta">${row.tradesCount} trades | ${row.winRate}% win rate</span><span class="leaderboard-position">${row.largestOpen ? `${row.largestOpen.playerName ?? findMarket(row.largestOpen.marketId)?.playerName ?? "Unknown"} ${row.largestOpen.side} ${row.largestOpen.entryLine.toFixed(1)} | ${formatStake(row.largestOpen.stake)}` : "No open position"}</span></div><div class="leaderboard-metric"><strong>${formatStake(row.balance)}</strong><span class="${row.realized > 0 ? "positive" : row.realized < 0 ? "negative" : ""}">${formatSignedStake(row.realized)}</span></div></article>`
    )
    .join("");
}

function renderLeaderboardControls() {
  const options = [
    ["BALANCE", "Top balance"],
    ["WIN_RATE", "Win rate"],
    ["TRADES", "Most trades"]
  ];
  elements.leaderboardSortChips.innerHTML = options
    .map(
      ([value, label]) =>
        `<button class="portfolio-chip ${uiState.leaderboardSort === value ? "active" : ""}" type="button" data-leaderboard-sort="${value}">${label}</button>`
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
  const currentPair = linePairForMarket(market);
  const side = getMarketTradeSide(market.id);
  const selectedLine = side === "OVER" ? currentPair.overLine : currentPair.underLine;
  const status = getMarketStatus(market);
  const movement = getMovementText(market);
  const nextLine = calculateNextLine(market, side, 10);
  const metrics = getMarketTradeMetrics(market);
  return `<div class="trade-ticket"><div class="hero-head trade-ticket-head"><div><div class="hero-player">${market.playerName}</div><div class="hero-meta">${market.team} | ${market.position}</div></div><div class="trade-ticket-status-block"><span class="status-chip ${status.className}">${status.label}</span>${marketConfidenceMarkup(metrics.confidence)}</div></div><div class="hero-price trade-ticket-price"><div class="hero-price-value">${market.currentLine.toFixed(1)}</div><div class="hero-delta ${movement.className}">${movement.arrow} ${movement.label}</div></div><div class="hero-comparison trade-spread-inline"><div class="trade-spread-grid"><div class="trade-spread-row"><span class="trade-label">Projection</span><strong>Under ${currentPair.underLine.toFixed(1)} <span class="trade-divider">|</span> Over ${currentPair.overLine.toFixed(1)}</strong></div><div class="trade-spread-row"><span class="trade-label">Next midpoint</span><strong>${nextLine.toFixed(1)}</strong></div></div></div><form id="trade-form" class="trade-form-grid trade-ticket-form ${isPending ? "is-pending" : ""}"><div class="trade-actions"><button type="button" class="trade-button trade-over ${side === "OVER" ? "active" : ""}" data-side="OVER" ${isPending ? "disabled" : ""}><span class="trade-button-label">Over</span><span class="trade-button-price">${currentPair.overLine.toFixed(1)}</span></button><button type="button" class="trade-button trade-under ${side === "UNDER" ? "active" : ""}" data-side="UNDER" ${isPending ? "disabled" : ""}><span class="trade-button-label">Under</span><span class="trade-button-price">${currentPair.underLine.toFixed(1)}</span></button></div><div class="stake-section"><div class="stake-row compact-stake-row"><label><span class="trade-label">Stake</span><input id="stake-input" name="stake" type="number" min="1" step="1" value="${stakeDraft}" required ${isPending ? "disabled" : ""}></label><div class="stake-preview"><span class="trade-label">Return</span><strong id="stake-return">${formatStake(stakeDraft * 2)}</strong></div></div><div class="stake-module-head"><span class="trade-label">Quick add</span><div class="quick-stakes"><button type="button" class="quick-stake-button" data-stake-add="5" ${isPending ? "disabled" : ""}>+5</button><button type="button" class="quick-stake-button" data-stake-add="10" ${isPending ? "disabled" : ""}>+10</button><button type="button" class="quick-stake-button" data-stake-add="25" ${isPending ? "disabled" : ""}>+25</button><button type="button" class="quick-stake-button" data-stake-max="true" ${isPending ? "disabled" : ""}>MAX</button></div></div></div><div class="trade-note-row"><span class="trade-label">Execution</span><span class="trade-note-copy">Fills against waiting orders first, then shifts the projection if needed</span></div><button class="primary-button trade-confirm-button ${isPending ? "is-loading" : ""}" type="submit" ${isPending ? "disabled" : ""}>${isPending ? "Placing..." : "Confirm position"}</button><p id="trade-feedback" class="feedback" aria-live="polite">${isPending ? "Submitting trade..." : ""}</p></form></div>`;
}

function bindTradeSheetEvents(panel, marketId) {
  const tradeForm = panel.querySelector("#trade-form");
  const stakeInput = panel.querySelector("#stake-input");
  const stakeReturn = panel.querySelector("#stake-return");
  const market = findMarket(marketId);

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

  tradeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitTrade(marketId, Number(stakeInput.value) || 0, panel);
  });

  if (market?.settlement || market?.manuallyLocked) {
    tradeForm.querySelector("button[type='submit']").disabled = true;
  }
}

async function submitTrade(marketId, stake, panel) {
  const feedback = panel.querySelector("#trade-feedback");
  const tradeSide = getMarketTradeSide(marketId);
  if (!Number.isFinite(stake) || stake <= 0) {
    feedback.textContent = "Enter a valid stake.";
    return;
  }
  uiState.pendingTradeMarketId = marketId;
  renderAll();
  try {
    const response = await executeTrade(marketId, stake, tradeSide);
    state = response.state;
    backendState = response.backend || backendState;
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
    refreshSharedState();
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

function executeQuickTakeTrade(marketId, side) {
  return api("/api/trades", {
    userName: currentUserName(),
    marketId,
    side,
    stake: 1,
    quickTake: true
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
  const positions = sortPortfolioPositions(filterPortfolioPositions(buildPortfolioItems(openTrades, settledTrades)));
  elements.portfolioBalancePill.innerHTML = `<span>Wallet</span><strong>${formatStake(cash)}</strong>`;
  elements.portfolioSummary.innerHTML = [
    portfolioMetricCard("Balance", formatStake(cash)),
    portfolioMetricCard("Open positions", String(openTrades.length)),
    portfolioMetricCard("Matched stake", formatStake(matchedBalance)),
    portfolioMetricCard("Unmatched stake", formatStake(unmatchedBalance)),
    portfolioMetricCard("Realized P/L", formatSignedStake(realized), realized),
    portfolioMetricCard("Win rate", `${winRate}%`, winRate >= 50 ? 1 : winRate === 0 ? 0 : -1)
  ].join("");
  renderPortfolioFilters();
  renderPortfolioPositionCards(elements.portfolioList, positions, "No positions match that filter yet.");
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
    const status = getTradeStatus(trade);
    const currentLine = trade.currentLine ?? market?.currentLine;
    const plValue = trade.result ? trade.result.profit : currentLine !== undefined ? (currentLine - trade.entryLine) * (trade.side === "OVER" ? 1 : -1) : 0;
    const timeLabel = trade.result ? `${formatTradeResultLabel(trade.result)} | ${formatTimestamp(trade.timestamp)}` : `Updated ${formatTimestamp(trade.timestamp)}`;
    applyStatusChip(card.querySelector(".status-chip"), status);
    card.querySelector(".position-side-badge").textContent = trade.side;
    card.querySelector(".position-side-badge").className = `position-side-badge ${trade.side === "OVER" ? "side-over" : "side-under"}`;
    card.querySelector(".position-title").textContent = trade.playerName ?? market?.playerName ?? "Unknown player";
    const matchedStake = Number(trade.matchedStake) || 0;
    const unmatchedStake = Number(trade.unmatchedStake) || 0;
    const lineLabel = trade.side === "OVER" ? trade.entryOverLine ?? trade.entryLine : trade.entryUnderLine ?? trade.entryLine;
    const matchedLabel = matchedStake ? ` | Matched ${formatStake(matchedStake)}` : "";
    const unmatchedLabel = unmatchedStake ? ` | Unmatched ${formatStake(unmatchedStake)}` : "";
    card.querySelector(".position-meta").textContent = `${trade.position ?? market?.position ?? "Market"} | Line ${Number(lineLabel).toFixed(1)}${matchedLabel}${unmatchedLabel}`;
    card.querySelector(".position-pl-value").textContent = formatSignedStake(plValue);
    card.querySelector(".position-pl-value").className = `position-pl-value ${plValue > 0 ? "positive" : plValue < 0 ? "negative" : ""}`;
    card.querySelector(".position-time").textContent = timeLabel;
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

function renderQuickTake() {
  if (!elements.quickTakeDeck) return;
  syncQuickTakeQueue();
  const queue = getQuickTakeQueueMarkets();
  if (!queue.length) {
    elements.quickTakeDeck.innerHTML = `<div class="portfolio-empty-state"><strong>No open markets right now</strong><span>Quick Take only shows player markets that are currently open.</span></div>`;
    return;
  }
  const current = queue[0];
  const next = queue[1];
  const currentPair = linePairForMarket(current);
  const movement = getMovementText(current);
  const metrics = getMarketTradeMetrics(current);
  const matchup = matchupContext(current);
  const scores = quickTakeRecentScores(current);
  const isPending = Boolean(uiState.quickTakePendingMarketId);
  const teamColors = TEAM_COLORS[current.team] ?? TEAM_COLORS[normalizeTeamName(current.team)] ?? { primary: "#101722", secondary: "#68d9ff" };
  const nextColors = next ? TEAM_COLORS[next.team] ?? TEAM_COLORS[normalizeTeamName(next.team)] ?? { primary: "#101722", secondary: "#68d9ff" } : null;
  elements.quickTakeDeck.innerHTML = `${next ? `<article class="quick-take-card is-back" style="--quick-primary-soft:${hexToRgba(nextColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(nextColors.secondary, 0.18)};"><div class="quick-take-backdrop"></div><div class="quick-take-mini"><span class="eyebrow">Up next</span><strong>${next.playerName}</strong><span>${next.team} | ${next.position}</span><span class="quick-take-mini-context">${matchupContext(next).label}</span></div></article>` : ""}<article class="quick-take-card is-front player-card-shell" data-market-id="${current.id}" style="--quick-primary-soft:${hexToRgba(teamColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(teamColors.secondary, 0.18)};${playerCardTone(current)}"><div class="quick-take-backdrop"></div><div class="quick-take-topline"><span class="eyebrow">Quick Take</span><span class="quick-take-counter">${queue.length} left</span></div><div class="quick-take-header"><div><h3>${current.playerName}</h3><p>${current.team} | ${current.position}</p><p class="quick-take-context">${matchup.label}</p></div><div class="quick-take-status-block"><span class="status-chip status-open">Open</span>${marketConfidenceMarkup(metrics.confidence)}</div></div><div class="quick-take-line">${current.currentLine.toFixed(1)}</div><div class="quick-take-move ${movement.className}">${movement.arrow} ${movement.label}</div><div class="quick-take-spread"><span><strong>Under</strong> ${currentPair.underLine.toFixed(1)}</span><span><strong>Over</strong> ${currentPair.overLine.toFixed(1)}</span><span><strong>Stake</strong> $1</span></div><div class="quick-take-stats"><span class="trade-label">Recent</span><div class="quick-take-score-row">${scores.map((score) => `<span class="quick-take-score-pill">${score}</span>`).join("")}</div><div class="quick-take-statline"><span>Avg ${current.seasonAverage.toFixed(1)}</span><span>${metrics.unmatchedOrderCount} unmatched orders</span></div></div><div class="quick-take-actions"><button class="quick-take-action quick-take-under" type="button" data-quick-side="UNDER" ${isPending ? "disabled" : ""}>${isPending && uiState.quickTakePendingSide === "UNDER" ? "Submitting..." : `Under ${currentPair.underLine.toFixed(1)}`}</button><button class="quick-take-action quick-take-over" type="button" data-quick-side="OVER" ${isPending ? "disabled" : ""}>${isPending && uiState.quickTakePendingSide === "OVER" ? "Submitting..." : `Over ${currentPair.overLine.toFixed(1)}`}</button></div></article>`;
  const activeCard = elements.quickTakeDeck.querySelector(".quick-take-card.is-front");
  activeCard?.querySelectorAll("[data-quick-side]").forEach((button) =>
    button.addEventListener("click", async () => {
      await submitQuickTake(current.id, button.dataset.quickSide, activeCard);
    })
  );
}

async function submitQuickTake(marketId, side, card) {
  if (uiState.quickTakePendingMarketId) return;
  uiState.quickTakePendingMarketId = marketId;
  uiState.quickTakePendingSide = side;
  const request = executeQuickTakeTrade(marketId, side);
  const liveCard = elements.quickTakeDeck.querySelector(`.quick-take-card.is-front[data-market-id="${marketId}"]`) || card;
  if (liveCard) {
    liveCard.classList.add(side === "OVER" ? "is-exit-over" : "is-exit-under");
  }
  await wait(140);
  advanceQuickTakeQueue(marketId);
  renderQuickTake();
  try {
    const response = await request;
    applyQuickTakeTradeResponse(response, marketId);
    const submittedTrade = response.trade;
    uiState.quickTakePendingMarketId = "";
    uiState.quickTakePendingSide = "";
    renderHeaderBalance();
    renderQuickTake();
    triggerBalanceFlash();
    const toastMessage = submittedTrade?.status === "MATCHED"
      ? `Matched $1 on ${side}`
      : submittedTrade?.status === "PARTIALLY_MATCHED"
        ? `Matched ${formatStake(submittedTrade.matchedStake || 0)} and left ${formatStake(submittedTrade.unmatchedStake || 0)} available`
        : `Posted ${formatStake(submittedTrade?.unmatchedStake || 1)} on ${side}`;
    showToast("Quick Take submitted", toastMessage);
    window.setTimeout(() => {
      refreshSharedState();
    }, 150);
  } catch (error) {
    restoreQuickTakeMarket(marketId);
    uiState.quickTakePendingMarketId = "";
    uiState.quickTakePendingSide = "";
    renderQuickTake();
    showToast("Quick Take failed", error.message);
  }
}

function applyQuickTakeTradeResponse(response, marketId) {
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

function renderProfileSummary() {
  const userName = currentUserName();
  const bankroll = getDisplayedCash(userName);
  const trades = getUserTrades(userName);
  const leaderboardRows = getLeaderboardRows();
  const rank = leaderboardRows.findIndex((row) => row.userName.toLowerCase() === userName.toLowerCase()) + 1;
  const openTrades = trades.filter((trade) => !trade.result && trade.status !== "CANCELLED").length;
  elements.profileSummary.innerHTML = [
    summaryStat("Username", userName),
    summaryStat("Wallet", formatStake(bankroll), bankroll >= STARTING_BANKROLL ? 1 : 0),
    summaryStat("Open positions", String(openTrades)),
    summaryStat("Leaderboard rank", rank ? `#${rank}` : "Unranked")
  ].join("");
}

function renderAdminShell() {
  elements.adminShell.classList.toggle("is-open", uiState.adminOpen);
  elements.adminShell.setAttribute("aria-hidden", String(!uiState.adminOpen));
  if (elements.settleRoundButton) {
    elements.settleRoundButton.textContent = `Settle ${CURRENT_ROUND_LABEL} from imported scores`;
  }
  if (elements.undoSettlementButton) {
    elements.undoSettlementButton.disabled = !state.lastSettlementBatch;
  }
}

function renderAdminMarkets() {
  const filteredMarkets = getAdminMarkets();
  const totalMarkets = state.markets.length;
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
    : `<div class="section-meta">No bot events yet. Create a bot to start autonomous Quick Take activity.</div>`;
}

function renderAdminTable() {
  const trades = getAdminTrades();
  const allTradesCount = state.markets.reduce((sum, market) => sum + market.trades.length, 0);
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
  const sortedMarkets = state.markets
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
  const trades = state.markets.flatMap((market) =>
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
  const allTrades = state.markets.flatMap((market) => market.trades || []);
  const latestRoundMetrics = getLatestRoundMetrics();
  const totalTradedValue = allTrades.reduce((sum, trade) => sum + (Number(trade.stake) || 0), 0);
  const openTrades = allTrades.filter((trade) => !trade.result);
  const liveExposure = openTrades.reduce((sum, trade) => sum + (Number(trade.matchedStake) || 0), 0);
  const availableLiquidity = openTrades.reduce((sum, trade) => sum + (Number(trade.unmatchedStake) || 0), 0);
  const matchedOpenTrades = openTrades.filter((trade) => (Number(trade.matchedStake) || 0) > 0).length;
  const pendingTrades = openTrades.filter((trade) => (Number(trade.unmatchedStake) || 0) > 0).length;
  const overPressure = state.markets.reduce((sum, market) => sum + Math.max(0, Number(market.netPressure) || 0), 0);
  const underPressure = state.markets.reduce((sum, market) => sum + Math.max(0, -(Number(market.netPressure) || 0)), 0);
  const netPressure = overPressure - underPressure;
  const botTrades = allTrades.filter((trade) => isBotTrade(trade)).length;
  const activeMarkets = state.markets.filter((market) => !market.settlement).length;
  const resolvedMarkets = state.markets.length - activeMarkets;
  const marketsNeedingAction = state.markets.filter((market) => adminMarketRank(market) >= 300).length;
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

async function saveLines() {
  try {
    const response = await api("/api/admin/lines", {
      marketId: elements.openingMarket.value,
      openingLine: Number(elements.openingLineInput.value),
      currentLine: Number(elements.currentLineInput.value)
    });
    state = response.state;
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
    state = response.state;
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
    state = response.state;
    renderAll();
    const settledCount = response.settlementBatch?.settledCount ?? 0;
    const scoredCount = response.settlementBatch?.scoredCount ?? 0;
    const voidCount = response.settlementBatch?.voidCount ?? 0;
    const roundMetrics = response.settlementBatch?.roundMetrics;
    const baseMessage = voidCount
      ? `${CURRENT_ROUND_LABEL} settled for ${settledCount} markets. ${scoredCount} used official scores and ${voidCount} were voided with stake refunds.`
      : `${CURRENT_ROUND_LABEL} settled for ${settledCount} markets.`;
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
    state = response.state;
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
    state = response.state;
    renderAll();
    elements.botConfigFeedback.textContent = "Bot settings updated.";
  } catch (error) {
    elements.botConfigFeedback.textContent = error.message;
  }
}

async function createSimulationBot(mode = "default") {
  try {
    const response = await api("/api/admin/bots/create", { mode });
    state = response.state;
    renderAll();
    const botName = response.bot?.userName || "Quick Take bot";
    const botDescription = mode === "random-prob" ? "50/50 random-probability bot" : "Quick Take bot";
    elements.botRunFeedback.textContent = `${botName} created with $200 and started auto-playing as a ${botDescription}.`;
    showToast("Bot created", `${botName} joined the Quick Take market.`);
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
  const market = findMarket(elements.openingMarket.value || uiState.selectedMarketId);
  if (!market) return;
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
  return roundGames.find((game) => game.id === uiState.currentGameId) ?? roundGames[0];
}

function getGameMarkets(gameId) {
  return state.markets.filter((market) => market.gameId === gameId);
}

function getVisibleMarkets() {
  return getGameMarkets(uiState.currentGameId).filter((market) => market.team === uiState.currentTeam);
}

function syncQuickTakeQueue() {
  const openMarketIds = state.markets.filter(isMarketOpen).map((market) => market.id);
  const openIdSet = new Set(openMarketIds);
  const seen = uiState.quickTakeSeenMarketIds.filter((marketId) => openIdSet.has(marketId));
  const seenSet = new Set(seen);
  const unseen = openMarketIds.filter((marketId) => !seenSet.has(marketId));
  const rankedQueue = unseen
    .map((marketId) => findMarket(marketId))
    .filter(Boolean)
    .sort(compareQuickTakeMarkets)
    .map((market) => market.id);
  let nextQueue = rankedQueue;
  let nextSeen = seen;
  if (!nextQueue.length) {
    nextSeen = [];
    nextQueue = openMarketIds
      .map((marketId) => findMarket(marketId))
      .filter(Boolean)
      .sort(compareQuickTakeMarkets)
      .map((market) => market.id);
  }
  if (!arraysEqual(nextSeen, uiState.quickTakeSeenMarketIds)) {
    uiState.quickTakeSeenMarketIds = nextSeen;
  }
  if (!arraysEqual(nextQueue, uiState.quickTakeMarketIds)) {
    uiState.quickTakeMarketIds = nextQueue;
  }
}

function getQuickTakeQueueMarkets() {
  syncQuickTakeQueue();
  return uiState.quickTakeMarketIds.map((marketId) => findMarket(marketId)).filter(Boolean);
}

function advanceQuickTakeQueue(marketId) {
  if (marketId && !uiState.quickTakeSeenMarketIds.includes(marketId)) {
    uiState.quickTakeSeenMarketIds = [...uiState.quickTakeSeenMarketIds, marketId];
  }
  uiState.quickTakeMarketIds = uiState.quickTakeMarketIds.filter((id) => id !== marketId);
  syncQuickTakeQueue();
}

function restoreQuickTakeMarket(marketId) {
  uiState.quickTakeSeenMarketIds = uiState.quickTakeSeenMarketIds.filter((id) => id !== marketId);
  uiState.quickTakeMarketIds = [marketId, ...uiState.quickTakeMarketIds.filter((id) => id !== marketId)];
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

function getLeaderboardRows() {
  if (backendState.mode === "supabase" && backendState.dashboard?.leaderboard?.length) {
    return sortLeaderboardRows(backendState.dashboard.leaderboard);
  }
  return sortLeaderboardRows(buildLeaderboardRows());
}

function renderHome() {
  const topProjected = state.markets
    .slice()
    .sort((left, right) => right.currentLine - left.currentLine)
    .slice(0, 20);
  const biggestMovers = state.markets
    .slice()
    .sort((left, right) => Math.abs(getMovementValue(right)) - Math.abs(getMovementValue(left)) || right.currentLine - left.currentLine)
    .slice(0, 20);
  const projectionComparisons = state.markets
    .map((market) => {
      const impliedScore = impliedFantasyScoreForMarket(market);
      return {
        market,
        impliedScore,
        value: roundToHalf(market.currentLine - impliedScore)
      };
    })
    .sort((left, right) => Math.abs(right.value) - Math.abs(left.value) || right.market.currentLine - left.market.currentLine)
    .slice(0, 20);
  const mostTraded = state.markets
    .slice()
    .sort((left, right) => tradeCountFor(right) - tradeCountFor(left) || tradeVolumeFor(right) - tradeVolumeFor(left))
    .slice(0, 20);
  const leaderboardRows = getLeaderboardRows();
  const topLeaderboardRows = leaderboardRows.slice(0, 20);

  renderHomeCarouselControls();

  renderHomeMarketLeaderboard(elements.homeBiggestMovers, biggestMovers, ({ market }) => {
    const movement = getMovementText(market);
    return {
      badge: movement.arrow,
      badgeTone: movement.className,
      title: market.playerName,
      meta: `${market.team} | ${market.position}`,
      detail: `Now ${market.currentLine.toFixed(1)} pts`,
      statPrimary: movement.label,
      statSecondary: movement.value > 0 ? "Projection rising" : movement.value < 0 ? "Projection falling" : "No movement"
    };
  }, {
    variant: "compact-list-group",
    headingEyebrow: "What's moving",
    headingTitle: "Markets shifting fastest right now"
  });

  renderHomeMarketLeaderboard(elements.homeMostTraded, mostTraded, ({ market }) => {
    const metrics = getMarketTradeMetrics(market);
    return {
      title: market.playerName,
      meta: market.team,
      metricMarkup: `<span class="home-confidence-primary">${marketConfidenceRowIcon(metrics.confidence)}<span class="home-confidence-percent">${metrics.confidence}%</span></span>`,
      statSecondary: `${tradeVolumeFor(market)} traded`
    };
  }, {
    variant: "featured-market-confidence",
    headingEyebrow: "Market confidence",
    headingTitle: "Crowd-backed markets with real flow",
    summaryItems: mostTraded[0]
      ? [
          {
            label: "Most active",
            value: mostTraded[0].playerName
          },
          {
            label: "Top volume",
            value: tradeVolumeFor(mostTraded[0])
          }
        ]
      : []
  });

  renderHomeMarketLeaderboard(elements.homeTopProjected, topProjected, ({ market }) => ({
    badge: "Proj",
    badgeTone: "",
    title: market.playerName,
    meta: `${market.team} | ${market.position}`,
    detail: matchupContext(market).label,
    statPrimary: `${market.currentLine.toFixed(1)} pts`,
    statSecondary: optionalTrendText(market)
  }), {
    variant: "compact-projection-group",
    headingEyebrow: "Top projected",
    headingTitle: "Where market consensus currently sits"
  });

  renderHomeMarketLeaderboard(elements.homeBestValue, projectionComparisons, ({ market, impliedScore, value }) => ({
    badge: formatSignedLine(value),
    badgeTone: value > 0 ? "move-up" : value < 0 ? "move-down" : "move-flat",
    title: market.playerName,
    meta: `${market.team} | ${market.position}`,
    detail: `App ${market.currentLine.toFixed(1)} | NRL ${impliedScore.toFixed(1)}`,
    statPrimary: formatSignedLine(value),
    statSecondary: "Projection difference"
  }), {
    variant: "compact-list-group",
    headingEyebrow: "Value spots",
    headingTitle: "Where crowdIQ differs from NRL price",
    emptyMessage: "Projection comparisons will appear here once player baselines are available."
  });

  renderHomeUserLeaderboard(elements.homeUserLeaderboard, topLeaderboardRows, {
    headingEyebrow: "Leaderboard",
    headingTitle: "Community snapshot"
  });

  window.requestAnimationFrame(() => {
    syncHomeCarouselPosition();
  });
}

function renderHomeCarouselControls() {
  if (!elements.homeCarouselNav || !elements.homeCarouselMeta) return;
  const panels = [
    { key: "movers", label: "Movers", detail: "Markets shifting fastest" },
    { key: "activity", label: "Most Traded", detail: "Crowd-backed activity" },
    { key: "projected", label: "Projected", detail: "Top current lines" },
    { key: "value", label: "Value", detail: "Gaps vs NRL price" },
    { key: "leaderboard", label: "Leaderboard", detail: "Community standings" }
  ];
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

function sortLeaderboardRows(rows) {
  return rows.slice().sort((a, b) => {
    if (uiState.leaderboardSort === "WIN_RATE") {
      if (b.winRate !== a.winRate) return b.winRate - a.winRate;
      if (b.balance !== a.balance) return b.balance - a.balance;
      return b.tradesCount - a.tradesCount;
    }
    if (uiState.leaderboardSort === "TRADES") {
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

function buildLeaderboardRows() {
  return [...new Set([...Object.keys(state.bankrolls), ...state.markets.flatMap((market) => market.trades.map((trade) => trade.userName))])]
    .map((userName) => {
      const trades = getUserTrades(userName);
      const settled = trades.filter((trade) => trade.result);
      const wins = settled.filter((trade) => trade.result?.outcome === "WIN").length;
      const realized = settled.reduce((sum, trade) => sum + trade.result.profit, 0);
      const largestOpen = aggregateOpenPositions(trades.filter((trade) => trade.status !== "SETTLED" && trade.status !== "CANCELLED")).sort((a, b) => (b.activeStake ?? b.stake) - (a.activeStake ?? a.stake))[0];
      return {
        userName,
        balance: getUserCash(userName),
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
  if (!rows.length) {
    container.innerHTML = `<div class="portfolio-empty-state"><strong>No markets yet</strong><span>${options.emptyMessage || "Market activity will appear here once trading begins."}</span></div>`;
    return;
  }
  const summaryMarkup = (options.summaryItems || []).length
    ? `<div class="home-group-summary">${options.summaryItems
        .map((item) => `<span><strong>${item.value}</strong><em>${item.label}</em></span>`)
        .join("")}</div>`
    : "";
  if (options.variant === "compact-projection-group") {
    container.innerHTML = `<article class="home-group-card"><div class="home-group-card-head"><p class="eyebrow">${options.headingEyebrow || ""}</p><h3>${options.headingTitle || ""}</h3>${summaryMarkup}</div><div class="home-group-card-body">${rows
      .map((row, index) => {
        const market = row.market || row;
        const movement = getMovementText(market);
        return `<button class="home-projection-subcard" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}"><span class="home-card-rank">${index + 1}</span><div class="home-projection-copy"><strong>${market.playerName}</strong><span>${matchupContext(market).label}</span></div><div class="home-projection-metric"><strong>${market.currentLine.toFixed(1)} pts</strong><span class="${movement.className}">${movement.value === 0 ? "Holding steady" : `${movement.arrow} ${movement.label} today`}</span></div></button>`;
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
    container.innerHTML = `<article class="home-group-card"><div class="home-group-card-head"><p class="eyebrow">${options.headingEyebrow || ""}</p><h3>${options.headingTitle || ""}</h3>${summaryMarkup}</div><div class="home-group-card-body">${rows
      .map((row, index) => {
        const market = row.market || row;
        const view = presenter({ market, ...row }, index);
        return `<button class="home-projection-subcard home-list-subcard" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}"><span class="home-card-rank">${index + 1}</span><div class="home-projection-copy"><strong>${view.title}</strong><span>${view.detail}</span></div><div class="home-projection-metric"><strong>${view.statPrimary}</strong><span class="${view.badgeTone || ""}">${view.statSecondary}</span></div></button>`;
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
    container.innerHTML = `<article class="home-group-card home-group-card-featured"><div class="home-group-card-head"><p class="eyebrow">${options.headingEyebrow || ""}</p><h3>${options.headingTitle || ""}</h3>${summaryMarkup}</div><div class="home-group-card-body">${rows
      .map((row, index) => {
        const market = row.market || row;
        const view = presenter({ market, ...row }, index);
        return `<button class="home-projection-subcard home-list-subcard home-confidence-subcard" type="button" data-market-id="${market.id}" style="${teamSurfaceTone(market.team)}"><span class="home-card-rank">${index + 1}</span><div class="home-projection-copy home-confidence-copy"><strong>${view.title}</strong><span>${view.meta}</span></div><div class="home-projection-metric home-confidence-metric-block">${view.metricMarkup ? `<strong class="home-confidence-metric">${view.metricMarkup}</strong>` : `<strong>${view.statPrimary}</strong>`}<span class="home-confidence-secondary">${view.statSecondary}</span></div></button>`;
      })
      .join("")}</div></article>`;
    container.querySelectorAll("[data-market-id]").forEach((card) =>
      card.addEventListener("click", () => {
        openMarketFromHome(card.dataset.marketId);
      })
    );
    return;
  }
  container.innerHTML = rows
    .map((row, index) => {
      const market = row.market || row;
      const view = presenter({ market, ...row }, index);
      return `<button class="home-leaderboard-card" type="button" data-market-id="${market.id}"><span class="home-card-rank">${index + 1}</span><div class="home-card-copy"><div class="home-card-topline"><strong>${view.title}</strong><span class="home-card-badge ${view.badgeTone || ""}">${view.badge}</span></div><span>${view.meta}</span><span>${view.detail}</span></div><div class="home-card-metric"><strong>${view.statPrimary}</strong><span>${view.statSecondary}</span></div></button>`;
    })
    .join("");
  container.querySelectorAll("[data-market-id]").forEach((card) =>
    card.addEventListener("click", () => {
      openMarketFromHome(card.dataset.marketId);
    })
  );
}

function renderHomeUserLeaderboard(container, rows, options = {}) {
  if (!container) return;
  if (!rows.length) {
    container.innerHTML = `<div class="portfolio-empty-state"><strong>No leaderboard yet</strong><span>Community rankings will appear once users place trades.</span></div>`;
    return;
  }
  container.innerHTML = `<article class="home-group-card"><div class="home-group-card-head has-action"><div><p class="eyebrow">${options.headingEyebrow || ""}</p><h3>${options.headingTitle || ""}</h3></div><button id="home-inline-leaderboard-link" class="secondary-button inline-section-button" type="button">View full board</button></div><div class="home-group-card-body">${rows
    .map(
      (row, index) =>
        `<button class="home-projection-subcard home-list-subcard home-user-subcard" type="button" data-open-leaderboard="true"><span class="home-card-rank">#${index + 1}</span><div class="home-projection-copy"><strong>${row.userName}</strong><span>${row.tradesCount} trades | ${row.winRate}% win rate</span></div><div class="home-projection-metric"><strong>${formatStake(row.balance)}</strong><span class="${row.realized > 0 ? "positive" : row.realized < 0 ? "negative" : ""}">${formatSignedStake(row.realized)}</span></div></button>`
    )
    .join("")}</div></article>`;
  container.querySelector("#home-inline-leaderboard-link")?.addEventListener("click", () => {
    openFullLeaderboard();
  });
  container.querySelectorAll("[data-open-leaderboard]").forEach((button) =>
    button.addEventListener("click", () => {
      openFullLeaderboard();
    })
  );
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

function openFullLeaderboard() {
  uiState.activeScreen = "account";
  renderAll();
  window.requestAnimationFrame(() => {
    elements.leaderboardList?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
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

function quickTakeRecentScores(market) {
  const seedValue = [...market.id].reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 3), 0);
  return Array.from({ length: 4 }, (_, index) => {
    const offset = ((seedValue >> (index * 2)) % 13) - 6;
    return Math.max(8, Math.round(market.seasonAverage + offset));
  });
}

function getMarketStatus(market) {
  if (market.settlement) return { label: "Resolved", className: "status-resolved" };
  if (market.manuallyLocked) return { label: "Locked", className: "status-locked" };
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

function fantasyPlayerStatsFor(market) {
  return derivedData.playerStatsByName?.[normalizePlayerKey(market.playerName)] || null;
}

function impliedFantasyScoreForMarket(market) {
  const stats = fantasyPlayerStatsFor(market);
  return Number(stats?.seasonAverage ?? market.seasonAverage ?? market.initialLine ?? 0);
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
  const leftMetrics = getMarketTradeMetrics(left);
  const rightMetrics = getMarketTradeMetrics(right);
  return rightMetrics.unmatchedOrderCount - leftMetrics.unmatchedOrderCount
    || rightMetrics.volume - leftMetrics.volume
    || Math.abs(getMovementValue(right)) - Math.abs(getMovementValue(left))
    || left.playerName.localeCompare(right.playerName);
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

function isMarketOpen(market) {
  return !market.settlement && !market.manuallyLocked;
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
    state = response.state;
    backendState = response.backend || { mode: "local", user: null, dashboard: null };
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
    const expandedCard = elements.marketsList.querySelector(".market-row.is-expanded");
    if (!expandedCard || expandedCard.dataset.marketId !== marketId) {
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
  let currentDelta = 0;
  let previewDirection = 1;

  activeCard.addEventListener(
    "touchstart",
    (event) => {
      startX = event.changedTouches[0].clientX;
      currentDelta = 0;
      activeCard.style.transition = "none";
    },
    { passive: true }
  );

  activeCard.addEventListener(
    "touchmove",
    (event) => {
      currentDelta = event.changedTouches[0].clientX - startX;
      previewDirection = currentDelta < 0 ? 1 : -1;
      const preview = adjacentGame(previewDirection);
      if (!preview) {
        activeCard.style.transform = "";
        return;
      }
      previewCard.querySelector("h3").textContent = preview.title;
      previewCard.querySelector(".market-note-meta").textContent = preview.kickoff;
      previewCard.querySelector("p").textContent = preview.venue;
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
      if (Math.abs(currentDelta) < SWIPE_THRESHOLD || !adjacentGame(previewDirection)) {
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
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data;
}


