import { cn } from '@/lib/utils'

interface LiveBadgeProps {
  children: React.ReactNode
  /** Cor do dot pulsante (default: primary) */
  dotColor?: 'primary' | 'green'
  /** Variante de cor do badge */
  variant?: 'default' | 'subtle'
  className?: string
}

/**
 * Badge premium com indicador live pulsante.
 * Padrão visual reutilizado em todas as seções do site.
 */
export function LiveBadge({
  children,
  dotColor = 'primary',
  variant = 'default',
  className,
}: LiveBadgeProps) {
  const dotClass = dotColor === 'green' ? 'bg-green-400' : 'bg-primary'
  const variantClass =
    variant === 'subtle'
      ? 'border-primary/20 bg-primary/[0.05]'
      : 'border-primary/30 bg-primary/10'

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm',
        variantClass,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
            dotClass
          )}
        />
        <span
          className={cn(
            'relative inline-flex rounded-full h-2 w-2',
            dotClass
          )}
        />
      </span>
      <span className="text-[10px] md:text-xs text-primary/90 font-bold tracking-widest uppercase">
        {children}
      </span>
    </div>
  )
}
