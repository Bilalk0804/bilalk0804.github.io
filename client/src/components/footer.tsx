import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-white/50 text-sm mb-6 md:mb-0">
            © 2025 Mohd Bilal Khan — Built with passion and code
          </div>
          <div className="flex space-x-8">
            <a 
              href="https://github.com/Bilalk0804" 
              className="text-white/50 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/bilal-khan-219880285" 
              className="text-white/50 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:khanbilal080804@gmail.com" 
              className="text-white/50 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="/resume.pdf" 
              className="text-white/50 hover:text-white transition-colors duration-300"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
