// components/Navbar.js
// REFATORADO: Alinhado ao Design System Premium (globals.css)
// Layout estrutural mantido, estética herdada globalmente.

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Brain, MonitorSmartphone, Box, Building, Mail, ChevronDown, Award } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Estados para os acordeões do menu mobile
  const [isIntelOpen, setIsIntelOpen] = useState(false);
  const [isAtivosOpen, setIsAtivosOpen] = useState(false);
  const [isVerticaisOpen, setIsVerticaisOpen] = useState(false);
  const [isCasesOpen, setIsCasesOpen] = useState(false);

  const router = useRouter();

  useEffect(() => { 
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsIntelOpen(false);
    setIsAtivosOpen(false);
    setIsVerticaisOpen(false);
    setIsCasesOpen(false);
  };

  // Verificação de rota ativa
  const isIntelActive = router.pathname.includes('/inteligencia-e-estrategia');
  const isAtivosActive = router.pathname.includes('/ativos-digitais');
  const isVerticaisActive = router.pathname.includes('/solucoes-verticais');
  const isCasesActive = router.pathname.includes('/cases');
  const isSynapseActive = router.pathname === '/a-engenharia';

  // Utilitário para classes condicionais
  const getNavLinkClass = (isActive) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <>
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          
          {/* --- LOGO (VÍDEO) --- */}
          <a href="/" className="nav-logo-link" onClick={handleLinkClick}>
            <video autoPlay loop muted playsInline className="nav-logo-video">
              <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
            </video>
          </a>

          {/* --- MENU DESKTOP --- */}
          <ul className="nav-menu">
            {/* 1. Inteligência */}
            <li className="dropdown-container">
              <div className={getNavLinkClass(isIntelActive)}>
                Inteligência e Estratégia <ChevronDown size={14} className="chevron-desktop" />
              </div>
              <div className="dropdown-menu glass-effect">
                <a href="/pilares/inteligencia-e-estrategia/sprint-validacao" className="dropdown-link">Sprint de Validação</a>
                <a href="/pilares/inteligencia-e-estrategia/gtm-completo" className="dropdown-link">GTM Completo</a>
                <a href="/pilares/inteligencia-e-estrategia/cro-service" className="dropdown-link">CRO as a Service</a>
                <a href="/pilares/inteligencia-e-estrategia/advisory-board" className="dropdown-link">Advisory Board</a>
              </div>
            </li>

            {/* 2. Ativos */}
            <li className="dropdown-container">
              <div className={getNavLinkClass(isAtivosActive)}>
                Ativos Digitais <ChevronDown size={14} className="chevron-desktop" />
              </div>
              <div className="dropdown-menu glass-effect">
                <a href="/pilares/ativos-digitais/plataformas-digitais" className="dropdown-link">Plataformas Digitais</a>
                <a href="/pilares/ativos-digitais/apps" className="dropdown-link">Ferramentas de Aceleração</a>
              </div>
            </li>

            {/* 3. Verticais */}
            <li className="dropdown-container">
              <div className={getNavLinkClass(isVerticaisActive)}>
                Soluções Verticais <ChevronDown size={14} className="chevron-desktop" />
              </div>
              <div className="dropdown-menu glass-effect">
                <a href="/pilares/solucoes-verticais/cortex-b2b" className="dropdown-link">Cortex B2B™</a>
                <a href="/pilares/solucoes-verticais/match-maker" className="dropdown-link">Match Maker B2B</a>
                <a href="/pilares/solucoes-verticais/hba" className="dropdown-link">Health Business Arch.™</a>
              </div>
            </li>

            {/* 4. Cases */}
            <li className="dropdown-container">
              <div className={getNavLinkClass(isCasesActive)}>
                Cases <ChevronDown size={14} className="chevron-desktop" />
              </div>
              <div className="dropdown-menu glass-effect">
                <a href="/cases/exclusiva-engenharias" className="dropdown-link">Exclusiva Engenharias</a>
                <a href="/cases/versao-holistica" className="dropdown-link">Versão Holística</a>
                <a href="/cases/aorkia" className="dropdown-link">AORKIA</a>
              </div>
            </li>

            {/* 5. Institucional */}
            <li><a href="/a-engenharia" className={getNavLinkClass(isSynapseActive)}>A Synapse</a></li>

            {/* CTA */}
            <li>
              <a href="/contato" className="btn-nav-cta">
                Ativar Engenharia
              </a>
            </li>
          </ul>

          {/* --- HAMBURGER (Mobile) --- */}
          <button className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <span className="bar top"></span>
            <span className="bar middle"></span>
            <span className="bar bottom"></span>
          </button>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY --- */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-scroll-container">
            <ul className="mobile-menu-links">
            
            {/* Grupos Mobile */}
            <li className="mobile-group">
                <button onClick={() => setIsIntelOpen(!isIntelOpen)} className={`mobile-parent-btn ${isIntelOpen ? 'open' : ''}`}>
                  <div className="label-with-icon"><Brain size={18} color="var(--color-primary)" /><span>Inteligência e Estratégia</span></div>
                  <ChevronDown size={16} className={`chevron ${isIntelOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isIntelOpen ? 'open' : ''}`}>
                  <li><a href="/pilares/inteligencia-e-estrategia/sprint-validacao" onClick={handleLinkClick}>Sprint de Validação</a></li>
                  <li><a href="/pilares/inteligencia-e-estrategia/gtm-completo" onClick={handleLinkClick}>GTM Completo</a></li>
                  <li><a href="/pilares/inteligencia-e-estrategia/cro-service" onClick={handleLinkClick}>CRO as a Service</a></li>
                  <li><a href="/pilares/inteligencia-e-estrategia/advisory-board" onClick={handleLinkClick}>Advisory Board</a></li>
                </ul>
            </li>

            <li className="mobile-group">
                <button onClick={() => setIsAtivosOpen(!isAtivosOpen)} className={`mobile-parent-btn ${isAtivosOpen ? 'open' : ''}`}>
                  <div className="label-with-icon"><MonitorSmartphone size={18} color="var(--color-primary)" /><span>Ativos Digitais</span></div>
                  <ChevronDown size={16} className={`chevron ${isAtivosOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isAtivosOpen ? 'open' : ''}`}>
                  <li><a href="/pilares/ativos-digitais/plataformas-digitais" onClick={handleLinkClick}>Plataformas Digitais</a></li>
                  <li><a href="/pilares/ativos-digitais/apps" onClick={handleLinkClick}>Ferramentas de Aceleração</a></li>
                </ul>
            </li>

            <li className="mobile-group">
                <button onClick={() => setIsVerticaisOpen(!isVerticaisOpen)} className={`mobile-parent-btn ${isVerticaisOpen ? 'open' : ''}`}>
                  <div className="label-with-icon"><Box size={18} color="var(--color-primary)" /><span>Soluções Verticais</span></div>
                  <ChevronDown size={16} className={`chevron ${isVerticaisOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isVerticaisOpen ? 'open' : ''}`}>
                  <li><a href="/pilares/solucoes-verticais/cortex-b2b" onClick={handleLinkClick}>Cortex B2B™</a></li>
                  <li><a href="/pilares/solucoes-verticais/match-maker" onClick={handleLinkClick}>Match Maker B2B</a></li>
                  <li><a href="/pilares/solucoes-verticais/hba" onClick={handleLinkClick}>Health Business Arch.™</a></li>
                </ul>
            </li>

            <li className="mobile-group">
                <button onClick={() => setIsCasesOpen(!isCasesOpen)} className={`mobile-parent-btn ${isCasesOpen ? 'open' : ''}`}>
                  <div className="label-with-icon"><Award size={18} color="var(--color-primary)" /><span>Cases de Sucesso</span></div>
                  <ChevronDown size={16} className={`chevron ${isCasesOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isCasesOpen ? 'open' : ''}`}>
                  <li><a href="/cases/exclusiva-engenharias" onClick={handleLinkClick}>Exclusiva Engenharias</a></li>
                  <li><a href="/cases/versao-holistica" onClick={handleLinkClick}>Versão Holística</a></li>
                  <li><a href="/cases/aorkia" onClick={handleLinkClick}>AORKIA</a></li>
                </ul>
            </li>

            <li className="mobile-single-link">
                <a href="/a-engenharia" onClick={handleLinkClick} className="mobile-parent-style-link">
                  <div className="label-with-icon"><Building size={18} color="var(--color-primary)" /><span>A Synapse</span></div>
                </a>
            </li>
            </ul>

            <div className="mobile-menu-footer">
                <a href="/contato" onClick={handleLinkClick} className="btn btn-primary full-width-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  <Mail size={18} /><span>Ativar Engenharia</span>
                </a>
            </div>
        </div>
      </div>

      <style jsx>{`
        /* ESTILOS ESTRUTURAIS (Visuais herdam de globals.css) */
        
        .nav {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 9999;
          transition: all 0.4s var(--ease-premium, ease);
          background: transparent;
        }
        
        .nav.scrolled, .nav.menu-open {
          background: rgba(0, 0, 0, 0.85); /* Base escura */
          backdrop-filter: blur(16px);      /* Blur Premium */
          border-bottom: 1px solid var(--card-border-default);
        }

        .nav-container {
          max-width: 1200px; margin: 0 auto; padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between;
          height: 70px;
          transition: height 0.3s ease;
        }
        .nav.scrolled .nav-container { height: 60px; }

        .nav-logo-link { display: flex; align-items: center; z-index: 10001; height: 100%; }
        .nav-logo-video { width: auto; height: 100%; max-height: 100%; object-fit: contain; }

        /* MENU DESKTOP */
        .nav-menu { display: flex; align-items: center; gap: 2rem; list-style: none; }

        .nav-link {
          display: flex; align-items: center; gap: 0.4rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem; font-weight: 500; 
          color: var(--color-text-muted); /* Herda global */
          text-decoration: none; cursor: pointer; 
          transition: color 0.3s ease;
          letter-spacing: 0.5px;
        }
        .nav-link:hover, .nav-link.active { color: var(--color-heading); }

        .chevron-desktop { transition: transform 0.3s ease; opacity: 0.6; }
        .dropdown-container:hover .chevron-desktop { transform: rotate(180deg); opacity: 1; color: var(--color-primary); }

        /* DROPDOWN PREMIUM */
        .dropdown-container { position: relative; height: 100%; display: flex; align-items: center; }
        .dropdown-menu {
          position: absolute; top: 100%; left: 50%; 
          transform: translateX(-50%) translateY(15px);
          min-width: 240px; 
          
          /* Estética Global de Cards */
          background: var(--card-bg-default);
          backdrop-filter: blur(12px);
          border: 1px solid var(--card-border-default);
          border-radius: 12px;
          box-shadow: var(--shadow-mid);
          
          padding: 0.8rem 0; 
          opacity: 0; visibility: hidden; 
          transition: all 0.3s var(--ease-premium, ease);
          display: flex; flex-direction: column;
        }
        
        .dropdown-container:hover .dropdown-menu {
          opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0);
        }

        .dropdown-menu :global(a.dropdown-link) {
          display: block; padding: 0.8rem 1.5rem;
          color: var(--color-text-muted);
          text-decoration: none; 
          font-size: 0.85rem; 
          transition: all 0.2s ease;
          border-left: 2px solid transparent;
        }
        .dropdown-menu :global(a.dropdown-link:hover) {
          background: var(--card-bg-hover);
          color: var(--color-heading);
          border-left-color: var(--color-primary);
          padding-left: 1.8rem; /* Microinteração de movimento */
        }

        /* CTA BUTTON */
        .btn-nav-cta {
          padding: 0.6rem 1.4rem; 
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          color: var(--color-heading);
          font-size: 0.8rem; font-weight: 600;
          text-decoration: none; text-transform: uppercase; letter-spacing: 1px;
          transition: all 0.3s var(--ease-premium, ease);
        }
        .btn-nav-cta:hover {
          border-color: var(--color-primary);
          background: rgba(0, 150, 132, 0.1);
          box-shadow: 0 0 15px rgba(0,150,132,0.2);
          transform: translateY(-2px);
        }

        /* HAMBURGER */
        .nav-hamburger {
          display: none; flex-direction: column; justify-content: space-between;
          width: 26px; height: 18px;
          cursor: pointer; background: none; border: none; padding: 0; z-index: 10002;
        }
        .nav-hamburger .bar {
          display: block; width: 100%; height: 2px;
          background-color: var(--color-heading);
          transition: all 0.3s ease; border-radius: 2px;
        }
        .nav-hamburger.active .top { transform: translateY(8px) rotate(45deg); background-color: var(--color-primary); }
        .nav-hamburger.active .middle { opacity: 0; }
        .nav-hamburger.active .bottom { transform: translateY(-8px) rotate(-45deg); background-color: var(--color-primary); }

        /* MOBILE MENU */
        .mobile-menu-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: var(--color-bg);
          z-index: 10000; padding-top: 85px;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-menu-overlay.open { opacity: 1; visibility: visible; pointer-events: all; }

        .mobile-scroll-container { height: 100%; overflow-y: auto; padding: 0 2rem 3rem; }
        .mobile-menu-links { list-style: none; padding: 0; margin: 0; }

        .mobile-parent-btn, .mobile-parent-style-link {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          background: none; border: none;
          border-bottom: 1px solid var(--card-border-default);
          padding: 1.2rem 0;
          color: var(--color-heading);
          font-size: 1rem; font-weight: 500;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer; text-decoration: none;
        }

        .label-with-icon { display: flex; align-items: center; gap: 1rem; }
        .chevron { opacity: 0.5; transition: transform 0.3s; }
        .chevron.rotate { transform: rotate(180deg); opacity: 1; color: var(--color-primary); }

        .mobile-sub-menu {
          list-style: none; padding: 0; margin: 0; overflow: hidden; max-height: 0;
          background: rgba(255,255,255,0.02);
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0 0 8px 8px;
        }
        .mobile-sub-menu.open { max-height: 500px; }

        .mobile-sub-menu a {
          display: block; padding: 1rem 0 1rem 3rem;
          font-size: 0.9rem; color: var(--color-text-muted);
          text-decoration: none; border-left: 2px solid transparent;
        }
        .mobile-sub-menu a:hover {
          color: var(--color-heading); 
          border-left-color: var(--color-primary);
          background: rgba(255,255,255,0.03);
        }
        
        .mobile-menu-footer { margin-top: 2rem; }

        @media (max-width: 1024px) {
          .nav-menu { display: none; }
          .nav-hamburger { display: flex; }
          .nav-container { height: 60px; padding: 0 1.5rem; }
          .nav-logo-video { max-height: 45px; }
          .mobile-menu-overlay { padding-top: 70px; }
        }
      `}</style>
    </>
  );
}