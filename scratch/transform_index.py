with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Header Nav
old_header_nav = """      <nav class="header-nav" aria-label="Navegación principal">
        <a href="#tab-practices" class="nav-link-btn active" data-target-tab="practices" onclick="App.switchTab('practices', true); return false;">🎯 7 Prácticas</a>
        <a href="#tab-builder" class="nav-link-btn" data-target-tab="builder" onclick="App.switchTab('builder', true); return false;">⚡ Asistente Prompts</a>
        <a href="#tab-slides" class="nav-link-btn" data-target-tab="slides" onclick="App.switchTab('slides', true); return false;">📊 Presentaciones</a>
        <a href="#tab-evidence" class="nav-link-btn" data-target-tab="evidence" onclick="App.switchTab('evidence', true); return false;">🔎 Evidencia PISA</a>
        <a href="#tab-library" class="nav-link-btn" data-target-tab="library" onclick="App.switchTab('library', true); return false;">📚 Biblioteca 2026</a>
        <a href="#tab-rubric" class="nav-link-btn" data-target-tab="rubric" onclick="App.switchTab('rubric', true); return false;">📋 Rúbricas</a>
        <a href="#tab-cases" class="nav-link-btn" data-target-tab="cases" onclick="App.switchTab('cases', true); return false;">💼 Casos Ocupacionales</a>
        <a href="simulador.html" class="nav-link-btn" style="background:rgba(5,150,105,0.25);color:#a7f3d0;border:1px solid rgba(5,150,105,0.4);">💬 Simulador Chat</a>
        <a href="glosario.html" class="nav-link-btn" style="background:rgba(217,119,6,0.25);color:#fde68a;border:1px solid rgba(217,119,6,0.4);">📖 Glosario</a>
      </nav>"""

new_header_nav = """      <nav class="header-nav" aria-label="Navegación principal">
        <a href="#tab-live" class="nav-link-btn active" data-target-tab="live" onclick="App.switchTab('live', true); return false;">🎯 1. Taller en Vivo</a>
        <a href="#tab-tools" class="nav-link-btn" data-target-tab="tools" onclick="App.switchTab('tools', true); return false;">⚡ 2. Asistente & Herramientas</a>
        <a href="#tab-library-hub" class="nav-link-btn" data-target-tab="library-hub" onclick="App.switchTab('library-hub', true); return false;">📚 3. Biblioteca & Evidencia (41 Docs)</a>
        <a href="simulador.html" class="nav-link-btn" style="background:rgba(5,150,105,0.25);color:#a7f3d0;border:1px solid rgba(5,150,105,0.4);">💬 Simulador</a>
        <a href="glosario.html" class="nav-link-btn" style="background:rgba(217,119,6,0.25);color:#fde68a;border:1px solid rgba(217,119,6,0.4);">📖 Glosario</a>
      </nav>"""

assert old_header_nav in html, "old_header_nav not found"
html = html.replace(old_header_nav, new_header_nav)

# 2. Add Live Focus Banner right after data-protection-bar
old_dp_bar = """  <div class="data-protection-bar">
    <div class="data-protection-content">
      <strong>🔒 Regla de Privacidad (Ley 8968):</strong>
      <span>No ingrese nombres, números de cédula ni trabajos reales de estudiantes en herramientas de IA. Utilice siempre las muestras sintéticas provistas en este portal.</span>
    </div>
  </div>"""

live_focus_banner = """  <div class="data-protection-bar">
    <div class="data-protection-content">
      <strong>🔒 Regla de Privacidad (Ley 8968):</strong>
      <span>No ingrese nombres, números de cédula ni trabajos reales de estudiantes en herramientas de IA. Utilice siempre las muestras sintéticas provistas en este portal.</span>
    </div>
  </div>

  <!-- Banner de Enfoque Activo en Vivo -->
  <aside id="live-focus-banner" class="live-focus-banner" aria-label="Práctica activa del taller">
    <div class="live-focus-container">
      <div class="live-focus-pill">
        <span class="pulse-dot"></span>
        <span>EN VIVO AHORA</span>
      </div>
      <div class="live-focus-titles">
        <h3 id="live-focus-label">Bloque 1 (AGM) · Práctica 1: Recepción de quejas en hotel (A2 Oral)</h3>
        <span id="live-focus-sub">Facilitador: Agustín Gómez Meléndez · Tiempo de práctica: 12 min</span>
      </div>
      <button id="btn-jump-live-practice" class="btn-focus-action">Ir a mi práctica ahora ➔</button>
    </div>
  </aside>"""

