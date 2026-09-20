import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { siteConfig } from "../data/config";
import { useTypewriter } from "../hooks/useTypewriter";
import { useParticleCanvas } from "../hooks/useParticleCanvas";

export function Hero() {
  const typed = useTypewriter(siteConfig.taglines);
  const canvasRef = useParticleCanvas();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" aria-hidden="true" />

      {/* Slate glow blobs — violet + emerald */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-40 w-[28rem] h-[28rem] bg-accent-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-40 w-[28rem] h-[28rem] bg-accent-emerald/8 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/70 via-transparent to-bg-primary" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Status badge — emerald (open/available = success state) */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-mono text-accent-emerald-light mb-8">
          <span className="w-2 h-2 bg-accent-emerald-mid rounded-full animate-pulse-slow" />
          Open to AI/ML &amp; Data roles — Graduating 2027
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="text-white">Building Intelligent Systems.</span>
          <br />
          {/* Headline gradient: violet → emerald */}
          <span className="text-gradient-violet">Turning Data Into Insights.</span>
        </motion.h1>

        {/* Typewriter — violet accent */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }}
          className="h-8 mb-6 flex items-center justify-center">
          <span className="mono text-accent-violet-light text-lg md:text-xl font-medium">
            &gt; {typed}<span className="animate-pulse ml-0.5">|</span>
          </span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-4">
          {siteConfig.subheadline}
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-400 text-base max-w-2xl mx-auto mb-10">
          {siteConfig.elevatorPitch}
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* Primary — violet */}
          <button onClick={() => scrollTo("projects")}
            className="group px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-violet to-accent-violet-mid hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-glow-violet focus-visible-ring"
            id="hero-view-projects">
            View Projects
            <ExternalLink className="w-4 h-4 ml-2 inline-block group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Secondary CTA — emerald (success/action) */}
          <a href={siteConfig.resumePath} download
            className="group px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-emerald to-accent-emerald-mid hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-glow-emerald focus-visible-ring"
            id="hero-download-resume">
            <Download className="w-4 h-4 mr-2 inline-block group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>

          {/* Ghost */}
          <button onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-xl font-semibold text-gray-300 border border-slate-600 hover:border-accent-violet/60 hover:text-white hover:bg-accent-violet/5 hover:scale-105 transition-all duration-200 focus-visible-ring"
            id="hero-contact">
            Contact Me
          </button>
        </motion.div>

        {/* Social row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center gap-6">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all focus-visible-ring rounded-lg" aria-label="View GitHub profile">
            <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm hidden sm:block">GitHub</span>
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-accent-violet-light transition-all focus-visible-ring rounded-lg" aria-label="View LinkedIn profile">
            <LinkedInIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm hidden sm:block">LinkedIn</span>
          </a>
          <a href={`mailto:${siteConfig.email}`}
            className="group flex items-center gap-2 text-gray-400 hover:text-accent-emerald-light transition-all focus-visible-ring rounded-lg" aria-label="Send email">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm hidden sm:block">{siteConfig.email}</span>
          </a>
        </motion.div>

        <motion.button onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors focus-visible-ring rounded-full"
          aria-label="Scroll to About section">
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
