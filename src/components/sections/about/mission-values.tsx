"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ShieldCheck, Clock, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import SectionReveal from "@/components/section-reveal"

type PillProps = { icon: React.ReactNode; title: string; desc: string }

function Pill({ icon, title, desc }: PillProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-5",
        "shadow-sm transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
        "focus-within:ring-2 focus-within:ring-red-600/70",
      )}
      role="article"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-zinc-900 p-2 text-red-500">{icon}</div>
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-zinc-300">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function MissionValues() {
  return (
    <SectionReveal
      as="section"
      className="mx-auto w-full max-w-6xl rounded-2xl border border-zinc-800/50 bg-section-a px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-red-500">Our Purpose</p>
        <h2 className="mt-2 text-pretty text-3xl font-bold text-white md:text-4xl">
          Mission-driven security with round-the-clock vigilance
        </h2>
        <p className="mt-3 text-zinc-300">
          We exist to protect what matters after hours. Our monitoring specialists combine proven protocols, modern
          cameras, and rapid escalation to deter threats before they escalate.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <Pill
          icon={<ShieldCheck className="size-5" aria-hidden />}
          title="Mission"
          desc="Deliver reliable, proactive CCTV monitoring to prevent loss and ensure peace of mind."
        />
        <Pill
          icon={<Eye className="size-5" aria-hidden />}
          title="Vision"
          desc="A safer night for every shop, home, and warehouse through smart, human-led oversight."
        />
        <Pill
          icon={<Clock className="size-5" aria-hidden />}
          title="Values"
          desc="Integrity, responsiveness, and accountability in every alert, every night."
        />
      </div>
    </SectionReveal>
  )
}
