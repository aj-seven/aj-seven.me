"use client";

import React from "react";
import { motion } from "framer-motion";

const facts = ["Passion for tech", "Learner", "Aspiring Full Stack Developer"];

const timeline = [
  { year: "2019", detail: "Started exploring electronics & tech" },
  { year: "2020", detail: "Discovered coding & web development" },
  { year: "2021", detail: "Built early MERN stack projects" },
  { year: "2023", detail: "Learned React, Node.js & Tailwind" },
  { year: "2025", detail: "Learning New things..." },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 mb-40 text-center text-foreground"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        About Me
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        sodales sit amet nunc ac tincidunt.
      </motion.p>

      {/* Facts */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {facts.map((fact, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="px-5 py-3 rounded-lg bg-white/30 dark:bg-white/5 shadow-xs text-sm md:text-base font-medium border border-gray-400 dark:border-gray-600 text-foreground"
          >
            {fact}
          </motion.div>
        ))}
      </motion.div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto text-left space-y-6">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="min-w-[60px] text-primary font-semibold text-lg">
              {item.year}
            </div>
            <p className="text-muted-foreground text-base">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
