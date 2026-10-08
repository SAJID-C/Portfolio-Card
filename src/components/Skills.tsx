"use client";

import React, { useState } from "react";
import { Terminal, Database, Globe, Layers, Wrench, Code2 } from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Programming: Code2,
  Backend: Terminal,
  Database: Database,
  Web: Globe,
  Engineering: Layers,
  Tools: Wrench,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-neutral-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mt-2 tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2">
            Structured skill categories based on production engineering and instructional delivery.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 shadow-sm"
                  : "bg-neutral-100 dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catItem) => {
            const Icon = iconMap[catItem.category] || Terminal;
            return (
              <div
                key={catItem.category}
                className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft hover:border-brand-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-white/[0.05] text-brand-600 dark:text-brand-400 group-hover:bg-brand-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {catItem.category}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
                    {catItem.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100 dark:border-white/[0.04]">
                  {catItem.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-50 dark:bg-white/[0.03] text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-white/[0.06] hover:border-brand-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
