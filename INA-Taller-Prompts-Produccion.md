# Biblioteca de prompts para la producción de materiales
## Taller INA · "Team Up 2 Level Up" · 6 de octubre de 2026

Documento operativo. Cada prompt está listo para copiar y pegar. Los prompts se ejecutan por fases; cada fase depende de la anterior.

> **Estado de producción — 28 de agosto de 2026**
>
> Este archivo es la fuente autoritativa de requisitos para la producción. Se confirma la
> estructura de **siete prácticas**: seis ciclos estándar de 25 minutos y una práctica guiada
> de 12 minutos en el Bloque 4. El Bloque 3 contiene **dos ciclos estándar**, no tres.
>
> El programa en `INA-Taller-IA-Idiomas-6oct2026.docx` conserva todavía la distribución anterior
> de tres ciclos en el Bloque 3. Debe corregirse después de desarrollar y validar los materiales.
>
> La gestión del trabajo, las dependencias y los enlaces a entregables se mantienen en
> `00_Gestion/INA-Ruta-Maestra-Produccion.md`. Los archivos finales se organizan en las carpetas
> `01_` a `09_` de esta versión.

**Convenciones**
- `{{ }}` marca lo que usted debe sustituir antes de ejecutar.
- **Anteponer siempre el Bloque de contexto maestro (§0.1)** al prompt, salvo que se trabaje dentro de un proyecto ya configurado con §0.2, en cuyo caso basta el prompt.
- Nomenclatura de archivos: `INA_F<fase>-<código>_<nombre>_v<n>.<ext>` — por ejemplo `INA_F3-P3.3_MuestrasSinteticas_v1.md`.
- Herramienta sugerida por prompt: **C** = Claude o ChatGPT en texto largo · **G** = Gamma o Canva para diseño · **W** = herramienta con búsqueda web activada.
- En los prompts **W**, usar fuentes oficiales o documentación primaria, registrar la fecha de consulta y no completar vacíos con memoria del modelo.

**Orden de ejecución y dependencias**

| Fase | Contenido | Depende de | Fecha límite sugerida |
|---|---|---|---|
| 0 | Contexto maestro y configuración del proyecto | — | 1 sep |
| 1 | Instrumentos previos: encuesta, correos, kit, guías de instalación | 0 | 8 sep |
| 2 | Presentaciones de los cuatro bloques | 0, 3 | 20 sep |
| 3 | Materiales de práctica, muestras y ejemplos | 0 | 15 sep |
| 4 | Guiones de demostración en vivo | 3 | 22 sep |
| 5 | Adaptaciones a LESCO, portugués y francés | 3 | 22 sep |
| 6 | Instrumentos de evaluación y de informe | 1 | 25 sep |
| 7 | Operación de la sesión: guiones, chat, contingencias | 2, 3, 4 | 29 sep |
| 8 | Verificación y auditoría de todo lo producido | todas | 2 oct |

**Decisión operativa para esta biblioteca**

El borrador metodológico combina siete y ocho ventanas y asigna tres ciclos de 25 minutos al Bloque 3, aunque ese bloque dura 60 minutos. Para que la producción de materiales sea internamente coherente y ejecutable, esta biblioteca adopta **siete prácticas**:

1. Bloque 1: instrucción completa (ciclo estándar de 25 minutos).
2. Bloque 2: tres ciclos estándar de 25 minutos.
3. Bloque 3: dos ciclos estándar de 25 minutos: (3.1) secuencia didáctica **con su rúbrica** y prueba de esfuerzo; (3.2) práctica oral con modo de voz. Los 10 minutos restantes se destinan a encuadre, comparación de herramientas y cierre.
4. Bloque 4: una práctica guiada de 12 minutos con modelo local, seguida de microentregable y cierre; no se presenta como ciclo estándar de 25 minutos.

Esta decisión prevalece en todos los prompts y listas de verificación del presente archivo. Si la coordinación del INA aprueba otra distribución, debe modificarse primero el §0.1 y después regenerarse todo material dependiente.

---

# Fase 0. Contexto y configuración

## 0.1 Bloque de contexto maestro

Guárdelo como archivo y adjúntelo, o péguelo al inicio de cada prompt.

```
CONTEXTO DEL ENCARGO

Actividad: jornada de capacitación docente del Subsector de Idiomas del Núcleo Comercio
y Servicios del Instituto Nacional de Aprendizaje (INA) de Costa Rica, dentro de la semana
"Team Up 2 Level Up".
Fecha: martes 6 de octubre de 2026, de 8:00 a. m. a 3:00 p. m., hora de Costa Rica.
Recesos: 8:30-9:00 a. m. y almuerzo de 12:00 m. d. a 1:00 p. m.
Modalidad: virtual por Microsoft Teams, formato de seminario en línea con práctica
simultánea. NO hay salas de trabajo en grupo.

Participantes: 254 personas docentes de las 9 Unidades Regionales del INA.
246 imparten inglés, 4 LESCO, 2 portugués y 2 francés. Enseñan a población adulta en
formación técnica y ocupacional (turismo, atención al cliente, servicios empresariales,
centros de contacto, comercio). Alfabetización digital heterogénea; muchas personas nunca
han usado IA generativa de forma sistemática.

Facilitación:
- Agustín Gómez Meléndez (UNED, Vicerrectoría de Investigación - OMiPYME; UCR - CIOdD),
  responsable del 100% de la jornada e investigador en gobernanza de IA, tecnologías educativas
  y políticas públicas.

Asesoría académica:
- Hannia León Fuentes (Universidad de Costa Rica, PROTEA).

Perfiles institucionales confirmados:
- Hannia León Fuentes es magíster en Ciencias de la Educación con énfasis en Administración
  Educativa por la UCR y magíster en Ciencias de la Educación con énfasis en Desarrollo Cognitivo
  por el Tecnológico de Monterrey. Es licenciada en Docencia por la UNED y bachiller en Enseñanza
  del Inglés por la UCR. Coordina PROTEA y la Licenciatura en Formación en Ambientes de Aprendizaje
  Mediados con Tecnologías de la UCR; desarrolla proyectos de recursos educativos abiertos,
  habilidades digitales e IA generativa, y cuenta con experiencia en el MEP, la UNED y la UCR.
- Agustín Gómez Meléndez (MSc., MSI.) es investigador de la Vicerrectoría de Investigación de la
  UNED, adscrito al Observatorio de MIPYMES, e investigador del Centro de Investigación Observatorio
  del Desarrollo de la UCR. Su trabajo articula ciencia de datos, tecnologías educativas, gobernanza
  de la inteligencia artificial y análisis de políticas públicas; participa en iniciativas de
  cooperación internacional en ética e IA y acompaña procesos de capacitación técnica y docente.

Estructura de la jornada:
- 8:00-8:30 apertura, rompehielos y encuadre metodológico.
- 8:30-9:00 receso y ventana técnica.
- 9:00-10:00 Bloque 1 (AGM): panorama y método; demostración del modo de voz de ChatGPT,
  Claude y Gemini aplicado a la enseñanza de lenguas; ciclo de práctica 1.
- 10:00-11:30 Bloque 2 (AGM): usos no convencionales de la IA en la enseñanza de inglés, en
  tres ventanas de práctica: (2.1) seguimiento y retroalimentación al aprendizaje; (2.2) apoyo anticipatorio
  ante errores frecuentes del estudiantado y desafíos de la docencia; (2.3) construcción de
  chatbots personalizados para práctica escrita.
- 11:30-12:00 preguntas y respuestas moderadas.
- 1:00-2:00 Bloque 3 (AGM): ChatGPT y Claude en modalidad educativa; dos ciclos: (3.1)
  secuencia didáctica con su rúbrica analítica y prueba de esfuerzo; (3.2) práctica oral con
  modo de voz.
- 2:00-2:30 Bloque 4 (AGM): IA local en el dispositivo con Google AI Edge Gallery y Liquid Apollo;
  criterios de selección de herramientas; adaptación a LESCO, portugués y francés.
- 2:30-3:00 preguntas, encuesta de salida y compromiso de aplicación a 30 días.

Método: seis ciclos estándar de 25 minutos = 8 min de demostración conducida + 12 min de
práctica individual cronometrada + 3 min de microentregable en un formulario único +
2 min de devolución pública. El Bloque 4 agrega una séptima práctica guiada de 12 minutos.
Micrófonos y cámaras cerrados; Q&A moderado como canal oficial de preguntas.

Toda instrucción de trabajo docente debe contener cinco componentes obligatorios:
(a) rol y objetivo, (b) nivel MCER y destreza, (c) contexto ocupacional del estudiantado
del INA, (d) formato de salida exacto, (e) restricciones de extensión, vocabulario y tiempo.

Regla de protección de datos, presente en cada punto de uso: no se ingresan nombres, números de
cédula, calificaciones, grabaciones ni datos identificables de personas estudiantes en
herramientas de IA. Las muestras de trabajo usadas en la jornada son sintéticas. Los resultados
de encuestas y formularios se reportan de forma agregada; no se publican cruces que permitan
reidentificar a colectivos pequeños por idioma o Unidad Regional.

Marco de referencia: Marco Común Europeo de Referencia (MCER), marco de competencias en IA
para docentes de UNESCO, Ley 8968 de protección de datos de Costa Rica, Estrategia Nacional
de Inteligencia Artificial de Costa Rica.

Registro y estilo: español de Costa Rica, tratamiento de usted, profesional y directo, sin
entusiasmo publicitario, sin anglicismos evitables y sin emojis. Español neutro-costarricense
para todo lo dirigido a docentes; el contenido de clase puede estar en inglés cuando
corresponda.
```

