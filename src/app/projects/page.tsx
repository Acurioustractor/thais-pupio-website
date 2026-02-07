"use client";

import { useState } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900 tracking-wide">
          Projects
        </h1>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm tracking-[0.15em] uppercase pb-1 transition-colors ${
                activeCategory === cat
                  ? "text-stone-900 border-b border-stone-900"
                  : "text-stone-400 hover:text-stone-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((project) => (
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
