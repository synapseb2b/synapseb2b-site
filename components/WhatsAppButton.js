// components/WhatsAppButton.js
// Estilos migrados para globals.css (.whatsapp-float)

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '553139586192';
  const message = 'Olá! Visitei o site da Synapse B2B e gostaria de mais informações sobre como podem acelerar nosso crescimento.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale Conosco pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;