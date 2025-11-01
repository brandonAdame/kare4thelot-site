import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/images/edited-photos/hero-image.webp";
import IntroSection from "@/components/pageSections/introSection";
import OurStorySection from "@/components/pageSections/ourStorySection";
import GiftingSection from "@/components/pageSections/giftingSection";
import SponsorsAndDonorsSection from "@/components/pageSections/sponsorsAndDonorsSection";
import CommunityEventsSection from "@/components/pageSections/communityEventsSection";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <img src={heroImage} alt="Hero Image" className="w-full h-auto" />
      <IntroSection />
      <OurStorySection />
      <GiftingSection />
      <SponsorsAndDonorsSection />
      <CommunityEventsSection />
    </div>
  );
}
