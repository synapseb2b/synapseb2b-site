// pages/casos-de-uso.js

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, HardHat, HeartPulse } from 'lucide-react';

export default function CasosDeUsoPage() {
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
        <title>Casos de Uso | Provas da Engenharia de Receita Synapse B2B</title>
        <meta name="description" content="Analise a anatomia de duas transformações de Go-To-Market e veja o Cortex GTM™ em ação, desbloqueando o valor de empresas B2B complexas." />
        <link rel="canonical" href="https://synapseb2b.com/casos-de-uso" />
      </Head>

      {/* --- Seção Hero --- */}
      <section className="hero-section" style={{ minHeight: '70vh' }}>
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center reveal-up">
          <h1 className="hero-headline">Nossos resultados não são histórias. São teses de negócio.</h1>
          <p className="hero-subheadline">A prova da nossa engenharia não está no que dizemos, mas no valor que desbloqueamos. Analise a anatomia de duas transformações de Go-To-Market e veja o Cortex GTM™ em ação.</p>
        </div>
      </section>

      {/* --- Bloco 2: Introdução ao Estudo --- */}
      <section id="intro-estudo" className="section-solid">
        <div className="container text-center reveal-up">
          <h2 className="section-title">A Prova da Engenharia</h2>
          <p className="lead-text">Cada cliente que nos procura enfrenta uma variação do mesmo desafio: o Paradoxo do Valor, onde a genialidade técnica não se converte em performance de mercado. Abaixo, não apresentamos "cases", mas sim o blueprint de como nosso sistema de engenharia decodifica a complexidade e arquiteta um novo motor de receita.</p>
        </div>
      </section>

      {/* --- Bloco 3: Estudo de Caso 1 | Engenharia & Indústria --- */}
      <section id="caso-industria" className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="case-study-header text-center">
            <HardHat className="case-study-icon" />
            <p className="case-study-company">Empresa: Exclusiva Engenharias</p>
            <h2 className="section-title">De um Coletivo de Empresas a um Hub de Engenharia de Alta Performance</h2>
          </div>

          <div className="case-study-body">
            <div className="case-study-section">
              <h3>O Cenário: O Paradoxo da Competência Isolada</h3>
              <p>A Exclusiva era a soma de várias operações de engenharia de alta competência, lideradas por uma família e servindo gigantes da indústria como Iveco e FPT. Contudo, operavam como entidades isoladas (civil, elétrica, automação ). Essa fragmentação criava uma barreira de percepção: para o mercado, eram um fornecedor competente, mas não um parceiro estratégico. A genialidade estava lá, mas a tese de negócio, não. O resultado era uma dependência de indicações e uma incapacidade de comunicar um valor unificado que justificasse contratos de maior valor.</p>
            </div>

            <div className="case-study-section">
              <h3>A Engenharia Aplicada: Arquitetura da Tese de Mercado</h3>
              <p>A aplicação do Cortex GTM™ foi cirúrgica. O diagnóstico revelou que a força latente não estava em cada engenharia individual, mas na capacidade de integrá-las para resolver um problema crítico: a execução de obras complexas em plantas industriais ativas, sem interromper a operação do cliente.</p>
              <ul>
                <li><strong>Fase 1 (Diagnóstico):</strong> Mapeamos o Custo da Inação para o cliente industrial – o risco financeiro e operacional de contratar múltiplos fornecedores descoordenados.</li>
                <li><strong>Fase 2 (Arquitetura):</strong> Com base no diagnóstico, arquitetamos uma nova tese de mercado: a Exclusiva não era uma construtora, mas um "Hub Multidisciplinar de Engenharia para Infraestrutura de Apoio Essencial à Indústria". Essa tese redefiniu sua categoria e justificou o rebatismo da marca para "Exclusiva Engenharias".</li>
                <li><strong>Fase 3 (Ativação):</strong> A nova tese foi traduzida em uma Plataforma Digital de Aceleração, projetada para comunicar essa nova categoria de valor e capturar leads qualificados que antes eram invisíveis.</li>
              </ul>
            </div>

            <div className="case-study-section">
              <h3>A Transformação: De Fornecedor a Parceiro Estratégico</h3>
              <p>A clareza da nova tese de mercado atuou como um catalisador. A Exclusiva deixou de vender "obras" para vender "previsibilidade e risco zero". O impacto foi imediato, não apenas na percepção do mercado, mas na própria natureza do nosso relacionamento. O engajamento inicial evoluiu para uma parceria de longo prazo, com a Synapse assumindo posições de CRO as a Service e Advisory Board para continuar a escalar o novo motor de receita.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Bloco 4: Estudo de Caso 2 | HealthTech --- */}
      <section id="caso-healthtech" className="section-solid">
        <div className="container reveal-up">
          <div className="case-study-header text-center">
            <HeartPulse className="case-study-icon" />
            <p className="case-study-company">Empresa: Versão Holística</p>
            <h2 className="section-title">De uma Inovação Complexa à Criação de uma Nova Categoria de Mercado em Saúde</h2>
          </div>

          <div className="case-study-body">
            <div className="case-study-section">
              <h3>O Cenário: O Paradoxo da Genialidade Incompreendida</h3>
              <p>A Versão Holística nasceu com uma solução nobre e tecnicamente brilhante para a gestão de pacientes crônicos. Contudo, sua proposta de valor era tão inovadora que se tornou incompreensível. Termos como "Cuidado Farmacêutico Integrativo" geravam mais perguntas do que confiança. Clientes e, crucialmente, investidores, não conseguiam conectar a solução a um problema de negócio claro e com ROI mensurável. A empresa tinha uma cura, mas o mercado não entendia a doença. O potencial de escala estava travado pela falta de clareza.</p>
            </div>

            <div className="case-study-section">
              <h3>A Engenharia Aplicada: Design de Categoria e Tese de Investimento</h3>
              <p>O desafio não era "simplificar" a mensagem, mas sim construir uma moldura que desse sentido à complexidade. A aplicação do Cortex GTM™ focou em traduzir a inovação em um caso de negócio irrefutável.</p>
              <ul>
                <li><strong>Fase 1 (Diagnóstico):</strong> Identificamos que a VH resolvia a dor mais cara do setor de saúde: os 5% de pacientes crônicos que consomem 50% dos recursos. O problema não era vago; era uma sangria financeira.</li>
                <li><strong>Fase 2 (Arquitetura):</strong> Criamos uma nova categoria de mercado para abrigar a solução: "CareOps Integrativo". Essa categoria deu à VH a linguagem para se posicionar não como uma alternativa, mas como a evolução da gestão de saúde. Cristalizamos a oferta em uma tese de investimento com potencial de ROI superior a 6 para 1 para hospitais.</li>
                <li><strong>Fase 3 (Ativação):</strong> A nova tese foi materializada em ativos de conversão de alto impacto: um Pitch Deck para investidores e uma Plataforma Digital projetada para educar e converter C-levels da saúde.</li>
              </ul>
            </div>

            <div className="case-study-section">
              <h3>A Transformação: De Potencial Travado a um Ativo Pronto para Escala</h3>
              <p>O resultado foi a clareza total. A Versão Holística agora possui uma narrativa que não apenas explica o que faz, mas que cria urgência e justifica o investimento. A empresa está equipada com os ativos estratégicos necessários para acelerar a tração de mercado, dialogar com investidores e comprovar, em minutos, o valor de sua solução para os decisores mais céticos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Bloco 5: Chamada Final --- */}
      <section className="final-cta-section">
        <div className="container text-center reveal-up">
          <h2 className="final-cta-title">Sua transformação é o nosso próximo caso de uso.</h2>
          <p className="lead-text">Os desafios eram diferentes, mas o sistema aplicado foi o mesmo. A Engenharia de Receita funciona porque é um método, não um acaso. Se você se identifica com o paradoxo de ter uma solução superior que o mercado ainda não valoriza, a conversa começa aqui.</p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large">
              <span>Agende sua Sessão de Diagnóstico Estratégico</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
