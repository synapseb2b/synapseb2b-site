// components/Navbar.js
// DESIGN PREMIUM: Logo Ampliada + Menu Desktop Sofisticado + Mobile Minimalista

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

  // Detectar Scroll para mudar o fundo da Navbar
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Travar scroll do corpo quando menu mobile abre
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Fecha os acordeões ao navegar
    setIsIntelOpen(false);
    setIsAtivosOpen(false);
    setIsVerticaisOpen(false);
    setIsCasesOpen(false);
  };

  // Highlights de rota
  const isIntelActive = router.pathname.includes('/inteligencia-e-estrategia');
  const isAtivosActive = router.pathname.includes('/ativos-digitais');
  const isVerticaisActive = router.pathname.includes('/solucoes-verticais');
  const isCasesActive = router.pathname.includes('/cases');
  const isSynapseActive = router.pathname === '/a-engenharia';

  return (
    <>
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          
          {/* --- LOGO (VÍDEO) --- */}
          <Link href="/" className="nav-logo-link" onClick={handleLinkClick}>
            {/* Tamanho aumentado via CSS para comportar Ícone + Texto */}
            <video autoPlay loop muted playsInline className="nav-logo-video">
              <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
            </video>
          </Link>

          {/* --- MENU DESKTOP (Oculto no Mobile) --- */}
          <ul className="nav-menu">
            
            {/* 1. Inteligência */}
            <li className="dropdown-container">
              <div className={`nav-link ${isIntelActive ? 'active' : ''}`}>
                Inteligência e Estratégia <ChevronDown size={14} className="chevron-desktop" />
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
                Ativos Digitais <ChevronDown size={14} className="chevron-desktop" />
              </div>
              <div className="dropdown-menu">
                <Link href="/pilares/ativos-digitais/plataformas-digitais" className="dropdown-link">Plataformas Digitais</Link>
                <Link href="/pilares/ativos-digitais/apps" className="dropdown-link">Ferramentas de Aceleração</Link>
              </div>
            </li>

            {/* 3. Verticais */}
            <li className="dropdown-container">
              <div className={`nav-link ${isVerticaisActive ? 'active' : ''}`}>
                Soluções Verticais <ChevronDown size={14} className="chevron-desktop" />
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
                Cases <ChevronDown size={14} className="chevron-desktop" />
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

          {/* --- HAMBURGER (Visível apenas no Mobile) --- */}
          <button className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* --- OVERLAY MOBILE (Tela Cheia, Design Limpo) --- */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        {/* O header do overlay já é a navbar fixa, então começamos o conteúdo com padding-top para não ficar embaixo da logo */}
        <div className="mobile-scroll-container">
            
            <ul className="mobile-menu-links">
            
            {/* Grupo 1 */}
            <li className="mobile-group">
                <button onClick={() => setIsIntelOpen(!isIntelOpen)} className={`mobile-parent-btn ${isIntelOpen ? 'open' : ''}`}>
                <div className="label-with-icon"><Brain size={20} /><span>Inteligência e Estratégia</span></div>
                <ChevronDown size={18} className={`chevron ${isIntelOpen ? 'rotate' : ''}`} />
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
                <div className="label-with-icon"><MonitorSmartphone size={20} /><span>Ativos Digitais</span></div>
                <ChevronDown size={18} className={`chevron ${isAtivosOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isAtivosOpen ? 'open' : ''}`}>
                <li><Link href="/pilares/ativos-digitais/plataformas-digitais" onClick={handleLinkClick}>Plataformas Digitais</Link></li>
                <li><Link href="/pilares/ativos-digitais/apps" onClick={handleLinkClick}>Ferramentas de Aceleração</Link></li>
                </ul>
            </li>

            {/* Grupo 3 */}
            <li className="mobile-group">
                <button onClick={() => setIsVerticaisOpen(!isVerticaisOpen)} className={`mobile-parent-btn ${isVerticaisOpen ? 'open' : ''}`}>
                <div className="label-with-icon"><Box size={20} /><span>Soluções Verticais</span></div>
                <ChevronDown size={18} className={`chevron ${isVerticaisOpen ? 'rotate' : ''}`} />
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
                <div className="label-with-icon"><Award size={20} /><span>Cases de Sucesso</span></div>
                <ChevronDown size={18} className={`chevron ${isCasesOpen ? 'rotate' : ''}`} />
                </button>
                <ul className={`mobile-sub-menu ${isCasesOpen ? 'open' : ''}`}>
                <li><Link href="/cases/exclusiva-engenharias" onClick={handleLinkClick}>Exclusiva Engenharias</Link></li>
                <li><Link href="/cases/versao-holistica" onClick={handleLinkClick}>Versão Holística</Link></li>
                <li><Link href="/cases/aorkia" onClick={handleLinkClick}>AORKIA</Link></li>
                </ul>
            </li>

            {/* Link Simples */}
            <li className="mobile-single-link">
                <Link href="/a-engenharia" onClick={handleLinkClick}>
                <div className="label-with-icon"><Building size={20} /><span>A Synapse</span></div>
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
        /* NAVBAR CONTAINER & LOGO                                            */
        /* ================================================================== */
        .nav {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 9999;
          transition: all 0.4s ease;
          background: transparent; /* Começa transparente */
        }
        
        /* Estado Scrolled: Glassmorphism Premium */
        .nav.scrolled, .nav.menu-open {
          background: rgba(10, 10, 10, 0.75);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 4px 30px rgba(0,0,0,0.1);
        }

        .nav-container {
          max-width: 1200px; margin: 0 auto; padding: 1rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
          height: 90px; /* Altura fixa para garantir alinhamento */
        }

        /* Logo: Aumentada no Desktop para ler o texto */
        .nav-logo-link {
           display: flex; align-items: center; z-index: 10001; /* Acima do overlay */
        }
        .nav-logo-video {
          width: 180px; /* Maior para ler o texto */
          height: auto;
          object-fit: contain;
          transition: width 0.3s ease;
        }

        /* ================================================================== */
        /* MENU DESKTOP (SOFISTICADO)                                         */
        /* ================================================================== */
        .nav-menu {
          display: flex; align-items: center; gap: 2.5rem; list-style: none;
        }

        /* Links Principais */
        .nav-link {
          display: flex; align-items: center; gap: 0.4rem;
          font-family: 'Montserrat', sans-serif; font-size: 0.9rem; font-weight: 500;
          color: rgba(255,255,255,0.8); text-decoration: none;
          cursor: pointer; position: relative; transition: color 0.3s;
          padding: 0.5rem 0;
        }
        .nav-link:hover, .nav-link.active {
          color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }
        
        /* Efeito de Sublinhado Animado */
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0%; height: 1px;
          background: var(--color-primary); transition: width 0.3s ease;
        }
        .dropdown-container:hover .nav-link::after, .nav-link:hover::after {
          width: 100%;
        }

        .chevron-desktop { transition: transform 0.3s ease; opacity: 0.6; }
        .dropdown-container:hover .chevron-desktop { transform: rotate(180deg); opacity: 1; color: var(--color-primary); }

        /* Dropdown Menu */
        .dropdown-container { position: relative; height: 100%; display: flex; align-items: center; }
        .dropdown-menu {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(15px);
          min-width: 240px;
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 0.8rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          opacity: 0; visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dropdown-container:hover .dropdown-menu {
          opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0);
        }
        
        .dropdown-link {
          display: block; padding: 0.7rem 1rem; color: rgba(255,255,255,0.7);
          text-decoration: none; font-size: 0.85rem; border-radius: 6px;
          transition: all 0.2s;
        }
        .dropdown-link:hover {
          background: rgba(255,255,255,0.05); color: var(--color-primary);
          transform: translateX(5px);
        }

        /* Botão CTA Desktop */
        .btn-nav-cta {
          padding: 0.6rem 1.2rem; background: transparent;
          border: 1px solid rgba(255,255,255,0.2); border-radius: 50px;
          color: #fff; font-size: 0.85rem; font-weight: 600; text-decoration: none;
          transition: all 0.3s ease;
        }
        .btn-nav-cta:hover {
          background: #fff; color: #000; border-color: #fff;
          box-shadow: 0 0 15px rgba(255,255,255,0.4);
        }

        /* ================================================================== */
        /* MENU MOBILE (SANDUÍCHE + OVERLAY)                                  */
        /* ================================================================== */
        
        /* Botão Sanduíche */
        .nav-hamburger {
          display: none; /* Escondido no desktop */
          flex-direction: column; gap: 6px; cursor: pointer;
          background: none; border: none; padding: 0.5rem; z-index: 10001;
        }
        .nav-hamburger .bar {
          display: block; width: 28px; height: 2px; background-color: #fff;
          transition: all 0.3s ease;
        }
        /* Animação para X */
        .nav-hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .nav-hamburger.active .bar:nth-child(2) { opacity: 0; }
        .nav-hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        /* Overlay de Conteúdo */
        .mobile-menu-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: rgba(5, 5, 5, 0.98); backdrop-filter: blur(20px);
          z-index: 10000; /* Abaixo do logo e hamburger */
          padding-top: 100px; /* Espaço para o header */
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.4s ease, visibility 0.4s;
        }
        .mobile-menu-overlay.open {
          opacity: 1; visibility: visible; pointer-events: all;
        }

        .mobile-scroll-container {
          height: 100%; overflow-y: auto; padding: 0 2rem 3rem 2rem;
          display: flex; flex-direction: column;
        }

        .mobile-menu-links { list-style: none; padding: 0; margin: 0; flex-grow: 1; }

        /* Botões Pai (Nível 1) - Padronizados */
        .mobile-parent-btn, .mobile-single-link a {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          background: none; border: none; border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 1.2rem 0; color: #fff; font-size: 1.1rem; font-weight: 500;
          cursor: pointer; text-decoration: none; transition: color 0.3s;
        }
        .label-with-icon { display: flex; align-items: center; gap: 1rem; }
        .label-with-icon svg { color: var(--color-primary); opacity: 0.8; }

        /* Submenu (Nível 2) - Elegante */
        .mobile-sub-menu {
          list-style: none; padding: 0; margin: 0; overflow: hidden; max-height: 0;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-sub-menu.open { max-height: 500px; padding-bottom: 1rem; }

        .mobile-sub-menu a {
          display: block; padding: 0.8rem 0 0.8rem 2.5rem; /* Indentação */
          font-size: 0.95rem; color: rgba(255,255,255,0.6); text-decoration: none;
          border-left: 1px solid rgba(255,255,255,0.1); margin-left: 0.8rem;
          transition: all 0.2s;
        }
        .mobile-sub-menu a:hover {
          color: #fff; border-left-color: var(--color-primary); padding-left: 3rem;
        }

        /* Footer Mobile */
        .mobile-menu-footer { margin-top: 2rem; }
        .full-width-btn { width: 100%; justify-content: center; gap: 0.5rem; }

        /* Chevron Rotate */
        .chevron { transition: transform 0.3s; opacity: 0.5; }
        .chevron.rotate { transform: rotate(180deg); opacity: 1; color: var(--color-primary); }

        /* ================================================================== */
        /* RESPONSIVIDADE                                                     */
        /* ================================================================== */
        @media (max-width: 1024px) {
          .nav-menu { display: none; } /* Esconde Desktop Menu */
          .nav-hamburger { display: flex; } /* Mostra Hamburger */
          
          .nav-container { height: 70px; padding: 0.5rem 1.5rem; }
          
          /* Logo menor no Mobile para equilíbrio */
          .nav-logo-video { width: 130px; } 
          
          .mobile-menu-overlay { padding-top: 80px; }
        }
      `}</style>
    </>
  );
}