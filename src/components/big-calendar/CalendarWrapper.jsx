import React, { Component } from "react";
import CalendarMonth from "./CalendarMonth";
import "../CalendarS.css"

const JAN = 0; const FEB = 1; const MAR = 2; const MAY = 4;
const JUL = 6; const AUG = 7; const OCT = 9; const DEC = 11;

const SAT = 6; const SUN = 0;

const date = new Date();
const currentData = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
let renderMonth = currentMonth;
// День недели первого числа текущего месяца
let firstDayOfMonth = new Date(`${currentYear}-${renderMonth + 1}-01`).getDay();
// Количество дней предыдущего месяца, которые входят в первую неделю текущего
let lastDaysPrevMonth = firstDayOfMonth - 1;


const monthes = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
  "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// Функция вычисляет количество дней в текущем и предыдущем месяце
let { howmatchDaysCurMonth, howmatchDaysPrevMonth } = (function howMatchDays() {
  // Дефолтное количество дней в текущем и предыдущем месяце
  let daysCurMonth = 30;
  let daysPrevMonth = 31;
  if (renderMonth === MAY || renderMonth === JUL || renderMonth === OCT || renderMonth === DEC) {
    daysCurMonth = 31;
    daysPrevMonth = 30;
  } else if (renderMonth === FEB) {
    daysCurMonth = 28;
    daysPrevMonth = 31;
  } else if (renderMonth === MAR) {
    daysCurMonth = 31;
    daysPrevMonth = 28;
  } else if (renderMonth === JAN || renderMonth === AUG) {
    daysCurMonth = 31;
    daysPrevMonth = 31;
  }

  return {
    howmatchDaysCurMonth: daysCurMonth,
    howmatchDaysPrevMonth: daysPrevMonth
  }
})();

// Функция заполняет массив числами месяца. Зависит от дня недели 1-го числа месяца 
// и количества дней в месяце.
let numbersDaysOfCurrentMonth = (function daysMatrix() {
  // Инициализация массива всех чисел в мартице, включая дни предыдущего месяца
  let numbersDaysOfCurrentMonth = [];
  // Эта переменная формирует "матрицу чисел мецяца"
  // если первый день суббота или воскресенье, то 42 : 7 = 6 рядов в матрице
  // иначе 35 : 7 = 5 рядов в матрице
  let days = (
    (howmatchDaysCurMonth === 31 && (firstDayOfMonth === SUN || firstDayOfMonth === SAT)) ||
    (howmatchDaysCurMonth === 30 && firstDayOfMonth === SUN)) ? 42 : 35
  console.log(days)

  if (firstDayOfMonth === SUN) {
    lastDaysPrevMonth = SAT; // если "Вс", то последнее число пред. месяца = "Сб"
  }
  // Заполняем массив числами предыдущего месяца, вошедшими в матрицу
  for (let i = lastDaysPrevMonth; i > 0; i--) {
    numbersDaysOfCurrentMonth.push(howmatchDaysPrevMonth - (i - 1));
  }
  // Затем заполняем массив числами текущего месяца
  for (let i = 1; i <= howmatchDaysCurMonth; i++) {
    numbersDaysOfCurrentMonth.push(i);
  }
  for (let i = 1; i <= (days - (howmatchDaysCurMonth + lastDaysPrevMonth)); i++) {
    numbersDaysOfCurrentMonth.push(i);
  }
  return numbersDaysOfCurrentMonth
})();

//************************************************* */
class CalendarWrapper extends Component {
  state = {
    currentData: currentData,
    titleMonth: monthes[currentMonth],
    currentYear: currentYear,
    numbersDaysOfCurrentMonth,
    lastDaysPrevMonth,
    howmatchDaysCurMonth,
  }

  rendPrevMonth = () => { }

  // rendNextMonth = () => {
  //   renderMonth = renderMonth + 1;
  //   this.setState(() => ({
  //     titleMonth: monthes[renderMonth]
  //   }));
  // };

  // ttt = function () {
  //   this.setState({ titleMonth: monthes[renderMonth] })
  // }

  componentDidMount() {
    //this.ttt()
  }

  render() {
    return (
      <div className="calendar-wrapper">
        <div>
          <button onClick={this.rendPrevMonth}>Prev</button>
          <button onClick={this.rendNextMonth}>Next</button>
        </div>
        <CalendarMonth
          titleMonth={this.state.titleMonth}
          currentData={this.state.currentData}
          currentYear={this.state.currentYear}
          numbersDaysOfCurrentMonth={this.state.numbersDaysOfCurrentMonth}
          lastDaysPrevMonth={this.state.lastDaysPrevMonth}
          howmatchDaysCurMonth={this.state.howmatchDaysCurMonth} />
      </div>
    );
  }
}

export default CalendarWrapper;