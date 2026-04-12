import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { info } from "@/data/info";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary text-gray-400 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} {info.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href={info.github} target="_blank" className="hover:text-white transition-colors">
              <Github size={20} />
            </Link>
            <Link href={info.linkedin} target="_blank" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
            <a href={`mailto:${info.email}`} className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
