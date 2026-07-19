import { motion } from "framer-motion";

const interests = [
  { emoji: "⚽", label: "Football", sub: "Inter IIITs silver medalist" },
  { emoji: "🍜", label: "Pune Food Explorer", sub: "Always on the hunt" },
  { emoji: "🐧", label: "Arch Linux", sub: "Rice enthusiast, AMD GPU gang" },
  { emoji: "📖", label: "Web Novels", sub: "Current obsession" },
  { emoji: "🎨", label: "Design & Testing", sub: "UI/UX & software QA" },
  { emoji: "🚀", label: "Startup Ideas", sub: "2–3 in the pipeline" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/40 font-mono text-sm tracking-widest mb-3">01 — ABOUT</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-none">Who I Am</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="relative group">
              {/* Glow border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-sm group-hover:from-white/30 transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-white/5">
                <img
                  src="/bilal.jpg"
                  alt="Mohd Bilal Khan"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                    const parent = t.parentElement!;
                    parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-8xl font-bold text-white/20 font-mono">BK</span></div>`;
                  }}
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/80 font-mono text-xs tracking-widest uppercase bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                    Pune, India
                  </span>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white/70 font-mono text-sm">Open to work — currently seeking internships &amp; roles</span>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Mohd Bilal Khan</h3>
              <p className="text-white/40 font-mono text-sm uppercase tracking-widest">ECE Student · AI Builder · Arch Enjoyer</p>
            </div>

            <div className="space-y-4 text-white/65 leading-relaxed">
              <p>
                I'm an ECE student based in <span className="text-white">Pune</span>, with a keen interest in the design and testing of software. I've had the privilege of working with some brilliant people on projects including <span className="text-white">Sentinel Core</span> — a ₹4.2 crore Government of India-funded forensics platform.
              </p>
              <p>
                In my free time, I run <span className="text-white">Arch Linux</span> — mostly ricing and testing software that doesn't play well with Windows, plus dealing with AMD GPU + PyTorch compatibility adventures. I also read web novels and explore Pune's food scene whenever I get the chance.
              </p>
              <p>
                Long-term, once I have decent capital, I want to start something of my own. I have <span className="text-white">2–3 startup ideas</span> cooking. For now — building, learning, and job hunting.
              </p>
            </div>

            {/* Interests Grid */}
            <div>
              <p className="text-white/30 font-mono text-xs uppercase tracking-widest mb-4">Beyond the keyboard</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {interests.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="bg-white/[0.04] border border-white/10 rounded-lg p-3 hover:border-white/25 hover:bg-white/[0.07] transition-all duration-300 group cursor-default"
                  >
                    <span className="text-2xl block mb-1">{item.emoji}</span>
                    <p className="text-white text-sm font-medium leading-tight">{item.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}