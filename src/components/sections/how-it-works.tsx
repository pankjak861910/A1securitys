"use client";

import { motion } from "framer-motion";
import { PhoneCall, ScanSearch, BellRing, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

const steps = [
  {
    icon: PhoneCall,
    title: "1. Quick Discovery",
    desc: "Share camera layout, timing windows, and contact/escalation details.",
  },
  {
    icon: ScanSearch,
    title: "2. Setup & Tuning",
    desc: "We calibrate views, blind spots, and alert thresholds for your site.",
  },
  {
    icon: BellRing,
    title: "3. Active Monitoring",
    desc: "Operators watch feeds and trigger calls per SOP when we detect issues.",
  },
  {
    icon: ShieldCheck,
    title: "4. Reports & Review",
    desc: "Nightly patrol notes and monthly summaries to keep you in the loop.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  inView: { opacity: 1, y: 0, scale: 1 },
};

export function HowItWorks() {
  return (
    <SectionReveal
      aria-label="How it works"
      className="bg-section-c text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            How A1 Securitys works
          </h2>
          <p className="mt-3 text-white/70">
            Clear steps, transparent communication, measurable outcomes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                delay: i * 0.06,
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group"
            >
              <Card
                className="h-full overflow-hidden border border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-sm transition-all duration-300
                         ring-1 ring-transparent hover:shadow-lg group-hover:ring-red-600/30 focus-within:ring-red-600/40
                         focus-within:outline-none"
              >
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800 ring-1 ring-zinc-700
                               transition-colors duration-300 group-hover:bg-zinc-700"
                      aria-hidden="true"
                    >
                      <s.icon className="h-5 w-5 text-blue-500 transition-colors duration-300 group-hover:text-red-600" />
                    </div>
                    <span className="font-medium">{s.title}</span>
                  </div>
                  <p className="text-sm text-zinc-300">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
