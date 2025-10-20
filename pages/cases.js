// pages/cases.js (VERSÃO FINAL E CORRIGIDA)

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
// ÍCONES CORRIGIDOS: 'Hospital' foi substituído por 'HeartPulse'
import { ArrowRight, Check, HardHat, Share2, GraduationCap, Brain, Search, TrendingUp, Zap, Target, HeartPulse } from 'lucide-react';

export default function CasesPage() {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const navRef = useRef(null);

  // Efeito para a navegação fixa (sticky)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavSticky(!entry.isIntersecting);
      },
      { rootMargin: "-1px 0px 0px 0px" } 
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, []);

  // Efeito para animações de scroll
  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-up').forEach(el => scrollObserver.observe(el));
    return () => scrollObserver.disconnect();
  }, []);


  return (
    <>
      <Head>
        <title>Cases de Sucesso | Synapse B2B</title>
        <meta name="description" content="Explore histórias reais de como a Engenharia de Receita e o Cortex GTM™ transformam complexidade em clareza e potencial em performance." />
      </Head>

      {/* Bloco 1: Hero Section */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          <h1 className="section-title">Engenharia de Receita em Ação</h1>
          <p className="lead-text">
            Quatro histórias reais. Quatro aplicações do Cortex GTM™.
            Um princípio: complexidade sem clareza é potencial desperdiçado.
          </p>
          <div className="hero-ctas">
            <Link href="#cases-nav" className="btn btn-primary">
              <span>Explorar cases</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bloco 2: Navegação Fixa entre Cases */}
      <nav ref={navRef} id="cases-nav" className={`case-nav ${isNavSticky ? 'sticky' : ''}`}>
        <div className="container">
          <Link href="#case-versao-holistica"><HeartPulse size={18}/> Versão Holística</Link>
          <Link href="#case-exclusiva-engenharias"><HardHat size={18}/> Exclusiva Engenharias</Link>
          <Link href="#case-synapse-matchmaker"><Share2 size={18}/> Synapse Matchmaker</Link>
          <Link href="#case-mathpop"><GraduationCap size={18}/> MathPop</Link>
        </div>
      </nav>

      <main id="cases-content">
        
        {/* CASE 1: VERSÃO HOLÍSTICA */}
        <section id="case-versao-holistica" className="case-section-wrapper section-solid">
          <div className="container reveal-up">
            <div className="case-header">
              <HeartPulse className="case-icon" />
              <div>
                <h2>Versão Holística</h2>
                <p>Cortex GTM™ aplicado às 5 lentes (versão completa)</p>
              </div>
            </div>
            <div className="case-grid">
              <div className="case-column">
                <h3>O Contexto</h3>
                <p>Healthtech com produto sólido, mas narrativa dispersa e múltiplos modelos de negócio que travavam a decisão de hospitais e investidores. A pergunta era sempre a mesma: "O que, exatamente, vocês fazem por mim?"</p>
                <h4 className="mt-4">Diagnóstico Cortex GTM™</h4>
                <p className="diagnosis-text">Travamento no Sistema 1 (decisão emocional). A narrativa técnica forçava uma análise racional exaustiva, fazendo com que o decisor não "sentisse" o valor em 30 segundos.</p>
              </div>
              <div className="case-column">
                <h3>A Solução: Aplicação das 5 Lentes</h3>
                <div className="lenses-grid">
                  <div className="lens-card"><strong>Lente do Fundador:</strong> Traduzimos "Cuidado Integrativo" para "Plataforma que reduz custo de paciente crônico".</div>
                  <div className="lens-card"><strong>Lente do Comprador:</strong> Focamos no ROI tangível que o CFO de um hospital precisa para decidir.</div>
                  <div className="lens-card"><strong>Lente da Receita:</strong> Priorizamos o ICP (hospitais com 200+ leitos) e validamos a métrica norte: ROI de 5.8x.</div>
                  <div className="lens-card"><strong>Lente da Neurociência:</strong> Reestruturamos a narrativa para focar em dor (custo) e solução (ROI) em 60 segundos.</div>
                  <div className="lens-card"><strong>Lente da Andragogia:</strong> Criamos a categoria "CareOps Integrativo" para educar o mercado sobre o novo valor.</div>
                </div>
              </div>
            </div>
            <div className="case-result">
              <h3>Resultado Tangível: Clareza que Gera Tração</h3>
              <div className="before-after-grid">
                <div className="before-card">
                  <h4>ANTES</h4>
                  <p>Pitch de 15 minutos → decisor confuso → "vamos pensar"</p>
                </div>
                <div className="after-card">
                  <h4>DEPOIS</h4>
                  <p>Pitch de 3 minutos → decisor entende valor → "quando começamos?"</p>
                </div>
              </div>
              <div className="highlight-box mt-4">
                <p className="text-2xl font-bold text-white">"Traduzimos inovação técnica em linguagem de decisor financeiro. O produto sempre funcionou. Agora o mercado entende por quê."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE 2: EXCLUSIVA ENGENHARIAS */}
        <section id="case-exclusiva-engenharias" className="case-section-wrapper section-with-gradient-glow">
          <div className="container reveal-up">
            <div className="case-header">
              <HardHat className="case-icon" />
              <div>
                <h2>Exclusiva Engenharias</h2>
                <p>Cortex GTM™ aplicado ao Dual-Track Revenue (Discovery + Delivery em paralelo)</p>
              </div>
            </div>
            <div className="case-grid">
              <div className="case-column">
                <h3>O Contexto</h3>
                <p>Engenharia de excelência técnica, mas com invisibilidade digital absoluta. O crescimento dependia 100% de indicações e networking, sem previsibilidade de receita e sobrecarregando o CEO.</p>
                <h4 className="mt-4">Diagnóstico Cortex GTM™</h4>
                <p className="diagnosis-text">Ausência total de sistema comercial. Talento técnico excepcional sem clareza de valor para o mercado. Heroísmo comercial não escala. Sistema escala.</p>
              </div>
              <div className="case-column">
                <h3>A Solução: Dual-Track Revenue</h3>
                <div className="dual-track-grid">
                  <div className="track-card">
                    <h4>TRACK 1: DISCOVERY (Validação)</h4>
                    <p>Construímos o GTM completo e a plataforma digital com um simulador de orçamento integrado para que o lead chegasse já qualificado.</p>
                  </div>
                  <div className="track-card">
                    <h4>TRACK 2: DELIVERY (Execução)</h4>
                    <p>Atuamos como CRO as a Service, fundando a Diretoria de Receita, fazendo prospecção ativa e documentando todo o playbook comercial.</p>
                  </div>
                </div>
                 <p className="mt-4">Não esperamos a estratégia ficar "perfeita" para começar. Validamos executando.</p>
              </div>
            </div>
            <div className="case-result">
              <h3>Resultado Tangível: Do Reativo ao Estruturado</h3>
              <div className="before-after-grid">
                <div className="before-card">
                  <h4>ANTES</h4>
                  <p>100% indicação → crescimento limitado → receita imprevisível</p>
                </div>
                <div className="after-card">
                  <h4>DEPOIS</h4>
                  <p>Motor de demanda ativo → leads qualificados → sistema replicável</p>
                </div>
              </div>
              <div className="highlight-box mt-4">
                <p className="text-2xl font-bold text-white">"Dual-Track Revenue transforma aprendizado em receita enquanto você descobre o que funciona."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE 3: SYNAPSE MATCH MAKER */}
        <section id="case-synapse-matchmaker" className="case-section-wrapper section-solid">
          <div className="container reveal-up">
            <div className="case-header">
              <Share2 className="case-icon" />
              <div>
                <h2>Synapse B2B Match Maker</h2>
                <p>Cortex GTM™ virando produto (meta-aplicação)</p>
              </div>
            </div>
             <div className="case-grid">
              <div className="case-column">
                <h3>O Contexto</h3>
                <p>Ecossistemas de networking (grupos, comunidades) com enorme valor potencial, mas com informação perdida em conversas e planilhas, gerando zero confluência estratégica e sobrecarga para os coordenadores.</p>
                <h4 className="mt-4">Diagnóstico Cortex GTM™</h4>
                <p className="diagnosis-text">Decisões cognitivamente caras (buscar, filtrar, comparar) travando a ação. Uma ferramenta que toma essas decisões pelo usuário gera uma aceleração radical.</p>
              </div>
              <div className="case-column">
                <h3>A Solução: Transformar Método em Produto</h3>
                <p>Criamos uma ferramenta proprietária de matching inteligente que aplica as lentes do Cortex GTM™ ao design de produto, reduzindo a fricção cognitiva e entregando 3 matches perfeitos em segundos.</p>
                <p className="mt-4">Com arquitetura multi-tenant, o sistema é versátil para Educação (alunos ↔ mentores), Investimento (startups ↔ investidores) e qualquer ecossistema que precise organizar relacionamentos.</p>
              </div>
            </div>
            <div className="case-result">
              <h3>Resultado Tangível: Do Caos à Inteligência</h3>
              <div className="before-after-grid">
                <div className="before-card">
                  <h4>ANTES</h4>
                  <p>Informação perdida → oportunidades invisíveis → networking desperdiçado</p>
                </div>
                <div className="after-card">
                  <h4>DEPOIS</h4>
                  <p>3 matches perfeitos em 10s → decisão instantânea → conexões estratégicas</p>
                </div>
              </div>
              <div className="highlight-box mt-4">
                <p className="text-2xl font-bold text-white">"A mesma lógica que destrava receita em empresas B2B agora destrava conexões em ecossistemas."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE 4: MATHPOP */}
        <section id="case-mathpop" className="case-section-wrapper section-with-gradient-glow">
          <div className="container reveal-up">
            <div className="case-header">
              <GraduationCap className="case-icon" />
              <div>
                <h2>MathPop</h2>
                <p>Cortex GTM™ aplicado à Andragogia (prova de universalidade do método)</p>
              </div>
            </div>
             <div className="case-grid">
              <div className="case-column">
                <h3>O Contexto</h3>
                <p>O desafio de ensinar matemática de forma envolvente para crianças que acham a matéria "chata" ou "difícil", combatendo o aprendizado baseado em "decoreba" de fórmulas sem contexto.</p>
                <h4 className="mt-4">Diagnóstico Cortex GTM™</h4>
                <p className="diagnosis-text">O mesmo problema de B2B: conteúdo tecnicamente correto sem clareza de valor não gera engajamento. A complexidade precisa se conectar ao "job" real do usuário (a criança quer se divertir).</p>
              </div>
              <div className="case-column">
                <h3>A Solução: Gamificação com Lente Andragógica</h3>
                <p>Aplicamos os princípios do aprendizado adulto de forma expandida para criar o MathPop, um app de gamificação inteligente onde a matemática é aplicada a desafios lúdicos.</p>
                <p className="mt-4">O foco é em aprendizado orientado a problema, experiência imediata e motivação intrínseca, ativando o Sistema 1 (diversão) antes do Sistema 2 (raciocínio).</p>
              </div>
            </div>
            <div className="case-result">
              <h3>Resultado Tangível: A Prova da Universalidade</h3>
              <div className="success-grid" style={{textAlign: 'left'}}>
                <p><Check /> Se o Cortex GTM™ funciona para Healthtech complexa...</p>
                <p><Check /> Se funciona para Engenharia invisível...</p>
                <p><Check /> Se funciona para Ecossistemas caóticos...</p>
                <p><Check /> E para uma criança de 10 anos...</p>
              </div>
              <div className="highlight-box mt-4">
                <p className="text-2xl font-bold text-white">"Cortex GTM™ não é estratégia de nicho. É uma ciência de traduzir complexidade em clareza que qualquer cérebro humano consegue processar."</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Bloco de Conclusão */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">O Que Esses Quatro Cases Provam</h2>
          <p className="lead-text">O princípio é sempre o mesmo: complexidade sem clareza é potencial desperdiçado. Se você tem potencial travado, Cortex GTM™ destrava.</p>
          <div className="highlight-box">
             <h4>Reconhece seu contexto em algum desses cases?</h4>
             <div className="section-cta">
                <Link href="/contato" className="btn btn-primary">
                  <span>Agendar Diagnóstico Estratégico (21min)</span><ArrowRight size={20} />
                </Link>
             </div>
             <p className="cta-support-text">Primeira conversa: 21 minutos para avaliar fit mútuo. Só clareza sobre se conseguimos gerar valor real para você.</p>
          </div>
        </div>
      </section>
    </>
  );
}