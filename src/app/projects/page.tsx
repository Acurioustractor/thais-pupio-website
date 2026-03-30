import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Residential, renovation, and commercial projects by Thais Pupio Design — architecture grounded in neuroscience, sustainability, and the art of feeling at home.",
};

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-white pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900 tracking-wide">
            Projects
          </h1>

          {/* Project grid — larger tiles, 2 columns */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project) => (
              <FadeInOnScroll key={project.slug}>
                <ProjectCard project={project} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
