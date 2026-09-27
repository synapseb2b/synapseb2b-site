import type { Metadata } from 'next'
import { EntregasContent } from '@/components/entregas/EntregasContent'

export const metadata: Metadata = {
  title: 'Arquitetura de Receita e Advisor de Receita',
  description:
    'Organize as prioridades comerciais da sua empresa B2B com um projeto de Arquitetura de Receita ou acompanhamento recorrente como Advisor de Receita.',
}

export default function EntregasPage() {
  return <EntregasContent />
}
