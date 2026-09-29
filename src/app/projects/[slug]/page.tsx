import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { getProject, projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.summary} ${project.location}.`,
    openGraph: { images: [project.cover.src] },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];

  const facts = [
    { label: "Location", value: project.location },
    { label: "Sector", value: project.category },
    ...(project.year ? [{ label: "Completed", value: project.year }] : []),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-ink text-white md:min-h-[85svh]">
        <Image src={project.cover.src} alt={project.cover.alt} fill preload sizes="100vw" className="-z-20 animate-slow-zoom object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-40 md:px-8 md:pb-20">
          <Link href="/projects" className="-my-2 inline-block py-2 text-sm text-white/60 transition hover:text-white">
            &larr; All projects
          </Link>
          <div className="mt-6">
            <Eyebrow tone="light">{project.category}</Eyebrow>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.25rem,11vw,6rem)] font-black uppercase leading-[0.92] tracking-tight [overflow-wrap:anywhere]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Details */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:gap-12 md:px-8 md:py-24">
          <Reveal className="md:col-span-4">
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-6 py-4">
                  <dt className="text-sm text-ink/50">{f.label}</dt>
                  <dd className="text-right text-sm font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={100} className="md:col-span-7 md:col-start-6">
            <p className="font-display text-2xl font-bold leading-snug md:text-3xl">{project.summary}</p>
            {project.description?.map((para) => (
              <p key={para} className="mt-6 text-lg leading-relaxed text-ink/70">
                {para}
              </p>
            ))}
            {project.note && <p className="mt-8 border-l-2 border-brand pl-4 text-sm text-ink/55">{project.note}</p>}
          </Reveal>
        </div>

        {project.images.length > 1 && (
          <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
            <Reveal>
              <Gallery images={project.images} />
            </Reveal>
          </div>
        )}
      </section>

      {/* Next project */}
      {next && next.slug !== project.slug && (
        <Link href={`/projects/${next.slug}`} className="group relative isolate block overflow-hidden bg-ink text-white">
          <Image src={next.cover.src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-60" />
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-20 md:px-8 md:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Next project</p>
              <p className="mt-3 font-display text-3xl font-black uppercase sm:text-4xl md:text-6xl">{next.title}</p>
            </div>
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brand text-xl transition-transform duration-300 group-hover:translate-x-2 md:size-20">
              &rarr;
            </span>
          </div>
        </Link>
      )}

      <CtaBand />
    </>
  );
}
