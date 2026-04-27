'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { LiveBadge } from '@/components/ui/LiveBadge'
import { NeuralNetworkBackground } from '@/components/cortex/NeuralNetworkBackground'

interface Chapter {
  number: string
  year: string
  badge: string
  title: string
  body: React.ReactNode
}

const CHAPTERS: Chapter[] = [
  {
    number: '01',
    year: '2005-2023',
    badge: 'Linha de frente',
    title: 'Duas décadas no centro do B2B mais exigente do mundo.',
    body: (
      <>
        <p>
          Microsoft, Dell, TOTVS e Google. Não como vendedor. Como o profissional que sentava
          do lado do cliente e descobria junto o que ele ainda não enxergava. Cada ecossistema
          forçou uma disciplina específica.
        </p>
        <p>
          Em Google, Challenger Sale e pensamento sistêmico aplicado a contas estratégicas. Em
          Microsoft, arquitetura enterprise e escala. Em Dell, leitura de decisão financeira
          corporativa em ciclos longos. Em TOTVS, a proximidade com a realidade da empresa
          brasileira de médio porte, onde o fundador ainda decide sozinho.
        </p>
      </>
    ),
  },
  {
    number: '02',
    year: 'Agosto 2023',
    badge: 'O marco em NY',
    title: 'Sede do Google, Nova York. Co-liderando 25 executivos C-Level do Brasil.',
    body: (
      <>
        <p>
          Estar naquele epicentro global me trouxe uma clareza irresistível: redirecionar meus
          talentos e criar algo realmente novo para o B2B.
        </p>
        <p className="text-white/80 font-medium">
          Mas ideia sem estrutura é só inspiração. Faltava o método.
        </p>
      </>
    ),
  },
  {
    number: '03',
    year: '2023-2025',
    badge: 'Preparação silenciosa',
    title: 'Dois anos transformando experiência de trincheira em catálogo cognitivo.',
    body: (
      <>
        <p>
          Mergulhei na ciência do comportamento e conversão. Integrei neurociência e andragogia
          a dezenas das principais metodologias globais — economia comportamental, design de
          categoria, modelos científicos de escala e previsibilidade de receita.
        </p>
        <p>
          Não para repetir o que já existia. Para construir algo novo. Esse arsenal viraria o
          motor cognitivo da empresa que eu ainda não tinha fundado.
        </p>
      </>
    ),
  },
  {
    number: '04',
    year: 'Julho 2025',
    badge: 'Synapse B2B',
    title: 'A arquitetura sai do papel. Engenharia de Receita™ e CORTEX B2B™.',
    body: (
      <>
        <p>
          A Synapse B2B foi fundada para operar a Engenharia de Receita através do CORTEX
          B2B™, nosso agente cognitivo proprietário. O objetivo é cirúrgico:{' '}
          <span className="text-white font-medium">
            traduzir competência técnica em narrativa que o mercado entende, confia e compra.
          </span>
        </p>
        <p>
          Cada projeto opera com cinco lentes simultâneas: Fundador, Neurociência, Receita,
          Comprador e Crescimento. A inteligência cumulativa não esquece — o que aparece na
          Sessão 1 sustenta a Sessão 5.
        </p>
      </>
    ),
  },
  {
    number: '05',
    year: 'Abril 2026',
    badge: 'Marcato',
    title: 'A extensão do método: autoridade visualmente incontestável.',
    body: (
      <>
        <p>
          Narrativas estratégicas e autoridades de alto valor não sobrevivem em palcos
          amadores. Por isso fundei a Marcato em sociedade com Fred Carvalho, especialista com
          30 anos de ofício no audiovisual.
        </p>
        <p>
          Operamos um hub de produção com ênfase: estúdio multicâmera próprio + Engenharia de
          Posicionamento. Excelência técnica encontra visão de negócios. Qualidade técnica
          vira autoridade de mercado visualmente incontestável.
        </p>
      </>
    ),
  },
]

