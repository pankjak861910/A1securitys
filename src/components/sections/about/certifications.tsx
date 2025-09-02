"use client"

import SectionReveal from "@/components/section-reveal"
import { BadgeCheck, ShieldAlert, Camera } from "lucide-react"

const items = [
  {
    icon: BadgeCheck,
    title: "ISO-aligned Processes",
    desc: "Structured SOPs and audit trails aligned to ISO-style quality management.",
  },
  {
    icon: ShieldAlert,
    title: "Data Protection",
    desc: "Privacy-first handling of footage, logs, and alerts with least-privilege access.",
  },
  {
    icon: Camera,
    title: "Vendor Agnostic",
    desc: "Compatible with leading CCTV brands and NVRs for flexible deployments.",
  },
]

export default function Certifications() {
  return (
    <SectionReveal
      as="section"
      className="mx-auto w-full max-w-6xl rounded-2xl border border-zinc-800/50 bg-section-c px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-red-500">Standards & Readiness</p>
        <h2 className="mt-2 text-pretty text-3xl font-bold text-white md:text-4xl">
          Certifications and compliance that inspire confidence
        </h2>
        <p className="mt-3 text-zinc-300">
          Built for reliability with disciplined playbooks, strict access controls, and transparent reporting.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1 text-sm text-white">
              <Icon className="size-4 text-red-500" aria-hidden /> {title}
            </div>
            <p className="text-sm text-zinc-300">{desc}</p>
          </div>
        ))}
      </div>
    </SectionReveal>
  )
}
