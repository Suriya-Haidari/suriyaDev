const canonicalFallback = "https://suriya-dev.vercel.app";

function normalizeSiteUrl(value: string | undefined): string {
  if (!value) return canonicalFallback;

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, "");
}

const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

export const siteConfig = {
  name: "Suriya Haidari",
  role: "Full-Stack Web Developer",
  title: "Suriya Haidari — Full-Stack Web Developer",
  description:
    "Portfolio of Suriya Haidari, a full-stack web developer building clear, reliable products with React, Node.js, TypeScript and MongoDB.",
  shortDescription:
    "Full-stack web developer building clear interfaces, reliable services and practical product systems.",
  url: normalizeSiteUrl(deploymentUrl),
  github: "https://github.com/Suriya-Haidari",
  linkedin: "https://linkedin.com/in/suriya-haidari",
  email: "soriahaidary17@gmail.com",
  emailHref: "mailto:soriahaidary17@gmail.com?subject=Full-stack%20opportunity",
  location: "Afghanistan",
  experience: "Nearly 2 years",
  workStyle: "Remote collaboration",
  availability: "Open to remote full-stack roles",
  lastUpdated: "2026-09-05",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
