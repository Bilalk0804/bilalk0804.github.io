import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "PromptScout",
      subtitle: "Research Agent",
      description: "An intelligent research agent built with LangChain that enables controlled web access and summarization using LLMs. Features real-time querying, dynamic memory handling, and expert-like research behavior synthesis.",
      technologies: [
        { name: "LangChain", color: "purple" },
        { name: "Python", color: "cyan" },
        { name: "LLMs", color: "green" },
        { name: "NVIDIA API", color: "yellow" },
        { name: "Streamlit", color: "pink" }
      ],
      features: [
        "Custom tool integration via LangChain",
        "Real-time web access and summarization",
        "Clean UI with dynamic memory handling"
      ],
      githubUrl: "https://github.com/Bilalk0804/promptscout",
      liveUrl: "#",
      hoverColor: "purple"
    },
    {
      title: "Chilli Classification",
      subtitle: "ML Research Project",
      description: "Deep learning research project focused on accurate classification of chili varieties using transfer learning. Achieved significant accuracy improvement through advanced preprocessing and algorithm optimization.",
      technologies: [
        { name: "Transfer Learning", color: "purple" },
        { name: "Python", color: "cyan" },
        { name: "Machine Learning", color: "green" },
        { name: "WandB", color: "yellow" },
        { name: "LaTeX", color: "pink" }
      ],
      features: [
        "Accuracy improvement: 78% → 91%",
        "Research paper authored and submitted",
        "Advanced preprocessing & feature engineering"
      ],
      githubUrl: "https://github.com/Bilalk0804/chilli-classification",
      paperUrl: "#",
      hoverColor: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple": return "text-purple-400 border-purple-400/30";
      case "cyan": return "text-cyan-400 border-cyan-400/30";
      case "green": return "text-green-400 border-green-400/30";
      case "yellow": return "text-yellow-400 border-yellow-400/30";
      case "pink": return "text-pink-400 border-pink-400/30";
      default: return "text-gray-400 border-gray-400/30";
    }
  };

  return (
    <section id="projects" className="py-20 bg-github-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16"
        >
          <span className="text-purple-400">#</span> FEATURED PROJECTS
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-github-card p-8 rounded-lg border border-github-border hover:border-${project.hoverColor}-400 transition-all duration-300 group hover:shadow-xl hover:shadow-${project.hoverColor}-500/10`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold font-mono">{project.title}</h3>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="text-text-secondary hover:text-purple-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="text-text-secondary hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.paperUrl && (
                    <a href={project.paperUrl} className="text-text-secondary hover:text-purple-400 transition-colors">
                      <FileText className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className={`text-${project.hoverColor}-400 mb-4`}>{project.subtitle}</div>
              
              <p className="text-text-secondary mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`bg-github-dark px-3 py-1 rounded-full text-sm font-mono border ${getColorClasses(tech.color)}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              
              <div className={`bg-github-dark p-3 rounded border border-github-border group-hover:border-${project.hoverColor}-400/30 transition-colors`}>
                <div className="font-mono text-xs text-text-secondary">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <span className={`text-${project.hoverColor}-400`}>✓</span> {feature}
                      {featureIndex < project.features.length - 1 && <br />}
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
