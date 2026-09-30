/**
 * TALLER INA · Módulo de Temporizadores Interactivos (timer.js)
 * Maneja el cronómetro individual de 12 minutos y el temporizador maestro de 25 min para tutores.
 */

const TimerModule = (() => {
  // Estado del cronómetro de práctica de 12 minutos
  let practiceInterval = null;
  let practiceTotalSeconds = 12 * 60; // 12 minutos por defecto
  let practiceRemaining = practiceTotalSeconds;
  let practiceIsRunning = false;
  let practiceDeadline = null;
  let practiceAlerts = new Set();

  // Estado del temporizador maestro de ciclo (25 minutos)
  let cycleInterval = null;
  let cycleStageSeconds = 8 * 60; // 8 min por defecto (etapa 1)
  let cycleRemaining = cycleStageSeconds;
  let cycleIsRunning = false;
  let cycleDeadline = null;
  let currentStageIndex = 0;

  const cycleStages = [
    { name: 'Demostración Conducida', duration: 8 * 60, code: 'demo' },
    { name: 'Práctica Individual', duration: 12 * 60, code: 'practice' },
    { name: 'Guardado en cuaderno local', duration: 3 * 60, code: 'delivery' },
    { name: 'Devolución Pública y Síntesis', duration: 2 * 60, code: 'feedback' }
  ];

  // Generador de sonido sutil con Web Audio API (sin archivos de audio externos)
  function playNotificationBeep(frequency = 587.33, duration = 0.3) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.log('Audio notification bypassed');
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // --- Cronómetro de Práctica (12 min) ---
  function updatePracticeDisplay() {
    const display = document.getElementById('practice-timer-display');
    if (!display) return;

    display.textContent = formatTime(practiceRemaining);
    display.classList.remove('warning', 'urgent');

    if (practiceRemaining <= 60 && practiceRemaining > 0) {
      display.classList.add('urgent');
    } else if (practiceRemaining <= 3 * 60 && practiceRemaining > 0) {
      display.classList.add('warning');
    }
  }

  function startPracticeTimer(customMinutes = 12) {
    if (practiceIsRunning) return;
    if (practiceRemaining <= 0) {
      practiceRemaining = customMinutes * 60;
    }
    practiceIsRunning = true;
    practiceDeadline = Date.now() + (practiceRemaining * 1000);
    updatePracticeControls();

    practiceInterval = setInterval(() => {
      practiceRemaining = Math.max(0, Math.ceil((practiceDeadline - Date.now()) / 1000));
      if (practiceRemaining > 0) {
        updatePracticeDisplay();

        // Alerta a los 6 min (mitad de tiempo)
        if (practiceRemaining <= 6 * 60 && !practiceAlerts.has('half')) {
          practiceAlerts.add('half');
          App.showToast('⏰ Mitad del tiempo: 6 minutos restantes.');
          playNotificationBeep(440, 0.2);
        }
        // Alerta a los 2 min (preparar entrega)
        if (practiceRemaining <= 2 * 60 && !practiceAlerts.has('close')) {
          practiceAlerts.add('close');
          App.showToast('⚠️ Quedan 2 minutos para cerrar su prueba.');
          playNotificationBeep(523.25, 0.3);
        }
      } else {
        pausePracticeTimer();
        updatePracticeDisplay();
        App.showToast('🔔 ¡Tiempo de práctica completado! Guarde su trabajo en el cuaderno local.');
        playNotificationBeep(659.25, 0.5);
      }
    }, 1000);
  }

  function pausePracticeTimer() {
    practiceIsRunning = false;
    if (practiceInterval) clearInterval(practiceInterval);
    updatePracticeControls();
  }

  function resetPracticeTimer(customMinutes = 12) {
    pausePracticeTimer();
    practiceTotalSeconds = customMinutes * 60;
    practiceRemaining = practiceTotalSeconds;
    practiceDeadline = null;
    practiceAlerts.clear();
    updatePracticeDisplay();
  }

  function updatePracticeControls() {
    const startBtn = document.getElementById('btn-practice-start');
    const pauseBtn = document.getElementById('btn-practice-pause');
    if (startBtn && pauseBtn) {
      startBtn.style.display = practiceIsRunning ? 'none' : 'inline-flex';
      pauseBtn.style.display = practiceIsRunning ? 'inline-flex' : 'none';
    }
  }

  // --- Temporizador de Ciclo de 25 Minutos (Tutor Cockpit) ---
  function updateCycleDisplay() {
    const display = document.getElementById('cycle-timer-display');
    const stageTitle = document.getElementById('cycle-stage-title');
    if (!display) return;

    display.textContent = formatTime(cycleRemaining);
    if (stageTitle) {
      stageTitle.textContent = `${cycleStages[currentStageIndex].name} (${Math.round(cycleStages[currentStageIndex].duration / 60)} min)`;
    }

    // Actualizar píldoras activas en la interfaz del tutor
    const pills = document.querySelectorAll('.cycle-stage-pill');
    pills.forEach((pill, idx) => {
      if (idx === currentStageIndex) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  function setCycleStage(stageIndex) {
    if (stageIndex < 0 || stageIndex >= cycleStages.length) return;
    pauseCycleTimer();
    currentStageIndex = stageIndex;
    cycleStageSeconds = cycleStages[currentStageIndex].duration;
    cycleRemaining = cycleStageSeconds;
    updateCycleDisplay();
  }

  function startCycleTimer() {
    if (cycleIsRunning) return;
    cycleIsRunning = true;
    cycleDeadline = Date.now() + (cycleRemaining * 1000);
    updateCycleControls();

    cycleInterval = setInterval(() => {
      cycleRemaining = Math.max(0, Math.ceil((cycleDeadline - Date.now()) / 1000));
      if (cycleRemaining > 0) {
        updateCycleDisplay();
      } else {
        pauseCycleTimer();
        playNotificationBeep(880, 0.4);
        App.showToast(`✅ Etapa finalizada: ${cycleStages[currentStageIndex].name}`);
        if (currentStageIndex < cycleStages.length - 1) {
          setCycleStage(currentStageIndex + 1);
        }
      }
    }, 1000);
  }

  function pauseCycleTimer() {
    cycleIsRunning = false;
    if (cycleInterval) clearInterval(cycleInterval);
    updateCycleControls();
  }

  function resetCycleTimer() {
    pauseCycleTimer();
    cycleRemaining = cycleStages[currentStageIndex].duration;
    cycleDeadline = null;
    updateCycleDisplay();
  }

  function updateCycleControls() {
    const startBtn = document.getElementById('btn-cycle-start');
    const pauseBtn = document.getElementById('btn-cycle-pause');
    if (startBtn && pauseBtn) {
      startBtn.style.display = cycleIsRunning ? 'none' : 'inline-flex';
      pauseBtn.style.display = cycleIsRunning ? 'inline-flex' : 'none';
    }
  }

  function init() {
    updatePracticeDisplay();
    updatePracticeControls();
    updateCycleDisplay();
    updateCycleControls();

    // Eventos Práctica
    document.getElementById('btn-practice-start')?.addEventListener('click', () => startPracticeTimer());
    document.getElementById('btn-practice-pause')?.addEventListener('click', pausePracticeTimer);
    document.getElementById('btn-practice-reset')?.addEventListener('click', () => resetPracticeTimer());

    // Eventos Ciclo Tutor
    document.getElementById('btn-cycle-start')?.addEventListener('click', startCycleTimer);
    document.getElementById('btn-cycle-pause')?.addEventListener('click', pauseCycleTimer);
    document.getElementById('btn-cycle-reset')?.addEventListener('click', resetCycleTimer);

    // Click en píldoras de etapas
    document.querySelectorAll('.cycle-stage-pill').forEach((pill, idx) => {
      pill.addEventListener('click', () => setCycleStage(idx));
    });
  }

  return {
    init,
    startPracticeTimer,
    resetPracticeTimer,
    setCycleStage,
    startCycleTimer,
    pauseCycleTimer
  };
})();
