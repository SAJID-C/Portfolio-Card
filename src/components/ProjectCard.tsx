"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-dark-850 border border-neutral-200/80 dark:border-white/[0.08] shadow-soft hover:border-brand-500/40 hover:shadow-glow transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Optional Thumbnail Image */}
        {project.image && (
          <div className="relative w-full h-48 overflow-hidden bg-neutral-100 dark:bg-dark-800 border-b border-neutral-200/60 dark:border-white/[0.06]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {project.featured && (
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-sm text-brand-400 border border-white/10">
                Flagship Project
              </span>
            )}
          </div>
        )}

        <div className="p-6 sm:p-7 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-brand-500 transition-colors">
              {project.title}
            </h3>
            <span className="p-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 group-hover:text-brand-500 group-hover:bg-brand-500/10 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="pt-2">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">Problem: </span>
              {project.problemSolved}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 sm:p-7 sm:pt-0">
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-white/[0.06]">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-50 dark:bg-white/[0.03] text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] font-mono text-neutral-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
