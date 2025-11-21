// components/Navbar.js
// CORREÇÃO FINAL: Classes explícitas para forçar estilo nos links mobile e ocultar botão desktop

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, X, ChevronDown, Brain, MonitorSmartphone, Box, Award, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const [mobileDropdowns, setMobileDropdowns] = useState({
    intel: false,
    ativos: false,
    cases: false
  });

  const router = useRouter();

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMobileDropdowns({ intel: false, ativos: false, cases: false });
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileOpen]);

  return (
    <>
      {/* --- NAVBAR DESKTOP --- */}
      <nav className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          {/* LOGO (VÍDEO) */}
          <Link href="/" className="nav-logo-link">
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

          <div className="nav-menu-desktop">
            
            {/* 1. INTELIGÊNCIA */}
            <div className={`nav-item-desktop has-dropdown ${router.pathname.startsWith('/pilares/inteligencia') ? 'active' : ''}`}>
              <div className="nav-link-desktop">
                <span>Inteligência e Estratégia</span>
                <ChevronDown size={12} className="chevron" />
              </div>
              <div className="dropdown-menu-desktop">
                <Link href="/pilares/inteligencia-e-estrategia/cro-service">CRO as a Service</Link>
                <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao">Sprint de Validação</Link>
                <Link href="/solucoes/cortex-b2b">Cortex B2B™</Link>
              </div>
            </div>

            {/* 2. ATIVOS DIGITAIS */}
            <div className={`nav-item-desktop has-dropdown ${router.pathname.startsWith('/pilares/ativos') ? 'active' : ''}`}>
              <div className="nav-link-desktop">
                <span>Ativos Digitais</span>
                <ChevronDown size={12} className="chevron" />
              </div>
              <div className="dropdown-menu-desktop">
                <Link href="/pilares/ativos-digitais/plataformas-digitais">Plataformas Digitais</Link>
                <Link href="/pilares/ativos-digitais/growth-engineering">Growth Engineering</Link>
              </div>
            </div>

            {/* 3. CASES */}
            <div className={`nav-item-desktop has-dropdown ${router.pathname.startsWith('/cases') ? 'active' : ''}`}>
              <div className="nav-link-desktop">
                <span>Cases</span>
                <ChevronDown size={12} className="chevron" />
              </div>
              <div className="dropdown-menu-desktop">
                <Link href="/cases/versao-holistica">Versão Holística</Link>
                <Link href="/cases/exclusiva-engenharias">Exclusiva Engenharias</Link>
                <Link href="/cases/aorkia">Aorkia</Link>
              </div>
            </div>

            {/* 4. A ENGENHARIA */}
            <div className={`nav-item-desktop ${router.pathname === '/a-engenharia' ? 'active' : ''}`}>
              <Link href="/a-engenharia" className="nav-link-desktop clickable">
                A Engenharia
              </Link>
            </div>
          </div>

          <div className="nav-actions">
            {/* BOTÃO DESKTOP (Classe 'desktop-only' será forçada a sumir no mobile) */}
            <Link href="/contato" className="btn-nav-cta desktop-only">
              Ativar Engenharia
            </Link>

            <button className="mobile-hamburger" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Menu">
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MENU MOBILE --- */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-content">
          
          {/* INTELIGÊNCIA */}
          <button 
            className={`mobile-btn-expand ${mobileDropdowns.intel ? 'active' : ''}`} 
            onClick={() => toggleMobileDropdown('intel')}
          >
            <div className="flex-row">
              <Brain size={20} className="text-primary" />
              <span className="menu-text">Inteligência e Estratégia</span>
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.intel ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.intel ? 'show' : ''}`}>
            <Link href="/pilares/inteligencia-e-estrategia/cro-service" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>CRO as a Service</Link>
            <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Sprint de Validação</Link>
            <Link href="/solucoes/cortex-b2b" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Cortex B2B™</Link>
          </div>

          {/* ATIVOS */}
          <button 
            className={`mobile-btn-expand ${mobileDropdowns.ativos ? 'active' : ''}`} 
            onClick={() => toggleMobileDropdown('ativos')}
          >
            <div className="flex-row">
              <MonitorSmartphone size={20} className="text-primary" />
              <span className="menu-text">Ativos Digitais</span>
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.ativos ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.ativos ? 'show' : ''}`}>
            <Link href="/pilares/ativos-digitais/plataformas-digitais" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Plataformas Digitais</Link>
            <Link href="/pilares/ativos-digitais/growth-engineering" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Growth Engineering</Link>
          </div>

          {/* CASES */}
          <button 
            className={`mobile-btn-expand ${mobileDropdowns.cases ? 'active' : ''}`} 
            onClick={() => toggleMobileDropdown('cases')}
          >
            <div className="flex-row">
              <Award size={20} className="text-primary" />
              <span className="menu-text">Cases</span>
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.cases ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.cases ? 'show' : ''}`}>
            <Link href="/cases/versao-holistica" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Versão Holística</Link>
            <Link href="/cases/exclusiva-engenharias" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Exclusiva Engenharias</Link>
            <Link href="/cases/aorkia" className="mobile-sub-link" onClick={() => setIsMobileOpen(false)}>Aorkia</Link>
          </div>

          {/* LINKS SIMPLES */}
          <Link href="/a-engenharia" className="mobile-link-simple" onClick={() => setIsMobileOpen(false)}>
            <div className="flex-row">
              <Box size={20} className="text-primary" />
              <span className="menu-text">A Engenharia</span>
            </div>
          </Link>

          <div style={{marginTop: '2rem'}}>
            <Link href="/contato" className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}} onClick={() => setIsMobileOpen(false)}>
              Ativar Engenharia
            </Link>
          </div>

        </div>
      </div>

      <style jsx>{`
        /* --- LAYOUT PRINCIPAL --- */
        .site-navbar {
          position: fixed; top: 0; left: 0; right: 0; height: 90px; z-index: 9999;
          background: var(--color-bg); transition: all 0.3s ease;
          display: flex; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .site-navbar.scrolled { height: 80px; background: rgba(0,0,0,0.95); border-bottom: 1px solid rgba(255,255,255,0.1); }
        
        .nav-container {
          width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between;
        }
        
        .nav-logo-video { height: 65px; width: auto; }
        .site-navbar.scrolled .nav-logo-video { height: 50px; }

        .nav-actions { display: flex; align-items: center; gap: 1rem; }

        /* --- DESKTOP MENU --- */
        .nav-menu-desktop { display: flex; gap: 2rem; align-items: center; height: 100%; }
        .nav-item-desktop { position: relative; height: 100%; display: flex; align-items: center; }
        
        .nav-link-desktop {
          background: none; border: none; color: #ccc; font-size: 0.85rem; font-weight: 600;
          text-transform: uppercase; cursor: default; display: flex; align-items: center; gap: 6px;
          text-decoration: none; transition: color 0.2s; height: 100%; letter-spacing: 0.5px;
        }
        .nav-link-desktop.clickable { cursor: pointer; }
        
        .nav-link-desktop:hover, .nav-item-desktop.active .nav-link-desktop { color: #fff; }
        
        .dropdown-menu-desktop {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(20px);
          background: rgba(10,10,10,0.95); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; padding: 0.5rem 0; min-width: 240px; opacity: 0; visibility: hidden;
          transition: all 0.3s; box-shadow: 0 10px 40px rgba(0,0,0,0.6); display: flex; flex-direction: column;
        }
        .nav-item-desktop:hover .dropdown-menu-desktop {
          opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0);
        }
        .dropdown-menu-desktop a {
          padding: 0.8rem 1.5rem; color: #aaa; text-decoration: none; font-size: 0.85rem; text-align: left;
          white-space: nowrap; display: block; transition: all 0.2s;
        }
        .dropdown-menu-desktop a:hover { background: rgba(255,255,255,0.05); color: var(--color-primary); padding-left: 1.8rem; }

        /* --- CTA BUTTON --- */
        .btn-nav-cta {
          padding: 0.8rem 1.5rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15);
          border-radius: 4px; color: #fff; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s;
        }
        .btn-nav-cta:hover { background: var(--color-primary); border-color: var(--color-primary); color: #000; transform: translateY(-2px); }

        /* --- MOBILE HAMBURGER --- */
        .mobile-hamburger {
          display: none; background: none; border: none; color: #fff; cursor: pointer; padding: 5px;
        }

        /* --- MOBILE MENU ITENS --- */
        .mobile-menu {
          position: fixed; top: 90px; left: 0; width: 100%; height: calc(100vh - 90px);
          background: #000 !important; /* Força fundo preto sólido */
          padding: 1rem 1.5rem 6rem; overflow-y: auto;
          transform: translateX(100%); transition: transform 0.3s ease;
          display: flex; flex-direction: column;
          z-index: 9998;
        }
        .mobile-menu.open { transform: translateX(0); }
        
        .mobile-btn-expand {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          background: none; border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 1.5rem 0; color: #fff; cursor: pointer; text-align: left;
        }
        
        /* Estilo para links simples (A Engenharia) */
        .mobile-link-simple {
          display: flex; align-items: center; width: 100%;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 1.5rem 0; color: #fff; text-decoration: none; cursor: pointer;
        }
        
        .menu-text {
          font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 1rem; color: #fff;
        }
        
        .flex-row { display: flex; align-items: center; gap: 15px; }
        .text-primary { color: var(--color-primary); }
        
        .mob-chevron { transition: transform 0.3s; color: #666; }
        .mob-chevron.rotate { transform: rotate(180deg); color: var(--color-primary); }

        /* SUBMENU LINKS - CORREÇÃO DO BUG AZUL */
        .mobile-subs {
          overflow: hidden; max-height: 0; transition: max-height 0.4s ease; 
          background: rgba(255,255,255,0.03);
        }
        .mobile-subs.show { max-height: 600px; }
        
        /* Classe específica para os links do submenu para vencer conflitos globais */
        .mobile-sub-link {
          display: block !important; 
          padding: 1rem 0 1rem 3rem !important; 
          color: #b0b0b0 !important; /* Cor cinza claro forçada */
          font-size: 0.95rem !important;
          text-decoration: none !important; 
          border-bottom: 1px solid rgba(255,255,255,0.02);
          width: 100%;
        }
        .mobile-sub-link:hover { color: #fff !important; background: rgba(255,255,255,0.05); }

        /* RESPONSIVIDADE */
        @media (max-width: 1024px) {
          .nav-menu-desktop { display: none; }
          /* Força o botão desktop a sumir no mobile com !important */
          .desktop-only { display: none !important; } 
          .mobile-hamburger { display: block; }
          .site-navbar { height: 70px; padding: 0 1rem; }
          .site-navbar.scrolled { height: 70px; }
          .mobile-menu { top: 70px; height: calc(100vh - 70px); }
          .nav-logo-video { height: 40px; }
        }
      `}</style>
    </>
  );
}