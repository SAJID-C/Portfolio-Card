"use client";

import React from "react";
import { GraduationCap, Award, BookCheck } from "lucide-react";
import { educationData } from "@/data/experience";

export function Education() {
  return (
    <section className="py-16 sm:py-20 border-t border-neutral-200/60 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mt-1 tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {edu.degree} in {edu.field}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-400">
                      Undergraduate Degree
                    </span>
                  </div>
                  
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
                    {edu.description}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {edu.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-white/[0.05]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
