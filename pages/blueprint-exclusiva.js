import Head from 'next/head';
import BlueprintForm from '../components/BlueprintForm';

export default function BlueprintPage() {
  return (
    <>
      <Head>
        <title>Blueprint Estratégico – Exclusiva Engenharias</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Hero Simples para a Página */}
      <section className="hero" style={{ minHeight: '30vh', paddingBlock: '6rem', backgroundColor: '#012a24' }}>
        <div className="container text-center">
          <h1 className="text-4xl font-bold">Blueprint Estratégico</h1>
          <p className="text-xl mt-2 text-gray-300">Exclusiva Engenharias</p>
        </div>
      </section>

      {/* Seção que renderiza o formulário */}
      <section className="section section-dark">
        <div className="container">
          <BlueprintForm />
        </div>
      </section>
      
      <style jsx global>{`
        /* Estilos específicos do formulário (traduzidos do seu HTML) */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f9fafb; /* Define um fundo cinza claro para a página */
        }
        .form-section {
            border-left: 3px solid #1E40AF;
            padding-left: 1.5rem;
            margin-bottom: 2.5rem;
        }
        .question-title {
            color: #111827;
        }
        label:hover {
            background-color: #F3F4F6;
        }
        input[type="radio"]:checked, input[type="checkbox"]:checked {
            background-color: #1D4ED8;
            border-color: #1D4ED8;
        }
        .textarea-custom {
            transition: border-color 0.2s;
        }
        .textarea-custom:focus {
            border-color: #2563EB;
            box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
            outline: none;
        }
      `}</style>
    </>
  );
}