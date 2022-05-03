import React, { useEffect, useState } from "react";
import TestMonth from "./TestMonth";
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
let renderMonth = currentMonth;
// День недели первого числа текущего месяца
let firstDayOfMonth = new Date(`${currentYear}-${renderMonth + 1}-01`).getDay();
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
const howmatchDays = (rend) => {
  // Дефолтное количество дней в текущем и предыдущем месяце
  let daysC = 30;
  let daysP = 31;
  if (rend === MAY || rend === JUL || rend === OCT || rend === DEC) {
    daysC = 31;
    daysP = 30;
  } else if (rend === FEB) {
    daysC = 28;
    daysP = 31;
  } else if (rend === MAR) {
    daysC = 31;
    daysP = 28;
  } else if (rend === JAN || rend === AUG) {
    daysC = 31;
    daysP = 31;
  }
  console.log("****внутри howmatchDays Prev- " + daysP + " Cur- " + daysC);
  //console.log("Prev - " + daysP);
  //console.log("Cur - " + daysC);
  //console.log("****************************");

  return {
    howmatchDaysCurMonth: daysC,
    howmatchDaysPrevMonth: daysP,
  };
};

// Функция заполняет массив числами месяца. Зависит от дня недели 1-го числа месяца
// и количества дней в месяце.
const funcNumbersDaysOfCurrentMonth = (monthC, monthP) => {
  let testArray = [];

  let days =
    (monthC === 31 && (firstDayOfMonth === SUN || firstDayOfMonth === SAT)) ||
    (monthC === 30 && firstDayOfMonth === SUN)
      ? 42
      : 35;
  //console.log("**внутри testArray**");
  //console.log("дней в месяце - " + days);
  //console.log("monthC - " + monthC);
  //console.log("monthP - " + monthP);
  //console.log("********************");

  if (firstDayOfMonth === SUN) {
    lastDaysPrevMonth = SAT; // если "Вс", то последнее число пред. месяца = "Сб"
  }

  for (let i = lastDaysPrevMonth; i > 0; i--) {
    testArray.push(monthP - (i - 1));
  }

  for (let i = 1; i <= monthC; i++) {
    testArray.push(i);
  }
  for (let i = 1; i <= days - (monthC + lastDaysPrevMonth); i++) {
    testArray.push(i);
  }
  //console.log("func day in month - " + testArray);
  return testArray;
};

const changeRenderMonthPrev = (rendMonth) => {
  renderMonth = rendMonth - 1;
  //console.log("ФФФ---changeRenderMonth");
  console.log("changeRenderMonthPrev - " + renderMonth);
  return renderMonth;
};

const changeRenderMonthNext = (rendMonth) => {
  renderMonth = rendMonth + 1;
  //console.log("ФФФ---changeRenderMonth");
  //console.log("renderMonth - " + renderMonth);
  return renderMonth;
};

function changeFirstDayOfMonth(rendMonth) {
  console.log("changeFirstDayOfMonth");

  return (firstDayOfMonth = new Date(
    `${currentYear}-${rendMonth + 1}-01`
  ).getDay());
}

function changeLesstDayOfMonth(firstDay) {
  if (firstDay === SUN) {
    lastDaysPrevMonth = SAT; // если "Вс", то последнее число пред. месяца = "Сб"
  } else {
    lastDaysPrevMonth = firstDay - 1;
  }
  //console.log("ФФФ---changeLesstDayOfMonth");
}

