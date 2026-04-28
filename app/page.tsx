import { LandingHero } from '@/components/landing/hero';
import { PricingSection } from '@/components/landing/pricing';
import { BlogPreview } from '@/components/landing/blog-preview';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="pb-16">
      <LandingHero />

      <section className="section-wrap py-8">
        <h2 className="mb-4 text-3xl font-bold">Cómo funciona</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card><h3 className="font-semibold">1. Regístrese en 2 minutos</h3><p className="text-slate-300">Cree cuenta, seleccione especialidad y país.</p></Card>
          <Card><h3 className="font-semibold">2. Configure su consultorio</h3><p className="text-slate-300">Servicios, agenda y tono de bot en onboarding.</p></Card>
          <Card><h3 className="font-semibold">3. Su WhatsApp cobra vida</h3><p className="text-slate-300">Agenda, confirma y hace seguimiento 24/7.</p></Card>
        </div>
      </section>

      <section className="section-wrap py-8">
        <h2 className="mb-4 text-3xl font-bold">Módulos</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['Asistente WhatsApp IA','Agenda Inteligente','Gestión de Pacientes','Notas por Voz','Analytics con IA','Seguimiento Post-cita','Facturación y Cobros','RDA Resolución 1888','Integraciones'].map((m) => (
            <Card key={m}><h3 className="font-semibold">{m}</h3><p className="text-sm text-slate-300">Preview listo para conectar con Supabase.</p></Card>
          ))}
        </div>
      </section>

      <PricingSection />
      <BlogPreview />
    </main>
  );
}
