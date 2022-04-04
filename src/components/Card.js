import React, { Component } from "react";
import Button from "./Button";
import "./styles/Card.css";

class Card extends Component {
  render() {
    //console.log(this.props);
    return (
      <div className="card">
        <p className="card__text">имя: {this.props.name}</p>
        <p className="card__text">услуга: {this.props.service}</p>
        <p className="card__text">время: {this.props.dateTime}</p>
        <Button
          dataId={this.props.dataId}
          clickHandler={this.props.clickDelete}
          caption="X"
        />
      </div>
    );
  }
}
export default Card;

//<button onClick={this.props.clickHandler}>{caption}</button>
