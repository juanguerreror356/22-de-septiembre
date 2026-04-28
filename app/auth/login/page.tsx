export default function LoginPage() {
  return (
    <main className="section-wrap py-10">
      <h1 className="mb-4 text-3xl font-bold">Iniciar sesión</h1>
      <form className="grid max-w-md gap-3 rounded-xl border border-border bg-panel p-4">
        <input placeholder="Email" className="rounded-md border border-border bg-bg p-2" />
        <input type="password" placeholder="Contraseña" className="rounded-md border border-border bg-bg p-2" />
        <button className="rounded-lg bg-primary px-4 py-2">Iniciar sesión</button>
      </form>
    </main>
  );
}
