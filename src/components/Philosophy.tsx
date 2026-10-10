"use client";

import React from "react";
import { BookOpen, PenTool, Hammer, RefreshCw } from "lucide-react";
import { teachingData } from "@/data/teaching";

const stepIcons = [BookOpen, PenTool, Hammer, RefreshCw];

export function Philosophy() {
  return (
    <section className="py-20 sm:py-28 border-t border-cream-300/80 dark:border-dark-700/80 bg-cream-100/50 dark:bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-terracotta-500 uppercase">
            Educational Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 dark:text-cream-50 mt-2 tracking-tight">
            Learn &rarr; Practice &rarr; Build &rarr; Improve<span className="text-terracotta-500">.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-400 mt-2">
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
                className="relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft hover:border-terracotta-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-terracotta-600 dark:text-terracotta-400">
                      STEP {step.step}
                    </span>
                    <div className="p-2 rounded-lg bg-cream-100 dark:bg-dark-800 text-charcoal-700 dark:text-cream-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-charcoal-900 dark:text-cream-50 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-cream-200 dark:border-dark-700 text-[11px] font-mono text-charcoal-400">
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
