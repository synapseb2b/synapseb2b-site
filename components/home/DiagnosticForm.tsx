'use client'

import { useState } from 'react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { getWhatsAppUrl, SESSION_WHATSAPP_URL } from '@/lib/constants'
import { services } from '@/lib/services-data'

export function DiagnosticForm() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [interest, setInterest] = useState('Quero entender por onde começar')
  const [message, setMessage] = useState('')
  const [prepared, setPrepared] = useState(false)

  const whatsappUrl = getWhatsAppUrl([
    'Olá, Júlio. Quero agendar uma Sessão de Decodificação.',
    `Nome: ${name.trim()}`,
    `Empresa: ${company.trim()}`,
    `Interesse: ${interest}`,
    message.trim() ? `Momento do negócio: ${message.trim()}` : '',
  ].filter(Boolean).join('\n'))

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name.trim() || !company.trim()) return
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setPrepared(true)
  }

  const inputClass = 'w-full bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 py-3 text-white text-base placeholder:text-white/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors'

  return (
    <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-6 md:p-10">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">De fundador para fundador.</h3>
      <p className="text-white/65 text-base leading-relaxed mb-6">
        Conte o essencial para começarmos a conversa pelo seu negócio.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="session-name" className="block text-sm text-white/80 mb-2">Seu nome</label>
            <input id="session-name" name="name" autoComplete="name" required maxLength={100} value={name} onChange={(e) => { setName(e.target.value); setPrepared(false) }} className={inputClass} />
          </div>
          <div>
            <label htmlFor="session-company" className="block text-sm text-white/80 mb-2">Sua empresa</label>
            <input id="session-company" name="company" autoComplete="organization" required maxLength={150} value={company} onChange={(e) => { setCompany(e.target.value); setPrepared(false) }} className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="session-interest" className="block text-sm text-white/80 mb-2">Sobre o que vamos conversar?</label>
          <select id="session-interest" name="interest" value={interest} onChange={(e) => { setInterest(e.target.value); setPrepared(false) }} className={inputClass}>
            <option className="bg-navy-950">Quero entender por onde começar</option>
            {services.map((service) => <option key={service.id} className="bg-navy-950">{service.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="session-message" className="block text-sm text-white/80 mb-2">O que precisa avançar na sua receita? <span className="text-white/50">(opcional)</span></label>
          <textarea id="session-message" name="message" maxLength={1500} rows={3} value={message} onChange={(e) => { setMessage(e.target.value); setPrepared(false) }} placeholder="Conte o principal desafio comercial de hoje." className={`${inputClass} resize-y`} />
        </div>
        <button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-5 py-4 rounded-full font-bold text-sm md:text-base transition-colors cursor-pointer">
          Solicitar conversa pelo WhatsApp
          <WhatsAppIcon size={20} className="shrink-0" />
        </button>
        <p className="text-sm text-white/55 leading-relaxed">
          O WhatsApp abre com sua mensagem pronta. Envie para combinar um horário com Júlio.
        </p>
        {prepared && (
          <div role="status" className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-white/80 leading-relaxed">
            Sua mensagem está pronta. Conclua o envio no WhatsApp para solicitar o agendamento.{' '}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent-300 underline underline-offset-4">Abrir a conversa novamente</a>.
          </div>
        )}
      </form>
      <div className="mt-6 pt-6 border-t border-white/[0.08] text-center">
        <a href={SESSION_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-accent-300 underline underline-offset-4">
          Prefiro falar diretamente com Júlio
        </a>
      </div>
    </div>
  )
}
