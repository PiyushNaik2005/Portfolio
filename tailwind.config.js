/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0f172a",
          secondary: "#1e293b",
          card: "#162032",
          border: "#334155",
        },
        accent: {
          violet: "#7c3aed",
          "violet-mid": "#8b5cf6",
          "violet-light": "#a78bfa",
          emerald: "#059669",
          "emerald-mid": "#10b981",
          "emerald-light": "#34d399",
          cyan: "#0891b2",
          "cyan-light": "#38bdf8",
          amber: "#d97706",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Space Mono", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-spin": "borderSpin 3s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        borderSpin: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #7c3aed, #8b5cf6)",
        "gradient-success": "linear-gradient(135deg, #059669, #10b981)",
        "gradient-headline": "linear-gradient(135deg, #a78bfa, #34d399)",
        "gradient-cyber": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-violet":  "0 0 24px rgba(124,58,237,0.35), 0 0 48px rgba(124,58,237,0.12)",
        "glow-emerald": "0 0 24px rgba(16,185,129,0.35), 0 0 48px rgba(16,185,129,0.12)",
        "glow-cyan":    "0 0 20px rgba(8,145,178,0.25), 0 0 40px rgba(8,145,178,0.08)",
        card: "0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};
