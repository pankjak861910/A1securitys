"use client"

import { motion } from "framer-motion"
import SectionReveal from "@/components/section-reveal"

const steps = [
  { year: "2018", text: "Started night-watch pilots for local shops and clinics." },
  { year: "2020", text: "Scaled to warehouses and gated communities with escalation SLAs." },
  { year: "2023", text: "Introduced analytics-assisted monitoring and richer reporting." },
  { year: "2025", text: "24/7 coverage options and multi-site dashboards for customers." },
]

export default function Timeline() {
  return (
    <SectionReveal
      as="section"
      className="mx-auto w-full max-w-6xl rounded-2xl border border-zinc-800/50 bg-section-d px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-red-500">Our Journey</p>
        <h2 className="mt-2 text-pretty text-3xl font-bold text-white md:text-4xl">
          Built over years of night-time vigilance
        </h2>
      </div>

      <ol className="relative mt-10 space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-zinc-800 md:before:left-1/2 md:space-y-10">
        {steps.map((s, i) => (
          <motion.li
            key={s.year}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 260, damping: 22 }}
            className="relative flex flex-col gap-2 md:flex-row md:items-center"
          >
            <div className="relative z-10 ml-0 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-sm font-semibold text-white md:absolute md:left-[calc(50%-16px)]">
              {s.year}
            </div>
            <div className="md:w-1/2 md:pl-10 md:text-right">
              {i % 2 === 0 ? <p className="text-zinc-300">{s.text}</p> : null}
            </div>
            <div className="md:w-1/2 md:pl-10">{i % 2 !== 0 ? <p className="text-zinc-300">{s.text}</p> : null}</div>
          </motion.li>
        ))}
      </ol>
    </SectionReveal>
  )
}
