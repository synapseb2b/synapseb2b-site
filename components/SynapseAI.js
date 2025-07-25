import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import Button from './Button'

const SynapseAI = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Olá! Sou a IA da Synapse B2B. Como posso ajudar você hoje?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const predefinedResponses = {
    'ola': 'Olá! Bem-vindo à Synapse B2B. Como posso ajudar você hoje?',
    'servicos': 'Oferecemos o Framework GTM Ignition™ para empresas B2B de alta complexidade. Nossos serviços incluem:\n\n• Diagnóstico Estratégico\n• Decodificação de Mercado\n• Engenharia de Receita\n• Aceleração Inteligente\n\nGostaria de saber mais sobre algum deles?',
    'preco': 'Nossos investimentos variam conforme o escopo do projeto. Oferecemos uma consulta estratégica gratuita para entender suas necessidades e apresentar uma proposta personalizada. Gostaria de agendar?',
    'tempo': 'Nosso Framework GTM Ignition™ é estruturado em fases:\n\n• Primeiros insights: 2 semanas\n• Ativos de aceleração: 30-45 dias\n• Resultados mensuráveis: 60-90 dias\n\nCada projeto é único, mas esses são os prazos típicos.',
    'contato': 'Você pode entrar em contato conosco através de:\n\n• E-mail: contato@synapseb2b.com\n• WhatsApp: +55 (11) 99999-9999\n• Ou agende diretamente uma consulta gratuita\n\nQual forma prefere?',
    'agendar': 'Perfeito! Você pode agendar uma consulta estratégica gratuita de 30 minutos através do nosso Calendly. Durante essa conversa, vamos:\n\n• Entender seus desafios de GTM\n• Avaliar seu potencial de crescimento\n• Apresentar como podemos ajudar\n\nGostaria que eu direcionasse você para o agendamento?',
    'framework': 'O Framework GTM Ignition™ é nossa metodologia proprietária com 4 fases:\n\n1. **Diagnóstico Estratégico** - Análise profunda do seu negócio\n2. **Decodificação de Mercado** - Posicionamento irrecusável\n3. **Engenharia de Receita** - Ativos de aceleração\n4. **Aceleração Inteligente** - Otimização contínua\n\nQual fase te interessa mais?',
    'resultados': 'Nossos clientes alcançam resultados como:\n\n• 280% de crescimento médio em receita\n• 60% de redução no ciclo de vendas\n• 340% de aumento em conversão\n• 90 dias para primeiros resultados\n\nGostaria de ver casos específicos de sucesso?'
  }

  const getKeywords = (message) => {
    const text = message.toLowerCase()
    if (text.includes('olá') || text.includes('oi') || text.includes('bom dia') || text.includes('boa tarde')) return 'ola'
    if (text.includes('serviço') || text.includes('o que vocês fazem') || text.includes('como funciona')) return 'servicos'
    if (text.includes('preço') || text.includes('custo') || text.includes('investimento') || text.includes('valor')) return 'preco'
    if (text.includes('tempo') || text.includes('prazo') || text.includes('quando') || text.includes('resultado')) return 'tempo'
    if (text.includes('contato') || text.includes('falar') || text.includes('telefone') || text.includes('email')) return 'contato'
    if (text.includes('agendar') || text.includes('consulta') || text.includes('reunião') || text.includes('conversar')) return 'agendar'
    if (text.includes('framework') || text.includes('metodologia') || text.includes('ignition')) return 'framework'
    if (text.includes('resultado') || text.includes('case') || text.includes('sucesso') || text.includes('cliente')) return 'resultados'
    return null
  }

  const generateResponse = (userMessage) => {
    const keyword = getKeywords(userMessage)
    
    if (keyword && predefinedResponses[keyword]) {
      return predefinedResponses[keyword]
    }
    
    // Resposta padrão
    return 'Interessante! Para te ajudar melhor, posso falar sobre:\n\n• Nossos serviços e metodologia\n• Casos de sucesso\n• Como agendar uma consulta gratuita\n• Formas de contato\n\nSobre o que gostaria de saber mais?'
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simular delay de digitação da IA
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: generateResponse(inputMessage),
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickActions = [
    { text: 'Ver serviços', action: () => setInputMessage('Quais são os serviços?') },
    { text: 'Agendar consulta', action: () => setInputMessage('Quero agendar uma consulta') },
    { text: 'Ver casos de sucesso', action: () => setInputMessage('Mostrar resultados de clientes') },
    { text: 'Falar com humano', action: () => window.location.href = '/contato' }
  ]

  return (
    <>
      {/* Chat Button */}
      <div className="synapse-ai-button">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="ai-chat-btn"
          style={{ 
            width: '64px', 
            height: '64px', 
            borderRadius: '50%',
            backgroundColor: '#64FFDA',
            color: '#0A192F',
            border: 'none',
            boxShadow: '0 4px 20px rgba(100, 255, 218, 0.3)',
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="synapse-ai-window">
          
          {/* Header */}
          <div className="ai-header">
            <div className="ai-avatar">
              <Bot size={20} style={{ color: '#64FFDA' }} />
            </div>
            <div>
              <h3 style={{ color: '#F8F9FA', fontSize: '1rem', margin: 0 }}>
                Synapse AI
              </h3>
              <p style={{ color: '#CCD6F6', fontSize: '0.8rem', margin: 0 }}>
                Assistente Virtual
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="ai-messages">
            {messages.map((message) => (
              <div key={message.id} className={`ai-message ${message.type === 'user' ? 'user' : 'bot'}`}>
                <div className="message-content">
                  <div className="message-icon">
                    {message.type === 'bot' ? (
                      <Bot size={16} style={{ color: '#64FFDA' }} />
                    ) : (
                      <User size={16} style={{ color: '#0A192F' }} />
                    )}
                  </div>
                  <div className="message-text">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="ai-message bot">
                <div className="message-content">
                  <div className="message-icon">
                    <Bot size={16} style={{ color: '#64FFDA' }} />
                  </div>
                  <div className="typing-indicator">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="ai-quick-actions">
              <p style={{ color: '#CCD6F6', fontSize: '0.8rem', marginBottom: '12px' }}>
                Ações rápidas:
              </p>
              <div className="quick-actions-grid">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="quick-action-btn"
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="ai-input">
            <div className="input-container">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="message-input"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="send-btn"
                style={{ 
                  backgroundColor: '#64FFDA', 
                  color: '#0A192F',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px'
                }}
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .synapse-ai-button .ai-chat-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(100, 255, 218, 0.4);
        }

        .synapse-ai-window {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 384px;
          height: 500px;
          background-color: #1E2A3A;
          border: 1px solid rgba(100, 255, 218, 0.2);
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .ai-header {
          padding: 16px;
          border-bottom: 1px solid rgba(100, 255, 218, 0.2);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(100, 255, 218, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ai-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ai-message {
          display: flex;
        }

        .ai-message.user {
          justify-content: flex-end;
        }

        .ai-message.bot {
          justify-content: flex-start;
        }

        .message-content {
          max-width: 80%;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .ai-message.user .message-content {
          flex-direction: row-reverse;
        }

        .message-icon {
          margin-top: 2px;
          flex-shrink: 0;
        }

        .message-text {
          padding: 12px;
          border-radius: 16px;
          font-size: 0.9rem;
          line-height: 1.4;
          white-space: pre-line;
        }

        .ai-message.user .message-text {
          background-color: #64FFDA;
          color: #0A192F;
          border-bottom-right-radius: 4px;
        }

        .ai-message.bot .message-text {
          background-color: rgba(100, 255, 218, 0.1);
          color: #F8F9FA;
          border-bottom-left-radius: 4px;
        }

        .typing-indicator {
          padding: 12px;
          background-color: rgba(100, 255, 218, 0.1);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          display: flex;
          gap: 4px;
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          background-color: #64FFDA;
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }

        .ai-quick-actions {
          padding: 16px;
          border-top: 1px solid rgba(100, 255, 218, 0.2);
        }

        .quick-actions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .quick-action-btn {
          padding: 8px 12px;
          font-size: 0.75rem;
          background-color: rgba(100, 255, 218, 0.1);
          border: 1px solid rgba(100, 255, 218, 0.2);
          border-radius: 8px;
          color: #64FFDA;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quick-action-btn:hover {
          background-color: rgba(100, 255, 218, 0.2);
        }

        .ai-input {
          padding: 16px;
          border-top: 1px solid rgba(100, 255, 218, 0.2);
        }

        .input-container {
          display: flex;
          gap: 8px;
        }

        .message-input {
          flex: 1;
          padding: 8px 12px;
          background-color: rgba(100, 255, 218, 0.05);
          border: 1px solid rgba(100, 255, 218, 0.2);
          border-radius: 8px;
          color: #F8F9FA;
          font-size: 0.9rem;
          outline: none;
        }

        .message-input:focus {
          border-color: #64FFDA;
        }

        .message-input::placeholder {
          color: #CCD6F6;
          opacity: 0.7;
        }

        @media (max-width: 480px) {
          .synapse-ai-window {
            width: calc(100vw - 32px);
            right: 16px;
            left: 16px;
          }
        }
      `}</style>
    </>
  )
}

export default SynapseAI

