"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { IconMail, IconLock, IconUser } from "@tabler/icons-react"

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors px-6">
      <a href="/">back</a>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-6">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        <form className="space-y-4">
          
          {isSignUp && (
            <div className="relative">
              <IconUser className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          )}

          <div className="relative">
            <IconMail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="relative">
            <IconLock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-black border border-gray-300 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300 dark:bg-white/10" />
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-white/10" />
        </div>

        <button className="w-full py-3 rounded-xl border border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition">
          Continue with Google
        </button>

        <p className="text-center mt-6 text-gray-500 dark:text-gray-400 text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="ml-2 text-pink-500 font-semibold"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </motion.div>
    </section>
  )
}
