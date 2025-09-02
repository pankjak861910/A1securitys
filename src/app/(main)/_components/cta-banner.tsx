"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"

export function CtaBanner() {
  return (
    <SectionReveal className="bg-section-b">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-lg backdrop-blur md:flex-row md:items-center">
          <div>
            <h3 className="text-pretty text-2xl font-semibold text-white md:text-3xl">
              Ready to secure your premises?
            </h3>
            <p className="mt-2 text-zinc-300">Get a tailored monitoring plan within 24 hours—no obligations.</p>
          </div>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </SectionReveal>
  )
}
