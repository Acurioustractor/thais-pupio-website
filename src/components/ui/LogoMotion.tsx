"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LogoMotionProps {
  /** WebM video source with alpha transparency */
  webmSrc: string;
  /** Fallback PNG image (crisp, with transparency) */
  fallbackSrc: string;
  /** Alt text for the image */
  alt: string;
  /** Width of the logo in the layout (px or %) */
  width?: number;
  /** Height of the logo */
  height?: number;
  /** Whether to loop the animation */
  loop?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
}

export default function LogoMotion({
  webmSrc,
  fallbackSrc,
  alt,
  width = 600,
  height = 340,
  loop = false,
  className = "",
}: LogoMotionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Intersection observer — start playing when in view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setIsVisible(true);
          if (videoRef.current && !videoFailed) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => setVideoFailed(true));
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasPlayed, videoFailed]);

  const handleVideoEnd = () => {
    setHasPlayed(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
    >
      {!videoFailed ? (
        <video
          ref={videoRef}
          muted
          playsInline
          loop={loop}
          preload="auto"
          onError={() => setVideoFailed(true)}
          onEnded={handleVideoEnd}
          className="max-w-full max-h-full object-contain"
          style={{ width, height }}
        >
          <source src={webmSrc} type="video/webm" />
        </video>
      ) : (
        <div
          className={`transition-all duration-[2000ms] ease-out ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <Image
            src={fallbackSrc}
            alt={alt}
            width={width}
            height={height}
            className="object-contain"
            priority
          />
        </div>
      )}
    </div>
  );
}
