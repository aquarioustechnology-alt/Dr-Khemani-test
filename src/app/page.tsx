import { Navigation } from "@/components/Navigation";
import { HeroV2 } from "./sections/HeroV2";

import { AboutPreview } from "./sections/AboutPreview";
import { ServicesParallax } from "./sections/ServicesParallax";
import { WhyChoose } from "./sections/WhyChoose";

import { ParallaxStats } from "./sections/ParallaxStats";
import { Testimonials } from "./sections/Testimonials";
import { Blog } from "./sections/Blog";
import { FAQSection } from "./sections/FAQSection";
import { ClinicTiming } from "./sections/ClinicTiming";

import { InstagramFeed } from "./sections/InstagramFeed";
import { VideoReviews } from "./sections/VideoReviews";
import { FocusSection } from "./sections/FocusSection";

import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroV2 />
      <AboutPreview />
      <FocusSection />
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
