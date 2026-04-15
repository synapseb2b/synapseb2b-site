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
      <SocialProofSection />
      <section className="border-t border-white/[0.08] py-10">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <p className="text-center text-[#CCD6E0] text-xs uppercase tracking-[0.2em] mb-8">
            {"Empresas que fecharam a dist\u00e2ncia entre compet\u00eancia e receita."}
          </p>
          <LogoMarquee items={[...TRUST_CLIENTS]} speed={35} />
        </div>
      </section>
      <PillarsSection />
      <DeliverablesSection />
      <CortexSection />
      <AboutSection />
      <CTASection />
    </>
  )
}
