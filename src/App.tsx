import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import TerminalMode from "./terminal/TerminalMode";
import React from "react";

function App() {
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <>
      <Navbar terminalMode={terminalMode} setTerminalMode={setTerminalMode} />

      {terminalMode ? (
        <TerminalMode />
      ) : (
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
