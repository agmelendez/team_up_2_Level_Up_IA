/**
 * ==========================================================================
 * PORTAL INA · TEAM UP 2 LEVEL UP (2026)
 * MOTOR DE ACCESIBILIDAD UNIVERSAL (A11Y), NAVEGACIÓN MÓVIL Y TRADUCCIÓN A INGLÉS
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DICCIONARIO BILINGÜE INMEDIATO (ES <-> EN)
  // --------------------------------------------------------------------------
  const uiTranslations = {
    // Navbar y Marca
    'IA en la Enseñanza del Inglés Técnico': 'AI in Technical English Teaching',
    '🎯 Inicio & Taller': '🎯 Home & Workshop',
    '🗺️ Cronograma': '🗺️ Schedule',
    '⚡ Herramientas de IA': '⚡ AI Tools',
    '⚡ Herramientas IA': '⚡ AI Tools',
    '📚 Biblioteca & RAG': '📚 Library & RAG',
    '💬 Simulador': '💬 Simulator',
    '📖 Glosario': '📖 Glossary',
    '🎯 Ir a la Práctica Activa': '🎯 Go to Live Practice',
    '🚀 Práctica en Vivo': '🚀 Live Practice',
    'Práctica en Vivo': 'Live Practice',
    'Accesibilidad': 'Accessibility',
    'Tutorial': 'Tutorial',
    '🧭 Tutorial de Uso': '🧭 User Guide',
    'Menú': 'Menu',

    // Tutorial de Uso
    'Saltar al tutorial': 'Skip to the tutorial',
    'Nuevo servicio · Orientación paso a paso': 'New service · Step-by-step guidance',
    'Tutorial de Uso del Portal': 'Portal User Guide',
    'Comprenda qué contiene el sitio, para qué sirve cada sección y cuál es la ruta más corta para aprender, practicar y conservar su trabajo.':
      'Understand what the site contains, what each section is for, and the shortest route to learn, practise, and keep your work.',
    'Comenzar recorrido': 'Start guided tour',
    'Ver mapa completo': 'View full map',
    'La lógica del sitio': 'How the site works',
    'Comprenda el propósito.': 'Understand the purpose.',
    'Observe una demostración.': 'Watch a demonstration.',
    'Practique con datos ficticios.': 'Practise with fictional data.',
    'Revise la salida de la IA.': 'Review the AI output.',
    'Guarde una decisión reutilizable.': 'Save a reusable decision.',
    'Vista general': 'Overview',
    'Mapa pedagógico del sitio': 'Pedagogical site map',
    'El portal parte de una orientación común y ofrece varias rutas. Puede seguir el taller completo o entrar directamente al recurso que necesita.':
      'The portal begins with shared guidance and offers several routes. Follow the full workshop or go directly to the resource you need.',
    'Los bloques son enlaces. Seleccione cualquiera para abrir esa parte del portal.':
      'Each block is a link. Select any block to open that part of the portal.',
    'Recorrido guiado': 'Guided tour',
    'Cinco pasos para usar el portal con sentido pedagógico': 'Five steps to use the portal with pedagogical purpose',
    'Paso 1 de 5': 'Step 1 of 5',
    '1. Orientarse': '1. Get oriented',
    '2. Comprender': '2. Understand',
    '3. Practicar': '3. Practise',
    '4. Verificar': '4. Verify',
    '5. Conservar': '5. Keep your work',
    'Inicio y cronograma': 'Home and schedule',
    'Objetivo pedagógico:': 'Pedagogical objective:',
    'Abrir Inicio': 'Open Home',
    'Acceso directo': 'Direct access',
    'Si necesita… vaya aquí': 'If you need to… go here',
    'Contenido y propósito': 'Content and purpose',
    'Qué ofrece cada servicio': 'What each service offers',
    'Servicio': 'Service',
    'Qué contiene': 'What it contains',
    'Objetivo pedagógico': 'Pedagogical objective',
    'Producto esperado': 'Expected product',
    'Ruta rápida': 'Quick route',
    'Primera visita en cuatro minutos': 'First visit in four minutes',
    'El portal ya está listo para usar': 'The portal is ready to use',
    'Entrar al portal': 'Enter the portal',

    // Banner de Privacidad
    '🔒 Regla de Privacidad (Ley 8968):': '🔒 Privacy Rule (Law 8968):',
    'No ingrese nombres, números de cédula ni trabajos reales de estudiantes en herramientas de IA. Utilice siempre las muestras sintéticas provistas en este portal.':
      'Do not enter students’ real names, ID numbers, or actual coursework into AI tools. Always use the synthetic samples provided in this portal.',

    // Selector de Prácticas
    '🎯 Paso a Paso del Taller: 7 Prácticas Activas': '🎯 Workshop Step-by-Step: 7 Active Practices',
    'Seleccione la práctica en curso mediante la lista desplegable para visualizar de forma limpia y directa sus consignas, prompt y Plan B:':
      'Select the ongoing practice using the dropdown list to view its prompts, tasks, and Plan B backup clearly:',
    '1 Práctica en Pantalla': '1 Practice on Screen',
    '◀ Anterior': '◀ Previous',
    'Siguiente ▶': 'Next ▶',
    '⏱️ Cronómetro de Práctica Individual': '⏱️ Individual Practice Timer',
    '▶ Iniciar 12 min': '▶ Start 12 min',
    '⏸ Pausar': '⏸ Pause',
    '↺ Reiniciar': '↺ Reset',

    // Botones de acción en tarjetas
    '📋 Copiar Consigna': '📋 Copy Prompt',
    '🛡️ Ver Salida Plan B': '🛡️ View Plan B Output',
    '⚠️ Plan B / Respaldo': '⚠️ Plan B / Backup',
    '💬 Probar en Simulador': '💬 Test in Simulator',
    '📥 Descargar SVG': '📥 Download SVG',

    // Pasos metodológicos
    'Paso 1: Demostración Conducida': 'Step 1: Guided Demonstration',
    'Paso 2: Práctica en IA': 'Step 2: AI Hands-on Practice',
    'Paso 3: Verificación Docente': 'Step 3: Teacher Verification & Audit',

    // Sección Cronograma y Ruta Pedagógica
    '🗺️ RUTA PEDAGÓGICA VISUAL': '🗺️ VISUAL PEDAGOGICAL ROADMAP',
    'Propuesta de Cronograma de la Jornada': 'Workshop Schedule Proposal',
    'Consulte cada momento del taller (8:00 a. m. a 3:00 p. m.), el facilitador responsable, los bloques temáticos y las 7 prácticas activas.':
      'Explore each workshop block (8:00 a.m. to 3:00 p.m.), the lead facilitator, thematic areas, and all 7 active hands-on practices.',
    'Evaluación cuantitativa y cualitativa': 'Quantitative and qualitative assessment',
    'Modalidad de evaluación': 'Assessment mode',
    'Seleccione cómo desea interpretar la misma evidencia.': 'Choose how you want to interpret the same evidence.',
    '🔢 Cuantitativa (0–16)': '🔢 Quantitative (0–16)',
    '📝 Cualitativa': '📝 Qualitative',
    '📱 En celular o tableta, deslice horizontalmente para ver el cronograma completo ↔️':
      '📱 On mobile or tablet, swipe horizontally to view the full schedule ↔️',
    'Ver Cronograma Visual': 'View Visual Schedule',
    '🗺️ Ver Cronograma Visual': '🗺️ View Visual Schedule',

    // Footer y Nota de Transparencia
    'Nota sobre el Uso de Inteligencia Artificial en el Desarrollo del Sitio y Contenidos':
      'Transparency Note on the Use of Artificial Intelligence for Site and Content Development',
    'Navegación': 'Navigation',
    'Facilitación': 'Facilitation',
    'Equipo académico': 'Academic team',
    'Protección de Datos Garantizada · Cumplimiento estricto Ley 8968':
      'Guaranteed Data Protection · Strict Compliance with Law 8968'
  };

  // --------------------------------------------------------------------------
  // DICCIONARIO ESPECÍFICO DEL DIAGRAMA VECTORIAL SVG (CRONOGRAMA & RUTA)
  // --------------------------------------------------------------------------
  const svgTranslations = {
    'INA COSTA RICA · 2026': 'INA COSTA RICA · 2026',
    'JORNADA TÉCNICA · 6 OCTUBRE': 'TECHNICAL WORKSHOP · OCTOBER 6',
    'Propuesta de Cronograma & Ruta Pedagógica del Taller': 'Workshop Schedule Proposal & Pedagogical Roadmap',
    'Propuesta de Cronograma &amp; Ruta Pedagógica del Taller': 'Workshop Schedule Proposal & Pedagogical Roadmap',
    'Team Up 2 Level Up: Inteligencia Artificial en la Enseñanza del Inglés Técnico · 8:00 a. m. a 3:00 p. m. (7 horas)':
      'Team Up 2 Level Up: AI in Technical English Teaching · 8:00 a.m. to 3:00 p.m. (7 hours)',
    'CONVENCIONES DEL TALLER:': 'WORKSHOP CONVENTIONS:',
    'Agustín Gómez (AGM)': 'Agustín Gómez (AGM)',
    'Hannia León (asesoría)': 'Hannia León (academic advisor)',
    'PR-01 a 07': 'PR-01 to 07',

    // Kicker Mañana
    '🌅 JORNADA DE LA MAÑANA · ENCUADRE, PANORAMA, MODO DE VOZ Y USOS NO CONVENCIONALES (08:00 – 12:00)':
      '🌅 MORNING SESSION · FRAMING, PANORAMA, VOICE MODE AND NON-CONVENTIONAL USES (08:00 – 12:00)',

    // Bloque 1
    '1. Apertura & Encuadre': '1. Opening & Framing',
    '1. Apertura &amp; Encuadre': '1. Opening & Framing',
    '• Bienvenida institucional INA.': '• INA institutional welcome.',
    '• Sondeo de nivel de uso real.': '• Real classroom usage poll.',
    '• Contrato de confidencialidad.': '• Confidentiality agreement.',
    '• Regla de oro Ley 8968.': '• Golden rule: Law 8968 privacy.',
    'Sondeo inicial & Metodología': 'Initial Poll & Methodology',
    'Sondeo inicial &amp; Metodología': 'Initial Poll & Methodology',

    // Bloque 2
    '2. Receso & Soporte': '2. Tech Break & Support',
    '2. Receso &amp; Soporte': '2. Tech Break & Support',
    'Mesa de Apoyo': 'Support Desk',
    '• Café y pausa matutina.': '• Coffee & morning break.',
    '• Validación de conectividad.': '• Connectivity validation.',
    '• Apertura de cuentas IA.': '• AI accounts setup.',
    '• Verificación Plan B listo.': '• Plan B backup verification.',
    'Prueba técnica de cuentas': 'Technical account testing',

    // Bloque 3
    '3. Bloque 1: Panorama & Voz': '3. Block 1: Panorama & Voice',
    '3. Bloque 1: Panorama &amp; Voz': '3. Block 1: Panorama & Voice',
    'Agustín Gómez Meléndez': 'Agustín Gómez Meléndez',
    '• 3 fallas críticas de la IA en EFL.': '• 3 critical AI flaws in EFL.',
    '• Los 5 componentes obligatorios.': '• The 5 mandatory components.',
    '• Demostración de Voz en vivo.': '• Live Voice demonstration.',
    '🎯 PR-01: Quejas Hotel A2 (12m)': '🎯 PR-01: Hotel A2 Complaints (12m)',

    // Bloque 4
    '4. Bloque 2: No Convencionales': '4. Block 2: Non-Conventional Uses',
    'Agustín Gómez (AGM)': 'Agustín Gómez (AGM)',
    '• Chatbot tutor con límite estricto.': '• Strict boundary tutor chatbot.',
    '• Anticipación de errores de aula.': '• Classroom mistake anticipation.',
    '• Adaptaciones lingüísticas para LESCO, Portugués y Francés.': '• Linguistic adaptations (LESCO, Portuguese, French).',
    '🎯 PR-02 + PR-03 + PR-04 (12m c/u)': '🎯 PR-02 + PR-03 + PR-04 (12m each)',

    // Bloque 5
    '5. Plenaria & Q&A': '5. Plenary & Q&A',
    '5. Plenaria &amp; Q&amp;A': '5. Plenary & Q&A',
    '• Preguntas docentes en vivo.': '• Live teachers’ questions.',
    '• Balance de la mañana.': '• Morning debrief & recap.',
    '• Calibración en pantalla.': '• On-screen prompt calibration.',
    'Síntesis y retroalimentación': 'Synthesis & Feedback',

    // Almuerzo
    '🍽️ 12:00 – 13:00 · RECESO MERIDIANO: ALMUERZO Y PAUSA DE RECUPERACIÓN (60 MINUTOS)':
      '🍽️ 12:00 – 13:00 · NOON BREAK: LUNCH AND RECHARGE PAUSE (60 MINUTES)',

    // Kicker Tarde
    '🌇 JORNADA DE LA TARDE · EVALUACIÓN, PRUEBA DE ESFUERZO, MODO VOZ, IA LOCAL Y COMPROMISO (13:00 – 15:00)':
      '🌇 AFTERNOON SESSION · EVALUATION, STRESS-TEST, VOICE MODE, LOCAL AI AND COMMITMENT (13:00 – 15:00)',

    // Bloque 6
    '6. Bloque 3: Modalidad Educativa, Rúbricas & Voz': '6. Block 3: Educational Mode, Rubrics & Voice',
    '6. Bloque 3: Modalidad Educativa, Rúbricas &amp; Voz': '6. Block 3: Educational Mode, Rubrics & Voice',
    '• ChatGPT y Claude en modalidad educativa (sin resolver por el alumno).': '• ChatGPT & Claude in educational mode (no spoon-feeding).',
    '• Prueba de esfuerzo sobre rúbrica de 4 criterios (0-16 pts).': '• 4-criteria rubric stress-test (0-16 pts).',
    '• Retroalimentación A2 vs B1.': '• Formative feedback A2 vs B1.',
    '• Interacción oral por Voz: regla 70/30 de habla para el aprendiz.': '• Voice interaction: 70/30 apprentice talk ratio.',
    '🎯 PR-05: Rúbrica (12m)': '🎯 PR-05: Rubrics (12m)',
    '🎙️ PR-06: Modo Voz (12m)': '🎙️ PR-06: Voice Mode (12m)',

    // Bloque 7
    '7. Bloque 4: Gestión & Despliegue de IA Local': '7. Block 4: Governance & Local AI Deployment',
    '7. Bloque 4: Gestión &amp; Despliegue de IA Local': '7. Block 4: Governance & Local AI Deployment',
    '• Protección de registros de estudiantes bajo Ley 8968.': '• Student record protection under Law 8968.',
    '• Ejecución autónoma en Modo Avión (Ollama / LM Studio / Msty).': '• Offline Airplane Mode execution (Ollama / LM Studio / Msty).',
    '🔒 PR-07: Ficha Técnica & IA Local (12 min)': '🔒 PR-07: Datasheet & Local AI (12 min)',
    '🔒 PR-07: Ficha Técnica &amp; IA Local (12 min)': '🔒 PR-07: Datasheet & Local AI (12 min)',

    // Bloque 8
    '8. Cierre Oficial & Compromiso a 30 Días': '8. Official Closing & 30-Day Commitment',
    '8. Cierre Oficial &amp; Compromiso a 30 Días': '8. Official Closing & 30-Day Commitment',
    '• Guardado en el cuaderno local del taller.': '• Save work in the local workshop notebook.',
    '• Definición del Compromiso Docente a 30 días de aula.': '• 30-day classroom teacher pledge definition.',
    '• Encuesta de satisfacción y entrega de constancias INA.': '• Satisfaction survey & INA certificate delivery.',
    '• Revisión de microentregas.': '• Micro-deliverables review.',
    '💾 Cuaderno local & compromiso docente': '💾 Local notebook & teacher commitment',
    '💾 Cuaderno local &amp; compromiso docente': '💾 Local notebook & teacher commitment',

    // Ciclo de 25 min
    '🔄 MÉTODO CONDUCTOR: CICLO DE 25 MINUTOS': '🔄 CORE METHOD: 25-MINUTE CYCLE',
    'Estructura estandarizada repetida en cada una de las 7 prácticas activas del taller:':
      'Standardized pedagogical loop repeated across each of the 7 active workshop practices:',
    'Demo Conducida': 'Guided Demo',
    'El facilitador proyecta el caso y las reglas.': 'Instructor projects the case and rules.',
    'Práctica Individual': 'Individual Practice',
    'Trabajo individual en ChatGPT, Claude o Gemini.': 'Individual hands-on work in ChatGPT, Claude, or Gemini.',
    'Microentregable': 'Micro-Deliverable',
    'Guardado en el cuaderno local del taller.': 'Save work in the local workshop notebook.',
    'Devolución Pública': 'Public Feedback',
    'Análisis de aciertos y errores en plenaria.': 'Plenary analysis of successes and pitfalls.',
    'Revisión de microentregas': 'Micro-deliverables review'
  };

  // --------------------------------------------------------------------------
  // 2. MÓDULO DE ACCESIBILIDAD (A11Y)
  // --------------------------------------------------------------------------
  const A11yModule = {
    lastFocusedElement: null,
    state: {
      contrast: 'normal',       // 'normal', 'high-contrast', 'dark-mode', 'grayscale'
      fontSize: 'normal',       // 'small', 'normal', 'large', 'xlarge'
      dyslexicFont: false,
      highlightLinks: false,
      highlightHeadings: false,
      bigCursor: false,
      reduceMotion: false,
      screenReaderMode: false
    },

    init: function () {
      this.loadPreferences();
      this.applyAll();
      this.bindEvents();
    },

    loadPreferences: function () {
      try {
        const saved = localStorage.getItem('ina_a11y_state');
        if (saved) {
          this.state = Object.assign(this.state, JSON.parse(saved));
        }
      } catch (e) {
        console.warn('A11y storage load error:', e);
      }
    },

    savePreferences: function () {
      try {
        localStorage.setItem('ina_a11y_state', JSON.stringify(this.state));
      } catch (e) {
        console.warn('A11y storage save error:', e);
      }
    },

    setContrast: function (mode) {
      document.body.classList.remove('a11y-high-contrast', 'a11y-dark-mode', 'a11y-grayscale');
      this.state.contrast = mode;
      if (mode === 'high-contrast') document.body.classList.add('a11y-high-contrast');
      if (mode === 'dark-mode') document.body.classList.add('a11y-dark-mode');
      if (mode === 'grayscale') document.body.classList.add('a11y-grayscale');
      this.updateUI();
      this.savePreferences();
    },

    setFontSize: function (size) {
      document.documentElement.classList.remove('a11y-font-small', 'a11y-font-large', 'a11y-font-xlarge');
      this.state.fontSize = size;
      if (size === 'small') document.documentElement.classList.add('a11y-font-small');
      if (size === 'large') document.documentElement.classList.add('a11y-font-large');
      if (size === 'xlarge') document.documentElement.classList.add('a11y-font-xlarge');
      this.updateUI();
      this.savePreferences();
    },

    toggleOption: function (key) {
      this.state[key] = !this.state[key];
      this.applyOption(key);
      this.updateUI();
      this.savePreferences();
    },

    applyOption: function (key) {
      const active = this.state[key];
      if (key === 'dyslexicFont') {
        document.body.classList.toggle('a11y-readable-font', active);
      } else if (key === 'highlightLinks') {
        document.body.classList.toggle('a11y-highlight-links', active);
      } else if (key === 'highlightHeadings') {
        document.body.classList.toggle('a11y-highlight-headings', active);
      } else if (key === 'bigCursor') {
        document.body.classList.toggle('a11y-big-cursor', active);
      } else if (key === 'reduceMotion') {
        document.body.classList.toggle('a11y-reduce-motion', active);
      } else if (key === 'screenReaderMode') {
        document.body.classList.toggle('a11y-screen-reader-mode', active);
        document.documentElement.setAttribute('data-screen-reader-mode', active ? 'true' : 'false');
        this.announce(active
          ? 'Modo lector de pantalla activado. La navegación y los cambios de estado se anunciarán con mayor detalle.'
          : 'Modo lector de pantalla desactivado.');
      }
    },

    announce: function (message) {
      let region = document.getElementById('a11y-live-announcer');
      if (!region) {
        region = document.createElement('div');
        region.id = 'a11y-live-announcer';
        region.className = 'visually-hidden';
        region.setAttribute('role', 'status');
        region.setAttribute('aria-live', 'polite');
        region.setAttribute('aria-atomic', 'true');
        document.body.appendChild(region);
      }
      region.textContent = '';
      window.setTimeout(() => { region.textContent = message; }, 40);
    },

    enhanceScreenReaderNavigation: function () {
      const main = document.getElementById('main-content') || document.querySelector('main');
      if (main && !main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');

      document.querySelectorAll('.skip-link[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
          const target = document.querySelector(link.getAttribute('href'));
          window.setTimeout(() => target?.focus?.(), 0);
        });
      });

      const currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
      document.querySelectorAll('nav a[href]').forEach(link => {
        const href = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
        if (href && href === currentFile) link.setAttribute('aria-current', 'page');
      });

      document.querySelectorAll('button[title]:not([aria-label]), a[title]:not([aria-label])').forEach(control => {
        control.setAttribute('aria-label', control.getAttribute('title'));
      });
      document.querySelectorAll('img:not([alt])').forEach(img => img.setAttribute('alt', ''));
      this.announce(`Página cargada: ${document.title}.`);
    },

    applyAll: function () {
      this.setContrast(this.state.contrast);
      this.setFontSize(this.state.fontSize);
      ['dyslexicFont', 'highlightLinks', 'highlightHeadings', 'bigCursor', 'reduceMotion', 'screenReaderMode'].forEach(k => {
        this.applyOption(k);
      });
      this.enhanceScreenReaderNavigation();
      this.updateUI();
    },

    resetAll: function () {
      this.state = {
        contrast: 'normal',
        fontSize: 'normal',
        dyslexicFont: false,
        highlightLinks: false,
        highlightHeadings: false,
        bigCursor: false,
        reduceMotion: false,
        screenReaderMode: false
      };
      this.applyAll();
      this.savePreferences();
    },

    updateUI: function () {
      // Botones de contraste
      document.querySelectorAll('[data-a11y-contrast]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.a11yContrast === this.state.contrast);
      });

      // Botones de tamaño de fuente
      document.querySelectorAll('[data-a11y-size]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.a11ySize === this.state.fontSize);
      });

      // Interruptores
      ['dyslexicFont', 'highlightLinks', 'highlightHeadings', 'bigCursor', 'reduceMotion', 'screenReaderMode'].forEach(k => {
        const switchBtn = document.querySelector(`[data-a11y-toggle="${k}"]`);
        if (switchBtn) {
          switchBtn.classList.toggle('active', !!this.state[k]);
          switchBtn.setAttribute('aria-checked', this.state[k] ? 'true' : 'false');
          if (k === 'screenReaderMode') {
            switchBtn.setAttribute('aria-label', `${this.state[k] ? 'Desactivar' : 'Activar'} modo lector de pantalla`);
          }
        }
      });
    },

    openPanel: function () {
      const panel = document.getElementById('a11y-panel');
      const backdrop = document.getElementById('a11y-modal-backdrop');
      if (panel && backdrop) {
        this.lastFocusedElement = document.activeElement;
        panel.classList.add('open');
        backdrop.classList.add('open');
        panel.removeAttribute('hidden');
        document.querySelectorAll('.btn-a11y-toggle, #floating-btn-a11y').forEach(b => {
          b.setAttribute('aria-expanded', 'true');
        });
        // Poner foco en el botón de cerrar
        panel.querySelector('.a11y-close-btn')?.focus();
      }
    },

    closePanel: function () {
      const panel = document.getElementById('a11y-panel');
      const backdrop = document.getElementById('a11y-modal-backdrop');
      if (panel && backdrop) {
        panel.classList.remove('open');
        backdrop.classList.remove('open');
        panel.setAttribute('hidden', '');
        document.querySelectorAll('.btn-a11y-toggle, #floating-btn-a11y').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
        });
        this.lastFocusedElement?.focus?.();
      }
    },

    bindEvents: function () {
      document.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('#btn-a11y-toggle, .btn-a11y-toggle, .btn-open-a11y, #floating-btn-a11y');
        if (toggleBtn) {
          e.preventDefault();
          this.openPanel();
          return;
        }

        const closeBtn = e.target.closest('.a11y-close-btn, #a11y-modal-backdrop');
        if (closeBtn) {
          e.preventDefault();
          this.closePanel();
          return;
        }

        const contrastBtn = e.target.closest('[data-a11y-contrast]');
        if (contrastBtn) {
          e.preventDefault();
          this.setContrast(contrastBtn.dataset.a11yContrast);
          return;
        }

        const sizeBtn = e.target.closest('[data-a11y-size]');
        if (sizeBtn) {
          e.preventDefault();
          this.setFontSize(sizeBtn.dataset.a11ySize);
          return;
        }

        const switchBtn = e.target.closest('[data-a11y-toggle]');
        if (switchBtn) {
          e.preventDefault();
          this.toggleOption(switchBtn.dataset.a11yToggle);
          return;
        }

        const resetBtn = e.target.closest('#btn-a11y-reset-all');
        if (resetBtn) {
          e.preventDefault();
          this.resetAll();
          return;
        }
      });

      document.addEventListener('keydown', (e) => {
        const panel = document.getElementById('a11y-panel');
        if (e.key === 'Tab' && panel?.classList.contains('open')) {
          const focusable = [...panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
            .filter(element => !element.disabled && element.offsetParent !== null);
          if (focusable.length) {
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
          }
        }
        if (e.key === 'Escape') {
          this.closePanel();
        }
      });
    }
  };

  // --------------------------------------------------------------------------
  // 3. MÓDULO DE NAVEGACIÓN MÓVIL (HAMBURGER DRAWER)
  // --------------------------------------------------------------------------
  const MobileNavModule = {
    init: function () {
      const menuBtn = document.getElementById('btn-mobile-menu');
      const backdrop = document.getElementById('mobile-nav-backdrop');
      const drawer = document.getElementById('mobile-nav-drawer');
      const closeBtn = document.getElementById('mobile-drawer-close');

      if (!menuBtn || !drawer) return;

      drawer.setAttribute('aria-hidden', 'true');
      drawer.inert = true;
      backdrop?.setAttribute('aria-hidden', 'true');

      const openDrawer = () => {
        drawer.classList.add('open');
        backdrop?.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        drawer.inert = false;
        backdrop?.setAttribute('aria-hidden', 'false');
        menuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        closeBtn?.focus();
      };

      const closeDrawer = () => {
        drawer.classList.remove('open');
        backdrop?.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        drawer.inert = true;
        backdrop?.setAttribute('aria-hidden', 'true');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        menuBtn.focus();
      };

      menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openDrawer();
      });

      closeBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        closeDrawer();
      });

      backdrop?.addEventListener('click', (e) => {
        e.preventDefault();
        closeDrawer();
      });

      drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          closeDrawer();
        });
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
          closeDrawer();
        }
      });
    }
  };

  // --------------------------------------------------------------------------
  // 4. MÓDULO DE TRADUCCIÓN AUTOMÁTICA (ES <-> EN)
  // --------------------------------------------------------------------------
  const TranslateModule = {
    currentLang: 'es',

    init: function () {
      this.currentLang = localStorage.getItem('ina_lang') || 'es';
      document.documentElement.lang = this.currentLang;
      this.updateButtonText();
      this.bindEvents();

      if (this.currentLang === 'en') {
        this.initGoogleWidget();
        this.translateSvgDiagram('en');
        // Si estaba en inglés, esperar carga y traducir
        setTimeout(() => {
          this.applyTranslation('en');
        }, 300);
      }
    },

    translateSvgDiagram: function (lang) {
      // 1. Actualizar enlace y nombre de descarga de SVG
      document.querySelectorAll('.btn-download-svg').forEach(btn => {
        if (lang === 'en') {
          btn.setAttribute('href', 'img/ruta-pedagogica-cronograma-en.svg');
          btn.setAttribute('download', 'Cronograma_INA_IA_Ingles_2026_EN.svg');
        } else {
          btn.setAttribute('href', 'img/ruta-pedagogica-cronograma.svg');
          btn.setAttribute('download', 'Cronograma_INA_IA_Ingles_2026.svg');
        }
      });

      // 2. Traducir elementos de texto dentro del lienzo SVG
      const svgs = document.querySelectorAll('#seccion-cronograma svg, .svg-diagram-scroll-wrapper svg');
      if (!svgs.length) return;

      svgs.forEach(svg => {
        const textElements = svg.querySelectorAll('text, tspan');
        textElements.forEach(el => {
          if (el.tagName.toLowerCase() === 'text' && el.querySelector('tspan')) return;

          const current = el.textContent.trim().replace(/\s+/g, ' ');
          if (!current) return;

          if (!el.dataset.originalText) {
            el.dataset.originalText = current;
          }

          const original = el.dataset.originalText;

          if (lang === 'en') {
            const cleanKey = original.replace(/&amp;/g, '&');
            if (svgTranslations[cleanKey]) {
              el.textContent = svgTranslations[cleanKey];
            } else if (svgTranslations[original]) {
              el.textContent = svgTranslations[original];
            }
          } else {
            el.textContent = original;
          }
        });
      });
    },

    updateButtonText: function () {
      document.querySelectorAll('.btn-lang-toggle, #floating-btn-lang').forEach(btn => {
        const isEnglish = (this.currentLang === 'en');
        const iconSpan = btn.querySelector('.lang-icon') || btn.querySelector('.dock-btn-icon');
        const textSpan = btn.querySelector('.lang-text') || btn.querySelector('.dock-btn-label');
        if (iconSpan && textSpan) {
          iconSpan.textContent = isEnglish ? '🇪🇸' : '🌐';
          textSpan.textContent = isEnglish ? 'Español' : 'English';
        } else {
          btn.innerHTML = isEnglish 
            ? '<span class="dock-btn-icon lang-icon" aria-hidden="true">🇪🇸</span> <span class="dock-btn-label lang-text">Español</span>'
            : '<span class="dock-btn-icon lang-icon" aria-hidden="true">🌐</span> <span class="dock-btn-label lang-text">English</span>';
        }
        btn.setAttribute('aria-label', isEnglish ? 'Cambiar a Español' : 'Translate to English');
        btn.title = isEnglish ? 'Cambiar el sitio web a Español' : 'Automatically translate website to English';
      });
    },

    initGoogleWidget: function () {
      // Contenedor oculto para widget
      if (!document.getElementById('google_translate_element')) {
        const div = document.createElement('div');
        div.id = 'google_translate_element';
        div.style.display = 'none';
        document.body.appendChild(div);
      }

      window.inaGoogleTranslateInit = function () {
        try {
          new window.google.translate.TranslateElement({
            pageLanguage: 'es',
            includedLanguages: 'en,es',
            autoDisplay: false
          }, 'google_translate_element');
        } catch (e) {
          console.warn('Google Translate init error:', e);
        }
      };

      // Cargar script de Google Translate solo si no existe
      if (!document.getElementById('google-translate-script')) {
        const s = document.createElement('script');
        s.id = 'google-translate-script';
        s.src = 'https://translate.google.com/translate_a/element.js?cb=inaGoogleTranslateInit';
        s.async = true;
        document.head.appendChild(s);
      }
    },

    toggleLanguage: function () {
      const newLang = (this.currentLang === 'es') ? 'en' : 'es';
      this.setLanguage(newLang);
    },

    setLanguage: function (lang) {
      this.currentLang = lang;
      document.documentElement.lang = lang;
      localStorage.setItem('ina_lang', lang);
      this.updateButtonText();
      if (lang === 'en') this.initGoogleWidget();
      this.applyTranslation(lang);
    },

    applyTranslation: function (lang) {
      // 1. Traducción del diagrama vectorial SVG
      this.translateSvgDiagram(lang);

      // 2. Traducción inmediata de textos clave mediante diccionario
      this.applyDictionary(lang);

      // 2. Disparar motor de Google Translate mediante cookie y combo selector
      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event('change'));
      } else {
        // Fijar cookie y reintentar
        const cookieDomain = window.location.hostname;
        document.cookie = `googtrans=/es/${lang}; path=/; domain=${cookieDomain}`;
        document.cookie = `googtrans=/es/${lang}; path=/;`;

        // Reintentar cuando cargue el combo
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          const c = document.querySelector('.goog-te-combo');
          if (c) {
            c.value = lang;
            c.dispatchEvent(new Event('change'));
            clearInterval(interval);
          } else if (attempts > 15) {
            clearInterval(interval);
            // Si estamos en entorno sin conexión, recargar si es necesario
            if (lang === 'es' && window.location.hash.includes('googtrans')) {
              window.location.reload();
            }
          }
        }, 200);
      }
    },

    applyDictionary: function (lang) {
      if (lang === 'en') {
        // Reemplazar textos clave
        Object.entries(uiTranslations).forEach(([es, en]) => {
          this.replaceTextInDOM(es, en);
        });
      } else {
        // Restaurar textos originales
        Object.entries(uiTranslations).forEach(([es, en]) => {
          this.replaceTextInDOM(en, es);
        });
      }
    },

    replaceTextInDOM: function (fromText, toText) {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function (node) {
            if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            if (node.parentElement && (
              node.parentElement.tagName === 'SCRIPT' ||
              node.parentElement.tagName === 'STYLE' ||
              node.parentElement.closest('.skiptranslate') ||
              node.parentElement.closest('.notranslate') ||
              node.parentElement.closest('[translate="no"]')
            )) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeValue.includes(fromText)) {
          node.nodeValue = node.nodeValue.replace(fromText, toText);
        }
      }
    },

    bindEvents: function () {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('#btn-lang-toggle, .btn-lang-toggle, #floating-btn-lang');
        if (btn) {
          e.preventDefault();
          this.toggleLanguage();
        }
      });
    }
  };

  // --------------------------------------------------------------------------
  // INICIALIZACIÓN GLOBAL
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    A11yModule.init();
    MobileNavModule.init();
    TranslateModule.init();
  });

  // Exponer API global por si se requiere invocación directa
  window.INA_A11y = A11yModule;
  window.INA_Translate = TranslateModule;
})();
