"use client";

import React from "react";
import { Cpu, Terminal, Compass, ShieldCheck } from "lucide-react";
import { teachingData } from "@/data/teaching";

export function AISection() {
  const { aiSection } = teachingData;

  const cardIcons = [Cpu, Terminal, Compass];

  return (
    <section className="py-20 sm:py-28 border-t border-cream-300/80 dark:border-dark-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-terracotta-500 uppercase">
            Modern Engineering Paradigms
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 dark:text-cream-50 mt-2 tracking-tight">
            {aiSection.title}<span className="text-terracotta-500">.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-3 leading-relaxed">
            {aiSection.statement}
          </p>
        </div>

        {/* 3 Realistic AI Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {aiSection.cards.map((card, idx) => {
            const Icon = cardIcons[idx] || Cpu;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft hover:border-terracotta-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-terracotta-50 dark:bg-terracotta-900/30 text-terracotta-600 dark:text-terracotta-400 border border-terracotta-200 dark:border-terracotta-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-cream-100 dark:bg-dark-800 text-charcoal-700 dark:text-cream-200 border border-cream-200 dark:border-dark-700">
                      {card.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-charcoal-900 dark:text-cream-50 mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-cream-200 dark:border-dark-700 flex items-center gap-1.5 text-xs text-terracotta-600 dark:text-terracotta-400 font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Fundamentals First</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
