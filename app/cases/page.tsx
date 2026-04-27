import type { Metadata } from 'next'
import { CasesList } from './CasesList'

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Empresas que potencializaram o próprio potencial com a Synapse B2B. 11 cases de Engenharia de Receita aplicada.',
}

export default function CasesPage() {
  return <CasesList />
}
