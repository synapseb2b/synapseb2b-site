// pages/index.js
// VERSÃO ATUALIZADA: Nova copy da Hero + Estrutura de navegação simplificada

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Brain, Users, Award, GitBranch, Target, TrendingUp, Zap, CheckCircle2, Layers, LineChart, ShieldCheck, Gem, Layout, MonitorSmartphone, Box, Mail } from 'lucide-react';

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
        <title>Synapse B2B | Engenharia de Receita e Governança de Crescimento</title>
        <meta name="description" content="Entregamos os instrumentos para que a liderança retome o controle sobre a trajetória de receita. Método, não improviso. Governança, não sorte." />
      </Head>

      {/* ====================================================================== */}
      {/* Seção 1: Hero Section                                                  */}
      {/* ====================================================================== */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content reveal-up">
          
          <h1 className="hero-headline">
            Engenharia de Receita e Governança de Crescimento
          </h1>
          
          <p className="hero-subheadline lead-text">
            Entregamos os instrumentos para que a liderança retome o controle sobre a trajetória de receita. Método, não improviso. Governança, não sorte.
          </p>
          
          <div className="hero-ctas" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="#metodo" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Conhecer o Método</span>
              <ArrowRight size={20} />
            </a>
            <a href="/cases" className="btn">
              <span>Ver Cases de Sucesso</span>
            </a>
          </div>

          {/* Trust Bar */}
          <div className="trust-bar reveal-up">
            <p style={{marginBottom: '2rem', fontSize: '1rem', opacity: 0.8, textAlign: 'center'}}>
              Experiência acumulada nos maiores ecossistemas B2B do mundo:
            </p>
            <div className="trust-bar-logos">
              <div className="trust-logo"><Image src="/logo/logo-google.png" alt="Google" width={100} height={32} objectFit="contain" /></div>
              <div className="trust-logo"><Image src="/logo/logo-microsoft.png" alt="Microsoft" width={100} height={32} objectFit="contain" /></div>
              <div className="trust-logo"><Image src="/logo/logo-dell.png" alt="Dell" width={100} height={32} objectFit="contain" /></div>
              <div className="trust-logo"><Image src="/logo/logo-totvs.png" alt="TOTVS" width={100} height={32} objectFit="contain" /></div>
              <div className="trust-logo"><Image src="/logo/logo-keepit.png" alt="Keepit" width={100} height={32} objectFit="contain" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 2: Diagnóstico Rápido                                            */}
      {/* ====================================================================== */}
      <section id="sintomas" className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Você reconhece estes sintomas?</h2>
          
          <div className="truths-grid-revolutionary">
            <div className="glass-card-premium">
              <h3 className="truth-card-title">Esforço Máximo, Resultado Instável</h3>
              <p>Você contrata ferramentas, testa canais e exige mais do time, mas o ponteiro não move na mesma proporção. O mercado não percebe seu valor real e cada venda exige um esforço desproporcional de convencimento porque falta posicionamento, não esforço.</p>
            </div>
            
            <div className="glass-card-premium">
              <h3 className="truth-card-title">Investimento Sem Rastreabilidade</h3>
              <p>Você assina os cheques de marketing e vendas, mas não sabe dizer qual real investido trouxe o contrato assinado. O ciclo de vendas não encurta e a eficiência cai à medida que você tenta escalar. O problema é a ausência de Engenharia de Receita no processo comercial.</p>
            </div>

            <div className="glass-card-premium card-wide">
              <h3 className="truth-card-title">Dependência de "Talento" vs. Processo</h3>
              <p>O faturamento depende da performance individual de vendedores sêniores (ou dos sócios). Se eles saírem, a receita cai. O crescimento está alicerçado em conhecimento tácito (na cabeça das pessoas), não em um playbook validado e transferível.</p>
            </div>
          </div>

          <p className="lead-text" style={{ marginTop: '4rem', fontStyle: 'italic', color: 'var(--color-heading)', textAlign: 'center' }}>
            Você não precisa de mais vendedores. Você precisa de um sistema de vendas. A diferença entre uma empresa estagnada e uma scale-up é a substituição do talento individual pelo método institucional.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 3: O Método (Âncora #metodo)                                     */}
      {/* ====================================================================== */}
      <section id="metodo" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">O Método: Os 4 Pilares da Engenharia de Receita</h2>
          <p className="lead-text">
            A estrutura necessária para transformar vendas complexas em processo repetível.
          </p>
          
          <div className="pillar-grid-revolutionary">
            
            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><Gem size={32} /></div>
              <h3 className="pillar-card-title">Clareza de Valor</h3>
              <p className="pillar-card-description">Decodificamos sua competência técnica em autoridade de mercado. Seu cliente ideal precisa entender o impacto financeiro que você gera em 30 segundos, sem depender de reuniões técnicas intermináveis.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><GitBranch size={32} /></div>
              <h3 className="pillar-card-title">Arquitetura Comercial</h3>
              <p className="pillar-card-description">O blueprint do seu motor de receita. Definimos processos, canais e rituais de gestão para que a meta seja batida pelo processo, e não pelo heroísmo de fim de mês.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><ShieldCheck size={32} /></div>
              <h3 className="pillar-card-title">Governança de Execução</h3>
              <p className="pillar-card-description">Estratégia sem execução é alucinação. Atuamos com liderança sênior na linha de frente para garantir que o playbook seja seguido, os dados sejam limpos e a cultura de alta performance seja instalada.</p>
            </div>

            <div className="glass-card-premium">
              <div className="pillar-icon-wrapper premium-glow"><Layers size={32} /></div>
              <h3 className="pillar-card-title">Ativos que Convertem</h3>
              <p className="pillar-card-description">Transformamos sua presença digital em uma ferramenta de vendas 24/7. Educamos o comprador e provamos valor técnico antes mesmo da primeira reunião, encurtando ciclos de negociação.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 4: Frentes de Atuação (2 Pilares)                                */}
      {/* ====================================================================== */}
      <section id="frentes" className="section-solid">
        <div className="container"> 
          <h2 className="section-title reveal-up">Frentes de Atuação</h2>
          <p className="lead-text reveal-up">Do diagnóstico estratégico à infraestrutura digital de alta performance.</p>

          {/* PILAR 1: Inteligência & Estratégia */}
          <div style={{marginBottom: '6rem', width: '100%'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}} className="reveal-up">
              <div className="pillar-icon-wrapper premium-glow"><Brain size={40} /></div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Inteligência & Estratégia</h3>
              <p style={{marginTop: '0.5rem', marginBottom: '0'}}>Direção clara, correção de rota e governança executiva.</p>
            </div>
            
            <div className="solutions-grid-revolutionary reveal-up">
               
               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper premium-glow"><CheckCircle2 size={32} /></div>
                  <h3 className="pillar-card-title">Diagnóstico de Maturidade B2B</h3>
                  <p>Análise técnica e imparcial dos processos atuais para identificar gargalos de receita e falhas estruturais de posicionamento. O "Raio-X" que revela onde a estratégia falha na prática.</p>
                  <a href="/inteligencia-e-estrategia" className="btn">Saber mais</a>
               </div>

               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper premium-glow"><Target size={32} /></div>
                  <h3 className="pillar-card-title">Blueprint de Go-To-Market</h3>
                  <p>Plano diretor que define o perfil de cliente ideal (ICP), segmentação de mercado e a arquitetura de canais mais eficiente para o seu ticket médio. Estratégia que vira execução.</p>
                  <a href="/inteligencia-e-estrategia" className="btn">Saber mais</a>
               </div>

               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper premium-glow"><Gem size={32} /></div>
                  <h3 className="pillar-card-title">Narrativa de Valor Autoritativa</h3>
                  <p>Reestruturação da mensagem comercial para evidenciar o problema crítico que a empresa resolve, eliminando a comparação por preço e estabelecendo autoridade imediata.</p>
                  <a href="/inteligencia-e-estrategia" className="btn">Saber mais</a>
               </div>

               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper premium-glow"><Users size={32} /></div>
                  <h3 className="pillar-card-title">Advisory Board & Mentoria</h3>
                  <p>Suporte executivo sênior para momentos de expansão, mudança de modelo de negócio ou destravamento de canais, garantindo disciplina na execução da estratégia.</p>
                  <a href="/inteligencia-e-estrategia" className="btn">Saber mais</a>
               </div>
            </div>
          </div>

          {/* PILAR 2: Ativos de Performance */}
          <div style={{marginBottom: '2rem', width: '100%'}}>
             <div style={{textAlign: 'center', marginBottom: '2rem'}} className="reveal-up">
                <div className="pillar-icon-wrapper premium-glow"><MonitorSmartphone size={40} /></div>
                <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Ativos de Performance</h3>
                <p style={{marginTop: '0.5rem', marginBottom: '0'}}>Infraestrutura digital que educa, qualifica e vende 24/7.</p>
             </div>
             
             <div className="solutions-grid-revolutionary reveal-up">
                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper premium-glow"><Layout size={32} /></div>
                   <h3 className="pillar-card-title">Plataformas de Conversão</h3>
                   <p>Interfaces focadas em Qualificação e Educação, garantindo que o prospect chegue à reunião comercial consciente do valor da solução. Não construímos sites institucionais — projetamos máquinas de demanda.</p>
                   <a href="/ativos-de-performance" className="btn">Saber mais</a>
                </div>

                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper premium-glow"><TrendingUp size={32} /></div>
                   <h3 className="pillar-card-title">Apps Estratégicos de Receita</h3>
                   <p>Calculadoras de ROI, simuladores de viabilidade e dashboards que tornam o benefício técnico tangível para o decisor financeiro. Ferramentas que aceleram o ciclo de venda.</p>
                   <a href="/ativos-de-performance" className="btn">Saber mais</a>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 5: Cases                                                         */}
      {/* ====================================================================== */}
      <section id="cases" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Da Complexidade à Tração</h2>
          <p className="lead-text">Resultados reais de quem substituiu intuição por método.</p>
          
          <div className="case-grid">
            
            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper premium-glow"><Award size={32} /></div>
               <h3 className="case-card-title">Versão Holística</h3>
               <p><strong>Contexto:</strong> Tecnologia validada, mas com dificuldade de penetração em grandes contas (Hospitais) devido a um discurso excessivamente técnico.</p>
               <p><strong>Resultado:</strong> R$ 500k captados e validação de canal enterprise.</p>
               <a href="/cases" className="btn">Ver Case</a>
            </div>

            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper premium-glow"><GitBranch size={32} /></div>
               <h3 className="case-card-title">Exclusiva Engenharias</h3>
               <p><strong>Contexto:</strong> Empresa de engenharia consolidada, mas refém de indicações e sazonalidade. Sem previsibilidade de novos contratos.</p>
               <p><strong>Resultado:</strong> Pipeline recorde (3x histórico) e redução da dependência dos sócios.</p>
               <a href="/cases" className="btn">Ver Case</a>
            </div>

            <div className="glass-card-premium card-wide">
               <div className="pillar-icon-wrapper premium-glow"><ShieldCheck size={32} /></div>
               <h3 className="case-card-title">AORKIA</h3>
               <p><strong>Contexto:</strong> Desafio de entrar em um mercado comoditizado (Backup) dominado por gigantes globais, sem histórico de marca.</p>
               <p><strong>Resultado:</strong> Conquista de grande conta (1.200 usuários) em apenas 45 dias.</p>
               <a href="/cases" className="btn">Ver Case</a>
            </div>

          </div>

          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link href="/cases" className="btn">
              <span>Ver todos os cases detalhados</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 6: Diferencial (20 anos)                                         */}
      {/* ====================================================================== */}
      <section id="diferencial" className="section-solid">
        <div className="container reveal-up">
          <div className="glass-card-premium card-wide">
            <div className="pillar-icon-wrapper premium-glow">
              <LineChart size={32} />
            </div>
            <h3>O Diferencial Synapse B2B</h3>
            <p className="lead-text">
              Não somos uma agência. Somos engenheiros que entendem a dor da cadeira de CEO.
            </p>
            <p>Aplicamos o que aprendemos em <strong>20 anos de Big Tech</strong> — Dell, Google, Microsoft, Totvs — para negócios que não podem falhar.</p>
            <p style={{marginTop: '1.5rem'}}>
              <strong>Precisão Técnica:</strong> Diagnóstico via Cortex B2B™, meta-framework proprietário.<br/>
              <strong>Segurança Executiva:</strong> Direcionamento de quem operou nos maiores ecossistemas.<br/>
              <strong>Escala com Governança:</strong> Playbooks e ativos que retiram o fundador do gargalo.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 7: CTA Final                                                     */}
      {/* ====================================================================== */}
      <section className="final-cta-section">
        <div className="container reveal-up">
          <h2 className="section-title">
            Sua empresa está pronta para o próximo nível de maturidade comercial?
          </h2>
          <p className="lead-text">
            Se você fatura e sente que sua operação comercial é o gargalo, nós temos o método para destravar.
          </p>
          <a href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
            <span>Agendar Diagnóstico Executivo</span>
            <ArrowRight size={20} />
          </a>
          <p style={{marginTop: '1rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem'}}>
            Uma conversa de negócios. Sem pressão de vendas, apenas alinhamento estratégico.
          </p>
        </div>
      </section>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .trust-bar-logos { gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}