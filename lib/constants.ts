export const SITE_URL = 'https://synapseb2b.com'
export const SITE_NAME = 'Synapse B2B'
export const SITE_DESCRIPTION =
  'Engenharia de Receita para empresas B2B de alta complexidade. Posicionamento, narrativa, processo comercial e ativos digitais integrados.'

export const WHATSAPP_NUMBER = '553139586192'
export const GA_ID = 'G-Y1HMBX253J'

export const TRUST_CLIENTS = [
  'Mr. Job Hub',
  'Giornata Empresas',
  'JB Soluttions',
  'Controllertech',
  'Fast Club Run',
  'THV Projetos',
  'Monteiro Interiores',
  'VH Health',
  'Exclusiva Engenharias',
  'TOTTEC',
  'Way Sistemas',
] as const

export const NAV_ITEMS = [
  { label: 'Pilares', href: '#pilares' },
  { label: 'O que entregamos', href: '#entregas' },
  { label: 'CORTEX B2B', href: '#cortex' },
  { label: 'Cases', href: '/cases' },
  { label: 'Contato', href: '/contato' },
] as const

export const AUTHORITY_BRANDS = ['Google', 'Microsoft', 'Dell', 'TOTVS'] as const

export const BIG_NUMBERS = [
  { value: 100, suffix: '%', label: 'Ocupação Física' },
  { value: 28, prefix: '+', suffix: '%', label: 'Faturamento Mensal' },
  { value: 167, prefix: '+', suffix: '%', label: 'Eventos no Auditório' },
  { value: 3, suffix: ' meses', label: 'Para atingir esses resultados' },
] as const

export const DIAGNOSTIC_QUESTIONS = [
  'Se um cliente indicasse sua empresa para alguém, o que ele diria?',
  'Qual é a maior venda que você já fez e por que ela aconteceu?',
  'De onde vieram seus últimos 5 clientes?',
  'O que sua empresa faz e para quem?',
  'O que te trouxe até aqui?',
] as const

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
