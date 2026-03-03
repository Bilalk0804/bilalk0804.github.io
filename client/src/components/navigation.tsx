import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/connect", label: "CONNECT" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-mono font-bold text-2xl text-white hover:text-white/80 transition-colors">
            MBK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-sm tracking-wider transition-colors duration-300 ${
                  location === item.href ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-sm tracking-wider transition-colors duration-300 ${
                    location === item.href ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
