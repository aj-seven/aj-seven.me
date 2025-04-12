import React, { useState } from "react";
import DiscMenu from "./components/DiscMenu";
import Navbar from "./components/Navbar";
import TerminalMode from "./terminal/TerminalMode";

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <div className="w-full text-foreground">
      <Navbar terminalMode={terminalMode} setTerminalMode={setTerminalMode} />
      {!terminalMode ? !activeSection ? <DiscMenu /> : <></> : <TerminalMode />}
    </div>
  );
};

export default App;
