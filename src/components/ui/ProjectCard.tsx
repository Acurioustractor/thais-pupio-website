import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        <Image
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-light tracking-wide text-stone-900">
          {project.title}
        </h3>
        <p className="text-sm text-stone-500">
          {project.location} — {project.year}
        </p>
      </div>
    </Link>
  );
}
