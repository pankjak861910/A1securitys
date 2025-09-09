import Values from "./_components/values";
import HowWeOperate from "./_components/how-we-operate";
import States from "./_components/states";
import Certifications from "./_components/certifications";
import Timeline from "./_components/timeline";
import Intro from "./_components/intro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - A1 Securitys",
  description: "24/7 Security Monitoring Services",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <Intro />
      <Values />
      <HowWeOperate />
      <States />
      <Certifications />
      <Timeline />
    </main>
  );
}
