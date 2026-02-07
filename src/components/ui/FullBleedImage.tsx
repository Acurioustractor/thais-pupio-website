import Image from "next/image";

interface FullBleedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function FullBleedImage({
  src,
  alt,
  priority = false,
  className = "",
}: FullBleedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
