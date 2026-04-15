'use client'

import { useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef, type RefObject } from 'react'

export function useScrollProgress(
  offset: ['start end' | 'start start' | 'end end' | 'end start', 'start end' | 'start start' | 'end end' | 'end start'] = ['start end', 'end start']
): {
  ref: RefObject<HTMLDivElement | null>
  progress: MotionValue<number>
  opacity: MotionValue<number>
  y: MotionValue<number>
} {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return { ref, progress: scrollYProgress, opacity, y }
}
