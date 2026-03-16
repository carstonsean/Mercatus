const HALF_POINT = 0.5;
const LINE_STEP = 1;
const PRESSURE_STEP = 20;
const STARTING_BANKROLL = 1000;
const SWIPE_THRESHOLD = 60;
const DEFAULT_USER_NAME = "Demo Trader";
const USER_NAME_KEY = "mercatus-user-name";
const LIVE_SYNC_MS = 2500;

const seed = window.MERCATUS_SEED;
const roundGames = seed.roundGames;
const TEAM_COLORS = seed.TEAM_COLORS;

let state = { bankrolls: {}, markets: [] };
let backendState = { mode: "local", user: null, dashboard: null };
let toastTimer = null;
let syncTimer = null;
let syncInFlight = false;

const uiState = {
  activeScreen: "markets",
  currentGameId: "tigers-cowboys",
  currentTeam: "Tigers",
  selectedMarketId: "",
  expandedMarketId: "",
  selectedSide: "OVER",
  stakeDrafts: {},
  searchTerm: "",
  adminOpen: false,
  portfolioFilter: "ALL",
  portfolioSort: "MOST_RECENT",
  pendingTradeMarketId: "",
  leaderboardSort: "BALANCE",
  quickTakeMarketIds: [],
  quickTakePendingMarketId: "",
  quickTakePendingSide: ""
};

const elements = {
  authGate: document.getElementById("auth-gate"),
  authForm: document.getElementById("auth-form"),
  authUsername: document.getElementById("auth-username"),
  authFeedback: document.getElementById("auth-feedback"),
  appFrame: document.querySelector(".mobile-frame"),
  headerBalance: document.getElementById("header-balance"),
  navButtons: [...document.querySelectorAll(".nav-button")],
  screens: [...document.querySelectorAll(".screen")],
  searchInput: document.getElementById("search-input"),
  searchResults: document.getElementById("search-results"),
  marketsScreenScroll: document.getElementById("markets-screen-scroll"),
  featuredRail: document.getElementById("featured-rail"),
  moversRail: document.getElementById("movers-rail"),
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
  botConfigFeedback: document.getElementById("bot-config-feedback"),
  botSummary: document.getElementById("bot-summary"),
  runBotTick: document.getElementById("run-bot-tick"),
  runBotBurst: document.getElementById("run-bot-burst"),
  botRunFeedback: document.getElementById("bot-run-feedback"),
  botLog: document.getElementById("bot-log"),
  adminMarketList: document.getElementById("admin-market-list"),
  positionsBody: document.getElementById("positions-body"),
  resetDemo: document.getElementById("reset-demo"),
  toast: document.getElementById("toast")
};

init();

async function init() {
  bindEvents();
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

  elements.openAdminButton.addEventListener("click", () => {
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
  elements.botConfigForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveBotConfig();
  });
  elements.runBotTick?.addEventListener("click", async () => {
    await runBotSimulationTicks(1);
  });
  elements.runBotBurst?.addEventListener("click", async () => {
    await runBotSimulationTicks(10);
  });
  elements.resetDemo.addEventListener("click", async () => {
    await api("/api/admin/reset", {});
    await syncSession();
    uiState.expandedMarketId = "";
    syncSelectedMarket();
    renderAll();
  });

  bindSwipeNavigation();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    refreshSharedState();
  });
}

