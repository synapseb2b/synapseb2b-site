'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { LiveBadge } from '@/components/ui/LiveBadge'
import { services } from '@/lib/services-data'
import Link from 'next/link'


export function DeliverablesSection() {
  return (
    <section id="entregas" className="relative py-24 md:py-32 bg-navy-900/20 text-white overflow-hidden border-t border-white/[0.06]">
      <SynapseBackground particleCount={25} connectionDistance={150} opacity={0.08} speed={0.2} />
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            className="w-full flex flex-col items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <LiveBadge>Como trabalhamos</LiveBadge>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-6xl"
            >
              Duas formas de avançar.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
                Um foco: sua receita.
              </span>
            </motion.h2>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={fadeInUp}
              className="card-shine relative rounded-[2rem] p-8 md:p-10 flex flex-col border border-primary/20 bg-white/[0.02] hover:border-primary/40 transition-all duration-300"
            >
              <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">
                {service.subtitle}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight tracking-tight">
                {service.name}
              </h3>

              <p className="text-white/70 text-base leading-relaxed mb-6">
                {service.description}
              </p>

              <p className="text-white font-medium text-base leading-relaxed mb-8">{service.outcome}</p>
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-primary/10 text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-white/70 text-base leading-relaxed flex-1">
                      {f.text}
                      {f.badge && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-[9px] font-bold uppercase tracking-wider align-middle">
                          {f.badge}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {service.note && (
                <p className="text-white/55 text-sm leading-relaxed mb-6">{service.note}</p>
              )}

              {/* CTA */}
              <a
                href={service.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto py-4 px-4 rounded-full text-center text-sm font-bold bg-primary hover:bg-primary-hover text-white transition-colors"
              >
                {service.cta}
              </a>
              <Link href={`/entregas#${service.id}`} className="mt-4 text-center text-sm text-primary hover:text-accent-300 underline underline-offset-4">
                Entender como funciona
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
