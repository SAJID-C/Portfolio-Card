"use client";

import React from "react";
import { teachingData } from "@/data/teaching";

export function Statement() {
  const { careerPhilosophy } = teachingData;

  return (
    <section className="py-24 sm:py-32 border-t border-neutral-200/60 dark:border-white/[0.06] bg-neutral-900 dark:bg-dark-950 text-white relative overflow-hidden">
      
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
        
        <span className="text-xs font-mono font-bold tracking-widest text-brand-400 uppercase">
          Guiding Conviction
        </span>

        {/* Large Typography Statement */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
          {careerPhilosophy.statement}
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          {careerPhilosophy.supportingText}
        </p>

      </div>
    </section>
  );
}
