import { desc } from "drizzle-orm";
import { motion } from "framer-motion";
import { Github, Microscope } from "lucide-react";
import { title } from "process";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "GSSOC Extended '25",
      period: "Aug 2025 - ongoing",
      description: "Selected among contributors for open-source programs. Built foundational skills in Git, GitHub, and collaborative development, which were later applied in building PromptScout and custom MCP servers.",
      icon: Github,
      color: "purple",
      side: "left"
    },
    {
      title: "Google Campus Ambassador",
      period: "Aug 2025 - Ongoing",
      description: "Actively promoting Google technologies and initiatives on campus. Engaging with students to foster a community around Google products and services.",
      icon: Github,
      color:"green",
      side: "right"     

    },
    {
      title:"Open Source Connect India",
      period: "Aug 2025 - Ongoing",
      description: "Contributing to the Open Source Connect India initiative, focusing on enhancing open-source collaboration and community engagement. Actively participating in discussions and projects to promote open-source culture in India.",
      icon: Github,
      color: "blue",
      side: "left"
    },
    {
      title: "GSSOC Extended '24",
      period: "Oct 2024 - Nov 2024",
      description: "Selected among contributors for open-source programs. Built foundational skills in Git, GitHub, and collaborative development, which were later applied in building PromptScout and custom MCP servers.",
      icon: Github,
      color: "purple",
      side: "right"
    },
    {
      title: "Research Work",
      period: "January 2025 - Ongoing",
      description: "Conducting in-depth research on machine learning classification techniques. Authored research papers and achieved significant model performance improvements through advanced optimization techniques.",
      icon: Microscope,
      color: "cyan",
      side: "left"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-github-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16"
        >
          <span className="text-purple-400">#</span> EXPERIENCE
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-purple-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = exp.side === "left";
              
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col md:flex-row items-center"
                >
                  {/* Left content */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-8' : ''} mb-4 md:mb-0`}>
                    {isLeft && (
                      <div className={`bg-github-dark p-6 rounded-lg border border-github-border hover:border-${exp.color}-400 transition-all duration-300`}>
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-${exp.color}-400 rounded-full flex items-center justify-center mr-4`}>
                            <Icon className="text-white w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold font-mono">{exp.title}</h3>
                            <div className={`text-${exp.color}-400 text-sm`}>{exp.period}</div>
                          </div>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`hidden md:block w-4 h-4 bg-${exp.color}-400 rounded-full border-4 border-github-card`}></div>
                  
                  {/* Right content */}
                  <div className={`md:w-1/2 ${!isLeft ? 'md:pl-8' : ''}`}>
                    {!isLeft && (
                      <div className={`bg-github-dark p-6 rounded-lg border border-github-border hover:border-${exp.color}-400 transition-all duration-300`}>
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-${exp.color}-400 rounded-full flex items-center justify-center mr-4`}>
                            <Icon className="text-white w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold font-mono">{exp.title}</h3>
                            <div className={`text-${exp.color}-400 text-sm`}>{exp.period}</div>
                          </div>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
