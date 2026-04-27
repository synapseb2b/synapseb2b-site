'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface NeuralNetworkBackgroundProps {
  /** Number of connection lines */
  lineCount?: number
  /** Number of nodes */
  nodeCount?: number
  /** Number of falling particles */
  particleCount?: number
  /** Opacity multiplier for the entire layer */
  opacity?: number
}

/**
 * Background visual com 3 camadas:
 * - Linhas neurais conectando pontos aleatorios
 * - Nodes pulsantes
 * - Particulas caindo (data flow)
 */
export function NeuralNetworkBackground({
  lineCount = 25,
  nodeCount = 18,
  particleCount = 30,
  opacity = 0.4,
}: NeuralNetworkBackgroundProps) {
  const [activeNodes, setActiveNodes] = useState<number[]>([])
  const [seeds, setSeeds] = useState<{
    lines: { x1: number; y1: number; x2: number; y2: number; delay: number }[]
    nodes: { cx: number; cy: number }[]
    particles: { left: number; duration: number; delay: number }[]
  } | null>(null)

  // Generate random positions only on client to avoid hydration mismatch
  useEffect(() => {
    setSeeds({
      lines: Array.from({ length: lineCount }, () => ({
        x1: Math.random() * 800,
        y1: Math.random() * 600,
        x2: Math.random() * 800,
        y2: Math.random() * 600,
        delay: Math.random() * 3,
      })),
      nodes: Array.from({ length: nodeCount }, () => ({
        cx: Math.random() * 800,
        cy: Math.random() * 600,
      })),
      particles: Array.from({ length: particleCount }, () => ({
        left: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      })),
    })
  }, [lineCount, nodeCount, particleCount])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes(
        Array.from({ length: 5 }, () => Math.floor(Math.random() * nodeCount))
      )
    }, 2000)
    return () => clearInterval(interval)
  }, [nodeCount])

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
      {/* SVG: Neural lines + nodes */}
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="neural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {seeds.lines.map((line, i) => (
          <motion.line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#neural-grad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: line.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Neural nodes */}
        {seeds.nodes.map((node, i) => {
          const isActive = activeNodes.includes(i)
          return (
            <motion.circle
              key={`node-${i}`}
              cx={node.cx}
              cy={node.cy}
              r="4"
              fill={isActive ? '#60a5fa' : '#1e40af'}
              animate={{
                scale: isActive ? [1, 1.6, 1] : 1,
                opacity: isActive ? [0.6, 1, 0.6] : 0.3,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
          )
        })}
      </svg>

      {/* Falling data particles */}
      <div className="absolute inset-0">
        {seeds.particles.map((p, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{ left: `${p.left}%`, top: '-10%' }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  )
}
