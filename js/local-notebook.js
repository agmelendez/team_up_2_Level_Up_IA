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
  const MAX_FILE_BYTES = 512 * 1024;
  const MAX_BACKUP_BYTES = 2 * 1024 * 1024;
  const MAX_FILES = 20;
  const FILE_NAME = /^[^/\\\x00-\x1f]{1,160}\.(?:pdf|txt|md|png|jpe?g)$/i;
  let activePractice = 'PR-01';
  let hasActiveEntry = false;
  let saveTimer = null;
  let state = { entries: {}, attachments: [], updatedAt: null };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved?.entries && typeof saved.entries === 'object') {
        state = { ...state, ...saved, attachments: Array.isArray(saved.attachments) ? saved.attachments : [] };
      }
    } catch (error) {
      console.warn('No fue posible recuperar el cuaderno local.', error);
    }
  }

  function setStatus(message) {
    const status = document.getElementById('notebook-save-status');
    if (status) status.textContent = message;
  }

  function hasEvidence(code) {
    const note = state.entries[code];
    return typeof note === 'string' && note.trim() !== '' && note.trim() !== TEMPLATE.trim();
  }

  function renderIndex() {
    const index = document.getElementById('notebook-index');
    if (!index) return;
    for (const button of index.querySelectorAll('button')) {
      const code = button.dataset.practice;
      button.textContent = `${code} · ${(hasEvidence(code) || state.attachments.some(file => file.practice === code)) ? 'Con evidencia' : 'Sin evidencia'}`;
    }
  }

  function saveActiveEntry(showConfirmation = false) {
    const textarea = document.getElementById('notebook-entry');
    if (!textarea) return;
    state.entries[activePractice] = textarea.value;
    state.updatedAt = new Date().toISOString();
    renderIndex();
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
    renderAttachments();
    setStatus('Listo para escribir. Se guarda automáticamente en este navegador.');
  }

  function scheduleSave() {
    setStatus('Guardando…');
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => saveActiveEntry(), 400);
  }

  function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function fileStatus(message) {
    document.getElementById('notebook-file-status').textContent = message;
  }

  function commitPortfolio(entries, attachments) {
    const next = { ...state, entries, attachments, updatedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    state = next;
    document.getElementById('notebook-entry').value = entries[activePractice] ?? TEMPLATE;
    renderAttachments();
    renderIndex();
  }

  function checkedAttachments(files) {
    if (!Array.isArray(files) || files.length > MAX_FILES) throw new Error('Máximo de 20 adjuntos.');
    let total = 0;
    const unique = [];
    for (const file of files) {
      if (!file || !PRACTICES.includes(file.practice) || typeof file.name !== 'string' ||
          !FILE_NAME.test(file.name) || typeof file.data !== 'string' ||
          file.data.length > Math.ceil(MAX_FILE_BYTES / 3) * 4) {
        throw new Error('El respaldo contiene un adjunto inválido.');
      }
      const bytes = atob(file.data).length;
      if (unique.some(item => item.practice === file.practice && item.name === file.name && item.data === file.data)) continue;
      total += bytes;
      if (total > MAX_FILE_BYTES) throw new Error('Los adjuntos exceden el límite total de 512 KiB.');
      unique.push({ practice: file.practice, name: file.name, data: file.data });
    }
    return unique;
  }

  function currentEntries() {
    return { ...state.entries, [activePractice]: document.getElementById('notebook-entry').value };
  }

  function renderAttachments() {
    const list = document.getElementById('notebook-attachments');
    if (!list) return;
    list.replaceChildren();
    for (const file of state.attachments.filter(item => item.practice === activePractice)) {
      const item = document.createElement('li');
      const download = document.createElement('button');
      download.type = 'button';
      download.className = 'btn-secondary';
      download.textContent = `Descargar ${file.name}`;
      download.addEventListener('click', () => {
        const bytes = Uint8Array.from(atob(file.data), char => char.charCodeAt(0));
        downloadBlob(new Blob([bytes], { type: 'application/octet-stream' }), file.name);
      });
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'btn-secondary';
      remove.textContent = 'Quitar adjunto';
      remove.setAttribute('aria-label', `Quitar adjunto ${file.name}`);
      remove.addEventListener('click', () => {
        if (!window.confirm(`¿Quitar ${file.name} de ${file.practice}?`)) return;
        try {
          commitPortfolio(currentEntries(), state.attachments.filter(item => item !== file));
          fileStatus('Adjunto quitado.');
        } catch {
          fileStatus('No se pudo quitar el archivo. Se conservó el portafolio.');
        }
      });
      item.append(download, remove);
      list.append(item);
    }
  }

  async function attachFile(input) {
    const file = input.files[0];
    const practice = activePractice;
    if (!file) return;
    try {
      if (!FILE_NAME.test(file.name) || file.size > MAX_FILE_BYTES) {
        throw new Error('Seleccione un archivo permitido de hasta 512 KiB.');
      }
      const bytes = new Uint8Array(await file.arrayBuffer());
      const data = btoa(Array.from(bytes, byte => String.fromCharCode(byte)).join(''));
      const attachments = checkedAttachments([...state.attachments, { practice, name: file.name, data }]);
      commitPortfolio(currentEntries(), attachments);
      fileStatus(`Adjunto disponible en ${practice}.`);
    } catch (error) {
      fileStatus(`No se pudo agregar el adjunto. ${error.message}`);
    } finally {
      input.value = '';
    }
  }

  function exportPortfolio() {
    const entries = currentEntries();
    const backup = new Blob([JSON.stringify({ format: 'ina-levelup-portfolio', version: 1, entries, attachments: state.attachments })], { type: 'application/json' });
    if (backup.size > MAX_BACKUP_BYTES) {
      fileStatus('El respaldo supera 2 MiB. Reduzca el contenido o descargue las notas y adjuntos por separado.');
      return;
    }
    downloadBlob(backup, 'portafolio-levelup.json');
    fileStatus('Respaldo listo para guardar.');
  }

  async function restorePortfolio(input) {
    const file = input.files[0];
    if (!file) return;
    try {
      if (file.size > MAX_BACKUP_BYTES) throw new Error('El archivo supera 2 MiB.');
      const backup = JSON.parse(await file.text());
      if (backup?.format !== 'ina-levelup-portfolio' || backup.version !== 1 ||
          !backup.entries || typeof backup.entries !== 'object' || Array.isArray(backup.entries)) {
        throw new Error('Formato o versión de respaldo inválidos.');
      }
      const entries = currentEntries();
      let conflicts = 0;
      for (const [code, note] of Object.entries(backup.entries)) {
        if (!PRACTICES.includes(code) || typeof note !== 'string') throw new Error('El respaldo contiene una nota inválida.');
        const existing = entries[code]?.trim();
        if (!existing || existing === TEMPLATE.trim()) entries[code] = note;
        else if (note.trim() && note.trim() !== TEMPLATE.trim() && note !== entries[code]) conflicts++;
      }
      const imported = checkedAttachments(backup.attachments);
      const attachments = checkedAttachments([...state.attachments, ...imported]);
      commitPortfolio(entries, attachments);
      fileStatus(`Respaldo importado. Notas existentes conservadas ante conflicto: ${conflicts}.`);
    } catch (error) {
      fileStatus(`No se importó el respaldo. ${error.message}`);
    } finally {
      input.value = '';
    }
  }

  function downloadMarkdown() {
    saveActiveEntry();
    const date = new Date().toLocaleString('es-CR');
    const sections = PRACTICES.map((code) => `# ${code}\n\n${state.entries[code] || TEMPLATE}`).join('\n\n---\n\n');
    const content = `# Mi cuaderno local · Team Up 2 Level Up\n\nDescargado: ${date}\n\nEste archivo pertenece a la persona participante y no fue enviado a ninguna plataforma.\n\n${sections}\n`;
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    downloadBlob(blob, `cuaderno-local-INA-${new Date().toISOString().slice(0, 10)}.md`);
    setStatus('Copia Markdown descargada en su computadora.');
  }

  function prepareEntry(practiceCode, prompt = '') {
    if (!PRACTICES.includes(practiceCode)) return;
    showPractice(practiceCode);
    const textarea = document.getElementById('notebook-entry');
    if (!textarea) return;
    const current = textarea.value.trim();
    const isBlankTemplate = !current || current === TEMPLATE.trim();
    if (isBlankTemplate && prompt) {
      textarea.value = `## Instrucción utilizada\n\n${prompt}\n\n## Respuesta de la IA (cópiela y péguela aquí)\n\n\n## Hallazgo crítico\n\n\n## Próximo ajuste\n\n`;
    }
    saveActiveEntry(true);
    document.getElementById('participant-notebook')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => textarea.focus(), 450);
    setStatus(`${practiceCode} preparado. Pegue aquí la respuesta de la IA externa.`);
  }

  function printNotebook() {
    saveActiveEntry();
    const printContent = document.getElementById('notebook-print-content');
    if (printContent) {
      printContent.replaceChildren();
      PRACTICES.forEach((code) => {
        const section = document.createElement('section');
        const title = document.createElement('h4');
        const content = document.createElement('pre');
        title.textContent = code;
        content.textContent = state.entries[code] || TEMPLATE;
        section.append(title, content);
        printContent.appendChild(section);
      });
    }
    document.body.classList.add('print-notebook-only');
    window.print();
  }

  function clearActiveEntry() {
    if (!window.confirm(`¿Desea borrar únicamente el registro de ${activePractice}?`)) return;
    document.getElementById('notebook-entry').value = TEMPLATE;
    saveActiveEntry(true);
  }

  function init() {
    const textarea = document.getElementById('notebook-entry');
    if (!textarea) return;
    loadState();
    const index = document.getElementById('notebook-index');
    if (index) {
      for (const code of PRACTICES) {
        const item = document.createElement('li');
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn-secondary';
        button.dataset.practice = code;
        button.addEventListener('click', () => {
          App.selectPractice(code);
          textarea.focus();
        });
        item.append(button);
        index.append(item);
      }
      renderIndex();
    }
    document.getElementById('notebook-attach')?.addEventListener('change', event => attachFile(event.currentTarget));
    document.getElementById('notebook-backup')?.addEventListener('click', exportPortfolio);
    document.getElementById('notebook-restore')?.addEventListener('change', event => restorePortfolio(event.currentTarget));
    textarea.addEventListener('input', scheduleSave);
    document.getElementById('btn-notebook-save')?.addEventListener('click', () => saveActiveEntry(true));
    document.getElementById('btn-notebook-download')?.addEventListener('click', downloadMarkdown);
    document.getElementById('btn-notebook-print')?.addEventListener('click', printNotebook);
    document.getElementById('btn-notebook-clear')?.addEventListener('click', clearActiveEntry);
    document.addEventListener('ina:practice-changed', (event) => showPractice(event.detail?.practiceCode));
    window.addEventListener('beforeunload', () => saveActiveEntry());
    window.addEventListener('afterprint', () => document.body.classList.remove('print-notebook-only'));
    const selected = document.getElementById('practice-select-dropdown')?.value || 'PR-01';
    showPractice(selected);
  }

  return { init, showPractice, downloadMarkdown, prepareEntry, printNotebook };
})();

document.addEventListener('DOMContentLoaded', LocalNotebookModule.init);
