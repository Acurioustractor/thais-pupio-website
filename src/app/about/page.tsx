import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollSnapContainer from "@/components/ui/ScrollSnapContainer";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import { bio } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: bio.intro,
};

const premises = [
  {
    title: "Where life happens",
    body: "The home is not just property — it is the daily scenery of wellbeing and togetherness, the stage where life unfolds.",
  },
  {
    title: "Designing a way of living",
    body: "Building a home is designing a way of living. Each choice shapes the routine, the encounters, and the quality of life.",
  },
  {
    title: "Space shapes feeling",
    body: "Neuroscience confirms that space influences emotion — light, ventilation, layout, and materials directly impact how people feel and connect.",
  },
  {
    title: "Sustainability as wellbeing",
    body: "Sustainability is part of living well — accessible, practical, and integrated with comfort. Not a burden or a luxury.",
  },
  {
    title: "Authenticity over status",
    body: "Authenticity is more valuable than ostentation. A home should reflect identity and values, not serve as a symbol of status.",
  },
  {
    title: "The journey matters",
    body: "The process matters as much as the result. Building doesn\u2019t need to be traumatic — clarity, curation, and presence make the journey as rewarding as the finished home.",
  },
];

const phases = [
  {
    number: "01",
    title: "Listen & Discover",
    description:
      "We begin by listening. How do you want to live? What makes you feel at home? What experiences matter most? This phase is about understanding your story, your rhythms, and your dreams — not just your wishlist.",
    outcome: "A clear vision rooted in who you are, not trends or templates.",
  },
  {
    number: "02",
    title: "Research & Explore",
    description:
      "Every site has a story. We study the land, the light, the climate, the context. We research materials, precedents, and possibilities. This is where neuroscience meets intuition, where sustainability meets beauty.",
    outcome:
      "A deep understanding of place and potential — the foundation for meaningful design.",
  },
  {
    number: "03",
    title: "Design & Refine",
    description:
      "We translate your vision into spatial ideas. Sketches, models, options. This is a collaborative process — we guide, you respond, we refine. Clarity emerges through iteration, not perfection on the first try.",
    outcome:
      "A design that feels like you — functional, beautiful, and deeply considered.",
  },
  {
    number: "04",
    title: "Detail & Document",
    description:
      "Great architecture lives in the details. We refine materials, joinery, light, texture. We document everything clearly so the vision can be built with precision and care. No surprises, no guesswork.",
    outcome:
      "Complete, buildable drawings and specifications. Confidence in the plan.",
  },
  {
    number: "05",
    title: "Build & Support",
    description:
      "Building is when the vision becomes real. We provide guidance, answer questions, and ensure the design intent is honored. This phase requires presence, flexibility, and problem-solving as construction unfolds.",
    outcome:
      "A home that matches the vision — built with care, integrity, and attention.",
  },
];

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

      {/* Core belief */}
      <ScrollSnapSection className="flex items-center justify-center bg-bark text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-cream/40 mb-8">
            Core Belief
          </p>
          <blockquote className="font-serif text-3xl md:text-5xl font-light leading-snug">
            A space can welcome the soul and, at the same time, promote health
            and clarity.
          </blockquote>
        </div>
      </ScrollSnapSection>

      {/* Premises — what we believe about home */}
      <ScrollSnapSection className="flex items-center justify-center bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-stone-400 mb-4">
              Premises
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900">
              What we believe about home
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {premises.map((premise) => (
              <div key={premise.title} className="border-l-2 border-burnt-orange/30 pl-6">
                <h3 className="font-serif text-xl font-light text-stone-900 mb-2">
                  {premise.title}
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  {premise.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollSnapSection>

      {/* Sensory Methodology — the 4 pillars */}
      <ScrollSnapSection className="flex items-center justify-center bg-earth-50">
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

      {/* The Promise — what this means for you */}
      <ScrollSnapSection className="flex items-center justify-center bg-burnt-orange text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">
              The Promise
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light">
              What this means for you
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-white/60 mb-4">
                Clarity
              </h3>
              <p className="text-white/80 font-light leading-relaxed">
                Confidence in the process. Every decision simplified, every
                choice guided by purpose — so the journey of building feels as
                rewarding as arriving home.
              </p>
            </div>
            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-white/60 mb-4">
                Identity
              </h3>
              <p className="text-white/80 font-light leading-relaxed">
                A space that translates who you are — not a showroom, but a
                home that reflects your values, your rhythm, your way of living
                and gathering.
              </p>
            </div>
            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-white/60 mb-4">
                Enchantment
              </h3>
              <p className="text-white/80 font-light leading-relaxed">
                Spaces that enchant not just the eyes, but through a beauty
                that generates a sense of wonder — living settings for
                meaningful experiences.
              </p>
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Values */}
      <ScrollSnapSection className="flex items-center justify-center bg-forest text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-cream/70 mb-4">
            What Guides This Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-16">
            Two core values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-light mb-4">Freedom</h3>
              <p className="text-cream/90 font-light leading-relaxed">
                The freedom to choose clients and projects aligned with core
                principles, and to create houses that reflect the unique
                identity of those who will inhabit them. Freedom means
                authenticity and expansion — living without imprisonment to
                patterns or impositions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Service</h3>
              <p className="text-cream/90 font-light leading-relaxed">
                Placing vision, knowledge, and practice at the service of life.
                Whether designing houses that promote health, integrating real
                sustainability, or sharing learnings through community and
                educational projects, this work is a form of contribution:
                creating spaces that dignify and elevate the experience of
                living.
              </p>
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Process — how we work together */}
      <ScrollSnapSection className="flex items-center justify-center bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-stone-400 mb-4">
              The Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900">
              The journey matters as much as the destination
            </h2>
            <p className="mt-4 text-lg text-stone-500 font-light">
              Building a home is more than construction — it&rsquo;s a process
              of discovery, collaboration, and transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {phases.map((phase) => (
              <div key={phase.number} className="flex gap-4">
                <span className="font-serif text-3xl font-light text-stone-300 shrink-0">
                  {phase.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-light text-stone-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">
                    {phase.description}
                  </p>
                </div>
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

          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-block text-sm tracking-[0.2em] uppercase text-stone-900 border border-stone-900 px-8 py-4 hover:bg-stone-900 hover:text-white transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </ScrollSnapSection>
    </ScrollSnapContainer>
  );
}
