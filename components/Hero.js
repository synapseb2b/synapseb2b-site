// components/Hero.js

export default function Hero({ children }) {
  return (
    <section className="hero-section">
      <div className="hero-video-background">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/video/video_home.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content text-center page-hero-padding">
        <div className="reveal-up">
          {children}
        </div>
      </div>
    </section>
  );
}
