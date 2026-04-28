const specialties = {
  odontologia: {
    label: 'Odontología',
    accent: '#22d3ee',
    headline: 'Su consultorio dental nunca duerme',
    subheadline:
      'Recupere presupuestos abandonados y reduzca inasistencias con seguimiento automático por WhatsApp.',
    roi: 'Los consultorios pierden $10.8M COP/mes en no-shows. MEDACCER reduce un 52% las inasistencias.',
    uniqueValue:
      'Recupere los presupuestos abandonados. MEDACCER contacta automáticamente al paciente que no aceptó el tratamiento y le ofrece facilidades de pago.',
    useCase:
      'Conversación WhatsApp: paciente pregunta por diseño de sonrisa → bot muestra precios + agenda → cita creada.',
    features: [
      'Seguimiento de presupuestos pendientes',
      'Recordatorio de fase 2 del tratamiento',
      'Notas clínicas por voz post-procedimiento',
      'Generación automática de RDA (Resolución 1888)'
    ],
    testimonial: 'Dra. María López · Odontóloga, Bogotá. “MEDACCER me devolvió 1 hora de mi día.”',
    demo: [
      'Paciente: Quiero diseño de sonrisa',
      'Bot: Tenemos valoración y opciones de pago. ¿Agendamos?',
      'Paciente: Sí, jueves en la tarde',
      'Bot: Listo ✅ cita creada para jueves 3:30 PM'
    ],
    crm: {
      dashboard: 'Presupuestos pendientes, no-shows, RDA por enviar.',
      patient: 'Plan de tratamiento por fases y evolución.',
      services: 'Limpieza, blanqueamiento, ortodoncia, diseño de sonrisa.',
      automation: 'Reactivación automática de presupuestos de alto valor.'
    }
  },
  cirugia_plastica: {
    label: 'Cirugía plástica',
    accent: '#fb7185',
    headline: 'El seguimiento post-operatorio que salva reputaciones',
    subheadline:
      'Automatice secuencias día 1, 3, 7, 15, 30, 90 y reciba alertas inmediatas de riesgo.',
    roi: 'El 78% de las demandas en cirugía plástica se originan por falta de comunicación post-operatoria.',
    uniqueValue:
      'MEDACCER envía secuencias post-quirúrgicas automáticas y alerta al cirujano si detecta dolor anormal o imágenes preocupantes.',
    useCase:
      'Secuencia post-rinoplastia: paciente envía foto día 7 → bot evalúa síntomas → todo normal ✅ o escala.',
    features: [
      'Secuencias post-quirúrgicas por procedimiento',
      'Galería antes/después por paciente',
      'Instrucciones pre-quirúrgicas automatizadas',
      'Detección de alertas por IA en respuestas'
    ],
    testimonial: 'Dr. Andrés Cifuentes · Cirujano plástico, Medellín. “El seguimiento post-op dejó de depender de mi memoria.”',
    demo: [
      'Bot: Día 7 post-rinoplastia. ¿Cómo va el dolor?',
      'Paciente: Leve, mando foto',
      'Bot: Gracias. ¿Dolor fuera de lo esperado?',
      'Paciente: No',
      'Bot: Perfecto ✅ seguimos control día 15'
    ],
    crm: {
      dashboard: 'Pacientes en recuperación y alertas post-op.',
      patient: 'Galería antes/después + timeline post-quirúrgico.',
      services: 'Rinoplastia, lipo, blefaroplastia con ventana de recuperación.',
      automation: 'Seguimiento post-op con semáforo de riesgo.'
    }
  },
  dermatologia: {
    label: 'Dermatología',
    accent: '#fb8a6b',
    headline: 'Deje de recibir fotos de piel por WhatsApp sin contexto',
    subheadline: 'Organice fotos por paciente y convierta consultas gratis en citas pagadas.',
    roi: 'Los dermatólogos pierden 4 horas/semana respondiendo consultas no remuneradas por WhatsApp.',
    uniqueValue:
      'MEDACCER recibe fotos, las guarda en ficha con fecha y zona corporal, y responde: “Para evaluar su caso necesitamos consulta. ¿La agendo?”.',
    useCase: 'Paciente envía foto de lunar → bot la guarda → ofrece cita → agenda.',
    features: [
      'Organización fotográfica por paciente y fecha',
      'Seguimiento de evolución de lesiones',
      'Recordatorio de controles dermatológicos anuales',
      'Convertir consultas gratis en citas pagadas'
    ],
    testimonial: 'Dra. Laura Pérez · Dermatóloga, Cali. “Ahora las fotos tienen contexto clínico y orden.”',
    demo: [
      'Paciente: ¿Me revisa este lunar?',
      'Bot: Ya guardé su foto en su ficha.',
      'Bot: Para evaluar su caso necesitamos consulta. ¿La agendo?',
      'Paciente: Sí, por favor'
    ],
    crm: {
      dashboard: 'Consultas de revisión, alertas de lesiones y evolución.',
      patient: 'Galería de lesiones por fecha y región anatómica.',
      services: 'Consulta dermato, control de acné, revisión de lunares.',
      automation: 'Conversión automática de consulta por foto a cita pagada.'
    }
  },
  psicologia: {
    label: 'Psicología',
    accent: '#8b5cf6',
    headline: 'El espacio seguro entre sesiones',
    subheadline:
      'Check-ins empáticos entre sesiones para reducir cancelaciones sin exponer contenido clínico.',
    roi: 'Reducir cancelaciones un 30% en psicología equivale a recuperar $2.4M COP/mes para 2 psicólogos.',
    uniqueValue:
      'MEDACCER envía check-ins empáticos, reduce ansiedad pre-cita y solo maneja datos administrativos.',
    useCase:
      'Bot: “Hola María, ¿cómo se ha sentido esta semana?” → confirmación empática de próxima sesión.',
    features: [
      'Check-ins empáticos configurables',
      'Notas de sesión por voz con máxima confidencialidad',
      'Recordatorios con tono empático',
      'Cifrado extremo en comunicaciones'
    ],
    testimonial: 'Dra. Paula Rojas · Psicóloga, Bogotá. “Subimos asistencia sin romper confianza.”',
    demo: [
      'Bot: Hola María, ¿cómo se ha sentido esta semana?',
      'Paciente: Un poco ansiosa',
      'Bot: Gracias por compartir. Su próxima sesión es jueves 3 PM. ¿Confirma?',
      'Paciente: Sí, confirmo'
    ],
    crm: {
      dashboard: 'Sesiones esta semana, adherencia y check-ins enviados.',
      patient: 'Ficha sin contenido clínico por defecto; foco administrativo.',
      services: 'Sesión individual, pareja, infantil, grupal.',
      automation: 'Check-ins empáticos + confirmaciones con lenguaje terapéutico.'
    },
    showPrivacy: true
  },
  nutricion: {
    label: 'Nutrición',
    accent: '#34d399',
    headline: 'Que su plan alimenticio no muera en el refrigerador',
    subheadline: 'Seguimiento semanal personalizado y reporte de adherencia antes del control.',
    roi: 'El 70% de los pacientes de nutrición abandona el plan después de 2 semanas.',
    uniqueValue:
      'MEDACCER pregunta semanalmente cómo va el plan y reporta adherencia al nutricionista.',
    useCase:
      'Bot: “¿Cómo le fue con las comidas esta semana?” → paciente responde → bot refuerza + recuerda control.',
    features: [
      'Check-in semanal de adherencia al plan',
      'Reporte de adherencia para el nutricionista',
      'Recordatorio de suplementos',
      'Agenda automática de controles'
    ],
    testimonial: 'Lic. Camilo Díaz · Nutricionista, Lima. “Llego al control con adherencia real, no suposiciones.”',
    demo: [
      'Bot: Hola Carlos, ¿cómo le fue esta semana?',
      'Paciente: Bien, pero el fin de semana me descontrolé',
      'Bot: Es normal, no se desanime. Su próximo control es el martes.'
    ],
    crm: {
      dashboard: 'Adherencia semanal, pacientes en riesgo de abandono.',
      patient: 'Evolución de adherencia y recordatorios activos.',
      services: 'Control nutricional, plan deportivo, metabólico.',
      automation: 'Mensajes semanales + reporte previo a consulta.'
    }
  },
  fisioterapia: {
    label: 'Fisioterapia',
    accent: '#818cf8',
    headline: 'Que su paciente no abandone en la sesión 4 de 20',
    subheadline: 'Seguimiento de ejercicios diarios y progreso de tratamiento visible.',
    roi: 'El 60% abandona antes de completar tratamientos largos de fisioterapia.',
    uniqueValue:
      'MEDACCER recuerda ejercicios, captura cumplimiento y muestra progreso: “8 de 20 sesiones (40%)”.',
    useCase:
      'Bot diario de ejercicios: “¿Los completó? 1️⃣ Sí 2️⃣ Parcialmente 3️⃣ No”.',
    features: [
      'Tracker de ejercicios en casa',
      'Barra de progreso del tratamiento',
      'Recordatorio de cada sesión presencial',
      'Reporte de adherencia para el fisioterapeuta'
    ],
    testimonial: 'Dr. Javier Morales · Fisioterapeuta, Medellín. “Más pacientes llegan a sesión con tareas hechas.”',
    demo: [
      'Bot: Buenos días Juan, hoy tocan 3 ejercicios de rodilla. ¿Los completó?',
      'Paciente: 2️⃣ Parcialmente',
      'Bot: Gracias. Quedó registrado para su fisioterapeuta ✅'
    ],
    crm: {
      dashboard: 'Tratamientos activos, abandono en riesgo, progreso medio.',
      patient: 'Barra de avance por plan (sesiones + ejercicios casa).',
      services: 'Rehabilitación rodilla, hombro, lumbar, post-op.',
      automation: 'Recordatorio diario + resumen semanal de adherencia.'
    }
  },
  ginecologia: {
    label: 'Ginecología',
    accent: '#ec4899',
    headline: 'Acompañe cada embarazo semana a semana, sin esfuerzo',
    subheadline: 'Timeline obstétrico con exámenes, ecografías y alertas por atraso.',
    roi: 'Seguimiento prenatal automatizado reduce ausencias en controles críticos.',
    uniqueValue:
      'MEDACCER guía a cada paciente según semana gestacional y alerta al doctor si se atrasa.',
    useCase: 'Semana 20: ecografía morfológica → paciente confirma → cita creada.',
    features: [
      'Timeline automático de embarazo (semana a semana)',
      'Recordatorio de exámenes por trimestre',
      'Alertas de retraso en controles',
      'Canal seguro para dudas frecuentes'
    ],
    testimonial: 'Dra. Juliana Torres · Ginecóloga, Quito. “Nunca fue tan simple seguir 30 embarazos a la vez.”',
    demo: [
      'Bot: Semana 20: es momento de su ecografía morfológica. ¿La agendo?',
      'Paciente: Sí',
      'Bot: Listo ✅ cita creada para el viernes'
    ],
    crm: {
      dashboard: 'Gestantes por semana, controles vencidos, alertas.',
      patient: 'Timeline obstétrico con hitos clínicos y administrativos.',
      services: 'Control prenatal, ecografía, consulta ginecológica.',
      automation: 'Mensajería por semana + alertas de atraso.'
    }
  },
  pediatria: {
    label: 'Pediatría',
    accent: '#22c55e',
    headline: 'Los padres preguntan a las 2AM. Su bot responde.',
    subheadline: 'Respuestas 24/7 a dudas frecuentes y escalamiento al pediatra solo cuando aplica.',
    roi: 'Responder rápido fuera de horario mejora retención de familias y evita saturación del médico.',
    uniqueValue:
      'MEDACCER responde fiebre, alimentación y vacunas con información validada, y administra calendario por hijo.',
    useCase:
      'Padre 11 PM: “Mi bebé tiene 38.5°C” → bot entrega protocolo seguro + ofrece cita.',
    features: [
      'Respuestas 24/7 a dudas frecuentes de padres',
      'Calendario de vacunación por hijo',
      'Alertas de vacunas pendientes',
      'Gestión multi-hijo'
    ],
    testimonial: 'Dr. Felipe Ríos · Pediatra, Bogotá. “El bot contiene ansiedad y escala solo lo importante.”',
    demo: [
      'Padre: Mi bebé tiene 38.5 de fiebre',
      'Bot: Siga el medicamento recetado. Si supera 39°C o dura 48h, urgencias.',
      'Bot: ¿Desea agendar cita con el Dr. Pérez mañana?'
    ],
    crm: {
      dashboard: 'Alertas pediátricas, vacunas pendientes, dudas frecuentes.',
      patient: 'Ficha multi-hijo por familia con calendario de vacunas.',
      services: 'Control niño sano, urgencia priorizada, vacunas.',
      automation: 'Recordatorio de vacunas + educación a padres.'
    }
  },
  oftalmologia: {
    label: 'Oftalmología',
    accent: '#3b82f6',
    headline: 'Que la cirugía de $5M no se pierda por un mensaje sin leer',
    subheadline: 'Checklist pre-quirúrgico paso a paso y confirmación de comprensión del paciente.',
    roi: 'Las cirugías de alto valor se pierden cuando el paciente no confirma preparación.',
    uniqueValue:
      'MEDACCER envía instrucciones pre-quirúrgicas y alerta al equipo si el paciente no confirma.',
    useCase:
      'LASIK viernes: no lentes de contacto + ayuno + acompañado → paciente confirma.',
    features: [
      'Checklist pre-quirúrgico interactivo',
      'Confirmación de preparación del paciente',
      'Seguimiento post-quirúrgico (gotas, controles)',
      'Recordatorio de controles anuales de agudeza visual'
    ],
    testimonial: 'Dr. Mauricio León · Oftalmólogo, CDMX. “Redujimos cancelaciones por mala preparación.”',
    demo: [
      'Bot: Su cirugía LASIK es el viernes. ✅ No lentes de contacto ✅ Ayuno 8h ✅ Venir acompañado.',
      'Bot: ¿Confirma que entendió las instrucciones?',
      'Paciente: Sí, confirmo'
    ],
    crm: {
      dashboard: 'Cirugías próximas, pacientes sin confirmar preparación.',
      patient: 'Checklist pre-op y post-op por procedimiento.',
      services: 'LASIK, catarata, control visual anual.',
      automation: 'Recordatorio pre-op + seguimiento de gotas y controles.'
    }
  }
};

