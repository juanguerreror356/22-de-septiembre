import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A1628',
        panel: '#111D33',
        elevated: '#1A2A44',
        border: '#1E3A5F',
        primary: '#2563EB',
        cyan: '#06B6D4',
        amber: '#F59E0B',
        success: '#10B981',
        danger: '#EF4444'
      },
      borderRadius: {
        xl: '12px',
        lg: '8px',
        md: '6px'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,.4), 0 8px 30px rgba(37,99,235,.25)'
      }
    }
  },
  plugins: []
} satisfies Config;
