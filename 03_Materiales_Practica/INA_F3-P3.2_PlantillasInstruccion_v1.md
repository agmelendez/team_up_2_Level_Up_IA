# Plantillas de instrucción para docentes
## Juego reutilizable para ChatGPT y Claude

**Código:** P3.2  
**Versión:** 1.0 · 28 de agosto de 2026

> No ingrese nombres, cédulas, calificaciones, grabaciones ni datos identificables de estudiantes.
> Describa el grupo de manera general y utilice muestras sintéticas.

## 1. Plantilla maestra de cinco componentes

### Los cinco componentes obligatorios

1. **Rol y objetivo:** qué función cumple la herramienta y qué debe lograr.
2. **Nivel y destreza:** nivel MCER y habilidad lingüística prioritaria.
3. **Contexto ocupacional:** situación real de trabajo y perfil general del grupo.
4. **Formato exacto:** estructura, apartados, tabla, lista o secuencia esperada.
5. **Restricciones:** extensión, vocabulario, gramática, duración y aquello que no debe hacer.

### Plantilla en blanco

```text
Actúe como {{rol profesional o pedagógico}}. Su objetivo es {{resultado concreto}}.

Trabaje para un grupo de nivel {{MCER}} que practica {{destreza principal}}. El grupo necesita
usar el idioma en {{contexto ocupacional y situación comunicativa}}.

Entregue exactamente {{formato de salida y apartados}}.

Restricciones: {{extensión}}, {{vocabulario o gramática permitidos}}, {{tiempo disponible}},
{{condiciones de accesibilidad}}. No {{acciones prohibidas}}.

Antes de finalizar, compruebe: adecuación al nivel, viabilidad en el tiempo, claridad de las
instrucciones y ausencia de datos inventados. Marque cualquier supuesto que necesite validación.
```

### Ejemplo resuelto

```text
Actúe como diseñador de actividades de inglés para fines ocupacionales. Su objetivo es crear
una práctica breve para recibir una queja en el mostrador de un hotel.

Trabaje para un grupo A2 que practica interacción oral. Son personas adultas en formación para
servicio al cliente en turismo.

Entregue exactamente: objetivo observable, preparación de dos minutos, guion de cuatro turnos,
lista de cinco expresiones útiles y comprobación final de dos preguntas.

Restricciones: actividad total de 12 minutos; instrucciones en español; intervenciones en inglés
de hasta 12 palabras; presente simple, pasado simple y can. No invente políticas del hotel ni
produzca las respuestas completas del estudiante.

Antes de finalizar, compruebe nivel, duración, claridad y supuestos.
```

### Resultado esperado

La salida debe poder aplicarse sin reformular la consigna, respetar A2, caber en 12 minutos y
dejar la producción principal en manos de la persona estudiante.

## 2. Planificar una clase

### Plantilla

```text
Actúe como diseñador instruccional de enseñanza de idiomas. Cree una clase de {{duración}} para
alcanzar {{objetivo observable}}.

Nivel {{MCER}}; destreza principal {{destreza}}; destreza secundaria {{destreza}}. Contexto:
{{área ocupacional, situación y condición del grupo}}.

Entregue una secuencia con minutos, acción docente, acción del estudiante, recurso, evidencia
de aprendizaje y plan B sin conexión.

Use {{lengua de instrucciones}}. Limite el contenido a {{rasgos lingüísticos}}. No agregue tareas
que excedan el tiempo ni suponga acceso a herramientas no indicadas.
```

### Ejemplo llenado

Clase de 45 minutos, inglés A2, atención al cliente, objetivo: confirmar datos de una reserva
telefónica. Grupo de 18 personas con niveles mixtos y sin internet. Salida en tabla, con cuatro
momentos, evidencia observable y extensión opcional para quienes terminen antes.

**Suele salir mal:** la herramienta suma actividades que exceden 45 minutos. Exija minutos por
actividad y una comprobación aritmética final.

## 3. Generar una lectura calibrada

### Plantilla

```text
Actúe como autor y revisor de materiales de lectura. Escriba un texto de nivel {{MCER}} para
practicar {{subdestreza de lectura}}.

Contexto: {{situación ocupacional}}. La persona lectora necesita {{acción auténtica posterior}}.

Entregue: texto, glosario de {{cantidad}} palabras, {{cantidad}} preguntas y clave separada.

Extensión: {{palabras}}. Use {{tiempos, funciones y léxico}}. Evite {{elementos fuera de nivel}}.
No invente cifras, normas, empresas ni procedimientos reales. Señale cualquier supuesto.
```

### Ejemplo llenado

Texto A2 de 150 palabras sobre instrucciones ficticias de ingreso a un hotel. Practica localizar
horas, lugares y acciones. Incluye seis palabras, cinco preguntas y clave. Usa imperativos,
presente simple y vocabulario frecuente; no incluye políticas reales ni información turística.

**Suele salir mal:** el texto usa vocabulario avanzado aunque las preguntas sean fáciles. Pida una
lista de palabras potencialmente superiores al nivel y reemplácelas antes de usarlo.

