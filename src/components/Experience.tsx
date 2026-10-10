"use client";

import React from "react";
import { Building2, MapPin, CheckCircle2 } from "lucide-react";
import { experiencesData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-cream-300/80 dark:border-dark-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-terracotta-500 uppercase">
            Professional Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 dark:text-cream-50 mt-2 tracking-tight">
            Experience<span className="text-terracotta-500">.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-400 mt-2">
            Active roles spanning practical software engineering, curriculum design, and technical instruction.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 max-w-4xl">
          {experiencesData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft transition-all hover:border-terracotta-400"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-terracotta-50 dark:bg-terracotta-900/30 text-terracotta-600 dark:text-terracotta-300 border border-terracotta-200 dark:border-terracotta-800 mb-2">
                    {item.period}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 dark:text-cream-50">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-400 mt-2 font-medium">
                    <span className="flex items-center gap-1.5 text-terracotta-600 dark:text-terracotta-400 font-semibold">
                      <Building2 className="w-4 h-4" />
                      {item.organization}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-charcoal-700 dark:text-charcoal-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-charcoal-500 uppercase mb-3">
                  Focus Areas &amp; Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-cream-50 dark:bg-dark-800 text-charcoal-800 dark:text-cream-200 border border-cream-200 dark:border-dark-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-500" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
