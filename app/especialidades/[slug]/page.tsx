import { specialties } from '@/lib/data';

export default function SpecialtyPage({ params }: { params: { slug: string } }) {
  const s = specialties.find((x) => x.slug === params.slug);
  if (!s) return <main className="section-wrap py-10">Especialidad no encontrada.</main>;

  return (
    <main className="section-wrap py-10">
      <h1 className="text-4xl font-bold">{s.headline}</h1>
      <p className="mt-3 max-w-2xl text-slate-300">{s.subheadline}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-panel p-4"><h2 className="font-semibold">Dolor + ROI</h2><p className="text-slate-300">{s.roi}</p></div>
        <div className="rounded-xl border border-border bg-panel p-4"><h2 className="font-semibold">Propuesta única</h2><p className="text-slate-300">{s.uniqueValue}</p></div>
      </div>
    </main>
  );
}
