import re

with open('scratch/tools_extracted.html', 'r', encoding='utf-8') as f:
    tools_inner = f.read()

with open('scratch/library_extracted.html', 'r', encoding='utf-8') as f:
    library_inner = f.read()

# ==========================================
# 1. BUILD herramientas.html
# ==========================================
herramientas_html = f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Suite de Herramientas Pedagógicas de IA · INA Costa Rica 2026</title>
  <meta name="description" content="Suite de herramientas interactivas de Inteligencia Artificial para docentes de inglés del INA: Asistente de Prompts con 5 componentes, Probador de Rúbricas analíticas, Casos Ocupacionales y Diapositivas.">
  
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/tutor-mode.css">
  <link rel="stylesheet" href="css/modern-portal.css">
  <link rel="stylesheet" href="css/print.css" media="print">
</head>
<body>

  <!-- Cabecera Moderna Unificada (MagicSchool Style) -->
  <header class="modern-navbar">
    <div class="navbar-container">
      <a href="index.html" class="brand-link">
        <span class="brand-logo-badge">INA CR</span>
        <div class="brand-texts">
          <h1>Team Up 2 Level Up</h1>
          <span>IA en la Enseñanza del Inglés Técnico</span>
        </div>
      </a>

      <nav class="navbar-links" aria-label="Navegación principal">
        <a href="index.html" class="nav-pill-link">🎯 Inicio & Taller en Vivo</a>
        <a href="herramientas.html" class="nav-pill-link active">⚡ Herramientas de IA <span class="nav-pill-badge">4</span></a>
        <a href="biblioteca.html" class="nav-pill-link">📚 Biblioteca & RAG <span class="nav-pill-badge">41</span></a>
        <a href="simulador.html" class="nav-pill-link">💬 Simulador</a>
        <a href="glosario.html" class="nav-pill-link">📖 Glosario</a>
      </nav>

      <div class="navbar-actions">
        <a href="index.html#seccion-practica" class="btn-hero-primary" style="padding:0.45rem 1rem;font-size:0.85rem;">
          🎯 Ir a la Práctica Activa
        </a>
      </div>
    </div>
  </header>

  <!-- Hero de la Suite de Herramientas (Lovable Style) -->
  <section class="hero-cohort-section" style="padding: 2.75rem 1.5rem 2rem 1.5rem;">
    <div class="hero-cohort-container">
      <div class="hero-pill-badge">
        <span>⚡ Suite Oficial de Productividad Docente</span>
      </div>
      <h2 class="hero-headline" style="font-size:2.35rem;margin-bottom:0.75rem;">
        Herramientas Pedagógicas de <span class="text-gradient">Inteligencia Artificial</span>
      </h2>
      <p class="hero-description" style="max-width:720px;margin-bottom:1.5rem;">
        Cuatro módulos interactivos diseñados para calibrar instrucciones con los 5 componentes, auditar rúbricas analíticas, aplicar casos laborales reales del INA y proyectar presentaciones oficiales.
      </p>

      <!-- Selector de Sub-Herramientas (Segmented Control Pills) -->
      <nav class="dedicated-subtabs-nav" aria-label="Herramientas disponibles">
        <button class="dedicated-subtab-btn active" data-tool-tab="builder">
          <span>⚡ 1. Asistente de Prompts</span>
        </button>
        <button class="dedicated-subtab-btn" data-tool-tab="rubric">
          <span>📋 2. Probador de Rúbricas (0-16 pts)</span>
        </button>
        <button class="dedicated-subtab-btn" data-tool-tab="cases">
          <span>💼 3. Casos Ocupacionales INA</span>
        </button>
        <button class="dedicated-subtab-btn" data-tool-tab="slides">
          <span>📊 4. Presentaciones y Láminas</span>
        </button>
      </nav>
    </div>
  </section>

  <!-- Contenedor Principal de Herramientas -->
  <main style="max-width: var(--max-content); width: 100%; margin: 0 auto; padding: 2rem 1.5rem 4rem 1.5rem; flex: 1;">
{tools_inner}
  </main>

  <!-- Footer Moderno -->
  <footer class="modern-footer">
    <div class="footer-container-box">
      <div class="footer-top-row">
        <div class="footer-brand-info">
          <h4>Instituto Nacional de Aprendizaje (INA)</h4>
          <p>Núcleo Comercio y Servicios · Subsector de Idiomas<br>Taller Técnico: <em>Team Up 2 Level Up</em> · 6 de octubre de 2026</p>
        </div>
        <div class="footer-links-group">
          <div class="footer-col">
            <h5>Navegación</h5>
            <ul>
              <li><a href="index.html">Inicio & Taller en Vivo</a></li>
              <li><a href="herramientas.html">Suite de Herramientas</a></li>
              <li><a href="biblioteca.html">Biblioteca RAG (41 PDFs)</a></li>
              <li><a href="simulador.html">Simulador de Chat</a></li>
              <li><a href="glosario.html">Glosario Docente</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Facilitación</h5>
            <ul>
              <li><a href="https://orcid.org/0000-0002-7886-0740" target="_blank" rel="noopener">Agustín Gómez Meléndez (UNED/UCR)</a></li>
              <li><a href="#">Hannia León Fuentes (UCR/PROTEA)</a></li>
              <li><a href="Bibliografia/MANUAL_USO_LLM_CORPUS_PDF_V5.md" target="_blank">Manual de Inteligencia PDF V5.1</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <span>© 2026 INA · Licencia Abierta Creative Commons Atribución 4.0 Internacional (CC BY 4.0)</span>
        <span>Protección de Datos Garantizada · Cumplimiento estricto Ley 8968</span>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/timer.js"></script>
  <script src="js/prompt-builder.js"></script>
  <script src="js/rubric-tester.js"></script>
  <script src="js/slide-viewer.js"></script>
  <script src="js/tutor-mode.js"></script>
  <script src="js/app.js"></script>

  <script>
    function switchToolTab(tabId) {{
      document.querySelectorAll('.dedicated-subtab-btn').forEach(btn => {{
        if (btn.dataset.toolTab === tabId) {{
          btn.classList.add('active');
        }} else {{
          btn.classList.remove('active');
        }}
      }});
      document.querySelectorAll('.subtab-pane').forEach(pane => {{
        if (pane.id === `subpane-${{tabId}}`) {{
          pane.classList.add('active');
        }} else {{
          pane.classList.remove('active');
        }}
      }});
      window.location.hash = tabId;
      window.scrollTo({{ top: 220, behavior: 'smooth' }});
    }}

    document.addEventListener('DOMContentLoaded', () => {{
      document.querySelectorAll('.dedicated-subtab-btn').forEach(btn => {{
        btn.addEventListener('click', (e) => {{
          switchToolTab(e.currentTarget.dataset.toolTab);
        }});
      }});

      // Hash routing
      const hash = window.location.hash.replace('#', '');
      if (['builder', 'rubric', 'cases', 'slides'].includes(hash)) {{
        switchToolTab(hash);
      }} else {{
        switchToolTab('builder');
      }}
    }});
  </script>
