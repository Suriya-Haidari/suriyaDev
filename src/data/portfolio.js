export const projects = [
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
      "Marketplace and admin operations"
    ],
    visual: "operations",
    featured: true
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
      "Relational and document data workflows"
    ],
    visual: "layers"
  },
  {
    slug: "medical-platform",
    index: "03",
    title: "Medical Platform",
    organization: "Personal project",
    category: "Healthcare web application",
    summary:
      "A full-stack healthcare portal with patient-facing services, secure accounts, notifications, department content and operational views for administrators.",
    role: "Full-stack development",
    scope: "Frontend and API integration",
    stack: ["React", "JavaScript", "Redux", "Express", "PostgreSQL"],
    highlights: [
      "Patient services, departments and responsive content flows",
      "Authentication, profiles and administrator workflows",
      "Notifications, charts and real-time integrations"
    ],
    visual: "portal",
    links: [
      { label: "Live project", href: "https://medical-frontend-peach.vercel.app" },
      { label: "Source code", href: "https://github.com/Suriya-Haidari/medical-frontend" }
    ]
  }
];

export const practiceProjects = [
  {
    slug: "invoice-dashboard",
    title: "Invoice Dashboard",
    type: "UI engineering practice",
    summary:
      "A responsive analytics dashboard with invoice status cards, charts, pagination and reusable React interface components.",
    stack: ["React", "Vite", "Tailwind CSS", "Recharts"],
    links: [
      { label: "Live demo", href: "https://dashboard-design-test.vercel.app" },
      { label: "Source", href: "https://github.com/Suriya-Haidari/DashboardDesignTest" }
    ]
  },
  {
    slug: "blog-platform",
    title: "Blog Platform",
    type: "Backend practice project",
    summary:
      "A server-rendered publishing application with post creation, editing, search, saved items, uploads and scheduled tasks.",
    stack: ["Node.js", "Express", "EJS", "Multer"],
    links: [{ label: "Source", href: "https://github.com/Suriya-Haidari/Blog" }]
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    type: "React fundamentals practice",
    summary:
      "A focused expense-entry application with reusable form, filter, list and chart components for exploring React composition.",
    stack: ["React", "JavaScript", "CSS"],
    links: [{ label: "Source", href: "https://github.com/Suriya-Haidari/expense-item" }]
  }
];

export const principles = [
  {
    index: "01",
    title: "Think in systems",
    description: "Design the complete flow, not isolated screens or endpoints."
  },
  {
    index: "02",
    title: "Keep it legible",
    description: "Readable code and predictable behavior age beautifully."
  },
  {
    index: "03",
    title: "Polish the edges",
    description: "The final ten percent is where trust is built."
  }
];

export const capabilities = [
  {
    icon: "interface",
    eyebrow: "Frontend systems",
    title: "Interfaces with rhythm.",
    description:
      "Responsive React experiences with thoughtful state, reusable components, accessibility and motion that supports the interaction.",
    skills: ["React", "JavaScript", "Vite", "Tailwind CSS", "State"],
    layout: "wide"
  },
  {
    icon: "code",
    eyebrow: "Backend engineering",
    title: "APIs that stay clear.",
    description:
      "Secure Node.js services, domain-focused REST endpoints, authentication, authorization and background processing.",
    skills: ["Node.js", "Express", "REST", "Auth"],
    layout: "dark"
  },
  {
    icon: "data",
    eyebrow: "Data and delivery",
    title: "Reliable foundations.",
    description:
      "MongoDB modeling, practical indexing, third-party integrations, testing and dependable deployment workflows.",
    skills: ["MongoDB", "SQL", "Testing", "CI"],
    layout: "default"
  },
  {
    icon: "product",
    eyebrow: "Product ownership",
    title: "Outcome over output.",
    description:
      "Connecting engineering effort to the user journey, shipping the smallest clean solution and improving it from evidence.",
    skills: ["Discover", "Build", "Learn"],
    layout: "accent"
  }
];

export const processSteps = [
  {
    index: "01",
    title: "Understand",
    description: "Map the user, constraints and success criteria before implementation."
  },
  {
    index: "02",
    title: "Architect",
    description: "Shape components, endpoints and data relationships into a coherent system."
  },
  {
    index: "03",
    title: "Build",
    description: "Ship in small, testable slices with careful feedback and failure states."
  },
  {
    index: "04",
    title: "Refine",
    description: "Remove friction and leave the product easier to understand and extend."
  }
];
