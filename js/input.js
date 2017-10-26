import React, { Component } from "react";
import Button from "./button";

class Input extends Component {
  render() {
    return <input type="text" onChange={this.props.handleChange} value={this.props.value} />;
  }
}

export default Input;
