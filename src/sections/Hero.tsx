import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full min-h-dvh flex flex-col py-48 items-center text-center overflow-hidden"
    >
      {/* Hero Content */}
      <div className="z-10 max-w-2xl">
        <motion.img
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          src="avatar.png"
          alt="My Avatar"
          className="mx-auto mb-6 w-40 h-40 rounded-full border-4 border-primary shadow-lg object-cover"
        />

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
        >
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"></span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-medium mb-6"
        >
          <TypeAnimation
            sequence={[
              "Aspiring Full Stack Developer",
              1500,
              "Student",
              1500,
              "Loves Learning New Things",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-6 mt-6"
        >
          <a
            href="https://github.com/aj-seven"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aj-seven@outlook.in"
            className="hover:text-primary transition"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
