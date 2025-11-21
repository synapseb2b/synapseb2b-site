// components/Footer.js
// REFATORADO: Grid System 100% Global (5 Colunas: Marca + 4 Listas)
// Eliminação de estilos inline para corrigir alinhamento.

import { Mail, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link'; // Importação correta do Link

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* ESTRUTURA DE GRID 5 COLUNAS (Controlada pelo globals.css) */}
        <div className="footer-grid">
          
          {/* COLUNA 1: MARCA & CONTATO (Mais larga: 1.5fr) */}
          <div className="footer-brand">
            <h3>Synapse B2B</h3>
            <p>Engenharia de Receita para Empresas que buscam crescimento previsível e governança comercial.</p>
            
            {/* Ícones Sociais */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center' }}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:contato@synapseb2b.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: INTELIGÊNCIA */}
          <div className="footer-col">
            <h4>Inteligência</h4>
            <ul className="footer-links">
              <li><Link href="/pilares/inteligencia-e-estrategia/sprint-validacao">Sprint Validação</Link></li>
              <li><Link href="/pilares/inteligencia-e-estrategia/gtm-completo">GTM Completo</Link></li>
              <li><Link href="/pilares/inteligencia-e-estrategia/cro-service">CRO Service</Link></li>
              <li><Link href="/pilares/inteligencia-e-estrategia/advisory-board">Advisory Board</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: ATIVOS */}
          <div className="footer-col">
            <h4>Ativos</h4>
            <ul className="footer-links">
              <li><Link href="/pilares/ativos-digitais/plataformas-digitais">Plataformas</Link></li>
              <li><Link href="/pilares/ativos-digitais/apps">Ferramentas</Link></li>
              <li><Link href="/pilares/ativos-digitais/conteudo">Conteúdo</Link></li>
            </ul>
          </div>

          {/* COLUNA 4: VERTICAIS */}
          <div className="footer-col">
            <h4>Verticais</h4>
            <ul className="footer-links">
              <li><Link href="/pilares/solucoes-verticais/cortex-b2b">Cortex B2B™</Link></li>
              <li><Link href="/pilares/solucoes-verticais/match-maker">Match Maker</Link></li>
              <li><Link href="/pilares/solucoes-verticais/hba">Health Arch.</Link></li>
            </ul>
          </div>

          {/* COLUNA 5: CASES */}
          <div className="footer-col">
            <h4>Cases</h4>
            <ul className="footer-links">
              <li><Link href="/cases/exclusiva-engenharias">Exclusiva</Link></li>
              <li><Link href="/cases/versao-holistica">V. Holística</Link></li>
              <li><Link href="/cases/aorkia">Aorkia</Link></li>
            </ul>
          </div>

        </div>

        {/* BARRA INFERIOR (Copyright & Legal) */}
        <div className="footer-bottom">
          <span>© {currentYear} Synapse B2B. Todos os direitos reservados.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <Link href="/termos-de-uso">Termos de Uso</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}