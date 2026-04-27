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

const LENSES = [
  {
    icon: Brain,
    number: '01',
    title: 'Lente do Fundador',
    description:
      'Como o fundador adulto aprende, decide e comunica valor. O fundador técnico sabe entregar, raramente sabe comunicar o valor do que entrega.',
    frameworks: 'Andragogia Aplicada · Challenger Sale · Dinâmica de Identidade',
  },
  {
    icon: Eye,
    number: '02',
    title: 'Lente da Neurociência',
    description:
      'Como o cérebro do comprador filtra, ancora e justifica uma decisão. Arquitetura dual de processamento: emocional primeiro, racional depois.',
    frameworks: 'Neurociência do Filtro Emocional (Damásio) · Behavioral Economics (Kahneman)',
  },
  {
    icon: Network,
    number: '03',
    title: 'Lente da Receita',
    description:
      'Onde está o dinheiro que não está sendo capturado. Projeta arquitetura de captura de receita com métricas claras.',
    frameworks: 'Value-Based Selling · SPICED · Bowtie Model · Science of Scaling',
  },
  {
    icon: Database,
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
    frameworks: 'Founder-Led Growth · Demand Creation · Flywheel Revenue Engine · Nearbound',
  },
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
                Tecnologia Proprietária
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
              Cinco lentes simultâneas. Um motor cognitivo.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/55 max-w-3xl mx-auto leading-relaxed"
            >
              O motor cognitivo proprietário que opera dentro de cada projeto da Synapse. Não é
              template, não é Assessment. É um agente de inteligência que processa cada decisão sob
              cinco lentes simultâneas, cruzando duas décadas de repertório com a inteligência
              acumulada de todos os projetos anteriores.
            </motion.p>
          </motion.div>

          {/* 5 Lens cards (compact preview) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-12"
          >
            {LENSES.map((lens, i) => (
              <LensCard
                key={lens.number}
                icon={lens.icon}
                number={lens.number}
                title={lens.title.replace('Lente d', 'L. d').replace('Lente da', 'L. da').replace('Lente do', 'L. do')}
                frameworks={lens.frameworks.split('·').slice(0, 2).join('·')}
                delay={0.2 + i * 0.08}
                index={i}
                variant="compact"
              />
            ))}
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
                className="w-2 h-2 rounded-full bg-green-400"
              />
              <span className="text-xs text-white/65 tracking-wide">
                Processando 30+ frameworks em paralelo
              </span>
            </div>

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
                4 Sustentações
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
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

      {/* 5 Lenses deep dive */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.06]">
        <NeuralNetworkBackground opacity={0.2} lineCount={15} nodeCount={10} particleCount={15} />

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
                5 Lentes Simultâneas
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              Cada decisão processada
              <br />
              <span className="text-primary">por cinco perspectivas.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl"
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
        <NeuralNetworkBackground opacity={0.25} lineCount={20} nodeCount={12} particleCount={20} />

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="px-8 md:px-12 py-10 md:py-14 rounded-[2rem] border border-primary/20 bg-primary/[0.04] mb-12 backdrop-blur-sm">
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
