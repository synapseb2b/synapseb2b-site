// components/Cursor.js
// Estilos migrados para globals.css (.custom-cursor)

import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || !cursorRef.current) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      return;
    }

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (cursorRef.current) {
        const { x, y } = mouse.current;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

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

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default Cursor;