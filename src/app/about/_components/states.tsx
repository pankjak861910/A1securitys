const stats = [
  { label: "Years of Vigilance", value: "7+" },
  { label: "Sites Monitored", value: "120+" },
  { label: "Avg. Response", value: "≤ 60s" },
  { label: "Uptime SLA", value: "99.9%" },
];

export default function States() {
  return (
    <section className="w-full bg-section-b">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-5 text-center"
              role="group"
              aria-label={s.label}
            >
              <div className="text-3xl font-semibold text-white">{s.value}</div>
              <p className="mt-1 text-xs text-zinc-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
