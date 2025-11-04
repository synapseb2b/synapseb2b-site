import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, BrainCircuit, Users, Award, GitBranch, Target, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

// --- Componente de Texto Rotativo ---
const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const variations = [
    'realmente entende',
    'consegue mensurar',
    'gera valor',
    'resolve o problema',
    'gera escala',
    'projeta retorno'
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % variations.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, variations.length]);

  return (
    <h1 className="hero-headline hero-headline-two-lines">
      <span className="hero-headline-fixed">O mercado compra o que</span>
      <span 
        className="rotating-text"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {variations[currentIndex]}
      </span>
    </h1>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Synapse B2B | Engenharia de Receita para Empresas B2B</title>
        <meta name="description" content="Instalamos o sistema que transforma potencial técnico complexo em receita previsível. Clareza de Valor, Sistema Comercial, Governança de Execução e Ativos que Convertem." />
      </Head>

      {/* Bloco 1: Hero Section */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <RotatingText />
          <p className="hero-subheadline">
            Seu produto resolve problemas complexos.<br/>
            Mas o mercado não entende o valor na velocidade que você precisa crescer.
          </p>
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico Estratégico</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/como-trabalhamos" className="btn btn-secondary btn-large">
              <span>Conhecer Nossas Soluções</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: Os 4 Pilares da Engenharia de Receita */}
      <section id="engenharia" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Receita previsível não é acidente. É engenharia.</h2>
          <p className="lead-text">
            Quatro pilares integrados. Um resultado: você cresce sem depender de sorte.
          </p>
          <p className="text-center" style={{ maxWidth: '800px', margin: '1rem auto 0' }}>
            Empresas B2B que escalam têm uma coisa em comum: elas pararam de improvisar e construíram um sistema.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <BrainCircuit className="info-card-icon" />
              <h3 className="info-card-title">Clareza de Valor</h3>
              <p>Seu cliente ideal entende em 30 segundos: o que você resolve, por que agora, por que você. Sem jargão técnico. Sem apresentação de 40 slides.</p>
            </div>
            <div className="info-card">
              <GitBranch className="info-card-icon" />
              <h3 className="info-card-title">Sistema Comercial</h3>
              <p>Motor completo de receita: estratégia GTM, processo comercial estruturado, pipeline previsível. Você para de depender de indicações e passa a gerar demanda.</p>
            </div>
            <div className="info-card">
              <Users className="info-card-icon" />
              <h3 className="info-card-title">Governança de Execução</h3>
              <p>Liderança C-level fracionada operando sua receita. Inteligência sênior sem contrato CLT. Mínimo 3 meses até validar o sistema completo.</p>
            </div>
            <div className="info-card">
              <Award className="info-card-icon" />
              <h3 className="info-card-title">Ativos que Convertem</h3>
              <p>Plataformas digitais, calculadoras de ROI, simuladores, ferramentas que educam e aceleram decisão. Tecnologia trabalhando 24/7 para converter.</p>
            </div>
          </div>
           <p className="lead-text text-center" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            Nós instalamos o sistema que transforma seu potencial técnico em receita previsível através da Engenharia de Receita.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: Cases de Sucesso */}
      <section id="cases" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Três histórias reais. Três resultados tangíveis.</h2>
          <div className="case-grid">
            {/* Case 1: Versão Holística */}
            <div className="case-card">
              <div className="case-card-header">
                <h3 className="case-card-title">Versão Holística</h3>
                <span className="case-card-tag">Healthtech</span>
              </div>
              <p><strong>Contexto:</strong> Produto inovador ("Cuidado Farmacêutico Integrativo") que hospitais e investidores não entendiam. Pitch de 15 minutos gerava: "vamos pensar".</p>
              <p><strong>O que fizemos:</strong> Recodificamos a narrativa. "Cuidado" virou "Plataforma que reduz custo de paciente crônico em 5.8x". Focamos no ROI para o CFO, não na metodologia para o médico.</p>
              <p><strong>Resultado tangível:</strong> De "vamos pensar" para "quando começamos?". Posicionamento de categoria criado ("CareOps Integrativo") e tese de investimento pronta.</p>
              <Link href="/cases" className="btn btn-secondary btn-small"><span>Ver Case Completo</span><ArrowRight size={18} /></Link>
            </div>

            {/* Case 2: Exclusiva Engenharias */}
            <div className="case-card">
              <div className="case-card-header">
                <h3 className="case-card-title">Exclusiva Engenharias</h3>
                <span className="case-card-tag">Indústria / Engenharia</span>
              </div>
              <p><strong>Contexto:</strong> Excelência técnica com 100% de dependência de indicações. CEO era o principal vendedor e gargalo do crescimento.</p>
              <p><strong>O que fizemos:</strong> Fundamos a Diretoria de Receita (CRO as a Service) e construímos o motor de demanda do zero: GTM, plataforma digital e prospecção ativa.</p>
              <p><strong>Resultado tangível:</strong> De 100% indicação para um sistema replicável. Playbook de vendas validado e documentado, pronto para escalar o time.</p>
              <Link href="/cases" className="btn btn-secondary btn-small"><span>Ver Case Completo</span><ArrowRight size={18} /></Link>
            </div>

            {/* Case 3: AORKIA (NOVO) */}
            <div className="case-card">
              <div className="case-card-header">
                <h3 className="case-card-title">AORKIA</h3>
                <span className="case-card-tag">Prova de Conceito</span>
              </div>
              <p><strong>Contexto:</strong> Empresa nova em mercado técnico competindo com gigantes globais. Zero histórico, zero clientes. Desafio: provar que nosso próprio método funciona em 45 dias.</p>
              <p><strong>O que fizemos:</strong> Sprint intensivo: marca, narrativa, plataforma digital e parceria estratégica com Keepit (líder global). Recodificamos 'backup imutável' para 'Seu SaaS não faz backup dos seus dados. Quanto custa cada minuto parado?'.</p>
              <p><strong>Resultado tangível:</strong> De zero para Parceiro Global Keepit com primeira venda de 1.200+ usuários em 45 dias. A prova definitiva: nosso método aplicado em nós mesmos. Link: aorkia.com</p>
              <a href="https://aorkia.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small"><span>Ver Prova</span><ArrowRight size={18} /></a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: Princípio Unificador */}
      <section id="principio" className="section-solid">
        <div className="container text-center reveal-up">
          <div className="decision-block">
            <h3>Esses três casos provam o mesmo princípio:</h3>
            <p className="decision-highlight">Complexidade técnica sem clareza estratégica é potencial desperdiçado.</p>
            <p>Nós traduzimos o que trava seu comprador — dúvida, comparação, análise — em decisão rápida: confiança, urgência, ação.</p>
            <p>Construímos sistemas que tomam decisões complexas no lugar do usuário.</p>
            <p>Lideramos a execução nos primeiros 90 dias porque sabemos que você não pode parar sua operação para implementar um novo processo.</p>
            <p className="font-bold text-white mt-4">Isso é Engenharia de Receita.</p>
            <div className="section-cta">
              <Link href="/como-trabalhamos" className="btn btn-secondary">
                <span>Conhecer Nossas Soluções</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: Por Que Empresas B2B nos Contratam (NOVO) */}
      <section id="por-que-synapse" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Três verdades que todo empresário B2B já descobriu:</h2>
          <div className="card-grid-three" style={{marginTop: '3rem'}}>
            <div className="info-card text-left">
              <h3 className="info-card-title">1. Você não tem problema de produto.</h3>
              <p>Sua solução funciona. Clientes validam. O problema: o mercado não entende o valor rápido o suficiente para você crescer de forma previsível.</p>
            </div>
            <div className="info-card text-left">
              <h3 className="info-card-title">2. Crescimento por indicação tem teto.</h3>
              <p>Aquele vendedor estrela. Aquele networking do fundador. Funciona até não funcionar mais. Escalar exige que qualquer vendedor médio execute um processo excelente.</p>
            </div>
            <div className="info-card text-left">
              <h3 className="info-card-title">3. Você não tem tempo para aprender fazendo.</h3>
              <p>CEO tocando comercial. Time executando o dia a dia. Contratar gerente sem processo validado é apostar caro. Você precisa de quem já fez isso dezenas de vezes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 6: CTA Final */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">A pergunta B2B de US$ 1 milhão:</h2>
          <p className="cta-support-text">"Seu produto é genial, mas sua narrativa é confusa. Como você traduz complexidade em receita previsível?"</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agendar Diagnóstico Estratégico (21min)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text">Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão. Só clareza.</p>
        </div>
      </section>
    </>
  );
}