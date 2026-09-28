'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  Eye,
  Network,
  Database,
  Zap,
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { NeuralNetworkBackground } from './NeuralNetworkBackground'
import { LensCard } from './LensCard'

interface Pillar {
  number: string
  title: string
  description: string
}

const PILLARS: Pillar[] = [
  { number: '01', title: 'Contexto do seu negócio', description: 'Organização das informações compartilhadas pelo cliente: ofertas, compradores, canais, indicadores e desafios. A análise parte da realidade da empresa.' },
  { number: '02', title: 'Referências para a análise', description: 'Repertório de negócios B2B e métodos de estratégia comercial apoiam a comparação de caminhos e a formulação de hipóteses.' },
  { number: '03', title: 'Continuidade no acompanhamento', description: 'O histórico de hipóteses, decisões e aprendizados mantém o contexto do trabalho. Novas informações apoiam a revisão do que foi colocado em prática e a preparação do próximo movimento.' },
  { number: '04', title: 'Revisão e responsabilidade', description: 'A inteligência artificial apoia a preparação das análises. Júlio confronta as recomendações com o contexto do negócio e define as prioridades com o fundador.' },
]

const LENSES = [
  { icon: Brain, number: '01', title: 'Lente do Fundador', description: 'Quais são as prioridades, os limites e a capacidade de execução de quem conduz o negócio?', frameworks: 'Prioridades · Recursos · Responsabilidades' },
  { icon: Eye, number: '02', title: 'Lente da Decisão', description: 'O que ajuda o comprador a decidir e quais dúvidas ou barreiras estão adiando a contratação?', frameworks: 'Critérios de compra · Risco percebido · Confiança' },
  { icon: Network, number: '03', title: 'Lente da Receita', description: 'Como as ofertas, os canais e a carteira atual se conectam às oportunidades de gerar receita?', frameworks: 'Ofertas · Canais · Expansão na base' },
  { icon: Database, number: '04', title: 'Lente do Comprador', description: 'Quem tem o problema que a empresa resolve, quem participa da compra e qual valor precisa perceber?', frameworks: 'Cliente prioritário · Necessidades · Valor econômico' },
  { icon: Zap, number: '05', title: 'Lente do Crescimento', description: 'Qual próximo movimento faz sentido diante do estágio, das evidências e dos recursos do negócio?', frameworks: 'Novas oportunidades · Parcerias · Capacidade de execução' },
]

export function CortexContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-background-dark">
        {/* Radial glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-1/2 h-1/2 opacity-40"
            style={{
              background:
                'radial-gradient(circle at 70% 30%, rgba(74,144,217,0.2) 0%, rgba(15,23,42,0) 60%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-40"
            style={{
              background:
                'radial-gradient(circle at 30% 70%, rgba(37,99,235,0.2) 0%, rgba(15,23,42,0) 60%)',
            }}
          />
        </div>

        <NeuralNetworkBackground opacity={0.45} />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center text-center mb-16 md:mb-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-[10px] md:text-xs text-primary/90 font-bold tracking-widest uppercase">
                Sistema interno de apoio estratégico
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.02] text-white mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
                CORTEX
              </span>{' '}
              <span className="text-white">B2B™</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/75 max-w-4xl mx-auto leading-snug font-medium mb-6"
            >
              Contexto, análise e continuidade para decidir melhor.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/55 max-w-3xl mx-auto leading-relaxed"
            >
              O CORTEX B2B é o sistema interno que apoia a arquitetura e o acompanhamento
              de receita da SYNAPSE. Organiza contexto, hipóteses, decisões e aprendizados,
              cruzando novas informações para preparar análises. As recomendações passam por
              revisão estratégica antes das decisões com a liderança.
            </motion.p>
          </motion.div>

          {/* 5 Lens pills - preview elegante sem repetir o detalhamento abaixo */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12"
          >
            {LENSES.map((lens, i) => {
              const Icon = lens.icon
              const shortTitle = lens.title.replace(/^Lente d[oa] /, '')
              return (
                <motion.div
                  key={lens.number}
                  variants={fadeInUp}
                  custom={i}
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-primary/20 bg-primary/[0.05] backdrop-blur-sm hover:border-primary/50 hover:bg-primary/[0.1] transition-all duration-300"
                >
                  <span className="text-primary/70 text-[10px] font-bold tracking-widest font-heading">
                    {lens.number}
                  </span>
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-white text-sm font-semibold tracking-tight">
                    {shortTitle}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Live indicator + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-navy-900/50 border border-primary/20 backdrop-blur-sm">
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              <span className="text-xs text-white/65 tracking-wide">
                IA como apoio. SYNAPSE na condução estratégica.
              </span>
            </div>

            <Link
              href="/contato"
              className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white pl-7 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:-translate-y-1"
            >
              Fazer a receita avançar
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PILARES (4 sustentações) */}
      <section className="relative py-24 md:py-32 bg-navy-900/20 border-t border-white/[0.06] overflow-hidden">
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mb-16 md:mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                Como apoia o trabalho
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
            >
              <span className="inline lg:block">O que sustenta</span>{' '}
              <span className="inline lg:block text-primary">a análise.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {PILLARS.map((pillar) => (
              <motion.article
                key={pillar.number}
                variants={fadeInUp}
                className="card-shine rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(74,144,217,0.12)] transition-all duration-300"
              >
                <p className="text-primary/80 text-3xl font-bold font-heading mb-4">
                  {pillar.number}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/65 text-base leading-relaxed">
                  {pillar.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5 Lenses deep dive */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.06]">
        <NeuralNetworkBackground opacity={0.2} curveCount={12} nodeCount={10} />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mb-16 md:mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                Cinco perspectivas de análise
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              <span className="inline lg:block">O seu negócio visto</span>{' '}
              <span className="inline lg:block text-primary">por cinco perspectivas.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl"
            >
              Estas perspectivas ajudam a examinar o mesmo desafio por ângulos diferentes
              antes de escolher as prioridades e orientar a execução.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 gap-5 lg:gap-6"
          >
            {LENSES.map((lens, i) => (
              <LensCard
                key={`detailed-${lens.number}`}
                icon={lens.icon}
                number={lens.number}
                title={lens.title}
                frameworks={lens.frameworks}
                description={lens.description}
                delay={i * 0.1}
                index={i}
                variant="detailed"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing statement + CTA */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
        <NeuralNetworkBackground opacity={0.25} curveCount={15} nodeCount={12} />

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="px-8 md:px-12 py-10 md:py-14 rounded-[2rem] border border-primary/20 bg-primary/[0.04] mb-12 backdrop-blur-sm">
              <p className="text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-snug text-white tracking-tight">
                A tecnologia amplia a capacidade de análise.
                <br />
                <span className="text-primary">
                  A direção é construída com você.
                </span>
              </p>
            </div>

            <Link
              href="/contato"
              className="group inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-8 pr-2 py-2 rounded-full font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:-translate-y-1"
            >
              Fazer a receita avançar
              <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
