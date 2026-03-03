import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    // You can add actual music playing logic here
    const audio = new Audio('/music.mp3'); // Add your music file
    if (!isPlaying) {
      // audio.play().catch(() => {});
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold font-mono text-white mb-6 leading-tight">
            MOHD BILAL KHAN
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-lg md:text-2xl font-mono text-white/80 tracking-widest">
            AI ENGINEER — RESEARCHER — BUILDER
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-base md:text-lg text-white/60 font-mono max-w-2xl mx-auto">
            I build intelligence systems and explore the boundaries of what AI can do
          </p>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-white/50 font-mono text-sm md:text-base">
            Currently: B.Tech ECE @ IIIT Pune :D
          </p>
        </motion.div>

        {/* Music Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center space-y-4">
            <p className="text-white/60 font-mono text-sm tracking-widest">
              MUSIC ✿
            </p>
            <Button
              onClick={handlePlayClick}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-12 py-3 font-mono text-lg transition-all duration-300 rounded-none"
            >
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </Button>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center space-x-8"
        >
          <a
            href="https://github.com/Bilalk0804"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/bilal-khan-219880285"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="/resume.pdf"
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <FileText className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
