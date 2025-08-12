import { Target, BarChart, Search, ClipboardCheck, TrendingUp, Ban, Waypoints, Combine } from 'lucide-react';
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
        <title>Synapse B2B | Transformando Complexidade em Crescimento</title>
        <meta name="description" content="Ajudamos empresas técnicas a transformar complexidade em crescimento previsível e mensurável, unindo clareza estratégica e execução comercial de alto nível." />
      </Head>

      {/* Seção Hero */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>
              [span_0](start_span)No B2B, não basta ter a melhor solução. <span className="text-highlight">É preciso torná-la impossível de ignorar.</span>[span_0](end_span)
            </h1>
            <p className="hero-subheadline">
              [span_1](start_span)Para que o mercado perceba e valorize todo o potencial da sua solução, é preciso traduzir complexidade em clareza e ações que transformam atenção em resultado.[span_1](end_span)
            </p>
            <div className="hero-ctas" style={{ marginBottom: '2rem' }}>
              <button
                onClick={() => scrollToSection('problema')}
                className="btn btn-primary"
              >
                [span_2](start_span)Descubra como acelerar seu crescimento[span_2](end_span)
              </button>
              <Link href="/casos-de-uso" className="btn btn-diagnostic">
                Veja nossos Casos de Uso
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

      {/* Seção: Mapeada para "Bloco 5 - Como garantimos impacto" */}
      <section
        className="section section-dark"
        style={{
          backgroundImage: "url('/image/Plataforma.png')",
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
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 1
        }}></div>

        <div
          className="container text-center"
          style={{
            maxWidth: '900px',
            position: 'relative',
            zIndex: 2
          }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-16"
            style={{ textShadow: '0px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            [span_3](start_span)O valor que você vê precisa ser o mesmo que o mercado enxerga.[span_3](end_span)
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-slate-300 space-y-6" style={{ marginTop: '4rem' }}>
            <p>
              [span_4](start_span)Nosso método conecta estratégia e execução para alinhar a percepção interna de valor ao que o mercado entende e paga.[span_4](end_span)
            </p>
            <p>
              [span_5](start_span)Acompanhamos métricas como <strong>ciclo de vendas, conversão e ROI</strong> para que o impacto seja comprovado, não presumido.[span_5](end_span)
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 2: Abordagem (Mapeado para "Bloco 3 - Nossa resposta") */}
      <section className="section section-dark">
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          [span_6](start_span)<h2 className="text-2xl md:text-3xl font-bold text-teal-400 mb-2">Clareza estratégica para transformar complexidade em crescimento.[span_6](end_span)</h2>
          [span_7](start_span)<h3 className="text-xl md:text-2xl font-semibold text-slate-300" style={{maxWidth: '700px', margin: '1rem auto 0'}}>Unimos <strong>clareza estratégica</strong> e <strong>execução de alto impacto</strong> em três etapas:[span_7](end_span)</h3>

          <div className="grid grid-3" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <Search className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-xl text-teal-400 mb-2">Diagnóstico Profundo</h3>
              [span_8](start_span)<p className="text-slate-400 text-base m-0">Mapeamos negócio, mercado e concorrência para identificar as alavancas reais de crescimento.[span_8](end_span)</p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <ClipboardCheck className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-xl text-teal-400 mb-2">Posicionamento<br />Irrecusável</h3>
              [span_9](start_span)<p className="text-slate-400 text-base m-0">Criamos uma mensagem que não só diferencia, mas obriga o decisor a prestar atenção falando exatamente com as dores e prioridades dele.[span_9](end_span)</p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <TrendingUp className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-xl text-teal-400 mb-2">Engenharia de Receita</h3>
              [span_10](start_span)<p className="text-slate-400 text-base m-0">Implementamos ativos e processos que aceleram a conversão e constroem crescimento previsível.[span_10](end_span)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 3: Modelos de Atuação (Mapeado para "Formatos de atuação") */}
      <section className="section section-darker">
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-teal-400">Nossos Modelos de Atuação</h2>

          <div className="grid grid-2 gap-6" style={{ marginTop: '4rem' }}>
            <div className="card h-full p-8">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <Target className="w-8 h-8 text-teal-400" />
              </div>
              [span_11](start_span)<h3 className="text-xl font-bold text-teal-400 mb-2">Estratégia Go-to-Market completa[span_11](end_span)</h3>
              <p className="text-slate-400 text-base mb-0">Desenvolvemos e implementamos seu plano de entrada ou escala no mercado de ponta a ponta.</p>
            </div>
            <div className="card h-full p-8">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <BarChart className="w-8 h-8 text-teal-400" />
              </div>
              [span_12](start_span)<h3 className="text-xl font-bold text-teal-400 mb-2">Diretoria de Aceleração de Receita B2B[span_12](end_span)</h3>
              [span_13](start_span)<p className="text-slate-400 text-base mb-0">Atuamos como sua diretoria de receita interina ou fracionada, desenhando e executando sua máquina de vendas completa.[span_13](end_span)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Problema (Mapeada para "Bloco 2 - O problema que resolvemos") */}
      <section id="problema" className="section section-dark">
        <div className="container">
          <div className="text-center mb-2">
            [span_14](start_span)<h2>O mercado não compra o que não entende.[span_14](end_span)</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Empresas técnicas dominam a engenharia do que fazem, mas falham em fazer o mercado perceber seu valor. [span_15](start_span)O desafio vai além da linguagem técnica:[span_15](end_span)
            </p>
          </div>

          <div className="grid grid-3" style={{ marginTop: '4rem' }}>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <Ban className="w-8 h-8 text-teal-400" />
              </div>
              [span_16](start_span)<h3>Mensagens que não conectam com decisores.[span_16](end_span)</h3>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <Waypoints className="w-8 h-8 text-teal-400" />
              </div>
              [span_17](start_span)<h3>Estratégias comerciais desalinhadas com o processo real de compra.[span_17](end_span)</h3>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <Combine className="w-8 h-8 text-teal-400" />
              </div>
              [span_18](start_span)<h3>Falta de integração entre marketing, vendas e produto.[span_18](end_span)</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Solução (Mapeada para conclusão do "Bloco 2") */}
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
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 1
        }}></div>
        <div
          className="container"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div className="text-center">
            <h2 style={{ textShadow: '0px 2px 8px rgba(0, 0, 0, 0.7)' }}>Crescer exige uma proposta comercial irresistível.</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '1rem auto 0' }}>
              [span_19](start_span)No B2B, crescer exige <strong>traduzir atributos técnicos em uma proposta comercial irresistível</strong>, adaptada para cada nível de decisão e sustentada por um plano de receita previsível.[span_19](end_span)
            </p>
          </div>
        </div>
      </section>

      {/* Seção Framework (Mapeada para "Bloco 4 - Casos que inspiram") */}
      <section id="framework" className="section section-darker">
        <div className="container">
          <div className="text-center mb-12">
            [span_20](start_span)<h2>Aplicando estratégia e execução para gerar impacto real.[span_20](end_span)</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '1rem auto 0' }}>
              [span_21](start_span)Veja exemplos de empresas que estão transformando sua presença no mercado com nossas metodologias.[span_21](end_span)
            </p>
          </div>

          <div className="grid grid-2" style={{ marginTop: '4rem', alignItems: 'center', gap: '4rem' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '2.5rem', borderLeft: '3px solid #64FFDA', paddingLeft: '1.5rem' }}>
                <h3 style={{ margin: 0, color: '#64FFDA', marginBottom: '0.75rem' }}>Microcase: Engenharia & Facilities</h3>
                [span_22](start_span)<p style={{ margin: 0 }}><strong>Desafio:</strong> expertise técnica consolidada, mas dificuldade em comunicar valor para decisores estratégicos.[span_22](end_span)</p>
                [span_23](start_span)<p style={{ margin: 0 }}><strong>Ação:</strong> diagnóstico profundo, reposicionamento e plano de go-to-market B2B direcionado.[span_23](end_span)</p>
                [span_24](start_span)<p style={{ margin: 0 }}><strong>Status:</strong> implementação em andamento, com sinais iniciais de maior engajamento e abertura de novas conversas comerciais.[span_24](end_span)</p>
              </div>

              <div style={{ borderLeft: '3px solid #64FFDA', paddingLeft: '1.5rem' }}>
                <h3 style={{ margin: 0, color: '#64FFDA', marginBottom: '0.75rem' }}>Microcase: Health & Wellness B2B</h3>
                [span_25](start_span)<p style={{ margin: 0 }}><strong>Desafio:</strong> modelo inovador pouco compreendido por empresas.[span_25](end_span)</p>
                [span_26](start_span)<p style={{ margin: 0 }}><strong>Ação:</strong> criação de proposta de valor clara, arquitetura de ativos estratégicos e plano de entrada no mercado corporativo.[span_26](end_span)</p>
                [span_27](start_span)<p style={{ margin: 0 }}><strong>Status:</strong> primeiras ativações já geram mais clareza na mensagem e novas oportunidades de abordagem.[span_27](end_span)</p>
              </div>

              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link href="/casos-de-uso" className="btn btn-primary">
                  Saiba mais sobre nossos casos
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
                alt="Aplicando estratégia e execução para gerar impacto real"
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

      {/* Seção FAQ (Mapeada para "Bloco 6 - Chamada final") */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-4">
            [span_28](start_span)<h2>Se o mercado ainda não entende seu valor, é hora de mudar isso.[span_28](end_span)</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem' }}>
              [span_29](start_span)Com metodologia proprietária e atuação integrada, ajudamos empresas técnicas a transformar complexidade em <strong>crescimento previsível e mensurável</strong>, unindo clareza estratégica e execução comercial de alto nível.[span_29](end_span)
            </p>
          </div>
          <div className="text-center mt-10">
             <Link href="/contato" className="btn btn-primary">
              [span_30](start_span)Fale com a Synapse B2B[span_30](end_span)
            </Link>
             <Link href="/casos-de-uso" className="btn btn-diagnostic" style={{marginLeft: '1rem'}}>
              Explore nossos Casos de Uso
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
