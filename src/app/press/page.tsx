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
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-wide">
            Press
          </h1>
          <p className="mt-4 text-lg text-stone-500 font-light max-w-2xl">
            Selected features and publications.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <Image
          src={item.image}
          alt={`${item.publication} — ${item.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm tracking-[0.15em] uppercase text-stone-400">
          {item.publication}
        </h3>
        <p className="text-lg font-light text-stone-900">{item.title}</p>
        {item.description && (
          <p className="text-sm text-stone-500 font-light">
            {item.description}
          </p>
        )}
      </div>
    </Wrapper>
  );
}