## 4. Diseñar una actividad de expresión oral

### Plantilla

```text
Actúe como diseñador de práctica oral. Cree una actividad para que la persona estudiante produzca
{{función comunicativa}} en nivel {{MCER}}.

Contexto: {{puesto y situación}}. Destreza secundaria: {{escucha, interacción o pronunciación}}.

Entregue: preparación, consigna, apoyo lingüístico, turnos, criterio de observación y cierre.

Duración total: {{minutos}}. Cada turno debe durar {{límite}}. Use {{rasgos permitidos}}. No escriba
un diálogo completo que pueda leerse sin tomar decisiones.
```

### Ejemplo llenado

Actividad A2 de 12 minutos para ofrecer dos soluciones ante una queja en una tienda. Incluye
seis expresiones de apoyo, cuatro turnos, una variación y dos criterios observables. La persona
estudiante debe elegir la solución y justificarla con una frase.

**Suele salir mal:** la salida se convierte en lectura dramatizada. Prohíba el diálogo completo
y exija información distinta para cada participante o turno.

## 5. Construir una rúbrica

### Plantilla

```text
Actúe como especialista en evaluación de {{idioma}}. Construya una rúbrica analítica para
{{producto o desempeño}}, nivel {{MCER}}, en {{contexto ocupacional}}.

Entregue {{cantidad}} criterios y {{cantidad}} niveles. Cada descriptor debe nombrar una conducta
observable y distinguirse del nivel contiguo. Agregue espacio para evidencia textual.

No evalúe esfuerzo, personalidad ni conocimientos no enseñados. No use “excelente”, “adecuado”
o “deficiente” sin describir evidencia. Incluya dos señales para detectar doble penalización.
```

### Ejemplo llenado

Rúbrica B1 para responder por correo una queja de entrega. Cuatro criterios y cuatro niveles:
cumplimiento comunicativo, organización, control lingüístico y adecuación profesional. Cada
decisión requiere una evidencia breve y se prueba con dos textos sintéticos contrastantes.

**Suele salir mal:** los niveles repiten el mismo descriptor con adverbios. Exija cambios en
conductas, efecto sobre la comprensión o componentes completados.

## 6. Redactar retroalimentación individual

### Plantilla

```text
Actúe como asistente de retroalimentación formativa. Analice únicamente la muestra sintética
incluida después de esta instrucción.

Nivel {{MCER}}; destreza {{destreza}}; objetivo enseñado {{objetivo}}; contexto {{situación}}.

Entregue: una fortaleza con evidencia, dos prioridades, una pista por prioridad y una microrremediación
de cinco minutos. Redacte el comentario al estudiante en {{idioma y nivel}}.

No corrija todo el texto, no asigne nota y no elogie sin evidencia. Si falta información,
indique el límite en lugar de inventarla.

MUESTRA SINTÉTICA:
{{texto}}
```

### Ejemplo llenado

Muestra sintética A2: correo breve para confirmar una visita técnica. Objetivo enseñado: pasado
simple y expresiones de horario. Retroalimentación en inglés A2, con dos prioridades y una tarea
de reconstrucción de cuatro frases.

**Suele salir mal:** la herramienta reescribe todo y borra la voz del estudiante. Limite a dos
patrones y exija pistas antes que respuestas completas.

## 7. Diferenciar una actividad en tres niveles

### Plantilla

```text
Actúe como diseñador de diferenciación. Adapte la misma actividad para {{tres niveles o perfiles}}
sin cambiar su objetivo central: {{objetivo observable}}.

Contexto ocupacional: {{situación}}. Destreza principal: {{destreza}}.

Entregue una matriz con: apoyo inicial, complejidad lingüística, cantidad de producción, reto y
evidencia común. Mantenga el mismo tiempo y producto esencial.

No convierta el nivel inicial en una tarea distinta ni reduzca la participación. No use etiquetas
de capacidad para describir personas. Explique qué cambia y qué permanece constante.
```

### Ejemplo llenado

Actividad de inglés para responder una consulta telefónica, diferenciada para A1 alto, A2 y B1.
Todos identifican la necesidad y ofrecen una acción. Cambian el apoyo, la longitud y la necesidad
de justificar; el tiempo, la situación y la evidencia central permanecen constantes.

**Suele salir mal:** el nivel inicial solo completa espacios y nunca produce lenguaje. Exija una
decisión oral auténtica en las tres versiones, aunque cambie la longitud.

## 8. Comprobación común antes de usar una salida

- ¿La actividad cabe en el tiempo indicado?
- ¿El lenguaje corresponde realmente al nivel declarado?
- ¿La persona estudiante conserva la producción y la decisión principal?
- ¿El contexto ocupacional es verosímil y no contiene datos inventados?
- ¿El formato permite aplicar el material sin volver a preguntar?
- ¿Existe una opción sin cuenta, aplicación o conexión?
- ¿Se excluyeron datos personales y muestras reales?
