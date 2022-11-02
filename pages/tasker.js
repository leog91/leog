import React from "react";
import { useState } from "react";

const todo = [
  { task: "tax", time: 30 },
  { task: "small mealprep", time: 15 },
  { task: "wardrobe", time: 5 },
  { task: "watering plant", time: 3 },
  { task: "hoover", time: 5 },
  { task: "cloth mop", time: 3 },
  { task: "desk", time: 2 },
];

function Tasker() {
  const [timer, setTimer] = useState(false);
  return (
    <div className=" h-screen w-full bg-blue-900">
      <div className="flex  flex-col items-center bg-blue-900  text-blue-100">
        <h1 className="mb-2 text-2xl font-bold">Tasker</h1>

        <button className="m-2 rounded-lg border-4 border-violet-500 bg-blue-200 p-2 font-extrabold text-blue-900">
          Random
        </button>

        <button
          onClick={() => setTimer(!timer)}
          className="m-2 rounded-lg border-4 border-violet-500 bg-blue-200 p-2 font-extrabold text-blue-900"
        >
          GO!
        </button>

        <div className={`m-4 ${timer ? "animate-spin" : ""} text-9xl`}>⏱</div>
        <div className="mt-4 w-full max-w-md ">
          {todo.map((t) => (
            <div
              key={t.task}
              className="flex items-center justify-between space-x-1 border-t-2   border-slate-300 px-2 text-xl"
            >
              <div className=" ">{t.task}</div>
              <div className=" ">{t.time} '</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasker;
