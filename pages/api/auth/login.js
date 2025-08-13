import { signIn } from "next-auth/react";
import Head from "next/head";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Área de Clientes Synapse B2B</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <video
              autoPlay
              loop
              muted
              playsInline
              width={60}
              height={60}
            >
              <source src="/video/Logo_Animada_SynapseB2B_h.mp4" type="video/mp4" />
            </video>
            <h1>Área de Clientes</h1>
            <p>Acesse com sua conta para continuar.</p>
          </div>

          <div className="login-providers">
            <button 
              className="provider-btn" 
              onClick={() => signIn('google', { callbackUrl: '/app/dashboard' })}
            >
              <FaGoogle />
              <span>Entrar com Google</span>
            </button>
            {/* Outros provedores (LinkedIn, etc.) podem ser adicionados aqui no futuro */}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: var(--secondary-color);
          background-image: url('/image/Plataforma.png');
          background-size: cover;
          background-position: center;
        }
        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 3rem;
          background: rgba(10, 25, 41, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid var(--glass-border);
          text-align: center;
          box-shadow: var(--glass-shadow);
        }
        .login-header h1 {
          font-size: 1.8rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: var(--base-color);
        }
        .login-header p {
          color: #a0aec0; /* Tom de cinza claro */
          margin-bottom: 2.5rem;
        }
        .provider-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid var(--glass-border); 
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--base-color);
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .provider-btn:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
}