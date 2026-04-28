'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { LiveBadge } from '@/components/ui/LiveBadge'
import { services } from '@/lib/services-data'
import { cn } from '@/lib/utils'
import { getWhatsAppUrl } from '@/lib/constants'

const SERVICE_WHATSAPP_MESSAGES: Record<string, string> = {
  diagnostico:
    'Olá, Júlio. Tenho interesse no Diagnóstico CORTEX B2B™. Quero entender onde está o gap entre o que minha empresa entrega e o que o mercado percebe.',
  projeto:
    'Olá, Júlio. Tenho interesse no Projeto Estratégico de Engenharia de Receita. Quero construir o sistema comercial da minha empresa.',
  advisor:
    'Olá, Júlio. Tenho interesse no Advisor Estratégico. Já tenho uma operação rodando e quero otimizar o crescimento.',
}

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
              <LiveBadge>O que entregamos</LiveBadge>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-6xl"
            >
              Três formas de começar.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
                Escolha a sua.
              </span>
            </motion.h2>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={fadeInUp}
              className={cn(
                'card-shine relative rounded-[2rem] p-8 md:p-10 flex flex-col border transition-all duration-300',
                service.featured
                  ? 'bg-primary/[0.08] border-primary/30 scale-[1.02] shadow-2xl shadow-primary/10 z-10 mt-4'
                  : 'bg-white/[0.02] border-white/[0.08] hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(74,144,217,0.12)]'
              )}
            >
              {/* Badge — floating above card top border */}
              {service.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-lg shadow-primary/30 whitespace-nowrap">
                    Recomendado
                  </span>
                </div>
              )}

              <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
                {service.subtitle}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight tracking-tight">
                {service.name}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <div className={cn(
                      'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                      service.featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                    )}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-white/60 text-sm leading-relaxed flex-1">
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
                <p className="text-white/25 text-xs italic mb-6">{service.note}</p>
              )}

              {/* CTA */}
              <button
                onClick={() => window.open(getWhatsAppUrl(SERVICE_WHATSAPP_MESSAGES[service.id]), '_blank')}
                className={cn(
                  'w-full py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] cursor-pointer',
                  service.featured
                    ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/30'
                    : 'bg-transparent border border-white/[0.1] text-white hover:border-primary/50 hover:text-primary'
                )}
              >
                {service.cta}
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
