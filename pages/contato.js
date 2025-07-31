import { Target, BarChart, Search, ClipboardCheck, TrendingUp, Zap, Wrench, Ban } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Expertise Técnica em Receita Previsível | Synapse B2B</title>
        <meta name="description" content="Somos a plataforma de aceleração que constrói o Go-to-Market para empresas B2B de alta complexidade, transformando superioridade técnica em domínio de mercado." />
      </Head>
 
      {/* Seção Hero (MANTIDA IGUAL) */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Seu Produto é Genial. Sua Receita Também?</h1>
            <p>
              Somos uma plataforma de aceleração de negócios B2B de Alta Complexidade, fundada sobre 20 anos de experiência em transformar visão estratégica em receita real e previsível.
            </p>
            <div className="hero-ctas" style={{ marginBottom: '2rem' }}>
              <button 
                onClick={() => scrollToSection('framework')}
                className="btn btn-primary"
              >
                Conheça o Framework GTM Ignition™
              </button>
              <Link href="/contato" className="btn btn-diagnostic">
                Agendar Diagnóstico Direto
              </Link>
            </div>
          </div>
        </div>
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.2,
          background: 'linear-gradient(135deg, #000000 0%, #0A192F 100%)'
        }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Seção: Nossa Plataforma (FUNDO CLARO) */}
      <section className="section bg-white">
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-slate-900">
            Nossa Plataforma
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-teal-600">
            Do Diagnóstico ao Domínio de Mercado
          </h3>
          <div className="max-w-3xl mx-auto text-lg text-slate-600 space-y-6" style={{ marginTop: '4rem' }}>
            <p>
              Somos uma <strong>Plataforma de Aceleração de Negócios B2B</strong> que conecta sua solução complexa às dores e aos KPIs do seu cliente C-Level, criando uma proposta de valor que gera receita.
            </p>
            <p>
              Nosso foco são empresas B2B de alta complexidade que atingiram um platô de crescimento ou que precisam de um GTM (Go-to-Market) estruturado para construir e/ou escalar sua máquina de receita.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 2: Abordagem (FUNDO CLARO) */}
      <section className="section bg-slate-50">
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Nossa Abordagem</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-teal-600">A Construção da Fundação Estratégica</h3>
          
          <div className="grid grid-3" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {/* Container 1 */}
            <div className="card bg-white p-8 border border-slate-200">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-teal-200/50">
                <Search className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Diagnóstico Profundo</h3>
              <p className="text-slate-600 text-base m-0">Análise estruturada do seu negócio, mercado e posicionamento para identificar as alavancas de crescimento.</p>
            </div>
            
            {/* Container 2 */}
            <div className="card bg-white p-8 border border-slate-200">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-teal-200/50">
                <ClipboardCheck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Posicionamento<br />Irrecusável</h3>
              <p className="text-slate-600 text-base m-0">Construção de uma mensagem que ressoa com seu mercado-alvo, diferenciando você da concorrência.</p>
            </div>
            
            {/* Container 3 */}
            <div className="card bg-white p-8 border border-slate-200">
              <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-teal-200/50">
                <TrendingUp className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Engenharia de Receita</h3>
              <p className="text-slate-600 text-base m-0">Criação dos ativos e processos que aceleram a conversão e tornam o crescimento previsível.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 3: Modelos de Atuação (FUNDO CLARO) */}
      <section className="section bg-white">
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-teal-600">Nossos Modelos de Atuação</h2>
          
          <div className="grid grid-2 gap-6" style={{ marginTop: '4rem' }}>
            {/* Container 1 */}
            <div className="card h-full p-8 bg-slate-50 border border-slate-200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto border border-slate-200">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ativação de Estratégia Go-to-Market</h3>
              <p className="text-slate-600 text-base mb-0">Desenvolvemos e implementamos seu plano de entrada ou escala no mercado de ponta a ponta.</p>
            </div>

            {/* Container 2 */}
            <div className="card h-full p-8 bg-slate-50 border border-slate-200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto border border-slate-200">
                <BarChart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">CRO as a Service</h3>
              <p className="text-slate-600 text-base mb-0">Atuamos como sua diretoria de receita interina ou fracionada, desenhando e executando sua máquina de vendas completa.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção Problema (FUNDO CLARO) */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-slate-900">Onde o crescimento B2B de alta complexidade falha.</h2>
            <p className="text-lg text-slate-600" style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
              Muitas empresas com produtos tecnicamente superiores não atingem seu potencial por ficarem presas em um destes três abismos:
            </p>
          </div>
          
          <div className="grid grid-3" style={{ marginTop: '4rem' }}>
            <div className="card bg-white p-8 border border-slate-200">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <span style={{ color: '#0F766E', fontSize: '1.5rem' }}>⚡</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">A Armadilha do "Melhor Produto"</h3>
              <p className="text-slate-600">Sua equipe vende features. Seu cliente C-Level compra impacto no resultado. Nós traduzimos sua genialidade técnica para a linguagem da receita.</p>
            </div>

            <div className="card bg-white p-8 border border-slate-200">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <span style={{ color: '#0F766E', fontSize: '1.5rem' }}>🔧</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">O Funil Quebrado</h3>
              <p className="text-slate-600">Você atrai curiosos, mas não compradores. Seu CAC está nas alturas e o pipeline, vazio. Nós reconstruímos seu motor de aquisição com foco cirúrgico no cliente ideal.</p>
            </div>

            <div className="card bg-white p-8 border border-slate-200">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <span style={{ color: '#0F766E', fontSize: '1.5rem' }}>⛔</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">A Síndrome do "Quase Lá"</h3>
              <p className="text-slate-600">Você sente o potencial, mas os resultados não decolam. Nós instalamos o sistema que transforma potencial em crescimento previsível e escalável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Solução (FUNDO CLARO) */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Nós somos o neurotransmissor do crescimento B2B.</h2>
            <p className="text-lg text-slate-600" style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
              A Synapse B2B atua como um laboratório de estratégia que decodifica a complexidade técnica em ativos de receita, conectando seu produto ao único resultado que importa: o sucesso do seu cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Framework (FUNDO CLARO) */}
      <section id="framework" className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-slate-900">Framework GTM Ignition™</h2>
            <p className="text-lg text-slate-600" style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
              Nossa metodologia proprietária que transforma empresas B2B de alta complexidade em máquinas de crescimento previsível.
            </p>
          </div>
          
          <div className="grid grid-2" style={{ marginTop: '4rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#0F766E', marginBottom: '3rem', fontSize: '1.5rem', fontWeight: 'bold' }}>4 Fases Integradas</h3>

              {/* Fases */}
              <div className="space-y-10">
                <div>
                  <h4 style={{ color: '#0F766E', fontFamily: 'monospace', fontSize: '1rem', marginBottom: '0.5rem' }}>FASE 01</h4>
                  <h3 style={{ margin: 0, color: '#1E293B', marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Diagnóstico Estratégico</h3>
                  <p style={{ margin: 0, color: '#475569' }}>Análise profunda e estruturada do seu negócio, mercado e posicionamento atual para identificar as alavancas de crescimento mais promissoras.</p>
                </div>
                <div>
                  <h4 style={{ color: '#0F766E', fontFamily: 'monospace', fontSize: '1rem', marginBottom: '0.5rem' }}>FASE 02</h4>
                  <h3 style={{ margin: 0, color: '#1E293B', marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Decodificação de Mercado</h3>
                  <p style={{ margin: 0, color: '#475569' }}>Decodificamos o DNA do seu cliente ideal e o cenário competitivo para construir um posicionamento irrecusável e uma proposta de valor que cria urgência.</p>
                </div>
                <div>
                  <h4 style={{ color: '#0F766E', fontFamily: 'monospace', fontSize: '1rem', marginBottom: '0.5rem' }}>FASE 03</h4>
                  <h3 style={{ margin: 0, color: '#1E293B', marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Engenharia de Receita e Ativos Digitais</h3>
                  <p style={{ margin: 0, color: '#475569' }}>Construímos sua máquina de GTM com uma narrativa poderosa e os ativos de aceleração essenciais — de Pitch Decks estratégicos a Plataformas Digitais.</p>
                </div>
                <div>
                  <h4 style={{ color: '#0F766E', fontFamily: 'monospace', fontSize: '1rem', marginBottom: '0.5rem' }}>FASE 04</h4>
                  <h3 style={{ margin: 0, color: '#1E293B', marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Aceleração Inteligente</h3>
                  <p style={{ margin: 0, color: '#475569' }}>Ativamos um sistema de otimização contínua, usando dados para refinar a estratégia e garantir que seu crescimento não apenas aconteça, mas acelere.</p>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <Link href="/metodologia" className="btn btn-primary">
                  Saiba mais sobre nossa metodologia
                </Link>
              </div>
            </div>

            <div style={{
              position: 'relative',
              width: '100%',
              minHeight: '400px',
              height: '100%'
            }}>
              <Image 
                src="/image/Framework_GTM_SynapsebB2B.png" 
                alt="Framework GTM Ignition" 
                fill
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção FAQ (FUNDO CLARO) */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="space-y-4">
              <div className="card bg-slate-50 border border-slate-200 p-6" style={{ textAlign: 'left' }}>
                <h3 className="text-lg font-bold text-slate-900">Vocês são uma agência de marketing ou uma consultoria?</h3>
                <p className="text-slate-600 mt-2">Nenhum dos dois. Agências executam táticas. Consultorias entregam relatórios. A Synapse B2B atua como uma plataforma de aceleração. Nós decodificamos sua estratégia (o trabalho intelectual da consultoria) e construímos os ativos e motores de receita para executá-la (a engenharia que uma agência tradicional não faz de forma integrada).</p>
              </div>
              <div className="card bg-slate-50 border border-slate-200 p-6" style={{ textAlign: 'left' }}>
                <h3 className="text-lg font-bold text-slate-900">Meu negócio é extremamente técnico e de nicho. Como podem ajudar?</h3>
                <p className="text-slate-600 mt-2">Essa é exatamente a nossa especialidade. Não precisamos ser especialistas no seu produto; somos especialistas em traduzir sua genialidade técnica em valor de negócio. Nossa função de "neurotransmissor" é conectar sua solução complexa às dores e aos KPIs do seu cliente C-Level, criando uma proposta de valor que gera receita.</p>
              </div>
              <div className="card bg-slate-50 border border-slate-200 p-6" style={{ textAlign: 'left' }}>
                <h3 className="text-lg font-bold text-slate-900">Qual é o perfil ideal de empresa para a Synapse B2B?</h3>
                <p className="text-slate-600 mt-2">Trabalhamos com empresas B2B de alta complexidade que atingiram um platô de crescimento ou que precisam de um GTM estruturado para escalar. Isso inclui SaaS Scale-Ups, Deep Techs, e consultorias de alta especialização que entendem que um produto brilhante, por si só, não garante o domínio do mercado.</p>
              </div>
              <div className="card bg-slate-50 border border-slate-200 p-6" style={{ textAlign: 'left' }}>
                <h3 className="text-lg font-bold text-slate-900">Quanto tempo leva para ver resultados?</h3>
                <p className="text-slate-600 mt-2">Nossos clientes começam a ver os primeiros insights em 2 semanas. Resultados mensuráveis aparecem entre 60-90 dias, dependendo da complexidade do negócio.</p>
              </div>
              <div className="card bg-slate-50 border border-slate-200 p-6" style={{ textAlign: 'left' }}>
                <h3 className="text-lg font-bold text-slate-900">Como vocês garantem que o framework funcionará para minha empresa?</h3>
                <p className="text-slate-600 mt-2">Começamos sempre com um Diagnóstico Estratégico gratuito. Só prosseguimos se identificarmos um potencial real de crescimento e fit com nossa metodologia.</p>
              </div>
              <div className="card bg-slate-50 border border-slate-200 p-6" style={{ textAlign: 'left' }}>

                <h3 className="text-lg font-bold text-slate-900">Vocês trabalham apenas com empresas de tecnologia?</h3>
                <p className="text-slate-600 mt-2">Não. Atendemos qualquer empresa B2B de alta complexidade: SaaS, manufatura avançada, serviços especializados, healthtech, fintech e outros setores.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contato" className="btn btn-primary">
              Agendar para Esclarecer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}