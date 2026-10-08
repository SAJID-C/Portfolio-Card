import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Teaching } from "@/components/Teaching";
import { Philosophy } from "@/components/Philosophy";
import { AISection } from "@/components/AISection";
import { Statement } from "@/components/Statement";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Teaching />
        <Philosophy />
        <AISection />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
