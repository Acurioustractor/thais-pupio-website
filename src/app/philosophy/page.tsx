import type { Metadata } from "next";
import Link from "next/link";
import TextOverlay from "@/components/ui/TextOverlay";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import LogoMotion from "@/components/ui/LogoMotion";
import { bio } from "@/data/site";

export const metadata: Metadata = {
  title: "Philosophy — The Sensory Methodology",
  description:
    "Authentic, sensory & sustainable design. Discover the philosophy and methodology behind Thais Pupio's architecture — where neuroscience meets beauty, and sustainability meets soul.",
};

export default function PhilosophyPage() {
  return (
    <main>
      {/* ── Hero — beige logo on bark ── */}
      <section className="relative h-[100dvh] bg-bark" style={{ minHeight: "100vh" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <LogoMotion
            webmSrc="/videos/logo-beige.webm"
            fallbackSrc="/images/brand/logo-beige.png"
            alt="thais pupio"
            width={700}
            height={400}
          />
        </div>
        <TextOverlay position="bottom-left">
          <p className="text-sm tracking-[0.3em] uppercase text-cream/60 mb-4">
            The Philosophy
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream tracking-wide leading-tight">
            Architect
            <br />
            of Living
          </h1>
        </TextOverlay>
        <ScrollIndicator />
      </section>

      {/* ── Core belief ── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-28 md:py-36 text-center">
          <FadeInOnScroll>
            <p className="text-sm tracking-[0.3em] uppercase text-bark/40 mb-8">
              Core Belief
            </p>
            <blockquote className="font-serif text-3xl md:text-5xl font-light text-bark leading-snug">
              A space can welcome the soul and, at the same time, promote health
              and clarity.
            </blockquote>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Premises — the foundational beliefs ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-36">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-stone-400 mb-4">
                Premises
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900">
                What we believe about home
              </h2>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <FadeInOnScroll>
              <div className="border-l-2 border-burnt-orange/30 pl-6">
                <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-3">
                  Where life happens
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  The home is not just property — it is the daily scenery of
                  wellbeing and togetherness, the stage where life unfolds.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="border-l-2 border-burnt-orange/30 pl-6">
                <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-3">
                  Designing a way of living
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  Building a home is designing a way of living. Each choice
                  shapes the routine, the encounters, and the quality of life.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="border-l-2 border-burnt-orange/30 pl-6">
                <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-3">
                  Space shapes feeling
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  Neuroscience confirms that space influences emotion — light,
                  ventilation, layout, and materials directly impact how people
                  feel and connect.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="border-l-2 border-burnt-orange/30 pl-6">
                <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-3">
                  Sustainability as wellbeing
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  Sustainability is part of living well — accessible, practical,
                  and integrated with comfort. Not a burden or a luxury.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="border-l-2 border-burnt-orange/30 pl-6">
                <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-3">
                  Authenticity over status
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  Authenticity is more valuable than ostentation. A home should
                  reflect identity and values, not serve as a symbol of status.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div className="border-l-2 border-burnt-orange/30 pl-6">
                <h3 className="font-serif text-xl md:text-2xl font-light text-stone-900 mb-3">
                  The journey matters
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  The process matters as much as the result. Building doesn&rsquo;t
                  need to be traumatic — clarity, curation, and presence make the
                  journey as rewarding as the finished home.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ── Tagline animation — cream text on bark ── */}
      <section
        className="relative bg-bark flex items-center justify-center"
        style={{ minHeight: "40vh" }}
      >
        <LogoMotion
          webmSrc="/videos/tagline-animation.webm"
          fallbackSrc="/images/brand/tagline-beige.png"
          alt="Authentic, Sensory & Sustainable Design"
          width={700}
          height={440}
          className="py-16"
        />
      </section>

      {/* ── The Guide — StoryBrand narrative ── */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-3xl px-6 py-28 md:py-36 text-center">
          <FadeInOnScroll>
            <p className="text-sm tracking-[0.3em] uppercase text-cream/40 mb-6">
              The Guide
            </p>
            <p className="text-lg md:text-xl text-cream/60 font-light mb-4">
              You dream of a home that reflects who you are.
            </p>
            <p className="text-lg md:text-xl text-cream/60 font-light mb-4">
              You need a guide —
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-cream mb-6">
              Architect of Living
            </h2>
            <p className="text-lg md:text-xl text-cream/60 font-light mb-2">
              who carries a toolbox —
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light text-cream/80 mb-8">
              the Sensory Methodology
            </p>
            <p className="text-lg md:text-xl text-cream/60 font-light">
              to build spaces that promote
            </p>
            <p className="font-serif text-3xl md:text-5xl font-light text-cream mt-2">
              meaningful experiences
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── Shape animation — brand shapes on cream ── */}
      <section
        className="relative bg-cream flex items-center justify-center"
        style={{ minHeight: "40vh" }}
      >
        <LogoMotion
          webmSrc="/videos/shape-animation.webm"
          fallbackSrc="/images/brand/shape.png"
          alt="Brand shape — geometric forms in orange, green, and cream"
          width={500}
          height={500}
          className="py-12"
        />
      </section>

      {/* ── The Sensory Methodology — 4 pillars ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-36">
          <FadeInOnScroll>
            <div className="text-center mb-20">
              <p className="text-sm tracking-[0.3em] uppercase text-stone-400 mb-4">
                The Sensory Methodology
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-900">
                Four pillars that shape every design
              </h2>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {bio.methodology.map((item, i) => (
              <FadeInOnScroll key={item.pillar}>
                <div className="border-t border-stone-200 pt-8">
                  <p className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-stone-900 mb-4">
                    {item.pillar}
                  </h3>
                  <p className="text-lg text-stone-500 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value proposition — burnt orange accent ── */}
      <section className="bg-burnt-orange text-white">
        <div className="mx-auto max-w-4xl px-6 py-28 md:py-36">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">
                The Promise
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
                What this means for you
              </h2>
            </div>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInOnScroll>
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
            </FadeInOnScroll>
            <FadeInOnScroll>
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
            </FadeInOnScroll>
            <FadeInOnScroll>
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
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ── Brand values — Freedom & Service ── */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-4xl px-6 py-28 md:py-36">
          <FadeInOnScroll>
            <p className="text-sm tracking-[0.3em] uppercase text-cream/50 mb-4 text-center">
              Values
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-cream text-center mb-20">
              What guides the work
            </h2>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeInOnScroll>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-cream mb-6">
                  Freedom
                </h3>
                <p className="text-cream/70 font-light leading-relaxed">
                  Freedom guides the life and the work: the ability to choose
                  clients and projects aligned with deep principles, and to
                  create homes that reflect the unique identity of those who
                  inhabit them. Freedom means authenticity and expansion —
                  living without confinement to patterns or impositions.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-cream mb-6">
                  Service
                </h3>
                <p className="text-cream/70 font-light leading-relaxed">
                  Service means putting vision, knowledge, and practice in
                  service of life. Whether designing homes that promote health,
                  integrating real sustainability, or sharing knowledge through
                  community and educational projects. Architecture as a form of
                  contribution: creating spaces that dignify and elevate the
                  experience of living.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ── Green logo on cream — visual break ── */}
      <section
        className="relative bg-cream flex items-center justify-center"
        style={{ minHeight: "35vh" }}
      >
        <LogoMotion
          webmSrc="/videos/logo-green.webm"
          fallbackSrc="/images/brand/logo-green.png"
          alt="thais pupio"
          width={500}
          height={280}
          className="py-12"
        />
      </section>

      {/* ── Brand voice ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-28 md:py-36 text-center">
          <FadeInOnScroll>
            <p className="text-sm tracking-[0.3em] uppercase text-stone-400 mb-8">
              Voice
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-900 mb-12">
              Clarity, Sensitivity, Enchantment
            </h2>
          </FadeInOnScroll>

          <div className="space-y-12 text-left">
            <FadeInOnScroll>
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-3">
                  Clarity
                </h3>
                <p className="text-lg text-stone-500 font-light leading-relaxed">
                  Translating complex concepts — neuroscience, passive solar
                  design, biophilic principles — into accessible, warm messages.
                  Never academic or jargon-heavy. The science is real; the
                  language is human.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-3">
                  Sensitivity
                </h3>
                <p className="text-lg text-stone-500 font-light leading-relaxed">
                  Connecting rationality to emotion naturally. Every technical
                  choice is framed through how it makes people feel — the warmth
                  of timber underhand, the way morning light falls across the
                  kitchen, the sound of rain on the roof overhead.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-3">
                  Enchantment
                </h3>
                <p className="text-lg text-stone-500 font-light leading-relaxed">
                  Revealing the intrinsic beauty of things, awakening a deeper
                  gaze that goes beyond aesthetics. Beauty that already exists in
                  details, creating a sense of wonder and re-signification of the
                  everyday.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ── Brand phrases on bark — compact ── */}
      <section className="bg-bark text-cream">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="space-y-12">
            <FadeInOnScroll>
              <blockquote className="font-serif text-2xl md:text-3xl font-light text-cream/90 leading-relaxed text-center">
                &ldquo;The home is not just shelter, but the most sensory
                extension of who we are.&rdquo;
              </blockquote>
            </FadeInOnScroll>
            <FadeInOnScroll>
              <blockquote className="font-serif text-2xl md:text-3xl font-light text-cream/90 leading-relaxed text-center">
                &ldquo;Architecture is not just built — it&rsquo;s felt through
                every surface and silence.&rdquo;
              </blockquote>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* ── White logo on bark — closing ── */}
      <section
        className="relative bg-bark flex items-center justify-center"
        style={{ minHeight: "30vh" }}
      >
        <LogoMotion
          webmSrc="/videos/logo-white.webm"
          fallbackSrc="/images/brand/logo-white.png"
          alt="thais pupio"
          width={450}
          height={250}
          className="py-10"
        />
      </section>

      {/* ── Call to action ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-28 md:py-36 text-center">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-900 leading-snug">
              Where nature becomes architecture
            </h2>
            <p className="mt-8 text-lg text-stone-500 font-light leading-relaxed max-w-xl mx-auto">
              When design embraces the earth it becomes a home — not just for
              people, but for presence.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/projects"
                className="text-sm tracking-[0.2em] uppercase text-stone-900 border border-stone-900 px-8 py-3 hover:bg-stone-900 hover:text-white transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="text-sm tracking-[0.2em] uppercase text-stone-500 border-b border-stone-300 pb-1 hover:text-stone-800 hover:border-stone-800 transition-colors self-center"
              >
                Start a Conversation
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </main>
  );
}
