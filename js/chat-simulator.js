/**
 * TALLER INA · Simulador Interactivo de Chatbot (chat-simulator.js)
 * Permite a los docentes ensayar en vivo una conversación con un cliente de hotel en nivel A2.
 */

const ChatSimulatorModule = (() => {
  let turnCount = 0;
  const maxTurns = 6;
  let isSimulating = false;

  // Respuestas del bot simulado basadas en PR-04 (Cliente en recepción de hotel)
  const botResponses = [
    {
      trigger: 0,
      botMsg: "Hello! My name is Mr. Robert Davis. I arrived for my reservation, but the desk clerk told me my room is not ready yet. Could you please help me?",
      note: "Turno 1: El cliente plantea una queja cortés en inglés A2."
    },
    {
      trigger: 1,
      botMsg: "Thank you for checking. How long do I need to wait for the room? I am very tired after my trip from San José.",
      note: "Turno 2: El cliente pide un tiempo estimado. Si el docente responde en español, el bot recordará usar inglés."
    },
    {
      trigger: 2,
      botMsg: "I understand, thirty minutes is okay. Is there a cafeteria or waiting area where I can sit and drink a coffee?",
      note: "Turno 3: El cliente solicita un servicio complementario."
    },
    {
      trigger: 3,
      botMsg: "Great! Can I leave my two big bags here at the reception while I go to the cafeteria?",
      note: "Turno 4: Pregunta sobre custodia de equipaje."
    },
    {
      trigger: 4,
      botMsg: "Perfect. Will you call me or come to the cafeteria when the key is ready?",
      note: "Turno 5: Coordinación del aviso final."
    },
    {
      trigger: 5,
      botMsg: "Excellent service, thank you very much for your kindness! I will wait in the cafeteria.",
      note: "Turno 6: Cierre de la situación comunicativa."
    }
  ];

  function startSimulation() {
    turnCount = 0;
    isSimulating = true;
    const chatHistory = document.getElementById('chat-history');
    if (!chatHistory) return;

    chatHistory.innerHTML = '';
    
    // Mensaje inicial del cliente
    appendBotMessage(botResponses[0].botMsg, botResponses[0].note);
    updateTurnCounter();
  }

  function appendBotMessage(text, note = '') {
    const chatHistory = document.getElementById('chat-history');
    if (!chatHistory) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-bubble bot-bubble';
    const sender = document.createElement('div');
    sender.className = 'bubble-sender';
    sender.textContent = '🤖 Cliente Simulado (Mr. Davis · Nivel A2):';
    const body = document.createElement('div');
    body.className = 'bubble-text';
    body.textContent = text;
    msgDiv.append(sender, body);
    if (note) {
      const pedagogicalNote = document.createElement('div');
      pedagogicalNote.className = 'bubble-pedagogical-note';
      pedagogicalNote.textContent = `💡 Nota docente: ${note}`;
      msgDiv.appendChild(pedagogicalNote);
    }

    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  function appendUserMessage(text) {
    const chatHistory = document.getElementById('chat-history');
    if (!chatHistory) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-bubble user-bubble';
    const sender = document.createElement('div');
    sender.className = 'bubble-sender';
    sender.textContent = '👤 Usted (Recepcionista INA):';
    const body = document.createElement('div');
    body.className = 'bubble-text';
    body.textContent = text;
    msgDiv.append(sender, body);

    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  function processUserInput() {
    const input = document.getElementById('chat-user-input');
    if (!input) return;

    const userText = input.value.trim();
    if (!userText) return;

    appendUserMessage(userText);
    input.value = '';
    turnCount++;
    updateTurnCounter();

    // Detectar si el usuario escribió en español
    const isSpanish = /[áéíóúñ¿¡]|gracias|hola|habitacion|esperar|disculpe/i.test(userText);

    // Simular tiempo de respuesta
    setTimeout(() => {
      if (isSpanish) {
        appendBotMessage(
          "Try it in English! You can use: 'I am sorry for the delay, you can wait...' [Pista: Recuerde que el cliente habla inglés]",
          "Regla activa: Ante mensajes en español, la IA guía sin romper el rol y ofrece un andamiaje inmediato."
        );
        return;
      }

      if (turnCount < maxTurns) {
        const nextResp = botResponses[turnCount];
        appendBotMessage(nextResp.botMsg, nextResp.note);
      } else {
        // Cierre pedagógico tras 6 turnos
        appendBotMessage(
          `🏁 Resumen pedagógico de la práctica (PR-04):\n\n` +
          `• Logro observado: Se mantuvo la interacción en inglés A2 y se atendió la necesidad del cliente.\n` +
          `• Prioridad de mejora: Reforzar expresiones corteses como "Certainly" y "Would you like...?".\n` +
          `• Frase para reintentar: "Your room will be ready shortly. Please feel free to wait in the cafeteria."`,
          "El bot cierra la actividad entregando retroalimentación formativa y no una nota numérica."
        );
        isSimulating = false;
      }
    }, 600);
  }

  function updateTurnCounter() {
    const counter = document.getElementById('chat-turn-indicator');
    if (counter) {
      counter.textContent = `Turno ${Math.min(turnCount, maxTurns)} de ${maxTurns}`;
    }
  }

  function init() {
    document.getElementById('btn-start-chat')?.addEventListener('click', startSimulation);
    document.getElementById('btn-send-chat')?.addEventListener('click', processUserInput);
    document.getElementById('chat-user-input')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        processUserInput();
      }
    });

    startSimulation();
  }

  return {
    init,
    startSimulation
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('chat-history')) {
    ChatSimulatorModule.init();
  }
});
