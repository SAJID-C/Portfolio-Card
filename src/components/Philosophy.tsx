"use client";

import React from "react";
import { ArrowRight, BookOpen, PenTool, Hammer, RefreshCw } from "lucide-react";
import { teachingData } from "@/data/teaching";

const stepIcons = [BookOpen, PenTool, Hammer, RefreshCw];

export function Philosophy() {
  return (
    <section className="py-20 sm:py-28 border-t border-neutral-200/60 dark:border-white/[0.06] bg-neutral-50/50 dark:bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
            Educational Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mt-2 tracking-tight">
            Learn &rarr; Practice &rarr; Build &rarr; Improve
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2">
            A structured learning framework designed to turn conceptual clarity into production-ready software capability.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachingData.philosophySteps.map((step, idx) => {
            const Icon = stepIcons[idx] || BookOpen;
            return (
              <div
                key={idx}
                className="relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft hover:border-brand-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                      STEP {step.step}
                    </span>
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-100 dark:border-white/[0.04] text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                  Pedagogical Pillar {idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
