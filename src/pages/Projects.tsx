"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "PostalMapper",
    description:
      "A digital address card generator based on postal code with QR support, export options. Built with React & Tailwind.",
    tech: ["React", "TailwindCSS", "QRCode"],
    live: "https://postal-mapper.vercel.app",
    github: "https://github.com/aj-seven/postal-mapper",
  },
  {
    name: "Sketchify",
    description: "Convert Images to sketches with Adjustable effects.",
    tech: ["React", "TailwindCSS", "Canvas"],
    live: "https://sketchify-app.vercel.app",
    github: "https://github.com/aj-seven/sketchify",
  },
  {
    name: "Task Quest",
    description: "",
    tech: ["React", "TailwindCSS"],
    live: "https://task-quest.pages.dev",
    github: "https://github.com/aj-seven/task-quest",
  },
  {
    name: "Android-Sysinfo",
    description: "A tool efficiently displays Android system details.",
    tech: ["Linux", "Termux", "Android"],
    github: "https://github.com/aj-seven/Android-Sysinfo",
  },
];

const Projects = () => {
  return (
    <section className="w-full mb-40 px-6 text-center text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Projects
      </motion.h2>

      <div className="grid gap-3 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="rounded-xl p-6 bg-white/30 dark:bg-white/5 shadow-xs border border-gray-400 dark:border-gray-600 text-left transition hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-muted border border-gray-400 dark:border-gray-600 px-2 py-1 rounded-full text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:underline"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
