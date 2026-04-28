export interface Service {
  id: string;
  name: string;
  price: number;
  durationMin: number;
}

export const services: Service[] = [
  { id: 's1', name: 'Limpieza dental', price: 150000, durationMin: 45 },
  { id: 's2', name: 'Blanqueamiento', price: 350000, durationMin: 60 },
  { id: 's3', name: 'Ortodoncia inicial', price: 3500000, durationMin: 60 },
  { id: 's4', name: 'Diseño de sonrisa', price: 2500000, durationMin: 90 },
  { id: 's5', name: 'Extracción simple', price: 180000, durationMin: 40 },
  { id: 's6', name: 'Endodoncia', price: 420000, durationMin: 80 },
  { id: 's7', name: 'Valoración general', price: 90000, durationMin: 30 },
  { id: 's8', name: 'Control ortodoncia', price: 130000, durationMin: 30 },
  { id: 's9', name: 'Implante dental', price: 2200000, durationMin: 120 },
  { id: 's10', name: 'Profilaxis', price: 120000, durationMin: 35 },
  { id: 's11', name: 'Urgencia dental', price: 200000, durationMin: 30 },
  { id: 's12', name: 'Radiografía periapical', price: 70000, durationMin: 20 }
];
