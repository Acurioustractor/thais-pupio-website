"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeInOnScroll({
  children,
  className = "",
}: FadeInOnScrollProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
