import type { Metadata } from "next";
import Image from "next/image";
import ScrollSnapContainer from "@/components/ui/ScrollSnapContainer";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { bio } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: bio.intro,
};

export default function AboutPage() {
  return (
    <ScrollSnapContainer>
      {/* Portrait + intro */}
      <ScrollSnapSection className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-stone-200">
          <Image
            src="/images/about/thais-portrait.jpg"
            alt="Thais Pupio"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex w-full md:w-1/2 items-center justify-center px-8 py-12 md:px-16">
          <div className="max-w-lg">
            <p className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-4">
              {bio.headline}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-light text-stone-900 tracking-wide">
              {bio.name}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone-600 font-light leading-relaxed">
              {bio.intro}
            </p>
          </div>
        </div>
        <ScrollIndicator />
      </ScrollSnapSection>

      {/* Philosophy / bio body */}
      <ScrollSnapSection className="flex items-center justify-center bg-earth-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-800 mb-10">
            A space can welcome the soul
          </h2>
          <div className="space-y-6">
            {bio.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg text-stone-600 font-light leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </ScrollSnapSection>

      {/* Sensory Methodology — the 4 pillars */}
      <ScrollSnapSection className="flex items-center justify-center bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-4">
            The Sensory Methodology
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-800 mb-16">
            Four pillars that shape every design
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
            {bio.methodology.map((item) => (
              <div key={item.pillar}>
                <h3 className="text-xl font-light text-stone-900 mb-3">
                  {item.pillar}
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollSnapSection>

      {/* Practice details */}
      <ScrollSnapSection className="flex items-center justify-center bg-earth-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-800 mb-12">
            The Practice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {bio.practiceDetails.map((detail) => (
              <div key={detail.label}>
                <p className="text-sm tracking-[0.15em] uppercase text-stone-400 mb-2">
                  {detail.label}
                </p>
                <p className="text-lg text-stone-700 font-light">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollSnapSection>
    </ScrollSnapContainer>
  );
}
