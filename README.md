# Md Sajid Chowdhury — Professional Portfolio

> **Software Engineer & Lecturer**  
> BSc in Computer Science & Engineering | ICT Bangladesh  
> *Building software. Teaching technology. Exploring AI-powered engineering.*  
> **Live Site:** [https://portfolio-card-pfrz.vercel.app/](https://portfolio-card-pfrz.vercel.app/)

---

## 🚀 Overview

A modern, responsive, and performance-optimized personal brand website for **Md Sajid Chowdhury**, engineered using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

### Key Architectural Pillars:
- **Clean Component Architecture**: Decoupled presentation (`components/`), typed data configurations (`data/`), and application routes (`app/`).
- **Production-Grade Design**: Deep charcoal / near-black palette with restrained technological accents, fine borders, soft shadows, and zero visual clutter.
- **Dark & Light Mode**: Default dark theme with an instantaneous theme toggle and `localStorage` persistence.
- **Categorized Skills**: Zero generic percentage bars or fake statistics; structured cards for Programming, Backend, Database, Web, Engineering, and Tools.
- **Interactive Project Showcase**: In-depth project modal showing Problem, Solution, Architecture, Features, and Tech Stack for *Fellowly Todo Microservice*, *Student Management System*, *CMS*, and *NEXORA LMS*.
- **Pedagogical Framework**: Educational philosophy (*Learn &rarr; Practice &rarr; Build &rarr; Improve*) and industry-oriented AI software engineering curriculum.
- **Accessible & SEO Ready**: OpenGraph metadata, Twitter Cards, semantic HTML, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & PostCSS
- **Icons**: Lucide React
- **Deployment Target**: Vercel

---

## 📂 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Serverless contact submission route
│   ├── globals.css            # Tailwind directives & theme configuration
│   ├── layout.tsx             # Root layout with SEO & OpenGraph tags
│   ├── page.tsx               # Orchestration of all portfolio sections
│   ├── robots.ts              # Search engine robots.txt
│   └── sitemap.ts             # XML sitemap route
├── components/
│   ├── About.tsx              # Narrative biography & competencies
│   ├── AISection.tsx          # Engineering in the AI era
│   ├── Contact.tsx            # Contact channels & interactive form
│   ├── Education.tsx          # BSc in Computer Science & Engineering
│   ├── Experience.tsx         # ICT Bangladesh journey & focus areas
│   ├── Footer.tsx             # Minimal footer with links & copyright
│   ├── Hero.tsx               # Primary statement & abstract editor UI
│   ├── Navbar.tsx             # Sticky navigation with mobile drawer
│   ├── Philosophy.tsx         # Learn -> Practice -> Build -> Improve
│   ├── ProfileCard.tsx        # High-res portrait card & social links
│   ├── ProjectCard.tsx        # Individual project card
│   ├── ProjectModal.tsx       # In-depth architectural inspection modal
│   ├── Projects.tsx           # Applied engineering project grid
│   ├── Skills.tsx             # Categorized skill matrix
│   ├── Statement.tsx          # Guiding engineering conviction
│   └── Teaching.tsx           # Technology instruction & course card
├── data/
│   ├── experience.ts          # Professional timeline & education
│   ├── profile.ts             # Personal identity, bio & socials
│   ├── projects.ts            # Project metadata & specifications
│   ├── skills.ts              # Categorized technical competencies
│   └── teaching.ts            # Curricula, topics & philosophies
├── lib/
│   └── utils.ts               # Tailwind class merge helper
public/
└── images/
    ├── sajid-chowdhury.jpeg   # High-resolution developer portrait
    └── nexora-preview.jpg     # LMS platform preview
```

---

## 💻 Local Development

```powershell
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# The website will be available at http://localhost:3000

# 3. Create production build
npm run build

# 4. Preview production build
npm run start
```

---

## 🌐 Deploy to Vercel

This repository is pre-configured for instant zero-configuration deployment to Vercel:

1. Push your repository to GitHub:
   ```powershell
   git add .
   git commit -m "feat: complete Next.js portfolio redesign"
   git push origin master
   ```
2. In your Vercel Dashboard, import the `Portfolio-Card` repository.
3. Click **Deploy**. Vercel will automatically build and deploy to:
   **[https://portfolio-card-pfrz.vercel.app/](https://portfolio-card-pfrz.vercel.app/)**

---

© 2026 Md Sajid Chowdhury. All rights reserved.
