'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { highlightCases } from '@/lib/cases-data'
import { fadeInUp } from '@/lib/animations'

// Carrossel mostra os 3 cases além do Mr Job (que está fixo acima)
const CAROUSEL_CASES = highlightCases.filter((c) => c.slug !== 'mr-job-hub')

const AUTOPLAY_INTERVAL = 6000

export function CasesCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const reduce = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const total = CAROUSEL_CASES.length

  useEffect(() => {
    if (isPaused || reduce) return
    const timer = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % total)
    }, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [isPaused, reduce, total])

  function next() {
    setDirection(1)
    setIndex((i) => (i + 1) % total)
  }

  function prev() {
    setDirection(-1)
    setIndex((i) => (i - 1 + total) % total)
  }

  function goTo(i: number) {
    setDirection(i > index ? 1 : -1)
    setIndex(i)
  }

  const current = CAROUSEL_CASES[index]

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
  }

  return (
    <motion.div
      ref={containerRef}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="mt-16 md:mt-20"
    >
      {/* Intro */}
      <p className="text-center text-white/40 text-xs uppercase tracking-[0.2em] mb-8 md:mb-10">
        Mais empresas operando com Engenharia de Receita
      </p>

      {/* Card area */}
      <div className="relative">
        <div className="card-shine relative min-h-[420px] md:min-h-[360px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={current.slug}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 p-8 md:p-12 lg:p-14 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2">
                    {current.location}
                  </p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {current.company}
                  </h3>
                </div>
                {current.url && (
                  <a
                    href={`https://${current.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-primary transition-colors mt-1.5"
                    aria-label={`Visitar ${current.company}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className="text-primary/80 text-sm md:text-base font-medium mb-5">
                {current.tagline}
              </p>

              <p className="text-white/60 text-[0.95rem] md:text-base leading-relaxed mb-6 flex-1">
                {current.description}
              </p>

              {current.testimonial && (
                <blockquote className="border-l-2 border-primary/40 pl-5 mt-2">
                  <p className="text-white/75 text-sm md:text-base italic leading-relaxed mb-2">
                    &ldquo;{current.testimonial.quote}&rdquo;
                  </p>
                  <footer className="text-white/40 text-xs">
                    {current.testimonial.author}, {current.testimonial.role}
                  </footer>
                </blockquote>
              )}
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6 px-2">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {CAROUSEL_CASES.map((c, i) => (
              <button
                key={c.slug}
                onClick={() => goTo(i)}
                aria-label={`Ir para case ${c.company}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? 'w-8 bg-primary'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Case anterior"
              className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Próximo case"
              className="w-10 h-10 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 md:mt-12 flex justify-center">
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-accent-300 transition-colors group"
        >
          Ver todos os cases
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.div>
  )
}
