import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Upload, Film, Cpu, Eye, BarChart2, AlertTriangle, CheckCircle, Lightbulb, ScanLine, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";

interface PipelineStep { step: string; icon: string; desc: string; }
interface Project {
  id: string; flagship: boolean; title: string; shortTitle: string; tagline: string;
  badges: string[]; accentColor: string; description: string; overview: string;
  problemStatement: string; objectives: string[]; pipeline: PipelineStep[];
  keyFeatures: string[]; challenges: string[]; futureImprovements: string[];
  disclaimer: string; githubUrl: string; demoUrl: string;
}

const pipelineIconMap: Record<string, React.ElementType> = { Upload, Film, Cpu, Eye, BarChart2, ScanFace: ScanLine };

// violet = flagship/interactive, emerald = secondary/success CTA, slate = neutral
const accentStyles: Record<string, { badge: string; border: string; glow: string; gradient: string; tag: string; topBar: string }> = {
  violet: {
    badge: "bg-accent-violet/10 text-accent-violet-light border-accent-violet/25",
    border: "border-accent-violet/30 hover:border-accent-violet/60",
    glow: "hover:shadow-glow-violet",
    gradient: "from-accent-violet to-accent-violet-mid",
    tag: "text-accent-violet-light",
    topBar: "from-accent-violet via-accent-violet-mid to-accent-emerald-mid",
  },
  emerald: {
    badge: "bg-accent-emerald/10 text-accent-emerald-light border-accent-emerald/25",
    border: "border-accent-emerald/30 hover:border-accent-emerald/60",
    glow: "hover:shadow-glow-emerald",
    gradient: "from-accent-emerald to-accent-emerald-mid",
    tag: "text-accent-emerald-light",
    topBar: "from-accent-emerald to-accent-emerald-mid",
  },
  cyan: {
    badge: "bg-slate-700/50 text-slate-300 border-slate-600/50",
    border: "border-slate-600/40 hover:border-slate-500/60",
    glow: "hover:shadow-card",
    gradient: "from-slate-600 to-slate-500",
    tag: "text-slate-300",
    topBar: "from-slate-600 to-accent-violet/50",
  },
};

function PipelineViz({ steps }: { steps: PipelineStep[] }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <div className="mt-4">
      <p className="text-xs text-slate-500 mono mb-3 uppercase tracking-widest">Pipeline</p>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => {
          const Icon = pipelineIconMap[s.icon] ?? Cpu;
          const isActive = activeStep === i;
          return (
            <div key={s.step} className="flex items-center gap-2">
              <button onClick={() => setActiveStep(isActive ? null : i)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-mono transition-all duration-200 focus-visible-ring
                  ${isActive ? "bg-accent-violet/20 border-accent-violet/50 text-accent-violet-light" : "border-bg-border text-gray-400 hover:border-accent-violet/30 hover:text-gray-200 hover:bg-accent-violet/5"}`}
                aria-expanded={isActive} aria-label={`Pipeline step: ${s.step}`}>
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />{s.step}
              </button>
              {i < steps.length - 1 && <ArrowRight className="w-3 h-3 text-slate-600 flex-shrink-0" aria-hidden="true" />}
            </div>
          );
        })}
      </div>
      <AnimatePresence>
        {activeStep !== null && (
          <motion.div key={activeStep} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="mt-3 px-4 py-3 rounded-lg bg-accent-violet/5 border border-accent-violet/20 text-sm text-gray-300">
            <span className="text-accent-violet-light font-semibold">{steps[activeStep].step}: </span>
            {steps[activeStep].desc}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const styles = accentStyles[project.accentColor] ?? accentStyles.violet;

  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className={`glass rounded-2xl border transition-all duration-300 ${styles.border} ${styles.glow} overflow-hidden`}>

      {project.flagship && <div className={`h-1 w-full bg-gradient-to-r ${styles.topBar}`} />}

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            {project.flagship && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet-light text-xs font-mono font-semibold mb-3">
                ⭐ Flagship Project
              </div>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1">{project.title}</h3>
            <p className={`text-sm mono ${styles.tag}`}>{project.tagline}</p>
          </div>
        </div>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.badges.map((b) => (
            <span key={b} className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border ${styles.badge}`}>{b}</span>
          ))}
        </div>

        {project.flagship && project.pipeline.length > 0 && <PipelineViz steps={project.pipeline} />}

        {project.disclaimer && (
          <div className="mt-5 flex gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-300/80 leading-relaxed">{project.disclaimer}</p>
          </div>
        )}

        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="mt-6 pt-6 border-t border-bg-border space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Overview</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.overview}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Problem Statement</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.problemStatement}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-emerald-mid" />Objectives
                  </h4>
                  <ul className="space-y-2">
                    {project.objectives.map((obj) => (
                      <li key={obj} className="flex gap-2 text-sm text-gray-400">
                        <span className="text-accent-emerald-light mt-0.5">→</span>{obj}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-gray-400">
                        <span className={`mt-0.5 ${styles.tag}`}>✦</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />Challenges &amp; Limitations
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-2 text-sm text-gray-400">
                        <span className="text-amber-400 mt-0.5">!</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-accent-violet-light" />Future Improvements
                  </h4>
                  <ul className="space-y-2">
                    {project.futureImprovements.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-gray-400">
                        <span className="text-accent-violet-light mt-0.5">◈</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5 border-t border-bg-border">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-bg-border text-gray-400 hover:text-white hover:border-slate-500 transition-all focus-visible-ring"
                aria-label={`View ${project.shortTitle} on GitHub`}>
                <GithubIcon className="w-4 h-4" />GitHub
              </a>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono text-slate-600 border border-bg-border cursor-not-allowed">
                <GithubIcon className="w-4 h-4" />Repo coming soon
              </span>
            )}
            {/* Live demo = emerald CTA (success/action) */}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-accent-emerald to-accent-emerald-mid text-white hover:opacity-90 transition-all focus-visible-ring shadow-glow-emerald"
                aria-label={`View live demo of ${project.shortTitle}`}>
                <ExternalLink className="w-4 h-4" />Live Demo
              </a>
            )}
          </div>
          <button onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors focus-visible-ring rounded-lg px-2 py-1"
            aria-expanded={expanded}>
            {expanded ? <>Less detail <ChevronUp className="w-4 h-4" /></> : <>More detail <ChevronDown className="w-4 h-4" /></>}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
