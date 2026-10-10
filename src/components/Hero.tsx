"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Grid: Narrative Headline vs Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Big Editorial Serif Headline */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Small Monospace Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cream-200/80 dark:bg-dark-800 border border-cream-300 dark:border-dark-700 text-xs font-mono font-semibold tracking-wider text-charcoal-700 dark:text-cream-200 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
              <span>Software Engineer &bull; Lecturer &bull; ICT Bangladesh</span>
            </div>

            {/* Editorial Serif Headline (Inspired by the Reference Design) */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.25rem] font-medium tracking-tight text-charcoal-900 dark:text-cream-50 leading-[1.12]">
              Software is built <br />
              by <span className="italic font-serif text-terracotta-500 dark:text-terracotta-400 font-normal">systems</span>, not <br />
              shortcuts.
            </h1>

            {/* Supporting Intro Text */}
            <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-400 max-w-2xl leading-relaxed">
              Software Engineer and Lecturer focused on practical software development, backend systems, database design, REST APIs, and modern engineering workflows.
            </p>

            {/* Action Buttons (Terracotta Primary + Warm Neutral Secondary) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-lg bg-terracotta-500 hover:bg-terracotta-600 dark:bg-terracotta-500 dark:hover:bg-terracotta-600 text-white transition-all shadow-sm group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#teaching"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg bg-cream-200 hover:bg-cream-300 dark:bg-dark-800 dark:hover:bg-dark-700 text-charcoal-900 dark:text-cream-100 border border-cream-300 dark:border-dark-700 transition-all"
              >
                <span>Teaching &amp; Curriculum</span>
                <Play className="w-3.5 h-3.5 fill-current text-charcoal-700 dark:text-cream-300" />
              </Link>
            </div>

            {/* Quick Social & Location Bar */}
            <div className="pt-4 border-t border-cream-300/80 dark:border-dark-700/80 flex flex-wrap items-center gap-5 text-xs text-charcoal-500 dark:text-charcoal-400">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                <span>Bangladesh</span>
              </div>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-terracotta-500 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-terracotta-500 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="flex items-center gap-1.5 hover:text-terracotta-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Editorial Portrait Card (Matching reference photo styling) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-cream-200 dark:bg-dark-800 border border-cream-300 dark:border-dark-700 shadow-warm">
                <Image
                  src={profileData.avatar}
                  alt={profileData.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                />

                {/* Subtle Bottom Card Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/40 to-transparent text-white">
                  <div className="font-serif text-lg font-bold">{profileData.name}</div>
                  <div className="text-xs text-cream-200 font-mono mt-0.5">
                    Software Engineer &amp; Lecturer &bull; ICT Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar (Directly Inspired by the Reference Image) */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-cream-300/80 dark:border-dark-700/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            
            {/* Metric 1 */}
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-charcoal-900 dark:text-cream-50">
                10+
              </div>
              <div className="text-xs sm:text-sm font-medium text-charcoal-600 dark:text-charcoal-400 mt-2">
                Production Systems &amp; Repositories
              </div>
            </div>

            {/* Metric 2 */}
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-charcoal-900 dark:text-cream-50">
                100+
              </div>
              <div className="text-xs sm:text-sm font-medium text-charcoal-600 dark:text-charcoal-400 mt-2">
                Learners &amp; Developers Guided
              </div>
            </div>

            {/* Metric 3 */}
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-charcoal-900 dark:text-cream-50">
                4+
              </div>
              <div className="text-xs sm:text-sm font-medium text-charcoal-600 dark:text-charcoal-400 mt-2">
                Core Stacks (C#, Python, DB, Web)
              </div>
            </div>

            {/* Metric 4 */}
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-charcoal-900 dark:text-cream-50">
                100%
              </div>
              <div className="text-xs sm:text-sm font-medium text-charcoal-600 dark:text-charcoal-400 mt-2">
                Commitment to Clean Code
              </div>
            </div>

          </div>

          <p className="text-xs font-mono text-charcoal-500 dark:text-charcoal-400 mt-8">
            As of 2026 &bull; Active in software development and technical lecturing at ICT Bangladesh.
          </p>
        </div>

      </div>
    </section>
  );
}
