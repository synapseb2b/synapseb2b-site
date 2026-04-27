export interface ServiceFeature {
  text: string
  badge?: string
}

export interface Service {
  id: string
  name: string
  subtitle: string
  description: string
  features: ServiceFeature[]
  cta: string
  ctaHref?: string
  featured?: boolean
  note?: string
}

export const services: Service[] = [
  {
    id: 'diagnostico',
    name: 'Diagnóstico CORTEX B2B™',
    subtitle: 'Em 30 dias, clareza',
    description:
      'Em 30 dias sua empresa entende com precisão onde está deixando receita na mesa. Assessment estratégico, sessão individual de 49 minutos e Relatório Cortex personalizado.',
    features: [
      { text: 'Assessment Cortex B2B™ pré-sessão' },
      { text: 'Sessão individual de 49 minutos' },
      { text: 'Relatório Cortex B2B™ personalizado' },
      { text: 'Plano de ação para 30 dias' },
    ],
    cta: 'Iniciar Diagnóstico',
    ctaHref: '/#diagnostico',
    note: 'Valor convertido em crédito integral no Projeto Estratégico se houver continuidade em até 30 dias.',
  },
  {
    id: 'projeto',
    name: 'Projeto Estratégico de Engenharia de Receita',
    subtitle: 'Em 35 dias, sistema completo',
    description:
      'Construção integral da arquitetura comercial em 5 sessões individuais e 6 ativos estratégicos entregues, com acompanhamento nos 90 dias seguintes para calibrar o sistema enquanto o mercado responde.',
    features: [
      { text: '5 sessões individuais de 49 minutos' },
      { text: '6 ativos estratégicos entregues' },
      { text: '5 devolutivas construídas pelo Cortex B2B™' },
      { text: '3 sessões de acompanhamento em 90 dias' },
      { text: 'Variante para Ecossistemas (múltiplas linhas de receita)' },
    ],
    cta: 'Começar Projeto',
    ctaHref: '/#diagnostico',
    featured: true,
    note: 'Pode incluir Skin in the Game (variável atrelada à receita nova gerada).',
  },
  {
    id: 'advisor',
    name: 'Advisor Estratégico',
    subtitle: 'Sparring contínuo',
    description:
      'O terceiro tempo da Engenharia de Receita. Sustenta o método em operação enquanto o mercado responde ao novo posicionamento. Para clientes que concluíram o Projeto e querem continuidade estendida.',
    features: [
      { text: 'Pacote mensal de horas de consultoria sparring' },
      { text: 'Apoio na execução do Mapa de Receita' },
      { text: 'Calibragem de cadência das ações de comunicação' },
      { text: 'Sessões sob demanda para decisões importantes' },
      { text: 'Acesso ao Cortex B2B™ para consultas direcionadas', badge: 'em breve' },
      { text: 'Revisão de ativos comerciais quando aplicável' },
    ],
    cta: 'Conhecer o Advisor',
    ctaHref: '/#diagnostico',
  },
]
