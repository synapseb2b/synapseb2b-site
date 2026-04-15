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
    name: 'Diagnóstico CORTEX B2B™',
    subtitle: 'Clareza em 30 dias',
    description:
      'Leitura completa do sistema de receita da sua empresa. Maturidade comercial, lacunas de captura, posicionamento e perfil de cliente ideal processados pelo CORTEX B2B™.',
    features: [
      { text: 'Sessão individual com análise estratégica' },
      { text: 'Relatório CORTEX B2B™ personalizado' },
      { text: 'Plano de ação para 30 dias' },
    ],
    cta: 'Iniciar Diagnóstico',
    note: 'Funciona como crédito para o Projeto Estratégico.',
  },
  {
    id: 'projeto',
    name: 'Projeto Estratégico de Engenharia de Receita',
    subtitle: 'Sistema completo em 3 a 5 semanas',
    description:
      'Construção completa do sistema de receita. Cinco sessões individuais onde cada entrega é um ativo estratégico. Mais acompanhamento nos 90 dias seguintes.',
    features: [
      { text: 'Posicionamento e narrativa de valor' },
      { text: 'Site estratégico de conversão' },
      { text: 'Playbook comercial' },
      { text: 'Plano de comunicação 90 dias' },
      { text: 'Apresentação comercial' },
      { text: 'Ferramentas estratégicas sob medida' },
      { text: 'Acompanhamento pós-sprint (90 dias)' },
    ],
    cta: 'Começar Projeto',
    featured: true,
    note: 'Inclui participação sobre receita nova gerada. Resultado desde a primeira sessão.',
  },
  {
    id: 'advisor',
    name: 'Advisor de Receita',
    subtitle: 'Crescimento contínuo pós-projeto',
    description:
      'Quando o sistema começa a gerar resultado, novas alavancas aparecem. O Advisor existe para identificá-las: recalibrar o posicionamento conforme o mercado responde, otimizar os ativos que já estão rodando e garantir que cada ciclo de crescimento alimente o próximo.',
    features: [
      { text: 'Sessões estratégicas recorrentes' },
      { text: 'Revisão e otimização de ativos' },
      { text: 'Monitoramento de métricas de receita' },
      { text: 'Identificação de novas alavancas de crescimento' },
    ],
    cta: 'Conhecer o Advisor',
  },
]
