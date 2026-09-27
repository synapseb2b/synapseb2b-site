'use client'

import { motion } from 'framer-motion'
import { Languages, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { LiveBadge } from '@/components/ui/LiveBadge'
import { getWhatsAppUrl } from '@/lib/constants'

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
    title: 'Seu valor vira desconto.',
    description:
      'A empresa entrega bem, mas o comprador compara apenas preço. Trabalhamos a oferta, os clientes prioritários e os critérios que sustentam a decisão de compra.',
  },
  {
    number: '02',
    icon: TrendingUp,
    title: 'Tudo depende de você.',
    description:
      'As vendas dependem dos seus contatos e da sua presença em cada negociação. Organizamos canais, responsabilidades e uma rotina comercial que o time consiga seguir.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Oportunidades ficam paradas.',
    description:
      'Novos serviços, parcerias e possibilidades na base de clientes competem pela sua atenção. Ajudamos a escolher o que vale testar e a definir a próxima ação para avançar.',
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
            <LiveBadge>Seu momento</LiveBadge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-5xl"
          >
            O que está limitando{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
              sua receita hoje?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-3xl"
          >
            Para empresas B2B que já têm clientes e precisam organizar o próximo passo comercial.
            Você reconhece alguma destas situações?
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
                className="card-shine group relative rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 hover:border-primary/30 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(74,144,217,0.12)] transition-all duration-500"
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
                <a href={getWhatsAppUrl(`Olá, Júlio. Identifiquei este desafio no site da SYNAPSE: ${pillar.title} Quero conversar sobre minha empresa.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:text-accent-300">Esse é meu momento<ArrowRight size={14} /></a>

              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
