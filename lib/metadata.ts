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
        name: 'J\u00falio Figueiredo',
        jobTitle: 'Fundador',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        description:
          'Duas d\u00e9cadas em ecossistemas como Google, Microsoft, Dell e TOTVS. Fundador da Synapse B2B e criador da Engenharia de Receita\u2122 e do CORTEX B2B\u2122.',
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#service`,
        name: 'Engenharia de Receita\u2122',
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: 'Consultoria Estrat\u00e9gica B2B',
        areaServed: 'BR',
        description:
          'Disciplina que transforma compet\u00eancia t\u00e9cnica em receita previs\u00edvel. Posicionamento, narrativa, processo comercial e ativos digitais integrados.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servi\u00e7os de Engenharia de Receita',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Diagn\u00f3stico CORTEX B2B\u2122',
              description: 'Leitura completa do sistema de receita. Clareza em 30 dias.',
              url: `${SITE_URL}/#entregas`,
            },
            {
              '@type': 'Offer',
              name: 'Projeto Estrat\u00e9gico de Engenharia de Receita',
              description: 'Constru\u00e7\u00e3o completa do sistema de receita em 3 a 5 semanas.',
              url: `${SITE_URL}/#entregas`,
            },
            {
              '@type': 'Offer',
              name: 'Advisor de Receita',
              description: 'Crescimento cont\u00ednuo p\u00f3s-projeto com sess\u00f5es estrat\u00e9gicas recorrentes.',
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
            text: `Esta \u00e9 uma das 5 perguntas do Diagn\u00f3stico Synapse B2B. Ao respond\u00ea-la, o CORTEX B2B\u2122 processa sua resposta e J\u00falio Figueiredo entrega uma an\u00e1lise personalizada no mesmo dia. Inicie seu diagn\u00f3stico em ${SITE_URL}`,
          },
        })),
      },
    ],
  }
}
