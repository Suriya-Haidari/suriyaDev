export type ProjectVisual = "operations" | "layers" | "board";

export type PortfolioProject = {
  slug: string;
  index: string;
  title: string;
  organization: string;
  category: string;
  summary: string;
  role: string;
  scope: string;
  stack: readonly string[];
  highlights: readonly string[];
  visual: ProjectVisual;
  featured?: boolean;
  link?: {
    label: string;
    href: string;
  };
};

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects: readonly PortfolioProject[] = [
  {
    slug: "pedal24",
    index: "01",
    title: "PEDAL24",
    organization: "Dream Coders",
    category: "Backend platform",
    summary:
      "A service and marketplace platform connecting cyclists with mechanics through requests, offers, booking workflows and operational tooling.",
    role: "Backend development",
    scope: "Product platform",
    stack: ["Node.js", "Express", "MongoDB", "REST APIs"],
    highlights: [
      "Service request and mechanic offer workflows",
      "Authentication, role-based access and notifications",
      "Marketplace and admin operations",
    ],
    visual: "operations",
    featured: true,
  },
  {
    slug: "mizban",
    index: "02",
    title: "Mizban",
    organization: "SkyTeams",
    category: "Full-stack web platform",
    summary:
      "A responsive web platform connecting polished React experiences to Node.js services and structured SQL and NoSQL data layers.",
    role: "Full-stack development",
    scope: "Frontend to database",
    stack: ["React", "Next.js", "Node.js", "SQL"],
    highlights: [
      "Reusable interface architecture",
      "Backend service integration",
      "Relational and document data workflows",
    ],
    visual: "layers",
  },
  {
    slug: "devboard",
    index: "03",
    title: "DevBoard",
    organization: "Open source",
    category: "Developer productivity tool",
    summary:
      "A focused Kanban workspace with drag-and-drop tasks, GitHub issue sync, code snippets, a Pomodoro timer and secure authentication.",
    role: "Product engineering",
    scope: "Open-source application",
    stack: ["React", "Express", "MongoDB", "JWT"],
    highlights: [
      "Task management and drag-and-drop interactions",
      "GitHub issue synchronization",
      "Authentication, snippets and focus tooling",
    ],
    visual: "board",
    link: {
      label: "View on GitHub",
      href: "https://github.com/Suriya-Haidari/DevBoard",
    },
  },
] as const;

export const principles = [
  {
    index: "01",
    title: "Think in systems",
    description: "Design the complete flow, not isolated screens or endpoints.",
  },
  {
    index: "02",
    title: "Keep it legible",
    description: "Readable code and predictable behavior age beautifully.",
  },
  {
    index: "03",
    title: "Polish the edges",
    description: "The final ten percent is where trust is built.",
  },
] as const;

export const capabilities = [
  {
    icon: "interface",
    eyebrow: "Frontend systems",
    title: "Interfaces with rhythm.",
    description:
      "Responsive React experiences with thoughtful state, reusable components, accessibility and motion that supports the interaction.",
    skills: ["React", "TypeScript", "Next.js", "CSS", "State"],
    className: "capability-card--wide",
  },
  {
    icon: "code",
    eyebrow: "Backend engineering",
    title: "APIs that stay clear.",
    description:
      "Secure Node.js services, domain-focused REST endpoints, authentication, authorization and background processing.",
    skills: ["Node.js", "Express", "REST", "Auth"],
    className: "capability-card--dark",
  },
  {
    icon: "data",
    eyebrow: "Data & delivery",
    title: "Reliable foundations.",
    description:
      "MongoDB modeling, practical indexing, third-party integrations, testing and dependable deployment workflows.",
    skills: ["MongoDB", "SQL", "Testing", "CI"],
    className: "",
  },
  {
    icon: "product",
    eyebrow: "Product ownership",
    title: "Outcome over output.",
    description:
      "Connecting engineering effort to the user journey, shipping the smallest clean solution and improving it from evidence.",
    skills: ["Discover", "Build", "Learn"],
    className: "capability-card--wide capability-card--accent",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Understand",
    description: "Map the user, constraints and success criteria before implementation.",
  },
  {
    index: "02",
    title: "Architect",
    description: "Shape components, endpoints and data relationships into a coherent system.",
  },
  {
    index: "03",
    title: "Build",
    description: "Ship in small, testable slices with careful feedback and failure states.",
  },
  {
    index: "04",
    title: "Refine",
    description: "Remove friction and leave the product easier to understand and extend.",
  },
] as const;
