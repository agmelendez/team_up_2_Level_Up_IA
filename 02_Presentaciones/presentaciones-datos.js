(function () {
  "use strict";

  const methodologySource = "Documento metodológico v2.5 · INA-Taller-IA-Idiomas-6oct2026.docx";
  const privacyNote = "Regla operativa del taller basada en la Ley 8968. Esta presentación no sustituye la revisión jurídica institucional.";

  window.PRESENTATION_DECKS = {
    bloque1: {
      code: "P2.1 · Bloque 1",
      title: "Panorama y método",
      accent: "green",
      slides: [
        {
          title: "Inteligencia artificial aplicada a la enseñanza de idiomas",
          tone: "dark",
          html: `<p class="eyebrow">Bloque 1 · 9:00 a 10:00</p><h1 class="hero-statement">La herramienta propone.<br><span class="accent-text">El juicio docente decide.</span></h1><p class="hero-subtitle">Panorama, evidencia y método para trabajar con IA sin transferir la responsabilidad pedagógica.</p>`,
          notes: `<p>Abra el bloque con el acuerdo central de la jornada. La meta consiste en aplicar un método transferible, no en dominar una lista de aplicaciones. Anticipe que el grupo observará salidas defectuosas y practicará cómo verificarlas antes de llevarlas al aula.</p>`,
          source: methodologySource,
          sourcesDetail: `<p><strong>Fuente de estructura:</strong> ${methodologySource}</p><p>El documento define el Bloque 1, el ciclo de trabajo y la responsabilidad docente sobre la verificación.</p>`
        },
        {
          title: "Experiencia actual del grupo",
          accent: "navy",
          html: `<div class="question-card"><p class="slide-kicker">Sondeo de entrada</p><h2>¿Con qué frecuencia utiliza IA generativa en su trabajo docente?</h2><div class="scale"><span>Nunca</span><span>La he probado</span><span>Algunas veces al mes</span><span>Semanalmente</span><span>A diario</span></div></div>`,
          notes: `<p>Lea las opciones con neutralidad. La respuesta no mide competencia docente. Use la distribución para ajustar velocidad y ejemplos. Recuerde que las personas sin experiencia pueden completar la práctica con la plantilla y el Plan B.</p>`,
          source: "Encuesta diagnóstica · Anexo A del documento metodológico v2.5",
          sourcesDetail: `<p>Pregunta tomada del Anexo A del documento metodológico. Muestre únicamente resultados agregados.</p>`
        },
        {
          title: "Contexto docente en Costa Rica",
          accent: "green",
          html: `<div><p class="slide-kicker">Education at a Glance 2026</p><h2 class="slide-title wide">Alta cualificación y muchas horas de enseñanza directa</h2><div class="metric-grid"><div class="metric"><span class="metric-number">2,9%</span><b>No plenamente cualificado</b><span>Personal docente de primaria y secundaria pública, 2024.</span></div><div class="metric"><span class="metric-number">1.234</span><b>Horas en primaria</b><span>Tiempo reglamentario anual típico, 2025.</span></div><div class="metric"><span class="metric-number">1.274</span><b>Horas en secundaria inferior</b><span>Tiempo reglamentario anual típico, 2025.</span></div></div></div>`,
          notes: `<p>Presente estas cifras como contexto, no como explicación causal ni evaluación de la calidad docente. La definición de “no plenamente cualificado” responde a requisitos nacionales. Las horas corresponden al tiempo reglamentario típico de enseñanza, no a toda la jornada laboral.</p>`,
          source: "OCDE · Education at a Glance 2026: Costa Rica · Tables 1 y D4.1",
          sourcesDetail: `<p><strong>Fuente oficial:</strong> OCDE (2026), <em>Education at a Glance 2026: Costa Rica</em>, secciones “Teacher shortages” y “Teachers, the learning environment and the organisation of schools”.</p><p><strong>Comparación:</strong> el promedio OCDE fue 9,1% de personal no plenamente cualificado en 2024/25; las horas fueron 770 en primaria y 710 en secundaria inferior.</p>`
        },
        {
          title: "Cambios que condicionan la planificación educativa",
          accent: "navy",
          html: `<div class="split"><div><p class="slide-kicker">Tendencias verificadas</p><h2 class="slide-title wide">Menos población escolar no significa menos decisiones docentes</h2><p class="lead">La población de 5 a 14 años se proyecta a disminuir 28% entre 2024 y 2033.</p></div><div class="evidence-card"><span class="evidence-label">Pregunta para el taller</span><p>¿Qué tareas puede apoyar la IA sin transferir la decisión pedagógica?</p><small>La OCDE no evalúa el efecto de la IA en estas cifras.</small></div></div>`,
          notes: `<p>Use la proyección para situar la planificación, no para predecir automáticamente la demanda de personal. La nota país advierte que también influyen la distribución regional, el tamaño de los grupos, la salida de docentes y el financiamiento.</p>`,
          source: "OCDE · Education at a Glance 2026: Costa Rica · Table 7",
          sourcesDetail: `<p><strong>Fuente oficial:</strong> OCDE (2026), <em>Education at a Glance 2026: Costa Rica</em>, sección “Teacher shortages”, Table 7.</p><p><strong>Límite:</strong> la pregunta sobre IA pertenece al diseño del taller. El informe no establece una relación causal entre estos indicadores y el uso de IA.</p>`
        },
        {
          title: "La fluidez puede ocultar una falla",
          accent: "amber",
          html: `<div class="split"><div><p class="slide-kicker">Primera alerta</p><h2 class="slide-title wide">Una respuesta convincente todavía requiere comprobación</h2><p class="lead">El modelo puede inventar información, aceptar una premisa incorrecta o salir del nivel solicitado.</p></div><div class="stack"><div class="statement-card"><strong>Inventa</strong><p>Completa vacíos con contenido plausible.</p></div><div class="statement-card"><strong>Complace</strong><p>Confirma lo que la persona parece esperar.</p></div><div class="statement-card"><strong>Desnivela</strong><p>Usa lenguaje correcto, pero inadecuado para el grupo.</p></div></div></div>`,
          notes: `<p>Explique las tres fallas sin afirmar que toda salida falla. La fluidez puede dificultar su detección. Pida un ejemplo rápido de una respuesta que suene bien, pero no sirva para una clase A2.</p>`,
          source: "Biblioteca DOC-30 · pp. 8–9 y 16–17",
          sourcesDetail: `<p><strong>DOC-30:</strong> <em>Large language models in school education: emerging evidence</em>, pp. 8–9 y 16–17.</p><p>El informe distingue la participación visible del aprendizaje real y advierte que la base experimental todavía presenta límites de población, contexto y duración.</p>`
        },
        {
          title: "El modelo produce continuaciones plausibles",
          accent: "navy",
          html: `<div><p class="slide-kicker">Explicación funcional</p><h2 class="slide-title wide">Plausibilidad, exactitud y pertinencia son criterios distintos</h2><div class="flow"><div class="flow-step">Texto de entrada</div><div class="flow-step">Patrones disponibles</div><div class="flow-step">Continuación probable</div><div class="flow-step">Comprobación</div><div class="flow-step">Decisión docente</div></div><p class="lead">Una instrucción mejora el encuadre. La revisión decide si la salida sirve.</p></div>`,
          notes: `<p>Evite una explicación matemática. Destaque que pedir una fuente, un nivel o un tipo de retroalimentación no garantiza el cumplimiento. El paso decisivo aparece después de la salida: comparar contra criterios observables.</p>`,
          source: "Biblioteca DOC-23 · p. 29; DOC-30 · pp. 8–9",
          sourcesDetail: `<p><strong>DOC-23:</strong> <em>Enseñanza de peticiones para LLMs</em>, p. 29. Define la ingeniería de instrucciones como el diseño de entradas que orientan la continuación del modelo.</p><p><strong>DOC-30:</strong> pp. 8–9. Distingue la interacción fluida de la actividad cognitiva que produce aprendizaje.</p>`
        },
        {
          title: "La integración determina el valor pedagógico",
          html: `<div class="split equal"><div><p class="slide-kicker">Evidencia emergente</p><h2 class="slide-title wide">La misma herramienta puede apoyar o debilitar el aprendizaje</h2><p class="lead">El diseño de la tarea, el acceso y la preparación docente cambian el resultado.</p></div><div class="evidence-card"><span class="evidence-label">Límite de la evidencia</span><p>Gran parte de la investigación experimental proviene de educación superior y de intervenciones breves.</p><small>Evite generalizar un efecto a todos los niveles, idiomas y contextos.</small></div></div>`,
          notes: `<p>Esta lámina reemplaza afirmaciones generales sobre “lo que funciona”. El corpus respalda una conclusión más prudente: los resultados dependen de cómo se integra la herramienta. Señale que el taller probará tareas concretas y no prometerá ganancias universales.</p>`,
          source: "Biblioteca DOC-30 · pp. 8–9, 13–17",
          sourcesDetail: `<p><strong>DOC-30:</strong> el informe organiza la evidencia mediante la relación entre participación y aprendizaje. Sus páginas 13–17 explican el alcance y las limitaciones de la base disponible.</p>`
        },
        {
          title: "Mapa de responsabilidad docente",
          accent: "purple",
          html: `<div><p class="slide-kicker">Tres niveles de decisión</p><h2 class="slide-title wide">La tarea cambia de nivel según el riesgo y la consecuencia</h2><div class="metric-grid"><div class="metric"><span class="metric-number">1</span><b>Automatizar borradores</b><span>Variantes, formatos y materiales sintéticos.</span></div><div class="metric"><span class="metric-number">2</span><b>Apoyar con revisión</b><span>Práctica, adaptación y retroalimentación formativa.</span></div><div class="metric"><span class="metric-number">3</span><b>Reservar al juicio humano</b><span>Calificación final, decisiones sobre personas y datos sensibles.</span></div></div></div>`,
          notes: `<p>Use una rúbrica como ejemplo transversal. La IA puede proponerla, apoyar su aplicación y fallar si se le transfiere una calificación final sin evidencia ni revisión. Aclare que la categoría depende del contexto y de la consecuencia.</p>`,
          source: "Biblioteca DOC-03 · pp. 22–26; DOC-40 · pp. 4 y 8–10",
          sourcesDetail: `<p><strong>DOC-03:</strong> marco de alfabetización para docentes, con uso efectivo, ética, privacidad, sesgo y evaluación crítica.</p><p><strong>DOC-40:</strong> la explicabilidad permite que docentes y estudiantes juzguen, cuestionen y, cuando corresponda, corrijan una salida.</p>`
        },
        {
          title: "Cinco decisiones antes de abrir la herramienta",
          html: `<div><p class="slide-kicker">Plantilla común del taller</p><h2 class="slide-title wide">Una instrucción completa reduce ambigüedades observables</h2><div class="decision-grid"><div class="decision"><b>Rol y objetivo</b><span>Qué función cumple y para qué.</span></div><div class="decision"><b>Nivel y destreza</b><span>MCER y desempeño esperado.</span></div><div class="decision"><b>Contexto</b><span>Situación ocupacional del INA.</span></div><div class="decision"><b>Formato</b><span>Producto exacto y verificable.</span></div><div class="decision"><b>Restricciones</b><span>Extensión, vocabulario y límites.</span></div></div></div>`,
          notes: `<p>Contraste “haga una actividad de inglés” con una consigna completa. La estructura de cinco componentes pertenece al diseño metodológico del taller. El corpus confirma la necesidad de contexto e instrucciones claras, pero no establece que exista una única fórmula universal.</p>`,
          source: "Metodología v2.5; Biblioteca DOC-03 · p. 26; DOC-23 · pp. 141–144",
          sourcesDetail: `<p><strong>Documento metodológico:</strong> define los cinco componentes usados en las prácticas.</p><p><strong>DOC-03:</strong> incluye la capacidad docente de distinguir y construir instrucciones eficaces.</p><p><strong>DOC-23:</strong> explica que las instrucciones combinan contexto dinámico y orientaciones estáticas; también advierte sobre el exceso de longitud.</p>`
        },
        {
          title: "Regla operativa de protección de datos",
          accent: "amber",
          html: `<div class="split"><div><p class="slide-kicker">Ley 8968</p><h2 class="slide-title wide">Las prácticas usan muestras sintéticas y la voz de la persona docente</h2><p class="lead">No ingrese nombres, cédulas, calificaciones, expedientes, grabaciones ni combinaciones que permitan identificar a un estudiante.</p></div><div class="stack"><div class="statement-card"><strong>Describa</strong><p>Explique el patrón sin copiar el caso real.</p></div><div class="statement-card"><strong>Sintetice</strong><p>Construya una muestra ficticia equivalente.</p></div><div class="statement-card"><strong>Revise el conjunto</strong><p>Quitar el nombre puede resultar insuficiente.</p></div></div></div>`,
          notes: `<p>Lea la regla completa. No convierta la lámina en asesoría jurídica. Si surge una consulta sobre consentimiento o tratamiento institucional, remítala al protocolo del INA. Durante el taller, el camino seguro consiste en usar muestras sintéticas.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>${privacyNote}</p><p><strong>Fuente:</strong> secciones de salvaguardas y protocolo del ${methodologySource}.</p>`
        },
        {
          title: "Verificación de una salida",
          accent: "navy",
          html: `<div><p class="slide-kicker">Lectura crítica</p><h2 class="slide-title wide">Cinco preguntas convierten la salida en evidencia revisable</h2><table class="matrix"><thead><tr><th>Criterio</th><th>Pregunta de control</th><th>Señal de falla</th></tr></thead><tbody><tr><td>Exactitud</td><td>¿Los hechos y ejemplos se pueden comprobar?</td><td>Fuente inexistente o dato sin respaldo.</td></tr><tr><td>Nivel</td><td>¿El lenguaje corresponde al MCER solicitado?</td><td>Léxico o estructura fuera de alcance.</td></tr><tr><td>Tarea</td><td>¿La persona estudiante conserva el trabajo cognitivo?</td><td>La IA resuelve el producto completo.</td></tr><tr><td>Contexto</td><td>¿La situación ocupacional resulta auténtica?</td><td>Políticas o datos locales inventados.</td></tr><tr><td>Uso</td><td>¿Qué debe adaptar la persona docente?</td><td>Salida aplicada sin revisión.</td></tr></tbody></table></div>`,
          notes: `<p>Use la matriz durante toda la jornada. La verificación no consiste solo en buscar errores factuales. También compara nivel, autenticidad, distribución del esfuerzo y pertinencia para el grupo.</p>`,
          source: "Biblioteca DOC-05 · alfabetización mediática; DOC-30 · pp. 8–17",
          sourcesDetail: `<p><strong>DOC-05:</strong> aborda verificación de fuentes y lectura crítica de contenidos sintéticos.</p><p><strong>DOC-30:</strong> fundamenta la diferencia entre participación aparente y aprendizaje, además de sus límites de evidencia.</p>`
        },
        {
          title: "Prueba de conversación A2",
          accent: "green",
          html: `<div class="split"><div><p class="slide-kicker">Demostración 1</p><h2 class="slide-title">¿Conserva realmente el nivel?</h2><p class="lead">La fluidez no compensa una restricción incumplida.</p></div><div class="prompt-example">Actúe como huésped de un hotel.<br><br>Haga una pregunta por turno.<br>Use máximo 12 palabras.<br>Use presente y pasado simple.<br>Espere siempre mi respuesta.<br><br>Deténgase después de cuatro turnos.</div></div>`,
          notes: `<p>Detenga la demostración si aparecen dos preguntas simultáneas, una oración larga o vocabulario fuera de nivel. Nombre la falla con precisión. La meta no consiste en avergonzar a la herramienta, sino en mostrar un criterio observable.</p>`,
          source: "Práctica PR-06 · materiales del taller",
          sourcesDetail: `<p>La instrucción adapta las restricciones de PR-06 para una demostración breve. No use voces ni datos de estudiantes.</p>`
        },
        {
          title: "Retroalimentación oral con una prioridad",
          accent: "purple",
          html: `<div class="split equal"><div><p class="slide-kicker">Demostración 2</p><h2 class="slide-title wide">Una devolución útil muestra evidencia y limita su alcance</h2><p class="lead">Pida un acierto sustentado, una prioridad y una frase para volver a intentar.</p></div><div class="statement-card"><strong>Formato de salida</strong><p>1. Evidencia audible o transcrita<br>2. Prioridad de inteligibilidad<br>3. Frase breve para repetir<br>4. Incertidumbre explícita</p></div></div>`,
          notes: `<p>Si la herramienta confunde transcripción con pronunciación, señale el límite. El texto reconocido no demuestra por sí solo qué rasgo fonético ocurrió. Pida que la salida diferencie lo observado de lo inferido.</p>`,
          source: "Biblioteca DOC-40 · pp. 4 y 9–10; DOC-41 · pp. 8–9",
          sourcesDetail: `<p><strong>DOC-40:</strong> define la explicación comprensible como condición para juzgar una recomendación.</p><p><strong>DOC-41:</strong> reconoce lo que una evaluación automatizada pierde frente al examen humano y delimita su afirmación de utilidad.</p>`
        },
        {
          title: "Consistencia del papel ocupacional",
          accent: "amber",
          html: `<div class="split"><div><p class="slide-kicker">Demostración 3</p><h2 class="slide-title wide">El papel debe sobrevivir una interrupción</h2><p class="lead">Cliente ficticio, contexto costarricense, cuatro turnos y cierre verificable.</p></div><div class="risk-band" style="grid-template-columns:1fr"><div><b>Punto de prueba</b><p>Interrumpa con una pregunta ajena a la situación. Observe si la conversación regresa al objetivo sin inventar políticas ni precios.</p></div><div><b>Plan B</b><p>Use la transcripción preparada cuando la función no esté disponible.</p></div></div></div>`,
          notes: `<p>Observe el control del turno y la permanencia en el papel. No use información comercial real. Registre la falla exacta: abandono del rol, política inventada, turno excesivo o cierre ausente.</p>`,
          source: "Guion Bloque 1 v1 · demostración ocupacional",
          sourcesDetail: `<p>La demostración usa un caso sintético del banco ocupacional. Las condiciones de las aplicaciones deben comprobarse en el ensayo técnico previo al taller.</p>`
        },
        {
          title: "Matriz de comparación",
          accent: "navy",
          html: `<div><p class="slide-kicker">Registro de la demostración</p><h2 class="slide-title wide">El resultado depende de la tarea, la configuración y el momento de uso</h2><table class="matrix"><thead><tr><th>Criterio</th><th>Prueba 1</th><th>Prueba 2</th><th>Prueba 3</th></tr></thead><tbody><tr><td>Nivel y longitud</td><td>___</td><td>___</td><td>___</td></tr><tr><td>Control del turno</td><td>___</td><td>___</td><td>___</td></tr><tr><td>Evidencia para revisar</td><td>___</td><td>___</td><td>___</td></tr><tr><td>Límite observado</td><td>___</td><td>___</td><td>___</td></tr></tbody></table></div>`,
          notes: `<p>Complete la tabla con observaciones reales. Evite convertir una prueba corta en una clasificación estable de marcas. La matriz compara el cumplimiento en esta tarea y en esta configuración.</p>`,
          source: "Matriz de observación del taller",
          sourcesDetail: `<p>Registro diseñado para la sesión. La comparación no constituye una evaluación general de las plataformas.</p>`
        },
        {
          title: "Ciclo de trabajo docente",
          html: `<div><p class="slide-kicker">Método común</p><h2 class="slide-title wide">La salida ocupa el centro del proceso, no el final</h2><div class="flow"><div class="flow-step">Encargo</div><div class="flow-step">Instrucción</div><div class="flow-step">Salida</div><div class="flow-step">Verificación</div><div class="flow-step">Adaptación al aula</div></div><p class="lead">Cada práctica de la jornada conserva este orden.</p></div>`,
          notes: `<p>Defina cada paso con un verbo observable. El encargo nace de una necesidad real. La instrucción acota. La salida aporta un borrador. La verificación compara. La adaptación decide qué cambiar, qué conservar y qué descartar.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>El ciclo conductor se establece en el ${methodologySource}.</p>`
        },
        {
          title: "De una petición vaga a una instrucción verificable",
          accent: "green",
          html: `<div class="split equal"><div><p class="slide-kicker">Demostración de método</p><div class="statement-card"><strong>Petición vaga</strong><p>Haga una actividad de inglés para hotelería.</p></div></div><div><div class="statement-card"><strong>Instrucción verificable</strong><p>Rol docente, objetivo oral A2, queja hotelera ficticia, guion de cuatro turnos, cinco frases formales y límites de vocabulario.</p></div></div></div>`,
          notes: `<p>Construya la segunda versión en pantalla con el grupo. Después subraye los cinco componentes. No presente la estructura como garantía de calidad, sino como una forma de volver visible qué se pidió y qué debe comprobarse.</p>`,
          source: "Biblioteca DOC-03 · p. 26; DOC-23 · pp. 141–144",
          sourcesDetail: `<p>Las fuentes respaldan el desarrollo de la competencia de construir instrucciones y la necesidad de combinar contexto con orientaciones claras.</p>`
        },
        {
          title: "Una falla pedagógica útil",
          accent: "amber",
          html: `<div class="split"><div><p class="slide-kicker">Prueba de esfuerzo</p><h2 class="slide-title wide">La salida suena bien, pero realiza el trabajo del estudiante</h2><p class="lead">La corrección lingüística no compensa la sustitución de la producción.</p></div><div class="evidence-card"><span class="evidence-label">Pregunta de control</span><p>¿Qué debe decir, decidir o producir todavía la persona estudiante?</p><small>Si la respuesta es “nada”, rediseñe la actividad.</small></div></div>`,
          notes: `<p>Muestre un ejemplo donde la IA entrega el diálogo completo. Pida al grupo que identifique qué esfuerzo desapareció. Reformule para que la IA asuma el papel de interlocutor y la persona estudiante produzca las respuestas.</p>`,
          source: "Biblioteca DOC-30 · pp. 8–13; DOC-28 · pp. 41–48",
          sourcesDetail: `<p><strong>DOC-30:</strong> diferencia la actividad conversacional de la participación cognitiva productiva.</p><p><strong>DOC-28:</strong> desarrolla el papel docente en evaluación y aprendizaje autodirigido con IA.</p>`
        },
        {
          title: "PR-01 Instrucción completa",
          accent: "purple",
          html: `<div><p class="slide-kicker">Ventana de práctica · 12 minutos</p><h2 class="slide-title wide">Producto: una instrucción reutilizable y un hallazgo crítico</h2><div class="metric-grid"><div class="metric"><span class="metric-number">8</span><b>Minutos</b><span>Construcción con los cinco componentes.</span></div><div class="metric"><span class="metric-number">2</span><b>Minutos</b><span>Prueba con una muestra sintética.</span></div><div class="metric"><span class="metric-number">2</span><b>Minutos</b><span>Verificación y ajuste final.</span></div></div><p class="lead">Use un objetivo real de clase o un caso ocupacional del portal.</p></div>`,
          notes: `<p>Fije la consigna en Teams y active el temporizador. Recuerde el Plan B a quien no tenga acceso a una herramienta. Durante la ventana, no resuelva casos individuales en plenaria.</p>`,
          source: "PR-01 · documento metodológico y materiales de práctica",
          sourcesDetail: `<p>Distribución sugerida dentro de la ventana de 12 minutos. El ciclo oficial reserva después tres minutos para guardar el producto en el cuaderno local y dos para devolución.</p>`
        },
        {
          title: "Microentregable del Bloque 1",
          tone: "dark",
          html: `<p class="eyebrow">Cierre del ciclo</p><h2 class="hero-statement">Guarde la instrucción y <span class="accent-text">una falla que detectó</span></h2><p class="hero-subtitle">Use su cuaderno local: el trabajo queda en su computadora y no se envía a ninguna plataforma.</p>`,
          notes: `<p>Solicite dos elementos: la instrucción calibrada y el hallazgo principal de la verificación. Proyecte una entrega anónima y comente la calidad de la instrucción, nunca el desempeño de la persona.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>El formato de microentregable y devolución pública proviene del ${methodologySource}.</p>`
        }
      ]
    },

    bloque2: {
      code: "P2.2 · Bloque 2",
      title: "Usos no convencionales de la IA",
      accent: "purple",
      slides: [
        {
          title: "Usos no convencionales de la IA",
          tone: "dark",
          accent: "purple",
          html: `<p class="eyebrow">Bloque 2 · 10:00 a 11:30</p><h1 class="hero-statement">Anticipar, diferenciar y practicar.<br><span class="accent-text">Sin delegar el juicio docente.</span></h1><p class="hero-subtitle">Tres ciclos para convertir salidas de IA en decisiones pedagógicas observables.</p>`,
          notes: `<p>Presente el bloque como una ampliación del método del taller. La novedad no está en una lista de herramientas: está en usar la IA para preparar retroalimentación diferenciada, anticipar fallas de una tarea y sostener una práctica escrita con límites.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>Objetivo, horario y tres ciclos definidos en el ${methodologySource}.</p>`
        },
        {
          title: "Tres usos, una misma responsabilidad",
          accent: "purple",
          html: `<div><p class="slide-kicker">Mapa del bloque</p><h2 class="slide-title wide">La IA propone posibilidades; la persona docente selecciona, prueba y corrige</h2><div class="metric-grid"><div class="metric"><span class="metric-number">2.1</span><b>Diferenciar</b><span>Retroalimentación A2, B1 y apoyo de baja confianza.</span></div><div class="metric"><span class="metric-number">2.2</span><b>Anticipar</b><span>Errores probables, señales tempranas y microrremedios.</span></div><div class="metric"><span class="metric-number">2.3</span><b>Practicar</b><span>Chatbot escrito con nivel, ritmo y corrección controlados.</span></div></div></div>`,
          notes: `<p>Explique que los tres usos comparten el mismo ciclo: definir una tarea, generar una salida, buscar un incumplimiento y adaptar. Evite presentar la predicción del modelo como diagnóstico del grupo.</p>`,
          source: "PR-02, PR-03 y PR-04 · materiales del taller",
          sourcesDetail: `<p>Las tres prácticas y sus productos están definidos en las consignas P3.1 y en el documento metodológico.</p>`
        },
        {
          title: "Regla de datos para todo el bloque",
          accent: "amber",
          html: `<div class="split"><div><p class="slide-kicker">Antes de comenzar</p><h2 class="slide-title wide">Trabaje con muestras sintéticas y descripciones generales</h2><p class="lead">No ingrese nombres, cédulas, calificaciones, expedientes, conversaciones ni combinaciones que identifiquen a una persona estudiante.</p></div><div class="stack"><div class="statement-card"><strong>Recrear</strong><p>Conserve el patrón pedagógico sin copiar el caso real.</p></div><div class="statement-card"><strong>Minimizar</strong><p>Incluya solo lo necesario para la tarea.</p></div><div class="statement-card"><strong>Revisar</strong><p>Compruebe nivel, exactitud, tono y consecuencia.</p></div></div></div>`,
          notes: `<p>Las muestras del portal ya son ficticias. Si alguien propone usar una producción real, detenga el proceso y convierta primero el patrón en una muestra sintética.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>${privacyNote}</p><p>Las consignas PR-02, PR-03 y PR-04 incorporan reglas específicas de protección de datos.</p>`
        },
        {
          title: "Cada ciclo ocupa veinticinco minutos",
          accent: "navy",
          html: `<div><p class="slide-kicker">Ritmo común</p><h2 class="slide-title wide">Ver, hacer, guardar y devolver</h2><div class="flow"><div class="flow-step">5 min<br>modelo</div><div class="flow-step">3 min<br>consigna</div><div class="flow-step">12 min<br>práctica</div><div class="flow-step">3 min<br>guardar</div><div class="flow-step">2 min<br>devolución</div></div><p class="lead">El producto queda en el cuaderno local de cada participante.</p></div>`,
          notes: `<p>Mantenga visibles el temporizador y el Plan B. La demostración debe ser breve: la evidencia principal surge cuando cada persona prueba y corrige una salida.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>Estructura de ciclo y microentregable definidos en el ${methodologySource}.</p>`
        },
        {
          title: "PR-02 comienza con un patrón, no con una nota",
          accent: "green",
          html: `<div class="split"><div><p class="slide-kicker">Ciclo 2.1 · Seguimiento</p><h2 class="slide-title wide">Seleccione dos errores recurrentes en una muestra sintética</h2><p class="lead">Priorice por objetivo enseñado y efecto comunicativo. No intente corregir todo.</p></div><div class="prompt-example">Muestra: <em>You must send us photos.</em><br><br>Patrón observable: tono demasiado directo.<br>Objetivo: solicitud profesional en servicio al cliente.</div></div>`,
          notes: `<p>Abra MS-04 o una muestra equivalente. Modele cómo separar evidencia textual, interpretación y prioridad. Una forma correcta puede seguir siendo inadecuada para el contexto.</p>`,
          source: "P3.3 Muestras sintéticas; P3.6 Banco de retroalimentación",
          sourcesDetail: `<p>Ejemplo tomado de MS-04 y de la clave docente. Todo el material es sintético y contiene errores deliberados.</p>`
        },
        {
          title: "Diferenciar no es simplificar todo",
          html: `<div><p class="slide-kicker">Un patrón · tres apoyos</p><h2 class="slide-title wide">Cambie la acción esperada, el metalenguaje y la cantidad de apoyo</h2><table class="matrix"><thead><tr><th>Destinatario</th><th>Retroalimentación</th><th>Próxima acción</th></tr></thead><tbody><tr><td>A2</td><td><em>Change You must to Please send us.</em></td><td>Reescribir una solicitud</td></tr><tr><td>B1</td><td>Reconozca el problema y después formule una solicitud cortés.</td><td>Revisar tono y secuencia</td></tr><tr><td>Baja confianza</td><td>Conserve la acción y suavice solo el inicio.</td><td>Modificar un fragmento</td></tr></tbody></table></div>`,
          notes: `<p>Aclare que baja confianza no equivale a nivel bajo. Es una condición de apoyo. La persona docente decide si la diferenciación mantiene el objetivo y evita etiquetas sobre capacidad.</p>`,
          source: "P3.6 Banco de retroalimentación diferenciada · patrón 8",
          sourcesDetail: `<p>El banco propone comentarios A2, B1, de baja confianza y microrremedios para ocho patrones frecuentes.</p>`
        },
        {
          title: "La salida genérica oculta el próximo paso",
          accent: "amber",
          html: `<div class="split equal"><div class="statement-card"><strong>No sirve todavía</strong><p>“Excellent job. Improve your grammar and vocabulary.”</p><small>Elogio sin evidencia, prioridad ni acción.</small></div><div class="statement-card"><strong>Sí orienta</strong><p>“Use <em>inconvenience</em> for the problem and <em>understanding</em> when you thank the customer. Correct those two phrases.”</p><small>Patrón, evidencia y nuevo intento.</small></div></div>`,
          notes: `<p>Pida al grupo que identifique qué puede hacer la persona estudiante con cada comentario. La segunda versión sigue necesitando revisión docente de exactitud y nivel.</p>`,
          source: "P3.5 Salida de respaldo PR-02",
          sourcesDetail: `<p>Comparación basada en la salida aceptable y la salida deliberadamente defectuosa de PR-02.</p>`
        },
        {
          title: "PR-02 Retroalimentación diferenciada",
          accent: "purple",
          html: `<div><p class="slide-kicker">Práctica guiada · 12 minutos</p><h2 class="slide-title wide">Dos patrones, tres apoyos y una microrremediación</h2><div class="metric-grid"><div class="metric"><span class="metric-number">2</span><b>Errores recurrentes</b><span>Elegidos por prioridad pedagógica.</span></div><div class="metric"><span class="metric-number">3</span><b>Versiones</b><span>A2, B1 y baja confianza.</span></div><div class="metric"><span class="metric-number">5</span><b>Minutos</b><span>Microrremedio breve por patrón.</span></div></div><p class="lead">Guarde también un comentario genérico que tuvo que corregir.</p></div>`,
          notes: `<p>Asigne una muestra sintética y active el temporizador. Pida revisar nivel, precisión y tono. Quien no tenga acceso trabaja con la salida pregenerada.</p>`,
          source: "P3.1 Consigna PR-02; P3.3; P3.5; P3.6",
          sourcesDetail: `<p>Producto y Plan B definidos en los materiales de práctica del taller.</p>`
        },
        {
          title: "El premortem didáctico cambia la pregunta",
          accent: "navy",
          html: `<div class="split"><div><p class="slide-kicker">Ciclo 2.2 · Apoyo anticipatorio</p><h2 class="slide-title wide">Imagine que la tarea falló: ¿qué se observaría?</h2><p class="lead">Anticipe errores de la tarea, no déficits de las personas.</p></div><div class="evidence-card"><span class="evidence-label">Secuencia de control</span><p>Error observable → hipótesis → señal temprana → microrremedio → alternativa sin internet.</p><small>Una hipótesis no es un diagnóstico.</small></div></div>`,
          notes: `<p>Defina el premortem como preparación, no como predicción cierta. Describa la tarea, el nivel y el contexto general antes de pedir posibilidades.</p>`,
          source: "P3.1 Consigna PR-03; P3.5 Salida de respaldo PR-03",
          sourcesDetail: `<p>La estructura del análisis anticipatorio y su límite se establecen en los materiales PR-03.</p>`
        },
        {
          title: "De la falla posible a un remedio breve",
          accent: "green",
          html: `<div><p class="slide-kicker">Ejemplo · Confirmar una reserva A2</p><h2 class="slide-title wide">Cada posibilidad debe producir una señal y una intervención comprobable</h2><table class="matrix"><thead><tr><th>Error observable</th><th>Señal temprana</th><th>Microrremedio</th></tr></thead><tbody><tr><td>No confirma la fecha</td><td>Omite mes o día</td><td>Reconstruir tres fechas</td></tr><tr><td>Formula dos preguntas juntas</td><td>El cliente responde solo una</td><td>Separar y practicar preguntas</td></tr><tr><td>Inventa una política</td><td>Promete algo no suministrado</td><td>Practicar cómo declarar límites</td></tr></tbody></table></div>`,
          notes: `<p>La causa puede formularse como hipótesis, pero no es necesaria para actuar. Priorice primero el error con mayor impacto comunicativo y el remedio que pueda aplicarse antes de la tarea.</p>`,
          source: "P3.5 Salida de respaldo PR-03 · CO-02",
          sourcesDetail: `<p>Extracto del ejemplo aceptable para una reserva hotelera por teléfono, nivel A2 y grupo con niveles mezclados.</p>`
        },
        {
          title: "Hipótesis no significa estereotipo",
          accent: "amber",
          html: `<div class="risk-band"><div><b>Evite</b><p>“El estudiantado adulto siempre tiene mala pronunciación.”</p></div><div><b>Reformule</b><p>“Puede omitir la confirmación de fecha si concentra la atención en el vocabulario.”</p></div><div><b>Compruebe</b><p>“Observe si menciona día y mes antes de cerrar.”</p></div></div><p class="lead">La intervención se activa por evidencia de la tarea, no por una etiqueta del grupo.</p>`,
          notes: `<p>Detenga cualquier generalización sobre edad, origen, motivación o capacidad. Una descripción general del grupo no autoriza perfiles individuales ni conclusiones causales.</p>`,
          source: "P3.5 Salida deliberadamente defectuosa PR-03",
          sourcesDetail: `<p>Los materiales del taller contrastan errores observables con estereotipos presentados incorrectamente como hechos.</p>`
        },
        {
          title: "PR-03 Anticipe errores y microrremedios",
          accent: "purple",
          html: `<div><p class="slide-kicker">Práctica guiada · 12 minutos</p><h2 class="slide-title wide">Cinco fallas posibles antes de impartir la tarea</h2><div class="decision-grid"><div class="decision"><b>Describa</b><span>Tarea, nivel y contexto general.</span></div><div class="decision"><b>Anticipe</b><span>Cinco errores observables.</span></div><div class="decision"><b>Remedie</b><span>Una acción de cinco minutos por error.</span></div><div class="decision"><b>Depure</b><span>Una suposición injustificada.</span></div><div class="decision"><b>Adapte</b><span>Una opción sin internet.</span></div></div></div>`,
          notes: `<p>Use CO-02, CO-07 o CO-10. Antes de guardar, pida marcar expresamente cuál afirmación es hipótesis y cuál señal permitiría comprobarla.</p>`,
          source: "P3.1 Consigna PR-03; P3.4 Casos ocupacionales; P3.5",
          sourcesDetail: `<p>Casos sugeridos y producto de la práctica definidos en los materiales del taller.</p>`
        },
        {
          title: "Un chatbot de práctica es un contrato de interacción",
          accent: "navy",
          html: `<div><p class="slide-kicker">Ventana 2.3 · Práctica escrita</p><h2 class="slide-title wide">Defina qué hace, cómo responde y dónde se detiene</h2><div class="decision-grid"><div class="decision"><b>Rol</b><span>Interlocutor y objetivo.</span></div><div class="decision"><b>Nivel</b><span>Léxico, gramática y longitud.</span></div><div class="decision"><b>Ritmo</b><span>Una pregunta y espera por turno.</span></div><div class="decision"><b>Corrección</b><span>Cuándo, cuánto y con qué apoyo.</span></div><div class="decision"><b>Límites</b><span>Datos, invenciones, cambio de papel y cierre.</span></div></div></div>`,
          notes: `<p>No es necesario crear un asistente personalizado. Un bloque de instrucciones completo en una conversación nueva permite probar el diseño. Las interfaces y condiciones de las cuentas pueden cambiar.</p>`,
          source: "P3.7 Chatbot de práctica escrita",
          sourcesDetail: `<p>La plantilla reutilizable P3.7 define rol, situación, nivel, ritmo, corrección, límites, control de nivel y cierre.</p>`
        },
        {
          title: "Dos turnos revelan más que una promesa",
          accent: "green",
          html: `<div><p class="slide-kicker">Prueba de esfuerzo</p><h2 class="slide-title wide">Compruebe nivel, espera y política de corrección</h2><table class="matrix"><thead><tr><th>Entrada de prueba</th><th>Debe hacer</th><th>Incumplimiento visible</th></tr></thead><tbody><tr><td><em>Your room no is ready…</em></td><td>Mantener papel, una pregunta y como máximo una pista</td><td>Corregir todo o completar ambas voces</td></tr><tr><td><em>No sé cómo decir…</em></td><td>Dar apoyo breve, pedir intento en inglés y esperar</td><td>Traducir todo o continuar por la persona</td></tr></tbody></table></div>`,
          notes: `<p>Ejecute exactamente dos pruebas. Registre una instrucción que el asistente incumplió y cambie el bloque original; no intente corregir el comportamiento solo con mensajes posteriores.</p>`,
          source: "P3.7 · Guion de prueba de dos turnos",
          sourcesDetail: `<p>Entradas, comportamiento esperado y señales de incumplimiento provienen del guion P3.7.</p>`
        },
        {
          title: "Cinco fallas típicas del chatbot",
          accent: "amber",
          html: `<div><p class="slide-kicker">Ajuste del bloque original</p><h2 class="slide-title wide">Convierta cada falla en una regla observable</h2><table class="matrix"><thead><tr><th>Falla</th><th>Ajuste</th></tr></thead><tbody><tr><td>Sale del nivel</td><td>Limite longitud, léxico y gramática.</td></tr><tr><td>Corrige demasiado</td><td>Máximo un aspecto y solo bajo una condición.</td></tr><tr><td>Responde en español</td><td>Defina una pista y exija nuevo intento.</td></tr><tr><td>Elogia todo</td><td>Prohíba elogio automático; pida evidencia.</td></tr><tr><td>Olvida el papel</td><td>Ordene esperar y fije un cierre.</td></tr></tbody></table></div>`,
          notes: `<p>No suponga que una instrucción perfecta elimina toda falla. La estabilidad se comprueba con entradas variadas. El producto del taller documenta un incumplimiento real y un ajuste.</p>`,
          source: "P3.7 · Cinco fallas típicas y su ajuste",
          sourcesDetail: `<p>Resumen directo de la matriz de fallas y ajustes del material P3.7.</p>`
        },
        {
          title: "PR-04 Configure y pruebe el chatbot",
          accent: "purple",
          html: `<div><p class="slide-kicker">Práctica guiada · 12 minutos</p><h2 class="slide-title wide">Un bloque de instrucciones, dos turnos y un ajuste</h2><div class="metric-grid"><div class="metric"><span class="metric-number">1</span><b>Contrato</b><span>Rol, nivel, ritmo, corrección y límites.</span></div><div class="metric"><span class="metric-number">2</span><b>Turnos de prueba</b><span>Nivel y respuesta ante español.</span></div><div class="metric"><span class="metric-number">1</span><b>Incumplimiento</b><span>Registrado con el ajuste aplicado.</span></div></div><p class="lead">Haga la prueba usted mismo; no use conversaciones reales de estudiantes.</p></div>`,
          notes: `<p>Use CO-01, CO-02, CO-06 o CO-08. Quien no tenga acceso analiza la salida de respaldo y reescribe una regla que habría evitado la falla.</p>`,
          source: "P3.1 Consigna PR-04; P3.4; P3.5; P3.7",
          sourcesDetail: `<p>Producto, casos sugeridos, plantilla y Plan B definidos en los materiales del taller.</p>`
        },
        {
          title: "Qué se delega y qué no",
          tone: "dark",
          accent: "amber",
          html: `<p class="eyebrow">Cierre · 7 minutos</p><h2 class="hero-statement">Delegue borradores.<br><span class="accent-text">Conserve las decisiones.</span></h2><div class="comparison-grid" style="margin-top:32px"><div class="comparison"><b>Sí puede apoyar</b><span>Variantes, patrones posibles, pistas, simulaciones y formatos.</span></div><div class="comparison"><b>No se delega</b><span>Diagnóstico, prioridad pedagógica, calificación final, protección de datos y efecto sobre una persona.</span></div></div>`,
          notes: `<p>Recupere un hallazgo de cada práctica. Pida nombrar una salida que mejoró después de revisarla y una decisión que permaneció bajo responsabilidad docente.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>El cierre y la separación entre apoyo de IA y responsabilidad docente provienen del ${methodologySource}.</p>`
        },
        {
          title: "Decisiones para adaptar antes de facilitar",
          accent: "purple",
          html: `<div><p class="slide-kicker">Preparación del Bloque 2</p><h2 class="slide-title wide">Qué necesito de la persona facilitadora</h2><div class="decision-grid"><div class="decision"><b>Ejemplo propio</b><span>Un patrón de retroalimentación que considere prioritario.</span></div><div class="decision"><b>Tarea meta</b><span>La actividad para el premortem didáctico.</span></div><div class="decision"><b>Contexto</b><span>El caso ocupacional para el chatbot escrito.</span></div><div class="decision"><b>Criterio</b><span>Qué no aceptará en nivel, tono y corrección.</span></div><div class="decision"><b>Plan B</b><span>Qué salida pregenerada proyectará si falla el acceso.</span></div></div></div>`,
          notes: `<p>Esta lámina responde al requisito de adaptación. Antes de la sesión, la persona facilitadora debe elegir ejemplos y criterios; no es necesario cambiar la arquitectura de las prácticas.</p>`,
          source: "P2.2 · Requisito de adaptación de la presentación base",
          sourcesDetail: `<p>Lista de decisiones derivada del encargo P2.2 y de los productos PR-02, PR-03 y PR-04.</p>`
        }
      ]
    },

    bloque3: {
      code: "P2.3 · Bloque 3",
      title: "Modalidad educativa",
      accent: "purple",
      slides: [
        {
          title: "Secuencias, rúbricas y práctica oral",
          tone: "dark",
          accent: "purple",
          html: `<p class="eyebrow">Bloque 3 · 1:00 a 2:00</p><h1 class="hero-statement">Dos prácticas.<br><span class="accent-text">Una responsabilidad docente.</span></h1><p class="hero-subtitle">PR-05 prueba una secuencia y su rúbrica. PR-06 prueba una conversación oral y documenta un límite.</p>`,
          notes: `<p>Conecte el bloque con el método de la mañana. En ambas prácticas, la IA propone o interactúa, mientras la persona docente define evidencia, comprueba la salida y conserva la decisión evaluativa.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>Agenda y productos PR-05 y PR-06 definidos en el ${methodologySource}.</p>`
        },
        {
          title: "Evaluación formativa y evaluación sumativa",
          accent: "green",
          html: `<div class="split equal"><div class="statement-card"><strong>Formativa</strong><p>Ayuda a identificar fortalezas, necesidades y próximos pasos durante el aprendizaje.</p></div><div class="statement-card"><strong>Sumativa</strong><p>Resume el desempeño en un momento y frente a criterios definidos.</p></div></div><p class="quote">El uso de IA exige definir primero qué decisión evaluativa está en juego.</p>`,
          notes: `<p>Ubique PR-05 principalmente en evaluación formativa y prueba del instrumento. Una rúbrica generada no adquiere validez por su apariencia. La persona docente debe revisar criterios, descriptores y consecuencias.</p>`,
          source: "Biblioteca DOC-28 · p. 41",
          sourcesDetail: `<p><strong>DOC-28:</strong> <em>Generative Artificial Intelligence and Language Teaching</em>, p. 41. Distingue la evaluación sumativa del proceso continuo de evaluación formativa.</p>`
        },
        {
          title: "La regla de datos permanece activa",
          accent: "amber",
          html: `<div class="split"><div><p class="slide-kicker">Antes de PR-05 y PR-06</p><h2 class="slide-title wide">Use textos sintéticos y su propia voz</h2><p class="lead">No cargue trabajos, notas, expedientes ni grabaciones reales de estudiantes.</p></div><div class="evidence-card"><span class="evidence-label">Alternativa segura</span><p>Recree el patrón de error en una muestra ficticia y conserve el objetivo pedagógico.</p><small>${privacyNote}</small></div></div>`,
          notes: `<p>Reitere la regla sin extenderse. Para la prueba de esfuerzo, el portal ya contiene producciones sintéticas contrastantes. Para la práctica oral, cada docente utiliza su propia voz.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>${privacyNote}</p>`
        },
        {
          title: "Evidencia observable antes de generar",
          html: `<div><p class="slide-kicker">Inicio de PR-05</p><h2 class="slide-title wide">El objetivo describe qué hará la persona estudiante</h2><div class="split"><div class="prompt-example">Contexto: recepción hotelera<br>Nivel: A2<br>Desempeño: atender una queja<br>Evidencia: reconoce el problema, ofrece una acción y confirma el acuerdo</div><div class="statement-card"><strong>Pregunta de control</strong><p>¿La evidencia se puede observar en el producto o la actuación, sin adivinar intenciones?</p></div></div></div>`,
          notes: `<p>Pida que cada persona formule una evidencia observable antes de abrir la IA. Evite verbos internos como “comprender” si no se acompañan de una actuación verificable. El contexto ocupacional determina qué cuenta como desempeño.</p>`,
          source: "PR-05 · materiales del taller; Biblioteca DOC-28 · pp. 41–44",
          sourcesDetail: `<p><strong>DOC-28:</strong> revisa usos de IA para construir tareas, generar retroalimentación y analizar trabajos con criterios específicos, junto con sus límites.</p>`
        },
        {
          title: "Secuencia didáctica de veinte minutos",
          accent: "navy",
          html: `<div><p class="slide-kicker">Arquitectura temporal</p><h2 class="slide-title wide">La IA ocupa una parte de la secuencia y deja espacio para producir y revisar</h2><div class="flow"><div class="flow-step">3 min<br>encuadre</div><div class="flow-step">4 min<br>modelo</div><div class="flow-step">7 min<br>producción</div><div class="flow-step">4 min<br>retroalimentación</div><div class="flow-step">2 min<br>salida</div></div><p class="lead">La distribución puede cambiar. El total y la evidencia deben permanecer claros.</p></div>`,
          notes: `<p>La secuencia propuesta sirve como punto de partida, no como receta universal. Compruebe que el tiempo de uso de IA no absorba la producción lingüística. Pida una evidencia de cierre que pueda recogerse en dos minutos.</p>`,
          source: "Diseño PR-05 · documento metodológico; Biblioteca DOC-28 · pp. 41–48",
          sourcesDetail: `<p>La fuente del corpus sitúa la IA dentro de decisiones de enseñanza, evaluación formativa y aprendizaje autodirigido. La distribución temporal corresponde al diseño del taller.</p>`
        },
        {
          title: "Descriptores que cambian entre niveles",
          accent: "purple",
          html: `<div><p class="slide-kicker">Rúbrica analítica 0–16</p><h2 class="slide-title wide">Cada columna describe una diferencia observable</h2><table class="matrix"><thead><tr><th>Criterio</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead><tbody><tr><td>Cumplimiento</td><td>No responde</td><td>Respuesta mínima</td><td>Resuelve una parte</td><td>Resuelve casi todo</td><td>Resuelve la situación</td></tr><tr><td>Control</td><td>Incomprensible</td><td>Interrupción constante</td><td>Control limitado</td><td>Errores no bloquean</td><td>Control sostenido</td></tr><tr><td>Léxico</td><td>Sin evidencia</td><td>Muy insuficiente</td><td>Repertorio básico</td><td>Adecuado al caso</td><td>Preciso y flexible</td></tr><tr><td>Mecánica</td><td>Impide leer</td><td>Dificulta mucho</td><td>Fallas frecuentes</td><td>Fallas menores</td><td>Convenciones consistentes</td></tr></tbody></table></div>`,
          notes: `<p>Use la tabla como ejemplo de progresión, no como instrumento cerrado. Revise si cada descriptor describe una diferencia que dos evaluadores podrían reconocer. Adapte los términos a la destreza oral o escrita correspondiente.</p>`,
          source: "PR-05 · Probador de Rúbricas del portal",
          sourcesDetail: `<p>Los cuatro criterios y la escala 0–16 pertenecen al diseño del taller. La calibración final debe revisarse contra el objetivo y el nivel MCER seleccionado.</p>`
        },
        {
          title: "Retroalimentación explicable",
          accent: "green",
          html: `<div class="split"><div><p class="slide-kicker">Derecho a comprender</p><h2 class="slide-title wide">Una recomendación útil muestra su base y permite cuestionarla</h2><p class="lead">La persona estudiante necesita saber qué evidencia se observó y qué acción puede mejorar el desempeño.</p></div><div class="stack"><div class="statement-card"><strong>Evidencia</strong><p>Fragmento o conducta que sustenta el comentario.</p></div><div class="statement-card"><strong>Criterio</strong><p>Regla o descriptor aplicado.</p></div><div class="statement-card"><strong>Próximo paso</strong><p>Acción breve y realizable.</p></div></div></div>`,
          notes: `<p>Explique que la “explicación” no equivale a aceptar una cadena de razonamiento del modelo. Para el aula, la explicación útil conecta evidencia visible, criterio y próximo paso. La persona docente puede corregir o rechazar la recomendación.</p>`,
          source: "Biblioteca DOC-40 · pp. 4 y 8–10",
          sourcesDetail: `<p><strong>DOC-40:</strong> define la explicabilidad como información comprensible que permite juzgar una salida. También vincula la explicación con agencia, supervisión humana y posibilidad de impugnar decisiones.</p>`
        },
        {
          title: "Prueba de esfuerzo con dos muestras",
          accent: "amber",
          html: `<div class="split equal"><div class="statement-card"><strong>Muestra A</strong><p>Cumple la intención comunicativa con errores menores propios del nivel.</p></div><div class="statement-card"><strong>Muestra B</strong><p>Usa lenguaje superficialmente correcto, pero no resuelve la situación.</p></div></div><p class="quote">Una rúbrica útil separa desempeños distintos y explica la diferencia.</p>`,
          notes: `<p>Aplique la rúbrica a ambas muestras sintéticas. Si entrega puntuaciones casi iguales, revise criterios o descriptores. Si castiga demasiado la forma y pierde la intención comunicativa, ajuste la ponderación pedagógica.</p>`,
          source: "PR-05 · muestras sintéticas y probador de rúbricas",
          sourcesDetail: `<p>La prueba de esfuerzo forma parte del material local del taller y no usa producciones reales de estudiantes.</p>`
        },
        {
          title: "PR-05 Producto y evidencia",
          accent: "purple",
          html: `<div><p class="slide-kicker">Ventana de práctica · 12 minutos</p><h2 class="slide-title wide">Secuencia, rúbrica aplicada y una corrección documentada</h2><div class="metric-grid"><div class="metric"><span class="metric-number">1</span><b>Secuencia</b><span>Veinte minutos y evidencia observable.</span></div><div class="metric"><span class="metric-number">2</span><b>Aplicaciones</b><span>Dos muestras sintéticas contrastantes.</span></div><div class="metric"><span class="metric-number">1</span><b>Ajuste</b><span>Cambio basado en el resultado de la prueba.</span></div></div></div>`,
          notes: `<p>El microentregable debe mostrar qué cambió después de probar. Una rúbrica sin aplicación no demuestra calibración. Active el temporizador y remita al Plan B si alguien no puede generar una secuencia.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>Producto esperado PR-05 definido en el ${methodologySource}.</p>`
        },
        {
          title: "Dos configuraciones para PR-06",
          accent: "navy",
          html: `<div class="split equal"><div class="statement-card"><strong>Interlocutor</strong><p>La IA mantiene un papel, espera y limita sus turnos para que la persona practique.</p></div><div class="statement-card"><strong>Apoyo formativo</strong><p>La IA comenta una muestra propia con evidencia, una prioridad y un límite explícito.</p></div></div><p class="lead">No combine ambos papeles en el mismo turno.</p>`,
          notes: `<p>En la primera configuración, el éxito se mide por cuánto y cómo habla la persona. En la segunda, el éxito se mide por la calidad y trazabilidad de la retroalimentación. Separar funciones facilita detectar fallas.</p>`,
          source: "PR-06 · documento metodológico y guion v1",
          sourcesDetail: `<p>Configuraciones diseñadas para la práctica oral del taller.</p>`
        },
        {
          title: "Dos arquitecturas de conversación por voz",
          accent: "navy",
          html: `<div><p class="slide-kicker">Funcionamiento general</p><h2 class="slide-title wide">La ruta del audio cambia lo que se puede revisar</h2><table class="matrix"><thead><tr><th>Arquitectura</th><th>Ruta simplificada</th><th>Evidencia disponible</th></tr></thead><tbody><tr><td>Componentes separados</td><td>Audio, transcripción, modelo de lenguaje y síntesis de voz</td><td>La transcripción y las salidas intermedias pueden facilitar la revisión.</td></tr><tr><td>Audio integrado</td><td>Un modelo procesa y genera audio dentro de una arquitectura multimodal</td><td>La evidencia accesible depende del servicio y de su configuración.</td></tr></tbody></table></div>`,
          notes: `<p>Presente esta comparación como esquema funcional. No asigne cifras universales de latencia ni afirme que una arquitectura comprende emociones. Pregunte qué registro conserva cada herramienta y qué puede revisar la persona docente.</p>`,
          source: "Biblioteca DOC-41 · pp. 3–9; documentación técnica a verificar por herramienta",
          sourcesDetail: `<p><strong>DOC-41:</strong> documenta una arquitectura de evaluación oral con componentes de voz, transcripción, agente y revisión docente, además de fallas observadas.</p><p><strong>Límite:</strong> las implementaciones comerciales cambian. Antes del taller deben comprobarse la versión, los registros disponibles y las condiciones de uso de cada servicio.</p>`
        },
        {
          title: "Reconocimiento de voz y evaluación fonética",
          accent: "amber",
          html: `<div class="split"><div><p class="slide-kicker">Límite técnico</p><h2 class="slide-title wide">Una transcripción correcta no demuestra una pronunciación correcta</h2><p class="lead">El sistema puede inferir palabras a partir del contexto y ocultar el rasgo que se quería observar.</p></div><div class="evidence-card"><span class="evidence-label">Regla de uso</span><p>Separe lo que el sistema transcribió, lo que la persona oyó y lo que la herramienta infiere.</p><small>Registre incertidumbre cuando la evidencia no permite concluir.</small></div></div>`,
          notes: `<p>Pida que la herramienta no diagnostique un rasgo fonético a partir de una transcripción. Si se necesita evaluación de pronunciación, use evidencia auditiva y criterios apropiados, con revisión humana.</p>`,
          source: "Límite metodológico del taller; Biblioteca DOC-41 · pp. 2–9",
          sourcesDetail: `<p><strong>DOC-41:</strong> describe requisitos de un sistema oral, fallas de conducta y aspectos que se pierden al automatizar. Su contexto universitario no permite trasladar resultados directamente al aprendizaje de idiomas del INA.</p>`
        },
        {
          title: "La evidencia del estudio de voz",
          accent: "green",
          html: `<div class="split equal"><div><p class="slide-kicker">Caso documentado</p><h2 class="slide-title wide">La IA de voz permitió ampliar comprobaciones orales en un curso universitario</h2><p class="lead">El estudio reporta 36 exámenes y documenta fallas que obligaron a rediseñar la arquitectura.</p></div><div class="stack"><div class="statement-card"><strong>Aporte</strong><p>Conversaciones estructuradas, transcripción y evidencia para revisar.</p></div><div class="statement-card"><strong>Fallas</strong><p>Preguntas acumuladas, selección no aleatoria y pérdida de señales humanas.</p></div><div class="statement-card"><strong>Límite</strong><p>No demuestra superioridad frente a una evaluación humana bien dotada.</p></div></div></div>`,
          notes: `<p>Presente el estudio como caso, no como validación universal. El contexto fue un curso universitario de IA, no una clase de idiomas. El aporte para el taller está en los requisitos y fallas observadas, además de la necesidad de conservar revisión humana.</p>`,
          source: "Biblioteca DOC-41 · pp. 1–9",
          sourcesDetail: `<p><strong>DOC-41:</strong> Ipeirotis y Rizakos, <em>Scalable and Personalized Oral Assessments Using Voice AI</em>, 2026. El resumen reporta 36 exámenes; las páginas 6–9 documentan fallas y límites.</p><p><strong>Límite de transferencia:</strong> estudio de un curso universitario de IA/ML. No evalúa aprendizaje de inglés ni población INA.</p>`
        },
        {
          title: "PR-06 Práctica y registro",
          accent: "purple",
          html: `<div><p class="slide-kicker">Ventana de práctica · 12 minutos</p><h2 class="slide-title wide">Cuatro observaciones y un ajuste documentado</h2><table class="matrix"><thead><tr><th>Criterio</th><th>Pregunta observable</th></tr></thead><tbody><tr><td>Participación</td><td>¿La persona habló la mayor parte del tiempo?</td></tr><tr><td>Turnos</td><td>¿El sistema esperó la respuesta o interrumpió una pausa?</td></tr><tr><td>Nivel</td><td>¿El vocabulario y la longitud respetaron el MCER solicitado?</td></tr><tr><td>Retroalimentación</td><td>¿La recomendación se apoyó en evidencia audible o transcrita?</td></tr></tbody></table><p class="lead">Registre un límite y el cambio que aplicaría.</p></div>`,
          notes: `<p>Solicite una interacción breve con voz propia. Estas preguntas describen lo ocurrido en una prueba concreta; no miden de forma estable la calidad de una marca. Si la función no está disponible, use la transcripción del Plan B. El producto no necesita una grabación.</p>`,
          source: "PR-06 · documento metodológico",
          sourcesDetail: `<p>Producto esperado PR-06 definido en el ${methodologySource}.</p>`
        },
        {
          title: "Cierre del Bloque 3",
          tone: "dark",
          accent: "purple",
          html: `<p class="eyebrow">Síntesis</p><h2 class="hero-statement">Más práctica requiere <span class="accent-text">mejor evidencia</span>, no menos juicio</h2><p class="hero-subtitle">La secuencia conserva la producción del estudiante. La rúbrica explica. La voz amplía oportunidades y declara sus límites.</p>`,
          notes: `<p>Cierre con los dos microentregables y anuncie la transición al Bloque 4. La responsabilidad humana no aparece solo al final: organiza la tarea, los criterios, la revisión y la decisión de uso.</p>`,
          source: "Biblioteca DOC-28 · pp. 41–48; DOC-40 · pp. 4–10; DOC-41 · pp. 1–9",
          sourcesDetail: `<p>Síntesis del corpus consultado para evaluación formativa, explicabilidad y evaluación oral con IA de voz.</p>`
        }
      ]
    },

    bloque4: {
      code: "P2.4 · Bloque 4",
      title: "IA local en el dispositivo",
      accent: "amber",
      slides: [
        {
          title: "Gestión de modelos locales",
          tone: "dark",
          accent: "amber",
          html: `<p class="eyebrow">Bloque 4 · 2:00 a 2:30</p><h1 class="hero-statement">El modelo local añade <span class="accent-text">control y responsabilidad</span></h1><p class="hero-subtitle">Selección, prueba en modo avión, comparación y decisión de conservar o eliminar.</p>`,
          notes: `<p>Presente la IA local como una opción que cambia la arquitectura de uso. No prometa privacidad absoluta. La práctica busca que cada persona gestione un modelo y documente sus condiciones.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>Objetivo y producto PR-07 definidos en el ${methodologySource}.</p>`
        },
        {
          title: "Aplicación, modelo y datos",
          accent: "navy",
          html: `<div><p class="slide-kicker">Arquitectura mínima</p><h2 class="slide-title wide">La aplicación administra el entorno; el modelo produce la respuesta</h2><div class="flow"><div class="flow-step">Consigna</div><div class="flow-step">Aplicación</div><div class="flow-step">Modelo</div><div class="flow-step">Salida</div><div class="flow-step">Registro y decisión</div></div><p class="lead">La ruta de los datos depende de toda la cadena, no solo del archivo del modelo.</p></div>`,
          notes: `<p>Distinga la interfaz, el archivo del modelo y los servicios que podrían acompañar la aplicación. Una prueba en modo avión aporta evidencia sobre una ejecución concreta, pero no describe por sí sola permisos, sincronización, actualizaciones o registros anteriores.</p>`,
          source: "Biblioteca DOC-01 · pp. 4 y 12; DOC-18 · pp. 4–5",
          sourcesDetail: `<p><strong>DOC-01:</strong> distingue soberanía de infraestructura, datos y modelos.</p><p><strong>DOC-18:</strong> explica que la soberanía debe evaluarse a lo largo de almacenamiento, conectividad, cómputo, identidad, propiedad intelectual y gobernanza.</p>`
        },
        {
          title: "La voz amplía la ruta de los datos",
          accent: "purple",
          html: `<div><p class="slide-kicker">Antes de usar una función de voz</p><h2 class="slide-title wide">Micrófono, audio, transcripción y registros requieren verificación separada</h2><div class="flow"><div class="flow-step">Captura</div><div class="flow-step">Transmisión</div><div class="flow-step">Procesamiento</div><div class="flow-step">Registro</div><div class="flow-step">Eliminación</div></div><p class="lead">La práctica usa la voz de la persona docente y no conserva una grabación como producto.</p></div>`,
          notes: `<p>No clasifique toda voz como dato biométrico de forma automática. La evaluación institucional debe considerar si el tratamiento permite identificar a la persona, qué conserva el servicio y con qué finalidad. Durante el taller se aplica una regla más restrictiva: no usar voces de estudiantes.</p>`,
          source: "Protocolo del taller · Ley 8968; Biblioteca DOC-01 y DOC-18",
          sourcesDetail: `<p><strong>Regla operativa:</strong> use voz propia y muestras sintéticas. No cargue audios de estudiantes.</p><p><strong>Límite:</strong> esta lámina orienta la verificación y no sustituye la revisión jurídica o de seguridad del INA.</p>`
        },
        {
          title: "Lo local cambia el riesgo, no lo elimina",
          accent: "amber",
          html: `<div class="split equal"><div class="statement-card"><strong>Puede reducir</strong><p>Dependencia de conectividad y envío de contenido durante una inferencia local comprobada.</p></div><div class="statement-card"><strong>No garantiza</strong><p>Privacidad total, ausencia de telemetría, calidad, licencia adecuada o actualizaciones seguras.</p></div></div><p class="quote">El control se demuestra con evidencia técnica y reglas de uso.</p>`,
          notes: `<p>Evite la frase “local es privado”. Pregunte qué procesa el dispositivo, qué permisos tiene la aplicación, dónde se guardan registros y cómo se actualiza. Señale que mayor control también puede aumentar la complejidad de gestión.</p>`,
          source: "Biblioteca DOC-01 · pp. 12 y 19; DOC-18 · pp. 9–11",
          sourcesDetail: `<p><strong>DOC-01:</strong> seguridad por capas y complejidad de entornos privados o soberanos.</p><p><strong>DOC-18:</strong> advierte sobre afirmaciones de soberanía que no ofrecen control verificable, reversibilidad o capacidad real.</p>`
        },
        {
          title: "Cinco decisiones antes de descargar",
          html: `<div><p class="slide-kicker">Ficha de gestión</p><h2 class="slide-title wide">La selección empieza por la tarea y termina con una salida reversible</h2><div class="decision-grid"><div class="decision"><b>Tarea</b><span>Qué necesidad concreta resuelve.</span></div><div class="decision"><b>Compatibilidad</b><span>Memoria, espacio y sistema.</span></div><div class="decision"><b>Procedencia</b><span>Fuente, versión y licencia.</span></div><div class="decision"><b>Datos</b><span>Permisos, registros y sincronización.</span></div><div class="decision"><b>Salida</b><span>Cómo actualizar, cambiar o eliminar.</span></div></div></div>`,
          notes: `<p>Use la ficha antes de la demostración. Si un modelo no documenta procedencia o licencia, no lo recomiende. La capacidad de eliminar o cambiar la solución forma parte del control, no es una tarea de mantenimiento secundaria.</p>`,
          source: "Biblioteca DOC-18 · pp. 8–11; DOC-04 · pp. 5–10",
          sourcesDetail: `<p><strong>DOC-18:</strong> relaciona soberanía creíble con capacidad, transparencia y reversibilidad.</p><p><strong>DOC-04:</strong> plantea condiciones de adquisición como auditabilidad, interoperabilidad, documentación y protección de datos.</p>`
        },
        {
          title: "Demostración de gestión y prueba",
          accent: "green",
          html: `<div><p class="slide-kicker">Flujo en pantalla compartida</p><h2 class="slide-title wide">Documente cada condición antes de comparar la respuesta</h2><table class="matrix"><thead><tr><th>Paso</th><th>Evidencia visible</th><th>Decisión</th></tr></thead><tbody><tr><td>Compatibilidad</td><td>Memoria y almacenamiento disponibles</td><td>Continuar o descartar</td></tr><tr><td>Descarga</td><td>Fuente, modelo, versión y tamaño</td><td>Aceptar o buscar alternativa</td></tr><tr><td>Modo avión</td><td>Respuesta sin conexión durante la prueba</td><td>Registrar alcance</td></tr><tr><td>Comparación</td><td>Misma consigna en local y nube</td><td>Elegir por tarea</td></tr><tr><td>Gestión</td><td>Ruta de actualización y eliminación</td><td>Conservar o retirar</td></tr></tbody></table></div>`,
          notes: `<p>Comparta la pantalla del teléfono y verbalice las decisiones. No descargue archivos grandes durante la sesión si ya existe una instalación preparada. Mantenga una grabación o capturas de respaldo para el Plan B.</p>`,
          source: "PR-07 · documento metodológico",
          sourcesDetail: `<p>Flujo de la práctica PR-07 establecido en el ${methodologySource}.</p>`
        },
        {
          title: "PR-07 Prueba o respaldo",
          accent: "purple",
          html: `<div><p class="slide-kicker">Práctica guiada · 12 minutos</p><h2 class="slide-title wide">Misma consigna, dos entornos y una decisión documentada</h2><div class="metric-grid"><div class="metric"><span class="metric-number">1</span><b>Consigna breve</b><span>Sin datos personales ni archivos reales.</span></div><div class="metric"><span class="metric-number">2</span><b>Entornos</b><span>Modelo local y opción en la nube.</span></div><div class="metric"><span class="metric-number">1</span><b>Decisión</b><span>Conservar, cambiar o eliminar.</span></div></div><p class="lead">Si el dispositivo no es compatible, use la evidencia pregenerada del Plan B.</p></div>`,
          notes: `<p>No convierta la compatibilidad del teléfono en una barrera de participación. Quien no pueda ejecutar el modelo analiza el respaldo y completa la misma matriz de decisión.</p>`,
          source: methodologySource,
          sourcesDetail: `<p>Producto PR-07 y contingencia definidos en el ${methodologySource}.</p>`
        },
        {
          title: "Comparación local y nube",
          accent: "navy",
          html: `<div><p class="slide-kicker">Matriz de decisión</p><h2 class="slide-title wide">La mejor opción depende de la tarea, los datos y las condiciones reales</h2><table class="matrix"><thead><tr><th>Criterio</th><th>Modelo local</th><th>Servicio en la nube</th></tr></thead><tbody><tr><td>Conectividad</td><td>Puede operar sin red tras la descarga</td><td>Depende del servicio y la conexión</td></tr><tr><td>Control de datos</td><td>Requiere comprobar procesamiento, permisos y registros</td><td>Requiere revisar política, cuenta y flujo externo</td></tr><tr><td>Capacidad</td><td>Limitada por el dispositivo y el modelo</td><td>Puede ofrecer modelos de mayor escala</td></tr><tr><td>Actualización</td><td>La persona gestiona versión y espacio</td><td>El proveedor gestiona cambios del servicio</td></tr><tr><td>Reversibilidad</td><td>Debe poder eliminar modelo y datos</td><td>Debe poder exportar, cerrar o cambiar proveedor</td></tr></tbody></table></div>`,
          notes: `<p>Complete la matriz con lo observado. Evite afirmar que un entorno gana en todos los criterios. La comparación solo vale para la tarea, versión y fecha documentadas.</p>`,
          source: "Biblioteca DOC-01 · pp. 12–19; DOC-18 · pp. 5–11",
          sourcesDetail: `<p>La matriz sintetiza los marcos de control, seguridad, capacidad y reversibilidad de DOC-01 y DOC-18. No sustituye una auditoría técnica de cada aplicación.</p>`
        },
        {
          title: "Gestión continua del riesgo",
          accent: "amber",
          html: `<div><p class="slide-kicker">Después de instalar</p><h2 class="slide-title wide">Actualizaciones, nuevos usos y cambios de datos pueden crear riesgos distintos</h2><div class="risk-band"><div><b>Identificar</b><p>Qué puede afectar el objetivo, a quién y en qué momento.</p></div><div><b>Tratar</b><p>Evitar, limitar, transferir o aceptar dentro de reglas institucionales.</p></div><div><b>Revisar</b><p>Repetir la evaluación cuando cambie la versión, la tarea o el contexto.</p></div></div></div>`,
          notes: `<p>Conecte la gestión del modelo con el ciclo de vida. Una prueba satisfactoria hoy no autoriza todos los usos futuros. Si cambia la aplicación, el modelo o el tipo de dato, repita la revisión.</p>`,
          source: "Biblioteca DOC-25 · pp. 2–11",
          sourcesDetail: `<p><strong>DOC-25:</strong> <em>AI Risk Management Toolkit</em>. Propone identificación multidisciplinaria, evaluación continua y opciones de tratamiento. El documento se dirige al sector público británico; aquí se usa como marco general de gestión, no como norma aplicable al INA.</p>`
        },
        {
          title: "Modo avión y soberanía de datos",
          accent: "green",
          html: `<div class="split"><div><p class="slide-kicker">Alcance de la prueba</p><h2 class="slide-title wide">Una respuesta sin conexión demuestra una ejecución, no toda la arquitectura</h2><p class="lead">La evaluación completa sigue el dato en reposo, en movimiento y durante el uso.</p></div><div class="stack"><div class="statement-card"><strong>En reposo</strong><p>Almacenamiento, cifrado, retención y acceso.</p></div><div class="statement-card"><strong>En movimiento</strong><p>Sincronización, transferencia y conectividad.</p></div><div class="statement-card"><strong>En uso</strong><p>Inferencia, registros, permisos y aplicaciones posteriores.</p></div></div></div>`,
          notes: `<p>Realice la prueba en modo avión y registre exactamente qué demuestra. Luego pregunte qué elementos quedan fuera de esa observación. Esta distinción evita promesas absolutas de privacidad.</p>`,
          source: "Biblioteca DOC-18 · pp. 4–5 y 11",
          sourcesDetail: `<p><strong>DOC-18:</strong> propone seguir los datos a través de sus estados y advierte contra la “soberanía” solo nominal. La capacidad real debe ser verificable y reversible.</p>`
        },
        {
          title: "Adaptación por lengua y cierre",
          tone: "dark",
          accent: "amber",
          html: `<p class="eyebrow">Decisión final</p><h2 class="hero-statement">Pruebe con la lengua real.<br><span class="accent-text">Documente antes de conservar.</span></h2><div class="comparison-grid" style="margin-top:32px"><div class="comparison"><b>LESCO</b><span>La salida textual no evalúa configuración manual, espacio ni componentes no manuales.</span></div><div class="comparison"><b>Portugués</b><span>Defina variedad y compruebe interferencias y falsos amigos.</span></div><div class="comparison"><b>Francés</b><span>Compruebe registro, tratamiento, género y preposiciones.</span></div><div class="comparison"><b>Microentregable</b><span>Compatibilidad, prueba, comparación, límite y decisión de gestión.</span></div></div>`,
          notes: `<p>No suponga menor calidad por idioma. Diseñe tareas equivalentes y registre resultados. En LESCO, recuerde que un modelo textual puede apoyar la planificación en español, pero no sustituye evaluación lingüística especializada de la lengua de señas.</p>`,
          source: "PR-07 y adaptaciones lingüísticas · documento metodológico",
          sourcesDetail: `<p>Las rutas por lengua y el producto final provienen del diseño metodológico del taller. Requieren revisión de personas especialistas en cada lengua y contexto.</p>`
        }
      ]
    }
  };
})();
