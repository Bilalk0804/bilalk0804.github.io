import { motion } from "framer-motion";
import { Microscope, Medal, Code, Trophy, Target, Award, Users } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Global Rank 323",
      subtitle: "CodeChef Competitive Programming",
      description: "Achieved a career-high Global Rank of 323 (Top 1%). Currently a 3-Star coder and 'Pupil' on Codeforces, demonstrating elite-level algorithmic problem-solving under pressure.",
      icon: Trophy,
      color: "green",
      metric: "Top 1%"
    },
    {
      title: "National Hackathon Rank 130",
      subtitle: "HackRx Winner",
      description: "Secured Rank 130 out of 10,000+ competing teams nationwide. Developed mission-critical security tools (ZeroTrace) for government-sponsored national challenges.",
      icon: Target,
      color: "purple",
      metric: "Top 1.3%"
    },
    {
      title: "Google DSC Ambassador",
      subtitle: "Leadership & Community",
      description: "Selected as the Google Developer Student Clubs (DSC) Campus Ambassador for IIIT Pune. Leading technical workshops and fostering a culture of open-source contribution and innovation.",
      icon: Users,
      color: "cyan",
      metric: "Lead"
    },
    {
      title: "93.56% Research Accuracy",
      subtitle: "Computer Vision Publication",
      description: "Authored research on multi-class disease classification using CNNs and Transfer Learning. Optimized diagnostic models to achieve 91% accuracy, surpassing industry baselines.",
      icon: Microscope,
      color: "yellow",
      metric: "91% Acc"
    },
    {
      title: "JEE Mains Top 2%",
      subtitle: "Academic Excellence",
      description: "Ranked in the Top 2% of 1.1 million candidates in the JEE Mains examination, demonstrating exceptional aptitude in mathematics, logic, and analytical reasoning.",
      icon: Award,
      color: "pink",
      metric: "Top 2%"
    },
    {
      title: "Silver Medalist",
      subtitle: "Inter-IIIT National Sports",
      description: "Silver Medalist in the Inter-IIIT National Football Tournament. Proven ability to balance rigorous engineering research with high-stakes team athletics.",
      icon: Medal,
      color: "orange",
      metric: "2025"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple": return { border: "hover:border-purple-400", bg: "bg-purple-400", text: "text-purple-400" };
      case "cyan": return { border: "hover:border-cyan-400", bg: "bg-cyan-400", text: "text-cyan-400" };
      case "green": return { border: "hover:border-green-400", bg: "bg-green-400", text: "text-green-400" };
      case "yellow": return { border: "hover:border-yellow-400", bg: "bg-yellow-400", text: "text-yellow-400" };
      case "pink": return { border: "hover:border-pink-400", bg: "bg-pink-400", text: "text-pink-400" };
      case "orange": return { border: "hover:border-orange-400", bg: "bg-orange-400", text: "text-orange-400" };
      default: return { border: "hover:border-gray-400", bg: "bg-gray-400", text: "text-gray-400" };
    }
  };

  return (
    <section id="achievements" className="py-24 bg-github-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-mono">
            <span className="text-purple-400">#</span> KEY_MILESTONES
          </h2>
          <p className="text-text-secondary font-mono text-sm mt-4">Quantifiable excellence in engineering, competitive coding, and leadership.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const colors = getColorClasses(achievement.color);
            
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-github-dark p-8 rounded-xl border border-github-border ${colors.border} transition-all duration-300 group relative overflow-hidden`}
              >
                <div className={`absolute -right-2 -top-2 opacity-10 font-mono text-3xl font-bold ${colors.text}`}>
                  {achievement.metric}
                </div>

                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-mono mb-1 leading-tight">{achievement.title}</h3>
                  <div className={`${colors.text} text-xs font-mono mb-4 uppercase tracking-tighter font-semibold`}>
                    {achievement.subtitle}
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-github-border/50">
                    <div className="flex items-center text-xs font-mono text-text-secondary">
                      <span className={`${colors.text} mr-2`}>●</span>
                      Professional Validation
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}