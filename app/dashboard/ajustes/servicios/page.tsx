import { services } from '@/lib/mock-data/services';

export default function ServiciosPage() {
  return <div className="rounded-xl border border-border bg-panel p-4">{services.map((s) => <p key={s.id}>{s.name} · ${s.price.toLocaleString('es-CO')} · {s.durationMin} min</p>)}</div>;
}
