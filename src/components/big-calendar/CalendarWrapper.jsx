import React from "react";
import CalendarMonth from "./CalendarMonth";
import "../../components/CalendarS.css";

const CalendarWrapper = (props) => {
  const days = props.howmatchDays();
  const { howmatchDaysCurMonth, howmatchDaysPrevMonth } = days;

  const arrDays = props.funcNumbersDaysOfCurrentMonth(
    howmatchDaysCurMonth,
    howmatchDaysPrevMonth
  );
  
  /* hendlers */
  const hendlerRendPrevMonth = () => {
    props.changeCurrMonth("prev")
   };
  const hendlerRendNextMonth = () => { 
    props.changeCurrMonth("next")
  };

  return (
    <div className="calendar-wrapper">
      <div>
        <button onClick={hendlerRendPrevMonth}>Prev</button>
        <button onClick={hendlerRendNextMonth}>Next</button>
      </div>
      <CalendarMonth
        titleMonth={props.getTitleMonth()}
        currentData={props.state.currentData}
        currentYear={props.state.currentYear}
        numbersDaysOfCurrentMonth={arrDays}
        lastDaysPrevMonth={props.lastDaysPrevMonth()}
        howmatchDaysCurMonth={howmatchDaysCurMonth}
      />
    </div>
  );
};
export default CalendarWrapper;