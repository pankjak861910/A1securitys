"use client";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const FloatingWhatsApp = () => {
  return (
    <Link
      href="https://wa.me/+919876543210"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </Link>
  );
};

export default FloatingWhatsApp;
