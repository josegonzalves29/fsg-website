import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { services, site, values } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} is a family-run construction company based in Marburg, Port Shepstone.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A family business, built on quality"
        intro="Based in Marburg, Port Shepstone, and building across the KZN South Coast."
        image={{ src: "/projects/fsg-head-office/01-exterior.jpg", alt: "FSG head office" }}
      />

      {/* Story */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
          <Reveal className="md:col-span-5">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-5xl">
              Craftsmanship you can see in every building
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-6 text-lg leading-relaxed text-ink/70 md:col-span-6 md:col-start-7">
            {/* TODO: replace with the real company history once confirmed with the family. */}
            <p>
              {site.name} is a family-run construction company based in Marburg, Port Shepstone. We build commercial
              and healthcare spaces across the {site.serviceArea}, from motor dealerships to hospitals.
            </p>
            <p>
              Our own head office on Indus Road shows what we care about: honest materials, careful detailing and a
              finish that lasts. We bring that same standard to every project, whatever its size.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-blueprint bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <Eyebrow tone="light">What we stand for</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              Our values
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <span className="font-display text-sm font-bold text-brand-light">0{i + 1}</span>
                <h3 className="mt-8 font-display text-2xl font-bold">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image + services */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/projects/hibiscus-hospital/04-reception-lounge.jpg"
                alt="Reception area at Hibiscus Hospital"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-5xl">
              Services
            </h2>
            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {services.map((s) => (
                <li key={s.title} className="py-5">
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 text-ink/65">{s.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
