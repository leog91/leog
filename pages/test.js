import { React } from "react";
import Canvas from "../components/canvas";
import styles from "../styles/Test.module.css";

import Login from "../components/login";

// ("!just  for prototyping  !");

function Test() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-500 text-amber-200">
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
      <div className={`${styles.test} text-white`}> test</div>
      <Canvas />
    </div>
  );
}

export default Test;
