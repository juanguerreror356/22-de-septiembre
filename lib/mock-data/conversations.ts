export interface Conversation {
  id: string;
  patientId: string;
  lastMessage: string;
  time: string;
  escalated: boolean;
}

export const conversations: Conversation[] = Array.from({ length: 45 }).map((_, i) => ({
  id: `c-${i + 1}`,
  patientId: `p-${(i % 85) + 1}`,
  lastMessage: i % 3 === 0 ? '¿Me confirma la cita?' : 'Gracias, quedo atento.',
  time: `2026-04-${((i % 27) + 1).toString().padStart(2, '0')} 1${i % 10}:3${i % 6}`,
  escalated: i % 9 === 0
}));
