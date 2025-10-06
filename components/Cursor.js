/* ==========================================================================
   12. BOTÃO DO WHATSAPP (NOVO)
   ========================================================================== */
.whatsapp-float {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  background-color: var(--color-primary); /* COR ATUALIZADA */
  color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: all 0.3s ease;
  animation: pulse-whatsapp 2s infinite; /* Animação renomeada para evitar conflitos */
}
.whatsapp-float:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  animation-play-state: paused;
}

@keyframes pulse-whatsapp {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 150, 132, 0.7); /* COR ATUALIZADA */
  }
  70% {
    box-shadow: 0 0 0 15px rgba(0, 150, 132, 0); /* COR ATUALIZADA */
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 150, 132, 0); /* COR ATUALIZADA */
  }
}
