import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/userData";

const Skills = () => {
  return (
    <section className="w-full px-4 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-center text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 underline underline-offset-4 decoration-blue-500"
      >
        My Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
      >
        A list of my skills and how good I am at using them.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            className="p-4 rounded-xl shadow-xs bg-white/30 dark:bg-white/5 border border-gray-400 dark:border-gray-600"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold">{skill.name}</h4>
              <span className="text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8 }}
                className="h-full bg-primary rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
