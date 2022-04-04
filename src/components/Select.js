import React, { Component } from "react";
import "./styles/Select.css"

class Select extends Component {
  render() {
    return (
      <div>
        <select name="services" className="select" onChange={this.props.changeHandler} required>
          <option disabled>Выберите услугу</option>
          <option>Массаж</option>
          <option>Массаж лица</option>
          <option>Иньекции</option>
          <option>Пилинг</option>
          <option>Консультация</option>
        </select>
      </div>
    );
  }
}
export default Select;
