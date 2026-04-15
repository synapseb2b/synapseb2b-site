'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Brain, Layers, Zap, Database } from 'lucide-react'
import { SynapseBackground } from '@/components/ui/SynapseBackground'

const features = [
  {
    icon: Brain,
    title: '20 anos de repertório',
    description: 'Conhecimento construído em Google, Microsoft, Dell e TOTVS aplicado a cada projeto.',
  },
  {
    icon: Layers,
    title: '30+ metodologias',
    description: 'Frameworks de vendas, go-to-market, growth e neurociência integrados.',
  },
  {
    icon: Zap,
    title: 'Inteligência cumulativa',
    description: 'Acumula conhecimento a cada interação. Nenhum insight se perde.',
  },
  {
    icon: Database,
    title: 'Cruzamento de padrões',
    description: 'Conecta dados que a operação do dia a dia não permite ver.',
  },
]

export function CortexSection() {
  return (
    <section id="cortex" className="relative py-24 md:py-32 bg-background-dark text-white border-t border-white/[0.06] overflow-hidden">
      <SynapseBackground particleCount={35} connectionDistance={170} opacity={0.12} speed={0.25} />
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-24">
          <motion.div
            className="w-full flex flex-col items-center text-center"
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
                {"Tecnologia Proprietária"}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-5xl"
            >
              {"Cada projeto opera com o"}
              <br className="hidden md:block" />
              <span className="text-primary">{" CORTEX B2B™."}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-base md:text-lg text-white/60 leading-relaxed max-w-3xl"
            >
              {"Nosso agente cognitivo proprietário que integra décadas de experiência com mais de 30 metodologias de referência em vendas, posicionamento e arquitetura de receita."}
            </motion.p>
          </motion.div>
        </div>

        {/* Feature cards - grid like Fast Club benefits */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.article
                key={feat.title}
                variants={fadeInUp}
                className="group relative rounded-[2rem] overflow-hidden border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 hover:border-primary/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors duration-500 mb-8">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {feat.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
