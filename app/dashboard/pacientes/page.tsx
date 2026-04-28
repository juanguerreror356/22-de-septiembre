import Link from 'next/link';
import { patients } from '@/lib/mock-data/patients';

export default function PacientesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Pacientes</h1>
      {patients.length === 0 ? (
        <div className="rounded-xl border border-border bg-panel p-6 text-slate-300">Aún no tiene pacientes. Se agregarán automáticamente cuando agenden por WhatsApp.</div>
      ) : (
        <div className="rounded-xl border border-border bg-panel p-4">
          <div className="grid gap-2">
            {patients.slice(0, 20).map((p) => (
              <Link href={`/dashboard/pacientes/${p.id}`} key={p.id} className="rounded border border-border p-2 text-sm hover:bg-elevated/50">
                {p.name} · {p.phone} · {p.status}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
