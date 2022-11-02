import React from "react";

const calendar = [...Array(31).keys()].map((d) => d + 1);

function Calendar() {
  return (
    <div>
      Calendar
      <div className="grid grid-cols-7 grid-rows-6 ">
        {calendar.map((d) => (
          <div
            className="relative m-0.5 h-6 w-6 bg-blue-800 p-1 text-center"
            key={d}
          >
            {d}
            <div className="absolute top-2 left-1 h-5 w-5 rounded-full border-2 border-red-600 hover:cursor-pointer hover:border-yellow-400">
              {" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
