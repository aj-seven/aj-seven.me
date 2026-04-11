"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { commandData } from "./CommandData";
import { isGlowCommand, isValidCommand } from "./data/commands";
import { terminalThemes } from "./data/themes";

type Line = {
  text?: string;
  type?: "info" | "error" | "success";
  component?: React.ReactNode;
};

const TerminalMode = () => {
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [glow, setGlow] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("terminalHistory");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return [];
        }
      }
    }
    return [];
  });
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [theme, setTheme] = useState("blackboard");
  const currentTheme = terminalThemes[theme];

  const pushLine = (line: Line) => setHistory((prev) => [...prev, line]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    pushLine({ text: `aj-seven@terminal:~$ ${trimmed}`, type: "success" });

    // Ensure we clear input and save history before any specific command logic
    setCommandHistory((prev) => {
      const newHistory = [...prev, trimmed];
      if (typeof window !== "undefined") {
        localStorage.setItem("terminalHistory", JSON.stringify(newHistory));
      }
      return newHistory;
    });
    setInput("");
    setHistoryIndex(null);
    setCursorPos(0);

    if (trimmed === "clear") {
      setHistory([]);
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
        pushLine({ component: data, type: "info" });
      }
    } else {
      pushLine({
        text: `'${trimmed}' is not recognized. Type 'help' to see commands.`,
        type: "error",
      });
    }
  };

  const updateCursor = () => {
    if (inputRef.current) {
      setCursorPos(inputRef.current.selectionStart || 0);
    }
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
      // Scroll to bottom instantly like a real terminal
      const scrollToBottom = () => {
        terminal.scrollTo({
          top: terminal.scrollHeight,
          behavior: "auto",
        });
      };

      scrollToBottom();
      // Also scroll after a tiny delay in case images or layout shifts occur
      setTimeout(scrollToBottom, 50);
    }
  }, [history]);

  useEffect(() => {
    if (terminalRef.current && input.length > 0) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "auto",
      });
    }
  }, [input]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={handleContainerClick}
      className={clsx(
        "relative h-dvh flex flex-col px-2 py-20 md:py-20 md:px-12 font-mono overflow-hidden transition-colors duration-500",
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
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={clsx(
              line.type === "error" && "text-red-400",
              line.type === "success" && "text-green-500",
              line.type === "info" && "text-green-400"
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
          <span className="pr-2 text-green-300">aj-seven@terminal:~$</span>
          <div className="relative flex-1 min-h-[1.5rem]">
            {/* Visual block cursor and text */}
            <div className="absolute inset-0 pointer-events-none flex items-center whitespace-pre">
              <span>{input.slice(0, cursorPos)}</span>
              <span className="bg-red-500 text-black animate-[pulse_1s_step-end_infinite] inline-block text-center shadow-sm" style={{ minWidth: "0.7em" }}>
                {input.slice(cursorPos, cursorPos + 1) || " "}
              </span>
              <span>{input.slice(cursorPos + 1)}</span>
            </div>

            {/* Actual invisible input handling logic */}
            <input
              ref={inputRef}
              type="text"
              spellCheck={false}
              autoComplete="off"
              className="absolute inset-0 w-full bg-transparent text-transparent caret-transparent focus:outline-none"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setCursorPos(e.target.selectionStart || 0);
              }}
              onKeyUp={updateCursor}
              onClick={updateCursor}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                  setTimeout(updateCursor, 0);
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  if (commandHistory.length) {
                    setHistoryIndex((i) => {
                      const newIndex =
                        i === null
                          ? commandHistory.length - 1
                          : Math.max(i - 1, 0);
                      setInput(commandHistory[newIndex]);
                      setTimeout(() => {
                        if (inputRef.current) {
                          inputRef.current.selectionStart = commandHistory[newIndex].length;
                          setCursorPos(commandHistory[newIndex].length);
                        }
                      }, 0);
                      return newIndex;
                    });
                  }
                } else if (e.key === "ArrowDown") {
                  e.preventDefault();
                  if (commandHistory.length) {
                    setHistoryIndex((i) => {
                      if (i === null) return null;
                      if (i === commandHistory.length - 1) {
                        setInput("");
                        setCursorPos(0);
                        return null;
                      }
                      const newIndex = Math.min(i + 1, commandHistory.length - 1);
                      setInput(commandHistory[newIndex]);
                      setTimeout(() => {
                        if (inputRef.current) {
                          inputRef.current.selectionStart = commandHistory[newIndex].length;
                          setCursorPos(commandHistory[newIndex].length);
                        }
                      }, 0);
                      return newIndex;
                    });
                  }
                }
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TerminalMode;
