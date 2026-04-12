import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { info } from "@/data/info";

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-3xl">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          Hi, I&apos;m <span className="text-accent">{info.name}</span>
        </h1>
        <h2 className="mb-6 text-2xl font-medium text-gray-300 md:text-3xl">
          {info.role}
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-gray-400 md:text-xl">
          {info.description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-accent/90 hover:scale-105"
          >
            View Projects
            <ArrowRight size={18} />
          </Link>
          <Link
            href={info.cv}
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-all hover:bg-white/5 hover:scale-105"
          >
            <FileText size={18} />
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}
