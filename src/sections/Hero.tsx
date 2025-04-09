import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hey, I'm <span className="text-blue-500">Aj-Seven</span>
      </motion.h1>
      <motion.p
        className="max-w-xl text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm a developer passionate about building and learning new things...
      </motion.p>
    </div>
  );
};

export default Hero;
