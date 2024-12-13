import AboutUs from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import VideoIntroduction from "@/components/VideoIntroduction";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoIntroduction />
      <AboutUs />
    </main>
  );
}
