import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update stepper buttons with inline onclick for absolute bulletproof reliability
for code in ['PR-01', 'PR-02', 'PR-03', 'PR-04', 'PR-05', 'PR-06', 'PR-07']:
    old_btn = f'data-practice="{code}"'
    new_btn = f'data-practice="{code}" onclick="App.selectPractice(\'{code}\')"'
    if old_btn in text and new_btn not in text:
        text = text.replace(old_btn, new_btn, 1)

# 2. Add prompt preview to each step-copy
def add_preview(match):
    full = match.group(0)
    prompt = match.group(1)
    if 'prompt-box-preview' in full:
        return full
    # Replace right before the button
    replacement = f'<div class="prompt-box-preview"><code>{prompt}</code></div>\n              <button class="btn-step-action btn-copy-prompt-direct"'
    return full.replace('<button class="btn-step-action btn-copy-prompt-direct"', replacement)

pattern = r'<div class="action-step-card step-copy">.*?<button class="btn-step-action btn-copy-prompt-direct" data-prompt="([^"]+)">📋 Copiar Orden Lista</button>'
text = re.sub(pattern, add_preview, text, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("SUCCESS: index.html updated with prompt previews and onclick handlers!")
