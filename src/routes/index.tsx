import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "#/components/page-sections/hero-section";
import IntroSection from "#/components/page-sections/intro-section";
import OurStorySection from "#/components/page-sections/our-story-section";
import { GiftingSection } from "#/components/page-sections/gifting-section";
import { SponsorDonorSection } from "#/components/page-sections/sponsor-donor-section";
import { UpcomingEventsSection } from "#/components/page-sections/upcoming-events-section";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <IntroSection />
      <OurStorySection />
      <GiftingSection />
      <SponsorDonorSection />
      <UpcomingEventsSection />
    </div>
  );
}
