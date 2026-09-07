# Suriya Haidari — React Portfolio

A modular, responsive portfolio built with React, TypeScript and Next.js. The experience includes reusable project cards, data-driven content, light and dark themes, accessible navigation, reduced-motion support and production-ready SEO.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production checks

```bash
npm run build
npm test
```

## Folder structure

```text
root/
├── public/                       Static SEO and brand assets
├── src/
│   ├── components/ui/            Shared buttons, icons and headings
│   ├── config/                   Portfolio identity and contact links
│   ├── data/                     Project and capability content
│   ├── features/
│   │   ├── about/                About section
│   │   ├── capabilities/         Skills section
│   │   ├── contact/              Contact call to action
│   │   ├── hero/                 Hero and architecture visual
│   │   ├── process/              Engineering process
│   │   └── projects/             Selected and practice projects
│   ├── layout/
│   │   ├── Footer/               Site footer
│   │   ├── Navbar/               Navbar, links and theme toggle
│   │   └── RevealObserver.jsx    Shared reveal behavior
│   ├── pages/                    Routed page components
│   ├── routes/                   React Router configuration and paths
│   ├── App.jsx                   Application root
│   ├── index.css                 Tailwind import, theme tokens and keyframes
│   └── main.jsx                  React entry point
├── index.html                    SEO metadata and Vite entry document
├── package.json
└── vite.config.js
```

## Edit portfolio content

- Update contact information in `src/config/site.js`.
- Update projects, skills and process content in `src/data/portfolio.js`.
- Add a new section inside `src/features/<section-name>/` and render it from `src/pages/Home/HomePage.jsx`.
- Update navbar links in `src/layout/Navbar/navigation.js`.
- Add page routes in `src/routes/AppRoutes.jsx` and route constants in `src/routes/paths.js`.

## Styling

Components use Tailwind utility classes directly in JSX. `src/index.css` contains only the Tailwind import, shared light/dark design tokens, base browser behavior and animation keyframes.

## SEO

SEO metadata and structured data are in `index.html`. Crawl files and the web manifest are in `public/`. If the domain changes, update the production URLs in:

SEO is configured in `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` and the structured data in `app/page.tsx`.

On Vercel, the canonical URL is generated from `VERCEL_PROJECT_PRODUCTION_URL`. Set `NEXT_PUBLIC_SITE_URL` only when using a custom domain or when you want to override that value.

The existing `public/og.png` is used for Open Graph and X/Twitter previews.

## Personalize before launch

1. Update identity, contact details, location and availability in `lib/site.ts`.
2. Edit projects and capabilities in `data/portfolio.ts`.
3. Replace `public/og.png` if the portfolio branding changes.
4. Add a verified email or LinkedIn link to the contact section when available.

## Deploy on Vercel

Import the repository into Vercel and use these settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` keeps React Router URLs working after page refreshes.
