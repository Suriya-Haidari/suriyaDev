# Suriya Haidari — Full-Stack Developer Portfolio

A modular, responsive portfolio built with React, TypeScript, Next.js-compatible APIs and Vinext. The experience includes reusable project cards, data-driven content, light and dark themes, accessible navigation, reduced-motion support and production-ready SEO.

## Run locally

Requirements: Node.js 22.13 or newer. The npm commands are compatible with Windows PowerShell, macOS and Linux.

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

The local Cloudflare runtime uses built-in placeholder request metadata, so development does not depend on Cloudflare&apos;s metadata endpoint or an external network request.

## Production checks

```bash
npm run lint
npm run test
```

To run the built application:

```bash
npm run build
npm run start
```

## Project structure

```text
app/                  Routes, metadata, sitemap, robots and manifest
components/portfolio/ Reusable portfolio sections and project components
components/ui/        Small shared interface primitives
data/portfolio.ts     Projects, capabilities, principles and process content
lib/site.ts           Site identity, canonical URL and social links
styles/               Design tokens, base styles, sections and responsive rules
```

## Add or edit a project

Update the `projects` array in `data/portfolio.ts`. Every entry is rendered through the reusable `ProjectCard` component, so the section stays consistent without duplicating markup.

Each project supports:

- title, organization and category;
- role and project scope;
- summary and technical highlights;
- technology tags;
- an optional external link;
- a reusable visual treatment.

## SEO setup

SEO is configured in `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` and the structured data in `app/page.tsx`.

Set `NEXT_PUBLIC_SITE_URL` to the final production origin when deploying on another domain. If it is not set, the current portfolio URL in `lib/site.ts` is used.

The existing `public/og.png` is used for Open Graph and X/Twitter previews.

## Personalize before launch

1. Update identity, location, availability and GitHub URL in `lib/site.ts`.
2. Edit projects and capabilities in `data/portfolio.ts`.
3. Replace `public/og.png` if the portfolio branding changes.
4. Add a verified email or LinkedIn link to the contact section when available.