assert old_dp_bar in html, "old_dp_bar not found"
html = html.replace(old_dp_bar, live_focus_banner)

# 3. Update Sidebar Navigation
old_sidebar_groups = """          <!-- Grupo 2: Herramientas de Práctica -->
          <div class="sidebar-group">
            <div class="sidebar-group-title">Herramientas & Prácticas</div>
            <button class="sidebar-nav-item" data-sidebar-tab="practices">
              <span class="nav-icon">🎯</span>
              <span class="nav-label">7 Prácticas Activas</span>
              <span class="sidebar-badge">PR 1-7</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="builder">
              <span class="nav-icon">⚡</span>
              <span class="nav-label">Asistente Prompts</span>
              <span class="sidebar-badge">5 Pasos</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="slides">
              <span class="nav-icon">📊</span>
              <span class="nav-label">Presentaciones</span>
              <span class="sidebar-badge">4 Bloques</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="evidence">
              <span class="nav-icon">🔎</span>
              <span class="nav-label">Evidencia PISA 2025</span>
              <span class="sidebar-badge">Bloque 1</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="library">
              <span class="nav-icon">📚</span>
              <span class="nav-label">Biblioteca de Evidencia</span>
              <span class="sidebar-badge">41 Docs</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="rubric">
              <span class="nav-icon">📋</span>
              <span class="nav-label">Probador Rúbricas</span>
              <span class="sidebar-badge">0-16 pts</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="cases">
              <span class="nav-icon">💼</span>
              <span class="nav-label">Casos Ocupacionales</span>
              <span class="sidebar-badge">8 Casos</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="closing">
              <span class="nav-icon">⚖️</span>
              <span class="nav-label">Gobernanza & Cierre</span>
              <span class="sidebar-badge">Ley 8968</span>
            </button>
          </div>"""

new_sidebar_groups = """          <!-- Grupo 2: Las 3 Grandes Zonas del Taller -->
          <div class="sidebar-group">
            <div class="sidebar-group-title">Zonas de Trabajo</div>
            <button class="sidebar-nav-item active" data-sidebar-tab="live">
              <span class="nav-icon">🎯</span>
              <span class="nav-label">1. Taller en Vivo</span>
              <span class="sidebar-badge">PR 1-7</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="tools">
              <span class="nav-icon">⚡</span>
              <span class="nav-label">2. Herramientas & Prompts</span>
              <span class="sidebar-badge">4 Módulos</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="library-hub">
              <span class="nav-icon">📚</span>
              <span class="nav-label">3. Biblioteca & Evidencia</span>
              <span class="sidebar-badge">41 Docs</span>
            </button>
          </div>"""

assert old_sidebar_groups in html, "old_sidebar_groups not found"
html = html.replace(old_sidebar_groups, new_sidebar_groups)

# 4. Extract timeline and workflow via slice
tw_start = html.find('<!-- Ruta Pedagógica Central (Timeline Interactivo) -->')
tw_end = html.find('<!-- Pestañas de Navegación de Contenidos -->')
assert tw_start != -1 and tw_end != -1, "Timeline/workflow start or end not found"
tw_block = html[tw_start:tw_end].strip()
# Remove from top
html = html[:tw_start] + html[tw_end:]

