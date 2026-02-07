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
      className={`h-[100dvh] snap-start snap-always relative overflow-hidden ${className}`}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </section>
  );
}
