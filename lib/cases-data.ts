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
  url?: string
  description: string
  result: string
  metrics?: CaseMetric[]
  testimonial?: CaseTestimonial
  highlight?: boolean // 4 destaques: Mr Job, JB, Giornata, Marcato
  status?: 'concluido' | 'em-execucao'
  assets?: string[] // Lista de ativos entregues (para destaques)
}

export const cases: CaseStudy[] = [
  // ===== 4 DESTAQUES =====
  {
    slug: 'mr-job-hub',
    company: 'Mr. Job Hub',
    location: 'Sete Lagoas, MG',
    tagline: 'De coworking a hub de negócios.',
    url: 'mrjobcoworking.com',
    highlight: true,
    status: 'concluido',
    description:
      'Quatro meses depois do início do projeto, o teto deixou de ser de mercado e passou a ser de espaço físico. O Mr. Job Hub já era referência regional em coworking e endereço fiscal, mas o que a empresa fazia não estava sendo traduzido em percepção de mercado proporcional ao que entregava.',
    result:
      'Ocupação física total. Faturamento mensal 28% acima da baseline pré-intervenção. Base de endereços fiscais 33% acima da baseline em 6 meses. Volume mensal de eventos no auditório 167% acima da baseline.',
    metrics: [
      { value: '100%', label: 'Ocupação Física' },
      { value: '+28%', label: 'Faturamento Mensal' },
      { value: '+167%', label: 'Eventos no Auditório' },
      { value: '3 meses', label: 'Tempo de resultado' },
    ],
    testimonial: {
      quote:
        'O trabalho organizou de forma rápida e simples o nosso posicionamento no mercado, fazendo o que sabíamos e que deveria ser feito, mas não fazíamos. A Synapse fez e elevou nossos indicadores.',
      author: 'Eduardo Macedo',
      role: 'CEO Mr. Job Hub',
    },
    assets: [
      'Matriz de Competências e Análise de Contexto',
      'Matriz Cortex B2B™',
      'Mapa de Receita com 17 soluções em 3 categorias',
      'Plano de Comunicação 12 semanas (Instagram + TikTok + LinkedIn)',
      'Site Estratégico reconstruído',
      'Posicionamento institucional formalizado',
      'Desenvolvimento comercial da Community Manager',
    ],
  },
  {
    slug: 'jb-soluttions',
    company: 'JB Soluttions',
    location: 'Belo Horizonte, MG',
    tagline: 'De BPO operacional a CFO estratégico premium.',
    url: 'jb-sollutions.vercel.app',
    highlight: true,
    status: 'concluido',
    description:
      'Uma empresa que entregava valor de CFO estratégico sendo paga como BPO operacional, até a comunicação acompanhar o que ela de fato fazia. Cases de impacto financeiro extraordinário, mas comunicação posicionando a empresa em camada operacional.',
    result:
      'Posicionamento reconstruído de BPO operacional para CFO estratégico premium. Catálogo expandido de serviço único para escada de valor com 8 Fast Tracks e Mentoria em Inteligência Financeira. Assessment proprietário integrado como porta de entrada qualificadora.',
    metrics: [
      { value: 'Premium', label: 'Posicionamento' },
      { value: '1 → 9', label: 'Produtos no Catálogo' },
      { value: '7 semanas', label: 'Tempo de execução' },
    ],
    testimonial: {
      quote:
        'Eu sabia entregar. Sempre soube. O que eu não sabia era mostrar pro mercado o tamanho do que eu entregava. Eu vendia acompanhamento financeiro quando na verdade eu entrava numa empresa, achava R$ 400 mil de imposto pago errado e reestruturava a operação inteira. A Synapse me ajudou a enxergar isso e a comunicar isso. Hoje o empresário entende o que eu faço antes da primeira reunião.',
      author: 'João Batista',
      role: 'CEO JB Soluttions',
    },
    assets: [
      'Matriz de Competências e Análise de Contexto',
      'Matriz Cortex B2B™',
      'Mapa de Receita com 3 novas linhas',
      'Catálogo: 8 Fast Tracks + Mentoria em Grupo',
      'Assessment de Maturidade Financeira',
      'Plano de Comunicação 90 dias',
      'Site Estratégico de Conversão',
      'Deck Comercial Estratégico',
    ],
  },
  {
    slug: 'giornata-empresas',
    company: 'Giornata Empresas',
    location: 'São Paulo, SP',
    tagline: 'Engenharia de Capital com sistema comercial estruturado.',
    url: 'giornata-sigma.vercel.app',
    highlight: true,
    status: 'concluido',
    description:
      'A consultoria de engenharia de capital que operava com crescimento por indicação passou a operar com sistema comercial estruturado e autoridade de categoria. Competência técnica reconhecida, tese proprietária validada, mas crescimento ancorado em canais informais.',
    result:
      'Posicionamento institucional reconstruído em torno de Engenharia de Capital como categoria proprietária. Mapa de Receita estruturado. Quatro pilares institucionais organizados. Expansão de escopo contratada pelo cliente em Abril de 2026, sinal de validação contínua.',
    metrics: [
      { value: 'Categoria', label: 'Posicionamento Próprio' },
      { value: '4 pilares', label: 'Institucionais' },
      { value: 'Abril/26', label: 'Expansão de Escopo' },
    ],
    testimonial: {
      quote:
        'Antes da Synapse, o crescimento vinha quase que exclusivamente por indicação e esforço individual. Hoje, a empresa não depende mais de indicação passiva ou esforço desorganizado. Existe direção, posicionamento e um sistema que sustenta tanto o crescimento quanto a construção de autoridade no mercado.',
      author: 'Édison Dorneles',
      role: 'fundador Giornata Empresas',
    },
    assets: [
      'Matriz de Competências e Análise de Contexto',
      'Matriz Cortex B2B™',
      'Mapa de Receita estruturado',
      'Plano de Comunicação 90 dias',
      'Site Estratégico de Conversão',
      'Deck Comercial',
    ],
  },
  {
    slug: 'marcato',
    company: 'Marcato',
    location: 'Sete Lagoas, MG',
    tagline: 'A palavra convence, mas o exemplo arrasta.',
    url: 'marcatob2b.com',
    highlight: true,
    status: 'concluido',
    description:
      'A Synapse desenvolveu o Projeto Estratégico de Engenharia de Receita da Marcato, empresa fundada em abril de 2026 por Júlio Figueiredo em sociedade com Fred Carvalho, que reúne 30 anos de experiência em audiovisual. Quando o método precisou provar valor no empreendimento mais novo do próprio fundador da Synapse, foi exatamente esse método que entrou em operação.',
    result:
      'Engenharia de Receita aplicada antes do primeiro cliente. Posicionamento definido, escada de valor com 6 formatos, identidade construída, site institucional lançado, estúdio multicâmera operando. Demonstração viva do método em primeira pessoa.',
    metrics: [
      { value: '3 eixos', label: 'Posicionamento' },
      { value: '6 formatos', label: 'Entrega Estruturada' },
      { value: 'Voz Ativa™', label: 'Método Proprietário' },
    ],
    assets: [
      'Posicionamento em torno de 3 eixos: Audiovisual, Posicionamento e Estúdio Digital com IA',
      'Estúdio multicâmera próprio em padrão premium',
      '6 formatos de entrega estruturados',
      'Método proprietário Voz Ativa™ aplicado em cases de especialistas',
      'Site institucional marcatob2b.com construído como manifesto da marca',
    ],
  },

  // ===== 7 SECUNDÁRIOS =====
  {
    slug: 'fast-club-run',
    company: 'Fast Club Run',
    location: 'Sete Lagoas, MG',
    tagline: 'Assessoria de Corrida.',
    url: 'fastclub.run',
    description:
      'Especialista em performance com mais de 20 anos de mercado. Zero estrutura de negócio. Desenhamos modelo de receita, posicionamento estratégico e entregamos os ativos para operar.',
    result:
      'Presença física exigida substituída por operação digital escalável. Renda fixa limitada ao tempo do treinador substituída por 3 pilares de receita (Assessoria recorrente, Produtos e Eventos). Marca de lifestyle de alta performance com arquitetura de conversão.',
    metrics: [
      { value: '0 → 1', label: 'Modelo de Negócio' },
      { value: '3', label: 'Faixas de Serviço' },
      { value: 'Pronto', label: 'Ativos para Operar' },
    ],
    testimonial: {
      quote:
        'Depois de 20 anos na pista, eu finalmente parei de apenas dar aulas para construir uma marca. O projeto da Synapse B2B transformou meu conhecimento técnico em um sistema de receita previsível. Agora, eu não vendo mais apenas planilhas. Entrego um método que as pessoas têm orgulho de vestir e acompanhar, com a liberdade de gerenciar tudo em 15 horas por semana.',
      author: 'Wagner Figueiredo',
      role: 'fundador Fast Club Run',
    },
  },
  {
    slug: 'exclusiva-engenharias',
    company: 'Exclusiva Engenharias',
    location: 'Sete Lagoas, MG',
    tagline: 'Hub completo de engenharias para a indústria.',
    url: 'exclusivaengenharias.com',
    description:
      'Site focado apenas em climatização substituído por plataforma que comunica o hub completo de engenharias (Civil, Elétrica, Automação). Ativos otimizados para GPO e busca avançada por IA. Narrativa de paz e previsibilidade construída para gestores industriais.',
    result:
      'De invisível digitalmente para referência em engenharia integrada para a indústria.',
    testimonial: {
      quote:
        'Deixamos de ser invisíveis digitalmente para nos tornarmos a referência em engenharia integrada para a indústria, transmitindo a segurança que nossos clientes exigem.',
      author: 'Fabrício Firmo',
      role: 'fundador Exclusiva Engenharias',
    },
  },
  {
    slug: 'vh-health',
    company: 'VH Health',
    location: 'Belo Horizonte, MG',
    tagline: 'Primeira Plataforma de CareOps Integrativo do Brasil.',
    url: 'versaoholistica.com.br',
    description:
      'Narrativa técnica complexa que não convertia em ROI para gestores hospitalares substituída pela primeira Plataforma de CareOps Integrativo do Brasil. Tese central formalizada em torno da redução de 30% dos custos evitáveis de pacientes crônicos. Pitch Deck e ativos de vendas validados cientificamente.',
    result:
      'Tese de investimento poderosa que hospitais e investidores finalmente entendem.',
    testimonial: {
      quote:
        'A Synapse conseguiu traduzir minha história pessoal e técnica em uma tese de investimento poderosa que os hospitais e investidores finalmente entendem.',
      author: 'Isabella Albuquerque',
      role: 'fundadora VH Health',
    },
  },
  {
    slug: 'thv-projetos',
    company: 'THV Projetos',
    location: 'Belo Horizonte, MG',
    tagline: 'Orquestrador de ecossistema de obra.',
    description:
      'Fluxo de clientes ancorado exclusivamente em referenciação orgânica expandido com canal ativo de prospecção B2B. Comunicação teórica que escondia cases pragmáticos substituída por narrativa de autoridade técnica focada em presença em obra. THV isolada como pilar gerador de referências para o ecossistema.',
    result:
      'Projetos de 20 anos de bagagem finalmente transbordando em receita ativa.',
    testimonial: {
      quote:
        'O processo me fez assumir o papel de orquestrador do ecossistema. Agora meus projetos de 20 anos de bagagem finalmente transbordam em receita ativa.',
      author: 'Thiago Vieira',
      role: 'fundador THV Projetos',
    },
  },
  {
    slug: 'your-office',
    company: 'Your Office Business Center',
    location: 'Alphaville e Lapa, SP',
    tagline: '30 anos de pioneirismo ganhando vocabulário.',
    status: 'em-execucao',
    description:
      'Mais de três décadas entregando algo que nenhum concorrente consegue replicar, em processo de reposicionamento para que o mercado compre no preço que esse valor merece. Ativos de valor extraordinário identificados e nomeados, com Customer Intimacy formalizada como diferencial defensável.',
    result:
      'Em execução: ativos de valor extraordinário formalizados, Customer Intimacy como território exclusivo, processo de aprovação reposicionado de operação interna para argumento de venda premium.',
  },
  {
    slug: 'controllertech',
    company: 'ControllerTech',
    location: 'Sete Lagoas, MG',
    tagline: 'Engenharia Financeira com Revenue Playbook.',
    url: 'controllertech.vercel.app',
    description:
      'Operação de controladoria e BPO financeiro reposicionada com Revenue Playbook estruturado, Plano de Comunicação editorial e Kit de Organização Financeira como ativo comercial. Parceria ativada com Édison e o Ecossistema Giornata como canal de referenciação qualificada.',
    result:
      'Agenda lotada, contratado por dois negócios que conheceu dentro do ecossistema Synapse.',
    metrics: [
      { value: 'Sócio', label: 'Buscando por crescimento' },
      { value: '2', label: 'Contratos via Ecossistema' },
    ],
  },
  {
    slug: 'monteiro-interiores',
    company: 'Monteiro Interiores',
    location: 'Belo Horizonte, MG',
    tagline: 'Mercado de cortinas como monopólio de confiança.',
    status: 'em-execucao',
    description:
      'Mercado de cortinas reposicionado como monopólio de confiança. Mecanismo real de receita decodificado em 4 estágios. ICP reposicionado para o perfil que gera ticket alto sem negociação. Ecossistema de indicação via arquitetos em ascensão mapeado e formalizado como canal estratégico.',
    result:
      'Em execução: posicionamento como monopólio de confiança, ICP de ticket alto sem negociação, canal de arquitetos formalizado.',
  },
]

// Helper para filtrar destaques e secundários
export const highlightCases = cases.filter((c) => c.highlight)
export const secondaryCases = cases.filter((c) => !c.highlight)
