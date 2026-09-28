import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'
import { FAQSection } from '@/components/contato/FAQSection'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Solicite uma conversa de 21 minutos com Júlio Figueiredo sobre Arquitetura de Receita e Advisor de Receita para sua empresa B2B.',
}

export default function ContatoPage() {
  return (
    <>
      <ContactForm />
      <FAQSection />
    </>
  )
}
