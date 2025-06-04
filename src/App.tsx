import { useState } from "react";
import Navbar from "./components/Navbar";
import TerminalMode from "./terminal/TerminalMode";
import GlobalBackground from "./components/Background";
import BottomNavBar from "./components/BottomNavBar";

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <div className="w-full max-h-fit overflow-hidden text-foreground relative">
      {/* Background Pattern & Blobs */}
      {!terminalMode && <GlobalBackground />}

      {/* Navbar */}
      <Navbar terminalMode={terminalMode} setTerminalMode={setTerminalMode} />

      {/* Main View Switch */}
      {!terminalMode ? (
        !activeSection ? (
          <BottomNavBar />
        ) : (
          <></>
        )
      ) : (
        <TerminalMode />
      )}
    </div>
  );
};

export default App;
