import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16 text-white"
        >
          ABOUT
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="bg-white/5 p-10 rounded-lg border border-white/10">
                <div className="text-center">
                  <div className="w-40 h-40 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <span className="text-5xl font-bold text-black font-mono">BK</span>
                  </div>
                  <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 mb-4">
                    <span className="text-white font-mono text-xs font-semibold uppercase tracking-widest">Engineer // Researcher</span>
                  </div>
                  <div className="text-white/60 font-mono text-sm italic">
                    "Building solutions that matter"
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
              Mohd Bilal Khan
            </h3>
            
            <p className="text-white/60 leading-relaxed text-lg">
              I am a <span className="text-white">Systems &amp; AI Engineer</span> pursuing B.Tech in Electronics and Communication Engineering at{" "}
              <span className="text-white">IIIT Pune</span> (2023–2027). I specialize in building end-to-end autonomous AI systems, from multi-agent orchestration to high-performance secure tools.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              My expertise spans <span className="text-white">Agentic AI</span> (LangGraph, RAG, GraphRAG), full-stack engineering (React, FastAPI), and mission-critical system tools (Go, NIST standards). I am deeply interested in the intersection of AI and digital forensics.
            </p>

            <p className="text-white/60 leading-relaxed">
              Currently leading research at the <span className="text-white">Digital Forensics Lab, IIIT Pune</span> on a government-funded project, building AI-powered forensic analysis platforms and contributing to research publications in computer vision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}