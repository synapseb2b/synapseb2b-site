// pages/a-synapse.js (CORRIGIDO)

import Head from 'next/head';
import Link from 'next/link';
import { BrainCircuit, Target, Compass, Layers, ShieldCheck, Map, Wrench, Package, ArrowRight } from 'lucide-react';

export default function ASynapsePage() {
  return (
    <>
      <Head>
        <title>A Synapse: A Arquitetura por Trás da Engenharia</title>
        <meta name="description" content="O mercado não compra o que não entende. Conheça a tese de negócio e a lógica por trás da nossa Engenharia de Receita." />
      </Head>

      {/* Bloco 1: Nossa Tese de Negócio */}
      <section className="hero-section short-hero">
        <div className="container hero-content text-center page-hero-padding">
          <h1 className="hero-headline">O mercado não compra o que não entende. E a ciência explica porquê.</h1>
          <p className="hero-subheadline" style={{ maxWidth: '800px' }}>
            Esta não é uma opinião. É um fato neurocientífico. O cérebro na decisão de compra B2B, especialmente em vendas complexas, opera sob duas leis imutáveis: ele busca segurança e opera com o mínimo de esforço. Complexidade, ambiguidade e jargões ativam a dissonância cognitiva — o equivalente a um sinal de "perigo" que leva à inércia.
          </p>
          <div className="highlight-box" style={{ backgroundColor: 'transparent', border: 'none', padding: '0', marginTop: '2rem' }}>
            <h2 className="text-2xl font-bold text-white mb-4">A genialidade técnica do seu produto, quando mal traduzida, se torna o seu maior obstáculo.</h2>
            <p className="lead-text" style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
              A Synapse B2B nasceu desta premissa. Nossa existência é a resposta a uma falha fundamental no mercado: a lacuna entre o valor real que uma solução entrega e a receita que ela de fato gera. Nós não somos uma agência de marketing ou uma consultoria. Somos a engenharia que constrói a ponte sobre essa lacuna.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 2: A Lógica da Nossa Engenharia */}
      <section className="section-solid">
        <div className="container text-center">
          <h2 className="section-title">Se a decisão é emocional e a justificativa é racional, a venda precisa ser uma equação.</h2>
          <p className="lead-text">
            Nossa "Engenharia de Receita" não é um processo criativo. É um método sistemático, projetado para satisfazer as demandas do cérebro do comprador. Cada etapa do nosso sistema, o Cortex GTM™, é desenhada para reduzir o esforço cognitivo e aliviar o medo da decisão errada.
          </p>
          <div className="card-grid-three" style={{ marginTop: '4rem' }}>
            <div className="info-card">
              <Target className="info-card-icon" />
              <h3 className="info-card-title">1. Diagnóstico Objetivo</h3>
              <p>Primeiro, usamos o diagnóstico para encontrar o "gancho objetivo". Classificamos o que você faz de forma que o cérebro do seu cliente possa abrir o arquivo correto, sem esforço.</p>
            </div>
            <div className="info-card">
              {/* ÍCONE CORRIGIDO AQUI */}
              <Compass className="info-card-icon" />
              <h3 className="info-card-title">2. Arquitetura da Clareza</h3>
              <p>Em seguida, construímos a narrativa que cria intriga e articula o valor mais ressonante, conectando sua solução ao alívio de um medo real, não apenas a uma oportunidade vaga.</p>
            </div>
            <div className="info-card">
              <Layers className="info-card-icon" />
              <h3 className="info-card-title">3. Construção de Ativos</h3>
              <p>Por fim, materializamos essa clareza em ativos de conversão que armam o seu time para que a escolha pela sua empresa seja, para o cliente, uma consequência lógica e defensável.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 3: O Arquiteto por Trás da Engenharia */}
      <section className="section-with-gradient-glow">
        <div className="container text-center">
          <h2 className="section-title">O Arquiteto por Trás da Engenharia</h2>
          <p className="lead-text">
            A união da Estratégia B2B com a Psicologia da Decisão. A metodologia da Synapse B2B é o resultado direto da jornada de seu fundador, Júlio Figueiredo.
          </p>
          <div className="highlight-box" style={{ maxWidth: '1000px', textAlign: 'left' }}>
            <p className="mb-4"><strong>A Experiência:</strong> 20 anos em estratégia de receita e liderança em gigantes como <strong>Google, Microsoft, Dell e TOTVS</strong>, somados a uma Pós-Graduação em Engenharia de Vendas, unindo a complexidade do B2B à disciplina da engenharia.</p>
            <p className="mb-4"><strong>A Base Científica:</strong> Nossa abordagem é fundamentada na <strong>Neurociência Comportamental</strong>. Isso nos permite entender não apenas o que os clientes compram, mas por que eles decidem.</p>
            <p><strong>A Liderança da Engenharia:</strong> Hoje, essa combinação de experiência e método se materializa na liderança de um time de <strong>Arquitetos de Receita B2B</strong>, dedicados a aplicar esta engenharia para construir o crescimento dos nossos clientes.</p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 4: Nossos Princípios Inegociáveis */}
      <section className="section-solid">
        <div className="container text-center">
          <h2 className="section-title">Nossos Princípios Inegociáveis</h2>
          <div className="card-grid-two" style={{ marginTop: '4rem', gap: '2.5rem' }}>
            <div className="info-card">
              <ShieldCheck className="info-card-icon" />
              <h3 className="info-card-title">1. Clareza Estratégica precede Tração Comercial</h3>
              <p>Acreditamos que a clareza não é um elemento do marketing. É o principal ativo de um negócio B2B.</p>
            </div>
            <div className="info-card">
              <Map className="info-card-icon" />
              <h3 className="info-card-title">2. O Diagnóstico é o Mapa do Crescimento</h3>
              <p>Não agimos com base em achismos. Nosso ponto de partida é sempre um diagnóstico profundo que revela a causa raiz da desconexão com o mercado.</p>
            </div>
            <div className="info-card">
              <Wrench className="info-card-icon" />
              <h3 className="info-card-title">3. Engenharia, não Esforço Bruto</h3>
              <p>Não acreditamos em mais campanhas ou mais prospecção. Acreditamos em um sistema mais inteligente que otimiza cada recurso e cada interação.</p>
            </div>
            <div className="info-card">
              <Package className="info-card-icon" />
              <h3 className="info-card-title">4. Ativos, não Campanhas</h3>
              <p>Focamos em construir ativos de longo prazo — narrativas, plataformas, ferramentas — que geram valor composto para o seu negócio.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* Bloco 5: O Convite à Engenharia */}
      <section className="final-cta-section">
        <div className="container text-center">
          <h2 className="final-cta-title">Sua genialidade merece ser entendida. E comprada.</h2>
          <p className="lead-text">
            Se você acredita, como nós, que o potencial do seu negócio está sendo limitado por uma falha de tradução, e não de produto, então estamos falando a mesma língua.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Ativar Engenharia</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
