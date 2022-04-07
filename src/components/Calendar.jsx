import React, { Component } from "react";
import "./Calendar.css";

const date = new Date();
const currentData = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
// День недели первого числа текущего месяца
const firstDayOfMonth = new Date(`${currentYear}-${currentMonth + 1}-01`).getDay();

const monthes = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
  "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

// Дефолтное количество дней в текущем и предыдущем месяце
let howmatchDaysCurMonth = 30;
let howmatchDaysPrevMonth = 31;
// Функция вычисляет количество дней в текущем и предыдущем месяце
(function howMatchDays() {
  if (currentMonth === 4 || currentMonth === 6 || currentMonth === 9 || currentMonth === 11) {
    howmatchDaysCurMonth = 31;
    howmatchDaysPrevMonth = 30;
  } else if (currentMonth === 1) {
    howmatchDaysCurMonth = 28;
    howmatchDaysPrevMonth = 31;
  } else if (currentMonth === 2) {
    howmatchDaysCurMonth = 31;
    howmatchDaysPrevMonth = 28;
  } else if (currentMonth === 0 || currentMonth === 7) {
    howmatchDaysCurMonth = 31;
    howmatchDaysPrevMonth = 31;
  }
})();

// Инициализация массива всех чисел в мартице, включая дни предыдущего месяца
let numbersDaysOfCurrentMonth = [];

// Функция заполняет массив чмслами месяца. Зависит от дня недели 1-го числа месяца 
// и количества дней в месяце.
(function daysMatrix() {
  /*
  // Эта переменная может понадобиться для формирования "матрицы чисел мецяца"
  // если первый день суббота или воскресенье, то 42 : 7 = 6 рядов в матрице
  // иначе 35 : 7 = 5 рядов в матрице
  let days = (firstDayOfMonth === 0 || firstDayOfMonth === 6) ? 42 : 35
  */

  let lastDayPrevMonth = firstDayOfMonth - 1;
  if (firstDayOfMonth === 0) {
    lastDayPrevMonth = 6; // если "Вс", то последнее число пред. месяца = "Сб"
  }
  // Заполняем массив числами предыдущего месяца, вошедшими в матрицу
  for (let i = lastDayPrevMonth; i > 0; i--) {
    numbersDaysOfCurrentMonth.push(howmatchDaysPrevMonth - (i - 1));
  }
  // Затем заполняем массив числами текущего месяца
  for (let i = 1; i <= howmatchDaysCurMonth; i++) {
    numbersDaysOfCurrentMonth.push(i);
  }
})();

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="month">{monthes[currentMonth]}</div>
        <div className="week-wrapper">
          {daysOfWeek.map((el, index) => (
            <div key={index} className="day">{el}</div>
          ))}
        </div>

        <div className="month-wrapper">
          {numbersDaysOfCurrentMonth.map((el, i) => {
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

export default Calendar;