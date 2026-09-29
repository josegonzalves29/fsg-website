import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/content/site";
import { projects } from "@/content/projects";

export default function Footer() {
  const socials = [
    { label: "Facebook", href: site.facebook },
    { label: "Instagram", href: site.instagram },
    { label: "LinkedIn", href: site.linkedin },
  ].filter((s) => s.href);

  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 md:grid-cols-12 md:gap-12 md:px-8 md:py-20">
        <div className="sm:col-span-2 md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-xl bg-white p-1.5">
              <Image src="/brand/fsg-logo.png" alt="" width={209} height={192} className="h-auto w-full" />
            </span>
            <span className="font-display text-lg font-bold leading-tight text-white">
              FS Gonzalves
              <br />
              Construction
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{site.tagline}. Building across the {site.serviceArea}.</p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Explore</h3>
          <ul className="mt-4 space-y-1 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-block py-1.5 transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Projects</h3>
          <ul className="mt-4 space-y-1 text-sm">
            {projects.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="inline-block py-1.5 transition hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Visit Us</h3>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed">
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <p>{site.address.city}</p>
            <p>{site.address.region}</p>
          </address>
          <div className="mt-4 space-y-1 text-sm">
            {site.phone && (
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="block py-1.5 hover:text-white">
                {site.phone}
              </a>
            )}
            {site.email && (
              <a href={`mailto:${site.email}`} className="block py-1.5 hover:text-white">
                {site.email}
              </a>
            )}
          </div>
          {socials.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-x-5 text-sm">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-block py-1.5 hover:text-white">
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/40 md:flex-row md:justify-between md:px-8">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.serviceArea}, South Africa</p>
        </div>
      </div>
    </footer>
  );
}
