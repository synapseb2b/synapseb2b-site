import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function CasosDeUso() {
  return (
    <>
      <Head>
        <title>Casos de Uso - Cenários de Aplicação | Synapse B2B</title>
        <meta name="description" content="Veja como nosso framework gera valor em cenários de alta complexidade, do SaaS Scale-Up à Deep Tech." />
      </Head>

      {/* Seção Hero */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Cenários de Aplicação</h1>
            <p>
              Desafios B2B complexos exigem mais do que táticas. Exigem um sistema.
              <br />
              Veja como nosso framework gera valor em cenários de alta complexidade.
            </p>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.2,
          background: 'linear-gradient(135deg, #000000 0%, #0A192F 100%)'
        }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Caso de Uso 1: A Healthtech */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ color: '#64FFDA', marginBottom: '2rem' }}>Caso de Uso 1: A Healthtech na Armadilha do "Melhor Produto"</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>O Desafio:</h4>
                <p>Uma plataforma de IA para logística de ensaios clínicos possui uma tecnologia superior, comprovadamente capaz de otimizar a distribuição de insumos e reduzir o tempo de estudos em 30%. No entanto, as vendas não decolam. A equipe comercial apresenta "algoritmos preditivos" e "integração de dados" para gestores de pesquisa clínica que, apesar de impressionados, não detêm o orçamento. O C-Level das grandes farmacêuticas, o comprador real, percebe a solução apenas como mais uma "ferramenta de TI" complexa, e não como uma alavanca estratégica para o negócio.</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>A Solução Synapse B2B:</h4>
                <p>Aplicamos nosso processo para transformar a genialidade técnica em uma proposta de valor irrecusável.<br/><br/>
                  <strong>Diagnóstico Estratégico:</strong> Identificamos o desalinhamento fatal: a conversa estava focada em features para o usuário, não em impacto financeiro para o comprador.<br/><br/>
                  <strong>Decodificação de Mercado:</strong> Redefinimos o value proposition para o C-Level. A mensagem deixou de ser "otimizamos sua logística" para se tornar "aceleramos seu time-to-market e destravamos milhões em receita patenteada".<br/><br/>
                  <strong>Engenharia de Receita:</strong> Construímos os ativos para essa nova narrativa: um pitch deck executivo e uma calculadora de ROI interativa que traduzia a eficiência logística em dias de patente economizados e impacto direto no Ebitda.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA' }}>O Resultado da Transformação:</h4>
                <p style={{ margin: 0 }}>A Healthtech parou de vender um software e passou a vender o ativo mais valioso para uma farmacêutica: tempo. O ciclo de vendas para contas enterprise foi reduzido, o valor médio dos contratos quintuplicou, e a empresa se posicionou como um parceiro estratégico indispensável, garantindo uma nova rodada de investimentos com base em um Go-to-Market previsível.</p>
              </div>
            </div>
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', height: '100%' }}>
              <Image 
                src="/image/Caso-Healthtech-SaaS.png" 
                alt="Healthtech SaaS" 
                fill
                style={{ borderRadius: '12px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 2: A Regtech */}
      <section className="section section-darker">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', height: '100%' }}>
              <Image 
                src="/image/Caso-Regtech-Funil-Quebrado.png" 
                alt="Regtech com Funil Quebrado" 
                fill
                style={{ borderRadius: '12px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h2 style={{ color: '#64FFDA', marginBottom: '2rem' }}>Caso de Uso 2: A Regtech com o "Funil Quebrado"</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>O Desafio:</h4>
                <p>Uma startup de Regtech (Tecnologia Regulatória) desenvolveu um SaaS que automatiza a conformidade com normas financeiras complexas. Seu marketing de conteúdo é um sucesso, gerando centenas de leads mensais. O problema? A taxa de conversão é inferior a 1% e o Custo de Aquisição (CAC) está sufocando o negócio. Eles atraem analistas de conformidade que baixam e-books, mas as reuniões de vendas nunca passam do nível tático. O Vendedor ouve "muito interessante, preciso validar internamente" — uma frase que se tornou o atestado de óbito de todos os negócios.</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>A Solução Synapse B2B:</h4>
                <p>O foco foi reconstruir o motor de aquisição para atrair quem assina o cheque, não apenas quem usa a ferramenta.<br/><br/>
                  <strong>Diagnóstico Estratégico:</strong> A análise de dados foi clara: o funil não estava quebrado, ele foi construído para o público errado.<br/><br/>
                  <strong>Decodificação de Mercado:</strong> Mapeamos as dores e os jobs-to-be-done do verdadeiro ICP: o Diretor de Riscos, cuja preocupação não é a tarefa, mas a exposição a multas milionárias e o risco à sua reputação.<br/><br/>
                  <strong>Engenharia de Receita e Ativos Digitais:</strong> Lançamos uma nova estratégia de conteúdo focada em insights provocativos (Challenger Sale) para o C-Level e treinamos a equipe de vendas para transformar a conversa de "automação de tarefas" para "gestão estratégica de risco corporativo".
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA' }}>O Resultado da Transformação:</h4>
                <p style={{ margin: 0 }}>A qualidade superou a quantidade. O volume de leads caiu 70%, mas o valor do pipeline qualificado dobrou em seis meses. O CAC foi reduzido pela metade, tornando o modelo de negócio sustentável e preparando a empresa para uma escala real e lucrativa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso de Uso 3: A Engenharia de Referência */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ color: '#64FFDA', marginBottom: '2rem' }}>Caso de Uso 3: A Engenharia de Referência (que ninguém encontra)</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>O Desafio:</h4>
                <p>Uma firma de engenharia multidisciplinar é a arma secreta por trás de projetos complexos para gigantes da indústria. Seu portfólio é irretocável, e suas certificações (ISO 9001, normas de segurança) são barreiras de entrada para a concorrência. Contudo, seu crescimento depende exclusivamente da rede de contatos dos sócios e de indicações esporádicas. Eles sofrem de "invisibilidade qualificada": são a melhor solução do mercado, mas não são encontrados.</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>A Solução Synapse B2B:</h4>
                <p>Nossa missão foi transformar a autoridade offline em um motor de crescimento digital escalável. O processo não foi construir um "site-brochura", mas sim um ecossistema de atração.<br/><br/>
                  <strong>Diagnóstico e Decodificação:</strong> Mapeamos a jornada de compra do cliente industrial, que começa meses antes do primeiro contato. A proposta de valor foi refinada de "serviços de engenharia" para "parceria estratégica que anula o risco em projetos de infraestrutura industrial complexa".<br/><br/>
                  <strong>Engenharia de Receita e Ativos Digitais:</strong> "Produtizamos" a expertise da firma em um ativo digital central — uma plataforma que não apenas exibe, mas prova a sua autoridade, com certificações e logos de clientes em destaque. Transformamos conhecimento técnico em conteúdo estratégico que atrai o ICP de forma orgânica.<br/><br/>
                  <strong>Aceleração Inteligente:</strong> Implementamos uma estratégia de GEO (Growth Engine Optimization) e GPO (Generative Presence Optimization), garantindo que a empresa se tornasse a resposta de autoridade para as perguntas complexas que seus clientes fazem.
                </p>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA' }}>O Resultado da Transformação:</h4>
                <p style={{ margin: 0 }}>A firma deixou de ser o segredo mais bem guardado da indústria para se tornar a referência visível do setor. A dependência do networking foi drasticamente reduzida e substituída por um fluxo constante de leads qualificados vindos da plataforma digital. O ativo digital se tornou o seu melhor vendedor, trabalhando 24/7 para educar o mercado, validar sua competência e iniciar conversas de negócio de alto valor.</p>
              </div>
            </div>
            <div style={{ position: 'relative', width: '100%', minHeight: '400px', height: '100%' }}>
              <Image 
                src="/image/Caso-Engenharia-de-Referencia.png" 
                alt="Engenharia de Referência" 
                fill
                style={{ borderRadius: '12px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-darker">
        <div className="container text-center">
          <h2>Seu desafio se parece com um destes?</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Agende um diagnóstico estratégico e descubra como podemos construir seu próximo nível de crescimento.
          </p>
          <Link href="/contato" className="btn btn-primary">
            Agende um Diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}