"use client";

import type React from "react";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A1 Security",
  description: "24/7 Security Monitoring Services",
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent successfully");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-zinc-950">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 backdrop-blur">
          <h1 className="text-balance text-4xl font-semibold text-white">
            Contact Us
          </h1>
          <p className="mt-2 text-zinc-300">
            Tell us about your site and we’ll prepare a personalized monitoring
            plan.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-200">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  required
                  className="bg-zinc-950/40 text-white border-zinc-800 placeholder:text-zinc-500 focus-visible:ring-red-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-200">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  className="bg-zinc-950/40 text-white border-zinc-800 placeholder:text-zinc-500 focus-visible:ring-red-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-zinc-200">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+1 555 000 1234"
                className="bg-zinc-950/40 text-white border-zinc-800 placeholder:text-zinc-500 focus-visible:ring-red-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-zinc-200">
                How can we help?
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your premises and hours to monitor..."
                rows={5}
                required
                className="bg-zinc-950/40 text-white border-zinc-800 placeholder:text-zinc-500 focus-visible:ring-red-600"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
