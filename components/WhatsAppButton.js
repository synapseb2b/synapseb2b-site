import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Dados para o link do WhatsApp
  const phoneNumber = '553139586192';
  const message = 'Olá! Visitei o site da Synapse B2B e gostaria de mais informações sobre como podem acelerar nosso crescimento.';
  
  // URL final, com a mensagem codificada para funcionar corretamente
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={whatsappUrl}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale Conosco pelo WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
      
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          color: #FFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }
        .whatsapp-float:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          animation-play-state: paused;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;