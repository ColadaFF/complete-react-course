import React from "react";

class Button extends React.Component {
  render() {
    const label = this.props.label;
    return <button>{label}</button>;
  }
}

export default Button;
