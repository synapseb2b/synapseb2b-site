'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'

const pillars = [
  {
    number: '01',
    title: 'Tradução de Valor',
    description:
      'A distância entre o que sua empresa entrega e o que o mercado entende custa receita todos os meses. Fechamos essa distância. O que antes era interpretado como mais uma opção passa a ser reconhecido pelo que de fato é, e o preço acompanha.',
  },
  {
    number: '02',
    title: 'Design de Receita',
    description:
      'Receita gerada só por indicação tem teto. Quando a empresa atinge esse teto, a reação comum é culpar o comercial. O diagnóstico costuma ser outro: falta arquitetura. Quando o sistema existe, a receita para de depender de quem está de plantão e passa a depender de como o funil foi desenhado.',
  },
  {
    number: '03',
    title: 'Arquitetura Comercial',
    description:
      'Conhecimento distribuído entre cabeça do fundador, experiência do time e relações com clientes precisa virar sistema consultável. Mapa de Receita, deck, site e plano de comunicação formam a camada onde esse conhecimento se formaliza. O que dependia de quem estivesse presente passa a estar disponível para qualquer pessoa da empresa.',
  },
]

function PillarItem({ step, index, activeStep, setActiveStep }: {
  step: typeof pillars[0]
  index: number
  activeStep: number | null
  setActiveStep: (i: number) => void
}) {
  const ref = useRef<HTMLDivElement>(null!)
  const isInView = useInView(ref, { margin: '-40% 0px -40% 0px', amount: 0.5 })

  useEffect(() => {
    if (isInView) setActiveStep(index)
  }, [isInView, index, setActiveStep])

  const isActive = activeStep === index

  return (
    <div ref={ref} className="group">
      <div className="w-full py-10 md:py-14 text-left transition-opacity duration-500">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline">
          {/* Label — only on first item */}
          <div className="md:col-span-3">
            {index === 0 && (
              <span className={`text-xl md:text-2xl font-medium block transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/15'}`}>
                Pilar
              </span>
            )}
          </div>

          {/* Number */}
          <div className="md:col-span-1">
            <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-white/15'}`}>
              ({step.number})
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-8">
            <h3 className={`text-3xl md:text-5xl font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/15'}`}>
              {step.title}
            </h3>

            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-white/[0.06]" />
    </div>
  )
}

export function PillarsSection() {
  const [activeStep, setActiveStep] = useState<number | null>(0)

  return (
    <section id="pilares" className="relative py-24 md:py-32 bg-background-dark text-white border-t border-white/[0.06] overflow-hidden">
      <SynapseBackground particleCount={30} connectionDistance={160} opacity={0.1} speed={0.2} />
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              {"Os Três Pilares"}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold leading-tight text-white max-w-4xl tracking-tight"
          >
            Competência existe no fundador, no time e no negócio.
            <br className="hidden md:block" />
            <span className="text-primary">
              Arquitetura é o que transforma competência em receita.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            Um método. Três camadas. Seis ativos em operação.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col pb-32">
          <div className="w-full h-px bg-white/[0.06]" />
          {pillars.map((step, index) => (
            <PillarItem
              key={index}
              step={step}
              index={index}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
