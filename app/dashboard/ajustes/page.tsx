import Link from 'next/link';

export default function AjustesPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Ajustes</h1>
      <div className="grid gap-2 md:grid-cols-3">
        <Link className="rounded-xl border border-border bg-panel p-4" href="/dashboard/ajustes/equipo">Equipo</Link>
        <Link className="rounded-xl border border-border bg-panel p-4" href="/dashboard/ajustes/integraciones">Integraciones</Link>
        <Link className="rounded-xl border border-border bg-panel p-4" href="/dashboard/ajustes/servicios">Servicios</Link>
      </div>
    </div>
  );
}
