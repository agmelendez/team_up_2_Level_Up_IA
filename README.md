# Team Up 2 Level Up · Inteligencia Artificial en la Enseñanza del Inglés Técnico (INA 2026)

Portal interactivo oficial, materiales pedagógicos y repositorio documental del taller técnico **"Team Up 2 Level Up: Inteligencia Artificial en la Enseñanza del Inglés Técnico"**, desarrollado para el **Instituto Nacional de Aprendizaje (INA)** de Costa Rica (Núcleo Comercio y Servicios · Subsector de Idiomas).

- **Fecha oficial de la jornada:** 6 de octubre de 2026 (8:00 a. m. – 3:00 p. m.)
- **Facilitación académica integral:** Agustín Gómez Meléndez (UNED / CIOdD-UCR) · [ORCID: 0000-0002-7886-0740](https://orcid.org/0000-0002-7886-0740)
- **Asesoría académica:** Hannia León Fuentes (UCR / PROTEA)
- **Licencia:** Creative Commons Atribución 4.0 Internacional ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/))
- **Protección de datos:** Cumplimiento estricto de la Ley N.° 8968 de Costa Rica (uso exclusivo de muestras sintéticas y cuaderno local sin envío de datos personales).

---

## 🌐 1. Páginas del Portal Web (Raíz del Proyecto)

Las páginas principales se mantienen en la raíz del proyecto para su despliegue directo en **GitHub Pages** o cualquier servidor estático:

| Archivo | Propósito Pedagógico |
| :--- | :--- |
| [`index.html`](index.html) | **Portal Principal y Taller en Vivo:** explicación inicial en lenguaje cotidiano, ruta recomendada para principiantes, cronograma con tiempos flexibles, ejemplo resuelto paso a paso, selector de las 7 prácticas (`PR-01` a `PR-07`), salidas de respaldo (Plan B) y cuaderno local reflexivo (`¿Qué hice?`, `¿Qué aprendí?`, `¿Cómo lo aplicaré?`). |
| [`herramientas.html`](herramientas.html) | **Suite de Herramientas Pedagógicas:** 1) Constructor guiado de instrucciones en 5 pasos con ejemplo completo de principio a fin, 2) Probador de rúbricas (cuantitativo y cualitativo), 3) Banco de 8 casos ocupacionales del INA y 4) Visor integrado de presentaciones HTML 16:9. |
| [`biblioteca.html`](biblioteca.html) | **Biblioteca de Consulta y Evidencia (41 Documentos):** explicación sencilla del beneficio de consultar fuentes verificadas (RAG) con caso práctico de aula, buscador temático de 41 documentos, evidencia PISA 2025 / NYU Stern 2026 y protocolo de privacidad Ley 8968. |
| [`simulador.html`](simulador.html) | **Simulador de Chatbot Pedagógico:** demostración paso a paso para principiantes y entorno interactivo donde el docente ensaya el rol de recepcionista ante un cliente extranjero simulado en nivel A2. |
| [`glosario.html`](glosario.html) | **Glosario Docente en Español Sencillo:** 17 conceptos esenciales de IA priorizando el término en español, con definiciones claras y ejemplos prácticos de aula. |
| [`tutorial.html`](tutorial.html) | **Tutorial y Ruta de Aprendizaje:** ruta destacada de 4 pasos para principiantes, mapa pedagógico interactivo en SVG y acceso libre a todos los servicios del portal. |

---

## 📂 2. Estructura Ordenada de Carpetas y Subcarpetas

