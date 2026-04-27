import type { Metadata } from 'next'
import { SobreContent } from '@/components/sobre/SobreContent'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Júlio Figueiredo: Duas décadas em Google, Microsoft, Dell e TOTVS, agosto/2023 na sede do Google em Nova York co-liderando 25 executivos C-Level, e a fundação da Synapse B2B em 2025 — junto com a Engenharia de Receita™ e o CORTEX B2B™.',
  keywords: [
    'Júlio Figueiredo',
    'fundador Synapse B2B',
    'Engenharia de Receita',
    'CORTEX B2B',
    'consultoria estratégica B2B',
    'Marcato',
    'Google NY 2023',
  ],
}

export default function SobrePage() {
  return <SobreContent />
}
