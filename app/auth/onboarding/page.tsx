export default function OnboardingPage() {
  return (
    <main className="section-wrap py-10">
      <h1 className="mb-4 text-3xl font-bold">Onboarding</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <section className="rounded-xl border border-border bg-panel p-4"><h2 className="font-semibold">Paso 1</h2><p className="text-slate-300">Configure servicios (precio y duración).</p></section>
        <section className="rounded-xl border border-border bg-panel p-4"><h2 className="font-semibold">Paso 2</h2><p className="text-slate-300">Conecte Google Calendar o defina horarios manuales.</p></section>
        <section className="rounded-xl border border-border bg-panel p-4"><h2 className="font-semibold">Paso 3</h2><p className="text-slate-300">Active WhatsApp Business y revise preview del bot.</p></section>
      </div>
    </main>
  );
}
