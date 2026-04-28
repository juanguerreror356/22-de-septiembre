# MEDACCER — Evolución profunda UX/UI + Estrategia de Producto (v2)

## 0) Objetivo de esta evolución

Transformar MEDACCER de “producto genérico para consultorios” a una experiencia **verticalizada por especialidad**, manteniendo una sola plataforma SaaS multi-tenant:

- Landing dinámica por especialidad (mensaje, demo, ROI, prueba social, casos de uso).
- Selector LATAM por país con adaptación de moneda, regulación y tono.
- Onboarding y CRM con **capas configurables** por especialidad.
- Biblioteca de contenidos por especialidad para adquisición orgánica.
- Look & feel premium (dark-first, microinteracciones sutiles, ritmo visual con más aire).

---

## 1) North Star y principio de diseño

### North Star Metric
**Consultas efectivamente recuperadas/retendidas por consultorio por mes** (no-shows evitados + reactivaciones + adherencia de seguimiento).

### Principios UX
1. **“Hecho para mí” en 3 segundos** (especialidad visible en el primer viewport).
2. **Tiempo a valor mínimo** (el doctor ve un flujo útil sin configurar 40 cosas).
3. **Confianza clínica y legal** (privacidad, límites de IA, auditoría).
4. **Una sola plataforma, múltiples verticales** (core reutilizable + módulos por especialidad).
5. **Mobile-first real** (decisores y usuarios operan desde celular).

---

## 2) Sistema visual premium (manteniendo paleta actual)

## Tokens base
- Fondo principal: `#0A1628`
- Primario: `#2563EB`
- Secundario acento: `#06B6D4`
- Énfasis/alerta: `#F59E0B`

## Escala complementaria sugerida
- Surface-1: `#0F1F35`
- Surface-2: `#132642`
- Border soft: `rgba(148,163,184,.22)`
- Text high: `#E5ECF6`
- Text mid: `#A7B4C8`
- Text low: `#7E8AA0`

## Acentos por especialidad (sutiles, sobre dark)
- Odontología: cyan (`#22D3EE`)
- Cirugía plástica: rose (`#FB7185`)
- Dermatología: coral (`#FB8A6B`)
- Psicología: violeta (`#8B5CF6`)
- Nutrición: verde menta (`#34D399`)
- Fisioterapia: índigo suave (`#818CF8`)
- Ginecología: magenta suave (`#EC4899`)
- Pediatría: verde (`#22C55E`)
- Oftalmología: azul profundo (`#3B82F6`)

## Tipografía
- UI: **Inter** (fallback: system-ui)
- Display/marketing: **Plus Jakarta Sans** para titulares clave.
- Jerarquía:
  - H1: 56/60 desktop, 36/40 mobile
  - H2: 40/44 desktop, 28/32 mobile
  - Body lg: 20/32
  - Body: 16/26
  - Label: 13/18

## Microinteracciones
- Duración: 160–260ms.
- Curva: `cubic-bezier(0.2, 0.8, 0.2, 1)` tipo Linear/Vercel.
- Elevaciones suaves (shadow blur amplio + baja opacidad).
- “Scroll reveal” con opacidad + translateY 8px (sin rebote).

---

## 3) Landing v2 — arquitectura de información

1. Header sticky + selector país.
2. Hero dinámico por especialidad (selector prominente).
3. Prueba de valor inmediata (ROI + dolor + propuesta única).
4. Demo interactivo WhatsApp (animado por especialidad).
5. Casos de uso / funcionalidades destacadas por especialidad.
6. Integraciones y cumplimiento regulatorio local.
7. Pricing (plan recomendado resaltado).
8. Testimonios segmentados por especialidad y ciudad.
9. Blog y recursos por especialidad.
10. CTA final + formulario leads por país “próximamente”.

---

## 4) Hero dinámico por especialidad (contenido de producto)

## Comportamiento
Al seleccionar especialidad se actualiza en el mismo viewport:
- Headline
- Subheadline
- Mockup de teléfono (escenario conversacional)
- KPI/ROI
- Testimonio principal
- Bloque “cómo funciona para su especialidad”
- CTA contextual

## Mapa de contenido (copy final)

