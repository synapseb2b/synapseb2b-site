'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const lenses = [
  { id: 0, label: 'Fundador', angle: -90 },
  { id: 1, label: 'Neurociência', angle: -18 },
  { id: 2, label: 'Receita', angle: 54 },
  { id: 3, label: 'Comprador', angle: 126 },
  { id: 4, label: 'Crescimento', angle: 198 },
]

export function CortexLensesDiagram() {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(420)

  useEffect(() => {
    function resize() {
      if (!ref.current) return
      const w = Math.min(ref.current.offsetWidth, 520)
      setSize(w)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const cx = size / 2
  const cy = size / 2
  const radius = size * 0.34
  const nodeR = size * 0.075

  return (
    <div ref={ref} className="w-full max-w-[520px] mx-auto aspect-square relative">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        <defs>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(74,144,217,0.6)" />
            <stop offset="60%" stopColor="rgba(74,144,217,0.2)" />
            <stop offset="100%" stopColor="rgba(74,144,217,0)" />
          </radialGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(74,144,217,0.9)" />
            <stop offset="100%" stopColor="rgba(74,144,217,0.3)" />
          </radialGradient>
        </defs>

        {/* Pulsating outer rings */}
        {[1.4, 1.8, 2.2].map((scale, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={radius * scale}
            fill="none"
            stroke="rgba(74,144,217,0.12)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.1, 1.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: 'easeOut' }}
          />
        ))}

        {/* Center halo */}
        <circle cx={cx} cy={cy} r={radius * 0.7} fill="url(#centerGlow)" />

        {/* Connection lines from center to each lens */}
        {lenses.map((lens) => {
          const angleRad = (lens.angle * Math.PI) / 180
          const x = cx + Math.cos(angleRad) * radius
          const y = cy + Math.sin(angleRad) * radius
          return (
            <motion.line
              key={`line-${lens.id}`}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="rgba(74,144,217,0.3)"
              strokeWidth="1"
              strokeDasharray="3 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 + lens.id * 0.1, ease: 'easeOut' }}
            />
          )
        })}

        {/* Pulsing data flow on each line */}
        {lenses.map((lens) => {
          const angleRad = (lens.angle * Math.PI) / 180
          const x = cx + Math.cos(angleRad) * radius
          const y = cy + Math.sin(angleRad) * radius
          return (
            <motion.circle
              key={`pulse-${lens.id}`}
              r="3"
              fill="rgba(106,168,232,0.9)"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                cx: [cx, x, cx],
                cy: [cy, y, cy],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5 + lens.id * 0.6,
                ease: 'easeInOut',
              }}
            />
          )
        })}

        {/* Connections between lenses (forming pentagon) */}
        {lenses.map((lens, i) => {
          const next = lenses[(i + 1) % lenses.length]
          const a1 = (lens.angle * Math.PI) / 180
          const a2 = (next.angle * Math.PI) / 180
          const x1 = cx + Math.cos(a1) * radius
          const y1 = cy + Math.sin(a1) * radius
          const x2 = cx + Math.cos(a2) * radius
          const y2 = cy + Math.sin(a2) * radius
          return (
            <motion.line
              key={`pentagon-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(74,144,217,0.15)"
              strokeWidth="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 1.2 + i * 0.1, ease: 'easeInOut' }}
            />
          )
        })}

        {/* Center node — CORTEX */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <circle cx={cx} cy={cy} r={nodeR * 1.4} fill="url(#nodeGlow)" filter="url(#glow)" />
          <circle cx={cx} cy={cy} r={nodeR * 0.8} fill="#4a90d9" />
          <text
            x={cx}
            y={cy + 4}
            textAnchor="middle"
            className="fill-white font-bold tracking-tight"
            fontSize={size * 0.045}
          >
            CORTEX
          </text>
        </motion.g>

        {/* Lens nodes */}
        {lenses.map((lens) => {
          const angleRad = (lens.angle * Math.PI) / 180
          const x = cx + Math.cos(angleRad) * radius
          const y = cy + Math.sin(angleRad) * radius
          return (
            <motion.g
              key={`node-${lens.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.6 + lens.id * 0.12,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <circle cx={x} cy={y} r={nodeR * 1.3} fill="rgba(74,144,217,0.15)" filter="url(#glow)" />
              <circle
                cx={x}
                cy={y}
                r={nodeR * 0.85}
                fill="rgba(10,36,99,0.95)"
                stroke="rgba(74,144,217,0.6)"
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                className="fill-white/90 font-medium"
                fontSize={size * 0.026}
              >
                {lens.label}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
