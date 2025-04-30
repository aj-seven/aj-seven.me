import { Mail, MapPin, Github, Linkedin, Link2Icon } from "lucide-react";
import {
  Code,
  Server,
  Database,
  Paintbrush,
  Type,
  GitBranch,
} from "lucide-react";

export const fetchData = [
  { label: "User", value: "aj7@garuda" },
  { label: "OS", value: "Garuda Linux Broadwing x86_64" },
  { label: "Host", value: "ASUS TUF Gaming F15 FX506HF" },
  { label: "Kernel", value: "6.14.2-zen1-1-zen" },
  { label: "Packages", value: "1519 (pacman)" },
  { label: "Shell", value: "zsh 5.9" },
  { label: "CPU", value: "i5-11400H (12) @ 4.50GHz" },
  { label: "GPU", value: "Intel UHD + RTX 2050" },
  { label: "Memory", value: "15725MiB" },
  { label: "Peak Uptime", value: "13 hour's" },
];

export const skills = [
  { name: "React", icon: Code }, // React as general code
  { name: "Node.js", icon: Server }, // Node as backend/server
  { name: "MongoDB", icon: Database }, // MongoDB as database
  { name: "Tailwind CSS", icon: Paintbrush }, // Tailwind as design/UI
  { name: "TypeScript", icon: Type }, // TS as type-focused language
  { name: "Git & GitHub", icon: GitBranch }, // Git
];

export const facts = [
  "Student",
  "Passion for tech",
  "Learner",
  "Linux Enthusiast",
  "Aspiring Full Stack Developer",
];

export const timeline = [
  { year: "2019", detail: "Started exploring electronics & tech." },
  { year: "2020", detail: "Discovered coding & web development." },
  { year: "2021", detail: "Built a few small projects." },
  { year: "2023", detail: "Learned more about web development." },
  { year: "2025", detail: "Learning New things and Improving my skills..." },
];

export const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "ajseven@outlook.in",
    href: "mailto:ajseven@outlook.in",
    color: "text-blue-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
    color: "text-red-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aj-seven",
    href: "https://github.com/aj-seven",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ajseven",
    href: "https://www.linkedin.com/in/ajseven",
    color: "text-blue-600",
  },
  {
    icon: Link2Icon,
    label: "Discord",
    value: "Discord",
    href: "https://discord.com/users/.ajseven",
    color: "text-indigo-500",
  },
];

export const projectData = [
  {
    name: "IA-Website (DML)",
    description: "Website for IA Clan in Dragon Mania Legends 🐉",
    tech: ["NextJS", "Chakra-UI", "JavaScript", "Express-js", "MongoDB"],
    live: "https://indianarmy-dml.netlify.app",
    github: "",
    category: "Web",
  },
  {
    name: "PostalMapper",
    description:
      "A digital address card generator based on postal code with QR support, export options. Built with React & Tailwind.",
    tech: ["React", "TailwindCSS", "QRCode"],
    live: "https://postal-mapper.vercel.app",
    github: "https://github.com/aj-seven/postal-mapper",
    category: "Web",
  },
  {
    name: "Sketchify",
    description: "Convert Images to sketches with Adjustable effects.",
    tech: ["React", "TailwindCSS", "Canvas"],
    live: "https://sketchify-app.vercel.app",
    github: "https://github.com/aj-seven/sketchify",
    category: "Web",
  },
  {
    name: "Task Quest",
    description: "A simple yet modern task tracker built for productivity.",
    tech: ["React", "TailwindCSS"],
    live: "https://task-quest.pages.dev",
    github: "https://github.com/aj-seven/task-quest",
    category: "Web",
  },
  {
    name: "Color Tailor",
    description: "A color palette generator built with React & Tailwind.",
    tech: ["React", "TailwindCSS", "chroma-js"],
    live: "https://color-tailor.vercel.app",
    github: "https://github.com/aj-seven/color-tailor",
    category: "Web",
  },
  {
    name: "Android-Sysinfo",
    description: "A tool that efficiently displays Android system details.",
    tech: ["Linux", "Termux", "Android"],
    github: "https://github.com/aj-seven/Android-Sysinfo",
    category: "CLI",
  },
];
