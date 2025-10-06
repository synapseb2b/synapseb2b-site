// components/Cursor.js (VERSÃO FINAL E CORRIGIDA PARA O BUILD)

import { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Posição inicial fora da tela
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false); // Novo estado para controlar se estamos no cliente

  // Efeito para rodar APENAS no lado do cliente
  useEffect(() => {
    // 1. Confirma que estamos no ambiente do navegador
    setIsClient(true);

    // 2. Verifica se é um dispositivo touch. Se for, não faz nada.
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    // 3. Funções que dependem do 'window' e 'document'
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

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

    // 4. Adiciona os event listeners somente agora
    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // 5. Função de limpeza para remover os listeners quando o componente desmontar
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez, após a montagem inicial

  // Não renderiza nada no servidor ou se ainda não confirmou que é o cliente
  if (!isClient) {
    return null;
  }

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
