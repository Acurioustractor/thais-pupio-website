"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollSnapContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollSnapContainer({
  children,
  className = "",
}: ScrollSnapContainerProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={`h-[100dvh] overflow-y-auto ${
        reducedMotion ? "" : "snap-y snap-mandatory"
      } ${className}`}
    >
      {children}
    </div>
  );
}
