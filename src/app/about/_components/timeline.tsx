export default function Timeline() {
  return (
    <section className="w-full bg-section-d">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold text-white">Our Journey</h2>
        <ol className="relative mt-6 space-y-6 border-l border-zinc-800 pl-6">
          <li className="space-y-1">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-800 bg-zinc-900/60" />
            <p className="text-sm text-zinc-300">
              2018 — Night-watch pilots for local shops and clinics.
            </p>
          </li>
          <li className="space-y-1">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-800 bg-zinc-900/60" />
            <p className="text-sm text-zinc-300">
              2020 — Expanded to warehouses and gated communities.
            </p>
          </li>
          <li className="space-y-1">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-800 bg-zinc-900/60" />
            <p className="text-sm text-zinc-300">
              2023 — Analytics-assisted monitoring and richer reporting.
            </p>
          </li>
          <li className="space-y-1">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-zinc-800 bg-zinc-900/60" />
            <p className="text-sm text-zinc-300">
              2025 — Multi-site dashboards and 24/7 coverage options.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
