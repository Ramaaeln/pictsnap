import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight-new";

export default function HeroSection() {
  return (
    <section className="dark:text-white  -my-20 h-screen w-full rounded-md  text-center content-center md:items-center md:justify-center dark:bg-black/[0.96] bg-[#FEFFD3] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Spotlight />
      <h1 className="text-7xl text-bold 
      dark:bg-gradient-to-r dark:from-white/10 dark:via-white/30 dark:to-pink-500 
      bg-gradient-to-r from-black/10 via-black/30 to-pink-500 
      
      text-transparent bg-clip-text">
        PicTSnap
      </h1>
      <p className="block">
        Pict Your Photos and Share Your Activitys Seamlessly!
      </p>
      <Button variant="outline" className="bg-transparent">
        Try on
      </Button>
    </section>
  );
}
