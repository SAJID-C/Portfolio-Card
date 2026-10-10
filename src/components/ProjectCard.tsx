"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 shadow-soft hover:border-terracotta-400 hover:shadow-warm transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Optional Thumbnail Image */}
        {project.image && (
          <div className="relative w-full h-52 overflow-hidden bg-cream-200 dark:bg-dark-800 border-b border-cream-300 dark:border-dark-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-103 transition-transform duration-500"
            />
            {project.featured && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-terracotta-500 text-white shadow-sm">
                Flagship Project
              </span>
            )}
          </div>
        )}

        <div className="p-6 sm:p-7 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-2xl font-medium text-charcoal-900 dark:text-cream-50 tracking-tight group-hover:text-terracotta-500 transition-colors">
              {project.title}
            </h3>
            <span className="p-2 rounded-lg bg-cream-100 dark:bg-dark-800 text-charcoal-600 dark:text-cream-300 group-hover:text-white group-hover:bg-terracotta-500 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          <p className="text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="pt-2">
            <p className="text-xs text-charcoal-500 dark:text-charcoal-400 line-clamp-2">
              <span className="font-semibold text-charcoal-700 dark:text-cream-200">Problem: </span>
              {project.problemSolved}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 sm:p-7 sm:pt-0">
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-cream-200 dark:border-dark-700">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-mono rounded bg-cream-50 dark:bg-dark-800 text-charcoal-700 dark:text-cream-200 border border-cream-200 dark:border-dark-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-[11px] font-mono text-charcoal-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
