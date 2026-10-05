# Control de uso y cambios del proyecto

## Identificación

- Proyecto: Team Up 2 Level Up Inteligencia Artificial en la Enseñanza del Inglés Técnico
- Institución: Instituto Nacional de Aprendizaje, Núcleo Comercio y Servicios, Subsector de Idiomas
- Fecha del taller: 6 de octubre de 2026
- Carpeta de trabajo: Version 2.0
- Versión funcional documentada al abrir esta bitácora: 2.5
- Fecha de apertura de esta bitácora: 29 de septiembre de 2026
- Estado: control operativo activo

## Propósito de este archivo

Este archivo es la bitácora operativa continua del proyecto. Debe registrar cada cambio realizado en el portal, los documentos metodológicos, los materiales del taller y los recursos de apoyo. También debe indicar el funcionamiento afectado, la evidencia de validación, las decisiones tomadas, las incidencias conocidas y el estado de publicación.

Este control complementa `master_control.md`. El archivo maestro describe la arquitectura y las decisiones de diseño del sistema; esta bitácora documenta qué se cambia en la práctica, cuándo, por qué, con qué resultado y cómo se comprobó.

## Fuentes de referencia iniciales

La línea base de este control se estableció mediante la lectura de:

1. `master_control.md`, especificación de arquitectura, funcionamiento, contenidos pedagógicos y decisiones técnicas del portal v2.5.
2. `INA-Taller-IA-Idiomas-6oct2026.docx`, planteamiento metodológico oficial del taller y su alineación declarada con el portal v2.5.

Si ambos archivos presentan información distinta, la discrepancia debe anotarse en esta bitácora y resolverse de forma expresa. No se debe asumir automáticamente que uno reemplaza al otro.

## Resumen funcional de la línea base

El proyecto es un ecosistema web multipágina que apoya una jornada virtual para 254 personas docentes. La metodología combina demostraciones conducidas, siete prácticas individuales, registros en un cuaderno local, devolución pública y planes de contingencia. No se contemplan salas simultáneas de trabajo ni la entrega de productos individuales a una plataforma.

### Componentes principales

| Componente | Archivo o ubicación | Función esperada |
| --- | --- | --- |
| Portal principal y taller en vivo | `index.html` | Entrada al ecosistema, cronograma, selector de las siete prácticas, temporizador y acceso al Plan B. |
| Suite de herramientas | `herramientas.html` | Asistente de instrucciones, probador de rúbricas, casos ocupacionales y visor de presentaciones. |
| Biblioteca y evidencia | `biblioteca.html` | Consulta del corpus RAG, evidencia empírica y marco de gobernanza. |
| Simulador socrático | `simulador.html` | Práctica escrita guiada mediante un chatbot de tutoría socrática. |
| Glosario | `glosario.html` | Explicación accesible de conceptos esenciales de inteligencia artificial. |
| Ruta pedagógica | `img/ruta-pedagogica-cronograma.svg` | Representación visual de la agenda y del ciclo metodológico. |
| Documento metodológico | `INA-Taller-IA-Idiomas-6oct2026.docx` | Programa, objetivos, agenda, metodología, requisitos, evaluación y salvaguardas. |
| Control arquitectónico | `master_control.md` | Especificación general, decisiones técnicas y guía de mantenimiento. |

### Reglas metodológicas que deben preservarse

- Siete prácticas identificadas como PR-01 a PR-07.
- Ciclo estándar de 25 minutos: 8 minutos de demostración, 12 minutos de práctica, 3 minutos de guardado personal en el cuaderno local y 2 minutos de devolución.
- Una sola práctica activa y visible a la vez en el portal.
- Uso de objetivos reales de clase o de los ocho casos ocupacionales del INA.
- Toda instrucción debe especificar rol, tarea u objetivo, formato, restricciones y contexto ocupacional.
- Uso exclusivo de muestras sintéticas durante el taller.
- Prohibición de ingresar datos personales o identificables de estudiantes en servicios de inteligencia artificial.
- Juicio pedagógico final a cargo de la persona docente.
- Disponibilidad de una salida de respaldo o Plan B para cada práctica.
- Funcionamiento accesible y entrega anticipada de materiales.

## Jerarquía de control

