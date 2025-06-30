import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-github-card border-t border-github-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-text-secondary text-sm mb-4 md:mb-0">
            © 2025 Mohd Bilal Khan - Built with passion and code
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Bilalk0804" 
              className="text-text-secondary hover:text-purple-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/bilal-khan" 
              className="text-text-secondary hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:bilalk0804@gmail.com" 
              className="text-text-secondary hover:text-green-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
