import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import SynapseAI from '../components/SynapseAI'

export default function CasosDeUso() {
  return (
    <>
      <Head>
        <title>Casos de Uso - Resultados Comprovados | Synapse B2B</title>
        <meta name="description" content="Conheça os resultados reais que nossos clientes alcançaram com o Framework GTM Ignition™. Cases de sucesso em empresas B2B de alta complexidade." />
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
            <li><Link href="/casos-de-uso" className="nav-link" style={{ color: '#64FFDA' }}>Casos de Uso</Link></li>
            <li><Link href="/contato" className="nav-link">Contato</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero dos Casos */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Resultados Comprovados</h1>
            <p>
              Conheça como empresas B2B de alta complexidade transformaram seus negócios 
              com o Framework GTM Ignition™ e alcançaram crescimento previsível.
            </p>
            <div className="hero-ctas">
              <Link href="/contato" className="btn btn-primary">
                Quero Resultados Similares
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas Gerais */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Resultados Médios dos Nossos Clientes</h2>
            <p style={{ fontSize: '1.2rem' }}>
              Dados consolidados de mais de 50 empresas B2B que implementaram nossa metodologia
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#64FFDA',
                marginBottom: '1rem'
              }}>280%</div>
              <h3>Crescimento em Receita</h3>
              <p>Aumento médio na receita recorrente em 12 meses de implementação do framework.</p>
            </div>

            <div className="card">
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#64FFDA',
                marginBottom: '1rem'
              }}>60%</div>
              <h3>Redução no Ciclo de Vendas</h3>
              <p>Diminuição no tempo médio para fechamento de negócios através de processos otimizados.</p>
            </div>

            <div className="card">
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#64FFDA',
                marginBottom: '1rem'
              }}>340%</div>
              <h3>Aumento em Conversão</h3>
              <p>Melhoria na taxa de conversão de leads qualificados para clientes pagantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case 1: SaaS Enterprise */}
      <section className="section section-darker">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ 
                backgroundColor: 'rgba(100, 255, 218, 0.1)', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                <span style={{ color: '#64FFDA', fontSize: '0.9rem', fontWeight: '600' }}>
                  SaaS Enterprise
                </span>
              </div>
              
              <h2>Plataforma de Analytics B2B</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Empresa de analytics para grandes corporações enfrentava dificuldades para 
                escalar além de $2M ARR devido a um ciclo de vendas longo e CAC elevado.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#64FFDA' }}>Desafios Iniciais:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#ff6b6b', marginRight: '0.5rem' }}>✗</span>
                    Ciclo de vendas de 18 meses
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#ff6b6b', marginRight: '0.5rem' }}>✗</span>
                    CAC 3x maior que LTV
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#ff6b6b', marginRight: '0.5rem' }}>✗</span>
                    Taxa de conversão de 2%
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA', marginBottom: '1rem' }}>Resultados em 8 meses:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    <strong>$6.2M ARR</strong> - Crescimento de 210%
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    <strong>9 meses</strong> - Redução de 50% no ciclo
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    <strong>8.5%</strong> - Taxa de conversão
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: '#1E2A3A',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(100, 255, 218, 0.2)'
              }}>
                <blockquote style={{ 
                  fontSize: '1.1rem', 
                  fontStyle: 'italic', 
                  marginBottom: '1.5rem',
                  color: '#CCD6F6'
                }}>
                  "O Framework GTM Ignition™ não apenas triplicou nossa receita, 
                  mas nos deu a previsibilidade que precisávamos para escalar com confiança."
                </blockquote>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#64FFDA',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0A192F',
                    fontWeight: 'bold'
                  }}>
                    RS
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: '600', color: '#F8F9FA' }}>Roberto Silva</div>
                    <div style={{ fontSize: '0.9rem', color: '#CCD6F6' }}>CEO & Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case 2: Manufatura Avançada */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: '#1E2A3A',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(100, 255, 218, 0.2)'
              }}>
                <blockquote style={{ 
                  fontSize: '1.1rem', 
                  fontStyle: 'italic', 
                  marginBottom: '1.5rem',
                  color: '#CCD6F6'
                }}>
                  "Finalmente conseguimos comunicar o valor real da nossa tecnologia. 
                  O resultado foi um crescimento de 400% em novos contratos."
                </blockquote>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#64FFDA',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0A192F',
                    fontWeight: 'bold'
                  }}>
                    MC
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: '600', color: '#F8F9FA' }}>Maria Costa</div>
                    <div style={{ fontSize: '0.9rem', color: '#CCD6F6' }}>Diretora Comercial</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ 
                backgroundColor: 'rgba(100, 255, 218, 0.1)', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                <span style={{ color: '#64FFDA', fontSize: '0.9rem', fontWeight: '600' }}>
                  Manufatura Avançada
                </span>
              </div>
              
              <h2>Equipamentos Industriais IoT</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Fabricante de equipamentos industriais com tecnologia IoT avançada 
                lutava para comunicar valor e justificar preços premium.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#64FFDA' }}>Desafios Iniciais:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#ff6b6b', marginRight: '0.5rem' }}>✗</span>
                    Competição por preço
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#ff6b6b', marginRight: '0.5rem' }}>✗</span>
                    Dificuldade em demonstrar ROI
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#ff6b6b', marginRight: '0.5rem' }}>✗</span>
                    Vendas reativas
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA', marginBottom: '1rem' }}>Resultados em 6 meses:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    <strong>400%</strong> - Aumento em novos contratos
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    <strong>35%</strong> - Aumento no ticket médio
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    <strong>Pipeline</strong> - 3x mais qualificado
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case 3: FinTech */}
      <section className="section section-darker">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ 
                backgroundColor: 'rgba(100, 255, 218, 0.1)', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                <span style={{ color: '#64FFDA', fontSize: '0.9rem', fontWeight: '600' }}>
                  FinTech B2B
                </span>
              </div>
              
              <h2>Plataforma de Pagamentos Corporativos</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                FinTech especializada em pagamentos B2B enfrentava alta concorrência 
                e dificuldade para se diferenciar em um mercado saturado.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#64FFDA' }}>Desafios Iniciais:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#ff6b6b', marginRight: '0.5rem' }}>✗</span>
                    Mercado commoditizado
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#ff6b6b', marginRight: '0.5rem' }}>✗</span>
                    Churn alto (25% ao ano)
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#ff6b6b', marginRight: '0.5rem' }}>✗</span>
                    Crescimento estagnado
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA', marginBottom: '1rem' }}>Resultados em 10 meses:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    <strong>180%</strong> - Crescimento em MRR
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    <strong>8%</strong> - Redução do churn para
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem' }}>✓</span>
                    <strong>Série A</strong> - $15M levantados
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: '#1E2A3A',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(100, 255, 218, 0.2)'
              }}>
                <blockquote style={{ 
                  fontSize: '1.1rem', 
                  fontStyle: 'italic', 
                  marginBottom: '1.5rem',
                  color: '#CCD6F6'
                }}>
                  "A Synapse nos ajudou a encontrar nosso oceano azul. 
                  Saímos da guerra de preços e criamos uma categoria própria."
                </blockquote>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#64FFDA',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0A192F',
                    fontWeight: 'bold'
                  }}>
                    AS
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: '600', color: '#F8F9FA' }}>André Santos</div>
                    <div style={{ fontSize: '0.9rem', color: '#CCD6F6' }}>Co-founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Setores */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Setores que Atendemos</h2>
            <p style={{ fontSize: '1.2rem' }}>
              Nossa metodologia é adaptável para qualquer empresa B2B de alta complexidade
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'left' }}>
              <h3>SaaS & Software</h3>
              <p>Plataformas enterprise, ferramentas de produtividade, soluções de infraestrutura.</p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <h3>FinTech & InsurTech</h3>
              <p>Soluções financeiras B2B, seguros corporativos, gestão de riscos.</p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <h3>HealthTech</h3>
              <p>Dispositivos médicos, software hospitalar, telemedicina corporativa.</p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <h3>Manufatura Avançada</h3>
              <p>Equipamentos industriais, automação, IoT industrial.</p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <h3>Serviços Especializados</h3>
              <p>Consultoria técnica, engenharia, serviços profissionais de alto valor.</p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
              <h3>Infraestrutura & Energia</h3>
              <p>Soluções energéticas, smart cities, infraestrutura digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-darker">
        <div className="container text-center">
          <h2>Pronto para Ser o Próximo Case de Sucesso?</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Agende uma consulta estratégica gratuita e descubra como podemos acelerar 
            o crescimento da sua empresa B2B de alta complexidade.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contato" className="btn btn-primary">
              Agendar Consulta Gratuita
            </Link>
            <Link href="/metodologia" className="btn btn-secondary">
              Conhecer a Metodologia
            </Link>
          </div>
        </div>
      </section>

      {/* Componente de IA */}
      <SynapseAI />
    </>
  )
}

