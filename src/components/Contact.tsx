import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Copy, MessageSquare, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { siteConfig } from "../data/config";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button onClick={handleCopy}
      className="group flex items-center gap-3 w-full p-4 rounded-xl border border-bg-border hover:border-accent-violet/40 hover:bg-accent-violet/5 transition-all duration-200 text-left focus-visible-ring"
      id="contact-copy-email" aria-label={`Copy email address: ${siteConfig.email}`}>
      <div className="w-10 h-10 rounded-xl bg-accent-violet/10 flex items-center justify-center flex-shrink-0">
        {/* Emerald check = success state after copy */}
        {copied ? <CheckCircle className="w-5 h-5 text-accent-emerald-light" /> : <Copy className="w-5 h-5 text-accent-violet-light" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-500 mb-0.5">Email</p>
        <p className="text-sm text-gray-200 font-mono truncate">{siteConfig.email}</p>
      </div>
      <span className={`text-xs transition-all ${copied ? "text-accent-emerald-light" : "text-slate-600 group-hover:text-slate-400"}`}>
        {copied ? "Copied!" : "Click to copy"}
      </span>
    </button>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteConfig.formspreeEndpoint) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST", body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); setFormData({ name: "", email: "", subject: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputCls = "w-full px-4 py-3 rounded-xl bg-bg-primary border border-bg-border text-gray-200 text-sm placeholder-slate-600 focus:outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/30 transition-all";

  return (
    <section id="contact" className="py-24 section-padding" aria-label="Contact">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 text-accent-emerald-mid" />
            <span className="mono text-sm text-accent-emerald-light uppercase tracking-widest">05 / Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s <span className="text-gradient-emerald">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Open to internships, full-time AI/ML &amp; data roles, and collaborative projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="space-y-4">
            <CopyEmail />

            {/* LinkedIn — violet interactive */}
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 w-full p-4 rounded-xl border border-bg-border hover:border-accent-violet/40 hover:bg-accent-violet/5 transition-all duration-200 focus-visible-ring"
              id="contact-linkedin" aria-label="Visit LinkedIn profile">
              <div className="w-10 h-10 rounded-xl bg-accent-violet/10 flex items-center justify-center flex-shrink-0">
                <LinkedInIcon className="w-5 h-5 text-accent-violet-light" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                <p className="text-sm text-gray-200 truncate">piyush-naik-49569825b</p>
              </div>
              <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">Open →</span>
            </a>

            {/* GitHub — neutral */}
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 w-full p-4 rounded-xl border border-bg-border hover:border-slate-500/40 hover:bg-white/5 transition-all duration-200 focus-visible-ring"
              id="contact-github" aria-label="Visit GitHub profile">
              <div className="w-10 h-10 rounded-xl bg-slate-700/40 flex items-center justify-center flex-shrink-0">
                <GithubIcon className="w-5 h-5 text-slate-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 mb-0.5">GitHub</p>
                <p className="text-sm text-gray-200 truncate">PiyushNaik2005</p>
              </div>
              <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">Open →</span>
            </a>

            {/* Seeking card — emerald tags (success/availability state) */}
            <div className="mt-8 p-5 rounded-xl glass border border-bg-border">
              <p className="text-xs text-slate-500 mb-2 mono">// Currently seeking</p>
              <p className="text-gray-300 text-sm font-medium">AI/ML internships and full-time roles starting 2027</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Remote", "Hybrid", "On-site (India)"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-xs bg-accent-emerald/10 text-accent-emerald-light border border-accent-emerald/20 mono">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 border border-bg-border space-y-4" noValidate>
              {!siteConfig.formspreeEndpoint && (
                <div className="flex gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-300/80">
                    Frontend-only placeholder — add your Formspree endpoint in{" "}
                    <code className="mono">src/data/config.ts</code> to activate.
                  </p>
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-slate-500 mb-2 font-medium">Name</label>
                  <input id="contact-name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-slate-500 mb-2 font-medium">Email</label>
                  <input id="contact-email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="jane@company.com" className={inputCls} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-xs text-slate-500 mb-2 font-medium">Subject</label>
                <input id="contact-subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Internship / Collaboration / Say hi" className={inputCls} />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs text-slate-500 mb-2 font-medium">Message</label>
                <textarea id="contact-message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                  placeholder="Tell me about the role or project..." className={`${inputCls} resize-none`} />
              </div>

              {/* Submit — emerald = send/success CTA */}
              <button type="submit" disabled={status === "sending"}
                className={`group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-60 disabled:scale-100 focus-visible-ring
                  ${status === "success"
                    ? "bg-gradient-to-r from-accent-emerald to-accent-emerald-mid shadow-glow-emerald"
                    : "bg-gradient-to-r from-accent-emerald to-accent-emerald-mid hover:opacity-90 hover:scale-[1.02] shadow-glow-emerald"
                  }`}
                id="contact-submit">
                {status === "sending" ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                ) : status === "success" ? (
                  <><CheckCircle className="w-4 h-4" />Message Sent!</>
                ) : (
                  <><Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />Send Message</>
                )}
              </button>

              {status === "error" && (
                <p className="text-xs text-red-400 text-center">
                  {siteConfig.formspreeEndpoint ? "Failed to send. Please try again." : "Form endpoint not configured — please email directly."}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
