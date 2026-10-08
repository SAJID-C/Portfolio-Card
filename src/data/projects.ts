export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  problemSolved: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "nexora-lms",
    title: "NEXORA LMS",
    shortDescription:
      "A production-oriented LMS engineered for selling and delivering high-caliber recorded Software Engineering education.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js 14",
      "PostgreSQL",
      "SQLAlchemy 2.0",
      "Tailwind CSS",
      "Argon2 & JWT",
    ],
    problemSolved:
      "Generic LMS platforms lack strict intellectual property protection for high-value video courses, session concurrency defense, and seamless local payment verification pipelines.",
    solution:
      "Engineered an enterprise EdTech architecture combining a decoupled FastAPI REST backend and Next.js App Router client with moving dynamic video watermarks, active 2-device concurrency limits, and automated database migrations.",
    architecture:
      "Decoupled Microservice & Repository pattern. FastAPI handles JWT authentication, cryptographic session hashing, and video access logs. Next.js App Router provides server-side rendering and responsive user interfaces.",
    keyFeatures: [
      "Decoupled FastAPI backend and Next.js App Router frontend",
      "Argon2 password hashing and JWT token rotation",
      "Active multi-device session concurrency defense (Max 2 devices)",
      "Dynamic moving video watermarking with student metadata",
      "PostgreSQL with SQLAlchemy 2.0 and automated Alembic migrations",
      "Curriculum modules, lesson progress resume tracking, and audit logging",
    ],
    githubUrl: "https://github.com/SAJID-C",
    liveUrl: "https://github.com/SAJID-C",
    image: "/images/nexora-preview.jpg",
    featured: true,
  },
  {
    id: "fellowly-todo-microservice",
    title: "Fellowly Todo Microservice",
    shortDescription:
      "A backend-focused microservice project designed around task management and API-based application architecture.",
    technologies: ["C#", "ASP.NET Core", "REST API", "Database", "Entity Framework"],
    problemSolved:
      "Managing distributed task lifecycles efficiently requires low-latency API endpoints, clear separation of business rules, and atomic database transactions.",
    solution:
      "Built a modular RESTful microservice in ASP.NET Core implementing repository patterns, model validation, and structured error handling for high reliability.",
    architecture:
      "Layered REST architecture with clean separation of API controllers, service interfaces, data repositories, and relational entity models.",
    keyFeatures: [
      "RESTful API design following HTTP standards and OpenAPI specification",
      "Structured task lifecycle and status state machines",
      "Relational data persistence with connection pooling",
      "Comprehensive request validation and unified error responses",
    ],
    githubUrl: "https://github.com/SAJID-C",
    featured: true,
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    shortDescription:
      "A practical application for managing student-related information and operations.",
    technologies: ["C#", "Database", "OOP", "Application Development"],
    problemSolved:
      "Educational institutions need dependable, offline-capable systems to track student enrollment, academic records, and status updates without data inconsistency.",
    solution:
      "Developed an object-oriented C# management application with robust relational database schema mapping, input sanitization, and intuitive administration workflows.",
    architecture:
      "Desktop application architecture following strong Object-Oriented Programming (OOP) paradigms and centralized database access helpers.",
    keyFeatures: [
      "Complete student record management (CRUD operations)",
      "Relational database schemas with foreign key constraints",
      "Robust data validation preventing duplicate records",
      "Intuitive operational workflows for instructors and staff",
    ],
    githubUrl: "https://github.com/SAJID-C",
    featured: true,
  },
  {
    id: "content-management-system",
    title: "CMS (Content Management System)",
    shortDescription:
      "A content management application designed to manage structured content through a practical software workflow.",
    technologies: ["Backend", "Database", "Web Technologies", "REST API", "JavaScript"],
    problemSolved:
      "Maintaining content pipelines demands a clear administrative interface, secure authoring capabilities, and fast API delivery for client consumption.",
    solution:
      "Created a full-stack content publishing engine featuring role-based workflows, draft-to-publish lifecycles, and structured REST endpoints for rendering.",
    architecture:
      "Client-Server architecture with persistent backend storage, RESTful content endpoints, and responsive administrative dashboards.",
    keyFeatures: [
      "Structured article and page authoring with categorizations",
      "State-based publishing workflows (Draft, Scheduled, Published)",
      "Clean relational database indexing for query speed",
      "Lightweight responsive frontend interface for rapid editorial updates",
    ],
    githubUrl: "https://github.com/SAJID-C",
    featured: false,
  },
];
