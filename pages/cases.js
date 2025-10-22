import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Zap, Brain, CheckCircle, XCircle, ArrowRight, Building2, Heart, Shield, Users, Sparkles } from 'lucide-react';

// HERO SECTION
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-video-background">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/video/video_home.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content text-center page-hero-padding reveal-up">
        <p className="hero-pre-headline">Engenharia de Receita em Ação</p>
        <h1 className="hero-headline">
          Quando <span className="highlight-primary">Clareza</span> Vira <span className="highlight-primary">Receita</span>
        </h1>
        <p className="hero-subheadline">
          O córtex pré-frontal do seu comprador trava em análise. Você explica. Ele ouve. Mas a decisão não acontece.
        </p>
        <p className="hero-subheadline-emphasis">
          Não é porque seu produto não funciona. É porque você ativou o sistema errado no cérebro errado.
        </p>
        <p className="hero-conclusion">
          Estes cases provam que receita previsível não vem de produto superior. Vem de <strong>arquitetura neural da decisão</strong>.
        </p>
      </div>
    </section>
  );
};

// PRINCIPLE BLOCK
const PrincipleBlock = () => {
  return (
    <section className="section-solid">
      <div className="container text-center reveal-up">
        <h2 className="section-title">Por Que Empresas Tecnicamente Superiores Perdem para Concorrentes Inferiores</h2>
        <p className="lead-text">
          O mercado não compra o melhor produto. O mercado compra <strong>a mensagem que passa no filtro do Sistema 1</strong>.
        </p>
        
        <div className="dual-system-grid">
          <div className="system-card">
            <div className="system-icon-wrapper">
              <Zap size={56} />
            </div>
            <h3>Sistema 1</h3>
            <p className="system-subtitle">Decisão Rápida</p>
            <p className="system-description">Emocional, intuitiva. Opera em 400 milissegundos.</p>
            <ul className="system-features">
              <li>Rápido e automático</li>
              <li>Baseado em emoção</li>
              <li>Decisão instantânea</li>
              <li>Confiança, urgência, clareza</li>
            </ul>
          </div>
          
          <div className="system-card">
            <div className="system-icon-wrapper">
              <Brain size={56} />
            </div>
            <h3>Sistema 2</h3>
            <p className="system-subtitle">Análise Racional</p>
            <p className="system-description">Análise lenta, racional, exaustiva. Demanda energia cognitiva cara.</p>
            <ul className="system-features">
              <li>Lento e deliberado</li>
              <li>Baseado em lógica</li>
              <li>Requer esforço mental</li>
              <li>Complexidade, dúvida</li>
            </ul>
          </div>
        </div>

        <p className="lead-text" style={{marginTop: '3rem'}}>
          Quando você força Sistema 2 ("deixe-me explicar nossa arquitetura técnica"), o cérebro do decisor ativa mecanismo de defesa: <strong>"vamos pensar"</strong> (tradução: "isso é complexo demais, vou adiar").
        </p>
        <p className="lead-text emphasis-text" style={{marginTop: '2rem'}}>
          Estes cinco cases mostram como recodificamos mensagens para ativar Sistema 1 primeiro.
        </p>
        <p className="lead-text" style={{marginTop: '1rem'}}>
          Quando Sistema 1 diz "sim" (confiança, urgência, clareza), Sistema 2 racionaliza a compra.<br/>
          Quando Sistema 1 diz "não sinto isso" (confusão, dúvida), Sistema 2 encontra desculpas para não comprar.
        </p>
      </div>
    </section>
  );
};

