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
    <section id="teaching" className="py-20 sm:py-28 border-t border-neutral-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
            Technical Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mt-2 tracking-tight">
            {teachingData.title}
          </h2>
          <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400 mt-2">
            {teachingData.subtitle}
          </p>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
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
                className="rounded-2xl p-5 bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft hover:border-brand-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 w-fit rounded-lg bg-neutral-100 dark:bg-white/[0.05] text-brand-600 dark:text-brand-400 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flagship Course Offering Card */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-dark-850 dark:via-dark-900 dark:to-dark-850 border border-neutral-200 dark:border-white/10 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                <BookOpenCheck className="w-3.5 h-3.5" />
                <span>{teachingData.featuredCourse.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                {teachingData.featuredCourse.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {teachingData.featuredCourse.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {teachingData.featuredCourse.focusPoints.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href={teachingData.featuredCourse.ctaLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-sm group"
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
