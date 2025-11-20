// components/Navbar.js
// ATUALIZADO: Logo Ajustada (Widescreen) + Menu Desktop Premium + Menu Mobile Sofisticado

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
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsIntelOpen(false);
    setIsAtivosOpen(false);
    setIsVerticaisOpen(false);
    setIsCasesOpen(false);
  };

  // Highlights de Rota
  const isIntelActive = router.pathname.includes('/inteligencia-e-estrategia');
  const isAtivosActive = router.pathname.includes('/ativos-digitais');
  const isVerticaisActive = router.pathname.includes('/solucoes-verticais');
  const isCasesActive = router.pathname.includes('/cases');
  const isSynapseActive = router.pathname === '/a-engenharia';

  return (
    <>
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          
          {/* LOGO EXPANDIDA (Ajuste para vídeo com texto) */}
          <Link href="/" className="nav-logo-link" onClick={handleLinkClick}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="nav-logo-video"
            >
              <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
            </video>
          </Link>

          {/* --- MENU DESKTOP PREMIUM --- */}
          <ul className="nav-menu">
            
            {/* 1. Inteligência */}
            <li className="dropdown-container">
              <div className={`nav-link ${isIntelActive ? 'active' : ''}`}>
                Inteligência e Estratégia <ChevronDown size={14} className="chevron-icon" />
              </div>
              <div className="dropdown-menu glass-dropdown">
                <div className="dropdown-content">
                    <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao" className="dropdown-link">Sprint de Validação</Link>
                    <Link href="/pilares/inteligencia-e-estrategia/gtm-completo" className="dropdown-link">GTM Completo</Link>
                    <Link href="/pilares/inteligencia-e-estrategia/cro-service" className="dropdown-link">CRO as a Service</Link>
                    <Link href="/pilares/inteligencia-e-estrategia/advisory-board" className="dropdown-link">Advisory Board</Link>
                </div>
              </div>
            </li>

            {/* 2. Ativos */}
            <li className="dropdown-container">
              <div className={`nav-link ${isAtivosActive ? 'active' : ''}`}>
                Ativos Digitais <ChevronDown size={14} className="chevron-icon" />
              </div>
              <div className="dropdown-menu glass-dropdown">
                 <div className="dropdown-content">
                    <Link href="/pilares/ativos-digitais/plataformas-digitais" className="dropdown-link">Plataformas Digitais</Link>
                    <Link href="/pilares/ativos-digitais/apps" className="dropdown-link">Ferramentas de Aceleração</Link>
                 </div>
              </div>
            </li>

            {/* 3. Verticais */}
            <li className="dropdown-container">
              <div className={`nav-link ${isVerticaisActive ? 'active' : ''}`}>
                Soluções Verticais <ChevronDown size={14} className="chevron-icon" />
              </div>
              <div className="dropdown-menu glass-dropdown">
                 <div className="dropdown-content">
                    <Link href="/pilares/solucoes-verticais/cortex-b2b" className="dropdown-link">Cortex B2B™</Link>
                    <Link href="/pilares/solucoes-verticais/match-maker" className="dropdown-link">Match Maker B2B</Link>
                    <Link href="/pilares/solucoes-verticais/hba" className="dropdown-link">Health Business Arch.™</Link>
                 </div>
              </div>
            </li>

            {/* 4. Cases */}
            <li className="dropdown-container">
              <div className={`nav-link ${isCasesActive ? 'active' : ''}`}>
                Cases <ChevronDown size={14} className="chevron-icon" />
              </div>
              <div className="dropdown-menu glass-dropdown">
                 <div className="dropdown-content">
                    <Link href="/cases/exclusiva-engenharias" className="dropdown-link">Exclusiva Engenharias</Link>
                    <Link href="/cases/versao-holistica" className="dropdown-link">Versão Holística</Link>
                    <Link href="/cases/aorkia" className="dropdown-link">AORKIA</Link>
                 </div>
              </div>
            </li>

            {/* Links Diretos */}
            <li><Link href="/a-engenharia" className={`nav-link ${isSynapseActive ? 'active' : ''}`}>A Synapse</Link></li>

            {/* CTA */}
            <li>
              <Link href="/contato" legacyBehavior>
                <a className="btn btn-nav-cta">Ativar Engenharia</a>
              </Link>
            </li>
          </ul>

          {/* --- Botão Hamburger (Mobile) --- */}
          <button className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <div className="line line1" />
            <div className="line line2" />
            <div className="line line3" />
          </button>
        </div>
      </nav>

      {/* --- MENU MOBILE (Mantido Sofisticado) --- */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
            <X size={28} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          {/* Grupos Mobile com a nova hierarquia visual */}
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

      <style jsx>{`
        /* --- LOGO --- */
        .nav-logo-link {
           display: flex; 
           align-items: center;
           /* Removemos width/height fixos do Link para o vídeo ditar o tamanho */
        }
        .nav-logo-video {
           height: 55px; /* Altura aumentada para dar destaque ao logo com texto */
           width: auto; /* Mantém a proporção automaticamente */
           object-fit: contain;
           /* Ajuste para telas muito pequenas */
           @media (max-width: 400px) { height: 45px; }
        }

        /* --- DESKTOP: MENU PREMIUM --- */
        .nav-menu {
          display: flex; align-items: center; gap: 2.5rem; /* Espaçamento generoso */
        }

        .nav-link {
          display: flex; align-items: center; gap: 0.35rem; cursor: pointer;
          font-size: 0.95rem; 
          font-weight: 500; 
          color: rgba(255,255,255,0.75); 
          text-decoration: none;
          letter-spacing: 0.3px; /* Sofisticação */
          transition: all 0.3s ease;
          position: relative;
        }
        
        /* Efeito Hover Sofisticado */
        .nav-link:hover, .nav-link.active {
          color: #ffffff;
          text-shadow: 0 0 10px rgba(255,255,255,0.3); /* Leve brilho */
        }
        
        .chevron-icon {
          opacity: 0.5; transition: transform 0.3s ease;
        }
        .dropdown-container:hover .chevron-icon {
          transform: rotate(180deg); opacity: 1; color: var(--color-primary);
        }

        /* Dropdown Glassmorphism */
        .dropdown-container { position: relative; height: 100%; display: flex; align-items: center;}
        
        .glass-dropdown {
          position: absolute; top: calc(100% + 10px); left: 50%; transform: translateX(-50%) translateY(10px);
          min-width: 260px;
          background: rgba(15, 15, 15, 0.95); 
          backdrop-filter: blur(16px); /* Blur intenso */
          border: 1px solid rgba(255,255,255,0.08);
          border-top: 2px solid var(--color-primary); /* Detalhe de cor no topo */
          border-radius: 12px; 
          padding: 0.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
          opacity: 0; visibility: hidden; 
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1001;
        }
        
        /* Triângulo do Dropdown */
        .glass-dropdown::before {
           content: ''; position: absolute; top: -6px; left: 50%; transform: translateX(-50%) rotate(45deg);
           width: 12px; height: 12px; background: var(--color-primary); z-index: -1;
        }

        .dropdown-container:hover .glass-dropdown {
          opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0);
        }

        .dropdown-content {
           display: flex; flex-direction: column; gap: 2px;
        }

        .dropdown-link {
          display: block; padding: 0.8rem 1.2rem; 
          color: rgba(255,255,255,0.8); 
          text-decoration: none; 
          font-size: 0.9rem;
          font-weight: 400;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .dropdown-link:hover {
          background-color: rgba(255,255,255,0.05);
          color: #fff;
          padding-left: 1.5rem; /* Pequeno deslize à direita */
        }


        /* --- MOBILE (MANTIDO SOFISTICADO) --- */
        .mobile-menu-overlay.open {
          display: flex; flex-direction: column; height: 100%;
          background: rgba(5, 5, 5, 0.98);
          backdrop-filter: blur(15px);
          padding: 1.5rem 2rem;
        }
        .mobile-menu-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 2rem; padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .mobile-menu-title {
           font-family: 'Montserrat', sans-serif; font-size: 0.9rem; 
           text-transform: uppercase; letter-spacing: 1px; opacity: 0.5;
        }
        .mobile-menu-links {
          flex-grow: 1; overflow-y: auto; padding-bottom: 2rem;
          list-style: none; margin: 0; padding: 0;
        }
        .mobile-parent-btn, .mobile-single-link a {
          display: flex; align-items: center; justify-content: space-between; width: 100%;
          background: none; border: none; 
          font-size: 1.1rem; font-weight: 500; 
          font-family: 'Montserrat', sans-serif; color: var(--color-heading);
          padding: 1.2rem 0; cursor: pointer;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          text-decoration: none; transition: all 0.3s ease;
        }
        .label-with-icon { display: flex; align-items: center; gap: 1rem; }
        .label-with-icon svg { opacity: 0.7; }
        .chevron { transition: transform 0.3s ease; opacity: 0.5; }
        .chevron.rotate { transform: rotate(180deg); opacity: 1; color: var(--color-primary); }
        
        .mobile-sub-menu {
          list-style: none; padding: 0; margin: 0;
          max-height: 0; overflow: hidden; 
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0;
        }
        .mobile-sub-menu.open { max-height: 500px; opacity: 1; padding-bottom: 1rem; }
        .mobile-sub-menu a {
          display: block; font-size: 0.9rem; color: rgba(255,255,255,0.6);
          padding: 0.8rem 0 0.8rem 1.5rem; text-decoration: none; 
          border-left: 1px solid rgba(255,255,255,0.1); margin-left: 0.6rem;
          transition: all 0.2s ease;
        }
        .mobile-sub-menu a:hover { 
          color: var(--color-primary); border-left-color: var(--color-primary); 
          background: linear-gradient(90deg, rgba(255,255,255,0.03), transparent);
          padding-left: 2rem;
        }
        .mobile-menu-footer { margin-top: auto; padding-top: 1rem; }
        .full-width-btn { width: 100%; justify-content: center; display: flex; gap: 0.5rem; }
      `}</style>
    </>
  );
}