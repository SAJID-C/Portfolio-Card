"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/experience";

export function Education() {
  return (
    <section className="py-16 sm:py-20 border-t border-cream-300/80 dark:border-dark-700/80 bg-cream-100/50 dark:bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-terracotta-500 uppercase">
            Academic Background
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 dark:text-cream-50 mt-1 tracking-tight">
            Education<span className="text-terracotta-500">.</span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-3.5 rounded-xl bg-terracotta-50 dark:bg-terracotta-900/30 text-terracotta-600 dark:text-terracotta-400 border border-terracotta-200 dark:border-terracotta-800">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900 dark:text-cream-50">
                      {edu.degree} in {edu.field}
                    </h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-cream-100 dark:bg-dark-800 text-charcoal-700 dark:text-cream-200 border border-cream-200 dark:border-dark-700">
                      Undergraduate Degree
                    </span>
                  </div>
                  
                  <p className="text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed pt-1">
                    {edu.description}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {edu.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-cream-50 dark:bg-dark-800 text-charcoal-800 dark:text-cream-200 border border-cream-200 dark:border-dark-700"
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
