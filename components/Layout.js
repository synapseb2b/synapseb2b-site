// components/Layout.js

import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <>
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
