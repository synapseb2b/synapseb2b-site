export const SITE_URL = 'https://synapseb2b.com'
export const SITE_NAME = 'Synapse B2B'
export const SITE_DESCRIPTION =
  'Arquitetura de Receita e Advisor de Receita para fundadores B2B. Organize ofertas, oportunidades e prioridades comerciais com acompanhamento direto de Júlio Figueiredo.'

export const WHATSAPP_NUMBER = '553139586192'
export const GA_ID = 'G-Y1HMBX253J'

export const TRUST_CLIENTS = [
  'Mr. Job Hub',
  'JB Soluttions',
  'Giornata Empresas',
  'ControllerTech',
  'THV Projetos',
  'Monteiro Interiores',
  'Your Office Business Center',
  'VH Health',
  'Exclusiva Engenharias',
  'Way Sistemas',
] as const

export const NAV_ITEMS = [
  { label: 'Como trabalhamos', href: '/entregas' },
  { label: 'CORTEX B2B', href: '/cortex-b2b' },
  { label: 'Resultados', href: '/cases' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
] as const

export const AUTHORITY_BRANDS = ['Google', 'Microsoft', 'Dell', 'TOTVS'] as const

export const BIG_NUMBERS = [
  { value: 100, suffix: '%', label: 'Ocupação Física' },
  { value: 33, prefix: '+', suffix: '%', label: 'Base de endereços fiscais' },
  { value: 7, suffix: '–8', label: 'Eventos mensais no auditório' },
] as const

// Diagnostic v6 - 3 perguntas conversacionais
export const DIAGNOSTIC_QUESTIONS = [
  'O que a sua empresa faz e qual o faturamento mensal aproximado?',
  'Hoje, como os seus clientes chegam até você?',
  'O que te trouxe aqui hoje?',
] as const

export const FATURAMENTO_OPTIONS = [
  'Abaixo de R$ 30.000',
  'R$ 30.000 a R$ 50.000',
  'R$ 50.000 a R$ 150.000',
  'R$ 150.000 a R$ 300.000',
  'Acima de R$ 300.000',
] as const

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const SESSION_WHATSAPP_URL = getWhatsAppUrl(
  'Olá, Júlio. Quero agendar uma Sessão de Decodificação de 21 minutos para conversar sobre a receita da minha empresa B2B.'
)
