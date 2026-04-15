'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  text: string
  className?: string
  /** Delay before animation starts */
  delay?: number
  /** Animate by 'word' or 'char' */
  by?: 'word' | 'char'
}

export function TextReveal({
  text,
  className,
  delay = 0,
  by = 'word',
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15%' })

  const units = by === 'word' ? text.split(' ') : text.split('')

  return (
    <span ref={ref} className={cn('inline', className)}>
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * (by === 'word' ? 0.08 : 0.03),
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {unit}
            {by === 'word' && i < units.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
