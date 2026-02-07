"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollIndicatorProps {
  className?: string;
}

export default function ScrollIndicator({
  className = "",
}: ScrollIndicatorProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 ${className}`}
    >
      <div className="animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white/80"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
}
