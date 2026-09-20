import { Code2, Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { siteConfig } from "../data/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-bg-border bg-bg-secondary/40 py-10 section-padding" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white text-sm font-bold font-mono">{siteConfig.name}</p>
            <p className="text-gray-600 text-xs">{siteConfig.title}</p>
          </div>
        </div>
        <p className="text-gray-600 text-xs text-center">
          Built with <Heart className="w-3 h-3 inline-block text-accent-violet" aria-hidden="true" />{" "}
          using React, Vite &amp; Tailwind CSS &middot; &copy; {year} {siteConfig.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors focus-visible-ring rounded p-1" aria-label="GitHub">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent-cyan-light transition-colors focus-visible-ring rounded p-1" aria-label="LinkedIn">
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a href={`mailto:${siteConfig.email}`}
            className="text-gray-500 hover:text-accent-emerald-light transition-colors focus-visible-ring rounded p-1" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
