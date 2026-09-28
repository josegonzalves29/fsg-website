import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type Props = {
  project: Project;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

export default function ProjectCard({ project, className = "", sizes = "(min-width: 768px) 50vw, 100vw", preload }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-ink-3 ${className}`}
    >
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">{project.title}</h3>
          <p className="mt-1 text-sm text-white/70">{project.location}</p>
        </div>
        <span
          aria-hidden="true"
          className="grid size-12 shrink-0 translate-y-2 place-items-center rounded-full bg-brand text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          &rarr;
        </span>
      </div>
    </Link>
  );
}
