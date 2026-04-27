'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, User, Mail, Phone, Target } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { getWhatsAppUrl } from '@/lib/constants'
import { SynapseBackground } from '@/components/ui/SynapseBackground'

const COMPANY_SIZES = [
  'Até 5 pessoas',
  '6 a 20 pessoas',
  '21 a 50 pessoas',
  '51 a 200 pessoas',
  'Mais de 200 pessoas',
] as const

const INTERESTS = [
  'Diagnóstico CORTEX B2B™',
  'Projeto Estratégico de Engenharia de Receita',
  'Advisor de Receita',
  'Quero entender melhor antes de decidir',
] as const

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [size, setSize] = useState('')
  const [interest, setInterest] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // 1. Abre WhatsApp imediatamente (síncrono — antes de qualquer await)
    const whatsappText = [
      `*Contato via Site — Synapse B2B*`,
      ``,
      `*Nome:* ${name}`,
      `*Email:* ${email}`,
      phone ? `*Telefone:* ${phone}` : null,
      `*Empresa:* ${company}`,
      `*Porte:* ${size}`,
      `*Interesse:* ${interest}`,
      message ? `\n*Mensagem:*\n${message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(getWhatsAppUrl(whatsappText), '_blank')

    // 2. Atualiza UI
    setSent(true)
  }

  const inputClass =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-base placeholder:text-white/30 focus:border-primary/40 focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-300'

  if (sent) {
    return (
      <section className="relative py-24 md:py-32 pt-36 md:pt-44 overflow-hidden">
        <SynapseBackground particleCount={25} connectionDistance={160} opacity={0.1} speed={0.2} />
        <div className="relative z-10 w-full max-w-[600px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-12"
          >
            <div className="w-16 h-16 rounded-full bg-[#25d366]/10 flex items-center justify-center mx-auto mb-6">
              <WhatsAppIcon size={28} className="text-[#25d366]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Mensagem enviada!
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              {"Sua mensagem foi direcionada para o WhatsApp de Júlio Figueiredo. Ele vai retornar o mais rápido possível."}
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-accent-300 transition-colors"
            >
              Voltar ao site
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-24 md:py-32 pt-36 md:pt-44 overflow-hidden">
      <SynapseBackground particleCount={25} connectionDistance={160} opacity={0.08} speed={0.2} />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full text-primary inline-block"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Contato
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white max-w-6xl mb-6"
          >
            Vamos conversar sobre <span className="text-primary">sua receita.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-[#CCD6E0] leading-relaxed max-w-4xl"
          >
            {"Preencha o formulário abaixo. As informações vão direto para o WhatsApp de Júlio Figueiredo. Sem intermediários."}
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="max-w-[680px] mx-auto rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8 md:p-12"
        >
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome *"
                required
                className={`${inputClass} pl-11`}
              />
            </div>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail *"
                required
                className={`${inputClass} pl-11`}
              />
            </div>
          </div>

          {/* Phone + Company */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefone"
                className={`${inputClass} pl-11`}
              />
            </div>
            <div className="relative">
              <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Nome da empresa *"
                required
                className={`${inputClass} pl-11`}
              />
            </div>
          </div>

          {/* Company size */}
          <div className="mb-4">
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
              className={`${inputClass} ${!size ? 'text-white/30' : 'text-white'} appearance-none cursor-pointer`}
            >
              <option value="" disabled>Porte da empresa *</option>
              {COMPANY_SIZES.map((s) => (
                <option key={s} value={s} className="bg-[#0a1a3e] text-white">{s}</option>
              ))}
            </select>
          </div>

          {/* Interest */}
          <div className="mb-4">
            <div className="relative">
              <Target size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                required
                className={`${inputClass} pl-11 ${!interest ? 'text-white/30' : 'text-white'} appearance-none cursor-pointer`}
              >
                <option value="" disabled>O que te interessa? *</option>
                {INTERESTS.map((i) => (
                  <option key={i} value={i} className="bg-[#0a1a3e] text-white">{i}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={"Conte um pouco sobre o momento da sua empresa (opcional)"}
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!name || !email || !company || !size || !interest}
            className="w-full group inline-flex items-center justify-center gap-4 bg-primary hover:bg-primary-hover text-white py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:shadow-primary/50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Enviar via WhatsApp
            <WhatsAppIcon size={18} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Trust */}
          <div className="mt-6 flex items-center justify-center gap-2 text-white/30">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span className="text-[11px] tracking-wide">
              {"Suas informações vão direto para Júlio. Sem spam, sem intermediários."}
            </span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
