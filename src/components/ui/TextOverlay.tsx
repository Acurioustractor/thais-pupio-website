interface TextOverlayProps {
  children: React.ReactNode;
  position?: "center" | "bottom-left" | "bottom-center";
  className?: string;
}

export default function TextOverlay({
  children,
  position = "center",
  className = "",
}: TextOverlayProps) {
  const positionClasses = {
    center: "inset-0 flex items-center justify-center text-center",
    "bottom-left": "inset-x-0 bottom-0 flex items-end p-8 md:p-16",
    "bottom-center":
      "inset-x-0 bottom-0 flex items-end justify-center p-8 md:p-16",
  };

  return (
    <div
      className={`absolute z-10 ${positionClasses[position]} ${className}`}
    >
      <div className="max-w-3xl">{children}</div>
    </div>
  );
}
