// components/Footer.js

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column footer-info">
            <h4 className="footer-title">Synapse B2B</h4>
            <p>Transformando Expertise Técnica em Receita Previsível.</p>
            <div className="footer-contact">
              <a href="mailto:contato@synapseb2b.com" className="footer-contact-link">
                <Mail size={16} />
                <span>contato@synapseb2b.com</span>
              </a>
              <a href="tel:+553139586192" className="footer-contact-link">
                <Phone size={16} />
                <span>+55 31 3958-6192</span>
              </a>
            </div>
          </div>
          <div className="footer-column footer-links">
            <h4 className="footer-title">Navegação</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/metodologia">Metodologia</Link></li>
              <li><Link href="/casos-de-uso">Casos de Uso</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>
          <div className="footer-column footer-legal">
            <h4 className="footer-title">Legal</h4>
            <ul>
             <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
             <li><Link href="/termos-de-uso">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Synapse B2B. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
