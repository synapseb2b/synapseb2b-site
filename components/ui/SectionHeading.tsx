'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className="text-accent-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-white/50 text-[0.9rem] md:text-base leading-[1.75] max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
