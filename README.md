# Suriya Haidari — React Portfolio

A recruiter-focused portfolio built with React, Vite, JavaScript JSX, React Router and Tailwind CSS.

The project intentionally uses `.jsx` instead of TypeScript. Every portfolio section has its own feature folder, navigation and routing are separated, and styling lives in Tailwind utility classes rather than traditional section-specific CSS selectors.

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

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/config/site.js`

## Deploy on Vercel

Import the repository into Vercel and use these settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` keeps React Router URLs working after page refreshes.
