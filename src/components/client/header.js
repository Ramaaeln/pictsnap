"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { IconMenu2, IconX } from "@tabler/icons-react"
import ThemeToggle from "../ui/toggleTheme"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/70 dark:bg-black/60 shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center p-4 text-xl dark:text-white text-black">
          <Link href="/" className="font-bold">
            PicTSnap
          </Link>

          <div className="hidden md:flex text-lg gap-6 items-center">
            <a href="#service">Service</a>
            <a href="#pricing">Pricing</a>
            <Link href="/gallery">Gallery</Link>
            <a href="#chat">Chat</a>
            <Link href="/auth">SignIn</Link>
            <ThemeToggle />
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden"
          >
            <IconMenu2 size={28} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-72 z-50 
              backdrop-blur-xl 
              bg-pink-500/20 
              dark:bg-pink-500/10 
              border-l border-pink-300/30 
              p-6 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">Menu</span>
                <button onClick={() => setMobileOpen(false)}>
                  <IconX size={26} />
                </button>
              </div>

              <nav className="flex flex-col gap-5 text-lg">
                <a href="#service" onClick={() => setMobileOpen(false)}>Service</a>
                <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
                <Link href="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
                <a href="#chat" onClick={() => setMobileOpen(false)}>Chat</a>
                <Link href="/auth" onClick={() => setMobileOpen(false)}>SignIn</Link>
              </nav>

              <div className="mt-auto">
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
