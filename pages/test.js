import { React } from "react";
import Canvas from "../components/canvas";
import styles from "../styles/Test.module.css";

// ("!just  for prototyping  !");

function Test() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-500 text-amber-200">
      Test
      <div className={`${styles.test} text-white`}> test</div>
      <Canvas />
    </div>
  );
}

export default Test;