Para evitar cambios aislados o contradictorios, cada actualización debe revisar las capas que correspondan:

1. Planteamiento metodológico y agenda oficial en el documento Word.
2. Arquitectura y reglas generales en `master_control.md`.
3. Contenido visible en las páginas HTML.
4. Comportamiento e interacción en los archivos JavaScript.
5. Presentación visual, accesibilidad y adaptación responsive en los archivos CSS.
6. Materiales derivados en las carpetas numeradas del proyecto.
7. Evidencia de validación y registro final en este archivo.

Un cambio no se considera cerrado si afecta varias capas y solo se actualiza una de ellas.

## Procedimiento obligatorio para cada cambio

1. Asignar un identificador consecutivo con el formato `CAM-AAAA-MM-DD-NN`.
2. Describir la necesidad o solicitud sin modificar su alcance.
3. Identificar los archivos y funciones que pueden verse afectados.
4. Conservar los originales o confirmar que existe una copia recuperable cuando el cambio sea de alto impacto.
5. Realizar la modificación de forma local y limitada al alcance autorizado.
6. Verificar contenido, funcionamiento, enlaces, accesibilidad y presentación visual según corresponda.
7. Registrar el resultado real de las comprobaciones y sus límites.
8. Indicar expresamente si el cambio quedó local, fue preparado para publicación o fue publicado.
9. Anotar cualquier pendiente, riesgo, reversión o decisión que requiera seguimiento.

## Estados permitidos

| Estado | Significado |
| --- | --- |
| Propuesto | Cambio registrado, todavía no autorizado o no iniciado. |
| En curso | Modificación activa que aún no ha completado sus validaciones. |
| En revisión | Implementación terminada y pendiente de verificación o aprobación. |
| Validado localmente | Comprobaciones locales satisfactorias; no implica publicación. |
| Publicado | Cambio desplegado y verificado en el destino de publicación. |
| Bloqueado | No puede continuar sin una decisión, insumo o condición externa. |
| Revertido | Cambio retirado y estado anterior restablecido. |

## Registro de cambios

