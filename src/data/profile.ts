export interface ProfileConfig {
  name: string;
  brandName: string;
  role: string;
  education: string;
  location: string;
  tagline: string;
  heroHeading: string;
  heroBio: string;
  aboutPrimaryEn: string;
  aboutBn: string;
  avatar: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  highlights: string[];
}

export const profileData: ProfileConfig = {
  name: "Md Sajid Chowdhury",
  brandName: "MD SAJID CHOWDHURY",
  role: "Software Engineer & Lecturer",
  education: "BSc in Computer Science & Engineering",
  location: "Bangladesh",
  tagline: "Building software. Teaching technology. Exploring AI-powered engineering.",
  heroHeading: "I build software and teach the skills behind it.",
  heroBio:
    "Md Sajid Chowdhury is a Software Engineer and Lecturer focused on practical software development, backend systems, databases, APIs and AI-assisted engineering.",
  aboutPrimaryEn:
    "I work at the intersection of software engineering and technical education, focusing on practical development, backend systems, databases, APIs and modern AI-assisted engineering workflows.",
  aboutBn:
    "আমি একজন Software Engineer এবং Lecturer হিসেবে software development এবং technical education—দুই ক্ষেত্রেই কাজ করছি। আমার কাজের মূল focus হলো practical software engineering, backend development, database systems, API development এবং modern AI-assisted development workflows।",
  avatar: "/images/sajid-chowdhury.jpeg",
  socials: {
    github: "https://github.com/SAJID-C",
    linkedin: "https://www.linkedin.com/in/md-sajid-chowdhury-b91790340/",
    email: "mdsajidchowdhury99@gmail.com",
  },
  highlights: [
    "Software Engineering",
    "Technical Education",
    "Backend Development",
    "Database Systems",
    "API Development",
    "AI-Assisted Development",
  ],
};
