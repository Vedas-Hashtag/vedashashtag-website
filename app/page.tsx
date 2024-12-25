import AboutUs from "@/components/AboutSection";
import ContributorsList from "@/components/Contributors";
import EffortSection from "@/components/EffortSection";
import EmptySection from "@/components/EmptySection";
import Events from "@/components/Events";
// import GallerySection from "@/components/GallerySection";
import HackthonHype from "@/components/HackthonHype";
import HeroSection from "@/components/HeroSection";
import VideoIntroduction from "@/components/VideoIntroduction";
import { fetchContributors } from "@/hooks/useGitHubContributors";

export default async function Home() {
  const organization = "Vedas-Hashtag";
  const contributors = await fetchContributors(organization);

  return (
    <main>
      <HeroSection />
      <VideoIntroduction />
      <AboutUs />
      <EffortSection />
      <Events />
      <HackthonHype />
      {/* <GallerySection /> */}
      <ContributorsList organization={organization} contributors={contributors} />
      <EmptySection />
    </main>
  );
}
