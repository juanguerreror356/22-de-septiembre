export type SpecialtySlug =
  | 'odontologia'
  | 'cirugia-plastica'
  | 'dermatologia'
  | 'psicologia'
  | 'nutricion'
  | 'fisioterapia'
  | 'ginecologia'
  | 'pediatria'
  | 'oftalmologia';

export interface SpecialtyContent {
  slug: SpecialtySlug;
  name: string;
  accent: string;
  headline: string;
  subheadline: string;
  roi: string;
  uniqueValue: string;
  useCase: string;
  features: string[];
  testimonial: string;
  demo: string[];
  crm: { dashboard: string; patient: string; services: string; automation: string };
  privacy?: string;
}

export const specialties: SpecialtyContent[] = [
  { slug: 'odontologia', name: 'Odontología', accent: '#06B6D4', headline: 'Su consultorio dental nunca duerme', subheadline: 'Recupere presupuestos abandonados, reduzca no-shows 52% y genere RDA automáticamente.', roi: 'Pérdida estimada: $10.8M COP/mes en no-shows. MEDACCER reduce un 52%.', uniqueValue: 'Recupere presupuestos de alto valor con seguimiento y facilidades de pago automáticas.', useCase: 'Paciente pregunta por diseño de sonrisa, bot comparte rango de precio y agenda cita.', features: ['Seguimiento de presupuestos pendientes','Recordatorio de fase 2','Notas por voz','RDA automático'], testimonial: 'Dra. María López · Odontóloga, Bogotá: “MEDACCER me devolvió 1 hora diaria”.', demo: ['Paciente: ¿Cuánto cuesta diseño de sonrisa?', 'Bot: Desde $2.5M COP. ¿Agendamos valoración?', 'Paciente: Jueves 3 PM', 'Bot: ✅ Cita agendada.'], crm: { dashboard: 'Presupuestos pendientes, no-shows, RDA', patient: 'Plan de tratamiento por fases', services: 'Limpieza, blanqueamiento, ortodoncia', automation: 'Reactivación de presupuestos' } },
  { slug: 'cirugia-plastica', name: 'Cirugía plástica', accent: '#F59E0B', headline: 'El seguimiento post-operatorio que salva reputaciones', subheadline: 'Secuencias post-op con alertas de riesgo automáticas al cirujano.', roi: 'El 78% de demandas se asocia a comunicación post-op insuficiente.', uniqueValue: 'Secuencias día 1,3,7,15,30,90 y escalamiento inmediato ante síntomas anómalos.', useCase: 'Post-rinoplastia: foto día 7, validación de dolor y clasificación de riesgo.', features: ['Secuencias post-quirúrgicas','Galería antes/después','Instrucciones pre-op','Alertas IA'], testimonial: 'Dr. Andrés Cifuentes · Cirujano, Medellín: “Ahora hacemos seguimiento serio a escala”.', demo: ['Bot: Día 7 post-rino ¿dolor anormal?', 'Paciente: No', 'Bot: ✅ Continuamos control día 15.'], crm: { dashboard: 'Pacientes en recuperación, alertas post-op', patient: 'Galería antes/después + timeline', services: 'Rino, lipo, mamoplastia', automation: 'Flujo post-op con semáforo' } },
  { slug: 'dermatologia', name: 'Dermatología', accent: '#10B981', headline: 'Deje de recibir fotos de piel por WhatsApp sin contexto', subheadline: 'Organice imágenes por ficha y convierta consultas gratis en citas pagadas.', roi: '4 horas/semana perdidas en consultas no remuneradas por WhatsApp.', uniqueValue: 'Fotos con fecha y ubicación corporal, y respuesta automática orientada a agendar.', useCase: 'Paciente envía foto de lunar, bot la archiva y ofrece cita.', features: ['Organización fotográfica','Evolución de lesiones','Recordatorios anuales','Conversión a cita'], testimonial: 'Dra. Laura Pérez · Dermatóloga, Cali: “Pasamos del caos a trazabilidad”.', demo: ['Paciente: [foto] Doctor, ¿qué es esto?', 'Bot: Guardamos su imagen. ¿Agendamos consulta?'], crm: { dashboard: 'Conversión de consultas gratis, evolución de lesiones', patient: 'Mosaico de imágenes por fecha', services: 'Lunares, acné, lesiones', automation: 'Conversión foto→cita' } },
  { slug: 'psicologia', name: 'Psicología', accent: '#8B5CF6', headline: 'El espacio seguro entre sesiones', subheadline: 'Check-ins empáticos que reducen cancelaciones sin invadir privacidad clínica.', roi: 'Reducir 30% cancelaciones ≈ +$2.4M COP/mes (2 psicólogos).', uniqueValue: 'Mensajes de apoyo administrativo y recordatorios humanizados.', useCase: 'Bot pregunta cómo se sintió la semana y confirma próxima sesión.', features: ['Check-ins empáticos','Notas por voz','Recordatorios humanizados','Cifrado extremo'], testimonial: 'Dra. Paula Rojas · Psicóloga, Bogotá: “Más continuidad terapéutica y menos ausencias”.', demo: ['Bot: Hola María, ¿cómo se ha sentido?', 'Paciente: Mejor', 'Bot: Gracias. ¿Confirma jueves 3 PM?'], crm: { dashboard: 'Sesiones semanales, adherencia, check-ins', patient: 'Ficha administrativa (sin contenido clínico)', services: 'Individual, pareja, infantil, grupal', automation: 'Check-ins configurables' }, privacy: 'MEDACCER NUNCA almacena contenido clínico de sesiones; solo datos administrativos.' },
  { slug: 'nutricion', name: 'Nutrición', accent: '#22C55E', headline: 'Que su plan alimenticio no muera en el refrigerador', subheadline: 'Seguimiento semanal automático y reporte de adherencia antes de control.', roi: '70% de abandono del plan después de 2 semanas.', uniqueValue: 'Seguimiento continuo que alimenta al profesional con datos previos al control.', useCase: 'Check-in semanal con respuesta estructurada y mensaje de refuerzo.', features: ['Check-in semanal','Reporte adherencia','Suplementos','Agenda controles'], testimonial: 'Lic. Camilo Díaz · Nutricionista, Lima: “Ahora sí veo adherencia real”.', demo: ['Bot: ¿Cómo le fue esta semana?', 'Paciente: Parcialmente', 'Bot: Es normal. Nos vemos en control.'], crm: { dashboard: 'Adherencia semanal', patient: 'Peso, medidas, progreso', services: 'Valoración y controles', automation: 'Mensajes semanales' } },
  { slug: 'fisioterapia', name: 'Fisioterapia', accent: '#3B82F6', headline: 'Que su paciente no abandone en la sesión 4 de 20', subheadline: 'Recordatorios diarios de ejercicios y progreso visual del tratamiento.', roi: '60% de abandono antes de completar tratamientos largos.', uniqueValue: 'Track de ejercicios en casa + barra de progreso + alertas de adherencia.', useCase: 'Bot diario: “¿Completó ejercicios? 1 Sí 2 Parcial 3 No”.', features: ['Tracker ejercicios','Barra progreso','Recordatorios sesiones','Reporte adherencia'], testimonial: 'Dr. Javier Morales · Fisio, Medellín: “Más adherencia desde la primera semana”.', demo: ['Bot: Hoy tocan 3 ejercicios', 'Paciente: 2', 'Bot: Registrado ✅'], crm: { dashboard: 'Sesiones completadas vs plan', patient: 'Progreso 0-100%', services: 'Paquetes 10/20 sesiones', automation: 'Recordatorio diario ejercicios' } },
  { slug: 'ginecologia', name: 'Ginecología', accent: '#EC4899', headline: 'Acompañe cada embarazo semana a semana, sin esfuerzo', subheadline: 'Timeline automático de embarazo con alertas por retraso.', roi: 'Mejor cumplimiento de hitos críticos durante embarazo.', uniqueValue: 'Guía automatizada por semana gestacional y alertas al equipo.', useCase: 'Semana 20: recordar ecografía morfológica y agendar.', features: ['Timeline embarazo','Exámenes por trimestre','Alertas retraso','Canal seguro'], testimonial: 'Dra. Juliana Torres · Ginecóloga, Quito: “La coordinación mejoró totalmente”.', demo: ['Bot: Semana 20, ¿agendamos ecografía?', 'Paciente: Sí', 'Bot: Cita creada ✅'], crm: { dashboard: 'Gestantes activas y retrasos', patient: 'Timeline prenatal', services: 'Prenatal y ecografías', automation: 'Recordatorios por semana' } },
  { slug: 'pediatria', name: 'Pediatría', accent: '#F97316', headline: 'Los padres preguntan a las 2AM. Su bot responde.', subheadline: 'Respuestas 24/7 y calendario de vacunación por hijo.', roi: 'Menor carga nocturna y mayor retención de familias.', uniqueValue: 'Triage de dudas frecuentes con escalado al pediatra cuando aplica.', useCase: 'Padre reporta fiebre nocturna, bot guía y ofrece cita.', features: ['Respuestas 24/7','Calendario vacunas','Alertas pendientes','Gestión multi-hijo'], testimonial: 'Dr. Felipe Ríos · Pediatra, Bogotá: “El bot filtra y calma sin perder seguridad”.', demo: ['Padre: 38.5 de fiebre', 'Bot: siga pauta recetada y vigile signos de alarma', 'Bot: ¿agendamos mañana?'], crm: { dashboard: 'Vacunas pendientes y dudas', patient: 'Varios hijos por acudiente', services: 'Niño sano, vacunas, urgencias', automation: 'Recordatorios de vacunación' } },
  { slug: 'oftalmologia', name: 'Oftalmología', accent: '#0891B2', headline: 'Que la cirugía de $5M no se pierda por un mensaje sin leer', subheadline: 'Checklist pre-quirúrgico con confirmación del paciente.', roi: 'Reduce pérdida de cirugías de alto valor por mala preparación.', uniqueValue: 'Instrucciones paso a paso + alertas si paciente no confirma.', useCase: 'Pre-LASIK: no lentes, ayuno, acompañado, confirmar.', features: ['Checklist pre-op','Confirmación preparación','Seguimiento post-op','Recordatorio anual'], testimonial: 'Dr. Mauricio León · Oftalmólogo, CDMX: “Menos cancelaciones en cirugía”.', demo: ['Bot: Checklist LASIK', 'Paciente: Sí, entendido', 'Bot: Perfecto ✅'], crm: { dashboard: 'Cirugías programadas y confirmación', patient: 'Checklist pre/post op', services: 'LASIK, catarata, consulta', automation: 'Flujo prequirúrgico' } }
];

