import { useState, useEffect } from "react";
import { Sun, Moon, Terminal, Code2, Github, Star } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
};

const Navbar = ({ terminalMode, setTerminalMode }: Props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [stars, setStars] = useState<number | null>(null);

  // Fetch GitHub Stars
  useEffect(() => {
    fetch("https://api.github.com/repos/aj-seven/aj-seven.me")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch((err) => console.error("Failed to fetch repo stars", err));
  }, []);

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

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleTerminalToggle = () => {
    setTerminalMode(!terminalMode);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 border-b border-gray-300 dark:border-gray-800 shadow-sm transition duration-300 ${terminalMode
        ? "bg-black/80 text-green-400 border-green-800 glow-nav"
        : "bg-background/70 backdrop-blur-md text-foreground border-gray-300 dark:border-gray-700"
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 py-2.5 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className={`flex items-center gap-1 text-xl md:text-2xl font-bold transition-all duration-300 group ${terminalMode ? "text-green-400" : "text-primary"
            }`}
        >
          {terminalMode ? (
            <a href="/">
              <Terminal className="w-7 h-7 md:w-7 md:h-7 text-green-500 transition-transform duration-300 hover:scale-110" />
            </a>
          ) : (
            <a href="/">
              <Code2 className="w-7 h-7 md:w-7 md:h-7 text-blue-500 dark:text-yellow-400 transition-transform duration-300 hover:scale-110" />
            </a>
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
        <div className="flex p-2 border border-gray-400 dark:border-gray-600 rounded-full items-center gap-4">
          {/* Theme Toggle - Hidden in Terminal Mode */}
          <a
            href="https://github.com/aj-seven/aj-seven.me"
            target="_blank"
            title="Source Code"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Github size={20} />
            {stars !== null && (
              <span className="flex items-center text-sm font-semibold ml-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1 animate-star drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]" />
                {stars}
              </span>
            )}
          </a>
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
    </nav>
  );
};

export default Navbar;
