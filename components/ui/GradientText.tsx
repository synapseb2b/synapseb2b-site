'use client'

import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  from?: string
  to?: string
}

export function GradientText({
  children,
  className,
  from = 'from-accent-300',
  to = 'to-white',
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        from,
        to,
        className
      )}
    >
      {children}
    </span>
  )
}
