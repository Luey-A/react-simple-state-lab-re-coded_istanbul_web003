import React, { Component } from "react";

const { default: Matrix } = require("./Matrix");

class Cell extends Component {
  constructor(props) {
    super();
    this.state = {
      color: props.value,
    }; // ...define initial state with a key of 'color' set to the 'value' prop
  }

  updates = () => {
    this.setState({
      color: "#333",
    });
  };
  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.updates}
      ></div>
    );
  }
}

export default Cell;