const countries = {
  CO: { label: '🇨🇴 Colombia', currency: 'COP', multiplier: 1, regulation: 'Resolución 1888/2025', active: true },
  MX: { label: '🇲🇽 México', currency: 'MXN', multiplier: 4.6, regulation: 'NOM (referencia local)', active: false },
  CL: { label: '🇨🇱 Chile', currency: 'CLP', multiplier: 220, regulation: 'Normativa MINSAL (referencia local)', active: false },
  PE: { label: '🇵🇪 Perú', currency: 'PEN', multiplier: 0.95, regulation: 'Normativa MINSA (referencia local)', active: false },
  AR: { label: '🇦🇷 Argentina', currency: 'ARS', multiplier: 950, regulation: 'Normativa SISA (referencia local)', active: false },
  EC: { label: '🇪🇨 Ecuador', currency: 'USD', multiplier: 0.00024, regulation: 'Normativa MSP (referencia local)', active: false }
};

const priceCOP = { starter: 89000, recommended: 169000, scale: 289000 };
const blogPosts = [
  { path: '/blog/odontologia', title: 'Cómo reducir no-shows en su consultorio dental' },
  { path: '/blog/psicologia', title: 'El seguimiento entre sesiones que retiene pacientes' },
  { path: '/blog/cirugia-plastica', title: 'Post-operatorio digital: la nueva norma' },
  { path: '/blog/resolucion-1888', title: 'Guía completa Resolución 1888' }
];

