// components/Layout.js

import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import Cursor from './Cursor'; // Importa o novo componente

const Layout = ({ children }) => {
  return (
    <>
      <Cursor /> {/* Adiciona o cursor customizado à página */}
      <Navbar />
      <WhatsAppButton /> 
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
