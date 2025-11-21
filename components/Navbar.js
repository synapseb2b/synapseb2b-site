// components/Navbar.js
// ATUALIZADO: Incluindo Menu Dropdown "Cases" antes de "A Synapse"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, X, ChevronDown, Brain, MonitorSmartphone, Box, Building, Mail, Award } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Estado para Dropdowns Mobile (Adicionado 'cases')
  const [mobileDropdowns, setMobileDropdowns] = useState({
    intel: false,
    ativos: false,
    verticais: false,
    cases: false
  });

  const router = useRouter();

  // Detectar Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMobileOpen(false);
    setMobileDropdowns({ intel: false, ativos: false, verticais: false, cases: false });
  }, [router.asPath]);

  // Travar scroll quando mobile aberto
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto';
  }, [isMobileOpen]);

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Verifica item ativo para realce
  const isActive = (path) => router.pathname.includes(path) ? 'active' : '';

  return (
    <>
      {/* Usa .site-navbar definido no globals.css */}
      <header className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          {/* LOGO (Esquerda) */}
          <Link href="/" className="nav-logo-link">
            <video autoPlay loop muted playsInline className="nav-logo-video">
              <source src="/video/Logo_Animada_SynapseB2B.mp4" type="video/mp4" />
            </video>
          </Link>

          {/* DESKTOP MENU (Direita) */}
          <nav className="nav-menu">
            
            {/* 1. Inteligência e Estratégia */}
            <div className="dropdown-group">
              <Link href="/pilares/inteligencia-e-estrategia" className={`nav-link ${isActive('inteligencia')}`}>
                Inteligência e Estratégia <ChevronDown size={12} className="chevron" />
              </Link>
              <div className="dropdown-box">
                <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao">Sprint de Validação</Link>
                <Link href="/pilares/inteligencia-e-estrategia/gtm-completo">GTM Completo</Link>
                <Link href="/pilares/inteligencia-e-estrategia/cro-service">CRO as a Service</Link>
                <Link href="/pilares/inteligencia-e-estrategia/advisory-board">Advisory Board</Link>
              </div>
            </div>

            {/* 2. Ativos Digitais */}
            <div className="dropdown-group">
              <Link href="/pilares/ativos-digitais" className={`nav-link ${isActive('ativos')}`}>
                Ativos Digitais <ChevronDown size={12} className="chevron" />
              </Link>
              <div className="dropdown-box">
                <Link href="/pilares/ativos-digitais/plataformas-digitais">Plataformas Digitais</Link>
                <Link href="/pilares/ativos-digitais/apps">Apps Estratégicos</Link>
              </div>
            </div>

            {/* 3. Soluções Verticais */}
            <div className="dropdown-group">
              <Link href="/pilares/solucoes-verticais" className={`nav-link ${isActive('verticais')}`}>
                Soluções Verticais <ChevronDown size={12} className="chevron" />
              </Link>
              <div className="dropdown-box">
                <Link href="/pilares/solucoes-verticais/cortex-b2b">Cortex B2B™</Link>
                <Link href="/pilares/solucoes-verticais/match-maker">Match Maker B2B</Link>
                <Link href="/pilares/solucoes-verticais/hba">Health Business Arch.™</Link>
              </div>
            </div>

            {/* 4. Cases (NOVO) */}
            <div className="dropdown-group">
              <Link href="/#cases" className={`nav-link ${isActive('cases')}`}>
                Cases <ChevronDown size={12} className="chevron" />
              </Link>
              <div className="dropdown-box">
                <Link href="/cases/versao-holistica">Versão Holística</Link>
                <Link href="/cases/exclusiva-engenharias">Exclusiva Engenharias</Link>
                <Link href="/cases/aorkia">AORKIA</Link>
              </div>
            </div>

            {/* 5. A Synapse */}
            <Link href="/a-engenharia" className={`nav-link ${router.pathname === '/a-engenharia' ? 'active' : ''}`}>
              A Synapse
            </Link>

            {/* 6. CTA Final */}
            <Link href="/contato" className="btn-nav-cta">
              Ativar Engenharia
            </Link>
          </nav>

          {/* HAMBURGER (Mobile) */}
          <button 
            className="nav-hamburger" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
          >
             {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-content">
            
            {/* Mobile: Inteligência */}
            <div className="mobile-item">
                <button onClick={() => toggleMobileDropdown('intel')} className={`mobile-btn ${mobileDropdowns.intel ? 'active' : ''}`}>
                    <div className="flex-row"><Brain size={18} className="text-primary"/> Inteligência e Estratégia</div>
                    <ChevronDown size={16} className={`mob-chevron ${mobileDropdowns.intel ? 'rotate' : ''}`} />
                </button>
                <div className={`mobile-subs ${mobileDropdowns.intel ? 'show' : ''}`}>
                    <Link href="/pilares/inteligencia-e-estrategia/sprint-validacao">Sprint de Validação</Link>
                    <Link href="/pilares/inteligencia-e-estrategia/gtm-completo">GTM Completo</Link>
                    <Link href="/pilares/inteligencia-e-estrategia/cro-service">CRO as a Service</Link>
                    <Link href="/pilares/inteligencia-e-estrategia/advisory-board">Advisory Board</Link>
                </div>
            </div>

            {/* Mobile: Ativos */}
            <div className="mobile-item">
                <button onClick={() => toggleMobileDropdown('ativos')} className={`mobile-btn ${mobileDropdowns.ativos ? 'active' : ''}`}>
                    <div className="flex-row"><MonitorSmartphone size={18} className="text-primary"/> Ativos Digitais</div>
                    <ChevronDown size={16} className={`mob-chevron ${mobileDropdowns.ativos ? 'rotate' : ''}`} />
                </button>
                <div className={`mobile-subs ${mobileDropdowns.ativos ? 'show' : ''}`}>
                    <Link href="/pilares/ativos-digitais/plataformas-digitais">Plataformas Digitais</Link>
                    <Link href="/pilares/ativos-digitais/apps">Apps Estratégicos</Link>
                </div>
            </div>

            {/* Mobile: Verticais */}
            <div className="mobile-item">
                <button onClick={() => toggleMobileDropdown('verticais')} className={`mobile-btn ${mobileDropdowns.verticais ? 'active' : ''}`}>
                    <div className="flex-row"><Box size={18} className="text-primary"/> Soluções Verticais</div>
                    <ChevronDown size={16} className={`mob-chevron ${mobileDropdowns.verticais ? 'rotate' : ''}`} />
                </button>
                <div className={`mobile-subs ${mobileDropdowns.verticais ? 'show' : ''}`}>
                    <Link href="/pilares/solucoes-verticais/cortex-b2b">Cortex B2B™</Link>
                    <Link href="/pilares/solucoes-verticais/match-maker">Match Maker B2B</Link>
                    <Link href="/pilares/solucoes-verticais/hba">Health Business Arch.™</Link>
                </div>
            </div>

            {/* Mobile: Cases (NOVO) */}
            <div className="mobile-item">
                <button onClick={() => toggleMobileDropdown('cases')} className={`mobile-btn ${mobileDropdowns.cases ? 'active' : ''}`}>
                    <div className="flex-row"><Award size={18} className="text-primary"/> Cases</div>
                    <ChevronDown size={16} className={`mob-chevron ${mobileDropdowns.cases ? 'rotate' : ''}`} />
                </button>
                <div className={`mobile-subs ${mobileDropdowns.cases ? 'show' : ''}`}>
                    <Link href="/cases/versao-holistica">Versão Holística</Link>
                    <Link href="/cases/exclusiva-engenharias">Exclusiva Engenharias</Link>
                    <Link href="/cases/aorkia">AORKIA</Link>
                </div>
            </div>

            {/* Mobile: Links Simples (CORRIGIDO) */}
            <Link href="/a-engenharia" className="mobile-link-simple">
                <div className="flex-row">
                  <Building size={18} className="text-primary"/> 
                  <span>A Synapse</span>
                </div>
            </Link>

            <div style={{ marginTop: '2rem', width: '100%' }}>
                <Link href="/contato" className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}}>
                    <Mail size={18} /> Ativar Engenharia
                </Link>
            </div>
        </div>
      </div>

