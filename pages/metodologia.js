// pages/metodologia.js

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Zap, Target, BarChart } from 'lucide-react';

export default function MetodologiaPage() {
  // Hook para animações de scroll
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

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Metodologia Cortex GTM™ | Synapse B2B</title>
        <meta name="description" content="Conheça o Cortex GTM™, o sistema operacional da sua estratégia de receita, desenhado para traduzir genialidade técnica em liderança de mercado." />
        <link rel="canonical" href="https://synapseb2b.com/metodologia" />
      </Head>

      {/* --- Seção Hero --- */}
      <section className="hero-section" style={{ minHeight: '70vh' }}>
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home_metodologia.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center reveal-up">
          <h1 className="hero-headline">Genialidade técnica não se traduz em receita. A não ser que exista um sistema para isso.</h1>
          <p className="hero-subheadline">No B2B complexo, a superioridade do produto não garante a liderança de mercado. O crescimento é travado por um gap entre o valor que sua solução entrega e o valor que o cliente percebe. Nós não vendemos serviços para preencher essa lacuna. Nós instalamos o sistema que a elimina.</p>
        </div>
      </section>

      {/* --- Bloco 2: O Desafio Central --- */}
      <section id="desafio" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Paradoxo do Valor no B2B Complexo</h2>
          <p className="lead-text">Empresas com alta competência técnica frequentemente enfrentam um paradoxo: quanto mais sofisticada e superior é a solução, mais difícil se torna comunicar seu valor de forma clara. O resultado é um ciclo de receita que não reflete o verdadeiro potencial do negócio.</p>
          <div className="card-grid-three">
            <div className="symptom-card">
              <p><strong>Dor 1:</strong> O time de vendas luta para conectar os atributos técnicos da solução com os problemas de negócio do C-level.</p>
            </div>
            <div className="symptom-card">
              <p><strong>Dor 2:</strong> O ciclo de decisão se alonga porque os compradores não têm a segurança necessária para justificar o investimento internamente.</p>
            </div>
            <div className="symptom-card">
              <p><strong>Dor 3:</strong> A competição por preço se sobrepõe à discussão de valor, comoditizando sua expertise.</p>
            </div>
          </div>
          <div className="highlight-box">
            <p>Superar este paradoxo não exige mais esforço, exige uma arquitetura diferente. Exige um sistema projetado para traduzir complexidade em clareza e clareza em receita.</p>
          </div>
        </div>
      </section>

      {/* --- Bloco 3: Apresentando o Cortex GTM™ --- */}
      <section id="cortex-gtm" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Cortex GTM™: O Sistema Operacional da sua Estratégia de Receita</h2>
          <p className="lead-text">O Cortex GTM™ é nosso framework proprietário de diagnóstico e arquitetura de Go-To-Market. Ele foi desenhado para resolver o Paradoxo do Valor, decodificando sua genialidade técnica e a traduzindo em uma tese de negócio que torna a sua solução a única escolha lógica para o cliente certo.</p>
          <div className="framework-diagram-container">
            {/* O ideal é que a imagem seja um SVG ou PNG de alta qualidade */}
            <Image src="/image/cortex_gtm_diagram.png" alt="Diagrama do framework Cortex GTM" width={1000} height={600} objectFit="contain" />
          </div>
          <p className="lead-text" style={{ fontStyle: 'italic', marginTop: '2rem' }}>
            O sistema integra a ciência do comportamento humano (Neurociência, Andragogia ), a disciplina dos modelos de negócio mais validados do mundo (Category Design, Value Proposition Design) e a precisão dos frameworks de vendas B2B (MEDDIC, Challenger Sale). O resultado é um blueprint que guia cada decisão de receita com base em dados e método, não em achismo.
          </p>
        </div>
      </section>

      {/* --- Bloco 4: A Arquitetura do Sistema - As 3 Fases --- */}
      <section id="arquitetura" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">A Arquitetura do Sistema - As 3 Fases</h2>
          
          {/* Fase 1 */}
          <div className="phase-container">
            <h3 className="phase-title">Fase 1: Diagnóstico – O Raio-X da Oportunidade</h3>
            <p className="phase-description">Antes de construir, medimos. Esta fase é uma imersão profunda para extrair a verdade sobre seu cliente, seu mercado e seu posicionamento real. O entregável é clareza total sobre o campo de batalha.</p>
            <div className="module-grid">
              <div className="module-card"><h4>Módulo 1.1: Problema Crítico & Custo da Inação</h4><p>Decodificamos a dor de negócio que justifica o investimento na sua solução e quantificamos o custo de não agir, armando seu time com um caso de negócio irrefutável.</p></div>
              <div className="module-card"><h4>Módulo 1.2: Perfil do Comprador Ideal (ICP) & Jobs-to-be-Done (JTBD)</h4><p>Mapeamos o perfil funcional e psicológico do seu decisor. Entendemos o "trabalho" que ele precisa resolver ao "contratar" sua solução, descobrindo o verdadeiro gatilho da compra.</p></div>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="phase-container">
            <h3 className="phase-title">Fase 2: Arquitetura — O Blueprint da sua Liderança de Mercado</h3>
            <p className="phase-description">Com o diagnóstico em mãos, desenhamos a estrutura da sua narrativa e posicionamento. É aqui que a clareza se transforma em uma vantagem competitiva defensável.</p>
            <div className="module-grid">
              <div className="module-card"><h4>Módulo 2.1: Tese de Mercado e Design de Categoria</h4><p>Construímos sua narrativa estratégica central. Posicionamos você não como a melhor escolha dentro de uma categoria existente, mas como o criador de uma nova categoria que você lidera.</p></div>
              <div className="module-card"><h4>Módulo 2.2: Proposta de Valor e Arquitetura de Provas</h4><p>Conectamos os pilares da sua solução diretamente às dores e aos "jobs" do cliente. Definimos as provas (quantitativas, qualitativas, sociais) necessárias para eliminar o risco da compra.</p></div>
            </div>
          </div>

          {/* Fase 3 */}
          <div className="phase-container">
            <h3 className="phase-title">Fase 3: Ativação – O Motor de Tração de Receita</h3>
            <p className="phase-description">Estratégia sem execução é alucinação. Nesta fase, traduzimos o blueprint em ativos e movimentos de mercado que geram pipeline qualificado e receita mensurável.</p>
            <div className="module-grid">
              <div className="module-card"><h4>Módulo 3.1: Construção de Ativos de Conversão</h4><p>Desenvolvemos as ferramentas de alta performance que sua equipe precisa para vender valor: Pitch Decks, Plataformas Digitais de Aceleração, Calculadoras de ROI, etc.</p></div>
              <div className="module-card"><h4>Módulo 3.2: Playbooks de Vendas e Aceleração</h4><p>Equipamos seu time com o discurso, os rituais e os processos para executar a nova tese de mercado com consistência e disciplina, do primeiro contato ao fechamento.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Bloco 5: Por que Funciona --- */}
      <section id="principios" className="section-with-gradient-glow">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Nosso compromisso não é com a entrega de um projeto. É com a construção de um ativo de receita.</h2>
          <div className="card-grid-three">
            <div className="solution-card">
              <Target className="card-icon" />
              <h4>Princípio 1: Foco em Ativos, não em Campanhas</h4>
              <p>Campanhas têm vida útil. Ativos geram valor composto. Construímos sistemas e ferramentas que se tornam parte do seu valuation.</p>
            </div>
            <div className="solution-card">
              <BarChart className="card-icon" />
              <h4>Princípio 2: Ciência, não Subjetividade</h4>
              <p>Cada recomendação é baseada em frameworks validados e na ciência do comportamento, reduzindo drasticamente o risco da sua estratégia de crescimento.</p>
            </div>
            <div className="solution-card">
              <Zap className="card-icon" />
              <h4>Princípio 3: Alinhamento de Performance</h4>
              <p>Não somos consultores que opinam à distância. Nosso modelo nos alinha diretamente ao seu sucesso. Nosso maior ganho é uma consequência direta do seu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Bloco 6: Chamada Final --- */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Sua genialidade merece um sistema à altura.</h2>
          <p className="lead-text">Se você está pronto para parar de competir em um mercado que não entende seu valor e começar a criar uma categoria que você domina, o próximo passo é claro.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agende uma Sessão de Diagnóstico Estratégico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
