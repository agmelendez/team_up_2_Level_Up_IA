# Plan de implementación incremental de Team Up 2 Level Up

**Fecha** · 3 de noviembre de 2026  
**Estado** · E00 y E01 completadas en Git local. E02–E08 pendientes.
**Unidad de estimación PERT** · Tokens por sesión de trabajo. **Registro de tiempo** · Horas-persona (h-p), por separado.  
**Repositorio** · [agmelendez/team_up_2_Level_Up_IA](https://github.com/agmelendez/team_up_2_Level_Up_IA)  
**Línea base local observada** · Rama `main`, commit `f7f74c0a8440f0e8156d2f50d1af44f0e0b4e152`. La referencia local `origin/main` coincide con ese commit. El SHA remoto se verificó durante E00 mediante una consulta de solo lectura.  
**Raíz Git** · `Version 2.0/`. Las rutas de este plan son relativas a esa raíz.

## 1. Alcance y fuentes

Mejorar la primera visita, el ingreso a la práctica, la comprensión de instrucciones técnicas, el registro de evidencias y la identidad gráfica. Cada etapa entrega una mejora utilizable sobre la anterior y se puede validar y revertir individualmente. Se conserva el portal estático, las siete prácticas, el modo facilitador, los casos ocupacionales, la biblioteca y las salidas de respaldo.

- **Fuente pedagógica** · [Recomendaciones Curso LevelUP.docx](https://chatgpt.com/library?file_id=libfile_72e724c0a85081918a9be502ae9cf430&account_id=personal), pp. 1–4. La copia local está en la raíz del repositorio.
- **Fuente gráfica local** · `Elementos Identidad Grafica UCR CIOdD/`. Contiene `ciodd-ucr-logo.svg`, firmas institucionales, variantes RGB para pantalla, recursos de impresión y plantillas web. La plantilla básica se verificó como ZIP y contiene CSS y recursos web. En el inventario local no se identificó un PDF de manual con nombre propio. Registrar edición y páginas de la guía aplicable en E05.
- **Referencias institucionales** · [Identidad visual UCR](https://oci.ucr.ac.cr/identidad-visual.html), [Manual de identidad visual de la UCR](https://psico.ucr.ac.cr/images/recursos/2019_manual-identidad-visual-web.pdf) y [Protocolo UCR para gestión y control de sitios web](https://ci.ucr.ac.cr/sites/default/files/2022-04/CI%20DIR%20D15%20Protocolo%20para%20la%20gestion%20y%20control%20de%20los%20sitios%20Web.pdf). Confirmar con la contraparte institucional el lineamiento web vigente y la condición del sitio antes de aplicar su firma.
- **Alcance de GitHub** · Una actualización al finalizar E08 y validar todas las modificaciones. El seguimiento por etapa se realiza en Git local. La publicación mediante Pages u otro proveedor constituye una decisión de entrega independiente. La ubicación en GitHub por sí sola no define alojamiento ni exposición pública.

| Requisito | Origen | Etapas | Evidencia de cierre |
|---|---|---|---|
| R01 Sintetizar la bienvenida | Word, pp. 1 y 3 | E01 | Capturas de portada y prueba de primera visita |
| R02 Guiar a quien llega por primera vez | Word, pp. 2–3 | E01, E02 | Recorrido de tres pasos hasta PR-01 |
| R03 Visibilizar las actividades prácticas | Word, pp. 2–3 | E02 | Enlaces directos, selector y vuelta al ejercicio |
| R04 Explicar términos en contexto | Word, pp. 1 y 3 | E03 | Matriz de seis términos con ubicación y ejemplo |
| R05 Acompañar prácticas técnicas | Word, pp. 3–4 | E04 | Ejecución guiada de PR-05, PR-06 y PR-07 |
| R06 Guardar documentos y reflexiones | Word, pp. 2–3 | E06, E07 | Recuperación local, exportación y restauración de prueba |
| R07 Aplicar identidad UCR–CIOdD | Encargo y carpeta de identidad | E05 | Ficha de marca y revisión visual por página |
| R08 Controlar el cambio incremental | Encargo | E00–E08 | Registro local, pruebas y commit de cada etapa |

## 2. Flujo Git y control de cambios

1. **Preparar la integración local.** Partir del SHA validado en E00 y crear una rama acumulativa local `levelup/implementacion`. Revisar el árbol de trabajo antes de cada etapa. Seleccionar archivos con `git add -- <ruta>` y revisar `git diff --cached --stat`. Mantener los insumos originales, respaldos y exportaciones personales fuera del historial.
2. **Abrir cada etapa desde el último SHA local validado.** Crear la rama local sugerida y registrar en la bitácora alcance, IDs de actividad y requisito, pruebas y presupuesto de tokens. Durante E00–E08, toda la coordinación y revisión se hace localmente, sin subir ramas ni abrir issues o PR en GitHub.
3. **Implementar y comprobar localmente.** Ejecutar `python3 -m http.server 8765 --bind 127.0.0.1` desde la raíz Git. Usar datos ficticios y el mismo protocolo, host y puerto para las pruebas de persistencia. Registrar entorno, resultados y evidencias.
4. **Cerrar cada etapa con su propio commit.** Revisar el diff, guardar el cambio con el ID de etapa e incorporarlo a la rama acumulativa conservando los commits. Registrar el SHA y repetir la prueba de humo antes de iniciar la etapa siguiente. Ante una regresión, corregir o revertir localmente. Para el portafolio, preservar el esquema legado y los respaldos al revertir.
5. **Registrar desvíos en la bitácora local.** Documentar hallazgo, impacto, dependencia y presupuesto del saldo. Conservar la estimación inicial y referenciar el commit de corrección cuando corresponda.
6. **Actualizar GitHub una vez, al cierre de E08.** Con la implementación completa y las pruebas acumuladas aprobadas, consultar el SHA actual de `origin/main`. Si avanzó, incorporar los cambios remotos localmente y repetir las pruebas antes de transferir la versión. Revisar el diff acumulado y el contenido de todos los commits que se enviarán. Actualizar `main` con el historial incremental, sin forzar la escritura. Si la rama requiere revisión, abrir un único PR final y verificar el SHA que quedó en `main` después de integrarlo. Registrar el SHA final y la fecha. La publicación web se gestiona por separado.

**Roles propuestos para asignar en E00** · responsable técnico para implementar y registrar, revisor pedagógico para PR-01–PR-07, referente de marca para E05 y mantenedor para integrar o revertir. Una persona puede asumir varios roles. Registrar la persona asignada y quién validó cada entrega.

## 3. Etapas y actividades

El orden recomendado es E00 → E01 → E02 → E03 → E04 → E05 → E06 → E07 → E08. E03, E04 y E05 pueden prepararse desde E02, pero se integran y prueban de forma secuencial porque comparten interfaz. La revisión de insumos de marca puede comenzar en E00. Las horas de cada actividad corresponden al escenario más probable e incluyen el control indicado.

### E00 Línea base y protocolo de pruebas · 5 h-p

**Rama** · `chore/e00-linea-base`  
**Rutas de referencia** · `00_Gestion/`, seis páginas principales, `css/`, `js/`.

| ID | Actividad | h-p |
|---|---|---:|
| A00.1 | Inventariar páginas, rutas, pestañas por hash, recursos locales, herramientas externas y claves de almacenamiento. Registrar SHA y entorno. | 2 |
| A00.2 | Ejecutar el recorrido actual desde portada hasta guardar y exportar una evidencia. Verificar el borrado de una entrada con datos ficticios. El orden observado en `clearActiveEntry()` amerita una prueba específica. | 2 |
| A00.3 | Registrar resultados, responsables, problemas reproducibles y reglas de inclusión de archivos en Git. | 1 |

**Cierre** · Inventario, lista de pruebas repetibles y clasificación de hallazgos por gravedad. El comportamiento existente queda documentado antes de cambiarlo.

### E01 Portada y ruta para primera visita · 7 h-p

**Rama** · `feat/e01-portada`  
**Rutas candidatas** · `index.html`, `tutorial.html`, CSS compartido de portada.

| ID | Actividad | h-p |
|---|---|---:|
| A01.1 | Reducir la bienvenida a propósito, público y acción principal. Reubicar directorio, cronograma y biblioteca como accesos secundarios. Revisar la métrica de cumplimiento legal antes de reutilizarla como texto de portada. | 3 |
| A01.2 | Reutilizar la visita de cuatro minutos del tutorial. Incorporar tres pasos visibles en portada y enlazar el botón principal a la sección de práctica disponible. | 2 |
| A01.3 | Revisar el orden visual, foco, textos y enlaces en escritorio y móvil. Registrar capturas. | 2 |

**Cierre** · La portada explica el objetivo y orienta hacia la práctica. En E02 el mismo acceso abrirá directamente PR-01.

### E02 Acceso directo y navegación de prácticas · 9 h-p

**Rama** · `feat/e02-navegacion-practicas`  
**Rutas candidatas** · `index.html`, `js/app.js`, `tutorial.html`. Verificar la interacción con `js/local-notebook.js`.

| ID | Actividad | h-p |
|---|---|---:|
| A02.1 | Resolver el enlace directo a PR-01 con el selector existente. Definir precedencia del enlace explícito sobre la pestaña recordada. Conservar las rutas previas. | 3 |
| A02.2 | Hacer visible **Ver las siete prácticas** y ordenar el paso hacia la herramienta, la vuelta al ejercicio y el acceso al cuaderno. | 3 |
| A02.3 | Probar ingreso directo, recarga, atrás, selección de PR-01 a PR-07 y sincronización con el cuaderno en móvil y teclado. | 3 |

**Cierre** · Se abre PR-01 desde la portada incluso cuando otra práctica quedó seleccionada. La entrada del cuaderno corresponde siempre a la práctica activa. Se verifica el modo facilitador.

### E03 Glosario en contexto · 8 h-p

**Rama** · `feat/e03-glosario-contextual`  
**Rutas candidatas** · `index.html`, `glosario.html`, `biblioteca.html` y, cuando corresponda, `herramientas.html`.

| ID | Actividad | h-p |
|---|---|---:|
| A03.1 | Inventariar la primera aparición útil de RAG, microentregable, calibrar prompts, microrremedio, tutor socrático y auditoría de límites. | 2 |
| A03.2 | Redactar una explicación y un ejemplo ocupacional breve para cada término. Insertarlos antes de que condicionen la ejecución. | 4 |
| A03.3 | Revisar consistencia con glosario, navegación y lectura con teclado. Verificar la vista en inglés donde esté disponible. | 2 |

**Cierre** · Los seis términos se entienden desde la página en que se necesitan. La matriz registra término, ubicación y ejemplo aprobado.

### E04 Guías para prácticas técnicas · 10 h-p

**Rama** · `feat/e04-guias-tecnicas`  
**Rutas candidatas** · `index.html`, `herramientas.html`, materiales de práctica referenciados.

| ID | Actividad | h-p |
|---|---|---:|
| A04.1 | Preparar para PR-05 un ejemplo de muestra evaluada, un criterio de la rúbrica y una discrepancia que la persona docente debe revisar. | 3 |
| A04.2 | Preparar para PR-06 un ejemplo breve de interacción oral, una señal de fallo y una salida de respaldo. | 2 |
| A04.3 | Preparar para PR-07 requisitos previos, comparación con el mismo caso y alternativa cuando el modelo local no esté disponible. | 3 |
| A04.4 | Validar los tres recorridos y comprobar que las consignas, rúbricas y productos originales sigan alineados. | 2 |

**Cierre** · Las tres prácticas permiten preparar, ejecutar y verificar un primer intento. Las dependencias externas y las alternativas están indicadas junto al paso correspondiente.

### E05 Identidad visual UCR–CIOdD · 13 h-p

**Rama** · `feat/e05-identidad-visual`  
**Rutas candidatas** · `img/`, CSS compartido, encabezados y pies de las seis páginas. Revisar las presentaciones por impacto y registrar una etapa independiente si requieren rediseño.

| ID | Actividad | h-p |
|---|---|---:|
| A05.1 | Cotejar el SVG CIOdD–UCR, firmas RGB, plantilla web y guía vigente. Levantar ficha con fuente, página, variante, ubicación, tamaño mínimo, área de reserva, fondo, colores y tipografía. Confirmar la relación visual con INA y el carácter institucional del sitio. | 4 |
| A05.2 | Aplicar recursos seleccionados y estilos comunes al encabezado, pie y componentes de navegación. Usar rutas relativas, conservar proporciones y documentar procedencia de cada activo incorporado. | 5 |
| A05.3 | Revisar contraste, texto alternativo, zoom al 200 %, móvil y consistencia en las seis páginas. Obtener revisión de marca y conservar evidencia antes/después. | 4 |

**Cierre** · Ficha validada y activos web incorporados selectivamente. La jerarquía de logos, los créditos y las variantes aplicadas corresponden a la decisión de marca registrada. El material completo de referencia queda fuera de los archivos a publicar.

### E06 Portafolio de reflexiones · 12 h-p

**Rama** · `feat/e06-portafolio-texto`  
**Rutas candidatas** · `index.html`, `js/local-notebook.js`, CSS del cuaderno y de impresión.

| ID | Actividad | h-p |
|---|---|---:|
| A06.1 | Incorporar índice por práctica, indicador de evidencia registrada y acceso a edición sin perder el contexto. | 4 |
| A06.2 | Preservar las entradas de `ina_workshop_notebook_v1`, el guardado y las exportaciones Markdown/PDF. Verificar borrado por práctica y corregirlo si se confirma el hallazgo de E00. | 4 |
| A06.3 | Probar con notas previas, texto nuevo, recarga, salto de práctica, borrado y error de almacenamiento. Registrar capturas con datos ficticios. | 4 |

**Cierre** · Las notas previas se recuperan y exportan. Borrar una entrada de prueba no altera las demás. Ante error de guardado, la interfaz muestra el estado y permite descargar el contenido aún disponible.

### E07 Adjuntos y respaldo portable · 20 h-p

**Rama** · `feat/e07-adjuntos-respaldo`  
**Dependencia** · E06 validada.  
**Rutas candidatas** · Cuaderno, módulo de almacenamiento local y estilos asociados.

| ID | Actividad | h-p |
|---|---|---:|
| A07.1 | Definir formatos permitidos, cuotas, tamaño máximo por archivo y total, política de duplicados y formato versionado de respaldo. Probar IndexedDB para archivos y separar sus registros del texto legado. | 4 |
| A07.2 | Implementar agregar, listar, recuperar y borrar adjuntos por práctica. Validar errores de permisos, cuota y archivos rechazados. | 6 |
| A07.3 | Implementar exportación e importación del respaldo completo, con validación previa, política explícita de conflictos y conservación del trabajo existente ante error. Mantener exportación Markdown/PDF. | 6 |
| A07.4 | Probar con archivos ficticios, recarga, respaldo restaurado en perfil limpio, archivos inválidos y reversión. | 4 |

**Cierre** · Un respaldo de prueba restaura texto y archivos en un perfil limpio. Un respaldo inválido o una operación fallida conserva lo que ya estaba guardado. La interfaz explica el alcance local y el traslado manual. Se mantiene la posibilidad de regresar a E06 y recuperar las notas legadas.

### E08 Validación acumulada y preparación de entrega · 7 h-p

**Rama** · `chore/e08-validacion-entrega`  
**Rutas candidatas** · Plan y documentación de ejecución. Cualquier defecto funcional se registra y corrige mediante un commit local acotado.

| ID | Actividad | h-p |
|---|---|---:|
| A08.1 | Ejecutar la matriz completa en el SHA candidato. Probar rutas relativas bajo un subdirectorio equivalente al de un sitio de proyecto y verificar dependencias externas por separado. | 3 |
| A08.2 | Cerrar trazabilidad, horas reales, hallazgos residuales y evidencias. Preparar notas de versión y referencia de retorno. | 2 |
| A08.3 | Revisar contenido y archivos que integrarían una eventual publicación. Registrar decisión sobre alojamiento, visibilidad y responsable. | 2 |

**Cierre** · Todas las recomendaciones tienen evidencia o una excepción explícita. El SHA candidato queda identificado. La actualización única de GitHub ocurre después de aprobar este cierre. La publicación web se controla como acción independiente.

## 4. Presupuesto de tokens por sesión y registro de tiempo

Una **sesión** es una unidad de trabajo con alcance, entradas y evidencia de cierre definidos. Una etapa puede requerir varias sesiones dentro de la misma etapa y rama local. Al cerrar una sesión, registrar el estado y el próximo paso para retomar desde el commit o diff correspondiente.

Para cada sesión, estimar **O**, **M** y **P** como escenarios optimista, más probable y pesimista de tokens. Calcular **PERT = (O + 4M + P) / 6**. Contabilizar entrada y salida acumuladas de todas las llamadas de la sesión, incluidas lecturas de código, resultados de herramientas que regresan al modelo y verificaciones. Si el reporte distingue tokens de caché o razonamiento, registrar esas categorías y usar el total reportado sin duplicarlas. Estos valores iniciales son presupuestos de planificación. Se recalibran con las primeras sesiones medidas.

| Sesión | Alcance de trabajo | O | M | P | PERT tokens |
|---|---|---:|---:|---:|---:|
| S00.1 | E00 · Inventario, pruebas de línea base y registro | 8 000 | 14 000 | 26 000 | 15 000 |
| S01.1 | E01 · Portada, tutorial y verificación visual | 9 000 | 16 000 | 29 000 | 17 000 |
| S02.1 | E02 · Acceso directo, selección y cuaderno | 12 000 | 21 000 | 36 000 | 22 000 |
| S03.1 | E03 · Seis términos, ejemplos y revisión | 9 000 | 15 000 | 27 000 | 16 000 |
| S04.1 | E04 · PR-05 y PR-06 | 8 000 | 14 000 | 26 000 | 15 000 |
| S04.2 | E04 · PR-07 y validación de las tres guías | 7 000 | 12 000 | 23 000 | 13 000 |
| S05.1 | E05 · Ficha de marca y selección de activos | 8 000 | 15 000 | 28 000 | 16 000 |
| S05.2 | E05 · Aplicación y revisión de seis páginas | 12 000 | 21 000 | 36 000 | 22 000 |
| S06.1 | E06 · Índice, compatibilidad y pruebas del cuaderno | 12 000 | 21 000 | 36 000 | 22 000 |
| S07.1 | E07 · Diseño, almacenamiento y adjuntos | 14 000 | 23 000 | 38 000 | 24 000 |
| S07.2 | E07 · Respaldo, restauración y regresión | 14 000 | 24 000 | 40 000 | 25 000 |
| S08.1 | E08 · Pruebas acumuladas y preparación de entrega | 10 000 | 17 000 | 30 000 | 18 000 |
| **Total** | **12 sesiones** | **123 000** | **213 000** | **375 000** | **225 000** |

El bloque inicial S00.1–S02.1 tiene un presupuesto PERT de **54 000 tokens** en tres sesiones. Las **91 h-p** de las tablas de actividades son una referencia independiente para disponibilidad del equipo y registro de tiempo. La espera por revisión institucional se registra aparte como tiempo de calendario.

- Al abrir la sesión, registrar alcance, SHA, modelo y presupuesto inicial O/M/P. Cargar únicamente las fuentes necesarias para las actividades previstas.
- Al cerrar, registrar tokens reales de entrada y salida y la fuente de medición. Si la plataforma no muestra el consumo, marcar **no medido**. Una aproximación, si existe, se etiqueta por separado.
- Calcular **desvío = tokens reales − tokens PERT** y **proyección al cierre = tokens reales acumulados + PERT del saldo**. Conservar el presupuesto inicial.
- Si se llega al 80 % de PERT con trabajo significativo pendiente, guardar un punto de control y decidir si conviene dividir el saldo en otra sesión. Reestimar si el consumo supera PERT en 25 % o si cambia el alcance.
- Registrar horas efectivas de implementación, revisión y pruebas en la bitácora local, separadas del consumo de tokens.

## 5. Matriz de pruebas

| ID | Prueba | Etapas | Resultado esperado |
|---|---|---|---|
| T01 | Abrir portada en perfil limpio, escritorio y móvil. | E00–E02, E08 | Propósito, acción principal y accesos secundarios visibles. |
| T02 | Llegar a PR-01 desde portada, elegir PR-03, volver por enlace directo y recargar. | E02, E08 | Coinciden URL o ruta, práctica visible y cuaderno. |
| T03 | Abrir enlaces a herramientas y biblioteca por hash desde portada y tutorial. | E00, E02, E08 | Se activa la pestaña correspondiente. |
| T04 | Recorrer con teclado, zoom al 200 % y viewport de 360 px. | E01–E08 según el cambio | Foco visible, controles utilizables y contenido esencial legible. |
| T05 | Encontrar los seis términos en contexto y ejecutar los ejemplos guiados. | E03, E04, E08 | Cada explicación está donde se necesita y las salidas son verificables. |
| T06 | Comparar encabezado, pie, proporción, variantes y fondos con ficha gráfica. | E05, E08 | La aplicación coincide con las reglas de la ficha. |
| T07 | Sembrar notas legadas, editar, recargar, borrar una práctica y exportar. | E00, E06–E08 | Se conserva el trabajo previo y el borrado afecta solo la práctica elegida. |
| T08 | Adjuntar archivos, restaurar respaldo en perfil limpio y probar uno inválido. | E07, E08 | Se recuperan notas y adjuntos. Un fallo no borra información. |
| T09 | Usar los pasos locales con internet desactivado y activar las salidas de respaldo. | E00, E04, E08 | Las dependencias externas se distinguen de los recursos locales. |
| T10 | Probar modo facilitador, accesibilidad, selector de idioma y rutas bajo subdirectorio. | E00, E02, E05, E08 | Se mantienen las funciones existentes y cargan los activos relativos. |

Por cada ejecución, registrar ID de prueba, commit, entorno, resultado, fecha y evidencia. Usar los estados **pasa**, **falla**, **bloqueada** o **no aplica**, con motivo para los últimos tres.

## 6. Bitácora de implementación

| Etapa | Estado | Rama local | SHA de etapa | SHA acumulado | M h-p | Real h-p | Evidencia o bloqueo |
|---|---|---|---|---|---:|---:|---|
| E00 | Integrada en local | `levelup/implementacion` | `63eb624` | `63eb624` | 5 | — | [Línea base y pruebas](LEVELUP_E00_LINEA_BASE.md). S00.1 PERT 15 000 tokens, consumo no medido. |
| E01 | Integrada en local | `feat/e01-portada` | Commit E01 | Commit E01 | 7 | — | S01.1 · 17 000 tokens PERT, consumo no medido. T01 y prueba focalizada de T04 pasan. |
| E02 | Pendiente | — | — | — | 9 | — | — |
| E03 | Pendiente | — | — | — | 8 | — | — |
| E04 | Pendiente | — | — | — | 10 | — | — |
| E05 | Pendiente | — | — | — | 13 | — | Confirmar edición de guía y tratamiento de las marcas |
| E06 | Pendiente | — | — | — | 12 | — | — |
| E07 | Pendiente | — | — | — | 20 | — | Definir formatos, cuotas y restauración |
| E08 | Pendiente | — | — | — | 7 | — | Definir alojamiento si corresponde |

**Formato para registrar una actividad**

~~~text
Etapa / actividad / requisito:
Rama local / SHA de partida:
Responsable / revisor:
Archivos y alcance:
Sesión / modelo / presupuesto O, M, P y PERT / tokens reales / fuente de medición:
Horas-persona previstas / horas-persona reales / saldo:
Pruebas, entorno y resultado:
Evidencia:
Decisiones y desviaciones:
SHA de etapa / SHA acumulado:
Forma de reversión y verificación posterior:
~~~

### E01 Registro de validación local

- R01 y R02. Portada con una explicación breve, una acción principal y una ruta de tres pasos. El directorio conserva acceso a herramientas, presentaciones y biblioteca. El cronograma sigue accesible en la navegación.
- T01. En el navegador integrado, «Empiece aquí» abrió la sección de prácticas y el Plan B de PR-01 abrió correctamente. El enlace de la portada al tutorial y el regreso del tutorial a prácticas funcionaron.
- T04 focalizada. Se activó el enlace principal con Enter. Con un viewport solicitado de 360 × 800 px, el enlace quedó dentro del área visible y abrió la sección de prácticas. Queda pendiente la comprobación global al 200 %.
- H00-03. Se retiró la métrica del 100 % de la portada inicial. Las afirmaciones del pie institucional quedan fuera de E01.
- Traspaso a E02. El enlace principal aún lleva a la sección general. La activación directa de PR-01 y la precedencia sobre la selección previa corresponden a E02.
