import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '#/components/page-sections/hero-section'
import IntroSection from '#/components/page-sections/intro-section'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <IntroSection />
    </div>
  )
}
