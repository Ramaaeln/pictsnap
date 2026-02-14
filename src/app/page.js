import HeroSection from "../components/hero";
import Header from "../components/header";
import About from "@/components/service";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <div className="bg-[#FEFFD3] dark:bg-black scroll-smooth">
      <Header/>
      <HeroSection/>
      <About/>
      <Gallery/>
    </div>
  );
}
