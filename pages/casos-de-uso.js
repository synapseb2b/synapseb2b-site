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

      {/* 1: A Healthtech */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ color: '#64FFDA', marginBottom: '2rem' }}>1. A Healthtech na Armadilha do "Melhor Produto"</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>Desafio:</h4>
                <p>Uma Healthtech possui uma plataforma de IA com potencial para revolucionar a indústria farmacêutica, mas sua mensagem não conecta com o C-Level. A equipe vende features para pesquisadores, enquanto o comprador real enxerga apenas um custo complexo. O resultado é um produto genial, mas que não consegue converter seu potencial em receita.</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>Solução Synapse B2B:</h4>
                <p>Atuamos como o neurotransmissor que traduz genialidade técnica em valor de negócio. Decodificamos a solução em uma narrativa de impacto financeiro para o C-Level e construímos os ativos de venda (pitch deck, ROI calculator) que provam o valor de forma irrecusável, criando urgência na decisão de compra.</p>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA' }}>Resultados Esperados:</h4>
                <p style={{ margin: 0 }}>Aumento exponencial do valor dos contratos (ACV), redução do ciclo de vendas e um novo posicionamento como parceiro estratégico. A empresa deixa de ser uma "ferramenta de TI" e se torna um ativo indispensável para a indústria.</p>
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

      {/* 2: A Regtech */}
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
              <h2 style={{ color: '#64FFDA', marginBottom: '2rem' }}>2. A Regtech com o "Funil Quebrado"</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>Desafio:</h4>
                <p>Uma Regtech possui um funil quebrado: atrai centenas de leads (analistas) com conteúdo rico, mas a conversão é mínima e o CAC, insustentável. A equipe de vendas perde tempo com usuários sem poder de compra, enquanto o negócio queima caixa em um modelo de aquisição que não gera crescimento real.</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>Solução Synapse B2B:</h4>
                <p>Reconstruímos o motor de aquisição com foco cirúrgico no comprador real: o Diretor de Riscos. Desenvolvemos uma nova estratégia de conteúdo e uma narrativa de vendas que eleva a conversa de "automação de tarefas" para "gestão de risco estratégico e impacto no resultado financeiro".</p>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA' }}>Resultados Esperados:</h4>
                <p style={{ margin: 0 }}>Redução drástica do CAC e a criação de um pipeline de vendas qualificado e previsível. O motor de aquisição é reorientado para gerar valor, não volume, garantindo a viabilidade e a escalabilidade do negócio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3: A Engenharia de Referência */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ color: '#64FFDA', marginBottom: '2rem' }}>3. A Engenharia de Referência (que ninguém encontra)</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>Desafio:</h4>
                <p>Empresas de Engenharia, apesar de terem um portfólio impecável e certificações de elite, muitas vezes sofrem por "invisibilidade digital". Seu crescimento é refém da rede de contatos dos sócios, sem um motor de aquisição previsível. Concorrentes menos qualificados, mas com melhor presença online, capturam as oportunidades que deveriam ser suas por direito.</p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#F8F9FA' }}>Solução Synapse B2B:</h4>
                <p>Através da nossa metodologia, convertemos autoridade offline em um ativo digital que gera demanda. Potencializamos a expertise das empresas através de plataformas digitais que não apenas exibem, mas provam seu valor, com conteúdo estratégico que atrai e educa o cliente industrial ideal, posicionando a empresa como a referência definitiva em seu nicho.</p>
              </div>
              <div style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', padding: '1.5rem', borderRadius: '8px' }}>
                <h4 style={{ color: '#64FFDA' }}>Resultados Esperados:</h4>
                <p style={{ margin: 0 }}>A criação de um pipeline de vendas consistente e a redução da dependência de indicações. O foco é no fator principal: motor de crescimento, solidificando a liderança da empresa no mercado através de resultados, não apenas por reputação.</p>
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