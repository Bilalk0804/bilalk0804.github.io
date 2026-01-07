import { motion } from "framer-motion";
import { Github, ExternalLink, FileText, Shield, Cpu, Database, Search } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "EvoMind",
      subtitle: "Enterprise-Grade Agentic RAG",
      description: "A sophisticated dual-agent system built on LangGraph for complex reasoning tasks. It orchestrates Retrieval-Augmented Generation across a dynamic Knowledge Graph of 10,000+ nodes, significantly reducing hallucinations in domain-specific contexts.",
      technologies: [
        { name: "LangGraph", color: "purple" },
        { name: "Neo4j", color: "green" },
        { name: "RAG", color: "cyan" },
        { name: "FastAPI", color: "pink" },
        { name: "LlamaIndex", color: "orange" }
      ],
      features: [
        "Multi-agent orchestration with self-correcting reasoning loops",
        "Dynamic Knowledge Graph persistence with 10k+ entity nodes",
        "Hybrid retrieval (Vector + Graph) for 95%+ factual accuracy"
      ],
      githubUrl: "#", // Replace with your actual repo link
      liveUrl: "#",
      hoverColor: "purple"
    },
    {
      title: "ZeroTrace",
      subtitle: "System-Level Data Sanitization",
      description: "A high-performance CLI utility engineered in Go for secure data erasure. Implements military-grade sanitization protocols (NIST 800-88 & DoD 5220.22-M) to ensure cryptographic-level data destruction across varied file systems.",
      technologies: [
        { name: "Golang", color: "cyan" },
        { name: "NIST 800-88", color: "orange" },
        { name: "System Programming", color: "purple" },
        { name: "Concurrency", color: "green" }
      ],
      features: [
        "Full compliance with DoD 5220.22-M & NIST standards",
        "High-throughput shredding using Goroutine-based concurrency",
        "Cross-platform support (Linux, Windows, macOS) with zero dependencies"
      ],
      githubUrl: "#", // Replace with your actual repo link
      liveUrl: "#",
      hoverColor: "cyan"
    },
    {
      title: "LLM Query-Retrieval",
      subtitle: "Explainable AI Framework",
      description: "A production-ready document intelligence system for legal and HR compliance. Built to handle massive PDF/DOCX datasets with an integrated 'Explainability Layer' providing source-verifiable citations and confidence scores.",
      technologies: [
        { name: "FAISS", color: "cyan" },
        { name: "Ollama", color: "yellow" },
        { name: "Sentence-Transformers", color: "purple" },
        { name: "Pydantic", color: "pink" }
      ],
      features: [
        "Automated domain classification with confidence-weighted scoring",
        "Multi-format ingestion pipeline (PDF, DOCX, OCR-ready)",
        "Explainable AI (XAI) layer for regulatory compliance"
      ],
      githubUrl: "#",
      liveUrl: "#",
      hoverColor: "green"
    },
    {
      title: "Chilli Disease Vision",
      subtitle: "DL Research & Optimization",
      description: "Deep Learning research focused on agricultural diagnostic accuracy. I optimized a transfer learning pipeline and advanced preprocessing techniques, leading to a published research paper and significant performance gains.",
      technologies: [
        { name: "PyTorch", color: "purple" },
        { name: "Computer Vision", color: "cyan" },
        { name: "WandB", color: "yellow" },
        { name: "LaTeX", color: "pink" }
      ],
      features: [
        "Achieved 91% classification accuracy (up from 78% baseline)",
        "Implemented advanced augmentation for small-dataset robustness",
        "Authored and published peer-reviewed research findings"
      ],
      githubUrl: "https://github.com/Bilalk0804/chilli-classification",
      paperUrl: "#",
      hoverColor: "pink"
    },
    {
      title: "PromptScout",
      subtitle: "Autonomous Research Agent",
      description: "An intelligent agentic researcher that leverages LangChain and the NVIDIA API to synthesize live web data. Features dynamic memory handling to simulate human-like investigation workflows and deep-dive reporting.",
      technologies: [
        { name: "LangChain", color: "purple" },
        { name: "Python", color: "cyan" },
        { name: "NVIDIA API", color: "green" },
        { name: "Streamlit", color: "pink" }
      ],
      features: [
        "Recursive thought-chaining for complex research queries",
        "Real-time web browsing and automated source synthesis",
        "Dynamic memory management for long-context investigations"
      ],
      githubUrl: "https://github.com/Bilalk0804/promptscout",
      liveUrl: "#",
      hoverColor: "orange"
    }
  ];

  // Utility functions for dynamic styling
  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple": return "text-purple-400 border-purple-400/30";
      case "cyan": return "text-cyan-400 border-cyan-400/30";
      case "green": return "text-green-400 border-green-400/30";
      case "yellow": return "text-yellow-400 border-yellow-400/30";
      case "pink": return "text-pink-400 border-pink-400/30";
      case "orange": return "text-orange-400 border-orange-400/30";
      default: return "text-gray-400 border-gray-400/30";
    }
  };

  const getHoverBorderClass = (color: string) => {
    switch (color) {
      case "purple": return "hover:border-purple-400";
      case "cyan": return "hover:border-cyan-400";
      case "green": return "hover:border-green-400";
      case "yellow": return "hover:border-yellow-400";
      case "pink": return "hover:border-pink-400";
      case "orange": return "hover:border-orange-400";
      default: return "hover:border-gray-400";
    }
  };

  const getHoverShadowClass = (color: string) => {
    switch (color) {
      case "purple": return "hover:shadow-purple-500/10";
      case "cyan": return "hover:shadow-cyan-500/10";
      case "green": return "hover:shadow-green-500/10";
      case "yellow": return "hover:shadow-yellow-500/10";
      case "pink": return "hover:shadow-pink-500/10";
      case "orange": return "hover:shadow-orange-500/10";
      default: return "hover:shadow-gray-500/10";
    }
  };

  const getTextColorClass = (color: string) => {
    switch (color) {
      case "purple": return "text-purple-400";
      case "cyan": return "text-cyan-400";
      case "green": return "text-green-400";
      case "yellow": return "text-yellow-400";
      case "pink": return "text-pink-400";
      case "orange": return "text-orange-400";
      default: return "text-gray-400";
    }
  };

  return (
    <section id="projects" className="py-24 bg-github-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold font-mono mb-4">
            <span className="text-purple-400">#</span> FEATURED_ENGINEERING
          </h2>
          <p className="text-text-secondary font-mono text-sm max-w-2xl mx-auto">
            Selected projects focusing on Agentic AI, Secure Systems, and Deep Learning research.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-github-card p-8 rounded-xl border border-github-border ${getHoverBorderClass(project.hoverColor)} transition-all duration-300 group hover:shadow-2xl ${getHoverShadowClass(project.hoverColor)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className={`${getTextColorClass(project.hoverColor)} text-sm font-mono mt-1`}>
                    {project.subtitle}
                  </div>
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                  {project.paperUrl && (
                    <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                      <FileText className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed text-sm lg:text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`bg-github-dark px-3 py-1 rounded-md text-xs font-mono border ${getColorClasses(tech.color)}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              
              <div className="bg-github-dark/40 p-5 rounded-lg border border-github-border group-hover:border-github-border/80 transition-colors">
                <div className="font-mono text-xs text-text-secondary space-y-3">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <span className={`${getTextColorClass(project.hoverColor)} mr-3 font-bold`}>&gt;</span>
                      <span className="group-hover:text-gray-300 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}