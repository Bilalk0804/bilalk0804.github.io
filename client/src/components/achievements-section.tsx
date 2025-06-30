import { motion } from "framer-motion";
import { Microscope, Medal, Code } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Research Publication",
      description: "Authored research paper on chili disease classification using Transfer Learning with 5 different classes classification.",
      icon: Microscope,
      color: "purple"
    },
    {
      title: "Silver Medalist",
      description: "Silver Medalist in Inter-IIITs Football Tournament (2025). Demonstrating teamwork and competitive spirit.",
      icon: Medal,
      color: "cyan"
    },
    {
      title: "CodeChef 2★",
      description: "Achieved 2-star rating on CodeChef with maximum rating of 1436, showcasing problem-solving skills.",
      icon: Code,
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-github-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16"
        >
          <span className="text-purple-400">#</span> ACHIEVEMENTS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-github-dark p-6 rounded-lg border border-github-border hover:border-${achievement.color}-400 transition-all duration-300 group`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${achievement.color}-400 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse`}>
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-mono">{achievement.title}</h3>
                </div>
                <p className="text-text-secondary text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
