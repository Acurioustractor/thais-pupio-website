import type { Metadata } from "next";
import ScrollSnapContainer from "@/components/ui/ScrollSnapContainer";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Process",
  description:
    "The journey matters as much as the destination. Clarity, care, and presence throughout the design process.",
};

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

const principles = [
  {
    title: "Clarity over complexity",
    description:
      "You shouldn't feel overwhelmed. We simplify choices, explain decisions, and guide you toward what truly matters.",
  },
  {
    title: "The journey is part of the design",
    description:
      "Building shouldn't be traumatic. Clarity, care, and presence make the process as meaningful as the finished home.",
  },
  {
    title: "Your voice matters",
    description:
      "This is your home. We lead with expertise and listen with openness. The best designs emerge from collaboration, not dictation.",
  },
  {
    title: "Grounded in reality",
    description:
      "We design within your budget and timeline. No fantasies, no false promises — just honest, thoughtful work.",
  },
];

export default function ProcessPage() {
  return (
    <ScrollSnapContainer>
      {/* Hero */}
      <ScrollSnapSection className="relative flex items-center justify-center bg-bark text-cream">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/about/thais-portrait.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-cream/70 mb-4">
            The Process
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            The journey matters as much as the destination
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-cream/90 font-light leading-relaxed">
            Building a home is more than construction — it&rsquo;s a process of
            discovery, collaboration, and transformation. Here&rsquo;s how we
            work together.
          </p>
        </div>
        <ScrollIndicator />
      </ScrollSnapSection>

      {/* Phases */}
      {phases.map((phase, index) => (
        <ScrollSnapSection
          key={phase.number}
          className={`flex items-center justify-center ${
            index % 2 === 0 ? "bg-white" : "bg-earth-50"
          }`}
        >
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <div className="flex items-start gap-4 md:gap-6">
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-300">
                {phase.number}
              </span>
              <div className="flex-1">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-stone-900 mb-4">
                  {phase.title}
                </h2>
                <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed mb-6">
                  {phase.description}
                </p>
                <div className="border-l-2 border-stone-300 pl-4 md:pl-6">
                  <p className="text-sm tracking-[0.1em] uppercase text-stone-400 mb-2">
                    Outcome
                  </p>
                  <p className="text-stone-700 font-light leading-relaxed">
                    {phase.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollSnapSection>
      ))}

      {/* Principles */}
      <ScrollSnapSection className="flex items-center justify-center bg-forest text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-16">
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {principles.map((principle) => (
              <div key={principle.title}>
                <h3 className="text-xl font-light mb-3">{principle.title}</h3>
                <p className="text-cream/90 font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollSnapSection>

      {/* CTA */}
      <ScrollSnapSection className="flex items-center justify-center bg-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-stone-900 mb-6">
            Ready to begin?
          </h2>
          <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed mb-10">
            Every meaningful space starts with a conversation. Let&rsquo;s talk
            about your vision, your site, and how we can work together.
          </p>
          <a
            href="/contact"
            className="inline-block text-sm tracking-[0.2em] uppercase text-stone-900 border border-stone-900 px-8 py-4 hover:bg-stone-900 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </ScrollSnapSection>
    </ScrollSnapContainer>
  );
}