## 0.2 Configurar un proyecto de producción — **C**

Cree un proyecto dedicado en ChatGPT o Claude con estas instrucciones. Si esa función no está disponible en la cuenta institucional o gratuita, abra una conversación exclusiva para la producción, adjunte el contexto maestro y vuelva a adjuntarlo cuando el sistema pierda contexto. Un asistente personalizado es opcional, no un requisito.

```
Actúa como diseñador instruccional senior especializado en formación docente en línea a gran
escala y en enseñanza de lenguas extranjeras a población adulta en formación técnica.

Trabajarás sobre el contexto adjunto, que debes considerar autoritativo. Reglas permanentes:

1. No inventes datos, cifras, estudios ni citas. Si necesitas un dato que no está en el
   contexto, escribe [VERIFICAR: qué dato hace falta] y continúa.
2. Todo material debe ser ejecutable por una persona docente sin experiencia previa en IA,
   en el tiempo indicado, y sin conexión a soporte técnico.
3. Prioriza siempre lo que la persona hace por encima de lo que escucha. Si un contenido no
   deriva en una acción concreta del participante, recórtalo.
4. Marca de forma explícita los puntos donde la herramienta puede fallar y qué hacer entonces.
5. Español de Costa Rica, tratamiento de usted, sin emojis, sin lenguaje promocional.
6. Distingue hechos verificados, inferencias y recomendaciones. Toda afirmación empírica o
   técnica debe incluir fuente primaria y fecha, o la marca [VERIFICAR].
7. No incluyas datos personales, muestras reales ni información institucional confidencial.
8. Al final de cada entrega, agrega tres apartados breves: SUPUESTOS QUE HICE,
   PUNTOS DÉBILES DE ESTA VERSIÓN y QUÉ NECESITO PARA MEJORARLA.
```

---

# Fase 1. Instrumentos previos

## P1.1 Encuesta diagnóstica lista para Microsoft Forms — **C**

```
Produce la versión final de la encuesta diagnóstica previa al taller, lista para transcribir
a Microsoft Forms.

Base: 11 preguntas que cubren unidad regional, idioma que imparte, años de experiencia,
frecuencia de uso de IA, herramientas ya utilizadas, cuatro reactivos Likert de autoeficacia
(formular instrucciones, evaluar calidad lingüística, detectar errores y sesgos, saber qué
datos no ingresar), tareas donde esperan más apoyo, preocupaciones, condiciones técnicas
—incluida la capacidad de instalar aplicaciones y descargar archivos grandes en el teléfono—,
una pregunta abierta sobre una tarea real que quisieran resolver, y consentimiento para uso
agregado y anónimo.

Entrega:
1. El texto exacto de cada pregunta, su tipo de campo en Forms, sus opciones y si es
   obligatoria.
2. Texto de introducción y de agradecimiento final.
3. Lógica de ramificación si aplica.
4. Una versión reducida de 5 preguntas, por si la coordinación pide acortarla.
5. Advertencias de redacción: qué reactivos podrían inducir deseabilidad social y cómo los
   neutralizaste.
6. Aviso de privacidad breve: responsable del tratamiento, finalidad, carácter voluntario,
   plazo de conservación, acceso a los datos, canal para ejercer derechos y aclaración de que
   no se publicarán cruces con celdas pequeñas que puedan reidentificar a participantes.
7. Dos opciones metodológicas para comparar entrada y salida: (a) comparación agregada sin
   identificar personas; (b) comparación pareada mediante un código aleatorio entregado por el
   INA, sin usar iniciales, fecha de nacimiento, cédula ni otro dato derivado de la identidad.

Restricción: tiempo de respuesta real no mayor a 6 minutos. Lenguaje sin jerga técnica: quien
nunca ha usado IA debe entender todas las opciones. Indica que debe desactivarse la captura
automática de nombre y correo, salvo decisión institucional documentada y comunicada en el aviso
de privacidad. Propón una prueba piloto cronometrada con 5 a 8 personas antes del envío masivo.
```

## P1.2 Serie de tres correos institucionales — **C**

```
Redacta tres correos que el INA enviará a las 254 personas docentes. Firma institucional del
INA, no de la facilitación.

Correo 1 (22 de septiembre): invitación a responder la encuesta diagnóstica. Explica para qué
sirve, cuánto tarda, y que las respuestas se analizan de forma agregada. Fecha de cierre:
2 de octubre al mediodía.

Correo 2 (29 de septiembre): recordatorio de la encuesta y entrega del kit del participante.
Debe incluir una lista numerada de lo que cada persona tiene que dejar listo ANTES del
3 de octubre: cuentas gratuitas creadas, aplicaciones móviles instaladas, un modelo local ya
descargado por wifi, audífonos con micrófono, computadora con dos ventanas disponibles y un
objetivo real de clase preparado. Debe dejar claro que durante la sesión no habrá tiempo para
crear cuentas ni descargar modelos.

Correo 3 (5 de octubre): recordatorio de un día antes, con el enlace de Teams, el horario, las
normas de participación (micrófonos y cámaras cerrados, preguntas por Q&A) y el enlace del
formulario único de la jornada.

Cada correo: máximo 250 palabras, asunto propuesto, tono institucional cordial y directo, sin
signos de exclamación, con la información accionable en lista y no en párrafo.
```

