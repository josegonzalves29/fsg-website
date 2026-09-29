import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: { src: string; alt: string };
  children?: ReactNode;
};

/** Dark banner used at the top of inner pages. */
export default function PageHero({ eyebrow, title, intro, image, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-14 pt-32 text-white md:pb-24 md:pt-44">
      {image ? (
        <>
          <Image src={image.src} alt={image.alt} fill preload sizes="100vw" className="-z-20 animate-slow-zoom object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </>
      ) : (
        <div className="bg-blueprint absolute inset-0 -z-10" />
      )}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.25rem,9vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight">
          {title}
        </h1>
        {intro && <div className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{intro}</div>}
        {children}
      </div>
    </section>
  );
}
