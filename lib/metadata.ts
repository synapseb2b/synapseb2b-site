import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './constants'
import { services } from './services-data'
import { cases } from './cases-data'

export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/image/logo-synapse.png`,
        description: SITE_DESCRIPTION,
        slogan: 'Arquitetura e acompanhamento estratégico de receita para negócios B2B.',
        founder: { '@id': `${SITE_URL}/#person` },
        knowsAbout: ['Arquitetura de Receita', 'Advisor de Receita', 'Estratégia comercial B2B', 'CORTEX B2B'],
        areaServed: { '@type': 'Country', name: 'Brasil' },
        sameAs: ['https://www.linkedin.com/company/synapse-b2b', 'https://www.instagram.com/synapseb2b/'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Júlio Figueiredo',
        jobTitle: 'Fundador e Advisor de Receita',
        worksFor: { '@id': `${SITE_URL}/#organization` },
        description: 'Fundador da SYNAPSE B2B, com duas décadas de experiência comercial em negócios B2B e atuação nos ecossistemas Google, Microsoft, Dell e TOTVS.',
        sameAs: ['https://www.linkedin.com/in/juliofigueiredo'],
      },
      ...services.map((service) => ({
        '@type': 'Service',
        '@id': `${SITE_URL}/entregas#${service.id}`,
        name: service.name,
        serviceType: service.name,
        description: `${service.description} ${service.outcome}`,
        url: `${SITE_URL}/entregas#${service.id}`,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'Brasil' },
      })),
      ...cases.filter((caseStudy) => caseStudy.highlight).map((caseStudy) => ({
        '@type': 'CreativeWork',
        '@id': `${SITE_URL}/cases#${caseStudy.slug}`,
        name: `Case ${caseStudy.company}: ${caseStudy.tagline}`,
        description: caseStudy.description,
        abstract: caseStudy.result,
        publisher: { '@id': `${SITE_URL}/#organization` },
        url: `${SITE_URL}/cases#${caseStudy.slug}`,
      })),
    ],
  }
}
