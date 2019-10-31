import React from "react";
import "./Dashboard.css";

const Dashboard = ({ handleHit, handleBall }) => {
  return (
    <div className="dashboard">
      <button>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </div>
  );
};

export default Dashboard;
