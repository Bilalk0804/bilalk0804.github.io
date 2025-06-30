import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 code-bg">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4">
            <span className="text-text-primary">MOHD BILAL KHAN</span>
          </h1>
          <div className="text-2xl md:text-3xl font-mono mb-6">
            <span className="text-cyan-400 typing-text">AI/ML RESEARCHER & DEVELOPER</span>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            B.Tech ECE Student at IIIT Pune | Building AI products that matter | 
            From research to real-world impact
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            className="bg-accent-purple hover:bg-purple-600 px-8 py-3 rounded-lg font-mono transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            LET'S CONNECT <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="border border-github-border hover:border-cyan-400 px-8 py-3 rounded-lg font-mono transition-all duration-300 bg-transparent text-text-primary hover:bg-transparent hover:text-cyan-400"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VIEW PROJECTS
          </Button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="bg-github-card p-4 rounded-lg border border-github-border">
            <div className="text-2xl font-bold text-cyan-400">91%</div>
            <div className="text-sm text-text-secondary">ML Model Accuracy</div>
          </div>
          <div className="bg-github-card p-4 rounded-lg border border-github-border">
            <div className="text-2xl font-bold text-purple-400">2+</div>
            <div className="text-sm text-text-secondary">Research Projects</div>
          </div>
          <div className="bg-github-card p-4 rounded-lg border border-github-border">
            <div className="text-2xl font-bold text-cyan-400">1436</div>
            <div className="text-sm text-text-secondary">CodeChef Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
