import { info } from "@/data/info";
import { education } from "@/data/education";
import TimelineItem from "@/components/TimelineItem";
import { User, GraduationCap, Code, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">About Me</h1>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
      </div>

      <div className="grid gap-12">
        {/* Summary */}
        <section className="rounded-2xl border border-white/10 bg-secondary p-8">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <User size={24} />
            <h2 className="text-2xl font-bold text-white">Summary</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {info.description}
          </p>
        </section>

        {/* Skills */}
        <section className="rounded-2xl border border-white/10 bg-secondary p-8">
          <div className="flex items-center gap-3 mb-6 text-accent">
            <Code size={24} />
            <h2 className="text-2xl font-bold text-white">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {info.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-300 border border-white/10 hover:border-accent/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="rounded-2xl border border-white/10 bg-secondary p-8">
          <div className="flex items-center gap-3 mb-8 text-accent">
            <GraduationCap size={24} />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <div className="flex flex-col">
            {education.map((item, idx) => (
              <TimelineItem key={idx} item={item} />
            ))}
          </div>
        </section>

        {/* Hobbies */}
        <section className="rounded-2xl border border-white/10 bg-secondary p-8">
          <div className="flex items-center gap-3 mb-6 text-accent">
            <Heart size={24} />
            <h2 className="text-2xl font-bold text-white">Interests</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {info.hobbies.map((hobby, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-400">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                {hobby}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
