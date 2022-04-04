import React, { Component } from "react";
import "./styles/Input.css";

class Input extends Component {
  render() {
    return (
      <div>
        <input
          className="input"
          onChange={this.props.changeHandler}
          placeholder={this.props.placeHold}
          value={this.props.valueText}
          required
        />
      </div>
    );
  }
}
export default Input;
