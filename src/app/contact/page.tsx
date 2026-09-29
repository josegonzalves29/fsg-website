import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Quotes",
  description: `Request a quote from ${site.name}. Visit us at ${site.address.line1}, ${site.address.line2}, ${site.address.city}.`,
};

export default function ContactPage() {
  const addressLine = `${site.address.line1}, ${site.address.line2}, ${site.address.city}`;
  const mapQuery = encodeURIComponent(`${addressLine}, ${site.address.region}, South Africa`);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        intro="Tell us what you're planning and we'll get back to you."
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:gap-16 md:px-8 md:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Request a quote</Eyebrow>
            <h2 className="mb-10 mt-6 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Send us the details
            </h2>
            <QuoteForm />
          </Reveal>

          <Reveal delay={100} className="space-y-10 lg:col-span-4 lg:col-start-9">
            <div>
              <Eyebrow>Visit us</Eyebrow>
              <address className="mt-5 font-display text-2xl font-bold not-italic leading-snug">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block py-2 text-sm font-semibold text-brand underline-offset-4 hover:underline"
              >
                Get directions &rarr;
              </a>
            </div>

            {(site.phone || site.email || site.whatsapp) && (
              <div>
                <Eyebrow>Call or message</Eyebrow>
                <div className="mt-5 space-y-2 text-lg">
                  {site.phone && (
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block py-1 font-semibold hover:text-brand">
                      {site.phone}
                    </a>
                  )}
                  {site.email && (
                    <a href={`mailto:${site.email}`} className="block break-words py-1 hover:text-brand">
                      {site.email}
                    </a>
                  )}
                  {site.whatsapp && (
                    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="block break-words py-1 hover:text-brand">
                      WhatsApp us
                    </a>
                  )}
                </div>
              </div>
            )}
          </Reveal>
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <div className="overflow-hidden rounded-2xl border border-ink/10 grayscale-[0.6]">
            <iframe
              title={`Map showing ${addressLine}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[320px] w-full sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
