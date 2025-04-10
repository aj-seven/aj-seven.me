import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-background">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full animate-moveDots"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#dotPattern)"
            className="text-gray-400 dark:text-gray-600"
          />
        </svg>
      </div>

      {/* Animated Gradient Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob z-0 top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 z-0 bottom-[-100px] right-[-100px]" />

      {/* Hero Content */}
      <div className="z-10 max-w-2xl">
        <img
          src="/avatar.png"
          alt="My Avatar"
          className="mx-auto mb-6 w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Aj-Seven
          </span>
        </h1>

        <h2 className="text-lg md:text-xl text-muted-foreground font-medium mb-6">
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
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
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
        </div>

        {/* Scroll Down Arrow */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 mt-10 text-primary animate-bounce transition"
        >
          Scroll Down <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