function bindSwipeNavigation() {
  return;
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
  elements.authFeedback.textContent = "Entering Mercatus...";
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
  renderSearchResults();
  renderSelectedMarket();
  renderDiscovery();
  renderMarketsList();
  renderPortfolio();
  renderQuickTake();
  renderLeaderboard();
  renderProfileSummary();
  renderAdminShell();
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
    row.querySelector(".projection-average").textContent = "";
    row.querySelector(".comparison-fill").style.width = `${comparisonWidth}%`;
    row.addEventListener("click", () => {
      uiState.currentGameId = market.gameId;
      uiState.currentTeam = market.team;
      uiState.selectedMarketId = market.id;
      uiState.expandedMarketId = expandable && uiState.expandedMarketId !== market.id ? market.id : "";
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

function renderDiscovery() {
  const gameMarkets = getGameMarkets(uiState.currentGameId);
  const topProjections = gameMarkets.slice().sort((a, b) => b.currentLine - a.currentLine).slice(0, 3);
  const biggestMovers = gameMarkets.slice().sort((a, b) => Math.abs(getMovementValue(b)) - Math.abs(getMovementValue(a))).slice(0, 3);
  elements.featuredRail.innerHTML = topProjections.map((market) => discoveryCard(market, "Projection")).join("");
  elements.moversRail.innerHTML = biggestMovers.map((market) => discoveryCard(market, "Move")).join("");
  [...elements.featuredRail.querySelectorAll(".discovery-card"), ...elements.moversRail.querySelectorAll(".discovery-card")].forEach((card) =>
    card.addEventListener("click", () => {
      const market = findMarket(card.dataset.marketId);
      if (!market) return;
      uiState.activeScreen = "markets";
      uiState.currentGameId = market.gameId;
      uiState.currentTeam = market.team;
      uiState.selectedMarketId = market.id;
      uiState.expandedMarketId = market.id;
      renderAll();
      scrollExpandedMarketIntoView(market.id);
    })
  );
}

function discoveryCard(market, mode) {
  const movement = getMovementText(market);
  if (mode === "Projection") {
    return `<button class="discovery-card" type="button" data-market-id="${market.id}"><span class="discovery-kicker">Top projection</span><strong class="discovery-title">${market.playerName}</strong><span class="discovery-value">${market.currentLine.toFixed(1)}</span><span class="discovery-meta">${market.position} | ${market.team}</span></button>`;
  }
  return `<button class="discovery-card" type="button" data-market-id="${market.id}"><span class="discovery-kicker">Biggest mover</span><strong class="discovery-title">${market.playerName}</strong><span class="discovery-value">${market.currentLine.toFixed(1)}</span><span class="discovery-meta ${movement.className}">${movement.arrow} ${movement.label}</span><span class="discovery-submeta">Avg ${market.seasonAverage.toFixed(1)}</span></button>`;
}

function marketDetailMarkup(market) {
  const status = getMarketStatus(market);
  const movement = getMovementText(market);
  const nextLine = calculateNextLine(market, uiState.selectedSide, 10);
  const stakeDraft = uiState.stakeDrafts[market.id] ?? 10;
  const isPending = uiState.pendingTradeMarketId === market.id;
  const currentPair = linePairForMarket(market);
  return `<div class="trade-ticket"><div class="hero-head trade-ticket-head"><div><div class="hero-player">${market.playerName}</div><div class="hero-meta">${market.team} | ${market.position}</div></div><span class="status-chip ${status.className}">${status.label}</span></div><div class="hero-price trade-ticket-price"><div class="hero-price-value">${market.currentLine.toFixed(1)}</div><div class="hero-delta ${movement.className}">${movement.arrow} ${movement.label}</div></div><div class="hero-comparison trade-spread-inline"><div class="trade-spread-grid"><div class="trade-spread-row"><span class="trade-label">Spread</span><strong>Under ${currentPair.underLine.toFixed(1)} <span class="trade-divider">|</span> Over ${currentPair.overLine.toFixed(1)}</strong></div><div class="trade-spread-row"><span class="trade-label">Next midpoint</span><strong>${nextLine.toFixed(1)}</strong></div></div></div><form id="trade-form" class="trade-form-grid trade-ticket-form ${isPending ? "is-pending" : ""}"><div class="trade-actions"><button type="button" class="trade-button trade-over ${uiState.selectedSide === "OVER" ? "active" : ""}" data-side="OVER" ${isPending ? "disabled" : ""}><span class="trade-button-label">Over</span><span class="trade-button-price">${currentPair.overLine.toFixed(1)}</span></button><button type="button" class="trade-button trade-under ${uiState.selectedSide === "UNDER" ? "active" : ""}" data-side="UNDER" ${isPending ? "disabled" : ""}><span class="trade-button-label">Under</span><span class="trade-button-price">${currentPair.underLine.toFixed(1)}</span></button></div><div class="stake-section"><div class="stake-row compact-stake-row"><label><span class="trade-label">Stake</span><input id="stake-input" name="stake" type="number" min="1" step="1" value="${stakeDraft}" required ${isPending ? "disabled" : ""}></label><div class="stake-preview"><span class="trade-label">Return</span><strong id="stake-return">${formatStake(stakeDraft * 2)}</strong></div></div><div class="stake-module-head"><span class="trade-label">Quick add</span><div class="quick-stakes"><button type="button" class="quick-stake-button" data-stake-add="5" ${isPending ? "disabled" : ""}>+5</button><button type="button" class="quick-stake-button" data-stake-add="10" ${isPending ? "disabled" : ""}>+10</button><button type="button" class="quick-stake-button" data-stake-add="25" ${isPending ? "disabled" : ""}>+25</button><button type="button" class="quick-stake-button" data-stake-max="true" ${isPending ? "disabled" : ""}>MAX</button></div></div></div><div class="trade-note-row"><span class="trade-label">Order type</span><span class="trade-note-copy">Matches opposite user liquidity</span></div><button class="primary-button trade-confirm-button ${isPending ? "is-loading" : ""}" type="submit" ${isPending ? "disabled" : ""}>${isPending ? "Placing..." : "Confirm position"}</button><p id="trade-feedback" class="feedback" aria-live="polite">${isPending ? "Submitting trade..." : ""}</p></form></div>`;
}

function bindTradeSheetEvents(panel, marketId) {
  const tradeForm = panel.querySelector("#trade-form");
  const stakeInput = panel.querySelector("#stake-input");
  const stakeReturn = panel.querySelector("#stake-return");
  const market = findMarket(marketId);

  panel.querySelectorAll(".trade-button").forEach((button) =>
    button.addEventListener("click", () => {
      uiState.selectedSide = button.dataset.side;
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
  if (!Number.isFinite(stake) || stake <= 0) {
    feedback.textContent = "Enter a valid stake.";
    return;
  }
  uiState.pendingTradeMarketId = marketId;
  renderAll();
  try {
    const response = await executeTrade(marketId, stake, uiState.selectedSide);
    state = response.state;
    backendState = response.backend || backendState;
    const submittedTrade = response.trade;
    delete uiState.stakeDrafts[marketId];
    uiState.pendingTradeMarketId = "";
    renderAll();
    triggerBalanceFlash();
    const toastMessage = submittedTrade?.status === "MATCHED"
      ? `Matched ${formatStake(submittedTrade.matchedStake || stake)} on ${uiState.selectedSide}`
      : submittedTrade?.status === "PARTIALLY_MATCHED"
        ? `Matched ${formatStake(submittedTrade.matchedStake || 0)} and left ${formatStake(submittedTrade.unmatchedStake || 0)} pending`
        : `Order pending for ${formatStake(submittedTrade?.unmatchedStake || stake)} on ${uiState.selectedSide}`;
    showToast("Position submitted", toastMessage);
    refreshSharedState();
  } catch (error) {
    uiState.pendingTradeMarketId = "";
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

function renderPortfolio() {
  const portfolio = getPortfolioData();
  const openTrades = portfolio.openPositions;
  const settledTrades = portfolio.settledPositions;
  const realized = portfolio.realized;
  const cash = portfolio.balance;
  const winRate = portfolio.winRate;
  const positions = sortPortfolioPositions(filterPortfolioPositions(buildPortfolioItems(openTrades, settledTrades)));
  elements.portfolioBalancePill.innerHTML = `<span>Wallet</span><strong>${formatStake(cash)}</strong>`;
  elements.portfolioSummary.innerHTML = [
    portfolioMetricCard("Balance", formatStake(cash)),
    portfolioMetricCard("Open positions", String(openTrades.length)),
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
      const timeLabel = trade.result ? `Final ${trade.result.finalScore.toFixed(1)} · ${formatTimestamp(trade.timestamp)}` : `Updated ${formatTimestamp(trade.timestamp)}`;
      applyStatusChip(card.querySelector(".status-chip"), status);
      card.querySelector(".position-side-badge").textContent = trade.side;
      card.querySelector(".position-side-badge").className = `position-side-badge ${trade.side === "OVER" ? "side-over" : "side-under"}`;
      card.querySelector(".position-title").textContent = market?.playerName ?? "Unknown player";
      card.querySelector(".position-meta").textContent = `${market?.position ?? "Market"} · Line ${trade.entryLine.toFixed(1)} · Stake ${formatStake(trade.stake)}`;
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
    const timeLabel = trade.result ? `Final ${trade.result.finalScore.toFixed(1)} | ${formatTimestamp(trade.timestamp)}` : `Updated ${formatTimestamp(trade.timestamp)}`;
    applyStatusChip(card.querySelector(".status-chip"), status);
    card.querySelector(".position-side-badge").textContent = trade.side;
    card.querySelector(".position-side-badge").className = `position-side-badge ${trade.side === "OVER" ? "side-over" : "side-under"}`;
    card.querySelector(".position-title").textContent = trade.playerName ?? market?.playerName ?? "Unknown player";
    const activeStake = trade.activeStake ?? trade.stake;
    const lineLabel = trade.side === "OVER" ? trade.entryOverLine ?? trade.entryLine : trade.entryUnderLine ?? trade.entryLine;
    const pendingLabel = trade.unmatchedStake ? ` | Pending ${formatStake(trade.unmatchedStake)}` : "";
    card.querySelector(".position-meta").textContent = `${trade.position ?? market?.position ?? "Market"} | Line ${Number(lineLabel).toFixed(1)} | Stake ${formatStake(activeStake)}${pendingLabel}`;
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
  const scores = quickTakeRecentScores(current);
  const isPending = uiState.quickTakePendingMarketId === current.id;
  const teamColors = TEAM_COLORS[current.team] ?? TEAM_COLORS[normalizeTeamName(current.team)] ?? { primary: "#101722", secondary: "#68d9ff" };
  const nextColors = next ? TEAM_COLORS[next.team] ?? TEAM_COLORS[normalizeTeamName(next.team)] ?? { primary: "#101722", secondary: "#68d9ff" } : null;
  elements.quickTakeDeck.innerHTML = `${next ? `<article class="quick-take-card is-back" style="--quick-primary-soft:${hexToRgba(nextColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(nextColors.secondary, 0.18)};"><div class="quick-take-backdrop"></div><div class="quick-take-mini"><span class="eyebrow">Up next</span><strong>${next.playerName}</strong><span>${next.team} | ${next.position}</span></div></article>` : ""}<article class="quick-take-card is-front" data-market-id="${current.id}" style="--quick-primary-soft:${hexToRgba(teamColors.primary, 0.24)};--quick-secondary-soft:${hexToRgba(teamColors.secondary, 0.18)};"><div class="quick-take-backdrop"></div><div class="quick-take-topline"><span class="eyebrow">Quick Take</span><span class="quick-take-counter">${queue.length} left</span></div><div class="quick-take-header"><div><h3>${current.playerName}</h3><p>${current.team} | ${current.position}</p></div><span class="status-chip status-open">Open</span></div><div class="quick-take-line">${current.currentLine.toFixed(1)}</div><div class="quick-take-move ${movement.className}">${movement.arrow} ${movement.label}</div><div class="quick-take-spread"><span><strong>Under</strong> ${currentPair.underLine.toFixed(1)}</span><span><strong>Over</strong> ${currentPair.overLine.toFixed(1)}</span><span><strong>Stake</strong> $1</span></div><div class="quick-take-stats"><span class="trade-label">Recent</span><div class="quick-take-score-row">${scores.map((score) => `<span class="quick-take-score-pill">${score}</span>`).join("")}</div><div class="quick-take-statline"><span>Avg ${current.seasonAverage.toFixed(1)}</span><span>vs ${opponentForMarket(current)}</span></div></div><div class="quick-take-actions"><button class="quick-take-action quick-take-under" type="button" data-quick-side="UNDER" ${isPending ? "disabled" : ""}>${isPending && uiState.quickTakePendingSide === "UNDER" ? "Submitting..." : `Under ${currentPair.underLine.toFixed(1)}`}</button><button class="quick-take-action quick-take-over" type="button" data-quick-side="OVER" ${isPending ? "disabled" : ""}>${isPending && uiState.quickTakePendingSide === "OVER" ? "Submitting..." : `Over ${currentPair.overLine.toFixed(1)}`}</button></div></article>`;
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
  renderQuickTake();
  try {
    const response = await executeTrade(marketId, 1, side);
    state = response.state;
    backendState = response.backend || backendState;
    triggerBalanceFlash();
    const submittedTrade = response.trade;
    const liveCard = elements.quickTakeDeck.querySelector(`.quick-take-card.is-front[data-market-id="${marketId}"]`) || card;
    if (liveCard) {
      liveCard.classList.add(side === "OVER" ? "is-exit-over" : "is-exit-under");
      await wait(240);
    }
    advanceQuickTakeQueue(marketId);
    uiState.quickTakePendingMarketId = "";
    uiState.quickTakePendingSide = "";
    renderAll();
    const toastMessage = submittedTrade?.status === "MATCHED"
      ? `Matched $1 on ${side}`
      : submittedTrade?.status === "PARTIALLY_MATCHED"
        ? `Matched ${formatStake(submittedTrade.matchedStake || 0)} and left ${formatStake(submittedTrade.unmatchedStake || 0)} pending`
        : `Order pending for ${formatStake(submittedTrade?.unmatchedStake || 1)} on ${side}`;
    showToast("Quick Take submitted", toastMessage);
    refreshSharedState();
  } catch (error) {
    uiState.quickTakePendingMarketId = "";
    uiState.quickTakePendingSide = "";
    renderQuickTake();
    showToast("Quick Take failed", error.message);
  }
}

function renderProfileSummary() {
  const userName = currentUserName();
  const bankroll = getDisplayedCash(userName);
  const trades = getUserTrades(userName);
  elements.profileSummary.innerHTML = [
    summaryStat("Starting balance", formatStake(STARTING_BANKROLL)),
    summaryStat("Current balance", formatStake(bankroll), bankroll >= STARTING_BANKROLL ? 1 : 0),
    summaryStat("Total trades", String(trades.length))
  ].join("");
}

function renderAdminShell() {
  elements.adminShell.classList.toggle("is-open", uiState.adminOpen);
  elements.adminShell.setAttribute("aria-hidden", String(!uiState.adminOpen));
}

function renderAdminMarkets() {
  elements.adminMarketList.innerHTML = state.markets
    .map((market) => {
      const movement = getMovementText(market);
      const status = getMarketStatus(market);
      return `<article class="admin-market-card"><p class="eyebrow">${gameTitleFor(market.gameId)} | ${market.team}</p><h3>${market.playerName}</h3><div class="position-grid">${positionMetric("Open", market.initialLine.toFixed(1))}${positionMetric("Current", market.currentLine.toFixed(1))}${positionMetric("Move", movement.label, movement.value)}${positionMetric("Status", status.label)}</div></article>`;
    })
    .join("");
}

function renderBotSimulation() {
  if (!elements.botSummary || !state.botSimulation) return;
  const config = state.botSimulation.config || {};
  const logs = config.logs || [];
  const botCount = (state.botSimulation.bots || []).length;
  elements.botSeasonWeight.value = String(config.globalWeights?.season ?? 1);
  elements.botFormWeight.value = String(config.globalWeights?.form ?? 1);
  elements.botVenueWeight.value = String(config.globalWeights?.venue ?? 1);
  elements.botOpponentWeight.value = String(config.globalWeights?.opponent ?? 1);
  elements.botMatchupWeight.value = String(config.globalWeights?.matchup ?? 1);
  elements.botNoiseWeight.value = String(config.globalWeights?.noise ?? 1);
  elements.botActivityWeight.value = String(config.globalWeights?.activity ?? 1);
  elements.botThresholdWeight.value = String(config.globalWeights?.threshold ?? 1);
  elements.botSummary.innerHTML = `${positionMetric("Bots", String(botCount))}${positionMetric("Tick", String(config.tick ?? 0))}${positionMetric("Open markets", String(state.markets.filter((market) => !market.settlement && !market.manuallyLocked).length))}${positionMetric("Recent events", String(logs.length))}`;
  elements.botLog.innerHTML = logs.length
    ? logs
        .slice(0, 12)
        .map(
          (log) =>
            `<article class="bot-log-card"><div class="bot-log-head"><strong>${log.botName}</strong><span>Tick ${log.tick}</span></div><p>${log.playerName} · ${log.side} · Edge ${Number(log.edge).toFixed(1)}</p><span>${log.reason}</span></article>`
        )
        .join("")
    : `<div class="section-meta">No bot events yet. Run a tick to generate liquidity and decision logs.</div>`;
}

function renderAdminTable() {
  const rows = state.markets.flatMap((market) =>
    market.trades
      .slice()
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .map((trade) => {
        const profit = trade.result ? trade.result.profit : null;
        return `<tr><td>${trade.userName}</td><td>${market.playerName}</td><td>${trade.side}</td><td>${formatStake(trade.stake)}</td><td>${trade.entryLine.toFixed(1)}</td><td>${market.currentLine.toFixed(1)}</td><td>${trade.result ? trade.result.outcome : "Open"}</td><td>${trade.result ? trade.result.finalScore.toFixed(1) : "-"}</td><td class="${profit > 0 ? "positive" : profit < 0 ? "negative" : ""}">${trade.result ? formatSignedStake(profit) : "Pending"}</td></tr>`;
      })
  );
  elements.positionsBody.innerHTML = rows.join("") || `<tr><td colspan="9">No trades yet.</td></tr>`;
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
    const response = await api("/api/admin/settle", {
      marketId: elements.settlementMarket.value,
      finalScore: Number(elements.finalScoreInput.value)
    });
    state = response.state;
    renderAll();
    elements.finalScoreInput.value = "";
    elements.settlementFeedback.textContent = `${findMarket(elements.settlementMarket.value)?.playerName ?? "Market"} settled.`;
    refreshSharedState();
  } catch (error) {
    elements.settlementFeedback.textContent = error.message;
  }
}

async function saveBotConfig() {
  try {
    const response = await api("/api/admin/bots/config", {
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

async function runBotSimulationTicks(ticks) {
  try {
    const response = await api("/api/admin/bots/run", { ticks });
    state = response.state;
    renderAll();
    triggerBalanceFlash();
    elements.botRunFeedback.textContent = `Ran ${ticks} bot tick${ticks === 1 ? "" : "s"}.`;
    const events = response.events || [];
    if (events.length) {
      showToast("Bot simulation", `${events.length} Quick Take orders evaluated.`);
    }
  } catch (error) {
    elements.botRunFeedback.textContent = error.message;
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
  const remaining = uiState.quickTakeMarketIds.filter((marketId) => openIdSet.has(marketId));
  const unseen = openMarketIds.filter((marketId) => !remaining.includes(marketId));
  const nextQueue = [...remaining, ...shuffleArray(unseen)];
  if (!nextQueue.length) {
    uiState.quickTakeMarketIds = [];
    return;
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
  uiState.quickTakeMarketIds = uiState.quickTakeMarketIds.filter((id) => id !== marketId);
  if (!uiState.quickTakeMarketIds.length) {
    uiState.quickTakeMarketIds = shuffleArray(state.markets.filter(isMarketOpen).map((market) => market.id));
  }
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

function filterMarkets(term) {
  if (!term) return state.markets;
  return state.markets.filter((market) => `${market.playerName} ${market.team} ${market.position}`.toLowerCase().includes(term));
}

function calculateCurrentLine(market) {
  const imbalance = market.totalOverStake - market.totalUnderStake;
  const steps = Math.trunc(imbalance / PRESSURE_STEP) + (market.manualAdjustmentSteps ?? 0);
  return normalizeProjectionLine(market.initialLine + steps * LINE_STEP);
}

function calculateNextLine(market, side, stake) {
  return calculateCurrentLine({
    ...market,
    totalOverStake: market.totalOverStake + (side === "OVER" ? stake : 0),
    totalUnderStake: market.totalUnderStake + (side === "UNDER" ? stake : 0)
  });
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
    if (trade.status === "PARTIALLY_MATCHED") return { label: "Partial", className: "status-open" };
    if (trade.status === "PENDING") return { label: "Pending", className: "status-locked" };
    if (trade.status === "MATCHED") return { label: "Matched", className: "status-open" };
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

function opponentForMarket(market) {
  const game = roundGames.find((roundGame) => roundGame.id === market.gameId);
  if (!game) return "Opponent";
  return game.homeTeam === market.team ? game.awayTeam : game.homeTeam;
}

function formatStake(value) {
  return `$${Math.abs(value).toFixed(0)}`;
}

function formatSignedStake(value) {
  if (value === 0) return "$0";
  return `${value > 0 ? "+" : "-"}$${Math.abs(value).toFixed(0)}`;
}

function formatLine(value) {
  return `${value.toFixed(1)} pts`;
}

function formatTimestamp(timestamp) {
  return new Date(timestamp).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
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
    showToast("Pending order cancelled", "Any unmatched stake has been returned to your wallet.");
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
