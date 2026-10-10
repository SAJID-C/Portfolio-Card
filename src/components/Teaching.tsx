"use client";

import React from "react";
import Link from "next/link";
import {
  Code,
  Layers,
  Database,
  Network,
  Globe,
  Cpu,
  Terminal,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
} from "lucide-react";
import { teachingData } from "@/data/teaching";

const iconLookup: Record<string, React.ElementType> = {
  Code,
  Layers,
  Database,
  Network,
  Globe,
  Cpu,
  Terminal,
};

export function Teaching() {
  return (
    <section id="teaching" className="py-20 sm:py-28 border-t border-cream-300/80 dark:border-dark-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-terracotta-500 uppercase">
            Technical Education
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 dark:text-cream-50 mt-2 tracking-tight">
            {teachingData.title}<span className="text-terracotta-500">.</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium text-terracotta-600 dark:text-terracotta-400 mt-2">
            {teachingData.subtitle}
          </p>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-400 mt-2 leading-relaxed">
            {teachingData.description}
          </p>
        </div>

        {/* Instructional Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {teachingData.topics.map((topic, idx) => {
            const Icon = iconLookup[topic.iconName] || Terminal;
            return (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft hover:border-terracotta-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 w-fit rounded-lg bg-cream-100 dark:bg-dark-800 text-terracotta-500 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-charcoal-900 dark:text-cream-50 mb-1.5">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-charcoal-500 dark:text-charcoal-400 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flagship Course Offering Card (Warm Editorial Design) */}
        <div className="rounded-3xl p-8 sm:p-12 bg-cream-100 dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-terracotta-50 dark:bg-terracotta-900/30 text-terracotta-600 dark:text-terracotta-300 border border-terracotta-200 dark:border-terracotta-800">
                <BookOpenCheck className="w-3.5 h-3.5" />
                <span>{teachingData.featuredCourse.badge}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900 dark:text-cream-50 tracking-tight">
                {teachingData.featuredCourse.title}
              </h3>

              <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                {teachingData.featuredCourse.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {teachingData.featuredCourse.focusPoints.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-700 dark:text-charcoal-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-terracotta-500 flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href={teachingData.featuredCourse.ctaLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg bg-terracotta-500 hover:bg-terracotta-600 text-white transition-all shadow-sm group"
              >
                <span>{teachingData.featuredCourse.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