## P1.3 Guía de instalación de aplicaciones móviles — **W**

> Ejecutar con búsqueda web activada, en la primera semana de septiembre. Las condiciones de
> distribución de estas aplicaciones cambian con frecuencia.

```
Con búsqueda web activada, verifica primero el estado actual (septiembre de 2026) de estas
aplicaciones y luego redacta una guía de instalación para personas docentes con alfabetización
digital media:

1. Google AI Edge Gallery: disponibilidad en Google Play y en App Store, alternativa por
   APK desde el repositorio de GitHub, modelos disponibles y su peso, requisitos mínimos de
   memoria del dispositivo, si exige cuenta de Hugging Face para descargar modelos.
2. Liquid Apollo (antes Apollo AI): disponibilidad en iOS y Android, modelos locales que
   ofrece, peso de descarga, requisitos del dispositivo.
3. Aplicaciones móviles de ChatGPT, Claude y Gemini: disponibilidad del modo de voz en el plan
   gratuito, límites de uso diario, idiomas soportados y requisitos de cuenta.

Entrega una guía de máximo 3 páginas con:
- Una tabla de requisitos mínimos por dispositivo, con criterio explícito de "si su teléfono
  no cumple esto, no intente la parte de modelos locales y trabaje con la demostración".
- Pasos numerados por plataforma, con lo que la persona ve en pantalla en cada paso.
- Advertencia clara sobre el peso de la descarga y la necesidad de hacerla por wifi antes del
  3 de octubre.
- Sección de problemas frecuentes con su solución: permiso de instalación desde fuentes
  desconocidas, almacenamiento insuficiente, modelo que no carga, aplicación que se cierra.
- Un plan B para quien no logre instalar nada.

Cita la fuente y la fecha de consulta de cada dato verificado. Marca [VERIFICAR] cualquier
punto donde la información sea contradictoria entre fuentes.
```

## P1.4 Kit del participante — **C**

```
Produce el paquete del participante, enviado 72 horas antes, en dos archivos coordinados:
(a) guía rápida de máximo 4 páginas y (b) tarjetas de práctica de máximo 4 páginas. Cada docente
debe poder mantener ambos archivos abiertos durante la jornada.

Contenido:
1. En la guía rápida: portada operativa con qué necesita tener listo, cómo se participa, dónde se
   pregunta, dónde se entregan los productos.
2. En la guía rápida: plantilla de instrucción con los cinco componentes obligatorios, con un ejemplo
   completo resuelto y uno en blanco para llenar.
3. En las tarjetas: las consignas de las siete prácticas, cada una en su propio recuadro, con el
   tiempo asignado y el microentregable esperado.
4. La regla de protección de datos en la portada y repetida, en forma abreviada, justo antes de
   cada actividad que implique ingresar texto o voz en una herramienta.
5. En la guía rápida: glosario de 12 términos, de una línea cada uno.
6. En la guía rápida: compromiso de aplicación a 30 días, con tres campos para completar.

Diseño para lectura en pantalla: bloques cortos, mucho espacio en blanco, nada de párrafos
largos. Entrégalo en Markdown con marcas claras de dónde va cada salto de página.
```

## P1.5 Formulario único de la jornada — **C**

```
Diseña el formulario único de Microsoft Forms donde las personas participantes depositan sus
microentregables durante las siete prácticas.

Arquitectura obligatoria: un solo formulario con respuestas múltiples permitidas. Cada envío
corresponde a una sola práctica. La primera pregunta es «Práctica que entrega» y ramifica a la
sección correspondiente; después de esa sección, el formulario se envía sin obligar a recorrer
las demás. No diseñes un recorrido que exija completar las siete secciones en cada envío.

Campos comunes: código anónimo opcional, Unidad Regional, idioma que imparte y práctica. Campos
de cada sección: producto, instrucción utilizada y hallazgo crítico principal. No recopiles
nombre ni correo automáticamente. Advierte que Unidad Regional e idioma no deben cruzarse ni
publicarse cuando generen celdas pequeñas.

Entrega: el texto exacto de cada campo, las instrucciones de configuración en Forms, la
estructura resultante de la hoja de respuestas con los nombres de columna, y una fórmula o
procedimiento para que la moderación identifique en tiempo casi real dos o tres respuestas
ilustrativas usando una pauta rápida —completitud, especificidad y hallazgo crítico—. No prometas
seleccionar «las mejores» entre cientos de respuestas en dos minutos ni identifiques públicamente
a sus autores.
```

---

# Fase 2. Presentaciones

> Ejecute primero la Fase 3: las presentaciones deben mostrar los materiales reales, no
> ejemplos genéricos.

## P2.1 Presentación del Bloque 1 — **C**

```
Diseña la presentación del Bloque 1, "Panorama y método", 60 minutos, a cargo de Agustín
Gómez Meléndez, ante 254 docentes de idiomas con cámaras cerradas.

Distribución del tiempo: 18 minutos de encuadre conceptual, 15 de demostración del modo de voz
de ChatGPT, Claude y Gemini, 2 de transición, y un ciclo estándar de 25 minutos: 8 de
demostración del método, 12 de práctica, 3 de microentregable y 2 de devolución.

Contenido del encuadre: qué hace y qué no hace un modelo de lenguaje —por qué inventa, por qué
complace, por qué se equivoca de nivel—; qué tareas de la enseñanza de lenguas automatiza con
solvencia, cuáles degrada y cuáles no debe asumir; y gobernanza mínima para el aula.

Toda afirmación sobre evidencia de aprendizaje, límites técnicos o disponibilidad de funciones
debe incluir fuente primaria y fecha en las notas del orador. Si no puede verificarse, marca
[VERIFICAR] y no la presentes como hecho.

Entrega, lámina por lámina:
- Número, título, y el contenido textual exacto de la lámina (máximo 30 palabras por lámina;
  nada de párrafos).
- Descripción de la imagen, esquema o tabla que la acompaña.
- Notas del orador de 80 a 120 palabras, escritas para leerse de un vistazo, con lo que se dice
  y lo que se muestra en pantalla.
- Minuto de inicio previsto.

Incluye dos sondeos en vivo con sus opciones de respuesta, y una lámina de servicio con la
consigna escrita de la ventana de práctica y un espacio para el temporizador.

Restricción: cero láminas de "agenda" decorativas y cero listas de herramientas sin uso
asociado. Cada lámina debe responder a la pregunta "qué hace con esto una persona docente
mañana a las 8 de la mañana".
```

## P2.2 Presentación base del Bloque 2, facilitada por Agustín Gómez Meléndez — **C**

