const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();

export const siteConfig = {
  name: "Suriya Haidari",
  initials: "SH",
  role: "Full-Stack Web Developer",
  title: "Suriya Haidari — Full-Stack Web Developer",
  description:
    "Full-stack web developer building clear interfaces, reliable services and practical product systems.",
  url: (configuredUrl || "https://suriya-dev.vercel.app").replace(/\/$/, ""),
  github: "https://github.com/Suriya-Haidari",
  linkedin: "https://linkedin.com/in/suriya-haidari",
  email: "soriahaidary17@gmail.com",
  emailHref: "mailto:soriahaidary17@gmail.com?subject=Full-stack%20opportunity",
  location: "Afghanistan",
  experience: "Nearly 2 years",
  workStyle: "Remote collaboration",
  availability: "Open to remote full-stack roles"
};