```text
.
├── index.html                        # Portal principal y taller en vivo (PR-01 a PR-07)
├── herramientas.html                 # Constructor de prompts, rúbricas, casos y láminas
├── biblioteca.html                   # Buscador de 41 documentos verificados y evidencia
├── simulador.html                    # Simulador de conversación escrita y voz (Nivel A2)
├── glosario.html                     # Glosario docente en español con ejemplos de aula
├── tutorial.html                     # Ruta de aprendizaje para principiantes y mapa del sitio
├── README.md                         # Guía general y mapa de estructura del proyecto
├── master_control.md                 # Especificación arquitectónica y técnica del sistema
├── CONTROL_USO_PROYECTO.md           # Bitácora operativa de cambios y validaciones
│
├── css/                              # Hojas de estilo modulares y accesibilidad
│   ├── main.css                      # Variables base y tipografía
│   ├── components.css                # Componentes interactivos, tarjetas y modales
│   ├── modern-portal.css             # Sistema visual UCR/INA y componentes para principiantes
│   ├── tutor-mode.css                # Estilos exclusivos del panel de facilitación
│   ├── tutorial.css                  # Estilos del tutorial y mapa SVG
│   ├── a11y-responsive.css           # Panel de accesibilidad, alto contraste y diseño móvil
│   └── print.css                     # Impresión limpia y exportación PDF del cuaderno local
│
├── js/                               # Lógica interactiva del cliente (sin dependencias externas)
│   ├── app.js                        # Controlador principal, casos INA, biblioteca y Plan B
│   ├── local-notebook.js             # Cuaderno local reflexivo, autoguardado y exportación .md/PDF
│   ├── timer.js                      # Cronómetro flexible (12/20/25 min) y reloj de ciclo (25 min)
│   ├── prompt-builder.js             # Constructor guiado de instrucciones en 5 pasos
│   ├── rubric-tester.js              # Probador de rúbricas (modalidad cuantitativa y cualitativa)
│   ├── chat-simulator.js             # Motor del simulador socrático de recepción hotelera
│   ├── slide-viewer.js               # Visor sincronizado de las 4 presentaciones HTML
│   ├── tutor-mode.js                 # Herramientas de facilitación y avisos para Microsoft Teams
│   ├── tutorial.js                   # Navegación accesible por pasos en tutorial.html
│   └── a11y-translate.js             # Accesibilidad visual, lector y traducción ES/EN
│
├── img/                              # Recursos gráficos e identidad visual
│   ├── ciodd-ucr-logo.svg            # Firma institucional UCR / CIOdD
│   ├── ruta-pedagogica-cronograma.svg    # Infografía vectorial del cronograma (ES)
│   ├── ruta-pedagogica-cronograma-en.svg # Infografía vectorial del cronograma (EN)
│   └── identidad-grafica-ucr-ciodd/  # Manuales y activos gráficos de identidad institucional
│
├── Bibliografia/                     # Corpus documental RAG (41 documentos) y recursos anexos
│   ├── MANUAL_USO_LLM_CORPUS_PDF_V5.md   # Documentación técnica del corpus
│   ├── corpus.duckdb / faiss.index       # Índices locales de búsqueda documental
│   ├── *.jsonl / *.parquet               # Metadatos, secciones, tablas y fragmentos
│   ├── Education at a Glance CR/         # Informes OCDE 2026 para Costa Rica
│   └── Modelos Texto a Voz/              # Materiales complementarios sobre IA de voz en el aula
│
├── 00_Gestion/                       # Planificación, términos de referencia y ruta maestra
│   ├── NSCS-PPE-144-2026.pdf         # Documento institucional de referencia INA
│   ├── INA-Ruta-Maestra-Produccion.md
│   ├── INA-Taller-Prompts-Produccion.md
│   ├── LEVELUP_E00_LINEA_BASE.md
│   └── LEVELUP_PLAN_IMPLEMENTACION.md
│
├── 01_Instrumentos_Previos/          # Fase 1: Diagnóstico e instrumentos previos
├── 02_Presentaciones/                # Fase 2: Presentaciones HTML 16:9 y guiones por bloque
│   ├── INA_F2-P2.1_Bloque1_PanoramaMetodo_v2.html
│   ├── INA_F2-P2.2_Bloque2_UsosNoConvencionales_v2.html
│   ├── INA_F2-P2.3_Bloque3_ModalidadEducativa_v2.html
│   ├── INA_F2-P2.4_Bloque4_IALocal_v2.html
│   ├── presentaciones-datos.js / presentaciones.js / presentaciones.css
│   └── archivo_pptx_qa/              # Respaldo de archivos PPTX originales y capturas de QA
│
├── 03_Materiales_Practica/           # Fase 3: Consignas, plantillas, muestras sintéticas y casos
├── 04_Guiones_Demostracion/          # Fase 4: Guiones minuto a minuto para demostraciones en vivo
├── 05_Adaptaciones_Linguisticas/     # Fase 5: Adaptaciones para LESCO, Portugués y Francés
├── 06_Evaluacion_Informe/            # Fase 6: Informes técnicos, diagnóstico PISA y revisiones
│   ├── Informe_Componente_Ingles_PISA_IA2025_CostaRica.docx
│   └── informes_respaldo/            # Documentos de retroalimentación y mejoras metodológicas
│       ├── Mejoras5Noviembre.docx
│       └── Recomendaciones Curso LevelUP.docx
│
├── 07_Operacion_Sesion/              # Fase 7: Operación de sesión y mensajes de seguimiento
├── 08_Verificacion/                  # Fase 8: Listas de verificación y auditorías de calidad
└── 09_Programa_Actualizado/          # Fase 9: Versiones oficiales del programa metodológico
    ├── INA-Taller-IA-Idiomas-6oct2026.docx
    ├── INA-Taller-IA-Idiomas-6oct2026_v2.docx
    └── archivo_trabajo/              # Scripts auxiliares e historial de trabajo (scratch)
```

---

## 🚀 3. Cómo Ejecutar y Revisar el Proyecto Localmente

El portal está construido con **HTML5, CSS3 y JavaScript puro (Vanilla JS)** sin requerir compiladores ni dependencias externas:

1. **Apertura directa o con servidor local:**
   ```bash
   python3 -m http.server 8000
   ```
2. Abra en su navegador `http://localhost:8000/index.html`.
3. Todas las preferencias de accesibilidad y las entradas del **Cuaderno Local** se guardan automáticamente en el `localStorage` del navegador del participante.
