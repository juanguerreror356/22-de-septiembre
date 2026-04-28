import { patients } from '@/lib/mock-data/patients';

export default function PatientDetail({ params }: { params: { id: string } }) {
  const p = patients.find((x) => x.id === params.id);
  if (!p) return <div>Paciente no encontrado</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{p.name}</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-panel p-4 md:col-span-2">Timeline, citas, conversaciones, notas y pagos (mock).</div>
        <div className="rounded-xl border border-border bg-panel p-4">Datos rápidos: {p.phone} · {p.email}</div>
      </div>
    </div>
  );
}
