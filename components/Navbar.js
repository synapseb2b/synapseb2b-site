// components/Navbar.js (VERSÃO FINAL COM MENUS DROPDOWN INTELIGENTES)
// Refatorado por J.A.R.V.I.S.

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Ícones atualizados para o novo menu
import { Home, Layers, Award, Building, Mail, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Estado para os acordeões do menu mobile
  const [isSolucoesOpen, setIsSolucoesOpen] = useState(false);
  const [isCasesOpen, setIsCasesOpen] = useState(false);
  
  const router = useRouter();

  // Efeito para controlar o fundo da navbar ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito para bloquear o scroll do body quando o menu está aberto
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

  // Função para fechar tudo ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsSolucoesOpen(false);
    setIsCasesOpen(false);
  };

  // Lógica de estado ativo para os links pais
  const isSolucoesActive = router.pathname.startsWith('/solucoes') || router.pathname === '/profissionais-de-saude';
  const isCasesActive = router.pathname.startsWith('/cases');

  return (
    <>
      <nav className={`nav ${hasScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="nav-logo-link" onClick={handleLinkClick}>
            <video autoPlay loop muted playsInline width={60} height={60} className="nav-logo-video">
              <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
            </video>
            <span className="nav-logo-text">Synapse B2B</span>
          </Link>
          
          {/* --- Menu Desktop (ATUALIZADO: ORDEM E CONTEÚDO) --- */}
          <ul className="nav-menu">
            <li><Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            
            {/* ATUALIZAÇÃO DE ORDEM 1: Cases */}
            <li className="dropdown-container">
              <div className={`nav-link ${isCasesActive ? 'active' : ''}`}>
                Cases <ChevronDown size={16} />
              </div>
              <div className="dropdown-menu">
                <Link href="/cases" className="dropdown-link">Ver Todos os Cases</Link>
                <div className="dropdown-divider"></div>
                <Link href="/cases/versao-holistica" className="dropdown-link">Versão Holística</Link>
                <Link href="/cases/exclusiva-engenharias" className="dropdown-link">Exclusiva Engenharias</Link>
                <Link href="/cases/aorkia" className="dropdown-link">AORKIA</Link>
              </div>
            </li>

            {/* ATUALIZAÇÃO DE ORDEM 2: Soluções */}
            <li className="dropdown-container">
              <div className={`nav-link ${isSolucoesActive ? 'active' : ''}`}>
                Soluções <ChevronDown size={16} />
              </div>
              <div className="dropdown-menu">
                <Link href="/solucoes/plataformas-digitais" className="dropdown-link">Plataformas Digitais</Link>
                <Link href="/solucoes/cortex-b2b" className="dropdown-link">Cortex B2B™</Link>
                <Link href="/solucoes/match-maker" className="dropdown-link">Match-Maker B2B</Link>
                <Link href="/solucoes/apps" className="dropdown-link">Apps Estratégicos</Link>
                {/* AJUSTE ESTRATÉGICO: Página vertical adicionada */}
                <div className="dropdown-divider"></div>
                <Link href="/profissionais-de-saude" className="dropdown-link">Para Profissionais de Saúde</Link>
              </div>
            </li>
            
            <li><Link href="/a-synapse" className={`nav-link ${router.pathname === '/a-synapse' ? 'active' : ''}`}>A Synapse</Link></li>
            
            <li>
              <Link href="/contato" legacyBehavior>
                <a className="btn btn-nav-cta">Ativar Engenharia</a>
              </Link>
            </li>
          </ul>

          {/* --- Botão Hamburger para Mobile --- */}
          <button className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <div className="line line1" />
            <div className="line line2" />
            <div className="line line3" />
          </button>
        </div>
      </nav>

      {/* --- Menu Overlay para Mobile (ATUALIZADO: ORDEM E CONTEÚDO) --- */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Navegação</span>
          <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
            <X size={30} />
          </button>
        </div>
        
        <ul className="mobile-menu-links">
          <li><Link href="/" onClick={handleLinkClick}><Home /><span>Home</span></Link></li>
          
          {/* ATUALIZAÇÃO DE ORDEM 1: Cases */}
          <li className="mobile-dropdown">
            <button onClick={() => setIsCasesOpen(!isCasesOpen)} className={isCasesOpen ? 'open' : ''}>
              <div><Award /><span>Cases</span></div>
              <ChevronDown size={24} />
            </button>
            <ul className={`mobile-sub-menu ${isCasesOpen ? 'open' : ''}`}>
              <li><Link href="/cases" onClick={handleLinkClick}>- Ver Todos os Cases</Link></li>
              <li><Link href="/cases/versao-holistica" onClick={handleLinkClick}>- Versão Holística</Link></li>
              <li><Link href="/cases/exclusiva-engenharias" onClick={handleLinkClick}>- Exclusiva Engenharias</Link></li>
              <li><Link href="/cases/aorkia" onClick={handleLinkClick}>- AORKIA</Link></li>
            </ul>
          </li>

          {/* ATUALIZAÇÃO DE ORDEM 2: Soluções */}
          <li className="mobile-dropdown">
            <button onClick={() => setIsSolucoesOpen(!isSolucoesOpen)} className={isSolucoesOpen ? 'open' : ''}>
              <div><Layers /><span>Soluções</span></div>
              <ChevronDown size={24} />
            </button>
            <ul className={`mobile-sub-menu ${isSolucoesOpen ? 'open' : ''}`}>
              <li><Link href="/solucoes/plataformas-digitais" onClick={handleLinkClick}>- Plataformas Digitais</Link></li>
              <li><Link href="/solucoes/cortex-b2b" onClick={handleLinkClick}>- Cortex B2B™</Link></li>
              <li><Link href="/solucoes/match-maker" onClick={handleLinkClick}>- Match-Maker B2B</Link></li>
              <li><Link href="/solucoes/apps" onClick={handleLinkClick}>- Apps Estratégicos</Link></li>
              {/* AJUSTE ESTRATÉGICO: Página vertical adicionada */}
              <li><Link href="/profissionais-de-saude" onClick={handleLinkClick}>- Para Profissionais de Saúde</Link></li>
            </ul>
          </li>

          <li><Link href="/a-synapse" onClick={handleLinkClick}><Building /><span>A Synapse</span></Link></li>
        </ul>
        
        <div className="mobile-menu-footer">
           <Link href="/contato" onClick={handleLinkClick} className="btn btn-primary btn-large">
            <Mail /><span>Ativar Engenharia</span>
          </Link>
        </div>
      </div>

      {/* --- CSS ADICIONAL PARA DROPDOWNS (Mobile Otimizado) --- */}
      <style jsx>{`
        /* --- Desktop Dropdown --- */
        .nav-menu .nav-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
        }
        .nav-menu .nav-link svg {
          transition: transform 0.3s ease;
        }
        .dropdown-container {
          position: relative;
        }
        .dropdown-container:hover .nav-link svg {
          transform: rotate(180deg);
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 260px;
          background-color: rgba(0, 0, 0, 0.7); /* Fundo do menu_scrolled */
          backdrop-filter: blur(10px);
          border: 1px solid var(--color-border);
          border-top: none;
          border-radius: 0 0 12px 12px;
          padding: 1rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
          z-index: 1001; /* Acima do conteúdo da página */
        }
        .dropdown-container:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-link {
          display: block;
          padding: 0.75rem 1rem;
          color: var(--color-text);
          text-decoration: none;
          border-radius: 8px;
          transition: background-color 0.3s, color 0.3s;
          white-space: nowrap;
          font-weight: 500;
        }
        .dropdown-link:hover {
          background-color: var(--color-primary);
          color: var(--color-heading);
        }
        .dropdown-divider {
          height: 1px;
          background-color: var(--color-border);
          margin: 0.5rem 1rem;
        }

        /* --- Mobile Accordion (AJUSTE DE LAYOUT) --- */
        .mobile-dropdown button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          font-size: 1.5rem; /* AJUSTADO: Reduzido de 2rem */
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
          color: var(--color-heading);
          padding: 1rem;
          transition: color 0.3s;
          cursor: pointer;
        }
        .mobile-dropdown button:hover {
          color: var(--color-primary);
        }
        .mobile-dropdown button div {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .mobile-dropdown button svg {
          transition: transform 0.3s ease;
        }
        .mobile-dropdown button.open svg {
          transform: rotate(180deg);
        }

        .mobile-sub-menu {
          list-style: none;
          padding-left: 3rem; /* AJUSTADO: Reduzido de 4rem */
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-out;
        }
        .mobile-sub-menu.open {
          max-height: 500px; /* Altura suficiente para todos os links */
        }
        .mobile-sub-menu a {
          display: block;
          font-size: 1.1rem; /* AJUSTADO: Reduzido de 1.25rem */
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          color: var(--color-text);
          padding: 0.6rem 1rem; /* AJUSTADO: Reduzido de 0.75rem */
          text-decoration: none;
          transition: color 0.3s;
        }
        .mobile-sub-menu a:hover {
          color: var(--color-primary);
        }
      `}</style>
    </>
  );
} 