"use client";

import type React from "react";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendContactEmail } from "./_actions/send-contact-email";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setLoading(true);
    startTransition(async () => {
      const res = await sendContactEmail({ name, email, message });
      setLoading(false);
      if (res.success) {
        toast.success("Message sent successfully");
        form.reset();
      } else {
        toast.error(res.error || "Something went wrong. Please try again.");
      }
    });
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
              disabled={loading || isPending}
            >
              {loading || isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
