import { pricingPlans } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PricingSection() {
  return (
    <section id="pricing" className="section-wrap py-12">
      <h2 className="mb-5 text-3xl font-bold">Pricing</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className={plan.recommended ? 'shadow-glow' : ''}>
            {plan.recommended && <span className="mb-2 inline-block rounded-full bg-cyan-400/20 px-2 py-1 text-xs text-cyan-200">RECOMENDADO</span>}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-1 text-2xl font-black">${plan.monthly.toLocaleString('es-CO')} COP/mes</p>
            <ul className="my-3 space-y-1 text-sm text-slate-300">
              {plan.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
            <Button className={plan.recommended ? 'bg-amber-500 from-amber-500 to-amber-400 text-slate-900' : ''}>Empezar gratis</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
