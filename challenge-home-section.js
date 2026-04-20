(function () {
  const USER_NAME_KEY = "mercatus-user-name";
  const BACKGROUND = "#0D0D1A";
  const CARD_BG = "#1A1A2E";
  const ACCENT_GREEN = "#00C853";
  const CTA_GRADIENT = "linear-gradient(135deg, #36df98, #f8c04e)";
  const POLL_MS = 60000;

  function currentUserName() {
    return String(window.localStorage.getItem(USER_NAME_KEY) || "").trim();
  }

  function formatStakeAmount(value) {
    const numeric = Number(value) || 0;
    return `$${numeric.toFixed(2)}`;
  }

  function positionBadgeLabel(position) {
    const normalized = String(position || "").trim().toLowerCase();
    const map = {
      "fullback": "FLB",
      "winger": "WNG",
      "centre": "CTR",
      "five-eighth": "5/8",
      "halfback": "HLF",
      "hooker": "HOK",
      "prop": "PROP",
      "2nd row": "2RF",
      "lock": "LCK"
    };
    return map[normalized] || String(position || "POS").slice(0, 4).toUpperCase();
  }

  function teamAbbreviation(team) {
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

  function normalizeTeamName(value) {
    return String(value || "").trim().toLowerCase();
  }

  function teamPillStyle(team) {
    const teamColors = window.MERCATUS_SEED?.TEAM_COLORS || {};
    const colors = teamColors[team] ?? teamColors[normalizeTeamName(team)] ?? null;
    if (!colors?.primary) return "";
    return `background:${colors.primary};color:${colors.secondary || "#ffffff"};`;
  }

  function isHomeScreenActive() {
    const homeScreen = document.querySelector('.screen[data-screen="home"]');
    return Boolean(homeScreen && homeScreen.classList.contains("active"));
  }

  async function fetchEligibleTrades() {
    const response = await fetch("/api/challenges/eligible", {
      method: "GET",
      headers: {
        "X-User-Name": currentUserName()
      }
    });
    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload?.error || "Unable to load challenge trades");
    }
    return Array.isArray(payload) ? payload : [];
  }

  function requestChallengeLink(tradeId) {
    if (!tradeId) return;
    document.dispatchEvent(new CustomEvent("crowdiq:create-challenge-link", {
      detail: { tradeIds: [String(tradeId)] }
    }));
  }

  function kickoffCountdownLabel(kickoffAt) {
    const kickoffMs = Number(new Date(kickoffAt || "").getTime());
    if (!Number.isFinite(kickoffMs)) return "Kickoff TBC";
    const diffMs = kickoffMs - Date.now();
    if (diffMs <= 0) return "Locked";
    const hours = Math.ceil(diffMs / 3600000);
    if (hours >= 24) {
      const days = Math.ceil(hours / 24);
      return `${days}d left`;
    }
    return `${hours}h left`;
  }

  function kickoffLabel(kickoffAt) {
    const kickoffMs = Number(new Date(kickoffAt || "").getTime());
    if (!Number.isFinite(kickoffMs)) return "Kickoff TBC";
    return new Date(kickoffMs).toLocaleString([], {
      weekday: "short",
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function marketsButtonNavigate() {
    const button = document.querySelector('[data-screen-target="markets"]');
    if (button instanceof HTMLElement) {
      button.click();
    }
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function createState(container) {
    return {
      container,
      cardState: new Map(),
      eligibleTrades: [],
      tradeIdsSignature: "",
      userName: currentUserName(),
      mounted: true,
      pollTimer: null,
      removalObserver: null,
      isFetching: false,
      pendingFetch: false,
      onTradeCreated: null,
      onVisibilityChange: null
    };
  }

  function renderFromState(state) {
    const container = state.container;
    const eligibleTrades = state.eligibleTrades;
    const cardState = state.cardState;

    if (!eligibleTrades.length) {
      container.innerHTML = `
        <section style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:16px;">
          <h3 style="margin:0 0 8px;color:#fff;">Challenge Friends</h3>
          <p style="margin:0 0 14px;color:rgba(255,255,255,0.74);font-size:13px;">No unmatched trades to challenge on - enter a market to get started</p>
          <button type="button" data-open-markets style="padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.26);background:transparent;color:#fff;">Go to Markets</button>
        </section>
      `;
      container.querySelector("[data-open-markets]")?.addEventListener("click", marketsButtonNavigate);
      return;
    }

    container.innerHTML = `
      <section style="display:flex;flex-direction:column;gap:10px;">
        <header style="display:flex;align-items:center;justify-content:space-between;">
          <h3 style="margin:0;color:#fff;">Challenge Friends</h3>
        </header>
        ${eligibleTrades.map((item) => {
          const local = cardState.get(item.trade_id) || { pending: false, message: "", error: "" };
          return `
            <article style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:10px 12px;display:flex;flex-direction:column;gap:6px;">
              <div style="display:grid;grid-template-columns:1fr auto auto;gap:8px;align-items:center;">
                <div style="display:flex;align-items:center;gap:6px;min-width:0;">
                  <strong style="color:#fff;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(item.player_name)}</strong>
                  <span style="font-size:10px;color:rgba(255,255,255,0.45);letter-spacing:0.03em;white-space:nowrap;">${escapeHtml(positionBadgeLabel(item.position))}</span>
                </div>
                <span style="font-size:11px;color:rgba(255,255,255,0.85);white-space:nowrap;">${escapeHtml(item.side === "OVER" ? "Over" : "Under")} ${Number(item.line || 0).toFixed(1)} · ${formatStakeAmount(item.stake)}</span>
                <span style="font-size:11px;color:rgba(255,255,255,0.7);white-space:nowrap;">${escapeHtml(kickoffCountdownLabel(item.kickoff_at))}</span>
              </div>
              <div style="display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center;">
                <div style="display:flex;align-items:center;gap:7px;min-width:0;white-space:nowrap;overflow:hidden;">
                  <span style="font-size:10px;padding:3px 7px;border-radius:999px;font-weight:800;${teamPillStyle(item.team)}">${escapeHtml(teamAbbreviation(item.team))}</span>
                  <span style="font-size:11px;color:rgba(255,255,255,0.66);overflow:hidden;text-overflow:ellipsis;">${item.opponent ? `vs ${escapeHtml(item.opponent)} · ` : ""}${escapeHtml(kickoffLabel(item.kickoff_at))}</span>
                </div>
                <button type="button" data-action="challenge" data-trade-id="${escapeHtml(item.trade_id)}" ${local.pending ? "disabled" : ""} style="padding:8px 11px;border-radius:9px;border:0;background:${CTA_GRADIENT};color:#081016;font-weight:700;font-size:12px;white-space:nowrap;">${local.pending ? "Please wait..." : "Challenge Friend"}</button>
              </div>
              ${local.error ? `<div style="font-size:12px;color:#ff8f8f;">${escapeHtml(local.error)}</div>` : ""}
              ${local.message ? `<div style="font-size:12px;color:#8de4a8;">${escapeHtml(local.message)}</div>` : ""}
            </article>
          `;
        }).join("")}
      </section>
    `;

      container.querySelectorAll("[data-action]").forEach((button) => {
        button.addEventListener("click", async () => {
          const tradeId = String(button.getAttribute("data-trade-id") || "");
          const item = state.eligibleTrades.find((entry) => String(entry.trade_id) === tradeId);
          if (!item) return;
          const next = { ...(state.cardState.get(tradeId) || { pending: false, message: "", error: "" }), pending: true, error: "", message: "" };
          state.cardState.set(tradeId, next);
          renderFromState(state);
        try {
            requestChallengeLink(item.trade_id);
            state.cardState.set(tradeId, { pending: false, error: "", message: "" });
          } catch (error) {
            state.cardState.set(tradeId, { pending: false, error: error.message || "Unable to open challenge flow", message: "" });
        }
        renderFromState(state);
      });
    });
  }

  async function fetchAndRender(state, forceRender = false) {
    if (!state.mounted) return;
    if (state.isFetching) {
      state.pendingFetch = true;
      return;
    }
    state.isFetching = true;
    try {
      const rows = await fetchEligibleTrades();
      const signature = rows.map((row) => String(row.trade_id || "")).join("|");
      if (!forceRender && signature === state.tradeIdsSignature) {
        return;
      }
      state.tradeIdsSignature = signature;
      state.eligibleTrades = rows;
      renderFromState(state);
    } catch (error) {
      state.container.innerHTML = `<section style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:16px;"><h3 style="margin:0 0 6px;color:#fff;">Challenge Friends</h3><p style="margin:0;color:#ff9b9b;font-size:12px;">${escapeHtml(error.message || "Unable to load challenge trades")}</p></section>`;
    } finally {
      state.isFetching = false;
      if (state.pendingFetch) {
        state.pendingFetch = false;
        void fetchAndRender(state);
      }
    }
  }

  function cleanupState(state) {
    if (!state || !state.mounted) return;
    state.mounted = false;
    if (state.pollTimer) {
      clearInterval(state.pollTimer);
      state.pollTimer = null;
    }
    if (state.removalObserver) {
      state.removalObserver.disconnect();
      state.removalObserver = null;
    }
    if (state.onTradeCreated) {
      document.removeEventListener("crowdiq:trade-created", state.onTradeCreated);
      state.onTradeCreated = null;
    }
    if (state.onVisibilityChange) {
      document.removeEventListener("visibilitychange", state.onVisibilityChange);
      state.onVisibilityChange = null;
    }
    if (state.container) {
      state.container.__challengeHomeState = null;
      state.container.__challengeHomeInitialized = false;
      state.container.__challengeHomeUser = "";
    }
  }

  function setupRefreshHandlers(state) {
    state.onTradeCreated = () => {
      void fetchAndRender(state);
    };
    state.onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void fetchAndRender(state);
      }
    };
    document.addEventListener("crowdiq:trade-created", state.onTradeCreated);
    document.addEventListener("visibilitychange", state.onVisibilityChange);

    state.pollTimer = setInterval(() => {
      if (!state.mounted) return;
      if (isHomeScreenActive()) {
        void fetchAndRender(state);
      }
    }, POLL_MS);

    const observerTarget = state.container.parentElement;
    if (observerTarget) {
      state.removalObserver = new MutationObserver(() => {
        if (!document.body.contains(state.container)) {
          cleanupState(state);
        }
      });
      state.removalObserver.observe(observerTarget, { childList: true });
    }
  }

  function renderChallengeHomeSection(container) {
    if (!(container instanceof HTMLElement)) return;
    const userName = currentUserName();
    if (!userName) {
      container.innerHTML = "";
      container.__challengeHomeInitialized = false;
      container.__challengeHomeUser = "";
      const existingState = container.__challengeHomeState;
      if (existingState) {
        cleanupState(existingState);
      }
      return;
    }

    const existingState = container.__challengeHomeState;
    if (existingState && existingState.userName === userName && existingState.mounted) {
      return;
    }
    if (existingState) {
      cleanupState(existingState);
    }

    container.__challengeHomeInitialized = true;
    container.__challengeHomeUser = userName;
    container.innerHTML = `<section style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:14px;color:rgba(255,255,255,0.75);">Loading challenge trades...</section>`;

    const state = createState(container);
    container.__challengeHomeState = state;
    setupRefreshHandlers(state);
    void fetchAndRender(state, true);
  }

  window.renderChallengeHomeSection = renderChallengeHomeSection;
})();
