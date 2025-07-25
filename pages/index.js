import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import SynapseAI from '../components/SynapseAI'

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Head>
        <title>Synapse B2B - Transformamos Expertise Técnica em Receita Previsível</title>
        <meta name="description" content="Somos a plataforma de aceleração que constrói o Go-to-Market para empresas B2B de alta complexidade, transformando superioridade técnica em domínio de mercado." />
      </Head>

      {/* Navegação */}
      <nav className="nav">
        <div className="nav-container">
          <Link href="/">
            <Image 
              src="/logo/symbol_logo_synapseb2b_bg_black.png" 
              alt="Synapse B2B" 
              width={150} 
              height={40}
              className="nav-logo"
            />
          </Link>
          <ul className="nav-menu">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/metodologia" className="nav-link">Metodologia</Link></li>
            <li><Link href="/casos-de-uso" className="nav-link">Casos de Uso</Link></li>
            <li><Link href="/contato" className="nav-link">Contato</Link></li>
          </ul>
        </div>
      </nav>

      {/* Seção Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Sua Expertise Técnica é Brilhante. Nós a Transformamos em Receita Previsível.</h1>
            <p>
              Somos a plataforma de aceleração que constrói o Go-to-Market para empresas B2B de alta complexidade, 
              transformando superioridade técnica em domínio de mercado.
            </p>
            <div className="hero-ctas">
              <button 
                onClick={() => scrollToSection('framework')}
                className="btn btn-primary"
              >
                Conheça o Framework GTM Ignition™
              </button>
              <Link href="/contato" className="btn btn-diagnostic">
                Agende um Diagnóstico Estratégico
              </Link>
            </div>
          </div>
        </div>
        
        {/* Vídeo de fundo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.1
        }}>
          <video 
            autoPlay 
            muted 
            loop 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src="/video/video_hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Seção Problema */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Onde o crescimento B2B de alta complexidade falha.</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Muitas empresas com produtos tecnicamente superiores não atingem seu potencial por ficarem presas em um destes três abismos:
            </p>
          </div>
          
          <div className="grid grid-3" style={{ marginTop: '4rem' }}>
            <div className="card">
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
                  <span style={{ color: '#64FFDA', fontSize: '1.5rem' }}>⚡</span>
                </div>
              </div>
              <h3>A Armadilha do "Melhor Produto"</h3>
              <p>Acreditar que a genialidade técnica, por si só, garantirá a vitória no mercado.</p>
            </div>

            <div className="card">
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
                  <span style={{ color: '#64FFDA', fontSize: '1.5rem' }}>🔧</span>
                </div>
              </div>
              <h3>O Funil Quebrado</h3>
              <p>Gerar leads que não convertem e ter um Custo de Aquisição (CAC) que inviabiliza a escala.</p>
            </div>

            <div className="card">
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
                  <span style={{ color: '#64FFDA', fontSize: '1.5rem' }}>📊</span>
                </div>
              </div>
              <h3>A Venda sem Narrativa</h3>
              <p>Dificuldade em traduzir funcionalidades complexas em uma proposta de valor irrecusável para o C-Level.</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Seção Framework */}
      <section id="framework" className="section section-darker">
        <div className="container">
          <div className="text-center mb-2">
            <h2>O Framework GTM Ignition™</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Nosso sistema operacional proprietário para construir e escalar sua máquina de receita de forma previsível e inteligente.
            </p>
          </div>

          <div className="grid grid-2" style={{ marginTop: '4rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#64FFDA', marginBottom: '2rem' }}>Passo 1: Decodificação de Mercado</h3>
              <p>Decodificamos o DNA do seu cliente ideal e o cenário competitivo para construir um posicionamento irrecusável e uma proposta de valor que cria urgência.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image 
                src="/image/Decodificacao_de_Mercado.png" 
                alt="Decodificação de Mercado" 
                width={400} 
                height={300}
                style={{ borderRadius: '12px' }}
              />
            </div>
          </div>

          <div className="grid grid-2" style={{ marginTop: '4rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <Image 
                src="/image/Engenharia_de_Receita_e_Ativos_Digitais.png" 
                alt="Engenharia de Receita e Ativos Digitais" 
                width={400} 
                height={300}
                style={{ borderRadius: '12px' }}
              />
            </div>
            <div>
              <h3 style={{ color: '#64FFDA', marginBottom: '2rem' }}>Passo 2: Engenharia de Receita e Ativos Digitais</h3>
              <p>Construímos sua máquina de GTM com uma narrativa poderosa e os ativos de aceleração essenciais — de Pitch Decks estratégicos a Plataformas Digitais, Landing Pages de alta conversão e Aplicativos que potencializam seu processo de vendas.</p>
            </div>
          </div>

          <div className="grid grid-2" style={{ marginTop: '4rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#64FFDA', marginBottom: '2rem' }}>Passo 3: Aceleração Inteligente</h3>
              <p>Ativamos um sistema de otimização contínua, usando dados para refinar a estratégia e garantir que seu crescimento não apenas aconteça, mas acelere de forma sustentável.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image 
                src="/image/Aceleracao_Inteligente.png" 
                alt="Aceleração Inteligente" 
                width={400} 
                height={300}
                style={{ borderRadius: '12px' }}
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/metodologia" className="btn btn-primary">
              Saiba mais sobre nossa metodologia
            </Link>
          </div>
        </div>
      </section>

      
      {/* Seção FAQ */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Perguntas Frequentes (FAQ)</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Pergunta 1: Vocês são uma agência de marketing ou uma consultoria?</h3>
              <p>Resposta: Nenhum dos dois. Agências executam táticas. Consultorias entregam relatórios. A Synapse B2B atua como uma plataforma de aceleração. Nós decodificamos sua estratégia (o trabalho intelectual da consultoria) e construímos os ativos e motores de receita para executá-la (a engenharia que uma agência tradicional não faz de forma integrada).</p>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Pergunta 2: Meu negócio é extremamente técnico e de nicho. Como podem ajudar?</h3>
              <p>Resposta: Essa é exatamente a nossa especialidade. Não precisamos ser especialistas no seu produto; somos especialistas em traduzir sua genialidade técnica em valor de negócio. Nossa função de "neurotransmissor" é conectar sua solução complexa às dores e aos KPIs do seu cliente C-Level, criando uma proposta de valor que gera receita.</p>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Pergunta 3: Qual o perfil de empresa ideal para a Synapse B2B?</h3>
              <p>Resposta: Trabalhamos com empresas B2B de alta complexidade que atingiram um platô de crescimento ou que precisam de um GTM estruturado para escalar. Isso inclui SaaS Scale-Ups, Deep Techs, e consultorias de alta especialização que entendem que um produto brilhante, por si só, não garante o domínio do mercado.</p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <h3>Pergunta 4: Em quanto tempo posso esperar resultados?</h3>
              <p>Resposta: Go-to-Market não é um evento, é um sistema. Nos primeiros 60 dias, nosso foco é na construção de ativos de tração imediata (como o Sales One-Pager e o pitch) para capitalizar sobre oportunidades atuais. A aceleração sustentável é uma consequência da implementação contínua do framework, com melhorias mensuráveis nas métricas de eficiência (CAC, ciclo de vendas) a cada trimestre.</p>
            </div>
          </div>

          <div className="text-center mt-2">
            <Link href="/contato" className="btn btn-primary">
              Tire Suas Dúvidas Conosco
            </Link>
          </div>
        </div>
      </section>

      {/* Componente de IA */}
      <SynapseAI />
    </>
  )
}



      {/* Seção Solução */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Nós somos o neurotransmissor do crescimento B2B.</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              A Synapse B2B atua como um laboratório de estratégia que decodifica a complexidade técnica em ativos de receita, conectando seu produto ao único resultado que importa: o sucesso do seu cliente.
            </p>
          </div>
        </div>
      </section>




      {/* Seção CTA Final */}
      <section className="section section-darker">
        <div className="container text-center">
          <h2>Pronto para construir seu próximo nível de crescimento?</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
            Vamos transformar sua complexidade em sua maior vantagem competitiva.
          </p>
          <Link href="/contato" className="btn btn-primary">
            Fale com um Estrategista
          </Link>
        </div>
      </section>


