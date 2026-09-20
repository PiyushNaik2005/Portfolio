import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Target, BookOpen } from "lucide-react";
import { GithubIcon } from "./Icons";
import { siteConfig } from "../data/config";
import { useGitHubStats } from "../hooks/useGitHubStats";

const GH_USERNAME = "PiyushNaik2005";

function StatCard({ label, value, loading }: { label: string; value: string | number; loading: boolean }) {
  return (
    <div className="glass rounded-xl p-4 text-center border border-bg-border">
      <div className={`mono text-2xl font-bold text-accent-violet-light mb-1 ${loading ? "animate-pulse" : ""}`}>
        {loading ? "..." : value}
      </div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

export function About() {
  const { stats, loading } = useGitHubStats(GH_USERNAME);

  return (
    <section id="about" className="py-24 section-padding" aria-label="About Me">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-accent-violet" />
            <span className="mono text-sm text-accent-violet-light uppercase tracking-widest">01 / About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The person behind the <span className="text-gradient-violet">models</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {/* Bio card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0, duration: 0.5 }}
              className="glass rounded-2xl p-6 space-y-4 border border-bg-border hover:border-accent-violet/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-violet/15 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent-violet-light" />
                </div>
                <div>
                  <p className="text-white font-semibold">Education</p>
                  <p className="text-xs text-slate-500 mono">{siteConfig.university}</p>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">{siteConfig.elevatorPitch}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                I believe the best AI systems are not just accurate — they're explainable, responsible, and built for real-world edge cases. Whether I'm engineering a Grad-CAM visualization layer, writing CTEs for telemetry rollups, or exploring content trends in a dataset of 8,800+ titles, I approach every problem with both analytical rigor and engineering craftsmanship.
              </p>
            </motion.div>

            {/* Target Roles — emerald (aspirational/action) */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-bg-border hover:border-accent-emerald/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-emerald/15 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent-emerald-light" />
                </div>
                <p className="text-white font-semibold">Target Roles</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.targetRoles.map((role) => (
                  <span key={role} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-accent-emerald/10 text-accent-emerald-light border border-accent-emerald/20">
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Interests — violet */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-bg-border hover:border-accent-violet/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-violet/15 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-violet-light" />
                </div>
                <p className="text-white font-semibold">Interests &amp; Focus Areas</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                {["Deep Learning & CNNs", "Computer Vision", "Explainable AI (XAI)", "SQL Analytics & BI", "Python Data Pipelines", "Practical AI Applications"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-violet flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — GitHub + strengths */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-bg-border">
              <p className="text-white font-semibold mb-6 flex items-center gap-2">
                {/* Emerald pulse = "live/active" (success state) */}
                <span className="w-2 h-2 bg-accent-emerald-mid rounded-full animate-pulse" />
                Live GitHub Stats
                <span className="mono text-xs text-slate-500 ml-auto">@{GH_USERNAME}</span>
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <StatCard label="Public Repos" value={stats?.public_repos ?? 0} loading={loading} />
                <StatCard label="Followers" value={stats?.followers ?? 0} loading={loading} />
                <StatCard label="Following" value={stats?.following ?? 0} loading={loading} />
              </div>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-bg-border text-gray-400 hover:text-white hover:border-accent-violet/40 hover:bg-accent-violet/5 transition-all duration-200 text-sm font-medium focus-visible-ring"
                id="about-github-link">
                <GithubIcon className="w-4 h-4" />
                View GitHub Profile
              </a>
            </div>

            <div className="glass rounded-2xl p-6 border border-bg-border">
              <p className="text-white font-semibold mb-4">What I bring to a team</p>
              <div className="space-y-3">
                {[
                  { title: "End-to-End Thinking", desc: "From raw data to deployed model to explainable output" },
                  { title: "Responsible AI Mindset", desc: "Explainability, limitations, and honest model framing built-in" },
                  { title: "Cross-Domain Fluency", desc: "Deep learning + SQL analytics + Python data engineering" },
                  { title: "Problem-First Approach", desc: "Tools serve the problem, not the other way around" },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    {/* Emerald checkmark = success/positive */}
                    <span className="w-5 h-5 rounded flex-shrink-0 bg-accent-emerald/20 border border-accent-emerald/30 flex items-center justify-center mt-0.5">
                      <span className="text-accent-emerald-light text-xs font-bold">✓</span>
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-200">{title}</p>
                      <p className="text-xs text-slate-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
