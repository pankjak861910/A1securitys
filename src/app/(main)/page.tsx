import { CtaBanner } from "@/app/(main)/_components/cta-banner";
import { Features } from "@/app/(main)/_components/features";
import { Hero } from "@/app/(main)/_components/hero";
import PlansSection from "@/app/(main)/_components/plans";
import { Services } from "@/app/(main)/_components/services";
import { TrustMarquee } from "@/app/(main)/_components/trust-marquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustMarquee />
      <Services />
      <PlansSection />
      <Features />
      <CtaBanner />
    </main>
  );
}
