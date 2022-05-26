import React from 'react';
import "./App.css";
import CalendarWrapper from './components/big-calendar/CalendarWrapper';

const App = (props) => {
  return (
    <>
      <CalendarWrapper state={props.state}
        howmatchDays={props.howmatchDays}
        funcNumbersDaysOfCurrentMonth={props.funcNumbersDaysOfCurrentMonth}
        getTitleMonth={props.getTitleMonth}
        lastDaysPrevMonth={props.lastDaysPrevMonth} 
        changeCurrMonth={props.changeCurrMonth}/>
    </>
  );
};

export default App;