# 5. Update content-tabs-nav-bar
old_tabs_nav = """        <!-- Pestañas de Navegación de Contenidos -->
        <nav id="content-tabs-nav-bar" class="content-tabs-nav" aria-label="Secciones del taller">
          <button class="tab-btn active" data-tab="practices">
        🎯 7 Prácticas Activas
        <span class="tab-badge">PR-01 a PR-07</span>
      </button>
      <button class="tab-btn" data-tab="builder">
        ⚡ Asistente de Prompts
        <span class="tab-badge">Paso a Paso</span>
      </button>
      <button class="tab-btn" data-tab="slides">
        📊 Presentaciones Explicadas
        <span class="tab-badge">4 Bloques</span>
      </button>
      <button class="tab-btn" data-tab="evidence">
        🔎 Evidencia PISA 2025
        <span class="tab-badge">Bloque 1</span>
      </button>
      <button class="tab-btn" data-tab="library">
        📚 Biblioteca de Evidencia 2026
        <span class="tab-badge">41 PDFs</span>
      </button>
      <button class="tab-btn" data-tab="rubric">
        📋 Probador de Rúbricas
        <span class="tab-badge">Interactivo</span>
      </button>
      <button class="tab-btn" data-tab="cases">
        💼 Casos Ocupacionales
        <span class="tab-badge">8 Casos INA</span>
      </button>
      <button class="tab-btn" data-tab="closing">
        📜 Gobernanza & Cierre
        <span class="tab-badge">30 Días</span>
      </button>
    </nav>"""

new_tabs_nav = """        <!-- Pestañas de Navegación de Contenidos: 3 Zonas Mentales -->
        <nav id="content-tabs-nav-bar" class="content-tabs-nav" aria-label="Secciones del taller">
          <button class="tab-btn active" data-tab="live">
            🎯 1. Taller en Vivo (7 Prácticas)
            <span class="tab-badge">Enfoque 1 a la vez</span>
          </button>
          <button class="tab-btn" data-tab="tools">
            ⚡ 2. Asistente & Herramientas
            <span class="tab-badge">Prompts, Rúbricas & Casos</span>
          </button>
          <button class="tab-btn" data-tab="library-hub">
            📚 3. Biblioteca & Evidencia
            <span class="tab-badge">41 PDFs & Ley 8968</span>
          </button>
        </nav>"""

assert old_tabs_nav in html, "old_tabs_nav not found"
html = html.replace(old_tabs_nav, new_tabs_nav)

# 6. Extract the 7 practice cards
prompts_dict = {
    'PR-01': "Actúa como evaluador pedagógico de inglés para el INA. Diseña un ejercicio de diálogo oral nivel MCER A2 para un recepcionista de hotel en Costa Rica atendiendo a un turista extranjero con una queja de habitación. Proporciona: 1) Guion de 4 turnos, 2) Lista de 5 frases clave formales, 3) Criterio de logro observable.",
    'PR-02': "Analiza el siguiente correo sintético de servicio al cliente de un estudiante: 'Dear sir, I write to complain because room dirty and shower no work. Need fix now.' Proporciona retroalimentación formativa diferenciada para nivel A2 y B1 por separado, destacando únicamente 2 errores prioritarios, una frase modelo correcta y un microrremedio de 5 minutos. No incluyas elogios vacíos ni felicitaciones genéricas.",
    'PR-03': "Para una clase de inglés laboral del INA en servicio al cliente (Nivel MCER A2), anticipa los 5 errores comunicativos más probables que cometerán los estudiantes al atender una queja telefónica. Para cada error incluye: 1) Frase errónea esperada, 2) Causa lingüística u ocupacional, y 3) Un microrremedio pedagógico de 3 minutos aplicable antes de la práctica.",
    'PR-04': "Eres un tutor socrático de inglés para recepcionistas de hotel del INA (nivel A2). Tu objetivo es practicar cómo tomar una reserva por mensaje escrito. Reglas: 1) Haz solo UNA pregunta breve por turno, 2) Si el estudiante comete un error grave de gramática o cortesía, indícale amablemente cómo mejorarlo antes de continuar, 3) Si escribe en español, recuérdale con calidez responder en inglés, 4) Mantén un tono profesional y realista.",
    'PR-05': "Genera una rúbrica analítica de evaluación de desempeño oral para inglés técnico en hotelería (nivel MCER A2). Debe contener exactamente 4 criterios: Precisión Léxica, Fluidez y Turnos, Cortesía Profesional y Resolución del Problema. Cada criterio debe tener descriptores observables en 4 niveles de logro (1=Inicial, 2=En Desarrollo, 3=Competente, 4=Avanzado).",
    'PR-06': "Modo de voz activo: Actúa como un turista estadounidense en un hotel boutique en Guanacaste solicitando asistencia en recepción para cambiar una reserva de tour. Espera mi respuesta, habla a velocidad pausada pero natural en nivel A2/B1. Limita tus respuestas a un máximo de 2 oraciones por turno para permitir que yo hable el 70% del tiempo.",
    'PR-07': "Genera un protocolo de 4 pasos para verificar si un modelo de IA local (instalado en la computadora o dispositivo móvil del docente) cumple con la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley 8968 de Costa Rica), evaluando permisos de almacenamiento, telemetría y sincronización en la nube."
}

