const { chromium } = require('/Users/agustingomez/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error' && !msg.text().includes('Failed to load resource')) errors.push(`console: ${msg.text()}`);
  });
  page.on('pageerror', err => errors.push(`page: ${err.message}`));
  page.on('response', response => {
    if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) errors.push(`HTTP ${response.status()}: ${response.url()}`);
  });
  const response = await page.goto('http://127.0.0.1:8765/index.html', { waitUntil: 'networkidle' });
  if (!response || !response.ok()) throw new Error('index.html no respondió correctamente');

  await page.fill('#notebook-entry', 'Registro de prueba PR-01');
  await page.waitForTimeout(550);
  await page.selectOption('#practice-select-dropdown', 'PR-02');
  await page.waitForTimeout(100);
  await page.fill('#notebook-entry', 'Registro de prueba PR-02');
  await page.selectOption('#practice-select-dropdown', 'PR-01');
  if ((await page.inputValue('#notebook-entry')) !== 'Registro de prueba PR-01') throw new Error('El cuaderno no recuperó PR-01');
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('ina_workshop_notebook_v1')));
  if (saved.entries['PR-01'] !== 'Registro de prueba PR-01') throw new Error('El autoguardado local falló');

  await page.click('#btn-mode-tutor');
  if (!(await page.locator('.tutor-control-panel').isVisible())) throw new Error('El cockpit no se mostró');
  await page.click('#btn-mode-student');
  await page.click('#btn-practice-start');
  await page.waitForTimeout(1200);
  if ((await page.textContent('#practice-timer-display')) === '12:00') throw new Error('El temporizador no avanzó');
  await page.click('#btn-practice-pause');

  for (const path of ['herramientas.html#slides', 'biblioteca.html', 'simulador.html', 'glosario.html']) {
    const r = await page.goto(`http://127.0.0.1:8765/${path}`, { waitUntil: 'domcontentloaded' });
    if (!r || !r.ok()) throw new Error(`${path} no respondió correctamente`);
  }
  if (errors.length) throw new Error(errors.join('\n'));
  console.log('QA navegador OK: rutas, cuaderno local, cambio de práctica, modo facilitación y temporizador.');
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
