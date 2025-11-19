// pages/index.js
// Versão Final Ajustada: Spacing Corrigido, Sem Caixa Alta, CSS de Links Reforçado

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Users, Award, GitBranch, Target, TrendingUp, Zap, CheckCircle2, Layers, LineChart, ShieldCheck, Gem, Layout, MonitorSmartphone } from 'lucide-react';

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
        <meta name="description" content="Transformamos crescimento por indicação em receita previsível. O método que tira sua empresa do improviso e coloca você no controle." />
      </Head>

{/* ====================================================================== */}
      {/* Seção 1: Hero Section                                                */}
      {/* ====================================================================== */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          
          {/* HEADLINE */}
          <h1 className="hero-headline">
            Engenharia de Receita para Empresas B2B
            <br/>
            que Precisam de Crescimento Previsível
          </h1>
          
          {/* SUBHEADLINE */}
          <p className="hero-subheadline wider-on-desktop">
            Transformamos operações comerciais dependentes de improviso e esforço manual em máquinas de receita previsível. Instalamos o método completo — da estratégia à execução — para sua empresa escalar com governança.
          </p>
          
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico (21min)</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/a-engenharia" className="btn btn-secondary btn-large">
              <span>Conhecer a Engenharia de Receita</span>
            </Link>
          </div>

          {/* Barra de Confiança - AJUSTE 1: Mais Respiro */}
          <div className="trust-bar reveal-up" style={{marginTop: '6rem', paddingBottom: '2rem'}}>
            <p style={{marginBottom: '2rem', fontSize: '1rem', opacity: 0.8}}>Método forjado em ecossistemas de alta performance:</p>
            <div className="trust-bar-logos">
              <Image src="/logo/logo-google.png" alt="Google" width={100} height={32} />
              <Image src="/logo/logo-microsoft.png" alt="Microsoft" width={100} height={32} />
              <Image src="/logo/logo-dell.png" alt="Dell" width={100} height={32} />
              <Image src="/logo/logo-totvs.png" alt="TOTVS" width={100} height={32} />
              <Image src="/logo/logo-keepit.png" alt="Keepit" width={100} height={32} />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 2: O Diagnóstico Rápido (Sintomas)                             */}
      {/* ====================================================================== */}
      <section id="sintomas" className="section-solid section-truths-revolutionary">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Você reconhece estes sintomas?</h2>
          
          <div className="truths-grid-revolutionary" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem'}}>
            
            {/* Sintoma 1 */}
            <div className="glass-card-premium">
              <span className="truth-card-number">1.</span>
              <h3 className="truth-card-title">Esforço Máximo, Resultado Instável</h3>
              <p>Você contrata ferramentas, testa canais e exige mais do time, mas o ponteiro não move na mesma proporção. O mercado não percebe seu valor real e cada venda exige um esforço desproporcional de convencimento porque falta posicionamento, não esforço.</p>
            </div>
            
            {/* Sintoma 2 */}
            <div className="glass-card-premium">
              <span className="truth-card-number">2.</span>
              <h3 className="truth-card-title">Investimento Sem Rastreabilidade</h3>
              <p>Você assina os cheques de marketing e vendas, mas não sabe dizer qual real investido trouxe o contrato assinado. O ciclo de vendas não encurta e a eficiência cai à medida que você tenta escalar. O problema é a ausência de Engenharia de Receita no processo comercial.</p>
            </div>

            {/* Sintoma 3 */}
            <div className="glass-card-premium">
              <span className="truth-card-number">3.</span>
              <h3 className="truth-card-title">Dependência de "Talento" vs. Processo</h3>
              <p>O faturamento depende da performance individual de vendedores sêniores (ou dos sócios). Se eles saírem, a receita cai. O crescimento está alicerçado em conhecimento tácito (na cabeça das pessoas), não em um playbook validado e transferível.</p>
            </div>
          </div>

          <p className="lead-text text-center" style={{ maxWidth: '800px', margin: '4rem auto 0', fontStyle: 'italic', fontWeight: 500, color: 'var(--color-heading)' }}>
            Você não precisa de mais vendedores. Você precisa de um sistema de vendas. <br/>A diferença entre uma empresa estagnada e uma scale-up é a substituição do talento individual pelo método institucional.
          </p>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 3: A Engenharia de Receita (Os 4 Pilares)                      */}
      {/* ====================================================================== */}
      <section id="engenharia-de-receita" className="section-solid section-pillars-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">O Método: Os 4 Pilares da Engenharia de Receita</h2>
          <p className="lead-text">
            A estrutura necessária para transformar vendas complexas em processo repetível.
          </p>
          
          {/* Layout 2x2 Desktop */}
          <div className="pillar-grid-2x2">
            
            {/* Pilar 1 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Gem size={28} />
                </div>
                <h3 className="pillar-card-title">Clareza de Valor</h3>
                <p className="pillar-card-description">Decodificamos sua competência técnica em autoridade de mercado. Seu cliente ideal precisa entender o impacto financeiro que você gera em 30 segundos, sem depender de reuniões técnicas intermináveis.</p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <GitBranch size={28} />
                </div>
                <h3 className="pillar-card-title">Arquitetura Comercial</h3>
                <p className="pillar-card-description">O blueprint do seu motor de receita. Definimos processos, canais e rituais de gestão para que a meta seja batida pelo processo, e não pelo heroísmo de fim de mês.</p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="pillar-card-title">Governança de Execução</h3>
                <p className="pillar-card-description">Estratégia sem execução é alucinação. Atuamos com liderança sênior na linha de frente para garantir que o playbook seja seguido, os dados sejam limpos e a cultura de alta performance seja instalada.</p>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="glass-card-premium">
              <div className="pillar-card-content">
                <div className="pillar-icon-wrapper">
                  <Layers size={28} />
                </div>
                <h3 className="pillar-card-title">Ativos que Convertem</h3>
                <p className="pillar-card-description">Transformamos sua presença digital em uma ferramenta de vendas 24/7. Educamos o comprador e provamos valor técnico antes mesmo da primeira reunião, encurtando ciclos de negociação.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 4: Soluções de Engenharia de Receita                           */}
      {/* ====================================================================== */}
      <section id="solucoes" className="section-solid">
        <div className="container reveal-up">
          <h2 className="section-title text-center">Como podemos atuar no seu negócio?</h2>
          <p className="lead-text text-center" style={{maxWidth: '700px', margin: '0 auto 5rem'}}>
            Do diagnóstico estratégico à gestão interina do comercial.
          </p>

          <div className="solutions-vertical-stack">
            
            {/* FRENTE 1: INTELIGÊNCIA & ESTRATÉGIA - AJUSTE 3: Title Case */}
            <div className="frente-block">
              <div className="frente-header">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
                   <Brain size={40} style={{color: 'var(--color-primary)', marginBottom: '1rem'}} />
                </div>
                <h3 className="solution-column-title">Frente 1: Inteligência & Estratégia</h3>
                <p className="solution-column-desc" style={{marginBottom: '3rem'}}>Para quem precisa de direção clara e correção de rota.</p>
              </div>
              
              <div className="solutions-grid-wide">
                {/* Card 1 */}
                <div className="glass-card-premium solution-wide-card">
                   <div className="card-content-row">
                      <div className="card-icon-left"><CheckCircle2 size={32} /></div>
                      <div className="card-text-content">
                        <h4>Diagnóstico Cortex B2B™</h4>
                        <p className="card-desc"><strong>O que é:</strong> O "Raio-X" da sua maturidade comercial. Uma análise profunda sob 5 lentes para identificar gargalos de eficiência e alavancas de crescimento imediato.</p>
                        <div className="card-meta-inline">
                          <span><strong>Ideal para:</strong> Direcionamento estratégico antes de novas rodadas ou expansão.</span>
                          <span><strong>Investimento:</strong> Sob consulta (Produto de entrada).</span>
                        </div>
                      </div>
                      <div className="card-action">
                         {/* AJUSTE 4: CSS de Botão aplicado */}
                         <Link href="/solucoes/cortex-b2b" className="card-cta-button">
                           Conhecer <ArrowRight size={18}/>
                         </Link>
                      </div>
                   </div>
                </div>

                {/* Card 2 */}
                <div className="glass-card-premium solution-wide-card">
                   <div className="card-content-row">
                      <div className="card-icon-left"><Zap size={32} /></div>
                      <div className="card-text-content">
                        <h4>Sprint de Validação Comercial</h4>
                        <p className="card-desc"><strong>O que é:</strong> Teste de novas teses, produtos ou mercados em 30 dias. Validamos a demanda com dados reais antes de você comprometer estrutura fixa (OPEX).</p>
                        <div className="card-meta-inline">
                          <span><strong>Ideal para:</strong> Lançamento de novos produtos ou pivô de modelo.</span>
                          <span><strong>Investimento:</strong> Inicial + % sobre receita nova.</span>
                        </div>
                      </div>
                      <div className="card-action">
                        <Link href="/contato" className="card-cta-button">
                          Agendar <ArrowRight size={18}/>
                        </Link>
                      </div>
                   </div>
                </div>

                {/* Card 3 */}
                <div className="glass-card-premium solution-wide-card">
                   <div className="card-content-row">
                      <div className="card-icon-left"><Target size={32} /></div>
                      <div className="card-text-content">
                        <h4>Go-To-Market Completo</h4>
                        <p className="card-desc"><strong>O que é:</strong> A arquitetura completa do seu motor comercial: posicionamento, ICP, proposta de valor, canais, pricing e retenção. O blueprint estratégico da operação.</p>
                        <div className="card-meta-inline">
                          <span><strong>Ideal para:</strong> Empresas com crescimento errático ou CAC alto.</span>
                          <span><strong>Investimento:</strong> Inicial + % sobre receita nova.</span>
                        </div>
                      </div>
                      <div className="card-action">
                        <Link href="/contato" className="card-cta-button">
                          Ver mais <ArrowRight size={18}/>
                        </Link>
                      </div>
                   </div>
                </div>

                {/* Card 4 */}
                <div className="glass-card-premium solution-wide-card">
                   <div className="card-content-row">
                      <div className="card-icon-left"><Users size={32} /></div>
                      <div className="card-text-content">
                        <h4>Diretoria de Receita (CRO as a Service)</h4>
                        <p className="card-desc"><strong>O que é:</strong> Alugue um Executivo Sênior. Injetamos a visão de um Diretor de multinacional na sua operação, liderando o time para instalar o método na prática.</p>
                        <div className="card-meta-inline">
                          <span><strong>Ideal para:</strong> Profissionalizar a gestão e tirar o sócio da operação.</span>
                          <span><strong>Investimento:</strong> Fee mensal + % sobre receita.</span>
                        </div>
                      </div>
                      <div className="card-action">
                        <Link href="/contato" className="card-cta-button">
                          Entender <ArrowRight size={18}/>
                        </Link>
                      </div>
                   </div>
                </div>

                {/* Card 5 */}
                 <div className="glass-card-premium solution-wide-card">
                   <div className="card-content-row">
                      <div className="card-icon-left"><ShieldCheck size={32} /></div>
                      <div className="card-text-content">
                        <h4>Advisory Board Estratégico</h4>
                        <p className="card-desc"><strong>O que é:</strong> Acesso a conselheiros experientes para validar decisões de alto risco (pivôs, M&A, GTM). Reduza a solidão da cadeira de CEO com sparring qualificado.</p>
                        <div className="card-meta-inline">
                          <span><strong>Ideal para:</strong> Decisões críticas com alto custo de erro.</span>
                          <span><strong>Investimento:</strong> Sob consulta (Retainer).</span>
                        </div>
                      </div>
                      <div className="card-action">
                        <Link href="/contato" className="card-cta-button">
                          Avaliar fit <ArrowRight size={18}/>
                        </Link>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* FRENTE 2: ATIVOS DIGITAIS - AJUSTE 2: Padding/Espaçamento Normalizado */}
            <div className="frente-block" style={{marginTop: '4rem'}}>
              <div className="frente-header">
                 <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/10 mb-4">
                   <MonitorSmartphone size={40} style={{color: 'var(--color-accent)', marginBottom: '1rem'}} />
                </div>
                {/* AJUSTE 3: Title Case */}
                <h3 className="solution-column-title">Frente 2: Ativos Digitais</h3>
                <p className="solution-column-desc" style={{marginBottom: '3rem'}}>Ferramentas que vendem por você.</p>
              </div>
              
              <div className="solutions-grid-wide">
                {/* Card 1: Plataformas */}
                <div className="glass-card-premium solution-wide-card">
                   <div className="card-content-row">
                      <div className="card-icon-left"><Layout size={32} /></div>
                      <div className="card-text-content">
                        <h4>Plataformas de Aceleração</h4>
                        <p className="card-desc"><strong>O que é:</strong> Sites projetados para conversão B2B, não apenas vitrine. Arquitetura de informação que filtra curiosos e qualifica decisores 24/7.</p>
                        <div className="card-meta-inline">
                           <span className="solution-examples"><strong>Exemplos:</strong> exclusivaengenharias.com, versaoholistica.com.br</span>
                          <span><strong>Ideal para:</strong> Sites que geram visitas mas não reuniões.</span>
                          <span><strong>Investimento:</strong> Sob consulta (Projeto).</span>
                        </div>
                      </div>
                      <div className="card-action">
                        <Link href="/solucoes/plataformas-digitais" className="card-cta-button">
                          Ver exemplos <ArrowRight size={18}/>
                        </Link>
                      </div>
                   </div>
                </div>

                {/* Card 2: Apps */}
                <div className="glass-card-premium solution-wide-card">
                   <div className="card-content-row">
                      <div className="card-icon-left"><TrendingUp size={32} /></div>
                      <div className="card-text-content">
                        <h4>Apps e Simuladores de ROI</h4>
                        <p className="card-desc"><strong>O que é:</strong> Ferramentas que tangibilizam seu valor. Calculadoras e simuladores que provam o retorno financeiro da sua solução, eliminando a subjetividade.</p>
                        <div className="card-meta-inline">
                          <span className="solution-examples"><strong>Exemplos:</strong> Synapse Match Maker, Simulador Industrial</span>
                          <span><strong>Ideal para:</strong> Ciclos travados em "provar valor".</span>
                           <span><strong>Investimento:</strong> Sob consulta (Projeto).</span>
                        </div>
                      </div>
                      <div className="card-action">
                        <Link href="/solucoes/apps" className="card-cta-button">
                          Explorar <ArrowRight size={18}/>
                        </Link>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

