import Head from 'next/head';
import BlueprintForm from '../components/BlueprintForm';

export default function BlueprintPage() {
  return (
    <>
      <Head>
        <title>Blueprint Estratégico – Exclusiva Engenharias</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* MINI HERO PARA DAR RESPIRO E CONTEXTO */}
      <section 
        className="section section-dark" 
        style={{ 
          paddingTop: '10rem', 
          paddingBottom: '4rem', 
          minHeight: 'auto' 
        }}
      >
        <div className="container text-center">
          <h1 className="hero-headline" style={{ fontSize: '2.8rem', background: 'none', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}>
            Blueprint Estratégico
          </h1>
          <p className="hero-subheadline" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0 auto' }}>
            Exclusiva Engenharias
          </p>
        </div>
      </section>

      {/* Seção que renderiza o formulário */}
      <section className="section section-dark" style={{ paddingTop: '0' }}>
        <div className="container">
          <BlueprintForm />
        </div>
      </section>
    </>
  );
}