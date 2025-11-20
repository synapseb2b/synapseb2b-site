// pages/index.js
// VERSÃO MESTRA: COPY 100% COMPLETA E CENTRALIZADA

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
        <title>Synapse B2B | Engenharia de Receita para Empresas B2B</title>
        <meta name="description" content="Transformamos crescimento por indicação em receita previsível. O método que tira sua empresa do improviso e coloca você no controle." />
      </Head>

      {/* ====================================================================== */}
      {/* Seção 1: Hero Section (Centralização garantida pelo globals.css)       */}
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
            Engenharia de Receita para Empresas B2B
            <br/>
            que Precisam de Crescimento Previsível
          </h1>
          
          <p className="hero-subheadline lead-text">
            Transformamos operações comerciais dependentes de improviso e esforço manual em máquinas de receita previsível. Instalamos o método completo — da estratégia à execução — para sua empresa escalar com governança.
          </p>
          
          <div className="hero-ctas" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico (21min)</span>
              <ArrowRight size={20} />
            </a>
            <a href="/a-engenharia" className="btn">
              <span>Conhecer a Engenharia de Receita</span>
            </a>
          </div>

          {/* Barra de Confiança */}
          <div className="trust-bar reveal-up" style={{width: '100%', maxWidth: '900px', margin: '6rem auto 0 auto'}}>
            <p style={{marginBottom: '2rem', fontSize: '1rem', opacity: 0.8, textAlign: 'center'}}>Método forjado em ecossistemas de alta performance:</p>
            <div className="trust-bar-logos" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '3rem', opacity: 0.6, filter: 'grayscale(100%) contrast(50%)'}}>
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
      {/* Seção 2: Você Reconhece Estes Sintomas? (Diagnóstico Rápido)           */}
      {/* ====================================================================== */}
      <section id="sintomas" className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Você reconhece estes sintomas?</h2>
          
          <div className="truths-grid-revolutionary">
            <div className="glass-card-premium">
              <h3 className="truth-card-title">1. Esforço Máximo, Resultado Instável</h3>
              <p>Você contrata ferramentas, testa canais e exige mais do time, mas o ponteiro não move na mesma proporção. O mercado não percebe seu valor real e cada venda exige um esforço desproporcional de convencimento porque falta posicionamento, não esforço.</p>
            </div>
            
            <div className="glass-card-premium">
              <h3 className="truth-card-title">Investimento Sem Rastreabilidade</h3>
              <p>Você assina os cheques de marketing e vendas, mas não sabe dizer qual real investido trouxe o contrato assinado. O ciclo de vendas não encurta e a eficiência cai à medida que você tenta escalar. O problema é a ausência de Engenharia de Receita no processo comercial.</p>
            </div>

            <div className="glass-card-premium">
              <h3 className="truth-card-title">Dependência de "Talento" vs. Processo</h3>
              <p>O faturamento depende da performance individual de vendedores sêniores (ou dos sócios). Se eles saírem, a receita cai. O crescimento está alicerçado em conhecimento tácito (na cabeça das pessoas), não em um playbook validado e transferível.</p>
            </div>
          </div>

          <p className="lead-text" style={{ marginTop: '4rem', fontStyle: 'italic', color: 'var(--color-heading)' }}>
            Você não precisa de mais vendedores. Você precisa de um sistema de vendas. A diferença entre uma empresa estagnada e uma scale-up é a substituição do talento individual pelo método institucional.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 3: O Método: Os 4 Pilares da Engenharia de Receita               */}
      {/* ====================================================================== */}
      <section id="engenharia-de-receita" className="section-with-gradient-glow">
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
      {/* Seção 4: Soluções de Engenharia de Receita (Copy 100% Completa)        */}
      {/* ====================================================================== */}
      <section id="solucoes" className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title">Soluções de Engenharia de Receita</h2>
          <p className="lead-text">Do diagnóstico estratégico à gestão interina.</p>

          {/* --- FRENTE 1: INTELIGÊNCIA E ESTRATÉGIA --- */}
          <div style={{marginBottom: '6rem', width: '100%'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div className="pillar-icon-wrapper premium-glow"><Brain size={40} /></div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Pilar 1: Inteligência e Estratégia</h3>
              <p style={{marginTop: '0.5rem', marginBottom: '0'}}>Para quem precisa de direção clara e correção de rota.</p>
            </div>
            
            <div className="solutions-grid-revolutionary">
               
               {/* Sprint de Validação Comercial */}
               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper premium-glow"><Zap size={32} /></div>
                  <h3 className="pillar-card-title">Sprint de Validação Comercial</h3>
                  <p><strong>O que é:</strong> Validação de mercado baseada em dados, não em intuição. O entregável é a verdade: testamos a aderência da tese antes de você escalar custos fixos. É um seguro para evitar que você gaste R$ 50k+ construindo a solução errada para o problema certo.</p>
                  <p><strong>Ideal para:</strong> Mitigação de risco em lançamentos ou pivôs de modelo de negócio.</p>
                  <p><strong>Investimento:</strong> Investimento Único (Pré-fixado).</p>
                  <a href="/pilares/inteligencia-e-estrategia/sprint-validacao" className="btn">
                     Agendar
                  </a>
               </div>

               {/* Go-To-Market Completo (GTM) */}
               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper premium-glow"><Target size={32} /></div>
                  <h3 className="pillar-card-title">Go-To-Market Completo (GTM)</h3>
                  <p><strong>O que é:</strong> Engenharia de GTM aplicada. Não entregamos apenas um plano estático, mas a Arquitetura de Receita completa. Preenchemos a lacuna crítica entre estratégia e execução, desenhando do ICP à Retenção para garantir que o crescimento seja sistêmico, não acidental.</p>
                  <p><strong>Ideal para:</strong> Empresas que precisam corrigir instabilidade de receita ou CAC insustentável.</p>
                  <p><strong>Investimento:</strong> Setup Estratégico + % sobre Receita Nova.</p>
                  <a href="/pilares/inteligencia-e-estrategia/gtm-completo" className="btn">
                    Ver mais
                  </a>
               </div>

               {/* Diretoria de Receita (CRO as a Service) */}
               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper premium-glow"><Users size={32} /></div>
                  <h3 className="pillar-card-title">Diretoria de Receita (CRO as a Service)</h3>
                  <p><strong>O que é:</strong> Liderança executiva fracionada. Injetamos a governança de um C-Level sênior para liderar a construção da máquina, garantindo que a cultura de dados e a performance do time sejam instaladas sem o custo fixo integral de um executivo de mercado.</p>
                  <p><strong>Ideal para:</strong> Profissionalizar a gestão comercial e potencializar a atuação estratégica dos fundadores (Founder Led Growth).</p>
                  <p><strong>Investimento:</strong> Retainer Mensal (Fixo) + % sobre Receita Nova.</p>
                  <a href="/pilares/inteligencia-e-estrategia/cro-service" className="btn">
                    Entender
                  </a>
               </div>

               {/* Advisory Board Estratégico */}
               <div className="glass-card-premium">
                  <div className="pillar-icon-wrapper premium-glow"><ShieldCheck size={32} /></div>
                  <h3 className="pillar-card-title">Advisory Board Estratégico</h3>
                  <p><strong>O que é:</strong> Sparring executivo para momentos de inflexão. Acompanhamento sênior para navegar movimentações de mercado, fusões ou reestruturações, garantindo clareza na tomada de decisão estratégica sob a ótica de eficiência de capital.</p>
                  <p><strong>Ideal para:</strong> Decisões de alto impacto que exigem validação externa qualificada.</p>
                  <p><strong>Investimento:</strong> Sessões de Decisão ou Board Packs (Single Shot).</p>
                  <a href="/pilares/inteligencia-e-estrategia/advisory-board" className="btn">
                    Solicitar Board
                  </a>
               </div>
            </div>
          </div>

          {/* --- FRENTE 2: ATIVOS DIGITAIS --- */}
          <div style={{marginBottom: '6rem', width: '100%'}}>
             <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div className="pillar-icon-wrapper premium-glow"><MonitorSmartphone size={40} /></div>
                <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Pilar 2: Ativos Digitais</h3>
                <p style={{marginTop: '0.5rem', marginBottom: '0'}}>Ferramentas que vendem por você.</p>
             </div>
             
             <div className="solutions-grid-revolutionary">
                {/* Plataformas Digitais */}
                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper premium-glow"><Layout size={32} /></div>
                   <h3 className="pillar-card-title">Plataformas Digitais</h3>
                   <p><strong>O que é:</strong> Engenharia de conversão aplicada ao digital. Transformamos sites institucionais em Revenue Hubs (centros operacionais de captação e processamento de demanda). Eles operam como filtros de qualificação técnica, educando decisores e gerando oportunidades maduras 24/7, sem intervenção humana inicial.</p>
                   <p><strong>Exemplos:</strong> exclusivaengenharias.com, versaoholistica.com.br</p>
                   <p><strong>Ideal para:</strong> Transformar tráfego de curiosos em reuniões com decisores.</p>
                   <p><strong>Investimento:</strong> Projeto sob Medida (Discovery + Execução).</p>
                   <a href="/pilares/ativos-digitais/plataformas-digitais" className="btn">
                     Ver exemplos
                   </a>
                </div>

                {/* Ferramentas de Aceleração de Receita */}
                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper premium-glow"><TrendingUp size={32} /></div>
                   <h3 className="pillar-card-title">Ferramentas de Aceleração de Receita</h3>
                   <p><strong>O que é:</strong> Engenharia de Valor tangível. Desenvolvimento de CRMs, calculadoras e interfaces que materializam a promessa da marca. Traduzimos complexidade técnica em usabilidade para elevar a percepção de valor e acelerar o ciclo de vendas (Product-Led Sales).</p>
                   <p><strong>Ideal para:</strong> Tangibilizar o posicionamento e oferecer uma primeira experiência real ao usuário.</p>
                   <p><strong>Investimento:</strong> Projeto sob Medida.</p>
                   <a href="/pilares/ativos-digitais/apps" className="btn">
                     Explorar
                   </a>
                </div>
             </div>
          </div>

          {/* --- FRENTE 3: SOLUÇÕES VERTICAIS --- */}
          <div style={{marginBottom: '2rem', width: '100%'}}>
             <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div className="pillar-icon-wrapper premium-glow"><Box size={40} /></div>
                <h3 style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Pilar 3: Soluções Verticais</h3>
                <p style={{marginTop: '0.5rem', marginBottom: '0'}}>Metodologias proprietárias para contextos específicos.</p>
             </div>
             
             <div className="solutions-grid-revolutionary">
                {/* Diagnóstico Cortex B2B™ */}
                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper premium-glow"><CheckCircle2 size={32} /></div>
                   <h3 className="pillar-card-title">Diagnóstico Cortex B2B™</h3>
                   <p><strong>O que é:</strong> O "Raio-X" da maturidade do negócio sob 5 lentes analíticas. Identificamos o Gap de Execução — onde a estratégia falha na prática — e definimos as alavancas exatas de GTM Engineering para destravar o crescimento imediato.</p>
                   <p><strong>Ideal para:</strong> Direcionamento estratégico fundamentado antes de rodadas ou expansão.</p>
                   <p><strong>Investimento:</strong> Sob consulta.</p>
                   <a href="/pilares/solucoes-verticais/cortex-b2b" className="btn">
                     Conhecer
                   </a>
                </div>

                {/* Match Maker B2B */}
                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper premium-glow"><Zap size={32} /></div>
                   <h3 className="pillar-card-title">Match Maker B2B</h3>
                   <p><strong>O que é:</strong> Inteligência de conexões para ecossistemas. Plataforma que organiza e potencializa o capital relacional (Ecosystem-Led Growth), transformando networking aleatório em conexões estratégicas baseadas em dados estruturados.</p>
                   <p><strong>Ideal para:</strong> Comunidades B2B, aceleradoras e hubs de inovação.</p>
                   <p><strong>Investimento:</strong> Setup da Plataforma + Licenciamento Mensal.</p>
                   <a href="/pilares/solucoes-verticais/match-maker" className="btn">
                     Agendar Demo
                   </a>
                </div>

                {/* Health Business Architecture™ */}
                <div className="glass-card-premium">
                   <div className="pillar-icon-wrapper premium-glow"><Target size={32} /></div>
                   <h3 className="pillar-card-title">Health Business Architecture™</h3>
                   <p><strong>O que é:</strong> Engenharia de receita aplicada à saúde. Convertemos autoridade clínica em um ecossistema de negócios escalável, criando ativos de receita recorrente e processos que transcendem a agenda física do profissional de saúde.</p>
                   <p><strong>Ideal para:</strong> Profissionais e Clínicas consolidadas buscando diversificação de receita e legado.</p>
                   <p><strong>Investimento:</strong> Setup Premium + % sobre Receita Nova.</p>
                   <a href="/pilares/solucoes-verticais/hba" className="btn">
                     Ativar Novas Receitas
                   </a>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 5: Da Complexidade à Tração (Cases de Sucesso)                   */}
      {/* ====================================================================== */}
      <section id="cases" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <h2 className="section-title">Da Complexidade à Tração</h2>
          
          <div className="case-grid">
            
            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper premium-glow"><Award size={32} /></div>
               <h3 className="case-card-title">Versão Holística</h3>
               <p><strong>Contexto:</strong> Tecnologia validada, mas com dificuldade de penetração em grandes contas (Hospitais) devido a um discurso excessivamente técnico.</p>
               <p><strong>Resultado:</strong> R$ 500k captados e validação de canal enterprise.</p>
               <a href="/cases/versao-holistica" className="btn">Ver Case</a>
            </div>

            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper premium-glow"><GitBranch size={32} /></div>
               <h3 className="case-card-title">Exclusiva Engenharias</h3>
               <p><strong>Contexto:</strong> Empresa de engenharia consolidada, mas refém de indicações e sazonalidade. Sem previsibilidade de novos contratos.</p>
               <p><strong>Resultado:</strong> Geração de pipeline recorde (3x histórico) e redução da dependência dos sócios na venda.</p>
               <a href="/cases/exclusiva-engenharias" className="btn">Ver Case</a>
            </div>

            <div className="glass-card-premium">
               <div className="pillar-icon-wrapper premium-glow"><ShieldCheck size={32} /></div>
               <h3 className="case-card-title">AORKIA</h3>
               <p><strong>Contexto:</strong> Desafio de entrar em um mercado comoditizado (Backup) dominado por gigantes globais, sem histórico de marca.</p>
               <p><strong>Resultado:</strong> Validação do método com a conquista de grande conta (1.200 usuários) em apenas 45 dias.</p>
               <a href="/cases/aorkia" className="btn">Ver Case</a>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* Seção 6: Princípio Unificador                                          */}
      {/* ====================================================================== */}
      <section id="principio" className="section-solid">
        <div className="container reveal-up">
          <div className="glass-card-premium" style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="pillar-icon-wrapper premium-glow">
              <LineChart size={32} />
            </div>
            <h3>O Que Une Esses Resultados?</h3>
            <p className="lead-text">
                Eles deixaram de vender <strong>"horas" ou "produtos"</strong> para vender <strong>resultados de negócio</strong>.
            </p>
            <p>Trocaram a intuição pela metodologia.</p>
            <p>Entenderam que para crescer, precisavam profissionalizar a interface com o mercado.</p>
            <p style={{marginTop: '2rem', fontWeight: 'bold'}}>Isso é Engenharia de Receita.</p>
            <div style={{marginTop: '2rem'}}>
              <a href="/a-engenharia" className="btn">
                <span>Conhecer Nossa Tese</span>
              </a>
            </div>
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
            <span>Agende um Diagnóstico Executivo (21min)</span>
            <ArrowRight size={20} />
          </a>
          <p style={{marginTop: '1rem', fontStyle: 'italic', opacity: 0.8, fontSize: '0.9rem'}}>
            Uma conversa de negócios. Sem pressão de vendas, apenas alinhamento estratégico.
          </p>
        </div>
      </section>
      
      {/* Estilos remanescentes que não podem ir para o global (Imagens) */}
      <style jsx>{`
        /* Ajuste Responsivo da barra de confiança */
        @media (max-width: 768px) {
          .trust-bar-logos { gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}