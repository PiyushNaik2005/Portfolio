import { motion } from "framer-motion";
import { Brain, Database, BarChart2, Wrench, Layers } from "lucide-react";
import { skillGroups } from "../data/config";

const iconMap: Record<string, React.ElementType> = { Brain, Database, BarChart2, Wrench, Layers };

// Violet = primary (ML/DL, Tools), Emerald = secondary (Data, Viz)
const colorMap: Record<string, { badge: string; glow: string; border: string; icon: string }> = {
  violet: {
    badge: "bg-accent-violet/10 text-accent-violet-light border-accent-violet/25",
    glow: "hover:shadow-glow-violet",
    border: "border-accent-violet/25 hover:border-accent-violet/55",
    icon: "bg-accent-violet/15 text-accent-violet-light",
  },
  cyan: {
    // Repurposed as neutral slate-tone for Data group
    badge: "bg-slate-700/50 text-slate-300 border-slate-600/50",
    glow: "hover:shadow-card",
    border: "border-slate-600/40 hover:border-slate-500/60",
    icon: "bg-slate-700/50 text-slate-300",
  },
  emerald: {
    badge: "bg-accent-emerald/10 text-accent-emerald-light border-accent-emerald/25",
    glow: "hover:shadow-glow-emerald",
    border: "border-accent-emerald/25 hover:border-accent-emerald/55",
    icon: "bg-accent-emerald/15 text-accent-emerald-light",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    glow: "hover:shadow-card",
    border: "border-amber-500/25 hover:border-amber-500/50",
    icon: "bg-amber-500/15 text-amber-300",
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 section-padding bg-bg-secondary/40" aria-label="Technical Skills">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-5 h-5 text-accent-violet" />
            <span className="mono text-sm text-accent-violet-light uppercase tracking-widest">02 / Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-gradient-violet">Skills Matrix</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Competencies grounded in real project work — no inflated bars, just the actual tools and techniques applied.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Brain;
            const colors = colorMap[group.color] ?? colorMap.violet;
            return (
              <motion.div key={group.category}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`glass rounded-2xl p-6 border transition-all duration-300 ${colors.border} ${colors.glow}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span key={skill} whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all duration-200 cursor-default ${colors.badge}`}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
