import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { info } from "@/data/info";

export default function Footer() {
  return (
    <footer className="py-12 text-center">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex space-x-6">
            <Link href={info.github} target="_blank" className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all hover:text-white hover:bg-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Github size={20} />
            </Link>
            <Link href={info.linkedin} target="_blank" className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all hover:text-white hover:bg-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Linkedin size={20} />
            </Link>
            <a href={`mailto:${info.email}`} className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all hover:text-white hover:bg-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-500 tracking-widest uppercase">
            © {new Date().getFullYear()} {info.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