| ID | Fecha y hora | Solicitud o motivo | Archivos afectados | Funcionamiento afectado | Validaciones realizadas | Estado | Responsable | Publicación y observaciones |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAM-2026-09-29-01 | 29/09/2026 | Crear un control continuo de uso, cambios y funcionamiento del proyecto después de estudiar el archivo maestro y el documento metodológico. | `CONTROL_USO_PROYECTO.md` | Trazabilidad documental del proyecto. | Lectura de `master_control.md`; extracción y revisión del contenido de `INA-Taller-IA-Idiomas-6oct2026.docx`; comprobación del inventario principal de la carpeta Version 2.0. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | Archivo nuevo local. No se modificó ni publicó el sitio web. |
| CAM-2026-09-29-02 | 29/09/2026 | Actualizar las presentaciones del curso con información de la Biblioteca RAG y convertirlas en páginas HTML con el lenguaje visual del portal. | `02_Presentaciones/INA_F2-P2.1_Bloque1_PanoramaMetodo_v2.html`; `02_Presentaciones/INA_F2-P2.3_Bloque3_ModalidadEducativa_v2.html`; `02_Presentaciones/INA_F2-P2.4_Bloque4_IALocal_v2.html`; `02_Presentaciones/presentaciones.css`; `02_Presentaciones/presentaciones.js`; `02_Presentaciones/presentaciones-datos.js`; `02_Presentaciones/README_PRESENTACIONES_HTML.md` | Presentaciones de los bloques 1, 3 y 4; navegación 16:9; notas; fuentes; vista general; impresión. | Revisión de los guiones y PPTX existentes; contraste con documentos del corpus; validación de sintaxis JS y HTML; comprobación de 18, 14 y 10 láminas; revisión visual de las tres presentaciones; prueba de desbordamiento en todas las láminas; prueba de teclado, notas, fuentes y vista general. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | Archivos nuevos locales, pendientes de revisión. No se modificó `index.html`, la navegación del portal ni la publicación. |
| CAM-2026-09-29-03 | 29/09/2026 | Sustituir en el portal las versiones basadas en PPTX/PNG por las presentaciones HTML, ajustar el espacio del visor y actualizar los hipervínculos sin alterar la arquitectura ni el diseño general. | `index.html`; `herramientas.html`; `js/slide-viewer.js`; `css/components.css`; `css/modern-portal.css`; `02_Presentaciones/presentaciones.js`; `02_Presentaciones/README_PRESENTACIONES_HTML.md`; `02_Presentaciones/README.md`; `master_control.md`; `CONTROL_USO_PROYECTO.md` | Acceso desde portada; visor embebido 16:9; selector de bloques; navegación, contador, notas, miniaturas textuales, pantalla completa y apertura independiente. | Carga HTTP local sin recursos faltantes en las páginas revisadas; revisión visual del visor; cambio entre bloques 1, 3 y 4; conteos 18, 14 y 10; sincronización de la navegación interna con el contador y el enlace externo; comprobación del marcador del Bloque 2; verificación de los dos accesos desde `index.html`. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | Cambio únicamente local. Los PPTX y PNG históricos se conservaron como respaldo; no se publicó ni se modificó ningún repositorio remoto. |
| CAM-2026-09-29-04 | 29/09/2026 | Aplicar las mejoras urgentes de la auditoría y sustituir la entrega por un trabajo acumulativo que permanezca en la computadora de cada participante. | `index.html`; páginas secundarias; `js/local-notebook.js`; `js/app.js`; `js/timer.js`; `js/tutor-mode.js`; `js/chat-simulator.js`; `js/a11y-translate.js`; `css/components.css`; infografías; consignas; presentación HTML del Bloque 1; documento metodológico; controles del proyecto. | Cuaderno local por PR-01–PR-07, autoguardado, descarga Markdown, modo facilitación, temporizadores resistentes a pestañas en segundo plano, rutas relativas, accesibilidad y seguridad del simulador. | Sintaxis JS; parseo HTML; comprobación automatizada en Chrome local de rutas, persistencia por práctica, cambio de vista y temporizador; renderizado e inspección de las 12 páginas del DOCX. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | Cambio solo local. Bloque 2 y publicación/GitHub permanecen sin cambios. |
| CAM-2026-09-30-01 | 30/09/2026 | Integrar los recursos nuevos de OCDE 2026 y voz con criterio de verificabilidad. | `02_Presentaciones/presentaciones-datos.js`; `index.html`; `herramientas.html`; `biblioteca.html`; `js/app.js`; `02_Presentaciones/README_PRESENTACIONES_HTML.md`; `master_control.md`; `CONTROL_USO_PROYECTO.md` | Dos láminas de contexto OCDE en Bloque 1; comparación prudente de arquitecturas de voz y criterios observables para PR-06 en Bloque 3; ruta de datos de voz en Bloque 4; enlaces complementarios diferenciados del corpus RAG. | Verificación contra la nota país y el informe general de OCDE; eliminación de afirmaciones sin fuente; comprobación de sintaxis, conteos, fuentes, rutas y desbordamiento visual. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | No incluye cifras de latencia, efectos psicológicos, capacidades emocionales ni conclusiones jurídicas no verificadas. No se publicó ni se modificó ningún repositorio remoto. |
| CAM-2026-09-30-02 | 30/09/2026 | Crear un servicio final de orientación que explique cómo funciona el sitio, sus contenidos y su objetivo pedagógico. | `tutorial.html`; `css/tutorial.css`; `js/tutorial.js`; navegación y pies de `index.html`, `herramientas.html`, `biblioteca.html`, `simulador.html` y `glosario.html`; `master_control.md`; `CONTROL_USO_PROYECTO.md` | Tutorial de Uso con mapa SVG enlazado, recorrido interactivo de cinco pasos, rutas según necesidad, tabla de servicios y ruta rápida para primera visita. | Parseo HTML, sintaxis JavaScript, verificación de siete destinos del mapa, cinco pasos interactivos, navegación con teclado, menú móvil, revisión responsive sin desbordamiento y comprobación visual en Chrome. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | Desarrollo exclusivamente local. No se publicó ni se modificó ningún repositorio remoto. |
| CAM-2026-09-30-03 | 30/09/2026 | Integrar plenamente el tutorial al sistema de idioma y accesibilidad, despejar el menú principal y corregir el traslape del mapa pedagógico. | `tutorial.html`; `css/tutorial.css`; `js/a11y-translate.js`; muelle flotante de `index.html`, `herramientas.html`, `biblioteca.html`, `simulador.html` y `glosario.html`; `master_control.md`; `CONTROL_USO_PROYECTO.md` | Panel completo de accesibilidad y traducción en el tutorial; acceso al tutorial desde el muelle flotante; cinco nodos centrales del mapa separados. | Comprobación visual en navegador; apertura y cierre del panel; aplicación de modo oscuro y restablecimiento; traducción del título y actualización de `lang`; cálculo de cajas SVG sin intersecciones; revisión del muelle en todas las páginas. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | Desarrollo exclusivamente local. No se publicó ni se modificó ningún repositorio remoto. |
| CAM-2026-10-01-01 | 01/10/2026 | Incorporar evaluación cualitativa sin eliminar el probador cuantitativo y explicitar que la agenda transcurre de 8:00 a. m. a 3:00 p. m. | `herramientas.html`; `js/rubric-tester.js`; `css/components.css`; `index.html`; SVG de cronograma en español e inglés; `js/a11y-translate.js`; documentos de control. | Selector de modalidad; perfil cualitativo por cuatro criterios; retroalimentación narrativa sin nota; horario institucional visible en cabecera y cronograma. | Prueba funcional de ambas modalidades con cuatro criterios; retorno correcto a 16/16; comprobación de perfil cualitativo sin puntaje; revisión del horario en cabecera, descripción y SVG; parseo correcto de HTML y ambos SVG. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | Se conservó íntegramente la modalidad cuantitativa. Cambio exclusivamente local, sin publicación ni modificación remota. |
| CAM-2026-10-05-01 | 05/10/2026 | Completar la presentación HTML del Bloque 2 y sustituir su marcador pendiente antes del lanzamiento. | `02_Presentaciones/INA_F2-P2.2_Bloque2_UsosNoConvencionales_v2.html`; `02_Presentaciones/presentaciones-datos.js`; `js/slide-viewer.js`; documentos de presentaciones y control. | Dieciocho láminas sobre PR-02, PR-03 y PR-04; notas; fuentes; navegación; miniaturas; contador y enlace independiente sincronizados. | Parseo HTML; carga HTTP local; revisión visual; recorrido de 18 láminas sin desbordamiento del lienzo; selector del portal; contador y enlace sincronizados; consola sin errores. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | Cambio exclusivamente local. No se publicó ni se modificó ningún repositorio remoto. |
| CAM-2026-10-05-02 | 05/10/2026 | Establecer a Agustín Gómez Meléndez como único facilitador durante toda la jornada y reconocer a Hannia León Fuentes como asesora académica. | Portal, visor de presentaciones, cronograma SVG en español e inglés, modo de facilitación, fichas de práctica, pies y documentos de control. | Atribución de los cuatro bloques y siete prácticas; equipo académico; mensajes operativos y traducciones. | Búsqueda transversal de etiquetas HL y referencias de cofacilitación; parseo de HTML y SVG; verificación funcional y visual local. | Validado localmente | Codex, por solicitud de Agustín Gómez Meléndez | Hannia permanece reconocida como asesora académica. Cambio exclusivamente local, sin publicación remota. |

