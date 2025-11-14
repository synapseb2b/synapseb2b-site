// PÁGINA: A ENGENHARIA (a-engenharia.js)

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowRight, Target, Users, TrendingUp, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function AEngenhariaPage() {
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
        {/* Título e Descrição Otimizados para a nova copy */}
        <title>A Engenharia | Nossa Tese e Método B2B - Synapse B2B</title>
        <meta name="description" content="Engenharia de Receita não é 'Marketing'. É um Sistema. Entenda nossa tese: por que produtos tecnicamente superiores perdem para concorrentes com narrativas mais simples." />
      </Head>

      {/* ====================================================================== */}
      {/* Seção 1: HERO                                                        */}
      {/* ====================================================================== */}
      <section className="hero-section short-hero">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding">
          <div className="reveal-up">
            {/* Copy da Seção 1 aplicada */}
            <h1 className="section-title">Engenharia de Receita não é "Marketing". É um Sistema.</h1>
            <p className="hero-subheadline wider-on-desktop">
              Não vendemos esforço. Vendemos um método validado para transformar complexidade técnica em receita previsível.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 2: NOSSA TESE                                                  */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="thesis-block">
            {/* Copy da Seção 2 aplicada */}
            <h2 className="section-title text-center">Produtos tecnicamente superiores perdem para concorrentes medíocres com narrativas mais simples.</h2>
            <div className="thesis-content">
              {/* Estrutura de 'cards' removida para dar lugar à narrativa fluida */}
              <p className="thesis-narrative">Este é o princípio que valida a Engenharia de Receita. O mercado B2B de alta complexidade não compra a melhor feature. Ele compra a narrativa mais clara e a solução que resolve a dor de negócio mais cara.</p>
              <p className="thesis-narrative">O "achismo" custa mais caro do que qualquer investimento em método.</p>
              <p className="thesis-narrative">Vemos Marketing e Vendas não como áreas separadas, mas como um sistema integrado de engenharia: cada peça, cada mensagem e cada ação contribuem para um único resultado — receita previsível.</p>
              <p className="thesis-narrative">O crescimento que depende de heroísmo individual é um gargalo, não um ativo. Apenas um sistema replicável permite escalar.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 3: QUEM SOMOS DE VERDADE                                       */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          {/* Copy da Seção 3 aplicada */}
          <h2 className="section-title text-center">Somos engenheiros de receita forjados na linha de frente.</h2>
          <div className="about-content">
            {/* Estrutura de 'founder-block' e 'dna-block' removida para narrativa fluida */}
            <p className="about-narrative">Não somos "consultores teóricos" ou uma "agência digital". Somos estrategistas de receita com mais de 20 anos de experiência operacional em vendas B2B complexas.</p>
            <p className="about-narrative">Nossa metodologia não foi lida em um livro; ela foi validada em ecossistemas de alta complexidade como <strong>Google, Microsoft, Dell</strong> e <strong>TOTVS</strong>.</p>
            <p className="about-narrative">Temos "skin in the game". Aplicamos este exato método em nossos próprios negócios (como a <strong>AORKIA</strong>) antes de aplicá-lo no seu. Sabemos o que é arriscar o próprio capital em uma tese de Go-To-Market.</p>
            <p className="about-narrative">Não entregamos teoria em PDFs. Entregamos o sistema funcionando, operando na linha de frente junto com seu time.</p>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 4: PARA QUEM SERVIMOS (E NÃO SERVIMOS)                         */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          {/* Copy da Seção 4 aplicada */}
          <h2 className="section-title text-center">Servimos o executor sobrecarregado.</h2>
          <p className="lead-text text-center">Atendemos um perfil específico de empresa B2B de alta complexidade (Indústria, Saúde, Tech) que possui excelência técnica, mas sofre com receita imprevisível.</p>
          
          <div className="fit-matrix">
            <div className="fit-column fit-yes">
              {/* "SERVIMOS" mapeado para "Fit Ideal" */}
              <h3><CheckCircle2 size={24} /> SERVIMOS:</h3>
              <ul>
                <li>Fundadores e CEOs que estão sobrecarregados com a operação comercial.</li>
                <li>Empresas onde o crescimento depende 100% de indicações.</li>
                <li>Times que investem em marketing e vendas sem um retorno claro no pipeline.</li>
              </ul>
            </div>

            <div className="fit-column fit-no">
              {/* "NÃO servimos" mapeado para "Não Servimos Para" */}
              <h3><XCircle size={24} /> NÃO servimos:</h3>
              <ul>
                <li>Empresas que procuram "hacks" de marketing ou soluções mágicas.</li>
                <li>Empresas que não têm um produto ou serviço sólido.</li>
                <li>Empresas que não estão dispostas a executar e validar um método.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 5: COMO ESCOLHEMOS PROJETOS                                    */}
      {/* ====================================================================== */}
      <section className="section-with-gradient-glow">
        <div className="container reveal-up">
          <div className="selection-criteria">
            {/* Copy da Seção 5 aplicada */}
            <h2 className="section-title text-center">Não buscamos "clientes". Buscamos nossa próxima tese de negócio.</h2>
            
            {/* Estrutura de 'cards' removida para narrativa fluida */}
            <div style={{maxWidth: '800px', margin: '3rem auto 0'}}>
              <p className="about-narrative">Somos uma assessoria de alta performance, não uma fábrica de projetos. Escolhemos rigorosamente com quem trabalhar.</p>
              <p className="about-narrative">Procuramos fundadores sobrecarregados que valorizam a inteligência sênior. Buscamos empresas com excelência técnica, mas que estão sendo superadas por narrativas mais simples.</p>
              <p className="about-narrative">Seu desafio de crescimento não é um "job". É uma tese que vamos validar, documentar e transformar em um case de sucesso.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 6: NOSSA DEFINIÇÃO DE PARCERIA                                 */}
      {/* ====================================================================== */}
      <section className="section-solid">
        <div className="container reveal-up">
          <div className="partnership-block">
            <h2 className="section-title text-center">Nossa Definição de Parceria</h2>
            <div className="partnership-content">
              {/* Estrutura de 'cards' removida e substituída pela 'dna-list' (do CSS existente) para a nova copy */}
              <ul className="dna-list" style={{maxWidth: '900px', margin: '3rem auto', textAlign: 'left'}}>
                <li>
                  <CheckCircle2 size={20} /> 
                  <div>
                    <strong>Transparência Radical:</strong> Nossos modelos de investimento (Seção 4 da Home) são públicos. Você sabe o custo antes de qualquer reunião.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Inteligência Sênior:</strong> Você não fala com um "vendedor júnior". Você fala diretamente com o fundador e CRO, do diagnóstico à execução.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Execução na Linha de Frente:</strong> Não ficamos na teoria. Atuamos como seu CRO fracionado, validando o playbook e entregando o sistema operando.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-glow"></div>

      {/* ====================================================================== */}
      {/* Seção 7: CTA FINAL (Padrão Home)                                     */}
      {/* ====================================================================== */}
      <section className="final-cta-section final-cta-revolutionary">
        <div className="pulsating-core-background"></div>
        <div className="container text-center reveal-up" style={{position: 'relative', zIndex: 2}}>
          {/* Copy da Seção 7 aplicada */}
          <h2 className="final-cta-title" style={{color: 'var(--color-heading)', background: 'none', WebkitTextFillColor: 'unset', animation: 'none'}}>
            Seu desafio é a nossa próxima tese.
          </h2>
          <p className="cta-support-text" style={{color: 'var(--color-heading)', fontSize: '1.25rem', maxWidth: '700px'}}>
            Se você se reconheceu nesta filosofia, seu desafio não é único. A forma de resolvê-lo, sim.
          </p>
          <div className="section-cta">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agende sua Sessão de Diagnóstico (21min)</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="cta-support-text" style={{opacity: 0.8, marginTop: '1.5rem'}}>
            Primeira conversa: 21 minutos para entender seu contexto e avaliar fit mútuo. Sem pressão. Só clareza.
          </p>
        </div>
      </section>

      {/* --- ESTILOS JSX - Usados para Seções 2, 3 e 5 --- */}
      <style jsx>{`
        /* Estilos para a nova narrativa nas seções de Tese, Quem Somos e Como Escolhemos */
        .thesis-narrative, .about-narrative {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-text);
          margin-bottom: 1.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
        }
        
        /* Centralizando o texto nos blocos de narrativa */
        .thesis-block .thesis-content,
        .about-content,
        .selection-criteria {
          text-align: center;
        }

        .about-narrative strong {
          color: var(--color-accent);
          font-weight: 600;
        }
        
        /* Ajuste de alinhamento para a lista da Seção 6 */
        .dna-list li {
          align-items: flex-start;
          gap: 1rem;
        }
        .dna-list li > div {
          text-align: left;
        }
        .dna-list li strong {
          color: var(--color-heading);
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          display: block; /* Faz o texto quebrar abaixo do título */
          margin-bottom: 0.25rem;
        }
        
        /* Ajustes Finais de Layout */
        .thesis-block, .about-content, .fit-matrix, .selection-criteria, .partnership-block {
          max-width: 1000px;
          margin: 0 auto;
        }

        .fit-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        .fit-column {
          padding: 2.5rem;
          border-radius: 12px;
        }
        .fit-yes {
          background: rgba(0, 150, 132, 0.05);
          border: 1px solid var(--color-primary);
        }
        .fit-no {
          background-color: var(--color-card-bg);
          border: 1px solid var(--color-border);
        }
        .fit-column h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.3rem;
          margin-bottom: 2rem;
          color: var(--color-heading);
          font-family: 'Montserrat', sans-serif;
        }
        .fit-yes h3 {
          color: var(--color-primary);
        }
        .fit-column ul {
          list-style: none;
          padding: 0;
          text-align: left; /* Garante alinhamento da lista */
        }
        .fit-column li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .fit-column li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: bold;
        }
        
        /* Responsividade */
        @media (max-width: 768px) {
          .fit-matrix {
            grid-template-columns: 1fr;
          }
          .thesis-narrative, .about-narrative {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}