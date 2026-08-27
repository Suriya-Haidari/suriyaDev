export const siteConfig = {
  name: "Suriya Haidari",
  role: "Full-Stack Web Developer",
  title: "Suriya Haidari — Full-Stack Web Developer",
  description:
    "Portfolio of Suriya Haidari, a full-stack web developer building clear, reliable products with React, Node.js, TypeScript and MongoDB.",
  shortDescription:
    "Full-stack web developer building clear interfaces, reliable services and practical product systems.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://suriya-haidari-portfolio.pedal24.chatgpt.site",
  github: "https://github.com/Suriya-Haidari",
  location: "Germany",
  availability: "Available for full-stack opportunities",
  lastUpdated: "2026-08-26",
} as const;

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
