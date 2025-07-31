import Head from 'next/head';
import Link from 'next/link';

export default function ProximosPassos() {
  return (
    <>
      <Head>
        <title>Diagnóstico Confirmado | Synapse B2B</title>
        {/* Mantemos o noindex para que esta página não apareça nos resultados de busca */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <section className="hero flex items-center min-h-[80vh]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            
            {/* Ícone de Sucesso */}
            <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl font-bold text-teal-400">✓</span>
            </div>

            {/* Mensagem Principal */}
            <h1 className="text-teal-400">
              Agendamento Confirmado.
            </h1>
            <p className="text-xl mt-4 mb-10 text-slate-300">
              Parabéns por dar o primeiro passo decisivo para a aceleração do seu negócio. Este agendamento marca o início do nosso processo de diagnóstico. Os detalhes da nossa sessão já foram enviados para o seu e-mail. Caso queira nos adiantar qualquer contexto ou documento, sinta-se à vontade para enviar para contato@synapseb2b.com.
            </p>
            
            <div className="mt-12">
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