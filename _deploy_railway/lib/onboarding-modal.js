(function initCrowdIQOnboardingModal(global) {
  const SLIDES = [
    {
      title: "1. The crowd sets the projection.",
      body: "crowdIQ builds a live NRL Fantasy projection for every player from real user trading. Projections shift in real time as other traders get in on the action.",
      buttonLabel: "Next",
      hero: createProjectionHero
    },
    {
      title: "2. Pick your side.",
      body: "Choose Over or Under on any player projection and back your view. You are trading against other users.",
      buttonLabel: "Next",
      hero: createTradeHero
    },
    {
      title: "3. How to win.",
      body: "If you're right, you double your credits. If you're wrong, you lose your stake. All users start with $200 in trading credits during beta.",
      buttonLabel: "Get Started",
      hero: createResultHero
    }
  ];

  function createCrowdIQOnboardingModal(options) {
    const host = options?.host || null;
    if (!host) return null;

    const shadowRoot = host.shadowRoot || host.attachShadow({ mode: "open" });
    let activeStep = 0;
    let closeTimer = null;
    let bodyOverflowBeforeOpen = "";
    let bodyScrollLocked = false;
    let signupDraft = "";
    let signupFeedback = "";
    let signupPending = false;

    host.dataset.state = "hidden";
    host.setAttribute("aria-hidden", "true");
    renderHiddenState();

    function show(step = 0) {
      clearTimeout(closeTimer);
      activeStep = normalizeStep(step);
      signupDraft = "";
      signupFeedback = "";
      signupPending = false;
      lockBodyScroll();
      render();
      host.dataset.state = "mounted";
      host.setAttribute("aria-hidden", "false");
      global.requestAnimationFrame(() => {
        if (host.dataset.state === "mounted") {
          host.dataset.state = "visible";
        }
      });
    }

    function hide() {
      clearTimeout(closeTimer);
      if (host.dataset.state === "hidden") {
        renderHiddenState();
        return;
      }
      host.dataset.state = "closing";
      closeTimer = global.setTimeout(() => {
        renderHiddenState();
      }, 300);
    }

    function render() {
      shadowRoot.innerHTML = `
        <style>${getOnboardingStyles()}</style>
        <div class="pm-overlay" aria-hidden="true"></div>
        <section class="pm-modal" role="dialog" aria-modal="true" aria-labelledby="pm-title">
          ${activeStep === "signup" ? createSignupMarkup() : createSlideMarkup(SLIDES[activeStep], activeStep)}
        </section>
      `;
      bindEvents();
    }

    function bindEvents() {
      shadowRoot.querySelector("[data-action='skip']")?.addEventListener("click", () => {
        options?.onSkip?.();
      });

      shadowRoot.querySelector("[data-action='back']")?.addEventListener("click", () => {
        if (typeof activeStep !== "number" || activeStep <= 0) return;
        activeStep -= 1;
        render();
      });

      shadowRoot.querySelector("[data-action='advance']")?.addEventListener("click", () => {
        if (typeof activeStep !== "number") return;
        if (activeStep >= SLIDES.length - 1) {
          activeStep = "signup";
          signupFeedback = "";
          render();
          shadowRoot.querySelector("[data-signup-input]")?.focus();
          return;
        }
        activeStep += 1;
        render();
      });

      const signupInput = shadowRoot.querySelector("[data-signup-input]");
      signupInput?.addEventListener("input", (event) => {
        signupDraft = event.currentTarget.value;
        if (signupFeedback) {
          signupFeedback = "";
          const feedbackNode = shadowRoot.querySelector("[data-signup-feedback]");
          if (feedbackNode) feedbackNode.textContent = "";
        }
      });

      shadowRoot.querySelector("[data-signup-form]")?.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (signupPending) return;
        const userName = String(signupInput?.value || signupDraft || "").trim();
        if (!userName) {
          signupFeedback = "Enter a username to continue.";
          render();
          shadowRoot.querySelector("[data-signup-input]")?.focus();
          return;
        }
        signupPending = true;
        signupFeedback = "";
        render();
        const nextInput = shadowRoot.querySelector("[data-signup-input]");
        if (nextInput) nextInput.value = userName;
        const result = await options?.onComplete?.(userName);
        signupPending = false;
        if (result && result.ok === false) {
          signupFeedback = result.message || "Something went wrong.";
          render();
          const retryInput = shadowRoot.querySelector("[data-signup-input]");
          if (retryInput) {
            retryInput.value = userName;
            retryInput.focus();
            retryInput.select();
          }
          return;
        }
      });

      shadowRoot.querySelector("[data-action='login']")?.addEventListener("click", () => {
        options?.onLogin?.();
      });
    }

    function createSlideMarkup(slide, index) {
      const isFirstSlide = index === 0;
      return `
        <header class="pm-topbar">
          <span class="pm-kicker">HOW IT WORKS</span>
          <button class="pm-skip" type="button" data-action="skip">Skip</button>
        </header>
        <div class="pm-copy">
          <h2 class="pm-title" id="pm-title">${slide.title}</h2>
          <p class="pm-body">${slide.body}</p>
        </div>
        <div class="pm-hero-card">
          ${slide.hero()}
        </div>
        <div class="pm-pagination" aria-label="Onboarding progress">
          ${SLIDES.map((_, dotIndex) => `<span class="pm-dot ${dotIndex === index ? "is-active" : ""}" aria-hidden="true"></span>`).join("")}
        </div>
        <div class="pm-actions ${isFirstSlide ? "is-single" : ""}">
          ${isFirstSlide ? "" : `<button class="pm-button pm-button-secondary" type="button" data-action="back">Back</button>`}
          <button class="pm-button pm-button-primary" type="button" data-action="advance">${slide.buttonLabel}</button>
        </div>
      `;
    }

    function createSignupMarkup() {
      return `
        <div class="pm-signup-shell">
          <h2 class="pm-title" id="pm-title">Create your account.</h2>
          <p class="pm-body pm-signup-copy">Pick a username to get started. No email required.</p>
          <form class="pm-signup-form" data-signup-form>
            <input
              class="pm-signup-input"
              data-signup-input
              type="text"
              maxlength="24"
              placeholder="Enter a username"
              value="${escapeHtml(signupDraft)}"
              autocomplete="username"
            >
            <button class="pm-button pm-button-primary pm-signup-submit" type="submit" ${signupPending ? "disabled" : ""}>
              ${signupPending ? "Getting Started..." : "Get Started"}
            </button>
            <p class="pm-signup-feedback" data-signup-feedback>${escapeHtml(signupFeedback)}</p>
          </form>
          <button class="pm-login-link" type="button" data-action="login">Already have an account? <span>Log in</span></button>
        </div>
      `;
    }

    function renderHiddenState() {
      unlockBodyScroll();
      shadowRoot.innerHTML = `<style>${getOnboardingStyles()}</style>`;
      host.dataset.state = "hidden";
      host.setAttribute("aria-hidden", "true");
    }

    function lockBodyScroll() {
      if (bodyScrollLocked) return;
      bodyOverflowBeforeOpen = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      bodyScrollLocked = true;
    }

    function unlockBodyScroll() {
      if (!bodyScrollLocked) return;
      document.body.style.overflow = bodyOverflowBeforeOpen;
      bodyScrollLocked = false;
    }

    function normalizeStep(step) {
      if (step === "signup") return "signup";
      if (!Number.isFinite(step)) return 0;
      return Math.max(0, Math.min(Number(step), SLIDES.length - 1));
    }

    return {
      show,
      hide
    };
  }

  function createProjectionHero() {
    return `
      <div class="pm-market-card">
        <div class="pm-market-head">
          <div class="pm-market-copy">
            <span class="pm-live-label">LIVE MARKET</span>
            <strong class="pm-player-name">Nathan Cleary</strong>
            <span class="pm-player-meta">Panthers · Halfback</span>
          </div>
          <span class="pm-projection-pill">↑ 58.7</span>
        </div>
        <div class="pm-market-metric">
          <span class="pm-metric-label">PROJECTION</span>
          <strong class="pm-metric-value">58.5</strong>
        </div>
      </div>
    `;
  }

  function createTradeHero() {
    return `
      <div class="pm-trade-stack">
        <article class="pm-trade-ticket pm-trade-ticket-over">
          <span class="pm-trade-label">Pick</span>
          <strong class="pm-trade-title">OVER 58.5</strong>
          <button class="pm-ticket-button pm-ticket-button-over" type="button" tabindex="-1">Over 58.5</button>
        </article>
        <article class="pm-trade-ticket pm-trade-ticket-under">
          <span class="pm-trade-label">Pick</span>
          <strong class="pm-trade-title">UNDER 58.5</strong>
          <button class="pm-ticket-button pm-ticket-button-under" type="button" tabindex="-1">Under 58.5</button>
        </article>
      </div>
    `;
  }

  function createResultHero() {
    return `
      <div class="pm-result-card">
        <span class="pm-metric-label">RESULT</span>
        <div class="pm-result-row pm-result-row-win">
          <span>OVER ✓</span>
          <strong>+$10.00</strong>
        </div>
        <div class="pm-result-row pm-result-row-loss">
          <span>UNDER ✗</span>
          <strong>-$5.00</strong>
        </div>
      </div>
    `;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getOnboardingStyles() {
    return `
      :host {
        position: fixed;
        inset: 0;
        z-index: 2100;
        display: none;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      :host([data-state="mounted"]),
      :host([data-state="visible"]),
      :host([data-state="closing"]) {
        display: block;
      }

      * {
        box-sizing: border-box;
      }

      button,
      input {
        font: inherit;
      }

      .pm-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        opacity: 0;
        transition: opacity 300ms ease-out;
      }

      .pm-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        width: calc(100% - 48px);
        max-width: 420px;
        padding: 24px;
        border-radius: 20px;
        background: #1A1A2E;
        color: #ffffff;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.95);
        transition: opacity 300ms ease-out, transform 300ms ease-out;
        box-shadow: 0 28px 80px rgba(0, 0, 0, 0.5);
      }

      :host([data-state="visible"]) .pm-overlay {
        opacity: 1;
      }

      :host([data-state="visible"]) .pm-modal {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }

      :host([data-state="closing"]) .pm-overlay {
        opacity: 0;
      }

      :host([data-state="closing"]) .pm-modal {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.95);
      }

      .pm-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 18px;
      }

      .pm-kicker {
        color: #888888;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .pm-skip {
        appearance: none;
        border: 0;
        background: transparent;
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
        padding: 0;
        cursor: pointer;
      }

      .pm-copy {
        display: grid;
        gap: 16px;
      }

      .pm-title {
        margin: 0;
        color: #ffffff;
        font-size: 28px;
        line-height: 1.14;
        font-weight: 800;
        text-align: left;
        letter-spacing: -0.03em;
      }

      .pm-body {
        margin: 0;
        color: rgba(255, 255, 255, 0.85);
        font-size: 15px;
        line-height: 1.6;
        text-align: left;
      }

      .pm-hero-card {
        margin-top: 24px;
        margin-bottom: 22px;
        padding: 16px;
        border-radius: 16px;
        background: #0D0D1A;
        border: 1px solid rgba(255, 255, 255, 0.05);
        overflow: hidden;
      }

      .pm-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-bottom: 22px;
      }

      .pm-dot {
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.3);
      }

      .pm-dot.is-active {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #ffffff;
      }

      .pm-actions {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 12px;
      }

      .pm-actions.is-single {
        grid-template-columns: minmax(0, 1fr);
      }

      .pm-button {
        appearance: none;
        border: 0;
        border-radius: 12px;
        min-height: 52px;
        padding: 0 18px;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
      }

      .pm-button:disabled {
        cursor: wait;
        opacity: 0.8;
      }

      .pm-button-secondary {
        background: #2A2A3E;
        color: #ffffff;
      }

      .pm-button-primary {
        background: linear-gradient(90deg, #00C853 0%, #C8F400 100%);
        color: #0D0D1A;
      }

      .pm-market-card {
        display: grid;
        gap: 18px;
      }

      .pm-market-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }

      .pm-market-copy {
        display: grid;
        gap: 6px;
      }

      .pm-live-label {
        color: #00C853;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .pm-player-name {
        color: #ffffff;
        font-size: 18px;
        font-weight: 800;
        line-height: 1.15;
      }

      .pm-player-meta {
        color: rgba(255, 255, 255, 0.56);
        font-size: 12px;
      }

      .pm-projection-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 34px;
        padding: 0 12px;
        border-radius: 999px;
        background: rgba(0, 200, 83, 0.18);
        color: #00C853;
        font-size: 14px;
        font-weight: 800;
        white-space: nowrap;
      }

      .pm-market-metric {
        display: grid;
        gap: 8px;
        padding: 14px 14px 12px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }

      .pm-metric-label {
        color: rgba(255, 255, 255, 0.5);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .pm-metric-value {
        color: #ffffff;
        font-size: 32px;
        line-height: 1;
        font-weight: 800;
        letter-spacing: -0.05em;
      }

      .pm-trade-stack {
        position: relative;
        height: 148px;
      }

      .pm-trade-ticket {
        position: absolute;
        top: 18px;
        width: 178px;
        padding: 14px;
        border-radius: 16px;
        box-shadow: 0 18px 30px rgba(0, 0, 0, 0.28);
      }

      .pm-trade-ticket-over {
        left: 14px;
        z-index: 2;
        background: #f5f6fa;
        color: #0D0D1A;
        transform: rotate(-7deg);
      }

      .pm-trade-ticket-under {
        right: 10px;
        top: 10px;
        background: #f5f6fa;
        color: #0D0D1A;
        transform: rotate(8deg);
      }

      .pm-trade-label {
        display: block;
        margin-bottom: 8px;
        color: rgba(13, 13, 26, 0.42);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .pm-trade-title {
        display: block;
        margin-bottom: 18px;
        font-size: 22px;
        line-height: 1;
        font-weight: 800;
        letter-spacing: -0.04em;
      }

      .pm-ticket-button {
        width: 100%;
        min-height: 40px;
        border: 0;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 800;
      }

      .pm-ticket-button-over {
        background: linear-gradient(90deg, #2ed47a 0%, #40d77c 100%);
        color: #ffffff;
      }

      .pm-ticket-button-under {
        background: rgba(255, 77, 77, 0.16);
        color: #ff6b6b;
      }

      .pm-result-card {
        display: grid;
        gap: 12px;
      }

      .pm-result-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 48px;
        padding: 0 14px;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 700;
      }

      .pm-result-row-win {
        background: rgba(0, 200, 83, 0.12);
        color: #59e28f;
      }

      .pm-result-row-loss {
        background: rgba(255, 77, 77, 0.12);
        color: #ff7d7d;
      }

      .pm-signup-shell {
        display: grid;
        gap: 18px;
      }

      .pm-signup-copy {
        margin-top: -2px;
      }

      .pm-signup-form {
        display: grid;
        gap: 14px;
      }

      .pm-signup-input {
        width: 100%;
        min-height: 52px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: #0D0D1A;
        color: #ffffff;
        padding: 0 16px;
        font-size: 16px;
        outline: none;
      }

      .pm-signup-input::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }

      .pm-signup-input:focus {
        border-color: rgba(200, 244, 0, 0.64);
        box-shadow: 0 0 0 3px rgba(200, 244, 0, 0.12);
      }

      .pm-signup-submit {
        width: 100%;
      }

      .pm-signup-feedback {
        min-height: 18px;
        margin: 0;
        color: #ff8b8b;
        font-size: 13px;
        line-height: 1.4;
        text-align: left;
      }

      .pm-login-link {
        appearance: none;
        border: 0;
        background: transparent;
        padding: 0;
        color: rgba(255, 255, 255, 0.46);
        font-size: 13px;
        text-align: center;
        cursor: pointer;
      }

      .pm-login-link span {
        color: rgba(255, 255, 255, 0.82);
      }

      @media (max-width: 520px) {
        .pm-modal {
          padding: 22px 20px;
        }

        .pm-title {
          font-size: 25px;
        }

        .pm-trade-stack {
          height: 138px;
        }

        .pm-trade-ticket {
          width: 160px;
        }
      }
    `;
  }

  global.createCrowdIQOnboardingModal = createCrowdIQOnboardingModal;
})(window);
