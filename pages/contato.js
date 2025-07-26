import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cargo: '',
    telefone: '',
    receita: '',
    desafio: '',
    mensagem: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        cargo: '',
        telefone: '',
        receita: '',
        desafio: '',
        mensagem: ''
      })
    }, 2000)
  }

  return (
    <>
      <Head>
        <title>Contato - Agende sua Consulta Estratégica | Synapse B2B</title>
        <meta name="description" content="Entre em contato conosco e agende uma consulta estratégica gratuita. Descubra como acelerar o crescimento da sua empresa B2B." />
      </Head>
    </>
  );
}

      {/* Hero do Contato */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Vamos Acelerar seu Crescimento</h1>
            <p>
              Agende uma consulta estratégica gratuita de 30 minutos e descubra como 
              o Framework GTM Ignition™ pode transformar sua empresa.
            </p>
          </div>
        </div>

                <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.2,
          background: 'linear-gradient(135deg, #000000 0%, #0A192F 100%)'
        }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src="/video/video_home.mp4" type="video/mp4" />
          </video>
        </div>

      </section>

      {/* Seção Principal de Contato */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            
            {/* Formulário */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Consulta Estratégica Gratuita</h2>
              
              {submitStatus === 'success' && (
                <div style={{
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  border: '1px solid #64FFDA',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '2rem',
                  color: '#64FFDA'
                }}>
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#CCD6F6' }}>
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(100, 255, 218, 0.05)',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        borderRadius: '8px',
                        color: '#F8F9FA',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#CCD6F6' }}>
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(100, 255, 218, 0.05)',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        borderRadius: '8px',
                        color: '#F8F9FA',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#CCD6F6' }}>
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(100, 255, 218, 0.05)',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        borderRadius: '8px',
                        color: '#F8F9FA',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#CCD6F6' }}>
                      Cargo *
                    </label>
                    <input
                      type="text"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(100, 255, 218, 0.05)',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        borderRadius: '8px',
                        color: '#F8F9FA',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#CCD6F6' }}>
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(100, 255, 218, 0.05)',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        borderRadius: '8px',
                        color: '#F8F9FA',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#CCD6F6' }}>
                      Receita Anual (ARR/Faturamento)
                    </label>
                    <select
                      name="receita"
                      value={formData.receita}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(100, 255, 218, 0.05)',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        borderRadius: '8px',
                        color: '#F8F9FA',
                        fontSize: '1rem'
                      }}
                    >
                      <option value="">Selecione</option>
                      <option value="menos-1m">Menos de R$ 1M</option>
                      <option value="1m-5m">R$ 1M - R$ 5M</option>
                      <option value="5m-20m">R$ 5M - R$ 20M</option>
                      <option value="20m-50m">R$ 20M - R$ 50M</option>
                      <option value="mais-50m">Mais de R$ 50M</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#CCD6F6' }}>
                    Principal Desafio de GTM *
                  </label>
                  <select
                    name="desafio"
                    value={formData.desafio}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(100, 255, 218, 0.05)',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      borderRadius: '8px',
                      color: '#F8F9FA',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Selecione seu principal desafio</option>
                    <option value="cac-alto">CAC muito alto</option>
                    <option value="ciclo-longo">Ciclo de vendas muito longo</option>
                    <option value="conversao-baixa">Taxa de conversão baixa</option>
                    <option value="posicionamento">Dificuldade de posicionamento</option>
                    <option value="escala">Dificuldade para escalar</option>
                    <option value="previsibilidade">Falta de previsibilidade</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#CCD6F6' }}>
                    Conte-nos mais sobre sua empresa e desafios
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(100, 255, 218, 0.05)',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      borderRadius: '8px',
                      color: '#F8F9FA',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ 
                    fontSize: '1.1rem',
                    padding: '1rem 2rem',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? 'Enviando...' : 'Agendar Consulta Gratuita'}
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Outras Formas de Contato</h2>
              
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ 
                  backgroundColor: 'rgba(100, 255, 218, 0.1)', 
                  padding: '2rem', 
                  borderRadius: '12px',
                  border: '1px solid rgba(100, 255, 218, 0.2)'
                }}>
                  <h3 style={{ color: '#64FFDA', marginBottom: '1.5rem' }}>Contato Direto</h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#F8F9FA', marginBottom: '0.5rem' }}>E-mail</h4>
                    <a href="mailto:contato@synapseb2b.com" style={{ color: '#64FFDA', fontSize: '1.1rem' }}>
                      contato@synapseb2b.com
                    </a>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#F8F9FA', marginBottom: '0.5rem' }}>WhatsApp</h4>
                    <a href="https://wa.me/553139586192" style={{ color: '#64FFDA', fontSize: '1.1rem' }}>
                      +55 (31) 3958-6192
                    </a>
                  </div>
                  
                  <div>
                    <h4 style={{ color: '#F8F9FA', marginBottom: '0.5rem' }}>LinkedIn</h4>
                    <a href="https://linkedin.com/company/synapse-b2b" style={{ color: '#64FFDA', fontSize: '1.1rem' }}>
                      /company/synapseb2b
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: '#64FFDA', marginBottom: '1.5rem' }}>O que Esperar da Consulta</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem', marginTop: '0.2rem' }}>✓</span>
                    <div>
                      <strong style={{ color: '#F8F9FA' }}>Análise Gratuita (30 min)</strong>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                        Avaliação inicial dos seus desafios de GTM
                      </p>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem', marginTop: '0.2rem' }}>✓</span>
                    <div>
                      <strong style={{ color: '#F8F9FA' }}>Insights Personalizados</strong>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                        Recomendações específicas para sua empresa
                      </p>
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem', marginTop: '0.2rem' }}>✓</span>
                    <div>
                      <strong style={{ color: '#F8F9FA' }}>Roadmap Inicial</strong>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                        Próximos passos para acelerar seu crescimento
                      </p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#64FFDA', marginRight: '0.5rem', marginTop: '0.2rem' }}>✓</span>
                    <div>
                      <strong style={{ color: '#F8F9FA' }}>Sem Compromisso</strong>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                        Consulta 100% gratuita e sem obrigações
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div style={{
                backgroundColor: '#1E2A3A',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(100, 255, 218, 0.2)'
              }}>
                <h4 style={{ color: '#64FFDA', marginBottom: '1rem' }}>Resposta Garantida</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  Respondemos todas as consultas em até 24 horas. 
                  Para urgências, use nosso WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="section section-darker">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Perguntas Frequentes sobre a Consulta</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div className="card" style={{ textAlign: 'left' }}>
                <h3>A consulta é realmente gratuita?</h3>
                <p>Sim, 100% gratuita. É nossa forma de conhecer sua empresa e avaliar se há fit para trabalharmos juntos.</p>
              </div>

              <div className="card" style={{ textAlign: 'left' }}>
                <h3>Quanto tempo dura a consulta?</h3>
                <p>30 minutos focados. Tempo suficiente para entender seus desafios e dar insights valiosos.</p>
              </div>

              <div className="card" style={{ textAlign: 'left' }}>
                <h3>Preciso me preparar para a consulta?</h3>
                <p>Apenas tenha em mente seus principais desafios de GTM e métricas atuais (se disponíveis).</p>
              </div>

              <div className="card" style={{ textAlign: 'left' }}>
                <h3>Vocês atendem empresas de qualquer porte?</h3>
                <p>Focamos em empresas B2B com receita a partir de R$ 1M e produtos de alta complexidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

