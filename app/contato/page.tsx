import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'
import { FAQSection } from '@/components/contato/FAQSection'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale diretamente com Júlio Figueiredo, fundador da Synapse B2B. Formulário inteligente que envia direto para o WhatsApp. Mais respostas para perguntas frequentes sobre o método CORTEX B2B™.',
}

export default function ContatoPage() {
  return (
    <>
      <ContactForm />
      <FAQSection />
    </>
  )
}
