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
    tagline: 'De coworking a Hub de Neg\u00f3cios e Bem-Estar Corporativo',
    url: 'mrjobcoworking.com',
    description:
      'A voca\u00e7\u00e3o era premium, mas o mercado via commodity. Vendiam metro quadrado quando tinham empresas crescendo mais de 100% ao ano dentro de um complexo pr\u00f3prio de 4.000 m\u00B2. Val\u00eancias desconectadas, tend\u00eancias ignoradas, demanda apontando para um lugar que ningu\u00e9m estava olhando. Cruzamos tudo e direcionamos o crescimento.',
    result:
      '100% de ocupa\u00e7\u00e3o. +28% de faturamento. +167% em eventos. Principais datas do Audit\u00f3rio reservadas nos pr\u00f3ximos 5 meses. E uma profissional que em pouco mais de 2 meses viu o medo de ser secret\u00e1ria para sempre se tornar uma promo\u00e7\u00e3o para Community Manager com escopo de trabalho otimizado e potencial extraordin\u00e1rio.',
    metrics: [
      { value: '100%', label: 'Ocupa\u00e7\u00e3o F\u00edsica' },
      { value: '+28%', label: 'Faturamento Mensal' },
      { value: '+167%', label: 'Eventos no Audit\u00f3rio' },
      { value: '3 meses', label: 'Tempo de resultado' },
    ],
  },
  {
    slug: 'jb-soluttions',
    company: 'JB Soluttions',
    tagline: 'CFO Estrat\u00e9gico',
    url: 'jb-sollutions.vercel.app',
    description:
      'D\u00e9cadas de entregas financeiras concretas, mas empacotadas como servi\u00e7o gen\u00e9rico. Clientes j\u00e1 tratavam o Jo\u00e3o como CFO Estrat\u00e9gico. A comunica\u00e7\u00e3o e o posicionamento, n\u00e3o. Mapeamos compet\u00eancias, cruzamos com tend\u00eancias do mercado financeiro-estrat\u00e9gico e redesenhamos a posi\u00e7\u00e3o ampliando o espectro, com clareza total de onde est\u00e1 o valor e como comunicar.',
    result:
      'Posicionamento premium, vis\u00e3o clara do pr\u00f3prio potencial e um sistema comercial que funciona com ou sem ele na sala.',
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
      'Compet\u00eancia alt\u00edssima dispersa em projetos que drenavam mais energia do que constru\u00edam reputa\u00e7\u00e3o. Criamos um filtro que separou o que constr\u00f3i autoridade do que s\u00f3 ocupa agenda e conectamos o Ciro com oportunidades que ele n\u00e3o havia mapeado.',
    result:
      'Agenda lotada, buscando s\u00f3cio dado o crescimento que se solidifica. Contratado por dois neg\u00f3cios que conheceu dentro do ecossistema Synapse.',
    metrics: [
      { value: 'S\u00f3cio', label: 'Buscando por crescimento' },
      { value: '2', label: 'Contratos via Ecossistema' },
    ],
  },
  {
    slug: 'fast-club-run',
    company: 'Fast Club Run',
    tagline: 'Assessoria de Corrida',
    url: 'fastclub.run',
    description:
      'Especialista em performance com mais de 20 anos de mercado. Zero estrutura de neg\u00f3cio. Desenhamos modelo de receita, posicionamento estrat\u00e9gico e entregamos os ativos para operar.',
    result:
      'Do zero para uma opera\u00e7\u00e3o com marca, presen\u00e7a digital, tr\u00eas faixas de servi\u00e7o e funil de convers\u00e3o pronto.',
    metrics: [
      { value: '0 \u2192 1', label: 'Modelo de Neg\u00f3cio' },
      { value: '3', label: 'Faixas de Servi\u00e7o' },
      { value: 'Pronto', label: 'Ativos para Operar' },
    ],
  },
]
