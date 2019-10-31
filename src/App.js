import React, { Component, useState } from "react";
import Display from "./components/Display/Display";
import Dashboard from "./components/Dashboard/Dashboard";
import { hit, addBall, addStrike, addFoul } from "./helpers";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { balls: 0, strikes: 0 };
  }
  handleHit = () => {
    this.setState(hit(this.state));
  };

  handleBall = () => {
    this.setState(addBall(this.state));
  };

  handleStrike = () => {
    this.setState(addStrike(this.state));
  };

  handleFoul = () => {
    this.setState(addFoul(this.state));
  };
  render() {
    return (
      <div className="App">
        <h1>Baseball Management</h1>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard
          handleFoul={this.handleFoul}
          handleStrike={this.handleStrike}
          handleHit={this.handleHit}
          handleBall={this.handleBall}
        />
      </div>
    );
  }
}

export default App;
