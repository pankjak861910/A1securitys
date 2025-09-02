export default function HowWeOperate() {
  return (
    <section className="w-full bg-section-c">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-6">
          <h2 className="text-2xl font-semibold text-white">How we operate</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            <li>
              Assessment: We review layout, camera placement, and risk factors.
            </li>
            <li>
              Setup: Configure secure streams, alert rules, and escalation
              matrix.
            </li>
            <li>
              Monitoring: Operators follow SOP checklists and log incidents.
            </li>
            <li>
              Reporting: Nightly summaries and on-demand incident exports.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
