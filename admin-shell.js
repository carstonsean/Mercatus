(function () {
  const shell = document.getElementById("admin-shell");
  if (!shell) return;

  const BOT_STALL_THRESHOLD_MIN = 120;
  const HIGH_EXPOSURE_THRESHOLD = 500;
  const INBOX_OVERDUE_HOURS = 48;

  const RANGE_TO_API = {
    "1h": "today", // TODO Phase 2: add ?window=1h param to analytics endpoints
    "12h": "today", // TODO Phase 2: add ?window=12h param to analytics endpoints
    "24h": "today", // TODO Phase 2: add ?window=24h param to analytics endpoints
    "48h": "7d" // TODO Phase 2: add ?window=48h param to analytics endpoints
  };

  const AdminShell = {
    mounted: false,
    root: null,
    legacyRoot: null,
    closeButton: null,
    pollIntervals: {
      alerts: 60000,
      cockpit: 30000,
      botsActive: 15000,
      botsIdle: 60000,
      markets: 30000,
      postSettleVerify: 5000
    },
    timers: {},
    timestamps: {},
    refreshing: {},
    adminState: {
      currentPanel: "cockpit",
      round: {
        activeRoundId: null,
        marketsInRound: 0,
        prevRoundId: null,
        prevRoundSettled: false
      },
      bots: {
        activeCount: 0,
        lastRunTimestamp: null,
        lastRunMinutesAgo: null,
        tradesToday: 0,
        botTradeSharePct: 0,
        coverageByMarket: [],
        stalling: false,
        logs: [],
        leaderboard: []
      },
      settlement: {
        stage: "load",
        targetRoundId: null,
        importedScores: [],
        diagnostics: null,
        preview: null,
        confirmInput: "",
        undoAvailable: false,
        undoWindowExpiresAt: null,
        result: null,
        parseError: "",
        showLegacySingleSettle: false
      },
      markets: {
        matches: [],
        expandedMatchId: "",
        expandedPlayerId: "",
        overrideOpenForPlayerId: "",
        overrideReason: "",
        overrideLine: "",
        activeFilter: "all",
        roundFilter: "active",
        tradeLedgerFilters: {
          type: "all",
          player: "",
          limit: 50
        },
        tradeLedgerRows: [],
        tradeLedgerLoadedAt: null
      },
      analytics: {
        onlineNow: null,
        liveWindowMinutes: null,
        liveSource: "",
        liveLastSuccessAt: null,
        unmatchedTradesNow: 0,
        activeTradersToday: 0,
        historicalFilter: "24h",
        historical: null,
        overview: null,
        trends: null
      },
      alerts: [],
      vitals: {
        matchedVolume: 0,
        unresolvedUnmatched: 0,
        botTradeSharePct: 0,
        openMarketsCount: 0,
        tradableNowCount: 0,
        lockedUnsettledCount: 0,
        settledCount: 0,
        reconciliationOk: true
      },
      growth: {
        affiliates: [],
        referrals: [],
        contacts: []
      },
      ui: {
        showRoundConfirm: false,
        pendingRoundId: null,
        dismissalKeyRoundId: null,
        dismissals: {},
        expandedBotLogs: false,
        expandedBotLeaderboard: false,
        undoBannerDismissed: false,
        lastCheckedAt: null
      }
    },

    async init() {
      if (this.mounted) return;
      this.buildShell();
      this.bindShellEvents();
      this.observeOpenClose();
      this.mounted = true;
      await this.refreshAll(true);
      this.render();
    },

    buildShell() {
      const children = Array.from(shell.children);
      this.closeButton = shell.querySelector("#close-admin-button");

      const legacyRoot = document.createElement("div");
      legacyRoot.className = "cq-admin-legacy";
      children.forEach((node) => legacyRoot.appendChild(node));
      shell.appendChild(legacyRoot);
      this.legacyRoot = legacyRoot;

      const root = document.createElement("div");
      root.className = "cq-admin-root";
      root.innerHTML = this.layoutMarkup();
      shell.appendChild(root);
      this.root = root;
    },

    layoutMarkup() {
      return `
        <div class="cq-admin-frame">
          <nav class="cq-admin-rail" aria-label="Admin navigation">
            ${this.railButton("cockpit", "⚡", "Cockpit")}
            ${this.railButton("settlement", "🏆", "Settlement")}
            ${this.railButton("bots", "🤖", "Bots")}
            ${this.railButton("markets", "🏪", "Markets")}
            ${this.railButton("growth", "🤝", "Growth")}
          </nav>
          <div class="cq-admin-main">
            <header class="cq-admin-topbar">
              <div class="cq-admin-topbar-main">
                <h3 id="cq-admin-title">Cockpit</h3>
                <span id="cq-admin-round-badge" class="cq-badge">Round — · Active</span>
                <span id="cq-admin-exception-badge" class="cq-badge cq-badge-warn is-hidden"></span>
              </div>
              <button id="cq-admin-close" class="ghost-button" type="button">Close</button>
            </header>
            <div id="cq-admin-undo-banner" class="cq-undo-banner is-hidden"></div>
            <section id="cq-admin-panel" class="cq-admin-panel"></section>
          </div>
        </div>
      `;
    },

    railButton(panel, icon, label) {
      return `<button class="cq-rail-btn" type="button" data-cq-panel="${panel}" aria-label="${label}" title="${label}"><span aria-hidden="true">${icon}</span></button>`;
    },

    bindShellEvents() {
      this.root.addEventListener("click", (event) => {
        const panelButton = event.target.closest("[data-cq-panel]");
        if (panelButton) {
          this.adminState.currentPanel = panelButton.dataset.cqPanel;
          this.startPanelPolling();
          this.render();
          return;
        }

        if (event.target.closest("#cq-admin-close")) {
          this.closeButton?.click();
          return;
        }

        const dismiss = event.target.closest("[data-alert-dismiss]");
        if (dismiss) {
          this.dismissAlert(dismiss.dataset.alertDismiss, dismiss.dataset.alertRound || "");
          return;
        }

        const alertCta = event.target.closest("[data-alert-cta]");
        if (alertCta) {
          this.adminState.currentPanel = alertCta.dataset.alertCta;
          this.render();
          return;
        }

        const runBots = event.target.closest("[data-cq-run-bots]");
        if (runBots) {
          void this.runBots();
          return;
        }

        const createBot = event.target.closest("[data-cq-create-bot]");
        if (createBot) {
          void this.createBot();
          return;
        }

        const purgeBots = event.target.closest("[data-cq-purge-bots]");
        if (purgeBots) {
          this.renderTypedConfirm(purgeBots.closest(".cq-confirm-host"), "PURGE BOTS", async () => {
            await this.apiPost("/api/admin/bots/purge", { includeActiveBots: false });
            await this.refreshAll(true);
            this.render();
          });
          return;
        }

        const setRound = event.target.closest("[data-cq-round-set]");
        if (setRound) {
          const selected = this.root.querySelector("#cq-round-select");
          const nextRound = Number(selected?.value || 0);
          if (!Number.isFinite(nextRound)) return;
          this.adminState.ui.showRoundConfirm = true;
          this.adminState.ui.pendingRoundId = nextRound;
          this.render();
          return;
        }

        if (event.target.closest("[data-cq-round-confirm]")) {
          void this.confirmRoundSwitch();
          return;
        }

        if (event.target.closest("[data-cq-round-cancel]")) {
          this.adminState.ui.showRoundConfirm = false;
          this.adminState.ui.pendingRoundId = null;
          this.render();
          return;
        }

        if (event.target.closest("[data-cq-settlement-diagnostics]")) {
          this.runSettlementDiagnostics();
          return;
        }
        if (event.target.closest("[data-cq-use-last-import]")) {
          this.loadLastImportedScores();
          return;
        }

        if (event.target.closest("[data-cq-settlement-preview]")) {
          this.runSettlementPreview();
          return;
        }

        if (event.target.closest("[data-cq-settlement-back]")) {
          const prev = event.target.closest("[data-cq-settlement-back]").dataset.cqSettlementBack;
          this.adminState.settlement.stage = prev || "load";
          this.render();
          return;
        }

        if (event.target.closest("[data-cq-settlement-confirm-step]")) {
          this.adminState.settlement.stage = "confirm";
          this.adminState.settlement.confirmInput = "";
          this.render();
          return;
        }

        if (event.target.closest("[data-cq-settlement-execute]")) {
          void this.executeSettlement();
          return;
        }

        if (event.target.closest("[data-cq-undo-open]")) {
          const host = this.root.querySelector("#cq-undo-confirm-host");
          this.renderTypedConfirm(host, `UNDO ${this.adminState.round.activeRoundId}`, async () => {
            await this.apiPost("/api/admin/undo-settlement", {});
            await this.refreshAll(true);
            this.render();
          });
          return;
        }

        if (event.target.closest("[data-cq-toggle-legacy-settle]")) {
          this.adminState.settlement.showLegacySingleSettle = !this.adminState.settlement.showLegacySingleSettle;
          this.render();
          return;
        }

        const expandMatch = event.target.closest("[data-cq-match-toggle]");
        if (expandMatch) {
          const matchId = expandMatch.dataset.cqMatchToggle;
          this.adminState.markets.expandedMatchId = this.adminState.markets.expandedMatchId === matchId ? "" : matchId;
          this.adminState.markets.expandedPlayerId = "";
          this.adminState.markets.overrideOpenForPlayerId = "";
          this.render();
          return;
        }

        const matchLockToggle = event.target.closest("[data-cq-match-lock-toggle]");
        if (matchLockToggle) {
          const matchId = String(matchLockToggle.dataset.cqMatchLockToggle || "");
          const action = String(matchLockToggle.dataset.cqMatchLockAction || "").toUpperCase();
          if (!matchId || (action !== "LOCK" && action !== "UNLOCK")) {
            return;
          }
          const host = [...this.root.querySelectorAll("[data-cq-match-confirm-host]")]
            .find((entry) => entry.dataset.cqMatchConfirmHost === matchId);
          if (!host) {
            return;
          }
          this.renderTypedReasonConfirm(host, {
            requiredString: `${action} ${matchId}`,
            requireReason: action === "UNLOCK",
            onConfirm: async (reason) => {
              await this.apiPost("/api/admin/matches/lock-state", {
                gameId: matchId,
                action,
                reason
              });
              await this.refreshAll(true);
              this.render();
            }
          });
          return;
        }

        const openPlayer = event.target.closest("[data-cq-player-toggle]");
        if (openPlayer) {
          const playerId = openPlayer.dataset.cqPlayerToggle;
          this.adminState.markets.expandedPlayerId = this.adminState.markets.expandedPlayerId === playerId ? "" : playerId;
          this.adminState.markets.overrideOpenForPlayerId = "";
          this.render();
          return;
        }

        const overrideToggle = event.target.closest("[data-cq-override-toggle]");
        if (overrideToggle) {
          const playerId = overrideToggle.dataset.cqOverrideToggle;
          this.adminState.markets.overrideOpenForPlayerId = this.adminState.markets.overrideOpenForPlayerId === playerId ? "" : playerId;
          this.adminState.markets.overrideReason = "";
          this.adminState.markets.overrideLine = "";
          this.render();
          return;
        }

        const runBotsFromPlayer = event.target.closest("[data-cq-player-run-bots]");
        if (runBotsFromPlayer) {
          void this.runBots();
          return;
        }

        const submitOverride = event.target.closest("[data-cq-override-submit]");
        if (submitOverride) {
          void this.submitLineOverride(submitOverride.dataset.cqOverrideSubmit || "");
          return;
        }

        const filterButton = event.target.closest("[data-cq-market-filter]");
        if (filterButton) {
          this.adminState.markets.activeFilter = filterButton.dataset.cqMarketFilter;
          this.render();
          return;
        }

        const refreshLedger = event.target.closest("[data-cq-ledger-refresh]");
        if (refreshLedger) {
          void this.loadTradeLedger(true);
          return;
        }

        const openLedgerForPlayer = event.target.closest("[data-cq-open-ledger-player]");
        if (openLedgerForPlayer) {
          this.adminState.currentPanel = "markets";
          this.adminState.markets.tradeLedgerFilters.player = openLedgerForPlayer.dataset.cqOpenLedgerPlayer || "";
          this.loadTradeLedger(true).catch(() => {});
          this.render();
          return;
        }

        const botLogsToggle = event.target.closest("[data-cq-toggle-bot-logs]");
        if (botLogsToggle) {
          this.adminState.ui.expandedBotLogs = !this.adminState.ui.expandedBotLogs;
          this.render();
          return;
        }

        const botLeaderboardToggle = event.target.closest("[data-cq-toggle-bot-leaderboard]");
        if (botLeaderboardToggle) {
          this.adminState.ui.expandedBotLeaderboard = !this.adminState.ui.expandedBotLeaderboard;
          this.render();
          return;
        }

        const undoBannerDismiss = event.target.closest("[data-cq-undo-banner-dismiss]");
        if (undoBannerDismiss) {
          this.adminState.ui.undoBannerDismissed = true;
          this.render();
          return;
        }

        const undoBannerGo = event.target.closest("[data-cq-undo-banner-go]");
        if (undoBannerGo) {
          this.adminState.currentPanel = "settlement";
          this.render();
          return;
        }
      });

      this.root.addEventListener("input", (event) => {
        if (event.target.matches("#cq-settlement-confirm-input")) {
          this.adminState.settlement.confirmInput = event.target.value;
          this.render();
          return;
        }
        if (event.target.matches("[data-cq-override-reason]")) {
          this.adminState.markets.overrideReason = event.target.value;
          return;
        }
        if (event.target.matches("[data-cq-override-line]")) {
          this.adminState.markets.overrideLine = event.target.value;
          return;
        }
      });

      this.root.addEventListener("change", (event) => {
        if (event.target.matches("#cq-score-upload")) {
          const file = event.target.files?.[0];
          if (file) {
            void this.parseScoreCsv(file);
          }
          return;
        }

        if (event.target.matches("#cq-settlement-round-select")) {
          this.adminState.settlement.targetRoundId = Number(event.target.value || this.adminState.round.activeRoundId);
          this.render();
          return;
        }

        if (event.target.matches("#cq-market-round-filter")) {
          this.adminState.markets.roundFilter = event.target.value;
          void this.refreshAll(true);
          return;
        }

        if (event.target.matches("#cq-ledger-type-filter")) {
          this.adminState.markets.tradeLedgerFilters.type = event.target.value;
          void this.loadTradeLedger(true);
          return;
        }

        if (event.target.matches("#cq-ledger-player-filter")) {
          this.adminState.markets.tradeLedgerFilters.player = event.target.value;
          void this.loadTradeLedger(true);
          return;
        }

        if (event.target.matches("[data-cq-analytics-range]")) {
          this.adminState.analytics.historicalFilter = event.target.value;
          void this.refreshAnalytics(true);
          return;
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          this.adminState.markets.expandedPlayerId = "";
          this.adminState.markets.overrideOpenForPlayerId = "";
          this.render();
        }
      });
    },

    observeOpenClose() {
      const observer = new MutationObserver(() => {
        const isOpen = shell.classList.contains("is-open");
        if (isOpen) {
          this.startPanelPolling();
          this.render();
        } else {
          this.stopAllPolls();
        }
      });
      observer.observe(shell, { attributes: true, attributeFilter: ["class"] });
    },

    panelTitle(panel) {
      if (panel === "settlement") return "Settlement";
      if (panel === "bots") return "Bots";
      if (panel === "markets") return "Markets";
      if (panel === "growth") return "Growth";
      return "Cockpit";
    },

    async refreshAll(forceRender) {
      await Promise.allSettled([
        this.refreshCore(),
        this.refreshBots(),
        this.refreshAnalytics(false),
        this.refreshGrowth(false),
        this.loadTradeLedger(false)
      ]);
      this.computeAlerts();
      this.adminState.ui.lastCheckedAt = Date.now();
      if (forceRender) this.render();
    },

    async refreshCore() {
      const activeRound = this.call("activeRoundNumber") || this.call("currentRoundNumber") || 1;
      const markets = this.currentRoundMarkets();
      const prevRound = Number(activeRound) - 1;
      const prevMarkets = this.allMarkets().filter((market) => Number(this.call("marketRoundNumber", market) || 0) === prevRound);
      const prevRoundSettled = prevMarkets.length ? prevMarkets.every((market) => Boolean(market.settlement)) : false;

      this.adminState.round.activeRoundId = Number(activeRound) || 1;
      this.adminState.round.marketsInRound = markets.length;
      this.adminState.round.prevRoundId = prevRound > 0 ? prevRound : null;
      this.adminState.round.prevRoundSettled = prevRoundSettled;

      const openTrades = markets.flatMap((market) => (market.trades || [])).filter((trade) => !trade.result);
      const matchedVolume = markets.flatMap((market) => (market.trades || [])).reduce((sum, trade) => sum + (Number(trade.matchedStake) || 0), 0);
      const unresolvedUnmatched = openTrades.reduce((sum, trade) => sum + (Number(trade.unmatchedStake) || 0), 0);
      const tradableMarkets = markets.filter((market) => !market.settlement && !this.call("isMarketLocked", market));
      const lockedUnsettledMarkets = markets.filter((market) => !market.settlement && this.call("isMarketLocked", market));
      const settledMarkets = markets.filter((market) => Boolean(market.settlement));
      let reconciliationOk = (tradableMarkets.length + lockedUnsettledMarkets.length + settledMarkets.length) === markets.length;

      try {
        const summary = await this.apiGet("/api/admin/operations/summary");
        const counts = summary?.counts || {};
        const reconciliation = summary?.reconciliation || {};
        this.adminState.vitals.tradableNowCount = Number(counts.tradable_now) || 0;
        this.adminState.vitals.lockedUnsettledCount = Number(counts.locked_unsettled) || 0;
        this.adminState.vitals.settledCount = Number(counts.settled) || 0;
        this.adminState.vitals.openMarketsCount = Number(counts.tradable_now) || 0;
        reconciliationOk = Boolean(reconciliation.ok);
      } catch (_error) {
        this.adminState.vitals.tradableNowCount = tradableMarkets.length;
        this.adminState.vitals.lockedUnsettledCount = lockedUnsettledMarkets.length;
        this.adminState.vitals.settledCount = settledMarkets.length;
        this.adminState.vitals.openMarketsCount = tradableMarkets.length;
      }
      this.adminState.vitals.reconciliationOk = reconciliationOk;

      this.adminState.vitals.matchedVolume = matchedVolume;
      this.adminState.vitals.unresolvedUnmatched = unresolvedUnmatched;
      this.adminState.analytics.unmatchedTradesNow = openTrades.filter((trade) => (Number(trade.unmatchedStake) || 0) > 0).length;
      this.markUpdated("cockpit");
      this.markUpdated("markets");
    },

    async refreshBots() {
      this.markRefreshing("bots");
      try {
        const statusPayload = await this.apiGet("/api/admin/bots/status");
        const status = statusPayload?.botStatus || {};
        const now = Date.now();
        const lastRunAt = status.lastRunAt || status.lastExecutedAt || status.last_tick_at || null;
        const lastRunMs = lastRunAt ? (now - new Date(lastRunAt).getTime()) : null;
        const lastRunMins = Number.isFinite(lastRunMs) ? Math.max(0, Math.round(lastRunMs / 60000)) : null;

        const perf = this.call("getBotPerformanceSummary") || { bots: [], totalSettledTrades: 0 };
        const markets = this.currentRoundMarkets();
        const totalTrades = markets.flatMap((market) => market.trades || []).length;
        const botTrades = markets.flatMap((market) => market.trades || []).filter((trade) => this.isBotTrade(trade)).length;

        this.adminState.bots.activeCount = Number(status.activeBotCount) || Number(status.activeCount) || perf.bots?.length || 0;
        this.adminState.bots.lastRunTimestamp = lastRunAt;
        this.adminState.bots.lastRunMinutesAgo = lastRunMins;
        this.adminState.bots.tradesToday = Number(status.tradesToday) || botTrades;
        this.adminState.bots.botTradeSharePct = totalTrades ? Math.round((botTrades / totalTrades) * 100) : 0;
        this.adminState.bots.stalling = this.adminState.bots.lastRunMinutesAgo != null && this.adminState.bots.lastRunMinutesAgo > BOT_STALL_THRESHOLD_MIN;
        this.adminState.bots.logs = Array.isArray(status.logs) ? status.logs : [];
        this.adminState.bots.leaderboard = Array.isArray(perf.bots) ? perf.bots : [];

        const coverage = markets.map((market) => {
          const hasBot = (market.trades || []).some((trade) => this.isBotTrade(trade));
          return {
            playerId: market.id,
            name: market.playerName,
            hasBotActivity: hasBot
          };
        });
        this.adminState.bots.coverageByMarket = coverage;

        this.adminState.vitals.botTradeSharePct = this.adminState.bots.botTradeSharePct;
        this.markUpdated("bots");
      } finally {
        this.clearRefreshing("bots");
      }
    },

    async refreshAnalytics(forceRender) {
      this.markRefreshing("analytics");
      try {
        const range = RANGE_TO_API[this.adminState.analytics.historicalFilter] || "today";
        const [overview, trends, liveSessions] = await Promise.all([
          this.apiGet(`/api/admin/analytics/overview?range=${encodeURIComponent(range)}`),
          this.apiGet(`/api/admin/analytics/trends?range=${encodeURIComponent(range)}`),
          this.apiGet("/api/admin/live-sessions")
            .catch(() => this.apiGet("/api/live-sessions").catch(() => null))
        ]);
        this.adminState.analytics.overview = overview || null;
        this.adminState.analytics.trends = trends || null;
        this.adminState.analytics.onlineNow = Number.isFinite(Number(liveSessions?.online_now)) ? Number(liveSessions.online_now) : null;
        this.adminState.analytics.liveWindowMinutes = Number.isFinite(Number(liveSessions?.window_minutes)) ? Number(liveSessions.window_minutes) : null;
        this.adminState.analytics.liveSource = String(liveSessions?.source || "");
        if (this.adminState.analytics.onlineNow != null) {
          this.adminState.analytics.liveLastSuccessAt = String(liveSessions?.sampled_at || new Date().toISOString());
        }

        const activeUsersCard = overview?.cards?.active_users;
        this.adminState.analytics.activeTradersToday = Number(activeUsersCard?.value ?? activeUsersCard?.raw_value ?? 0) || 0;

        const dailySignups = Array.isArray(trends?.daily_signups) ? trends.daily_signups : [];
        const dailyActives = Array.isArray(trends?.daily_active_users) ? trends.daily_active_users : [];
        const tradesPlaced = Number(overview?.cards?.trades?.value ?? 0) || 0;

        this.adminState.analytics.historical = {
          tradesPlaced,
          uniqueTraders: dailyActives.reduce((sum, entry) => sum + (Number(entry.count) || 0), 0),
          matchedVolume: this.adminState.vitals.matchedVolume,
          signupCount: dailySignups.reduce((sum, entry) => sum + (Number(entry.count) || 0), 0)
        };

        this.markUpdated("analytics");
      } catch (error) {
        // no-op; keep stale values
      } finally {
        this.clearRefreshing("analytics");
      }
      if (forceRender) this.render();
    },

    async refreshGrowth(forceRender) {
      try {
        const [affiliates, contacts] = await Promise.all([
          this.apiGet("/api/admin/affiliates").catch(() => ({ affiliates: [], referrals: [] })),
          Promise.resolve(this.call("getContactMessages") || [])
        ]);
        this.adminState.growth.affiliates = Array.isArray(affiliates?.affiliates) ? affiliates.affiliates : [];
        this.adminState.growth.referrals = Array.isArray(affiliates?.referrals) ? affiliates.referrals : [];
        this.adminState.growth.contacts = Array.isArray(contacts) ? contacts : [];
      } finally {
        if (forceRender) this.render();
      }
    },

    async loadTradeLedger(forceRender) {
      const markets = this.currentRoundMarkets();
      const filters = this.adminState.markets.tradeLedgerFilters;
      let rows = markets.flatMap((market) => (market.trades || []).map((trade) => ({ market, trade })));

      if (filters.type === "matched") {
        rows = rows.filter(({ trade }) => (Number(trade.matchedStake) || 0) > 0);
      } else if (filters.type === "unmatched") {
        rows = rows.filter(({ trade }) => (Number(trade.unmatchedStake) || 0) > 0);
      }
      if (filters.player) {
        rows = rows.filter(({ market }) => market.id === filters.player);
      }
      rows = rows.sort((a, b) => new Date(b.trade.timestamp || 0) - new Date(a.trade.timestamp || 0));

      this.adminState.markets.tradeLedgerRows = rows.slice(0, Number(filters.limit) || 50);
      this.adminState.markets.tradeLedgerLoadedAt = Date.now();
      if (forceRender) this.render();
    },

    computeAlerts() {
      const alerts = [];
      const round = this.adminState.round.activeRoundId;
      const markets = this.currentRoundMarkets();
      const ended = this.activeRoundLikelyEnded();
      const allSettled = markets.length && markets.every((market) => Boolean(market.settlement));

      const imported = this.adminState.settlement.importedScores || [];
      const missingScoreNames = this.missingScoreNamesForRound(markets, imported);

      if (ended && !allSettled && imported.length === 0) {
        alerts.push({
          id: "SETTLEMENT_BLOCKED",
          severity: "critical",
          round,
          message: `Settlement blocked — no scores imported for Round ${round}`,
          subtitle: "Import scores to continue",
          panel: "settlement"
        });
      }

      if (allSettled && markets.some((market) => (market.trades || []).some((trade) => !trade.result))) {
        alerts.push({
          id: "POST_SETTLEMENT_ANOMALY",
          severity: "critical",
          round,
          message: `Post-settlement anomaly — unresolved open trades in Round ${round}`,
          subtitle: "Review settlement output",
          panel: "settlement"
        });
      }

      if (!this.adminState.vitals.reconciliationOk) {
        alerts.push({
          id: "ROUND_RECONCILIATION_FAILED",
          severity: "critical",
          round,
          message: `Round ${round} reconciliation failed`,
          subtitle: "Total in round does not equal tradable + locked-unsettled + settled",
          panel: "cockpit"
        });
      }

      if (!allSettled && imported.length > 0) {
        alerts.push({
          id: "SETTLEMENT_READY",
          severity: "warning",
          round,
          message: `Scores ready for Round ${round}`,
          subtitle: "Run diagnostics and preview",
          panel: "settlement"
        });
      }

      if (this.adminState.bots.stalling && this.adminState.bots.activeCount > 0) {
        alerts.push({
          id: "BOT_STALL",
          severity: "warning",
          round,
          message: `Bot stall — no recent activity (${this.minutesToAge(this.adminState.bots.lastRunMinutesAgo)})`,
          subtitle: "Run bots from cockpit",
          panel: "bots"
        });
      }

      if (
        this.adminState.vitals.unresolvedUnmatched > HIGH_EXPOSURE_THRESHOLD
        && (this.adminState.bots.lastRunMinutesAgo || Number.POSITIVE_INFINITY) < BOT_STALL_THRESHOLD_MIN
      ) {
        alerts.push({
          id: "HIGH_EXPOSURE",
          severity: "warning",
          round,
          message: `High unresolved exposure ${this.money(this.adminState.vitals.unresolvedUnmatched)} — bots unable to fill`,
          subtitle: "Review match/player exposure",
          panel: "markets"
        });
      }

      if (missingScoreNames.length) {
        alerts.push({
          id: "MISSING_SCORES",
          severity: "warning",
          round,
          message: `Partial import — ${missingScoreNames.length} players missing scores`,
          subtitle: `Will be voided: ${missingScoreNames.slice(0, 3).join(", ")}${missingScoreNames.length > 3 ? "…" : ""}`,
          panel: "settlement"
        });
      }

      if (this.adminState.settlement.undoAvailable) {
        alerts.push({
          id: "UNDO_AVAILABLE",
          severity: "info",
          round,
          message: `Round ${round} settlement can be undone`,
          subtitle: `${this.undoTimeRemainingLabel()} remaining`,
          panel: "settlement"
        });
      }

      const overdueMessages = (this.adminState.growth.contacts || []).filter((entry) => {
        const ts = new Date(entry.submittedAt || 0).getTime();
        return Number.isFinite(ts) && Date.now() - ts > (INBOX_OVERDUE_HOURS * 3600000);
      }).length;
      if (overdueMessages > 0) {
        alerts.push({
          id: "INBOX_UNREAD",
          severity: "info",
          round,
          message: `${overdueMessages} messages unread >48h`,
          subtitle: "Review in Growth",
          panel: "growth"
        });
      }

      const dismissals = this.loadDismissals();
      this.adminState.alerts = alerts
        .filter((alert) => !dismissals[this.dismissKey(alert.id, alert.round)])
        .sort((a, b) => this.severityRank(b.severity) - this.severityRank(a.severity));
    },

    severityRank(severity) {
      if (severity === "critical") return 3;
      if (severity === "warning") return 2;
      return 1;
    },

    loadDismissals() {
      const round = this.adminState.round.activeRoundId;
      if (this.adminState.ui.dismissalKeyRoundId !== round) {
        this.adminState.ui.dismissalKeyRoundId = round;
        this.adminState.ui.dismissals = {};
        Object.keys(sessionStorage).forEach((key) => {
          if (!key.startsWith("alert-dismissed-")) return;
          const parts = key.split("-");
          const keyRound = parts[parts.length - 1];
          if (String(keyRound) !== String(round)) {
            sessionStorage.removeItem(key);
          } else {
            this.adminState.ui.dismissals[key] = true;
          }
        });
      }
      return this.adminState.ui.dismissals;
    },

    dismissKey(type, roundId) {
      return `alert-dismissed-${type}-${roundId}`;
    },

    dismissAlert(type, roundId) {
      const key = this.dismissKey(type, roundId || this.adminState.round.activeRoundId);
      sessionStorage.setItem(key, "1");
      this.adminState.ui.dismissals[key] = true;
      this.computeAlerts();
      this.render();
    },

    startPanelPolling() {
      if (!shell.classList.contains("is-open")) return;
      this.stopAllPolls();

      this.startPoll("alerts", async () => {
        await this.refreshCore();
        await this.refreshBots();
        this.computeAlerts();
        this.render();
      }, this.pollIntervals.alerts);

      this.startPoll("cockpit", async () => {
        await Promise.allSettled([this.refreshCore(), this.refreshAnalytics(false)]);
        this.render();
      }, this.pollIntervals.cockpit);

      const botInterval = this.adminState.currentPanel === "bots" ? this.pollIntervals.botsActive : this.pollIntervals.botsIdle;
      this.startPoll("bots", async () => {
        await this.refreshBots();
        this.computeAlerts();
        this.render();
      }, botInterval);

      if (this.adminState.currentPanel === "markets") {
        this.startPoll("markets", async () => {
          await Promise.allSettled([this.refreshCore(), this.refreshBots(), this.loadTradeLedger(false)]);
          this.computeAlerts();
          this.render();
        }, this.pollIntervals.markets);
      }
    },

    startPoll(key, fn, intervalMs) {
      this.stopPoll(key);
      const run = async () => {
        if (!shell.classList.contains("is-open")) return;
        await fn();
      };
      this.timers[key] = window.setInterval(run, intervalMs);
    },

    stopPoll(key) {
      if (this.timers[key]) {
        window.clearInterval(this.timers[key]);
        delete this.timers[key];
      }
    },

    stopAllPolls() {
      Object.keys(this.timers).forEach((key) => this.stopPoll(key));
    },

    markRefreshing(key) {
      this.refreshing[key] = true;
    },

    clearRefreshing(key) {
      this.refreshing[key] = false;
    },

    markUpdated(key) {
      this.timestamps[key] = Date.now();
    },

    updatedAgo(key) {
      const ts = this.timestamps[key];
      if (!ts) return "Updated just now";
      const seconds = Math.max(0, Math.floor((Date.now() - ts) / 1000));
      if (this.refreshing[key]) return "Refreshing...";
      return `Updated ${seconds}s ago`;
    },

    render() {
      const panel = this.adminState.currentPanel;
      this.root.querySelectorAll(".cq-rail-btn").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.cqPanel === panel);
      });

      this.root.querySelector("#cq-admin-title").textContent = this.panelTitle(panel);
      this.root.querySelector("#cq-admin-round-badge").textContent = `Round ${this.adminState.round.activeRoundId || "—"} · Active`;

      const exceptionBadge = this.root.querySelector("#cq-admin-exception-badge");
      if (this.adminState.alerts.length) {
        exceptionBadge.classList.remove("is-hidden");
        exceptionBadge.textContent = `${this.adminState.alerts.length} exception${this.adminState.alerts.length === 1 ? "" : "s"}`;
      } else {
        exceptionBadge.classList.add("is-hidden");
      }

      this.renderUndoBanner();

      const panelHost = this.root.querySelector("#cq-admin-panel");
      if (panel === "settlement") panelHost.innerHTML = this.renderSettlement();
      else if (panel === "bots") panelHost.innerHTML = this.renderBots();
      else if (panel === "markets") panelHost.innerHTML = this.renderMarkets();
      else if (panel === "growth") panelHost.innerHTML = this.renderGrowth();
      else panelHost.innerHTML = this.renderCockpit();

      const legacy = this.legacyRoot;
      if (legacy) {
        const shouldShowLegacySettle = panel === "settlement" && this.adminState.settlement.showLegacySingleSettle;
        legacy.classList.toggle("is-visible", shouldShowLegacySettle);
      }
    },

    renderUndoBanner() {
      const banner = this.root.querySelector("#cq-admin-undo-banner");
      const show = this.adminState.settlement.undoAvailable
        && this.adminState.currentPanel !== "settlement"
        && !this.adminState.ui.undoBannerDismissed;
      banner.classList.toggle("is-hidden", !show);
      if (!show) {
        banner.innerHTML = "";
        return;
      }
      banner.innerHTML = `
        <span>Round ${this.adminState.round.activeRoundId} settlement undoable · ${this.undoTimeRemainingLabel()}</span>
        <div>
          <button class="secondary-button" type="button" data-cq-undo-banner-go>Go →</button>
          <button class="ghost-button" type="button" data-cq-undo-banner-dismiss>✕</button>
        </div>
      `;
    },

    renderCockpit() {
      const roundOptions = (this.call("getAvailableRoundOptions") || []).map((roundNumber) => {
        return `<option value="${roundNumber}" ${Number(roundNumber) === Number(this.adminState.round.activeRoundId) ? "selected" : ""}>Round ${roundNumber}</option>`;
      }).join("");

      const alerts = this.adminState.alerts;
      const unresolvedTone = this.adminState.vitals.unresolvedUnmatched > HIGH_EXPOSURE_THRESHOLD
        ? "dot-crit"
        : this.adminState.vitals.unresolvedUnmatched > 100
          ? "dot-warn"
          : "dot-ok";

      const cockpitAnalytics = this.adminState.analytics;
      const hist = cockpitAnalytics.historical || { tradesPlaced: 0, uniqueTraders: 0, matchedVolume: 0 };
      const onlineNowNumber = Number(cockpitAnalytics.onlineNow);
      const hasOnlineNow = cockpitAnalytics.onlineNow != null && Number.isFinite(onlineNowNumber);
      const onlineNowValue = hasOnlineNow ? String(onlineNowNumber) : "—";
      const onlineNowMeta = hasOnlineNow
        ? `Active in last ${cockpitAnalytics.liveWindowMinutes || 5}m`
        : "— unavailable";
      const onlineNowDiagnostics = cockpitAnalytics.liveSource
        ? `Source: ${cockpitAnalytics.liveSource} · Window: ${cockpitAnalytics.liveWindowMinutes || "?"}m · Last success: ${cockpitAnalytics.liveLastSuccessAt ? new Date(cockpitAnalytics.liveLastSuccessAt).toLocaleString() : "never"}`
        : "Source: — unavailable · Window: — · Last success: never";

      return `
        <section class="cq-card cq-round-card">
          <div class="cq-card-head"><h4>Round State</h4><span class="section-meta">${this.updatedAgo("cockpit")}</span></div>
          <div class="cq-round-main">
            <div><span class="panel-label">Active round</span><strong class="cq-big">${this.adminState.round.activeRoundId || "—"}</strong></div>
            <div><span class="panel-label">Markets in round</span><strong class="cq-big">${this.adminState.round.marketsInRound}</strong></div>
            <div><span class="panel-label">Previous round</span><strong class="cq-big">${this.adminState.round.prevRoundId || "—"} ${this.adminState.round.prevRoundSettled ? "✓" : "•"}</strong></div>
          </div>
          <div class="cq-inline-row">
            <select id="cq-round-select">${roundOptions}</select>
            <button class="secondary-button" type="button" data-cq-round-set>Set</button>
            ${this.adminState.ui.showRoundConfirm
              ? `<span class="cq-inline-confirm">Switch to Round ${this.adminState.ui.pendingRoundId}? <button class="secondary-button" type="button" data-cq-round-confirm>Confirm</button> <button class="ghost-button" type="button" data-cq-round-cancel>Cancel</button></span>`
              : ""}
          </div>
        </section>

        <section class="cq-grid-2">
          <article class="cq-card">
            <div class="cq-card-head"><h4>Settlement readiness</h4></div>
            ${this.statusRow(this.adminState.round.activeRoundId, "Current round", this.activeRoundLikelyEnded() ? "Round likely complete" : "Round still open")}
            ${this.statusRow(this.adminState.round.prevRoundId, "Previous round", this.adminState.round.prevRoundSettled ? "Settled" : "Pending")}
            ${this.statusRow((this.adminState.settlement.importedScores || []).length, "Score import", (this.adminState.settlement.importedScores || []).length ? "Scores loaded" : "No import yet")}
            <div class="cq-inline-row"><button class="secondary-button" type="button" data-alert-cta="settlement">→ Settlement</button></div>
          </article>

          <article class="cq-card">
            <div class="cq-card-head"><h4>Bot status</h4><span class="section-meta">${this.updatedAgo("bots")}</span></div>
            ${this.statusText("Active bots", String(this.adminState.bots.activeCount), "dot-ok")}
            ${this.statusText("Last run", this.adminState.bots.lastRunMinutesAgo == null ? "No run yet" : this.minutesToAge(this.adminState.bots.lastRunMinutesAgo), this.adminState.bots.stalling ? "dot-warn" : "dot-ok")}
            ${this.statusText("Bot trade share", `${this.adminState.bots.botTradeSharePct}%`, "dot-neu")}
            ${this.statusText("Coverage", `${this.adminState.bots.coverageByMarket.filter((entry) => entry.hasBotActivity).length}/${this.adminState.bots.coverageByMarket.length} players`, "dot-neu")}
            <div class="cq-inline-row">
              <button class="secondary-button" type="button" data-cq-run-bots>Run bots</button>
              <button class="ghost-button" type="button" data-alert-cta="bots">→ Bot panel</button>
            </div>
          </article>
        </section>

        <section class="cq-vitals-grid">
          ${this.vitalCard("Matched volume", this.money(this.adminState.vitals.matchedVolume), "dot-ok")}
          ${this.vitalCard("Unresolved unmatched", this.money(this.adminState.vitals.unresolvedUnmatched), unresolvedTone)}
          ${this.vitalCard("Bot trade share", `${this.adminState.vitals.botTradeSharePct}%`, "dot-neu")}
          ${this.vitalCard("Open markets", String(this.adminState.vitals.tradableNowCount), "dot-neu", `Locked-unsettled ${this.adminState.vitals.lockedUnsettledCount} · Settled ${this.adminState.vitals.settledCount}`)}
        </section>

        <section class="cq-card cq-exceptions ${alerts.length ? "has-alerts" : ""}">
          <div class="cq-card-head"><h4>Exceptions queue</h4><span class="section-meta">${this.adminState.ui.lastCheckedAt ? `Last checked ${new Date(this.adminState.ui.lastCheckedAt).toLocaleTimeString()}` : ""}</span></div>
          ${alerts.length ? alerts.map((alert) => this.alertRow(alert)).join("") : `<div class="cq-all-clear"><span class="dot-ok"></span><strong>All clear</strong></div>`}
        </section>

        <section class="cq-card">
          <div class="cq-card-head"><h4>Analytics</h4><span class="section-meta">Operator snapshot</span></div>
          <div class="cq-vitals-grid">
            ${this.vitalCard("Users online now", onlineNowValue, "dot-neu", onlineNowMeta)}
            ${this.vitalCard("Unmatched trades now", String(cockpitAnalytics.unmatchedTradesNow), "dot-neu")}
            ${this.vitalCard("Active traders today", String(cockpitAnalytics.activeTradersToday), "dot-neu")}
          </div>
          <p class="section-meta">${this.escape(onlineNowDiagnostics)}</p>
          <div class="cq-inline-row cq-analytics-range-row">
            ${["1h", "12h", "24h", "48h"].map((key) => `<label class="cq-chip"><input data-cq-analytics-range type="radio" name="cqAnalyticsRange" value="${key}" ${cockpitAnalytics.historicalFilter === key ? "checked" : ""}>${key}</label>`).join("")}
          </div>
          <div class="cq-vitals-grid">
            ${this.vitalCard("Trades placed", String(hist.tradesPlaced || 0), "dot-neu")}
            ${this.vitalCard("Unique traders", String(hist.uniqueTraders || 0), "dot-neu")}
            ${this.vitalCard("Matched volume", this.money(hist.matchedVolume || 0), "dot-neu")}
          </div>
        </section>
      `;
    },

    statusRow(value, label, meta) {
      const ok = Boolean(value);
      return this.statusText(label, meta, ok ? "dot-ok" : "dot-warn");
    },

    statusText(label, value, dotClass) {
      return `<div class="cq-status-row"><span class="${dotClass}"></span><span>${label}</span><strong>${this.escape(value)}</strong></div>`;
    },

    vitalCard(label, value, dotClass, meta = "") {
      return `<article class="cq-vital-card"><div><span class="panel-label">${this.escape(label)}</span><strong>${this.escape(value)}</strong>${meta ? `<p class="section-meta">${this.escape(meta)}</p>` : ""}</div><span class="${dotClass}"></span></article>`;
    },

    alertRow(alert) {
      const dotClass = alert.severity === "critical" ? "dot-crit" : alert.severity === "warning" ? "dot-warn" : "dot-neu";
      return `
        <article class="cq-alert-row">
          <span class="${dotClass}"></span>
          <div>
            <strong>${this.escape(alert.message)}</strong>
            <p class="section-meta">${this.escape(alert.subtitle || "")}</p>
          </div>
          <div class="cq-alert-actions">
            <button class="secondary-button" type="button" data-alert-cta="${alert.panel}">Go →</button>
            <button class="ghost-button" type="button" data-alert-dismiss="${alert.id}" data-alert-round="${alert.round}">✕</button>
          </div>
        </article>
      `;
    },

    renderSettlement() {
      const state = this.adminState.settlement;
      const roundOptions = (this.call("getAvailableRoundOptions") || []).map((roundNumber) => {
        return `<option value="${roundNumber}" ${Number(roundNumber) === Number(state.targetRoundId || this.adminState.round.activeRoundId) ? "selected" : ""}>Round ${roundNumber}</option>`;
      }).join("");

      const steps = ["load", "diagnostics", "preview", "confirm"];
      const activeIndex = steps.indexOf(state.stage === "result" ? "confirm" : state.stage);

      let body = "";
      if (state.stage === "load") body = this.settlementLoadMarkup(roundOptions);
      else if (state.stage === "diagnostics") body = this.settlementDiagnosticsMarkup();
      else if (state.stage === "preview") body = this.settlementPreviewMarkup();
      else if (state.stage === "confirm") body = this.settlementConfirmMarkup();
      else body = this.settlementResultMarkup();

      return `
        <section class="cq-card">
          <div class="cq-card-head"><h4>Settlement wizard</h4></div>
          <ol class="cq-stepper">
            ${steps.map((step, index) => `<li class="${index < activeIndex ? "is-done" : index === activeIndex ? "is-active" : ""}">${index < activeIndex ? "✓" : index + 1}. ${this.escape(step)}</li>`).join("")}
          </ol>
          ${body}
          <div class="cq-inline-row">
            <button class="ghost-button" type="button" data-cq-toggle-legacy-settle>${state.showLegacySingleSettle ? "Hide" : "Show"} legacy single-market settlement controls</button>
          </div>
        </section>
      `;
    },

    settlementLoadMarkup(roundOptions) {
      const imported = this.adminState.settlement.importedScores || [];
      const missing = this.missingScoreNamesForRound(this.currentRoundMarkets(), imported);
      return `
        <div class="cq-settle-block">
          <label>Round<select id="cq-settlement-round-select">${roundOptions}</select></label>
          <label>Upload CSV<input id="cq-score-upload" type="file" accept=".csv,text/csv"></label>
          <button class="ghost-button" type="button" data-cq-use-last-import>Use last imported</button>
          ${this.adminState.settlement.parseError ? `<p class="feedback">${this.escape(this.adminState.settlement.parseError)}</p>` : ""}
          <p class="section-meta">Imported: ${imported.length} rows</p>
          ${missing.length ? `<p class="section-meta">Missing players: ${this.escape(missing.join(", "))}</p><p class="section-meta">Will be voided — all trades refunded</p>` : ""}
          <button class="secondary-button" type="button" data-cq-settlement-diagnostics ${imported.length ? "" : "disabled"}>Run diagnostics →</button>
        </div>
      `;
    },

    settlementDiagnosticsMarkup() {
      const diag = this.adminState.settlement.diagnostics || this.runSettlementDiagnostics(false);
      const checklist = [
        [diag.scoredCount > 0, `Scored markets: ${diag.scoredCount}`],
        [diag.voidedCount === 0, diag.voidedCount ? `Voided markets: ${diag.voidedCount} (${diag.missingNames.join(", ")})` : "No voided markets"],
        [true, `100% unmatched markets: ${diag.unmatchedOnlyCount}`],
        [diag.duplicateTradeIds.length === 0, diag.duplicateTradeIds.length ? `Duplicate trades found: ${diag.duplicateTradeIds.length}` : "No duplicate trade IDs"],
        [this.adminState.bots.botTradeSharePct >= 0, `Bot trade share: ${this.adminState.bots.botTradeSharePct}%`]
      ];
      return `
        <div class="cq-settle-block">
          ${checklist.map(([ok, text]) => `<div class="cq-status-row"><span class="${ok ? "dot-ok" : "dot-warn"}"></span><span>${this.escape(text)}</span></div>`).join("")}
          <p class="section-meta">${diag.ready ? "Ready to preview" : "Warnings present — review before preview"}</p>
          <div class="cq-inline-row">
            <button class="ghost-button" type="button" data-cq-settlement-back="load">← Back</button>
            <button class="secondary-button" type="button" data-cq-settlement-preview>View preview →</button>
          </div>
        </div>
      `;
    },

    settlementPreviewMarkup() {
      const preview = this.adminState.settlement.preview || this.runSettlementPreview(false);
      return `
        <div class="cq-settle-block">
          <p><strong>${preview.settledCount} settled · ${preview.voidedCount} voided · ${preview.partialCount} partial</strong></p>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Player</th><th>Score</th><th>Line</th><th>Result</th><th>Payout</th><th>Status</th></tr></thead>
              <tbody>
                ${preview.rows.map((row) => `<tr><td>${this.escape(row.player)}</td><td>${row.score == null ? "—" : Number(row.score).toFixed(1)}</td><td>${Number(row.line || 0).toFixed(1)}</td><td>${this.escape(row.result)}</td><td>${this.escape(row.payoutLabel)}</td><td>${this.escape(row.status)}</td></tr>`).join("")}
              </tbody>
            </table>
          </div>
          <p class="section-meta">Totals: payouts ${this.money(preview.totalPayout)} · refunds ${this.money(preview.totalRefund)} · partial returns ${this.money(preview.partialReturns)}</p>
          <div class="cq-inline-row">
            <button class="ghost-button" type="button" data-cq-settlement-back="diagnostics">← Back</button>
            <button class="secondary-button" type="button" data-cq-settlement-confirm-step>Confirm & settle →</button>
          </div>
        </div>
      `;
    },

    settlementConfirmMarkup() {
      const required = `SETTLE ${this.adminState.settlement.targetRoundId || this.adminState.round.activeRoundId}`;
      const canExecute = this.adminState.settlement.confirmInput === required;
      return `
        <div class="cq-settle-block">
          <p>⚠ This will settle Round ${this.adminState.settlement.targetRoundId || this.adminState.round.activeRoundId}. This can be undone within 24h.</p>
          <label>Type <code>${required}</code> to confirm
            <input id="cq-settlement-confirm-input" type="text" value="${this.escape(this.adminState.settlement.confirmInput)}">
          </label>
          <div class="cq-inline-row">
            <button class="ghost-button" type="button" data-cq-settlement-back="preview">Cancel</button>
            <button class="secondary-button danger" type="button" data-cq-settlement-execute ${canExecute ? "" : "disabled"}>Execute settlement</button>
          </div>
        </div>
      `;
    },

    settlementResultMarkup() {
      const result = this.adminState.settlement.result || {};
      const checklist = result.checklist || [];
      return `
        <div class="cq-settle-block">
          <p><strong>✅ Round ${this.adminState.round.activeRoundId} settled</strong> — ${result.summary || ""}</p>
          <div>
            <h5>Post-settlement checklist</h5>
            ${checklist.map((item) => `<div class="cq-status-row"><span class="${item.ok ? "dot-ok" : "dot-warn"}"></span><span>${this.escape(item.label)}</span></div>`).join("")}
            <div class="cq-status-row"><span class="dot-warn"></span><span>Verify leaderboard updated (manual)</span></div>
            <div class="cq-status-row"><span class="dot-warn"></span><span>Monitor for user-reported payout issues (manual)</span></div>
          </div>
          <div id="cq-undo-confirm-host" class="cq-confirm-host"></div>
          ${this.adminState.settlement.undoAvailable ? `<p class="section-meta">Undo window: ${this.undoTimeRemainingLabel()}</p><button class="secondary-button danger" type="button" data-cq-undo-open>Undo this settlement</button>` : ""}
          <div class="cq-inline-row">
            <button class="ghost-button" type="button" data-alert-cta="markets">View trade ledger →</button>
            <button class="ghost-button" type="button" data-alert-cta="cockpit">← Cockpit</button>
          </div>
        </div>
      `;
    },

    renderBots() {
      const coverage = this.adminState.bots.coverageByMarket;
      const logs = this.adminState.bots.logs;
      const showAllLogs = this.adminState.ui.expandedBotLogs;
      const leaderboard = this.adminState.bots.leaderboard;

      return `
        <section class="cq-grid-2">
          <article class="cq-card">
            <div class="cq-card-head"><h4>Bot health</h4><span class="section-meta">${this.updatedAgo("bots")}</span></div>
            ${this.statusText("Active count", String(this.adminState.bots.activeCount), "dot-ok")}
            ${this.statusText("Last run", this.adminState.bots.lastRunMinutesAgo == null ? "No run yet" : this.minutesToAge(this.adminState.bots.lastRunMinutesAgo), this.adminState.bots.stalling ? "dot-warn" : "dot-ok")}
            ${this.statusText("Trades today", String(this.adminState.bots.tradesToday), "dot-neu")}
            ${this.statusText("Bot trade share", `${this.adminState.bots.botTradeSharePct}%`, "dot-neu")}
            <div class="cq-inline-row"><button class="secondary-button" type="button" data-cq-run-bots>Run all bots</button><button class="secondary-button" type="button" data-cq-create-bot>Create bot</button></div>
          </article>
          <article class="cq-card">
            <div class="cq-card-head"><h4>Coverage map</h4><span class="section-meta">${coverage.filter((entry) => entry.hasBotActivity).length}/${coverage.length}</span></div>
            <div class="cq-coverage-grid">
              ${coverage.map((entry) => `<div class="cq-coverage-cell ${entry.hasBotActivity ? "has-bot" : "no-bot"}"><strong>${this.escape(entry.name)}</strong><span>${entry.hasBotActivity ? "Active" : "No bots"}</span></div>`).join("")}
            </div>
          </article>
        </section>

        <section class="cq-card">
          <div class="cq-card-head"><h4>Audit log</h4><button class="ghost-button" type="button" data-cq-toggle-bot-logs>${showAllLogs ? "Show less" : "Show all logs"}</button></div>
          <div class="cq-log-list">
            ${(showAllLogs ? logs : logs.slice(0, 20)).map((log) => `<div class="cq-log-row"><span>${this.escape(log.timestamp || log.at || "")}</span><strong>${this.escape(log.message || log.reason || JSON.stringify(log))}</strong></div>`).join("") || `<p class="section-meta">No bot log entries returned from status endpoint.</p>`}
          </div>
        </section>

        <section class="cq-card">
          <div class="cq-card-head"><h4>Bot leaderboard</h4><button class="ghost-button" type="button" data-cq-toggle-bot-leaderboard>${this.adminState.ui.expandedBotLeaderboard ? "Hide" : "Show"} bot leaderboard</button></div>
          ${this.adminState.ui.expandedBotLeaderboard
            ? `<div class="cq-log-list">${leaderboard.map((entry) => `<div class="cq-log-row"><span>${this.escape(entry.userName || "Bot")}</span><strong>P/L ${this.money(entry.realizedProfit || 0)} · ROI ${(((Number(entry.roi) || 0) * 100).toFixed(1))}%</strong></div>`).join("") || `<p class="section-meta">No bot leaderboard data.</p>`}</div>`
            : ""}
        </section>

        <section class="cq-card cq-confirm-host">
          <div class="cq-card-head"><h4>Danger zone</h4></div>
          <button class="secondary-button danger" type="button" data-cq-purge-bots>Purge bots</button>
        </section>
      `;
    },

    renderMarkets() {
      const matches = this.marketMatches();
      const filter = this.adminState.markets.activeFilter;

      return `
        <section class="cq-card">
          <div class="cq-card-head"><h4>Market board</h4><span class="section-meta">${this.updatedAgo("markets")}</span></div>
          <div class="cq-inline-row">
            ${this.filterChip("all", "All", filter)}
            ${this.filterChip("no-bot", "No bot activity", filter)}
            ${this.filterChip("high-exposure", "High exposure", filter)}
            <select id="cq-market-round-filter"><option value="active" selected>Round ${this.adminState.round.activeRoundId}</option></select>
            <button class="secondary-button" type="button" data-cq-run-bots>Run bots</button>
          </div>
          <div class="cq-match-stack">
            ${matches.map((match) => this.matchCardMarkup(match)).join("") || `<p class="section-meta">No matches for selected filter.</p>`}
          </div>
        </section>

        <section class="cq-card">
          <div class="cq-card-head"><h4>Trade ledger</h4><button class="secondary-button" type="button" data-cq-ledger-refresh>Refresh</button></div>
          <div class="cq-inline-row">
            <select id="cq-ledger-type-filter">
              <option value="all" ${this.adminState.markets.tradeLedgerFilters.type === "all" ? "selected" : ""}>All</option>
              <option value="matched" ${this.adminState.markets.tradeLedgerFilters.type === "matched" ? "selected" : ""}>Matched</option>
              <option value="unmatched" ${this.adminState.markets.tradeLedgerFilters.type === "unmatched" ? "selected" : ""}>Unmatched</option>
            </select>
            <select id="cq-ledger-player-filter">
              <option value="">All players</option>
              ${this.currentRoundMarkets().map((market) => `<option value="${market.id}" ${this.adminState.markets.tradeLedgerFilters.player === market.id ? "selected" : ""}>${this.escape(market.playerName)}</option>`).join("")}
            </select>
            <span class="section-meta">On-demand only</span>
          </div>
          <div class="table-wrap"><table><thead><tr><th>User</th><th>Player</th><th>Side</th><th>Stake</th><th>Matched</th><th>Unmatched</th><th>Status</th></tr></thead><tbody>${this.adminState.markets.tradeLedgerRows.map(({ market, trade }) => `<tr><td>${this.escape(trade.userName)}</td><td>${this.escape(market.playerName)}</td><td>${this.escape(trade.side)}</td><td>${this.money(trade.stake || 0)}</td><td>${this.money(trade.matchedStake || 0)}</td><td>${this.money(trade.unmatchedStake || 0)}</td><td>${this.escape(trade.result ? (trade.result.outcome || "Settled") : (trade.status || "OPEN"))}</td></tr>`).join("") || `<tr><td colspan="7">No trades.</td></tr>`}</tbody></table></div>
        </section>
      `;
    },

    filterChip(value, label, activeValue) {
      return `<button class="cq-chip-btn ${value === activeValue ? "is-active" : ""}" type="button" data-cq-market-filter="${value}">${label}</button>`;
    },

    matchCardMarkup(match) {
      const expanded = this.adminState.markets.expandedMatchId === match.id;
      const locksIn = this.lockCountdownLabel(match.kickoffAt);
      const exposureClass = match.unmatchedExposure > 100 ? "dot-warn" : "dot-ok";
      const action = match.status === "Locked" ? "UNLOCK" : "LOCK";
      const actionLabel = action === "UNLOCK" ? "Unlock" : "Lock";

      return `
        <article class="cq-match-card">
          <header class="cq-match-head">
            <button class="ghost-button" type="button" data-cq-match-toggle="${match.id}">${expanded ? "▾" : "▸"}</button>
            <div>
              <strong>${this.escape(match.title)}</strong>
              <p class="section-meta">${this.escape(match.status)} · ${locksIn}</p>
            </div>
            <button class="secondary-button" type="button" data-cq-match-lock-toggle="${match.id}" data-cq-match-lock-action="${action}">${actionLabel}</button>
          </header>
          ${expanded ? `
            <div class="cq-match-body">
              <div class="cq-grid-2">
                <div class="cq-card-lite">
                  <p class="panel-label">Settlement readiness</p>
                  <strong>${match.scoredCount}/${match.players.length} scored</strong>
                  <p class="section-meta">${match.missingNames.length ? `Missing: ${this.escape(match.missingNames.join(", "))}` : "No missing scores detected from imported set"}</p>
                </div>
                <div class="cq-card-lite">
                  <p class="panel-label">Unmatched exposure</p>
                  <strong>${this.money(match.unmatchedExposure)}</strong>
                  <div class="cq-status-row"><span class="${exposureClass}"></span><span>${match.botCoverageCount}/${match.players.length} players have bot activity</span></div>
                </div>
              </div>
              <div class="cq-card-lite">
                <p class="panel-label">Lockout history / audit trail</p>
                <p class="section-meta">Last 3 events</p>
                <ul class="section-meta">
                  ${match.lockHistory.length
                    ? match.lockHistory.slice(0, 3).map((entry) => `<li>${this.escape(entry)}</li>`).join("")
                    : "<li>No lock/unlock history available in current Phase 1 endpoints.</li>"}
                </ul>
                <div class="cq-confirm-host" data-cq-match-confirm-host="${match.id}"></div>
              </div>
              <div class="table-wrap"><table><thead><tr><th>Player</th><th>Line</th><th>Matched</th><th>Unmatched</th><th>Bots</th><th>Status</th></tr></thead><tbody>${match.players.map((player) => this.playerRowMarkup(player)).join("")}</tbody></table></div>
            </div>
          ` : ""}
        </article>
      `;
    },

    playerRowMarkup(player) {
      const expanded = this.adminState.markets.expandedPlayerId === player.id;
      return `
        <tr data-cq-player-toggle="${player.id}" class="cq-player-row">
          <td>${this.escape(player.name)}</td>
          <td>${Number(player.line || 0).toFixed(1)}</td>
          <td>${this.money(player.matched)}</td>
          <td>${this.money(player.unmatched)}</td>
          <td><span class="${player.hasBotActivity ? "status-chip status-open" : "status-chip status-locked"}">${player.hasBotActivity ? "Active" : "None"}</span></td>
          <td>${this.escape(player.healthLabel)}</td>
        </tr>
        ${expanded ? `<tr><td colspan="6">${this.playerDrawerMarkup(player)}</td></tr>` : ""}
      `;
    },

    playerDrawerMarkup(player) {
      const overrideOpen = this.adminState.markets.overrideOpenForPlayerId === player.id;
      const crowdSignal = player.crowdOverPct;
      const showAdvisory = crowdSignal > 65;
      return `
        <div class="cq-player-drawer">
          <p class="section-meta">Flow: ${crowdSignal}% over · Last trade: ${this.escape(player.lastTradeAge || "—")} · Bots: ${player.hasBotActivity ? "active" : "none"}</p>
          ${!player.hasBotActivity ? `<p class="section-meta">No bot activity — bots may resolve this before override.</p>` : ""}
          <div class="cq-inline-row">
            <button class="secondary-button" type="button" data-cq-player-run-bots>Run bots</button>
            <button class="ghost-button" type="button" data-cq-override-toggle="${player.id}">Override line ▾</button>
            <button class="ghost-button" type="button" data-cq-open-ledger-player="${player.id}">View trades</button>
          </div>
          ${overrideOpen ? `
            <div class="cq-override-box">
              ${showAdvisory ? `<p class="section-meta">Crowd is ${crowdSignal}% over. Override may not be necessary.</p>` : ""}
              <label>Reason for override<input data-cq-override-reason type="text" value="${this.escape(this.adminState.markets.overrideReason)}"></label>
              <label>New line value<input data-cq-override-line type="number" step="0.1" value="${this.escape(this.adminState.markets.overrideLine)}"></label>
              <p class="feedback" id="cq-override-feedback-${player.id}"></p>
              <button class="secondary-button danger" type="button" data-cq-override-submit="${player.id}">Submit override</button>
            </div>
          ` : ""}
        </div>
      `;
    },

    renderGrowth() {
      const affiliates = this.adminState.growth.affiliates;
      const referrals = this.adminState.growth.referrals;
      const contacts = this.adminState.growth.contacts;
      return `
        <section class="cq-grid-2">
          <article class="cq-card">
            <div class="cq-card-head"><h4>Affiliates</h4></div>
            ${this.vitalCard("Tracked affiliates", String(affiliates.length), "dot-neu")}
            ${this.vitalCard("Total referred signups", String(referrals.length), "dot-neu")}
            <div class="cq-log-list">${affiliates.map((entry) => `<div class="cq-log-row"><span>${this.escape(entry.code || "")}</span><strong>${this.escape(entry.name || entry.code || "")}: ${Number(entry.total_signups) || 0}</strong></div>`).join("") || `<p class="section-meta">No affiliate data.</p>`}</div>
          </article>
          <article class="cq-card">
            <div class="cq-card-head"><h4>Contact inbox</h4></div>
            <div class="cq-log-list">
              ${contacts.map((entry) => `<div class="cq-log-row"><span>${this.escape(new Date(entry.submittedAt || Date.now()).toLocaleString())}</span><strong>${this.escape(entry.email)} — ${this.escape(entry.message)}</strong></div>`).join("") || `<p class="section-meta">No contact messages.</p>`}
            </div>
          </article>
        </section>
        <section class="cq-card">
          <div class="cq-card-head"><h4>Referrals</h4></div>
          <div class="table-wrap"><table><thead><tr><th>Affiliate</th><th>User</th><th>Signup</th></tr></thead><tbody>${referrals.map((entry) => `<tr><td>${this.escape(entry.affiliate_name || entry.affiliate_code || "")}</td><td>${this.escape(entry.username || "")}</td><td>${this.escape(entry.referred_at ? new Date(entry.referred_at).toLocaleString() : "—")}</td></tr>`).join("") || `<tr><td colspan="3">No referrals.</td></tr>`}</tbody></table></div>
        </section>
      `;
    },

    runSettlementDiagnostics(render = true) {
      const markets = this.currentRoundMarkets();
      const scores = this.adminState.settlement.importedScores || [];
      const scoreMap = new Map(scores.map((entry) => [this.normalizeName(entry.name), entry]));
      const missingNames = [];
      let scoredCount = 0;
      let voidedCount = 0;
      let unmatchedOnlyCount = 0;
      const duplicateTradeIds = [];
      const seen = new Set();

      markets.forEach((market) => {
        const score = scoreMap.get(this.normalizeName(market.playerName));
        if (score && Number.isFinite(Number(score.score))) {
          scoredCount += 1;
        } else {
          voidedCount += 1;
          missingNames.push(market.playerName);
        }
        const openTrades = (market.trades || []).filter((trade) => !trade.result);
        if (openTrades.length && openTrades.every((trade) => (Number(trade.matchedStake) || 0) === 0)) {
          unmatchedOnlyCount += 1;
        }
        (market.trades || []).forEach((trade) => {
          if (!trade.id) return;
          if (seen.has(trade.id)) duplicateTradeIds.push(trade.id);
          seen.add(trade.id);
        });
      });

      const diagnostics = {
        scoredCount,
        voidedCount,
        missingNames,
        unmatchedOnlyCount,
        duplicateTradeIds,
        ready: scoredCount > 0
      };
      this.adminState.settlement.diagnostics = diagnostics;
      this.adminState.settlement.stage = "diagnostics";
      if (render) this.render();
      return diagnostics;
    },

    runSettlementPreview(render = true) {
      const markets = this.currentRoundMarkets();
      const scores = this.adminState.settlement.importedScores || [];
      const scoreMap = new Map(scores.map((entry) => [this.normalizeName(entry.name), entry]));

      const rows = markets.map((market) => {
        const scoreEntry = scoreMap.get(this.normalizeName(market.playerName));
        const score = scoreEntry && Number.isFinite(Number(scoreEntry.score)) ? Number(scoreEntry.score) : null;
        if (score == null) {
          return {
            player: market.playerName,
            score: null,
            line: market.currentLine,
            result: "VOID",
            payoutLabel: "$0 · trades refunded",
            status: "VOID",
            totalPayout: 0,
            totalRefund: (market.trades || []).reduce((sum, trade) => sum + (Number(trade.stake) || 0), 0),
            partialReturn: 0
          };
        }
        const result = score > Number(market.currentLine || 0) ? "OVER" : score < Number(market.currentLine || 0) ? "UNDER" : "VOID";
        const openTrades = (market.trades || []).filter((trade) => !trade.result);
        const partial = openTrades.some((trade) => (Number(trade.unmatchedStake) || 0) > 0 && (Number(trade.matchedStake) || 0) > 0);
        const matchedStake = openTrades.reduce((sum, trade) => sum + (Number(trade.matchedStake) || 0), 0);
        const refund = openTrades.reduce((sum, trade) => sum + (Number(trade.unmatchedStake) || 0), 0);
        return {
          player: market.playerName,
          score,
          line: market.currentLine,
          result,
          payoutLabel: this.money(matchedStake * 2),
          status: partial ? "PARTIAL" : "SETTLE",
          totalPayout: matchedStake * 2,
          totalRefund: refund,
          partialReturn: partial ? refund : 0
        };
      });

      const preview = {
        rows,
        settledCount: rows.filter((row) => row.status === "SETTLE" || row.status === "PARTIAL").length,
        voidedCount: rows.filter((row) => row.status === "VOID").length,
        partialCount: rows.filter((row) => row.status === "PARTIAL").length,
        totalPayout: rows.reduce((sum, row) => sum + (row.totalPayout || 0), 0),
        totalRefund: rows.reduce((sum, row) => sum + (row.totalRefund || 0), 0),
        partialReturns: rows.reduce((sum, row) => sum + (row.partialReturn || 0), 0)
      };

      this.adminState.settlement.preview = preview;
      this.adminState.settlement.stage = "preview";
      if (render) this.render();
      return preview;
    },

    async executeSettlement() {
      const targetRound = this.adminState.settlement.targetRoundId || this.adminState.round.activeRoundId;
      const required = `SETTLE ${targetRound}`;
      if (this.adminState.settlement.confirmInput !== required) return;
      const preMarkets = this.currentRoundMarkets();
      const preOpenTradeCount = preMarkets.flatMap((market) => (market.trades || [])).filter((trade) => !trade.result).length;

      const response = await this.apiPost("/api/admin/settle-round", { roundId: targetRound });
      await this.refreshAll(false);
      this.adminState.settlement.stage = "result";
      this.adminState.settlement.undoAvailable = true;
      const createdAt = response?.state?.lastSettlementBatch?.createdAt || new Date().toISOString();
      this.adminState.settlement.undoWindowExpiresAt = new Date(createdAt).getTime() + (24 * 60 * 60 * 1000);
      const batch = response?.settlementBatch || {};
      this.adminState.settlement.result = {
        summary: `${batch.settledCount || 0} settled · ${batch.voidCount || 0} voided · ${batch.scoredCount || 0} scored`,
        checklist: this.computePostSettlementChecklist(targetRound, preOpenTradeCount, batch.voidCount || 0)
      };

      let verifyTicks = 0;
      this.startPoll("postSettleVerify", async () => {
        verifyTicks += 1;
        await this.refreshCore();
        this.adminState.settlement.result.checklist = this.computePostSettlementChecklist(targetRound, preOpenTradeCount, batch.voidCount || 0);
        this.render();
        if (verifyTicks >= 6) {
          this.stopPoll("postSettleVerify");
        }
      }, this.pollIntervals.postSettleVerify);

      this.computeAlerts();
      this.render();
    },

    computePostSettlementChecklist(roundId, preOpenTradeCount = 0, expectedVoidCount = 0) {
      const markets = this.currentRoundMarkets().filter((market) => Number(this.call("marketRoundNumber", market) || 0) === Number(roundId));
      const allSettled = markets.length ? markets.every((market) => Boolean(market.settlement)) : false;
      const voidCount = markets.filter((market) => String(market?.settlement?.settlementType || "").toUpperCase() === "VOID").length;
      const postOpenTradeCount = markets.flatMap((market) => (market.trades || [])).filter((trade) => !trade.result).length;
      return [
        { label: "All settled markets showing CLOSED status", ok: allSettled },
        { label: "Void markets showing REFUNDED status", ok: expectedVoidCount ? voidCount >= expectedVoidCount : true },
        { label: "Trade ledger updated", ok: postOpenTradeCount <= preOpenTradeCount }
      ];
    },

    async parseScoreCsv(file) {
      this.adminState.settlement.parseError = "";
      const text = await file.text();
      const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const rows = [];
      for (let i = 0; i < lines.length; i += 1) {
        const parts = lines[i].split(",");
        if (parts.length < 2) continue;
        const name = String(parts[0] || "").trim();
        const score = Number(parts[1]);
        if (!name) continue;
        rows.push({
          playerId: "",
          name,
          score: Number.isFinite(score) ? score : null
        });
      }
      if (!rows.length) {
        this.adminState.settlement.parseError = "No valid CSV rows found. Expected: Player Name,Score";
      } else {
        sessionStorage.setItem("cq-last-imported-scores", JSON.stringify(rows));
      }
      this.adminState.settlement.importedScores = rows;
      this.render();
    },

    loadLastImportedScores() {
      const raw = sessionStorage.getItem("cq-last-imported-scores");
      if (!raw) {
        this.adminState.settlement.parseError = "No prior import found in this browser session.";
        this.render();
        return;
      }
      try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed) || !parsed.length) {
          this.adminState.settlement.parseError = "Stored import is empty.";
          this.render();
          return;
        }
        this.adminState.settlement.importedScores = parsed;
        this.adminState.settlement.parseError = "";
        this.render();
      } catch (error) {
        this.adminState.settlement.parseError = "Stored import could not be read.";
        this.render();
      }
    },

    async submitLineOverride(playerId) {
      const host = this.root.querySelector(`#cq-override-feedback-${CSS.escape(playerId)}`);
      const reason = String(this.adminState.markets.overrideReason || "").trim();
      const lineValue = Number(this.adminState.markets.overrideLine);
      if (!reason) {
        if (host) host.textContent = "Reason is required.";
        return;
      }
      if (!Number.isFinite(lineValue)) {
        if (host) host.textContent = "Enter a valid line value.";
        return;
      }

      const market = this.currentRoundMarkets().find((entry) => entry.id === playerId);
      if (!market) return;

      await this.apiPost("/api/admin/lines", {
        marketId: market.id,
        playerId: market.id,
        line: lineValue,
        openingLine: Number(market.initialLine || market.currentLine || 0),
        currentLine: lineValue,
        reason,
        roundId: this.adminState.round.activeRoundId
      });

      this.adminState.markets.overrideOpenForPlayerId = "";
      this.adminState.markets.overrideReason = "";
      this.adminState.markets.overrideLine = "";
      await this.refreshAll(true);
    },

    async runBots() {
      await this.apiPost("/api/admin/bots/run", {});
      await this.refreshAll(true);
    },

    async createBot() {
      await this.apiPost("/api/admin/bots/create", {});
      await this.refreshAll(true);
    },

    async confirmRoundSwitch() {
      const nextRound = Number(this.adminState.ui.pendingRoundId);
      if (!Number.isFinite(nextRound)) return;
      await this.apiPost("/api/admin/active-round", { roundNumber: nextRound });
      this.adminState.ui.showRoundConfirm = false;
      this.adminState.ui.pendingRoundId = null;
      this.adminState.ui.undoBannerDismissed = false;
      await this.refreshAll(true);
    },

    renderTypedConfirm(container, requiredString, onConfirm) {
      if (!container) return;
      container.innerHTML = `
        <div class="cq-typed-confirm">
          <p>Type <code>${this.escape(requiredString)}</code> to confirm.</p>
          <input type="text" data-cq-typed-input>
          <div class="cq-inline-row">
            <button type="button" class="ghost-button" data-cq-typed-cancel>Cancel</button>
            <button type="button" class="secondary-button danger" data-cq-typed-confirm disabled>Execute</button>
          </div>
        </div>
      `;
      const input = container.querySelector("[data-cq-typed-input]");
      const execute = container.querySelector("[data-cq-typed-confirm]");
      const cancel = container.querySelector("[data-cq-typed-cancel]");

      input?.addEventListener("input", () => {
        execute.disabled = input.value !== requiredString;
      });
      cancel?.addEventListener("click", () => {
        container.innerHTML = "";
      });
      execute?.addEventListener("click", async () => {
        if (input.value !== requiredString) return;
        execute.disabled = true;
        try {
          await onConfirm();
        } finally {
          container.innerHTML = "";
        }
      });
    },

    renderTypedReasonConfirm(container, { requiredString, requireReason = false, onConfirm }) {
      if (!container) return;
      const reasonLabel = requireReason ? "Reason (required)" : "Reason (optional)";
      container.innerHTML = `
        <div class="cq-typed-confirm">
          <p>Type <code>${this.escape(requiredString)}</code> to confirm.</p>
          <input type="text" data-cq-typed-input>
          <label>${reasonLabel}<input type="text" data-cq-typed-reason></label>
          <div class="cq-inline-row">
            <button type="button" class="ghost-button" data-cq-typed-cancel>Cancel</button>
            <button type="button" class="secondary-button danger" data-cq-typed-confirm disabled>Execute</button>
          </div>
        </div>
      `;
      const input = container.querySelector("[data-cq-typed-input]");
      const reasonInput = container.querySelector("[data-cq-typed-reason]");
      const execute = container.querySelector("[data-cq-typed-confirm]");
      const cancel = container.querySelector("[data-cq-typed-cancel]");
      if (!input || !reasonInput || !execute || !cancel) return;

      const syncEnabled = () => {
        const reason = String(reasonInput.value || "").trim();
        execute.disabled = input.value !== requiredString || (requireReason && !reason);
      };
      input.addEventListener("input", syncEnabled);
      reasonInput.addEventListener("input", syncEnabled);
      cancel.addEventListener("click", () => {
        container.innerHTML = "";
      });
      execute.addEventListener("click", async () => {
        const reason = String(reasonInput.value || "").trim();
        if (input.value !== requiredString || (requireReason && !reason)) {
          return;
        }
        execute.disabled = true;
        try {
          await onConfirm(reason);
          container.innerHTML = "";
        } catch (_error) {
          execute.disabled = false;
        }
      });
      syncEnabled();
      input.focus();
    },

    allMarkets() {
      return ((this.call("getAdminRoundMarkets") || [])
        .concat((window.state && Array.isArray(window.state.markets)) ? window.state.markets : []));
    },

    currentRoundMarkets() {
      const roundMarkets = this.call("getAdminRoundMarkets");
      if (Array.isArray(roundMarkets) && roundMarkets.length) {
        return roundMarkets;
      }
      const all = (window.state && Array.isArray(window.state.markets)) ? window.state.markets : [];
      const activeRound = this.call("activeRoundNumber") || this.call("currentRoundNumber") || 1;
      return all.filter((market) => Number(this.call("marketRoundNumber", market) || 0) === Number(activeRound));
    },

    marketMatches() {
      const markets = this.currentRoundMarkets();
      const grouped = new Map();
      markets.forEach((market) => {
        if (!grouped.has(market.gameId)) {
          grouped.set(market.gameId, {
            id: market.gameId,
            title: this.call("gameTitleFor", market.gameId) || market.gameId,
            kickoffAt: this.gameKickoffTimestamp(market.gameId),
            status: this.call("isMarketLocked", market) ? "Locked" : "Open",
            players: [],
            unmatchedExposure: 0,
            scoredCount: 0,
            missingNames: [],
            botCoverageCount: 0,
            lockHistory: []
          });
        }
        const match = grouped.get(market.gameId);
        const trades = market.trades || [];
        const matched = trades.reduce((sum, trade) => sum + (Number(trade.matchedStake) || 0), 0);
        const unmatched = trades.reduce((sum, trade) => sum + (Number(trade.unmatchedStake) || 0), 0);
        const overStake = trades.filter((trade) => trade.side === "OVER").reduce((sum, trade) => sum + (Number(trade.stake) || 0), 0);
        const totalStake = trades.reduce((sum, trade) => sum + (Number(trade.stake) || 0), 0);
        const overPct = totalStake ? Math.round((overStake / totalStake) * 100) : 50;
        const hasBotActivity = trades.some((trade) => this.isBotTrade(trade));
        const lastTrade = trades.slice().sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0))[0];
        const healthLabel = this.playerHealthLabel(unmatched, hasBotActivity);
        match.players.push({
          id: market.id,
          marketId: market.id,
          name: market.playerName,
          line: market.currentLine,
          matched,
          unmatched,
          hasBotActivity,
          crowdOverPct: overPct,
          healthLabel,
          lastTradeAge: lastTrade ? this.minutesToAge(Math.round((Date.now() - new Date(lastTrade.timestamp || 0).getTime()) / 60000)) : "—"
        });
        match.unmatchedExposure += unmatched;
        if (market.settlement) match.scoredCount += 1;
        if (hasBotActivity) match.botCoverageCount += 1;
        if (Array.isArray(market.lockHistory) && market.lockHistory.length) {
          match.lockHistory.push(...market.lockHistory);
        }
      });

      [...grouped.values()].forEach((match) => {
        match.lockHistory = [...new Set(match.lockHistory)].slice(0, 8);
        if (!match.lockHistory.length && match.kickoffAt) {
          const kickoffLabel = new Date(match.kickoffAt).toLocaleString();
          match.lockHistory.push(`Auto lock scheduled at ${kickoffLabel}`);
        }
      });

      const filter = this.adminState.markets.activeFilter;
      let rows = [...grouped.values()];
      if (filter === "no-bot") {
        rows = rows.filter((match) => match.players.some((player) => !player.hasBotActivity));
      } else if (filter === "high-exposure") {
        rows = rows.filter((match) => match.unmatchedExposure > 100);
      }

      return rows;
    },

    playerHealthLabel(unmatched, hasBotActivity) {
      const value = Number(unmatched) || 0;
      if (value < 50 && hasBotActivity) return "Normal";
      if (value > 200 || (!hasBotActivity && value > 100)) return "Low";
      return "Watch";
    },

    gameKickoffTimestamp(gameId) {
      const game = this.call("findGame", gameId);
      if (!game) return null;
      return this.call("kickoffTimestampForGame", game) || null;
    },

    lockCountdownLabel(kickoffAt) {
      if (!kickoffAt || !Number.isFinite(Number(kickoffAt))) return "No kickoff";
      const delta = Number(kickoffAt) - Date.now();
      if (delta <= 0) return "Locked";
      const mins = Math.floor(delta / 60000);
      const hours = Math.floor(mins / 60);
      const rem = mins % 60;
      return `Locks in ${hours}h ${rem}min`;
    },

    activeRoundLikelyEnded() {
      const games = this.call("getActiveRoundGames") || [];
      if (!games.length) return false;
      const lastKick = Math.max(...games.map((game) => Number(this.call("kickoffTimestampForGame", game) || 0)));
      return Date.now() > (lastKick + 2 * 60 * 60 * 1000);
    },

    missingScoreNamesForRound(markets, imported) {
      if (!Array.isArray(imported) || !imported.length) return [];
      const scoreMap = new Map(imported.map((entry) => [this.normalizeName(entry.name), entry]));
      return markets
        .filter((market) => {
          const row = scoreMap.get(this.normalizeName(market.playerName));
          return !row || !Number.isFinite(Number(row.score));
        })
        .map((market) => market.playerName);
    },

    undoTimeRemainingLabel() {
      const expiresAt = this.adminState.settlement.undoWindowExpiresAt;
      if (!expiresAt) return "0h 0min";
      const delta = Math.max(0, expiresAt - Date.now());
      const mins = Math.floor(delta / 60000);
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return `${h}h ${m}min`;
    },

    minutesToAge(minutes) {
      if (minutes == null || !Number.isFinite(Number(minutes))) return "—";
      const mins = Number(minutes);
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      if (h <= 0) return `${m}min ago`;
      return `${h}h ${m}min ago`;
    },

    isBotTrade(trade) {
      const fn = this.call("isBotTrade");
      if (typeof fn === "function") {
        return fn(trade);
      }
      return Boolean(trade?.botId || trade?.botSource || trade?.archetype || String(trade?.userName || "").toLowerCase().includes("bot"));
    },

    call(name, ...args) {
      const fn = window[name];
      if (typeof fn === "function") return fn(...args);
      return undefined;
    },

    async apiGet(path) {
      if (typeof window.apiGet === "function") {
        return window.apiGet(path);
      }
      const response = await fetch(path, { credentials: "include" });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      return response.json();
    },

    async apiPost(path, body) {
      if (typeof window.api === "function") {
        return window.api(path, body || {});
      }
      const response = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body || {})
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(json?.error || `Request failed: ${response.status}`);
      return json;
    },

    money(value) {
      const n = Number(value) || 0;
      return `$${Math.round(n).toLocaleString()}`;
    },

    normalizeName(value) {
      return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
    },

    escape(value) {
      return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }
  };

  window.AdminShell = AdminShell;
  void AdminShell.init();
})();
