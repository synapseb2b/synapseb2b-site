import Head from 'next/head';
import Link from 'next/link';

export default function FormularioEnviado() {
  return (
    <>
      <Head>
        <title>Obrigado! – Synapse B2B</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="section section-dark" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center max-w-3xl mx-auto">
            <svg className="mx-auto h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-4xl font-bold mt-6">Obrigado!</h1>
            <p className="text-lg mt-4 text-gray-300">
              Suas respostas foram recebidas com sucesso. Elas são a base para construirmos uma marca e uma plataforma de autoridade para a Exclusiva Engenharias.
            </p>
            <p className="mt-2 text-gray-400">Entraremos em contato em breve para os próximos passos.</p>
            <div className="mt-10">
              <Link href="/" className="btn btn-secondary-contrast">
                Voltar para a Home
              </Link>
            </div>
        </div>
      </section>
    </>
  );
}