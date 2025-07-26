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

      {/* Seção de Casos */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-3">
            
            {/* Caso de Uso 1: O SaaS Scale-Up */}
            <div className="card" style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#64FFDA' }}>Caso de Uso 1: O SaaS Scale-Up</h3>
              <p style={{ marginTop: '1.5rem' }}>
                <strong>Desafio:</strong> Uma plataforma SaaS com forte tração em PLG (Product-Led Growth) precisa entrar no mercado Enterprise, mas seu modelo de autoatendimento não converte contratos de alto valor.
              </p>
              <p>
                <strong>Solução Synapse B2B:</strong> Estruturação de um modelo híbrido (Product-Led Sales), refinamento do ICP para contas Enterprise, e construção de uma narrativa de vendas focada em ROI para o C-Level.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Resultados Esperados:</strong> Aumento do ACV (Valor Anual do Contrato), redução do ciclo de vendas Enterprise e criação de um novo motor de receita previsível.
              </p>
            </div>

            {/* Caso de Uso 2: A Deep Tech / IA */}
            <div className="card" style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#64FFDA' }}>Caso de Uso 2: A Deep Tech / IA</h3>
              <p style={{ marginTop: '1.5rem' }}>
                <strong>Desafio:</strong> Uma startup de Inteligência Artificial com tecnologia revolucionária tem dificuldade em comunicar seu valor de negócio, sendo percebida como "muito complexa". Os pitch decks não conseguem demonstrar o poder real da solução.
              </p>
              <p>
                <strong>Solução Synapse B2B:</strong> Além da criação da narrativa de valor, desenvolvemos uma Plataforma Digital de Demonstração Interativa. Este ativo digital traduz a complexidade da IA em uma experiência visual e guiada, permitindo que prospects e investidores simulem o uso e calculem o ROI potencial em tempo real, sem a necessidade de uma demorada prova de conceito.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Resultados Esperados:</strong> Aumento drástico no engajamento de prospects, ciclo de vendas mais curto por meio da autoqualificação na plataforma, e maior confiança dos investidores ao visualizar o produto em ação.
              </p>
            </div>

            {/* Caso de Uso 3: A Consultoria de Alta Especialização */}
            <div className="card" style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#64FFDA' }}>Caso de Uso 3: A Consultoria de Alta Especialização</h3>
              <p style={{ marginTop: '1.5rem' }}>
                <strong>Desafio:</strong> Uma firma de serviços B2B (Engenharia, Jurídico, Financeiro) depende exclusivamente de indicações e networking pessoal, sem um motor de crescimento escalável para prospecção ativa.
              </p>
              <p>
                <strong>Solução Synapse B2B:</strong> "Produtização" dos serviços em ofertas claras, definição de um nicho de mercado de alto valor, e construção de uma estratégia de GTM baseada em autoridade para gerar demanda previsível.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Resultados Esperados:</strong> Redução da dependência de indicações, criação de um pipeline de vendas consistente e aumento da lucratividade.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-darker">
        <div className="container text-center">
          <Link href="/contato" className="btn btn-primary">
            Seu desafio se parece com um destes? Agende um diagnóstico
          </Link>
        </div>
      </section>
</>
);
}