const specialtyPills = document.getElementById('specialtyPills');
const specialtyIds = Object.keys(specialties);
let currentSpecialty = 'odontologia';
let chatTimer;

function money(amount, currency) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount);
}

function renderCountryOptions() {
  const select = document.getElementById('countrySelect');
  Object.entries(countries).forEach(([id, c]) => {
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = c.label + (c.active ? ' · Activo' : ' · Próximamente');
    select.appendChild(opt);
  });
  select.value = 'CO';
}

function renderSpecialtyPills() {
  specialtyPills.innerHTML = '';
  specialtyIds.forEach((id) => {
    const button = document.createElement('button');
    button.className = `pill ${id === currentSpecialty ? 'active' : ''}`;
    button.textContent = specialties[id].label;
    button.type = 'button';
    button.onclick = () => {
      currentSpecialty = id;
      renderAll();
    };
    specialtyPills.appendChild(button);
  });
}

function runChat(lines) {
  const chat = document.getElementById('chat');
  clearInterval(chatTimer);
  chat.innerHTML = '';
  let i = 0;
  const push = () => {
    if (i >= lines.length) {
      i = 0;
      chat.innerHTML = '';
    }
    const msg = document.createElement('div');
    msg.className = `msg ${i % 2 === 0 ? 'user' : 'bot'}`;
    msg.textContent = lines[i];
    i += 1;
    chat.appendChild(msg);
  };
  push();
  chatTimer = setInterval(push, 1450);
}

