import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  
  // Variantes de animação para entrada suave (ritmo Nava)
  // Mantendo a suavidade sem exageros para preservar a elegância
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Head>
        <title>Synapse B2B | Engenharia de Receita</title>
        <meta name="description" content="Engenharia de Receita para B2B. Traduzimos competência técnica em sistema comercial que converte." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl"
            >
              <motion.span variants={fadeIn} className="block text-xs md:text-sm font-mono tracking-widest text-gray-400 mb-6 uppercase">
                Engenharia de Receita —
              </motion.span>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
                Engenharia <br className="hidden md:block" />
                De Receita <br className="hidden md:block" />
                Para B2B.
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                Seu mercado não compra o que não entende. <br className="hidden md:block" />
                Traduzimos competência técnica em sistema comercial que converte.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato" className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-sm font-semibold tracking-wide hover:bg-gray-200 transition-all">
                  FAZER DIAGNÓSTICO GRATUITO
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/cases" className="group flex items-center justify-center gap-3 border border-white/20 px-8 py-4 text-sm font-semibold tracking-wide hover:bg-white/5 transition-all">
                  VER CASES
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ==================== 2. TRUST BAR ==================== */}
        <section className="py-16 px-6 border-b border-white/10 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            {/* Bloco 1: Repertório Big Tech */}
            <div className="mb-10">
              <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">
                Experiência de 20+ anos nos maiores ecossistemas B2B:
              </p>
              <div className="flex flex-wrap gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Usando texto estilizado como placeholder para logos, garantindo alinhamento visual */}
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight">Google</span>
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight">Microsoft</span>
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight">Dell</span>
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight">TOTVS</span>
              </div>
            </div>

            {/* Separador Visual */}
            <div className="h-px w-full bg-white/5 my-8"></div>

            {/* Bloco 2: Clientes Atuais */}
            <div>
              <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">
                Quem confia na nossa Engenharia de Receita:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-sm text-gray-400 font-medium">
                <span className="hover:text-white transition-colors">Giornata</span>
                <span className="hover:text-white transition-colors">Mr. Job</span>
                <span className="hover:text-white transition-colors">ControllerTech</span>
                <span className="hover:text-white transition-colors">Way Sistemas</span>
                <span className="hover:text-white transition-colors">Skippers</span>
                <span className="hover:text-white transition-colors">Exclusiva Eng.</span>
                <span className="hover:text-white transition-colors">VH Health</span>
                <span className="hover:text-white transition-colors">TOTTEC</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 3. THE PROBLEM ==================== */}
        <section className="py-24 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8">
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
                O Diagnóstico —
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-none max-w-2xl">
                O Problema <br />
                Não é Esforço. <br />
                É Arquitetura.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "01. Valor Invisível",
                  desc: "Seu produto é superior, mas o mercado não percebe. Cada venda exige um esforço enorme porque você explica a técnica, mas o cliente só quer saber do resultado."
                },
                {
                  title: "02. Receita Imprevisível",
                  desc: "Você não sabe de onde vem o próximo contrato. O pipeline depende de indicações, sorte e do 'timing' do cliente. Você não controla seu crescimento."
                },
                {
                  title: "03. Dependência de Heróis",
                  desc: "As vendas só fecham quando você ou aquele vendedor experiente entram na sala. O conhecimento está na cabeça das pessoas, não no processo. Isso não escala."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-8 border border-white/5 hover:border-indigo-500/30 transition-colors group">
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-indigo-500 pl-6 py-2">
              <p className="text-xl md:text-2xl text-white font-medium italic">
                "A diferença entre estagnação e escala é substituir o talento individual pelo método."
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 4. THE METHOD ==================== */}
        <section className="py-24 px-6 border-b border-white/10 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8">
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
                A Estrutura —
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-none max-w-xl">
                Do Caos <br />
                Ao Método.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                {
                  title: "1. Clareza de Valor",
                  text: "Seu cliente não compra o que é confuso. Traduzimos seu 'tecniquês' para a língua de quem assina o cheque. Deixamos claro que contratar você não é um custo, mas a decisão financeira mais inteligente."
                },
                {
                  title: "2. Arquitetura Comercial",
                  text: "Saber exatamente para quem vender (ICP) e como vender. Transformamos a arte de vender em um processo passo a passo que qualquer vendedor treinado consegue executar."
                },
                {
                  title: "3. Governança de Execução",
                  text: "Estratégia no papel não gera nota fiscal. Garantimos que o processo seja seguido no dia a dia para que a meta seja batida todo mês, sem surpresas."
                },
                {
                  title: "4. Ativos que Convertem",
                  text: "Ferramentas digitais que educam o cliente antes da reunião. Seu vendedor não perde tempo explicando o básico; ele entra na call para fechar negócio."
                }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 5. SERVICES ==================== */}
        <section className="py-24 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
             <div className="mb-16">
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase block mb-4">
                Como Atuamos —
              </span>
            </div>

            {/* Layout de 3 Colunas: Entrada / Core / Premium */}
            <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-t border-b border-white/10">
              
              {/* Coluna 1: Entrada */}
              <div className="py-12 lg:pr-12 lg:py-12">
                <h3 className="text-3xl font-bold mb-2">Diagnóstico <br />& Direção.</h3>
                <p className="text-sm text-gray-500 mb-8 font-mono">Para descobrir por que a venda está travada.</p>
                <ul className="space-y-6 mb-10">
                  <li className="block">
                    <strong className="text-white block mb-1">Diagnóstico Cortex Express</strong>
                    <span className="text-sm text-gray-400">Ferramenta online rápida. O sistema aponta onde está o gargalo (leads, processo ou fechamento).</span>
                  </li>
                  <li className="block">
                    <strong className="text-white block mb-1">Diagnóstico Cortex Completo</strong>
                    <span className="text-sm text-gray-400">Diagnóstico + Reunião estratégica individual para desenhar o plano de correção.</span>
                  </li>
                </ul>
                <Link href="/contato" className="inline-flex items-center text-indigo-400 text-sm font-bold hover:text-white transition-colors">
                  COMEÇAR DIAGNÓSTICO <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Coluna 2: Core */}
              <div className="py-12 lg:px-12 lg:py-12">
                <h3 className="text-3xl font-bold mb-2">Construção <br />Do Sistema.</h3>
                <p className="text-sm text-gray-500 mb-8 font-mono">Para colocar a máquina de vendas de pé.</p>
                <ul className="space-y-6 mb-10">
                  <li className="block">
                    <strong className="text-white block mb-1">Sprint de Engenharia de Receita</strong>
                    <span className="text-sm text-gray-400">Consultoria prática para definir ICP, discurso e processo comercial.</span>
                  </li>
                  <li className="block">
                    <strong className="text-white block mb-1">Ativos de Conversão</strong>
                    <span className="text-sm text-gray-400">Sites e calculadoras que funcionam como "vendedores 24h", qualificando o cliente.</span>
                  </li>
                </ul>
                <Link href="/ativos-de-performance" className="inline-flex items-center text-indigo-400 text-sm font-bold hover:text-white transition-colors">
                  CONHECER SPRINT & ATIVOS <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Coluna 3: Premium */}
              <div className="py-12 lg:pl-12 lg:py-12">
                <h3 className="text-3xl font-bold mb-2">Execução <br />Contínua.</h3>
                <p className="text-sm text-gray-500 mb-8 font-mono">Para quem quer terceirizar a inteligência.</p>
                <ul className="space-y-6 mb-10">
                  <li className="block">
                    <strong className="text-white block mb-1">CRO as a Service</strong>
                    <span className="text-sm text-gray-400">Ciclo de 90 dias onde construímos o motor de vendas. Entregamos rodando.</span>
                  </li>
                  <li className="block">
                    <strong className="text-white block mb-1">Advisory</strong>
                    <span className="text-sm text-gray-400">Acompanhamento mensal para garantir que a meta seja batida.</span>
                  </li>
                </ul>
                <Link href="/contato" className="inline-flex items-center text-indigo-400 text-sm font-bold hover:text-white transition-colors">
                  FALAR SOBRE EXECUÇÃO <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== 6. CASES ==================== */}
        <section className="py-24 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase block mb-4">
                Track Record —
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-none mb-8">
                Da Complexidade <br />
                À Tração.
              </h2>
              <Link href="/cases" className="hidden md:inline-flex items-center text-sm font-bold border-b border-white pb-1 hover:text-indigo-400 hover:border-indigo-400 transition-colors">
                VER TODOS OS CASES
              </Link>
            </div>

            <div className="md:w-2/3 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Mr. Job —</h3>
                <p className="text-indigo-400 text-sm font-mono mb-4">De commodity a Hub de Crescimento.</p>
                <p className="text-gray-400 leading-relaxed">
                  Reposicionamento completo. Deixou de vender "espaço físico" para vender "crescimento empresarial". Resultado: valor percebido multiplicou.
                </p>
              </div>
              <div className="h-px bg-white/10 w-full"></div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Exclusiva Engenharias —</h3>
                <p className="text-indigo-400 text-sm font-mono mb-4">Fim da dependência de indicações.</p>
                <p className="text-gray-400 leading-relaxed">
                  Empresa consolidada que triplicou o pipeline. Documentamos o processo comercial e a empresa parou de depender apenas da rede de contatos dos sócios.
                </p>
              </div>
              
              <div className="md:hidden pt-8">
                <Link href="/cases" className="inline-flex items-center text-sm font-bold border-b border-white pb-1">
                  VER TODOS OS CASES
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 7. WHY US ==================== */}
        <section className="py-24 px-6 border-b border-white/10 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
             <span className="text-xs font-mono tracking-widest text-gray-500 uppercase block mb-8 text-center md:text-left">
                Por que Synapse —
              </span>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold leading-none mb-6">
                  Não Somos <br />
                  Agência.
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Não somos consultoria que entrega um PDF e vai embora. Somos engenharia. Identificamos o erro, construímos a solução e entregamos a máquina rodando.
                </p>
              </div>

              <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="mt-1"><Check className="text-indigo-500 w-5 h-5" /></div>
                   <div>
                     <h4 className="font-bold text-white">Repertório Big Tech</h4>
                     <p className="text-sm text-gray-400 mt-1">20 anos de processos de Google, Microsoft e Dell, simplificados para a sua realidade.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1"><Zap className="text-indigo-500 w-5 h-5" /></div>
                   <div>
                     <h4 className="font-bold text-white">Tecnologia Própria</h4>
                     <p className="text-sm text-gray-400 mt-1">Diagnóstico via <strong>Cortex B2B™</strong> — uma ferramenta que acha os 7 pontos onde você está perdendo dinheiro na venda.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="mt-1"><BarChart3 className="text-indigo-500 w-5 h-5" /></div>
                   <div>
                     <h4 className="font-bold text-white">Execução Real</h4>
                     <p className="text-sm text-gray-400 mt-1">O trabalho só termina quando você tem o resultado na mão: a narrativa, o playbook e a ferramenta funcionando.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 8. FOOTER CTA ==================== */}
        <section className="py-32 px-6 bg-indigo-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Você Tem o Produto. <br />
              Falta o Sistema.
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Se a operação comercial é o gargalo, a conversa começa aqui.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <Link href="/contato" className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 text-lg font-bold tracking-wide transition-all shadow-lg shadow-indigo-900/50 rounded-sm">
                FAZER DIAGNÓSTICO GRATUITO
              </Link>
              <p className="text-xs text-gray-500 mt-4 uppercase tracking-wider">
                Diagnóstico rápido que mostra onde está travando. Sem compromisso.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}