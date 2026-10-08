import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'flex size-8 items-center justify-center rounded-lg font-mono text-sm font-bold',
          inverted ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground',
        )}
      >
        B/
      </span>
      <span className="text-lg font-semibold tracking-tight">
        BANGOJAN<span className="text-primary">-PoS</span>
      </span>
    </span>
  )
}