function renderPricing(countryCode) {
  const c = countries[countryCode];
  const convert = (base) => Math.max(1, Math.round(base * c.multiplier));
  document.getElementById('starterPrice').textContent = `${money(convert(priceCOP.starter), c.currency)}`;
  document.getElementById('recommendedPrice').textContent = `${money(convert(priceCOP.recommended), c.currency)}`;
  document.getElementById('scalePrice').textContent = `${money(convert(priceCOP.scale), c.currency)}`;
}

function renderBlog() {
  const node = document.getElementById('blogGrid');
  node.innerHTML = '';
  blogPosts.forEach((post) => {
    const item = document.createElement('article');
    item.className = 'blog-item';
    item.innerHTML = `<strong>${post.path}</strong>${post.title}`;
    node.appendChild(item);
  });
}

function renderAll() {
  const s = specialties[currentSpecialty];
  const countryCode = document.getElementById('countrySelect').value;
  const c = countries[countryCode];

  document.documentElement.style.setProperty('--accent', s.accent);
  document.getElementById('headline').textContent = s.headline;
  document.getElementById('subheadline').textContent = s.subheadline;
  document.getElementById('roi').textContent = s.roi;
  document.getElementById('uniqueValue').textContent = s.uniqueValue;
  document.getElementById('useCase').textContent = s.useCase;
  document.getElementById('testimonial').textContent = s.testimonial;
  document.getElementById('demoTitle').textContent = `Asistente · ${s.label}`;
  document.getElementById('regulationText').textContent = `${c.label} · ${c.regulation}`;

  const features = document.getElementById('features');
  features.innerHTML = '';
  s.features.forEach((text) => {
    const li = document.createElement('li');
    li.textContent = text;
    features.appendChild(li);
  });

  document.getElementById('crmDashboard').textContent = s.crm.dashboard;
  document.getElementById('crmPatientCard').textContent = s.crm.patient;
  document.getElementById('crmServices').textContent = s.crm.services;
  document.getElementById('crmAutomation').textContent = s.crm.automation;

  const privacy = document.getElementById('privacyNote');
  privacy.classList.toggle('hidden', !s.showPrivacy);

  renderSpecialtyPills();
  runChat(s.demo);
  renderPricing(countryCode);
}

function wireCountryModal() {
  const countrySelect = document.getElementById('countrySelect');
  const modal = document.getElementById('comingSoonModal');
  const title = document.getElementById('comingSoonTitle');

  countrySelect.addEventListener('change', () => {
    const c = countries[countrySelect.value];
    if (!c.active) {
      title.textContent = `Próximamente en ${c.label.replace(/^..\s/, '')}`;
      modal.classList.remove('hidden');
    }
    renderAll();
  });

  document.getElementById('closeModal').addEventListener('click', () => modal.classList.add('hidden'));
  document.getElementById('leadForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Gracias. Te avisaremos cuando abramos este país.');
    modal.classList.add('hidden');
  });
}

renderCountryOptions();
renderBlog();
wireCountryModal();
renderAll();
