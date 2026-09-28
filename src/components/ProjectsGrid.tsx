"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/content/projects";

export default function ProjectsGrid({ projects, categories }: { projects: Project[]; categories: string[] }) {
  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === c ? "bg-ink text-white" : "bg-white text-ink/70 ring-1 ring-ink/10 hover:text-ink hover:ring-ink/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} preload={i < 2} className="aspect-[4/3]" />
        ))}
      </div>
    </>
  );
}
