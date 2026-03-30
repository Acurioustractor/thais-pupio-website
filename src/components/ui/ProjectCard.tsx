import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
        <Image
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Text overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="text-sm tracking-[0.15em] uppercase text-white/60 mb-2">
            {project.location} — {project.year}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-white tracking-wide">
            {project.title}
          </h3>
          <p className="mt-3 text-sm md:text-base text-white/80 font-light leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
