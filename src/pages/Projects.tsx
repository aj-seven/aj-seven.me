"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import clsx from "clsx";
import { projectData } from "../data/userData";
import WebsiteDemoCard from "../components/WebsiteDemoCard";

const categories = Array.from(new Set(projectData.map((p) => p.category)));

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full flex flex-col items-center justify-center px-2 sm:px-6 lg:px-8 pt-12 pb-24 min-h-screen text-foreground">
      <motion.div className="w-full max-w-5xl backdrop-blur-sm rounded-2xl text-center">
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
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2"
        >
          A collection of projects, I&apos;ve worked on.
        </motion.p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          {["All", ...categories].map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className={clsx(
                "px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-sm",
                activeCategory === category
                  ? "bg-blue-600 text-white border-transparent shadow-md"
                  : "bg-white/10 dark:bg-black/10 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-black/20 hover:border-blue-500/50"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-2xl p-6 border border-gray-200 dark:border-gray-700/60 bg-white/10 dark:bg-black/10 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:shadow-lg transition-all duration-300 text-left flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description || "No description provided."}
              </p>
              <div className="flex flex-wrap gap-2 text-xs mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-100/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 font-medium tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap mt-auto pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:underline transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.live ? (
                  <WebsiteDemoCard demoUrl={project.live} />
                ) : (
                  <div className="text-center text-sm text-gray-500">
                    No preview available
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
