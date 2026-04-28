import { appointments } from '@/lib/mock-data/appointments';

export default function AgendaPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Agenda</h1>
      {appointments.length === 0 ? (
        <div className="rounded-xl border border-border bg-panel p-6 text-slate-300">Su agenda está vacía. Configure sus servicios para empezar a recibir citas.</div>
      ) : (
        <div className="rounded-xl border border-border bg-panel p-4">
          <p className="mb-3 text-sm text-slate-400">Vista semana (mock)</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{appointments.slice(0, 18).map((a) => <div key={a.id} className="rounded border border-border p-2 text-xs">{a.start.slice(0, 16)} · {a.service}<br />{a.status}</div>)}</div>
        </div>
      )}
    </div>
  );
}
