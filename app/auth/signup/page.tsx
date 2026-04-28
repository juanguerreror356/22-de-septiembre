'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { specialties, countries } from '@/lib/data';

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  clinic: z.string().min(2),
  specialty: z.string(),
  country: z.string(),
  accept: z.literal(true)
});

type Form = z.infer<typeof schema>;

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<Form>({ resolver: zodResolver(schema), defaultValues: { country: 'CO', specialty: 'odontologia' } });
  return (
    <main className="section-wrap py-10">
      <h1 className="mb-4 text-3xl font-bold">Crear cuenta gratuita</h1>
      <form onSubmit={handleSubmit(() => alert('Cuenta creada (mock)'))} className="grid max-w-xl gap-3 rounded-xl border border-border bg-panel p-4">
        <input {...register('fullName')} placeholder="Nombre completo" className="rounded-md border border-border bg-bg p-2" />
        <input {...register('email')} placeholder="Email" className="rounded-md border border-border bg-bg p-2" />
        <input type="password" {...register('password')} placeholder="Contraseña" className="rounded-md border border-border bg-bg p-2" />
        <input {...register('clinic')} placeholder="Nombre del consultorio" className="rounded-md border border-border bg-bg p-2" />
        <select {...register('specialty')} className="rounded-md border border-border bg-bg p-2">{specialties.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}</select>
        <select {...register('country')} className="rounded-md border border-border bg-bg p-2">{countries.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.name}</option>)}</select>
        <label className="text-xs text-slate-300"><input type="checkbox" {...register('accept')} /> Acepto Términos y Política Ley 1581</label>
        {Object.values(errors).length > 0 && <p className="text-xs text-red-400">Revise los campos obligatorios.</p>}
        <button className="rounded-lg bg-amber-400 px-4 py-2 font-semibold text-slate-900">Crear cuenta</button>
      </form>
    </main>
  );
}
