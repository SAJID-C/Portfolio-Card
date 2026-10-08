export interface TeachingTopic {
  title: string;
  description: string;
  iconName: string;
}

export interface PhilosophyStep {
  step: string;
  title: string;
  description: string;
}

export interface AICard {
  title: string;
  description: string;
  highlight: string;
}

export const teachingData = {
  title: "Teaching Technology",
  subtitle: "Helping learners move from concepts to real software.",
  description:
    "Md Sajid Chowdhury teaches practical software development with a rigorous focus on fundamentals, industry workflows, and real-world application building.",
  topics: [
    {
      title: "Programming",
      description: "Core syntax, data types, control flow, and computational thinking.",
      iconName: "Code",
    },
    {
      title: "Software Engineering",
      description: "Clean architecture, SOLID principles, design patterns, and code structure.",
      iconName: "Layers",
    },
    {
      title: "Database Management",
      description: "Relational schema design, normalization, indexing, and SQL queries.",
      iconName: "Database",
    },
    {
      title: "API Development",
      description: "RESTful architecture, status codes, payload validation, and documentation.",
      iconName: "Network",
    },
    {
      title: "Web Development",
      description: "Semantic HTML, modern CSS, component architectures, and responsive design.",
      iconName: "Globe",
    },
    {
      title: "AI-Assisted Development",
      description: "Utilizing modern AI tooling for scaffolding, refactoring, and code review.",
      iconName: "Cpu",
    },
    {
      title: "Problem Solving",
      description: "Algorithmic thinking, structured debugging, and diagnostic problem isolation.",
      iconName: "Terminal",
    },
  ],
  featuredCourse: {
    title: "Professional AI Software Engineering",
    badge: "Flagship Curriculum",
    description:
      "An industry-oriented learning experience focused on software engineering fundamentals, practical development and AI-assisted engineering workflows.",
    focusPoints: [
      "Software engineering fundamentals and clean code",
      "Backend API architecture and relational databases",
      "AI-assisted development and prompt contextualization",
      "Production-ready deployment practices",
    ],
    ctaText: "Explore Course",
    ctaLink: "#contact",
  },
  philosophySteps: [
    {
      step: "01",
      title: "Learn",
      description: "Understand the concept clearly through intuitive explanations and mental models.",
    },
    {
      step: "02",
      title: "Practice",
      description: "Apply it through hands-on exercises, isolated experiments, and targeted katas.",
    },
    {
      step: "03",
      title: "Build",
      description: "Turn knowledge into real projects that solve genuine technical problems.",
    },
    {
      step: "04",
      title: "Improve",
      description: "Use feedback, debugging, profiling, and modern development tools to improve continuously.",
    },
  ],
  aiSection: {
    title: "Engineering in the AI Era",
    statement:
      "AI is changing how software is designed, developed and learned. My focus is on using AI as an engineering tool—not as a replacement for engineering fundamentals.",
    cards: [
      {
        title: "AI-Assisted Development",
        description:
          "Leveraging AI for boilerplate generation, test scaffolding, and code refactoring while maintaining deep human oversight of logic and architecture.",
        highlight: "Velocity with Verification",
      },
      {
        title: "Context & Prompt Engineering",
        description:
          "Formulating clear technical specifications, system boundaries, and explicit constraints to guide generative models reliably.",
        highlight: "Precision Specification",
      },
      {
        title: "AI-Powered Learning",
        description:
          "Guiding students to utilize AI as an on-demand technical tutor to explain error stack traces, explore trade-offs, and accelerate comprehension.",
        highlight: "Accelerated Mentorship",
      },
    ],
  },
  careerPhilosophy: {
    statement: "Technology should be understood, not just used.",
    supportingText:
      "I believe strong software engineers are built through fundamentals, consistent practice, problem solving and real-world projects. AI can accelerate the process, but engineering judgment remains essential.",
  },
};
