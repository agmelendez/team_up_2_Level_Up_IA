/**
 * TALLER INA · Visor Integrado de Presentaciones HTML
 * Integra los bloques 1, 3 y 4 como documentos HTML 16:9, conserva el
 * encuadre del portal y deja el Bloque 2 identificado como material pendiente.
 */

const SlideViewerModule = (() => {
  const decks = {
    block1: {
      dataKey: 'bloque1',
      name: 'Bloque 1 · Panorama y Método (AGM)',
      facilitator: 'Agustín Gómez Meléndez',
      src: '02_Presentaciones/INA_F2-P2.1_Bloque1_PanoramaMetodo_v2.html'
    },
    block2: {
      name: 'Bloque 2 · Usos No Convencionales (HL)',
      facilitator: 'Hannia León Fuentes (PROTEA - UCR)',
      totalSlides: 3,
      isPlaceholder: true,
      notes: [
        '<p><strong>Ciclo 2.1:</strong> seguimiento y retroalimentación diferenciada (A2 frente a B1) usando muestras sintéticas.</p>',
        '<p><strong>Ciclo 2.2:</strong> apoyo anticipatorio ante errores frecuentes del estudiantado y desafíos de aula.</p>',
        '<p><strong>Ventana 2.3 (PR-04):</strong> construcción y prueba escrita de chatbots personalizados con reglas de límite lingüístico.</p>'
      ]
    },
    block3: {
      dataKey: 'bloque3',
      name: 'Bloque 3 · Modalidad Educativa (AGM)',
      facilitator: 'Agustín Gómez Meléndez',
      src: '02_Presentaciones/INA_F2-P2.3_Bloque3_ModalidadEducativa_v2.html'
    },
    block4: {
      dataKey: 'bloque4',
      name: 'Bloque 4 · Gestión de IA Local (AGM)',
      facilitator: 'Agustín Gómez Meléndez',
      src: '02_Presentaciones/INA_F2-P2.4_Bloque4_IALocal_v2.html'
    }
  };

  let currentDeckKey = 'block1';
  let currentSlideIndex = 1;

  function deckData(deck) {
    return deck.dataKey && window.PRESENTATION_DECKS
      ? window.PRESENTATION_DECKS[deck.dataKey]
      : null;
  }

  function slideCount(deck) {
    const data = deckData(deck);
    return data ? data.slides.length : deck.totalSlides;
  }

  function loadDeck(deckKey) {
    if (!decks[deckKey]) return;
    currentDeckKey = deckKey;
    currentSlideIndex = 1;

    document.querySelectorAll('.deck-select-btn').forEach(button => {
      const active = button.dataset.deck === deckKey;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    renderThumbnails();
    updateSlideDisplay({ reloadDeck: true });
  }

  function renderThumbnails() {
    const strip = document.getElementById('slide-thumbnails-strip');
    if (!strip) return;

    strip.innerHTML = '';
    const deck = decks[currentDeckKey];
    const data = deckData(deck);
    const total = slideCount(deck);

    for (let index = 1; index <= total; index++) {
      const title = data?.slides[index - 1]?.title || `Parte ${index}`;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `slide-thumbnail-item ${index === currentSlideIndex ? 'active' : ''}`;
      button.dataset.slideNum = index;
      button.title = `${index}. ${title}`;
      button.setAttribute('aria-label', `Ir a la lámina ${index}: ${title}`);
      button.setAttribute('aria-current', index === currentSlideIndex ? 'true' : 'false');
      button.innerHTML = `<span class="slide-thumbnail-number">${String(index).padStart(2, '0')}</span><span class="slide-thumbnail-title">${title}</span>`;
      button.addEventListener('click', () => goToSlide(index));
      strip.appendChild(button);
    }
  }

  function updateParentControls(deck) {
    const total = slideCount(deck);
    const counter = document.getElementById('slide-counter-badge');
    const facilitator = document.getElementById('deck-facilitator-name');
    const notes = document.getElementById('speaker-notes-content');
    const data = deckData(deck);

    if (counter) counter.textContent = `Lámina ${currentSlideIndex} de ${total}`;
    if (facilitator) facilitator.textContent = deck.facilitator;
    if (notes) {
      notes.innerHTML = data?.slides[currentSlideIndex - 1]?.notes
        || deck.notes?.[currentSlideIndex - 1]
        || '<p>Sin notas adicionales para esta lámina.</p>';
    }

    document.querySelectorAll('.slide-thumbnail-item').forEach(item => {
      const active = Number(item.dataset.slideNum) === currentSlideIndex;
      item.classList.toggle('active', active);
      item.setAttribute('aria-current', active ? 'true' : 'false');
      if (active) item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  }

  function updateSlideDisplay(options = {}) {
    const deck = decks[currentDeckKey];
    const frame = document.getElementById('presentation-html-frame');
    const placeholder = document.getElementById('placeholder-slide-box');
    const openLink = document.getElementById('btn-open-presentation');

    updateParentControls(deck);

    if (deck.isPlaceholder) {
      if (frame) {
        frame.hidden = true;
        frame.removeAttribute('src');
      }
      if (openLink) {
        openLink.hidden = true;
        openLink.removeAttribute('href');
        openLink.removeAttribute('aria-label');
      }
      if (placeholder) {
        placeholder.hidden = false;
        placeholder.innerHTML = `
          <div class="placeholder-slide-content">
            <span class="meta-pill placeholder-facilitator">Facilitación: Hannia León Fuentes (PROTEA-UCR)</span>
            <h3>Bloque 2 · Usos no convencionales de la IA</h3>
            <p>Este bloque conserva su estructura metodológica de tres ciclos. La presentación HTML final permanece pendiente de entrega por la facilitadora.</p>
            <div class="placeholder-agenda">
              <strong>Contenido previsto:</strong>
              <span>Ciclo 2.1 · Retroalimentación diferenciada con muestras sintéticas.</span>
              <span>Ciclo 2.2 · Apoyo anticipatorio ante errores frecuentes.</span>
              <span>Ventana 2.3 (PR-04) · Chatbot escrito con límites lingüísticos.</span>
            </div>
          </div>`;
      }
      return;
    }

    if (placeholder) placeholder.hidden = true;
    if (frame) {
      frame.hidden = false;
      const target = `${deck.src}#${currentSlideIndex}`;
      if (options.reloadDeck || frame.getAttribute('src') !== target) frame.src = target;
      frame.title = `${deck.name}: lámina ${currentSlideIndex}`;
    }
    if (openLink) {
      openLink.hidden = false;
      openLink.href = `${deck.src}#${currentSlideIndex}`;
      openLink.setAttribute('aria-label', `Abrir ${deck.name} en una pestaña nueva`);
    }
  }

  function nextSlide() {
    const deck = decks[currentDeckKey];
    if (currentSlideIndex < slideCount(deck)) {
      currentSlideIndex += 1;
      updateSlideDisplay();
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 1) {
      currentSlideIndex -= 1;
      updateSlideDisplay();
    }
  }

  function goToSlide(index) {
    const deck = decks[currentDeckKey];
    if (index >= 1 && index <= slideCount(deck)) {
      currentSlideIndex = index;
      updateSlideDisplay();
    }
  }

  function toggleFullscreen() {
    const frame = document.getElementById('slide-display-frame');
    if (!frame) return;

    if (!document.fullscreenElement) {
      frame.requestFullscreen().catch(error => console.warn('No fue posible activar pantalla completa:', error));
    } else {
      document.exitFullscreen();
    }
  }

  function receiveEmbeddedNavigation(event) {
    const iframe = document.getElementById('presentation-html-frame');
    const deck = decks[currentDeckKey];
    if (!iframe || event.source !== iframe.contentWindow || !deck.dataKey) return;
    if (event.data?.type !== 'ina-presentation-slide' || event.data.deck !== deck.dataKey) return;

    const index = Number(event.data.index);
    if (!Number.isInteger(index) || index < 1 || index > slideCount(deck)) return;
    currentSlideIndex = index;
    updateParentControls(deck);
    iframe.title = `${deck.name}: lámina ${currentSlideIndex}`;

    const openLink = document.getElementById('btn-open-presentation');
    if (openLink) openLink.href = `${deck.src}#${currentSlideIndex}`;
  }

  function init() {
    if (!document.getElementById('slide-display-frame')) return;

    document.querySelectorAll('.deck-select-btn').forEach(button => {
      button.addEventListener('click', event => loadDeck(event.currentTarget.dataset.deck));
    });
    document.getElementById('btn-slide-prev')?.addEventListener('click', prevSlide);
    document.getElementById('btn-slide-next')?.addEventListener('click', nextSlide);
    document.getElementById('btn-slide-fullscreen')?.addEventListener('click', toggleFullscreen);
    window.addEventListener('message', receiveEmbeddedNavigation);

    window.addEventListener('keydown', event => {
      if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(document.activeElement?.tagName)) return;
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        nextSlide();
      } else if (['ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        prevSlide();
      }
    });

    loadDeck('block1');
  }

  return { init, loadDeck, nextSlide, prevSlide, goToSlide, toggleFullscreen };
})();
