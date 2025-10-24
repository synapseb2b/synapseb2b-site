import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Zap, Brain, CheckCircle, XCircle, ArrowRight, Building2, Heart, Shield, Users, Sparkles, Network } from 'lucide-react';

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
        <h2 className="section-title">O Mercado Compra o Melhor Produto com a Melhor Mensagem que Passa no Filtro do Sistema 1</h2>
        
        <div className="dual-system-grid">
          <div className="system-card">
            <div className="system-icon-wrapper">
              <Zap size={56} />
            </div>
            <h3>Sistema 1</h3>
            <p className="system-subtitle">Decisão Rápida</p>
            <p className="system-description">Decisão rápida, emocional, intuitiva. Opera em 400 milissegundos.</p>
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

        <p className="lead-text emphasis-text" style={{marginTop: '3rem'}}>
          Estes seis cases mostram como recodificamos mensagens para ativar Sistema 1 primeiro.
        </p>
      </div>
    </section>
  );
};

// CASE 1 - EXCLUSIVA ENGENHARIAS
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
            <p>Recodificamos como o mercado <strong>processa</strong> a mensagem.</p>
            
            <div className="phases-grid">
              <div className="phase-card">
                <div className="phase-number">FASE 1</div>
                <h4>Recodificação de Identidade + Arquitetura de Proposta de Valor</h4>
                <div className="before-after">
                  <div className="before">
                    <strong>Antes:</strong>
                    <p>"Somos três empresas de engenharia"</p>
                  </div>
                  <ArrowRight size={24} className="arrow-icon" />
                  <div className="after">
                    <strong>Depois:</strong>
                    <p>"Somos o hub de engenharias que resolve problemas industriais que outros evitam"</p>
                  </div>
                </div>
                <p className="impact-note"><strong>Impacto neural:</strong> Cérebro categoriza instantaneamente. "Hub" = agregador (padrão reconhecível). "Problemas que outros evitam" = especialização (reduz competição percebida).</p>
                
                <div className="before-after" style={{marginTop: '2rem'}}>
                  <div className="before">
                    <strong>Proposta de valor antes:</strong>
                    <p>Apresentação técnica de 40 minutos explicando capacidades</p>
                  </div>
                  <ArrowRight size={24} className="arrow-icon" />
                  <div className="after">
                    <strong>Proposta de valor depois:</strong>
                    <p>Apresentação técnica de 3 minutos com foco em resultados através dos projetos</p>
                  </div>
                </div>
                <p className="impact-note"><strong>Impacto neural:</strong> O antes ativava a amígdala (medo de erro/retrabalho). O depois ativa o núcleo accumbens (promessa de resultado). Sistema 1 sinaliza: "isso resolve minha dor".</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 2</div>
                <h4>Plataforma de Aceleração de Receita</h4>
                <p><strong>exclusivaengenharias.com</strong> – Projetamos uma Plataforma que se tornou um ativo de conversão neural.</p>
                <ul className="feature-list">
                  <li>30% institucional (credibilidade)</li>
                  <li>70% engenharia de receita (conversão)</li>
                  <li>Cada página ativa Sistema 1 antes de Sistema 2</li>
                  <li>Lead entra educado sobre valor antes do contato comercial</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 3</div>
                <h4>Ferramentas Estratégicas de Conversão</h4>
                <p><strong>Simulador de Orçamento Integrado:</strong> Ferramenta proprietária que toma decisão cognitivamente cara no lugar do cliente.</p>
                <ul className="feature-list">
                  <li>Cliente insere: tipo de projeto + características + prazo</li>
                  <li>Sistema retorna: estimativa de investimento em 10 segundos</li>
                </ul>
                <p className="impact-note"><strong>Impacto neural:</strong> Decisão exaustiva (calcular custo) executada pelo sistema. Reduz carga cognitiva. Lead entra na conversa comercial já com contexto de valor.</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 4</div>
                <h4>CRO as a Service (Governança de Execução)</h4>
                <p><strong>Liderança C-level fracionada operando Diretoria de Receita:</strong></p>
                <ul className="feature-list">
                  <li>Inteligência de mercado (Win/Loss Analysis)</li>
                  <li>Prospecção ativa estruturada</li>
                  <li>Execução pioneira de reuniões (modelagem de abordagem)</li>
                  <li>Playbook documentado para escalar time</li>
                </ul>
                <p className="impact-note"><strong>Impacto:</strong> De heroísmo individual para sistema replicável. Qualquer vendedor mediano executa um processo excelente.</p>
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
                  <li>Operação em modo sobrevivência</li>
                  <li>Receita imprevisível</li>
                </ul>
              </div>
              <div className="result-after">
                <h4>Depois:</h4>
                <ul>
                  <li>Hub consolidado com identidade clara</li>
                  <li>Motor de geração de demanda ativo</li>
                  <li>Primeiros clientes por busca orgânica (inédito)</li>
                  <li>Pipeline estruturado</li>
                  <li>Sistema replicável documentado</li>
                  <li>Evento de 5 anos para celebrar reposicionamento estratégico</li>
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
            <p>Healthtech com metodologia inovadora. Produto validado. Mas hospitais e investidores não conseguiam entender a oferta.</p>
            <div className="highlight-box problem">
              <p><strong>Diagnóstico (Cortex GTM™):</strong></p>
              <p>A narrativa "Cuidado Farmacêutico Integrativo" forçava o cérebro do decisor a um esforço exaustivo.</p>
              <p className="big-quote">"Isso é um custo ou um investimento? Qual a evidência? Como eu categorizo isso?"</p>
              <p className="neural-chain">Sem categoria clara → Sistema 1 não reconhece padrão → Gera sensação de complexidade e risco → Decisão é adiada.</p>
            </div>
          </div>

          <div className="case-block">
            <h3>A Intervenção: Engenharia de Receita Aplicada</h3>
            <p>Não mudamos o produto. Recodificamos como o cérebro do mercado processa a mensagem.</p>
            
            <div className="phases-grid">
              <div className="phase-card">
                <div className="phase-number">FASE 1</div>
                <h4>Sprint de Validação Comercial</h4>
                <p><strong>Mapeamento do Processo Decisório Real:</strong></p>
                <ul className="feature-list">
                  <li>Decisor real identificado: CFO (não o diretor clínico)</li>
                  <li>Objeção principal a ser superada: "Mais uma consultoria cara sem ROI comprovado"</li>
                  <li>Provocar gatilho de decisão: Case validado com métrica financeira tangível</li>
                </ul>
                <p className="impact-note"><strong>Impacto neural:</strong> Paramos de vender "metodologia" (abstrato) para o Sistema 2. Passamos a vender "ROI de 5.8x" (concreto), que o Sistema 1 processa e aceita instantaneamente.</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 2</div>
                <h4>Go-To-Market Completo</h4>
                <p><strong>Recodificação da Proposta de Valor:</strong></p>
                <div className="before-after vertical">
                  <div className="before">Antes: "Cuidado Farmacêutico Integrativo"</div>
                  <div className="after">Depois: "Plataforma que reduz custo de paciente crônico em 5.8x"</div>
                </div>
                <p className="impact-note"><strong>Impacto neural:</strong> Sistema 1 reconhece o padrão "redução de custo" imediatamente. Amígdala relaxa (risco financeiro percebido diminui), núcleo accumbens é ativado (promessa de ganho).</p>
                
                <p style={{marginTop: '2rem'}}><strong>Criação e Domínio de Categoria:</strong></p>
                <p>Cunhamos o termo: <strong>"CareOps Integrativo"</strong></p>
                <p>Posicionamento: <strong>"1ª Plataforma de CareOps do Brasil"</strong></p>
                <p className="impact-note"><strong>Impacto neural:</strong> Quando você nomeia a categoria, você domina a categoria. Cérebro do decisor associa "CareOps" com "Versão Holística" automaticamente.</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 3</div>
                <h4>Plataforma de Aceleração de Receita</h4>
                <p><strong>versaoholistica.com.br</strong> – Projetamos uma Plataforma que se tornou um ativo de conversão neural.</p>
                <ul className="feature-list">
                  <li>30% institucional (credibilidade)</li>
                  <li>70% engenharia de receita (conversão)</li>
                  <li>Cada página educa o mercado e quebra objeções</li>
                  <li>Lead entra educado sobre o ROI antes do contato comercial</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 4</div>
                <h4>Advisory Board</h4>
                <p><strong>Estratégia de Expansão e Investimento:</strong></p>
                <ul className="feature-list">
                  <li>Atuação como conselho estratégico sob demanda</li>
                  <li>Validação de três verticais de receita (Hospitais, Empresas, Escolas)</li>
                  <li>Tese de investimento fundamentada para rodada de captação</li>
                  <li>Preparação para escalar a operação com governança</li>
                </ul>
                <p className="impact-note"><strong>Impacto:</strong> De uma tese confusa para um plano de crescimento multi-segmento. De uma boa ideia para um negócio investível e replicável.</p>
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
                  <li>Tese de investimento frágil</li>
                </ul>
              </div>
              <div className="result-after">
                <h4>Depois:</h4>
                <ul>
                  <li>Pitch de 3 minutos</li>
                  <li>Decisor entende o valor</li>
                  <li>"Quando começamos?" (= sim)</li>
                  <li>Categoria criada e dominada</li>
                  <li>Tese de investimento clara e validada</li>
                  <li>3 verticais de receita em estruturação</li>
                </ul>
              </div>
            </div>
            <p className="metric-highlight"><strong>Métrica que importa:</strong> De complexo para ROI claro. De "vamos pensar" para "quando começamos?".</p>
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
            <h3>O Desafio: Prova de Conceito Sob Pressão</h3>
            <p>Empresa nova em mercado técnico (Resiliência Cibernética para dados SaaS). Zero histórico. Competindo com gigantes globais.</p>
            <div className="highlight-box">
              <p><strong>Desafio:</strong> Atingir tração comercial em 90 dias para validar o próprio método.</p>
              <p>Criamos marca, narrativa, plataforma e canal de receita do zero. O objetivo era provar que nosso método funciona, aplicando-o em nós mesmos.</p>
            </div>
          </div>

          <div className="case-block">
            <h3>A Intervenção: Engenharia de Receita em Modo Acelerado</h3>
            
            <div className="phases-grid">
              <div className="phase-card">
                <div className="phase-number">FASE 1</div>
                <h4>Sprint de Validação & Go-To-Market</h4>
                <p><strong>Ancoragem de Autoridade:</strong></p>
                <p><strong>Decisão:</strong> Não competir como "mais uma empresa de backup".</p>
                <p><strong>Ação:</strong> Posicionar como "Parceiro oficial Keepit — líder global em proteção de dados SaaS".</p>
                <p className="impact-note"><strong>Impacto neural:</strong> Cérebro do decisor faz transferência de autoridade instantânea. "Se o líder global (Keepit) confia, eu posso confiar na AORKIA."</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 2</div>
                <h4>Go-To-Market Completo</h4>
                <p><strong>Recodificação de Mensagem Técnica:</strong></p>
                <div className="before-after">
                  <div className="before">
                    <strong>Antes:</strong>
                    <p>"Backup imutável em arquitetura air-gapped..." (linguagem técnica)</p>
                  </div>
                  <ArrowRight size={24} className="arrow-icon" />
                  <div className="after">
                    <strong>Depois:</strong>
                    <p>"Seu provedor SaaS não faz backup dos seus dados. Quanto custa cada minuto de parada?" (linguagem de dor)</p>
                  </div>
                </div>
                <p className="impact-note"><strong>Impacto neural:</strong> Ativa a amígdala (medo da perda de dados e do custo da parada). Sistema 1 sinaliza urgência: "Preciso resolver isso agora."</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FASE 3</div>
                <h4>Plataforma de Aceleração de Receita</h4>
                <p><strong>aorkia.com</strong> – Projetada com arquitetura neural para ativar Sistema 1 antes do Sistema 2.</p>
                <ul className="feature-list">
                  <li>Hero ativa medo (resiliência é inegociável)</li>
                  <li>Prova social imediata (logos de clientes globais)</li>
                  <li>Prova de autoridade (parceiro homologado)</li>
                  <li>Redução de fricção (processo claro, sem jargão)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="case-result">
            <h3>O Resultado: De Invisível a Operacional em 90 Dias</h3>
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
                  <li>Parceiro Global Keepit</li>
                  <li>Primeira venda (+1.200 usuários)</li>
                  <li>Pipeline qualificado</li>
                  <li>Motor de receita estruturado</li>
                </ul>
              </div>
            </div>
            <p className="metric-highlight"><strong>Métrica que importa:</strong> De zero para parceiro global com receita em 90 dias. A prova de que o método funciona, aplicado em nós mesmos.</p>
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
            <h3>O Travamento Estrutural: Expertise Sem Canal de Distribuição</h3>
            <p>Credibilidade e portfólio consolidados no mercado B2B. Mas toda a arquitetura de serviços estava presa em um PDF estático e linear.</p>
            <div className="highlight-box problem">
              <p><strong>Diagnóstico Neural & Funcional:</strong></p>
              <p><strong>O cérebro do cliente e do negócio eram sobrecarregados:</strong></p>
              <ul className="problem-list">
                <li><strong>Para o cliente:</strong> Fricção (download), sobrecarga de decisão (6 serviços mistos), confusão.</li>
                <li><strong>Para o negócio:</strong> Parceiros invisíveis, zero dados (analytics), nenhuma arquitetura de conversão.</li>
              </ul>
            </div>
          </div>

          <div className="case-block">
            <h3>A Intervenção: Arquitetura de Ecossistema Omnicanal</h3>
            <p>Não criamos "mais um site". Desenhamos uma plataforma de distribuição onde cada serviço e parceiro se torna uma porta de entrada estratégica.</p>
            
            <div className="phases-grid">
              <div className="phase-card">
                <div className="phase-number">ARQUITETURA 1</div>
                <h4>Múltiplas Portas de Entrada por Competência</h4>
                <div className="before-after vertical">
                  <div className="before">
                    <strong>Antes:</strong>
                    <p>PDF com 6 serviços misturados, gerando paralisia de escolha.</p>
                  </div>
                  <div className="after">
                    <strong>Depois:</strong>
                    <p>Plataforma com 6 portais de entrada claros, um para cada serviço.</p>
                  </div>
                </div>
                <p className="impact-note"><strong>Impacto neural:</strong> Reduz carga cognitiva. O decisor encontra a solução para sua dor específica sem esforço. Sistema 1 reconhece o caminho exato, eliminando a fricção e acelerando a decisão.</p>
                
                <h4 style={{marginTop: '2rem'}}>6 Competências:</h4>
                <ul className="feature-list">
                  <li>Palestras</li>
                  <li>Treinamentos</li>
                  <li>Mentoria</li>
                  <li>Conselho Consultivo</li>
                  <li>Head Hunter</li>
                  <li>Cerimonialista</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-number">ARQUITETURA 2</div>
                <h4>Ecossistema de Parceiros Estratégicos</h4>
                <div className="before-after vertical">
                  <div className="before">
                    <strong>Antes:</strong>
                    <p>Logos de 12 parceiros invisíveis e sem contexto em um PDF.</p>
                  </div>
                  <div className="after">
                    <strong>Depois:</strong>
                    <p>Cada parceiro ganha um ativo digital com chancela e transferência de autoridade.</p>
                  </div>
                </div>
                <p className="impact-note"><strong>Impacto neural:</strong> A confiança na marca principal (Elaine Póvoas) é transferida aos parceiros. Parceiros deixam de ser "logos em um slide" e se tornam soluções validadas pelo ecossistema.</p>
                <p style={{marginTop: '1rem'}}><strong>12 Parceiros Estratégicos</strong> – Cada parceiro com card estratégico, descrição de valor e contato facilitado com chancela da Elaine.</p>
              </div>
            </div>
          </div>

          <div className="case-result">
            <h3>O Resultado: De Documento para Ecossistema</h3>
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
                  <li>6 portas de entrada claras</li>
                  <li>12 parceiros estratégicos</li>
                  <li>Analytics de comportamento</li>
                </ul>
              </div>
            </div>
            <p className="metric-highlight"><strong>Métrica que importa:</strong> De "me envie o catálogo por e-mail" para "escolha seu serviço na plataforma". De um ativo estático para um ecossistema de receita mensurável.</p>
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
            <p>Profissionais de saúde dominam a técnica e transformam vidas. Mas a formação técnica não inclui a inteligência para construir um negócio escalável.</p>
            <div className="highlight-box problem">
              <p><strong>Diagnóstico Estrutural:</strong></p>
              <p><strong>Agenda reativa não significa caixa saudável.</strong></p>
              <ul className="problem-list">
                <li>Procedimentos de baixo ROI consomem tempo de alto valor.</li>
                <li>Ativos (salas) ociosos geram desperdício financeiro.</li>
                <li>Conhecimento valioso fica preso no atendimento 1-para-1, sem escala.</li>
              </ul>
            </div>
          </div>

          <div className="case-block">
            <h3>A Intervenção: Recodificação de Expertise em Múltiplos Canais de Receita</h3>
            <p>Não ensinamos a prática clínica. Instalamos inteligência de receita em quem já domina a entrega técnica.</p>
            
            <div className="phases-grid">
              <div className="phase-card">
                <div className="phase-number">FRENTE 1</div>
                <h4>Otimização da Clínica Atual</h4>
                <p><strong>Redesenho da "Agenda Estratégica":</strong></p>
                <div className="before-after vertical">
                  <div className="before">Antes: Agenda reativa, preenchida pelo primeiro que liga.</div>
                  <div className="after">Depois: Agenda estratégica, priorizando atendimentos de maior impacto financeiro.</div>
                </div>
                <p className="impact-note"><strong>Impacto:</strong> O profissional ganha mais trabalhando o mesmo número de horas, ou até menos. Deixa de ser refém da agenda para se tornar o arquiteto do seu tempo.</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FRENTE 2</div>
                <h4>Ativação de Novos Modelos de Receita Recorrente</h4>
                <p><strong>Modelo: Clínica Compartilhada (Exemplo):</strong></p>
                <div className="before-after vertical">
                  <div className="before">Antes: Sala ociosa 60% do tempo = R$ 0 de receita.</div>
                  <div className="after">Depois: Sala locada para outros profissionais = Receita recorrente sem esforço adicional.</div>
                </div>
                <p className="impact-note"><strong>Resultado:</strong> Um ativo parado é transformado em uma fonte de caixa em menos de 30 dias. A clínica passa a gerar receita mesmo quando o profissional principal não está atendendo.</p>
              </div>

              <div className="phase-card">
                <div className="phase-number">FRENTE 3</div>
                <h4>Modelos Disruptivos Multi-Canal</h4>
                <p><strong>Outros Modelos de Receita Recorrente Multi-Canal:</strong></p>
                <p>A locação de espaços é apenas um dos caminhos. Outros modelos que podemos estruturar juntos incluem:</p>
                <ul className="feature-list">
                  <li><strong>Clubes de Assinatura:</strong> Acesso contínuo a conteúdos, dicas de saúde, ou check-ins preventivos por uma taxa mensal.</li>
                  <li><strong>Programas de Acompanhamento Contínuo:</strong> Pacotes anuais para pacientes crônicos ou que buscam performance, garantindo previsibilidade de caixa.</li>
                  <li><strong>Licenciamento de Protocolos:</strong> Transformar um método clínico validado em um protocolo licenciado para outros profissionais aplicarem.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="case-result">
            <h3>O Resultado: De Agenda Reativa para Sistema de Receita</h3>
            <div className="result-comparison">
              <div className="result-before">
                <h4>Antes:</h4>
                <ul>
                  <li>Agenda cheia, caixa apertado</li>
                  <li>Desperdício de ativos (sala ociosa)</li>
                  <li>Conhecimento preso no consultório</li>
                </ul>
              </div>
              <div className="result-after">
                <h4>Depois:</h4>
                <ul>
                  <li>Agenda estratégica (maior ROI/hora)</li>
                  <li>Novas fontes de receita recorrente ativadas</li>
                  <li>Conhecimento transformado em produtos escaláveis</li>
                </ul>
              </div>
            </div>
            <p className="metric-highlight"><strong>Métrica que importa:</strong> De "mais horas trabalhadas" para "melhores horas investidas". Primeira receita recorrente (via locação) ativada em 3 semanas, validando o potencial do sistema.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// CASE 6 - SYNAPSE B2B MATCH MAKER
