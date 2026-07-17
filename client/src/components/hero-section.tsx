import { Github, Linkedin, FileText, Music, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const TRACK_NAME = "lofi chill — study beats";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Using a royalty-free lofi track from the internet archive / public domain
    const audio = new Audio("https://ia802908.us.archive.org/5/items/cdcovers_cd2/13_lo-fi_hip_hop_radio_mix.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handlePlayClick = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          intervalRef.current = setInterval(() => {
            if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
          }, 500);
        })
        .catch(() => {
          // fallback: try local music.mp3
          const fallback = new Audio("/music.mp3");
          fallback.loop = true;
          fallback.volume = 0.35;
          audioRef.current = fallback;
          fallback.play().then(() => setIsPlaying(true)).catch(console.error);
        });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial fade from center */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, black 75%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-mono text-white leading-none tracking-tight">
            MOHD<br />BILAL KHAN
          </h1>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-white/20 max-w-md mx-auto mb-8"
        />

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base font-mono text-white/50 tracking-[0.3em] uppercase mb-4"
        >
          AI Engineer &nbsp;·&nbsp; Researcher &nbsp;·&nbsp; Builder
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/40 font-mono text-sm max-w-xl mx-auto mb-4"
        >
          ECE @ IIIT Pune &nbsp;·&nbsp; Arch Linux enjoyer &nbsp;·&nbsp; Football ⚽ &nbsp;·&nbsp; Open to work
        </motion.p>

        {/* Open to work ping */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 mb-14"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="text-green-400/80 font-mono text-xs tracking-widest">OPEN TO OPPORTUNITIES</span>
        </motion.div>

        {/* Music Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-14 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
            <Music className="w-4 h-4 text-white/40" />
            <div className="flex flex-col items-start min-w-0">
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.span
                    key="playing"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-white/70 font-mono text-xs truncate max-w-[150px]"
                  >
                    ♪ {TRACK_NAME}
                  </motion.span>
                ) : (
                  <motion.span
                    key="paused"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-white/30 font-mono text-xs"
                  >
                    play something ✿
                  </motion.span>
                )}
              </AnimatePresence>
              {/* Progress bar */}
              <div className="w-32 h-0.5 bg-white/10 rounded-full mt-1 overflow-hidden">
                <motion.div
                  className="h-full bg-white/50 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <button
              onClick={handlePlayClick}
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all duration-200"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
            </button>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-8"
        >
          {[
            { href: "https://github.com/Bilalk0804", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/bilal-khan-219880285", icon: Linkedin, label: "LinkedIn" },
            { href: "/resume.pdf", icon: FileText, label: "Resume" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex flex-col items-center gap-1 text-white/40 hover:text-white transition-all duration-300"
            >
              <Icon className="w-6 h-6" />
              <span className="font-mono text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{label.toUpperCase()}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
