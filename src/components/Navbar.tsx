"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "./utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Activities", href: "/activities" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={cn(
      "fixed left-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-accent/30",
      isVisible ? "top-4 -translate-x-1/2 translate-y-0" : "top-4 -translate-x-1/2 -translate-y-24 opacity-0"
    )}>
      <div className="mx-auto px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold text-white tracking-tight">
              Duy<span className="text-accent">.</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-gray-400 transition-all hover:text-accent hover:scale-110"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
