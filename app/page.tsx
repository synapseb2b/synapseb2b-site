import { HeroSection } from '@/components/home/HeroSection'
import { SocialProofSection } from '@/components/home/SocialProofSection'
import { PillarsSection } from '@/components/home/PillarsSection'
import { DeliverablesSection } from '@/components/home/DeliverablesSection'
import { CortexSection } from '@/components/home/CortexSection'
import { AboutSection } from '@/components/home/AboutSection'
import { CTASection } from '@/components/home/CTASection'
import { LogoMarquee } from '@/components/ui/LogoMarquee'
import { TRUST_CLIENTS } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Trust bar — logo abaixo do hero */}
      <section className="border-b border-white/[0.08] py-10">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <p className="text-center text-[#CCD6E0] text-xs uppercase tracking-[0.2em] mb-8">
            Empresas que traduziram competência em receita com a Synapse B2B
          </p>
          <LogoMarquee items={[...TRUST_CLIENTS]} speed={20} />
        </div>
      </section>

      {/* 1. Resultados Reais (Mr Job hero + carrossel JB/Giornata/Marcato) */}
      <SocialProofSection />

      {/* 2. O Que Entregamos (Diagnóstico, Projeto, Advisor) — antes dos Pilares */}
      <DeliverablesSection />

      {/* 3. Os Três Pilares */}
      <PillarsSection />

      {/* 4. CORTEX B2B */}
      <CortexSection />

      {/* 5. Quem está por trás */}
      <AboutSection />

      {/* 6. Direto ao Ponto / Diagnóstico */}
      <CTASection />
    </>
  )
}
