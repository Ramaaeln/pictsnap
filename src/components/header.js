'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import ThemeToggle from "./ui/toggleTheme"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-black/60 shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center p-4 text-xl dark:text-white text-black">
        <a href="#" className="font-bold">PicTSnap</a>

        <div className="text-lg flex gap-6">
          <a href="#service">Service</a>
          <a href="#pricing">Pricing</a>
          <a href="/gallery">Gallery</a>
          <a href="#chat">Chat</a>
        </div>

        <div className="text-lg flex gap-4 items-center">
          <Link href="">SignIn</Link> | <Link href="">SignUp</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