```
Diseña una presentación base de 90 minutos para el Bloque 2, "Usos no convencionales de la IA
en la enseñanza de inglés", que Agustín Gómez Meléndez facilitará con apoyo de la asesoría académica.

Introducción de 8 minutos y tres ventanas de práctica organizadas como ciclos de 25 minutos:
2.1 Seguimiento y retroalimentación al aprendizaje: banco de retroalimentación diferenciada
    por tipo de error recurrente, a partir de una muestra sintética de producción escrita, con
    ajuste de registro para niveles A2 y B1.
2.2 Apoyo anticipatorio: análisis anticipatorio de fallas (premortem didáctico), anticipar los
    cinco errores más probables de un grupo en una tarea determinada y generar un microrremedio
    para cada uno.
2.3 Chatbots personalizados como herramienta de práctica escrita y como material didáctico: redactar el
    bloque de instrucciones de un asistente conversacional de nivel fijo —rol, nivel, política de
    corrección, límites y prohibiciones— y probarlo con dos turnos escritos.
Cierre de 7 minutos sobre qué se delega y qué no puede delegarse.

Mismo formato de entrega que la presentación anterior: lámina por lámina, con texto exacto,
apoyo visual, notas del orador y minuto de inicio.

Además: agrega al final una página de preparación con la lista de decisiones que la persona
facilitadora debe cerrar antes de impartir el bloque.
```

## P2.3 Presentación del Bloque 3 — **C**

```
Diseña la presentación del Bloque 3, "ChatGPT y Claude en modalidad educativa", 60 minutos.
Distribución obligatoria: 5 minutos de reingreso y comparación funcional, dos ciclos estándar
de 25 minutos y 5 minutos de síntesis y transición.

3.1 Secuencia didáctica de 20 minutos con calibración explícita de nivel MCER, acompañada por
    su rúbrica analítica. La verificación consiste en aplicar la rúbrica a dos producciones
    sintéticas para comprobar que discrimina.
3.2 Práctica oral con modo de voz desde el teléfono, en dos configuraciones: el asistente como
    interlocutor de práctica y como evaluador formativo de la propia voz de la persona docente.

En el ciclo 3.2 la presentación debe abordar de frente los límites: reconocimiento de acentos
costarricenses y de hablantes con nivel bajo, latencia, tendencia del modelo a elogiar en
exceso, y el riesgo de que el estudiantado delegue su producción oral.

Mismo formato de entrega que las anteriores. Incluye una lámina comparativa de las diferencias
prácticas entre ChatGPT y Claude para uso docente, sin publicidad de ninguna de las dos y con
mención expresa de los límites de las versiones gratuitas.
```

## P2.4 Presentación del Bloque 4 — **C**

```
Diseña la presentación del Bloque 4, "Inteligencia artificial local en el dispositivo y
criterios de selección de herramientas", 30 minutos.

Estructura: 10 minutos de demostración con la pantalla del teléfono compartida, mostrando
Google AI Edge Gallery y Liquid Apollo ejecutando un modelo pequeño en modo avión; 12 minutos de
práctica guiada para quienes hayan preinstalado, resolviendo una consigna docente sencilla sin
conexión y comparándola con la misma consigna en un servicio en la nube; 8 minutos de cierre
con criterios de selección.

El argumento central debe quedar explícito y sin absolutos engañosos: cuando el modelo ya está
descargado y la inferencia se ejecuta en modo avión, el contenido de la consigna no necesita
enviarse a un servicio en la nube. Esto no demuestra que la aplicación nunca recopile
telemetría cuando vuelve a conectarse ni sustituye la seguridad del dispositivo. Presenta el
intercambio entre menor capacidad, mayor control local, conectividad y costo por consulta, sin
afirmar «privacidad total» ni «costo cero».

Incluye:
- Una tabla de decisión de cuándo sí y cuándo no usar un modelo local, con seis criterios.
- Una lámina de expectativas realistas: qué calidad esperar de un modelo pequeño frente a uno
  en la nube, con un ejemplo real de la misma consigna resuelta por ambos.
- Una lámina final de límites y rutas de adaptación a LESCO, portugués y francés; remite los
  ejemplos detallados al material complementario de la Fase 5 para no sobrecargar los 8 minutos
  de cierre.
- Marca [VERIFICAR SEPTIEMBRE] cada dato técnico sobre las aplicaciones.

Mismo formato de entrega que las anteriores.
```

## P2.5 Láminas de servicio reutilizables — **C**

```
Diseña el juego de láminas de servicio que se repite a lo largo de la jornada, con una
plantilla común:
1. Normas de participación (micrófonos y cámaras cerrados, preguntas por Q&A, chat para
   respuestas breves y enlaces).
2. Plantilla de consigna de ventana de práctica, con espacio para el temporizador y los cuatro
   pasos.
3. Aviso de tiempo restante: versiones de 6, 3 y 1 minuto.
4. Lámina de micro-entregable con el enlace del formulario.
5. Lámina de receso y de almuerzo con la hora exacta de regreso.
6. Lámina de regla de protección de datos.
7. Lámina de cierre con el compromiso a 30 días.

Para cada una: texto exacto, jerarquía visual y tamaño mínimo de fuente pensando en quien
sigue la sesión desde un teléfono.
```

## P2.6 Generación visual de las presentaciones — **G**

```
Genera una presentación profesional a partir del guion adjunto.

Estilo: institucional universitario, sobrio, sin ilustraciones genéricas de robots ni de manos
tocando pantallas azules. Paleta de dos colores más gris. Tipografía de alta legibilidad.
Máximo 30 palabras por lámina. Las notas del orador van completas en el campo de notas, no en
la lámina.

Formato de salida: 16:9, con numeración de láminas, y una lámina de sección antes de cada
ciclo de práctica. Idioma: español de Costa Rica.

Respeta literalmente el texto del guion: no reescribas los títulos ni resumas el contenido.
```

---

# Fase 3. Materiales de práctica, muestras y ejemplos

## P3.1 Consignas de las siete prácticas — **C**

```
Redacta las consignas de las siete prácticas de la jornada:
1. Bloque 1: primera instrucción completa con los cinco componentes.
2. Ciclo 2.1: banco de retroalimentación diferenciada.
3. Ciclo 2.2: análisis anticipatorio de fallas (premortem didáctico) con microrremedios.
4. Ventana 2.3 (PR-04): bloque de instrucciones de un chatbot para práctica escrita y prueba con dos turnos escritos.
5. Ciclo 3.1: secuencia didáctica de 20 minutos con calibración MCER, su rúbrica y una prueba
   breve de discriminación.
6. Ciclo 3.2: práctica oral con modo de voz, en las dos configuraciones.
7. Bloque 4: práctica guiada resuelta con modelo local en modo avión y comparada con la nube.

Formato idéntico para todas, listo para pegar en el chat de Teams:
- Título con el tiempo asignado.
- Cuatro pasos numerados, en imperativo, sin subordinadas.
- Qué se deposita exactamente en el formulario.
- La regla de protección de datos al final.

Restricción dura: máximo 120 palabras por consigna y ninguna oración de más de 20 palabras.
Debe entenderse leyéndola una sola vez, en un teléfono, sin ayuda.

Incluye para cada consigna una extensión opcional de una línea, para quien termine antes.
```

## P3.2 Plantillas de instrucción para docentes — **C**

