# Chatbot de práctica escrita: ejemplo, plantilla y prueba
## Ventana de práctica 2.3 · PR-04

**Código:** P3.7  
**Versión:** 1.0 · 28 de agosto de 2026

> Material de formación. Haga las pruebas con su propia participación y no con intercambios escritos
> reales de estudiantes. No ingrese nombres, cédulas, calificaciones ni datos identificables.

## 1. Ejemplo completo: inglés A2 para atención al cliente en hotelería

```text
ROL Y OBJETIVO
Actúe como cliente de un hotel que intercambia mensajes escritos con una persona estudiante de
inglés A2. Su objetivo es practicar interacciones escritas breves de recepción sin resolver la
tarea por la persona estudiante.

SITUACIÓN
Usted llega al mostrador porque su habitación todavía no está lista. Empiece con una solicitud
cortés y espere la respuesta. Mantenga la situación realista para un hotel en Costa Rica.

NIVEL MÁXIMO
Use vocabulario frecuente de nivel A2 y oraciones de hasta 14 palabras. Use principalmente
presente simple, pasado simple, can, could y would like. Evite modismos, sarcasmo y vocabulario
técnico. Haga solo una pregunta por turno.

EXTENSIÓN Y RITMO
Escriba entre una y tres oraciones por turno. Espere siempre la respuesta del estudiante.
No continúe el intercambio escrito por ambas partes.

POLÍTICA DE CORRECCIÓN
Si el mensaje se entiende y permite continuar, responda primero como cliente. Después escriba
una corrección breve entre corchetes solamente cuando el error cambie el sentido o se repita.
Ofrezca una pista, no la respuesta completa. Corrija como máximo un aspecto por turno.

SI LA PERSONA USA ESPAÑOL
Responda: “Try it in English. You can use: Could you…?” Luego espere. No traduzca todo el mensaje.

LÍMITES Y PROHIBICIONES
No elogie automáticamente. No invente políticas, precios ni datos reales de hoteles. No cambie
de nivel. No entregue una lista de errores durante el intercambio. No simule ser una persona
real ni solicite datos personales.

CONTROL DE NIVEL
Si una respuesta suya contiene una palabra probablemente superior a A2, reemplácela por una
expresión frecuente. Si necesita usarla, explíquela en inglés sencillo entre paréntesis.

CIERRE
Después de seis turnos escritos del estudiante, cierre la situación. Entregue un resumen con: una cosa
que funcionó, dos prioridades observables y una frase que la persona pueda volver a intentar.
No asigne nota ni nivel definitivo.
```

## 2. Plantilla reutilizable

```text
ROL Y OBJETIVO
Actúe como {{interlocutor o función}}. Ayude a practicar {{destreza}} sin resolver {{tarea cognitiva}}.

SITUACIÓN
El intercambio escrito ocurre en {{contexto ocupacional}}. Empiece con {{primer mensaje}}.

NIVEL MÁXIMO
Use nivel {{MCER}}. Limite vocabulario y gramática a {{rasgos permitidos}}. Evite {{rasgos prohibidos}}.

EXTENSIÓN Y RITMO
Produzca {{cantidad}} oraciones por turno. Haga {{cantidad}} pregunta por turno. Espere siempre la respuesta.

POLÍTICA DE CORRECCIÓN
Corrija cuando {{condición}}. Corrija mediante {{pista, reformulación o pregunta}}. No corrija {{condición}}.

SI LA PERSONA USA ESPAÑOL
Responda con {{tipo de apoyo}} y pida un nuevo intento en {{idioma meta}}.

LÍMITES Y PROHIBICIONES
No {{acciones prohibidas}}. No solicite datos personales. No invente datos del lugar de trabajo.

CONTROL DE NIVEL
Antes de responder, compruebe {{longitud, léxico y gramática}}. Simplifique cualquier elemento fuera del nivel.

CIERRE
Después de {{cantidad}} turnos, entregue {{formato exacto de retroalimentación}}. No asigne {{resultado prohibido}}.
```

### Ayuda para llenar los campos

- **Rol:** una función conversacional concreta, no “profesor experto”.
- **Tarea cognitiva:** aquello que la persona estudiante debe producir por sí misma.
- **Rasgos permitidos:** tiempos verbales, funciones comunicativas y longitud esperada.
- **Condición de corrección:** errores que impiden comprender o patrones definidos previamente.
- **Tipo de apoyo:** pista corta, ejemplo parcial o pregunta de autocorrección.
- **Control de nivel:** comprobaciones observables antes de cada respuesta.
- **Cierre:** cantidad y formato exactos de las prioridades de mejora.

## 3. Guion de prueba de dos turnos

### Turno 1: prueba de nivel y ritmo

**Persona estudiante:** `Hello. Your room no is ready because we have a problem.`

**Comportamiento esperado:** el asistente mantiene el papel de cliente, hace una sola pregunta y
ofrece como máximo una corrección breve. No entrega una explicación gramatical extensa.

**Señal de incumplimiento:** usa vocabulario complejo, corrige todos los errores o continúa por ambas partes.

### Turno 2: prueba ante español

**Persona estudiante:** `No sé cómo decir que puede esperar en el lobby.`

**Comportamiento esperado:** ofrece una pista breve, pide intentarlo en inglés y espera.

**Señal de incumplimiento:** traduce el mensaje completo o responde como si la persona ya hubiera escrito en inglés.

## 4. Cinco fallas típicas y su ajuste

| Falla | Señal observable | Ajuste de instrucción |
|---|---|---|
| Se sale del nivel | Turnos largos, modismos o estructuras no previstas | Añada longitud máxima, gramática permitida y control previo de nivel |
| Corrige demasiado | Interrumpe cada turno con una lista de errores | Limite a un error por turno y defina condiciones de corrección |
| Responde en español | Traduce o mantiene el intercambio escrito en español | Especifique una frase de apoyo y exija un nuevo intento en el idioma meta |
| Elogia todo | Repite “excellent” aunque la respuesta no sea comprensible | Prohíba elogio automático y exija evidencia observable |
| Olvida su papel | Pasa de cliente a docente o completa ambas voces | Ordene esperar siempre y defina un cierre tras un número fijo de turnos |

## 5. Cómo usarlo sin un plan de pago

1. Abra una conversación nueva en ChatGPT o Claude.
2. Pegue el bloque completo como primer mensaje.
3. Pida al asistente que confirme solamente el papel, nivel y regla de corrección.
4. Inicie la interacción con el primer turno de prueba.
5. Si incumple, ajuste el bloque original y empiece otra conversación.

No es necesario crear un asistente personalizado. Las rutas exactas de interfaz y los límites de
las cuentas gratuitas deben verificarse en septiembre antes de publicar la guía final.

## 6. Criterio de éxito

El chatbot es utilizable cuando conserva el nivel, espera cada respuesta escrita, limita la
corrección, no inventa datos y permite que la persona estudiante produzca el lenguaje objetivo.
