import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
const services = [
  {
    title: "Unlock All Templates",
    quote: "Access a variety of premium templates to use.",
    name: "template",
  },
  {
    title: "Sharing and Downloading Photos",
    quote: "Share your photos and download your photos in the best quality.",
    name: "service2",
  },
  {
    title: "Integrated Artificial Intelligence",
    quote: "You can make yourself cooler if you use our automatic prompt.",
    name: "service3",
  },
];
export default function Service() {
  return (
    <div
      id="service"
      className="relative flex text-white bg-[#FFFDF1] dark:bg-black flex  h-screen w-full  items-start justify-start overflow-hidden"
    >
      <BackgroundRippleEffect />
      <div className="mt-30 w-full">
        <h1 className="text-7xl z-10 ml-80 font-bold uppercase bg-gradient-to-r from-black/10 dark:from-white/10 to-pink-500 bg-clip-text text-transparent">
          You Will <br />
          get Service{" "}
          <i className="text-black/10 dark:text-white/10  ri-arrow-right-fill"></i>
        </h1>
      </div>
      <div className="h-[28rem]  rounded-md flex flex-col antialiased mr-49   dark:bg-black dark:bg-grid-white/[0.05]   relative overflow-hidden">
        <InfiniteMovingCards
          items={services}
          direction="right"
          speed="slow"
          className="bg-gradient-to-r from-bg-black to-pink-500/40 py-30 h-full "
        />
      </div>
    </div>
  );
}
