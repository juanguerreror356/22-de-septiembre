export interface Patient {
  id: string;
  name: string;
  phone: string;
  email: string;
  lastVisit: string;
  nextVisit?: string;
  status: 'Activo' | 'Inactivo';
}

export const patients: Patient[] = Array.from({ length: 85 }).map((_, i) => ({
  id: `p-${i + 1}`,
  name: `Paciente ${i + 1}`,
  phone: `+57 31${(10000000 + i).toString().slice(0, 8)}`,
  email: `paciente${i + 1}@mail.com`,
  lastVisit: `2026-0${((i % 3) + 1).toString()}-${((i % 27) + 1).toString().padStart(2, '0')}`,
  nextVisit: i % 4 === 0 ? undefined : `2026-04-${((i % 27) + 1).toString().padStart(2, '0')}`,
  status: i % 7 === 0 ? 'Inactivo' : 'Activo'
}));
