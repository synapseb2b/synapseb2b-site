'use client'

import { motion } from 'framer-motion'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { BIG_NUMBERS } from '@/lib/constants'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { CasesCarousel } from './CasesCarousel'

function CounterCard({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number
  prefix?: string
  suffix: string
  label: string
}) {
  const { count, ref } = useAnimatedCounter(value, 2200)

  return (
    <motion.div ref={ref} variants={fadeInUp} className="text-center py-10 md:py-14">
      <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none">
        {prefix}{count}{suffix}
      </p>
      <p className="text-white/60 text-sm mt-3 tracking-wide font-light">
        {label}
      </p>
    </motion.div>
  )
}

export function SocialProofSection() {
  return (
    <section
      id="resultados"
      className="relative py-24 md:py-32 bg-navy-900/30 border-t border-white/[0.06] overflow-hidden"
    >
      <SynapseBackground particleCount={25} connectionDistance={170} opacity={0.09} speed={0.2} />
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Resultados Reais
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold leading-tight text-white max-w-4xl tracking-tight"
          >
            Cases que <span className="text-primary">falam por si.</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            Mr. Job Hub &mdash; Resultado real de um projeto de Engenharia de Receita.
          </motion.p>
        </motion.div>

        {/* Numbers Grid - Mr Job hero case */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {BIG_NUMBERS.map((item, i) => (
            <div
              key={item.label}
              className={`${i < BIG_NUMBERS.length - 1 ? 'lg:border-r border-white/[0.06]' : ''} ${i < 2 ? 'border-b lg:border-b-0 border-white/[0.06]' : ''}`}
            >
              <CounterCard
                value={item.value}
                prefix={'prefix' in item ? item.prefix : undefined}
                suffix={item.suffix}
                label={item.label}
              />
            </div>
          ))}
        </motion.div>

        {/* Carrossel de cases adicionais (JB, Giornata, Marcato) */}
        <CasesCarousel />
      </div>
    </section>
  )
}
