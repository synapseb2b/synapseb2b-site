import Head from 'next/head';
import Link from 'next/link';

export default function AgendamentoConfirmado() {
  return (
    <>
      <Head>
        <title>Diagnóstico Confirmado | Synapse B2B</title>
        {/* A tag 'noindex' é crucial para que esta página não seja indexada pelo Google */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
            
            {/* Ícone de Sucesso */}
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <span style={{ color: '#64FFDA', fontSize: '2.5rem', fontWeight: 'bold' }}>✓</span>
            </div>

            {/* Mensagem Principal */}
            <h1 style={{ color: '#64FFDA' }}>Diagnóstico Confirmado.</h1>
            <p style={{ fontSize: '1.2rem', marginTop: '1rem', marginBottom: '2.5rem' }}>
              Excelente decisão. Você receberá os detalhes do nosso encontro de 21 minutos no e-mail que informou.
            </p>

            {/* Próximos Passos / Pós-Conversão */}
            <div style={{ 
              borderTop: '1px solid rgba(100, 255, 218, 0.2)', 
              paddingTop: '2.5rem',
              textAlign: 'left'
            }}>
              <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#F8F9FA' }}>Enquanto Você Espera:</h3>
              <p>
                Para que nossa sessão seja a mais produtiva do seu mês, o ponto de partida é o foco. Pense sobre esta questão: 
                <strong>"Qual é a única barreira que, se removida, geraria o maior impacto no seu crescimento agora?"</strong>
              </p>
              <p>
                Revisitar nossos <Link href="/casos-de-uso" style={{ color: '#64FFDA', textDecoration: 'underline' }}>cenários de aplicação</Link> pode ajudar a cristalizar esse desafio.
              </p>
            </div>
            
            <div className="hero-ctas" style={{ marginTop: '3rem' }}>
              <Link href="/" className="btn btn-secondary">
                Voltar para a Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}