```
Produce el juego de plantillas de instrucción que las personas docentes usarán y se llevarán.

1. La plantilla maestra con los cinco componentes obligatorios, explicada en una página, con un
   ejemplo resuelto completo y su resultado esperado.
2. Seis plantillas derivadas, una por tarea docente frecuente: planificar una clase, generar
   material de lectura calibrado por nivel, diseñar una actividad de expresión oral, construir
   una rúbrica, redactar retroalimentación individual y diferenciar una misma actividad en tres
   niveles.
3. Para cada plantilla: el texto de la instrucción con campos entre llaves, un ejemplo llenado
   para un curso de inglés para atención al cliente, y una advertencia de qué suele salir mal
   con esa plantilla en concreto.

Todas las plantillas deben funcionar tanto en ChatGPT como en Claude, sin depender de funciones
de pago.
```

## P3.3 Muestras sintéticas de producción escrita — **C**

```
Crea seis muestras sintéticas de producción escrita de estudiantes adultos costarricenses de
inglés como lengua extranjera, para usarlas en el ciclo 2.1 sin exponer trabajo real de
ninguna persona.

Especificaciones:
- Dos de nivel A2, dos de A2 alto o B1 bajo, dos de B1.
- Contextos ocupacionales del INA: correo a un cliente, descripción de un procedimiento de
  servicio, respuesta a una queja, presentación personal para una entrevista de trabajo.
- Entre 80 y 140 palabras cada una.
- Errores plantados y realistas para hispanohablantes: interferencia del español en el orden de
  palabras y en las preposiciones, uso del presente por el pasado, ausencia de tercera persona
  singular, falsos amigos, artículos, calcos de estructuras del español.

Entrega además, en documento separado, la clave del docente: la lista de errores plantados en
cada muestra, clasificados por tipo, con la explicación breve del error y su corrección.

Advertencia obligatoria en el encabezado: son textos sintéticos creados para formación, no
producciones reales de estudiantes.
```

## P3.4 Casos ocupacionales del INA — **C**

```
Construye un banco de 12 casos ocupacionales que sirvan de insumo para todas las ventanas de
práctica, de modo que quien no traiga un objetivo propio pueda trabajar igual.

Cubre las áreas formativas del Núcleo Comercio y Servicios: turismo y hospitalidad, atención al
cliente, centros de contacto, comercio y ventas, servicios empresariales y logística.

Cada caso, en media página:
- Perfil del grupo: número, nivel MCER, edad aproximada, situación laboral.
- Objetivo de aprendizaje concreto y observable.
- Destreza principal y destreza secundaria.
- Una restricción realista: 45 minutos de clase, sin internet en el aula, grupo con niveles
  mezclados, o similar.
- Situación comunicativa auténtica del puesto de trabajo.

Cubre los cuatro niveles A1, A2, B1 y B2. Incluye al menos un caso adaptable a LESCO, uno a
portugués y uno a francés.
```

## P3.5 Salidas pregeneradas de respaldo — **C**

```
Para cada una de las siete prácticas, genera el material de respaldo que usará quien no
logre acceso a la herramienta durante la sesión.

Cada respaldo incluye:
1. La instrucción exacta que se habría escrito.
2. La salida de calidad aceptable que la herramienta habría producido.
3. Una segunda salida deliberadamente defectuosa, con errores realistas: nivel MCER
   equivocado, vocabulario fuera de rango, instrucción ambigua, contenido culturalmente
   inadecuado para Costa Rica, dato inventado, rúbrica que no discrimina.
4. La clave de los defectos de la segunda salida.

Así, quien no tenga acceso trabaja igualmente los pasos de verificación y adaptación, que es
donde está el aprendizaje crítico. Encabeza cada respaldo con una nota de una línea que explique
esto a la persona participante.
```

## P3.6 Ejemplo terminado de banco de retroalimentación — **C**

```
Produce un ejemplo terminado y de alta calidad de banco de retroalimentación diferenciada, para
mostrarlo como referencia en el ciclo 2.1.

Estructura: para los ocho errores más frecuentes en producción escrita de hispanohablantes
adultos de nivel A2 y B1, entrega tres versiones del comentario devolutivo —para nivel A2, para
B1 y para estudiante con baja confianza—, más una micro-tarea de remedio de 5 minutos por error.

Requisitos: la retroalimentación debe ser específica y accionable, no evaluativa de la persona;
debe estar redactada en inglés al nivel del estudiante destinatario, con la explicación para el
docente en español; y debe evitar la corrección total del texto, para no sustituir el trabajo
del estudiante.

Agrega al final una nota de 100 palabras sobre por qué la retroalimentación generada por IA
tiende a ser genérica y complaciente, y qué tres ajustes a la instrucción lo corrigen.
```

## P3.7 Chatbot de práctica: ejemplo y plantilla — **C**

```
Produce el material de la ventana de práctica 2.3 (PR-04) sobre chatbots personalizados para práctica escrita.

1. Un ejemplo completo y funcional del bloque de instrucciones de un asistente conversacional
   de práctica escrita para inglés de nivel A2, orientado a atención al cliente en
   hotelería. Debe especificar: rol, nivel léxico y gramatical máximo, política de corrección
   —cuándo corrige, cómo corrige, cuándo deja pasar el error—, extensión de sus turnos,
   prohibiciones explícitas, qué hacer si el estudiante escribe en español, y cómo cierra el
   intercambio escrito con un resumen de errores.
2. La misma plantilla en blanco, con campos entre llaves y una línea de ayuda por campo.
3. Un guion escrito de prueba de dos turnos para verificar que el chatbot respeta el nivel.
4. Una lista de cinco fallas típicas de estos asistentes —se sale del nivel, corrige de más,
   responde en español, elogia todo, olvida su rol— y el ajuste de instrucción que corrige cada
   una.
5. Instrucciones de dónde se pega ese bloque en ChatGPT y en Claude sin necesidad de plan de
   pago. Verifica la interfaz vigente; si la función de asistente personalizado exige pago,
   explica cómo usar el bloque como primer mensaje de una conversación normal.
```

## P3.8 Rúbrica de ejemplo y prueba de esfuerzo — **C**

```
Produce el material de rúbrica integrado en el ciclo 3.1.

1. Una rúbrica analítica de ejemplo para una tarea de expresión escrita de nivel B1 en contexto
   ocupacional, con cuatro criterios, cuatro niveles de desempeño y descriptores observables,
   alineada con los descriptores del MCER.
2. Dos producciones sintéticas de calidad claramente distinta, para aplicarle la rúbrica.
3. El resultado de aplicar la rúbrica a ambas, con el razonamiento de cada puntuación.
4. Un procedimiento de prueba de esfuerzo en cinco pasos: cómo verificar que una rúbrica
   generada por IA discrimina de verdad y no premia todo por igual, con las señales de alarma
   —descriptores vagos, niveles que se solapan, criterios no observables, escalas que no
   distinguen.
```

---

# Fase 4. Guiones de demostración en vivo

## P4.1 Guion de la demostración de modo de voz — **C**

