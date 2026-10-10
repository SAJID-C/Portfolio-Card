"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-cream-300/80 dark:border-dark-700/80 bg-cream-100/50 dark:bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-terracotta-500 uppercase">
            Background &amp; Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 dark:text-cream-50 mt-2 tracking-tight">
            A little about me<span className="text-terracotta-500">.</span>
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 text-charcoal-700 dark:text-charcoal-300 leading-relaxed text-base sm:text-lg">
            <p className="font-medium text-charcoal-900 dark:text-cream-50 text-lg sm:text-xl leading-relaxed">
              {profileData.aboutPrimaryEn}
            </p>

            <blockquote className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-400 border-l-2 border-terracotta-500 pl-4 py-1 italic bg-cream-50/70 dark:bg-dark-850/50 rounded-r-lg">
              &ldquo;{profileData.aboutBn}&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base">
              My engineering approach prioritizes clean code, rigorous architectural foundations, and pragmatic problem-solving. As an educator at ICT Bangladesh, I bridge the gap between academic computer science theory and production-grade engineering workflows.
            </p>
          </div>

          {/* Right Column: Professional Highlights */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft">
              <h3 className="text-xs font-mono font-bold tracking-wider text-charcoal-500 uppercase mb-5">
                Core Competencies &amp; Focus
              </h3>

              <div className="space-y-3">
                {profileData.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-cream-50 dark:bg-dark-800 border border-cream-200 dark:border-dark-700 hover:border-terracotta-300 dark:hover:border-terracotta-700 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-terracotta-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-charcoal-800 dark:text-cream-100">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
