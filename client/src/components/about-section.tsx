import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-github-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16"
        >
          <span className="text-purple-400">#</span> ABOUT ME
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-github-dark p-8 rounded-lg border border-github-border animate-float">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">BK</span>
                </div>
                <div className="text-cyan-400 font-mono text-sm">console.log("Hello World!");</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-text-secondary leading-relaxed">
              I'm a passionate AI/ML researcher and developer currently pursuing B.Tech in Electronics and Communication Engineering at IIIT Pune. My journey in technology is driven by a deep fascination with artificial intelligence and its potential to solve real-world problems.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              My expertise spans from research-focused projects like chili disease classification using transfer learning to building practical AI tools like PromptScout. I've successfully improved model accuracy from 78% to 91% through advanced preprocessing and algorithm optimization.
            </p>
            
            <div className="bg-github-dark p-4 rounded-lg border border-github-border">
              <div className="font-mono text-sm">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-text-primary">interests</span>{" "}
                <span className="text-cyan-400"> = </span>
                <span className="text-text-primary">[</span>
                <br />
                &nbsp;&nbsp;<span className="text-green-400">"AI/ML Research"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">"LangChain Development"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">"Computer Vision"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">"Competitive Programming"</span>
                <br />
                <span className="text-text-primary">];</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
