'use client';

import { useMemo } from 'react';
import { countries, specialties } from '@/lib/data';
import { useUiStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function LandingHero() {
  const { specialty, country, setCountry, setSpecialty } = useUiStore();
  const selected = useMemo(() => specialties.find((s) => s.slug === specialty) ?? specialties[0], [specialty]);
  const selectedCountry = countries.find((c) => c.code === country) ?? countries[0];

  return (
    <section className="section-wrap py-8 md:py-14">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-blue-500/40 bg-blue-500/15 px-3 py-1 text-xs text-blue-100">
              {selectedCountry.flag} {selectedCountry.name} · {selectedCountry.regulation}
            </span>
            <select
              value={country}
              onChange={(e) => {
                const c = countries.find((x) => x.code === e.target.value);
                if (c && !c.active) alert(`Próximamente en ${c.name}. Deja tu email para ser el primero.`);
                setCountry(e.target.value);
              }}
              className="rounded-md border border-border bg-panel px-2 py-1 text-xs"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>{c.flag} {c.name}{c.active ? '' : ' (Próximamente)'}</option>
              ))}
            </select>
          </div>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">{selected.headline}</h1>
          <p className="max-w-2xl text-slate-300">{selected.subheadline}</p>
          <div className="rounded-xl border border-amber-400/40 bg-amber-400/10 p-3 text-sm text-amber-50">{selected.roi}</div>
          <div className="flex flex-wrap gap-2">
            {specialties.map((s) => (
              <button
                key={s.slug}
                onClick={() => setSpecialty(s.slug)}
                className={`rounded-full border px-3 py-1 text-xs transition ${s.slug === selected.slug ? 'border-cyan-400 bg-cyan-400/10 text-cyan-100' : 'border-border text-slate-300'}`}
              >
                {s.name}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button className="bg-amber-500 from-amber-500 to-amber-400 text-slate-900">Empezar prueba gratis de 14 días</Button>
            <Button className="bg-transparent text-white">Ver demo</Button>
          </div>
        </div>

        <Card className="space-y-2">
          <p className="text-xs text-slate-300">Asistente WhatsApp · {selected.name}</p>
          <div className="space-y-2 rounded-xl bg-[#efe8de] p-3 text-slate-900">
            {selected.demo.map((line, i) => (
              <p key={line} className={`w-fit max-w-[85%] rounded-lg px-3 py-2 text-sm ${i % 2 ? 'bg-[#dcf8c6] ml-auto' : 'bg-white'}`}>
                {line}
              </p>
            ))}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <Card><h3 className="text-sm font-semibold">Propuesta única</h3><p className="text-xs text-slate-300">{selected.uniqueValue}</p></Card>
            <Card><h3 className="text-sm font-semibold">Caso de uso</h3><p className="text-xs text-slate-300">{selected.useCase}</p></Card>
          </div>
        </Card>
      </div>
    </section>
  );
}