### CAM-2026-09-29-04 Cuaderno local y mejoras urgentes de usabilidad

- Metodología: los productos no se suben ni se envían. Cada persona trabaja en un cuaderno acumulativo almacenado en su navegador y descarga una copia `.md`.
- Funcionamiento: cada práctica conserva un registro independiente; el cambio de práctica guarda el contenido activo; el guardado automático se ejecuta tras escribir y también antes de cerrar.
- Facilitación por Teams: se restauró el selector visible Participante/Facilitación y se actualizaron los avisos copiables.
- Robustez: los temporizadores usan tiempo real transcurrido y no dependen de contar intervalos; el simulador inserta mensajes como texto seguro.
- Accesibilidad: enlaces para saltar al contenido, etiquetas de campos, estados vivos de los temporizadores y trampa/retorno de foco del panel de accesibilidad.
- Límite: el almacenamiento pertenece al navegador y dispositivo actual; por eso la interfaz recomienda descargar antes de cerrar o cambiar de computadora.
- Reversión: retirar `js/local-notebook.js` y su sección HTML; restaurar la terminología anterior desde las copias históricas si la metodología institucional vuelve a exigir entrega.

### CAM-2026-09-29-03 Integración de presentaciones HTML en el portal

- Solicitud original: sustituir las secciones de PPTX por las versiones HTML, ajustar los espacios de despliegue, actualizar los hipervínculos y documentar el cambio.
- Objetivo: proyectar las presentaciones actualizadas desde el portal sin rehacer la navegación ni el sistema visual existente.
- Alcance autorizado: archivos locales de `Version 2.0`; no incluyó despliegue ni eliminación de respaldos.
- Cambios realizados: el visor usa un `iframe` 16:9; los bloques 1, 3 y 4 cargan sus archivos HTML; el contador, las notas, la lámina activa y el enlace “Abrir en pestaña” se sincronizan; las miniaturas PNG fueron sustituidas por accesos numerados con títulos; la portada incorpora dos enlaces a `herramientas.html#slides`; el Bloque 2 mantiene un marcador explícito de contenido pendiente.
- Diseño y accesibilidad: se conservaron colores, botones y estructura del portal; se añadieron estados `aria-pressed`, títulos accesibles del marco, foco mediante botones reales, ocultamiento correcto del enlace no disponible y reglas responsive para visor, acciones y miniaturas.
- Resultado: integración funcional local de 42 láminas HTML, sin dependencia operativa de las carpetas `qa_block*`.
- Límites de la verificación: la revisión se realizó en navegador local de escritorio; pantalla completa depende del permiso normal del navegador. No se probó el sitio publicado, dispositivos físicos ni la presentación final del Bloque 2, porque todavía no está disponible.
- Forma de reversión: restaurar el marcado anterior del visor en `herramientas.html`, la versión previa de `js/slide-viewer.js` y las reglas antiguas del bloque “Visor Integrado de Diapositivas” en `css/components.css`. Los archivos PPTX/PNG originales permanecen conservados.

