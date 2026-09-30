/**
 * TALLER INA · Lógica de Modo Facilitador (tutor-mode.js)
 * Maneja el cockpit interactivo para Agustín Gómez y Hannia León Fuentes,
 * avisos de broadcast copiables para Teams y alternador de vistas.
 */

const TutorModule = (() => {
  let isTutorMode = false;
  let activeFacilitator = 'agm'; // 'agm' | 'hl'

  const broadcastMessages = [
    {
      label: 'Apertura de Práctica (12 min)',
      tag: 'PRÁCTICA',
      text: '🚀 Iniciamos la ventana de práctica individual (12 minutos cronometrados). Recuerden seguir los 5 componentes obligatorios y utilizar únicamente muestras sintéticas (Ley 8968). ¡Adelante!'
    },
    {
      label: 'Alerta de Mitad de Tiempo (6 min)',
      tag: 'TIEMPO',
      text: '⏰ Han transcurrido 6 minutos de su práctica. Por favor verifiquen que la salida de la IA respeta el nivel de idioma (A1, A2 o B1) indicado y no contiene datos inventados.'
    },
    {
      label: 'Alerta de Cierre de Práctica (2 min)',
      tag: 'CIERRE',
      text: '⚠️ Quedan 2 minutos para concluir la práctica individual. Vayan preparando su registro personal (instrucción, fragmento corregido y hallazgo) en el cuaderno local.'
    },
    {
      label: 'Guardado en cuaderno local (3 min)',
      tag: 'CUADERNO',
      text: '💾 Tiempo de registro (3 minutos): Guarden el producto y el hallazgo de esta práctica en su cuaderno local. Al finalizar la jornada, descarguen su copia Markdown; no deben subirla ni enviarla.'
    },
    {
      label: 'Plan B / Contingencia de Conexión',
      tag: 'PLAN B',
      text: '📢 Si presentan problemas de acceso a ChatGPT, Claude o Gemini, recuerden que pueden trabajar directamente con las SALIDAS DE RESPALDO disponibles en el portal. Lo evaluado es su juicio pedagógico.'
    },
    {
      label: 'Aviso de Receso / Ventana Técnica',
      tag: 'RECESO',
      text: '☕ Iniciamos el receso. Pueden aprovechar estos minutos para hidratarse o probar el acceso a las herramientas. Reanudamos puntualmente a la hora indicada.'
    }
  ];

  function toggleTutorMode(enable = null) {
    if (enable === null) {
      isTutorMode = !isTutorMode;
    } else {
      isTutorMode = enable;
    }

    if (isTutorMode) {
      document.body.classList.add('tutor-active');
      document.getElementById('btn-mode-tutor')?.classList.add('active');
      document.getElementById('btn-mode-student')?.classList.remove('active');
      App.showToast('🟣 Modo Facilitador activado (Cockpit para Agustín & Hannia)');
    } else {
      document.body.classList.remove('tutor-active');
      document.getElementById('btn-mode-tutor')?.classList.remove('active');
      document.getElementById('btn-mode-student')?.classList.add('active');
      App.showToast('👤 Modo Participante activado');
    }

    localStorage.setItem('ina_tutor_mode', isTutorMode ? '1' : '0');
  }

  function setFacilitator(facilitatorId) {
    activeFacilitator = facilitatorId;
    document.querySelectorAll('.facilitator-switch-btn').forEach(btn => {
      if (btn.dataset.facilitator === facilitatorId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const name = facilitatorId === 'agm' ? 'Agustín Gómez Meléndez' : 'Hannia León Fuentes';
    App.showToast(`Facilitador activo seleccionado: ${name}`);
  }

  function renderBroadcastMessages() {
    const container = document.getElementById('teams-broadcast-list');
    if (!container) return;

    container.innerHTML = '';
    broadcastMessages.forEach((msg, idx) => {
      const item = document.createElement('div');
      item.className = 'teams-message-item';
      item.innerHTML = `
        <div class="teams-message-content">
          <span style="font-weight:700;color:#4f46e5;font-size:0.75rem;text-transform:uppercase;margin-right:0.35rem;">[${msg.tag}]</span>
          <strong>${msg.label}:</strong> "${msg.text}"
        </div>
        <button class="btn-copy-broadcast" data-index="${idx}">
          Copiar para Teams
        </button>
      `;

      item.querySelector('.btn-copy-broadcast').addEventListener('click', () => {
        App.copyToClipboard(msg.text, `Aviso copiado para Teams: ${msg.label}`);
      });

      container.appendChild(item);
    });
  }

  function init() {
    // Restaurar preferencia previa
    const saved = localStorage.getItem('ina_tutor_mode');
    if (saved === '1') {
      toggleTutorMode(true);
    }

    document.getElementById('btn-mode-student')?.addEventListener('click', () => toggleTutorMode(false));
    document.getElementById('btn-mode-tutor')?.addEventListener('click', () => toggleTutorMode(true));

    document.querySelectorAll('.facilitator-switch-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        setFacilitator(e.currentTarget.dataset.facilitator);
      });
    });

    renderBroadcastMessages();
  }

  return {
    init,
    toggleTutorMode,
    setFacilitator
  };
})();
