import React, { Component } from "react";
import "./styles/Button.css";

class Button extends Component {
  render() {
    const { caption } = this.props;
    return (
      <div className="btn-wrapper">
        <button id={this.props.dataId} 
        onClick={this.props.clickHandler}>{caption}</button>
      </div>
    );
  }
}
export default Button;