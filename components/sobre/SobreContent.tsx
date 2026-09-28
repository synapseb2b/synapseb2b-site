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
    number: '01', year: '2005+', badge: 'Experiência comercial',
    title: 'Duas décadas de atuação em negócios B2B.',
    body: <><p>Minha trajetória passa pelos ecossistemas Google, Microsoft, Dell e TOTVS, com atuação comercial, desenvolvimento de contas e relacionamento com decisores.</p><p>Esse trabalho exige compreender o negócio do cliente, avaliar o valor de uma solução e conduzir oportunidades com diferentes participantes e ciclos de decisão.</p></>,
  },
  {
    number: '02', year: 'Agosto 2023', badge: 'Google, Nova York',
    title: 'Uma comitiva de 25 executivos de TI.',
    body: <><p>Co-liderei uma comitiva de 25 executivos de TI na sede do Google em Nova York. Uma experiência de troca sobre tecnologia, decisões de investimento e transformação dos negócios.</p><p>O aprendizado continua presente na forma como analiso oportunidades e converso com quem precisa decidir o próximo passo de uma empresa.</p></>,
  },
  {
    number: '03', year: '2025', badge: 'SYNAPSE B2B',
    title: 'Experiência aplicada ao negócio do fundador.',
    body: <><p>Fundei a SYNAPSE para ajudar empresas B2B a organizar oportunidades que ainda não se transformaram em receita. O trabalho conecta ofertas, compradores, canais e prioridades comerciais.</p><p>O CORTEX B2B apoia a organização do contexto e das análises. A revisão estratégica e a condução com o cliente são minhas.</p></>,
  },
  {
    number: '04', year: 'Hoje', badge: 'Atuação direta',
    title: 'Arquitetura e acompanhamento estratégico de receita.',
    body: <><p>Atuo em projetos com escopo definido e como Advisor de Receita. Em ambos, o objetivo é tornar explícito o que merece atenção e o que precisa ser feito para avançar.</p><p>No acompanhamento recorrente, revisamos a execução, confrontamos hipóteses e ajustamos as prioridades conforme os resultados e a capacidade do negócio.</p></>,
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
              className="text-balance text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-10"
            >
              <span className="inline lg:block">Ao lado de quem decide</span>{' '}
              <span className="inline lg:block bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">o próximo passo do negócio.</span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-base md:text-lg text-white/65 leading-relaxed max-w-4xl"
            >
              <p>
                A SYNAPSE B2B ajuda fundadores a melhorar e sistematizar a arquitetura de receita
                de seus negócios, com análise, decisões e acompanhamento estratégico.
              </p>
              <p className="text-white/85 font-medium">
                Você trabalha diretamente com Júlio Figueiredo, do entendimento do desafio
                à orientação dos próximos passos.
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
                  Minha experiência comercial B2B combina desenvolvimento de contas, relacionamento
                  com decisores e leitura de oportunidades em serviços e tecnologia. Na SYNAPSE,
                  aplico esse repertório junto a fundadores que precisam organizar a geração de receita.
                </p>
                <p className="text-white/80">
                  O trabalho começa por entender o seu negócio e escolher o que precisa avançar agora.
                </p>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/juliofigueiredo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.03] hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 group"
              >
                <svg
                  className="w-4 h-4 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                  Conecte-se no LinkedIn
                </span>
              </a>
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
              className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
            >
              <span className="inline lg:block">De duas décadas em ecossistemas globais</span>{' '}
              <span className="inline lg:block bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">à atuação junto ao fundador.</span>
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
                Seu próximo movimento comercial precisa de{' '}
                <span className="text-primary">prioridade, responsável e acompanhamento.</span>
              </p>
              <p className="text-lg md:text-xl text-white/70 leading-snug font-medium">
                É assim que trabalhamos juntos: entendendo o negócio, escolhendo as ações e
                revisando o que elas produzem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-balance text-3xl md:text-5xl text-white font-bold mb-6">
            <span className="inline lg:block">Vamos olhar para</span>{' '}
            <span className="inline lg:block text-primary">a sua receita?</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">Uma conversa de 21 minutos, de fundador para fundador, para entender seu momento e avaliar como podemos trabalhar juntos.</p>
          <Link href="/contato" className="inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary-hover px-7 py-4 text-white font-bold">Fazer a receita avançar<ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
