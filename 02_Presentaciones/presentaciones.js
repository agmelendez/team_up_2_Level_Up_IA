(function () {
  "use strict";

  const deckKey = document.body.dataset.deck;
  const deck = window.PRESENTATION_DECKS && window.PRESENTATION_DECKS[deckKey];
  const stage = document.getElementById("deck-stage");

  if (!deck || !stage) {
    document.body.innerHTML = "<p style='padding:2rem;font-family:system-ui'>No fue posible cargar la presentación.</p>";
    return;
  }

  document.title = `${deck.code} · ${deck.title} · INA 2026`;

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  const slidesMarkup = deck.slides.map((slide, index) => {
    const source = slide.source ? `<span class="source-line">${slide.source}</span>` : "<span></span>";
    return `
      <section class="slide${index === 0 ? " is-active" : ""}" data-index="${index}" data-accent="${slide.accent || deck.accent || "green"}" data-tone="${slide.tone || "light"}" aria-hidden="${index === 0 ? "false" : "true"}">
        <header class="slide-brand">
          <span class="brand-mark"><span class="brand-badge">INA CR</span> Team Up 2 Level Up</span>
          <span class="slide-number">${String(index + 1).padStart(2, "0")} / ${String(deck.slides.length).padStart(2, "0")}</span>
        </header>
        <div class="slide-body">${slide.html}</div>
        <footer class="slide-footer">${source}<span class="deck-code">${escapeHtml(deck.code)}</span></footer>
      </section>`;
  }).join("");

  stage.innerHTML = `
    ${slidesMarkup}
    <div class="progress-track" aria-hidden="true"><div class="progress-bar" id="progress-bar"></div></div>`;

  const slides = Array.from(stage.querySelectorAll(".slide"));
  const currentLabel = document.getElementById("deck-counter");
  const progress = document.getElementById("progress-bar");
  const notesDrawer = document.getElementById("notes-drawer");
  const notesContent = document.getElementById("notes-content");
  const sourcesDrawer = document.getElementById("sources-drawer");
  const sourcesContent = document.getElementById("sources-content");
  const helpDrawer = document.getElementById("help-drawer");
  const overview = document.getElementById("overview");

  let current = 0;

  function indexFromHash() {
    const match = location.hash.match(/^#(\d+)$/);
    if (!match) return 0;
    return Math.min(Math.max(Number(match[1]) - 1, 0), slides.length - 1);
  }

  function updateDrawerContent() {
    const slide = deck.slides[current];
    notesContent.innerHTML = slide.notes || "<p>Esta lámina no requiere notas adicionales.</p>";
    sourcesContent.innerHTML = slide.sourcesDetail || (slide.source ? `<p>${slide.source}</p>` : "<p>No se consignan fuentes adicionales para esta lámina.</p>");
  }

  function show(index, pushHash = true) {
    current = Math.min(Math.max(index, 0), slides.length - 1);
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    currentLabel.textContent = `${current + 1} / ${slides.length}`;
    progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    updateDrawerContent();
    if (pushHash && location.hash !== `#${current + 1}`) {
      history.replaceState(null, "", `#${current + 1}`);
    }
    document.getElementById("live-status").textContent = `Lámina ${current + 1} de ${slides.length}: ${deck.slides[current].title}`;

    // Mantener sincronizado el visor integrado del portal cuando esta
    // presentación se ejecuta dentro de un iframe. En una pestaña independiente
    // no se envía ningún mensaje.
    if (window.parent !== window) {
      window.parent.postMessage({
        type: "ina-presentation-slide",
        deck: deckKey,
        index: current + 1,
        total: slides.length
      }, "*");
    }
  }

  function toggleDrawer(drawer) {
    [notesDrawer, sourcesDrawer, helpDrawer].forEach(item => {
      if (item !== drawer) item.hidden = true;
    });
    drawer.hidden = !drawer.hidden;
    if (!drawer.hidden) drawer.querySelector(".drawer-close").focus();
  }

  function closeDrawers() {
    notesDrawer.hidden = true;
    sourcesDrawer.hidden = true;
    helpDrawer.hidden = true;
  }

  function toggleOverview() {
    overview.hidden = !overview.hidden;
    if (!overview.hidden) overview.querySelector("button").focus();
  }

  overview.innerHTML = deck.slides.map((slide, i) => `
    <button class="overview-card" type="button" data-overview-index="${i}">
      <b>${String(i + 1).padStart(2, "0")}</b>
      <span>${escapeHtml(slide.title)}</span>
    </button>`).join("");

  overview.addEventListener("click", event => {
    const button = event.target.closest("[data-overview-index]");
    if (!button) return;
    show(Number(button.dataset.overviewIndex));
    overview.hidden = true;
  });

  document.getElementById("btn-prev").addEventListener("click", () => show(current - 1));
  document.getElementById("btn-next").addEventListener("click", () => show(current + 1));
  document.getElementById("btn-notes").addEventListener("click", () => toggleDrawer(notesDrawer));
  document.getElementById("btn-sources").addEventListener("click", () => toggleDrawer(sourcesDrawer));
  document.getElementById("btn-overview").addEventListener("click", toggleOverview);
  document.getElementById("btn-fullscreen").addEventListener("click", () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
  });
  document.querySelectorAll(".drawer-close").forEach(button => button.addEventListener("click", closeDrawers));

  window.addEventListener("hashchange", () => show(indexFromHash(), false));

  document.addEventListener("keydown", event => {
    if (event.target.matches("input, textarea, select")) return;
    if (event.target.matches("button, a") && [" ", "Enter"].includes(event.key)) return;
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      show(current + 1);
    } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      show(current - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      show(0);
    } else if (event.key === "End") {
      event.preventDefault();
      show(slides.length - 1);
    } else if (event.key.toLowerCase() === "n") {
      toggleDrawer(notesDrawer);
    } else if (event.key.toLowerCase() === "s") {
      toggleDrawer(sourcesDrawer);
    } else if (event.key.toLowerCase() === "o") {
      toggleOverview();
    } else if (event.key.toLowerCase() === "f") {
      document.getElementById("btn-fullscreen").click();
    } else if (event.key === "?") {
      toggleDrawer(helpDrawer);
    } else if (event.key === "Escape") {
      closeDrawers();
      overview.hidden = true;
    }
  });

  let touchStartX = null;
  stage.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  stage.addEventListener("touchend", event => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 55) show(current + (delta < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  show(indexFromHash(), false);
})();
