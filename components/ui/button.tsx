import { cn } from '@/lib/utils';

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'rounded-lg border border-border bg-gradient-to-br from-primary to-blue-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:shadow-glow',
        className
      )}
      {...props}
    />
  );
}
