# FS Gonzalves Construction website

Portfolio website for FS Gonzalves Construction (FSG), built with Next.js 16, React 19 and Tailwind CSS 4.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

| What | File |
| --- | --- |
| Phone, email, WhatsApp, address, socials, services, values | `src/content/site.ts` |
| Projects (portfolio) | `src/content/projects.ts` |
| Project photos | `public/projects/<project-slug>/` |
| Logo | `public/brand/fsg-logo.png` |
| Brand colours and fonts | `src/app/globals.css` (the `@theme` block) |
| Pages | `src/app/` (`page.tsx`, `projects/`, `about/`, `contact/`) |
| Shared components | `src/components/` |

## Add a new project

1. Create a folder in `public/projects/`, e.g. `public/projects/margate-beach-apartments/`.
2. Drop the photos in (JPG, ideally 1920px wide or larger). Name them `01-...jpg`, `02-...jpg` so they stay in order.
3. In `src/content/projects.ts`, copy an existing entry, paste it into the list and update the details.
4. Set `featured: true` if it should appear on the homepage. The first featured project is also the homepage hero image.

That's it. The Projects page, the project's own page, the footer and the sitemap update automatically.

## Before going live

- [ ] Fill in `phone`, `email` and `whatsapp` in `src/content/site.ts` (this also switches on the quote form)
- [ ] Confirm the services list and About page story with the business
- [ ] Set `url` in `src/content/site.ts` to the real domain
- [ ] Get higher-resolution originals of the project photos where possible
