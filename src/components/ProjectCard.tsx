import React from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "./utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-secondary transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
      {project.image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
        </div>
      )}
      
      <div className="flex flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-gray-300 border border-white/10 transition-colors group-hover:border-accent/30"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-300 transition-colors hover:text-white"
            >
              <Github size={14} />
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-300 transition-colors hover:text-white"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
