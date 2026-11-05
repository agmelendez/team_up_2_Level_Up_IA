import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update switchTab
old_switch_tab = """  // Sistema de Pestañas Principal
  function switchTab(rawTabId, shouldScroll = false) {
    if (!rawTabId) return;

    const resolved = tabMapping[rawTabId] || { main: rawTabId, sub: null };
    const mainTabId = resolved.main;

    // Si viene una sub-pestaña asociada, activarla
    if (resolved.sub) {
      switchSubTab(mainTabId, resolved.sub);
    }

    // Actualizar botones de navegación superior (Header)
    document.querySelectorAll('.nav-link-btn').forEach(link => {
      if (link.dataset.targetTab === mainTabId || link.dataset.targetTab === rawTabId) {
        link.classList.add('active');
      } else if (link.dataset.targetTab) {
        link.classList.remove('active');
      }
    });

    // Actualizar pestañas principales
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

    // Activar panel correspondiente
    document.querySelectorAll('.tab-pane').forEach(pane => {
      if (pane.id === `tab-${mainTabId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Guardar pestaña activa
    localStorage.setItem('ina_active_tab', mainTabId);

    // Scroll suave hacia la sección de contenidos si fue activado por click
    if (shouldScroll) {
      const contentSection = document.getElementById('content-tabs-nav-bar') || document.getElementById('live-focus-banner');
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }"""

new_switch_tab = """  // Sistema de Pestañas Principal con enrutamiento inteligente entre páginas
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
  }"""

if old_switch_tab in text:
    text = text.replace(old_switch_tab, new_switch_tab)
    print("Replaced switchTab!")
else:
    print("Warning: old_switch_tab not found exactly, check diff.")

# 2. Update case transfer
old_case_transfer = """      card.querySelector('.btn-use-case').addEventListener('click', () => {
        // Cargar en el constructor de prompts
        document.getElementById('pb-role').value = `Actúe como facilitador y diseñador de actividades para ${c.areaLabel}.`;
        document.getElementById('pb-level').value = `${c.level} · Destreza: ${c.skill}`;
        document.getElementById('pb-context').value = `${c.profile} Situación: ${c.situation}`;
        document.getElementById('pb-format').value = `Objetivo observable: ${c.objective}\\nEntregue guion breve de práctica y criterios observables.`;
        document.getElementById('pb-restrictions').value = `Actividad de 12 minutos; sin datos personales; vocabulario adaptado al nivel ${c.level}.`;
        
        switchTab('builder', true);
        PromptBuilderModule.updateOutput();
        showToast(`Caso ${c.id} transferido al Asistente de Prompts`);
      });"""

new_case_transfer = """      card.querySelector('.btn-use-case').addEventListener('click', () => {
        // Cargar en el constructor de prompts de forma segura
        const roleEl = document.getElementById('pb-role');
        if (roleEl) {
          roleEl.value = `Actúe como facilitador y diseñador de actividades para ${c.areaLabel}.`;
          const levelEl = document.getElementById('pb-level');
          if (levelEl) levelEl.value = `${c.level} · Destreza: ${c.skill}`;
          const contextEl = document.getElementById('pb-context');
          if (contextEl) contextEl.value = `${c.profile} Situación: ${c.situation}`;
          const formatEl = document.getElementById('pb-format');
          if (formatEl) formatEl.value = `Objetivo observable: ${c.objective}\\nEntregue guion breve de práctica y criterios observables.`;
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
      });"""

if old_case_transfer in text:
    text = text.replace(old_case_transfer, new_case_transfer)
    print("Replaced case transfer!")

# 3. Update inits
old_inits = """    // Inicializar submódulos
    if (typeof TimerModule !== 'undefined') TimerModule.init();
    if (typeof PromptBuilderModule !== 'undefined') PromptBuilderModule.init();
    if (typeof RubricTesterModule !== 'undefined') RubricTesterModule.init();
    if (typeof SlideViewerModule !== 'undefined') SlideViewerModule.init();
    if (typeof TutorModule !== 'undefined') TutorModule.init();"""

new_inits = """    // Inicializar submódulos con aislamiento de errores
    try { if (typeof TimerModule !== 'undefined') TimerModule.init(); } catch (e) { console.warn('TimerModule init:', e); }
    try { if (typeof PromptBuilderModule !== 'undefined') PromptBuilderModule.init(); } catch (e) { console.warn('PromptBuilderModule init:', e); }
    try { if (typeof RubricTesterModule !== 'undefined') RubricTesterModule.init(); } catch (e) { console.warn('RubricTesterModule init:', e); }
    try { if (typeof SlideViewerModule !== 'undefined') SlideViewerModule.init(); } catch (e) { console.warn('SlideViewerModule init:', e); }
    try { if (typeof TutorModule !== 'undefined') TutorModule.init(); } catch (e) { console.warn('TutorModule init:', e); }"""

if old_inits in text:
    text = text.replace(old_inits, new_inits)
    print("Replaced inits!")

# 4. Update restore tab
old_restore_tab = """    // Inicializar stepper en PR-01
    selectPractice('PR-01');

    // Restaurar pestaña activa previa o ir a prácticas
    const savedTab = localStorage.getItem('ina_active_tab') || 'live';
    switchTab(savedTab, false);"""

new_restore_tab = """    // Inicializar stepper en PR-01
    selectPractice('PR-01');

    // Restaurar pestaña activa previa solo si existe en la página actual
    const savedTab = localStorage.getItem('ina_active_tab') || 'live';
    if (document.getElementById(`tab-${savedTab}`)) {
      switchTab(savedTab, false);
    } else {
      switchTab('live', false);
    }"""

if old_restore_tab in text:
    text = text.replace(old_restore_tab, new_restore_tab)
    print("Replaced restore tab!")

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("SUCCESS: app.js updated completely!")
