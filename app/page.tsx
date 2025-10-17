import { HomeHero } from "@/components/home-hero"
import { AboutMinistry } from "@/components/about-ministry"
import { MissionVision } from "@/components/mission-vision"
import { PartnershipCTA } from "@/components/partnership-cta"
import { SiteHeader } from "@/components/site-header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HomeHero />
      <AboutMinistry />
      <MissionVision />
      <PartnershipCTA />
    </div>
  )
}
