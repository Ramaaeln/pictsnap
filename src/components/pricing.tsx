"use client"

import { motion } from "motion/react"
import { IconCheck } from "@tabler/icons-react"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: "Trial",
    price: "Free",
    description: "Perfect for trying PicTSnap",
    features: [
      "7 Days Access",
      "Basic Templates",
      "Watermark Included",
    ],
  },
  {
    name: "Member",
    price: "Rp 49K",
    description: "Best for regular users",
    features: [
      "30 Days Access",
      "All Templates",
      "No Watermark",
      "Premium Frames",
    ],
    popular: true,
  },
  {
    name: "Permanent",
    price: "Rp 199K",
    description: "Lifetime access",
    features: [
      "Unlimited Access",
      "All Premium Templates",
      "Priority Support",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing"  className="relative py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        
        <div  className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            Pricing
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Choose your perfect plan for PicTSnap
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={twMerge(
                clsx(
                  "relative rounded-3xl p-8 border backdrop-blur-xl transition-all",
                  "bg-white/60 dark:bg-white/5",
                  "border-gray-200 dark:border-white/10",
                  plan.popular && "border-pink-500 shadow-xl shadow-pink-500/20"
                )
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {plan.name}
              </h3>

              <p className="mt-4 text-4xl font-bold text-pink-500">
                {plan.price}
              </p>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <IconCheck size={18} className="text-pink-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full py-3 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
