import type { Metadata } from 'next'
import { SobreContent } from '@/components/sobre/SobreContent'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça Júlio Figueiredo, fundador da SYNAPSE B2B. Duas décadas de experiência comercial B2B aplicadas à arquitetura e ao acompanhamento estratégico de receita.',
  keywords: [
    'Júlio Figueiredo',
    'fundador Synapse B2B',
    'Arquitetura de Receita',
    'CORTEX B2B',
    'consultoria estratégica B2B',
    'Google NY 2023',
  ],
}

export default function SobrePage() {
  return <SobreContent />
}
