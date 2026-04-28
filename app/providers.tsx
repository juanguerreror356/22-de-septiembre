'use client';

import { Providers as QueryProviders } from '@/lib/query-client';

export function Providers({ children }: { children: React.ReactNode }) {
  return <QueryProviders>{children}</QueryProviders>;
}
