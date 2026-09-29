"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

/**
 * Quote request form. There's no backend yet, so on submit it opens the
 * visitor's email app (or WhatsApp) with the message pre-filled.
 * Later this can be swapped for a proper form service.
 */
export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  const canEmail = Boolean(site.email);
  const canWhatsApp = Boolean(site.whatsapp);

  if (!canEmail && !canWhatsApp) {
    if (process.env.NODE_ENV !== "development") {
      return (
        <p className="text-lg leading-relaxed text-ink/70">
          Online quote requests are coming soon. In the meantime, you&apos;re welcome to visit us at our office.
        </p>
      );
    }
    return (
      <p className="rounded-xl border border-dashed border-ink/25 p-6 text-sm text-ink/60">
        Developer note: add an email or WhatsApp number in <code>src/content/site.ts</code> to switch on the quote
        form. This note only shows in development.
      </p>
    );
  }

  function buildMessage(form: HTMLFormElement) {
    const d = new FormData(form);
    return [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      `Project type: ${d.get("type")}`,
      `Location: ${d.get("location")}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const body = buildMessage(e.currentTarget);
    if (submitter?.value === "whatsapp" && canWhatsApp) {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(body)}`, "_blank");
    } else if (canEmail) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(body)}`;
    }
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-ink/35 focus:border-brand focus:ring-4 focus:ring-brand/10";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium">
        Name
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Phone
        <input name="phone" type="tel" required autoComplete="tel" className={field} placeholder="Your number" />
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        Email
        <input name="email" type="email" autoComplete="email" className={field} placeholder="you@example.com" />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Project type
        <select name="type" className={field} defaultValue="Commercial">
          <option>Commercial</option>
          <option>Healthcare</option>
          <option>Residential</option>
          <option>Renovation / Extension</option>
          <option>Other</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Site location
        <input name="location" className={field} placeholder="e.g. Port Shepstone" />
      </label>
      <label className="grid gap-2 text-sm font-medium sm:col-span-2">
        Tell us about your project
        <textarea name="message" required rows={5} className={field} placeholder="What would you like to build?" />
      </label>
      <div className="flex flex-wrap gap-3 pt-2 sm:col-span-2">
        {canEmail && (
          <button type="submit" value="email" className="w-full rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-light sm:w-auto">
            Send by Email
          </button>
        )}
        {canWhatsApp && (
          <button type="submit" value="whatsapp" className="w-full rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-ink-3 sm:w-auto">
            Send via WhatsApp
          </button>
        )}
      </div>
      {sent && (
        <p className="text-sm text-ink/60 sm:col-span-2" role="status">
          Your message has been prepared. Just press send in your email app or WhatsApp.
        </p>
      )}
    </form>
  );
}
