'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LogoMarqueeProps {
  items: string[]
  speed?: number
  className?: string
}

export function LogoMarquee({ items, speed = 30, className }: LogoMarqueeProps) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#060e22] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#060e22] to-transparent pointer-events-none" />

      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-white/50 text-sm md:text-base font-semibold tracking-wider uppercase flex-shrink-0 hover:text-white/80 transition-colors duration-500"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
