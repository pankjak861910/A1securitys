import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <div className="container max-w-3xl flex flex-col items-center text-center space-y-8">
        {/* Shield outline similar to the logo */}
        <div className="w-24 h-24 mb-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-primary"
          >
            <path
              d="M12 2L4 5.5V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V5.5L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8L10 13H14L12 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-foreground">
          Page Not Found
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl">
          We couldn&apos;t find the page you&apos;re looking for. The link might
          be incorrect, or the page may have been moved or removed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-red-600 hover:bg-red-700"
          >
            <Link href="/">Return Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white/10 text-white hover:bg-white/20 border-zinc-800"
          >
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
