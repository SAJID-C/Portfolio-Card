export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  focusAreas: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  description: string;
  highlights: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "ict-bangladesh",
    role: "Software Engineer & Lecturer",
    organization: "ICT Bangladesh",
    location: "Bangladesh",
    period: "Current Role",
    current: true,
    description:
      "Working across software development and technical education. Driving practical software projects, architecting backend services and databases, while delivering structured instruction in programming and modern engineering workflows.",
    focusAreas: [
      "Software development",
      "Technical education",
      "Course development",
      "Programming instruction",
      "Database systems",
      "API development",
      "Practical software projects",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "bsc-cse",
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    description:
      "Comprehensive academic grounding in computer science foundations, algorithm design, object-oriented software engineering, relational database management systems, and system architecture.",
    highlights: [
      "Software Engineering & Architecture",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
    ],
  },
];
