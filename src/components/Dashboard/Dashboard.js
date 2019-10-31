import React from "react";
import "./Dashboard.css";

const Dashboard = ({ handleHit, handleBall, handleFoul, handleStrike }) => {
  return (
    <div className="dashboard">
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </div>
  );
};

export default Dashboard;
