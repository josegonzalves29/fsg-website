import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CtaBand from "@/components/CtaBand";
import { categories, projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Commercial and healthcare construction projects by ${site.name} across the ${site.serviceArea}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title="Buildings that speak for themselves"
        intro={`A selection of projects we've delivered across the ${site.serviceArea}.`}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <ProjectsGrid projects={projects} categories={categories} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
