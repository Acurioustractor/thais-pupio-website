"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import MobileNav from "./MobileNav";

const darkHeroRoutes = ["/", "/about"];

function isDarkHeroPage(pathname: string): boolean {
  if (darkHeroRoutes.includes(pathname)) return true;
  // Project detail pages have full-bleed hero images
  if (pathname.startsWith("/projects/")) return true;
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const hasDarkHero = isDarkHeroPage(pathname);
  const [scrolled, setScrolled] = useState(!hasDarkHero);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // On light pages, always show solid header
    if (!hasDarkHero) {
      setScrolled(true);
      return;
    }

    setScrolled(false);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Listen on window for normal scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also listen on snap containers (they have their own scroll context)
    const snapContainer = document.querySelector(".snap-y");
    const handleSnapScroll = () => {
      if (snapContainer) {
        setScrolled(snapContainer.scrollTop > 50);
      }
    };
    if (snapContainer) {
      snapContainer.addEventListener("scroll", handleSnapScroll, {
        passive: true,
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (snapContainer) {
        snapContainer.removeEventListener("scroll", handleSnapScroll);
      }
    };
  }, [hasDarkHero, pathname]);

  const solid = scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          solid ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link
            href="/"
            className={`text-lg tracking-[0.15em] lowercase font-light transition-colors ${
              solid ? "text-stone-900" : "text-white"
            }`}
          >
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-widest uppercase font-light transition-colors hover:opacity-70 ${
                  solid ? "text-stone-700" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2 transition-colors ${
              solid ? "text-stone-900" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </nav>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
