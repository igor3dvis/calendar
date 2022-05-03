import React from "react";
import "./App.css";
import CalendarWrapper from './components/bigCalendar/CalendarWrapper'

class App extends React.Component {
    render() {
    
    return (
      <div className="App container">
        <CalendarWrapper/>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <>
//       <Header />

//     </>
//   );
// };
