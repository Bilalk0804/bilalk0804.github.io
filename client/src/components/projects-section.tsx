import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Sanjaya AI",
      subtitle: "Agentic Pharma Innovation Platform",
      description: "End-to-end Agentic AI system automating pharmaceutical molecule research, reducing discovery timelines from 2–3 months to minutes. Multi-worker LangGraph architecture with specialized agents conducting patent landscaping, clinical trial analysis, and market intelligence gathering.",
      technologies: ["LangGraph", "OpenAI SDK", "FastAPI", "React/Vite", "Supabase"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Sentinel Core",
      subtitle: "AI-Powered Digital Forensics Platform",
      description: "Full-stack AI forensics platform analyzing USB drives and file systems through 5 specialized ML pipelines — Vision (YOLOv8), Text/NLP (BERT + BART), Malware (PE + TF-IDF), File Integrity (YARA), and Audio (Whisper). Master Agent uses GPT-4 and Google Gemini to generate forensic case summaries.",
      technologies: ["Python", "FastAPI", "PyTorch", "React", "TypeScript", "Docker"],
      githubUrl: "#",
    },
    {
      title: "ZeroTrace",
      subtitle: "High-Performance Data Erasure Utility",
      description: "Professional-grade security tool for Windows, Linux, macOS, and Android performing irreversible data sanitization using NIST SP 800-88 and DoD 5220.22-M protocols. Wiped a 512GB NVMe SSD in 5.5 hours. Developed for a national hackathon sponsored by the Government of India.",
      technologies: ["Go", "Shell Scripting", "NIST 800-88", "DoD 5220.22-M"],
      githubUrl: "#",
    },
    {
      title: "Chili Disease Classifier",
      subtitle: "Computer Vision Research",
      description: "CNN-based pipeline for agricultural disease classification achieving 92.6% accuracy across multiple disease categories. Research manuscript in preparation. Optimized transfer learning pipeline with advanced augmentation for small-dataset robustness.",
      technologies: ["PyTorch", "Computer Vision", "Transfer Learning", "CNN"],
      githubUrl: "https://github.com/Bilalk0804/chilli-classification",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold font-mono text-white">
            PROJECTS
          </h2>
          <p className="text-white/60 font-mono text-sm max-w-2xl mx-auto mt-4">
            Selected works showcasing my expertise in full-stack development and AI/ML.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono text-white group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-white/40 font-mono text-xs mt-1 tracking-wider">{project.subtitle}</p>
                  )}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-white/60 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 px-3 py-1 rounded text-xs font-mono text-white/70 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}