"use client";

import { motion } from "framer-motion";
import { facts, timeline } from "../data/userData";
import { useState } from "react";

const About = () => {
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedIds((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-24 min-h-screen text-foreground"
    >
      <motion.div className="w-full max-w-5xl backdrop-blur-sm rounded-2xl text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 underline underline-offset-8 decoration-blue-500"
        >
          Who Am I
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          I’m Abdul Jaber, based in Andhra Pradesh, India. I graduated in Electronics and Communication Engineering from{" "}
          <a
            href="https://drsgiet.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Dr. SGIT
          </a>
          . I design and build full-stack applications, with an increasing focus on Artificial Intelligence. My work focuses on building scalable systems, solving complex problems clearly, and delivering practical, real-world solutions.
        </motion.p>

        {/* Facts */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap max-w-2xl mx-auto justify-center gap-3 mb-4"
        >
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-xl text-sm md:text-base font-medium border border-gray-200 dark:border-gray-700/60 bg-white/10 dark:bg-black/10 hover:border-blue-500/50 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 text-foreground shadow-sm"
            >
              {fact}
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-2 underline underline-offset-8 decoration-blue-500"
        >
          Timeline
        </motion.h3>
        <div className="max-w-2xl mx-auto text-left relative border-l-2 border-blue-500/30 ml-4 md:ml-6 mt-4">
          {timeline.map((item, i) => {
            // Check if "more" exists dynamically since typing isn't strict here.
            const hasMore = "more" in item && typeof item.more === "string";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-8 ml-6 relative group last:mb-0"
              >
                {/* Node Dot */}
                <span className="absolute flex h-4 w-4 rounded-full bg-blue-500 ring-4 ring-gray-100 dark:ring-[#090909] -left-[33px] top-1.5 transition-transform duration-300 group-hover:scale-125 shadow-sm" />

                <div className="bg-white/10 dark:bg-black/10 p-5 rounded-xl border border-gray-200 dark:border-gray-700/60 transition-all hover:border-blue-500/50 hover:shadow-md group-hover:-translate-y-1 duration-300">
                  <div className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                    {item.year}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed inline">
                    {item.detail}
                    {hasMore && (
                      expandedIds[i] ? (
                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                          {item.more}
                          <button
                            onClick={() => toggleExpand(i)}
                            className="ml-2 text-red-500 hover:text-red-700 font-bold text-md align-middle transition"
                          >
                            {"><"}
                          </button>
                        </span>
                      ) : (
                        <button
                          onClick={() => toggleExpand(i)}
                          className="ml-2 text-green-500 hover:text-green-700 font-bold text-md align-middle transition"
                        >
                          {"<>"}
                        </button>
                      )
                    )}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
