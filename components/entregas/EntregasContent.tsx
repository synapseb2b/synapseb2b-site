'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { LiveBadge } from '@/components/ui/LiveBadge'
import { services } from '@/lib/services-data'
import { SESSION_WHATSAPP_URL } from '@/lib/constants'

const STEPS = [
  { title: 'Entender o negócio', description: 'Olhar para clientes, ofertas, canais e números disponíveis. Nomear o problema que merece atenção agora.' },
  { title: 'Escolher as prioridades', description: 'Formular hipóteses e escolher a mais relevante para testar, considerando os indicadores, o retorno possível e a capacidade de execução.' },
  { title: 'Construir o próximo movimento', description: 'Estruturar a ação com a liderança, combinar responsabilidades e ajudar a colocá-la em prática dentro do escopo contratado.' },
  { title: 'Acompanhar e aprender', description: 'No Advisor, cruzar o que foi feito com os indicadores e a resposta do mercado. Revisar as hipóteses e decidir o próximo movimento.' },
]

export function EntregasContent() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <SynapseBackground particleCount={30} connectionDistance={170} opacity={0.1} speed={0.2} />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-6xl">
            <motion.div variants={fadeInUp} className="mb-8"><LiveBadge>Como trabalhamos</LiveBadge></motion.div>
            <motion.h1 variants={fadeInUp} className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-8">
              <span className="inline lg:block">Clareza para decidir.</span>{' '}
              <span className="inline lg:block text-primary">Direção para avançar.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/70 leading-relaxed max-w-4xl">
              Um projeto para organizar a arquitetura de receita ou um Advisor para acompanhar as
              decisões e a execução. A escolha parte do momento da sua empresa.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <div className="space-y-12 md:space-y-20 pb-20">
        {services.map((service, index) => (
          <section id={service.id} key={service.id} className="relative scroll-mt-32 border-t border-white/[0.06]">
            {index === 0 && <><span id="projeto" className="absolute top-0 scroll-mt-32" /><span id="diagnostico" className="absolute top-0 scroll-mt-32" /></>}
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-5">
                  <motion.p variants={fadeInUp} className="text-primary text-sm font-semibold mb-5">0{index + 1} · {service.subtitle}</motion.p>
                  <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-white mb-6">{service.name}</motion.h2>
                  <motion.p variants={fadeInUp} className="text-white/70 text-base leading-relaxed mb-6">{service.description}</motion.p>
                  <motion.p variants={fadeInUp} className="text-accent-300 text-lg font-medium leading-relaxed mb-8">{service.outcome}</motion.p>
                  <motion.div variants={fadeInUp}>
                    <a href={service.ctaHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-4 rounded-full font-bold text-sm bg-primary hover:bg-primary-hover text-white transition-colors">
                      {service.cta}<ArrowRight size={16} className="shrink-0" />
                    </a>
                  </motion.div>
                </div>
                <motion.div variants={fadeInUp} className="lg:col-span-7 rounded-[2rem] p-8 md:p-10 border border-primary/20 bg-white/[0.02]">
                  <p className="text-primary text-sm font-bold uppercase tracking-wider mb-6">O que trabalhamos juntos</p>
                  <ul className="space-y-5">
                    {service.features.map((feature) => <li key={feature.text} className="flex items-start gap-3 text-white/80 text-base leading-relaxed"><Check size={20} className="text-primary shrink-0 mt-1" />{feature.text}</li>)}
                  </ul>
                  <p className="mt-8 pt-6 border-t border-white/[0.08] text-sm text-white/60 leading-relaxed">{service.note}</p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
      <section className="py-20 md:py-28 border-t border-white/[0.06] bg-navy-900/20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <h2 className="text-balance text-3xl md:text-5xl font-bold text-white tracking-tight mb-10">
            <span className="inline lg:block">Da análise à</span>{' '}
            <span className="inline lg:block text-primary">ação acompanhada.</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {STEPS.map((step, index) => <article key={step.title} className="rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8"><p className="text-primary font-bold mb-4">0{index + 1}</p><h3 className="text-xl text-white font-bold mb-3">{step.title}</h3><p className="text-white/70 text-base leading-relaxed">{step.description}</p></article>)}
          </div>
          <p className="mt-8 text-base text-white/65 leading-relaxed max-w-4xl">A SYNAPSE participa da construção, da ativação e do acompanhamento dos movimentos de receita, conforme o escopo contratado. As responsabilidades são combinadas em cada ação; a gestão da equipe permanece com o cliente. Entregas digitais têm contratação própria e podem ser realizadas pela Reposiciona ou por parceiros escolhidos pelo cliente.</p>
        </div>
      </section>
      <section className="relative py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-balance text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            <span className="inline lg:block">Por onde começar</span>{' '}
            <span className="inline lg:block text-primary">no seu negócio?</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">Conte seu momento em uma conversa de 21 minutos com Júlio. Juntos, avaliamos o desafio e o formato de trabalho adequado.</p>
          <a href={SESSION_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold bg-primary hover:bg-primary-hover text-white transition-colors">Fazer a receita avançar<ArrowRight size={18} /></a>
          <p className="mt-4 text-sm text-white/55">Sem compromisso. De fundador para fundador.</p>
        </div>
      </section>
    </>
  )
}
