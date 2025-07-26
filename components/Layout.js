import Navbar from './Navbar';
import Footer from './Footer';
import SynapseAI from './SynapseAI';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;