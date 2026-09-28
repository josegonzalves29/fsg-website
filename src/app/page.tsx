import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import CtaBand from "@/components/CtaBand";
import { Button, Eyebrow, RoofMark } from "@/components/ui";
import { featuredProjects, projects } from "@/content/projects";
import { process, services, site } from "@/content/site";

export default function Home() {
  const [lead, ...rest] = featuredProjects;
  const heroImage = lead?.cover ?? projects[0].cover;

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          preload
          sizes="100vw"
          className="-z-20 animate-slow-zoom object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
          <Reveal>
            <Eyebrow tone="light">
              Port Shepstone &middot; {site.serviceArea}
            </Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.25rem,9.5vw,7.5rem)] font-black uppercase leading-[0.9] tracking-tight">
              Passion for <span className="text-brand-light">Quality</span> Workmanship
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
              {site.name} builds commercial and healthcare spaces across the {site.serviceArea}, finished with the
              care of a family business.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">View Our Projects</Button>
            <Button href="/contact" variant="ghost-light">
              Request a Quote
            </Button>
          </Reveal>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50 md:flex">
          <span>Scroll</span>
          <span className="h-12 w-px animate-pulse bg-white/40" />
        </div>
      </section>

      {/* ---------- INTRO ---------- */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-12 md:gap-16 md:px-8 md:py-32">
          <div className="md:col-span-6">
            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
                Built by family. Trusted on the South Coast.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-lg leading-relaxed text-ink/70">
                We&apos;re a family-run construction company based in Marburg, Port Shepstone. From motor dealerships
                to hospitals, we deliver buildings that are planned carefully, built properly and made to last.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10">
              <Button href="/about" variant="ghost-dark">
                More About Us
              </Button>
            </Reveal>
          </div>
          <Reveal delay={150} className="md:col-span-6">
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/projects/fsg-head-office/01-exterior.jpg"
                  alt="FS Gonzalves Construction head office in Marburg"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute -bottom-6 left-6 rounded-xl bg-ink px-5 py-4 text-sm text-white shadow-2xl md:-left-8">
                <span className="block font-display text-base font-bold">Our Head Office</span>
                <span className="text-white/60">
                  {site.address.line1}, {site.address.line2}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className="bg-blueprint relative bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <Eyebrow tone="light">Selected work</Eyebrow>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
                Projects we&apos;re proud of
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Button href="/projects" variant="ghost-light">
                All Projects
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-6">
            {lead && (
              <Reveal className="md:row-span-2">
                <ProjectCard project={lead} className="aspect-[4/5] md:aspect-auto md:h-full md:min-h-[640px]" />
              </Reveal>
            )}
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i + 1) * 120}>
                <ProjectCard project={p} className="aspect-[4/3] md:aspect-[16/10]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              From groundworks to the final finish
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-ink">
                <span className="font-display text-sm font-bold text-brand transition-colors group-hover:text-brand-light">
                  0{i + 1}
                </span>
                <h3 className="mt-10 font-display text-2xl font-bold transition-colors group-hover:text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/65 transition-colors group-hover:text-white/65">{s.body}</p>
                <RoofMark className="absolute right-8 top-8 h-3 w-8 text-ink/15 transition-colors group-hover:text-brand-light" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-5xl">
              A clear process, start to finish
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 100} className="relative border-t-2 border-ink/15 pt-6">
                <span className="absolute -top-0.5 left-0 h-0.5 w-12 bg-brand" />
                <span className="font-display text-5xl font-black text-ink/10">{p.step}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{p.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200} className="mt-14">
            <p className="text-ink/60">
              Ready to start?{" "}
              <Link href="/contact" className="font-semibold text-brand underline-offset-4 hover:underline">
                Get in touch for a quote
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
