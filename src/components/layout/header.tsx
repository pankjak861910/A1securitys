"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="A1 Security Home"
        >
          <Image
            src="/images/layout/logo.png"
            alt="A1 Security logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="font-semibold text-zinc-100">A1 Security</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-white"
                  : "text-zinc-300 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="ml-2 bg-red-600 hover:bg-red-700">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-zinc-950 text-zinc-100 border-l border-zinc-800"
            >
              <div className="mt-6 flex flex-col gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-white"
                        : "text-zinc-300 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 bg-red-600 hover:bg-red-700">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
