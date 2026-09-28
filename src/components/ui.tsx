import Link from "next/link";
import type { ReactNode } from "react";

/** Roof-line chevron taken from the FSG logo, used as a small brand accent. */
export function RoofMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 16" fill="none" aria-hidden="true" className={className}>
      <path d="M2 14 L20 2 L38 14" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
    </svg>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] ${
        tone === "light" ? "text-white/60" : "text-steel"
      }`}
    >
      <RoofMark className="h-3 w-8 text-brand-light" />
      {children}
    </p>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost-light" | "ghost-dark" | "white";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const styles = {
    primary: "bg-brand text-white hover:bg-brand-light",
    white: "bg-white text-ink hover:bg-paper-2",
    "ghost-light": "border border-white/30 text-white hover:border-white hover:bg-white/10",
    "ghost-dark": "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 ${styles} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}
