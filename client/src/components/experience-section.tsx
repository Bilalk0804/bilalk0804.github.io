import { motion } from "framer-motion";
import { Microscope, Shield, Users, Award, GitBranch, Terminal, Cpu } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Student Researcher & Team Lead",
      company: "Digital Forensics Lab, IIIT Pune",
      period: "Oct 2025 - Present",
      description: "Leading a research team for a ₹4.2 Crore government-funded project (Next Generation Data Carving). Engineered a ViT module for violence detection with 84.01% accuracy and developing file-tampering systems using CLIP models and Knowledge Graphs.",
      icon: Shield,
      color: "purple",
      side: "left",
      impact: "₹4.2 Cr Project" // From Resume 
    },
    {
      title: "Google DSC Campus Ambassador",
      company: "IIIT Pune",
      period: "Aug 2025 - Present",
      description: "Appointed as the Google Developer Student Clubs Lead for IIIT Pune. Driving technical innovation and community engagement through workshops on Google Cloud, AI, and open-source ecosystems.",
      icon: Users,
      color: "green",
      side: "right",
      impact: "GDSC Lead" // From Resume [cite: 33]
    },
    {
      title: "ML Researcher (Computer Vision)",
      company: "Independent Research",
      period: "Jan 2025 - Present",
      description: "Developed an optimized CNN pipeline for agricultural diagnostics. Authored a research manuscript on Chili Plant Disease classification, achieving 91% accuracy across 5 distinct classes.",
      icon: Microscope,
      color: "cyan",
      side: "left",
      impact: "91% Accuracy" // From Resume [cite: 31]
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      period: "Summer 2024 and 2025",
      description: "Active contributor during the 2024 cohort. Specialized in enhancing codebase reliability and documentation for various AI/ML repositories, fostering collaborative engineering skills.",
      icon: Terminal, // Replaced deprecated Github icon
      color: "orange",
      side: "right",
      impact: "GSSOC '24" // From Resume [cite: 32]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple": return { text: "text-purple-400", border: "hover:border-purple-400", bg: "bg-purple-400" };
      case "green": return { text: "text-green-400", border: "hover:border-green-400", bg: "bg-green-400" };
      case "cyan": return { text: "text-cyan-400", border: "hover:border-cyan-400", bg: "bg-cyan-400" };
      case "orange": return { text: "text-orange-400", border: "hover:border-orange-400", bg: "bg-orange-400" };
      default: return { text: "text-gray-400", border: "hover:border-gray-400", bg: "bg-gray-400" };
    }
  };

  return (
    <section id="experience" className="py-24 bg-github-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold font-mono">
            <span className="text-purple-400">#</span> PROFESSIONAL_PATH
          </h2>
          <p className="text-text-secondary font-mono text-sm mt-4">Research leadership and engineering contributions.</p>
        </motion.div>
        
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-github-border hidden md:block"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = exp.side === "left";
              const colors = getColorClasses(exp.color);
              
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-center"
                >
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:order-last md:pl-12'} w-full`}>
                    <div className={`bg-github-card p-8 rounded-xl border border-github-border ${colors.border} transition-all duration-300 relative group`}>
                      {/* Impact Tag */}
                      <div className={`absolute -top-3 ${isLeft ? 'right-6' : 'left-6'} bg-github-dark border border-github-border px-3 py-1 rounded-full text-[10px] font-mono ${colors.text} uppercase tracking-widest font-bold`}>
                        {exp.impact}
                      </div>

                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mr-4 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                          <Icon className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-mono group-hover:text-white transition-colors">{exp.title}</h3>
                          <div className="text-text-secondary text-sm font-mono">{exp.company}</div>
                        </div>
                      </div>
                      
                      <div className={`${colors.text} text-xs font-mono mb-4`}>{exp.period}</div>
                      
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-github-dark ${colors.bg}`}></div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}