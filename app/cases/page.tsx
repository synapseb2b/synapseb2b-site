import type { Metadata } from 'next'
import { CasesList } from './CasesList'

export const metadata: Metadata = {
  title: 'Resultados',
  description:
    'Conheça a atuação da SYNAPSE B2B na organização de ofertas, oportunidades comerciais e caminhos de receita em empresas de serviços, tecnologia e negócios B2B.',
}

export default function CasesPage() {
  return <CasesList />
}
