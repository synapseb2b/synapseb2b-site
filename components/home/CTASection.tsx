'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { DiagnosticForm } from './DiagnosticForm'
import { SynapseBackground } from '@/components/ui/SynapseBackground'

export function CTASection() {
  return (
    <section id="diagnostico" className="relative py-24 md:py-32 bg-background-dark text-white overflow-hidden border-t border-white/[0.06]">
      <SynapseBackground particleCount={30} connectionDistance={160} opacity={0.1} speed={0.2} />
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 md:mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 px-5 py-1.5 border border-primary/50 rounded-full text-primary inline-block"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Direto ao ponto
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white max-w-4xl mb-6"
          >
            {"5 perguntas sobre o seu neg\u00f3cio. "}
            <span className="text-primary">{"Uma an\u00e1lise no mesmo dia."}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl italic"
          >
            {"Direto ao ponto. Clareza que gera receita."}
          </motion.p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <DiagnosticForm />
        </div>
      </div>
    </section>
  )
}
