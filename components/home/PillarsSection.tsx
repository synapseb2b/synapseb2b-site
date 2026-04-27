'use client'

import { motion } from 'framer-motion'
import { Languages, TrendingUp, ShieldCheck } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { LiveBadge } from '@/components/ui/LiveBadge'

interface Pillar {
  number: string
  icon: typeof Languages
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    number: '01',
    icon: Languages,
    title: 'Tradução de Valor',
    description:
      'A distância entre o que sua empresa entrega e o que o mercado entende custa receita todos os meses. Fechamos essa distância. O que antes era interpretado como mais uma opção passa a ser reconhecido pelo que de fato é, e o preço acompanha.',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Design de Receita',
    description:
      'Receita gerada só por indicação tem teto. Quando a empresa atinge esse teto, a reação comum é culpar o comercial. O diagnóstico costuma ser outro: falta arquitetura. Quando o sistema existe, a receita para de depender de quem está de plantão e passa a depender de como o funil foi desenhado.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Arsenal Estratégico',
    description:
      'Conhecimento distribuído entre cabeça do fundador, experiência do time e relações com clientes precisa virar sistema consultável. Mapa de Receita, deck, site e plano de comunicação formam o arsenal onde esse conhecimento se formaliza. O que dependia de quem estivesse presente passa a estar disponível para qualquer pessoa da empresa.',
  },
]

export function PillarsSection() {
  return (
    <section
      id="pilares"
      className="relative py-24 md:py-32 bg-background-dark text-white border-t border-white/[0.06] overflow-hidden"
    >
      <SynapseBackground particleCount={30} connectionDistance={160} opacity={0.1} speed={0.2} />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <LiveBadge>Os Três Pilares</LiveBadge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-5xl"
          >
            Três Pilares.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
              Um Método.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-3xl"
          >
            Competência existe no fundador, no time e no negócio. Arquitetura é o que transforma
            competência em receita.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.article
                key={pillar.number}
                variants={fadeInUp}
                className="group relative rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 hover:border-primary/30 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-500"
              >
                {/* Number top */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-primary/70 text-5xl md:text-6xl font-bold font-heading leading-none tracking-tighter">
                    {pillar.number}
                  </span>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:border-primary/40 transition-colors">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-[1.6rem] font-bold text-white mb-5 tracking-tight leading-tight">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-[0.95rem] md:text-base leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
