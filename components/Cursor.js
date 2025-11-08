// components/Cursor.js (OTIMIZADO PARA PERFORMANCE por J.A.R.V.I.S.)

import { useState, useEffect, useRef } from 'react'; // 1. Importar o useRef

const Cursor = () => {
  // 2. REMOVER o state de 'position'. Ele é a causa da lentidão.
  // const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const cursorRef = useRef(null); // 3. Criar uma 'ref' para o elemento do cursor

  useEffect(() => {
    setIsClient(true);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // 4. Adicionar a verificação da 'ref' na guarda
    if (isTouchDevice || !cursorRef.current) {
      if (cursorRef.current) {
         cursorRef.current.style.display = 'none'; // Esconde o cursor em touch
      }
      return;
    }

    // 5. Esta função agora manipula o DOM diretamente, sem causar re-render
    const updatePosition = (e) => {
      if (cursorRef.current) {
        // Usar 'transform' é muito mais performático que 'left'/'top'
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    // A lógica de 'hover' é mantida, pois é uma atualização de baixa frequência
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isClient]); // 6. Depender de 'isClient' garante que a 'ref' esteja disponível

  // Não renderiza nada no servidor
  if (!isClient) {
    return null;
  }

  return (
    <div 
      ref={cursorRef} // 7. Anexar a ref ao DIV
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      // 8. Remover o 'style' de 'left' e 'top'
      // A posição inicial será 'fora da tela' via CSS/transform
    />
  );
};

export default Cursor;