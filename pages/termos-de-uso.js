import Head from 'next/head';

export default function TermosDeUso() {
  return (
    <>
      <Head>
        <title>Termos de Uso | Synapse B2B</title>
        <meta name="description" content="Termos de Uso da Synapse B2B - Condições para utilização de nosso site e serviços." />
      </Head>

      <main>
        {/* Seção Hero */}
        <section className="hero" style={{ minHeight: '40vh', paddingBlock: '8rem' }}>
          <div className="container">
            <div className="hero-content">
              <h1>Termos de Uso</h1>
              <p>Última atualização: Julho de 2025</p>
            </div>
          </div>
        </section>

        {/* Conteúdo dos Termos */}
        <section className="section section-dark">
          <div className="container" style={{ maxWidth: '800px' }}>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2>1. Aceitação dos Termos</h2>
              <p>Ao acessar e usar o site da Synapse B2B (www.synapseb2b.com), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso site ou serviços.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>2. Uso Aceitável</h2>
              <p>Você concorda em usar nosso site apenas para fins legítimos. Você não deve usar o site de qualquer forma que viole leis, para transmitir material malicioso, ou para tentar obter acesso não autorizado aos nossos sistemas.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>3. Propriedade Intelectual</h2>
              <p>O conteúdo do site, incluindo textos, gráficos, logotipos e imagens, é propriedade da Synapse B2B e está protegido por leis de direitos autorais. A reprodução ou distribuição sem autorização prévia por escrito é proibida.</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h2>4. Privacidade</h2>
              <p>A coleta e uso de informações pessoais é regida por nossa <a href="/politica-de-privacidade">Política de Privacidade</a>, que está incorporada a estes Termos de Uso por referência.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>5. Limitação de Responsabilidade</h2>
              <p>Em nenhuma circunstância a Synapse B2B será responsável por quaisquer danos diretos ou indiretos decorrentes do uso ou incapacidade de usar o site.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>6. Modificações dos Termos</h2>
              <p>A Synapse B2B reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação no site.</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>7. Lei Aplicável</h2>
              <p>Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais de Belo Horizonte, Minas Gerais.</p>
            </div>

            <div>
              <h2>8. Contato</h2>
              <p>Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: <a href="mailto:contato@synapseb2b.com">contato@synapseb2b.com</a>.</p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}