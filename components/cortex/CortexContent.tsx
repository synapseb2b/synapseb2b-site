'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  Layers,
  Zap,
  TrendingUp,
  Target,
  GraduationCap,
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { CortexLensesDiagram } from './CortexLensesDiagram'

interface Pillar {
  number: string
  title: string
  description: string
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Repertório construído nos maiores ecossistemas B2B do mundo',
    description:
      'Duas décadas atuando na área comercial em Google, Microsoft, Dell e TOTVS, ecossistemas onde se aprende a vender contratos de alto valor para fundadores e CFOs. Você não contrata teoria, contrata decisão validada onde errar custa caro.',
  },
  {
    number: '02',
    title: 'Frameworks especializados em geração de receita',
    description:
      'Mais de 30 metodologias integradas em neurociência, positioning, economia comportamental e engenharia de crescimento. Cada decisão carrega a metodologia certa para a sua situação, não a mesma receita para todo mundo.',
  },
  {
    number: '03',
    title: 'Inteligência que não esquece',
    description:
      'O que foi dito na Sessão 1 permanece vivo quando construímos o Ativo 6. A Sessão 5 não é apenas mais profunda, é construída sobre tudo que veio antes. Memória estratégica entre projetos.',
  },
  {
    number: '04',
    title: 'Padrões que operação interna não alcança',
    description:
      'Quem está dentro da operação não consegue ver o padrão. Quem está fora com o Cortex, enxerga. É daí que sai o insight que muda o rumo do projeto.',
  },
]

interface Lens {
  icon: typeof Brain
  number: string
  title: string
  description: string
  frameworks: string
}

const LENSES: Lens[] = [
  {
    icon: GraduationCap,
    number: '01',
    title: 'Lente do Fundador',
    description:
      'Como o fundador adulto aprende, decide e comunica valor. O fundador técnico sabe entregar, raramente sabe comunicar o valor do que entrega.',
    frameworks: 'Andragogia Aplicada · Challenger Sale · Dinâmica de Identidade',
  },
  {
    icon: Brain,
    number: '02',
    title: 'Lente da Neurociência',
    description:
      'Como o cérebro do comprador filtra, ancora e justifica uma decisão. Arquitetura dual de processamento: emocional primeiro, racional depois.',
    frameworks:
      'Neurociência do Filtro Emocional (Damásio) · Behavioral Economics (Kahneman)',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Lente da Receita',
    description:
      'Onde está o dinheiro que não está sendo capturado. Projeta arquitetura de captura de receita com métricas claras.',
    frameworks: 'Value-Based Selling · SPICED · Bowtie Model · Science of Scaling',
  },
  {
    icon: Target,
    number: '04',
    title: 'Lente do Comprador',
    description:
      'Como o comprador processa a decisão e o que precisa sentir para agir. Na faixa do ICP, o comprador é o próprio fundador ou fundador + validador mínimo.',
    frameworks: 'JOLT Effect · Neurociência da Confiança',
  },
  {
    icon: Zap,
    number: '05',
    title: 'Lente do Crescimento',
    description:
      'Qual alavanca é proporcional ao estágio real do negócio. A alavanca certa no momento certo.',
    frameworks:
      'Founder-Led Growth · Demand Creation · Flywheel Revenue Engine · Nearbound',
  },
]

export function CortexContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <SynapseBackground particleCount={45} connectionDistance={190} opacity={0.18} speed={0.3} />

        {/* Background gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(74,144,217,0.15),transparent_70%)]" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left - Text */}
            <div className="lg:col-span-6">
              <motion.div
                variants={fadeInUp}
                className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
              >
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                  Tecnologia Proprietária
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white mb-8"
              >
                CORTEX
                <br />
                <span className="text-primary">B2B™</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
              >
                O motor cognitivo proprietário que opera dentro de cada projeto da Synapse.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-base text-white/55 leading-relaxed mb-10 max-w-xl"
              >
                Não é template, não é Assessment. É um agente de inteligência que processa cada
                decisão sob cinco lentes simultâneas, cruzando duas décadas de repertório com a
                inteligência acumulada de todos os projetos anteriores.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Link
                  href="/#diagnostico"
                  className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white pl-7 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:-translate-y-1"
                >
                  Iniciar Diagnóstico CORTEX B2B™
                  <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Right - Lenses Diagram */}
            <motion.div variants={fadeInUp} className="lg:col-span-6">
              <CortexLensesDiagram />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PILARES (4 sustentações do Cortex) */}
      <section className="relative py-24 md:py-32 bg-navy-900/20 border-t border-white/[0.06] overflow-hidden">
        <SynapseBackground particleCount={25} connectionDistance={160} opacity={0.08} speed={0.2} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-3xl mb-16 md:mb-24"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                4 Sustentações
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white"
            >
              O que o CORTEX <span className="text-primary">carrega.</span>
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
                className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
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

      {/* 5 LENTES (deep dive) */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.06]">
        <SynapseBackground particleCount={35} connectionDistance={170} opacity={0.1} speed={0.25} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-3xl mb-16 md:mb-24"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                5 Lentes Simultâneas
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              Cada decisão processada
              <br />
              <span className="text-primary">por cinco perspectivas.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/60 leading-relaxed"
            >
              Quando uma sessão acaba, o que você viu foram 49 minutos. O que aconteceu por trás foi
              o cruzamento dessas cinco lentes operando em paralelo.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-5"
          >
            {LENSES.map((lens) => {
              const Icon = lens.icon
              return (
                <motion.article
                  key={lens.number}
                  variants={fadeInUp}
                  className="group rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                    {/* Number + icon */}
                    <div className="md:col-span-3 flex items-center gap-5">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:border-primary/40 transition-colors">
                        <Icon size={26} />
                      </div>
                      <p className="text-primary/80 text-3xl md:text-4xl font-bold font-heading">
                        {lens.number}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-9">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">
                        {lens.title}
                      </h3>
                      <p className="text-white/65 text-base leading-relaxed mb-4">
                        {lens.description}
                      </p>
                      <p className="text-primary/70 text-xs md:text-sm font-medium tracking-wide">
                        {lens.frameworks}
                      </p>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Closing statement + CTA */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
        <SynapseBackground particleCount={30} connectionDistance={170} opacity={0.12} speed={0.25} />

        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="px-8 md:px-12 py-10 md:py-14 rounded-[2rem] border border-primary/20 bg-primary/[0.04] mb-12">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-white tracking-tight">
                Quem está dentro da operação não consegue ver o padrão.
                <br />
                <span className="text-primary">
                  Quem está fora, com o Cortex, enxerga.
                </span>
              </p>
            </div>

            <Link
              href="/#diagnostico"
              className="group inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-8 pr-2 py-2 rounded-full font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:-translate-y-1"
            >
              Iniciar Diagnóstico CORTEX B2B™
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
