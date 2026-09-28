import { Button, RoofMark } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <RoofMark className="pointer-events-none absolute -right-20 -top-10 w-[36rem] text-white/[0.07]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-24">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.05] md:text-5xl">
            Have a project in mind? Let&apos;s build it properly.
          </h2>
          <p className="mt-4 max-w-xl text-white/75">
            Tell us about your site and what you need. We&apos;ll get back to you to talk it through.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <Button href="/contact" variant="white">
            Request a Quote
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