// CASE 1 - EXCLUSIVA
const CaseExclusiva = () => {
  return (
    <section className="section-with-gradient-glow">
      <div className="container text-center reveal-up">
        <div className="case-header">
          <div className="case-icon"><Building2 size={48} /></div>
          <h2 className="section-title">Exclusiva Engenharias</h2>
          <p className="case-subtitle">Recodificação Neural de Três Empresas Invisíveis</p>
        </div>

        <div className="case-content">
          <div className="case-block">
            <h3>O Travamento Neural</h3>
            <p>Três empresas de engenharia. Excelência técnica indiscutível. Portfolio robusto. Mas crescimento 100% dependente de indicação.</p>
            <div className="highlight-box">
              <p><strong>Diagnóstico (Cortex GTM™):</strong></p>
              <p>O cérebro do decisor industrial não conseguia <strong>categorizar</strong> a oferta. "São engenheiros mecânicos? Elétricos? Civis? Consultores? Projetistas?"</p>
              <p className="neural-chain">Sem categoria clara → Sistema 1 não reconhece padrão → Não gera sensação de "eu entendo o que vocês fazem" → Decisão não acontece.</p>
            </div>
          </div>

          <div className="case-block">
            <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
            <p>Não otimizamos a engenharia. Recodificamos como o mercado <strong>processa</strong> a engenharia.</p>
            
            <div className="phases-grid">
              <div className="phase-card">
                <div className="phase-number">FASE 1</div>
                <h4>Recodificação de Identidade</h4>
                <div className="before-after">
                  <div className="before">
                    <strong>Antes:</strong>
                    <p>"Somos três empresas de engenharia"</p>
                  </div>
                  <ArrowRight size={24} className="arrow-icon" />
                  <div className="after">
                    <strong>Depois:</strong>
                    <p>"Hub que resolve problemas industriais que outros evitam"</p>
                  </div>
                </div>
                <p className="impact-note"><strong>Impacto neural:</strong> Cérebro categoriza instantaneamente. "Hub" = agregador reconhecível.</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 2</div>
                <h4>Plataforma de Aceleração</h4>
                <p><strong>exclusivaengenharias.com</strong> não é site. É ativo de conversão neural.</p>
                <ul className="feature-list">
                  <li>30% institucional (credibilidade)</li>
                  <li>70% engenharia de receita (conversão)</li>
                  <li>Lead entra educado sobre valor</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 3</div>
                <h4>Simulador de Orçamento</h4>
                <p>Ferramenta que toma decisão cognitivamente cara no lugar do cliente.</p>
                <p className="impact-note"><strong>Resultado:</strong> Estimativa em 30 segundos. Lead entra com contexto de valor.</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 4</div>
                <h4>CRO as a Service</h4>
                <p>Liderança C-level fracionada operando Diretoria de Receita.</p>
                <p className="impact-note"><strong>Impacto:</strong> De heroísmo individual para sistema replicável.</p>
              </div>
            </div>
          </div>

          <div className="case-result">
            <h3>O Resultado: Transformação Sistêmica</h3>
            <div className="result-comparison">
              <div className="result-before">
                <h4>Antes:</h4>
                <ul>
                  <li>3 empresas segregadas</li>
                  <li>Zero presença digital</li>
                  <li>100% indicação</li>
                  <li>Receita imprevisível</li>
                </ul>
              </div>
              <div className="result-after">
                <h4>Depois:</h4>
                <ul>
                  <li>Hub consolidado</li>
                  <li>Motor de demanda ativo</li>
                  <li>Primeiros clientes orgânicos</li>
                  <li>Sistema replicável documentado</li>
                </ul>
              </div>
            </div>
            <p className="metric-highlight"><strong>Métrica que importa:</strong> De invisível para encontrável. De heroísmo para sistema.</p>
            <a href="https://exclusivaengenharias.com" target="_blank" rel="noopener noreferrer" className="case-link">
              Visite a prova: exclusivaengenharias.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// CASE 2 - VERSÃO HOLÍSTICA
const CaseVersaoHolistica = () => {
  return (
    <section className="section-solid">
      <div className="container text-center reveal-up">
        <div className="case-header">
          <div className="case-icon"><Heart size={48} /></div>
          <h2 className="section-title">Versão Holística</h2>
          <p className="case-subtitle">Tradução Neurocientífica de Inovação em ROI</p>
        </div>

        <div className="case-content">
          <div className="case-block">
            <h3>O Travamento Neural</h3>
            <p>Healthtech com metodologia inovadora. Produto validado. Casos de sucesso reais.</p>
            <div className="highlight-box problem">
              <p>Mas hospitais e investidores faziam sempre a mesma pergunta:</p>
              <p className="big-quote">"O que, exatamente, vocês fazem por mim?"</p>
              <p>Pitch de 15 minutos terminava com: <strong>"Vamos pensar..."</strong></p>
            </div>
          </div>

          <div className="case-block">
            <h3>A Intervenção: 5 Lentes do Cortex GTM™</h3>
            
            <div className="lenses-grid">
              <div className="lens-card">
                <div className="lens-number">LENTE 1</div>
                <h4>Fundador</h4>
                <div className="before-after vertical">
                  <div className="before">Antes: "Cuidado Farmacêutico Integrativo"</div>
                  <div className="after">Depois: "Plataforma que reduz custo em 5.8x"</div>
                </div>
              </div>

              <div className="lens-card">
                <div className="lens-number">LENTE 2</div>
                <h4>Comprador</h4>
                <div className="before-after vertical">
                  <div className="before">Antes: "Metodologia inovadora"</div>
                  <div className="after">Depois: "ROI 5.8x validado em hospital referência"</div>
                </div>
              </div>

              <div className="lens-card">
                <div className="lens-number">LENTE 3</div>
                <h4>Receita</h4>
                <p>ICP refinado: Hospitais 200+ leitos, Empresas com saúde corporativa, Escolas.</p>
              </div>

              <div className="lens-card">
                <div className="lens-number">LENTE 4</div>
                <h4>Neurociência</h4>
                <p>Narrativa em 3 camadas: Dor → Solução → Prova</p>
              </div>

              <div className="lens-card">
                <div className="lens-number">LENTE 5</div>
                <h4>Andragogia</h4>
                <p>Criamos a categoria "CareOps Integrativo"</p>
              </div>
            </div>
          </div>

          <div className="case-result">
            <h3>O Resultado: Transformação da Tese</h3>
            <div className="result-comparison">
              <div className="result-before">
                <h4>Antes:</h4>
                <ul>
                  <li>Pitch de 15 minutos</li>
                  <li>Decisor confuso</li>
                  <li>"Vamos pensar..." (= não)</li>
                  <li>Oferta dispersa</li>
                </ul>
              </div>
              <div className="result-after">
                <h4>Depois:</h4>
                <ul>
                  <li>Pitch de 3 minutos</li>
                  <li>Decisor entende valor</li>
                  <li>"Quando começamos?" (= sim)</li>
                  <li>Tese clara e validada</li>
                </ul>
              </div>
            </div>
            <p className="metric-highlight"><strong>Métrica que importa:</strong> ROI 5.8x mensurável e replicável. Categoria criada e dominada.</p>
            <a href="https://versaoholistica.com.br" target="_blank" rel="noopener noreferrer" className="case-link">
              Visite a prova: versaoholistica.com.br →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// CASE 3 - AORKIA
const CaseAorkia = () => {
  return (
    <section className="section-with-gradient-glow">
      <div className="container text-center reveal-up">
        <div className="case-header">
          <div className="case-icon"><Shield size={48} /></div>
          <h2 className="section-title">AORKIA</h2>
          <p className="case-subtitle">De Zero a Parceiro Global em 90 Dias</p>
        </div>

        <div className="case-content">
          <div className="case-block">
            <h3>O Contexto: Prova de Conceito Sob Pressão</h3>
            <p>Empresa nova. Mercado extremamente técnico (Resiliência Cibernética para dados SaaS). Zero histórico. Competindo com players globais.</p>
            <div className="highlight-box">
              <p><strong>Desafio:</strong> Criar do zero marca, narrativa, posicionamento, plataforma, canal de receita e atingir primeira tração em 90 dias.</p>
            </div>
          </div>

          <div className="case-block">
            <h3>A Intervenção: Engenharia de Receita em Modo Acelerado</h3>
            
            <div className="phases-grid">
              <div className="phase-card">
                <div className="phase-number">FASE 1</div>
                <h4>Posicionamento Estratégico</h4>
                <p><strong>Decisão crítica:</strong> Não competir como "mais uma empresa de backup".</p>
                <p><strong>Posicionamento:</strong> "Parceiro oficial Keepit — líder global em proteção de dados SaaS"</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 2</div>
                <h4>Tradução de Complexidade Técnica</h4>
                <div className="before-after">
                  <div className="before">
                    <strong>Antes:</strong>
                    <p>"Backup imutável em arquitetura air-gapped"</p>
                  </div>
                  <ArrowRight size={24} className="arrow-icon" />
                  <div className="after">
                    <strong>Depois:</strong>
                    <p>"Seu provedor não faz backup. Essa responsabilidade é sua."</p>
                  </div>
                </div>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 3</div>
                <h4>Plataforma como Ativo de Conversão</h4>
                <p>aorkia.com foi projetada com arquitetura neural específica.</p>
                <ul className="feature-list">
                  <li>Hero ativa medo (resiliência é inegociável)</li>
                  <li>Social proof imediato (logos Keepit)</li>
                  <li>Prova de autoridade (parceiro homologado)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="case-result">
            <h3>O Resultado: 90 Dias de Invisível para Operacional</h3>
            <div className="result-comparison">
              <div className="result-before">
                <h4>Antes:</h4>
                <ul>
                  <li>Zero</li>
                  <li>Ideia no papel</li>
                  <li>Nenhum cliente</li>
                  <li>Sem histórico</li>
                </ul>
              </div>
              <div className="result-after">
                <h4>Depois (90 dias):</h4>
                <ul>
                  <li>Marca criada</li>
                  <li>Narrativa validada</li>
                  <li>Homologação Keepit</li>
                  <li>Primeira venda: 1.200+ usuários</li>
                </ul>
              </div>
            </div>
            <p className="metric-highlight"><strong>Meta-prova:</strong> Aplicamos em nós mesmos o que vendemos. Funcionou.</p>
            <a href="https://aorkia.com" target="_blank" rel="noopener noreferrer" className="case-link">
              Visite a prova: aorkia.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// CASE 4 - PÓVOAS & PARTNERS
const CasePovoas = () => {
  return (
    <section className="section-solid">
      <div className="container text-center reveal-up">
        <div className="case-header">
          <div className="case-icon"><Users size={48} /></div>
          <h2 className="section-title">Póvoas & Partners</h2>
          <p className="case-subtitle">De PDF Estático para Plataforma Omnicanal</p>
        </div>

        <div className="case-content">
          <div className="case-block">
            <h3>O Contexto: Expertise Sem Arquitetura de Distribuição</h3>
            <p>Elaine Póvoas: Empresária, Conselheira, Palestrante, Mentora. Credibilidade consolidada. Mas todo portfolio estava em um PDF estático.</p>
            <div className="highlight-box problem">
              <p><strong>Problema neural:</strong></p>
              <ul className="problem-list">
                <li>PDF exige download (fricção)</li>
                <li>Cliente não sabe qual serviço escolher</li>
                <li>Informação linear (não adaptável)</li>
                <li>Parceiros estratégicos invisíveis</li>
                <li>Zero arquitetura de conversão</li>
              </ul>
            </div>
          </div>

          <div className="case-block">
            <h3>A Intervenção: De Documento para Ecossistema Omnicanal</h3>
            <p>Criamos arquitetura de distribuição inteligente onde cada competência e cada parceiro tem sua porta de entrada estratégica.</p>
            
            <div className="omnicanal-grid">
              <div className="omnicanal-card">
                <h4>6 Competências</h4>
                <ul className="feature-list">
                  <li>Palestras</li>
                  <li>Treinamentos</li>
                  <li>Mentoria</li>
                  <li>Conselho Consultivo</li>
                  <li>Head Hunter</li>
                  <li>Cerimonialista</li>
                </ul>
              </div>

              <div className="omnicanal-card">
                <h4>12 Parceiros Estratégicos</h4>
                <p>Cada parceiro com card estratégico, descrição de valor e contato facilitado com chancela da Elaine.</p>
              </div>
            </div>
          </div>

          <div className="case-result">
            <h3>O Resultado: De Documento para Omnicanalidade</h3>
            <div className="result-comparison">
              <div className="result-before">
                <h4>Antes:</h4>
                <ul>
                  <li>PDF estático</li>
                  <li>6 competências misturadas</li>
                  <li>12 parceiros invisíveis</li>
                  <li>Zero rastreamento</li>
                </ul>
              </div>
              <div className="result-after">
                <h4>Depois:</h4>
                <ul>
                  <li>Plataforma omnicanal</li>
                  <li>6 portas de entrada (uma por competência)</li>
                  <li>12 parceiros com card estratégico</li>
                  <li>Analytics de comportamento</li>
                </ul>
              </div>
            </div>
            <p className="metric-highlight"><strong>Métrica que importa:</strong> Conversão mensurável. Cliente pode ser recomendado especificamente.</p>
            <a href="https://povoas.synapseb2b.com" target="_blank" rel="noopener noreferrer" className="case-link">
              Visite a prova: povoas.synapseb2b.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// CASE 5 - PROFISSIONAIS DE SAÚDE
const CaseProfissionaisSaude = () => {
  return (
    <section className="section-with-gradient-glow">
      <div className="container text-center reveal-up">
        <div className="case-header">
          <div className="case-icon"><Heart size={48} /></div>
          <h2 className="section-title">Profissionais de Saúde</h2>
          <p className="case-subtitle">Expertise Clínica Sem Sistema de Receita</p>
        </div>

        <div className="case-content">
          <div className="case-block">
            <h3>O Travamento Neural: Expertise Clínica ≠ Sistema de Receita</h3>
            <p>Profissionais de saúde dominam a técnica. Transformam vidas. Mas formação técnica não inclui inteligência comercial.</p>
            <div className="highlight-box problem">
              <p><strong>Problema estrutural:</strong></p>
              <ul className="problem-list">
                <li>Agenda lotada ≠ caixa saudável</li>
                <li>Procedimentos de baixo ROI consomem tempo de alto valor</li>
                <li>Salas ociosas 60% do tempo</li>
                <li>Conhecimento valioso preso no consultório</li>
              </ul>
            </div>
          </div>

          <div className="case-block">
            <h3>A Intervenção: Recodificação de Expertise em Múltiplos Canais</h3>
            <p>Não ensinamos medicina. Instalamos inteligência estratégica de receita em quem já domina a entrega clínica.</p>
            
            <div className="phases-grid">
              <div className="phase-card">
                <div className="phase-number">FRENTE 1</div>
                <h4>Otimização da Clínica Atual</h4>
                <p><strong>Redesenho da Agenda Estratégica:</strong> Mapeamos ROI por procedimento e priorizamos atendimentos de maior impacto.</p>
                <p className="impact-note">Profissional ganha mais trabalhando igual ou menos.</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FRENTE 2</div>
                <h4>Ativação de Receita Recorrente</h4>
                <p><strong>Modelo: Clínica Compartilhada</strong> Sala ociosa 60% = R$ 0/mês. Sala locada = Receita recorrente sem esforço.</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FRENTE 3</div>
                <h4>Escalabilidade do Conhecimento</h4>
                <p>Transformar expertise individual em produtos/serviços escaláveis (cursos, consultorias, protocolos).</p>
              </div>
            </div>
          </div>

          <div className="case-result">
            <h3>O Resultado: De Agenda Lotada para Sistema de Receita</h3>
            <div className="result-comparison">
              <div className="result-before">
                <h4>Antes:</h4>
                <ul>
                  <li>Agenda reativa</li>
                  <li>Receita dependente de horas</li>
                  <li>Salas ociosas</li>
                  <li>Conhecimento não escalável</li>
                </ul>
              </div>
              <div className="result-after">
                <h4>Depois:</h4>
                <ul>
                  <li>Agenda estratégica</li>
                  <li>Receita recorrente ativa</li>
                  <li>Salas rentabilizadas</li>
                  <li>Expertise escalada</li>
                </ul>
              </div>
            </div>
            <p className="metric-highlight"><strong>Métrica que importa:</strong> Receita aumenta. Horas de trabalho diminuem. Qualidade de vida melhora.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// PÁGINA PRINCIPAL
export default function CasesPage() {
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
        <title>Cases | Arquitetura Neural da Decisão</title>
        <meta name="description" content="Estes cases provam que receita previsível não vem de produto superior. Vem de arquitetura neural da decisão." />
      </Head>

      <HeroSection />
      <div className="section-divider-glow"></div>
      <PrincipleBlock />
      <div className="section-divider-glow"></div>
      <CaseExclusiva />
      <div className="section-divider-glow"></div>
      <CaseVersaoHolistica />
      <div className="section-divider-glow"></div>
      <CaseAorkia />
      <div className="section-divider-glow"></div>
      <CasePovoas />
      <div className="section-divider-glow"></div>
      <CaseProfissionaisSaude />
    </>
  );
}

