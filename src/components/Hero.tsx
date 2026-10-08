"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Terminal, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { ProfileCard } from "./ProfileCard";

export function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      
      {/* Subtle Background Technical Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/[0.08] text-xs font-mono tracking-wider font-semibold text-neutral-800 dark:text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span>SOFTWARE ENGINEER • LECTURER</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.12]">
              I build software and teach the skills behind it.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              {profileData.heroBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-sm group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-all"
              >
                <span>Let&apos;s Connect</span>
              </Link>
            </div>

            {/* Code / Editor-Inspired Abstract Technical Bar */}
            <div className="pt-4 border-t border-neutral-200/70 dark:border-white/[0.06] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-brand-500" />
                <span>Backend &amp; APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-accent-blue" />
                <span>C# • Python • Web</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>AI-Assisted Workflows</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileCard />
          </div>

        </div>
      </div>
    </section>
  );
}
