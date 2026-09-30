(function () {
  "use strict";

  const buttons = Array.from(document.querySelectorAll(".guided-step"));
  const panels = Array.from(document.querySelectorAll(".guided-panel"));
  const progress = document.getElementById("tutorial-progress-status");

  function showStep(stepId, moveFocus) {
    buttons.forEach((button) => {
      const selected = button.dataset.step === stepId;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && moveFocus) button.focus();
    });

    panels.forEach((panel) => {
      const selected = panel.id === `tutorial-panel-${stepId}`;
      panel.hidden = !selected;
    });

    const position = buttons.findIndex((button) => button.dataset.step === stepId) + 1;
    if (progress) progress.textContent = `Paso ${position} de ${buttons.length}`;
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => showStep(button.dataset.step, false));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (["ArrowDown", "ArrowRight"].includes(event.key)) nextIndex = (index + 1) % buttons.length;
      if (["ArrowUp", "ArrowLeft"].includes(event.key)) nextIndex = (index - 1 + buttons.length) % buttons.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = buttons.length - 1;
      showStep(buttons[nextIndex].dataset.step, true);
    });
  });

  document.querySelectorAll("[data-open-step]").forEach((link) => {
    link.addEventListener("click", () => showStep(link.dataset.openStep, false));
  });

  showStep("orientar", false);
})();