export function SobreContent() {
  return (
    <>
      {/* HERO - Manifesto */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <NeuralNetworkBackground opacity={0.4} />

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-1/2 h-1/2 opacity-40"
            style={{
              background:
                'radial-gradient(circle at 70% 30%, rgba(74,144,217,0.18) 0%, rgba(15,23,42,0) 60%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <LiveBadge>Sobre</LiveBadge>
            </motion.div>

            <motion.h1
              variants={fadeInLeft}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-10"
            >
              Entre o que sua empresa faz e o que o mercado enxerga,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
                existe um abismo.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-base md:text-lg text-white/65 leading-relaxed max-w-4xl"
            >
              <p>
                Esse abismo destrói valor e receita todos os dias. A maior ameaça a negócios B2B
                de alta complexidade não é a concorrência técnica, mas a incapacidade de
                traduzir a própria excelência em percepção inquestionável.
              </p>
              <p className="text-white/85 font-medium">
                Fechar essa conta exige muito mais do que esforço heroico. Exige uma engenharia
                cognitiva profunda.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PHOTO + CONTEXT */}
      <section className="relative py-24 md:py-32 bg-navy-900/20 border-t border-white/[0.06] overflow-hidden">
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
          >
            {/* Photo */}
            <motion.div variants={fadeInLeft} className="lg:col-span-5 relative">
              <div className="card-shine relative rounded-[2rem] overflow-hidden border border-white/[0.08]">
                <Image
                  src="/image/julio-google-ny.jpeg"
                  alt="Júlio Figueiredo co-liderando 25 executivos C-Level do Brasil na sede do Google em Nova York, agosto de 2023"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-background-dark/70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-background-dark/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/55 text-xs tracking-wide font-medium">
                    Google NY · Agosto 2023 · 25 executivos C-Level
                  </p>
                </div>
              </div>
              {/* Glow */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/15 rounded-full blur-[80px] -z-10" />
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeInRight} className="lg:col-span-7">
              <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-5">
                Fundador
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-2">
                Júlio
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
                  Figueiredo.
                </span>
              </h2>
              <div className="space-y-5 text-base md:text-lg text-white/65 leading-relaxed">
                <p>
                  Em agosto de 2023, na sede do Google em Nova York, eu vivia um marco.
                  Co-liderar 25 executivos C-Level das maiores empresas do Brasil era a
                  coroação de duas décadas de linha de frente comercial em ecossistemas como
                  Microsoft, Dell, TOTVS e o próprio Google.
                </p>
                <p className="text-white/80">
                  Estar naquele epicentro global me trouxe uma clareza irresistível.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CHAPTERS - Timeline narrativa */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
        <SynapseBackground particleCount={25} connectionDistance={170} opacity={0.08} speed={0.2} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mb-16 md:mb-24"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <LiveBadge>Capítulos</LiveBadge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
            >
              De duas décadas em ecossistemas globais{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
                à arquitetura cognitiva da Synapse.
              </span>
            </motion.h2>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {CHAPTERS.map((chapter, i) => (
              <motion.article
                key={chapter.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="card-shine grid lg:grid-cols-12 gap-8 lg:gap-12 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-12 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(74,144,217,0.12)] transition-all duration-500"
              >
                {/* Left - meta */}
                <div className="lg:col-span-4">
                  <p className="text-primary/70 text-5xl md:text-6xl font-bold font-heading leading-none tracking-tighter mb-4">
                    {chapter.number}
                  </p>
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-3">
                    {chapter.badge}
                  </p>
                  <p className="text-white/40 text-sm font-medium">
                    {chapter.year}
                  </p>
                </div>

                {/* Right - content */}
                <div className="lg:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-6">
                    {chapter.title}
                  </h3>
                  <div className="space-y-4 text-white/65 text-base leading-relaxed">
                    {chapter.body}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO - Closing statement */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
        <NeuralNetworkBackground opacity={0.3} curveCount={10} nodeCount={8} />

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-10">
              <LiveBadge dotColor="green">Manifesto</LiveBadge>
            </div>

            <div className="card-shine px-8 md:px-12 py-12 md:py-16 rounded-[2rem] border border-primary/20 bg-primary/[0.04] backdrop-blur-sm mb-12">
              <Quote size={28} className="text-primary/50 mx-auto mb-6" />
              <p className="text-2xl md:text-3xl lg:text-[2.25rem] font-medium leading-snug text-white tracking-tight mb-8">
                A complexidade do seu conhecimento só tem valor comercial quando é{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
                  decodificada e tangibilizada
                </span>{' '}
                para o tomador de decisão.
              </p>
              <p className="text-lg md:text-xl text-white/70 leading-snug font-medium">
                Eu não empurro soluções corporativas.{' '}
                <span className="text-white">
                  Eu governo a inteligência do seu motor de receita e do seu posicionamento.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DUAL CTA - Synapse + Marcato */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <LiveBadge>Próximo passo</LiveBadge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-4xl mx-auto"
            >
              Duas alavancas.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
                Uma arquitetura.
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Synapse */}
            <motion.div
              variants={fadeInUp}
              className="card-shine group rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-12 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(74,144,217,0.12)] transition-all duration-500"
            >
              <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
                Synapse B2B
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-5">
                Quer descobrir a alavanca invisível do seu negócio B2B?
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Engenharia de Receita aplicada com o CORTEX B2B™. Posicionamento, narrativa e
                arquitetura comercial que transformam competência técnica em receita
                previsível.
              </p>
              <Link
                href="/#diagnostico"
                className="group/link inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white pl-6 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:-translate-y-0.5"
              >
                Iniciar Diagnóstico CORTEX B2B™
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover/link:rotate-45 transition-transform">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>

            {/* Marcato */}
            <motion.div
              variants={fadeInUp}
              className="card-shine group rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-12 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(74,144,217,0.12)] transition-all duration-500"
            >
              <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
                Marcato
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-5">
                A imagem da sua empresa não reflete o peso real da sua entrega?
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Hub de produção com ênfase. Estúdio multicâmera próprio em sociedade com Fred
                Carvalho (30 anos em audiovisual) + Engenharia de Posicionamento. Autoridade
                visualmente incontestável.
              </p>
              <a
                href="https://marcatob2b.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-3 bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-white/[0.3] pl-6 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Conheça a Marcato
                <span className="w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center group-hover/link:rotate-45 transition-transform">
                  <ArrowRight size={14} />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
