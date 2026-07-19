import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  kaggleUrl?: string;
  image?: string;
  accentColor: string;
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const projects: Project[] = [
    {
      title: "Sanjaya AI",
      subtitle: "Agentic Pharma Innovation Platform",
      description: "End-to-end Agentic AI system automating pharmaceutical molecule research, reducing discovery timelines from 2–3 months to minutes. Multi-worker LangGraph architecture with specialized agents conducting patent landscaping, clinical trial analysis, and market intelligence gathering.",
      tags: ["AGENTIC AI", "FULL STACK", "HEALTHCARE"],
      technologies: ["LangGraph", "OpenAI SDK", "FastAPI", "React/Vite", "Supabase"],
      category: "AI/ML",
      githubUrl: "https://github.com/Bilalk0804/Sanjaya-AI",
      liveUrl: "https://sanjaya-ai.onrender.com",
      image: "/projects/sanjaya-ai.jpg",
      accentColor: "#b4befe",
    },
    {
      title: "Le Rituel",
      subtitle: "AI-Powered Skincare Routine Platform",
      description: "Production-grade skincare platform that builds a personalised AM/PM routine from scratch. Upload a selfie — Claude Sonnet 4.5 (vision) reads your skin surface and maps it to a skin type and concerns. Smart score-based recommendation engine curates products by skin type, budget, and allergies. Includes an AI chat assistant, ingredient conflict checker, daily progress tracking, and routine streak system.",
      tags: ["LIVE PRODUCT", "FULL STACK", "AI/ML"],
      technologies: ["FastAPI", "React 19", "MongoDB", "Claude AI", "Docker", "nginx"],
      category: "AI/ML",
      githubUrl: "https://github.com/Bilalk0804/Le-Rituel",
      liveUrl: "https://nodeflowai.in",
      image: "/projects/le-rituel.jpg",
      accentColor: "#a6e3a1",
    },
    {
      title: "Nirnay",
      subtitle: "AI Agent for Systemic Analysis",
      description: "AI agent tailored for systemic analysis and startup ideation — given a domain or problem, it maps the competitive landscape, identifies gaps, and generates prioritized opportunity areas. Built for founders and researchers who think in systems.",
      tags: ["AI AGENT", "IDEATION", "ANALYSIS"],
      technologies: ["Python", "LLMs", "LangChain"],
      category: "AI/ML",
      githubUrl: "https://github.com/Bilalk0804/Nirnay",
      image: "/projects/nirnay.jpg",
      accentColor: "#89dceb",
    },
    {
      title: "EvoMind",
      subtitle: "AI Therapist & Emotional Support Agent",
      description: "Conversational AI agent designed to support users emotionally — listens, understands mood patterns, and provides empathetic, contextual responses. Built with a focus on mental wellness, offering a safe space for users to express themselves and receive non-judgmental guidance.",
      tags: ["AI AGENT", "MENTAL HEALTH", "CONVERSATIONAL AI"],
      technologies: ["Python", "LLM", "RAG", "FastAPI"],
      category: "AI/ML",
      githubUrl: "https://github.com/Bilalk0804/EvoMind",
      image: "/projects/evomind.jpg",
      accentColor: "#94e2d5",
    },
  ];

  const filters = ["ALL", "AI/ML"];
  const filtered = activeFilter === "ALL" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/40 font-mono text-sm tracking-widest mb-3">02 — WORK</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-none">Projects</h2>
              <p className="text-white/50 font-mono text-sm mt-4 max-w-xl">
                From agentic AI systems and live products to full stack builds.
              </p>
            </div>
            {/* Filter buttons */}
            <div className="flex gap-0 shrink-0">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="px-4 py-2 font-mono text-xs tracking-widest border border-white/20 transition-all duration-200"
                  style={
                    activeFilter === f
                      ? { background: "#cba6f7", color: "#000", borderColor: "#cba6f7" }
                      : { color: "rgba(255,255,255,0.5)", background: "transparent" }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project list */}
        <div className="divide-y divide-white/10">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col md:flex-row gap-8 py-10 transition-colors duration-300 -mx-6 px-6"
              style={{ '--accent': project.accentColor } as React.CSSProperties}
            >
              {/* Thumbnail */}
              <div className="shrink-0 w-full md:w-72 h-48 overflow-hidden rounded-sm relative">
                <div
                  className="w-full h-full"
                  style={{
                    borderLeft: `2px solid ${project.accentColor}30`,
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5">
                      <span className="text-white/20 font-mono text-4xl font-bold select-none">
                        {project.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  {/* Accent overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${project.accentColor}15, transparent)` }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                {/* Tags row */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 tracking-widest border"
                      style={{ borderColor: `${project.accentColor}50`, color: project.accentColor }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 text-white/35 font-mono text-xs px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white/90 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="font-mono text-xs tracking-widest mb-3" style={{ color: `${project.accentColor}99` }}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/55 leading-relaxed text-sm md:text-base mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-5 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs tracking-wider transition-colors duration-200 text-white/40 hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                      GITHUB
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs tracking-wider transition-colors duration-200"
                      style={{ color: project.accentColor }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      LIVE DEMO
                    </a>
                  )}
                  {project.kaggleUrl && (
                    <a
                      href={project.kaggleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/40 hover:text-white font-mono text-xs tracking-wider transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      KAGGLE
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
