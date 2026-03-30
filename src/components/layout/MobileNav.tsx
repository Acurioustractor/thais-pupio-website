"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-stone-900 transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex h-full flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-6 p-4 text-white"
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-10">
          <Link
            href="/"
            onClick={onClose}
            className="text-2xl tracking-[0.2em] lowercase text-white font-light"
          >
            Home
          </Link>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-2xl tracking-[0.2em] uppercase text-white/80 font-light hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
