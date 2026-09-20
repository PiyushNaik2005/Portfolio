import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Search, Download, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/config";

interface CommandItem {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  action: () => void;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const commands: CommandItem[] = [
    { id: "projects", label: "Go to Projects", description: "View all featured projects", icon: ArrowRight, action: () => scrollTo("projects") },
    { id: "about", label: "Go to About", description: "Learn about Piyush", icon: ArrowRight, action: () => scrollTo("about") },
    { id: "skills", label: "Go to Skills", description: "Technical skills matrix", icon: ArrowRight, action: () => scrollTo("skills") },
    { id: "contact", label: "Go to Contact", description: "Send a message", icon: ArrowRight, action: () => scrollTo("contact") },
    { id: "resume", label: "Download Resume", description: "Get the PDF resume", icon: Download, action: () => { window.open(siteConfig.resumePath, "_blank"); setOpen(false); } },
    { id: "email", label: "Copy Email", description: siteConfig.email, icon: Mail, action: () => { navigator.clipboard.writeText(siteConfig.email); setOpen(false); } },
    { id: "github", label: "Open GitHub", description: "View GitHub profile", icon: ArrowRight, action: () => { window.open(siteConfig.github, "_blank"); setOpen(false); } },
    { id: "linkedin", label: "Open LinkedIn", description: "View LinkedIn profile", icon: ArrowRight, action: () => { window.open(siteConfig.linkedin, "_blank"); setOpen(false); } },
  ];

  const filtered = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
    }
  }, [open]);

  return (
    <>
      {/* Trigger hint */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 glass flex items-center gap-2 px-4 py-2.5 rounded-xl border border-bg-border text-xs text-gray-500 hover:text-gray-300 hover:border-accent-violet/40 transition-all duration-200 focus-visible-ring shadow-card"
        aria-label="Open command palette (Ctrl+K)"
        title="Open command palette"
      >
        <Command className="w-3.5 h-3.5" />
        <span className="hidden sm:block">Command Palette</span>
        <kbd className="mono text-gray-600 bg-bg-primary px-1.5 py-0.5 rounded text-xs">K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-bg-primary/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.15 }}
              className="fixed top-32 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg mx-4"
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
            >
              <div className="glass rounded-2xl border border-accent-violet/20 shadow-glow-violet overflow-hidden">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-bg-border">
                  <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent text-gray-200 text-sm placeholder-gray-600 outline-none"
                    aria-label="Command search"
                  />
                  <kbd className="mono text-xs text-gray-600 bg-bg-primary px-2 py-1 rounded border border-bg-border">ESC</kbd>
                </div>

                {/* Results */}
                <div className="max-h-80 overflow-y-auto py-2">
                  {filtered.length === 0 ? (
                    <p className="text-center text-gray-600 text-sm py-8">No commands found</p>
                  ) : (
                    filtered.map((cmd) => {
                      const Icon = cmd.icon;
                      return (
                        <button
                          key={cmd.id}
                          onClick={cmd.action}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent-violet/5 hover:text-white transition-all text-left focus-visible-ring"
                        >
                          <div className="w-8 h-8 rounded-lg bg-accent-violet/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-accent-violet-light" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-200 font-medium">{cmd.label}</p>
                            <p className="text-xs text-gray-500">{cmd.description}</p>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>

                <div className="border-t border-bg-border px-4 py-2 flex items-center gap-4 text-xs text-gray-600">
                  <span><kbd className="mono">↑↓</kbd> navigate</span>
                  <span><kbd className="mono">↵</kbd> select</span>
                  <span><kbd className="mono">Esc</kbd> close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
