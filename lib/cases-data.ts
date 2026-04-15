export interface CaseMetric {
  value: string
  label: string
}

export interface CaseStudy {
  slug: string
  company: string
  tagline: string
  url: string
  description: string
  result: string
  metrics: CaseMetric[]
}

export const cases: CaseStudy[] = [
  {
    slug: 'mr-job-hub',
    company: 'Mr. Job Hub',
    tagline: 'De coworking a Hub de Negócios e Bem-Estar Corporativo',
    url: 'mrjobcoworking.com',
    description:
      'A vocação era premium, mas o mercado via commodity. Vendiam metro quadrado quando tinham empresas crescendo mais de 100% ao ano dentro de um complexo próprio de 4.000 m². Valências desconectadas, tendências ignoradas, demanda apontando para um lugar que ninguém estava olhando. Cruzamos tudo e direcionamos o crescimento.',
    result:
      '100% de ocupação. +28% de faturamento. +167% em eventos. Principais datas do Auditório reservadas nos próximos 5 meses. E uma profissional que em pouco mais de 2 meses viu o medo de ser secretária para sempre se tornar uma promoção para Community Manager com escopo de trabalho otimizado e potencial extraordinário.',
    metrics: [
      { value: '100%', label: 'Ocupação Física' },
      { value: '+28%', label: 'Faturamento Mensal' },
      { value: '+167%', label: 'Eventos no Auditório' },
      { value: '3 meses', label: 'Tempo de resultado' },
    ],
  },
  {
    slug: 'jb-soluttions',
    company: 'JB Soluttions',
    tagline: 'CFO Estratégico',
    url: 'jb-sollutions.vercel.app',
    description:
      'Décadas de entregas financeiras concretas, mas empacotadas como serviço genérico. Clientes já tratavam o João como CFO Estratégico. A comunicação e o posicionamento, não. Mapeamos competências, cruzamos com tendências do mercado financeiro-estratégico e redesenhamos a posição ampliando o espectro, com clareza total de onde está o valor e como comunicar.',
    result:
      'Posicionamento premium, visão clara do próprio potencial e um sistema comercial que funciona com ou sem ele na sala.',
    metrics: [
      { value: 'Premium', label: 'Posicionamento' },
      { value: 'Completo', label: 'Sistema Comercial' },
      { value: '5 semanas', label: 'Do zero ao sistema completo' },
    ],
  },
  {
    slug: 'controllertech',
    company: 'ControllerTech',
    tagline: 'Engenharia Financeira',
    url: 'controllertech.vercel.app',
    description:
      'Competência altíssima dispersa em projetos que drenavam mais energia do que construíam reputação. Criamos um filtro que separou o que constrói autoridade do que só ocupa agenda e conectamos o Ciro com oportunidades que ele não havia mapeado.',
    result:
      'Agenda lotada, buscando sócio dado o crescimento que se solidifica. Contratado por dois negócios que conheceu dentro do ecossistema Synapse.',
    metrics: [
      { value: 'Sócio', label: 'Buscando por crescimento' },
      { value: '2', label: 'Contratos via Ecossistema' },
    ],
  },
  {
    slug: 'fast-club-run',
    company: 'Fast Club Run',
    tagline: 'Assessoria de Corrida',
    url: 'fastclub.run',
    description:
      'Especialista em performance com mais de 20 anos de mercado. Zero estrutura de negócio. Desenhamos modelo de receita, posicionamento estratégico e entregamos os ativos para operar.',
    result:
      'Do zero para uma operação com marca, presença digital, três faixas de serviço e funil de conversão pronto.',
    metrics: [
      { value: '0 → 1', label: 'Modelo de Negócio' },
      { value: '3', label: 'Faixas de Serviço' },
      { value: 'Pronto', label: 'Ativos para Operar' },
    ],
  },
]