{/* ====================================================================== */}
      {/* Seção 5: Cases de Sucesso (Wide Cards)                               */}
      {/* ====================================================================== */}
      <section id="cases" className="section-with-gradient-glow section-cases-revolutionary">
        <div className="container text-center reveal-up">
          <h2 className="section-title">Da Complexidade à Tração</h2>
        </div>
        
        <div className="case-stack-container reveal-up">
          
            {/* Case 1: Versão Holística */}
            <div className="glass-card-premium case-wide-card">
              <div className="case-content-wrapper">
                <div className="case-header-row">
                  <div className="pillar-icon-wrapper"><Award size={32} /></div>
                  <div className="case-title-group">
                     <h3>Versão Holística</h3>
                     <span className="case-tag">R$ 500k captados</span>
                  </div>
                </div>
                <div className="case-body">
                  <p><strong>Contexto:</strong> Tecnologia validada, mas com dificuldade de penetração em grandes contas (Hospitais) devido a um discurso excessivamente técnico.</p>
                  <p><strong>Ação:</strong> Reestruturação do GTM e tradução da oferta para "CareOps" (foco em eficiência operacional, não apenas clínica).</p>
                  <p><strong>Resultado:</strong> R$ 500k captados e validação de canal enterprise.</p>
                </div>
                <div className="case-footer">
                  <Link href="/cases/versao-holistica" className="btn-case-revolutionary">
                    <span>Ver Case Completo</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Case 2: Exclusiva Engenharias */}
            <div className="glass-card-premium case-wide-card">
               <div className="case-content-wrapper">
                <div className="case-header-row">
                  <div className="pillar-icon-wrapper"><GitBranch size={32} /></div>
                  <div className="case-title-group">
                     <h3>Exclusiva Engenharias</h3>
                     <span className="case-tag">Forecast Recorde</span>
                  </div>
                </div>
                <div className="case-body">
                  <p><strong>Contexto:</strong> Empresa de engenharia consolidada, mas refém de indicações e sazonalidade. Sem previsibilidade de novos contratos.</p>
                  <p><strong>Ação:</strong> Implementação de máquina de vendas Outbound e posicionamento como parceiro de "Continuidade Operacional".</p>
                  <p><strong>Resultado:</strong> Geração de pipeline recorde (3x histórico) e redução da dependência dos sócios na venda.</p>
                </div>
                <div className="case-footer">
                  <Link href="/cases/exclusiva-engenharias" className="btn-case-revolutionary">
                    <span>Ver Case Completo</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Case 3: AORKIA */}
            <div className="glass-card-premium case-wide-card">
               <div className="case-content-wrapper">
                <div className="case-header-row">
                  <div className="pillar-icon-wrapper"><ShieldCheck size={32} /></div>
                  <div className="case-title-group">
                     <h3>AORKIA</h3>
                     <span className="case-tag">Zero ao Playbook</span>
                  </div>
                </div>
                <div className="case-body">
                  <p><strong>Contexto:</strong> Desafio de entrar em um mercado comoditizado (Backup) dominado por gigantes globais, sem histórico de marca.</p>
                  <p><strong>Ação:</strong> Estratégia de "Ancoragem de Autoridade" e venda baseada em Risco (Compliance/Ransomware) e não em TI.</p>
                  <p><strong>Resultado:</strong> Validação do método com a conquista de grande conta (1.200 usuários) em apenas 45 dias.</p>
                </div>
                <div className="case-footer">
                  <Link href="/cases/aorkia" className="btn-case-revolutionary">
                    <span>Ver Case Completo</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 6: Princípio Unificador                                        */}
      {/* ====================================================================== */}
      <section id="principio" className="section-solid section-principle-revolutionary">
        <div className="flowfield-background"></div>

        <div className="container text-center reveal-up">
          <div className="glass-card-premium" style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="principle-core-icon" style={{margin: '0 auto 1.5rem'}}>
              <LineChart size={32} />
            </div>
            <h3>O Que Une Esses Resultados?</h3>
            <p className="principle-core-highlight">Eles deixaram de vender "horas" ou "produtos" para vender <strong>resultados de negócio</strong>.</p>
            <p>Trocaram a intuição pela <strong>metodologia</strong>.</p>
            <p>Entenderam que para crescer, precisavam profissionalizar a interface com o mercado.</p>
            <p className="font-bold text-white mt-4" style={{color: 'var(--color-heading)', fontSize: '1.1rem'}}>Isso é Engenharia de Receita.</p>
            <div className="section-cta">
              <Link href="/a-engenharia" className="btn btn-secondary" style={{backdropFilter: 'blur(10px)'}}>
                <span>Conhecer Nossa Tese</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>


      {/* ====================================================================== */}
      {/* Seção 7: CTA Final                                                   */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>

        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Sua empresa está pronta para o próximo nível de maturidade comercial?
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2rem'}}>
            Se você fatura e sente que sua operação comercial é o gargalo, nós temos o método para destravar.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agende um Diagnóstico Executivo (21min)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.9, marginTop: '1.5rem', textAlign: 'center'}}>
            Uma conversa de negócios. Sem pressão de vendas, apenas alinhamento estratégico.
          </p>
        </div>
      </section>

      {/* --- ESTILOS JSX --- */}
      <style jsx>{`
        /* CLASSE GLOBAL DO CARD PREMIUM (Receita Exata + Padding Robusto) */
        .glass-card-premium {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          height: 100%;
        }

        .glass-card-premium:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 150, 132, 0.2);
        }

        /* ESTILOS SOLUÇÕES (Vertical Stack) */
        .solutions-vertical-stack {
          display: flex;
          flex-direction: column;
          gap: 6rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .frente-header {
          text-align: center;
        }

        .solution-column-title {
           font-family: 'Montserrat', sans-serif;
           font-size: 1.8rem;
           color: var(--color-heading);
           margin-bottom: 0.5rem;
           text-transform: none; /* AJUSTE 3: Title Case */
        }

        .solutions-grid-wide {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .solution-wide-card {
           padding: 0 !important; /* Remove padding padrão para usar estrutura interna */
           align-items: stretch !important; /* Estica para ocupar largura */
           overflow: hidden;
        }

        .card-content-row {
           display: flex;
           align-items: center;
           padding: 2.5rem;
           gap: 2rem;
           text-align: left; /* Texto interno alinhado à esquerda para leitura, bloco centralizado no layout */
        }
        
        .card-icon-left {
           color: var(--color-primary);
           background: rgba(0, 150, 132, 0.1);
           padding: 1rem;
           border-radius: 12px;
           flex-shrink: 0;
        }

        .card-text-content {
           flex: 1;
        }

        .card-text-content h4 {
           font-family: 'Montserrat', sans-serif;
           font-size: 1.4rem;
           color: var(--color-heading);
           margin-bottom: 0.8rem;
        }
        
        .card-desc {
           color: var(--color-text);
           margin-bottom: 1rem;
           font-size: 1rem;
           line-height: 1.6;
        }
        
        .card-meta-inline {
           display: flex;
           gap: 1.5rem;
           font-size: 0.9rem;
           color: var(--color-text);
           opacity: 0.8;
        }

        .card-action {
           flex-shrink: 0;
        }

        /* AJUSTE 4: CSS do Botão (Link) */
        .card-cta-button {
           display: inline-flex;
           align-items: center;
           gap: 0.5rem;
           padding: 0.8rem 1.5rem;
           border: 1px solid var(--color-border);
           border-radius: 8px;
           color: var(--color-heading);
           transition: all 0.3s ease;
           text-decoration: none;
           font-weight: 600;
        }
        .card-cta-button:hover {
           background: var(--color-primary);
           color: #000;
           border-color: var(--color-primary);
        }

        /* ESTILOS CASES (Vertical Stack) */
        .case-stack-container {
           display: flex;
           flex-direction: column;
           gap: 3rem;
           max-width: 900px;
           margin: 4rem auto 0;
        }
        
        .case-wide-card {
           padding: 0 !important;
        }
        
        .case-content-wrapper {
           padding: 3rem;
           text-align: center;
        }
        
        .case-header-row {
           display: flex;
           flex-direction: column;
           align-items: center;
           margin-bottom: 2rem;
        }
        
        .case-title-group h3 {
           font-size: 2rem;
           font-family: 'Montserrat', sans-serif;
           color: var(--color-heading);
           margin-bottom: 0.5rem;
        }
        
        .case-tag {
           display: inline-block;
           background: rgba(0, 150, 132, 0.15);
           color: var(--color-primary);
           padding: 0.4rem 1rem;
           border-radius: 50px;
           font-size: 0.9rem;
           font-weight: 600;
        }

        .case-body {
           text-align: center;
           margin-bottom: 2rem;
           color: var(--color-text);
           font-size: 1.05rem;
           line-height: 1.8;
        }
        
        .case-body p {
           margin-bottom: 1rem;
        }

        .case-footer {
           margin-top: 1rem;
        }


        /* Grid 2x2 para Pilares no Desktop */
        .pillar-grid-2x2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .hero-headline {
          font-size: 2.8rem !important;
          line-height: 1.25;
        }

        /* Botão dos Cards de Solução */
.card-cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;       /* Dá corpo ao botão */
  border: 1px solid rgba(255, 255, 255, 0.15); /* Borda visível e elegante */
  border-radius: 8px;           /* Bordas arredondadas */
  color: var(--color-heading);  /* Cor do texto (branco/claro) */
  background: rgba(255, 255, 255, 0.03); /* Fundo sutil */
  text-decoration: none;        /* Remove o sublinhado */
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;          /* Garante que não quebre linha */
}

/* Efeito Hover do Botão */
.card-cta-button:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #000; /* Texto escuro no hover para contraste */
  box-shadow: 0 0 15px rgba(0, 150, 132, 0.4); /* Glow */
  transform: translateX(5px); /* Pequeno movimento para a direita */
}
                 
        /* Responsividade */
        @media (max-width: 900px) {
          .pillar-grid-2x2 {
            grid-template-columns: 1fr;
          }
          .card-content-row {
             flex-direction: column;
             text-align: center;
             padding: 2rem;
          }
          .card-meta-inline {
             flex-direction: column;
             gap: 0.5rem;
          }
          .card-action {
             width: 100%;
          }
          .card-cta-button {
             width: 100%;
             justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.0rem !important;
          }
          .trust-bar {
            margin-top: 3rem;
          }
          .trust-bar-logos {
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}