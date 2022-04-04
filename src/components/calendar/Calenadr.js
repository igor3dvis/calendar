import React, { Component } from "react";
import Day from "./Day";
import "../styles/Calendar.css";

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const firstDayOfManth = new Date(`${year}-${month + 1}-01`).getDay();
const monthes = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

let numberDaysCurMonth = 30;
let numberDaysPrevMonth = 31;

function howMatchDays() {
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    numberDaysCurMonth = 31;
    numberDaysPrevMonth = 30;
  } else if (month === 1) {
    numberDaysCurMonth = 28;
    numberDaysPrevMonth = 31;
  } else if (month === 2) {
    numberDaysCurMonth = 31;
    numberDaysPrevMonth = 28;
  } else if (month === 0 || month === 7) {
    numberDaysCurMonth = 31;
    numberDaysPrevMonth = 31;

  }
}

howMatchDays();

let ddd = [];

function daysMatrix() {
  let days = 35;
  if (firstDayOfManth === 0 || firstDayOfManth === 6) {
    days = 42;
  }
  console.log(days);

  let prevDay = firstDayOfManth - 1;
  if (firstDayOfManth === 0) {
    prevDay = 6;
  }
  console.log(prevDay);

  for (let i = prevDay; i > 0; i--) {
    ddd.push(numberDaysPrevMonth-(i-1));
  }
  for (let i = 1; i <= numberDaysCurMonth; i++) {
    ddd.push(i);
  }
  console.log(ddd);
}
daysMatrix();

class Calendar extends Component {
  state = {
    daysOfWeek: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    currentMonth: date.getMonth(),
    firstDayOfManth: firstDayOfManth,
    numberDaysCurMonth: numberDaysCurMonth,
    numberDaysPrevMonth: numberDaysPrevMonth,
  };

  render() {
    const {
      daysOfWeek,
      currentMonth,
      firstDayOfManth,
      numberDaysCurMonth,
      numberDaysPrevMonth,
    } = this.state;

    return (
      <div>
        <div className="month">{monthes[currentMonth]}</div>
        <div className="week-wrapper">
          {daysOfWeek.map((el, index) => (
            <div key={index} className="day">
              {el}
            </div>
          ))}
          
        </div>
        <Day
          numberDaysCurMonth={numberDaysCurMonth}
          firstDayOfManth={firstDayOfManth}
          numberDaysPrevMonth={numberDaysPrevMonth}
          ddd={ddd}
        />
      </div>
    );
  }
}

export default Calendar;
