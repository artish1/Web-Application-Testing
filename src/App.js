import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [gameData, setGameData] = useState({
    balls: 0,
    strikes: 0,
    fouls: 0
  });
  return (
    <div className="App">
      <Display balls={gameData.balls} strikes={gameData.strikes} />
      <Dashboard />
    </div>
  );
}

export default App;
