"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate" aria-label="Hero">
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero.png"
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* keep contrast overlay */}
      <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />
      {/* content remains unchanged */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-28 text-center text-white md:py-40">
        <motion.h1
          className="text-balance text-4xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Protecting What Matters, All Night Long
        </motion.h1>
        <motion.p
          className="text-pretty text-lg leading-relaxed text-zinc-200 md:text-xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Expert CCTV monitoring from 11 PM to 6 AM for shops, homes, and
          warehouses.
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 text-white hover:bg-white/20"
          >
            <Link href="/about">How We Work</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
