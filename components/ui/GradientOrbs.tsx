'use client'

import { motion } from 'framer-motion'

interface GradientOrbsProps {
  /** Primary color */
  color?: string
  /** Number of orbs */
  count?: number
  /** Overall opacity */
  opacity?: number
}

const orbConfigs = [
  { x: '15%', y: '20%', size: 400, duration: 20, delay: 0 },
  { x: '70%', y: '60%', size: 350, duration: 25, delay: 2 },
  { x: '40%', y: '80%', size: 300, duration: 22, delay: 4 },
  { x: '85%', y: '25%', size: 280, duration: 18, delay: 1 },
  { x: '25%', y: '50%', size: 320, duration: 23, delay: 3 },
]

export function GradientOrbs({
  color = 'rgba(74,144,217',
  count = 3,
  opacity = 0.06,
}: GradientOrbsProps) {
  const orbs = orbConfigs.slice(0, count)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" style={{ maxWidth: '100%' }}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${color},${opacity}) 0%, ${color},0) 70%)`,
            filter: `blur(${orb.size * 0.4}px)`,
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
