import type { Metadata } from 'next'
import { CasesList } from './CasesList'

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Resultados reais de empresas que decodificaram seu valor com a Synapse B2B. Cases de Engenharia de Receita.',
}

export default function CasesPage() {
  return <CasesList />
}
