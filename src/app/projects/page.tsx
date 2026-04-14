import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4 text-accent">
          <h1 className="text-4xl font-bold text-white">Dự án</h1>
        </div>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        <p className="mt-4 text-gray-400">Một bộ sưu tập các nghiên cứu và sản phẩm kỹ thuật của tôi.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
