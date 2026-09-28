'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { LiveBadge } from '@/components/ui/LiveBadge'
import { DiagnosticForm } from '@/components/home/DiagnosticForm'

export function ContactForm() {
  return (
    <section className="relative pb-24 md:pb-32 pt-36 md:pt-44 overflow-hidden">
      <SynapseBackground particleCount={25} connectionDistance={160} opacity={0.08} speed={0.2} />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
        <motion.div className="flex flex-col items-center text-center mb-12 md:mb-16" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} className="mb-8"><LiveBadge>Primeira conversa</LiveBadge></motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white max-w-6xl mb-6">
            Vamos conversar sobre <span className="text-primary">sua receita.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-[#CCD6E0] leading-relaxed max-w-3xl">
            Uma Sessão de Decodificação de 21 minutos com Júlio Figueiredo para entender seu momento
            e avaliar como a SYNAPSE pode ajudar. Sem compromisso.
          </motion.p>
        </motion.div>
        <div className="max-w-[680px] mx-auto"><DiagnosticForm /></div>
      </div>
    </section>
  )
}