def transform_card(card_raw, code):
    h_start = card_raw.find('<div class="practice-card-header">')
    h_end = card_raw.find('</div>', card_raw.find('class="practice-duration-pill"')) + 6
    header_html = card_raw[h_start:h_end]
    
    b_start = card_raw.find('<div class="practice-card-body">')
    f_end = card_raw.rfind('</div>') + 6
    body_and_footer = card_raw[b_start:f_end]
    
    prompt = prompts_dict.get(code, "")
    escaped_prompt = prompt.replace('"', '&quot;')
    
    action_steps_html = f"""          <!-- 3 Pasos de Acción Inmediata (Claridad Cognitiva) -->
          <div class="action-steps-grid">
            <div class="action-step-card step-copy">
              <span class="step-card-badge">Paso 1 · Copiar</span>
              <h4>Orden Pedagógica</h4>
              <p>Instrucción calibrada y lista con los 5 componentes para pegar en su IA:</p>
              <button class="btn-step-action btn-copy-prompt-direct" data-prompt="{escaped_prompt}">📋 Copiar Orden Lista</button>
            </div>
            <div class="action-step-card step-open">
              <span class="step-card-badge">Paso 2 · Abrir IA</span>
              <h4>Ejecutar en Asistente</h4>
              <p>Abra su herramienta preferida en una pestaña nueva y pegue la orden:</p>
              <div class="ai-launcher-btns">
                <a href="https://chatgpt.com" target="_blank" rel="noopener" class="btn-ai-link">ChatGPT ↗</a>
                <a href="https://claude.ai" target="_blank" rel="noopener" class="btn-ai-link">Claude ↗</a>
                <a href="https://gemini.google.com" target="_blank" rel="noopener" class="btn-ai-link">Gemini ↗</a>
              </div>
            </div>
            <div class="action-step-card step-planb">
              <span class="step-card-badge">Paso 3 · Plan B</span>
              <h4>¿Falla la red o la IA?</h4>
              <p>Use la salida pregenerada de respaldo para continuar sin atrasarse:</p>
              <button class="btn-step-action btn-plan-b" data-practice="{code}">🛡️ Ver Salida Plan B</button>
            </div>
          </div>"""

    return f"""        <!-- {code} -->
        <article class="practice-card" data-practice-code="{code}" style="display: {"block" if code=="PR-01" else "none"};">
          {header_html}
{action_steps_html}
          <!-- Acordeón Desplegable con Consigna Completa y Microentregable -->
          <details class="friendly-disclosure">
            <summary>🔍 Ver detalles pedagógicos, pasos completos y microentregable</summary>
            <div style="margin-top:0.75rem;">
{body_and_footer}
            </div>
          </details>
        </article>"""

# Find practice cards
p_start = html.rfind('<!-- ===', 0, html.find('id="tab-practices"'))
b_start = html.rfind('<!-- ===', 0, html.find('id="tab-builder"'))
tab_practices_raw = html[p_start:b_start]

# Extract timer widget
tw_w_start = tab_practices_raw.find('<!-- Cronómetro Interactivo Individual -->')
tw_w_end = tab_practices_raw.find('<!-- Cuadrícula de las 7 Tarjetas de Práctica -->')
timer_widget_html = tab_practices_raw[tw_w_start:tw_w_end].strip()

