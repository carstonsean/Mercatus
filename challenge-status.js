(function () {
  const USER_NAME_KEY = "mercatus-user-name";
  const CARD_BG = "#1A1A2E";

  function currentUserName() {
    return String(window.localStorage.getItem(USER_NAME_KEY) || "").trim();
  }

  async function fetchOutbound(status) {
    const response = await fetch(`/api/challenges/outbound?status=${encodeURIComponent(status || "all")}`, {
      method: "GET",
      headers: {
        "X-User-Name": currentUserName()
      }
    });
    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload?.error || "Unable to load challenge status");
    }
    return Array.isArray(payload) ? payload : [];
  }

  async function copyToClipboard(text) {
    if (!text) return;
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const input = document.createElement("input");
    input.value = text;
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function positionBadgeStyle(position) {
    const value = String(position || "").toLowerCase();
    if (["halfback", "five-eighth", "hooker"].includes(value)) {
      return "background:rgba(104,217,255,0.2);color:#68d9ff;border:1px solid rgba(104,217,255,0.5);";
    }
    if (["fullback", "winger", "centre"].includes(value)) {
      return "background:rgba(100,255,170,0.2);color:#71f5b0;border:1px solid rgba(113,245,176,0.5);";
    }
    return "background:rgba(255,215,0,0.18);color:#FFD700;border:1px solid rgba(255,215,0,0.45);";
  }

  function statusChipStyle(status) {
    if (status === "COMPLETED") {
      return "background:rgba(0,200,83,0.2);color:#7af5ad;border:1px solid rgba(0,200,83,0.45);";
    }
    if (status === "EXPIRED") {
      return "background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.8);border:1px solid rgba(255,255,255,0.22);";
    }
    return "background:rgba(255,176,0,0.18);color:#ffcf69;border:1px solid rgba(255,176,0,0.4);";
  }

  function statusChipLabel(status) {
    if (status === "COMPLETED") return "Matched";
    if (status === "EXPIRED") return "Expired";
    return "Open";
  }

  function displayStateLabel(session) {
    const responses = Array.isArray(session.responses) ? session.responses : [];
    if (session.session_status === "COMPLETED") return "Matched";
    if (session.session_status === "EXPIRED") return "Expired at kickoff";
    if (!responses.length) return "Waiting";
    const declinedCount = responses.filter((entry) => entry.action === "DECLINED").length;
    if (declinedCount > 0) {
      return `Still open · ${declinedCount} declined`;
    }
    return "Waiting";
  }

  function hoursLeftLabel(expiresAt) {
    const expiresMs = Number(new Date(expiresAt || "").getTime());
    if (!Number.isFinite(expiresMs)) return "soon";
    const remaining = Math.max(0, Math.ceil((expiresMs - Date.now()) / 3600000));
    return `${remaining}h left`;
  }

  function initialsFromName(userName) {
    const name = String(userName || "").trim();
    if (!name) return "?";
    const parts = name.split(/\s+/).filter(Boolean);
    return (parts[0]?.[0] || "?") + (parts[1]?.[0] || "");
  }

  function formatResponseTimestamp(value) {
    const date = new Date(value || "");
    if (!Number.isFinite(date.getTime())) return "Recently";
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    const timeLabel = date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).toLowerCase();
    if (target === today) return `Today ${timeLabel}`;
    if (target === today - 86400000) return `Yesterday ${timeLabel}`;
    return `${date.toLocaleDateString([], { month: "short", day: "numeric" })} ${timeLabel}`;
  }

  function renderChallengeStatus(container) {
    if (!(container instanceof HTMLElement)) return;
    const userName = currentUserName();
    if (!userName) {
      container.innerHTML = "";
      container.__challengeStatusInitialized = false;
      container.__challengeStatusUser = "";
      return;
    }
    if (container.__challengeStatusInitialized && container.__challengeStatusUser === userName) {
      return;
    }
    container.__challengeStatusInitialized = true;
    container.__challengeStatusUser = userName;

    let activeFilter = "all";
    let rows = [];
    let loading = true;
    let feedback = "";

    async function refresh() {
      loading = true;
      feedback = "";
      paint();
      try {
        rows = await fetchOutbound(activeFilter);
      } catch (error) {
        rows = [];
        feedback = error.message || "Unable to load challenges";
      } finally {
        loading = false;
        paint();
      }
    }

    function paint() {
      const filterOptions = [
        { id: "all", label: "All" },
        { id: "open", label: "Open" },
        { id: "matched", label: "Matched" },
        { id: "expired", label: "Expired" }
      ];

      container.innerHTML = `
        <section style="display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            ${filterOptions.map((item) => `<button type="button" data-challenge-filter="${item.id}" style="padding:6px 12px;border-radius:999px;border:${activeFilter === item.id ? "1px solid rgba(255,255,255,0.45)" : "1px solid rgba(255,255,255,0.2)"};background:${activeFilter === item.id ? "rgba(255,255,255,0.08)" : "transparent"};color:${activeFilter === item.id ? "#fff" : "rgba(255,255,255,0.72)"};font-size:12px;">${item.label}</button>`).join("")}
          </div>
          ${loading ? `<div style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:14px;color:rgba(255,255,255,0.78);">Loading challenge history…</div>` : ""}
          ${!loading && feedback ? `<div style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:14px;color:#ff9b9b;">${escapeHtml(feedback)}</div>` : ""}
          ${!loading && !feedback && !rows.length ? `<div style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:14px;color:rgba(255,255,255,0.78);">You haven't challenged anyone yet — share a link from the Challenge Friends section on your home screen.</div>` : ""}
          ${!loading && !feedback ? rows.map((session) => `
            <article style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;">
                <div style="display:flex;flex-direction:column;gap:5px;">
                  <span style="width:max-content;font-size:11px;padding:3px 8px;border-radius:999px;font-weight:700;${positionBadgeStyle(session.position)}">${escapeHtml(session.position || "Position")}</span>
                  <strong style="color:#fff;">${escapeHtml(session.player_name || "Unknown player")}</strong>
                  <span style="font-size:12px;color:rgba(255,255,255,0.75);">${escapeHtml(session.side === "OVER" ? "Over" : "Under")} ${Number(session.line || 0).toFixed(1)} · ${new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number(session.stake) || 0)}</span>
                </div>
                <span style="font-size:11px;padding:4px 8px;border-radius:999px;font-weight:700;${statusChipStyle(session.session_status)}">${statusChipLabel(session.session_status)}</span>
              </div>
              <div style="height:1px;background:rgba(255,255,255,0.1);"></div>
              <div style="font-size:12px;color:rgba(255,255,255,0.72);">${escapeHtml(displayStateLabel(session))}</div>
              ${(Array.isArray(session.responses) && session.responses.length)
                ? session.responses.map((entry) => `
                  <div style="display:flex;flex-direction:column;gap:6px;">
                    <div style="display:grid;grid-template-columns:30px 1fr auto;gap:8px;align-items:center;">
                      <div style="width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.14);display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;">${escapeHtml(initialsFromName(entry.responder_username))}</div>
                      <div>
                        <div style="font-size:13px;color:#fff;">${escapeHtml(entry.responder_username || "Someone")} <span style="color:rgba(255,255,255,0.66);">${entry.action === "ACCEPTED" ? "accepted" : "declined"}</span></div>
                        <div style="font-size:11px;color:rgba(255,255,255,0.58);">${escapeHtml(formatResponseTimestamp(entry.responded_at))}</div>
                      </div>
                      <span style="width:9px;height:9px;border-radius:50%;background:${entry.action === "ACCEPTED" ? "#00C853" : "rgba(255,91,91,0.5)"};display:inline-block;"></span>
                    </div>
                    ${entry.action === "DECLINED" && entry.decline_note ? `<div style="margin-left:38px;padding:6px 8px;border-left:2px solid rgba(255,91,91,0.7);background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.78);font-size:11px;font-style:italic;">${escapeHtml(entry.decline_note)}</div>` : ""}
                  </div>
                `).join("")
                : `<div style="display:flex;align-items:center;gap:8px;font-size:12px;color:rgba(255,255,255,0.72);"><span style="width:8px;height:8px;border-radius:50%;background:rgba(255,176,0,0.9);display:inline-block;animation:challengePulse 1.2s infinite;"></span><span>Waiting for someone to accept · ${escapeHtml(hoursLeftLabel(session.expires_at))}</span></div>`}
              ${session.session_status === "ACTIVE" ? `<button type="button" data-reshare="${escapeHtml(session.share_url || "")}" style="padding:8px 11px;border-radius:9px;border:1px solid rgba(255,255,255,0.26);background:transparent;color:#fff;">Reshare link</button>` : ""}
            </article>
          `).join("") : ""}
          <style>@keyframes challengePulse {0% {opacity:0.3;} 50% {opacity:1;} 100% {opacity:0.3;}}</style>
        </section>
      `;

      container.querySelectorAll("[data-challenge-filter]").forEach((button) => {
        button.addEventListener("click", () => {
          const next = String(button.getAttribute("data-challenge-filter") || "all");
          if (activeFilter === next) return;
          activeFilter = next;
          void refresh();
        });
      });

      container.querySelectorAll("[data-reshare]").forEach((button) => {
        button.addEventListener("click", async () => {
          const url = String(button.getAttribute("data-reshare") || "");
          if (!url) return;
          await copyToClipboard(url);
          const original = button.textContent;
          button.textContent = "Link copied";
          window.setTimeout(() => {
            button.textContent = original;
          }, 1400);
        });
      });
    }

    paint();
    void refresh();
  }

  window.renderChallengeStatus = renderChallengeStatus;
})();

