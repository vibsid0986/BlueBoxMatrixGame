import React, { Component } from "react";
import "./BlueBox.css";

class BlueBox extends Component {
  render() {
    const { id, countOfReds, changeStateCount, activeReds } = this.props;
    return (
      <div
        className={`blue-box ${
          activeReds[0] === id || activeReds[1] === id ? "red-color-box" : "blue-color-box"
        }`}
        onClick={() => changeStateCount(id)}
      ></div>
    );
  }
}

export default BlueBox;
