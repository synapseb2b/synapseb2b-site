import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Synapse B2B. Fale diretamente com Júlio Figueiredo sobre Engenharia de Receita para sua empresa.',
}

export default function ContatoPage() {
  return <ContactForm />
}
