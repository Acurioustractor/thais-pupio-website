"use client";

interface FullBleedVideoProps {
  src: string;
  webmSrc?: string;
  poster?: string;
  className?: string;
}

export default function FullBleedVideo({
  src,
  webmSrc,
  poster,
  className = "",
}: FullBleedVideoProps) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    >
      {webmSrc && <source src={webmSrc} type="video/webm" />}
      <source src={src} type="video/mp4" />
    </video>
  );
}
