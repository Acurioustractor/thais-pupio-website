import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import ScrollSnapContainer from "@/components/ui/ScrollSnapContainer";
import ScrollSnapSection from "@/components/ui/ScrollSnapSection";
import FullBleedImage from "@/components/ui/FullBleedImage";
import TextOverlay from "@/components/ui/TextOverlay";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <ScrollSnapContainer>
      {project.sections.map((section, i) => {
        switch (section.type) {
          case "hero":
            return (
              <ScrollSnapSection key={i}>
                <FullBleedImage
                  src={section.image!.src}
                  alt={section.image!.alt}
                  priority
                />
                <div className="gradient-overlay-bottom absolute inset-0" />
                <TextOverlay position="bottom-left">
                  <p className="text-sm tracking-[0.2em] uppercase text-white/70 mb-2">
                    {project.location} — {project.year}
                  </p>
                  <h1 className="font-serif text-4xl md:text-6xl font-light text-white tracking-wide">
                    {project.title}
                  </h1>
                </TextOverlay>
                <ScrollIndicator />
              </ScrollSnapSection>
            );

          case "text":
            return (
              <ScrollSnapSection
                key={i}
                className="flex items-center justify-center bg-white"
              >
                <div className="mx-auto max-w-3xl px-6 text-center">
                  {section.heading && (
                    <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-800 mb-8">
                      {section.heading}
                    </h2>
                  )}
                  <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
                    {section.body}
                  </p>
                </div>
              </ScrollSnapSection>
            );

          case "image":
            return (
              <ScrollSnapSection key={i}>
                <FullBleedImage
                  src={section.image!.src}
                  alt={section.image!.alt}
                />
              </ScrollSnapSection>
            );

          case "image-pair":
            return (
              <ScrollSnapSection key={i} className="flex">
                <div className="relative w-1/2">
                  <Image
                    src={section.images![0].src}
                    alt={section.images![0].alt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-1/2">
                  <Image
                    src={section.images![1].src}
                    alt={section.images![1].alt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
              </ScrollSnapSection>
            );

          case "credits":
            return (
              <ScrollSnapSection
                key={i}
                className="flex items-center justify-center bg-stone-50"
              >
                <div className="mx-auto max-w-2xl px-6 text-center">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-800 mb-10">
                    Credits
                  </h2>
                  <div className="space-y-4">
                    {section.credits!.map((credit, j) => (
                      <div key={j}>
                        <p className="text-sm tracking-[0.15em] uppercase text-stone-400">
                          {credit.role}
                        </p>
                        <p className="text-lg text-stone-700 font-light">
                          {credit.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollSnapSection>
            );

          default:
            return null;
        }
      })}
    </ScrollSnapContainer>
  );
}
