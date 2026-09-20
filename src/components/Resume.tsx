import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { siteConfig } from "../data/config";

export function Resume() {
  return (
    <section id="resume" className="py-24 section-padding bg-bg-secondary/40" aria-label="Resume">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-accent-violet" />
            <span className="mono text-sm text-accent-violet-light uppercase tracking-widest">04 / Resume</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Download <span className="text-gradient-violet">Resume</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="glass rounded-2xl border border-bg-border overflow-hidden hover:border-accent-emerald/30 transition-colors">
          {/* Preview */}
          <div className="bg-bg-card min-h-64 flex flex-col items-center justify-center p-12 text-center border-b border-bg-border">
            <div className="w-20 h-20 rounded-2xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-accent-violet-light" />
            </div>
            <p className="text-white font-bold text-xl mb-2">{siteConfig.name}</p>
            <p className="text-gray-400 text-sm mb-2">{siteConfig.university}</p>
            <p className="text-slate-500 text-xs mono">AI/ML Engineer · Data Scientist · Python Developer</p>

          </div>

          {/* Action row — emerald = primary CTA (download = success action) */}
          <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              Targeted for AI/ML Engineer, Data Scientist, and Python Developer roles.
            </p>
            <a href={siteConfig.resumePath} download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-accent-emerald to-accent-emerald-mid hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-glow-emerald focus-visible-ring"
              id="resume-download-btn" aria-label="Download resume PDF">
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
