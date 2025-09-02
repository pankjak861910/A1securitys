"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";

const items = [
  "Nightly Patrol Reports",
  "AI-Assisted Detection",
  "Secure Data Handling",
  "ISO-aligned SOPs",
  "Redundant Uptime",
];

export function TrustMarquee() {
  return (
    <SectionReveal className="border-y bg-section-d">
      <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-hidden px-4 py-6">
        <motion.div
          className="flex shrink-0 items-center gap-8"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {[...items, ...items].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="text-sm font-medium text-white/70"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