```
Escribe el guion minuto a minuto de la demostración de modo de voz del Bloque 1, 15 minutos,
con ChatGPT, Claude y Gemini, ante 254 personas con cámaras cerradas.

Tres demostraciones de 4 minutos, una por herramienta, con un uso didáctico distinto en cada
una: conversación guiada por nivel, retroalimentación de pronunciación y simulación de una
situación ocupacional del INA. Cierre comparativo de 3 minutos.

Para cada demostración entrega:
- Qué se comparte en pantalla y cómo se enruta el audio en Teams para que se escuche.
- El texto exacto de lo que el facilitador le dice al asistente, palabra por palabra.
- Qué se espera que responda y qué hacer si responde otra cosa.
- El punto exacto donde se detiene la demostración para señalar una limitación real:
  reconocimiento de acento, latencia, exceso de elogio, salida de nivel.
- Qué se le pide a la audiencia que observe mientras tanto.

Incluye un plan B completo por si el audio falla: la misma demostración resuelta con capturas o
con una grabación previa. Y una advertencia sobre el eco y la retroalimentación de audio cuando
se comparte sonido del sistema en Teams.
```

## P4.2 Guion de la demostración de modelos locales — **C**

```
Escribe el guion de la demostración del Bloque 4, 10 minutos, con la pantalla del teléfono
compartida.

Secuencia: mostrar la aplicación instalada, activar el modo avión en vivo para evidenciar que
no hay conexión, ejecutar una consigna docente sencilla con un modelo pequeño, y contrastar el
resultado con la misma consigna resuelta previamente en un servicio en la nube.

Entrega:
- Cómo se comparte la pantalla del teléfono en Teams, con el procedimiento por plataforma.
- La consigna exacta que se usa, elegida para que un modelo pequeño pueda resolverla de forma
  digna.
- Qué se dice mientras el modelo genera, que es lento: guion de relleno útil de 40 segundos.
- La comparación explícita con el resultado en la nube, sin desacreditar al modelo local:
  el punto es el intercambio entre capacidad, privacidad y conectividad.
- Una precisión obligatoria: la prueba en modo avión demuestra que esa inferencia puede
  ejecutarse sin conexión; no autoriza a afirmar que la aplicación nunca recopila telemetría
  cuando vuelve a conectarse. Incluye almacenamiento local y seguridad del dispositivo entre
  las salvaguardas.
- Qué hacer si el modelo tarda demasiado o la aplicación se cierra.
- Marca [VERIFICAR SEPTIEMBRE] cada paso que dependa de la versión de la aplicación.
```

## P4.3 Guion de la demostración del ciclo completo — **C**

```
Escribe el guion de la demostración inicial del método, 8 minutos, en la que el facilitador
ejecuta de principio a fin el ciclo encargo, instrucción, salida, verificación y adaptación,
razonando en voz alta.

Requisito central: la demostración debe incluir un resultado defectuoso real y su corrección.
Mostrar solo aciertos enseña a confiar; el objetivo es enseñar a verificar.

Entrega el guion en dos columnas: lo que se hace en pantalla y lo que se dice, con marcas de
tiempo cada 30 segundos y tres momentos señalados donde se lanza una pregunta al chat.
```

## P4.4 Catálogo de fallas didácticas — **C**

```
Construye un catálogo de 15 fallas de la IA generativa que conviene mostrar deliberadamente
durante la jornada, específicas de la enseñanza de lenguas.

Para cada una: nombre corto, en qué consiste, un ejemplo concreto y reproducible en contexto de
inglés para fines ocupacionales, mecanismos plausibles —separando evidencia de hipótesis—,
cómo se detecta y qué ajuste de instrucción la mitiga.

Cubre al menos: salida fuera del nivel MCER solicitado, vocabulario que no corresponde al
registro, gramática correcta pero pragmática inadecuada, contenido culturalmente ajeno al
contexto costarricense, datos y fuentes inventadas, rúbricas que no discriminan,
retroalimentación complaciente, sesgo hacia variedades del inglés de Estados Unidos, y
suposiciones erróneas sobre el perfil del estudiantado adulto en formación técnica.
```

---

# Fase 5. Adaptaciones lingüísticas

## P5.1 Adaptación a LESCO — **C**

```
Produce el material de adaptación para las 4 personas docentes de LESCO que participan en la
jornada.

Punto de partida honesto: LESCO es una lengua visogestual; una glosa o descripción en español
no equivale a producir ni evaluar LESCO. Los modelos centrados en texto no pueden juzgar de
forma fiable configuración manual, movimiento, ubicación, orientación, componentes no manuales
ni uso del espacio. El material no debe prometer lo que la herramienta no hace.

Entrega:
1. Qué tareas de la docencia de LESCO sí se benefician: planificación, materiales de apoyo en
   español escrito, glosarios, secuenciación de contenidos, diseño de evaluaciones, preparación
   de materiales para estudiantes oyentes.
2. Qué no funciona y por qué, con ejemplos concretos.
3. Tres consignas de práctica adaptadas, una por ciclo de la mañana, equivalentes en exigencia
   a las de inglés.
4. Advertencias sobre representación de la comunidad sorda en el contenido generado y sobre el
   sesgo hacia el modelo médico de la discapacidad que estos sistemas tienden a reproducir.
5. Una nota de 150 palabras sobre accesibilidad de los materiales del propio taller.
6. Una condición de validación: toda afirmación lingüística o cultural sobre LESCO debe ser
   revisada por una persona especialista y, cuando corresponda, por integrantes de la comunidad
   sorda; el modelo de texto no actúa como árbitro de corrección.
```

## P5.2 Adaptación a portugués y francés — **C**

```
Produce el material de adaptación para las 4 personas docentes de portugués y francés.

Entrega:
1. Tres consignas de práctica adaptadas, equivalentes en exigencia a las de inglés, con
   contextos ocupacionales pertinentes.
2. Dos muestras sintéticas de producción escrita por idioma, de niveles A2 y B1, con errores
   típicos de hispanohablantes: falsos amigos entre español y portugués, interferencia fonética
   y ortográfica, género y preposiciones en francés.
3. Advertencias específicas: en portugués, la variedad brasileña frente a la europea y cuál
   produce la herramienta en una prueba controlada; en francés, el registro y el tuteo. No
   supongas de antemano que la calidad será menor que en inglés: compruébala por modelo, tarea y
   nivel mediante ejemplos equivalentes.
4. Una recomendación sobre cómo especificar y verificar la variedad deseada en la instrucción.
```

---

# Fase 6. Evaluación e informe

## P6.1 Encuesta de salida — **C**

```
Diseña la encuesta de salida que se aplica a las 2:30 p. m., con un tiempo de respuesta real de
3 minutos.

Debe incluir: los cuatro reactivos de autoeficacia de la encuesta de entrada, con idéntica
redacción, para permitir comparación; utilidad percibida de cada uno de los cuatro bloques;
intención de aplicación en el aula en los próximos 30 días; qué haría falta para poder aplicar
lo aprendido, en respuesta abierta; y una pregunta sobre si el formato sin salas de trabajo le
resultó adecuado.

Entrega el texto exacto de cada campo, su tipo en Forms, y una nota metodológica sobre las
limitaciones de comparar medidas de autoeficacia de entrada y salida en el mismo día. Si se
adoptó comparación pareada, incluye el mismo código aleatorio de la encuesta de entrada; si no,
declara que la comparación será agregada y que no representa cambio individual. Mantén el
instrumento dentro de los 3 minutos mediante una prueba piloto cronometrada.
```

## P6.2 Compromiso de aplicación a 30 días — **C**

```
Diseña el instrumento de compromiso de aplicación a 30 días que cierra la jornada.

Máximo media página, con tres campos: qué voy a aplicar exactamente, con cuál grupo y en qué
fecha, y qué necesito conseguir antes para poder hacerlo.

Agrega el guion de dos minutos con el que el facilitador lo presenta al cierre, y una propuesta
de correo de seguimiento a los 30 días con tres preguntas de máximo un minuto de respuesta.
```

