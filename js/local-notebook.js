/**
 * Cuaderno local acumulativo del taller.
 * Guarda únicamente en el navegador y permite descargar una copia Markdown.
 */
const LocalNotebookModule = (() => {
  const STORAGE_KEY = 'ina_workshop_notebook_v1';
  const PRACTICES = ['PR-01', 'PR-02', 'PR-03', 'PR-04', 'PR-05', 'PR-06', 'PR-07'];
  const TEMPLATE = `## Mi instrucción o configuración final


## Evidencia o fragmento que revisé


## Hallazgo crítico


## Próximo ajuste

`;
  let activePractice = 'PR-01';
  let hasActiveEntry = false;
  let saveTimer = null;
  let state = { entries: {}, updatedAt: null };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && typeof saved.entries === 'object') state = saved;
    } catch (error) {
      console.warn('No fue posible recuperar el cuaderno local.', error);
    }
  }

  function setStatus(message) {
    const status = document.getElementById('notebook-save-status');
    if (status) status.textContent = message;
  }

  function saveActiveEntry(showConfirmation = false) {
    const textarea = document.getElementById('notebook-entry');
    if (!textarea) return;
    state.entries[activePractice] = textarea.value;
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      setStatus(showConfirmation ? 'Guardado en este navegador.' : 'Cambios guardados automáticamente.');
    } catch (error) {
      setStatus('No se pudo guardar. Descargue una copia antes de cerrar.');
    }
  }

  function showPractice(practiceCode) {
    if (!PRACTICES.includes(practiceCode)) return;
    if (hasActiveEntry && document.getElementById('notebook-entry')) saveActiveEntry();
    activePractice = practiceCode;
    const label = document.getElementById('notebook-practice-label');
    const textarea = document.getElementById('notebook-entry');
    if (label) label.textContent = `${practiceCode} · registro personal`;
    if (textarea) textarea.value = state.entries[practiceCode] || TEMPLATE;
    hasActiveEntry = true;
    setStatus('Listo para escribir. Se guarda automáticamente en este navegador.');
  }

  function scheduleSave() {
    setStatus('Guardando…');
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => saveActiveEntry(), 400);
  }

  function downloadMarkdown() {
    saveActiveEntry();
    const date = new Date().toLocaleString('es-CR');
    const sections = PRACTICES.map((code) => `# ${code}\n\n${state.entries[code] || TEMPLATE}`).join('\n\n---\n\n');
    const content = `# Mi cuaderno local · Team Up 2 Level Up\n\nDescargado: ${date}\n\nEste archivo pertenece a la persona participante y no fue enviado a ninguna plataforma.\n\n${sections}\n`;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cuaderno-local-INA-${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus('Copia Markdown descargada en su computadora.');
  }

  function clearActiveEntry() {
    if (!window.confirm(`¿Desea borrar únicamente el registro de ${activePractice}?`)) return;
    state.entries[activePractice] = TEMPLATE;
    saveActiveEntry(true);
    showPractice(activePractice);
  }

  function init() {
    const textarea = document.getElementById('notebook-entry');
    if (!textarea) return;
    loadState();
    textarea.addEventListener('input', scheduleSave);
    document.getElementById('btn-notebook-save')?.addEventListener('click', () => saveActiveEntry(true));
    document.getElementById('btn-notebook-download')?.addEventListener('click', downloadMarkdown);
    document.getElementById('btn-notebook-clear')?.addEventListener('click', clearActiveEntry);
    document.addEventListener('ina:practice-changed', (event) => showPractice(event.detail?.practiceCode));
    window.addEventListener('beforeunload', () => saveActiveEntry());
    const selected = document.getElementById('practice-select-dropdown')?.value || 'PR-01';
    showPractice(selected);
  }

  return { init, showPractice, downloadMarkdown };
})();

document.addEventListener('DOMContentLoaded', LocalNotebookModule.init);
