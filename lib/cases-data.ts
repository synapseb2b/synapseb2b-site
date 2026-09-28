export interface CaseMetric {
  value: string
  label: string
}

export interface CaseTestimonial {
  quote: string
  author: string
  role: string
}

export interface CaseStudy {
  slug: string
  company: string
  location: string
  tagline: string
  description: string
  result: string
  metrics?: CaseMetric[]
  testimonial?: CaseTestimonial
  highlight?: boolean
  actions: string[]
  resultLabel?: string
  context?: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'mr-job-hub',
    company: 'Mr. Job Hub',
    location: 'Sete Lagoas, MG',
    tagline: 'Mais oportunidades de receita em um mesmo negócio.',
    highlight: true,
    description: 'O coworking reunia salas, endereço fiscal, auditório e serviços com diferentes possibilidades de receita. O trabalho organizou esse portfólio, os perfis de compradores e a atuação comercial para aproveitar melhor a estrutura existente.',
    result: 'O acompanhamento registrou ocupação física de 100%, crescimento da base de endereços fiscais de 45 para aproximadamente 60 e aumento dos eventos no auditório, de 2–3 para 7–8 por mês.',
    resultLabel: 'Resultados registrados',
    context: 'Dados do acompanhamento até março de 2026. A evolução da base fiscal considera setembro de 2025 a março de 2026; os indicadores têm períodos de apuração distintos.',
    metrics: [
      { value: '100%', label: 'Ocupação física' },
      { value: '+33%', label: 'Base de endereços fiscais' },
      { value: '7–8', label: 'Eventos por mês' },
    ],
    testimonial: {
      quote: 'O trabalho organizou de forma rápida e simples o nosso posicionamento no mercado, fazendo o que sabíamos e que deveria ser feito, mas não fazíamos. A Synapse fez e elevou nossos indicadores.',
      author: 'Eduardo Macedo',
      role: 'CEO Mr. Job Hub',
    },
    actions: [
      'Mapeamento de 17 soluções e seus compradores',
      'Organização das oportunidades de receita por linha de negócio',
      'Definição de abordagens, etapas e indicadores comerciais',
      'Orientação da atuação comercial da equipe',
      'Identificação de possibilidades de expansão do negócio',
    ],
  },
  {
    slug: 'jb-soluttions',
    company: 'JB Soluttions',
    location: 'Belo Horizonte, MG',
    tagline: 'Da oferta de BPO a uma arquitetura de serviços financeiros.',
    highlight: true,
    description: 'A experiência em gestão financeira permitia atuar além da rotina de BPO. A SYNAPSE ajudou a organizar essa capacidade em ofertas de diferentes profundidades, com critérios para qualificar oportunidades e ampliar o relacionamento com os clientes.',
    result: 'Estruturação da atuação como CFO estratégico, de ofertas de entrada e de possibilidades de continuidade. O fundador passou a contar com um mapa de serviços e oportunidades para conduzir a evolução comercial.',
    resultLabel: 'Estrutura comercial organizada',
    actions: [
      'Leitura das competências e das oportunidades de receita',
      'Organização da escada de ofertas e das linhas de serviço',
      'Definição de critérios de qualificação comercial',
      'Mapa de receita para orientar as prioridades do fundador',
    ],
  },
  {
    slug: 'controllertech',
    company: 'ControllerTech',
    location: 'Sete Lagoas, MG',
    tagline: 'Ofertas e canais alinhados à capacidade da operação.',
    highlight: true,
    description: 'Uma operação de controladoria e BPO financeiro precisava desenvolver sua receita respeitando a capacidade de atendimento. O trabalho conectou perfil de cliente, evolução das ofertas e relacionamento com parceiros comerciais.',
    result: 'Organização de uma sequência de ofertas, do serviço de entrada ao BPO e à atuação como CFO, com critérios de qualificação e orientação para trabalhar o canal de parceiros.',
    resultLabel: 'Decisões comerciais estruturadas',
    actions: [
      'Análise da receita e da capacidade de atendimento',
      'Organização de ofertas de entrada e continuidade',
      'Definição dos clientes prioritários e critérios de qualificação',
      'Orientação comercial para o canal de parceiros',
    ],
  },
  {
    slug: 'your-office',
    company: 'Your Office Business Center',
    location: 'Alphaville e Lapa, SP',
    tagline: 'Uma leitura integrada das receitas de quatro unidades.',
    highlight: true,
    description: 'Com diferentes unidades e linhas de serviço, a Your Office precisava olhar para a composição da receita e para as oportunidades de expansão na própria operação. A análise reuniu unidades, carteira de clientes e fontes de faturamento.',
    result: 'Visão organizada da participação dos serviços na receita e das oportunidades por unidade. Essa leitura criou uma base para priorizar a atuação comercial e a expansão na carteira.',
    resultLabel: 'Base para a decisão do negócio',
    actions: [
      'Análise da composição de receita por unidade e serviço',
      'Leitura da carteira e das oportunidades de expansão',
      'Identificação de prioridades comerciais no portfólio',
      'Organização das informações para decisão da liderança',
    ],
  },
  {
    slug: 'thv-projetos',
    company: 'THV Projetos',
    location: 'Belo Horizonte, MG',
    tagline: 'Relacionamentos organizados como canais comerciais.',
    highlight: true,
    description: 'A atuação comercial dependia fortemente de indicações. A SYNAPSE trabalhou a organização das oportunidades, os critérios de qualificação e o papel dos parceiros na geração de novos negócios.',
    result: 'Direção comercial estruturada para abordar oportunidades e desenvolver parcerias no ecossistema de obras. O recorte B2B considera a atuação com empresas e parceiros profissionais.',
    resultLabel: 'Direção comercial definida',
    actions: [
      'Mapeamento das oportunidades e dos perfis de clientes',
      'Organização do canal de parceiros do ecossistema',
      'Critérios de qualificação das oportunidades',
      'Definição de prioridades e rotina comercial',
    ],
  },
  {
    slug: 'giornata-empresas',
    company: 'Giornata Empresas',
    location: 'São Paulo, SP',
    tagline: 'Direção comercial para uma consultoria de capital.',
    description: 'A consultoria reunia experiência técnica e relacionamentos, com a geração de oportunidades concentrada em indicações. O trabalho organizou a leitura das ofertas, do mercado e dos caminhos comerciais.',
    result: 'Mapa de receita estruturado para orientar prioridades, abordagem comercial e desenvolvimento de oportunidades.',
    resultLabel: 'Arquitetura organizada',
    actions: ['Mapeamento de ofertas e oportunidades', 'Organização das prioridades comerciais', 'Estruturação do mapa de receita'],
  },
  {
    slug: 'exclusiva-engenharias',
    company: 'Exclusiva Engenharias',
    location: 'Sete Lagoas, MG',
    tagline: 'Um portfólio mais amplo para atender a indústria.',
    description: 'A empresa possuía competências em diferentes especialidades de engenharia. O trabalho estratégico organizou a leitura desse portfólio e sua aplicação às necessidades de compradores industriais.',
    result: 'Direção comercial definida para a oferta integrada de serviços de engenharia à indústria.',
    resultLabel: 'Definição comercial',
    actions: ['Leitura das competências e do portfólio', 'Definição de compradores prioritários', 'Organização da oferta integrada para a indústria'],
  },
  {
    slug: 'vh-health',
    company: 'VH Health',
    location: 'Belo Horizonte, MG',
    tagline: 'Valor econômico e compradores definidos para uma solução de saúde.',
    description: 'Uma solução de cuidado integrativo precisava conectar sua capacidade técnica às prioridades de compradores institucionais. A atuação estratégica organizou os públicos, as aplicações e os argumentos econômicos da oferta.',
    result: 'Proposta de valor e caminhos de atuação comercial organizados para hospitais e empresas.',
    resultLabel: 'Direção de mercado',
    actions: ['Definição de públicos institucionais', 'Organização da proposta de valor econômico', 'Priorização de aplicações comerciais da solução'],
  },
]

export const highlightCases = cases.filter((c) => c.highlight)
export const secondaryCases = cases.filter((c) => !c.highlight)
