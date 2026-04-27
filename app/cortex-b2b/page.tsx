import type { Metadata } from 'next'
import { CortexContent } from '@/components/cortex/CortexContent'

export const metadata: Metadata = {
  title: 'CORTEX B2B™',
  description:
    'O motor cognitivo proprietário que opera dentro de cada projeto da Synapse. 5 lentes simultâneas, 30+ frameworks, duas décadas de repertório em ecossistemas Google, Microsoft, Dell e TOTVS.',
}

export default function CortexB2BPage() {
  return <CortexContent />
}
