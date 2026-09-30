import zipfile
import xml.etree.ElementTree as ET
import os

NAMESPACES = {
    'wpc': 'http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas',
    'cx': 'http://schemas.microsoft.com/office/drawing/2014/chartex',
    'cx1': 'http://schemas.microsoft.com/office/drawing/2015/9/8/chartex',
    'cx2': 'http://schemas.microsoft.com/office/drawing/2015/10/21/chartex',
    'cx3': 'http://schemas.microsoft.com/office/drawing/2016/5/9/chartex',
    'cx4': 'http://schemas.microsoft.com/office/drawing/2016/5/10/chartex',
    'cx5': 'http://schemas.microsoft.com/office/drawing/2016/5/11/chartex',
    'cx6': 'http://schemas.microsoft.com/office/drawing/2016/5/12/chartex',
    'cx7': 'http://schemas.microsoft.com/office/drawing/2016/5/13/chartex',
    'cx8': 'http://schemas.microsoft.com/office/drawing/2016/5/14/chartex',
    'mc': 'http://schemas.openxmlformats.org/markup-compatibility/2006',
    'm': 'http://schemas.openxmlformats.org/officeDocument/2006/math',
    'aink': 'http://schemas.microsoft.com/office/drawing/2016/ink',
    'am3d': 'http://schemas.microsoft.com/office/drawing/2017/model3d',
    'oel': 'http://schemas.microsoft.com/office/2019/extlst',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'wp14': 'http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing',
    'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    'wpg': 'http://schemas.microsoft.com/office/word/2010/wordprocessingGroup',
    'wpi': 'http://schemas.microsoft.com/office/word/2010/wordprocessingInk',
    'wps': 'http://schemas.microsoft.com/office/word/2010/wordprocessingShape',
    'o': 'urn:schemas-microsoft-com:office:office',
    'v': 'urn:schemas-microsoft-com:vml',
    'w10': 'urn:schemas-microsoft-com:office:word',
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'w14': 'http://schemas.microsoft.com/office/word/2010/wordml',
    'w15': 'http://schemas.microsoft.com/office/word/2012/wordml',
    'w16cex': 'http://schemas.microsoft.com/office/word/2018/wordml/cex',
    'w16cid': 'http://schemas.microsoft.com/office/word/2016/wordml/cid',
    'w16': 'http://schemas.microsoft.com/office/word/2018/wordml',
    'w16sdtdh': 'http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash',
    'w16sdtfl': 'http://schemas.microsoft.com/office/word/2024/wordml/sdtformatlock',
    'w16se': 'http://schemas.microsoft.com/office/word/2015/wordml/symex',
    'w16du': 'http://schemas.microsoft.com/office/word/2023/wordml/word16du',
    'wne': 'http://schemas.microsoft.com/office/word/2006/wordml',
}

for prefix, uri in NAMESPACES.items():
    ET.register_namespace(prefix, uri)

W_NS = {'w': NAMESPACES['w']}

def set_p_text(p, text):
    """Preserves paragraph properties and first run formatting, replacing all text."""
    runs = p.findall('.//w:r', W_NS)
    if not runs:
        r = ET.SubElement(p, f"{{{NAMESPACES['w']}}}r")
        t = ET.SubElement(r, f"{{{NAMESPACES['w']}}}t")
        t.text = text
    else:
        first_r = runs[0]
        ts = first_r.findall('.//w:t', W_NS)
        if ts:
            ts[0].text = text
            for extra_t in ts[1:]:
                first_r.remove(extra_t)
        else:
            t = ET.SubElement(first_r, f"{{{NAMESPACES['w']}}}t")
            t.text = text
        for other_r in runs[1:]:
            p.remove(other_r)

def set_cell_text(cell, text):
    """Sets text in a table cell, preserving cell properties."""
    ps = cell.findall('.//w:p', W_NS)
    if not ps:
        p = ET.SubElement(cell, f"{{{NAMESPACES['w']}}}p")
        set_p_text(p, text)
    else:
        set_p_text(ps[0], text)
        for extra_p in ps[1:]:
            cell.remove(extra_p)

