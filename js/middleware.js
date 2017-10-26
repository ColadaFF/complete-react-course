import React, { Component } from "react";
import Input from "./input";
import Button from "./button";

class Middleware extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Input value={this.state.value} handleChange={this.handleChange}/>
        <Button label={this.state.value}/>
      </div>

    );
  }
}

export default Middleware;
