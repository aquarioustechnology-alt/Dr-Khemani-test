import { Navigation } from "@/components/Navigation";
import { HeroV2 } from "./sections/HeroV2";
import { TrustBadges } from "./sections/TrustBadges";
import { AboutPreview } from "./sections/AboutPreview";
import { ServicesParallax } from "./sections/ServicesParallax";
import { WhyChoose } from "./sections/WhyChoose";
import { Journey } from "./sections/Journey";
import { ParallaxStats } from "./sections/ParallaxStats";
import { Testimonials } from "./sections/Testimonials";
import { Blog } from "./sections/Blog";
import { FAQSection } from "./sections/FAQSection";
import { ClinicTiming } from "./sections/ClinicTiming";
import { ParallaxCTA } from "./sections/ParallaxCTA";
import { InstagramFeed } from "./sections/InstagramFeed";
import { VideoReviews } from "./sections/VideoReviews";
import { CTASection } from "./sections/CTASection";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroV2 />
      <AboutPreview />
      <ServicesParallax />
      <ParallaxStats />
      <WhyChoose />
      {/* <Journey /> */}
      <Testimonials />
      <VideoReviews />
      <Blog />
      <FAQSection />
      <ClinicTiming />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
