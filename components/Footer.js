// components/Footer.js
// REFATORADO: Design System Global (Sem CSS Local)
// Estrutura: Marca à Esquerda | Menus à Direita

import { useState } from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

// Componente Ícone WhatsApp (SVG Inline para garantir compatibilidade)
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382C17.112 14.011 15.451 13.194 15.136 13.086C14.819 12.973 14.596 12.923 14.37 13.244C14.149 13.574 13.503 14.338 13.298 14.569C13.098 14.802 12.894 14.821 12.578 14.664C11.628 14.192 10.334 13.472 9.286 12.132C8.922 11.668 9.619 11.632 10.095 10.679C10.175 10.519 10.135 10.377 10.075 10.256C10.015 10.135 9.339 8.468 9.053 7.789C8.779 7.137 8.499 7.225 8.287 7.225C8.084 7.225 7.851 7.225 7.619 7.225C7.386 7.225 7.003 7.312 6.682 7.663C6.361 8.014 5.449 8.871 5.449 10.616C5.449 12.361 6.719 14.048 6.9 14.294C7.09 14.534 9.402 18.105 12.942 19.634C15.287 20.647 15.897 20.507 16.408 20.458C17.164 20.385 18.153 19.858 18.363 19.268C18.573 18.678 18.573 18.175 18.512 18.072C18.451 17.969 18.231 17.913 17.916 17.756H17.472ZM12.006 24C7.63 24 3.485 22.262 0.5 19.277L0 24L4.832 22.751C7.666 24.297 12.011 24.82 12.016 24.82C18.622 24.82 24 19.442 24 12.836C24 6.23 18.622 0.852 12.016 0.852C5.41 0.852 0.032 6.23 0.032 12.836C0.032 14.855 0.583 16.843 1.644 18.628L12.006 24Z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato@synapseb2b.com').then(() => {
      setCopySuccess('Copiado!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, () => {
      setCopySuccess('Erro');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  // Estilos inline estruturais mínimos (layout) que o globals.css delega ao componente
  const styles = {
    brandColumn: {
      flex: '1 1 300px',
      minWidth: '280px',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    menuGrid: {
      flex: '2 1 600px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2.5rem',
      justifyContent: 'center'
    },
    linkReset: {
      textDecoration: 'none',
      color: 'inherit',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    navTitle: {
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      opacity: 0.7,
      marginBottom: '1rem'
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-content" style={{ alignItems: 'flex-start', textAlign: 'left', width: '100%' }}>
          
          {/* --- LADO ESQUERDO: MARCA & CONTATO --- */}
          <div style={styles.brandColumn}>
            <div>
              <h3 style={{ textAlign: 'left', margin: '0 0 1rem 0' }}>Synapse B2B</h3>
              <p style={{ textAlign: 'left', margin: 0, opacity: 0.8 }}>
                Engenharia de Receita para Empresas B2B<br/>
                que Precisam de Crescimento Previsível
              </p>
            </div>

            <ul style={{ alignItems: 'flex-start', width: 'auto' }}>
              <li style={{ justifyContent: 'flex-start' }}>
                <button 
                  onClick={handleCopyEmail} 
                  style={{ ...styles.linkReset, background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', padding: 0 }}
                  aria-label="Copiar E-mail"
                >
                  <Mail size={18} color="var(--color-primary)" />
                  <span>contato@synapseb2b.com</span>
                  {copySuccess && <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)' }}>{copySuccess}</span>}
                </button>
              </li>
              <li style={{ justifyContent: 'flex-start' }}>
                <a href="https://wa.me/553139586192" target="_blank" rel="noopener noreferrer" style={{ ...styles.linkReset, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <WhatsAppIcon size={18} className="text-primary" style={{ color: 'var(--color-primary)' }} />
                  <span>+55 31 3958-6192</span>
                </a>
              </li>
              <li style={{ justifyContent: 'flex-start', gap: '1.5rem', marginTop: '0.5rem' }}>
                <a href="#" style={styles.linkReset}><Linkedin size={24} /></a>
                <a href="#" style={styles.linkReset}><Instagram size={24} /></a>
              </li>
            </ul>
          </div>

          {/* --- LADO DIREITO: MENUS (COLUNAS) --- */}
          <div style={styles.menuGrid}>
            
            {/* Coluna 1 */}
            <div>
              <h4 style={styles.navTitle}>Inteligência & Estratégia</h4>
              <ul style={{ alignItems: 'flex-start' }}>
                <li style={{ justifyContent: 'flex-start' }}><a href="/pilares/inteligencia-e-estrategia/sprint-validacao" style={styles.linkReset}>Sprint de Validação</a></li>
                <li style={{ justifyContent: 'flex-start' }}><a href="/pilares/inteligencia-e-estrategia/gtm-completo" style={styles.linkReset}>GTM Completo</a></li>
                <li style={{ justifyContent: 'flex-start' }}><a href="/pilares/inteligencia-e-estrategia/cro-service" style={styles.linkReset}>CRO as a Service</a></li>
                <li style={{ justifyContent: 'flex-start' }}><a href="/pilares/inteligencia-e-estrategia/advisory-board" style={styles.linkReset}>Advisory Board</a></li>
              </ul>
            </div>

            {/* Coluna 2 */}
            <div>
              <h4 style={styles.navTitle}>Ativos Digitais</h4>
              <ul style={{ alignItems: 'flex-start' }}>
                <li style={{ justifyContent: 'flex-start' }}><a href="/pilares/ativos-digitais/plataformas-digitais" style={styles.linkReset}>Plataformas Digitais</a></li>
                <li style={{ justifyContent: 'flex-start' }}><a href="/pilares/ativos-digitais/apps" style={styles.linkReset}>Ferramentas de Aceleração</a></li>
              </ul>
            </div>

            {/* Coluna 3 */}
            <div>
              <h4 style={styles.navTitle}>Soluções Verticais</h4>
              <ul style={{ alignItems: 'flex-start' }}>
                <li style={{ justifyContent: 'flex-start' }}><a href="/pilares/solucoes-verticais/cortex-b2b" style={styles.linkReset}>Cortex B2B™</a></li>
                <li style={{ justifyContent: 'flex-start' }}><a href="/pilares/solucoes-verticais/match-maker" style={styles.linkReset}>Match Maker B2B</a></li>
                <li style={{ justifyContent: 'flex-start' }}><a href="/pilares/solucoes-verticais/hba" style={styles.linkReset}>Health Business Arch.™</a></li>
              </ul>
            </div>

            {/* Coluna 4 */}
            <div>
              <h4 style={styles.navTitle}>Cases de Sucesso</h4>
              <ul style={{ alignItems: 'flex-start' }}>
                <li style={{ justifyContent: 'flex-start' }}><a href="/cases/exclusiva-engenharias" style={styles.linkReset}>Exclusiva Engenharias</a></li>
                <li style={{ justifyContent: 'flex-start' }}><a href="/cases/versao-holistica" style={styles.linkReset}>Versão Holística</a></li>
                <li style={{ justifyContent: 'flex-start' }}><a href="/cases/aorkia" style={styles.linkReset}>AORKIA</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* --- RODAPÉ LEGAL --- */}
        <div style={{ 
          marginTop: '4rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          width: '100%', 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          opacity: 0.5,
          fontSize: '0.85rem'
        }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{ textAlign: 'left', margin: 0 }}>© {currentYear} Synapse B2B. Todos os direitos reservados.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/politica-de-privacidade" style={styles.linkReset}>Política de Privacidade</a>
            <a href="/termos-de-uso" style={styles.linkReset}>Termos de Uso</a>
          </div>
          
          <div style={{ width: '100%', textAlign: 'center', marginTop: '1rem', fontSize: '0.75rem', opacity: 0.8 }}>
            <p style={{ margin: 0 }}>Desenvolvido por Synapse B2B | Plataformas Forjada em Engenharia de Receita.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}