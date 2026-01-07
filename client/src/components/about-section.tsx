import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-github-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16"
        >
          <span className="text-purple-400">#</span> WHO_AM_I
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-github-dark p-10 rounded-lg border border-github-border">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                    <span className="text-5xl font-bold text-white font-mono">BK</span>
                  </div>
                  <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                    <span className="text-purple-400 font-mono text-xs font-semibold uppercase tracking-widest">Engineer // Researcher</span>
                  </div>
                  <div className="text-cyan-400 font-mono text-sm opacity-80 italic">
                    "Bridging the gap between LLM orchestration and system performance."
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-mono text-white">
              Mohd Bilal Khan <span className="text-text-secondary text-lg">/ ECE @ IIIT Pune</span>
            </h3>
            
            <p className="text-text-secondary leading-relaxed text-lg">
              I am a <span className="text-white font-semibold">Systems & AI Engineer</span> focused on building end-to-end autonomous systems. Unlike traditional AI developers, I specialize in the intersection of <span className="text-purple-400">Agentic Workflows</span> (LangGraph) and high-performance <span className="text-cyan-400">System Utilities</span> (Go/Rust).
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              My core expertise lies in architecting <span className="text-white">GraphRAG</span> systems like <strong>EvoMind</strong>—scaling knowledge retrieval across 10k+ nodes—and developing mission-critical tools like <strong>ZeroTrace</strong>, implementing NIST standards for secure data sanitization.
            </p>

            <p className="text-text-secondary leading-relaxed">
               Beyond development, I contribute to the research community, having published work in agricultural computer vision, where I optimized transfer learning models to achieve <strong>91% diagnostic accuracy</strong>.
            </p>
            
            <div className="bg-github-dark/50 p-6 rounded-xl border border-github-border backdrop-blur-sm">
              <div className="font-mono text-sm leading-7">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-white">Technical_Focus</span>{" "}
                <span className="text-cyan-400"> = </span>
                <span className="text-white">{`{`}</span>
                <br />
                &nbsp;&nbsp;<span className="text-green-400">Primary:</span> <span className="text-orange-300">"Agentic AI & RAG"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">Secondary:</span> <span className="text-orange-300">"System Programming"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">Optimization:</span> <span className="text-orange-300">"Knowledge Graphs"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-400">Current:</span> <span className="text-orange-300">"MLOps / Orchestration"</span>
                <br />
                <span className="text-white">{`};`}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}