import { CtaBanner } from "./_components/cta-banner";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import PlansSection from "./_components/plans";
import { Services } from "./_components/services";
import { TrustMarquee } from "./_components/trust-marquee";

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
