"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-cream-300/80 dark:border-dark-700/80 bg-cream-100/50 dark:bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-terracotta-500 uppercase">
            Applied Engineering
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900 dark:text-cream-50 mt-2 tracking-tight">
            Featured Projects<span className="text-terracotta-500">.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-400 mt-2">
            Selected software architectures, backend microservices, and practical applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Modal for In-Depth Architecture Inspection */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
