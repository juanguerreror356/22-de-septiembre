export type AppointmentStatus = 'Confirmada' | 'Pendiente' | 'Completada' | 'No-show' | 'Cancelada';

export interface Appointment {
  id: string;
  patientId: string;
  doctor: string;
  service: string;
  start: string;
  status: AppointmentStatus;
}

const doctors = ['Dra. María López', 'Dr. Carlos Rodríguez'];
const statuses: AppointmentStatus[] = ['Confirmada', 'Pendiente', 'Completada', 'No-show', 'Cancelada'];
const services = ['Limpieza dental', 'Diseño de sonrisa', 'Ortodoncia inicial', 'Blanqueamiento'];

export const appointments: Appointment[] = Array.from({ length: 340 }).map((_, i) => ({
  id: `a-${i + 1}`,
  patientId: `p-${(i % 85) + 1}`,
  doctor: doctors[i % doctors.length],
  service: services[i % services.length],
  start: `2026-0${(i % 3) + 1}-${((i % 28) + 1).toString().padStart(2, '0')}T${(8 + (i % 10)).toString().padStart(2, '0')}:00:00`,
  status: statuses[i % statuses.length]
}));
