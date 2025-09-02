"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  Building2,
  Home,
  Warehouse,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  {
    icon: Camera,
    title: "Live CCTV Monitoring",
    desc: "Continuous oversight across multi-cam layouts with proactive anomaly detection.",
  },
  {
    icon: Clock,
    title: "11PM–6AM Watch",
    desc: "Night-focused coverage to protect when the risk is highest and staffing is lean.",
  },
  {
    icon: Building2,
    title: "Shops & Offices",
    desc: "Deter theft, vandalism, and break-ins for commercial spaces.",
  },
  {
    icon: Home,
    title: "Residences",
    desc: "Keep homes safe with quick escalation and neighbor-friendly protocols.",
  },
  {
    icon: Warehouse,
    title: "Godowns & Yards",
    desc: "High-visibility surveillance to secure inventory and access points.",
  },
  {
    icon: ShieldCheck,
    title: "Incident Playbooks",
    desc: "ISO-aligned SOPs with evidence capture and verified call trees.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  inView: { opacity: 1, y: 0, scale: 1 },
};

export function Services() {
  return (
    <SectionReveal aria-label="Services" className="bg-[#0b1220] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            Services tailored to your site
          </h2>
          <p className="mt-3 text-white/70">
            From retail to warehouses, we configure monitoring layouts and
            escalation paths for your needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
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
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800 ring-1 ring-zinc-700 transition-colors duration-300 group-hover:bg-zinc-700"
                      aria-hidden="true"
                    >
                      <s.icon className="h-5 w-5 text-blue-500 transition-colors duration-300 group-hover:text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
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
