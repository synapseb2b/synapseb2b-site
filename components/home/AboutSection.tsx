'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'

const milestones = [
  { year: '2005+', text: 'Google, Microsoft, Dell, TOTVS' },
  { year: '2023', text: '25 executivos, sede do Google em NY' },
  { year: '2025', text: 'Synapse B2B, Engenharia de Receita™' },
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-navy-900/20 text-white overflow-hidden border-t border-white/[0.06]">
      <SynapseBackground particleCount={20} connectionDistance={140} opacity={0.07} speed={0.15} />
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              {"Quem está por trás"}
            </span>
          </motion.div>

          {/* Layout Grid - sticky text left, scrolling content right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left - Sticky header */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
              >
                {"Júlio"}
                <br />
                <span className="text-primary">Figueiredo.</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-white/50 text-sm font-medium mb-8"
              >
                Fundador da Synapse B2B
              </motion.p>

              {/* Photo — Google NY event */}
              <motion.div
                variants={fadeInUp}
                className="relative max-w-[360px] rounded-[2rem] overflow-hidden border border-white/[0.06]"
              >
                <Image
                  src="/image/julio-google-ny.jpeg"
                  alt={"Júlio Figueiredo liderando executivos na sede do Google em Nova York"}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
                {/* Gradient overlays to fade background logos */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-background-dark/70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-background-dark/60 via-transparent to-transparent pointer-events-none" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-white/50 text-[11px] tracking-wide">
                    {"Google NY, 2023 — 25 executivos de TI"}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right - Scrolling content */}
            <div className="lg:col-span-7">
              <motion.div variants={fadeInUp}>
                <div className="space-y-8 text-white/50 text-base md:text-lg leading-relaxed">
                  <p>
                    {"Duas décadas em ecossistemas como Google, Microsoft, Dell e TOTVS. Não como vendedor. Como o profissional que sentava do lado do cliente e descobria junto o que ele ainda não enxergava."}
                  </p>
                  <p>
                    {"Consultividade, criatividade e o olhar que conecta pontos que ninguém mais conectou."}
                  </p>
                  <p>
                    {"Em agosto de 2023, co-liderando 25 executivos de TI das maiores empresas do Brasil na sede do Google em Nova York, ficou claro que esses talentos tinham um destino maior. Mas ideia sem estrutura é só inspiração."}
                  </p>
                  <p className="text-white/70">
                    {"Em 2025, a Synapse B2B saiu do papel. Com ela, a "}
                    <span className="text-primary font-semibold">{"Engenharia de Receita™"}</span>
                    {" e o "}
                    <span className="text-primary font-semibold">{"CORTEX B2B™"}</span>
                    {"."}
                  </p>
                </div>

                {/* Timeline */}
                <div className="mt-16 pt-10 border-t border-white/[0.06]">
                  {milestones.map((m) => (
                    <div key={m.year} className="flex items-start gap-8 py-5 border-b border-white/[0.04] last:border-0">
                      <span className="text-primary text-lg font-bold font-heading min-w-[65px]">
                        {m.year}
                      </span>
                      <span className="text-white/65 text-base leading-relaxed">
                        {m.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