def clone_table_row(table, template_row_idx):
    """Clones a row from table to maintain borders, widths and styling."""
    rows = table.findall('.//w:tr', W_NS)
    import copy
    new_tr = copy.deepcopy(rows[template_row_idx])
    return new_tr

def update_document(source_docx_path, target_docx_path):
    print(f"Opening base docx: {source_docx_path}")
    with zipfile.ZipFile(source_docx_path, 'r') as zin:
        xml_content = zin.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        body = tree.find('w:body', W_NS)
        
        # 1. P[004]: Versión del documento
        set_p_text(body[4], "Diseño metodológico del taller · Documento de trabajo v2.5 · Septiembre 2026 (Sincronizado con Portal Web del Taller)")
        
        # 2. TBL[005]: Metadatos
        tbl_meta = body[5]
        rows_meta = tbl_meta.findall('.//w:tr', W_NS)
        # Modalidad (Row 4, Cell 1)
        cells_r4 = rows_meta[4].findall('.//w:tc', W_NS)
        set_cell_text(cells_r4[1], "Virtual, mediante Microsoft Teams. Seminario en línea con práctica simultánea apoyado en el Portal Web Interactivo del Taller (Kit Digital v2.5: index, herramientas, biblioteca, simulador, glosario)")
        # Facilitación (Row 6, Cell 1)
        cells_r6 = rows_meta[6].findall('.//w:tc', W_NS)
        set_cell_text(cells_r6[1], "Hannia León Fuentes (Universidad de Costa Rica, PROTEA) · Agustín Gómez Meléndez (UNED, Vicerrectoría de Investigación – OMiPYME; UCR – CIOdD)")
        
        # 3. P[008]: Presentación y justificación (párrafo 2)
        set_p_text(body[8], "El diseño atiende dos restricciones operativas centrales. La primera es la escala: con 254 participantes en línea y dos facilitadores, la interacción entre pares en salas simultáneas no es gestionable, de modo que la transferencia se organiza mediante demostraciones breves y siete ventanas de práctica individual cronometradas, guiadas a través del Portal Web Oficial del Taller (Kit Digital). La segunda es la heterogeneidad de condiciones técnicas y de conectividad entre las nueve Unidades Regionales, que se aborda con un sistema de respaldo de contingencia de un clic (Plan B con salidas pregeneradas), y una práctica guiada de selección, descarga, ejecución sin conexión, comparación crítica y administración de modelos de lenguaje locales en dispositivos compatibles.")
        
        # 4. P[014]..P[018]: Objetivos específicos
        set_p_text(body[14], "Operar un ciclo de trabajo replicable —encargo, instrucción, salida, verificación y adaptación al aula— mediante siete prácticas activas (PR-01 a PR-07) de complejidad creciente a lo largo de la jornada.")
        set_p_text(body[15], "Emplear el modo de voz de asistentes conversacionales (ChatGPT, Claude y Gemini) como recurso para la práctica oral, la retroalimentación fonética y la simulación de situaciones comunicativas del ámbito ocupacional del INA.")
        set_p_text(body[16], "Seleccionar, descargar, ejecutar, comparar, conservar y eliminar modelos de lenguaje locales en un teléfono compatible (AI Edge Gallery, Liquid Apollo), valorando sus requisitos, límites y pertinencia frente a servicios en la nube.")
        set_p_text(body[17], "Diseñar chatbots personalizados con salvaguardas éticas y probarlos en el Simulador Socrático web, así como construir bancos de retroalimentación para la delegación estratégica de tareas no cognitivas sin ceder el juicio pedagógico.")
        set_p_text(body[18], "Aplicar salvaguardas de protección de datos personales conforme a la Ley 8968 de Costa Rica, integridad académica, propiedad intelectual y mitigación de sesgos en toda producción asistida por IA.")
        
        # 5. P[021]..P[028]: Productos esperados
        set_p_text(body[21], "PR-01: Una instrucción completa y reutilizable, estructurada con sus cinco componentes obligatorios (Rol, Tarea/Objetivo, Formato, Restricciones y Contexto Ocupacional INA) y calibrada para inglés técnico.")
        set_p_text(body[22], "PR-02: Un banco de retroalimentación diferenciada por tipo de error recurrente, calibrado para niveles A2 y B1 sobre muestras sintéticas.")
        set_p_text(body[23], "PR-03: Un pre-mortem didáctico y conjunto de cinco micro-remedios anticipatorios para los desafíos lingüísticos más probables.")
        set_p_text(body[24], "PR-04: El bloque de instrucciones (System Prompt) de un chatbot tutor conversacional para práctica escrita con cinco salvaguardas éticas, verificado en el simulador interactivo.")
        set_p_text(body[25], "PR-05: Una secuencia didáctica de veinte minutos calibrada al MCER junto con su rúbrica analítica (escala 0-16 pts) sometida a prueba de esfuerzo con dos producciones sintéticas contrastantes.")
        set_p_text(body[26], "PR-06: Un registro breve de práctica oral con modo de voz desde el teléfono, incluida la auditoría de acentos, latencia, complacencia y pertinencia de la retroalimentación.")
        set_p_text(body[27], "PR-07: Una ficha de gestión y balance de un modelo local en el teléfono (compatibilidad, modelo seleccionado, prueba en modo avión y comparativa vs. nube), junto con el compromiso escrito de aplicación en el aula a treinta días.")
        # P[028] se unifica en el compromiso
        set_p_text(body[28], "Compromiso de adopción docente: plan de acción individual a treinta días para transferir al menos dos de los materiales elaborados al trabajo de aula.")

        # 6. P[030] & P[035]..P[038]: Metodología y condiciones
        set_p_text(body[30], "La jornada se desarrolla como seminario en línea con práctica simultánea. No se emplean salas de trabajo. Los bloques 1 a 3 alternan demostraciones conducidas y seis ventanas individuales con un ciclo estándar de 25 minutos; el bloque 4 cierra con una séptima práctica guiada de 12 minutos centrada en la gestión de modelos locales. Toda la dinámica está soportada por el Portal Web del Taller, que integra el temporizador maestro de 12 minutos, el selector interactivo de prácticas, los prompts listos para usar y las salidas de contingencia (Plan B). El control del tiempo permanece siempre en la facilitación.")
        set_p_text(body[35], "Toda consigna se enuncia oralmente, se fija por escrito en el chat de Teams y está disponible de forma permanente en el Portal Web del Taller (Kit Digital del Participante), distribuido con antelación.")
        set_p_text(body[36], "El Portal Web incluye salidas pregeneradas de respaldo (Plan B) para cada práctica: quien no cuente con acceso a una herramienta en la nube o enfrente límites de cuota, trabaja inmediatamente los pasos de verificación y adaptación crítica, asegurando el cumplimiento de los objetivos pedagógicos.")
        set_p_text(body[37], "Cada ventana incluye una tarea base y una extensión opcional vinculada a los 8 Casos Ocupacionales del INA, absorbiendo la diversidad de ritmos entre docentes.")
        set_p_text(body[38], "El micro-entregable se deposita en el formulario único de la jornada al cierre de cada ventana; es el principal mecanismo pedagógico para asegurar la participación activa en un formato con cámaras cerradas.")

        # 7. TBL[040]: Agenda de la jornada (8 Momentos y alineación exacta con SVG)
        tbl_agenda = body[40]
        agenda_rows = tbl_agenda.findall('.//w:tr', W_NS)
        agenda_data = [
            ("7:40 – 8:00", "Sala abierta. Verificación técnica y pantalla de normas y requisitos", "INA", "Sin interacción"),
            ("8:00 – 8:30", "Momento 1: Apertura institucional, rompehielos digital y encuadre del Portal Web del Taller", "INA · HL · AGM", "Sondeos y cascada de chat"),
            ("8:30 – 9:00", "Momento 2: Receso técnico. Configuración de ventanas: Portal Web y Microsoft Teams", "INA", "Instrucciones fijadas"),
            ("9:00 – 10:00", "Momento 3: Bloque 1 — Panorama y método: qué automatiza bien la IA, qué degrada y qué no debe tocar. Demostración de voz. Práctica PR-01: Generación de Práctica Oral A2 (Quejas Hotel · Contexto INA)", "AGM", "Demostración + 1 ventana de práctica (PR-01)"),
            ("10:00 – 11:30", "Momento 4: Bloque 2 — Usos no convencionales de la IA en la enseñanza de idiomas (Hannia León Fuentes). Prácticas PR-02 (Feedback diferenciado A2/B1), PR-03 (Pre-mortem y 5 microrremedios) y PR-04 (Chatbot tutor y prueba en simulador web)", "HL", "Demostración + 3 ventanas de práctica (PR-02, PR-03, PR-04)"),
            ("11:30 – 12:00", "Momento 5: Plenaria Docente Q&A curada de la mañana", "HL · AGM", "Q&A moderado"),
            ("12:00 – 1:00", "Almuerzo. La profesora León Fuentes se retira", "—", "—"),
            ("1:00 – 2:00", "Momento 6: Bloque 3 — ChatGPT y Claude en modalidad educativa: Práctica PR-05 (Secuencia didáctica MCER + Rúbrica 0-16 pts con prueba de esfuerzo) y Práctica PR-06 (Práctica oral en modo de voz y auditoría de límites)", "AGM", "Demostración + 2 ventanas de práctica (PR-05, PR-06)"),
            ("2:00 – 2:30", "Momento 7: Bloque 4 — Gestión de modelos de inteligencia artificial local en el teléfono: Práctica PR-07 (Selección, descarga, ejecución y comparativa de modelos locales vs. nube)", "AGM", "Demostración + práctica guiada (PR-07)"),
            ("2:30 – 3:00", "Momento 8: Plenaria Q&A de la tarde, encuesta de salida, compromiso a treinta días y cierre institucional", "AGM · INA", "Q&A + formulario único")
        ]
        for idx, item in enumerate(agenda_data, start=1):
            cells = agenda_rows[idx].findall('.//w:tc', W_NS)
            set_cell_text(cells[0], item[0])
            set_cell_text(cells[1], item[1])
            set_cell_text(cells[2], item[2])
            set_cell_text(cells[3], item[3])

        # 8. P[048]: Práctica 1
        set_p_text(body[48], "Práctica PR-01: redacción y calibración de la primera instrucción completa (5 componentes: Rol, Tarea, Formato, Restricciones y Contexto Ocupacional INA) sobre una situación técnica real (p. ej., atención de quejas en recepción hotelera para nivel A2).")

        # 9. TBL[051]: Bloque 2 Hannia León Fuentes
        tbl_b2 = body[51]
        b2_rows = tbl_b2.findall('.//w:tr', W_NS)
        b2_data = [
            ("PR-02  ·  10:00 – 10:30", "Seguimiento y retroalimentación al aprendizaje", "Construcción de un banco de retroalimentación diferenciada por tipo de error recurrente, a partir de una muestra sintética de producción escrita, con ajuste de registro para niveles A2 y B1."),
            ("PR-03  ·  10:30 – 11:00", "Apoyo anticipatorio ante errores frecuentes y desafíos de la docencia", "Pre-mortem didáctico: anticipar los cinco errores más probables en una tarea comunicativa determinada y generar un micro-remedio para cada uno antes de que ocurran."),
            ("PR-04  ·  11:00 – 11:30", "Construcción de chatbots personalizados para práctica escrita y tutoría socrática", "Redacción del bloque de instrucciones (System Prompt) de un asistente de nivel fijo con 5 salvaguardas éticas y prueba inmediata en el Simulador Socrático web del taller."),
            ("11:23 – 11:30", "Cierre y síntesis", "Puesta en común: qué tareas no cognitivas se delegan estratégicamente y qué juicio pedagógico no puede cederse jamás.")
        ]
        for idx, item in enumerate(b2_data, start=1):
            cells = b2_rows[idx].findall('.//w:tc', W_NS)
            set_cell_text(cells[0], item[0])
            set_cell_text(cells[1], item[1])
            set_cell_text(cells[2], item[2])

        # 10. Bloque 3: P[055]..P[057]
        set_p_text(body[55], "Práctica PR-05: diseño de una secuencia didáctica de veinte minutos, lista para usar y calibrada al MCER, junto con una rúbrica analítica (escala 0-16 pts, 4 criterios) sometida a prueba de esfuerzo con dos producciones sintéticas contrastantes mediante el Probador de Rúbricas del portal.")
        set_p_text(body[56], "Práctica PR-06: práctica oral con modo de voz desde el teléfono, en dos configuraciones —el asistente como interlocutor y como evaluador formativo de una muestra oral—, seguida de una auditoría crítica de reconocimiento de acentos, latencia, complacencia y riesgo de sustitución.")
        set_p_text(body[57], "Diferencias prácticas entre modelos de frontera (ChatGPT, Claude, Gemini), gestión de contexto y ventanas de trabajo, y límites operativos de las versiones gratuitas.")

        # 11. Bloque 4: P[060]..P[061]
        set_p_text(body[60], "Demostración en vivo, con pantalla del teléfono compartida, del flujo completo para administrar modelos locales: comprobar compatibilidad de hardware, descargar por wifi desde fuentes seguras (AI Edge Gallery, Liquid Apollo), ejecutar sin conexión en modo avión, auditar memoria y almacenamiento, y eliminar el modelo de forma controlada.")
        set_p_text(body[61], "Práctica PR-07 (guiada): inventariar modelos compatibles, ejecutar una consigna docente breve sin conexión, comparar su respuesta frente a un modelo en la nube y completar la matriz de decisión sobre cuándo conviene conservar o descartar el modelo local.")

        # 12. TBL[068]: Tabla de Herramientas
        tbl_tools = body[68]
        tools_rows = tbl_tools.findall('.//w:tr', W_NS)
        
        # Add new row for Portal Web if needed, or update rows
        # Current rows:
        # Row 1: ChatGPT voz
        # Row 2: Claude voz
        # Row 3: Gemini voz
        # Row 4: ChatGPT y Claude texto
        # Row 5: AI Edge Gallery
        # Row 6: Liquid Apollo
        # Row 7: Microsoft Forms
        # Let's clone Row 7 to make Row 8, and set Row 1 to Portal Web!
        new_row = clone_table_row(tbl_tools, 1)
        tbl_tools.append(new_row)
        
        # Now we have 9 rows (Header + 8 tool rows)
        all_tool_rows = tbl_tools.findall('.//w:tr', W_NS)
        tools_data = [
            ("Portal Web del Taller (Kit Digital v2.5)", "Ecosistema central: Stepper PR-01..PR-07, temporizador 12m, Asistente de Prompts, Probador de Rúbricas, Casos Ocupacionales, Simulador Socrático, Biblioteca RAG 41 PDFs y salidas Plan B", "Navegador web moderno en computadora de escritorio o portátil", "Funciona en línea y de forma local/offline; sin costo de licencia ni requerimiento de registro"),
            ("ChatGPT · modo de voz", "Demostración (bloque 1) y práctica oral (práctica PR-06)", "Cuenta gratuita creada antes del 3 de octubre; aplicación móvil instalada", "El modo de voz avanzado tiene límites de uso diario en la versión gratuita"),
            ("Claude · modo de voz", "Demostración comparativa y práctica oral (práctica PR-06)", "Cuenta gratuita; aplicación móvil instalada", "Disponible en la aplicación móvil; verificar disponibilidad de idiomas"),
            ("Gemini · modo de voz", "Demostración comparativa de interacción oral", "Cuenta de Google; aplicación móvil instalada", "Integración variable según dispositivo y región"),
            ("ChatGPT y Claude · texto", "Prácticas PR-01 a PR-05 y calibración en computadora", "Sesión abierta en el navegador de la computadora", "Límites de mensajes en versiones gratuitas; planificar el ritmo"),
            ("AI Edge Gallery", "Demostración y práctica guiada de modelos locales (práctica PR-07)", "Instalación previa, dispositivo compatible y descarga por wifi de un modelo pequeño", "Verificar compatibilidad, permisos, procesamiento local, licencia y espacio disponible antes del taller"),
            ("Liquid Apollo", "Demostración y práctica guiada de modelos locales (práctica PR-07)", "Instalación previa y descarga por wifi de un modelo compatible", "Disponibilidad, compatibilidad y funciones deben verificarse nuevamente antes del taller"),
            ("Microsoft Forms", "Sondeos en vivo, formulario único de la jornada y encuestas de entrada y salida", "Ninguno adicional", "Configurar respuestas múltiples y sección por ciclo de práctica")
        ]
        for idx, item in enumerate(tools_data, start=1):
            cells = all_tool_rows[idx].findall('.//w:tc', W_NS)
            set_cell_text(cells[0], item[0])
            set_cell_text(cells[1], item[1])
            set_cell_text(cells[2], item[2])
            set_cell_text(cells[3], item[3])

        # 13. P[084]: Salvaguardas éticas
        set_p_text(body[84], "Referencias de encuadre institucional: Ley 8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales (Costa Rica, PRODHAB), Marco de Competencias en IA para Docentes de la UNESCO, Estrategia Nacional de Inteligencia Artificial de Costa Rica y normativa técnica del INA.")

        # 14. P[092]: Requisitos participantes
        set_p_text(body[92], "Acceder y explorar previamente el Portal Web del Taller (Kit Digital del Participante), que incluye la Suite de Herramientas Docentes, el banco de 8 casos ocupacionales del INA, las plantillas de instrucción, las consignas de cada ventana y las salidas pregeneradas de respaldo (Plan B).")

        # 15. Anexo B: Consigna de las ventanas de práctica (P[124]..P[128])
        set_p_text(body[124], "Trabaje con un objetivo real de su clase o seleccione uno de los 8 Casos Ocupacionales del INA disponibles en la Suite del portal: nivel del Marco Común Europeo, destreza y perfil técnico del grupo.")
        set_p_text(body[125], "Su instrucción debe estructurarse mediante los cinco componentes obligatorios: 1) Rol pedagógico; 2) Tarea y objetivo; 3) Formato de salida exacto; 4) Restricciones de extensión, vocabulario y tiempo; y 5) Contexto ocupacional técnico del INA.")
        set_p_text(body[126], "Lea críticamente la salida generada y audite cualquier error: descalibración de nivel MCER, vocabulario impreciso, sesgos culturales, complacencia excesiva o datos inventados.")
        set_p_text(body[127], "Deposite el resultado y su hallazgo principal en el formulario único de la jornada, o consulte el Plan B en el portal si requiere contrastar con una salida de respaldo.")
        set_p_text(body[128], "Regla de oro de protección de datos (Ley 8968): no ingrese jamás nombres reales, números de cédula, notas ni expedientes de estudiantes en ninguna herramienta de IA.")

        # 16. P[130]: Nota final
        set_p_text(body[130], "Nota final. Este documento consolida el programa metodológico v2.5 del taller, sincronizado con el Portal Web del Taller, el protocolo de siete prácticas activas (PR-01 a PR-07), el diagrama vectorial de la ruta pedagógica, la Suite de Herramientas Docentes, la biblioteca RAG de 41 documentos y el marco de gobernanza Ley 8968.")

        # Serialize modified XML
        new_xml_bytes = ET.tostring(tree, encoding='utf-8', xml_declaration=True)
        print(f"Generated new XML: {len(new_xml_bytes)} bytes")
        
        # Read core.xml and update revision and description
        core_xml = zin.read('docProps/core.xml').decode('utf-8')
        core_xml = core_xml.replace('v2.0: protocolo de siete prácticas, bloques 3 y 4 consolidados y biografías actualizadas.',
                                    'v2.5: Programa metodológico actualizado y sincronizado con el Portal Web del Taller v2.5, Suite de Herramientas, 7 Prácticas Activas y Ley 8968.')
        core_xml = core_xml.replace('<cp:revision>2</cp:revision>', '<cp:revision>3</cp:revision>')

    # Write target docx
    print(f"Writing updated docx to: {target_docx_path}")
    with zipfile.ZipFile(source_docx_path, 'r') as zin:
        with zipfile.ZipFile(target_docx_path, 'w') as zout:
            for item in zin.infolist():
                if item.filename == 'word/document.xml':
                    zout.writestr(item, new_xml_bytes)
                elif item.filename == 'docProps/core.xml':
                    zout.writestr(item, core_xml.encode('utf-8'))
                else:
                    zout.writestr(item, zin.read(item.filename))
    print("Docx successfully updated and validated.")

if __name__ == '__main__':
    update_document('09_Programa_Actualizado/INA-Taller-IA-Idiomas-6oct2026_v2.docx', 'scratch/updated_v2_5.docx')
