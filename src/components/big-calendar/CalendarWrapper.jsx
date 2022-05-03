import React, { useEffect, useState } from "react";
import CalendarMonth from "./CalendarMonth";
import "../../components/Calendar.css";

const JAN = 0;
const FEB = 1;
const MAR = 2;
const MAY = 4;
const JUL = 6;
const AUG = 7;
const OCT = 9;
const DEC = 11;

const SAT = 6;
const SUN = 0;

const date = new Date();
const currentData = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
//let renderMonth = currentMonth;
// День недели первого числа текущего месяца
let firstDayOfMonth = new Date(`${currentYear}-${currentMonth + 1}-01`).getDay();
// Количество дней предыдущего месяца, которые входят в первую неделю текущего
let lastDaysPrevMonth = firstDayOfMonth - 1;

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

// Функция вычисляет количество дней в текущем и предыдущем месяце
const { howmatchDaysCurMonth, howmatchDaysPrevMonth } = (() =>{
  // Дефолтное количество дней в текущем и предыдущем месяце
  let daysCurMonth = 30;
  let daysPrevMonth = 31;
  if (
    currentMonth === MAY ||
    currentMonth === JUL ||
    currentMonth === OCT ||
    currentMonth === DEC
  ) {
    daysCurMonth = 31;
    daysPrevMonth = 30;
  } else if (currentMonth === FEB) {
    daysCurMonth = 28;
    daysPrevMonth = 31;
  } else if (currentMonth === MAR) {
    daysCurMonth = 31;
    daysPrevMonth = 28;
  } else if (currentMonth === JAN || currentMonth === AUG) {
    daysCurMonth = 31;
    daysPrevMonth = 31;
  }

  return {
    howmatchDaysCurMonth: daysCurMonth,
    howmatchDaysPrevMonth: daysPrevMonth,
  };
})();

// Функция заполняет массив числами месяца. Зависит от дня недели 1-го числа месяца
// и количества дней в месяце.
const numbersDaysOfCurrentMonth = (() => {
  
  let numbersDaysOfCurrentMonth = [];
  
  let days =
    (howmatchDaysCurMonth === 31 &&
      (firstDayOfMonth === SUN || firstDayOfMonth === SAT)) ||
    (howmatchDaysCurMonth === 30 && firstDayOfMonth === SUN)
      ? 42
      : 35;
  console.log(days);

  if (firstDayOfMonth === SUN) {
    lastDaysPrevMonth = SAT; // если "Вс", то последнее число пред. месяца = "Сб"
  }
  
  for (let i = lastDaysPrevMonth; i > 0; i--) {
    numbersDaysOfCurrentMonth.push(howmatchDaysPrevMonth - (i - 1));
  }
  
  for (let i = 1; i <= howmatchDaysCurMonth; i++) {
    numbersDaysOfCurrentMonth.push(i);
  }
  for (let i = 1; i <= days - (howmatchDaysCurMonth + lastDaysPrevMonth); i++) {
    numbersDaysOfCurrentMonth.push(i);
  }
  return numbersDaysOfCurrentMonth;
})();

const CCC = 100;

const fff = (c) =>{
  return c + 22;
}

//************************************************* */
const CalendarWrapper = () => {
  //const { currentData, setCurrentData } = useState(currentData);
  //const { currentYear, setCurrentYear } = useState(currentYear);
  const [titleMonth, setTitleMonth] = useState(monthes[currentMonth]);
  const [numbersDaysOfCurrentMonthLoc, setNumbersDaysOfCurrentMonth] = useState(
    numbersDaysOfCurrentMonth
  );
  const [lastDaysPrevMonthLoc, setLastDaysPrevMonth] =
    useState(lastDaysPrevMonth);
  const [howmatchDaysCurMonthLoc, setHowmatchDaysCurMonth] = useState(null);

  useEffect(() => {
    setHowmatchDaysCurMonth(howmatchDaysCurMonth);
  }, []);
  
  const rendPrevMonth = () => {
    let nNN = fff(CCC)
    console.log(nNN)
  };

  const rendNextMonth = () => {};

  return (
    <div className="calendar-wrapper">
      <div>
        <button onClick={rendPrevMonth}>Prev</button>
        <button onClick={rendNextMonth}>Next</button>
      </div>
      <CalendarMonth
        titleMonth={titleMonth}
        currentData={currentData}
        currentYear={currentYear}
        numbersDaysOfCurrentMonth={numbersDaysOfCurrentMonthLoc}
        lastDaysPrevMonth={lastDaysPrevMonthLoc}
        howmatchDaysCurMonth={howmatchDaysCurMonthLoc}
      />
    </div>
  );
};

export default CalendarWrapper;
