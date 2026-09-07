# Suriya Haidari — Full-Stack Developer Portfolio

A modular, responsive portfolio built with React, TypeScript and Next.js. The experience includes reusable project cards, data-driven content, light and dark themes, accessible navigation, reduced-motion support and production-ready SEO.

## Run locally

Requirements: Node.js 22.13 or newer. The npm commands are compatible with Windows PowerShell, macOS and Linux.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

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
app/                  Route, metadata, sitemap, robots and manifest
components/ui/        Small components shared across features
features/about/       About section
features/capabilities/ Skills and capability cards
features/contact/     Recruiter call to action
features/hero/        First-view summary and architecture visual
features/process/     Engineering process
features/projects/    Case studies and practice-project cards
features/site-shell/  Header, footer, theme and reveal behavior
data/portfolio.ts     Portfolio content and project data
lib/site.ts           Identity, contact details and canonical URL
styles/               Design tokens, shared, section and responsive CSS
```

## Add or edit a project

Update the `projects` array in `data/portfolio.ts`. Every entry is rendered through the reusable `ProjectCard` component, so the section stays consistent without duplicated markup.

Each selected project supports:

- title, organization and category;
- role and project scope;
- summary and technical highlights;
- technology tags;
- optional live and source-code links;
- a reusable visual treatment.

Add smaller independent or learning projects to `practiceProjects`. These use a compact card so professional case studies remain the main focus.

## SEO setup

SEO is configured in `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` and the structured data in `app/page.tsx`.

On Vercel, the canonical URL is generated from `VERCEL_PROJECT_PRODUCTION_URL`. Set `NEXT_PUBLIC_SITE_URL` only when using a custom domain or when you want to override that value.

The existing `public/og.png` is used for Open Graph and X/Twitter previews.

## Personalize before launch

1. Update identity, contact details, location and availability in `lib/site.ts`.
2. Edit projects and capabilities in `data/portfolio.ts`.
3. Replace `public/og.png` if the portfolio branding changes.
4. Add a verified email or LinkedIn link to the contact section when available.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep **Framework Preset** set to **Next.js**.
4. Keep **Root Directory** as `./`, **Build Command** as `next build`, and leave **Output Directory** empty.
5. Select **Deploy**.

Vercel will build the portfolio with the native Next.js runtime. Every later push to the connected repository creates a new deployment.
