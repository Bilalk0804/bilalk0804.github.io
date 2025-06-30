import { motion } from "framer-motion";
import { Code, Layers, Database, Brain, GitBranch } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "purple",
      skills: [
        { name: "Python", level: 5 },
        { name: "JavaScript", level: 4 },
        { name: "C++", level: 4 },
        { name: "Java", level: 3 }
      ]
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "cyan",
      skills: ["LangChain", "FastAPI", "Streamlit", "Pandas", "NumPy"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "green",
      skills: ["MySQL"]
    },
    {
      title: "Version Control",
      icon: GitBranch,
      color: "orange",
      skills: ["Git", "GitHub", "GitLab"]
    },
    {
      title: "AI/ML",
      icon: Brain,
      color: "yellow",
      skills: ["Machine Learning", "Transfer Learning", "Data Analysis", "WandB"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple": return "text-purple-400 bg-purple-400";
      case "cyan": return "text-cyan-400 bg-cyan-400";
      case "green": return "text-green-400 bg-green-400";
      case "orange": return "text-orange-400 bg-orange-400";
      case "yellow": return "text-yellow-400 bg-yellow-400";
      default: return "text-gray-400 bg-gray-400";
    }
  };

  return (
    <section id="skills" className="py-20 bg-github-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16"
        >
          <span className="text-purple-400">#</span> TECHNICAL SKILLS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-github-card p-6 rounded-lg border border-github-border hover:border-${category.color}-400 transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`${colorClasses.split(' ')[0]} w-6 h-6 mr-3`} />
                  <h3 className="text-lg font-bold font-mono">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    if (typeof skill === 'object') {
                      // Skill with level (for Languages)
                      return (
                        <div key={skill.name} className="flex justify-between items-center">
                          <span className="text-sm">{skill.name}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full mr-1 ${
                                  i < skill.level ? colorClasses.split(' ')[1] : 'bg-github-border'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    } else {
                      // Simple skill badge
                      return (
                        <span
                          key={skill}
                          className={`inline-block bg-github-dark px-3 py-1 rounded-full text-xs font-mono border border-${category.color}-400/30 ${colorClasses.split(' ')[0]} mb-2 mr-2`}
                        >
                          {skill}
                        </span>
                      );
                    }
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
