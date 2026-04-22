(function () {
  const USER_NAME_KEY = "mercatus-user-name";
  const CARD_BG = "#1A1A2E";

  function currentUserName() {
    return String(window.localStorage.getItem(USER_NAME_KEY) || "").trim();
  }

  async function fetchChallengeStatus(status) {
    const response = await fetch(`/api/challenges/status?status=${encodeURIComponent(status || "all")}`, {
      method: "GET",
      headers: {
        "X-User-Name": currentUserName()
      }
    });
    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload?.error || "Unable to load challenge status");
    }
    return {
      outbound: Array.isArray(payload?.outbound) ? payload.outbound : [],
      inbound: Array.isArray(payload?.inbound) ? payload.inbound : [],
      source: String(payload?.source || "unknown")
    };
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

  function formatResponseTimestamp(value) {
    const date = new Date(value || "");
    if (!Number.isFinite(date.getTime())) return "Recently";
    return date.toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  }

  function renderResponses(rows) {
    const entries = Array.isArray(rows) ? rows : [];
    if (!entries.length) {
      return `<div style="font-size:12px;color:rgba(255,255,255,0.72);">No responses yet.</div>`;
    }
    return entries.map((entry) => `
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start;">
        <div style="display:flex;flex-direction:column;gap:3px;">
          <span style="font-size:12px;color:#fff;">${escapeHtml(entry.responder_username || "Unknown user")} ${entry.action === "ACCEPTED" ? "accepted" : "declined"}</span>
          <span style="font-size:11px;color:rgba(255,255,255,0.62);">${escapeHtml(formatResponseTimestamp(entry.responded_at))}</span>
          ${entry.decline_note ? `<span style="font-size:11px;color:rgba(255,255,255,0.74);font-style:italic;">${escapeHtml(entry.decline_note)}</span>` : ""}
        </div>
        <span style="font-size:11px;padding:3px 7px;border-radius:999px;${entry.action === "ACCEPTED" ? "background:rgba(0,200,83,0.2);color:#7af5ad;" : "background:rgba(255,91,91,0.2);color:#ffafaf;"}">${entry.action === "ACCEPTED" ? "Accepted" : "Declined"}</span>
      </div>
    `).join("");
  }

  function renderRow(session, allowReshare) {
    return `
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
        ${renderResponses(session.responses)}
        ${allowReshare && session.session_status === "ACTIVE" ? `<button type="button" data-reshare="${escapeHtml(session.share_url || "")}" style="padding:8px 11px;border-radius:9px;border:1px solid rgba(255,255,255,0.26);background:transparent;color:#fff;">Copy link</button>` : ""}
      </article>
    `;
  }

  function renderSection(title, rows, allowReshare) {
    const list = Array.isArray(rows) ? rows : [];
    return `
      <section style="display:flex;flex-direction:column;gap:8px;">
        <h4 style="margin:0;color:#fff;font-size:14px;">${escapeHtml(title)}</h4>
        ${list.length ? list.map((entry) => renderRow(entry, allowReshare)).join("") : `<div style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:12px;color:rgba(255,255,255,0.72);">No ${escapeHtml(title.toLowerCase())} challenges.</div>`}
      </section>
    `;
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
    let outbound = [];
    let inbound = [];
    let source = "unknown";
    let loading = true;
    let feedback = "";

    async function refresh() {
      loading = true;
      feedback = "";
      paint();
      try {
        const payload = await fetchChallengeStatus(activeFilter);
        outbound = payload.outbound;
        inbound = payload.inbound;
        source = payload.source;
      } catch (error) {
        outbound = [];
        inbound = [];
        source = "unknown";
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
      const totalRows = outbound.length + inbound.length;
      container.innerHTML = `
        <section style="display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            ${filterOptions.map((item) => `<button type="button" data-challenge-filter="${item.id}" style="padding:6px 12px;border-radius:999px;border:${activeFilter === item.id ? "1px solid rgba(255,255,255,0.45)" : "1px solid rgba(255,255,255,0.2)"};background:${activeFilter === item.id ? "rgba(255,255,255,0.08)" : "transparent"};color:${activeFilter === item.id ? "#fff" : "rgba(255,255,255,0.72)"};font-size:12px;">${item.label}</button>`).join("")}
          </div>
          ${loading ? `<div style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:14px;color:rgba(255,255,255,0.78);">Loading challenge history…</div>` : ""}
          ${!loading && feedback ? `<div style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:14px;color:#ff9b9b;">${escapeHtml(feedback)}</div>` : ""}
          ${!loading && !feedback ? `<div style="font-size:11px;color:rgba(255,255,255,0.58);">Source: ${escapeHtml(source)}</div>` : ""}
          ${!loading && !feedback && !totalRows ? `<div style="background:${CARD_BG};border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:14px;color:rgba(255,255,255,0.78);">No challenge activity yet.</div>` : ""}
          ${!loading && !feedback ? renderSection("Outbound", outbound, true) : ""}
          ${!loading && !feedback ? renderSection("Inbound", inbound, false) : ""}
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
          }, 1200);
        });
      });
    }

    paint();
    void refresh();
  }

  window.renderChallengeStatus = renderChallengeStatus;
})();