### Odontología
- Headline: **“Su consultorio dental nunca duerme”**
- Dolor: presupuestos de alto valor abandonados por falta de seguimiento.
- Propuesta única: recuperación automática de presupuestos + facilidades de pago.
- KPI destacado: “pierden $10.8M COP/mes en no-shows; MEDACCER reduce 52% inasistencias”.
- Demo: diseño de sonrisa → precio + agenda → cita creada.
- Features:
  1) Seguimiento de presupuestos pendientes  
  2) Recordatorio fase 2 tratamiento  
  3) Notas clínicas por voz post-procedimiento  
  4) Generación automática RDA (Res. 1888)

### Cirugía plástica
- Headline: **“El seguimiento post-operatorio que salva reputaciones”**
- Dolor: alto riesgo reputacional por mala comunicación post-op.
- Propuesta: secuencias día 1/3/7/15/30/90 + alertas por señales de riesgo.
- KPI: 78% de demandas originadas por falta de comunicación post-op.
- Demo: post-rinoplastia día 7 con foto + clasificación de riesgo.
- Features:
  1) Secuencias post-quirúrgicas por procedimiento  
  2) Galería antes/después por paciente  
  3) Instrucciones pre-quirúrgicas automatizadas  
  4) Detección IA de alertas en respuestas

### Dermatología
- Headline: **“Deje de recibir fotos de piel por WhatsApp sin contexto”**
- Dolor: consultas no remuneradas y desorden de evidencia fotográfica.
- Propuesta: clasificación y guardado estructurado + conversión a consulta pagada.
- KPI: 4 horas/semana perdidas en consultas no remuneradas.
- Demo: foto de lunar → archivado → oferta de cita.
- Features:
  1) Organización fotográfica por paciente/fecha  
  2) Seguimiento de evolución de lesiones  
  3) Recordatorio de controles anuales  
  4) Conversión de consultas gratis en citas

### Psicología
- Headline: **“El espacio seguro entre sesiones”**
- Dolor: cancelaciones por ansiedad/vergüenza/desmotivación.
- Propuesta: check-ins empáticos administrativos y reducción de ansiedad pre-cita.
- KPI: reducir 30% cancelaciones ≈ +$2.4M COP/mes (2 psicólogos).
- Demo: check-in empático + confirmación de sesión.
- Features:
  1) Check-ins empáticos configurables  
  2) Notas por voz con máxima confidencialidad  
  3) Recordatorios con tono terapéutico  
  4) Cifrado extremo
- Mensaje de confianza prominente:
  - **“MEDACCER nunca almacena contenido clínico de sesiones; solo datos administrativos y operativos.”**

### Nutrición
- Headline: **“Que su plan alimenticio no muera en el refrigerador”**
- Dolor: abandono del plan tras semana 2.
- Propuesta: seguimiento semanal + reporte de adherencia previo al control.
- Demo: check-in semanal + reencuadre empático + cita.
- Features:
  1) Check-in semanal adherencia  
  2) Reporte de adherencia para nutricionista  
  3) Recordatorio de suplementos  
  4) Agenda automática de controles

### Fisioterapia
- Headline: **“Que su paciente no abandone en la sesión 4 de 20”**
- Dolor: tratamientos largos con abandono temprano.
- Propuesta: recordatorios de ejercicios + tracking de avance + adherencia.
- Demo: rutina diaria con respuesta rápida 1/2/3.
- Features:
  1) Tracker de ejercicios en casa  
  2) Barra de progreso tratamiento  
  3) Recordatorio por sesión presencial  
  4) Reporte adherencia fisioterapeuta

### Ginecología
- Headline: **“Acompañe cada embarazo semana a semana, sin esfuerzo”**
- Dolor: múltiples hitos críticos que se olvidan.
- Propuesta: timeline obstétrico automático + alertas de retraso.
- Demo: semana 20 → ecografía morfológica → agenda.
- Features:
  1) Timeline automático embarazo  
  2) Recordatorio de exámenes por trimestre  
  3) Alertas por atraso en controles  
  4) Canal seguro para dudas frecuentes

### Pediatría
- Headline: **“Los padres preguntan a las 2AM. Su bot responde.”**
- Dolor: demanda 24/7 imposible de cubrir manualmente.
- Propuesta: respuestas frecuentes validadas + escalado clínico cuando aplica + vacunas.
- Demo: fiebre 38.5°C → instrucciones seguras + opción de cita.
- Features:
  1) Respuestas 24/7 a dudas frecuentes  
  2) Calendario de vacunación por hijo  
  3) Alertas de vacunas pendientes  
  4) Gestión multi-hijo

