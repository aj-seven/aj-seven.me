import { motion } from "framer-motion";
import { skills } from "../data/userData";

const Skills = () => {
  return (
    <section className="w-full min-h-screen py-12 px-4 flex flex-col items-center text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-2 underline underline-offset-4 decoration-blue-500"
      >
        My Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        Technologies, tools & languages I work with.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-2 w-full max-w-6xl px-2 sm:px-6">
        {skills.map(({ name, icon: Icon }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * index, duration: 0.4 }}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-gray-400 dark:border-gray-600 bg-background/60 backdrop-blur-md shadow-sm transition duration-300
              hover:scale-[1.03] hover:shadow-lg
              hover:md:shadow-xl
              hover:md:scale-[1.07]
              hover:md:border-primary/50
              md:hover:bg-background/80"
          >
            <Icon size={28} className="text-primary" />
            <span className="text-sm sm:text-base text-center">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
