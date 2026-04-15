'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { fadeInUp } from '@/lib/animations'

const WHATSAPP_NUMBER = '5531992878578'

const QUESTIONS = [
  'Se um cliente indicasse sua empresa para alguém, o que ele diria?',
  'Qual é a maior venda que você já fez e por que ela aconteceu?',
  'De onde vieram seus últimos 5 clientes?',
  'O que sua empresa faz e para quem?',
  'O que te trouxe até aqui?',
]

const inputClass =
  'w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white text-base placeholder:text-white/25 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300'

export function DiagnosticForm() {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [email, setEmail] = useState('')
  const [answers, setAnswers] = useState<string[]>(QUESTIONS.map(() => ''))
  const [submitted, setSubmitted] = useState(false)

  const allFilled =
    nome.trim() !== '' &&
    empresa.trim() !== '' &&
    email.trim() !== '' &&
    answers.every((a) => a.trim() !== '')

  function handleSubmit() {
    const msg = [
      `*Análise CORTEX B2B™*`,
      ``,
      `*Nome:* ${nome}`,
      `*Empresa:* ${empresa}`,
      `*Email:* ${email}`,
      ``,
      ...QUESTIONS.flatMap((q, i) => [
        `*${i + 1}. ${q}*`,
        answers[i],
        ``,
      ]),
    ].join('\n')

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setSubmitted(true)
  }

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
          Pronto. Suas respostas foram enviadas.
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          {"Júlio vai revisar e calibrar. Sua análise personalizada volta no mesmo dia."}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8 md:p-12"
    >
      {/* Identification fields */}
      <div className="space-y-4 mb-10">
        <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
          Identificação
        </p>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome *"
          className={inputClass}
        />
        <input
          type="text"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          placeholder="Empresa *"
          className={inputClass}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail *"
          className={inputClass}
        />
      </div>

      {/* Questions */}
      <div className="space-y-8 mb-10">
        <p className="text-primary text-[10px] font-bold uppercase tracking-widest">
          Perguntas estratégicas
        </p>
        {QUESTIONS.map((q, i) => (
          <div key={i}>
            <label className="block text-white/70 text-sm font-medium mb-3 leading-snug">
              <span className="text-primary mr-1">{i + 1}.</span> {q}
            </label>
            <textarea
              value={answers[i]}
              onChange={(e) => {
                const next = [...answers]
                next[i] = e.target.value
                setAnswers(next)
              }}
              placeholder="Sua resposta..."
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </div>
        ))}
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={!allFilled}
        className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white py-4 rounded-full font-bold text-sm transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-[0_0_30px_rgba(74,144,217,0.25)]"
      >
        <WhatsAppIcon size={18} />
        Enviar para análise
      </button>

      {/* Trust */}
      <div className="mt-6 flex items-center justify-center gap-2 text-white/20">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <span className="text-[11px] tracking-wide">
          Suas respostas são confidenciais. Análise personalizada no mesmo dia.
        </span>
      </div>
    </motion.div>
  )
}
