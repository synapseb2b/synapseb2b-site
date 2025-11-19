// components/Cursor.js
// (VERSÃO FINAL PERFORMANCE: requestAnimationFrame + Direct DOM Manipulation)

import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null); // Para guardar o ID da animação
  const mouse = useRef({ x: -100, y: -100 }); // Guarda coordenadas sem re-render

  useEffect(() => {
    // Detecta touch devices para não iniciar lógica desnecessária
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice || !cursorRef.current) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      return;
    }

    // 1. Atualiza as coordenadas na memória (muito leve)
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    // 2. O Loop de Animação (sincronizado com os Hz do monitor)
    const animate = () => {
      if (cursorRef.current) {
        // Move o elemento usando transform (aceleração de GPU)
        const { x, y } = mouse.current;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    // 3. Lógica de Hover sem React State (Manipulação direta de classe)
    // Isso evita que o React recrie o componente ao passar o mouse em links
    const handleMouseOver = (e) => {
      if (cursorRef.current && (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button'))) {
        cursorRef.current.classList.add('hover');
      }
    };

    const handleMouseOut = (e) => {
      if (cursorRef.current && (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a, button'))) {
        cursorRef.current.classList.remove('hover');
      }
    };

    // Inicia os listeners e o loop
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    requestRef.current = requestAnimationFrame(animate);

    // Limpeza
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="custom-cursor"
      />
      {/* CSS Scoped para garantir a performance visual */}
      <style jsx global>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border: 1px solid var(--color-primary, #00ff00); /* Fallback cor */
          border-radius: 50%;
          pointer-events: none; /* CRUCIAL: Para não bloquear cliques */
          z-index: 9999;
          mix-blend-mode: difference; /* Opcional: Efeito legal em fundos claros */
          transition: width 0.3s, height 0.3s, background-color 0.3s;
          will-change: transform; /* Avisa ao navegador para otimizar renderização */
          transform: translate3d(-100px, -100px, 0); /* Começa fora da tela */
        }

        /* Estado de Hover (Controlado via ClassList JS) */
        .custom-cursor.hover {
          width: 50px;
          height: 50px;
          background-color: rgba(0, 255, 150, 0.1);
          border-color: transparent;
        }

        /* Esconder cursor padrão do sistema */
        body, a, button {
          cursor: none;
        }

        /* Em telas touch, volta o cursor normal */
        @media (hover: none) and (pointer: coarse) {
          .custom-cursor { display: none; }
          body, a, button { cursor: auto; }
        }
      `}</style>
    </>
  );
};

export default Cursor;