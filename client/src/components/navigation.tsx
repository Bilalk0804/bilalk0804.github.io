import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#skills", label: "SKILLS" },
    { href: "#contact", label: "CONTACT" },
  ];

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/api/resume';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-github-dark/95 backdrop-blur-sm' : 'bg-github-dark/95 backdrop-blur-sm'
    } border-b border-github-border`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-mono font-bold text-xl accent-purple">
            BK
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:accent-purple transition-colors duration-300 font-mono text-sm text-text-primary hover:text-purple-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={handleResumeDownload}
              className="bg-accent-purple hover:bg-purple-600 px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <Download className="w-4 h-4 mr-2" />
              RESUME
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-github-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:accent-purple transition-colors duration-300 font-mono text-sm text-text-primary hover:text-purple-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
