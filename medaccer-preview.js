const specialties = {
  odontologia: {
    label: 'Odontología', accent: '#22d3ee',
    headline: 'Su consultorio dental nunca duerme',
    subheadline: 'Recupere presupuestos abandonados y reduzca inasistencias con seguimiento automático por WhatsApp.',
    roi: 'Los consultorios pierden $10.8M COP/mes en no-shows. MEDACCER reduce un 52% las inasistencias.',
    uniqueValue: 'MEDACCER contacta al paciente que no aceptó tratamiento y le ofrece facilidades de pago.',
    useCase: 'Paciente pregunta por diseño de sonrisa → bot comparte precio base y agenda cita.',
    features: ['Seguimiento de presupuestos pendientes','Recordatorio de fase 2','Notas clínicas por voz','RDA automática (Res. 1888)'],
    testimonial: 'Dra. María López · Odontóloga, Bogotá: “Recuperamos casos de alto valor sin perseguir pacientes manualmente.”',
    demo:['Hola, quiero diseño de sonrisa','¡Claro! Tenemos valoración y opciones de pago. ¿Agenda esta semana?','Sí, jueves en la tarde']
  },
  cirugia_plastica: {
    label: 'Cirugía plástica', accent: '#fb7185',
    headline: 'El seguimiento post-operatorio que salva reputaciones',
    subheadline: 'Automatice secuencias día 1,3,7,15,30,90 y reciba alertas ante señales de riesgo.',
    roi: 'El 78% de las demandas en cirugía plástica se originan por falta de comunicación post-operatoria.',
    uniqueValue: 'Si el paciente reporta dolor anormal o foto preocupante, se alerta al cirujano de inmediato.',
    useCase: 'Post-rinoplastia día 7: paciente envía foto, bot valida evolución y clasifica riesgo.',
    features: ['Secuencias post-quirúrgicas','Galería antes/después','Instrucciones pre-op','Detección IA de alertas'],
    testimonial: 'Dr. Andrés Cifuentes · Cirujano, Medellín: “El seguimiento consistente mejoró confianza y reseñas.”',
    demo:['Día 7 post-rino: ¿cómo te sientes?','Sin dolor fuerte, adjunto foto','Perfecto ✅, continuamos control día 15']
  },
  dermatologia: {label:'Dermatología',accent:'#fb8a6b',headline:'Deje de recibir fotos de piel por WhatsApp sin contexto',subheadline:'Organice fotos por paciente y convierta consultas gratis en citas pagadas.',roi:'Los dermatólogos pierden 4 horas/semana respondiendo consultas no remuneradas por WhatsApp.',uniqueValue:'Las fotos quedan en ficha con fecha/ubicación y el bot ofrece consulta.',useCase:'Foto de lunar → ficha clínica → propuesta de cita.',features:['Organización fotográfica','Seguimiento lesiones','Recordatorio controles','Conversión a cita pagada'],testimonial:'Dra. Laura Pérez · Dermatóloga, Cali: “Pasé de chats sueltos a flujo clínico ordenado.”',demo:['Doctora, ¿qué opina de este lunar?','Para evaluarlo bien necesitamos consulta. ¿Agendamos?','Sí, mañana por la tarde']},
  psicologia: {label:'Psicología',accent:'#8b5cf6',headline:'El espacio seguro entre sesiones',subheadline:'Check-ins empáticos que reducen cancelaciones sin exponer contenido clínico.',roi:'Reducir cancelaciones un 30% en psicología equivale a recuperar $2.4M COP/mes.',uniqueValue:'MEDACCER nunca almacena contenido clínico de sesiones, solo datos administrativos.',useCase:'Check-in semanal + confirmación de sesión.',features:['Check-ins empáticos','Notas por voz privadas','Recordatorios no corporativos','Cifrado extremo'],testimonial:'Dra. Paula Rojas · Psicóloga, Bogotá: “Mis pacientes llegan más constantes y tranquilos.”',demo:['Hola María, ¿cómo te sentiste esta semana?','Con ansiedad por la sesión','Gracias por compartir. ¿Confirmas jueves 3pm?']},
  nutricion: {label:'Nutrición',accent:'#34d399',headline:'Que su plan alimenticio no muera en el refrigerador',subheadline:'Seguimiento semanal y adherencia antes de cada control.',roi:'El 70% de pacientes de nutrición abandona su plan tras 2 semanas.',uniqueValue:'Reporte de adherencia automático para que el nutricionista llegue preparado al control.',useCase:'Check-in semanal + refuerzo + agenda.',features:['Check-in adherencia','Reporte para nutricionista','Recordatorio suplementos','Controles automáticos'],testimonial:'Lic. Camilo Díaz · Nutricionista, Lima: “Veo adherencia real antes de cada consulta.”',demo:['¿Cómo te fue esta semana con el plan?','Bien, pero el fin de semana me descontrolé','Es normal. Te veo el martes en control ✅']},
  fisioterapia: {label:'Fisioterapia',accent:'#818cf8',headline:'Que su paciente no abandone en la sesión 4 de 20',subheadline:'Recordatorios de ejercicios y progreso visible para evitar abandono.',roi:'El 60% abandona tratamiento de fisioterapia antes de completarlo.',uniqueValue:'MEDACCER mide ejercicios en casa y reporta adherencia al fisioterapeuta.',useCase:'Recordatorio diario con respuesta rápida 1/2/3.',features:['Tracker de ejercicios','Barra de progreso','Recordatorio sesiones','Reporte adherencia'],testimonial:'Dr. Javier Morales · Fisioterapeuta, Medellín: “Subió la adherencia desde la semana 1.”',demo:['Hoy tocan 3 ejercicios de rodilla. ¿Los completó?','Parcialmente','Gracias, registré 2 de 3 ejercicios 💪']},
  ginecologia: {label:'Ginecología',accent:'#ec4899',headline:'Acompañe cada embarazo semana a semana, sin esfuerzo',subheadline:'Timeline obstétrico automático con recordatorios y alertas de atraso.',roi:'Más controles cumplidos = menos riesgo de seguimiento incompleto en embarazo.',uniqueValue:'Guía automática de exámenes y ecografías por semana gestacional.',useCase:'Semana 20: ecografía morfológica → agenda.',features:['Timeline embarazo','Exámenes por trimestre','Alertas de retraso','Canal seguro de dudas'],testimonial:'Dra. Juliana Torres · Ginecóloga, Quito: “El seguimiento prenatal ahora sí es continuo.”',demo:['Semana 20: corresponde ecografía morfológica. ¿La agendo?','Sí, por favor','Listo, agendada para este viernes ✅']},
  pediatria: {label:'Pediatría',accent:'#22c55e',headline:'Los padres preguntan a las 2AM. Su bot responde.',subheadline:'Respuestas 24/7 validadas y escalamiento al pediatra solo cuando corresponde.',roi:'Responder rápido a padres evita pérdida de pacientes y disminuye carga nocturna.',uniqueValue:'Calendario de vacunación y gestión multi-hijo en un solo hilo.',useCase:'Fiebre nocturna + protocolo + cita.',features:['Respuestas 24/7','Calendario de vacunación','Alertas de vacunas','Gestión multi-hijo'],testimonial:'Dr. Felipe Ríos · Pediatra, Bogotá: “El bot filtra ansiedad y me escala solo lo importante.”',demo:['Mi bebé tiene 38.5°C','Puedes seguir la indicación recetada y vigilar. Si sube a 39°C, urgencias.','¿Agendamos mañana con el doctor?']},
  oftalmologia: {label:'Oftalmología',accent:'#3b82f6',headline:'Que la cirugía de $5M no se pierda por un mensaje sin leer',subheadline:'Checklist pre-quirúrgico paso a paso con confirmación de comprensión.',roi:'Cada cirugía no confirmada impacta ingresos y reputación de la clínica.',uniqueValue:'Si el paciente no confirma preparación, se dispara alerta al equipo.',useCase:'LASIK viernes → instrucciones + confirmación.',features:['Checklist pre-quirúrgico','Confirmación del paciente','Seguimiento post-op','Control anual visual'],testimonial:'Dr. Mauricio León · Oftalmólogo, CDMX: “Se redujeron cancelaciones de cirugías de alto valor.”',demo:['Su cirugía LASIK es viernes. ¿Confirma instrucciones?','Sí, sin lentes y ayuno 8h','Perfecto ✅ nos vemos acompañado el viernes']}
};