# Extract each card
cards_transformed = []
for i in range(1, 8):
    code = f"PR-0{i}"
    c_start = tab_practices_raw.find(f'<!-- {code} -->')
    c_end = tab_practices_raw.find('</article>', c_start) + len('</article>')
    card_raw = tab_practices_raw[c_start:c_end]
    cards_transformed.append(transform_card(card_raw, code))

transformed_cards_str = "\n\n".join(cards_transformed)

stepper_bar_html = """      <!-- Stepper de las 7 Prácticas Activas (1 Práctica a la vez) -->
      <div class="practice-stepper-container">
        <div class="stepper-header-row">
          <div>
            <h3 style="font-size:1.15rem;color:var(--ina-blue-900);margin:0 0 0.25rem 0;">Paso a Paso del Taller: 7 Prácticas Activas</h3>
            <p style="font-size:0.85rem;color:var(--text-muted);margin:0;">Seleccione la práctica en la que se encuentra el facilitador para ver solo sus instrucciones y enlaces:</p>
          </div>
          <span class="meta-pill highlight">1 Práctica a la vez</span>
        </div>
        <div class="stepper-pills-track" role="tablist">
          <button class="stepper-pill-btn active" data-practice="PR-01">
            <span class="pill-num">1</span>
            <span class="pill-title">PR-01: Quejas Hotel (Oral A2)</span>
          </button>
          <button class="stepper-pill-btn" data-practice="PR-02">
            <span class="pill-num">2</span>
            <span class="pill-title">PR-02: Feedback Diferenciado</span>
          </button>
          <button class="stepper-pill-btn" data-practice="PR-03">
            <span class="pill-num">3</span>
            <span class="pill-title">PR-03: Microrremedios</span>
          </button>
          <button class="stepper-pill-btn" data-practice="PR-04">
            <span class="pill-num">4</span>
            <span class="pill-title">PR-04: Chatbot Tutor Escrito</span>
          </button>
          <button class="stepper-pill-btn" data-practice="PR-05">
            <span class="pill-num">5</span>
            <span class="pill-title">PR-05: Rúbrica & Esfuerzo</span>
          </button>
          <button class="stepper-pill-btn" data-practice="PR-06">
            <span class="pill-num">6</span>
            <span class="pill-title">PR-06: Secuencia 45 min</span>
          </button>
          <button class="stepper-pill-btn" data-practice="PR-07">
            <span class="pill-num">7</span>
            <span class="pill-title">PR-07: Gestión IA Local</span>
          </button>
        </div>
      </div>"""

new_tab_live_html = f"""    <!-- ====================================================================
         ZONA 1: Taller en Vivo (7 Prácticas Activas con Enfoque 1 a la vez)
         ==================================================================== -->
    <div id="tab-live" class="tab-pane active">
{stepper_bar_html}

      {timer_widget_html}

      <!-- Contenedor de Prácticas -->
      <div class="practices-grid" style="display:block;">
{transformed_cards_str}
      </div>

      <!-- Agenda y Flujo Pedagógico Desplegable (Para no sobrecargar la vista) -->
      <details class="friendly-disclosure" style="margin-top:2rem;background:var(--bg-surface-subtle);border:1px dashed var(--border-medium);">
        <summary style="font-size:0.95rem;color:var(--ina-blue-900);">🗺️ Consultar Línea de Tiempo de la Jornada y Ciclo Pedagógico de 25 min</summary>
        <div style="margin-top:1.25rem;">
{tw_block}
        </div>
      </details>
    </div>
"""

# Replace tab-practices with new_tab_live_html
html = html[:p_start] + new_tab_live_html + html[b_start:]

