/**
 * TALLER INA · Controlador Principal (app.js)
 * Inicializa la aplicación, coordina pestañas, navegación del menú superior,
 * menú lateral (Sidebar), cronómetros, modales, copiado y filtros.
 */

const App = (() => {
  // Banco de Casos Ocupacionales (P3.4)
  const occupationalCases = [
    {
      id: 'CO-01',
      title: 'Recibir a una persona visitante',
      area: 'turismo',
      areaLabel: 'Turismo y Hospitalidad',
      level: 'Inglés A1',
      profile: '16 personas adultas en preparación para puestos iniciales de recepción hotelera.',
      objective: 'Saludar, preguntar el nombre y señalar dos lugares del establecimiento.',
      skill: 'Interacción oral',
      situation: 'Una persona llega antes de la hora de registro y pregunta por recepción y servicios sanitarios.',
      evidence: 'Interacción de cuatro turnos con saludo, una pregunta y dos indicaciones comprensibles.',
      planB: 'Tarjetas impresas con lugares, funciones y expresiones de apoyo.'
    },
    {
      id: 'CO-02',
      title: 'Confirmar datos de una reservación',
      area: 'turismo',
      areaLabel: 'Turismo y Hospitalidad',
      level: 'Inglés A2',
      profile: '20 personas adultas con experiencia laboral diversa y manejo digital básico.',
      objective: 'Confirmar fechas, cantidad de huéspedes, tipo de habitación y solicitud especial.',
      skill: 'Interacción oral + toma de notas',
      situation: 'Una persona llama para verificar una reserva hecha mediante un intermediario.',
      evidence: 'Ficha completa y confirmación oral sin inventar políticas ni precios.',
      planB: 'Guion ramificado en papel con dos niveles de apoyo.'
    },
    {
      id: 'CO-03',
      title: 'Recomendar una actividad turística',
      area: 'turismo',
      areaLabel: 'Turismo y Francés',
      level: 'Francés B1',
      profile: '12 personas adultas que atenderán visitantes francófonos en información turística.',
      objective: 'Recomendar una actividad y justificarla según tiempo, movilidad e interés.',
      skill: 'Expresión oral',
      situation: 'Una familia dispone de medio día y solicita una opción accesible.',
      evidence: 'Recomendación de 60 segundos con dos razones y una advertencia pertinente.',
      planB: 'Adaptación lingüística formal con "vous" y fichas de destino ficticias.'
    },
    {
      id: 'CO-04',
      title: 'Orientar a un cliente en tienda',
      area: 'comercio',
      areaLabel: 'Comercio y Ventas',
      level: 'Inglés A1',
      profile: '18 personas adultas en formación inicial para ventas y servicio.',
      objective: 'Identificar una necesidad y señalar ubicación, color y precio de dos productos.',
      skill: 'Interacción oral',
      situation: 'Un comprador solicita un artículo específico en una tienda de ropa o tecnología.',
      evidence: 'Diálogo breve de 4 turnos con números, colores y cortesía.',
      planB: 'Catálogo de imágenes con precios y códigos.'
    },
    {
      id: 'CO-05',
      title: 'Gestionar una devolución de producto',
      area: 'comercio',
      areaLabel: 'Comercio y Servicios',
      level: 'Inglés A2',
      profile: '15 personas adultas en atención al cliente de tiendas de departamento.',
      objective: 'Explicar los pasos para un cambio respetando el estado de la factura.',
      skill: 'Comprensión y expresión oral',
      situation: 'Un cliente desea cambiar una prenda por una talla incorrecta.',
      evidence: 'Procedimiento de 3 pasos con tono empático y sin prometer excepciones no autorizadas.',
      planB: 'Ficha de políticas de cambio en tarjeta plastificada.'
    },
    {
      id: 'CO-06',
      title: 'Atención de soporte técnico telefónico',
      area: 'contact_center',
      areaLabel: 'Centros de Contacto',
      level: 'Inglés B1',
      profile: '22 personas adultas en entrenamiento para centros de contacto bilingües.',
      objective: 'Guiar el restablecimiento de una contraseña mediante preguntas de verificación.',
      skill: 'Interacción oral telefónica',
      situation: 'Usuario bloqueado que necesita acceso urgente a su portal de servicios.',
      evidence: 'Llamada simulada de 5 turnos con protocolo de seguridad estricto.',
      planB: 'Árbol de decisiones técnico impreso.'
    },
    {
      id: 'CO-07',
      title: 'Atención a persona sorda en mostrador',
      area: 'inclusion',
      areaLabel: 'Inclusión / Lengua de Señas Costarricense (LESCO)',
      level: 'LESCO',
      profile: 'Personal docente de Lengua de Señas Costarricense (LESCO) y de orientación al usuario.',
      objective: 'Saludar, solicitar documento de identidad y confirmar cita programada en señas.',
      skill: 'Expresión visual-gestual en LESCO',
      situation: 'Persona usuaria sorda que asiste a una oficina regional del INA.',
      evidence: 'Secuencia visual con glosas en LESCO y apoyos iconográficos.',
      planB: 'Fichas de comunicación visual de emergencia y alfabeto dactilológico.'
    },
    {
      id: 'CO-08',
      title: 'Recepción en posada turística (Portugués)',
      area: 'turismo',
      areaLabel: 'Turismo y Portugués',
      level: 'Portugués A2',
      profile: 'Docentes y estudiantes de portugués para el sector hotelero.',
      objective: 'Explicar horarios de desayuno, salida y servicios incluidos.',
      skill: 'Interacción oral en portugués',
      situation: 'Huéspedes brasileños llegando a un eco-lodge en Costa Rica.',
      evidence: 'Diálogo de 4 turnos con vocabulario de hospitalidad en portugués.',
      planB: 'Guía de frases clave en portugués/español.'
    }
  ];

  // Salidas de Respaldo Pre-generadas (P3.5 Plan B)
  const backupOutputs = {
    'PR-01': {
      title: 'Respaldo PR-01 · Instrucción Completa',
      promptUsed: 'Actúe como diseñador de actividades de inglés para fines ocupacionales. Cree una práctica para que personas adultas de nivel A2 confirmen por teléfono datos de una reserva hotelera...',
      goodOutput: `**Objetivo observable:** Confirmar fecha, cantidad de huéspedes, tipo de habitación y solicitud especial en una llamada de cuatro turnos.\n\n**Preparación (2 min):** Cada persona marca cuatro datos en una tarjeta ficticia.\n\n**Guion incompleto (7 min):**\n1. Recepción: "Good morning. How can I help you?"\n2. Cliente: Explica que desea confirmar una reserva.\n3. Recepción: Pregunta fecha y cantidad de huéspedes.\n4. Cliente: Responde y agrega una solicitud especial.\n\n**Expresiones de apoyo:** Could you confirm...?, How many guests...?, Is that correct?, Your booking is for...\n\n**Criterios de observación:** Confirma al menos 3 datos; hace una pregunta de aclaración.`,
      badOutput: `**Salida defectuosa de ejemplo:** Diálogo de 18 turnos con vocabulario avanzado C1 que excede el tiempo de 12 minutos y resuelve todas las respuestas del estudiante sin dejar espacio para la práctica activa.`,
      criticalFinding: 'La salida defectuosa sobrecarga lingüísticamente al estudiante A2 y asume que la IA debe dictar la clase en vez de apoyar la práctica autónoma.'
    },
    'PR-02': {
      title: 'Respaldo PR-02 · Retroalimentación Diferenciada',
      promptUsed: 'Analice la muestra sintética MS-01 (correo de servicio). Entregue comentarios accionables para A2 y B1...',
      goodOutput: `**Errores seleccionados:**\n1. "for give" en lugar de "to give"\n2. "he don't find" en lugar de "he didn't find / doesn't find"\n\n**Comentario A2:** "¡Buen esfuerzo transmitiendo el mensaje! Para indicar el propósito, usa 'to give' (ejemplo: 'I am writing to give information'). Practica este cambio en 2 oraciones."\n\n**Comentario B1:** "Estructura clara. En pasado simple, recuerda usar el auxiliar 'didn't' con el verbo base: 'he didn't find'. Además, en inglés formal de servicio usamos 'commit to' en lugar de 'compromised with'."\n\n**Microrremediación (5 min):** Corregir 3 oraciones modelo sustituyendo 'for + verbo' por 'to + infinitivo'.`,
      badOutput: `**Salida defectuosa de ejemplo:** "Good job, your English is great! Try to fix your grammar mistakes and send it again." (Elogio vacío sin orientación observable).`,
      criticalFinding: 'El comentario defectuoso no indica dónde está el error ni ofrece un modelo de corrección accionable.'
    },
    'PR-04': {
      title: 'Respaldo PR-04 · Chatbot de Práctica Escrita',
      promptUsed: 'Actúe como cliente de un hotel. Intercambie mensajes escritos con un estudiante A2 que atiende el mostrador...',
      goodOutput: `**Turno 1 (IA):** "Good morning. My name is Robert Miller. I have a reservation, but the front desk said my room is not ready yet. Could you help me?"\n\n**Turno 2 (Estudiante):** "Hello Mr. Miller. I am sorry for the delay. The room will be ready in thirty minutes. You can wait in the cafeteria."\n\n**Turno 3 (IA):** "Thank you for the quick check. Is there free coffee in the cafeteria while I wait?"\n\n**Cierre pedagógico tras 6 turnos:** "Resumen: Lograste calmar al cliente y diste una alternativa clara. Prioridad a practicar: el uso de conectores corteses como 'Certainly' y 'Right away'."`,
      badOutput: `**Salida defectuosa:** La IA responde con un párrafo de 80 palabras con lenguaje legal de la cadena hotelera y corrige 7 errores gramaticales a la vez, interrumpiendo el flujo.`,
      criticalFinding: 'Sin límites de longitud por turno (1-3 oraciones), el chatbot monopoliza el intercambio escrito y frustra al estudiante.'
    },
    'PR-05': {
      title: 'Respaldo PR-05 · Rúbrica y Prueba de Esfuerzo',
      promptUsed: 'Rúbrica analítica de 4 criterios (1 a 4 puntos, total 16). Aplicada a Muestra A y Muestra B...',
      goodOutput: `**Evaluación Muestra A (16/16):** Cumplimiento 4, Organización 4, Control Lingüístico 4, Adecuación Profesional 4.\n\n**Evaluación Muestra B (8/16):** Cumplimiento 2 (deja solución incierta), Organización 2 (orden confuso), Control Lingüístico 2 (errores de concordancia), Adecuación 2 (tono defensivo y culpa al cliente).\n\n**Prueba de esfuerzo superada:** La rúbrica discrimina claramente entre un desempeño profesional B1 y uno con vacíos críticos.`,
      badOutput: `**Salida defectuosa:** Rúbrica con criterios vagos como "Buena gramática (1-4)" donde ambas muestras reciben 3 puntos porque el evaluador no tiene descriptores observables.`,
      criticalFinding: 'Los descriptores deben basarse en evidencias textuales observables y no en adjetivos subjetivos como "bueno", "regular" o "malo".'
    },
    'PR-07': {
      title: 'Respaldo PR-07 · Gestión de Modelo Local',
      promptUsed: 'Genere una tabla ficticia de cuatro paquetes para una práctica A1. Entregue cinco columnas y tres preguntas de comprobación; marque cualquier dato no verificable como ficticio.',
      goodOutput: `**Ficha de gestión ficticia:** Aplicación local de demostración; modelo pequeño de instrucciones; tamaño aproximado de 1 GB; uso previsto: tareas breves A1-A2 con formato fijo.\n\n**Salida local aceptable:** Tabla de cuatro paquetes ficticios con destino genérico, peso, condición y zona; incluye tres preguntas A1.\n\n**Comparación:** La salida de nube presenta la misma estructura con una comprobación adicional. Una salida más pulida no es automáticamente mejor para el aprendizaje.\n\n**Decisión:** Conservar el modelo mientras supere la prueba definida; registrar versión y espacio ocupado; eliminarlo si deja de ser estable o útil.`,
      badOutput: `**Salida defectuosa:** Mezcla kilogramos y libras, emplea vocabulario superior a A1, omite una zona y crea una dirección aparentemente real.`,
      criticalFinding: 'La prueba en modo avión demuestra inferencia sin conexión en esa ejecución, pero no demuestra ausencia futura de telemetría ni sustituye la seguridad del dispositivo.'
    }
  };

  // Toast System
  function showToast(message, duration = 3500) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // Copiar al Portapapeles
  async function copyToClipboard(text, successMessage = 'Copiado al portapapeles') {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`📋 ${successMessage}`);
    } catch (err) {
      // Fallback manual
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(`📋 ${successMessage}`);
    }
  }

  // Alternar Menú Lateral (Sidebar)
  function toggleSidebar(forceState = null) {
    const sidebar = document.getElementById('app-sidebar');
    const toggleBtn = document.getElementById('btn-toggle-sidebar');
    if (!sidebar) return;

    if (forceState !== null) {
      if (forceState) {
        sidebar.classList.add('collapsed');
      } else {
        sidebar.classList.remove('collapsed');
      }
    } else {
      sidebar.classList.toggle('collapsed');
    }

    const isCollapsed = sidebar.classList.contains('collapsed');
    if (toggleBtn) {
      toggleBtn.textContent = isCollapsed ? '▶' : '◀';
      toggleBtn.title = isCollapsed ? 'Expandir menú lateral' : 'Minimizar menú lateral';
    }
    localStorage.setItem('ina_sidebar_collapsed', isCollapsed ? '1' : '0');
  }

  // Mapeo inteligente de navegación hacia las Grandes Zonas Mentales
  const tabMapping = {
    'live': { main: 'live', sub: null },
    'practices': { main: 'live', sub: null },
    'tools': { main: 'tools', sub: 'builder' },
    'builder': { main: 'tools', sub: 'builder' },
    'rubric': { main: 'tools', sub: 'rubric' },
    'cases': { main: 'tools', sub: 'cases' },
    'slides': { main: 'tools', sub: 'slides' },
    'library-hub': { main: 'library-hub', sub: 'documents' },
    'library': { main: 'library-hub', sub: 'documents' },
    'evidence': { main: 'library-hub', sub: 'evidence' },
    'closing': { main: 'library-hub', sub: 'closing' },
    'simulador': { main: 'simulador', sub: null },
    'glosario': { main: 'glosario', sub: null }
  };

  let currentPracticeCode = 'PR-01';
  const practiceOrder = ['PR-01', 'PR-02', 'PR-03', 'PR-04', 'PR-05', 'PR-06', 'PR-07'];

  // Control del Selector / Droplist de Prácticas (Enfoque en una práctica a la vez)
  function selectPractice(practiceCode) {
    if (!practiceCode) return;
    currentPracticeCode = practiceCode;

    // 1. Sincronizar droplist desplegable
    const selectEl = document.getElementById('practice-select-dropdown');
    if (selectEl && selectEl.value !== practiceCode) {
      selectEl.value = practiceCode;
    }

    // 2. Sincronizar botones de navegación Anterior / Siguiente
    const idx = practiceOrder.indexOf(practiceCode);
    const prevBtn = document.getElementById('btn-prev-practice');
    const nextBtn = document.getElementById('btn-next-practice');
    if (prevBtn) prevBtn.disabled = (idx <= 0);
    if (nextBtn) nextBtn.disabled = (idx >= practiceOrder.length - 1 || idx === -1);

    // 3. Sincronizar badge y resumen de práctica activa
    const badgeText = document.getElementById('practice-badge-text');
    if (badgeText && idx !== -1) {
      badgeText.textContent = `Práctica ${idx + 1} de 7 Activa (${practiceCode})`;
    }

    const detailsText = document.getElementById('practice-details-summary');
    const practiceSummary = {
      'PR-01': 'Bloque 1 · Facilitador: Agustín Gómez Meléndez · Recepción de quejas en hotel (Oral A2)',
      'PR-02': 'Bloque 2 · Facilitador: Agustín Gómez Meléndez · Retroalimentación diferenciada A2 vs B1',
      'PR-03': 'Bloque 2 · Facilitador: Agustín Gómez Meléndez · Anticipar errores y microrremedios',
      'PR-04': 'Bloque 2 · Facilitador: Agustín Gómez Meléndez · Chatbot tutor de práctica escrita',
      'PR-05': 'Bloque 3 · Facilitador: Agustín Gómez Meléndez · Rúbrica de 4 criterios y prueba de esfuerzo',
      'PR-06': 'Bloque 3 · Facilitador: Agustín Gómez Meléndez · Secuencia didáctica de 45 min y modo voz',
      'PR-07': 'Bloque 4 · Facilitador: Agustín Gómez Meléndez · Gestión y despliegue de IA local'
    };
    if (detailsText && practiceSummary[practiceCode]) {
      detailsText.textContent = practiceSummary[practiceCode];
    }

    // 4. Actualizar botones del stepper (con soporte getAttribute y dataset)
    document.querySelectorAll('.stepper-pill-btn').forEach(btn => {
      const p = btn.getAttribute('data-practice') || btn.dataset.practice;
      if (p === practiceCode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 5. Mostrar solo la tarjeta correspondiente con display forzado
    document.querySelectorAll('.practice-card').forEach(card => {
      const code = card.getAttribute('data-practice-code') || card.dataset.practiceCode;
      if (code === practiceCode) {
        card.style.setProperty('display', 'block', 'important');
        card.classList.add('active');
      } else {
        card.style.setProperty('display', 'none', 'important');
        card.classList.remove('active');
      }
    });

    updateLiveFocusBanner(practiceCode);
    document.dispatchEvent(new CustomEvent('ina:practice-changed', {
      detail: { practiceCode }
    }));
  }

  function navigatePractice(delta) {
    const currentIndex = practiceOrder.indexOf(currentPracticeCode);
    const newIndex = currentIndex + delta;
    if (newIndex >= 0 && newIndex < practiceOrder.length) {
      selectPractice(practiceOrder[newIndex]);
    }
  }

  function updateLiveFocusBanner(practiceCode) {
    const titles = {
      'PR-01': 'Bloque 1 (AGM) · Práctica 1: Recepción de quejas en hotel (A2 Oral)',
      'PR-02': 'Bloque 2 (AGM) · Práctica 2: Retroalimentación diferenciada (Escrita)',
      'PR-03': 'Bloque 2 (AGM) · Práctica 3: Anticipar errores y microrremedios',
      'PR-04': 'Bloque 2 (AGM) · Práctica 4: Configurar chatbot de práctica escrita',
      'PR-05': 'Bloque 3 (AGM) · Práctica 5: Rúbrica y prueba de esfuerzo',
      'PR-06': 'Bloque 3 (AGM) · Práctica 6: Secuencia didáctica de 45 minutos',
      'PR-07': 'Bloque 4 (AGM) · Práctica 7: Gestión y despliegue de IA local'
    };
    const facilitators = {
      'PR-01': 'Agustín Gómez Meléndez',
      'PR-02': 'Agustín Gómez Meléndez',
      'PR-03': 'Agustín Gómez Meléndez',
      'PR-04': 'Agustín Gómez Meléndez',
      'PR-05': 'Agustín Gómez Meléndez',
      'PR-06': 'Agustín Gómez Meléndez',
      'PR-07': 'Agustín Gómez Meléndez'
    };
    const titleEl = document.getElementById('live-focus-label');
    const subEl = document.getElementById('live-focus-sub');
    if (titleEl && titles[practiceCode]) titleEl.textContent = titles[practiceCode];
    if (subEl && facilitators[practiceCode]) subEl.textContent = `Facilitador: ${facilitators[practiceCode]} · Tiempo de práctica: 12 min`;
  }

  function jumpToLivePractice(practiceCode) {
    const code = practiceCode || currentPracticeCode || 'PR-01';
    switchTab('live', false);
    selectPractice(code);
    setTimeout(() => {
      const targetCard = document.querySelector(`.practice-card[data-practice-code="${code}"]`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  }

  // Control de sub-pestañas para Herramientas y Biblioteca
  function switchSubTab(parentZone, subId) {
    if (!parentZone || !subId) return;

    document.querySelectorAll(`.subtab-btn[data-parent-zone="${parentZone}"]`).forEach(btn => {
      if (btn.dataset.subtab === subId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll(`.subtab-pane[data-parent-zone="${parentZone}"]`).forEach(pane => {
      if (pane.id === `subpane-${subId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });
  }

  // Sistema de Pestañas Principal con enrutamiento inteligente entre páginas
  function switchTab(rawTabId, shouldScroll = false) {
    if (!rawTabId) return;

    const resolved = tabMapping[rawTabId] || { main: rawTabId, sub: null };
    const mainTabId = resolved.main;

    // Si la pestaña solicitada pertenece a Herramientas y no estamos en herramientas.html, redirigir
    if (mainTabId === 'tools' && !document.getElementById('subpane-builder')) {
      const sub = resolved.sub || 'builder';
      window.location.href = `herramientas.html#${sub}`;
      return;
    }

    // Si la pestaña solicitada pertenece a Biblioteca y no estamos en biblioteca.html, redirigir
    if (mainTabId === 'library-hub' && !document.getElementById('subpane-documents')) {
      const sub = resolved.sub || 'documents';
      window.location.href = `biblioteca.html#${sub}`;
      return;
    }

    // Si la pestaña solicitada es Live y no estamos en index.html, redirigir
    if ((mainTabId === 'live' || rawTabId === 'practices') && !document.getElementById('seccion-practica') && !document.getElementById('tab-live')) {
      window.location.href = 'index.html#seccion-practica';
      return;
    }

    // Si la pestaña solicitada es Simulador y no estamos en simulador.html, redirigir
    if (mainTabId === 'simulador' && !window.location.pathname.includes('simulador.html')) {
      window.location.href = 'simulador.html';
      return;
    }

    // Si la pestaña solicitada es Glosario y no estamos en glosario.html, redirigir
    if (mainTabId === 'glosario' && !window.location.pathname.includes('glosario.html')) {
      window.location.href = 'glosario.html';
      return;
    }

    // Si viene una sub-pestaña asociada, activarla
    if (resolved.sub) {
      if (typeof switchToolTab === 'function') {
        switchToolTab(resolved.sub);
      } else if (typeof switchLibraryTab === 'function') {
        switchLibraryTab(resolved.sub);
      } else {
        switchSubTab(mainTabId, resolved.sub);
      }
    }

    // Actualizar botones de navegación superior (Header)
    document.querySelectorAll('.nav-link-btn').forEach(link => {
      if (link.dataset.targetTab === mainTabId || link.dataset.targetTab === rawTabId) {
        link.classList.add('active');
      } else if (link.dataset.targetTab) {
        link.classList.remove('active');
      }
    });

    // Actualizar pestañas principales si existen en la página
    document.querySelectorAll('.tab-btn').forEach(btn => {
      if (btn.dataset.tab === mainTabId || btn.dataset.tab === rawTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Actualizar menú lateral
    document.querySelectorAll('.sidebar-nav-item[data-sidebar-tab]').forEach(btn => {
      if (btn.dataset.sidebarTab === mainTabId || btn.dataset.sidebarTab === rawTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Activar panel correspondiente solo si existe
    const targetPane = document.getElementById(`tab-${mainTabId}`);
    if (targetPane) {
      document.querySelectorAll('.tab-pane').forEach(pane => {
        if (pane.id === `tab-${mainTabId}`) {
          pane.classList.add('active');
          pane.style.display = 'block';
        } else {
          pane.classList.remove('active');
          pane.style.display = 'none';
        }
      });
      localStorage.setItem('ina_active_tab', mainTabId);
    } else if (document.getElementById('tab-live')) {
      // En index.html asegurar que tab-live se mantenga siempre visible
      const livePane = document.getElementById('tab-live');
      livePane.classList.add('active');
      livePane.style.display = 'block';
    }

    // Scroll suave hacia la sección de contenidos si fue activado por click
    if (shouldScroll) {
      const contentSection = document.getElementById('seccion-practica') || document.getElementById('content-tabs-nav-bar') || document.getElementById('live-focus-banner');
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Filtrado de Casos Ocupacionales
  function renderOccupationalCases(filterArea = 'all') {
    const grid = document.getElementById('cases-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = filterArea === 'all' 
      ? occupationalCases 
      : occupationalCases.filter(c => c.area === filterArea);

    filtered.forEach(c => {
      const card = document.createElement('div');
      card.className = 'case-card';
      card.innerHTML = `
        <div class="case-card-header">
          <span class="case-id-badge">${c.id}</span>
          <span class="case-level-badge">${c.level}</span>
        </div>
        <h4 class="case-title">${c.title}</h4>
        <div class="case-meta-row">
          <span><strong>Área:</strong> ${c.areaLabel}</span>
          <span><strong>Perfil:</strong> ${c.profile}</span>
          <span><strong>Objetivo:</strong> ${c.objective}</span>
          <span><strong>Situación:</strong> ${c.situation}</span>
          <span><strong>Evidencia:</strong> ${c.evidence}</span>
        </div>
        <div style="margin-top:auto;padding-top:0.75rem;border-top:1px solid var(--border-subtle);display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:0.75rem;color:var(--text-light);">Destreza: <strong>${c.skill}</strong></span>
          <button class="btn-secondary btn-use-case" data-id="${c.id}" style="font-size:0.75rem;padding:0.3rem 0.6rem;">
            Usar en Prompt
          </button>
        </div>
      `;

      card.querySelector('.btn-use-case').addEventListener('click', () => {
        // Cargar en el constructor de prompts de forma segura
        const roleEl = document.getElementById('pb-role');
        if (roleEl) {
          roleEl.value = `Actúe como facilitador y diseñador de actividades para ${c.areaLabel}.`;
          const levelEl = document.getElementById('pb-level');
          if (levelEl) levelEl.value = `${c.level} · Destreza: ${c.skill}`;
          const contextEl = document.getElementById('pb-context');
          if (contextEl) contextEl.value = `${c.profile} Situación: ${c.situation}`;
          const formatEl = document.getElementById('pb-format');
          if (formatEl) formatEl.value = `Objetivo observable: ${c.objective}\nEntregue guion breve de práctica y criterios observables.`;
          const restEl = document.getElementById('pb-restrictions');
          if (restEl) restEl.value = `Actividad de 12 minutos; sin datos personales; vocabulario adaptado al nivel ${c.level}.`;
          
          if (typeof switchToolTab === 'function') {
            switchToolTab('builder');
          } else {
            switchTab('builder', true);
          }
          if (typeof PromptBuilderModule !== 'undefined') {
            PromptBuilderModule.updateOutput();
          }
          showToast(`Caso ${c.id} transferido al Asistente de Prompts`);
        } else {
          // Si estamos fuera de herramientas.html, navegar
          window.location.href = 'herramientas.html#builder';
        }
      });

      grid.appendChild(card);
    });
  }

  // Banco de Documentos de la Biblioteca de Evidencia 2026 (41 PDFs Procesados con Pipeline V5.1)
  const corpusLibrary = [
    {
        "id": "DOC-01",
        "filename": "2026 Global AI Report-  A Playbook for Private  and Sovereign AI.pdf",
        "title": "Playbook Global 2026: IA Privada y Soberana en Instituciones",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 27,
        "block": "Bloque 4 (AGM) · Gestión de IA Local",
        "takeaway": "Orientaciones técnicas para operar modelos de IA en infraestructuras locales o privadas, protegiendo los registros y evaluaciones de estudiantes sin enviarlos a nubes comerciales.",
        "promptIdea": "“Explica qué precauciones de privacidad debe tomar un docente al usar IA con estudiantes según la Ley 8968 de Costa Rica.”"
    },
    {
        "id": "DOC-02",
        "filename": "AI Higher education survey 2026.pdf",
        "title": "Encuesta Global de Educación Superior e IA 2026",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 84,
        "block": "Bloque 1 (AGM) · Panorama y Método",
        "takeaway": "Evidencia de 2026 que revela que la mayor barrera docente no es la falta de acceso a herramientas, sino la ausencia de pautas pedagógicas claras para integrarlas en el aula.",
        "promptIdea": "“Sintetiza las 3 principales barreras pedagógicas docentes identificadas en la encuesta global de educación superior 2026.”"
    },
    {
        "id": "DOC-03",
        "filename": "AI LITERACY CURRICULUM FRAMEWORK FOR STUDENTS AND TEACHERS.pdf",
        "title": "Marco Curricular de Alfabetización en IA para Estudiantes y Docentes",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 34,
        "block": "Bloque 2 (AGM) · Usos No Convencionales",
        "takeaway": "Define las 3 competencias esenciales: comprensión del funcionamiento de los LLMs, uso reflexivo para andamiar el aprendizaje y evaluación crítica de sesgos.",
        "promptIdea": "“Diseña una actividad de 10 minutos para que estudiantes de inglés A2 identifiquen una respuesta de IA que parece correcta pero no responde la pregunta.”"
    },
    {
        "id": "DOC-04",
        "filename": "AI procurement in education The missing lever in AI governance.pdf",
        "title": "Adquisición y Gobernanza de IA en Educación",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 16,
        "block": "Bloque 4 (AGM) · Gobernanza",
        "takeaway": "Criterios institucionales para seleccionar software educativo que respete la soberanía pedagógica y no vulnere la privacidad de los aprendices.",
        "promptIdea": "“Elabora una lista de chequeo de 4 preguntas que un formador del INA debe hacerse antes de recomendar una app de IA a su grupo.”"
    },
    {
        "id": "DOC-05",
        "filename": "Alfabetización Mediatica de IA Educación.pdf",
        "title": "Alfabetización Mediática e Informacional en la Era de la IA",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 158,
        "block": "Bloque 1 (AGM) · Panorama y Método",
        "takeaway": "Manual exhaustivo de 158 páginas para entrenar el ojo crítico del estudiantado frente a contenidos sintéticos, verificación de fuentes y detección de falsedades con apariencia verosímil.",
        "promptIdea": "“Genera dos noticias breves en inglés A2 sobre turismo: una real y otra con un dato falso inventado, con preguntas para que los estudiantes descubran la discrepancia.”"
    },
    {
        "id": "DOC-06",
        "filename": "Artificial Intelligence IN SCHOOL EDUCATION IN TÜRKIYE.pdf",
        "title": "Inteligencia Artificial en la Educación Escolar de Turquía",
        "category": "pedagogia",
        "categoryLabel": "Pedagogía & Voz",
        "pages": 48,
        "block": "Bloque 1 (AGM) · Panorama y Método",
        "takeaway": "Estudio de caso a escala nacional que muestra cómo capacitar a docentes de segundas lenguas mediante talleres prácticos centrados en tareas concretas.",
        "promptIdea": "“Propón 3 estrategias para vencer la intimidación tecnológica inicial en docentes de idiomas que nunca han utilizado IA.”"
    },
    {
        "id": "DOC-07",
        "filename": "Building AI Training Clusters at 16K Accelerators.pdf",
        "title": "Infraestructura de Supercómputo y Entrenamiento de Modelos",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 16,
        "block": "Bloque 4 (AGM) · Gestión de IA Local",
        "takeaway": "Permite comprender el inmenso consumo energético de los modelos remotos en la nube y por qué los modelos pequeños locales (SLMs) son el futuro para aulas técnicas.",
        "promptIdea": "“Explica la diferencia entre un gran modelo en la nube (cloud LLM) y un modelo pequeño optimizado para correr localmente en una laptop.”"
    },
    {
        "id": "DOC-08",
        "filename": "Building traingin K16 courses.pdf",
        "title": "Articulación Curricular K-16 en Formación con Inteligencia Artificial",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 16,
        "block": "Bloque 2 (AGM) · Andamiaje",
        "takeaway": "Modelos de progresión curricular que muestran cómo graduar la dificultad de los ejercicios con IA desde niveles iniciales hasta la especialización técnica.",
        "promptIdea": "“Diseña una secuencia de 3 niveles para enseñar vocabulario de hotelería en inglés: A1 (reconocimiento), A2 (formulación con apoyo) y B1 (resolución de quejas).”"
    },
    {
        "id": "DOC-09",
        "filename": "Cambiando las habilidades de la IA .pdf",
        "title": "Transformación del Perfil de Competencias Laborales por la IA",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 60,
        "block": "Bloque 3 (AGM) · Modalidad Educativa",
        "takeaway": "Demuestra que las habilidades más demandadas en el mercado laboral no son técnicas aisladas, sino la comunicación oral en inglés, la adaptabilidad y el pensamiento crítico.",
        "promptIdea": "“Identifica 3 competencias ocupacionales del sector turismo que no pueden ser automatizadas por la IA y cómo potenciarlas en clase.”"
    },
    {
        "id": "DOC-10",
        "filename": "Co-ordinating the use of digital tools at the school level.pdf",
        "title": "Coordinación Institucional de Herramientas Digitales en Centros Educativos",
        "category": "pedagogia",
        "categoryLabel": "Pedagogía & Voz",
        "pages": 62,
        "block": "Bloque 3 (AGM) · Modalidad Educativa",
        "takeaway": "Protocolos para coordinar entre docentes de una misma especialidad del INA criterios unificados de evaluación y evitar saturar al estudiantado con múltiples plataformas.",
        "promptIdea": "“Redacta un acuerdo de aula de 3 puntos para el uso ético y transparente de la IA en tareas formativas de inglés.”"
    },
    {
        "id": "DOC-11",
        "filename": "Communication__An_EU_approach_to_online_child_safety_dbWzuKgJCCpJva9gUeijj6Js_132528.pdf",
        "title": "Marco Europeo de Seguridad y Protección de Menores en Línea",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 9,
        "block": "Bloque 4 (AGM) · Gobernanza",
        "takeaway": "Pautas de salvaguarda digital aplicables a estudiantes jóvenes de programas técnicos del INA, garantizando entornos libres de riesgos digitales.",
        "promptIdea": "“¿Cuáles son las medidas esenciales de protección de menores que un docente debe exigir al usar herramientas digitales en clase?”"
    },
    {
        "id": "DOC-12",
        "filename": "Como integrar la eduacción IA.pdf",
        "title": "Estrategias Didácticas para la Integración Curricular de la IA",
        "category": "pedagogia",
        "categoryLabel": "Pedagogía & Voz",
        "pages": 86,
        "block": "Bloque 3 (AGM) · Modalidad Educativa",
        "takeaway": "Metodología detallada para articular la IA con los programas oficiales de estudio, equilibrando el trabajo autónomo con la discusión colectiva guiada por el docente.",
        "promptIdea": "“Estructura una lección técnica de 45 minutos que use la IA durante 10 minutos para generar ideas y 35 minutos de debate e interacción oral entre estudiantes.”"
    },
    {
        "id": "DOC-13",
        "filename": "Curriculo y labor de Trabajo en el IA.pdf",
        "title": "Diseño Curricular y Formación Técnica para el Mundo del Trabajo",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 32,
        "block": "Bloque 3 (AGM) · Casos Ocupacionales",
        "takeaway": "Cómo alinear los resultados de aprendizaje técnico del INA con las tareas reales que desempeñarán los egresados en centros de contacto, hoteles y restaurantes.",
        "promptIdea": "“Elabora una tarea de desempeño ocupacional para recepcionistas de hotel que requiera escuchar a un cliente y confirmar su reservación en inglés A2.”"
    },
    {
        "id": "DOC-14",
        "filename": "DS:PAS 2500 4 2026 Artificial intelligence Part 4- AI literacy.pdf",
        "title": "Norma DS:PAS 2500-4 (2026): Estándar de Alfabetización en IA",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 31,
        "block": "Bloque 2 (AGM) · Alfabetización Docente",
        "takeaway": "Estándar normativo 2026 que define las competencias observables para evaluar la solvencia crítica de un profesional de la educación frente a sistemas de IA.",
        "promptIdea": "“Crea una rúbrica breve de 3 niveles para evaluar la capacidad de un estudiante de contrastar una salida de IA contra una fuente confiable.”"
    },
    {
        "id": "DOC-15",
        "filename": "DS:PAS 2500-1-2020 Artificial Intelligence Part 1- Transparency.pdf",
        "title": "Norma DS:PAS 2500-1: Transparencia y Explicabilidad Algorítmica",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 23,
        "block": "Bloque 1 (AGM) · Panorama y Método",
        "takeaway": "Exige que todo sistema de IA proporcione claridad sobre las fuentes y supuestos que utiliza, principio clave para evitar la aceptación ciega de textos sintéticos.",
        "promptIdea": "“Formula una instrucción que obligue a la IA a citar el principio gramatical específico que justifica cada corrección que hace a un párrafo.”"
    },
    {
        "id": "DOC-16",
        "filename": "DS:PAS 2500-2-2020 Artificial Intelligence.pdf",
        "title": "Norma DS:PAS 2500-2: Requisitos de Calidad y Robustez de Sistemas de IA",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 33,
        "block": "Bloque 4 (AGM) · Gestión Local",
        "takeaway": "Lineamientos para verificar que los modelos respondan de manera predecible y consistente ante diferentes tipos de entradas de los usuarios.",
        "promptIdea": "“Prueba de esfuerzo para prompts: ¿Cómo redactar una instrucción para que el modelo no se desvíe del nivel A1 sin importar qué le pregunte el alumno?”"
    },
    {
        "id": "DOC-17",
        "filename": "DS:PAS 2500-3-2023 Artificial Intelligence Part 3- Bias.pdf",
        "title": "Norma DS:PAS 2500-3: Identificación y Mitigación de Sesgos Algorítmicos",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 40,
        "block": "Bloque 1 y 3 (AGM) · Rúbricas y Sesgos",
        "takeaway": "Documento clave para entender la complacencia acrítica (sycophancy) y los sesgos lingüísticos que favorecen acentos o expresiones de ciertas regiones geográficas.",
        "promptIdea": "“Audita este diálogo de servicio al cliente: ¿La IA está aprobando errores de vocabulario del estudiante solo por ser excesivamente complaciente?”"
    },
    {
        "id": "DOC-18",
        "filename": "Data sovereingthy in practice.pdf",
        "title": "Soberanía de Datos en la Práctica Institucional",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 17,
        "block": "Bloque 4 (AGM) · Cierre y Gobernanza",
        "takeaway": "Principios para mantener el control sobre los datos generados por docentes y alumnos, impidiendo su comercialización o transferencia transfronteriza no autorizada.",
        "promptIdea": "“¿Qué precauciones técnicas debe considerar el INA para asegurar que los materiales de evaluación interna no queden almacenados en servidores externos?”"
    },
    {
        "id": "DOC-19",
        "filename": "EDTech Evidence report.pdf",
        "title": "Informe de Evidencia Empírica en Tecnología Educativa",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 12,
        "block": "Bloque 1 (AGM) · Evidencia PISA",
        "takeaway": "Confirma con datos que el software educativo solo genera ganancias en el aprendizaje de idiomas cuando promueve la interacción activa y no el consumo pasivo de pantallas.",
        "promptIdea": "“Diseña una consigna que utilice la IA como disparador para que dos estudiantes mantengan un diálogo presencial en inglés de 5 minutos.”"
    },
    {
        "id": "DOC-20",
        "filename": "EDTech y fundamentos de IA.pdf",
        "title": "Fundamentos Pedagógicos de EdTech e Inteligencia Artificial",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 86,
        "block": "Bloque 2 (AGM) · Usos No Convencionales",
        "takeaway": "Bases pedagógicas para seleccionar herramientas de acuerdo con los niveles del MCER (A1, A2, B1) y no dejarse llevar por la novedad tecnológica efímera.",
        "promptIdea": "“¿Cuáles son los 3 criterios pedagógicos que distinguen una buena actividad asistida por IA de un simple ejercicio de rellenar espacios vacíos?”"
    },
    {
        "id": "DOC-21",
        "filename": "EU ACT Implementatios Guia.pdf",
        "title": "Guía de Implementación del Reglamento Europeo de IA (AI Act)",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 67,
        "block": "Bloque 4 (AGM) · Gobernanza",
        "takeaway": "Clasifica los sistemas de evaluación educativa como IA de alto riesgo, estableciendo que ninguna nota ni diagnóstico puede ser emitido sin supervisión humana directa.",
        "promptIdea": "“Resume por qué la normativa internacional prohíbe que una IA califique de forma 100% autónoma un examen decisivo de certificación de idiomas.”"
    },
    {
        "id": "DOC-22",
        "filename": "Educación y habilidades en AI.pdf",
        "title": "Educación y Desarrollo de Competencias en la Era de la IA",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 34,
        "block": "Bloque 3 (AGM) · Modalidad Educativa",
        "takeaway": "Análisis de la demanda de talento bilingüe en industrias de servicios globales y cómo la formación técnica del INA puede liderar la empleabilidad con apoyo de IA.",
        "promptIdea": "“Elabora una simulación para entrenamiento en inglés de agentes de soporte técnico de nivel de entrada (B1).”"
    },
    {
        "id": "DOC-23",
        "filename": "Enseñana de peticiones para LLMs.pdf",
        "title": "Manual Integral de Ingeniería de Prompts para la Docencia",
        "category": "pedagogia",
        "categoryLabel": "Pedagogía & Voz",
        "pages": 282,
        "block": "Bloque 1 (AGM) · Asistente de Prompts",
        "takeaway": "Tratado de 282 páginas con patrones avanzados de prompting, andamiaje cognitivo, restricciones negativas, formulación de roles y evaluación offline/online.",
        "promptIdea": "“Convierte una consigna simple en un prompt maestro de 5 componentes con rol, contexto INA, nivel A2, formato estructurado y restricciones estrictas.”"
    },
    {
        "id": "DOC-24",
        "filename": "Fichas para docentes U en era de IA.pdf",
        "title": "Fichas Didácticas para Docentes en la Era de la Inteligencia Artificial",
        "category": "pedagogia",
        "categoryLabel": "Pedagogía & Voz",
        "pages": 23,
        "block": "Bloque 2 (AGM) · Agustín Gómez Meléndez",
        "takeaway": "Fichas prácticas listas para aplicar: cómo crear chatbots pedagógicos, planificar clases de 45 minutos con IA y diseñar rúbricas transparentes de evaluación formativa.",
        "promptIdea": "“Configura un chatbot de práctica escrita en Poe o ChatGPT que actúe como un cliente exigente pero cortés en inglés A2.”"
    },
    {
        "id": "DOC-25",
        "filename": "Guidance AI Risk Management Toolkit- guidance.pdf",
        "title": "Toolkit para la Gestión de Riesgos de IA en Centros Educativos",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 44,
        "block": "Bloque 4 (AGM) · Gobernanza",
        "takeaway": "Matriz paso a paso para evaluar riesgos de alucinación, desalineación curricular y brecha de acceso en instituciones de formación vocacional.",
        "promptIdea": "“Construye una matriz de riesgos para una actividad de clase donde los estudiantes usarán IA para practicar entrevistas laborales en inglés.”"
    },
    {
        "id": "DOC-26",
        "filename": "IA en educación superior de portugal.pdf",
        "title": "Investigación sobre la Adopción de IA en la Educación Superior de Portugal",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 74,
        "block": "Bloque 1 (AGM) · Evidencia",
        "takeaway": "Estudio empírico sobre cómo los docentes de idiomas utilizan la IA para crear material contextualizado y el valor de las directrices institucionales claras.",
        "promptIdea": "“¿Qué aprendizajes de la experiencia europea en idiomas pueden aplicarse a los programas técnicos del INA en Costa Rica?”"
    },
    {
        "id": "DOC-27",
        "filename": "Impact of AI on children’s socioemotional and cognitive competences .pdf",
        "title": "Impacto de la IA en Competencias Socioemocionales y Cognitivas",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 11,
        "block": "Bloque 3 (AGM) · Modalidad Educativa",
        "takeaway": "Alerta pedagógica: la interacción exclusiva con pantallas y bots puede reducir la empatía y la capacidad de negociación cara a cara. La IA debe complementar, no aislar.",
        "promptIdea": "“Diseña una actividad en parejas donde los estudiantes usen la IA solo como preparador de vocabulario antes de debatir en vivo.”"
    },
    {
        "id": "DOC-28",
        "filename": "Inteligencia artificial generativa y enseñanza.pdf",
        "title": "Inteligencia Artificial Generativa y Práctica Pedagógica",
        "category": "pedagogia",
        "categoryLabel": "Pedagogía & Voz",
        "pages": 94,
        "block": "Bloque 2 (AGM) · Usos No Convencionales",
        "takeaway": "Manual de 94 páginas sobre cómo transformar la docencia: tareas auténticas, co-diseño con IA y evaluación centrada en el proceso en vez de únicamente el producto final.",
        "promptIdea": "“¿Cómo transformar una tarea tradicional de redactar un ensayo en una práctica auténtica de resolución de un problema laboral en inglés?”"
    },
    {
        "id": "DOC-29",
        "filename": "Keeping children safe in education 2026 .pdf",
        "title": "Protocolo Internacional 2026 de Protección y Salvaguarda Estudiantil",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 196,
        "block": "Bloque 4 (AGM) · Ley 8968 y Cierre",
        "takeaway": "Tratado internacional 2026 sobre salvaguarda educativa: protocolos para evitar que los estudiantes queden expuestos a sesgos o manipulación algorítmica.",
        "promptIdea": "“Enumera 4 reglas prácticas de seguridad digital que todo docente del INA debe compartir con su clase el primer día de lecciones.”"
    },
    {
        "id": "DOC-30",
        "filename": "Large language models in school education- emerging evidence  .pdf",
        "title": "Grandes Modelos de Lenguaje en la Escuela: Evidencia Emergente",
        "category": "pedagogia",
        "categoryLabel": "Pedagogía & Voz",
        "pages": 65,
        "block": "Bloque 1 (AGM) · Panorama y Método",
        "takeaway": "Revisión de evidencia emergente sobre modelos de lenguaje en educación escolar. Advierte que los resultados dependen del diseño de la tarea, el acceso, la preparación docente y el contexto de aplicación.",
        "promptIdea": "“Diseña una micro-práctica oral A1 y especifica qué evidencia permitiría valorar su utilidad sin asumir que funcionará igual en todos los grupos.”"
    },
    {
        "id": "DOC-31",
        "filename": "Long-term growth assumptions in the face of artificial intelligence (AI) and demographic change.pdf",
        "title": "Crecimiento Económico a Largo Plazo, IA y Cambios Demográficos",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 33,
        "block": "Bloque 3 (AGM) · Casos Ocupacionales",
        "takeaway": "Perspectiva macroeconómica que fundamenta por qué la formación para el trabajo en Costa Rica debe elevar el nivel de inglés técnico para aprovechar la relocalización de empresas (nearshoring).",
        "promptIdea": "“Contextualiza la importancia del inglés técnico para estudiantes del INA en zonas costeras y rurales ante las nuevas oportunidades del turismo y servicios.”"
    },
    {
        "id": "DOC-32",
        "filename": "Marco para el uso de la Inteligencia Artificial en UDLA Docencia, Investigación y Vinculación con el Medio .pdf",
        "title": "Marco Institucional para el Uso Ético de la IA en Educación Superior (UDLA)",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 36,
        "block": "Bloque 4 (AGM) · Gobernanza",
        "takeaway": "Excelente modelo de política institucional con directrices claras: qué usos son válidos para docentes y estudiantes, y qué prácticas requieren declaración explícita de autoría.",
        "promptIdea": "“Redacta una cláusula de transparencia de 2 párrafos para que los estudiantes del INA declaren de forma honesta cómo utilizaron la IA en sus proyectos.”"
    },
    {
        "id": "DOC-33",
        "filename": "Proposal_for_EU_KIDS_Act__EU_Keeping_Internet_Digital_Spaces_Accountable_and_Trustworthy_wh7RxWPSibRG6UlfmCMgsZvcEgc_132530.pdf",
        "title": "Propuesta Normativa EU KIDS Act: Espacios Digitales Confiables y Responsables",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 99,
        "block": "Bloque 4 (AGM) · Gobernanza",
        "takeaway": "Obligaciones para plataformas de software educativo: eliminar patrones oscuros de diseño y asegurar que el contenido generado sea apropiado para la edad.",
        "promptIdea": "“¿Qué es un patrón oscuro de diseño en aplicaciones educativas y cómo proteger a los estudiantes de distracciones algorítmicas?”"
    },
    {
        "id": "DOC-34",
        "filename": "Si expulsamos la IA de las aulas,  ¿quién enseñará su uso responsable?”.pdf",
        "title": "“Si Expulsamos la IA de las Aulas, ¿Quién Enseñará su Uso Responsable?”",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 4,
        "block": "Bloque 1 (AGM) · Panorama y Método",
        "takeaway": "Manifiesto pedagógico fundamental: prohibir la IA es contraproducente; la misión de las instituciones de formación técnica es enseñar a usarla con criterio, ética y verificación.",
        "promptIdea": "“Redacta un argumento pedagógico de 1 minuto para explicar a un comité directivo por qué prohibir la IA en clase de idiomas perjudica la empleabilidad del graduado.”"
    },
    {
        "id": "DOC-35",
        "filename": "Skilss in the age of AI.pdf",
        "title": "Habilidades Laborales Esenciales en la Era de la IA",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 60,
        "block": "Bloque 3 (AGM) · Casos Ocupacionales",
        "takeaway": "Estudio sobre la reconfiguración del empleo: los trabajadores que combinan conocimientos técnicos con inglés y capacidad para comunicarse mediante prompts ganan mayor estabilidad y remuneración.",
        "promptIdea": "“Elabora una actividad de simulación de entrevista laboral en inglés B1 donde el candidato debe explicar cómo utiliza la tecnología para optimizar su tiempo.”"
    },
    {
        "id": "DOC-36",
        "filename": "Skilss y educación en AI.pdf",
        "title": "Educación Vocacional y Desarrollo de Competencias en IA",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 34,
        "block": "Bloque 3 (AGM) · Modalidad Educativa",
        "takeaway": "Guía para que los centros de formación profesional incorporen el bilingüismo tecnológico en las carreras de comercio, hotelería y tecnologías de la información.",
        "promptIdea": "“Diseña una consigna de práctica para que estudiantes de ventas practiquen cómo redactar correos de seguimiento a clientes extranjeros en inglés A2.”"
    },
    {
        "id": "DOC-37",
        "filename": "Staff_Working_Document_SWD__Analysis_of_Impacts_accoumpaning_the_proposal_for_EU_kids_Act_1SqMair9vok4N0jgg3FmJkH6A_132529.pdf",
        "title": "Documento de Trabajo: Análisis de Impacto de la Regulación Digital en la Juventud",
        "category": "etica",
        "categoryLabel": "Ética & Privacidad",
        "pages": 83,
        "block": "Bloque 4 (AGM) · Gobernanza",
        "takeaway": "Datos sociológicos y pedagógicos sobre el impacto del tiempo de pantalla y la importancia de alternar dinámicas digitales con actividades físicas y orales colaborativas.",
        "promptIdea": "“¿Cómo diseñar una secuencia de clase híbrida que no exceda 15 minutos continuos de uso de pantalla para mantener la atención del grupo?”"
    },
    {
        "id": "DOC-38",
        "filename": "The IA Scenarios 20230.pdf",
        "title": "Escenarios Futuros de la Educación con Inteligencia Artificial hacia 2030",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 92,
        "block": "Bloque 4 (AGM) · Cierre y Compromisos",
        "takeaway": "Cuatro escenarios prospectivos para la próxima década: resalta que el escenario más exitoso es aquel donde la IA potencia la empatía, tutoría y liderazgo de la persona docente.",
        "promptIdea": "“Escribe una reflexión de 3 oraciones sobre el rol insustituible del educador del INA en la formación de valores humanos y disciplina laboral.”"
    },
    {
        "id": "DOC-39",
        "filename": "The Scale for AI Literacy in Health Care Workers- Development and Validation.pdf",
        "title": "Desarrollo y Validación de una Escala de Alfabetización en IA",
        "category": "alfabetizacion",
        "categoryLabel": "Alfabetización & Trabajo",
        "pages": 22,
        "block": "Bloque 2 (AGM) · Agustín Gómez Meléndez",
        "takeaway": "Metodología psicométrica rigurosa para evaluar si los trabajadores técnicos poseen competencias reales de uso crítico de IA, aplicable a la formación del INA.",
        "promptIdea": "“Adapta una escala de 5 preguntas tipo Likert para que los docentes del INA autoevalúen su nivel de confianza al integrar IA en sus lecciones.”"
    },
    {
        "id": "DOC-40",
        "filename": "The right to an explanation Towards explainable AI in education.pdf",
        "title": "El Derecho a la Explicación: Hacia una IA Explicable en Educación (XAI)",
        "category": "evaluacion",
        "categoryLabel": "Evaluación & Evidencia",
        "pages": 17,
        "block": "Bloque 3 (AGM) · Rúbricas y Feedback",
        "takeaway": "Principio pedagógico y legal indispensable: ningún estudiante debe recibir una corrección automatizada sin una explicación clara del motivo del error y cómo superarlo.",
        "promptIdea": "“Genera un prompt que obligue a la IA a proporcionar retroalimentación explicable en 3 partes: error identificado, regla de uso y frase modelo alternativa.”"
    },
    {
        "id": "DOC-41",
        "filename": "Uso de modelos de voz e IA.pdf",
        "title": "Evaluación Oral Escalable con IA de Voz (NYU Stern, Marzo 2026)",
        "category": "pedagogia",
        "categoryLabel": "Pedagogía & Voz",
        "pages": 11,
        "block": "Bloque 1 y Bloque 3 (AGM) · Evaluación Oral",
        "takeaway": "Caso universitario de 36 exámenes orales con IA de voz. Documenta requisitos, fallas de conversación y la necesidad de revisión docente; no demuestra superioridad general ni evalúa aprendizaje de idiomas en el INA.",
        "promptIdea": "“Configure una conversación oral A2 de cuatro turnos y registre si el sistema espera, mantiene el papel y produce evidencia revisable.”"
    }
];

  // Renderizado interactivo de la Biblioteca de Evidencia
  function renderLibraryCards(categoryFilter = 'all', searchQuery = '') {
    const grid = document.getElementById('library-cards-grid');
    const counterBadge = document.getElementById('library-counter-badge');
    if (!grid) return;

    grid.innerHTML = '';
    const q = searchQuery.toLowerCase().trim();

    const filtered = corpusLibrary.filter(doc => {
      const matchesCat = (categoryFilter === 'all' || doc.category === categoryFilter);
      const matchesSearch = !q || (
        doc.title.toLowerCase().includes(q) ||
        doc.filename.toLowerCase().includes(q) ||
        doc.takeaway.toLowerCase().includes(q) ||
        doc.block.toLowerCase().includes(q) ||
        doc.categoryLabel.toLowerCase().includes(q)
      );
      return matchesCat && matchesSearch;
    });

    if (counterBadge) {
      counterBadge.textContent = `${filtered.length} de ${corpusLibrary.length} documentos`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="color: var(--ina-blue-900); margin-bottom: 0.5rem;">No se encontraron documentos</h3>
          <p style="font-size: 0.9rem;">Intente con otra palabra clave (ej: voz, prompt, ética, evaluación, niños, rúbrica, MCER) o cambie de categoría.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(doc => {
      const card = document.createElement('article');
      card.className = `library-card cat-${doc.category}`;
      card.innerHTML = `
        <div class="library-card-header">
          <div class="library-badges-row">
            <span class="library-category-badge badge-${doc.category}">${doc.categoryLabel}</span>
            <span class="library-pages-badge">📄 ${doc.pages} págs.</span>
          </div>
          <span class="library-block-tag">${doc.block}</span>
        </div>
        <h3 class="library-card-title">${doc.title}</h3>
        <div class="library-file-ref">
          <span class="file-icon">📎</span>
          <code>${doc.filename}</code>
        </div>
        <p class="library-card-takeaway">${doc.takeaway}</p>
        <div class="library-prompt-box">
          <div class="prompt-box-label">💡 Consigna pedagógica sugerida para el docente:</div>
          <div class="prompt-box-text">${doc.promptIdea}</div>
          <button class="btn-copy-prompt-idea" data-prompt="${doc.promptIdea.replace(/"/g, '&quot;')}">📋 Copiar consigna</button>
        </div>
      `;

      card.querySelector('.btn-copy-prompt-idea').addEventListener('click', (e) => {
        const text = e.currentTarget.dataset.prompt.replace(/^“|”$/g, '');
        copyToClipboard(text, 'Consigna pedagógica copiada al portapapeles');
      });

      grid.appendChild(card);
    });
  }

  // Modales de Plan B
  function openPlanBModal(practiceCode) {
    const data = backupOutputs[practiceCode];
    if (!data) return;

    const modalTitle = document.getElementById('modal-planb-title');
    const modalBody = document.getElementById('modal-planb-body');
    const modal = document.getElementById('modal-planb');

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="background:var(--ina-amber-50);border:1px solid var(--ina-amber-100);padding:0.75rem 1rem;border-radius:8px;margin-bottom:1rem;color:#92400e;font-size:0.85rem;">
          <strong>Aviso de Plan B:</strong> Utilice esta salida si su herramienta presenta problemas de conexión o acceso. Lo evaluado es su análisis crítico y juicio pedagógico.
        </div>
        
        <h4 style="margin-bottom:0.35rem;color:var(--ina-blue-900);">1. Instrucción / Prompt de Respaldo:</h4>
        <pre style="background:#ffffff;border:1px solid var(--border-medium);padding:0.75rem;border-radius:6px;font-size:0.8rem;white-space:pre-wrap;margin-bottom:1rem;">${data.promptUsed}</pre>

        <h4 style="margin-bottom:0.35rem;color:var(--ina-green-700);">2. Salida Pregenerada de Calidad Aceptable:</h4>
        <div style="background:#ffffff;border:1px solid var(--ina-green-500);padding:0.85rem;border-radius:6px;font-size:0.85rem;line-height:1.5;margin-bottom:1rem;white-space:pre-wrap;">${data.goodOutput}</div>

        <h4 style="margin-bottom:0.35rem;color:var(--ina-red-600);">3. Salida Deliberadamente Defectuosa (Para Práctica Crítica):</h4>
        <div style="background:#ffffff;border:1px solid var(--ina-red-500);padding:0.85rem;border-radius:6px;font-size:0.85rem;line-height:1.5;margin-bottom:1rem;white-space:pre-wrap;">${data.badOutput}</div>

        <div style="background:var(--ina-blue-50);border:1px solid var(--ina-blue-100);padding:0.75rem;border-radius:6px;font-size:0.85rem;">
          <strong>Hallazgo Crítico a Identificar:</strong> ${data.criticalFinding}
        </div>
      `;
    }

    if (modal) modal.classList.add('active');
  }

  function closeModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
  }

  function init() {
    // Inicializar submódulos con aislamiento de errores
    try { if (typeof TimerModule !== 'undefined') TimerModule.init(); } catch (e) { console.warn('TimerModule init:', e); }
    try { if (typeof PromptBuilderModule !== 'undefined') PromptBuilderModule.init(); } catch (e) { console.warn('PromptBuilderModule init:', e); }
    try { if (typeof RubricTesterModule !== 'undefined') RubricTesterModule.init(); } catch (e) { console.warn('RubricTesterModule init:', e); }
    try { if (typeof SlideViewerModule !== 'undefined') SlideViewerModule.init(); } catch (e) { console.warn('SlideViewerModule init:', e); }
    try { if (typeof TutorModule !== 'undefined') TutorModule.init(); } catch (e) { console.warn('TutorModule init:', e); }

    // Navegación de pestañas secundarias
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        if (tab) switchTab(tab, false);
      });
    });

    // Enlaces de navegación superior (Header)
    document.querySelectorAll('.nav-link-btn').forEach(link => {
      link.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.targetTab;
        if (tab) {
          e.preventDefault();
          switchTab(tab, true);
        }
      });
    });

    // Navegación del Menú Lateral (Sidebar)
    document.querySelectorAll('.sidebar-nav-item[data-sidebar-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.sidebarTab;
        if (tab) switchTab(tab, true);
      });
    });

    // Acciones de scroll en el Sidebar (Apertura garantizada del acordeón)
    document.querySelectorAll('.sidebar-nav-item[data-sidebar-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.currentTarget.dataset.sidebarAction;
        if (action === 'scroll-timeline' || action === 'scroll-workflow') {
          switchTab('live', false);
          const detailsEl = document.getElementById('details-agenda-workflow');
          if (detailsEl) detailsEl.open = true;
          const targetId = action === 'scroll-timeline' ? 'section-timeline' : 'section-workflow';
          setTimeout(() => {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 80);
        }
      });
    });

    // Botón de colapsar / expandir Sidebar
    document.getElementById('btn-toggle-sidebar')?.addEventListener('click', () => toggleSidebar());

    // Restaurar estado de Sidebar guardado
    const isSidebarCollapsed = localStorage.getItem('ina_sidebar_collapsed') === '1';
    if (isSidebarCollapsed) {
      toggleSidebar(true);
    }

    // Filtros de casos ocupacionales
    document.querySelectorAll('.case-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.case-filter-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        renderOccupationalCases(e.currentTarget.dataset.area);
      });
    });

    // Stepper de prácticas en vivo (Zona 1)
    document.querySelectorAll('.stepper-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const code = e.currentTarget.dataset.practice;
        if (code) selectPractice(code);
      });
    });

    // Subtabs de navegación dentro de zonas (Zona 2 y 3)
    document.querySelectorAll('.subtab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const zone = e.currentTarget.dataset.parentZone || e.currentTarget.dataset.zone;
        const sub = e.currentTarget.dataset.subtab;
        if (zone && sub) switchSubTab(zone, sub);
      });
    });

    // Botón de salto rápido en banner de enfoque
    document.getElementById('btn-jump-live-practice')?.addEventListener('click', () => {
      jumpToLivePractice(currentPracticeCode);
    });

    // Clicks en pasos de la línea de tiempo
    document.querySelectorAll('.timeline-step-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.dataset.jumpTab;
        const targetDeck = e.currentTarget.dataset.jumpDeck;
        if (targetTab) {
          switchTab(targetTab, true);
        }
        if (targetDeck && typeof SlideViewerModule !== 'undefined') {
          SlideViewerModule.loadDeck(targetDeck);
        }
      });
    });

    // Botones de Plan B en tarjetas
    document.querySelectorAll('.btn-plan-b').forEach(btn => {
      btn.addEventListener('click', (e) => {
        openPlanBModal(e.currentTarget.dataset.practice);
      });
    });

    // Botones de copiado de consigna
    document.querySelectorAll('.btn-copy-consigna').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const code = e.currentTarget.dataset.practice;
        const card = e.currentTarget.closest('.practice-card');
        const text = card.querySelector('.practice-steps-list').innerText;
        copyToClipboard(text, `Consigna ${code} copiada`);
      });
    });

    // Botones de copiado directo de orden pedagógica en Paso 1
    document.querySelectorAll('.btn-copy-prompt-direct').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = e.currentTarget.dataset.prompt;
        if (text) {
          copyToClipboard(text, 'Orden pedagógica copiada al portapapeles');
        }
      });
    });

    // Cierre visible del flujo: conservar el trabajo en el cuaderno local.
    document.querySelectorAll('.practice-card').forEach(card => {
      const code = card.dataset.practiceCode;
      const prompt = card.querySelector('.btn-copy-prompt-direct')?.dataset.prompt || '';
      const actionGrid = card.querySelector('.action-steps-grid');
      if (!code || !actionGrid || card.querySelector('.practice-save-panel')) return;
      const panel = document.createElement('div');
      panel.className = 'practice-save-panel';
      panel.innerHTML = `
        <div class="practice-save-message">
          <strong>💾 Al terminar en la IA, conserve su trabajo</strong>
          <span>ChatGPT, Claude y Gemini se abren fuera de este portal. Recuerde copiar la respuesta obtenida y pegarla en su cuaderno antes de continuar.</span>
        </div>
        <button type="button" class="btn-primary btn-save-to-notebook" data-practice="${code}">
          Guardar esta actividad en mi cuaderno
        </button>`;
      actionGrid.insertAdjacentElement('afterend', panel);
      panel.querySelector('.btn-save-to-notebook')?.addEventListener('click', () => {
        if (typeof LocalNotebookModule !== 'undefined') {
          LocalNotebookModule.prepareEntry(code, prompt);
          showToast(`${code} preparado en el cuaderno. Pegue la respuesta de la IA.`);
        }
      });
    });

    // Recordatorio al salir hacia una IA externa; el portal no puede leer su respuesta.
    document.querySelectorAll('.btn-ai-link').forEach(link => {
      link.addEventListener('click', () => {
        showToast('Recuerde volver y pegar la respuesta de la IA en su cuaderno local.');
      });
    });

    // Filtros de la Biblioteca de Evidencia 2026
    document.querySelectorAll('.library-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.library-filter-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const searchVal = document.getElementById('library-search-input')?.value || '';
        renderLibraryCards(e.currentTarget.dataset.category, searchVal);
      });
    });

    // Buscador en tiempo real de la Biblioteca
    document.getElementById('library-search-input')?.addEventListener('input', (e) => {
      const activeCat = document.querySelector('.library-filter-btn.active')?.dataset.category || 'all';
      renderLibraryCards(activeCat, e.target.value);
    });

    // Renderizar biblioteca inicial
    renderLibraryCards('all', '');

    // Cierre de modales
    document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === el) closeModals();
      });
    });

    // Renderizar casos iniciales
    renderOccupationalCases('all');

    // Inicializar stepper en PR-01
    selectPractice('PR-01');

    // Restaurar pestaña activa previa solo si existe en la página actual
    const savedTab = localStorage.getItem('ina_active_tab');
    if (savedTab && document.getElementById(`tab-${savedTab}`)) {
      switchTab(savedTab, false);
    } else if (document.getElementById('tab-live')) {
      switchTab('live', false);
    }
  }

  return {
    init,
    showToast,
    copyToClipboard,
    switchTab,
    switchSubTab,
    selectPractice,
    navigatePractice,
    jumpToLivePractice,
    toggleSidebar,
    openPlanBModal,
    closeModals,
    renderLibraryCards
  };
})();

// Iniciar aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
