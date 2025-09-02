"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SectionReveal from "@/components/section-reveal"

type Leader = {
  name: string
  role: string
  image?: string
  initials: string
  bio: string
}

const leaders: Leader[] = [
  {
    name: "Arjun Mehta",
    role: "Founder & Operations",
    initials: "AM",
    bio: "15+ years in physical security and remote monitoring operations across retail and logistics.",
  },
  {
    name: "Sana Kapoor",
    role: "Head of Customer Success",
    initials: "SK",
    bio: "Drives SLAs, reporting, and continuous improvement for our night-watch clients.",
  },
  {
    name: "Ravi Iyer",
    role: "Technical Lead",
    initials: "RI",
    bio: "Architects our camera integrations, alerting pipelines, and escalation tooling.",
  },
]

export default function Leadership() {
  return (
    <SectionReveal
      as="section"
      className="mx-auto w-full max-w-6xl rounded-2xl border border-zinc-800/50 bg-section-b px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-red-500">Leadership</p>
        <h2 className="mt-2 text-pretty text-3xl font-bold text-white md:text-4xl">
          Experienced team, night-focused discipline
        </h2>
        <p className="mt-3 text-zinc-300">
          Our leadership blends operations, technology, and customer success to keep your premises protected through the
          vulnerable hours.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {leaders.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
            transition={{ delay: i * 0.06, type: "spring", stiffness: 260, damping: 22 }}
            className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all"
          >
            <div className="flex items-center gap-4">
              <Avatar className="size-12 ring-2 ring-zinc-800">
                {p.image ? (
                  <AvatarImage src={p.image || "/placeholder.svg"} alt={`${p.name} headshot`} />
                ) : (
                  <AvatarFallback className="bg-zinc-900 text-white">{p.initials}</AvatarFallback>
                )}
              </Avatar>
              <div>
                <h3 className="text-white font-semibold">{p.name}</h3>
                <p className="text-sm text-zinc-300">{p.role}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-300">{p.bio}</p>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  )
}
