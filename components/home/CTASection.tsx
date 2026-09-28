'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { DiagnosticForm } from './DiagnosticForm'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { LiveBadge } from '@/components/ui/LiveBadge'

export function CTASection() {
  return (
    <section id="conversa" className="relative py-24 md:py-32 bg-background-dark text-white overflow-hidden border-t border-white/[0.06]">
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
          <motion.div variants={fadeInUp} className="mb-8">
            <LiveBadge>Direto ao ponto</LiveBadge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-balance text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white max-w-6xl mb-6"
          >
            <span className="inline lg:block">Qual é o próximo movimento</span>{' '}
            <span className="inline lg:block bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">de receita da sua empresa?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white/65 leading-relaxed max-w-4xl"
          >
            Na Sessão de Decodificação, conversamos sobre seu momento e avaliamos como a SYNAPSE
            pode ajudar a construir o próximo movimento de receita. São 21 minutos, sem compromisso.
          </motion.p>
        </motion.div>

        <span id="diagnostico" className="scroll-mt-32" />
        <div className="max-w-2xl mx-auto">
          <DiagnosticForm />
        </div>
      </div>
    </section>
  )
}
