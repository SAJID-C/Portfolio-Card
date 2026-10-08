"use client";

import React from "react";
import { CheckCircle2, Terminal, BookOpen, Layers } from "lucide-react";
import { profileData } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-neutral-200/60 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
            Background &amp; Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mt-2 tracking-tight">
            A little about me
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
            <p>
              {profileData.aboutPrimaryEn}
            </p>

            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 border-l-2 border-brand-500/40 pl-4 py-1 italic">
              &ldquo;{profileData.aboutBn}&rdquo;
            </p>

            <p className="text-sm sm:text-base">
              My engineering philosophy emphasizes clean code, strong architectural foundations, and pragmatic problem-solving. As an educator, I bridge the gap between academic theory and industry engineering practices so that learners build real software with confidence.
            </p>
          </div>

          {/* Right Column: Professional Highlights */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft">
              <h3 className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase mb-5">
                Core Competencies
              </h3>

              <div className="space-y-3.5">
                {profileData.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/[0.05] hover:border-brand-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
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
