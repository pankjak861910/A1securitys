import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - A1 Security",
  description: "24/7 Security Monitoring Services",
};

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
