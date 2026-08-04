"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { projectData } from "../data/userData";

const categories = Array.from(new Set(projectData.map((p) => p.category)));

const Projects = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectData.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-16 lg:pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto font-medium"
          >
            A collection of my most impactful work, from web applications to creative experiments.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest border",
              activeCategory === "all"
                ? "bg-white text-black border-white"
                : "text-zinc-500 border-white/10 hover:border-white/30 hover:text-white"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-6 py-2 rounded-full text-sm font-black transition-all duration-300 uppercase tracking-widest border",
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "text-zinc-500 border-white/10 hover:border-white/30 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto sm:px-0">
          {displayProjects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-3xl p-4 border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 text-left flex flex-col h-full group"
            >
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">{project.name}</h3>
              <p className="text-base text-zinc-400 mb-6 flex-grow leading-relaxed">
                {project.description || "Building the future of digital experiences."}
              </p>
              <div className="flex flex-wrap gap-1 text-xs mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-zinc-300 font-semibold tracking-tight"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors font-bold"
                  >
                    <Github size={18} /> Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {limit && filteredProjects.length > limit && (
          <div className="mt-16 flex justify-center">
            <a
              href="/projects"
              className="px-8 py-3.5 rounded-full border border-white/10 text-white font-black text-base transition-all duration-300 hover:bg-white/5 hover:border-white/30 flex items-center gap-2 group"
            >
              View More Projects
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
