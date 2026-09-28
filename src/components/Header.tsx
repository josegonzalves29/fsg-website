"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ink/85 py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
          <span className="grid size-11 place-items-center rounded-lg bg-white p-1 shadow-lg transition-transform duration-300 group-hover:-rotate-3">
            <Image src="/brand/fsg-logo.png" alt="" width={209} height={192} className="h-auto w-full" preload />
          </span>
          <span className="leading-tight text-white">
            <span className="block font-display text-lg font-extrabold tracking-wide">FSG</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
              Gonzalves Construction
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-white" : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left bg-brand-light transition-transform duration-300 ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-light"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative grid size-11 place-items-center rounded-full text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`absolute h-0.5 w-6 bg-current transition ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-0.5 w-6 bg-current transition ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden transition-all duration-500 md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="min-h-0 px-5" aria-label="Mobile">
          <ul className="flex flex-col gap-1 pb-6 pt-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block border-b border-white/10 py-4 font-display text-2xl font-bold ${
                    isActive(item.href) ? "text-white" : "text-white/60"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                className="block rounded-full bg-brand py-4 text-center font-semibold text-white"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
