import { React } from "react";

import styles from "../styles/Test.module.css";

import Login from "../components/login";
import { Assets } from "../components/atomic/Assets";
import TapSense from "../components/tapSense";
import Billboard from "../components/billboard";
import Tictatoe from "../components/tictatoe";
import Calendar from "../components/calendar";

// ("!just  for prototyping  !");

function Test() {
  return (
    <div className="  bg-slate-800">
      <div className="flex  flex-col items-center   bg-slate-500  text-amber-200">
        <div className=" m-2 cursor-default  bg-slate-100 p-6 text-black">
          <Assets />
        </div>

        <Tictatoe />
        <Calendar />

        <Billboard />

        <Login />
        <button
          className="bg-pink-400 p-6"
          onClick={() => {
            // fetch("http://localhost:3000/api/hello")
            fetch("/api/restricted")
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => {
                console.error("Error: nope --", error);
              });
          }}
        >
          Hi!
        </button>

        <div className="m-4 bg-orange-800 p-4">
          <TapSense />
        </div>

        <div className={`${styles.test} text-white`}> test</div>

        <div className=" flex w-full  flex-col items-center justify-center overflow-hidden  bg-slate-400">
          <div
            className={` ${styles.card}   rounded-full border-4 border-purple-400   bg-blue-300  px-3 py-5 text-center  text-6xl text-black`}
          >
            {" "}
            🌚
          </div>

          <div
            className={` ${styles.spin}    rounded-full border-4 border-purple-400 bg-blue-300 p-4 px-3 py-5 text-6xl text-black `}
          >
            {" "}
            🌚
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