### Oftalmología
- Headline: **“Que la cirugía de $5M no se pierda por un mensaje sin leer”**
- Dolor: pérdida de cirugías por mala preparación preoperatoria.
- Propuesta: checklist paso a paso + confirmación de comprensión + alertas.
- Demo: LASIK viernes → checklist → confirmación.
- Features:
  1) Checklist pre-quirúrgico interactivo  
  2) Confirmación de preparación  
  3) Seguimiento post-quirúrgico (gotas/controles)  
  4) Recordatorio control anual visual

---

## 5) Selector país LATAM-first

## Países
- 🇨🇴 Colombia (**activo**)
- 🇲🇽 México (próximamente)
- 🇨🇱 Chile (próximamente)
- 🇵🇪 Perú (próximamente)
- 🇦🇷 Argentina (próximamente)
- 🇪🇨 Ecuador (próximamente)

## Comportamiento funcional
- Cambia moneda:
  - Colombia COP
  - México MXN
  - Chile CLP
  - Perú PEN
  - Argentina ARS
  - Ecuador USD
- Cambia referencia regulatoria y microcopy legal.
- Cambia variantes idiomáticas (ustedes/vos; ejemplos locales).
- Adapta rangos de precios y ejemplos ROI al mercado.

## Estado por ahora
Para países no activos, abrir modal o drawer:
- Título: “Próximamente en [País]”.
- Subtexto: “Deja tu email para ser de los primeros.”
- Campos: email, especialidad, tamaño de consultorio.
- CTA: “Quiero acceso anticipado”.

---

## 6) Demo interactivo WhatsApp (hero)

## Requisitos UX
- Animación suave de mensajes en tiempo real.
- Tiempo total por escenario: 16–22s loop.
- Pausas micro de lectura (700–1200ms).
- Botones quick-replies según especialidad.
- Estado de “escribiendo...” + timestamp sutil.

## Estructura técnica
- `specialtyScenarios[specialty] = [{role, text, delay, chips, status}]`
- Motor de timeline con `requestAnimationFrame` + control por preferencia `prefers-reduced-motion`.
- Fallback estático en low power devices.

---

## 7) Pricing v2

## Planes
- Starter
- **Asistente IA (recomendado) — 169K COP**
- Escala clínica

## Diseño del plan recomendado
- Borde brillante en gradiente primario/cyan.
- Badge “Más elegido por consultorios de [especialidad seleccionada]”.
- Mini prueba social contextual.

## Bloques de confianza
- Sin permanencia forzada.
- Cumple Ley 1581.
- Integración WhatsApp oficial.

---

## 8) Testimonios (placeholders realistas)

Formato:
- Foto placeholder redonda.
- Nombre + especialidad + ciudad.
- Quote corto de beneficio tangible.

Ejemplos:
- “Dra. María López — Odontóloga, Bogotá. ‘MEDACCER me devolvió 1 hora de mi día.’”
- “Dr. Javier Morales — Fisioterapeuta, Medellín. ‘Ahora sé qué pacientes sí hacen ejercicios en casa.’”
- “Dra. Paula Rojas — Psicóloga, Cali. ‘Subió mi asistencia sin comprometer la confidencialidad.’”

---

## 9) Registro + onboarding (adaptativo por especialidad)

## Flujo
1. Crear cuenta.
2. Elegir país + especialidad + tamaño consultorio.
3. Conectar WhatsApp (wizard guiado).
4. Definir disponibilidad/agenda base.
5. Activar 3 automatizaciones sugeridas por especialidad.
6. Primer mensaje de prueba.

## Personalización automática
- Plantillas de mensajes por especialidad.
- Servicios preconfigurados según vertical.
- Dashboard inicial con KPIs relevantes.

## Empty states premium
- Ilustración mínima + mensaje útil + CTA de siguiente acción.
- Ejemplo: “Aún no hay pacientes con seguimiento. Active su primer check-in en 2 minutos.”

---

## 10) CRM adaptable por especialidad (sin romper core)

## Arquitectura de UX
- Core común: pacientes, agenda, conversaciones, automatizaciones, finanzas, settings.
- Capa specialty-config:
  - widgets dashboard
  - campos extra en ficha
  - templates de mensajes
  - eventos de seguimiento

## Config schema sugerido
```ts
interface SpecialtyConfig {
  id: 'odontologia' | 'psicologia' | 'cirugia_plastica' | ...
  dashboardWidgets: WidgetId[]
  patientFields: FieldDef[]
  defaultServices: ServiceSeed[]
  automations: AutomationTemplate[]
  alerts: AlertRule[]
  privacyEmphasis?: boolean
}
```

