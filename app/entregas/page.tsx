import type { Metadata } from 'next'
import { EntregasContent } from '@/components/entregas/EntregasContent'

export const metadata: Metadata = {
  title: 'O que entregamos',
  description:
    'Três formas de contratar a Synapse B2B. Diagnóstico CORTEX B2B, Projeto Estratégico de Engenharia de Receita e Advisor Estratégico. Tudo sobre o método.',
}

export default function EntregasPage() {
  return <EntregasContent />
}
