import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './constants'
import { FAQ_ITEMS } from './faq-data'
import { cases } from './cases-data'

/**
 * Structured data JSON-LD para SEO + AEO + GEO.
 *
 * SEO: Organization, WebSite, WebPage, BreadcrumbList
 * AEO (Answer Engine Optimization): FAQPage com perguntas/respostas que IAs
 *   citam diretamente no Google AI Overview, ChatGPT, Perplexity.
 * GEO (Generative Engine Optimization): Person com sameAs (autoridade), Service
 *   com OfferCatalog detalhado (entidade nomeada que IAs referenciam).
 */
export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: 'Synapse B2B',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/image/logo-synapse.png`,
          width: 512,
          height: 512,
        },
        description: SITE_DESCRIPTION,
        slogan: 'Engenharia de Receita™. Direto ao ponto. Clareza que gera receita.',
        foundingDate: '2025-07-01',
        founder: { '@id': `${SITE_URL}/#person` },
        knowsAbout: [
          'Engenharia de Receita',
          'Posicionamento Estratégico B2B',
          'Arquitetura Comercial',
          'Tradução de Valor',
          'Mapa de Receita',
          'CORTEX B2B',
          'Andragogia Aplicada',
          'Challenger Sale',
          'Behavioral Economics',
          'Value-Based Selling',
        ],
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
        sameAs: [
          'https://www.linkedin.com/company/synapse-b2b',
          'https://www.instagram.com/synapseb2b/',
        ],
      },

      // Website
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'pt-BR',
      },

      // WebPage (home)
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${SITE_NAME} | Engenharia de Receita`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/og-image.jpg`,
        },
        description: SITE_DESCRIPTION,
        inLanguage: 'pt-BR',
      },

      // Person — fundador (autoridade GEO)
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Júlio Figueiredo',
        givenName: 'Júlio',
        familyName: 'Figueiredo',
        jobTitle: 'Fundador e CRO',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        description:
          'Duas décadas em ecossistemas B2B globais (Google, Microsoft, Dell, TOTVS). Em agosto de 2023, co-liderou 25 executivos C-Level das maiores empresas do Brasil na sede do Google em Nova York. Em 2025, fundou a Synapse B2B e criou a Engenharia de Receita™ e o CORTEX B2B™. Em 2026, fundou a Marcato em sociedade com Fred Carvalho.',
        knowsAbout: [
          'Engenharia de Receita',
          'Challenger Sale',
          'Andragogia Aplicada',
          'Arquitetura Comercial B2B',
          'CORTEX B2B',
          'Posicionamento Estratégico',
        ],
        alumniOf: [
          { '@type': 'Organization', name: 'Google' },
          { '@type': 'Organization', name: 'Microsoft' },
          { '@type': 'Organization', name: 'Dell' },
          { '@type': 'Organization', name: 'TOTVS' },
        ],
        sameAs: [
          'https://www.linkedin.com/in/juliofigueiredo',
        ],
      },

      // ProfessionalService com OfferCatalog completo
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#service`,
        name: 'Engenharia de Receita™',
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: 'Consultoria Estratégica B2B',
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
        description:
          'Disciplina proprietária que organiza posicionamento, comunicação e arquitetura comercial para que a receita deixe de depender de improviso. Operada com o motor cognitivo CORTEX B2B™ que processa cada decisão sob 5 lentes simultâneas: Fundador, Neurociência, Receita, Comprador e Crescimento.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Serviços Synapse B2B',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Diagnóstico CORTEX B2B™',
              description:
                'Em 30 dias sua empresa entende com precisão onde está deixando receita na mesa. Assessment + Sessão individual de 49 minutos + Relatório CORTEX personalizado + Plano de ação para 30 dias.',
              url: `${SITE_URL}/entregas#diagnostico`,
              category: 'Diagnóstico',
            },
            {
              '@type': 'Offer',
              name: 'Projeto Estratégico de Engenharia de Receita',
              description:
                'Em 35 dias sua empresa passa a operar com arquitetura comercial completa. 5 sessões individuais + 6 ativos estratégicos + 3 sessões de acompanhamento em 90 dias.',
              url: `${SITE_URL}/entregas#projeto`,
              category: 'Projeto Estratégico',
            },
            {
              '@type': 'Offer',
              name: 'Advisor Estratégico',
              description:
                'Sparring estratégico contínuo pós-projeto. Pacote mensal de horas de consultoria com apoio na execução do Mapa de Receita e calibragem da cadência das ações.',
              url: `${SITE_URL}/entregas#advisor`,
              category: 'Consultoria Continuada',
            },
          ],
        },
      },

      // FAQPage — AEO crítico para featured snippets e AI overviews
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },

      // Cases as CreativeWork (autoridade GEO)
      ...cases
        .filter((c) => c.highlight)
        .map((c) => ({
          '@type': 'CreativeWork',
          '@id': `${SITE_URL}/cases#${c.slug}`,
          name: `Case ${c.company} | ${c.tagline}`,
          about: c.company,
          locationCreated: c.location,
          publisher: { '@id': `${SITE_URL}/#organization` },
          description: c.description,
          abstract: c.result,
        })),
    ],
  }
}
