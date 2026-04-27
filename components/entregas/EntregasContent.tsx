'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Compass,
  ClipboardList,
  Map,
  Megaphone,
  Globe,
  Presentation as PresentationIcon,
  type LucideIcon,
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { SynapseBackground } from '@/components/ui/SynapseBackground'
import { LiveBadge } from '@/components/ui/LiveBadge'
import { cn } from '@/lib/utils'

interface AssetItem {
  icon: LucideIcon
  title: string
  description: string
}

const PROJECT_ASSETS: AssetItem[] = [
  {
    icon: ClipboardList,
    title: 'Matriz de Competências + Análise de Contexto e Tendência de Mercado',
    description:
      'As competências técnicas, estratégicas e relacionais da empresa cruzadas com o movimento real do mercado. Fundador e time passam a saber com precisão quais competências o mercado está disposto a reconhecer e remunerar.',
  },
  {
    icon: Compass,
    title: 'Matriz de Engenharia de Receita Cortex B2B™',
    description:
      'A operação comercial traduzida em sistema analisável, organizada em 6 módulos estratégicos. A arquitetura de receita fica visível em um só lugar, com gargalos nomeados e alavancas identificadas.',
  },
  {
    icon: Map,
    title: 'Mapa de Receita',
    description:
      'A representação visual do sistema comercial da empresa, com fontes atuais, potenciais ainda não capturadas, fluxos e alavancas de expansão. A intuição sobre onde está o dinheiro escondido vira mapa com coordenadas.',
  },
  {
    icon: Megaphone,
    title: 'Plano de Comunicação 90 dias',
    description:
      'Posicionamento definitivo, narrativa de valor calibrada e arsenal de conteúdos planejado para os próximos 3 meses em LinkedIn e Instagram. O time executa em autonomia.',
  },
  {
    icon: Globe,
    title: 'Site Estratégico de Conversão',
    description:
      'Plataforma de presença digital construída para comunicar ativos intangíveis que nenhum concorrente replica, qualificar prospects estrategicamente antes da primeira reunião e converter visitas em conversas que começam onde antes terminavam. Mais que site: ativo estratégico que opera 24/7 como vendedor silencioso da arquitetura de receita.',
  },
  {
    icon: PresentationIcon,
    title: 'Deck Comercial',
    description:
      'Narrativa comercial estruturada, com argumentação central, provas que sustentam essa argumentação e ordem calibrada de temas para reuniões de alto valor.',
  },
]

interface ProductSection {
  id: string
  badge: string
  number: string
  name: string
  subtitle: string
  description: string
  features: { text: string; badge?: string }[]
  cta: string
  ctaHref: string
  note?: string
  featured?: boolean
}

const PRODUCTS: ProductSection[] = [
  {
    id: 'diagnostico',
    badge: 'Em 30 dias',
    number: '01',
    name: 'Diagnóstico CORTEX B2B™',
    subtitle: 'Em 30 dias sua empresa entende com precisão onde está deixando receita na mesa.',
    description:
      'Um Assessment estratégico estruturado, uma sessão individual de 49 minutos de devolutiva e o Relatório Cortex personalizado com a leitura integral da arquitetura de receita atual. Mais um plano de ação para os próximos 30 dias que pode ser executado com ou sem a continuidade da Synapse.',
    features: [
      { text: 'Assessment Cortex B2B™ pré-sessão' },
      { text: 'Sessão individual de 49 minutos' },
      { text: 'Relatório Cortex B2B™ personalizado' },
      { text: 'Plano de ação para 30 dias' },
    ],
    cta: 'Iniciar Diagnóstico',
    ctaHref: '/#diagnostico',
    note: 'Valor convertido em crédito integral no Projeto Estratégico se houver continuidade em até 30 dias.',
  },
  {
    id: 'projeto',
    badge: 'Em 35 dias',
    number: '02',
    name: 'Projeto Estratégico de Engenharia de Receita',
    subtitle: 'Em 35 dias sua empresa passa a operar com arquitetura comercial completa.',
    description:
      'Construção integral da arquitetura comercial em 5 sessões individuais e 6 ativos estratégicos entregues, com acompanhamento nos 90 dias seguintes para calibrar o sistema enquanto o mercado responde.',
    features: [
      { text: '5 sessões individuais de 49 minutos' },
      { text: '5 devolutivas construídas pelo Cortex B2B™' },
      { text: '3 sessões de acompanhamento em 90 dias' },
      { text: 'Variante: Engenharia de Receita para Ecossistemas (múltiplas linhas de receita)' },
    ],
    cta: 'Começar Projeto',
    ctaHref: '/#diagnostico',
    note: 'Pode incluir Skin in the Game (variável atrelada à receita nova gerada).',
    featured: true,
  },
  {
    id: 'advisor',
    badge: 'Sparring contínuo',
    number: '03',
    name: 'Advisor Estratégico',
    subtitle: 'Sparring estratégico contínuo para sustentar o sistema em operação.',
    description:
      'O terceiro tempo da Engenharia de Receita. Sustenta o método em operação enquanto o mercado responde ao novo posicionamento. Para clientes que concluíram o Projeto e querem continuidade estendida.',
    features: [
      { text: 'Pacote mensal de horas de consultoria sparring' },
      { text: 'Apoio direto na execução do Mapa de Receita' },
      { text: 'Calibragem de cadência das ações do Plano de Comunicação' },
      { text: 'Sessões sob demanda para decisões importantes do mês' },
      { text: 'Acesso ao Cortex B2B™ para consultas direcionadas', badge: 'em breve' },
      { text: 'Revisão de ativos comerciais quando aplicável' },
    ],
    cta: 'Conhecer o Advisor',
    ctaHref: '/#diagnostico',
  },
]

