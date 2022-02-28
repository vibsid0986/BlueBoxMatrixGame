import React, { Component } from "react";
import BlueBox from "./BlueBox";

class App extends Component {
  state = { countOfReds: 0, activeReds: [-1, -1] };

  changeStateCount = (id) => {
    if (this.state.countOfReds === 0) {
      const activeRedsnew = [id, -1];
      this.setState({ activeReds: activeRedsnew }, () => {
        this.setState({ countOfReds: this.state.countOfReds + 1 });
      });
    } else if (this.state.countOfReds === 1) {
      const activeRedsnew = [this.state.activeReds[0], id];
      this.setState({ activeReds: activeRedsnew }, () => {
        this.setState({ countOfReds: this.state.countOfReds + 1 });
      });
    } else {
      if (this.state.countOfReds % 2 === 0) {
        const activeRedsnew = [this.state.activeReds[1], id];
        this.setState({ activeReds: activeRedsnew }, () => {
          this.setState({ countOfReds: this.state.countOfReds + 1 });
        });
      } else {
        const activeRedsnew = [this.state.activeReds[1], id];
        this.setState({ activeReds: activeRedsnew }, () => {
          this.setState({ countOfReds: this.state.countOfReds + 1 });
        });
      }
    }
  };

  render() {
    return (
      <div className="blue-box-cont" style={{ display: "flex", margin: "5px" }}>
        <div>
          <BlueBox
            id="1"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="2"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="3"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="4"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
        </div>
        <div>
          <BlueBox
            id="5"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="6"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="7"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="8"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
        </div>
        <div>
          <BlueBox
            id="9"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="10"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="11"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="12"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
        </div>
        <div>
          <BlueBox
            id="13"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="14"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="15"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
          <BlueBox
            id="16"
            countOfReds={this.state.countOfReds}
            changeStateCount={this.changeStateCount}
            activeReds={this.state.activeReds}
          />
        </div>
      </div>
    );
  }
}

export default App;
