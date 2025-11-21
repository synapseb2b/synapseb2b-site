// components/Navbar.js
// VERSÃO ESTÁVEL: Títulos são apenas gatilhos de menu (Drilldown puro) - Sem links ambíguos.

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, X, ChevronDown, Brain, MonitorSmartphone, Box, Building, Mail, Award } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Estado dos Dropdowns Mobile
  const [mobileDropdowns, setMobileDropdowns] = useState({
    intel: false,
    ativos: false,
    cases: false
  });

  const router = useRouter();

  // Toggle simples para mobile (Abre/Fecha)
  const toggleMobileDropdown = (key) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha tudo ao mudar de rota
  useEffect(() => {
    setIsMobileOpen(false);
    setMobileDropdowns({ intel: false, ativos: false, cases: false });
  }, [router.asPath]);

  // Trava o scroll do corpo quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileOpen]);

  return (
    <>
      {/* --- NAVBAR DESKTOP --- */}
      <nav className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          <Link href="/" className="logo-link">
            <img src="/synapse-logo-white-no-tag.svg" alt="Synapse B2B" className="nav-logo" />
          </Link>

          <div className="nav-menu-desktop">
            
            {/* 1. INTELIGÊNCIA (Apenas Dropdown) */}
            <div className={`nav-item-desktop has-dropdown ${router.pathname.startsWith('/pilares/inteligencia') ? 'active' : ''}`}>
              <div className="nav-link-desktop"> {/* Mudado de button para div para evitar comportamento de clique */}
                <span>Inteligência e Estratégia</span>
                <ChevronDown size={12} className="chevron" />
              </div>
              <div className="dropdown-menu-desktop">
                <Link href="/pilares/inteligencia-e-estrategia/cro-service">CRO as a Service</Link>
                <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao">Sprint de Validação</Link>
                <Link href="/solucoes/cortex-b2b">Cortex B2B™</Link>
              </div>
            </div>

            {/* 2. ATIVOS DIGITAIS (Apenas Dropdown) */}
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

            {/* 3. CASES (Apenas Dropdown) */}
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

            {/* 4. A ENGENHARIA (Link Direto) */}
            <Link href="/a-engenharia" className={`nav-link-desktop ${router.pathname === '/a-engenharia' ? 'active' : ''}`}>
              A Engenharia
            </Link>
          </div>

          <div className="nav-actions">
            <Link href="/contato" className="btn-nav-cta desktop-only">
              Diagnóstico
            </Link>

            <button className="mobile-hamburger" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label="Menu">
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MENU MOBILE OVERLAY --- */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-content">
          
          {/* 1. INTELIGÊNCIA (Apenas Expande) */}
          <button 
            className={`mobile-btn-expand ${mobileDropdowns.intel ? 'active' : ''}`} 
            onClick={() => toggleMobileDropdown('intel')}
          >
            <div className="flex-row">
              <Brain size={20} className="text-primary" />
              Inteligência e Estratégia
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.intel ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.intel ? 'show' : ''}`}>
            <Link href="/pilares/inteligencia-e-estrategia/cro-service" onClick={() => setIsMobileOpen(false)}>CRO as a Service</Link>
            <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao" onClick={() => setIsMobileOpen(false)}>Sprint de Validação</Link>
            <Link href="/solucoes/cortex-b2b" onClick={() => setIsMobileOpen(false)}>Cortex B2B™</Link>
          </div>

          {/* 2. ATIVOS DIGITAIS (Apenas Expande) */}
          <button 
            className={`mobile-btn-expand ${mobileDropdowns.ativos ? 'active' : ''}`} 
            onClick={() => toggleMobileDropdown('ativos')}
          >
            <div className="flex-row">
              <MonitorSmartphone size={20} className="text-primary" />
              Ativos Digitais
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.ativos ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.ativos ? 'show' : ''}`}>
            <Link href="/pilares/ativos-digitais/plataformas-digitais" onClick={() => setIsMobileOpen(false)}>Plataformas Digitais</Link>
            <Link href="/pilares/ativos-digitais/growth-engineering" onClick={() => setIsMobileOpen(false)}>Growth Engineering</Link>
          </div>

          {/* 3. CASES (Apenas Expande) */}
          <button 
            className={`mobile-btn-expand ${mobileDropdowns.cases ? 'active' : ''}`} 
            onClick={() => toggleMobileDropdown('cases')}
          >
            <div className="flex-row">
              <Award size={20} className="text-primary" />
              Cases
            </div>
            <ChevronDown size={18} className={`mob-chevron ${mobileDropdowns.cases ? 'rotate' : ''}`} />
          </button>
          <div className={`mobile-subs ${mobileDropdowns.cases ? 'show' : ''}`}>
            <Link href="/cases/versao-holistica" onClick={() => setIsMobileOpen(false)}>Versão Holística</Link>
            <Link href="/cases/exclusiva-engenharias" onClick={() => setIsMobileOpen(false)}>Exclusiva Engenharias</Link>
            <Link href="/cases/aorkia" onClick={() => setIsMobileOpen(false)}>Aorkia</Link>
          </div>

          {/* LINKS SIMPLES */}
          <Link href="/a-engenharia" className="mobile-link-simple" onClick={() => setIsMobileOpen(false)}>
            <div className="flex-row">
              <Box size={20} className="text-primary" />
              A Engenharia
            </div>
          </Link>

          <Link href="/contato" className="mobile-link-simple" onClick={() => setIsMobileOpen(false)}>
            <div className="flex-row">
              <Mail size={20} className="text-primary" />
              Contato
            </div>
          </Link>

          <div style={{marginTop: '2rem'}}>
            <Link href="/contato" className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}} onClick={() => setIsMobileOpen(false)}>
              Agendar Diagnóstico
            </Link>
          </div>

        </div>
      </div>

      <style jsx>{`
        /* --- LAYOUT PRINCIPAL --- */
        .site-navbar {
          position: fixed; top: 0; left: 0; right: 0; height: 80px; z-index: 9999;
          background: var(--color-bg); transition: all 0.3s ease;
          display: flex; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .nav-container {
          width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 1.5rem;
          display: flex; align-items: center; justify-content: space-between;
        }
        
        .nav-logo { height: 40px; width: auto; }
        .nav-actions { display: flex; align-items: center; gap: 1rem; }

        /* --- DESKTOP MENU --- */
        .nav-menu-desktop { display: flex; gap: 1.5rem; align-items: center; height: 100%; }
        .nav-item-desktop { position: relative; height: 100%; display: flex; align-items: center; }
        
        /* Item de menu desktop (Texto puro, cursor default se tiver dropdown) */
        .nav-link-desktop {
          background: none; border: none; color: #ccc; font-size: 0.85rem; font-weight: 500;
          text-transform: uppercase; cursor: default; display: flex; align-items: center; gap: 5px;
          text-decoration: none; transition: color 0.2s; height: 100%; padding: 0 0.5rem;
        }
        /* Link real (sem dropdown) tem cursor pointer */
        a.nav-link-desktop { cursor: pointer; }
        
        .nav-link-desktop:hover, .nav-item-desktop.active .nav-link-desktop { color: #fff; }
        
        /* Dropdown Menu */
        .dropdown-menu-desktop {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(10px);
          background: rgba(10,10,10,0.95); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; padding: 0.5rem 0; min-width: 240px; opacity: 0; visibility: hidden;
          transition: all 0.2s; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; flex-direction: column;
        }
        .nav-item-desktop:hover .dropdown-menu-desktop {
          opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0);
        }
        .dropdown-menu-desktop a {
          padding: 0.8rem 1.5rem; color: #aaa; text-decoration: none; font-size: 0.85rem; text-align: left;
          white-space: nowrap; display: block;
        }
        .dropdown-menu-desktop a:hover { background: rgba(255,255,255,0.05); color: var(--color-primary); }

        /* --- CTA BUTTON --- */
        .btn-nav-cta {
          padding: 0.6rem 1.2rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15);
          border-radius: 4px; color: #fff; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
          text-decoration: none; transition: all 0.3s;
        }
        .btn-nav-cta:hover { background: var(--color-primary); border-color: var(--color-primary); color: #000; }

        /* --- MOBILE HAMBURGER --- */
        .mobile-hamburger {
          display: none; background: none; border: none; color: #fff; cursor: pointer; padding: 5px;
        }

        /* --- MOBILE MENU ITENS --- */
        .mobile-menu {
          position: fixed; top: 80px; left: 0; width: 100%; height: calc(100vh - 80px);
          background: #000; padding: 1rem 1.5rem 4rem; overflow-y: auto;
          transform: translateX(100%); transition: transform 0.3s ease;
          display: flex; flex-direction: column;
        }
        .mobile-menu.open { transform: translateX(0); }
        
        /* Botão Expansível Mobile (Ocupa toda a largura) */
        .mobile-btn-expand {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          background: none; border: none; border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 1.2rem 0; color: #fff; font-size: 1rem; font-family: 'Montserrat', sans-serif;
          font-weight: 500; cursor: pointer; text-align: left;
        }
        
        /* Link Simples Mobile */
        .mobile-link-simple {
          display: flex; align-items: center; width: 100%;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 1.2rem 0; color: #fff; font-size: 1rem; font-family: 'Montserrat', sans-serif;
          font-weight: 500; text-decoration: none; cursor: pointer;
        }
        
        .flex-row { display: flex; align-items: center; gap: 12px; }
        .text-primary { color: var(--color-primary); }
        
        .mob-chevron { transition: transform 0.3s; color: #666; }
        .mob-chevron.rotate { transform: rotate(180deg); color: var(--color-primary); }

        .mobile-subs {
          overflow: hidden; max-height: 0; transition: max-height 0.4s ease; background: rgba(255,255,255,0.03);
        }
        .mobile-subs.show { max-height: 500px; }
        .mobile-subs a {
          display: block; padding: 1rem 0 1rem 2.5rem; color: #aaa; font-size: 0.9rem;
          text-decoration: none; border-left: 2px solid transparent;
        }
        .mobile-subs a:hover { color: #fff; border-left-color: var(--color-primary); }

        /* RESPONSIVIDADE */
        @media (max-width: 1024px) {
          .nav-menu-desktop { display: none; }
          .desktop-only { display: none; }
          .mobile-hamburger { display: block; }
        }
      `}</style>
    </>
  );
}