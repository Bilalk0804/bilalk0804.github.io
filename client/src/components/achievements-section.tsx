import { motion } from "framer-motion";
import { Trophy, Target, Award } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "National Hackathon Winner",
      description: "Secured Rank 130 (Top 1.3%) out of 10,000+ teams in the HackRx national hackathon. Developed ZeroTrace — a government-level data sanitization tool.",
      icon: Trophy
    },
    {
      title: "JEE Mains Top 2%",
      description: "Achieved Top 2% rank among 1.1 million candidates in the JEE Mains examination, demonstrating exceptional aptitude in mathematics and analytical reasoning.",
      icon: Award
    },
    {
      title: "Research Publication",
      description: "Authored manuscript (in preparation) on Chili Plant Disease Classification using CNNs with 92.6% accuracy, advancing agricultural computer vision research.",
      icon: Target
    },
    {
      title: "Google DSC Lead",
      description: "Selected as Google Developer Student Clubs Campus Ambassador for IIIT Pune. Active contributor to GirlScript Summer of Code (2025).",
      icon: Trophy
    },
    {
      title: "Silver Medalist",
      description: "Silver Medalist at the Inter-IIIT National Football Tournament, proving ability to balance rigorous research with high-stakes team athletics.",
      icon: Award
    },
    {
      title: "AI Research at Scale",
      description: "Leading a \u20b94.2 Crore government-funded forensics project at IIIT Pune. Built AI pipelines with 84.01% violence detection accuracy using Vision Transformers.",
      icon: Target
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16 text-white"
        >
          ACHIEVEMENTS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 text-white/70 mb-6 group-hover:text-white transition-colors" />
                
                <h3 className="text-xl font-bold font-mono text-white mb-3">{achievement.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}