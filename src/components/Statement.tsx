"use client";

import React from "react";
import { teachingData } from "@/data/teaching";

export function Statement() {
  const { careerPhilosophy } = teachingData;

  return (
    <section className="py-24 sm:py-32 border-t border-cream-300/80 dark:border-dark-700/80 bg-charcoal-900 dark:bg-dark-950 text-cream-50 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
        
        <span className="text-xs font-mono font-bold tracking-widest text-terracotta-400 uppercase">
          Guiding Conviction
        </span>

        {/* Large Typography Statement with Editorial Serif */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15]">
          Technology should be <span className="italic font-serif text-terracotta-400">understood</span>, not just used.
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed">
          {careerPhilosophy.supportingText}
        </p>

      </div>
    </section>
  );
}