export function EntregasContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <SynapseBackground particleCount={30} connectionDistance={170} opacity={0.1} speed={0.2} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-6xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <LiveBadge>O que entregamos</LiveBadge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-8 max-w-7xl"
            >
              O que fica nas mãos do{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-300 to-primary">
                cliente.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/65 leading-relaxed max-w-4xl"
            >
              Três formas de contratar. Três profundidades de transformação. Um único método.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <div className="space-y-16 md:space-y-24 pb-24 md:pb-32">
        {PRODUCTS.map((product) => (
          <ProductBlock key={product.id} product={product} />
        ))}
      </div>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.06] overflow-hidden">
        <SynapseBackground particleCount={20} connectionDistance={150} opacity={0.08} speed={0.2} />
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Não sabe por onde começar?
              <br />
              <span className="text-primary">Comece pelo Diagnóstico.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Em 30 dias sua empresa entende com precisão onde está deixando receita na mesa. E o
              valor investido vira crédito integral no Projeto Estratégico.
            </p>
            <Link
              href="/#diagnostico"
              className="group inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-8 pr-2 py-2 rounded-full font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(74,144,217,0.3)] hover:-translate-y-1"
            >
              Iniciar Diagnóstico CORTEX B2B™
              <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function ProductBlock({ product }: { product: ProductSection }) {
  return (
    <section
      id={product.id}
      className={cn(
        'relative scroll-mt-32',
        product.featured && 'bg-primary/[0.02]'
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16"
        >
          {/* Left - heading + intro */}
          <div className="lg:col-span-5">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
              <span className="text-primary/80 text-3xl md:text-4xl font-bold font-heading tracking-tight">
                {product.number}
              </span>
              <span className="px-3 py-1 rounded-full border border-primary/30 text-primary text-[10px] font-bold tracking-widest uppercase">
                {product.badge}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              {product.name}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-primary text-base md:text-lg font-medium mb-6 leading-snug"
            >
              {product.subtitle}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-white/60 text-base leading-relaxed mb-8"
            >
              {product.description}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href={product.ctaHref}
                className={cn(
                  'group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1',
                  product.featured
                    ? 'bg-primary hover:bg-primary-hover text-white shadow-[0_0_30px_rgba(74,144,217,0.3)]'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1]'
                )}
              >
                {product.cta}
                <span
                  className={cn(
                    'w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform',
                    product.featured ? 'bg-white/20' : 'bg-white/[0.08]'
                  )}
                >
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>

            {product.note && (
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-white/35 text-xs leading-relaxed italic"
              >
                {product.note}
              </motion.p>
            )}
          </div>

          {/* Right - features list */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeInUp}
              className={cn(
                'rounded-[2rem] p-8 md:p-10 border',
                product.featured
                  ? 'border-primary/20 bg-primary/[0.04]'
                  : 'border-white/[0.06] bg-white/[0.02]'
              )}
            >
              <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
                O que está incluso
              </p>
              <ul className="space-y-4">
                {product.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-4">
                    <div
                      className={cn(
                        'w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                        product.featured
                          ? 'bg-primary text-white'
                          : 'bg-primary/10 text-primary'
                      )}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-white/75 text-base leading-relaxed flex-1">
                      {f.text}
                      {f.badge && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider align-middle">
                          {f.badge}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Show 6 assets only inside the Projeto Estratégico */}
              {product.id === 'projeto' && (
                <div className="mt-10 pt-8 border-t border-white/[0.08]">
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
                    6 ativos estratégicos entregues
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {PROJECT_ASSETS.map((asset) => {
                      const Icon = asset.icon
                      return (
                        <div
                          key={asset.title}
                          className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/30 transition-colors duration-300"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-semibold leading-snug mb-1">
                              {asset.title}
                            </p>
                            <p className="text-white/50 text-xs leading-relaxed">
                              {asset.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
