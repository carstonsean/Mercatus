(function initCrowdIQOnboardingModal(global) {
  const SLIDES = [
    {
      title: "The crowd sets the projection.",
      body: [
        "crowdIQ builds a live NRL Fantasy projection for every player from real user trading.",
        "You are trading against other users."
      ],
      variant: "crowd-sets",
      buttonLabel: "Next",
      preview: createCrowdLinePreview
    },
    {
      title: "Pick your side.",
      body: [
        "Choose Over or Under on any player projection and back your view.",
        "If you're right, you double your credits. If not, you lose your stake.",
        "As more users back one side, the projection moves with the crowd."
      ],
      variant: "pick-side",
      buttonLabel: "Next",
      preview: createBackYourViewPreview
    },
    {
      title: "Market Confidence.",
      body: [
        "The more users that trade on a player, the higher the Market Confidence, making it a stronger indicator of actual performance."
      ],
      note: "All users start with $200 in trading credits while crowdIQ is in beta.",
      variant: "market-confidence",
      buttonLabel: "Start Trading",
      preview: createMarketConfidencePreview
    }
  ];

  function createCrowdIQOnboardingModal(options) {
    const host = options?.host || null;
    if (!host) return null;

    host.removeAttribute("class");
    host.dataset.state = "hidden";
    host.setAttribute("aria-hidden", "true");

    const shadowRoot = host.shadowRoot || host.attachShadow({ mode: "open" });
    let activeSlideIndex = 0;
    let closeTimer = null;
    let touchStartX = null;
    let touchDeltaX = 0;
    let bodyOverflowBeforeOpen = "";
    let bodyScrollLocked = false;

    renderHiddenState();

    function show(slideIndex = 0) {
      clearTimeout(closeTimer);
      activeSlideIndex = clampSlideIndex(slideIndex);
      lockBodyScroll();
      renderModal();
      host.dataset.state = "mounted";
      host.setAttribute("aria-hidden", "false");
      global.requestAnimationFrame(() => {
        if (host.dataset.state !== "closing") {
          host.dataset.state = "visible";
        }
      });
    }

    function update(slideIndex = 0) {
      activeSlideIndex = clampSlideIndex(slideIndex);
      if (host.dataset.state === "hidden") {
        show(activeSlideIndex);
        return;
      }
      lockBodyScroll();
      renderModal();
      host.dataset.state = "visible";
      host.setAttribute("aria-hidden", "false");
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
      }, 240);
    }

    function getSlideCount() {
      return SLIDES.length;
    }

    function renderModal() {
      const slide = SLIDES[activeSlideIndex];
      shadowRoot.innerHTML = `
        <style>${getOnboardingStyles()}</style>
        <div class="oq-shell">
          <section class="oq-panel" role="dialog" aria-modal="true" aria-labelledby="oq-title-${activeSlideIndex}">
            <header class="oq-header">
              <span class="oq-kicker">How it works</span>
              <button class="oq-skip ${activeSlideIndex === SLIDES.length - 1 ? "is-hidden" : ""}" type="button" data-action="skip">Skip</button>
            </header>
            <div class="oq-viewport" aria-live="polite">
              <div class="oq-track" data-track style="transform: translate3d(-${activeSlideIndex * 100}%, 0, 0);">
                ${SLIDES.map((entry, index) => createSlideMarkup(entry, index, activeSlideIndex)).join("")}
              </div>
            </div>
            <footer class="oq-footer">
              <div class="oq-progress" aria-label="Onboarding progress">
                ${SLIDES.map((_, index) => `<span class="oq-dot ${index === activeSlideIndex ? "is-active" : ""}" aria-hidden="true"></span>`).join("")}
              </div>
              <div class="oq-actions">
                <button class="oq-back ${activeSlideIndex === 0 ? "is-inactive" : ""}" type="button" data-action="back" ${activeSlideIndex === 0 ? 'tabindex="-1" aria-hidden="true"' : ""}>Back</button>
                <button class="oq-advance" type="button" data-action="advance">${slide.buttonLabel}</button>
              </div>
            </footer>
          </section>
        </div>
      `;
      bindEvents();
    }

    function bindEvents() {
      shadowRoot.querySelector('[data-action="skip"]')?.addEventListener("click", () => {
        options?.onSkip?.();
      });
      shadowRoot.querySelector('[data-action="back"]')?.addEventListener("click", () => {
        if (activeSlideIndex === 0) return;
        options?.onBack?.();
      });
      shadowRoot.querySelector('[data-action="advance"]')?.addEventListener("click", () => {
        if (activeSlideIndex >= SLIDES.length - 1) {
          options?.onComplete?.();
          return;
        }
        options?.onAdvance?.();
      });

      const track = shadowRoot.querySelector("[data-track]");
      if (!track) return;
      track.addEventListener("touchstart", handleTouchStart, { passive: true });
      track.addEventListener("touchmove", handleTouchMove, { passive: true });
      track.addEventListener("touchend", handleTouchEnd);
      track.addEventListener("touchcancel", resetTouchState);
    }

    function handleTouchStart(event) {
      touchStartX = event.touches?.[0]?.clientX ?? null;
      touchDeltaX = 0;
      const track = event.currentTarget;
      if (track) {
        track.style.transition = "none";
      }
    }

    function handleTouchMove(event) {
      if (touchStartX === null) return;
      const currentX = event.touches?.[0]?.clientX;
      if (!Number.isFinite(currentX)) return;
      touchDeltaX = currentX - touchStartX;
      const track = event.currentTarget;
      if (!track) return;
      const slideWidth = track.parentElement?.getBoundingClientRect().width || track.getBoundingClientRect().width;
      const baseOffset = -activeSlideIndex * slideWidth;
      track.style.transform = `translate3d(${baseOffset + touchDeltaX}px, 0, 0)`;
    }

    function handleTouchEnd() {
      const swipeThreshold = 48;
      if (touchDeltaX <= -swipeThreshold && activeSlideIndex < SLIDES.length - 1) {
        touchStartX = null;
        touchDeltaX = 0;
        options?.onRequestSlide?.(activeSlideIndex + 1);
      } else if (touchDeltaX >= swipeThreshold && activeSlideIndex > 0) {
        touchStartX = null;
        touchDeltaX = 0;
        options?.onRequestSlide?.(activeSlideIndex - 1);
      } else {
        resetTouchState();
      }
    }

    function resetTouchState() {
      touchStartX = null;
      touchDeltaX = 0;
      const track = shadowRoot.querySelector("[data-track]");
      if (!track) return;
      track.style.transition = "transform 240ms ease";
      track.style.transform = `translate3d(-${activeSlideIndex * 100}%, 0, 0)`;
    }

    function renderHiddenState() {
      unlockBodyScroll();
      touchStartX = null;
      touchDeltaX = 0;
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

    function clampSlideIndex(index) {
      return Math.max(0, Math.min(index, SLIDES.length - 1));
    }

    return {
      show,
      update,
      hide,
      getSlideCount
    };
  }

  function createSlideMarkup(slide, index, activeSlideIndex) {
    const bodyHtml = Array.isArray(slide.body)
      ? slide.body.map((line) => `<span class="oq-body-line">${line}</span>`).join("")
      : `<span class="oq-body-line">${String(slide.body || "")}</span>`;
    const noteHtml = slide.note ? `<span class="oq-body-note">${slide.note}</span>` : "";
    const slideClassName = slide.variant ? ` oq-slide--${slide.variant}` : "";
    return `
      <article class="oq-slide${slideClassName}" aria-hidden="${index === activeSlideIndex ? "false" : "true"}">
        <div class="oq-slide-inner">
          <h2 class="oq-title" id="oq-title-${index}">${slide.title}</h2>
          <div class="oq-body">${bodyHtml}${noteHtml}</div>
          <div class="oq-preview-frame">
            <div class="oq-preview-scale">
              ${slide.preview()}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function createCrowdLinePreview() {
    return `
      <div class="oq-preview-card oq-preview-line-card">
        <div class="oq-preview-line-card-head">
          <div class="oq-preview-stack">
            <span class="oq-preview-label">Live market</span>
            <strong class="oq-preview-player">Nathan Cleary</strong>
            <span class="oq-preview-meta">Panthers | Halfback</span>
          </div>
          <div class="oq-preview-line-badge">
            <span class="oq-preview-line-arrow" aria-hidden="true">↗</span>
            <span class="oq-preview-line-tick">58.7</span>
          </div>
        </div>
        <div class="oq-preview-line-card-body">
          <div class="oq-preview-line-primary">
            <span class="oq-preview-label">Projection</span>
            <strong class="oq-preview-line-value">58.5</strong>
          </div>
          <div class="oq-preview-line-spark" aria-hidden="true">
            <div class="oq-preview-line-spark-grid"></div>
            <svg viewBox="0 0 240 76">
              <path class="oq-preview-line-spark-path" d="M12 60 C42 58, 66 56, 94 48 S142 28, 176 30 S208 18, 228 12"></path>
            </svg>
            <span class="oq-preview-line-spark-start">56.0</span>
            <span class="oq-preview-line-spark-end">58.5</span>
          </div>
          <span class="oq-preview-line-note">Projection moving with market activity</span>
        </div>
      </div>
    `;
  }

  function createBackYourViewPreview() {
    return `
      <div class="oq-preview-card oq-preview-ticket-card">
        <div class="oq-preview-ticket-head">
          <div class="oq-preview-stack">
            <span class="oq-preview-label">Projection market</span>
            <strong class="oq-preview-player">58.5</strong>
            <span class="oq-preview-meta">Choose your side</span>
          </div>
          <span class="oq-preview-ticket-move">58.5 → 59.0</span>
        </div>
        <div class="oq-preview-choice-grid">
          <div class="oq-preview-choice is-over is-active">
            <span class="oq-preview-choice-label">Over</span>
            <strong>58.5</strong>
          </div>
          <div class="oq-preview-choice is-under">
            <span class="oq-preview-choice-label">Under</span>
            <strong>58.5</strong>
          </div>
        </div>
        <div class="oq-preview-ticket-foot">
          <span class="oq-preview-ticket-pill">Trading against other users</span>
        </div>
      </div>
    `;
  }

  function createMarketConfidencePreview() {
    return `
      <div class="oq-preview-card oq-preview-confidence-card">
        <div class="oq-preview-confidence-top">
          <div class="oq-preview-stack">
            <span class="oq-preview-label">Confidence</span>
            <strong class="oq-preview-player">Confidence: 72%</strong>
            <span class="oq-preview-meta">High confidence</span>
          </div>
          <span class="oq-preview-confidence-badge">High</span>
        </div>
        <div class="oq-preview-confidence-body">
          <div class="oq-preview-confidence-meter">
            <div class="oq-preview-confidence-bar">
              <span></span>
            </div>
            <div class="oq-preview-confidence-scale" aria-hidden="true">
              <span class="is-low">Low</span>
              <span class="is-medium">Medium</span>
              <span class="is-high">High</span>
            </div>
          </div>
          <div class="oq-preview-confidence-dial">
            <svg viewBox="0 0 180 110" aria-hidden="true">
              <path class="oq-preview-gauge-base" d="M20 90 A70 70 0 0 1 160 90"></path>
              <path class="oq-preview-gauge-fill" d="M20 90 A70 70 0 0 1 160 90" pathLength="100" stroke-dasharray="72 100"></path>
            </svg>
            <div class="oq-preview-gauge-value">
              <strong>72%</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function getOnboardingStyles() {
    return `
      :host {
        position: fixed;
        inset: 0;
        z-index: 1900;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 18px 18px calc(18px + env(safe-area-inset-bottom, 0px));
        background: rgba(4, 7, 11, 0.82);
        opacity: 0;
        transition: opacity 240ms ease;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      :host([data-state="mounted"]),
      :host([data-state="visible"]),
      :host([data-state="closing"]) {
        display: flex;
      }

      :host([data-state="visible"]) {
        opacity: 1;
      }

      :host([data-state="closing"]) {
        opacity: 0;
      }

      * {
        box-sizing: border-box;
      }

      .oq-shell {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .oq-panel {
        width: min(100%, 358px);
        height: min(calc(100dvh - 36px), 488px);
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        gap: 15px;
        padding: 16px;
        border-radius: 26px;
        background:
          radial-gradient(circle at top left, rgba(93, 178, 255, 0.15), transparent 34%),
          linear-gradient(180deg, #121824 0%, #0c1119 100%);
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 24px 72px rgba(0, 0, 0, 0.46);
        transform: translateY(18px) scale(0.985);
        transition: transform 260ms ease;
      }

      :host([data-state="visible"]) .oq-panel {
        transform: translateY(0) scale(1);
      }

      :host([data-state="closing"]) .oq-panel {
        transform: translateY(18px) scale(0.985);
      }

      .oq-header {
        min-height: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .oq-kicker {
        color: rgba(255, 255, 255, 0.68);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .oq-skip,
      .oq-back,
      .oq-advance {
        appearance: none;
        border: 0;
        font: inherit;
        cursor: pointer;
      }

      .oq-skip {
        padding: 0;
        background: transparent;
        color: rgba(255, 255, 255, 0.74);
        font-size: 14px;
        font-weight: 700;
      }

      .oq-skip.is-hidden {
        visibility: hidden;
        pointer-events: none;
      }

      .oq-viewport {
        min-height: 0;
        overflow: hidden;
      }

      .oq-track {
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 240ms ease;
        will-change: transform;
      }

      .oq-slide {
        flex: 0 0 100%;
        min-width: 100%;
        min-height: 100%;
        padding: 0 2px;
      }

      .oq-slide-inner {
        width: min(100%, 288px);
        height: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-rows: 58px 126px 156px;
        gap: 12px;
        align-content: start;
      }

      .oq-title {
        margin: 0;
        color: #f7fafc;
        font-size: 25px;
        line-height: 1.06;
        font-weight: 800;
        letter-spacing: -0.04em;
        text-align: left;
        text-wrap: balance;
      }

      .oq-body {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 0;
        padding-top: 16px;
        padding-bottom: 16px;
        color: rgba(235, 242, 250, 0.84);
        font-size: 14px;
        line-height: 1.45;
        font-weight: 500;
        text-align: left;
        overflow: hidden;
      }

      .oq-body-line {
        display: block;
      }

      .oq-body-note {
        display: block;
        margin-top: 4px;
        color: rgba(235, 242, 250, 0.84);
        font-size: 14px;
        line-height: 1.45;
        font-weight: 500;
      }

      .oq-preview-frame {
        position: relative;
        height: 156px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015)),
          linear-gradient(135deg, rgba(65, 215, 184, 0.05), rgba(71, 131, 255, 0.04));
        overflow: hidden;
        display: grid;
        align-items: stretch;
        justify-items: stretch;
      }

      .oq-preview-frame::after {
        content: "";
        position: absolute;
        inset: auto auto -28px -18px;
        width: 120px;
        height: 120px;
        border-radius: 999px;
        background: radial-gradient(circle, rgba(91, 172, 255, 0.11), transparent 72%);
        pointer-events: none;
      }

      .oq-preview-scale {
        width: 100%;
        height: 100%;
        opacity: 0.72;
        filter: saturate(0.72) brightness(0.94);
        pointer-events: none;
      }

      .oq-preview-scale > * {
        width: 100%;
        height: 100%;
      }

      .oq-preview-card {
        width: 100%;
        height: 100%;
        padding: 14px;
        border-radius: 22px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        background:
          linear-gradient(180deg, rgba(18, 24, 36, 0.96), rgba(10, 14, 21, 0.94)),
          linear-gradient(145deg, rgba(103, 218, 255, 0.08), transparent 58%);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.22);
      }

      .oq-preview-stack {
        display: grid;
        gap: 4px;
        min-width: 0;
      }

      .oq-preview-label {
        color: rgba(237, 243, 249, 0.56);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .oq-preview-player {
        color: #f7fafc;
        font-size: 17px;
        line-height: 1.1;
        font-weight: 800;
        letter-spacing: -0.03em;
      }

      .oq-preview-meta {
        color: rgba(237, 243, 249, 0.64);
        font-size: 11px;
        line-height: 1.3;
      }

      .oq-preview-line-card,
      .oq-preview-ticket-card,
      .oq-preview-confidence-card {
        display: grid;
        gap: 10px;
      }

      .oq-preview-line-card-head,
      .oq-preview-ticket-head,
      .oq-preview-confidence-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 10px;
      }

      .oq-preview-team,
      .oq-preview-line-badge,
      .oq-preview-ticket-move,
      .oq-preview-confidence-badge,
      .oq-preview-ticket-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        white-space: nowrap;
      }

      .oq-preview-team {
        min-width: 52px;
        min-height: 32px;
        padding: 0 12px;
        background: rgba(255, 255, 255, 0.08);
        color: #f7fafc;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.08em;
      }

      .oq-preview-line-card-body {
        display: grid;
        gap: 8px;
        align-content: center;
        min-height: 92px;
        padding: 12px;
        border-radius: 18px;
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)),
          linear-gradient(135deg, rgba(70, 221, 178, 0.12), transparent 62%);
        border: 1px solid rgba(255, 255, 255, 0.06);
      }

      .oq-preview-line-primary {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 12px;
      }

      .oq-preview-line-badge {
        gap: 6px;
        min-height: 32px;
        padding: 0 10px;
        background: rgba(70, 221, 178, 0.14);
        color: #80f2d1;
        font-size: 13px;
        font-weight: 800;
      }

      .oq-preview-line-arrow {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #46ddb2;
        font-size: 15px;
        font-weight: 900;
        animation: oqPulseArrow 1.8s ease-in-out infinite;
      }

      .oq-preview-line-value {
        color: #f7fafc;
        font-size: 30px;
        line-height: 1;
        font-weight: 800;
        letter-spacing: -0.05em;
        animation: oqTickValue 1.8s ease-in-out infinite;
      }

      .oq-preview-line-tick {
        color: #80f2d1;
        font-size: 13px;
        font-weight: 800;
      }

      .oq-preview-line-spark {
        position: relative;
        height: 36px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.04);
        overflow: hidden;
      }

      .oq-preview-line-spark-grid {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px) 0 9px / 100% 16px,
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px) 12px 0 / 44px 100%;
      }

      .oq-preview-line-spark svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
      }

      .oq-preview-line-spark-path {
        fill: none;
        stroke: #46ddb2;
        stroke-width: 4;
        stroke-linecap: round;
      }

      .oq-preview-line-spark-start,
      .oq-preview-line-spark-end {
        position: absolute;
        bottom: 6px;
        font-size: 10px;
        font-weight: 800;
      }

      .oq-preview-line-spark-start {
        left: 10px;
        color: rgba(237, 243, 249, 0.52);
      }

      .oq-preview-line-spark-end {
        right: 10px;
        color: #80f2d1;
      }

      .oq-preview-line-note {
        color: rgba(237, 243, 249, 0.68);
        font-size: 11px;
        line-height: 1.35;
      }

      .oq-preview-ticket-move {
        min-height: 34px;
        padding: 0 10px;
        background: rgba(70, 221, 178, 0.14);
        color: #80f2d1;
        font-size: 11px;
        font-weight: 800;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
      }

      .oq-preview-choice-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }

      .oq-preview-choice {
        min-height: 68px;
        padding: 10px 10px;
        border-radius: 16px;
        display: grid;
        justify-items: center;
        align-content: center;
        gap: 4px;
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .oq-preview-choice.is-over {
        background: linear-gradient(180deg, rgba(70, 221, 178, 0.16), rgba(70, 221, 178, 0.06));
        border-color: rgba(70, 221, 178, 0.32);
      }

      .oq-preview-choice.is-active {
        box-shadow: 0 0 0 2px rgba(70, 221, 178, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.04);
      }

      .oq-preview-choice.is-under {
        background: linear-gradient(180deg, rgba(255, 121, 140, 0.12), rgba(255, 121, 140, 0.04));
        border-color: rgba(255, 121, 140, 0.22);
      }

      .oq-preview-choice-label {
        color: rgba(237, 243, 249, 0.66);
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .oq-preview-choice strong {
        color: #f7fafc;
        font-size: 18px;
        line-height: 1;
        font-weight: 800;
      }

      .oq-preview-ticket-foot {
        display: flex;
      }

      .oq-preview-ticket-pill {
        min-height: 26px;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0.06);
        color: rgba(237, 243, 249, 0.7);
        font-size: 10px;
        font-weight: 700;
      }

      .oq-preview-confidence-badge {
        min-height: 28px;
        padding: 0 10px;
        background: rgba(70, 221, 178, 0.16);
        color: #80f2d1;
        font-size: 11px;
        font-weight: 800;
      }

      .oq-preview-confidence-body {
        display: grid;
        grid-template-columns: 1fr;
        align-content: start;
        gap: 10px;
      }

      .oq-preview-confidence-meter {
        display: grid;
        gap: 10px;
      }

      .oq-preview-confidence-dial {
        position: relative;
        width: 82px;
        height: 50px;
        justify-self: end;
      }

      .oq-preview-confidence-dial svg {
        width: 100%;
        height: 100%;
      }

      .oq-preview-gauge-base,
      .oq-preview-gauge-fill {
        fill: none;
        stroke-width: 12;
        stroke-linecap: round;
      }

      .oq-preview-gauge-base {
        stroke: rgba(255, 255, 255, 0.08);
      }

      .oq-preview-gauge-fill {
        stroke: #46ddb2;
        animation: oqGaugeFill 900ms ease-out both;
      }

      .oq-preview-gauge-value {
        position: absolute;
        left: 50%;
        top: 64%;
        transform: translate(-50%, -50%);
        display: grid;
        justify-items: center;
      }

      .oq-preview-gauge-value strong {
        color: #f7fafc;
        font-size: 18px;
        line-height: 1;
        font-weight: 800;
      }

      .oq-preview-confidence-scale {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        color: rgba(237, 243, 249, 0.58);
        font-size: 11px;
        font-weight: 700;
      }

      .oq-preview-confidence-scale .is-low {
        color: rgba(255, 120, 120, 0.9);
      }

      .oq-preview-confidence-scale .is-medium {
        color: rgba(248, 192, 78, 0.9);
      }

      .oq-preview-confidence-scale .is-high {
        color: rgba(70, 221, 178, 0.9);
      }

      .oq-preview-confidence-bar {
        position: relative;
        height: 14px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
        overflow: hidden;
      }

      .oq-preview-confidence-bar span {
        display: block;
        width: 72%;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #ff6a6a 0%, #f8c04e 48%, #46ddb2 100%);
        animation: oqBarFill 900ms ease-out both;
      }

      .oq-footer {
        display: grid;
        gap: 14px;
      }

      .oq-progress {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 8px;
      }

      .oq-dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.18);
      }

      .oq-dot.is-active {
        width: 22px;
        background: #f7fafc;
      }

      .oq-actions {
        display: grid;
        grid-template-columns: 86px minmax(0, 1fr);
        gap: 10px;
      }

      .oq-back,
      .oq-advance {
        min-height: 48px;
        padding: 0 16px;
        border-radius: 16px;
        font-size: 15px;
        font-weight: 800;
      }

      .oq-back {
        background: rgba(255, 255, 255, 0.04);
        color: rgba(247, 250, 252, 0.9);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .oq-back.is-inactive {
        visibility: hidden;
        pointer-events: none;
      }

      .oq-advance {
        background: linear-gradient(135deg, #36df98, #f8c04e);
        color: #1a1a1a;
        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
      }

      @keyframes oqPulseArrow {
        0%, 100% { transform: scale(1); opacity: 0.88; }
        50% { transform: scale(1.08); opacity: 1; }
      }

      @keyframes oqTickValue {
        0%, 100% { opacity: 1; }
        45% { opacity: 1; }
        50% { opacity: 0.88; }
        55% { opacity: 1; }
      }

      @keyframes oqGaugeFill {
        from { stroke-dasharray: 0 100; }
        to { stroke-dasharray: 72 100; }
      }

      @keyframes oqBarFill {
        from { width: 0; }
        to { width: 72%; }
      }

      @media (max-width: 360px) {
        .oq-panel {
          height: min(calc(100dvh - 36px), 474px);
          padding: 15px;
          gap: 13px;
          border-radius: 24px;
        }

        .oq-slide-inner {
          width: min(100%, 284px);
          display: grid;
          grid-template-rows: 56px 118px 150px;
          gap: 12px;
        }

        .oq-title {
          font-size: 23px;
        }

        .oq-body {
          font-size: 13px;
        }

        .oq-body-note {
          font-size: 13px;
        }

        .oq-preview-frame {
          height: 150px;
          border-radius: 20px;
        }

        .oq-preview-confidence-body {
          gap: 10px;
        }

        .oq-back,
        .oq-advance {
          min-height: 46px;
        }
      }
    `;
  }

  global.createCrowdIQOnboardingModal = createCrowdIQOnboardingModal;
})(window);
