import React from "react";
import { useState } from "react";

const App = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [time, settime] = useState(new Date().toLocaleString());
  const [day, setday] = useState(daysOfWeek[new Date().getDay()]);
  
// const dayName = daysOfWeek[dayNumber];
  setInterval(() => {
    settime(new Date().toLocaleString());
    setday(daysOfWeek[new Date().getDay()])
  }, 1000);
  return (
    <div className="page w-screen h-screen bg-slate-400 relative">
      <div className="container absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-blue-200 rounded-2xl h-2/4 w-1/4 text-center   ">
        <h3 className="text-4xl  mt-6   "> Current Time is :</h3>
        <h1 className="text-5xl m-6 font-bold ">{time}</h1>
        <h3 className="text-4xl font-medium    ">{day}</h3>
      </div>
    </div>
  );
};

export default App;