## P6.3 Informe posterior al taller — **C**

```
Diseña la estructura del informe que se entrega al INA dentro de los cinco días hábiles
posteriores a la jornada, y el procedimiento de análisis de los datos recogidos.

Estructura del informe: ficha de la actividad, participación efectiva, resultados de la encuesta
de entrada, productos generados por ciclo, comparación de autoeficacia entre entrada y salida,
hallazgos críticos consolidados que las personas participantes detectaron, dificultades
técnicas observadas y recomendaciones para la próxima edición.

Procedimiento de análisis: qué se calcula con las respuestas del formulario único y de ambas
encuestas, qué tablas y gráficos se producen, y qué afirmaciones NO pueden sostenerse con estos
datos —en particular, cualquier afirmación causal sobre mejora del aprendizaje del estudiantado.

Requisitos metodológicos: reporta denominadores y tasas de respuesta por instrumento y práctica;
distingue participantes únicos de envíos; documenta datos faltantes y abandono entre entrada y
salida; usa comparaciones pareadas solo cuando exista un código válido en ambos momentos; incluye
tamaño del efecto e intervalo de confianza cuando sea defendible; y evita pruebas de significancia
si los supuestos, el emparejamiento o la cobertura no lo permiten. Suprime o agrupa celdas pequeñas
que puedan reidentificar a docentes de LESCO, portugués o francés.

Máximo 12 páginas. Incluye la plantilla del catálogo de materiales producidos que se devuelve al
INA en formato editable.
```

---

# Fase 7. Operación de la sesión

## P7.1 Guion de operación minuto a minuto — **C**

```
Escribe el guion de operación de la jornada completa, dirigido a las tres personas del INA con
rol asignado: anfitrión, moderación del Q&A y soporte técnico.

Formato de tabla, con una fila por hito, desde las 7:40 a. m. hasta las 3:00 p. m.: hora, quién
actúa, qué hace exactamente, qué dice si corresponde y qué debe estar listo antes.

Incluye de forma explícita: activación del Q&A moderado y su configuración, momento de fijar
cada consigna en el chat, avisos de tiempo, apertura puntual de micrófono para las personas
voluntarias, procedimiento de aviso de grabación, gestión del intérprete de LESCO, cierre y
apertura de recesos con hora exacta de regreso, y protocolo si la facilitación pierde conexión.
```

## P7.2 Mensajes prefabricados de chat — **C**

```
Redacta todos los mensajes que la organización pegará en el chat de Teams durante la jornada,
en orden cronológico y numerados con la hora prevista.

Incluye: bienvenida y normas, enlace del paquete, enlace del formulario único, las siete consignas de
ventana de práctica, los avisos de 6, 3 y 1 minuto, avisos de receso con hora de regreso,
recordatorio de la regla de protección de datos, invitación a personas voluntarias para
compartir pantalla, enlace de la encuesta de salida y mensaje de cierre con los siguientes pasos.

Cada mensaje: máximo 40 palabras, sin formato que se pierda al pegar, con el enlace al final y
no en medio del texto.
```

## P7.3 Banco de respuestas a preguntas previsibles — **C**

```
Anticipa las 25 preguntas más probables de 254 docentes de idiomas en esta jornada y redacta
una respuesta de 60 a 90 palabras para cada una, utilizable tal cual en el Q&A.

Cubre al menos estas familias: integridad académica y detección de uso de IA por parte del
estudiantado; si la IA sustituirá al profesorado; costo y límites de las versiones gratuitas;
protección de datos y qué se puede subir; calidad del inglés generado y variedades;
uso con estudiantes menores de edad; qué hacer si la institución bloquea el acceso;
propiedad intelectual de los materiales producidos; cómo citar el uso de IA; accesibilidad;
y las preguntas escépticas de fondo sobre si esto realmente mejora el aprendizaje.

Marca cuáles conviene responder en vivo y cuáles por escrito después de la sesión. Ninguna
respuesta debe ser promocional ni evasiva; donde la evidencia sea débil o discutida, dilo.
```

## P7.4 Ensayo técnico y contingencias — **C**

```
Produce dos documentos operativos.

1. Guion del ensayo técnico de 60 minutos del 2 de octubre, con la lista exacta de lo que hay
   que probar en orden: Q&A moderado, sondeos, compartir pantalla de computadora, compartir
   pantalla y audio de teléfono, temporizador visible, subtítulos en vivo, fijación de mensajes
   en el chat, y visibilidad del intérprete de LESCO. Con el criterio de aprobación de cada
   prueba.

2. Plan de contingencia con árbol de decisión para: caída de conexión de la facilitación, fallo
   del audio en la demostración de voz, herramienta en la nube caída o saturada, red del INA
   que bloquea el acceso, retraso acumulado de más de 15 minutos, y baja participación en los
   micro-entregables. Para cada escenario: señal de alarma, quién decide, qué se hace y qué se
   sacrifica.
```

---

# Fase 8. Verificación

## P8.1 Auditoría adversarial de materiales — **C**

> Ejecutar en una conversación NUEVA, sin el historial de producción, adjuntando el material a revisar.

```
Actúa como evaluador externo crítico de materiales de formación docente. No eres el autor y no
tienes ningún compromiso con este material.

Revisa el documento adjunto y responde:
1. ¿Qué afirmaciones no están respaldadas y se presentan como si lo estuvieran?
2. ¿Qué instrucciones son ambiguas para alguien que las lea una sola vez, en un teléfono, sin
   ayuda? Cítalas textualmente.
3. ¿Qué actividades no caben en el tiempo asignado? Estima el tiempo real de cada una.
4. ¿Dónde el material promete resultados que la herramienta no entrega de forma consistente?
5. ¿Qué supuestos hace sobre el nivel técnico de las personas participantes que podrían no
   cumplirse en las nueve Unidades Regionales?
6. ¿Qué falta para que una persona docente pueda aplicar esto sin volver a preguntar?

Sé específico y cita el texto. No elogies. Ordena los hallazgos por gravedad y propón una
corrección concreta para cada uno de los cinco más graves.
```

## P8.2 Verificación de calidad lingüística y de nivel — **C**

```
Actúa como especialista en evaluación de lenguas y en el Marco Común Europeo de Referencia.

Revisa todo el material en inglés del documento adjunto —muestras, ejemplos, actividades,
descriptores de rúbrica— y verifica:
1. Que cada texto corresponda efectivamente al nivel MCER declarado. Señala los que se salen,
   con el elemento léxico o gramatical que lo delata.
2. Que los errores plantados en las muestras sintéticas sean realistas para hispanohablantes
   adultos costarricenses y no artificiales.
3. Que los descriptores de las rúbricas sean observables y discriminen entre niveles contiguos.
4. Que el registro sea apropiado al contexto ocupacional declarado.
5. Que no haya sesgo hacia una única variedad del inglés cuando el contexto no lo exige.

Entrega una tabla de hallazgos con ubicación, problema, gravedad y corrección propuesta.
```

## P8.3 Verificación de protección de datos — **C**