export const countries = [
  { code: 'CO', name: 'Colombia', flag: '🇨🇴', currency: 'COP', active: true, regulation: 'Resolución 1888' },
  { code: 'MX', name: 'México', flag: '🇲🇽', currency: 'MXN', active: false, regulation: 'NOM' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱', currency: 'CLP', active: false, regulation: 'Normativa local' },
  { code: 'PE', name: 'Perú', flag: '🇵🇪', currency: 'PEN', active: false, regulation: 'Normativa local' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', currency: 'ARS', active: false, regulation: 'Normativa local' },
  { code: 'EC', name: 'Ecuador', flag: '🇪🇨', currency: 'USD', active: false, regulation: 'Normativa local' }
] as const;

export const pricingPlans = [
  { name: 'Plan 1888', monthly: 89000, features: ['Agenda digital','Recordatorios WhatsApp sin IA','Ficha básica','RDA Resolución 1888','1 usuario'] },
  { name: 'Plan Asistente IA', monthly: 169000, recommended: true, features: ['Todo del Plan 1888','Bot IA conversacional','Transcripción de audios','Seguimiento post-cita','2 usuarios'] },
  { name: 'Plan Clínico Pro', monthly: 249000, features: ['Todo Asistente IA','Notas clínicas por voz','Analytics con IA','5 usuarios','API abierta'] }
];

export const blogPosts = [
  { slug: 'como-reducir-no-shows-odontologia', title: 'Cómo reducir no-shows en su consultorio dental', category: 'Odontología' },
  { slug: 'seguimiento-entre-sesiones-psicologia', title: 'El seguimiento entre sesiones que retiene pacientes', category: 'Psicología' },
  { slug: 'post-operatorio-digital-cirugia-plastica', title: 'Post-operatorio digital: la nueva norma', category: 'Cirugía plástica' },
  { slug: 'resolucion-1888-guia', title: 'Resolución 1888: guía completa', category: 'Normativa' }
];
