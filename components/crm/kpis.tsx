import { kpis } from '@/lib/mock-data/analytics';
import { Card } from '@/components/ui/card';

export function DashboardKpis() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      <Card><p className="text-xs text-slate-400">Citas hoy</p><p className="text-2xl font-bold">{kpis.appointmentsToday}</p></Card>
      <Card><p className="text-xs text-slate-400">Pacientes nuevos</p><p className="text-2xl font-bold">{kpis.newPatientsMonth}</p></Card>
      <Card><p className="text-xs text-slate-400">No-show</p><p className="text-2xl font-bold text-success">{kpis.noShowRate}%</p></Card>
      <Card><p className="text-xs text-slate-400">Ingresos mes</p><p className="text-2xl font-bold">${kpis.monthlyIncome.toLocaleString('es-CO')}</p></Card>
    </div>
  );
}