```
Actúa como especialista en protección de datos personales bajo la Ley 8968 de Costa Rica y en
ética del uso de IA en educación.

Realiza una revisión técnica preliminar, no una opinión jurídica vinculante. Señala expresamente
qué decisiones deben validar la asesoría jurídica o la instancia responsable de protección de
datos del INA.

Revisa el material adjunto y determina:
1. ¿Hay algún dato personal real, o algún ejemplo que pudiera confundirse con uno?
2. ¿La regla de no ingresar datos de estudiantes aparece en todos los puntos donde la persona
   podría estar a punto de infringirla, y no solo al inicio?
3. ¿El tratamiento del audio de voz está correctamente advertido?
4. ¿Las encuestas y el formulario de la jornada recogen datos proporcionados a su finalidad, y
   el consentimiento está bien planteado?
5. ¿El material induce alguna práctica que expondría a la institución o a la persona docente?
6. ¿La combinación de Unidad Regional, idioma, marcas de tiempo u otros campos permite
   reidentificar a integrantes de grupos pequeños? Propón reglas de supresión y agregación.

Entrega hallazgos priorizados y la redacción exacta de las advertencias que haya que agregar.
```

## P8.4 Actualización factual de septiembre — **W**

```
Con búsqueda web activada, verifica el estado a la fecha de hoy de cada uno de estos puntos y
señala qué cambió respecto de lo escrito en el material adjunto:

1. Google AI Edge Gallery: canal de distribución, plataformas, modelos disponibles y su peso,
   requisitos de dispositivo.
2. Liquid Apollo: plataformas, modelos locales disponibles, requisitos.
3. Modo de voz en los planes gratuitos de ChatGPT, Claude y Gemini: disponibilidad, límites
   diarios, idiomas.
4. Límites de mensajes de los planes gratuitos de ChatGPT y Claude.
5. Cualquier cambio relevante en el marco de competencias en IA para docentes de UNESCO o en la
   normativa costarricense sobre IA y datos personales.

Entrega una tabla: dato en el material, estado verificado hoy, fuente primaria u oficial, fecha
de publicación o actualización, fecha de consulta y acción requerida. No uses resúmenes de
terceros para disponibilidad, requisitos o límites de uso cuando exista documentación oficial.
Si una fuente contradice a otra, dilo en lugar de elegir por tu cuenta.
```

## P8.5 Control transversal de consistencia y accesibilidad — **C**

> Ejecutar sobre el paquete completo después de P8.1–P8.4 y antes de autorizar la versión final.

```
Actúa como responsable de control de calidad de una capacitación virtual accesible y de alta
concurrencia. Revisa simultáneamente la agenda, las cuatro presentaciones, la guía rápida, las
tarjetas de práctica, el formulario, las encuestas, los mensajes de Teams y los guiones de
operación y contingencia.

Comprueba, mediante comparación literal entre archivos:
1. Que todos usen siete prácticas: seis ciclos estándar y una práctica guiada local.
2. Que horarios, duraciones, responsables, nombres de bloques y productos coincidan en todos
   los materiales y que ninguna suma exceda el tiempo disponible.
3. Que cada consigna tenga el mismo identificador, producto esperado, enlace y aviso de tiempo
   en presentación, tarjeta, chat y formulario.
4. Que nombres de herramientas, requisitos, planes B y marcas [VERIFICAR] sean consistentes.
5. Que no se recopilen nombres o correos sin decisión documentada; que existan reglas de
   supresión de celdas pequeñas y que la advertencia de datos aparezca en cada punto de uso.
6. Accesibilidad: jerarquía real de encabezados, orden de lectura, texto alternativo, contraste,
   tamaño de letra para pantalla pequeña, subtítulos, interpretación de LESCO, enlaces con texto
   descriptivo y ausencia de información comunicada solo por color o por imágenes de texto.
7. Que cada actividad tenga plan B sin cuenta, sin aplicación o sin conexión, y que el plan B
   permita alcanzar el mismo objetivo crítico aunque cambie la herramienta.

Entrega una matriz con: hallazgo, archivos afectados, texto conflictivo, gravedad —bloqueante,
alta, media o baja—, corrección exacta, responsable y estado. Cierra con una decisión binaria:
APTO PARA PUBLICAR o NO APTO PARA PUBLICAR. Cualquier hallazgo bloqueante obliga a la segunda.
No reescribas silenciosamente: deja trazabilidad de cada corrección propuesta.
```

---

# Anexo. Lista de verificación de producción

| Código | Producto | Fase | Estado |
|---|---|---|---|
| P1.1 | Encuesta diagnóstica para Forms | 1 | ☐ |
| P1.2 | Tres correos institucionales | 1 | ☐ |
| P1.3 | Guía de instalación de aplicaciones móviles | 1 | ☐ |
| P1.4 | Kit del participante | 1 | ☐ |
| P1.5 | Formulario único de la jornada | 1 | ☐ |
| P2.1 | Presentación Bloque 1 | 2 | ☐ |
| P2.2 | Presentación base Bloque 2 para AGM | 2 | ☐ |
| P2.3 | Presentación Bloque 3 | 2 | ☐ |
| P2.4 | Presentación Bloque 4 | 2 | ☐ |
| P2.5 | Láminas de servicio | 2 | ☐ |
| P2.6 | Diseño visual de las cuatro presentaciones | 2 | ☐ |
| P3.1 | Siete consignas de práctica | 3 | ☐ |
| P3.2 | Plantillas de instrucción | 3 | ☐ |
| P3.3 | Seis muestras sintéticas y su clave | 3 | ☐ |
| P3.4 | Banco de 12 casos ocupacionales | 3 | ☐ |
| P3.5 | Salidas pregeneradas de respaldo | 3 | ☐ |
| P3.6 | Banco de retroalimentación de ejemplo | 3 | ☐ |
| P3.7 | Chatbot: ejemplo, plantilla y prueba | 3 | ☐ |
| P3.8 | Rúbrica de ejemplo y prueba de esfuerzo | 3 | ☐ |
| P4.1 | Guion de demostración de modo de voz | 4 | ☐ |
| P4.2 | Guion de demostración de modelos locales | 4 | ☐ |
| P4.3 | Guion del ciclo completo | 4 | ☐ |
| P4.4 | Catálogo de 15 fallas didácticas | 4 | ☐ |
| P5.1 | Adaptación LESCO | 5 | ☐ |
| P5.2 | Adaptación portugués y francés | 5 | ☐ |
| P6.1 | Encuesta de salida | 6 | ☐ |
| P6.2 | Compromiso a 30 días y seguimiento | 6 | ☐ |
| P6.3 | Estructura de informe y análisis | 6 | ☐ |
| P7.1 | Guion de operación minuto a minuto | 7 | ☐ |
| P7.2 | Mensajes prefabricados de chat | 7 | ☐ |
| P7.3 | Banco de 25 respuestas previsibles | 7 | ☐ |
| P7.4 | Ensayo técnico y contingencias | 7 | ☐ |
| P8.1 | Auditoría adversarial de cada material | 8 | ☐ |
| P8.2 | Verificación lingüística y de nivel | 8 | ☐ |
| P8.3 | Verificación de protección de datos | 8 | ☐ |
| P8.4 | Actualización factual de septiembre | 8 | ☐ |
| P8.5 | Control transversal de consistencia y accesibilidad | 8 | ☐ |
