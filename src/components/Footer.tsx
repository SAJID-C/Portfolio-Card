"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-cream-300/80 dark:border-dark-700/80 bg-cream-100/60 dark:bg-dark-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-cream-200 dark:border-dark-800">
          {/* Brand & Title */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-serif text-xl font-bold tracking-tight text-charcoal-900 dark:text-cream-50">
              Md Sajid Chowdhury<span className="text-terracotta-500">.</span>
            </h3>
            <p className="text-xs text-charcoal-500 dark:text-charcoal-400 font-mono">
              Software Engineer &amp; Lecturer &bull; ICT Bangladesh
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal-600 dark:text-charcoal-300 font-medium">
            <Link href="#home" className="hover:text-terracotta-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-terracotta-500 transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-terracotta-500 transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-terracotta-500 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-terracotta-500 transition-colors">
              Projects
            </Link>
            <Link href="#teaching" className="hover:text-terracotta-500 transition-colors">
              Teaching
            </Link>
            <Link href="#contact" className="hover:text-terracotta-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-charcoal-600 dark:text-charcoal-300 hover:text-terracotta-500 hover:bg-cream-200 dark:hover:bg-dark-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-charcoal-600 dark:text-charcoal-300 hover:text-terracotta-500 hover:bg-cream-200 dark:hover:bg-dark-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.socials.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-charcoal-600 dark:text-charcoal-300 hover:text-terracotta-500 hover:bg-cream-200 dark:hover:bg-dark-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg text-charcoal-600 dark:text-charcoal-300 hover:text-terracotta-500 hover:bg-cream-200 dark:hover:bg-dark-800 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Tech Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-500 dark:text-charcoal-400">
          <p>© 2026 Md Sajid Chowdhury. All rights reserved.</p>
          <p className="font-mono text-[11px] text-charcoal-400">
            Systems over motivation &bull; Built with Next.js &amp; Tailwind.
          </p>
        </div>

      </div>
    </footer>
  );
}
