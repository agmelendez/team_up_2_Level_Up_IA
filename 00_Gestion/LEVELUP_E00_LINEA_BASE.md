# E00 Línea base de Team Up 2 Level Up

**Fecha** · 3 de noviembre de 2026  
**Sesión** · S00.1. Presupuesto inicial PERT de 15 000 tokens. Consumo real no medido.  
**Estado** · Diagnóstico local documentado. Integración Git pendiente.  
**SHA verificado** · `f7f74c0a8440f0e8156d2f50d1af44f0e0b4e152` en `HEAD`, `origin/main` local y `refs/heads/main` consultado mediante `git ls-remote`.

## Inventario

| Entrada | Función | Referencias para las siguientes etapas |
|---|---|---|
| `index.html` | Portada, cronograma, selector PR-01 a PR-07, Plan B, cuaderno y facilitación | `#seccion-practica`, `#practice-select-dropdown`, `#participant-notebook`, `js/app.js`, `js/local-notebook.js`, `js/tutor-mode.js` |
| `tutorial.html` | Primera visita y mapa pedagógico | `js/tutorial.js` |
| `herramientas.html` | Asistente, rúbrica, casos y presentaciones | Hashes `builder`, `rubric`, `cases`, `slides` gestionados por JavaScript |
| `biblioteca.html` | Biblioteca, evidencia y cierre | Hashes `documents`, `evidence`, `closing` gestionados por JavaScript |
| `glosario.html` | Apoyo terminológico | Reutilizar las definiciones pertinentes en E03 |
| `simulador.html` | Ensayo de chatbot | `js/chat-simulator.js` |
| `css/`, `img/`, `02_Presentaciones/` | Estilos, diagramas y presentaciones HTML | Revisar referencias relativas cuando se prepare una entrega bajo subdirectorio |
| ChatGPT, Claude y Gemini | Herramientas externas desde las prácticas | El portal dispone de salidas Plan B. PR-06 y PR-07 tienen condiciones técnicas adicionales que se probarán en E04. |

**Almacenamiento local** · `ina_workshop_notebook_v1` conserva texto por práctica. `ina_active_tab` y `ina_sidebar_collapsed` conservan estado de navegación. `ina_tutor_mode`, `ina_a11y_state` e `ina_lang` guardan preferencias. Las pruebas de persistencia deben usar el mismo protocolo, host y puerto.

## Pruebas de referencia

Entorno · macOS, servidor HTTP local con Python en `127.0.0.1:8765`, navegador integrado y JavaScriptCore para la prueba aislada del módulo del cuaderno. Se usaron entradas ficticias.

| Prueba | Estado | Evidencia y límite |
|---|---|---|
| T01 · Portada | Pasa en escritorio. Móvil pendiente. | La portada abrió y presentó el acceso «Iniciar Práctica en Vivo». La acción aterrizó en la sección general, con PR-01 visible inicialmente. |
| Rutas principales | Pasa por HTTP. | Las seis páginas devolvieron HTTP 200. La revisión de `href` y `src` locales en las seis entradas no detectó archivos ausentes ni IDs duplicados. |
| T03 · Pestañas con hash | Parcial. | El código reconoce los hashes indicados en el inventario. Queda ejecutar la navegación desde los enlaces de origen, al recargar y al volver atrás. |
| T07 · Guardado y recarga | Pasa para el caso probado en navegador. | Guardar texto ficticio en PR-01 y PR-02, recargar y seleccionar PR-01. Se recuperó el texto exacto de PR-01. |
| T07 · Markdown | Pasa en prueba de módulo. Descarga en navegador pendiente. | El contenido generado para el archivo incluyó las dos notas ficticias. La sesión del navegador se interrumpió al probar la descarga. El flujo PDF queda pendiente. |
| T07 · Borrado selectivo | Falla en prueba de módulo. | Tras confirmar el borrado simulado, PR-01 seguía en almacenamiento y PR-02 permaneció intacta. Ver H00-01. |
| T09 · Plan B | Pasa para la apertura en PR-01. | El botón abrió el diálogo «Respaldo PR-01 · Instrucción Completa». La prueba se hizo con servidor local y sin abrir asistentes externos. La desconexión explícita queda pendiente. |
| T10 · Facilitación e idioma | Parcial. | Se observaron los controles de facilitación, traducción y accesibilidad. Sus flujos y la ejecución bajo subdirectorio quedan pendientes en las etapas que los afectan. |

## Hallazgos y registro de cambios

| ID | Gravedad | Evidencia | Etapa |
|---|---|---|---|
| H00-01 | Media | `clearActiveEntry()` asigna la plantilla a la entrada, pero `saveActiveEntry()` vuelve a leer el texto anterior del campo antes de persistir. Prueba aislada con DOM, almacenamiento y confirmación simulados: `markdownBoth=true`, `clearRemoved=false`, `otherPreserved=true`. | E06. Corregir y repetir el caso en navegador, incluida la recarga. |
| H00-02 | Media | La llamada de portada apunta a la sección general de práctica. El selector y el cuaderno preceden a la consigna en el orden del documento. | E01 y E02. Reducir opciones iniciales y verificar el enlace directo incluso con estado previo. |
| H00-03 | Revisión editorial | La portada incluye una métrica absoluta de cumplimiento. E00 confirma su presencia en la interfaz. | E01. Revisar la afirmación antes de reutilizarla. |

## Control Git y traspaso

- El plan, el Word y la carpeta gráfica eran archivos locales sin seguimiento al iniciar. Para integrar E00, seleccionar explícitamente el plan y esta bitácora. Conservar los insumos originales fuera del historial y revisar el diff antes de integrar en la rama acumulativa local.
- Roles por asignar en la bitácora de E00 o de la primera etapa de implementación: responsable técnico, revisor pedagógico, referente de marca y mantenedor.
- El commit de E00, el SHA acumulado y las horas reales quedan pendientes de registro. GitHub se actualizará una vez al concluir E08 y validar el conjunto de cambios. Las pruebas de línea base se asociaron al SHA remoto verificado arriba.
- E01 puede iniciar desde esta línea base documentada. Repetir la apertura de portada en escritorio y móvil, y verificar que el acceso a la práctica y el Plan B conserven su comportamiento.
