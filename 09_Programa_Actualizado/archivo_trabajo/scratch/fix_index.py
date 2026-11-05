with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update tab-live class
text = text.replace('<div id="tab-live" class="tab-pane active">', '<div id="tab-live" class="live-practice-content active">')

# 2. Update the two buttons in PR-03 and PR-05
text = text.replace(
    '<button class="btn-secondary" onclick="App.switchTab(\'cases\')">💼 Ver Casos Ocupacionales</button>',
    '<a href="herramientas.html#cases" class="btn-secondary" style="display:inline-flex;align-items:center;text-decoration:none;">💼 Ver Casos Ocupacionales ↗</a>'
)

text = text.replace(
    '<button class="btn-secondary" onclick="App.switchTab(\'rubric\')">📋 Ir al Probador de Rúbricas</button>',
    '<a href="herramientas.html#rubric" class="btn-secondary" style="display:inline-flex;align-items:center;text-decoration:none;">📋 Ir al Probador de Rúbricas ↗</a>'
)

# 3. Clean script inclusions in index.html
old_scripts = """  <!-- Scripts JavaScript -->
  <script src="js/timer.js"></script>
  <script src="js/prompt-builder.js"></script>
  <script src="js/rubric-tester.js"></script>
  <script src="js/slide-viewer.js"></script>
  <script src="js/tutor-mode.js"></script>
  <script src="js/app.js"></script>"""

new_scripts = """  <!-- Scripts JavaScript -->
  <script src="js/timer.js"></script>
  <script src="js/tutor-mode.js"></script>
  <script src="js/app.js"></script>"""

if old_scripts in text:
    text = text.replace(old_scripts, new_scripts)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("SUCCESS: index.html patched!")
