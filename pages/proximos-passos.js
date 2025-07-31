import Head from 'next/head';
import Link from 'next/link';

export default function ProximosPassos() {
  return (
    <>
      <Head>
        <title>Próximos Passos Para o Seu Diagnóstico | Synapse B2B</title>
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
              Tudo Pronto Para o Nosso Diagnóstico.
            </h1>
            <p className="text-xl mt-4 mb-10 text-slate-300">
              Excelente decisão. Os detalhes do nosso encontro de 21 minutos já estão no seu e-mail e na sua agenda.
            </p>

            {/* Seção de Preparação (Briefing) */}
            <div className="border-t border-teal-500/20 pt-10 text-left">
              <h3 className="text-center mb-6 text-slate-100">Enquanto Você Espera:</h3>
              <p className="text-slate-400">
                Para que nossa sessão seja a mais produtiva do seu mês, o ponto de partida é o foco. Pense sobre esta questão: 
                <strong className="block mt-2 text-slate-200">"Qual é a única barreira que, se removida, geraria o maior impacto no seu crescimento agora?"</strong>
              </p>
              <p className="mt-4 text-slate-400">
                Revisitar nossos <Link href="/casos-de-uso" className="text-teal-400 underline hover:text-white">cenários de aplicação</Link> pode ajudar a cristalizar esse desafio.
              </p>
            </div>
            
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