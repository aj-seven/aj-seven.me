import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
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
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
