"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  overlay: React.ReactNode;
  className?: string;
}

/**
 * Olson Kundig-style scroll effect: background content stays sticky
 * while the overlay text scrolls up over it.
 *
 * Structure:
 * - Outer wrapper sets the scroll height (200vh)
 * - Sticky inner div pins the background at top
 * - Overlay div scrolls naturally over the pinned background
 */
export default function ParallaxSection({
  children,
  overlay,
  className = "",
}: ParallaxSectionProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <section className={`relative ${className}`}>
        <div className="relative h-[100dvh]" style={{ minHeight: "100vh" }}>
          {children}
        </div>
        <div className="relative bg-white">{overlay}</div>
      </section>
    );
  }

  return (
    <section className={`relative ${className}`}>
      {/* This tall wrapper gives us scroll room */}
      <div className="relative" style={{ height: "200vh" }}>
        {/* Sticky background — stays pinned while user scrolls */}
        <div
          className="sticky top-0 h-[100dvh] overflow-hidden"
          style={{ minHeight: "100vh" }}
        >
          <div className="relative h-full w-full">
            {children}
          </div>
        </div>
      </div>
      {/* Overlay content — scrolls up naturally, overlapping the sticky bg */}
      <div className="relative z-10 -mt-[100vh] bg-white">{overlay}</div>
    </section>
  );
}
