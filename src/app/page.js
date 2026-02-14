import HeroSection from "../components/client/hero";
import Header from "../components/client/header";
import About from "@/components/client/service";
import Gallery from "@/components/client/gallery";
import Princing from "@/components/client/pricing";

export default function Home() {
  return (
    <div className="bg-[#FEFFD3] dark:bg-black scroll-smooth">
      <Header />
      <HeroSection />
      <About />
      <Princing />
      <Gallery />
    </div>
  );
}
