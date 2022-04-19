import React, { Component } from "react";
import "../CalendarS.css";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

class CalendarMonth extends Component {
  render() {
    console.log(this.props);
    const { titleMonth,
      currentData,
      currentYear,
      lastDaysPrevMonth,
      howmatchDaysCurMonth,
      numbersDaysOfCurrentMonth } = this.props

    return (
      // рендерит блок с названием месяца и днями недели
      <div className="calendar">
        <div className="month">{titleMonth} {currentYear}</div>
        <div className="week-wrapper">
          {daysOfWeek.map((el, index) => (
            <div key={index} className="day day-of-week">{el}</div>
          ))}
        </div>
        {/* рендерит блок с названием месяца и днями недели */}
        <div className="month-wrapper">
          {numbersDaysOfCurrentMonth.map((el, i) => {
            if (i < lastDaysPrevMonth ||
              i > ((howmatchDaysCurMonth + lastDaysPrevMonth) - 1)) {
              return (<div key={i} className="day closest-month-day">{el}</div>);
            } else
              if (el === currentData) {
                return (<div key={i} className="day today">{el}</div>);
              } else {
                return (<div key={i} className="day">{el}</div>);
              }
          })}
        </div>
      </div>
    );
  }
}

export default CalendarMonth;