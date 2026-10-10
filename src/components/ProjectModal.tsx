"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Github, ExternalLink, Layers, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-cream-50 dark:bg-dark-900 border border-cream-300 dark:border-dark-700 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl text-charcoal-500 hover:text-charcoal-900 dark:hover:text-cream-50 hover:bg-cream-200 dark:hover:bg-dark-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded bg-terracotta-50 dark:bg-terracotta-900/30 text-terracotta-600 dark:text-terracotta-300 border border-terracotta-200 dark:border-terracotta-800">
              Architectural Specification
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900 dark:text-cream-50 tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 mt-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Optional Project Screenshot / Banner */}
        {project.image && (
          <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-cream-300 dark:border-dark-700 bg-cream-200 dark:bg-dark-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Problem vs Solution Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-terracotta-600 dark:text-terracotta-400">
              <AlertCircle className="w-4 h-4" />
              <span>Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              <Sparkles className="w-4 h-4" />
              <span>Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold tracking-wider text-charcoal-500 uppercase flex items-center gap-2">
            <Layers className="w-4 h-4 text-terracotta-500" />
            <span>Architecture &amp; Design</span>
          </h4>
          <p className="text-sm text-charcoal-700 dark:text-charcoal-300 leading-relaxed p-4 rounded-xl bg-white dark:bg-dark-850 border border-cream-300 dark:border-dark-700">
            {project.architecture}
          </p>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold tracking-wider text-charcoal-500 uppercase">
            Key Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-700 dark:text-charcoal-300"
              >
                <CheckCircle2 className="w-4 h-4 text-terracotta-500 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-2 pt-2 border-t border-cream-200 dark:border-dark-700">
          <h4 className="text-xs font-mono font-bold tracking-wider text-charcoal-500 uppercase">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-xs font-mono px-2.5 py-1 rounded bg-cream-100 dark:bg-dark-800 text-charcoal-800 dark:text-cream-200 border border-cream-200 dark:border-dark-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-cream-200 dark:border-dark-700">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-terracotta-500 hover:bg-terracotta-600 text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-cream-200 hover:bg-cream-300 dark:bg-dark-800 dark:hover:bg-dark-700 text-charcoal-900 dark:text-cream-100 border border-cream-300 dark:border-dark-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