<style jsx>{`
        /* ESTILOS LOCAIS PARA GARANTIR O LAYOUT DE DROPDOWN */
        
        .dropdown-group {
          position: relative; height: 100%; display: flex; align-items: center;
        }

        .chevron {
          margin-left: 6px; transition: transform 0.3s ease; opacity: 0.5;
        }

        .dropdown-group:hover .chevron {
          transform: rotate(180deg); opacity: 1; color: var(--color-primary);
        }

        /* Menu Suspenso Desktop */
        .dropdown-box {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(20px);
          min-width: 240px; background: rgba(10, 10, 10, 0.95); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; padding: 0.5rem 0; opacity: 0; visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          display: flex; flex-direction: column;
        }

        .dropdown-group:hover .dropdown-box {
          opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0);
        }

        .dropdown-box :global(a) {
          display: block; padding: 0.8rem 1.5rem; color: #a0a0a0; text-decoration: none;
          font-size: 0.85rem; font-family: 'Inter', sans-serif; transition: all 0.2s ease;
          border-left: 2px solid transparent; text-align: left;
        }

        .dropdown-box :global(a:hover) {
          background: rgba(255,255,255,0.03); color: #fff; border-left-color: var(--color-primary); padding-left: 1.8rem;
        }

        /* Hamburger Mobile */
        .nav-hamburger {
          display: none; background: none; border: none; color: #fff; cursor: pointer;
        }

        /* Mobile Styles */
        .mobile-content {
          width: 100%; display: flex; flex-direction: column; gap: 1rem;
        }

        /* CORREÇÃO AQUI: Unificando estilos de botão e link */
        .mobile-btn, .mobile-link-simple {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          background: none; border: none; border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 1.2rem 0; color: #fff; font-size: 1rem; font-family: 'Montserrat', sans-serif;
          font-weight: 500; cursor: pointer; text-decoration: none; text-align: left;
        }
        
        /* Garante que o link simples tenha o flex interno para alinhar ícone e texto */
        .mobile-link-simple .flex-row {
           display: flex; align-items: center; gap: 10px; color: #fff;
        }
        
        .flex-row { display: flex; align-items: center; gap: 10px; }
        .text-primary { color: var(--color-primary); }
        
        .mob-chevron { transition: transform 0.3s; opacity: 0.5; }
        .mob-chevron.rotate { transform: rotate(180deg); color: var(--color-primary); opacity: 1; }

        .mobile-subs {
          overflow: hidden; max-height: 0; transition: max-height 0.4s ease; background: rgba(255,255,255,0.02);
        }
        .mobile-subs.show { max-height: 500px; }

        .mobile-subs :global(a) {
          display: block; padding: 1rem 0 1rem 2.5rem; color: #9ca3af; font-size: 0.9rem;
          text-decoration: none; border-left: 2px solid transparent;
        }
        .mobile-subs :global(a:hover) {
          color: #fff; background: rgba(255,255,255,0.03); border-left-color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .nav-menu { display: none !important; }
          .nav-hamburger { display: block; }
        }
      `}</style>
    </>
  );
}