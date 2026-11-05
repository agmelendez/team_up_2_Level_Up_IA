with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove live-focus-banner from between data-protection-bar and <main>
old_dp_and_banner = """  <!-- Aviso de Protección de Datos (Ley 8968 Costa Rica) -->
  <div class="data-protection-bar">
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

new_dp_only = """  <!-- Aviso de Protección de Datos (Ley 8968 Costa Rica) -->
  <div class="data-protection-bar">
    <div class="data-protection-content">
      <strong>🔒 Regla de Privacidad (Ley 8968):</strong>
      <span>No ingrese nombres, números de cédula ni trabajos reales de estudiantes en herramientas de IA. Utilice siempre las muestras sintéticas provistas en este portal.</span>
    </div>
  </div>"""

assert old_dp_and_banner in html, "old_dp_and_banner not found"
html = html.replace(old_dp_and_banner, new_dp_only)

# 2. Update Sidebar structure: clear order and no dual active classes
old_sidebar_groups = """          <!-- Grupo 1: Flujo de la Jornada -->
          <div class="sidebar-group">
            <div class="sidebar-group-title">Ruta Pedagógica</div>
            <button class="sidebar-nav-item active" data-sidebar-action="scroll-timeline">
              <span class="nav-icon">🗺️</span>
              <span class="nav-label">Línea de Tiempo</span>
              <span class="sidebar-badge">8h-3h</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-action="scroll-workflow">
              <span class="nav-icon">🔄</span>
              <span class="nav-label">Ciclo de Trabajo</span>
              <span class="sidebar-badge">25 min</span>
            </button>
          </div>

          <!-- Grupo 2: Las 3 Grandes Zonas del Taller -->
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

new_sidebar_groups = """          <!-- Grupo 1: Las 3 Grandes Zonas del Taller (Navegación Principal) -->
          <div class="sidebar-group">
            <div class="sidebar-group-title">Zonas del Taller</div>
            <button class="sidebar-nav-item active" data-sidebar-tab="live">
              <span class="nav-icon">🎯</span>
              <span class="nav-label">1. Taller en Vivo</span>
              <span class="sidebar-badge">7 Prácticas</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="tools">
              <span class="nav-icon">⚡</span>
              <span class="nav-label">2. Herramientas & Prompts</span>
              <span class="sidebar-badge">4 Módulos</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-tab="library-hub">
              <span class="nav-icon">📚</span>
              <span class="nav-label">3. Biblioteca & Evidencia</span>
              <span class="sidebar-badge">41 PDFs</span>
            </button>
          </div>

          <!-- Grupo 2: Ruta y Flujo Pedagógico (Consultas) -->
          <div class="sidebar-group">
            <div class="sidebar-group-title">Ruta Pedagógica</div>
            <button class="sidebar-nav-item" data-sidebar-action="scroll-timeline">
              <span class="nav-icon">🗺️</span>
              <span class="nav-label">Ver Agenda Completa</span>
              <span class="sidebar-badge">8h-3h</span>
            </button>
            <button class="sidebar-nav-item" data-sidebar-action="scroll-workflow">
              <span class="nav-icon">🔄</span>
              <span class="nav-label">Ver Ciclo de 25 min</span>
              <span class="sidebar-badge">Método</span>
            </button>
          </div>"""

assert old_sidebar_groups in html, "old_sidebar_groups not found"
html = html.replace(old_sidebar_groups, new_sidebar_groups)

