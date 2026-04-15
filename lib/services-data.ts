export interface ServiceFeature {
  text: string
}

export interface Service {
  id: string
  name: string
  subtitle: string
  description: string
  features: ServiceFeature[]
  cta: string
  featured?: boolean
  note?: string
}

export const services: Service[] = [
  {
    id: 'diagnostico',
    name: 'Diagn\u00f3stico CORTEX B2B\u2122',
    subtitle: 'Clareza em 30 dias',
    description:
      'Leitura completa do sistema de receita da sua empresa. Maturidade comercial, lacunas de captura, posicionamento e perfil de cliente ideal processados pelo CORTEX B2B\u2122.',
    features: [
      { text: 'Sess\u00e3o individual com an\u00e1lise estrat\u00e9gica' },
      { text: 'Relat\u00f3rio CORTEX B2B\u2122 personalizado' },
      { text: 'Plano de a\u00e7\u00e3o para 30 dias' },
    ],
    cta: 'Iniciar Diagn\u00f3stico',
    note: 'Funciona como cr\u00e9dito para o Projeto Estrat\u00e9gico.',
  },
  {
    id: 'projeto',
    name: 'Projeto Estrat\u00e9gico de Engenharia de Receita',
    subtitle: 'Sistema completo em 3 a 5 semanas',
    description:
      'Constru\u00e7\u00e3o completa do sistema de receita. Cinco sess\u00f5es individuais onde cada entrega \u00e9 um ativo estrat\u00e9gico. Mais acompanhamento nos 90 dias seguintes.',
    features: [
      { text: 'Posicionamento e narrativa de valor' },
      { text: 'Site estrat\u00e9gico de convers\u00e3o' },
      { text: 'Playbook comercial' },
      { text: 'Plano de comunica\u00e7\u00e3o 90 dias' },
      { text: 'Apresenta\u00e7\u00e3o comercial' },
      { text: 'Ferramentas estrat\u00e9gicas sob medida' },
      { text: 'Acompanhamento p\u00f3s-sprint (90 dias)' },
    ],
    cta: 'Come\u00e7ar Projeto',
    featured: true,
    note: 'Inclui participa\u00e7\u00e3o sobre receita nova gerada. Resultado desde a primeira sess\u00e3o.',
  },
  {
    id: 'advisor',
    name: 'Advisor de Receita',
    subtitle: 'Crescimento cont\u00ednuo p\u00f3s-projeto',
    description:
      'Quando o sistema come\u00e7a a gerar resultado, novas alavancas aparecem. O Advisor existe para identific\u00e1-las: recalibrar o posicionamento conforme o mercado responde, otimizar os ativos que j\u00e1 est\u00e3o rodando e garantir que cada ciclo de crescimento alimente o pr\u00f3ximo.',
    features: [
      { text: 'Sess\u00f5es estrat\u00e9gicas recorrentes' },
      { text: 'Revis\u00e3o e otimiza\u00e7\u00e3o de ativos' },
      { text: 'Monitoramento de m\u00e9tricas de receita' },
      { text: 'Identifica\u00e7\u00e3o de novas alavancas de crescimento' },
    ],
    cta: 'Conhecer o Advisor',
  },
]
