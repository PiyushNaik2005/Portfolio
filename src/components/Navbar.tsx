import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, X, Code2, Layers, User, FolderGit2, FileText, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { siteConfig } from "../data/config";
import { useScrollSpy, useScrolled } from "../hooks/useScrollSpy";

const NAV_ITEMS = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: MessageSquare },
];

const SECTION_IDS = ["hero", "about", "skills", "projects", "resume", "contact"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS, 120);
  const scrolled = useScrolled(20);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 focus-visible-ring rounded-lg" aria-label="Go to top">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-violet to-accent-violet-mid flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-mono text-sm font-bold text-white hidden sm:block">
            piyush<span className="text-accent-violet-light">.naik</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible-ring ${
                active === id ? "text-accent-violet-light bg-accent-violet/10" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}>
              {label}
            </button>
          ))}
        </nav>

        {/* Social + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors focus-visible-ring rounded p-1" aria-label="GitHub">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-violet-light transition-colors focus-visible-ring rounded p-1" aria-label="LinkedIn">
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a href={`mailto:${siteConfig.email}`}
            className="text-gray-400 hover:text-accent-emerald-light transition-colors focus-visible-ring rounded p-1" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          {/* Primary CTA — violet */}
          <button onClick={() => scrollTo("contact")}
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-accent-violet to-accent-violet-mid text-white hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-glow-violet focus-visible-ring">
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-400 hover:text-white focus-visible-ring rounded-lg p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }} className="md:hidden glass border-t border-bg-border">
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <button key={id} onClick={() => scrollTo(id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active === id ? "text-accent-violet-light bg-accent-violet/10" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}>
                  <Icon className="w-4 h-4" />{label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-3 border-t border-bg-border mt-2">
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="GitHub">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-violet-light" aria-label="LinkedIn">
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-accent-emerald-light" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
