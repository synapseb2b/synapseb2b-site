import { Target, BarChart, Search, ClipboardCheck, TrendingUp, Waypoints, Combine, MessageSquareWarning } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

// Componente para seções com animação de scroll
const AnimatedSection = ({ children, id, className }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  return (
    <section id={id} className={`section ${className || ''} fade-in-start`}>
      {children}
    </section>
  );
};


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
                No B2B, não basta ter a melhor solução. <br />
                <span className="text-highlight">É preciso torná-la impossível de ignorar.</span>
            </h1>
            <p className="hero-subheadline">
                Para que o mercado perceba e valorize todo o potencial da sua solução, é preciso traduzir complexidade em clareza e ações que transformam atenção em resultado.
            </p>
            <div className="hero-ctas" style={{ marginBottom: '2rem' }}>
              <button
                onClick={() => scrollToSection('problema')}
                className="btn btn-primary"
              >
                Descubra como acelerar seu crescimento
              </button>
              <Link href="/casos-de-uso" className="btn btn-secondary">
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

      {/* Bloco 2: O Problema que Resolvemos */}
      <AnimatedSection id="problema" className="section-dark">
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O mercado não compra o que não entende.</h2>
          <p className="text-lg text-slate-300 mb-12" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Empresas técnicas dominam a engenharia do que fazem, mas falham em fazer o mercado perceber seu valor. O desafio vai além da linguagem técnica:
          </p>

          <div className="grid grid-3" style={{ gap: '1.5rem' }}>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                  <MessageSquareWarning className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-xl text-teal-400 mb-2">Mensagens que não conectam</h3>
              <p className="text-slate-400 text-base m-0">A comunicação não dialoga com as dores e prioridades dos decisores de negócio.</p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <Waypoints className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-xl text-teal-400 mb-2">Estratégias desalinhadas</h3>
              <p className="text-slate-400 text-base m-0">As ações comerciais não estão alinhadas com o processo real de compra do cliente.</p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <Combine className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-xl text-teal-400 mb-2">Falta de integração</h3>
              <p className="text-slate-400 text-base m-0">Marketing, vendas e produto não trabalham de forma unificada para o crescimento.</p>
            </div>
          </div>
           <p className="text-lg text-slate-200 mt-12" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            No B2B, crescer exige <strong className="text-teal-400">traduzir atributos técnicos em uma proposta comercial irresistível</strong>, adaptada para cada nível de decisão e sustentada por um plano de receita previsível.
           </p>
        </div>
      </AnimatedSection>
      
      {/* Bloco 3: Nossa Resposta */}
      <AnimatedSection id="nossa-resposta" className="section-darker">
        <div className="container text-center" style={{ maxWidth: '1000px' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Clareza estratégica para transformar complexidade em crescimento.</h2>
          <p className="text-lg text-slate-300 mb-12">
            Unimos <strong>clareza estratégica</strong> e <strong>execução de alto impacto</strong> em três etapas:
          </p>

          <div className="grid grid-3" style={{ gap: '1.5rem' }}>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <Search className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-xl text-teal-400 mb-2">Diagnóstico Profundo</h3>
              <p className="text-slate-400 text-base m-0">Mapeamos negócio, mercado e concorrência para identificar as alavancas reais de crescimento.</p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <ClipboardCheck className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-xl text-teal-400 mb-2">Posicionamento Irrecusável</h3>
              <p className="text-slate-400 text-base m-0">Criamos uma mensagem que obriga o decisor a prestar atenção, falando exatamente com suas dores e prioridades.</p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <TrendingUp className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-bold text-xl text-teal-400 mb-2">Engenharia de Receita</h3>
              <p className="text-slate-400 text-base m-0">Implementamos ativos e processos que aceleram a conversão e constroem crescimento previsível.</p>
            </div>
          </div>
        
          <h3 className="text-2xl md:text-3xl font-bold text-teal-400 mt-20 mb-10">Formatos de Atuação</h3>
           <div className="grid grid-2 gap-6" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card h-full p-8">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <Target className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-teal-400 mb-2">Estratégia Go-to-Market Completa</h3>
              <p className="text-slate-400 text-base mb-0">Desenvolvemos e implementamos seu plano de entrada ou escala no mercado de ponta a ponta.</p>
            </div>
            <div className="card h-full p-8">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 mx-auto border border-gray-700">
                <BarChart className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-teal-400 mb-2">Diretoria de Aceleração de Receita B2B</h3>
              <p className="text-slate-400 text-base mb-0">Atuamos como sua diretoria de receita (CRO) interina ou fracionada, para desenhar e executar sua máquina de crescimento.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Bloco 4: Casos que inspiram */}
        <AnimatedSection 
            id="casos-de-uso"
            className="section-dark"
            style={{
            backgroundImage: "url('/image/Framework_GTM_SynapsebB2B.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
            }}
        >
        <div className="section-overlay-dark" />
        <div className="container text-center relative z-10" style={{ maxWidth: '1000px' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Aplicando estratégia e execução para gerar impacto real.</h2>
            <p className="text-lg text-slate-300 mb-12">
            Veja exemplos de empresas que estão transformando sua presença no mercado com nossas metodologias.
            </p>
            <div className="grid grid-2 gap-6">
            <div className="card-transparent text-left">
                <h3 className="font-bold text-2xl text-teal-400 mb-4">Engenharia & Facilities</h3>
                <p><strong className="text-slate-200">Desafio:</strong> Expertise técnica consolidada, mas dificuldade em comunicar valor para decisores estratégicos.</p>
                <p><strong className="text-slate-200">Ação:</strong> Diagnóstico profundo, reposicionamento e plano de go-to-market B2B direcionado.</p>
                <p><strong className="text-slate-200">Status:</strong> Implementação em andamento, com sinais iniciais de maior engajamento e abertura de novas conversas comerciais.</p>
            </div>
            <div className="card-transparent text-left">
                <h3 className="font-bold text-2xl text-teal-400 mb-4">Health & Wellness B2B</h3>
                <p><strong className="text-slate-200">Desafio:</strong> Modelo inovador pouco compreendido por empresas.</p>
                <p><strong className="text-slate-200">Ação:</strong> Criação de proposta de valor clara, arquitetura de ativos estratégicos e plano de entrada no mercado corporativo.</p>
                <p><strong className="text-slate-200">Status:</strong> Primeiras ativações já geram mais clareza na mensagem e novas oportunidades de abordagem.</p>
            </div>
            </div>
            <div className="text-center mt-12">
                <Link href="/casos-de-uso" className="btn btn-primary">
                    Explore mais casos
                </Link>
            </div>
        </div>
      </AnimatedSection>

      {/* Bloco 5: Como garantimos impacto */}
      <AnimatedSection 
        id="garantia-impacto"
        className="section-darker"
        style={{
          backgroundImage: "url('/image/Plataforma.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div className="section-overlay-dark" />
        <div className="container relative z-10" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O valor que você vê precisa ser o mesmo que o mercado enxerga.</h2>
          <p className="text-lg text-slate-200 mb-6">
            Nosso método conecta estratégia e execução para alinhar a percepção interna de valor ao que o mercado entende e paga.
          </p>
          <p className="text-lg text-slate-300">
            Acompanhamos métricas como <strong className="text-teal-400">ciclo de vendas, conversão e ROI</strong> para que o impacto seja comprovado, não presumido.
          </p>
        </div>
      </AnimatedSection>

      {/* Bloco 6: Chamada final */}
      <AnimatedSection id="chamada-final" className="section-dark">
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Se o mercado ainda não entende seu valor, é hora de mudar isso.</h2>
          <p className="text-lg text-slate-300 mb-10">
            Com metodologia proprietária e atuação integrada, ajudamos empresas técnicas a transformar complexidade em <strong>crescimento previsível e mensurável</strong>, unindo clareza estratégica e execução comercial de alto nível.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary">
              Fale com a Synapse B2B
            </Link>
            <Link href="/casos-de-uso" className="btn btn-secondary">
              Explore nossos Casos de Uso
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
