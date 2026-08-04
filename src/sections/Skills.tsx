"use client";

import { motion } from "framer-motion";
import { skills } from "../data/userData";

const Skills = () => {
  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            My Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto font-medium"
          >
            A curated selection of technologies I use to build high-performance products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((categoryGroup, categoryIndex) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="p-4 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest pl-3 border-l-2 border-blue-600">
                  {categoryGroup.category}
                </h3>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {categoryGroup.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="group flex flex-col items-center gap-2 p-2 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={`w-full h-full object-contain ${item.invertDark ? 'invert' : ''}`}
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-500 group-hover:text-white transition-colors text-center uppercase tracking-tighter">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