# 3. In portal-content-area: Move #content-tabs-nav-bar to the very top, and put welcome cards inside tab-live
old_pca_top = """      <!-- Panel de Contenido Principal -->
      <div class="portal-content-area">

        <!-- Tarjetas de Bienvenida y Ayuda Rápida -->
        <section class="welcome-guide-grid" aria-label="Primeros pasos">
          <div class="welcome-card">
            <div class="welcome-card-icon">🎯</div>
            <h4>El Docente Decide</h4>
            <p>La IA propone ideas y borradores, pero usted como docente conserva el control pedagógico y la decisión final.</p>
          </div>
          <div class="welcome-card">
            <div class="welcome-card-icon">⚡</div>
            <h4>5 Componentes Clave</h4>
            <p>Toda buena instrucción incluye: Rol, <span class="interactive-term" data-tooltip="Marco Común Europeo de Referencia para las Lenguas: La escala oficial internacional de niveles de idioma (A1 Principiante, A2 Básico, B1 Intermedio, B2 Avanzado).">Nivel de Idioma (A1, A2, B1...)</span>, Contexto laboral INA, Formato y Restricciones de tiempo.</p>
          </div>
          <div class="welcome-card">
            <div class="welcome-card-icon">🛡️</div>
            <h4>Plan B Garantizado</h4>
            <p>Si alguna herramienta no le abre o falla el internet, cada práctica incluye un botón naranja de salida de respaldo.</p>
          </div>
        </section>

        <!-- Panel del Cockpit del Facilitador (Visible en Modo Tutor) -->
        <section class="tutor-control-panel">
          <div class="cockpit-grid">
            <!-- Gestor del Ciclo de 25 Minutos -->
            <div class="cycle-manager-box">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <h4 style="color:#4f46e5;margin:0;font-size:1.1rem;">⏱️ Gestor de Ciclo Estándar (25 min)</h4>
                <span id="cycle-stage-title" style="font-size:0.85rem;font-weight:700;color:var(--ina-blue-900);">Demostración Conducida (8 min)</span>
              </div>

              <div class="cycle-stages-track">
                <div class="cycle-stage-pill active" data-stage="0">
                  <div class="stage-pill-time">8 min</div>
                  <div class="stage-pill-label">1. Demo</div>
                </div>
                <div class="cycle-stage-pill" data-stage="1">
                  <div class="stage-pill-time">12 min</div>
                  <div class="stage-pill-label">2. Práctica</div>
                </div>
                <div class="cycle-stage-pill" data-stage="2">
                  <div class="stage-pill-time">3 min</div>
                  <div class="stage-pill-label">3. Entrega</div>
                </div>
                <div class="cycle-stage-pill" data-stage="3">
                  <div class="stage-pill-time">2 min</div>
                  <div class="stage-pill-label">4. Devolución</div>
                </div>
              </div>

              <div style="display:flex;align-items:center;justify-content:space-between;background:#ffffff;padding:0.75rem 1rem;border-radius:8px;border:1px solid var(--border-medium);">
                <div id="cycle-timer-display" style="font-family:var(--font-mono);font-size:1.75rem;font-weight:800;color:#6d28d9;">08:00</div>
                <div style="display:flex;gap:0.5rem;">
                  <button id="btn-cycle-start" class="btn-primary" style="background:#4f46e5;padding:0.4rem 0.85rem;">Iniciar Etapa</button>
                  <button id="btn-cycle-pause" class="btn-secondary" style="display:none;padding:0.4rem 0.85rem;">Pausar</button>
                  <button id="btn-cycle-reset" class="btn-secondary" style="padding:0.4rem 0.85rem;">Reiniciar</button>
                </div>
              </div>
            </div>

            <!-- Avisos Copiables para Teams -->
            <div class="teams-chat-broadcast-box">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <h4 style="color:var(--ina-blue-900);margin:0;font-size:1.05rem;">💬 Avisos Rápidos para el Chat de Teams</h4>
                <span style="font-size:0.75rem;color:var(--text-light);">Copia en 1 clic</span>
              </div>
              <div id="teams-broadcast-list" style="display:flex;flex-direction:column;gap:0.5rem;max-height:210px;overflow-y:auto;">
                <!-- Renderizado dinámico desde tutor-mode.js -->
              </div>
            </div>
          </div>
        </section>

        <!-- Pestañas de Navegación de Contenidos: 3 Zonas Mentales -->
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
        </nav>

        <!-- ====================================================================
         ZONA 1: Taller en Vivo (7 Prácticas Activas con Enfoque 1 a la vez)
         ==================================================================== -->
    <div id="tab-live" class="tab-pane active">
      <!-- Stepper de las 7 Prácticas Activas (1 Práctica a la vez) -->"""

