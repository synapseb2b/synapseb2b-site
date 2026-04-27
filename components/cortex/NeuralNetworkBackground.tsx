'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface NeuralNetworkBackgroundProps {
  /** Number of synaptic curves (dendrites) */
  curveCount?: number
  /** Number of synaptic terminals (neurons) */
  nodeCount?: number
  /** Overall opacity */
  opacity?: number
}

interface Curve {
  // Bezier curve: M start C control1 control2 end
  startX: number
  startY: number
  c1X: number
  c1Y: number
  c2X: number
  c2Y: number
  endX: number
  endY: number
  duration: number
  delay: number
  pulseDelay: number
  pathId: string
}

interface Node {
  cx: number
  cy: number
  size: 'small' | 'medium' | 'large'
  pulseDelay: number
}

/**
 * Background sinaptico V2:
 * - Curvas Bezier (dendrites) conectando pontos
 * - Pulsos brilhantes viajando pelas curvas (action potentials)
 * - Nodes em 3 tamanhos (synaptic terminals + soma)
 * - Sem particulas caindo
 */
export function NeuralNetworkBackground({
  curveCount = 12,
  nodeCount = 10,
  opacity = 0.45,
}: NeuralNetworkBackgroundProps) {
  const [seeds, setSeeds] = useState<{
    curves: Curve[]
    nodes: Node[]
  } | null>(null)

  useEffect(() => {
    const curves: Curve[] = Array.from({ length: curveCount }, (_, i) => {
      const startX = Math.random() * 800
      const startY = Math.random() * 600
      const endX = Math.random() * 800
      const endY = Math.random() * 600
      // Control points create organic curve
      const midX = (startX + endX) / 2
      const midY = (startY + endY) / 2
      const offsetMag = 60 + Math.random() * 80
      const angle = Math.random() * Math.PI * 2
      return {
        startX,
        startY,
        c1X: midX + Math.cos(angle) * offsetMag,
        c1Y: midY + Math.sin(angle) * offsetMag,
        c2X: midX - Math.cos(angle) * offsetMag * 0.5,
        c2Y: midY - Math.sin(angle) * offsetMag * 0.5,
        endX,
        endY,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 4,
        pulseDelay: Math.random() * 6,
        pathId: `synapse-path-${i}`,
      }
    })

    const sizes: Array<'small' | 'medium' | 'large'> = []
    for (let i = 0; i < nodeCount; i++) {
      // 60% small, 30% medium, 10% large
      const r = Math.random()
      sizes.push(r < 0.6 ? 'small' : r < 0.9 ? 'medium' : 'large')
    }

    const nodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
      cx: Math.random() * 800,
      cy: Math.random() * 600,
      size: sizes[i],
      pulseDelay: Math.random() * 4,
    }))

    setSeeds({ curves, nodes })
  }, [curveCount, nodeCount])

  if (!seeds) {
    return (
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="dendrite-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8ec0f5" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="terminal-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8ec0f5" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#4a90d9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4a90d9" stopOpacity="0" />
          </radialGradient>
          <filter id="action-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

        </defs>

        {/* Dendrites: curvas Bezier */}
        {seeds.curves.map((c, i) => (
          <motion.path
            key={`curve-${i}`}
            d={`M ${c.startX} ${c.startY} C ${c.c1X} ${c.c1Y}, ${c.c2X} ${c.c2Y}, ${c.endX} ${c.endY}`}
            fill="none"
            stroke="url(#dendrite-grad)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0.8],
              opacity: [0, 0.5, 0.5, 0.2],
            }}
            transition={{
              duration: c.duration,
              repeat: Infinity,
              delay: c.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Synaptic pulses: pequenos brilhos posicionados ao longo das curvas */}
        {seeds.curves.slice(0, 8).map((c, i) => {
          // posicionar o pulso no ponto medio aproximado da curva Bezier
          const midX = (c.startX + 3 * c.c1X + 3 * c.c2X + c.endX) / 8
          const midY = (c.startY + 3 * c.c1Y + 3 * c.c2Y + c.endY) / 8
          return (
            <motion.circle
              key={`pulse-${i}`}
              cx={midX}
              cy={midY}
              r="2"
              fill="#b8d8fc"
              filter="url(#action-glow)"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: c.pulseDelay,
                ease: 'easeInOut',
              }}
            />
          )
        })}

        {/* Synaptic terminals + soma (neurons) */}
        {seeds.nodes.map((node, i) => {
          const sizes = {
            small: { r: 2, glowR: 6 },
            medium: { r: 3, glowR: 10 },
            large: { r: 5, glowR: 16 },
          }
          const { r, glowR } = sizes[node.size]
          return (
            <g key={`node-${i}`}>
              {/* Glow */}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={glowR}
                fill="url(#terminal-glow)"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.9, 1.2, 0.9],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: node.pulseDelay,
                  ease: 'easeInOut',
                }}
              />
              {/* Core */}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={r}
                fill="#8ec0f5"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: node.pulseDelay,
                  ease: 'easeInOut',
                }}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
