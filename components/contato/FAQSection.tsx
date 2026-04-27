'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/faq-data'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { LiveBadge } from '@/components/ui/LiveBadge'
import { cn } from '@/lib/utils'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-24 md:py-32 border-t border-white/[0.06] overflow-hidden">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mb-16 md:mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <LiveBadge>Dúvidas frequentes</LiveBadge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
          >
            Perguntas que aparecem{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
              antes da primeira reunião.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white/65 leading-relaxed max-w-3xl"
          >
            As respostas curtas estão aqui. Se não encontrar a sua, use o formulário acima — Júlio
            responde diretamente no WhatsApp.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-4xl space-y-3"
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={cn(
                  'card-shine rounded-2xl border bg-white/[0.02] transition-all duration-300',
                  isOpen
                    ? 'border-primary/30 shadow-[0_8px_30px_rgba(74,144,217,0.1)]'
                    : 'border-white/[0.08] hover:border-white/[0.15]'
                )}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      'text-base md:text-lg font-bold tracking-tight leading-snug transition-colors',
                      isOpen ? 'text-white' : 'text-white/85'
                    )}
                  >
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      'flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300',
                      isOpen
                        ? 'border-primary/40 bg-primary/15 text-primary rotate-180'
                        : 'border-white/[0.1] text-white/50 group-hover:border-white/[0.2]'
                    )}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-7 pb-6 md:pb-7 pr-16 md:pr-20">
                        <div className="h-px bg-white/[0.06] mb-5" />
                        <p className="text-white/65 text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
