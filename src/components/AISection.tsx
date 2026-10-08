"use client";

import React from "react";
import { Cpu, Terminal, Compass, ShieldCheck } from "lucide-react";
import { teachingData } from "@/data/teaching";

export function AISection() {
  const { aiSection } = teachingData;

  const cardIcons = [Cpu, Terminal, Compass];

  return (
    <section className="py-20 sm:py-28 border-t border-neutral-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
            Modern Engineering Paradigms
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mt-2 tracking-tight">
            {aiSection.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
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
                className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft hover:border-brand-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400">
                      {card.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-white/[0.04] flex items-center gap-1.5 text-xs text-brand-600 dark:text-brand-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
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
