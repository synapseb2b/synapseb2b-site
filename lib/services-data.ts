import { getWhatsAppUrl } from './constants'

export interface ServiceFeature {
  text: string
  badge?: string
}

export interface Service {
  id: string
  name: string
  subtitle: string
  description: string
  outcome: string
  features: ServiceFeature[]
  cta: string
  ctaHref: string
  note: string
}

export const services: Service[] = [
  {
    id: 'arquitetura',
    name: 'Arquitetura de Receita',
    subtitle: 'Projeto com escopo definido',
    description:
      'Para quem precisa decidir onde concentrar o esforço comercial. Analisamos ofertas, clientes, canais e oportunidades para organizar o próximo movimento de receita do negócio.',
    outcome: 'Você sai com prioridades definidas e um caminho claro de execução.',
    features: [
      { text: 'Leitura dos gargalos e das oportunidades de receita' },
      { text: 'Definição de ofertas, compradores e canais prioritários' },
      { text: 'Mapa de oportunidades, incluindo expansão na base e novas linhas de negócio' },
      { text: 'Plano de ação com responsáveis, próximos passos e indicadores' },
    ],
    cta: 'Organizar minha receita',
    ctaHref: getWhatsAppUrl('Olá, Júlio. Quero conversar sobre a Arquitetura de Receita para minha empresa B2B.'),
    note: 'Prazo, investimento e entregas definidos na proposta, conforme o desafio do negócio.',
  },
  {
    id: 'advisor',
    name: 'Advisor de Receita',
    subtitle: 'Acompanhamento estratégico recorrente',
    description:
      'Para quem precisa de um interlocutor experiente ao lado do fundador. Júlio acompanha as decisões comerciais, orienta os responsáveis e revisa o que está avançando na geração de receita.',
    outcome: 'Você tem direção e acompanhamento para transformar decisões em ações.',
    features: [
      { text: 'Encontros com o fundador para decidir as prioridades' },
      { text: 'Orientação prática sobre o que fazer e como avançar' },
      { text: 'Acompanhamento das ações, dos responsáveis e dos indicadores' },
      { text: 'Revisão de oportunidades e ajustes conforme a resposta do mercado' },
    ],
    cta: 'Conversar sobre o Advisor',
    ctaHref: getWhatsAppUrl('Olá, Júlio. Quero conversar sobre o Advisor de Receita para acompanhar as prioridades comerciais da minha empresa B2B.'),
    note: 'Pode ser contratado diretamente. Frequência, dedicação e responsabilidades combinadas na proposta.',
  },
]
