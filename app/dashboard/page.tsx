import { DashboardKpis } from '@/components/crm/kpis';
import { appointments } from '@/lib/mock-data/appointments';

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Buenos días, Dra. María López</h1>
      <p className="text-slate-400">Martes, 28 de abril de 2026</p>
      <DashboardKpis />
      <section className="rounded-xl border border-border bg-panel p-4">
        <h2 className="mb-3 font-semibold">Agenda de hoy</h2>
        <div className="space-y-2 text-sm text-slate-300">
          {appointments.slice(0, 8).map((a) => <p key={a.id}>{a.start.slice(11, 16)} · {a.service} · {a.doctor} · {a.status}</p>)}
        </div>
      </section>
      <section className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-4 text-sm text-cyan-100">
        Recomendación IA: Los martes tiene 25% más no-shows en ortodoncia. Active doble recordatorio lunes 8 PM.
      </section>
    </div>
  );
}