const CaseMatchMaker = () => {
  return (
    <section className="section-solid">
      <div className="container text-center reveal-up">
        <div className="case-header">
          <div className="case-icon"><Network size={48} /></div>
          <h2 className="section-title">Synapse B2B Match Maker</h2>
          <p className="case-subtitle">Quando Dados Viram Inteligência de Conexão</p>
        </div>

        <div className="case-content">
          <div className="case-block">
            <h3>O Travamento Cognitivo: Riqueza Invisível em Comunidades</h3>
            <p>Grandes comunidades (WhatsApp, Excel, Notion) possuem um enorme potencial de conexão. Mas a informação é assíncrona e invisível, exigindo um esforço mental enorme para ser encontrada.</p>
            <div className="highlight-box problem">
              <p><strong>Diagnóstico Neural:</strong></p>
              <p><strong>O cérebro paralisa diante de uma decisão cognitivamente cara.</strong></p>
              <p>A tarefa de buscar, filtrar, comparar e decidir entre centenas de opções bloqueia a ação. A energia necessária para encontrar a conexão ideal é maior que o benefício percebido.</p>
            </div>
          </div>

          <div className="case-block">
            <h3>A Solução: Sistema Neural que Reduz Carga Cognitiva</h3>
            <p>Não é "mais uma ferramenta de networking". É um sistema que elimina o processo de decisão, entregando o resultado pronto.</p>
            
            <div className="phases-grid">
              <div className="phase-card">
                <h4>O MECANISMO</h4>
                <p><strong>De Caos a 3 Matches Perfeitos em 5 Segundos:</strong></p>
                <div className="before-after vertical">
                  <div className="before">
                    <strong>Antes:</strong>
                    <p>Usuário pergunta "Alguém conhece...?" e espera por respostas aleatórias.</p>
                  </div>
                  <div className="after">
                    <strong>Depois:</strong>
                    <p>Usuário insere a necessidade e o sistema retorna os 3 matches ideais da base.</p>
                  </div>
                </div>
                <p className="impact-note"><strong>Impacto neural:</strong> A decisão exaustiva é executada pelo sistema, não pelo usuário. Sistema 1 recebe o resultado pronto e a ação se torna instantânea.</p>
              </div>

              <div className="phase-card">
                <h4>O PRINCÍPIO</h4>
                <p><strong>A Escala da Inteligência: De Dado Bruto a Conexão Estratégica</strong></p>
                <p><strong>Níveis de Maturidade:</strong></p>
                <ul className="feature-list">
                  <li><strong>Nível 1 (Dado):</strong> "Temos 500 pessoas cadastradas".</li>
                  <li><strong>Nível 2 (Informação):</strong> "30 são designers".</li>
                  <li><strong>Nível 3 (Conhecimento):</strong> "5 designers estão disponíveis agora com experiência em SaaS".</li>
                  <li><strong>Nível 4 (Inteligência Synapse):</strong> "Estes 3 são os matches perfeitos para o seu projeto".</li>
                </ul>
              </div>

              <div className="phase-card">
                <h4>O Resultado: Versatilidade Comprovada</h4>
                <p><strong>De Caos Relacional para Confluência Estratégica:</strong></p>
                <ul className="feature-list">
                  <li><strong>Educação:</strong> Alunos ↔ Mentores</li>
                  <li><strong>Investimento:</strong> Startups ↔ Investidores</li>
                  <li><strong>RH:</strong> Vagas ↔ Talentos</li>
                  <li><strong>Fornecedores:</strong> Demandas ↔ Capacidades</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="case-result">
            <h3>Métrica que importa</h3>
            <p className="metric-highlight">Tempo para encontrar a conexão perfeita: de horas/dias para 10 segundos.</p>
            <p className="metric-highlight">De potencial desperdiçado para inteligência de comunidade ativada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// TESE UNIFICADORA
const TeseUnificadora = () => {
  return (
    <section className="section-with-gradient-glow">
      <div className="container text-center reveal-up">
        <h2 className="section-title">O Que Governa Todos Estes Cases</h2>
        
        <div className="case-list">
          <p>→ <strong>Exclusiva Engenharias:</strong> Três empresas sem categoria → Hub com identidade neural clara</p>
          <p>→ <strong>Versão Holística:</strong> Inovação técnica incompreensível → ROI tangível em 3 verticais validadas</p>
          <p>→ <strong>AORKIA:</strong> Zero para 1.200 usuários no primeiro mês</p>
          <p>→ <strong>Póvoas & Partners:</strong> PDF estático → Ecossistema de receita omnicanal</p>
          <p>→ <strong>Profissionais de Saúde:</strong> Agenda reativa → Sistema de receita multi-canal</p>
          <p>→ <strong>Match Maker:</strong> Decisão exaustiva → Resultado instantâneo</p>
        </div>

        <div className="tese-block">
          <h3>A Tese que Une Tudo</h3>
          <p className="lead-text">
            <strong>Receita previsível não vem de produto superior. Vem de arquitetura neural da decisão.</strong>
          </p>
          <p className="lead-text">
            Quando você força o cérebro do decisor a entrar em Sistema 2 (análise exaustiva), ele adia.
          </p>
          <p className="lead-text">
            Quando você ativa Sistema 1 primeiro (reconhecimento de padrão, redução de risco, clareza de valor), ele decide.
          </p>
          <p className="lead-text emphasis-text" style={{marginTop: '2rem'}}>
            <strong>Nosso trabalho não é vender melhor. Nosso trabalho é recodificar como seu mercado processa seu valor.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

// CTA FINAL
const CTAFinal = () => {
  return (
    <section className="section-solid">
      <div className="container text-center reveal-up">
        <h2 className="section-title">Seu Cérebro já decidiu se isso faz sentido</h2>
        
        <div className="cta-content">
          <p className="lead-text">
            Se você chegou até aqui, seu Sistema 1 já sinalizou: <strong>"Isso é relevante para mim"</strong>.
          </p>
          <p className="lead-text">
            Agora seu Sistema 2 está racionalizando: <strong>"Será que funciona para meu contexto?"</strong>
          </p>

          <div className="answer-block">
            <h3>A resposta é simples:</h3>
            <ul className="cta-list">
              <li>Se você tem potencial técnico travado em narrativa confusa, funcionará.</li>
              <li>Se você domina a entrega mas não gera tração previsível, funcionará.</li>
              <li>Se você cresce por heroísmo e não por sistema, funcionará.</li>
              <li>Se você é profissional de saúde com agenda reativa mas caixa apertado, funcionará.</li>
            </ul>
          </div>

          <div className="cta-box">
            <h3>Primeira conversa: 21 minutos.</h3>
            <p className="lead-text">
              Não é reunião de vendas. É diagnóstico estratégico.
            </p>
            <p className="lead-text">
              Vamos mapear seu travamento neural e mostrar onde está a alavanca.
            </p>
            <p className="lead-text">
              Sem pressão. Sem proposta genérica.
            </p>
            <p className="lead-text emphasis-text">
              <strong>Só clareza neurocientífica sobre se conseguimos gerar valor real para você.</strong>
            </p>
            <Link href="/contato" className="cta-button">
              Agendar Diagnóstico Estratégico (21min) →
            </Link>
          </div>

          <div className="postscript">
            <h3>Post-Scriptum: Por que você deve confiar nisto</h3>
            <p className="lead-text">
              Estes não são cases isolados. São provas de um sistema replicável.
            </p>
            <p className="lead-text">
              Engenharia, Saúde, Tecnologia, Consultoria Executiva, Educação — contextos radicalmente diferentes.
            </p>
            <p className="lead-text">
              <strong>Mesmo princípio. Mesmo resultado.</strong>
            </p>
            <p className="lead-text emphasis-text" style={{marginTop: '2rem'}}>
              Quando você domina como o cérebro humano toma decisões, não importa o que você vende.
            </p>
            <p className="lead-text emphasis-text">
              <strong>Você domina como traduzir complexidade em clareza que vira receita.</strong>
            </p>
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
        <title>Cases | Quando Clareza Vira Receita | Synapse B2B</title>
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
      <div className="section-divider-glow"></div>
      <CaseMatchMaker />
      <div className="section-divider-glow"></div>
      <TeseUnificadora />
      <div className="section-divider-glow"></div>
      <CTAFinal />
    </>
  );
}
