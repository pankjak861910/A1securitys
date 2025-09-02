import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const leaders = [
  {
    name: "Arjun Mehta",
    role: "Founder & Operations",
    initials: "AM",
    bio: "15+ years in physical security and remote monitoring.",
    image: "",
  },
  {
    name: "Sana Kapoor",
    role: "Head of Customer Success",
    initials: "SK",
    bio: "Owns SLAs, reporting, and continuous improvement.",
    image: "",
  },
  {
    name: "Ravi Iyer",
    role: "Technical Lead",
    initials: "RI",
    bio: "Integrations, alerting pipelines, and escalation tooling.",
    image: "",
  },
];

export default function Leadership() {
  return (
    <section className="w-full bg-section-b">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-white">Leadership</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {leaders.map((p) => (
              <Card key={p.name} className="border-zinc-800 bg-zinc-950/40">
                <CardContent className="p-6 text-zinc-100">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 ring-2 ring-zinc-800">
                      {p.image ? (
                        <AvatarImage
                          src={p.image || "/placeholder.svg"}
                          alt={`${p.name} headshot`}
                        />
                      ) : (
                        <AvatarFallback className="bg-zinc-900 text-white">
                          {p.initials}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-white">{p.name}</h3>
                      <p className="text-sm text-zinc-300">{p.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-zinc-300">{p.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
}
