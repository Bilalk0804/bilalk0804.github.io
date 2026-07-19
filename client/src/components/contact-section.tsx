import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const contactLinks = [
    { icon: Mail, label: "khanbilal080804@gmail.com", href: "mailto:khanbilal080804@gmail.com" },
    { icon: Github, label: "github.com/Bilalk0804", href: "https://github.com/Bilalk0804" },
    { icon: Linkedin, label: "linkedin.com/in/bilal-khan", href: "https://www.linkedin.com/in/bilal-khan-219880285" },
    { icon: ExternalLink, label: "Resume / CV", href: "/resume.pdf" }
  ];

  return (
    <section id="contact" className="py-20" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-mono text-center mb-4 text-white"
        >
          GET IN TOUCH
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/60 text-center mb-12 font-mono"
        >
          Feel free to reach out for collaborations or just a friendly hello
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-white hover:border-white hover:bg-white/5 transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 group-hover:text-white/80" />
                <span className="font-mono text-sm group-hover:text-white/80">{link.label}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
