import { BackgroundRippleEffect } from "../ui/background-ripple-effect"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"

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
]

export default function Service() {
  return (
    <section
      id="service"
      className="relative min-h-screen w-full bg-[#FFFDF1] dark:bg-black overflow-hidden"
    >
      <BackgroundRippleEffect />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold uppercase bg-gradient-to-r from-black/20 dark:from-white/20 to-pink-500 bg-clip-text text-transparent leading-tight">
            You Will <br /> Get Service
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-md">
            Experience premium photobooth features designed for Gen Z creators.
          </p>
        </div>

        {/* Right Infinite Cards */}
        <div className="flex-1 w-full">
          <div className="h-[22rem] sm:h-[28rem] rounded-2xl overflow-hidden">
            <InfiniteMovingCards
              items={services}
              direction="right"
              speed="slow"
              className="py-16"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
