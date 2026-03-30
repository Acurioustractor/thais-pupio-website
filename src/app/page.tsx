import Link from "next/link";
import FullBleedImage from "@/components/ui/FullBleedImage";
import FullBleedVideo from "@/components/ui/FullBleedVideo";
import TextOverlay from "@/components/ui/TextOverlay";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import ParallaxSection from "@/components/ui/ParallaxSection";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import LogoMotion from "@/components/ui/LogoMotion";
import { philosophy } from "@/data/site";
import { projects } from "@/data/projects";

const earthenHouse = projects.find((p) => p.slug === "earthen-retreat")!;
const boatHouse = projects.find((p) => p.slug === "the-boat-house")!;
const erva = projects.find((p) => p.slug === "erva-nail-spa")!;
const byronReno = projects.find((p) => p.slug === "byron-bay-renovation")!;

export default function HomePage() {
  return (
    <main>
      {/* ── Hero — full bleed video with animated logo ── */}
      <section className="relative h-[100dvh]" style={{ minHeight: "100vh" }}>
        <FullBleedVideo src="/videos/hero-banner.mp4" />
        <div className="gradient-overlay-full absolute inset-0" />

        {/* Centered animated logo — dissolves before video ends */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none animate-[fadeIn_0.5s_ease-in_both,fadeOut_2s_ease-out_10s_both]">
          <LogoMotion
            webmSrc="/videos/logo-beige.webm"
            fallbackSrc="/images/brand/logo-beige.png"
            alt="thais pupio"
            width={500}
            height={280}
          />
          <p className="mt-6 text-sm md:text-base tracking-[0.3em] uppercase text-white/60 font-light animate-[fadeIn_1s_ease-in_3s_both]">
            Architect of Living
          </p>
        </div>

        {/* Bottom-left tagline */}
        <TextOverlay position="bottom-left">
          <p className="text-base md:text-lg lg:text-xl text-white/80 font-light max-w-xl">
            Authentic, sensory &amp; sustainable design
          </p>
        </TextOverlay>
        <ScrollIndicator />
      </section>

      {/* ── Philosophy — text scrolls up over the hero video ── */}
      <section className="relative z-10 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-32 md:py-40 text-center">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-800 leading-snug">
              {philosophy.headline}
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className="mt-8 text-lg md:text-xl text-stone-600 font-light leading-relaxed">
              {philosophy.body}
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Link
              href="/philosophy"
              className="mt-10 inline-block text-sm tracking-[0.2em] uppercase text-stone-500 border-b border-stone-300 pb-1 hover:text-stone-800 hover:border-stone-800 transition-colors"
            >
              The sensory methodology
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      {/* ── The Earthen House — parallax image with text scrolling over ── */}
      <ParallaxSection
        overlay={
          <div className="mx-auto max-w-3xl px-6 py-32 md:py-40 text-center">
            <FadeInOnScroll>
              <p className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-4">
                Featured Project
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-900">
                {earthenHouse.title}
              </h2>
              <p className="mt-4 text-lg text-stone-600 font-light">
                {earthenHouse.location} &mdash; {earthenHouse.year}
              </p>
              <p className="mt-6 text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
                {earthenHouse.description}
              </p>
              <Link
                href={`/projects/${earthenHouse.slug}`}
                className="mt-8 inline-block text-sm tracking-[0.2em] uppercase text-stone-500 border-b border-stone-300 pb-1 hover:text-stone-800 hover:border-stone-800 transition-colors"
              >
                View Project
              </Link>
            </FadeInOnScroll>
          </div>
        }
      >
        <FullBleedImage
          src={earthenHouse.thumbnail.src}
          alt={earthenHouse.thumbnail.alt}
        />
        <div className="gradient-overlay-full absolute inset-0" />
        <TextOverlay position="bottom-left">
          <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-2">
            Featured Project
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
            {earthenHouse.title}
          </h2>
        </TextOverlay>
      </ParallaxSection>

      {/* ── The Boat House — full bleed image ── */}
      <section className="relative h-[100dvh]" style={{ minHeight: "100vh" }}>
        <FullBleedImage
          src="/images/projects/the-boat-house/kitchen-island.jpg"
          alt="The Boat House — kitchen with stone column, timber island, and glass pendant lights"
        />
        <div className="gradient-overlay-bottom absolute inset-0" />
        <TextOverlay position="bottom-left">
          <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-2">
            {boatHouse.location}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
            {boatHouse.title}
          </h2>
          <Link
            href={`/projects/${boatHouse.slug}`}
            className="mt-6 inline-block text-sm tracking-[0.2em] uppercase text-white/90 border-b border-white/50 pb-1 hover:border-white transition-colors"
          >
            View Project
          </Link>
        </TextOverlay>
      </section>

      {/* ── Byron Bay Renovation — parallax ── */}
      <ParallaxSection
        overlay={
          <div className="mx-auto max-w-3xl px-6 py-32 md:py-40 text-center">
            <FadeInOnScroll>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-900">
                {byronReno.title}
              </h2>
              <p className="mt-4 text-lg text-stone-600 font-light">
                {byronReno.location} &mdash; {byronReno.year}
              </p>
              <p className="mt-6 text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
                {byronReno.description}
              </p>
              <Link
                href={`/projects/${byronReno.slug}`}
                className="mt-8 inline-block text-sm tracking-[0.2em] uppercase text-stone-500 border-b border-stone-300 pb-1 hover:text-stone-800 hover:border-stone-800 transition-colors"
              >
                View Project
              </Link>
            </FadeInOnScroll>
          </div>
        }
      >
        <FullBleedImage
          src={byronReno.thumbnail.src}
          alt={byronReno.thumbnail.alt}
        />
        <div className="gradient-overlay-full absolute inset-0" />
        <TextOverlay position="bottom-left">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
            {byronReno.title}
          </h2>
          <p className="mt-2 text-lg text-white/80 font-light">
            {byronReno.location}
          </p>
        </TextOverlay>
      </ParallaxSection>

      {/* ── Erva Nail Spa — full bleed image ── */}
      <section className="relative h-[100dvh]" style={{ minHeight: "100vh" }}>
        <FullBleedImage
          src="/images/projects/erva/reception-sign.jpg"
          alt="Erva Nail Spa — earth render reception sign with dried flowers"
        />
        <div className="gradient-overlay-bottom absolute inset-0" />
        <TextOverlay position="bottom-left">
          <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-2">
            {erva.location}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
            {erva.title}
          </h2>
          <Link
            href={`/projects/${erva.slug}`}
            className="mt-6 inline-block text-sm tracking-[0.2em] uppercase text-white/90 border-b border-white/50 pb-1 hover:border-white transition-colors"
          >
            View Project
          </Link>
        </TextOverlay>
      </section>

      {/* ── Final — call to action with tagline animation ── */}
      <ParallaxSection
        overlay={
          <div className="mx-auto max-w-3xl px-6 py-32 md:py-40 text-center">
            <FadeInOnScroll>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-stone-900 leading-snug">
                Your home should feel like you
              </h2>
              <p className="mt-6 text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
                Every meaningful space begins with a conversation &mdash; about
                how you want to live, what makes you feel at home, and the
                experiences that matter most. Let&rsquo;s start yours.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/projects"
                  className="text-sm tracking-[0.2em] uppercase text-stone-900 border border-stone-900 px-8 py-4 hover:bg-stone-900 hover:text-white transition-colors text-center"
                >
                  All Projects
                </Link>
                <Link
                  href="/contact"
                  className="text-sm tracking-[0.2em] uppercase text-stone-500 border-b-2 border-stone-300 pb-2 hover:text-stone-800 hover:border-stone-800 transition-colors self-center"
                >
                  Get in Touch
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        }
      >
        <FullBleedVideo src="/videos/tagline-animation.mp4" webmSrc="/videos/tagline-animation.webm" />
        <div className="gradient-overlay-full absolute inset-0" />
        <TextOverlay position="center">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white">
            Let&rsquo;s create something meaningful
          </h2>
        </TextOverlay>
      </ParallaxSection>
    </main>
  );
}
