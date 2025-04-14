import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  Info,
  FolderKanban,
  ContactRound,
  Target,
} from "lucide-react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const items = ["Home", "About", "Projects", "Skills", "Contact"] as const;

const sections = {
  Home: <Home />,
  About: <About />,
  Projects: <Projects />,
  Skills: <Skills />,
  Contact: <Contact />,
};

const icons = {
  Home: <HomeIcon />,
  About: <Info />,
  Projects: <FolderKanban />,
  Skills: <Target />,
  Contact: <ContactRound />,
};

const DiscMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragX = useMotionValue(0);
  const rotation = useTransform(dragX, [-100, 100], [-30, 30]);

  const rotateTo = (dir: "left" | "right") => {
    setCurrentIndex((prev) =>
      dir === "left"
        ? (prev - 1 + items.length) % items.length
        : (prev + 1) % items.length
    );
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 50) {
      rotateTo("left");
    } else if (info.offset.x < -50) {
      rotateTo("right");
    }
    dragX.set(0);
  };

  const currentItem = items[currentIndex];

  const currentIcons = icons[currentItem];

  return (
    <div className="w-screen h-dvh relative bg-gradient-to-br from-background via-muted to-background text-foreground overflow-hidden transition-colors duration-500">
      {/* Section Content */}
      <div className="absolute inset-x-0 flex flex-col text-center z-10 rounded-t-lg bg-glass ">
        {/* Section View */}
        <div className="py-20 max-h-dvh overflow-y-auto z-0">
          {sections[currentItem]}
        </div>
      </div>

      {/* Half Disc Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-30 flex items-end justify-center pointer-events-none">
        {/* Disc */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ rotate: rotation }}
          onDragEnd={handleDragEnd}
          className="relative w-[320px] h-[70px] rounded-t-full backdrop-blur-md border-t border-gray-400 dark:border-gray-500 shadow-md cursor-grab flex items-center justify-center pointer-events-auto transition-all duration-300"
        >
          {/* Left Arrow */}
          <motion.button
            onClick={() => rotateTo("left")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.1 }}
            className="pointer-events-auto mr-4 text-foreground hover:opacity-80 transition"
          >
            <ChevronLeft size={40} />
          </motion.button>
          <div className="flex flex-col items-center font-semibold select-none">
            {currentIcons}
            <span className="text-sm"> {currentItem} </span>
          </div>
          {/* Right Arrow */}
          <motion.button
            onClick={() => rotateTo("right")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto ml-4 text-foreground hover:opacity-80 transition"
          >
            <ChevronRight size={40} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default DiscMenu;
