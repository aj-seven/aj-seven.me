"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { commandData } from "./CommandData";
import { isGlowCommand, isValidCommand } from "./data/commands";
import { terminalThemes } from "./data/themes";

type Line = {
  text?: string;
  type?: "info" | "error" | "success";
  animate?: boolean;
  component?: React.ReactNode;
};

const TerminalMode = () => {
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [glow, setGlow] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [theme, setTheme] = useState("blackboard");
  const currentTheme = terminalThemes[theme];

  const pushLine = (line: Line) => setHistory((prev) => [...prev, line]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();

    pushLine({ text: `$ ${trimmed}`, type: "success" });

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    if (trimmed.startsWith("themes")) {
      const args = trimmed.split(" ");
      const command = args[1];
      const targetTheme = args[2];
      if (command === "list" || (command === "set" && targetTheme === "list")) {
        pushLine({
          component: (
            <ul className="list-disc ml-4">
              <strong> Available themes: </strong>
              {Object.keys(terminalThemes).map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          ),
          type: "info",
        });
        return;
      }
      if (targetTheme && terminalThemes.hasOwnProperty(targetTheme)) {
        setTheme(targetTheme);
        pushLine({ text: `Theme set to ${targetTheme}`, type: "success" });
      } else {
        pushLine({ text: "❌ Invalid theme name", type: "error" });
        pushLine({
          text: "Try 'themes list' for available themes",
          type: "info",
        });
        pushLine({ text: "Example usage: themes set onedark", type: "info" });
      }
      return;
    }

    if (isGlowCommand(trimmed)) {
      setGlow(trimmed === "glow on");
      pushLine({
        text: trimmed === "glow on" ? "✨ Glow enabled" : "❌ Glow disabled",
      });
      return;
    }

    if (isValidCommand(trimmed)) {
      const data = commandData[trimmed];
      if (data) {
        pushLine({ component: data, type: "info", animate: true });
      }
    } else {
      pushLine({
        text: `'${trimmed}' is not recognized. Type 'help' to see commands.`,
        type: "error",
        animate: true,
      });
    }

    setCommandHistory((prev) => [...prev, trimmed]);
    setInput("");
    setHistoryIndex(null);
  };

  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      // Auto-run `whoami` on mount
      handleCommand("whoami");
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      const terminal = terminalRef.current;
      // Scroll to bottom when new history is added.
      terminal.scrollTo({
        top: terminal.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  return (
    <div
      className={clsx(
        "relative min-h-dvh flex flex-col px-4 py-20 md:px-12 font-mono overflow-hidden transition-colors duration-500",
        currentTheme.bg,
        currentTheme.text
      )}
    >
      {glow && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -inset-20 bg-green-400 opacity-10 blur-3xl rounded-full" />
        </div>
      )}

      <div
        ref={terminalRef}
        className="z-10 relative flex-1 overflow-y-auto whitespace-pre-wrap space-y-2 pr-1"
        style={{ overflowY: "auto", scrollBehavior: "smooth" }}
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
            {line.component}
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center mb-4"
        >
          <span className="pr-2 text-green-300">guest@terminal($)</span>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent focus:outline-none caret-green-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                if (commandHistory.length) {
                  setHistoryIndex((i) => {
                    const newIndex =
                      i === null
                        ? commandHistory.length - 1
                        : Math.max(i - 1, 0);
                    setInput(commandHistory[newIndex]);
                    return newIndex;
                  });
                }
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (commandHistory.length) {
                  setHistoryIndex((i) => {
                    if (i === null) return null;
                    const newIndex = Math.min(i + 1, commandHistory.length - 1);
                    setInput(commandHistory[newIndex]);
                    return newIndex;
                  });
                }
              }
            }}
            placeholder="Enter command..."
          />
        </form>
      </div>
    </div>
  );
};

export default TerminalMode;
