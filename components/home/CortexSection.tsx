'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'

export function CortexSection() {
  return (
    <section
      id="cortex"
      className="relative py-24 md:py-32 bg-background-dark text-white border-t border-white/[0.06] overflow-hidden"
    >
      <SynapseBackground particleCount={35} connectionDistance={170} opacity={0.12} speed={0.25} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          className="flex flex-col items-center text-center"
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
              Tecnologia Proprietária
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-5xl"
          >
            Cada decisão opera com o
            <br className="hidden md:block" />
            <span className="text-primary"> CORTEX B2B™.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-10 text-base md:text-lg text-white/70 leading-relaxed max-w-3xl"
          >
            O CORTEX B2B™ é o motor cognitivo proprietário que sustenta cada projeto da Synapse.
            Processa cada sessão sob cinco lentes simultâneas: fundador, neurociência, receita,
            comprador e crescimento. Carrega duas décadas de repertório acumulado em ecossistemas
            como Google, Microsoft, Dell e TOTVS, integra mais de 30 frameworks especializados em
            geração de receita e incorpora a inteligência estratégica de todos os projetos
            anteriores.
          </motion.p>

          {/* Linha de fechamento — destaque */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 md:mt-16 max-w-3xl"
          >
            <div className="relative px-8 md:px-12 py-8 md:py-10 rounded-[2rem] border border-primary/20 bg-primary/[0.03]">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug text-white tracking-tight">
                Quem está dentro da operação não consegue ver o padrão.
                <br />
                <span className="text-primary">Quem está fora, com o Cortex, enxerga.</span>
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="mt-12">
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
        </motion.div>
      </div>
    </section>
  )
}
