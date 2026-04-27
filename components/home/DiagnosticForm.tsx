'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Send, User, Mail, Phone, Building2, DollarSign } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import {
  DIAGNOSTIC_QUESTIONS,
  FATURAMENTO_OPTIONS,
  getWhatsAppUrl,
} from '@/lib/constants'
import { submitDiagnostic } from '@/app/actions/diagnostic'

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

type Step = 'identification' | 0 | 1 | 2

export function DiagnosticForm() {
  const [step, setStep] = useState<Step>('identification')
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  // Identification fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [faturamento, setFaturamento] = useState('')

  // 3 questions
  const [answers, setAnswers] = useState<string[]>(['', '', ''])

  const totalSteps = DIAGNOSTIC_QUESTIONS.length

  const isIdentificationValid = name && email && phone && company && faturamento
  const currentAnswerValid =
    typeof step === 'number' ? answers[step]?.trim().length > 0 : true

  function goNext() {
    if (step === 'identification') {
      setDirection(1)
      setStep(0)
      return
    }
    if (typeof step === 'number' && step < totalSteps - 1) {
      setDirection(1)
      setStep((step + 1) as Step)
    } else if (typeof step === 'number' && step === totalSteps - 1) {
      handleSubmit()
    }
  }

  function goPrev() {
    if (typeof step === 'number') {
      if (step === 0) {
        setDirection(-1)
        setStep('identification')
      } else {
        setDirection(-1)
        setStep((step - 1) as Step)
      }
    }
  }

  async function handleSubmit() {
    // 1. Salva no Supabase
    await submitDiagnostic({
      name,
      email,
      phone,
      company,
      faturamento,
      answers,
    })

    // 2. Abre WhatsApp formatado
    const whatsappMsg =
      `*Diagnóstico CORTEX B2B™ — Synapse B2B*\n\n` +
      `*Nome:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Telefone:* ${phone}\n` +
      `*Empresa:* ${company}\n` +
      `*Faturamento mensal:* ${faturamento}\n\n` +
      DIAGNOSTIC_QUESTIONS.map(
        (q, i) => `*${i + 1}. ${q}*\n${answers[i]}`
      ).join('\n\n')

    window.open(getWhatsAppUrl(whatsappMsg), '_blank')
    setSubmitted(true)
  }

  // Progress: 0% identification, 33%/66%/100% perguntas
  const progress =
    step === 'identification' ? 0 : ((step + 1) / totalSteps) * 100

  // Total steps for navigation: identification + 3 questions = 4
  const stepNumber = step === 'identification' ? 0 : step + 1
  const totalShown = totalSteps + 1 // + identification

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
          Júlio Figueiredo vai revisar e calibrar pessoalmente. Sua análise
          estratégica inicial volta no mesmo dia útil, sem compromisso de
          continuidade.
        </p>
        <button
          onClick={() => {
            const whatsappMsg =
              `*Diagnóstico CORTEX B2B™ — Synapse B2B*\n\n` +
              `*Nome:* ${name}\n` +
              `*Email:* ${email}\n` +
              `*Telefone:* ${phone}\n` +
              `*Empresa:* ${company}\n` +
              `*Faturamento mensal:* ${faturamento}\n\n` +
              DIAGNOSTIC_QUESTIONS.map(
                (q, i) => `*${i + 1}. ${q}*\n${answers[i]}`
              ).join('\n\n')
            window.open(getWhatsAppUrl(whatsappMsg), '_blank')
          }}
          className="inline-flex items-center gap-2.5 bg-[#25d366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 cursor-pointer"
        >
          <WhatsAppIcon size={18} />
          Falar no WhatsApp
        </button>
      </motion.div>
    )
  }

  const inputClass =
    'w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white text-base placeholder:text-white/25 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300'

  return (
    <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8 md:p-12">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-primary text-[10px] font-bold uppercase tracking-widest">
          {step === 'identification' ? 'Identificação' : `Pergunta ${(step as number) + 1} de ${totalSteps}`}
        </p>
        <p className="text-white/40 text-[10px] font-medium tracking-wide">
          {stepNumber} / {totalShown}
        </p>
      </div>
      <div className="h-1 bg-white/[0.04] rounded-full mb-10 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(stepNumber / totalShown) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        {step === 'identification' ? (
          <motion.div
            key="identification"
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-snug">
              Vamos começar com seus dados.
            </h3>
            <div className="space-y-4">
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome completo"
                  className={`${inputClass} pl-11`}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className={`${inputClass} pl-11`}
                  />
                </div>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="WhatsApp com DDD"
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>
              <div className="relative">
                <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Empresa"
                  className={`${inputClass} pl-11`}
                />
              </div>
              <div className="relative">
                <DollarSign size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 z-10 pointer-events-none" />
                <select
                  value={faturamento}
                  onChange={(e) => setFaturamento(e.target.value)}
                  className={`${inputClass} pl-11 ${!faturamento ? 'text-white/30' : 'text-white'} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Faturamento mensal aproximado
                  </option>
                  {FATURAMENTO_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-[#0a1a3e] text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-snug">
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
              rows={5}
              autoFocus
              className={`${inputClass} resize-none`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10">
        <button
          onClick={goPrev}
          disabled={step === 'identification'}
          className="flex items-center gap-2 text-white/50 hover:text-white/70 disabled:opacity-20 disabled:cursor-not-allowed transition-colors text-sm cursor-pointer"
        >
          <ArrowLeft size={16} />
          Anterior
        </button>

        <button
          onClick={goNext}
          disabled={step === 'identification' ? !isIdentificationValid : !currentAnswerValid}
          className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white pl-6 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          {step === totalSteps - 1 ? 'Enviar para análise' : 'Próxima'}
          <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            {step === totalSteps - 1 ? <Send size={14} /> : <ArrowRight size={14} />}
          </span>
        </button>
      </div>

      {/* Trust micro-copy */}
      <div className="mt-8 flex items-center justify-center gap-2 text-white/30">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span className="text-[11px] tracking-wide">
          Suas respostas são confidenciais. Análise personalizada no mesmo dia útil.
        </span>
      </div>
    </div>
  )
}