new_pca_top = """      <!-- Panel de Contenido Principal -->
      <div class="portal-content-area">

        <!-- Pestañas de Navegación de Contenidos: 3 Zonas Mentales -->
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
        </nav>

        <!-- Panel del Cockpit del Facilitador (Visible solo en Modo Tutor) -->
        <section class="tutor-control-panel">
          <div class="cockpit-grid">
            <!-- Gestor del Ciclo de 25 Minutos -->
            <div class="cycle-manager-box">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <h4 style="color:#4f46e5;margin:0;font-size:1.1rem;">⏱️ Gestor de Ciclo Estándar (25 min)</h4>
                <span id="cycle-stage-title" style="font-size:0.85rem;font-weight:700;color:var(--ina-blue-900);">Demostración Conducida (8 min)</span>
              </div>

              <div class="cycle-stages-track">
                <div class="cycle-stage-pill active" data-stage="0">
                  <div class="stage-pill-time">8 min</div>
                  <div class="stage-pill-label">1. Demo</div>
                </div>
                <div class="cycle-stage-pill" data-stage="1">
                  <div class="stage-pill-time">12 min</div>
                  <div class="stage-pill-label">2. Práctica</div>
                </div>
                <div class="cycle-stage-pill" data-stage="2">
                  <div class="stage-pill-time">3 min</div>
                  <div class="stage-pill-label">3. Entrega</div>
                </div>
                <div class="cycle-stage-pill" data-stage="3">
                  <div class="stage-pill-time">2 min</div>
                  <div class="stage-pill-label">4. Devolución</div>
                </div>
              </div>

              <div style="display:flex;align-items:center;justify-content:space-between;background:#ffffff;padding:0.75rem 1rem;border-radius:8px;border:1px solid var(--border-medium);">
                <div id="cycle-timer-display" style="font-family:var(--font-mono);font-size:1.75rem;font-weight:800;color:#6d28d9;">08:00</div>
                <div style="display:flex;gap:0.5rem;">
                  <button id="btn-cycle-start" class="btn-primary" style="background:#4f46e5;padding:0.4rem 0.85rem;">Iniciar Etapa</button>
                  <button id="btn-cycle-pause" class="btn-secondary" style="display:none;padding:0.4rem 0.85rem;">Pausar</button>
                  <button id="btn-cycle-reset" class="btn-secondary" style="padding:0.4rem 0.85rem;">Reiniciar</button>
                </div>
              </div>
            </div>

            <!-- Avisos Copiables para Teams -->
            <div class="teams-chat-broadcast-box">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <h4 style="color:var(--ina-blue-900);margin:0;font-size:1.05rem;">💬 Avisos Rápidos para el Chat de Teams</h4>
                <span style="font-size:0.75rem;color:var(--text-light);">Copia en 1 clic</span>
              </div>
              <div id="teams-broadcast-list" style="display:flex;flex-direction:column;gap:0.5rem;max-height:210px;overflow-y:auto;">
                <!-- Renderizado dinámico desde tutor-mode.js -->
              </div>
            </div>
          </div>
        </section>

        <!-- ====================================================================
         ZONA 1: Taller en Vivo (7 Prácticas Activas con Enfoque 1 a la vez)
         ==================================================================== -->
    <div id="tab-live" class="tab-pane active">

      <!-- Banner de Enfoque Activo en Vivo (Contexto directo de la práctica) -->
      <div id="live-focus-banner" class="live-focus-banner" aria-label="Práctica activa del taller">
        <div class="live-focus-info">
          <div class="pulse-live-badge">
            <span class="pulse-dot"></span>
            <span>EN VIVO AHORA</span>
          </div>
          <div class="live-focus-text">
            <strong id="live-focus-label">Bloque 1 (AGM) · Práctica 1: Recepción de quejas en hotel (A2 Oral)</strong>
            <span id="live-focus-sub">Facilitador: Agustín Gómez Meléndez · Tiempo de práctica: 12 min</span>
          </div>
        </div>
        <button id="btn-jump-live-practice" class="btn-focus-action">Ir a mi práctica ahora ➔</button>
      </div>

      <!-- Tarjetas de Ayuda y Principios Pedagógicos Clave -->
      <section class="welcome-guide-grid" aria-label="Principios pedagógicos">
        <div class="welcome-card">
          <div class="welcome-card-icon">🎯</div>
          <h4>El Docente Decide</h4>
          <p>La IA propone ideas y borradores, pero usted como docente conserva el control pedagógico y la decisión final.</p>
        </div>
        <div class="welcome-card">
          <div class="welcome-card-icon">⚡</div>
          <h4>5 Componentes Clave</h4>
          <p>Toda buena instrucción incluye: Rol, <span class="interactive-term" data-tooltip="Marco Común Europeo de Referencia para las Lenguas: La escala oficial internacional de niveles de idioma (A1 Principiante, A2 Básico, B1 Intermedio, B2 Avanzado).">Nivel de Idioma (A1, A2, B1...)</span>, Contexto laboral INA, Formato y Restricciones de tiempo.</p>
        </div>
        <div class="welcome-card">
          <div class="welcome-card-icon">🛡️</div>
          <h4>Plan B Garantizado</h4>
          <p>Si alguna herramienta no le abre o falla el internet, cada práctica incluye un botón naranja de salida de respaldo.</p>
        </div>
      </section>

      <!-- Stepper de las 7 Prácticas Activas (1 Práctica a la vez) -->"""

assert old_pca_top in html, "old_pca_top not found"
html = html.replace(old_pca_top, new_pca_top)

# 4. Add ID to details tag for agenda
old_details_agenda = """      <!-- Agenda y Flujo Pedagógico Desplegable (Para no sobrecargar la vista) -->
      <details class="friendly-disclosure" style="margin-top:2rem;background:var(--bg-surface-subtle);border:1px dashed var(--border-medium);">"""

new_details_agenda = """      <!-- Agenda y Flujo Pedagógico Desplegable (Para no sobrecargar la vista) -->
      <details id="details-agenda-workflow" class="friendly-disclosure" style="margin-top:2rem;background:var(--bg-surface-subtle);border:1px dashed var(--border-medium);">"""

assert old_details_agenda in html, "old_details_agenda not found"
html = html.replace(old_details_agenda, new_details_agenda)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("SUCCESS: index.html updated successfully!")
