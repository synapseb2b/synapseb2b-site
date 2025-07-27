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
        <title>Synapse B2B - Transformamos Expertise Técnica em Receita Previsível</title>
        <meta name="description" content="Somos a plataforma de aceleração que constrói o Go-to-Market para empresas B2B de alta complexidade, transformando superioridade técnica em domínio de mercado." />
      </Head>
 
      {/* Seção Hero */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Sua Expertise Técnica é Brilhante.
                <br /> 
                Nós a Transformamos em Receita Previsível.</h1>
            <p>
              Somos a plataforma de aceleração que constrói o Go-to-Market para empresas B2B de alta complexidade, 
              transformando superioridade técnica em domínio de mercado.
            </p>
            <div className="hero-ctas" style={{ marginBottom: '2rem' }}>
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
                  <span style={{ color: '#64FFDA', fontSize: '1.5rem' }}>⛔</span>
                </div>
              </div>
              <h3>A Síndrome do "Quase Lá"</h3>
              <p>Estar sempre a um passo do crescimento exponencial, mas nunca conseguir dar esse salto definitivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Solução */}
      <section 
        className="section section-dark"
        style={{
          backgroundImage: "url('/image/Nos_somos_o_neurotransmissor_do_crescimento_B2B.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(9, 14, 26, 0.85)',
          zIndex: 1
        }}></div>
        <div 
          className="container"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div className="text-center">
            <h2 style={{ textShadow: '0px 2px 8px rgba(0, 0, 0, 0.7)' }}>Nós somos o neurotransmissor do crescimento B2B.</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '1rem auto 0' }}>
              A Synapse B2B atua como um laboratório de estratégia que decodifica a complexidade técnica em ativos de receita, conectando seu produto ao único resultado que importa: o sucesso do seu cliente.
            </p>
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
          <div className="grid grid-2" style={{ marginTop: '4rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#64FFDA', marginBottom: '2rem' }}>4 Fases Integradas</h3>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#64FFDA', color: '#0A192F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '1rem', flexShrink: 0 }}>1</div>
                  <h4 style={{ margin: 0, color: '#F8F9FA' }}>Diagnóstico Estratégico</h4>
                </div>
                <p>Análise profunda e estruturada do seu negócio, mercado e posicionamento atual para identificar as alavancas de crescimento mais promissoras.</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#64FFDA', color: '#0A192F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '1rem', flexShrink: 0 }}>2</div>
                  <h4 style={{ margin: 0, color: '#F8F9FA' }}>Decodificação de Mercado</h4>
                </div>
                <p>Decodificamos o DNA do seu cliente ideal e o cenário competitivo para construir um posicionamento irrecusável e uma proposta de valor que cria urgência.</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#64FFDA', color: '#0A192F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '1rem', flexShrink: 0 }}>3</div>
                  <h4 style={{ margin: 0, color: '#F8F9FA' }}>Engenharia de Receita e Ativos Digitais</h4>
                </div>
                <p>Construímos sua máquina de GTM com uma narrativa poderosa e os ativos de aceleração essenciais — de Pitch Decks estratégicos a Plataformas Digitais, Landing Pages de alta conversão e Aplicativos que potencializam seu processo de vendas.</p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#64FFDA', color: '#0A192F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '1rem', flexShrink: 0 }}>4</div>
                  <h4 style={{ margin: 0, color: '#F8F9FA' }}>Aceleração Inteligente</h4>
                </div>
                <p>Ativamos um sistema de otimização contínua, usando dados para refinar a estratégia e garantir que seu crescimento não apenas aconteça, mas acelere de forma sustentável.</p>
              </div>
              <div style={{ marginTop: '2rem' }}>
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

      {/* Seção FAQ */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Perguntas Frequentes</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Vocês são uma agência de marketing ou uma consultoria?</h3>
              <p>Nenhum dos dois. Agências executam táticas. Consultorias entregam relatórios. A Synapse B2B atua como uma plataforma de aceleração. Nós decodificamos sua estratégia (o trabalho intelectual da consultoria) e construímos os ativos e motores de receita para executá-la (a engenharia que uma agência tradicional não faz de forma integrada).</p>
            </div>
            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Meu negócio é extremamente técnico e de nicho. Como podem ajudar?</h3>
              <p>Essa é exatamente a nossa especialidade. Não precisamos ser especialistas no seu produto; somos especialistas em traduzir sua genialidade técnica em valor de negócio. Nossa função de "neurotransmissor" é conectar sua solução complexa às dores e aos KPIs do seu cliente C-Level, criando uma proposta de valor que gera receita.</p>
            </div>
            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Qual é o perfil ideal de empresa para a Synapse B2B?</h3>
              <p>Trabalhamos com empresas B2B de alta complexidade que atingiram um platô de crescimento ou que precisam de um GTM estruturado para escalar. Isso inclui SaaS Scale-Ups, Deep Techs, e consultorias de alta especialização que entendem que um produto brilhante, por si só, não garante o domínio do mercado.</p>
            </div>
             <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
               <h3>Quanto tempo leva para ver resultados?</h3>
               <p>Nossos clientes começam a ver os primeiros insights em 2 semanas. Resultados mensuráveis aparecem entre 60-90 dias, dependendo da complexidade do negócio.</p>
             </div>
            <div className="card" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <h3>Como vocês garantem que o framework funcionará para minha empresa?</h3>
              <p>Começamos sempre com um Diagnóstico Estratégico gratuito. Só prosseguimos se identificarmos um potencial real de crescimento e fit com nossa metodologia.</p>
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
</>
);
}