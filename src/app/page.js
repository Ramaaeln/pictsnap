import HeroSection from "../components/hero";
import Header from "../components/header";
import About from "@/components/service";
import Gallery from "@/components/gallery";
import Princing from "@/components/pricing";

export default function Home() {
  return (
    <div className="bg-[#FEFFD3] dark:bg-black scroll-smooth">
      <Header/>
      <HeroSection/>
      <About/>
      <Princing/>
      <Gallery/>
    </div>
  );
}
