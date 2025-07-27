import Head from 'next/head';

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Synapse B2B</title>
        <meta name="description" content="Política de Privacidade da Synapse B2B - Como coletamos, usamos e protegemos suas informações pessoais." />
      </Head>

      <main>
        {/* Seção Hero */}
        <section className="hero" style={{ minHeight: '40vh', paddingBlock: '8rem' }}>
          <div className="container">
            <div className="hero-content">
              <h1>Política de Privacidade</h1>
              <p>Última atualização: Julho de 2025</p>
            </div>
          </div>
        </section>

        {/* Conteúdo da Política */}
        <section className="section section-dark">
          <div className="container" style={{ maxWidth: '800px' }}>

            <div style={{ marginBottom: '2rem' }}>
              <h2>1. Informações Gerais</h2>
              <p>A Synapse B2B está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>2. Informações que Coletamos</h2>
              <p>Podemos coletar informações de contato (nome, e-mail, empresa) quando você preenche nossos formulários, além de informações de navegação (páginas visitadas, endereço IP) para melhorar sua experiência.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>3. Como Usamos suas Informações</h2>
              <p>Utilizamos suas informações para responder às suas solicitações, enviar informações sobre nossos serviços, melhorar nosso site e cumprir obrigações legais.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>4. Compartilhamento de Informações</h2>
              <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto com seu consentimento explícito, para cumprir obrigações legais ou com prestadores de serviços que nos auxiliam na operação do site.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>5. Seus Direitos</h2>
              <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais, bem como revogar o consentimento para o uso de seus dados. Para exercer seus direitos, entre em contato conosco.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>6. Cookies</h2>
              <p>Utilizamos cookies para melhorar sua experiência em nosso site. Você pode controlar o uso de cookies através das configurações do seu navegador.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>7. Contato</h2>
              <p>Para esclarecer dúvidas sobre esta política, entre em contato conosco através do e-mail: <a href="mailto:contato@synapseb2b.com">contato@synapseb2b.com</a>.</p>
            </div>

            <div>
              <h2>8. Alterações nesta Política</h2>
              <p>Esta Política de Privacidade pode ser atualizada periodicamente. A versão mais recente estará sempre disponível nesta página.</p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}