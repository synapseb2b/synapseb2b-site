'use client'

import { useEffect, useRef } from 'react'

interface SynapseBackgroundProps {
  particleCount?: number
  connectionDistance?: number
  color?: string
  opacity?: number
  speed?: number
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  phase: number
}

export function SynapseBackground({
  particleCount = 40,
  connectionDistance = 180,
  color = '74,144,217',
  opacity = 0.15,
  speed = 0.3,
}: SynapseBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let dpr = 1
    let nodes: Node[] = []
    let frameId = 0

    function createNodes() {
      nodes = []
      for (let i = 0; i < particleCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          r: Math.random() * 1.8 + 0.5,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const section = canvas!.parentElement
      if (!section) return

      w = section.offsetWidth
      h = section.offsetHeight

      canvas!.width = w * dpr
      canvas!.height = h * dpr
      canvas!.style.width = w + 'px'
      canvas!.style.height = h + 'px'

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      createNodes()
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      const t = performance.now() * 0.001

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        n.phase += 0.015

        if (n.x < 0) { n.x = 0; n.vx *= -1 }
        if (n.x > w) { n.x = w; n.vx *= -1 }
        if (n.y < 0) { n.y = 0; n.vy *= -1 }
        if (n.y > h) { n.y = h; n.vy *= -1 }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * opacity

            // Connection line
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.strokeStyle = `rgba(${color},${alpha * 0.5})`
            ctx!.lineWidth = 0.6
            ctx!.stroke()

            // Traveling pulse — a bright dot moving along the synapse
            if (alpha > 0.03) {
              const pulsePos = (Math.sin(t * 1.5 + i * 0.7 + j * 0.3) + 1) * 0.5
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * pulsePos
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * pulsePos

              ctx!.beginPath()
              ctx!.arc(px, py, 1.5, 0, Math.PI * 2)
              ctx!.fillStyle = `rgba(${color},${alpha * 1.2})`
              ctx!.fill()
            }
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulse = Math.sin(n.phase) * 0.35 + 0.65

        // Glow
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${color},${opacity * 0.06 * pulse})`
        ctx!.fill()

        // Core
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${color},${opacity * pulse * 0.8})`
        ctx!.fill()
      }

      frameId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement!)

    return () => {
      cancelAnimationFrame(frameId)
      ro.disconnect()
    }
  }, [particleCount, connectionDistance, color, opacity, speed])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}
