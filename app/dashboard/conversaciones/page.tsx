import { conversations } from '@/lib/mock-data/conversations';

export default function ConversacionesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Conversaciones</h1>
      {conversations.length === 0 ? (
        <div className="rounded-xl border border-border bg-panel p-6 text-slate-300">Conecte WhatsApp para ver conversaciones.</div>
      ) : (
        <div className="grid gap-3 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-xl border border-border bg-panel p-3">{conversations.map((c) => <div key={c.id} className="mb-2 rounded border border-border p-2 text-xs">{c.lastMessage}</div>)}</aside>
          <section className="rounded-xl border border-border bg-panel p-4">Seleccione una conversación para ver detalle.</section>
        </div>
      )}
    </div>
  );
}
