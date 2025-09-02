"use client"

import { motion } from "framer-motion"
import { Shield, BellRing, Camera, Headphones } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionReveal } from "@/components/section-reveal"

const features = [
  { icon: Camera, title: "Real-time CCTV", desc: "Live monitoring with multi-screen oversight and smart alerts." },
  {
    icon: BellRing,
    title: "Instant Escalation",
    desc: "We call you and local responders the moment we detect issues.",
  },
  { icon: Headphones, title: "24/7 Support", desc: "Friendly human support whenever you need us." },
  { icon: Shield, title: "Pro Operators", desc: "Trained security experts following strict SOPs and checklists." },
]

const cardVariants = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  inView: { opacity: 1, y: 0, scale: 1 },
}

export function Features() {
  return (
    <SectionReveal className="bg-section-b text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">Security without compromise</h2>
          <p className="mt-3 text-white/70">Professional remote surveillance designed to deter, detect, and respond.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 120, damping: 18, delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <Card
                className="h-full overflow-hidden border border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-sm transition-all duration-300
                         ring-1 ring-transparent hover:shadow-lg group-hover:ring-red-600/30 focus-within:ring-red-600/40
                         focus-within:outline-none"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800 ring-1 ring-zinc-700 transition-colors duration-300 group-hover:bg-zinc-700"
                      aria-hidden="true"
                    >
                      <f.icon className="h-5 w-5 text-blue-500 transition-colors duration-300 group-hover:text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
