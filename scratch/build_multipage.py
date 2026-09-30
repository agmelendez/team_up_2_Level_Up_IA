import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

tt_start = text.find('<div id="tab-tools"')
lh_start = text.find('<div id="tab-library-hub"')
end_marker = '</div> <!-- Cierre de .portal-content-area -->'
end_idx = text.find(end_marker)

# Extract tools inner content
z3_comment = text.rfind('<!-- ===', 0, lh_start)
# tools_inner contains subpanes: subpane-builder, subpane-rubric, subpane-cases, subpane-slides
tools_chunk = text[tt_start:z3_comment].strip()
# remove the outer <div id="tab-tools" class="tab-pane"> and its closing tag
tools_inner = re.sub(r'^<div id="tab-tools"[^>]*>\s*<nav class="subtabs-nav-bar".*?</nav>', '', tools_chunk, flags=re.DOTALL)
tools_inner = tools_inner.rstrip()
if tools_inner.endswith('</div>'):
    tools_inner = tools_inner[:-6].rstrip()

# Extract library inner content
library_chunk = text[lh_start:end_idx].strip()
library_inner = re.sub(r'^<div id="tab-library-hub"[^>]*>\s*<nav class="subtabs-nav-bar".*?</nav>', '', library_chunk, flags=re.DOTALL)
library_inner = library_inner.rstrip()
if library_inner.endswith('</div>'):
    library_inner = library_inner[:-6].rstrip()

print("Tools inner length:", len(tools_inner))
print("Library inner length:", len(library_inner))

with open('scratch/tools_extracted.html', 'w', encoding='utf-8') as f:
    f.write(tools_inner)

with open('scratch/library_extracted.html', 'w', encoding='utf-8') as f:
    f.write(library_inner)

print("Extracted successfully!")
