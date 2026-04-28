import { cn } from '@/lib/utils';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('card-gradient soft-border rounded-xl p-4', className)} {...props} />;
}
