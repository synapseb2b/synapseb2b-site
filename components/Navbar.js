// components/Navbar.js
// NOVA ESTRUTURA: 3 Pilares + A Synapse + Logo Limpa

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Brain, MonitorSmartphone, Box, Building, Mail, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Estados para os acordeões do menu mobile
  const [isIntelOpen, setIsIntelOpen] = useState(false);
  const [isAtivosOpen, setIsAtivosOpen] = useState(false);
  const [isVerticaisOpen, setIsVerticaisOpen] = useState(false);

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
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsIntelOpen(false);
    setIsAtivosOpen(false);
    setIsVerticaisOpen(false);
  };

  // Verificação de rota ativa para highlight
  const isIntelActive = router.pathname.includes('/inteligencia-e-estrategia');
  const isAtivosActive = router.pathname.includes('/ativos-digitais');
  const isVerticaisActive = router.pathname.includes('/solucoes-verticais');
  const isSynapseActive = router.pathname === '/a-engenharia';

  return (
    <>
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          {/* LOGO LIMPA (Sem texto) */}
          <Link href="/" className="nav-logo-link" onClick={handleLinkClick}>
            <video autoPlay loop muted playsInline width={60} height={60} className="nav-logo-video">
              <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
            </video>
          </Link>

          {/* --- Menu Desktop --- */}
          <ul className="nav-menu">
            
            {/* Pilar 1: Inteligência e Estratégia */}
            <li className="dropdown-container">
              <div className={`nav-link ${isIntelActive ? 'active' : ''}`}>
                Inteligência e Estratégia <ChevronDown size={16} />
              </div>
              <div className="dropdown-menu">
                <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao" className="dropdown-link">Sprint de Validação</Link>
                <Link href="/pilares/inteligencia-e-estrategia/gtm-completo" className="dropdown-link">GTM Completo</Link>
                <Link href="/pilares/inteligencia-e-estrategia/cro-service" className="dropdown-link">CRO as a Service</Link>
                <Link href="/pilares/inteligencia-e-estrategia/advisory-board" className="dropdown-link">Advisory Board</Link>
              </div>
            </li>

            {/* Pilar 2: Ativos Digitais */}
            <li className="dropdown-container">
              <div className={`nav-link ${isAtivosActive ? 'active' : ''}`}>
                Ativos Digitais <ChevronDown size={16} />
              </div>
              <div className="dropdown-menu">
                <Link href="/pilares/ativos-digitais/plataformas-digitais" className="dropdown-link">Plataformas Digitais</Link>
                <Link href="/pilares/ativos-digitais/apps" className="dropdown-link">Ferramentas de Aceleração</Link>
              </div>
            </li>

            {/* Pilar 3: Soluções Verticais */}
            <li className="dropdown-container">
              <div className={`nav-link ${isVerticaisActive ? 'active' : ''}`}>
                Soluções Verticais <ChevronDown size={16} />
              </div>
              <div className="dropdown-menu">
                <Link href="/pilares/solucoes-verticais/cortex-b2b" className="dropdown-link">Cortex B2B™</Link>
                <Link href="/pilares/solucoes-verticais/match-maker" className="dropdown-link">Match Maker B2B</Link>
                <Link href="/pilares/solucoes-verticais/hba" className="dropdown-link">Health Business Architecture™</Link>
              </div>
            </li>

            {/* Link Institucional: A Synapse */}
            <li><Link href="/a-engenharia" className={`nav-link ${isSynapseActive ? 'active' : ''}`}>A Synapse</Link></li>

            {/* CTA */}
            <li>
              <Link href="/contato" legacyBehavior>
                <a className="btn btn-nav-cta">Ativar Engenharia</a>
              </Link>
            </li>
          </ul>

          {/* --- Botão Hamburger --- */}
          <button className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <div className="line line1" />
            <div className="line line2" />
            <div className="line line3" />
          </button>
        </div>
      </nav>

      {/* --- Menu Overlay Mobile --- */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Navegação</span>
          <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
            <X size={30} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          
          {/* Mobile: Inteligência */}
          <li className="mobile-dropdown">
            <button onClick={() => setIsIntelOpen(!isIntelOpen)} className={isIntelOpen ? 'open' : ''}>
              <div><Brain /><span>Inteligência e Estratégia</span></div>
              <ChevronDown size={24} />
            </button>
            <ul className={`mobile-sub-menu ${isIntelOpen ? 'open' : ''}`}>
              <li><Link href="/pilares/inteligencia-e-estrategia/sprint-validacao" onClick={handleLinkClick}>Sprint de Validação</Link></li>
              <li><Link href="/pilares/inteligencia-e-estrategia/gtm-completo" onClick={handleLinkClick}>GTM Completo</Link></li>
              <li><Link href="/pilares/inteligencia-e-estrategia/cro-service" onClick={handleLinkClick}>CRO as a Service</Link></li>
              <li><Link href="/pilares/inteligencia-e-estrategia/advisory-board" onClick={handleLinkClick}>Advisory Board</Link></li>
            </ul>
          </li>

          {/* Mobile: Ativos */}
          <li className="mobile-dropdown">
            <button onClick={() => setIsAtivosOpen(!isAtivosOpen)} className={isAtivosOpen ? 'open' : ''}>
              <div><MonitorSmartphone /><span>Ativos Digitais</span></div>
              <ChevronDown size={24} />
            </button>
            <ul className={`mobile-sub-menu ${isAtivosOpen ? 'open' : ''}`}>
              <li><Link href="/pilares/ativos-digitais/plataformas-digitais" onClick={handleLinkClick}>Plataformas Digitais</Link></li>
              <li><Link href="/pilares/ativos-digitais/apps" onClick={handleLinkClick}>Ferramentas de Aceleração</Link></li>
            </ul>
          </li>

          {/* Mobile: Verticais */}
          <li className="mobile-dropdown">
            <button onClick={() => setIsVerticaisOpen(!isVerticaisOpen)} className={isVerticaisOpen ? 'open' : ''}>
              <div><Box /><span>Soluções Verticais</span></div>
              <ChevronDown size={24} />
            </button>
            <ul className={`mobile-sub-menu ${isVerticaisOpen ? 'open' : ''}`}>
              <li><Link href="/pilares/solucoes-verticais/cortex-b2b" onClick={handleLinkClick}>Cortex B2B™</Link></li>
              <li><Link href="/pilares/solucoes-verticais/match-maker" onClick={handleLinkClick}>Match Maker B2B</Link></li>
              <li><Link href="/pilares/solucoes-verticais/hba" onClick={handleLinkClick}>Health Business Architecture™</Link></li>
            </ul>
          </li>

           <li><Link href="/a-engenharia" onClick={handleLinkClick}><Building /><span>A Synapse</span></Link></li>
        </ul>

        <div className="mobile-menu-footer">
           <Link href="/contato" onClick={handleLinkClick} className="btn btn-primary btn-large">
            <Mail /><span>Ativar Engenharia</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        /* --- Desktop CSS --- */
        .nav-menu .nav-link {
          display: flex; align-items: center; gap: 0.25rem; cursor: pointer;
          font-size: 0.9rem; white-space: nowrap;
        }
        .nav-menu .nav-link svg { transition: transform 0.3s ease; }
        .dropdown-container { position: relative; }
        .dropdown-container:hover .nav-link svg { transform: rotate(180deg); }
        
        .dropdown-menu {
          position: absolute; top: 100%; left: 0; min-width: 240px;
          background-color: rgba(0, 0, 0, 0.85); backdrop-filter: blur(12px);
          border: 1px solid var(--color-border); border-top: none;
          border-radius: 0 0 12px 12px; padding: 0.8rem 0;
          opacity: 0; visibility: hidden; transform: translateY(10px);
          transition: all 0.3s ease; z-index: 1001;
        }
        .dropdown-container:hover .dropdown-menu {
          opacity: 1; visibility: visible; transform: translateY(0);
        }
        
        .dropdown-menu :global(a.dropdown-link) {
          display: block; padding: 0.6rem 1.2rem; color: var(--color-text); 
          text-decoration: none; transition: all 0.2s; font-size: 0.85rem;
        }
        .dropdown-menu :global(a.dropdown-link:hover) {
          background-color: var(--color-primary); color: #000;
        }

        /* --- Mobile CSS --- */
        .mobile-menu-overlay.open { display: flex; flex-direction: column; height: 100%; overflow: hidden; }
        .mobile-menu-links { flex-grow: 1; overflow-y: auto; padding-bottom: 2rem; }
        
        .mobile-dropdown button {
          display: flex; align-items: center; justify-content: space-between; width: 100%;
          background: none; border: none; font-size: 1.2rem; font-weight: 600;
          font-family: 'Montserrat', sans-serif; color: var(--color-heading);
          padding: 1rem; cursor: pointer;
        }
        .mobile-dropdown button div { display: flex; align-items: center; gap: 1rem; }
        
        .mobile-sub-menu {
          list-style: none; padding-left: 1rem; background: rgba(255,255,255,0.03);
          max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out;
        }
        .mobile-sub-menu.open { max-height: 500px; }
        .mobile-sub-menu a {
          display: block; font-size: 1rem; color: rgba(255,255,255,0.8);
          padding: 0.8rem 1rem; text-decoration: none; border-left: 2px solid transparent;
        }
        .mobile-sub-menu a:hover { color: var(--color-primary); border-left-color: var(--color-primary); background: rgba(255,255,255,0.05); }
      `}</style>
    </>
  );
}