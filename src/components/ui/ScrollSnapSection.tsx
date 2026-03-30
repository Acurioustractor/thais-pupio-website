interface ScrollSnapSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollSnapSection({
  children,
  className = "",
}: ScrollSnapSectionProps) {
  return (
    <section
      className={`min-h-[100dvh] snap-start snap-always relative ${className}`}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </section>
  );
}
