import type { Metadata } from 'next'
import { CortexContent } from '@/components/cortex/CortexContent'

export const metadata: Metadata = {
  title: 'CORTEX B2B™',
  description:
    'Conheça o sistema interno que apoia as análises e o acompanhamento da SYNAPSE B2B, com inteligência artificial e revisão estratégica de Júlio Figueiredo.',
}

export default function CortexB2BPage() {
  return <CortexContent />
}
