'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { GradientOrbs } from '@/components/ui/GradientOrbs'

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] w-full flex flex-col justify-center overflow-hidden bg-background-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(74,144,217,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(74,144,217,0.05),transparent)]" />
      </div>

      <GradientOrbs count={3} opacity={0.05} />
      <SynapseBackground particleCount={50} connectionDistance={200} opacity={0.18} speed={0.3} />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 h-full flex flex-col justify-center pt-20">
        <motion.div
          className="w-full flex flex-col items-start"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 md:mb-8 inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-md border border-white/[0.08] px-4 py-2 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-white text-xs md:text-sm font-medium tracking-wide">
              Engenharia de Receita&trade;
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeInLeft}
            className="hero-headline max-w-6xl mb-6 md:mb-8"
          >
            {"Sua competência"}
            <br className="md:hidden" />
            {" já é inquestionável."}
            <br className="hidden lg:block" />
            <span className="text-primary">
              {" Tornamos ela"}
              <br className="md:hidden" />
              {" inevitável."}
            </span>
          </motion.h1>

          {/* H2 */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg lg:text-xl text-[#CCD6E0] leading-relaxed mb-10 md:mb-16 max-w-xl md:max-w-3xl lg:max-w-4xl font-normal"
          >
            {"Entre o que sua empresa faz de verdade e o que o mercado consegue enxergar, existem oportunidades que ninguém organizou e conexões que ninguém fez ainda. "}
            <span className="text-white font-medium">
              {"Nós encontramos as duas coisas."}
            </span>
          </motion.p>

          {/* Bottom row */}
          <motion.div
            variants={fadeInUp}
            className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10"
          >
            {/* CTAs (primario + secundario) + micro-copy */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#diagnostico"
                  className="group relative inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-6 pr-2 py-2 md:pl-8 md:pr-2 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:shadow-primary/50 hover:-translate-y-1"
                >
                  <span className="text-sm md:text-base font-bold tracking-tight">
                    {"Iniciar Diagnóstico CORTEX B2B™"}
                  </span>
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5px]" />
                  </span>
                </a>
                <a
                  href="#resultados"
                  className="group inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium px-4 py-3 rounded-full border border-white/[0.12] hover:border-white/[0.3] transition-all duration-300"
                >
                  Ver resultados reais
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <p className="text-[11px] text-white tracking-wide pl-1">
                Direto ao Ponto. Clareza que gera receita.
              </p>
            </div>

            {/* Right side text */}
            <div className="hidden md:block max-w-[220px] lg:max-w-xs text-right">
              <p className="text-xs lg:text-sm text-[#F8F9FA] leading-relaxed font-light tracking-wide">
                {"Experiência acumulada em ecossistemas Google, Microsoft, Dell e TOTVS."}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
