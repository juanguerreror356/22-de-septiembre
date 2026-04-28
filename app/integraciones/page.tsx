export default function IntegracionesPage() {
  const integrations = ['WhatsApp','Google Calendar','Wompi','MinSalud FHIR','Siigo','Alegra','n8n','Outlook','Zapier (próximamente)'];
  return (
    <main className="section-wrap py-10">
      <h1 className="mb-5 text-4xl font-bold">Integraciones</h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((i) => <div key={i} className="rounded-xl border border-border bg-panel p-4">{i}</div>)}
      </div>
    </main>
  );
}
