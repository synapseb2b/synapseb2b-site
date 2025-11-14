{/* ====================================================================== */}
      {/* Seção 1: Hero Section (VERSÃO PRÁTICA)                              */}
      {/* ====================================================================== */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center page-hero-padding reveal-up">
          
          {/* HEADLINE PRÁTICA (Estilo H1 do globals.css, mas com <p> para quebra de linha) */}
          <h1 className="hero-headline" style={{ fontSize: '3.2rem', lineHeight: '1.2' }}>
            ENGENHARIA DE RECEITA PARA EMPRESAS B2B
            <br/>
            QUE PRECISAM DE CRESCIMENTO PREVISÍVEL
          </h1>
          
          {/* SUBHEADLINE PRÁTICA */}
          <p className="hero-subheadline wider-on-desktop">
            Nós instalamos o sistema (GTM, Narrativa e Ativos) que transforma sua complexidade técnica em um motor de vendas que escala.
          </p>
          
          <div className="hero-ctas">
            <Link href="/contato" className="btn btn-primary btn-large btn-cta-pulse">
              <span>Agendar Diagnóstico Estratégico (21min)</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/a-engenharia" className="btn btn-secondary btn-large">
              <span>Conhecer a Engenharia de Receita</span>
            </Link>
          </div>

          {/* Barra de Confiança (Trust Bar) */}
          <div className="trust-bar reveal-up">
            <p>Validado em ecossistemas de alta complexidade como:</p>
            <div className="trust-bar-logos">
              <Image src="/logo/logo-google.png" alt="Google" width={100} height={32} />
              <Image src="/logo/logo-microsoft.png" alt="Microsoft" width={100} height={32} />
              <Image src="/logo/logo-dell.png" alt="Dell" width={100} height={32} />
              <Image src="/logo/logo-totvs.png" alt="TOTVS" width={100} height={32} />
              <Image src="/logo/logo-keepit.png" alt="Keepit" width={100} height={32} />
            </div>
          </div>
        </div>
      </section>