import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Student Researcher & Team Lead",
      company: "Digital Forensics Lab, IIIT Pune",
      period: "Oct 2025 – Present",
      description: "Leading research for a government-funded project on Next Generation Data Carving. Built an AI-powered digital forensics platform with 6 ML models (YOLOv8, BERT, BART, Whisper, Random Forest, SigLIP) via FastAPI, serving 7 API router groups. Engineered NLP pipelines for NER, topic modeling, keyword scanning across 8 criminal categories. Implemented ML-based malware detection using PE header feature extraction, YARA rule matching, and Docker-sandboxed binary analysis."
    },
    {
      title: "Google DSC Campus Ambassador",
      company: "IIIT Pune",
      period: "Aug 2025 – Present",
      description: "Selected as Google Developer Student Clubs Lead for IIIT Pune. Driving technical innovation through workshops on Google Cloud, AI, and open-source ecosystems. Active contributor to GirlScript Summer of Code (2025)."
    },
    {
      title: "ML Researcher — Computer Vision",
      company: "Independent Research",
      period: "Jan 2025 – Present",
      description: "Developing a CNN pipeline for Chili Plant Disease Classification using transfer learning. Manuscript (92.6% accuracy) in preparation for publication. Optimized preprocessing techniques with advanced augmentation for small-dataset robustness."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16 text-white"
        >
          EXPERIENCE
        </motion.h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-2 border-white/20 pl-8 py-4 hover:border-white/40 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold font-mono text-white">{exp.title}</h3>
              <div className="text-white/60 font-mono text-sm mt-2">
                <p>{exp.company}</p>
                <p className="text-white/40">{exp.period}</p>
              </div>
              <p className="text-white/60 mt-4 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}