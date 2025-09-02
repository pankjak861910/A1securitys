import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Integrity",
    desc: "We act with honesty and maintain strict confidentiality.",
  },
  {
    title: "Reliability",
    desc: "Redundant systems and trained operators ensure uptime.",
  },
  {
    title: "Responsiveness",
    desc: "Clear escalation paths and rapid communication.",
  },
];
export default function Values() {
  return (
    <section className="w-full bg-section-b">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {values.map((v) => (
            <Card key={v.title} className="border-zinc-800 bg-zinc-950/40">
              <CardContent className="p-6 text-zinc-100">
                <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
