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
    <footer className="border-t border-neutral-200/60 dark:border-white/[0.06] bg-white dark:bg-dark-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-100 dark:border-white/[0.04]">
          {/* Brand & Title */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-extrabold text-base tracking-tight text-neutral-900 dark:text-white">
              {profileData.brandName}
            </h3>
            <p className="text-xs text-neutral-500 font-mono">
              {profileData.role}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600 dark:text-neutral-400">
            <Link href="#home" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#teaching" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Teaching
            </Link>
            <Link href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.05] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.05] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.socials.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.05] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.05] transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Tech Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© 2026 Md Sajid Chowdhury. All rights reserved.</p>
          <p className="font-mono text-[11px] text-neutral-400">
            Built with modern web technologies.
          </p>
        </div>

      </div>
    </footer>
  );
}
