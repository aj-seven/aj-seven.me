"use client";

import React from "react";
import { motion } from "framer-motion";
import { facts, timeline } from "../data/userData";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-4 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-center text-foreground"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 underline underline-offset-4 decoration-blue-500"
      >
        Who Am I
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-lg md:text-xl text-left text-muted-foreground max-w-3xl mx-auto mb-8"
      >
        I'm Abdul Jaber based in India, a student at{" "}
        <a
          href="https://www.sgiet.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          SGIT - JNTUK
        </a>
        , a electronics and tech enthusiast. I'm currently learning web
        development and looking forward to becoming a full stack developer.
      </motion.p>

      {/* Facts */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-wrap max-w-2xl mx-auto justify-left gap-2 mb-8"
      >
        {facts.map((fact, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-lg bg-white/30 dark:bg-white/5 shadow-xs text-sm md:text-base font-medium border border-gray-400 dark:border-gray-600 text-foreground"
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
        className="text-2xl md:text-3xl font-bold mb-4 underline underline-offset-4 decoration-blue-500"
      >
        Timeline
      </motion.h3>
      <div className="max-w-2xl mx-auto text-left space-y-6">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex items-start"
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
