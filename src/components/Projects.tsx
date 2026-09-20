import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { projects } from "../data/config";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const flagship = projects.filter((p) => p.flagship);
  const others = projects.filter((p) => !p.flagship);

  return (
    <section id="projects" className="py-24 section-padding" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            {/* Emerald = section highlight (secondary accent) */}
            <FolderGit2 className="w-5 h-5 text-accent-emerald-mid" />
            <span className="mono text-sm text-accent-emerald-light uppercase tracking-widest">03 / Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-gradient-emerald">Work</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Real projects built with real data — no fabricated metrics, no borrowed demos.
          </p>
        </motion.div>

        <div className="mb-10">
          {flagship.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {others.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
