"use client";

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { profileData } from "@/data/profile";

export function ProfileCard() {
  return (
    <div className="w-full max-w-sm mx-auto lg:max-w-none rounded-2xl p-6 sm:p-7 bg-neutral-50/80 dark:bg-dark-850/80 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-brand-500/30">
      
      {/* Profile Image & Status Badge */}
      <div className="relative mb-6">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-white/10 bg-neutral-200 dark:bg-dark-800 shadow-md">
          <Image
            src={profileData.avatar}
            alt={profileData.name}
            fill
            sizes="(max-width: 768px) 176px, 176px"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Live Availability Tag */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Active &amp; Available for Work</span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
          {profileData.name}
        </h3>
        
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{profileData.role}</span>
        </div>

        <div className="pt-3 border-t border-neutral-200/60 dark:border-white/[0.06] text-xs text-neutral-600 dark:text-neutral-400 space-y-1.5">
          <div className="flex items-center justify-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-neutral-500" />
            <span>{profileData.education}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>{profileData.location}</span>
          </div>
        </div>
      </div>

      {/* Social Actions / Links with Tooltips */}
      <div className="mt-6 pt-5 border-t border-neutral-200/60 dark:border-white/[0.06] flex items-center justify-center gap-3">
        <a
          href={profileData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
          className="p-2.5 rounded-xl border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:text-white hover:bg-neutral-900 dark:hover:bg-brand-600 hover:border-transparent transition-all group"
        >
          <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>

        <a
          href={profileData.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="p-2.5 rounded-xl border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:text-white hover:bg-[#0077b5] hover:border-transparent transition-all group"
        >
          <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>

        <a
          href={`mailto:${profileData.socials.email}`}
          title="Email Direct"
          className="p-2.5 rounded-xl border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:text-white hover:bg-emerald-600 hover:border-transparent transition-all group"
        >
          <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
}
