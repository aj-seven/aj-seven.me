import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  Info,
  FolderKanban,
  ContactRound,
  Target,
  Feather,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Neofetch from "../pages/Fetch";

const items = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Fetch",
  "Contact",
] as const;
const paths = ["/", "/about", "/projects", "/skills", "/fetch", "/contact"];

const sections = {
  Home: <Home />,
  About: <About />,
  Projects: <Projects />,
  Skills: <Skills />,
  Contact: <Contact />,
  Fetch: <Neofetch />,
};

const icons = {
  Home: <HomeIcon />,
  About: <Info />,
  Projects: <FolderKanban />,
  Skills: <Target />,
  Contact: <ContactRound />,
  Fetch: <Feather />,
};

const DiscMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragX = useMotionValue(0);
  const rotation = useTransform(dragX, [-100, 100], [-30, 30]);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle URL updates
  useEffect(() => {
    const path = location.pathname;
    const index = paths.indexOf(path);
    if (index !== -1 && index !== currentIndex) {
      setCurrentIndex(index);
    }
  }, [location]);

  // Rotate section and update URL
  const rotateTo = (dir: "left" | "right") => {
    const newIndex =
      dir === "left"
        ? (currentIndex - 1 + items.length) % items.length
        : (currentIndex + 1) % items.length;

    setCurrentIndex(newIndex);
    navigate(paths[newIndex]);
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
      <div className="absolute inset-x-0 flex flex-col text-center z-10 rounded-t-lg bg-glass">
        <div className="py-10 max-h-dvh overflow-y-auto z-0">
          {sections[currentItem]}
        </div>
      </div>

      {/* Half Disc Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-30 flex items-end justify-center pointer-events-none">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ rotate: rotation }}
          onDragEnd={handleDragEnd}
          className="relative w-[320px] h-[70px] rounded-t-full backdrop-blur-md border-t border-gray-400 dark:border-gray-500 shadow-md cursor-grab flex items-center justify-center pointer-events-auto transition-all duration-300"
        >
          <motion.button
            onClick={() => rotateTo("left")}
            className="pointer-events-auto mr-4 text-foreground hover:opacity-80 transition"
          >
            <ChevronLeft size={40} />
          </motion.button>
          <div className="flex flex-col items-center font-semibold select-none">
            {currentIcons}
            <span className="text-sm">{currentItem}</span>
          </div>
          <motion.button
            onClick={() => rotateTo("right")}
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
