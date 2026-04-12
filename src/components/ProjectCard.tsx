import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "./utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-secondary p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
      <h3 className="mb-2 text-xl font-bold text-white group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="mb-4 flex-grow text-sm text-gray-400">
        {project.description}
      </p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium text-gray-300 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-medium text-gray-300 transition-colors hover:text-white"
        >
          <Github size={14} />
          Source
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-gray-300 transition-colors hover:text-white"
          >
            <ExternalLink size={14} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
