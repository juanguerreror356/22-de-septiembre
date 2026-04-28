'use client';
import { monthlyRevenue, noShowTrend } from '@/lib/mock-data/analytics';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function AnalyticsPage() {
  if (monthlyRevenue.length < 1) return <div className="rounded-xl border border-border bg-panel p-6">Necesita al menos 1 semana de datos para reportes.</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-panel p-4 h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={monthlyRevenue}><XAxis dataKey="month" /><YAxis /><Tooltip /><Line type="monotone" dataKey="value" stroke="#06B6D4" /></LineChart></ResponsiveContainer></div>
        <div className="rounded-xl border border-border bg-panel p-4 h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={noShowTrend}><XAxis dataKey="month" /><YAxis /><Tooltip /><Bar dataKey="rate" fill="#F59E0B" /></BarChart></ResponsiveContainer></div>
      </div>
    </div>
  );
}
