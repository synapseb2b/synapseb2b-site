import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, DIAGNOSTIC_QUESTIONS } from './constants'

export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/image/SYNAPSE_B2B_LOGO_BLUE.webp`,
        },
        description: SITE_DESCRIPTION,
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${SITE_NAME} | Engenharia de Receita`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        description: SITE_DESCRIPTION,
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Júlio Figueiredo',
        jobTitle: 'Fundador',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        description:
          'Duas décadas em ecossistemas como Google, Microsoft, Dell e TOTVS. Fundador da Synapse B2B e criador da Engenharia de Receita™ e do CORTEX B2B™.',
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#service`,
        name: 'Engenharia de Receita™',
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: 'Consultoria Estratégica B2B',
        areaServed: 'BR',
        description:
          'Disciplina que transforma competência técnica em receita previsível. Posicionamento, narrativa, processo comercial e ativos digitais integrados.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Serviços de Engenharia de Receita',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Diagnóstico CORTEX B2B™',
              description: 'Leitura completa do sistema de receita. Clareza em 30 dias.',
              url: `${SITE_URL}/#entregas`,
            },
            {
              '@type': 'Offer',
              name: 'Projeto Estratégico de Engenharia de Receita',
              description: 'Construção completa do sistema de receita em 3 a 5 semanas.',
              url: `${SITE_URL}/#entregas`,
            },
            {
              '@type': 'Offer',
              name: 'Advisor de Receita',
              description: 'Crescimento contínuo pós-projeto com sessões estratégicas recorrentes.',
              url: `${SITE_URL}/#entregas`,
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: DIAGNOSTIC_QUESTIONS.map((q) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Esta é uma das 5 perguntas do Diagnóstico Synapse B2B. Ao respondê-la, o CORTEX B2B™ processa sua resposta e Júlio Figueiredo entrega uma análise personalizada no mesmo dia. Inicie seu diagnóstico em ${SITE_URL}`,
          },
        })),
      },
    ],
  }
}
