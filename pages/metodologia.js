import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Metodologia() {
  return (
    <>
      <Head>
        <title>Metodologia - Framework GTM Ignition™ | Synapse B2B</title>
        <meta name="description" content="Conheça em detalhes nossa metodologia proprietária que transforma empresas B2B de alta complexidade em máquinas de crescimento previsível." />
      </Head>

      {/* Hero da Metodologia */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Framework GTM Ignition™</h1>
            <p>
              Nossa metodologia proprietária que transforma empresas B2B de alta complexidade 
              em máquinas de crescimento previsível através de 4 fases integradas.
            </p>
            <div className="hero-ctas">
              <Link href="/contato" className="btn btn-primary">
                Agende uma Consulta Estratégica
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

      {/* Fase 1: Diagnóstico Estratégico */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#64FFDA',
                  color: '#0A192F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  marginRight: '1rem'
                }}>1</div>
                <h2 style={{ margin: 0 }}>Diagnóstico Estratégico</h2>
              </div>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Análise profunda e estruturada do seu negócio, mercado e posicionamento atual 
                para identificar as alavancas de crescimento mais promissoras.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#64FFDA' }}>O que analisamos:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Posicionamento atual vs. concorrência
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Jornada do cliente e pontos de fricção
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Métricas de performance e benchmarks
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Capacidades internas e gaps
                  </li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA', marginBottom: '1rem' }}>Entregável:</h4>
                <p style={{ margin: 0 }}>
                  Relatório estratégico com roadmap de crescimento personalizado e identificação 
                  das 3 principais oportunidades de aceleração.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', height: '100%' }}>
              <Image 
                src="/image/Diagnostico_Estrategico.png" 
                alt="Diagnóstico Estratégico" 
                fill
                style={{ borderRadius: '12px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fase 2: Decodificação de Mercado */}
      <section className="section section-darker">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', height: '100%' }}>
              <Image 
                src="/image/Decodificacao_de_Mercado.png" 
                alt="Decodificação de Mercado" 
                fill
                style={{ borderRadius: '12px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#64FFDA',
                  color: '#0A192F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  marginRight: '1rem'
                }}>2</div>
                <h2 style={{ margin: 0 }}>Decodificação de Mercado</h2>
              </div>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Construção de um posicionamento irrecusável e mensagem que ressoa profundamente 
                com seu mercado-alvo, diferenciando você da concorrência.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#64FFDA' }}>Como fazemos:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Mapeamento detalhado do ICP (Ideal Customer Profile) e RCP Real Customer Profile
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Análise de jobs-to-be-done e pain points
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Desenvolvimento de value proposition única
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Criação de messaging framework
                  </li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA', marginBottom: '1rem' }}>Entregável:</h4>
                <p style={{ margin: 0 }}>
                  Playbook de posicionamento com mensagens testadas e validadas, 
                  personas detalhadas e estratégia de diferenciação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fase 3: Engenharia de Receita */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#64FFDA',
                  color: '#0A192F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  marginRight: '1rem'
                }}>3</div>
                <h2 style={{ margin: 0 }}>Engenharia de Receita e Ativos Digitais</h2>
              </div>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Criação dos ativos, processos e sistemas que aceleram a conversão 
                e tornam o crescimento previsível e escalável.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#64FFDA' }}>Ativos que criamos:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Sales enablement materials (ferramentas, conteúdos, processos e treinamentos)
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Criação de Plataformas Digitais (Sites, Landing Pages) e Aplicativos que potencializam processos de vendas
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Conteúdo de demonstração de valor
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Processos de qualificação e scoring
                  </li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA', marginBottom: '1rem' }}>Entregável:</h4>
                <p style={{ margin: 0 }}>
                  Kit completo de aceleração com todos os ativos implementados 
                  e equipe treinada para execução.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', height: '100%' }}>
              <Image 
                src="/image/Engenharia_de_Receita.png" 
                alt="Engenharia de Receita" 
                fill
                style={{ borderRadius: '12px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fase 4: Aceleração Inteligente */}
      <section className="section section-darker">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', height: '100%' }}>
              <Image 
                src="/image/Aceleracao_Inteligente.png" 
                alt="Aceleração Inteligente" 
                fill
                style={{ borderRadius: '12px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#64FFDA',
                  color: '#0A192F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  marginRight: '1rem'
                }}>4</div>
                <h2 style={{ margin: 0 }}>Aceleração Inteligente</h2>
              </div>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Otimização contínua baseada em dados e resultados mensuráveis, 
                garantindo que o crescimento seja sustentável e previsível.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#64FFDA' }}>Como otimizamos:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Monitoramento de KPIs em tempo real
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Testes A/B contínuos
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Análise de cohort e LTV
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    Ajustes baseados em performance
                  </li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA', marginBottom: '1rem' }}>Entregável:</h4>
                <p style={{ margin: 0 }}>
                  Dashboard de performance e relatórios mensais com insights 
                  e recomendações para crescimento contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2>Pronto para Acelerar seu Crescimento?</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Agende uma consulta estratégica gratuita e descubra como o Framework GTM Ignition™ 
            pode transformar sua empresa em uma máquina de crescimento previsível.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contato" className="btn btn-primary">
              Agendar Consulta Gratuita
            </Link>
            <Link href="/casos-de-uso" className="btn btn-secondary">
              Ver Casos de Sucesso
            </Link>
          </div>
        </div>
      </section>
</>
);
}