//************************************************* */
const TestWrapper = () => {
  // запускает функцию "Соллько дней в месяцах" на входе рендер-месяц, на выходе объект
  const days = howmatchDays(renderMonth);
  // достаем ключи из объекта
  const { howmatchDaysCurMonth, howmatchDaysPrevMonth } = days;

  const arrDays = funcNumbersDaysOfCurrentMonth(
    howmatchDaysCurMonth,
    howmatchDaysPrevMonth
  );

  console.log(
    `вначале---changeLesstDayOfMonth ${howmatchDaysPrevMonth} ${howmatchDaysCurMonth}`
  );

  console.log("array" + arrDays);
  /* useState */
  // стейт Названия рендер-месяца
  const [titleMonth, setTitleMonth] = useState(monthes[renderMonth]);

  const [lastDaysPrevMonthLoc, setLastDaysPrevMonth] =
    useState(lastDaysPrevMonth);
  const [howmatchDaysCurMonthLoc, setHowmatchDaysCurMonth] =
    useState(howmatchDaysCurMonth);
  // стейт "Все дни в матрице месяца". Вызывает функцию: на входе кол дней в месяцах. на выходе массив дней
  const [numbersDaysOfCurrentMonth, setNumbersDaysOfCurrentMonth] =
    useState(arrDays);

  /* hendlerRendPrevMonth */
  const hendlerRendPrevMonth = () => {
    renderMonth = changeRenderMonthPrev(renderMonth);
    // определяем первый день месяца
    firstDayOfMonth = changeFirstDayOfMonth(renderMonth);
    // определяем последний день прошлого месяца
    changeLesstDayOfMonth(firstDayOfMonth);
    // устанавливаем в стейт последний день прошлого месяца
    setLastDaysPrevMonth(lastDaysPrevMonth);
    // устанавливаем в стейт колво дней в рендер-месяце
    setHowmatchDaysCurMonth(howmatchDaysCurMonth);
    // устанавливаем в стейт массив дней в матрице
    const timer1 = setTimeout(() => {
      console.log("TIMER");
      setNumbersDaysOfCurrentMonth(arrDays);
    }, 1000);

    setTitleMonth(monthes[renderMonth]);
  };

  /* hendlerRendNextMonth */
  const hendlerRendNextMonth = () => {
    // меняем рендер-месяц
    renderMonth = changeRenderMonthNext(renderMonth);
    // определяем первый день месяца
    firstDayOfMonth = changeFirstDayOfMonth(renderMonth);
    // определяем последний день прошлого месяца
    changeLesstDayOfMonth(firstDayOfMonth);
    // устанавливаем в стейт последний день прошлого месяца
    setLastDaysPrevMonth(lastDaysPrevMonth);
    // устанавливаем в стейт колво дней в рендер-месяце
    setHowmatchDaysCurMonth(howmatchDaysCurMonth);
    // устанавливаем в стейт массив дней в матрице
    setNumbersDaysOfCurrentMonth(arrDays);

    setTitleMonth(monthes[renderMonth]);
  };
  useEffect(() => {
    console.log("USEEFFECT" + numbersDaysOfCurrentMonth);
    //setNumbersDaysOfCurrentMonth(arrDays);
  }, [numbersDaysOfCurrentMonth]);

  console.log(`в конце >-changeLesstDayOfMonth ${howmatchDaysPrevMonth} ${howmatchDaysCurMonth}`);
  console.log("===============================");
  return (
    <div className="calendar-wrapper">
      <div>
        <button onClick={hendlerRendPrevMonth}>Prev</button>
        <button onClick={hendlerRendNextMonth}>Next</button>
      </div>
      {/* <div>
       <span>месяц: {titleMonth}</span>  <span>год:{currentYear}</span>
      </div>
      <div>сегодня дата: {currentData}</div>
      <div>массив дней: {numbersDaysOfCurrentMonthLoc.length}</div>
      <div>последний день прошлого: {lastDaysPrevMonthLoc}</div>
      <div>дней в тек месяце: {howmatchDaysCurMonthLoc}</div> */}

      <TestMonth
        titleMonth={titleMonth}
        currentData={currentData}
        currentYear={currentYear}
        numbersDaysOfCurrentMonth={numbersDaysOfCurrentMonth}
        lastDaysPrevMonth={lastDaysPrevMonthLoc}
        howmatchDaysCurMonth={howmatchDaysCurMonthLoc}
      />
    </div>
  );
};

export default TestWrapper;
