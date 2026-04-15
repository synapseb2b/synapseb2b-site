'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Send } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { DIAGNOSTIC_QUESTIONS, getWhatsAppUrl } from '@/lib/constants'
import { submitDiagnostic } from '@/app/actions/diagnostic'

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

export function DiagnosticForm() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<string[]>(new Array(DIAGNOSTIC_QUESTIONS.length).fill(''))
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactStep, setContactStep] = useState(false)

  const totalSteps = DIAGNOSTIC_QUESTIONS.length

  function goNext() {
    if (step < totalSteps - 1) {
      setDirection(1)
      setStep((s) => s + 1)
    } else {
      setDirection(1)
      setContactStep(true)
    }
  }

  function goPrev() {
    if (contactStep) { setContactStep(false); return }
    if (step > 0) { setDirection(-1); setStep((s) => s - 1) }
  }

  function handleSubmit() {
    // 1. Abre WhatsApp imediatamente (síncrono — antes de qualquer await)
    const whatsappMsg = `*Diagn\u00f3stico CORTEX B2B\u2122*\n\n*Nome:* ${name}\n*Email:* ${email}\n\n${DIAGNOSTIC_QUESTIONS.map((q, i) => `*${i + 1}. ${q}*\n${answers[i]}`).join('\n\n')}`
    window.open(getWhatsAppUrl(whatsappMsg), '_blank')

    // 2. Atualiza UI
    setSubmitted(true)

    // 3. Salva no Supabase em background (não bloqueia o fluxo)
    submitDiagnostic({ name, email, answers }).catch(console.error)
  }

  const progress = contactStep ? 100 : ((step + 1) / (totalSteps + 1)) * 100
  const whatsappMessage = `*Diagn\u00f3stico CORTEX B2B\u2122*\n\n*Nome:* ${name}\n*Email:* ${email}\n\n${DIAGNOSTIC_QUESTIONS.map((q, i) => `*${i + 1}. ${q}*\n${answers[i]}`).join('\n\n')}`

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-10 md:p-14 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Send size={24} className="text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Pronto. Recebemos suas respostas.
        </h3>
        <p className="text-white/65 text-sm leading-relaxed mb-8">
          {"O CORTEX B2B\u2122 j\u00e1 est\u00e1 processando. J\u00falio vai revisar e calibrar. Sua an\u00e1lise personalizada volta no mesmo dia."}
        </p>
        <button
          onClick={() => window.open(getWhatsAppUrl(whatsappMessage), '_blank')}
          className="inline-flex items-center gap-2.5 bg-[#25d366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 cursor-pointer"
        >
          <WhatsAppIcon size={18} />
          Falar no WhatsApp
        </button>
      </motion.div>
    )
  }

  return (
    <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8 md:p-12">
      {/* Progress bar */}
      <div className="h-1 bg-white/[0.04] rounded-full mb-10 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        {!contactStep ? (
          <motion.div
            key={step}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
              Pergunta {step + 1} de {totalSteps}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-snug">
              {DIAGNOSTIC_QUESTIONS[step]}
            </h3>
            <textarea
              value={answers[step]}
              onChange={(e) => {
                const newAnswers = [...answers]
                newAnswers[step] = e.target.value
                setAnswers(newAnswers)
              }}
              placeholder="Sua resposta..."
              rows={4}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white text-base placeholder:text-white/20 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300 resize-none"
            />
          </motion.div>
        ) : (
          <motion.div
            key="contact"
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
              {"\u00DAltimo passo"}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
              Como podemos te encontrar?
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white text-base placeholder:text-white/20 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white text-base placeholder:text-white/20 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10">
        <button
          onClick={goPrev}
          disabled={step === 0 && !contactStep}
          className="flex items-center gap-2 text-white/50 hover:text-white/60 disabled:opacity-20 disabled:cursor-not-allowed transition-colors text-sm cursor-pointer"
        >
          <ArrowLeft size={16} />
          Anterior
        </button>

        {contactStep ? (
          <button
            onClick={handleSubmit}
            disabled={!name || !email}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white pl-6 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            {"Enviar Diagn\u00f3stico"}
            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Send size={14} />
            </span>
          </button>
        ) : (
          <button
            onClick={goNext}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white pl-6 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer"
          >
            {step === totalSteps - 1 ? 'Finalizar' : 'Pr\u00f3xima'}
            <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight size={14} />
            </span>
          </button>
        )}
      </div>

      {/* Trust micro-copy */}
      <div className="mt-8 flex items-center justify-center gap-2 text-white/20">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span className="text-[11px] tracking-wide">
          {"Suas respostas s\u00e3o confidenciais. An\u00e1lise personalizada no mesmo dia."}
        </span>
      </div>
    </div>
  )
}
