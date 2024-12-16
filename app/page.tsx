import AboutUs from "@/components/AboutSection";
import EffortSection from "@/components/EffortSection";
import EmptySection from "@/components/EmptySection";
import Events from "@/components/Events";
import GallerySection from "@/components/GallerySection";
import HackthonHype from "@/components/HackthonHype";
import HeroSection from "@/components/HeroSection";

import VideoIntroduction from "@/components/VideoIntroduction";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoIntroduction />
      <AboutUs />
      <EffortSection />
      <Events />
      <HackthonHype />
      {/* <GallerySection /> */}
      <EmptySection />
    </main>
  );
}
