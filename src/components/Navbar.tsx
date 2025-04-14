import { useState, useEffect } from "react";
import { Sun, Moon, Terminal, Code2 } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
};

const Navbar = ({ terminalMode, setTerminalMode }: Props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [toggleFrom, setToggleFrom] = useState({ x: 0, y: 0 });

  // Load theme & mode on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedMode = localStorage.getItem("ui-mode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    if (storedMode === "cli") {
      setTerminalMode(true);
    }
  }, [setTerminalMode]);

  // Save theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Save UI mode
  useEffect(() => {
    localStorage.setItem("ui-mode", terminalMode ? "cli" : "gui");
  }, [terminalMode]);

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setToggleFrom({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setIsTransitioning(true);

    setTimeout(() => {
      setDarkMode((prev) => !prev);
    }, 300);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const handleTerminalToggle = () => {
    setTerminalMode(!terminalMode);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 border-b shadow-sm transition duration-300 ${
        terminalMode
          ? "bg-black/80 text-green-400 border-green-800 glow-nav"
          : "bg-background/70 backdrop-blur-md text-foreground border-gray-300 dark:border-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className={`flex items-center gap-3 text-xl md:text-2xl font-bold transition-all duration-300 group ${
            terminalMode ? "text-green-400" : "text-primary"
          }`}
        >
          {terminalMode ? (
            <Terminal className="w-7 h-7 md:w-7 md:h-7 text-green-500 transition-transform duration-300 hover:scale-110" />
          ) : (
            <Code2 className="w-7 h-7 md:w-7 md:h-7 text-blue-500 dark:text-yellow-400 transition-transform duration-300 hover:scale-110" />
          )}

          <TypeAnimation
            key={terminalMode ? "terminal" : "normal"} // Force re-render on mode switch
            sequence={
              terminalMode
                ? ["$ whoami", 2000, "visitor@aj-seven", 2000]
                : ["aj-seven", 2000, "Developer", 2000]
            }
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className={
              terminalMode
                ? "text-green-400"
                : "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 dark:from-yellow-300 dark:to-orange-400"
            }
          />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle - Hidden in Terminal Mode */}
          {!terminalMode && (
            <button
              onClick={handleThemeToggle}
              title="Toggle Theme"
              className="transition-transform duration-300 relative z-10"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* Terminal Toggle */}
          <button
            onClick={handleTerminalToggle}
            title="Toggle Terminal Mode"
            className="transition-transform duration-300 relative z-10"
          >
            <Terminal size={20} />
          </button>
        </div>
      </div>

      {/* Theme switch reveal animation */}
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
          style={{
            backgroundColor: darkMode ? "#f5e0dc" : "#1e1e2e",
            clipPath: `circle(0% at ${toggleFrom.x}px ${toggleFrom.y}px)`,
            animation: "reveal 0.7s ease-out forwards",
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
