export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    description: "Core languages used for backend logic, algorithms, and application engineering.",
    skills: ["C#", "Python", "C++"],
  },
  {
    category: "Backend",
    description: "Architecting reliable, asynchronous server-side platforms and microservices.",
    skills: ["ASP.NET Core", "ASP.NET MVC", "FastAPI", "REST APIs"],
  },
  {
    category: "Database",
    description: "Relational data modeling, query optimization, normalization, and migrations.",
    skills: ["PostgreSQL", "SQL Server", "MySQL"],
  },
  {
    category: "Web",
    description: "Building responsive, semantic, and modern client-side user interfaces.",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    category: "Engineering",
    description: "Foundational software principles for scalable and maintainable architectures.",
    skills: ["OOP", "Software Engineering", "API Development", "Database Design"],
  },
  {
    category: "Tools",
    description: "Industry-standard developer environments, version control, and API testing tools.",
    skills: [
      "Git",
      "GitHub",
      "Swagger",
      "Postman",
      "Visual Studio",
      "PyCharm",
      "VS Code",
    ],
  },
];
