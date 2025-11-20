// components/Navbar.js
// VERSÃO CORRIGIDA: Design "Black Premium", Logo Ajustada, Fontes 0.85rem e Dropdowns Limpos.

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Brain, MonitorSmartphone, Box, Building, Mail, X, ChevronDown, Award } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Estados Mobile
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

  const isIntelActive = router.pathname.includes('/inteligencia-e-estrategia');
  const isAtivosActive = router.pathname.includes('/ativos-digitais');
  const isVerticaisActive = router.pathname.includes('/solucoes-verticais');
  const isCasesActive = router.pathname.includes('/cases');
  const isSynapseActive = router.pathname === '/a-engenharia';

  return (
    <>
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          
          {/* LOGO (Tamanho Controlado) */}
          <Link href="/" className="nav-logo-link" onClick={handleLinkClick}>
            <video autoPlay loop muted playsInline className="nav-logo-video">
              <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
            </video>
          </Link>

          {/* MENU DESKTOP */}
          <ul className="nav-menu">
            
            {/* 1. Inteligência */}
            <li className="dropdown-container">
              <div className={`nav-link ${isIntelActive ? 'active' : ''}`}>
                Inteligência e Estratégia <ChevronDown size={12} className="chevron-desktop" />
              </div>
              <div className="dropdown-menu">
                <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao" className="dropdown-link">Sprint de Validação</Link>
                <Link href="/pilares/inteligencia-e-estrategia/gtm-completo" className="dropdown-link">GTM Completo</Link>
                <Link href="/pilares/inteligencia-e-estrategia/cro-service" className="dropdown-link">CRO as a Service</Link>
                <Link href="/pilares/inteligencia-e-estrategia/advisory-board" className="dropdown-link">Advisory Board</Link>
              </div>
            </li>

            {/* 2. Ativos */}
            <li className="dropdown-container">
              <div className={`nav-link ${isAtivosActive ? 'active' : ''}`}>
                Ativos Digitais <ChevronDown size={12} className="chevron-desktop" />
              </div>
              <div className="dropdown-menu">
                <Link href="/pilares/ativos-digitais/plataformas-digitais" className="dropdown-link">Plataformas Digitais</Link>
                <Link href="/pilares/ativos-digitais/apps" className="dropdown-link">Ferramentas de Aceleração</Link>
              </div>
            </li>

            {/* 3. Verticais */}
            <li className="dropdown-container">
              <div className={`nav-link ${isVerticaisActive ? 'active' : ''}`}>
                Soluções Verticais <ChevronDown size={12} className="chevron-desktop" />
              </div>
              <div className="dropdown-menu">
                <Link href="/pilares/solucoes-verticais/cortex-b2b" className="dropdown-link">Cortex B2B™</Link>
                <Link href="/pilares/solucoes-verticais/match-maker" className="dropdown-link">Match Maker B2B</Link>
                <Link href="/pilares/solucoes-verticais/hba" className="dropdown-link">Health Business Arch.™</Link>
              </div>
            </li>

            {/* 4. Cases */}
            <li className="dropdown-container">
              <div className={`nav-link ${isCasesActive ? 'active' : ''}`}>
                Cases <ChevronDown size={12} className="chevron-desktop" />
              </div>
              <div className="dropdown-menu">
                <Link href="/cases/exclusiva-engenharias" className="dropdown-link">Exclusiva Engenharias</Link>
                <Link href="/cases/versao-holistica" className="dropdown-link">Versão Holística</Link>
                <Link href="/cases/aorkia" className="dropdown-link">AORKIA</Link>
              </div>
            </li>

            {/* 5. Institucional */}
            <li><Link href="/a-engenharia" className={`nav-link ${isSynapseActive ? 'active' : ''}`}>A Synapse</Link></li>

            {/* CTA */}
            <li>
              <Link href="/contato" className="btn-nav-cta">
                Ativar Engenharia
              </Link>
            </li>
          </ul>

          {/* MENU HAMBURGER (Visível no Mobile) */}
          <button className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* OVERLAY MOBILE */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-scroll-container">
            <ul className="mobile-menu-links">
            
            {/* Grupo 1 */}
            <li className="mobile-group">
                <button onClick={() => setIsIntelOpen(!isIntelOpen)} className={`mobile-parent-btn ${isIntelOpen ? 'open' : ''}`}>
                  <div className="label-with-icon"><Brain size={18} /><span>Inteligência e Estratégia</span></div>
                  <ChevronDown size={16} className={`chevron ${isIntelOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isIntelOpen ? 'open' : ''}`}>
                  <li><Link href="/pilares/inteligencia-e-estrategia/sprint-validacao" onClick={handleLinkClick}>Sprint de Validação</Link></li>
                  <li><Link href="/pilares/inteligencia-e-estrategia/gtm-completo" onClick={handleLinkClick}>GTM Completo</Link></li>
                  <li><Link href="/pilares/inteligencia-e-estrategia/cro-service" onClick={handleLinkClick}>CRO as a Service</Link></li>
                  <li><Link href="/pilares/inteligencia-e-estrategia/advisory-board" onClick={handleLinkClick}>Advisory Board</Link></li>
                </ul>
            </li>

            {/* Grupo 2 */}
            <li className="mobile-group">
                <button onClick={() => setIsAtivosOpen(!isAtivosOpen)} className={`mobile-parent-btn ${isAtivosOpen ? 'open' : ''}`}>
                  <div className="label-with-icon"><MonitorSmartphone size={18} /><span>Ativos Digitais</span></div>
                  <ChevronDown size={16} className={`chevron ${isAtivosOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isAtivosOpen ? 'open' : ''}`}>
                  <li><Link href="/pilares/ativos-digitais/plataformas-digitais" onClick={handleLinkClick}>Plataformas Digitais</Link></li>
                  <li><Link href="/pilares/ativos-digitais/apps" onClick={handleLinkClick}>Ferramentas de Aceleração</Link></li>
                </ul>
            </li>

            {/* Grupo 3 */}
            <li className="mobile-group">
                <button onClick={() => setIsVerticaisOpen(!isVerticaisOpen)} className={`mobile-parent-btn ${isVerticaisOpen ? 'open' : ''}`}>
                  <div className="label-with-icon"><Box size={18} /><span>Soluções Verticais</span></div>
                  <ChevronDown size={16} className={`chevron ${isVerticaisOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isVerticaisOpen ? 'open' : ''}`}>
                  <li><Link href="/pilares/solucoes-verticais/cortex-b2b" onClick={handleLinkClick}>Cortex B2B™</Link></li>
                  <li><Link href="/pilares/solucoes-verticais/match-maker" onClick={handleLinkClick}>Match Maker B2B</Link></li>
                  <li><Link href="/pilares/solucoes-verticais/hba" onClick={handleLinkClick}>Health Business Arch.™</Link></li>
                </ul>
            </li>

            {/* Grupo 4 */}
            <li className="mobile-group">
                <button onClick={() => setIsCasesOpen(!isCasesOpen)} className={`mobile-parent-btn ${isCasesOpen ? 'open' : ''}`}>
                  <div className="label-with-icon"><Award size={18} /><span>Cases de Sucesso</span></div>
                  <ChevronDown size={16} className={`chevron ${isCasesOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isCasesOpen ? 'open' : ''}`}>
                  <li><Link href="/cases/exclusiva-engenharias" onClick={handleLinkClick}>Exclusiva Engenharias</Link></li>
                  <li><Link href="/cases/versao-holistica" onClick={handleLinkClick}>Versão Holística</Link></li>
                  <li><Link href="/cases/aorkia" onClick={handleLinkClick}>AORKIA</Link></li>
                </ul>
            </li>

            <li className="mobile-single-link">
                <Link href="/a-engenharia" onClick={handleLinkClick}>
                  <div className="label-with-icon"><Building size={18} /><span>A Synapse</span></div>
                </Link>
            </li>
            </ul>

            <div className="mobile-menu-footer">
                <Link href="/contato" onClick={handleLinkClick} className="btn btn-primary btn-large full-width-btn">
                  <Mail size={18} /><span>Ativar Engenharia</span>
                </Link>
            </div>
        </div>
      </div>

      <style jsx>{`
        /* ================================================================== */
        /* NAVBAR BASE & LOGO                                                 */
        /* ================================================================== */
        .nav {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 9999;
          transition: all 0.4s ease;
          background: #000000; /* Fundo PRETO Puro */
        }
        
        /* Scrolled State (Leve transparência para efeito moderno) */
        .nav.scrolled, .nav.menu-open {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .nav-container {
          max-width: 1200px; margin: 0 auto; padding: 0.5rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
          height: 80px;
        }

        /* LOGO ADJUSTMENTS */
        .nav-logo-link { display: flex; align-items: center; z-index: 10001; }
        
        /* Desktop Logo Size */
        .nav-logo-video {
          width: 120px; /* Máximo 130px conforme pedido, ajustado para 120px para elegância */
          height: auto;
          object-fit: contain;
        }

        /* ================================================================== */
        /* DESKTOP MENU (Clean & Organized)                                   */
        /* ================================================================== */
        .nav-menu {
          display: flex; align-items: center; gap: 2rem; list-style: none;
        }

        /* Links Principais */
        .nav-link {
          display: flex; align-items: center; gap: 0.3rem;
          font-family: 'Montserrat', sans-serif; 
          font-size: 0.85rem; /* Fonte Reduzida */
          font-weight: 500; 
          color: rgba(255,255,255,0.8); 
          text-decoration: none;
          cursor: pointer; position: relative; transition: color 0.2s;
          letter-spacing: normal; /* Sem tracking-wide */
        }
        .nav-link:hover, .nav-link.active {
          color: #fff;
        }

        .chevron-desktop { transition: transform 0.2s; opacity: 0.5; }
        .dropdown-container:hover .chevron-desktop { transform: rotate(180deg); opacity: 1; }

        /* DROPDOWNS (Fix Purple Issue & Disorganization) */
        .dropdown-container { position: relative; height: 100%; display: flex; align-items: center; }
        
        .dropdown-menu {
          position: absolute; 
          top: 100%; 
          left: 50%; 
          transform: translateX(-50%) translateY(10px);
          min-width: 220px;
          background: #050505; /* Fundo Preto Sólido */
          border: 1px solid rgba(255,255,255,0.1); /* Borda Sutil */
          border-radius: 8px;
          padding: 0.5rem 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.8);
          opacity: 0; visibility: hidden;
          transition: all 0.2s ease;
          display: flex; flex-direction: column; /* Garante lista vertical */
        }

        .dropdown-container:hover .dropdown-menu {
          opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0);
        }
        
        /* Itens do Dropdown (Forçando cores para evitar roxo) */
        .dropdown-menu :global(a.dropdown-link) {
          display: block; 
          padding: 0.7rem 1.2rem; 
          color: #bbbbbb !important; /* Cinza claro forçado */
          text-decoration: none !important; 
          font-size: 0.85rem; 
          transition: all 0.2s;
          text-align: left;
          border-left: 2px solid transparent;
        }
        .dropdown-menu :global(a.dropdown-link:hover) {
          background: rgba(255,255,255,0.05); 
          color: #ffffff !important;
          border-left-color: var(--color-primary);
        }

        /* CTA Button */
        .btn-nav-cta {
          padding: 0.5rem 1.2rem; 
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3); 
          border-radius: 4px;
          color: #fff; 
          font-size: 0.8rem; 
          font-weight: 600; 
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .btn-nav-cta:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        /* ================================================================== */
        /* HAMBURGER MENU (Sanduíche)                                         */
        /* ================================================================== */
        .nav-hamburger {
          display: none; /* Desktop hidden */
          flex-direction: column; gap: 5px; cursor: pointer;
          background: none; border: none; padding: 0.5rem; z-index: 10001;
        }
        /* Barras Brancas Visíveis */
        .nav-hamburger .bar {
          display: block; width: 24px; height: 2px; 
          background-color: #ffffff !important; /* Forçado Branco */
          transition: all 0.3s ease;
        }
        /* X Animation */
        .nav-hamburger.active .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-hamburger.active .bar:nth-child(2) { opacity: 0; }
        .nav-hamburger.active .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ================================================================== */
        /* MOBILE OVERLAY & MENU                                              */
        /* ================================================================== */
        .mobile-menu-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: #000000; /* Preto Absoluto */
          z-index: 10000; 
          padding-top: 90px;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-menu-overlay.open { opacity: 1; visibility: visible; pointer-events: all; }

        .mobile-scroll-container {
          height: 100%; overflow-y: auto; padding: 0 2rem 3rem;
          display: flex; flex-direction: column;
        }

        .mobile-menu-links { list-style: none; padding: 0; margin: 0; flex-grow: 1; }

        /* Mobile Buttons (Uniform Size) */
        .mobile-parent-btn, .mobile-single-link a {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          background: none; border: none; 
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 1rem 0; 
          color: #fff; 
          font-size: 1rem; /* Tamanho Uniforme */
          font-weight: 500;
          cursor: pointer; text-decoration: none; 
          font-family: 'Montserrat', sans-serif;
        }

        .label-with-icon { display: flex; align-items: center; gap: 0.8rem; }
        .label-with-icon svg { opacity: 0.7; width: 18px; height: 18px; }
        .chevron { opacity: 0.5; transition: transform 0.3s; }
        .chevron.rotate { transform: rotate(180deg); opacity: 1; }

        /* Mobile Submenu */
        .mobile-sub-menu {
          list-style: none; padding: 0; margin: 0; overflow: hidden; max-height: 0;
          background: rgba(255,255,255,0.02);
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-sub-menu.open { max-height: 400px; }

        .mobile-sub-menu a {
          display: block; padding: 0.8rem 0 0.8rem 2.5rem;
          font-size: 0.9rem; /* Ligeiramente menor que o pai */
          color: #aaaaaa; text-decoration: none;
          border-left: 2px solid transparent;
        }
        .mobile-sub-menu a:hover {
          color: #fff; border-left-color: var(--color-primary);
          background: rgba(255,255,255,0.05);
        }
        
        .mobile-menu-footer { margin-top: 2rem; }
        .full-width-btn { width: 100%; justify-content: center; gap: 0.5rem; }

        /* ================================================================== */
        /* RESPONSIVIDADE                                                     */
        /* ================================================================== */
        @media (max-width: 1024px) {
          .nav-menu { display: none; } 
          .nav-hamburger { display: flex; } /* Mostra Hamburger */
          
          .nav-container { height: 70px; padding: 0 1.5rem; }
          
          /* Logo Mobile (Abaixo de 100px) */
          .nav-logo-video { width: 90px; } 
        }
      `}</style>
    </>
  );
}