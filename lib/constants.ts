export const SITE_URL = 'https://synapseb2b.com'
export const SITE_NAME = 'Synapse B2B'
export const SITE_DESCRIPTION =
  'Engenharia de Receita para empresas B2B. Entre o que sua empresa faz de verdade e o que o mercado consegue enxergar, existem oportunidades que ninguem organizou e conexoes que ninguem fez ainda. Encontramos as duas coisas.'

export const WHATSAPP_NUMBER = '553139586192'
export const GA_ID = 'G-Y1HMBX253J'

export const TRUST_CLIENTS = [
  'Mr. Job Hub',
  'JB Soluttions',
  'Giornata Empresas',
  'ControllerTech',
  'Fast Club Run',
  'THV Projetos',
  'Monteiro Interiores',
  'Your Office Business Center',
  'VH Health',
  'Exclusiva Engenharias',
  'Way Sistemas',
] as const

export const NAV_ITEMS = [
  { label: 'O que entregamos', href: '/entregas' },
  { label: 'CORTEX B2B', href: '/cortex-b2b' },
  { label: 'Resultados', href: '/cases' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
] as const

export const AUTHORITY_BRANDS = ['Google', 'Microsoft', 'Dell', 'TOTVS'] as const

export const BIG_NUMBERS = [
  { value: 100, suffix: '%', label: 'Ocupação Física' },
  { value: 28, prefix: '+', suffix: '%', label: 'Faturamento Mensal' },
  { value: 167, prefix: '+', suffix: '%', label: 'Eventos no Auditório' },
  { value: 3, suffix: ' meses', label: 'Para atingir esses resultados' },
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
