import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

type Line = {
  text: string;
  type?: "info" | "error" | "success";
  animate?: boolean;
};

const TerminalMode = () => {
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [glow, setGlow] = useState(false);

  const terminalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const pushToHistory = (
    text: string,
    type: Line["type"] = "info",
    animate = false
  ) => {
    setHistory((prev) => [...prev, { text, type, animate }]);
  };

  const handleCommand = (cmd: string) => {
    pushToHistory(`$ ${cmd}`, "success");

    switch (cmd.trim()) {
      case "whoami":
        pushToHistory(
          "Hi! I'm Aj7, Aspiring full-stack developer.",
          "info",
          true
        );
        break;
      case "projects":
        pushToHistory(
          `🛠️ Projects:\n- Portfolio\n- Snippet Manager\n- CLI Tools`,
          "info",
          true
        );
        break;
      case "skills":
        pushToHistory(
          `🚀 Skills:\n- HTML, CSS, JS, TS\n- React, Next.js\n- Node.js, Express\n- MongoDB, PostgreSQL\n- Tailwind, shadcn/ui\n- Git, Vercel, Docker`,
          "info",
          true
        );
        break;
      case "contact":
        pushToHistory(
          `📬 Contact:\n- Email: ajseven@outlook.in\n- GitHub: github.com/aj-seven\n- Twitter: @aj7_dev`,
          "info",
          true
        );
        break;
      case "help":
        pushToHistory(
          `🧠 Available commands:\n- whoami\n- projects\n- skills\n- contact\n- glow on/off\n- clear\n- help`,
          "info",
          true
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "glow on":
        setGlow(true);
        pushToHistory(`✨ Glow enabled`, "info");
        break;
      case "glow off":
        setGlow(false);
        pushToHistory(`❌ Glow disabled`, "info");
        break;
      default:
        pushToHistory(
          `'${cmd}' is not recognized. Type 'help' to see commands.`,
          "error",
          true
        );
    }

    // Store command for arrow navigation
    if (cmd.trim()) {
      setCommandHistory((prev) => [...prev, cmd]);
    }
    setHistoryIndex(null);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      setHistoryIndex((prev) => {
        const newIndex =
          prev === null ? commandHistory.length - 1 : Math.max(prev - 1, 0);
        setInput(commandHistory[newIndex]);
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      setHistoryIndex((prev) => {
        if (prev === null) return null;
        const newIndex = Math.min(prev + 1, commandHistory.length - 1);
        setInput(commandHistory[newIndex]);
        return newIndex;
      });
    }
  };

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  return (
    <div
      className={clsx(
        "relative min-h-dvh flex flex-col px-4 py-20 md:px-12 font-mono overflow-hidden",
        glow
          ? "bg-gradient-to-br from-[#0f0f0f] to-black via-[#001f1f] text-green-400"
          : "bg-black text-green-400"
      )}
    >
      {/* Background Glow */}
      {glow && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -inset-20 bg-green-400 opacity-10 blur-3xl rounded-full" />
        </div>
      )}

      {/* Header */}
      <div className="z-10 relative bg-[#0f0f0f] text-green-400 px-4 py-2 border-b border-green-800 text-sm font-semibold mb-4">
        aj7@portfolio-terminal
      </div>

      {/* Output */}
      <div
        ref={terminalRef}
        className="z-10 relative flex-1 overflow-y-auto whitespace-pre-wrap space-y-1 pr-1"
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={clsx(
              line.type === "error" && "text-red-400",
              line.type === "success" && "text-green-500",
              line.type === "info" && "text-green-400",
              line.animate && "animate-typing"
            )}
          >
            {line.text}
          </div>
        ))}

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="z-10 relative flex items-center mb-4"
        >
          <span className="pr-2 text-green-500">$</span>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent focus:outline-none caret-green-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter command..."
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalMode;
