'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Brain, Eye, Network, Database, Zap } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { NeuralNetworkBackground } from '@/components/cortex/NeuralNetworkBackground'
import { LensCard } from '@/components/cortex/LensCard'

const HOME_LENSES = [
  {
    icon: Brain,
    number: '01',
    title: 'Fundador',
    frameworks: 'Andragogia · Challenger Sale',
  },
  {
    icon: Eye,
    number: '02',
    title: 'Neurociência',
    frameworks: 'Damásio · Kahneman',
  },
  {
    icon: Network,
    number: '03',
    title: 'Receita',
    frameworks: 'Value-Based · SPICED · Bowtie',
  },
  {
    icon: Database,
    number: '04',
    title: 'Comprador',
    frameworks: 'JOLT Effect · Confiança',
  },
  {
    icon: Zap,
    number: '05',
    title: 'Crescimento',
    frameworks: 'Founder-Led · Flywheel · Nearbound',
  },
]

export function CortexSection() {
  return (
    <section
      id="cortex"
      className="relative py-24 md:py-32 bg-background-dark text-white border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-40"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(74,144,217,0.18) 0%, rgba(15,23,42,0) 60%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-40"
          style={{
            background:
              'radial-gradient(circle at 30% 70%, rgba(37,99,235,0.18) 0%, rgba(15,23,42,0) 60%)',
          }}
        />
      </div>

      {/* Neural network background */}
      <NeuralNetworkBackground opacity={0.35} />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          className="flex flex-col items-center text-center mb-12 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Badge with live indicator */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[10px] md:text-xs text-primary/90 font-bold tracking-widest uppercase">
              Tecnologia Proprietária
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
              CORTEX
            </span>{' '}
            <span className="text-white">B2B™</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-snug font-medium"
          >
            Cinco lentes simultâneas. Um motor cognitivo.
          </motion.p>
        </motion.div>

        {/* 5 Lens cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-12"
        >
          {HOME_LENSES.map((lens, i) => (
            <LensCard
              key={lens.number}
              icon={lens.icon}
              number={lens.number}
              title={lens.title}
              frameworks={lens.frameworks}
              delay={0.1 + i * 0.08}
              index={i}
              variant="compact"
            />
          ))}
        </motion.div>

        {/* Live ops indicator + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-navy-900/50 border border-primary/20 backdrop-blur-sm">
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span className="text-xs text-white/65 tracking-wide">
              Processando 30+ frameworks em paralelo
            </span>
          </div>

          <Link
            href="/cortex-b2b"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white pl-7 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:-translate-y-1"
          >
            Conhecer o CORTEX B2B™
            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowRight size={14} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