## Ejemplos mínimos por especialidad
- Odontología:
  - Widgets: presupuestos pendientes, no-shows, RDA pendiente.
  - Ficha: plan de tratamiento por fases.
  - Servicios seed: limpieza, blanqueamiento, ortodoncia.
  - Placeholder roadmap: odontograma.

- Psicología:
  - Widgets: sesiones semana, adherencia, check-ins.
  - Ficha: ocultar contenido clínico por defecto.
  - Servicios seed: individual, pareja, infantil, grupal.
  - UI: candado prominente + texto de privacidad.

- Cirugía plástica:
  - Widgets: pacientes en recuperación, alertas post-op.
  - Ficha: galería antes/después + timeline recuperación.
  - Servicios seed: procedimientos con ventana recuperación.

Aplicar la misma lógica a dermatología, nutrición, fisioterapia, ginecología, pediatría, oftalmología.

---

## 11) Blog y contenido por especialidad

## Nuevas rutas
- `/blog/odontologia`
- `/blog/psicologia`
- `/blog/cirugia-plastica`
- mantener `/blog/resolucion-1888`

## Modelo editorial
- 1 guía práctica semanal por vertical activa.
- Plantillas descargables (scripts de WhatsApp, checklists, flujos).
- CTA contextual: “Ver automatización de esta guía en demo”.

## Taxonomía
- `especialidad`
- `etapa_paciente` (captación, confirmación, adherencia, post-op)
- `tipo` (playbook, regulación, ROI, script)

---

## 12) Copys críticos de confianza (health SaaS)

- “MEDACCER no diagnostica ni reemplaza criterio clínico.”
- “Tus datos están cifrados en tránsito y en reposo.”
- “Control de acceso por roles y auditoría de eventos.”
- Psicología (visible en hero + CRM):
  - “No almacenamos contenido clínico de sesión; solo datos administrativos para operación.”

---

## 13) Backlog priorizado (90 días)

## Fase 1 (Semanas 1–3)
- Hero dinámico por 9 especialidades.
- Selector país + modal de pre-registro (5 países en espera).
- Demo WhatsApp animada por especialidad.
- Pricing con plan recomendado resaltado.

## Fase 2 (Semanas 4–7)
- Onboarding adaptativo por especialidad.
- Dashboard y ficha paciente especializados (v1).
- Testimonios + pruebas sociales segmentadas.
- Empty states premium.

## Fase 3 (Semanas 8–12)
- Blog verticalizado + rutas por especialidad.
- Reglas regionales más finas por país.
- Experimentos CRO (A/B en hero y pricing).
- Analítica de activación por vertical.

---

## 14) Métricas de éxito y eventos analíticos

## KPIs
- CTR en selector especialidad (hero).
- Conversión visitante → registro por especialidad.
- Conversión registro → WhatsApp conectado.
- Activación D7 (primera automatización activa).
- No-show reduction reportado por consultorio.

## Eventos recomendados
- `specialty_selected`
- `country_selected`
- `hero_demo_started`
- `hero_cta_clicked`
- `waitlist_submitted`
- `onboarding_completed`
- `automation_activated`

---

## 15) Definición de “listo para producción”

- Todos los bloques del hero cambian correctamente por especialidad.
- País no activo muestra captura de lead funcional.
- Psicología muestra avisos de privacidad en landing + CRM.
- Diseño mobile-first validado en 360px, 390px y 430px.
- Performance:
  - LCP < 2.5s en landing (4G)
  - CLS < 0.1
  - JS del hero lazy + animación degradable.
- Accesibilidad:
  - contraste AA
  - navegación por teclado
  - `prefers-reduced-motion`

---

## 16) Hand-off a desarrollo (resumen ejecutable)

1. Crear `specialties.config.ts` con copy/KPI/demo/features/testimonios.
2. Crear `countries.config.ts` con moneda/regulación/estado activo.
3. Refactor hero a `HeroSpecialtyEngine` con data-driven rendering.
4. Implementar `CountrySelector` en header/footer con estado global.
5. Añadir `SpecialtyThemeProvider` para acento visual por vertical.
6. Parametrizar onboarding y CRM mediante `SpecialtyConfig`.
7. Crear rutas de blog especializadas + cards filtrables por tag.
8. Instrumentar eventos analíticos mínimos.

---

Este documento puede usarse como base de diseño, copy y producto para pasar a UI detallada en Figma + implementación en React/TypeScript sin rehacer la arquitectura del prototipo actual.
