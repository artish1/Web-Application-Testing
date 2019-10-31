import React from "react";
import "./Display.css";
const Display = ({ balls, strikes }) => {
  return (
    <div className="display">
      <h2>At-bat:</h2>
      <p>Balls: {balls}</p>
      <p>Strikes: {strikes}</p>
    </div>
  );
};

export default Display;
