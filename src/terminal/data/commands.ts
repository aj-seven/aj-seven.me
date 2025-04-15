export const isValidCommand = (cmd: string) => {
  return ["whoami", "about", "projects", "fetch", "themes", "skills", "contact", "gui", "help", "clear", "glow on", "glow off"].includes(cmd);
};

export const isGlowCommand = (cmd: string) => cmd === "glow on" || cmd === "glow off";
