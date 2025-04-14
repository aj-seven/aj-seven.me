export type Theme = {
  name: string;
  bg: string;
  text: string;
  accent: string;
};

export const terminalThemes: Record<string, Theme> = {
  dracula: {
    name: "Dracula",
    bg: "bg-[#282a36]",
    text: "text-[#f8f8f2]",
    accent: "text-[#bd93f9]",
  },
  onedark: {
    name: "One Dark Pro",
    bg: "bg-[#21252b]",
    text: "text-[#abb2bf]",
    accent: "text-[#61afef]", 
  },
  nightowl: {
    name: "Night Owl",
    bg: "bg-[#011627]",
    text: "text-[#d6deeb]",
    accent: "text-[#82aaff]", 
  },
  solarized: {
    name: "Solarized Dark",
    bg: "bg-[#002b36]",
    text: "text-[#839496]",
    accent: "text-[#b58900]", 
  },
  palenight: {
    name: "Palenight",
    bg: "bg-[#292D3E]",
    text: "text-[#A6ACCD]",
    accent: "text-[#C792EA]", 
  },
  monokai: {
    name: "Monokai",
    bg: "bg-[#272822]",
    text: "text-[#f8f8f2]",
    accent: "text-[#f92672]",
  },
  gruvbox: {
    name: "Gruvbox",
    bg: "bg-[#282828]",
    text: "text-[#ebdbb2]",
    accent: "text-[#fabd2f]", 
  },
  tokyonight: {
    name: "Tokyo Night",
    bg: "bg-[#1a1b26]",
    text: "text-[#c0caf5]",
    accent: "text-[#7aa2f7]", 
  },
  ubuntu: {
    name: "Ubuntu",
    bg: "bg-[#300a24]",
    text: "text-[#eeeeec]",
    accent: "text-[#ef2929]",
  },
  blackboard: {
    name: "Black",
    bg: "bg-[#000000]",
    text: "text-[#ffffff]",
    accent: "text-[#ffffff]",
  },
};
