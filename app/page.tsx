import { HeroSection } from '@/components/home/HeroSection'
import { SocialProofSection } from '@/components/home/SocialProofSection'
import { PillarsSection } from '@/components/home/PillarsSection'
import { DeliverablesSection } from '@/components/home/DeliverablesSection'
import { CortexSection } from '@/components/home/CortexSection'
import { AboutSection } from '@/components/home/AboutSection'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <PillarsSection />
      <DeliverablesSection />
      <CortexSection />
      <AboutSection />
      <CTASection />
    </>
  )
}
