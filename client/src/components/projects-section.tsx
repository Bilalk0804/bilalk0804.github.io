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
  gradient: string;
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
      gradient: "from-indigo-900 via-purple-900 to-black",
    },
    {
      title: "Sentinel Core",
      subtitle: "AI-Powered Digital Forensics Platform",
      description: "Full-stack AI forensics platform analyzing USB drives and file systems through 5 specialized ML pipelines — Vision (YOLOv8), Text/NLP (BERT + BART), Malware (PE + TF-IDF), File Integrity (YARA), and Audio (Whisper). Master Agent uses GPT-4 and Google Gemini to generate forensic case summaries.",
      tags: ["FORENSICS", "MULTI-AGENT", "COMPUTER VISION"],
      technologies: ["Python", "FastAPI", "PyTorch", "React", "TypeScript", "Docker"],
      category: "SECURITY",
      githubUrl: "https://github.com/Bilalk0804/Forensics-2",
      gradient: "from-red-900 via-gray-900 to-black",
    },
    {
      title: "ZeroTrace",
      subtitle: "High-Performance Data Erasure Utility",
      description: "Professional-grade security tool for Windows, Linux, macOS, and Android performing irreversible data sanitization using NIST SP 800-88 and DoD 5220.22-M protocols. Wiped a 512GB NVMe SSD in 5.5 hours. Developed for a national hackathon sponsored by the Government of India.",
      tags: ["SECURITY", "SYSTEMS", "GOVT. HACKATHON"],
      technologies: ["Go", "Shell Scripting", "NIST 800-88", "DoD 5220.22-M"],
      category: "SECURITY",
      githubUrl: "https://github.com/Bilalk0804/ZeroTrace",
      gradient: "from-zinc-800 via-zinc-900 to-black",
    },
    {
      title: "Chili Disease Classifier",
      subtitle: "Computer Vision Research",
      description: "CNN-based pipeline for agricultural disease classification achieving 92.6% accuracy across multiple disease categories. Research manuscript in preparation. Optimized transfer learning pipeline with advanced augmentation for small-dataset robustness.",
      tags: ["RESEARCH", "COMPUTER VISION", "CNN"],
      technologies: ["PyTorch", "Computer Vision", "Transfer Learning", "CNN"],
      category: "RESEARCH",
      kaggleUrl: "https://www.kaggle.com/code/bill080804/chilli-plant-leaves-with-augmentation",
      gradient: "from-green-900 via-emerald-900 to-black",
    },
  ];

  const filters = ["ALL", "AI/ML", "SECURITY", "RESEARCH"];
  const filtered = activeFilter === "ALL" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-black">
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
                From agentic AI systems and hackathon tools to computer vision research.
              </p>
            </div>
            {/* Filter buttons */}
            <div className="flex gap-0 shrink-0">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 font-mono text-xs tracking-widest border border-white/20 transition-all duration-200 ${
                    activeFilter === f
                      ? "bg-white text-black border-white"
                      : "text-white/50 hover:text-white hover:border-white/50 bg-transparent"
                  } first:rounded-l-none last:rounded-r-none`}
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
              className="group flex flex-col md:flex-row gap-8 py-10 hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6"
            >
              {/* Thumbnail */}
              <div className="shrink-0 w-full md:w-64 h-44 overflow-hidden">
                <div
                  className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center rounded-sm`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-white/20 font-mono text-4xl font-bold select-none">
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                {/* Tags row */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/25 text-white/60 font-mono text-xs px-3 py-1 tracking-widest"
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
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-white/90 transition-colors mb-2">
                  {project.title}
                </h3>

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
                      className="flex items-center gap-2 text-white/40 hover:text-white font-mono text-xs tracking-wider transition-colors duration-200"
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
                      className="flex items-center gap-2 text-white/40 hover:text-white font-mono text-xs tracking-wider transition-colors duration-200"
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