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
    <section id="skills" className="py-20 sm:py-28 border-t border-cream-300/80 dark:border-dark-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-terracotta-500 uppercase">
            Technical Competencies
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 dark:text-cream-50 mt-2 tracking-tight">
            Skills &amp; Technologies<span className="text-terracotta-500">.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-400 mt-2">
            Structured skill categories based on production engineering and instructional delivery.
          </p>
        </div>

        {/* Category Filter Pills (Terracotta & Sand) */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? "bg-terracotta-500 text-white shadow-sm"
                  : "bg-cream-200 dark:bg-dark-800 text-charcoal-700 dark:text-cream-200 hover:bg-cream-300 dark:hover:bg-dark-700"
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
                className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft hover:border-terracotta-400 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-cream-100 dark:bg-dark-800 text-terracotta-500 group-hover:bg-terracotta-50 dark:group-hover:bg-terracotta-900/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-charcoal-900 dark:text-cream-50">
                      {catItem.category}
                    </h3>
                  </div>

                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400 leading-relaxed mb-5">
                    {catItem.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-cream-200 dark:border-dark-750">
                  {catItem.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-cream-50 dark:bg-dark-800 text-charcoal-800 dark:text-cream-200 border border-cream-200 dark:border-dark-700 hover:border-terracotta-400 transition-colors"
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
