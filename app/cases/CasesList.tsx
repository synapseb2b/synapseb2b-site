'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { cases } from '@/lib/cases-data'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function CasesList() {
  return (
    <section className="py-24 md:py-32 pt-36 md:pt-44">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 md:mb-24"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Cases
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-4xl"
          >
            Resultados reais.
            <br />
            <span className="text-primary">{"Neg\u00f3cios reais."}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base md:text-lg text-white/40 leading-relaxed max-w-2xl"
          >
            {"Empresas que redescobriram o pr\u00f3prio potencial com a Synapse B2B."}
          </motion.p>
        </motion.div>

        {/* Cases list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {cases.map((caseStudy) => (
            <motion.div
              key={caseStudy.slug}
              variants={fadeInUp}
              className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8 md:p-12 hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-14">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {caseStudy.company}
                    </h2>
                    <a
                      href={`https://${caseStudy.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/20 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-primary text-sm font-medium mb-6">
                    {caseStudy.tagline}
                  </p>
                  <p className="text-white/45 text-base leading-relaxed mb-4">
                    {caseStudy.description}
                  </p>
                  <p className="text-white/60 text-base leading-relaxed">
                    <span className="text-white/80 font-semibold">Resultado: </span>
                    {caseStudy.result}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:min-w-[280px]">
                  {caseStudy.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center"
                    >
                      <p className="text-xl md:text-2xl font-bold text-white">
                        {metric.value}
                      </p>
                      <p className="text-white/35 text-xs mt-1.5">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            href="/#diagnostico"
            className="group inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-8 pr-2 py-2 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:-translate-y-1"
          >
            <span className="font-bold">{"Iniciar Diagn\u00f3stico"}</span>
            <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
