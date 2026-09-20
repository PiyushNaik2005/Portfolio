import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CommandPalette } from "./components/CommandPalette";
import { siteConfig } from "./data/config";

function App() {
  // Console easter egg for devtools-opening recruiters
  useEffect(() => {
    console.log(
      `%c👋 Hey recruiter — looking under the hood?`,
      "color: #a78bfa; font-size: 16px; font-weight: bold; font-family: monospace;"
    );
    console.log(
      `%cLet's talk → ${siteConfig.email}`,
      "color: #67e8f9; font-size: 13px; font-family: monospace;"
    );
    console.log(
      `%cBuilt with React + Vite + Tailwind CSS + Framer Motion`,
      "color: #6ee7b7; font-size: 11px; font-family: monospace;"
    );
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </div>
  );
}

export default App;