# 7. Slices for Zone 2 and Zone 3
builder_start = html.rfind('<!-- ===', 0, html.find('id="tab-builder"'))
slides_start = html.rfind('<!-- ===', 0, html.find('id="tab-slides"'))
evidence_start = html.rfind('<!-- ===', 0, html.find('id="tab-evidence"'))
library_start = html.rfind('<!-- ===', 0, html.find('id="tab-library"'))
rubric_start = html.rfind('<!-- ===', 0, html.find('id="tab-rubric"'))
cases_start = html.rfind('<!-- ===', 0, html.find('id="tab-cases"'))
closing_start = html.rfind('<!-- ===', 0, html.find('id="tab-closing"'))
end_marker = "\n\n      </div> <!-- Cierre de .portal-content-area -->"
portal_end = html.find(end_marker)

builder_html = html[builder_start:slides_start].replace('<div id="tab-builder" class="tab-pane">', '<div id="subpane-builder" class="subtab-pane active" data-parent-zone="tools">')
slides_html = html[slides_start:evidence_start].replace('<div id="tab-slides" class="tab-pane">', '<div id="subpane-slides" class="subtab-pane" data-parent-zone="tools">')
evidence_html = html[evidence_start:library_start].replace('<div id="tab-evidence" class="tab-pane">', '<div id="subpane-evidence" class="subtab-pane" data-parent-zone="library-hub">')
library_html = html[library_start:rubric_start].replace('<div id="tab-library" class="tab-pane">', '<div id="subpane-documents" class="subtab-pane active" data-parent-zone="library-hub">')
rubric_html = html[rubric_start:cases_start].replace('<div id="tab-rubric" class="tab-pane">', '<div id="subpane-rubric" class="subtab-pane" data-parent-zone="tools">')
cases_html = html[cases_start:closing_start].replace('<div id="tab-cases" class="tab-pane">', '<div id="subpane-cases" class="subtab-pane" data-parent-zone="tools">')
closing_html = html[closing_start:portal_end].replace('<div id="tab-closing" class="tab-pane">', '<div id="subpane-closing" class="subtab-pane" data-parent-zone="library-hub">')

# Assemble Zone 2
new_zone_tools = f"""    <!-- ====================================================================
         ZONA 2: Asistente & Herramientas Docentes (Prompts, Rúbricas, Casos, Láminas)
         ==================================================================== -->
    <div id="tab-tools" class="tab-pane">
      <nav class="subtabs-nav-bar" aria-label="Herramientas del docente">
        <button class="subtab-btn active" data-parent-zone="tools" data-subtab="builder">⚡ Asistente de Prompts</button>
        <button class="subtab-btn" data-parent-zone="tools" data-subtab="rubric">📋 Probador de Rúbricas (0-16 pts)</button>
        <button class="subtab-btn" data-parent-zone="tools" data-subtab="cases">💼 Casos Ocupacionales INA</button>
        <button class="subtab-btn" data-parent-zone="tools" data-subtab="slides">📊 Presentaciones Explicadas</button>
      </nav>

{builder_html}
{rubric_html}
{cases_html}
{slides_html}
    </div>
"""

# Assemble Zone 3
new_zone_library = f"""    <!-- ====================================================================
         ZONA 3: Biblioteca & Evidencia Científica (41 PDFs, PISA 2025, Ley 8968)
         ==================================================================== -->
    <div id="tab-library-hub" class="tab-pane">
      <nav class="subtabs-nav-bar" aria-label="Biblioteca y Evidencia">
        <button class="subtab-btn active" data-parent-zone="library-hub" data-subtab="documents">📚 Biblioteca de Evidencia (41 PDFs)</button>
        <button class="subtab-btn" data-parent-zone="library-hub" data-subtab="evidence">🔎 Evidencia Científica PISA / NYU</button>
        <button class="subtab-btn" data-parent-zone="library-hub" data-subtab="closing">⚖️ Gobernanza, Ley 8968 & Cierre</button>
      </nav>

{library_html}
{evidence_html}
{closing_html}
    </div>
"""

final_html = html[:builder_start] + new_zone_tools + "\n\n" + new_zone_library + html[portal_end:]

with open('scratch/transformed_index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("SUCCESS: scratch/transformed_index.html generated!")
print(f"Final length: {len(final_html)} chars")
