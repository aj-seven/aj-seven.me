import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Terminal } from "lucide-react";
import React from "react";

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
};

const Navbar = ({ terminalMode, setTerminalMode }: Props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [toggleFrom, setToggleFrom] = useState({ x: 0, y: 0 });

  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setToggleFrom({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setIsTransitioning(true);

    setTimeout(() => {
      setDarkMode((prev) => !prev);
    }, 300); // Delay before theme changes

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Duration of animation
  };

  const handleTerminalToggle = () => {
    setTerminalMode(!terminalMode);
  };

  return (
    <nav className="w-full bg-background text-foreground shadow-sm border-b border-gray-300 dark:border-gray-700 fixed top-0 left-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary transition-transform duration-300 hover:scale-105">
          aj-seven
        </div>

        {!terminalMode && (
          <ul className="hidden md:flex space-x-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`hover:text-primary transition ${
                    location.pathname === link.path ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            title="Toggle Theme"
            className="transition-transform duration-300 relative z-10"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Terminal Mode Toggle */}
          <button
            onClick={handleTerminalToggle}
            title="Toggle Terminal Mode"
            className="transition-transform duration-300 relative z-10"
          >
            <Terminal size={20} />
          </button>

          {!terminalMode && (
            <div className="md:hidden text-2xl cursor-pointer">
              {menuOpen ? (
                <X size={24} onClick={() => setMenuOpen(false)} />
              ) : (
                <Menu size={24} onClick={() => setMenuOpen(true)} />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && !terminalMode && (
        <ul className="md:hidden bg-background px-4 pb-4 space-y-3 text-center transition-all duration-300">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-lg ${
                  location.pathname === link.path ? "text-primary" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* 🔁 Dark/Light Mode Fullscreen Transition */}
      {isTransitioning && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none"
          style={{
            backgroundColor: darkMode ? "#f5e0dc" : "#1e1e2e", // Opposite color
            clipPath: `circle(0% at ${toggleFrom.x}px ${toggleFrom.y}px)`,
            animation: "reveal 0.7s ease-out forwards",
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
