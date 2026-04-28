import type { Metadata } from 'next'
import { CasesList } from './CasesList'

export const metadata: Metadata = {
  title: 'Resultados',
  description:
    'Empresas que traduziram competência em receita com a Synapse B2B. 11 resultados reais de Engenharia de Receita aplicada.',
}

export default function CasesPage() {
  return <CasesList />
}
