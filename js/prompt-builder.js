/**
 * TALLER INA · Constructor y Asistente Guiado de Prompts (prompt-builder.js)
 * Permite a los docentes armar, validar y copiar instrucciones pedagógicas sólidas,
 * con modo formulario o modo Asistente Guiado Paso a Paso (Chips rápidos).
 */

const PromptBuilderModule = (() => {
  const presets = {
    hotel_complaint: {
      name: '1. Recepción de quejas en hotel (A2 Oral)',
      role: 'Actúe como diseñador de actividades de inglés para fines ocupacionales. Su objetivo es crear una práctica breve para recibir y gestionar una queja en la recepción de un hotel.',
      level: 'A2 · Interacción oral (listening & speaking)',
      context: 'Personas adultas del INA en formación para servicio al cliente en turismo y hotelería en Costa Rica.',
      format: 'Entregue exactamente: (1) objetivo observable, (2) preparación de 2 minutos con tarjeta ficticia, (3) guion incompleto de 4 turnos, (4) lista de 5 expresiones útiles de apoyo, (5) comprobación final de 2 preguntas.',
      restrictions: 'Actividad total de 12 minutos; instrucciones en español; intervenciones en inglés de hasta 12 palabras; use presente simple, pasado simple y can. No invente políticas reales ni resuelva los turnos del estudiante.'
    },
    lesson_planning: {
      name: '2. Planificar clase de 45 minutos (A2 Atención al Cliente)',
      role: 'Actúe como diseñador instruccional de enseñanza de lenguas extranjeras para formación técnica.',
      level: 'A2 · Destreza principal: interacción oral; destreza secundaria: toma de notas',
      context: 'Grupo de 18 personas adultas en comercio y servicios. Objetivo: confirmar datos de una reserva telefónica.',
      format: 'Tabla de secuencia con minutos exactos (inicio, desarrollo, verificación, cierre), acción docente, acción del estudiante, recurso y plan B sin conexión.',
      restrictions: 'Total estricto de 45 minutos. Comprobación aritmética final de la suma de tiempos. No asuma conexión a internet en el aula.'
    },
    calibrated_reading: {
      name: '3. Generar lectura técnica calibrada (B1 Hospitalidad)',
      role: 'Actúe como autor y revisor pedagógico de materiales de lectura para propósitos ocupacionales.',
      level: 'B1 · Lectura analítica de procedimientos y políticas de servicio',
      context: 'Personal de atención al cliente en agencias de viajes y centros de información turística.',
      format: 'Texto de 120-140 palabras, glosario técnico de 5 términos, 4 preguntas de comprensión inferencial y clave de respuestas separada.',
      restrictions: 'Estructuras B1 con oraciones compuestas simples. Evite modismos regionales complejos. No invente leyes ni precios reales.'
    },
    diff_feedback: {
      name: '4. Diseñar retroalimentación diferenciada (Muestra escrita)',
      role: 'Actúe como especialista en evaluación formativa y corrección de errores en lenguas extranjeras.',
      level: 'A2 y B1 · Producción escrita (correo formal de servicio)',
      context: 'Estudiantes adultos redactando respuestas de seguimiento a reclamos de clientes.',
      format: 'Identifique 2 errores prioritarios, entregue un comentario motivador y observable para A2, uno para B1, y una microrremediación de 5 minutos.',
      restrictions: 'Prohibido el elogio genérico vacío ("Great job"). Toda observación debe señalar la evidencia en el texto y ofrecer una frase modelo editable.'
    },
    custom_chatbot: {
      name: '5. Configurar Chatbot de práctica escrita (Cliente en recepción)',
      role: 'Actúe como un cliente extranjero que llega a la recepción de un hotel en Guanacaste y su habitación no está lista.',
      level: 'A2 · Interacción escrita en inglés',
      context: 'Práctica escrita individual con estudiante del INA que atiende la recepción.',
      format: 'Respuestas de 1 a 3 oraciones cortas (hasta 14 palabras). Un solo turno por mensaje.',
      restrictions: 'Espere la respuesta escrita del estudiante. Si hay error que impida el sentido, corrija entre corchetes con una pista. Si el estudiante escribe en español, indique: "Try it in English: Could you...?". Tras 6 turnos escritos, entregue un breve cierre pedagógico.'
    },
    voice_oral_simulation: {
      name: '6. [Bloques 1 y 3] Simulación Oral con IA de Voz (A2/B1 Recepción/Soporte)',
      role: 'Actúe como interlocutor angloparlante para una práctica oral conversacional en vivo por voz con un estudiante técnico de hotelería/servicios del INA.',
      level: 'A2-B1 · Interacción oral en tiempo real (Speaking & Listening)',
      context: 'Estudiante del INA practicando atención oral al cliente en el mostrador mediante ChatGPT Voice o Gemini Live.',
      format: 'Hable con pronunciación clara y natural. Emita exactamente 1 o 2 oraciones por turno (máximo 16 palabras). Mantenga un diálogo de 4 turnos en total y luego entregue un cierre formativo breve en español.',
      restrictions: 'Tolere pausas de pensamiento de hasta 5 segundos sin interrumpir al estudiante. NO dé respuestas complacientes vacías ("Awesome!"). Si el estudiante comete un error que afecta la comprensión, repita la frase con una reformulación natural ("Did you mean...?"). Al finalizar el cuarto turno, señale 1 fortaleza observable y 1 recomendación de pronunciación o vocabulario.'
    },
    socratic_scaffolding: {
      name: '7. [Bloque 2 AGM] Andamiaje Socrático sin dar la respuesta (A1/A2)',
      role: 'Actúe como tutor pedagógico socrático de inglés ocupacional para formación técnica profesional.',
      level: 'A1-A2 · Expresión escrita y razonamiento lingüístico',
      context: 'Estudiantes del INA aprendiendo a redactar un correo formal de confirmación de reserva o aviso de avería.',
      format: 'Guíe mediante preguntas reflexivas: haga exactamente UNA pregunta a la vez para que el estudiante elija o formule la siguiente parte del mensaje.',
      restrictions: 'PROHIBIDO redactar el texto completo por el estudiante. Si el estudiante se equivoca, pregúntele qué palabra clave de cortesía o tiempo verbal corresponde en lugar de darle la respuesta directa. Espere la respuesta antes de avanzar. Máximo 3 rondas guiadas.'
    },
    explainable_feedback: {
      name: '8. [Bloque 3 AGM] Retroalimentación Lingüística Explicable (XAI B1)',
      role: 'Actúe como evaluador lingüístico formativo bajo el enfoque de Inteligencia Artificial Explicable (XAI) en educación.',
      level: 'B1 · Producción ocupacional en inglés (servicio al cliente y soporte)',
      context: 'Docente del INA revisando respuestas escritas o transcripciones orales de estudiantes para dar retroalimentación formativa inmediata.',
      format: 'Entregue una tabla de 3 columnas: (1) Fragmento textual analizado, (2) Explicación transparente del error (causa gramatical o impacto en el cliente), (3) Opción mejorada contrastada con una micro-tarea de práctica de 2 minutos.',
      restrictions: 'Fundamente cada juicio en función de la claridad comunicativa laboral. Prohibido el uso de términos abstractos sin ejemplificar. Cero condescendencia acrítica.'
    }
  };

  function updateOutput() {
    const role = document.getElementById('pb-role')?.value.trim() || '';
    const level = document.getElementById('pb-level')?.value.trim() || '';
    const context = document.getElementById('pb-context')?.value.trim() || '';
    const format = document.getElementById('pb-format')?.value.trim() || '';
    const restrictions = document.getElementById('pb-restrictions')?.value.trim() || '';

    // Contar componentes completos
    let filledCount = 0;
    if (role) filledCount++;
    if (level) filledCount++;
    if (context) filledCount++;
    if (format) filledCount++;
    if (restrictions) filledCount++;

    const indicator = document.getElementById('pb-validation-indicator');
    if (indicator) {
      if (filledCount === 5) {
        indicator.className = 'validation-indicator complete';
        indicator.innerHTML = '✓ 5/5 componentes obligatorios completos';
      } else if (filledCount === 0) {
        indicator.className = 'validation-indicator incomplete';
        indicator.innerHTML = '⚪ Formulario en blanco (0/5)';
      } else {
        indicator.className = 'validation-indicator incomplete';
        indicator.innerHTML = `⚠️ ${filledCount}/5 componentes ingresados`;
      }
    }

    // Armar prompt maestro estructurado
    let promptText = '';
    
    if (role) {
      promptText += `${role}\n\n`;
    }
    if (level || context) {
      promptText += `PERFIL Y CONTEXTO:\n- Nivel y destreza: ${level || '[Indicar nivel de idioma: A1, A2 o B1]'}\n- Contexto ocupacional: ${context || '[Indicar contexto laboral INA]'}\n\n`;
    }
    if (format) {
      promptText += `FORMATO EXACTO DE SALIDA:\n${format}\n\n`;
    }
    if (restrictions) {
      promptText += `RESTRICCIONES Y CONDICIONES:\n${restrictions}\n\n`;
    }

    if (filledCount > 0) {
      promptText += `REGLAS DE CALIDAD Y ÉTICA:\n- Verifique la calibración al nivel antes de entregar.\n- No invente datos, políticas ni nombres reales de empresas (cumplimiento Ley 8968 de Costa Rica).\n- Marque cualquier supuesto que requiera validación docente.`;
    } else {
      promptText = 'Complete los 5 pasos a la izquierda o elija una plantilla prediseñada para generar su instrucción aquí.';
    }

    const outputBox = document.getElementById('pb-output-box');
    if (outputBox) {
      outputBox.textContent = promptText;
    }
  }

  function setChipValue(inputId, value) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.value = value;
    updateOutput();
    App.showToast(`Seleccionado: ${value.substring(0, 30)}...`);
  }

  function loadPreset(presetKey) {
    const data = presets[presetKey];
    if (!data) return;

    const roleEl = document.getElementById('pb-role');
    if (!roleEl) return;
    roleEl.value = data.role;
    const levelEl = document.getElementById('pb-level');
    if (levelEl) levelEl.value = data.level;
    const contextEl = document.getElementById('pb-context');
    if (contextEl) contextEl.value = data.context;
    const formatEl = document.getElementById('pb-format');
    if (formatEl) formatEl.value = data.format;
    const restEl = document.getElementById('pb-restrictions');
    if (restEl) restEl.value = data.restrictions;

    updateOutput();
    if (typeof App !== 'undefined' && App.showToast) {
      App.showToast(`Plantilla cargada: ${data.name}`);
    }
  }

  function clearPromptBuilder() {
    ['pb-role', 'pb-level', 'pb-context', 'pb-format', 'pb-restrictions'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    document.querySelectorAll('.wizard-chip-btn').forEach(btn => btn.classList.remove('active'));
    const select = document.getElementById('pb-preset-select');
    if (select) select.value = '';
    updateOutput();
    if (typeof App !== 'undefined' && App.showToast) {
      App.showToast('🧹 Formulario limpiado. Listo para empezar en blanco.');
    }
  }

  function copyPrompt() {
    const outputBox = document.getElementById('pb-output-box');
    if (!outputBox) return;
    if (typeof App !== 'undefined' && App.copyToClipboard) {
      App.copyToClipboard(outputBox.textContent, 'Prompt completo copiado al portapapeles');
    }
  }

  function init() {
    // Guard clause: solo inicializar si el constructor existe en la página
    if (!document.getElementById('pb-role')) return;

    // Escuchar inputs
    const inputs = ['pb-role', 'pb-level', 'pb-context', 'pb-format', 'pb-restrictions'];
    inputs.forEach(id => {
      document.getElementById(id)?.addEventListener('input', updateOutput);
    });

    // Preset selector
    const presetSelect = document.getElementById('pb-preset-select');
    presetSelect?.addEventListener('change', (e) => {
      if (e.target.value) {
        loadPreset(e.target.value);
      }
    });

    // Chips de selección rápida
    document.querySelectorAll('.wizard-chip-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = e.currentTarget.dataset.targetInput;
        const val = e.currentTarget.dataset.value;
        if (targetId && val) {
          setChipValue(targetId, val);
          // Marcar activo en el grupo
          const parent = e.currentTarget.closest('.wizard-chips-group');
          if (parent) {
            parent.querySelectorAll('.wizard-chip-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
          }
        }
      });
    });

    // Botones de acción
    document.getElementById('btn-copy-prompt')?.addEventListener('click', copyPrompt);
    document.getElementById('btn-clear-prompt')?.addEventListener('click', clearPromptBuilder);

    // Cargar primer preset por defecto
    loadPreset('hotel_complaint');
  }

  return {
    init,
    loadPreset,
    clearPromptBuilder,
    updateOutput,
    setChipValue,
    copyPrompt
  };
})();
