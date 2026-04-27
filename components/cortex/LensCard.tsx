'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LensCardProps {
  icon: LucideIcon
  number: string
  title: string
  frameworks: string
  delay?: number
  index: number
  /** Display variant */
  variant?: 'compact' | 'detailed'
  /** Long description (used in detailed variant) */
  description?: string
}

/**
 * Card de lente cognitiva do CORTEX. Pulsa periodicamente como se estivesse "processando".
 */
export function LensCard({
  icon: Icon,
  number,
  title,
  frameworks,
  delay = 0,
  index,
  variant = 'compact',
  description,
}: LensCardProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsProcessing(true)
      setTimeout(() => setIsProcessing(false), 1000)
    }, 3000 + index * 500)
    return () => clearInterval(interval)
  }, [index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
    >
      <div
        className={cn(
          'card-shine relative h-full bg-white/[0.02] backdrop-blur-sm',
          'border border-white/[0.08] rounded-[2rem]',
          'transition-all duration-500',
          'hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(74,144,217,0.12)]',
          isProcessing && 'border-primary/40 shadow-[0_8px_30px_rgba(74,144,217,0.18)]',
          variant === 'compact' ? 'p-6' : 'p-8 md:p-10'
        )}
      >
        {/* Top: number + icon */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-primary/80 text-sm font-bold font-heading tracking-widest">
            {number}
          </span>
          <motion.div
            animate={
              isProcessing
                ? { scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }
                : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary"
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Title */}
        <h3
          className={cn(
            'font-bold text-white tracking-tight leading-tight mb-3',
            variant === 'compact'
              ? 'text-lg md:text-xl'
              : 'text-xl md:text-2xl mb-4'
          )}
        >
          {title}
        </h3>

        {/* Description (only detailed) */}
        {variant === 'detailed' && description && (
          <p className="text-white/65 text-base leading-relaxed mb-4">
            {description}
          </p>
        )}

        {/* Frameworks */}
        <p className="text-primary/70 text-xs md:text-sm font-medium tracking-wide leading-relaxed">
          {frameworks}
        </p>

        {/* Processing bar (bottom) */}
        {isProcessing && (
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent-300 to-primary"
          />
        )}
      </div>
    </motion.div>
  )
}
