'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Calendar, Users, MessageSquare, BarChart3, CreditCard, FileText, Settings } from 'lucide-react';

const items = [
  { href: '/dashboard', label: 'Inicio', icon: LayoutDashboard },
  { href: '/dashboard/agenda', label: 'Agenda', icon: Calendar },
  { href: '/dashboard/pacientes', label: 'Pacientes', icon: Users },
  { href: '/dashboard/conversaciones', label: 'Conversaciones', icon: MessageSquare },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/finanzas', label: 'Finanzas', icon: CreditCard },
  { href: '/dashboard/rda', label: 'RDA MinSalud', icon: FileText },
  { href: '/dashboard/ajustes', label: 'Ajustes', icon: Settings }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 shrink-0 border-r border-border bg-panel p-4 lg:block">
      <p className="text-xl font-black">MEDACCER</p>
      <p className="mb-4 text-xs text-slate-400">Sonrisa Dental · Plan Asistente IA</p>
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${active ? 'bg-elevated text-white' : 'text-slate-300 hover:bg-elevated/60'}`}
            >
              <Icon className="h-4 w-4" /> {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
