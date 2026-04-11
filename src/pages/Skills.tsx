import { motion } from "framer-motion";
import { skills } from "../data/userData";

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-2 sm:px-6 lg:px-8 pt-12 pb-24 min-h-screen text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl backdrop-blur-sm rounded-2xl text-center"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 underline underline-offset-8 decoration-blue-500"
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2"
          >
            Technologies, tools & languages I work with.
          </motion.p>
        </div>

        <div className="flex flex-col gap-10">
          {skills.map((categoryGroup, categoryIndex) => (
            <div key={categoryGroup.category} className="flex flex-col gap-5">
              <motion.h3
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-semibold text-primary pl-4 border-l-4 border-blue-500"
              >
                {categoryGroup.category}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categoryGroup.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="group flex flex-row items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white/10 dark:bg-black/10 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-center p-2 bg-white/50 dark:bg-black/20 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={`w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300 ${item.invertDark ? 'dark:invert' : ''}`}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
