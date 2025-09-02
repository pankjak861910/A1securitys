import { BadgeCheck, Camera, ShieldCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section className="w-full bg-section-c">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Certifications & Compliance
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-5">
              <div className="mb-2 inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1 text-sm text-white">
                <BadgeCheck className="h-4 w-4 text-red-500" aria-hidden />{" "}
                ISO‑aligned Processes
              </div>
              <p className="text-sm text-zinc-300">
                Structured SOPs and audit trails that mirror ISO-style quality
                management.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-5">
              <div className="mb-2 inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1 text-sm text-white">
                <ShieldCheck className="h-4 w-4 text-red-500" aria-hidden />{" "}
                Data Protection
              </div>
              <p className="text-sm text-zinc-300">
                Privacy-first handling of footage and incident logs with
                least-privilege access.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-5">
              <div className="mb-2 inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1 text-sm text-white">
                <Camera className="h-4 w-4 text-red-500" aria-hidden /> Vendor
                Agnostic
              </div>
              <p className="text-sm text-zinc-300">
                Works with leading CCTV brands and NVRs for flexible
                deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
