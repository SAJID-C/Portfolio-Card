"use client";

import React from "react";
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experiencesData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-neutral-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
            Professional Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mt-2 tracking-tight">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2">
            Active roles spanning practical software engineering, curriculum design, and technical instruction.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 max-w-4xl">
          {experiencesData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft transition-all hover:border-brand-500/30"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2">
                    {item.period}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                    <span className="flex items-center gap-1.5 text-brand-600 dark:text-brand-400 font-semibold">
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

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase mb-3">
                  Focus Areas &amp; Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/[0.06]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-brand-500" />
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
