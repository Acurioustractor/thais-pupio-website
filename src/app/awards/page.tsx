import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { awards } from "@/data/awards";
import Footer from "@/components/layout/Footer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "Awards and recognition for the work of Thais Pupio Design.",
};

export default function AwardsPage() {
  return (
    <>
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-wide">
            Awards
          </h1>
          <p className="mt-4 text-lg text-stone-500 font-light max-w-2xl">
            Recognition for design excellence.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {awards.map((award, i) => (
              <FadeInOnScroll key={`${award.organisation}-${award.project}-${i}`}>
                <AwardCard award={award} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function AwardCard({ award }: { award: (typeof awards)[number] }) {
  const content = (
    <>
      {award.image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
          <Image
            src={award.image}
            alt={award.project}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-xs tracking-[0.2em] uppercase text-earth-600 font-medium px-3 py-1.5">
              {award.result}
            </span>
          </div>
        </div>
      )}
      <div className="mt-5 space-y-2">
        <h3 className="text-xl font-light text-stone-900">
          {award.project}
        </h3>
        <p className="text-sm text-stone-500 font-light">
          {award.organisation}
          {award.category && ` — ${award.category}`}
        </p>
        {award.slug && (
          <p className="text-sm tracking-[0.1em] uppercase text-stone-400 pt-1 group-hover:text-stone-700 transition-colors">
            View project &rarr;
          </p>
        )}
      </div>
    </>
  );

  if (award.slug) {
    return (
      <Link href={`/projects/${award.slug}`} className="group block">
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}
