import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  HomeIcon,
  Info,
  FolderKanban,
  ContactRound,
  Target,
  //Feather,
} from "lucide-react";

import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
//import Neofetch from "../pages/Fetch";

const sections = {
  Home: <Home />,
  About: <About />,
  Projects: <Projects />,
  Skills: <Skills />,
  //Fetch: <Neofetch />,
  Contact: <Contact />,
};

const navItems = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "About", path: "/about", icon: Info },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Skills", path: "/skills", icon: Target },
  //{ name: "Fetch", path: "/fetch", icon: Feather },
  { name: "Contact", path: "/contact", icon: ContactRound },
];

const BottomNavbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const rotation = useTransform(dragX, [-100, 100], [-20, 20]);

  useEffect(() => {
    const index = navItems.findIndex((item) => item.path === location.pathname);
    if (index !== -1) {
      setCurrentIndex(index);
      scrollToActive(index);
    }
  }, [location]);

  const scrollToActive = (index: number) => {
    const container = scrollRef.current;
    if (container) {
      const activeBtn = container.children[index] as HTMLElement;
      if (activeBtn) {
        const offsetLeft = activeBtn.offsetLeft;
        const containerWidth = container.offsetWidth;
        const scrollAmount =
          offsetLeft - containerWidth / 4 + activeBtn.offsetWidth / 4;
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const rotateTo = (dir: "left" | "right") => {
    const newIndex =
      dir === "left"
        ? (currentIndex - 1 + navItems.length) % navItems.length
        : (currentIndex + 1) % navItems.length;

    setCurrentIndex(newIndex);
    navigate(navItems[newIndex].path);
    scrollToActive(newIndex);
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 50) {
      rotateTo("left");
    } else if (info.offset.x < 50) {
      rotateTo("right");
    }
    dragX.set(0);
  };

  const CurrentComponent = sections[navItems[currentIndex].name];

  return (
    <div className="w-screen h-dvh bg-background overflow-hidden">
      {/* Main Page Content */}
      <div className="absolute inset-x-0 flex flex-col text-center z-10 rounded-t-lg bg-glass">
        <div className="py-10 mb-12 max-h-dvh overflow-y-auto z-0">
          {CurrentComponent}
        </div>
      </div>

      {/* Bottom Navbar with Drag/Scroll */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t rounded-t-2xl border-gray-400 dark:border-gray-600">
        <motion.div
          ref={scrollRef}
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ rotate: rotation }}
          className="flex items-center sm:justify-center py-3 overflow-x-auto no-scrollbar gap-2 px-2 sm:px-4"
        >
          {/* End Spacer */}
          <div className="w-4 sm:w-6 flex-shrink-0" />

          {navItems.map((item, index) => {
            const isActive = index === currentIndex;
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setCurrentIndex(index);
                  navigate(item.path);
                  scrollToActive(index);
                }}
                className={`flex-shrink-0 w-fit flex flex-col items-center justify-center px-4 py-1 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-primary scale-110 translate-y-[-10px] shadow-md bg-gray-300/10"
                    : "text-muted-foreground hover:bg-gray-300/10"
                }`}
                style={{
                  zIndex: isActive ? 10 : "auto",
                }}
              >
                <Icon size={22} />
                <span className="text-[13px]">{item.name}</span>
              </button>
            );
          })}

          {/* End Spacer */}
          <div className="w-4 sm:w-6 flex-shrink-0" />
        </motion.div>
      </nav>
    </div>
  );
};

export default BottomNavbar;
