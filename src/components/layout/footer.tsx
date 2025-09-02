import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-300">
      {/* top section */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/layout/logo.png"
                alt="A1 Security shield logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded bg-zinc-900"
              />
              <p className="text-lg font-semibold text-white">A1 Security</p>
            </div>
            <p className="text-sm leading-6 text-zinc-400">
              Nightly CCTV monitoring for shops, homes, and warehouses. We watch
              from 11 PM to 6 AM so you can rest easy.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quicklinks" className="grid gap-3">
            <h3
              id="footer-quicklinks"
              className="text-sm font-semibold text-white"
            >
              Quick links
            </h3>
            <ul className="grid gap-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services" className="grid gap-3">
            <h3
              id="footer-services"
              className="text-sm font-semibold text-white"
            >
              Services
            </h3>
            <ul className="grid gap-2 text-sm">
              <li>Live CCTV Monitoring</li>
              <li>Incident Alerts & Reporting</li>
              <li>After-Hours Surveillance</li>
              <li>Camera Health Checks</li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="grid gap-3">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="grid gap-2 text-sm not-italic">
              <li>
                <a href="tel:+11234567890" className="hover:text-white">
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@a1security.com"
                  className="hover:text-white"
                >
                  hello@a1security.com
                </a>
              </li>
              <li className="text-zinc-400">
                123 Secure Ave, Suite 101, Your City
              </li>
            </ul>
            <div className="mt-2 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.74 8.44-4.91 8.44-9.93z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.94 6.5a1.94 1.94 0 11-.001-3.88A1.94 1.94 0 016.94 6.5zM3.5 8.5h6.87V21H3.5V8.5zM14.06 8.5c-2.39 0-3.44 1.32-3.94 2.26V8.5H7.25V21h2.87v-6.18c0-1.64.31-3.22 2.34-3.22 1.99 0 2.01 1.86 2.01 3.32V21h2.88v-6.87c0-3.58-1.92-5.63-5.29-5.63z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} A1 Security — Protecting what matters.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <a href="mailto:hello@a1security.com" className="hover:text-white">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
