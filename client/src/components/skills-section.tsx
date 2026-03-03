import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Python", "Go (Golang)", "Java", "JavaScript", "Shell Scripting"]
    },
    {
      title: "AI / ML",
      skills: ["PyTorch", "LangGraph", "RAG / GraphRAG", "CLIP", "Transformers", "YOLOv8", "MLOps / WandB"]
    },
    {
      title: "Web & DevOps",
      skills: ["React", "FastAPI", "Flask", "Streamlit", "Docker", "Git / GitHub", "Postman"]
    },
    {
      title: "Databases",
      skills: ["Neo4j (Graph DB)", "ChromaDB", "FAISS", "Supabase", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-16 text-white"
        >
          SKILLS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold font-mono text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="text-white/40 mr-3">•</span>
                    <span className="text-white/70 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