const countries = {
  CO: {label:'🇨🇴 Colombia', currency:'COP', regulation:'Resolución 1888/2025', active:true},
  MX: {label:'🇲🇽 México', currency:'MXN', regulation:'NOM (próximamente)', active:false},
  CL: {label:'🇨🇱 Chile', currency:'CLP', regulation:'Normativa local (próximamente)', active:false},
  PE: {label:'🇵🇪 Perú', currency:'PEN', regulation:'Normativa local (próximamente)', active:false},
  AR: {label:'🇦🇷 Argentina', currency:'ARS', regulation:'Normativa local (próximamente)', active:false},
  EC: {label:'🇪🇨 Ecuador', currency:'USD', regulation:'Normativa local (próximamente)', active:false}
};

const specialtySelect = document.getElementById('specialtySelect');
const countrySelect = document.getElementById('countrySelect');
const chat = document.getElementById('chat');
let chatTimer;

Object.entries(specialties).forEach(([id, sp]) => specialtySelect.add(new Option(sp.label, id)));
Object.entries(countries).forEach(([id, c]) => countrySelect.add(new Option(c.label, id)));

specialtySelect.value = 'odontologia';
countrySelect.value = 'CO';

function render() {
  const s = specialties[specialtySelect.value];
  const c = countries[countrySelect.value];
  document.documentElement.style.setProperty('--accent', s.accent);
  document.getElementById('headline').textContent = s.headline;
  document.getElementById('subheadline').textContent = s.subheadline;
  document.getElementById('roi').textContent = s.roi;
  document.getElementById('uniqueValue').textContent = s.uniqueValue;
  document.getElementById('useCase').textContent = s.useCase;
  document.getElementById('demoTitle').textContent = s.label;
  document.getElementById('testimonial').textContent = s.testimonial;
  document.getElementById('regulationText').textContent = `Cumple ${c.regulation} · ${c.label.replace(/^..\s/, '')}`;

  const f = document.getElementById('features');
  f.innerHTML = '';
  s.features.forEach((item) => { const li = document.createElement('li'); li.textContent = item; f.appendChild(li); });

  document.getElementById('recommendedPrice').textContent = c.currency === 'COP' ? '$169K / mes' : `169K ${c.currency} / mes*`;
  runDemo(s.demo);
}

function runDemo(lines) {
  clearInterval(chatTimer);
  chat.innerHTML = '';
  let i = 0;
  chatTimer = setInterval(() => {
    if (i >= lines.length) { i = 0; chat.innerHTML = ''; }
    const msg = document.createElement('div');
    msg.className = `msg ${i % 2 === 0 ? 'user' : 'bot'}`;
    msg.textContent = lines[i++];
    chat.appendChild(msg);
  }, 1400);
}

countrySelect.addEventListener('change', () => {
  const c = countries[countrySelect.value];
  if (!c.active) {
    document.getElementById('comingSoonTitle').textContent = `Próximamente en ${c.label.replace(/^..\s/, '')}`;
    document.getElementById('comingSoonModal').classList.remove('hidden');
  }
  render();
});
specialtySelect.addEventListener('change', render);
document.querySelector('.close-modal').addEventListener('click', () => document.getElementById('comingSoonModal').classList.add('hidden'));
document.querySelector('.lead-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias! Te contactaremos para acceso anticipado.');
  document.getElementById('comingSoonModal').classList.add('hidden');
});

render();
