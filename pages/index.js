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
              src="/logo/logo_synapse_b2b_bg_transparent.png" 
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
            <source src="/video/video_home.mp4" type="video/mp4" />
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
              <h3>A Síndrome do "Quase Lá"</h3>
              <p>Estar sempre a um passo do crescimento exponencial, mas nunca conseguir dar esse salto definitivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Framework */}
      <section id="framework" className="section section-darker">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Framework GTM Ignition™</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Nossa metodologia proprietária que transforma empresas B2B de alta complexidade em máquinas de crescimento previsível.
            </p>
          </div>

          <div className="grid grid-2" style={{ marginTop: '4rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#64FFDA', marginBottom: '2rem' }}>4 Fases Integradas</h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#64FFDA',
                    color: '#0A192F',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    marginRight: '1rem'
                  }}>1</div>
                  <h4 style={{ margin: 0, color: '#F8F9FA' }}>Diagnóstico Estratégico</h4>
                </div>
                <p>Análise profunda do seu negócio, mercado e posicionamento atual.</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#64FFDA',
                    color: '#0A192F',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    marginRight: '1rem'
                  }}>2</div>
                  <h4 style={{ margin: 0, color: '#F8F9FA' }}>Decodificação de Mercado</h4>
                </div>
                <p>Construção de um posicionamento irrecusável e mensagem que ressoa.</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#64FFDA',
                    color: '#0A192F',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    marginRight: '1rem'
                  }}>3</div>
                  <h4 style={{ margin: 0, color: '#F8F9FA' }}>Engenharia de Receita</h4>
                </div>
                <p>Criação dos ativos e processos que aceleram a conversão.</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#64FFDA',
                    color: '#0A192F',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    marginRight: '1rem'
                  }}>4</div>
                  <h4 style={{ margin: 0, color: '#F8F9FA' }}>Aceleração Inteligente</h4>
                </div>
                <p>Otimização contínua baseada em dados e resultados mensuráveis.</p>
              </div>

              <Link href="/metodologia" className="btn btn-primary">
                Conheça a Metodologia Completa
              </Link>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Image 
                src="/image/Nos_somos_o-neurotransmissor.png" 
                alt="Framework GTM Ignition" 
                width={400} 
                height={300}
                style={{ borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Perguntas Frequentes</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Quanto tempo leva para ver resultados?</h3>
              <p>Nossos clientes começam a ver os primeiros insights em 2 semanas. Resultados mensuráveis aparecem entre 60-90 dias, dependendo da complexidade do negócio.</p>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Como vocês garantem que o framework funcionará para minha empresa?</h3>
              <p>Começamos sempre com um Diagnóstico Estratégico gratuito. Só prosseguimos se identificarmos um potencial real de crescimento e fit com nossa metodologia.</p>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Qual é o perfil ideal de empresa para o GTM Ignition™?</h3>
              <p>Empresas B2B com produtos de alta complexidade, ticket médio elevado e que já possuem product-market fit, mas enfrentam desafios de escala e previsibilidade.</p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <h3>Vocês trabalham apenas com empresas de tecnologia?</h3>
              <p>Não. Atendemos qualquer empresa B2B de alta complexidade: SaaS, manufatura avançada, serviços especializados, healthtech, fintech e outros setores.</p>
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

