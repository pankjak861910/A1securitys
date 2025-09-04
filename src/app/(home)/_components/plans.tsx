"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionReveal from "@/components/section-reveal";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    name: "1 Month",
    price: 3500,
    discount: 0,
    period: "per month",
    popular: false,
    features: [
      "Nightly CCTV monitoring (11 PM – 6 AM)",
      "Incident alerts via call + WhatsApp",
      "Daily summary report",
    ],
  },
  {
    name: "6 Months",
    price: 21000,
    discount: 10, // percent
    period: "billed once",
    popular: true,
    features: [
      "Nightly CCTV monitoring (11 PM – 6 AM)",
      "Incident alerts via call + WhatsApp",
      "10% renewal discount",
    ],
  },
  {
    name: "1 Year",
    price: 42000,
    discount: 20, // percent
    period: "billed once",
    popular: false,
    features: [
      "Nightly CCTV monitoring (11 PM – 6 AM)",
      "Incident alerts via call + WhatsApp",
      "Evidence archive (12 months)",
      "20% renewal discount",
    ],
  },
];

const container: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function PlansSection() {
  return (
    <SectionReveal as="section">
      <div className="w-full bg-[#0f2435] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-wider text-zinc-400">
              Transparent pricing
            </p>
            <h2 className="mt-2 text-balance text-3xl font-semibold text-white md:text-4xl">
              Plans that fit your premises
            </h2>
            <p className="mt-3 text-pretty text-zinc-300">
              No hidden fees. Expert CCTV monitoring all night with instant
              incident alerts.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={item}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group"
              >
                <Card
                  className={`relative h-full border-zinc-800 bg-zinc-900/60 text-zinc-100 backdrop-blur-sm transition-colors group-hover:border-red-600/50`}
                >
                  {plan.popular ? (
                    <Badge className="absolute right-3 top-3 border-red-500/30 bg-red-600/20 text-red-400">
                      Most Popular
                    </Badge>
                  ) : null}
                  <CardHeader>
                    <CardTitle className="flex items-baseline justify-between">
                      <span>{plan.name}</span>
                      <span className="text-xl font-normal text-zinc-300">
                        {plan.period}
                      </span>
                    </CardTitle>
                    <div className="mt-2 flex items-center gap-2">
                      {plan.discount > 0 ? (
                        <>
                          <span className="text-xl font-semibold text-zinc-400 line-through">
                            ₹{plan.price.toLocaleString()}
                          </span>
                          <span className="text-3xl font-bold text-white">
                            ₹
                            {(
                              plan.price *
                              (1 - plan.discount / 100)
                            ).toLocaleString(undefined, {
                              maximumFractionDigits: 0,
                            })}
                          </span>
                          <span className="ml-1 rounded bg-red-600/20 px-2 py-0.5 text-sm text-red-400 font-semibold">
                            {plan.discount}% OFF
                          </span>
                        </>
                      ) : (
                        <span className="text-3xl font-bold text-white">
                          ₹{plan.price.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-full gap-4">
                    <div>
                      <ul className="flex flex-col gap-2">
                        {plan.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-zinc-300"
                          >
                            <Check className="mt-0.5 size-4 text-red-500" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600"
                          variant="default"
                        >
                          Get Started
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="flex flex-col items-center">
                        <DialogTitle>Scan to Pay</DialogTitle>
                        <Image
                          src="/images/payment-qr.jpg"
                          alt="Payment QR"
                          className="max-w-xs w-full h-auto rounded shadow"
                          width={300}
                          height={300}
                        />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}