## Plantilla para nuevos cambios

Copiar una fila en la tabla anterior y completar todos sus campos. Cuando el cambio requiera una explicación amplia, añadir una ficha debajo con esta estructura:

### CAM-AAAA-MM-DD-NN Título breve

- Solicitud original:
- Objetivo:
- Alcance autorizado:
- Archivos revisados:
- Archivos modificados:
- Cambios realizados:
- Funcionamiento esperado:
- Validación de contenido:
- Validación funcional:
- Validación visual:
- Validación de accesibilidad:
- Resultado:
- Límites de la verificación:
- Estado de publicación:
- Pendientes:
- Decisiones asociadas:
- Forma de reversión:

## Registro de funcionamiento y pruebas

| ID de prueba | Fecha | Componente | Escenario comprobado | Resultado esperado | Resultado observado | Estado | Evidencia o límite |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PRU-2026-09-29-01 | 29/09/2026 | Documentación de control | Existencia y lectura de las dos fuentes base solicitadas. | Ambos archivos disponibles y legibles. | `master_control.md` y `INA-Taller-IA-Idiomas-6oct2026.docx` fueron localizados y revisados. | Conforme | Revisión documental; no constituye prueba funcional ni visual del portal. |
| PRU-2026-09-29-02 | 29/09/2026 | Presentaciones HTML | Carga y conteo de láminas. | Bloque 1 con 18, Bloque 3 con 14 y Bloque 4 con 10 láminas. | Los tres conteos coinciden y todas las láminas incluyen título, contenido y notas. | Conforme | Prueba local sobre los nuevos archivos; todavía no están integrados al portal. |
| PRU-2026-09-29-03 | 29/09/2026 | Diseño responsive de presentaciones | Ninguna lámina debe desbordar el lienzo 16:9 en la vista compacta de revisión. | Contenido contenido dentro del lienzo. | Se revisaron las 42 láminas después de ajustar tablas, tarjetas y composiciones densas; no quedaron desbordamientos del cuerpo. | Conforme | Revisión visual y medición local en navegador. |
| PRU-2026-09-29-04 | 29/09/2026 | Interacción de presentaciones | Navegación, notas, fuentes, vista general y progreso funcionales. | Los controles responden sin depender del portal. | Navegación por teclado, atajos N, S y O, paneles y contador verificados localmente. | Conforme | La función de pantalla completa depende del permiso normal del navegador. |
| PRU-2026-09-29-05 | 29/09/2026 | Integración del visor | Cargar `herramientas.html#slides` y seleccionar los bloques disponibles. | Los bloques 1, 3 y 4 deben cargar sus HTML y mostrar 18, 14 y 10 láminas. | Los tres archivos cargaron dentro del visor y sus conteos coincidieron. | Conforme | Servidor HTTP local y revisión en navegador de escritorio. |
| PRU-2026-09-29-06 | 29/09/2026 | Sincronización del visor | Avanzar desde los controles internos de la presentación. | El contador del portal y el enlace independiente deben seguir la lámina activa. | Al pasar de la lámina 1 a la 2 en el Bloque 1, el portal mostró “Lámina 2 de 18” y actualizó el enlace a `#2`. | Conforme | Comunicación local controlada mediante `postMessage`; se valida también la fuente del mensaje y el bloque activo. |
| PRU-2026-09-29-07 | 29/09/2026 | Bloque 2 pendiente | Seleccionar el bloque sin presentación HTML final. | Mostrar el estado pendiente sin enlace obsoleto ni contenido inventado. | Se mostró la estructura de tres ciclos, se ocultó el enlace de apertura independiente y se mantuvieron tres partes navegables de apoyo. | Conforme | La presentación final depende de un insumo externo de la facilitadora. |
| PRU-2026-09-29-08 | 29/09/2026 | Portada y rutas | Revisar los accesos a presentaciones desde `index.html`. | Hero y directorio deben dirigir a `herramientas.html#slides`. | Ambos enlaces aparecen con nombre accesible y destino correcto; el hash abre directamente el submódulo de presentaciones. | Conforme | Verificación local; no implica publicación remota. |
| PRU-2026-09-29-09 | 29/09/2026 | Cuaderno local | Escribir en PR-01, cambiar a PR-02 y volver a PR-01. | Cada práctica debe conservar su contenido sin envío externo. | Chrome recuperó el texto de PR-01 desde `localStorage` y mantuvo entradas separadas. | Conforme | Prueba HTTP local; el navegador/dispositivo delimita la persistencia. |
| PRU-2026-09-29-10 | 29/09/2026 | Navegación y controles | Abrir las cinco páginas, activar modo facilitación e iniciar/pausar el temporizador. | Rutas 200, cockpit visible y conteo activo. | Todas las rutas respondieron; el panel apareció y el temporizador avanzó. | Conforme | Chrome local automatizado; favicon ausente sin impacto funcional. |
| PRU-2026-09-29-11 | 29/09/2026 | Documento metodológico | Renderizar el DOCX actualizado. | Texto coherente y diseño sin recortes. | Las 12 páginas se renderizaron e inspeccionaron; no se observaron desbordamientos ni pérdida de contenido. | Conforme | Revisión visual local de todas las páginas. |

