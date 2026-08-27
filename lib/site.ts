function normalizeSiteUrl(value: string | undefined): string {
  if (!value) return "http://localhost:3000";

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
  location: "Germany",
  availability: "Available for full-stack opportunities",
  lastUpdated: "2026-08-26",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
