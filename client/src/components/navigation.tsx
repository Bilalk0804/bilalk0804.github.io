import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggle } = useTheme();

  const navItems = [
    { href: "/about",      label: "ABOUT" },
    { href: "/projects",   label: "PROJECTS" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/connect",    label: "CONNECT" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/10"
      style={{ background: "var(--nav-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-mono font-bold text-2xl hover:opacity-70 transition-opacity"
            style={{ color: "var(--fg-primary)" }}
          >
            MBK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-sm tracking-wider transition-colors duration-300"
                style={{
                  color: location === item.href
                    ? "var(--fg-primary)"
                    : "var(--fg-50)",
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-md border transition-all duration-200 hover:scale-110"
              style={{
                borderColor: "var(--fg-20)",
                color: "var(--fg-60)",
                background: "transparent",
              }}
            >
              {theme === "dark"
                ? <Sun className="w-4 h-4" />
                : <Moon className="w-4 h-4" />
              }
            </button>
          </div>

          {/* Mobile row */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-md border transition-all duration-200"
              style={{ borderColor: "var(--fg-20)", color: "var(--fg-60)" }}
            >
              {theme === "dark"
                ? <Sun className="w-4 h-4" />
                : <Moon className="w-4 h-4" />
              }
            </button>
            <button
              style={{ color: "var(--fg-primary)" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-sm tracking-wider transition-colors duration-300"
                  style={{
                    color: location === item.href
                      ? "var(--fg-primary)"
                      : "var(--fg-50)",
                  }}
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
