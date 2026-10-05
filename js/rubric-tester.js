/**
 * TALLER INA · Probador Interactivo de Rúbrica y Muestras Sintéticas (rubric-tester.js)
 * Permite ensayar la rúbrica analítica en modalidad cuantitativa (1-16 pts)
 * o cualitativa (niveles de logro y retroalimentación narrativa).
 * Comienza 100% en blanco para que el participante evalúe paso a paso.
 */

const RubricTesterModule = (() => {
  const samples = {
    sampleA: {
      name: 'Muestra A · Respuesta B1 Sólida',
      expectedScore: 16,
      expectedBreakdown: { c1: 4, c2: 4, c3: 4, c4: 4 },
      analysis: 'Cumple a cabalidad (16/16): Reconoce el error del auricular negro en lugar del azul, ofrece enviar el modelo correcto mañana sin costo adicional, solicita confirmar la dirección y mantiene un tono cortés y profesional.',
      text: `Subject: Your order

Dear Ms. Rivera,

Thank you for contacting us. I am sorry that you received the black headset instead of the blue model you ordered. We can send the correct headset tomorrow at no extra cost. Please keep the incorrect item in its original box. Our delivery partner will collect it when the new item arrives.

Please confirm that the delivery address in your order is still correct. After your confirmation, I will send you the tracking number.

Kind regards,
Customer Service`
    },
    sampleB: {
      name: 'Muestra B · Respuesta Defectuosa / Confusa',
      expectedScore: 8,
      expectedBreakdown: { c1: 2, c2: 2, c3: 2, c4: 2 },
      analysis: 'Presenta fallas críticas (8/16): Culpa a la foto ("Maybe the photo was different"), no da una solución clara, traslada el problema al cliente ("You need send it again") y contiene errores de gramática ("package come", "company always try").',
      text: `Subject: Problem

Hello,

We see your message and the product is not the same. You need send it again because in the company we cannot know why this happened. Maybe the photo was different. We can look the case when the package come. You must wait some days and after we say what solution is possible. The company always try to make good service.

Regards`
    },
    sampleC: {
      name: 'Muestra C · Interacción Oral y Alerta de Complacencia (Sycophancy)',
      expectedScore: 9,
      expectedBreakdown: { c1: 3, c2: 2, c3: 2, c4: 2 },
      analysis: 'Alerta de complacencia de la IA (9/16): El estudiante tiene buena actitud (c1=3), pero comete errores de tiempo verbal ("I can helped you", "you must gave me"), estructura confusa y falta de confirmación formal. La IA del chat le dijo "Your English is perfect!", evidenciando el sesgo de complacencia acrítica (Sycophancy, norma DS:PAS 2500-3). El docente debe corregir el criterio sin dejarse llevar por el falso elogio del modelo.',
      text: `[TRANSCRIPCIÓN DE INTERACCIÓN ORAL EN VIVO CON IA DE VOZ]
Rol: Recepción de hotel · Turno 3 de práctica oral A2

Cliente (IA): "Excuse me, I need my luggage brought up to room 304, and also I cannot find my breakfast voucher."

Estudiante INA: "Hello sir. Yes, I can helped you for your luggage, but you must gave me your ticket first. For breakfast, the restaurant is open at 6:30 and you just telling your room number to the waiter."

Respuesta de la IA (Con sesgo de complacencia):
"Wonderful! That was fantastic, your English is completely flawless and excellent! Have a great day!"`
    }
  };

  let currentSampleKey = 'sampleA';
  let evaluationMode = 'quantitative';
  // Comienza 100% en blanco (null)
  let userScores = { c1: null, c2: null, c3: null, c4: null };
  const qualitativeLevels = {
    4: 'Cumple con solidez',
    3: 'Cumple',
    2: 'Cumple parcialmente',
    1: 'Aún no cumple'
  };
  const criterionNames = {
    c1: 'Cumplimiento comunicativo',
    c2: 'Organización y cohesión',
    c3: 'Control lingüístico',
    c4: 'Adecuación profesional'
  };

  function setSample(sampleKey) {
    if (!samples[sampleKey]) return;
    currentSampleKey = sampleKey;

    // Actualizar botones de muestra
    document.querySelectorAll('.sample-tab-btn').forEach(btn => {
      if (btn.dataset.sample === sampleKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Mostrar texto de la muestra
    const sampleBox = document.getElementById('rubric-sample-text');
    if (sampleBox) {
      sampleBox.textContent = samples[sampleKey].text;
    }

    // Resetear rúbrica a blanco para la nueva muestra
    resetRubric();
  }

  function resetRubric() {
    userScores = { c1: null, c2: null, c3: null, c4: null };

    // Deseleccionar todas las celdas
    document.querySelectorAll('.rubric-cell').forEach(cell => {
      cell.classList.remove('selected');
    });

    // Actualizar badges de fila a "Pendiente"
    ['c1', 'c2', 'c3', 'c4'].forEach(crit => {
      const badge = document.getElementById(`badge-crit-${crit}`);
      if (badge) {
        badge.className = 'criterion-status-badge pending';
        badge.innerHTML = '⚠️ Pendiente';
      }
    });

    updateSummaryDisplay();
  }

  function setScore(criterionId, scoreVal) {
    userScores[criterionId] = parseInt(scoreVal, 10);

    // Actualizar celdas visualmente
    document.querySelectorAll(`.rubric-cell[data-criterion="${criterionId}"]`).forEach(cell => {
      if (parseInt(cell.dataset.score, 10) === userScores[criterionId]) {
        cell.classList.add('selected');
      } else {
        cell.classList.remove('selected');
      }
    });

    // Actualizar badge de la fila
    const badge = document.getElementById(`badge-crit-${criterionId}`);
    if (badge) {
      badge.className = 'criterion-status-badge done';
        badge.textContent = evaluationMode === 'qualitative'
          ? `✓ ${qualitativeLevels[userScores[criterionId]]}`
          : `✓ ${userScores[criterionId]} pts`;
    }

    updateSummaryDisplay();
  }

  function updateSummaryDisplay() {
    const totalSelected = ['c1', 'c2', 'c3', 'c4'].filter(k => userScores[k] !== null).length;
    const currentSum = Object.values(userScores).reduce((acc, v) => acc + (v || 0), 0);

    const scoreDisplay = document.getElementById('rubric-total-score');
    const analysisBox = document.getElementById('rubric-expert-analysis');
    const progressText = document.getElementById('rubric-progress-text');

    if (scoreDisplay) scoreDisplay.textContent = evaluationMode === 'qualitative' ? 'En proceso' : `${currentSum} / 16`;

    if (progressText) {
      progressText.textContent = `${totalSelected} de 4 criterios evaluados`;
    }

    if (analysisBox) {
      if (totalSelected < 4) {
        analysisBox.innerHTML = `
          <div style="color:#fde68a;font-weight:600;">
            👉 <strong>Paso actual:</strong> Haga clic en una casilla de cada criterio en la tabla de abajo para calificar este correo (${totalSelected}/4 completados).
          </div>
        `;
      } else if (evaluationMode === 'qualitative') {
        const data = samples[currentSampleKey];
        const profile = Object.keys(userScores).map(key =>
          `<li><strong>${criterionNames[key]}:</strong> ${qualitativeLevels[userScores[key]]}</li>`
        ).join('');
        const referenceProfile = Object.keys(data.expectedBreakdown).map(key =>
          `${criterionNames[key]}: ${qualitativeLevels[data.expectedBreakdown[key]]}`
        ).join('; ');
        const aligned = Object.keys(userScores).filter(key => userScores[key] === data.expectedBreakdown[key]).length;
        const alignmentMessage = aligned === 4
          ? 'La lectura cualitativa coincide con el perfil de referencia en todos los criterios.'
          : aligned >= 2
            ? 'La lectura cualitativa muestra coincidencias parciales; conviene revisar la evidencia de los criterios con diferente nivel.'
            : 'La lectura cualitativa difiere del perfil de referencia; vuelva a los fragmentos observables antes de emitir el juicio.';

        if (scoreDisplay) scoreDisplay.textContent = 'Perfil listo';
        analysisBox.innerHTML = `
          <div class="qualitative-result-card">
            <div class="qualitative-result-heading">📝 <strong>Perfil cualitativo de desempeño</strong></div>
            <ul class="qualitative-profile-list">${profile}</ul>
            <p><strong>Lectura de calibración:</strong> ${alignmentMessage}</p>
            <p><strong>Perfil orientativo de facilitación:</strong> ${referenceProfile}.</p>
            <p><strong>Retroalimentación narrativa:</strong> ${data.analysis.replace(/\s*\([^)]*\/16\):?/, ':')}</p>
            <p class="qualitative-note">Este perfil orienta la retroalimentación formativa y no asigna una nota.</p>
          </div>
        `;
      } else {
        // Los 4 criterios han sido calificados
        const data = samples[currentSampleKey];
        const diff = currentSum - data.expectedScore;
        let comparisonMsg = '';

        if (diff === 0) {
          comparisonMsg = '🎯 <strong>¡Excelente calibración!</strong> Su puntuación coincide exactamente con el dictamen de referencia.';
        } else if (Math.abs(diff) <= 2) {
          comparisonMsg = `👍 <strong>Calibración muy cercana:</strong> Su puntuación difiere en solo ${Math.abs(diff)} punto(s) de la referencia oficial.`;
        } else {
          comparisonMsg = `🔍 <strong>Revisión recomendada:</strong> Hay una diferencia de ${Math.abs(diff)} puntos con el dictamen oficial. Observe los descriptores observables.`;
        }

        analysisBox.innerHTML = `
          <div style="background:rgba(255,255,255,0.15);padding:0.75rem 1rem;border-radius:8px;margin-top:0.25rem;">
            <div style="color:#a7f3d0;font-size:0.95rem;margin-bottom:0.35rem;">${comparisonMsg}</div>
            <div style="font-size:0.85rem;color:#ffffff;line-height:1.4;">
              <strong>Puntuación de referencia oficial:</strong> <code>${data.expectedScore}/16 pts</code>.<br>
              <em>${data.analysis}</em>
            </div>
          </div>
        `;
      }
    }
  }

  function setEvaluationMode(mode) {
    if (!['quantitative', 'qualitative'].includes(mode)) return;
    evaluationMode = mode;

    document.querySelectorAll('.evaluation-mode-btn').forEach(btn => {
      const active = btn.dataset.evaluationMode === mode;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const qualitative = mode === 'qualitative';
    const copy = {
      stepTwo: qualitative
        ? 'Seleccione el nivel de logro que mejor describa la evidencia observable en cada criterio.'
        : 'Haga clic en la casilla de nivel que corresponda (1 a 4 pts) en cada una de las 4 filas.',
      stepThree: qualitative
        ? 'Al completar los 4 criterios, el sistema mostrará un perfil de desempeño y retroalimentación narrativa sin nota.'
        : 'Al completar las 4 filas, el sistema mostrará su calificación y la comparará con el dictamen del facilitador.'
    };
    document.getElementById('rubric-step-two-copy').textContent = copy.stepTwo;
    document.getElementById('rubric-step-three-copy').textContent = copy.stepThree;
    document.getElementById('rubric-level-4').textContent = qualitative ? 'Cumple con solidez' : '4 · Cumple con solidez (4 pts)';
    document.getElementById('rubric-level-3').textContent = qualitative ? 'Cumple' : '3 · Cumple (3 pts)';
    document.getElementById('rubric-level-2').textContent = qualitative ? 'Cumple parcialmente' : '2 · Cumple parcialmente (2 pts)';
    document.getElementById('rubric-level-1').textContent = qualitative ? 'Aún no cumple' : '1 · No cumple (1 pt)';
    document.getElementById('rubric-result-label').textContent = qualitative ? 'Resultado cualitativo:' : 'Puntaje acumulado:';

    Object.keys(userScores).forEach(criterionId => {
      const badge = document.getElementById(`badge-crit-${criterionId}`);
      if (badge && userScores[criterionId] !== null) {
        badge.textContent = qualitative
          ? `✓ ${qualitativeLevels[userScores[criterionId]]}`
          : `✓ ${userScores[criterionId]} pts`;
      }
    });
    updateSummaryDisplay();
  }

  function init() {
    // Guard clause: solo inicializar si el probador de rúbricas existe en la página
    if (!document.getElementById('rubric-sample-text') && !document.querySelector('.rubric-cell')) return;

    // Escuchar clicks en pestañas de muestra
    document.querySelectorAll('.sample-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        setSample(e.currentTarget.dataset.sample);
      });
    });

    // Escuchar clicks en celdas de la rúbrica
    document.querySelectorAll('.rubric-cell').forEach(cell => {
      cell.addEventListener('click', (e) => {
        const crit = e.currentTarget.dataset.criterion;
        const score = e.currentTarget.dataset.score;
        if (crit && score) {
          setScore(crit, score);
        }
      });
    });

    document.querySelectorAll('.evaluation-mode-btn').forEach(btn => {
      btn.addEventListener('click', e => setEvaluationMode(e.currentTarget.dataset.evaluationMode));
    });

    // Botón de limpiar rúbrica
    document.getElementById('btn-reset-rubric')?.addEventListener('click', resetRubric);

    // Inicializar con la Muestra A en blanco
    setSample('sampleA');
  }

  return {
    init,
    setSample,
    setScore,
    resetRubric
  };
})();