</body>
</html>
"""

with open('herramientas.html', 'w', encoding='utf-8') as f:
    f.write(herramientas_html)

print("SUCCESS: herramientas.html generated!")


# ==========================================
# 2. BUILD biblioteca.html
# ==========================================
biblioteca_html = f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Biblioteca de Evidencia Científica y RAG (41 Docs) · INA 2026</title>
  <meta name="description" content="Biblioteca interactiva RAG de 41 documentos científicos y pedagógicos sobre enseñanza del inglés e IA, evidencia PISA 2025 / NYU Stern 2026 y marco de gobernanza Ley 8968.">
  
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/tutor-mode.css">
  <link rel="stylesheet" href="css/modern-portal.css">
  <link rel="stylesheet" href="css/print.css" media="print">
</head>
<body>

  <!-- Cabecera Moderna Unificada (MagicSchool Style) -->
  <header class="modern-navbar">
    <div class="navbar-container">
      <a href="index.html" class="brand-link">
        <span class="brand-logo-badge">INA CR</span>
        <div class="brand-texts">
          <h1>Team Up 2 Level Up</h1>
          <span>IA en la Enseñanza del Inglés Técnico</span>
        </div>
      </a>

      <nav class="navbar-links" aria-label="Navegación principal">
        <a href="index.html" class="nav-pill-link">🎯 Inicio & Taller en Vivo</a>
        <a href="herramientas.html" class="nav-pill-link">⚡ Herramientas de IA <span class="nav-pill-badge">4</span></a>
        <a href="biblioteca.html" class="nav-pill-link active">📚 Biblioteca & RAG <span class="nav-pill-badge">41</span></a>
        <a href="simulador.html" class="nav-pill-link">💬 Simulador</a>
        <a href="glosario.html" class="nav-pill-link">📖 Glosario</a>
      </nav>

      <div class="navbar-actions">
        <a href="index.html#seccion-practica" class="btn-hero-primary" style="padding:0.45rem 1rem;font-size:0.85rem;">
          🎯 Ir a la Práctica Activa
        </a>
      </div>
    </div>
  </header>

  <!-- Hero de la Biblioteca (Lovable Style) -->
  <section class="hero-cohort-section" style="padding: 2.75rem 1.5rem 2rem 1.5rem;">
    <div class="hero-cohort-container">
      <div class="hero-pill-badge">
        <span>🔬 Pipeline de Inteligencia Documental CIOdD-UCR V5.1</span>
      </div>
      <h2 class="hero-headline" style="font-size:2.35rem;margin-bottom:0.75rem;">
        Biblioteca de Evidencia Científica & <span class="text-gradient">RAG 2026</span>
      </h2>
      <p class="hero-description" style="max-width:780px;margin-bottom:1.5rem;">
        Acervo estructurado de <strong>41 documentos especializados</strong> (2.271 páginas, 3.772 secciones y 3.027 chunks) procesados para docentes del INA, junto con la evidencia empírica PISA/NYU Stern y el marco ético de la Ley 8968.
      </p>

      <!-- Selector de Sub-Herramientas (Segmented Control Pills) -->
      <nav class="dedicated-subtabs-nav" aria-label="Módulos de evidencia">
        <button class="dedicated-subtab-btn active" data-lib-tab="documents">
          <span>📚 1. 41 Documentos RAG & Buscador</span>
        </button>
        <button class="dedicated-subtab-btn" data-lib-tab="evidence">
          <span>🔎 2. Evidencia Científica PISA / NYU</span>
        </button>
        <button class="dedicated-subtab-btn" data-lib-tab="closing">
          <span>⚖️ 3. Gobernanza, Ley 8968 & Compromiso</span>
        </button>
      </nav>
    </div>
  </section>

  <!-- Contenedor Principal de Biblioteca -->
  <main style="max-width: var(--max-content); width: 100%; margin: 0 auto; padding: 2rem 1.5rem 4rem 1.5rem; flex: 1;">
{library_inner}
  </main>

  <!-- Footer Moderno -->
  <footer class="modern-footer">
    <div class="footer-container-box">
      <div class="footer-top-row">
        <div class="footer-brand-info">
          <h4>Instituto Nacional de Aprendizaje (INA)</h4>
          <p>Núcleo Comercio y Servicios · Subsector de Idiomas<br>Taller Técnico: <em>Team Up 2 Level Up</em> · 6 de octubre de 2026</p>
        </div>
        <div class="footer-links-group">
          <div class="footer-col">
            <h5>Navegación</h5>
            <ul>
              <li><a href="index.html">Inicio & Taller en Vivo</a></li>
              <li><a href="herramientas.html">Suite de Herramientas</a></li>
              <li><a href="biblioteca.html">Biblioteca RAG (41 PDFs)</a></li>
              <li><a href="simulador.html">Simulador de Chat</a></li>
              <li><a href="glosario.html">Glosario Docente</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Facilitación</h5>
            <ul>
              <li><a href="https://orcid.org/0000-0002-7886-0740" target="_blank" rel="noopener">Agustín Gómez Meléndez (UNED/UCR)</a></li>
              <li><a href="#">Hannia León Fuentes (UCR/PROTEA)</a></li>
              <li><a href="Bibliografia/MANUAL_USO_LLM_CORPUS_PDF_V5.md" target="_blank">Manual de Inteligencia PDF V5.1</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom-bar">
        <span>© 2026 INA · Licencia Abierta Creative Commons Atribución 4.0 Internacional (CC BY 4.0)</span>
        <span>Protección de Datos Garantizada · Cumplimiento estricto Ley 8968</span>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/app.js"></script>

  <script>
    function switchLibraryTab(tabId) {{
      document.querySelectorAll('.dedicated-subtab-btn').forEach(btn => {{
        if (btn.dataset.libTab === tabId) {{
          btn.classList.add('active');
        }} else {{
          btn.classList.remove('active');
        }}
      }});
      document.querySelectorAll('.subtab-pane').forEach(pane => {{
        if (pane.id === `subpane-${{tabId}}`) {{
          pane.classList.add('active');
        }} else {{
          pane.classList.remove('active');
        }}
      }});
      window.location.hash = tabId;
      window.scrollTo({{ top: 220, behavior: 'smooth' }});
    }}

    document.addEventListener('DOMContentLoaded', () => {{
      document.querySelectorAll('.dedicated-subtab-btn').forEach(btn => {{
        btn.addEventListener('click', (e) => {{
          switchLibraryTab(e.currentTarget.dataset.libTab);
        }});
      }});

      // Hash routing
      const hash = window.location.hash.replace('#', '');
      if (['documents', 'evidence', 'closing'].includes(hash)) {{
        switchLibraryTab(hash);
      }} else {{
        switchLibraryTab('documents');
      }}
    }});
  </script>
</body>
</html>
"""

with open('biblioteca.html', 'w', encoding='utf-8') as f:
    f.write(biblioteca_html)

print("SUCCESS: biblioteca.html generated!")
