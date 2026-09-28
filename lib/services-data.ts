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
      'A SYNAPSE analisa a esteira atual de receita, das ofertas aos canais e clientes, para identificar gargalos, formular hipóteses e priorizar o próximo movimento do negócio.',
    outcome: 'Hipótese prioritária de evolução da receita, com critérios para testar, medir e decidir o próximo movimento.',
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
      'A SYNAPSE atua ao lado da liderança para transformar decisões de receita em movimentos concretos. A cada ciclo, cruzamos indicadores, revisamos hipóteses, definimos prioridades e ajudamos a estruturar e colocar em prática os próximos movimentos. A resposta do mercado alimenta a próxima decisão.',
    outcome: 'Uma cadência contínua de decisão, ativação e aprendizado.',
    features: [
      { text: 'Leitura conjunta dos indicadores e revisão das hipóteses' },
      { text: 'Construção dos próximos movimentos com a liderança' },
      { text: 'Apoio à ativação e acompanhamento do que foi colocado em prática' },
      { text: 'Aprendizados do mercado para recalibrar a próxima decisão' },
    ],
    cta: 'Conversar sobre o Advisor',
    ctaHref: getWhatsAppUrl('Olá, Júlio. Quero conversar sobre o Advisor de Receita para acompanhar as prioridades comerciais da minha empresa B2B.'),
    note: 'Pode ser contratado diretamente. Frequência, dedicação e responsabilidades combinadas na proposta.',
  },
]