## Registro de incidencias

| ID | Fecha | Componente | Descripción | Impacto | Acción tomada | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| INC-2026-09-29-01 | 29/09/2026 | Coherencia de contenidos | El control maestro mencionaba `300+ Participantes`, mientras el documento metodológico establece una población de 254 personas docentes. | La interfaz mostraba una cifra distinta de la población oficial del taller. | Se actualizó la interfaz y el control maestro a 254. | Resuelto |
| INC-2026-09-29-02 | 29/09/2026 | Evidencia de la biblioteca | El control maestro incluye afirmaciones sobre un componente PISA de inglés para Costa Rica y un estudio NYU Stern 2026. Estas afirmaciones requieren confirmación directa en las fuentes antes de presentarse como hechos públicos. | Riesgo de sobreafirmación en contenido pedagógico o público. | Se registra para auditoría de fuentes; no se modifica contenido en esta etapa. | Pendiente |
| INC-2026-09-29-03 | 29/09/2026 | Herramientas de la jornada | El documento metodológico indica que disponibilidad, compatibilidad, límites y condiciones de las plataformas deben verificarse nuevamente antes del taller. | Riesgo operativo por cambios recientes en aplicaciones, planes gratuitos o compatibilidad de dispositivos. | Programar comprobación final antes del 6 de octubre. | Pendiente |
| INC-2026-09-29-04 | 29/09/2026 | Corpus RAG | El inventario procesado contiene identificadores internos repetidos para tres pares de archivos distintos. | Las consultas que dependan solo del identificador interno pueden mezclar documentos o dificultar la trazabilidad. | Para las presentaciones se verificaron también nombre del archivo, sección y página, y se evitaron afirmaciones dependientes de esos pares ambiguos. Se recomienda corregir el corpus antes de una nueva indexación. | Pendiente |

