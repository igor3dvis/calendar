import React, { Component } from "react";
import "../styles/Calendar.css";

let x;

class Day extends Component {
  state = {
    
  };

  prevMonthDay = () => {
    let d = this.props.firstDayOfManth - 1;
    if (this.props.firstDayOfMonth === 0) {
      d = 6;
    }
    console.log(d);
  };

  render() {
    return (
        
      <div className="month-wrapper">
        {this.props.ddd.map((el, i) => (
          <div key={i} className="day">
            {el}
          </div>

        ))}
      </div>
    );
  }
}

export default Day;
//{(x = this.prevMonthDay())}
