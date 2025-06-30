import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "PromptScout",
      subtitle: "AI Research Agent",
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
      title: "Chilli Disease Classification",
      subtitle: "ML Research Project",
      description: "Deep learning research project focused on accurate classification of chili disease varieties using transfer learning. Achieved significant accuracy improvement through advanced preprocessing and algorithm optimization.",
      technologies: [
        { name: "Transfer Learning", color: "purple" },
        { name: "Python", color: "cyan" },
        { name: "Machine Learning", color: "green" },
        { name: "WandB", color: "yellow" },
        { name: "LaTeX", color: "pink" }
      ],
      features: [
        "Accuracy improvement: 78% → 91%",
        "5-class disease classification",
        "Research paper authored and published"
      ],
      githubUrl: "https://github.com/Bilalk0804/chilli-classification",
      paperUrl: "#",
      hoverColor: "cyan"
    },
    {
      title: "MCP Servers Collection",
      subtitle: "Development Tools",
      description: "Custom Model Context Protocol (MCP) servers built for enhanced AI development workflows. Developed multiple server implementations for different use cases and integrations.",
      technologies: [
        { name: "Python", color: "cyan" },
        { name: "FastAPI", color: "purple" },
        { name: "MCP", color: "green" },
        { name: "API Design", color: "yellow" }
      ],
      features: [
        "Multiple MCP server implementations",
        "Enhanced AI development workflows",
        "Custom protocol integrations"
      ],
      githubUrl: "https://github.com/Bilalk0804/mcp-servers",
      liveUrl: "#",
      hoverColor: "green"
    },
    {
      title: "AI Portfolio Website",
      subtitle: "Full-Stack Development",
      description: "Modern portfolio website built with React and TypeScript, featuring a developer-themed design with smooth animations and responsive layout. Showcases AI/ML projects and research work.",
      technologies: [
        { name: "React", color: "cyan" },
        { name: "TypeScript", color: "purple" },
        { name: "Tailwind CSS", color: "green" },
        { name: "Framer Motion", color: "pink" },
        { name: "PostgreSQL", color: "yellow" }
      ],
      features: [
        "Responsive developer-themed design",
        "Smooth animations with Framer Motion",
        "Database integration and deployment"
      ],
      githubUrl: "https://github.com/Bilalk0804/portfolio",
      liveUrl: "#",
      hoverColor: "pink"
    },
    {
      title: "Data Analysis Projects",
      subtitle: "Machine Learning & Analytics",
      description: "Collection of data analysis and machine learning projects focusing on real-world datasets. Includes exploratory data analysis, feature engineering, and predictive modeling techniques.",
      technologies: [
        { name: "Pandas", color: "purple" },
        { name: "NumPy", color: "cyan" },
        { name: "Scikit-learn", color: "green" },
        { name: "Matplotlib", color: "yellow" },
        { name: "Jupyter", color: "pink" }
      ],
      features: [
        "Comprehensive data exploration",
        "Advanced feature engineering",
        "Multiple ML model implementations"
      ],
      githubUrl: "https://github.com/Bilalk0804/data-analysis",
      liveUrl: "#",
      hoverColor: "yellow"
    },
    {
      title: "Open Source Contributions",
      subtitle: "Community Projects",
      description: "Active contributions to open-source projects in AI/ML space. Participated in GirlScript Summer of Code 2024 and contributed to various repositories with bug fixes and feature implementations.",
      technologies: [
        { name: "Git", color: "orange" },
        { name: "GitHub", color: "purple" },
        { name: "Python", color: "cyan" },
        { name: "Documentation", color: "green" }
      ],
      features: [
        "GirlScript Summer of Code contributor",
        "Multiple repository contributions",
        "Documentation and bug fixes"
      ],
      githubUrl: "https://github.com/Bilalk0804",
      liveUrl: "#",
      hoverColor: "orange"
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
