"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import clsx from "clsx";

const projects = [
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
    name: "Android-Sysinfo",
    description: "A tool that efficiently displays Android system details.",
    tech: ["Linux", "Termux", "Android"],
    github: "https://github.com/aj-seven/Android-Sysinfo",
    category: "CLI",
  },
];

const categories = Array.from(new Set(projects.map((p) => p.category)));

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full px-4 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 underline underline-offset-4 decoration-blue-500"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-lg md:text-xl text-left text-muted-foreground max-w-2xl mx-auto mb-6"
      >
        A collection of projects, I&apos;ve worked on.
      </motion.p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {["All", ...categories].map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "px-6 py-1.5 rounded-xl border border-gray-400 dark:border-gray-500 text-sm font-medium transition",
              activeCategory === category
                ? "bg-primary text-white dark:text-black border-primary"
                : "bg-muted text-muted-foreground border-border hover:bg-accent"
            )}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="rounded-xl p-6 bg-white/30 dark:bg-white/5 shadow-xs border border-gray-400 dark:border-gray-600 text-left transition hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description || "No description provided."}
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

            <div className="flex gap-4 flex-wrap">
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
