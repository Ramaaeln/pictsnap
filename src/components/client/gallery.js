"use client"

import { motion } from "motion/react"

const photos = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            Our Gallery
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Capture your best moments with PicTSnap
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img
                src={`${src}?auto=format&fit=crop&w=800&q=80`}
                alt="gallery"
                className="w-full rounded-3xl object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <span className="text-white font-semibold">
                  Photobooth Moment ✨
                </span>
              </div>

              <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-pink-500/50 transition duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
