import type { Metadata } from "next";
import Image from "next/image";
import { pressItems } from "@/data/press";
import Footer from "@/components/layout/Footer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Selected press features and publications covering the work of Thais Pupio Design.",
};

export default function PressPage() {
  return (
    <>
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900 tracking-wide">
            Press
          </h1>
          <p className="mt-4 text-lg text-stone-500 font-light max-w-2xl">
            Selected features and publications.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
            {pressItems.map((item, i) => (
              <FadeInOnScroll key={`${item.publication}-${i}`}>
                <PressCard item={item} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PressCard({ item }: { item: (typeof pressItems)[number] }) {
  const Wrapper = item.url ? "a" : "div";
  const linkProps = item.url
    ? { href: item.url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper {...linkProps} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <Image
          src={item.image}
          alt={`${item.publication} — ${item.title}`}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Text overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {item.logo && (
            <div className="mb-4">
              <Image
                src={item.logo}
                alt={item.publication}
                width={120}
                height={40}
                className="h-6 md:h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
          )}
          {!item.logo && (
            <p className="text-sm tracking-[0.15em] uppercase text-white/60 mb-2">
              {item.publication}
            </p>
          )}
          <h3 className="font-serif text-xl md:text-2xl font-light text-white">
            {item.project}
          </h3>
          {item.description && (
            <p className="mt-1 text-sm text-white/70 font-light">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
