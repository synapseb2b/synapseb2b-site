'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink, MapPin, Quote } from 'lucide-react'
import { highlightCases, secondaryCases, type CaseStudy } from '@/lib/cases-data'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { cn } from '@/lib/utils'

export function CasesList() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <SynapseBackground particleCount={30} connectionDistance={170} opacity={0.1} speed={0.2} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                Cases
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-8"
            >
              Empresas que potencializaram
              <br />
              <span className="text-primary">o próprio potencial.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl"
            >
              Cada case aqui é uma empresa que já tinha competência, talento e histórico. O que a
              Synapse fez foi construir a arquitetura que transformou esses ativos em posicionamento
              reconhecível, sistema comercial estruturado e autoridade de mercado defensável. O que
              muda entre um case e outro é o ponto de partida. O que não muda é o método.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Highlights — 4 cases expandidos */}
      <section className="relative py-16 md:py-24 border-t border-white/[0.06] overflow-hidden">
        <SynapseBackground particleCount={20} connectionDistance={150} opacity={0.07} speed={0.18} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-bold tracking-widest uppercase mb-12"
          >
            Destaques
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-8 md:space-y-10"
          >
            {highlightCases.map((c) => (
              <HighlightCaseCard key={c.slug} caseStudy={c} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Secundários — 7 cases compactos */}
      <section className="relative py-16 md:py-24 border-t border-white/[0.06] bg-navy-900/20 overflow-hidden">
        <SynapseBackground particleCount={20} connectionDistance={150} opacity={0.07} speed={0.18} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-bold tracking-widest uppercase mb-12"
          >
            Outras empresas operando com Engenharia de Receita
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 gap-5"
          >
            {secondaryCases.map((c) => (
              <CompactCaseCard key={c.slug} caseStudy={c} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06] overflow-hidden">
        <SynapseBackground particleCount={25} connectionDistance={160} opacity={0.1} speed={0.2} />

        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Sua empresa pode ser
              <br />
              <span className="text-primary">o próximo case.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Em 30 dias sua empresa entende com precisão onde está deixando receita na mesa.
            </p>
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

function HighlightCaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-12 hover:border-primary/30 transition-all duration-300"
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left - heading + description */}
        <div className="lg:col-span-7">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
                <MapPin size={12} />
                <span>{caseStudy.location}</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {caseStudy.company}
              </h2>
            </div>
            {caseStudy.url && (
              <a
                href={`https://${caseStudy.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-primary transition-colors mt-2"
                aria-label={`Visitar ${caseStudy.company}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <p className="text-primary text-base md:text-lg font-medium mb-6 leading-snug">
            {caseStudy.tagline}
          </p>

          <p className="text-white/65 text-base leading-relaxed mb-6">
            {caseStudy.description}
          </p>

          <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5 md:p-6 mb-6">
            <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2">
              Resultado
            </p>
            <p className="text-white/85 text-base leading-relaxed">{caseStudy.result}</p>
          </div>

          {caseStudy.testimonial && (
            <blockquote className="border-l-2 border-primary/40 pl-5 mt-6">
              <Quote size={20} className="text-primary/60 mb-3" />
              <p className="text-white/75 text-base italic leading-relaxed mb-3">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </p>
              <footer className="text-white/45 text-sm">
                <strong className="text-white/70 font-semibold">
                  {caseStudy.testimonial.author}
                </strong>
                , {caseStudy.testimonial.role}
              </footer>
            </blockquote>
          )}
        </div>

        {/* Right - metrics + assets */}
        <div className="lg:col-span-5 space-y-5">
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div
              className={cn(
                'grid gap-3',
                caseStudy.metrics.length === 4
                  ? 'grid-cols-2'
                  : caseStudy.metrics.length === 3
                  ? 'grid-cols-3'
                  : 'grid-cols-2'
              )}
            >
              {caseStudy.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-white tracking-tighter leading-none">
                    {m.value}
                  </p>
                  <p className="text-white/40 text-[11px] mt-2 leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {caseStudy.assets && caseStudy.assets.length > 0 && (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-3">
                Ativos entregues
              </p>
              <ul className="space-y-2">
                {caseStudy.assets.map((asset) => (
                  <li
                    key={asset}
                    className="text-white/55 text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-primary mt-1 text-[10px]">●</span>
                    <span>{asset}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy.url && (
            <a
              href={`https://${caseStudy.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary text-xs font-medium hover:text-accent-300 transition-colors"
            >
              Site entregue: {caseStudy.url} →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function CompactCaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-7 md:p-8 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 text-white/40 text-xs mb-2">
            <MapPin size={11} />
            <span>{caseStudy.location}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
            {caseStudy.company}
          </h3>
        </div>
        {caseStudy.url && (
          <a
            href={`https://${caseStudy.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-primary transition-colors mt-1"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      <p className="text-primary text-sm font-medium mb-4 leading-snug">{caseStudy.tagline}</p>

      <p className="text-white/55 text-sm leading-relaxed mb-4">{caseStudy.description}</p>

      {caseStudy.testimonial && (
        <blockquote className="border-l-2 border-primary/30 pl-4 mt-4">
          <p className="text-white/65 text-xs italic leading-relaxed mb-2">
            &ldquo;{caseStudy.testimonial.quote}&rdquo;
          </p>
          <footer className="text-white/35 text-[11px]">
            {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
          </footer>
        </blockquote>
      )}

      {caseStudy.status === 'em-execucao' && (
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-[10px] font-bold uppercase tracking-wider">
            Em execução
          </span>
        </div>
      )}
    </motion.article>
  )
}
