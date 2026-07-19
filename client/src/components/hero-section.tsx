import { Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TERMINAL_LINES = [
  "$ neofetch",
  "OS: Arch Linux x86_64",
  "WM: Hyprland",
  "Shell: zsh",
  "Role: AI Engineer · Full Stack Developer · Builder",
  "Status: open to work ✓",
];

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), visibleLines === 0 ? 600 : 260);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Corner grid background overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(203,166,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(203,166,247,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, black 78%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            MOHD<br />BILAL KHAN
          </h1>
        </motion.div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px max-w-md mx-auto mb-8"
          style={{ background: "linear-gradient(90deg, transparent, #cba6f7, #89dceb, transparent)" }}
        />

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base font-mono tracking-[0.3em] uppercase mb-4"
          style={{ color: "#cba6f7" }}
        >
          AI Engineer &nbsp;·&nbsp; Full Stack Developer &nbsp;·&nbsp; Builder
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/40 font-mono text-sm max-w-xl mx-auto mb-4"
        >
          ECE @ IIIT Pune &nbsp;·&nbsp; Arch Linux enjoyer &nbsp;·&nbsp; Football ⚽ &nbsp;·&nbsp; Open to work
        </motion.p>

        {/* Open to work ping */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#a6e3a1" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#a6e3a1" }} />
          </span>
          <span className="font-mono text-xs tracking-widest" style={{ color: "#a6e3a1" }}>OPEN TO OPPORTUNITIES</span>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 flex flex-col items-center"
        >
          <div
            className="w-full max-w-sm text-left rounded-lg overflow-hidden border"
            style={{ borderColor: "rgba(203,166,247,0.2)", background: "rgba(10,10,18,0.85)" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <span className="w-3 h-3 rounded-full" style={{ background: "#f38ba8" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#fab387" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#a6e3a1" }} />
              <span className="ml-2 font-mono text-xs text-white/30">bilal@arch ~ </span>
            </div>
            {/* Terminal lines */}
            <div className="px-4 py-3 space-y-0.5">
              {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                <p key={i} className="font-mono text-xs leading-relaxed">
                  {line.startsWith("$") ? (
                    <span>
                      <span style={{ color: "#a6e3a1" }}>$</span>
                      <span className="text-white/70">{line.slice(1)}</span>
                    </span>
                  ) : line.startsWith("OS:") || line.startsWith("WM:") || line.startsWith("Shell:") ? (
                    <span>
                      <span style={{ color: "#89dceb" }}>{line.split(":")[0]}:</span>
                      <span className="text-white/60">{line.slice(line.indexOf(":") + 1)}</span>
                    </span>
                  ) : line.startsWith("Role:") ? (
                    <span>
                      <span style={{ color: "#cba6f7" }}>Role:</span>
                      <span className="text-white/60">{line.slice(5)}</span>
                    </span>
                  ) : (
                    <span>
                      <span style={{ color: "#fab387" }}>Status:</span>
                      <span style={{ color: "#a6e3a1" }}> open to work ✓</span>
                    </span>
                  )}
                </p>
              ))}
              {visibleLines < TERMINAL_LINES.length && (
                <p className="font-mono text-xs">
                  <span style={{ color: "#a6e3a1" }}>$ </span>
                  <span className="terminal-cursor" />
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-8"
        >
          {[
            { href: "https://github.com/Bilalk0804", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/bilal-khan-219880285", icon: Linkedin, label: "LinkedIn" },
            { href: "https://nodeflowai.in", icon: ExternalLink, label: "NodeFlowAI" },
            { href: "/resume.pdf", icon: FileText, label: "Resume" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex flex-col items-center gap-1 text-white/40 hover:text-white transition-all duration-300"
            >
              <Icon className="w-6 h-6" />
              <span className="font-mono text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{label.toUpperCase()}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
