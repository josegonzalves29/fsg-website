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

  // While the mobile menu is open: lock page scroll, close on Escape,
  // and close automatically if the screen grows to desktop width.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex flex-col transition-[background-color,padding,box-shadow] duration-500 ${
        open
          ? "h-[100svh] overflow-y-auto bg-ink py-3"
          : scrolled
            ? "bg-ink/85 py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
            : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={`${site.name} home`}>
          <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white p-1 shadow-lg transition-transform duration-300 group-hover:-rotate-3">
            <Image src="/brand/fsg-logo.png" alt="" width={209} height={192} className="h-auto w-full" preload />
          </span>
          <span className="leading-tight text-white">
            <span className="block font-display text-lg font-extrabold tracking-wide">FSG</span>
            <span className="block truncate text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
              Gonzalves Construction
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
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
            className="ml-4 whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-light"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative grid size-11 shrink-0 place-items-center rounded-full text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`absolute h-0.5 w-6 bg-current transition ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-0.5 w-6 bg-current transition ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mx-auto w-full max-w-7xl flex-1 px-5 md:px-8 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1 pb-10 pt-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block border-b border-white/10 py-4 font-display text-2xl font-bold sm:text-3xl ${
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
          <address className="border-t border-white/10 pt-6 text-sm not-italic leading-relaxed text-white/50">
            {site.address.line1}, {site.address.line2}
            <br />
            {site.address.city}
          </address>
        </nav>
      )}
    </header>
  );
}
