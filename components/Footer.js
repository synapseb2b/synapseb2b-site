import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h4>Synapse B2B</h4>
            <p>Transformando Expertise Técnica em Receita Previsível.</p>
            <a href="mailto:contato@synapseb2b.com">contato@synapseb2b.com</a>
            <br /> 
            <a href="tel:+553139586192">+55 31 3958-6192</a>
          </div>
          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/metodologia">Metodologia</Link></li>
              <li><Link href="/casos-de-uso">Casos de Uso</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>
          <div className="footer-legal">
            <h4>Legal</h4>
            <ul>
             <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
             <li><Link href="/termos-de-uso">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Synapse B2B. Todos os direitos reservados. Desenvolvido por Synapse B2B</p>
        </div>
      </div>
    </footer>
  );
}