## Registro de decisiones

| ID | Fecha | Decisión | Justificación | Componentes afectados | Estado |
| --- | --- | --- | --- | --- | --- |
| DEC-2026-09-29-01 | 29/09/2026 | Mantener esta bitácora separada de `master_control.md`. | Evita mezclar la especificación arquitectónica con el historial operativo diario y facilita auditar cambios, pruebas y publicaciones. | Toda la documentación y el mantenimiento futuro del proyecto. | Vigente |
| DEC-2026-09-29-02 | 29/09/2026 | Diferenciar siempre entre cambio local y cambio publicado. | Una modificación de archivos no demuestra que el sitio público haya sido actualizado. | Sitio web, documentos y entregables. | Vigente |
| DEC-2026-09-29-03 | 29/09/2026 | Conservar los PPTX y PNG como respaldo histórico, pero retirar su uso operativo del visor para los bloques 1, 3 y 4. | Facilita la reversión y evita eliminar materiales fuente mientras el portal adopta el formato HTML revisado. | `02_Presentaciones`, visor y documentación técnica. | Vigente |
| DEC-2026-09-29-04 | 29/09/2026 | Sustituir el formulario de entrega por un cuaderno local acumulativo y descargable. | Evita cuentas, cargas y tratamiento innecesario de productos individuales; deja a cada docente una evidencia reutilizable en su computadora. | Portal, metodología, consignas, facilitación y documento oficial. | Vigente |

## Lista de verificación antes de cerrar un cambio

- [ ] La solicitud y el alcance quedaron registrados.
- [ ] Se identificaron todos los archivos relacionados.
- [ ] La metodología y la agenda permanecen coherentes con el documento oficial.
- [ ] Las cifras, fechas, nombres y afirmaciones fueron verificadas en la fuente correspondiente.
- [ ] Los enlaces internos y archivos referenciados funcionan.
- [ ] La interacción JavaScript fue probada en las páginas afectadas.
- [ ] La presentación fue revisada en tamaños de pantalla pertinentes.
- [ ] Se comprobó navegación por teclado, foco visible, contraste y texto alternativo cuando corresponde.
- [ ] Los documentos Word modificados fueron renderizados y revisados visualmente.
- [ ] Las muestras y ejemplos no contienen datos personales reales.
- [ ] Existe Plan B cuando el cambio afecta una práctica del taller.
- [ ] Se documentaron limitaciones o pruebas no realizadas.
- [ ] Se registró si el resultado es local, está preparado para publicar o ya fue publicado.
- [ ] Se anotó la forma de reversión cuando corresponde.

## Pendientes iniciales de control

1. Confirmar en el ensayo final que la descarga del cuaderno se completa en los navegadores institucionales previstos.
2. Auditar las fuentes que sustentan todas las afirmaciones de PISA, inglés, inteligencia artificial y el estudio atribuido a NYU Stern.
3. Verificar antes del taller la disponibilidad actual, los límites gratuitos, los idiomas y la compatibilidad de ChatGPT, Claude, Gemini, AI Edge Gallery y Liquid Apollo.
4. Ejecutar una revisión funcional y visual completa del portal multipágina en el entorno de uso real.
5. Confirmar que las siete salidas Plan B, los ocho casos ocupacionales, el temporizador, el simulador y el cuaderno local están listos para la jornada.
6. Registrar en esta bitácora toda modificación futura antes de declararla terminada.

## Criterio de cierre del proyecto

El proyecto estará listo para uso en la jornada cuando la documentación metodológica, el portal, los materiales, las herramientas externas y los mecanismos de contingencia sean coherentes entre sí; todas las funciones críticas hayan sido probadas; las afirmaciones públicas tengan respaldo verificable; y las limitaciones conocidas hayan quedado registradas con una respuesta operativa.
