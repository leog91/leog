import React, { useEffect, useState } from "react";
import { useRef } from "react";

function Canvas() {
  const canvas = useRef();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
      const context = canvas.current.getContext("2d");
      context.moveTo(index, index);
      context.lineTo(
        Math.floor(Math.random() * 300),
        Math.floor(Math.random() * 100)
      );
      context.stroke();
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, []);

  const run = () => {
    console.log("run");
    console.log(Math.floor(Math.random() * 100));
    const context = canvas.current.getContext("2d");
    context.moveTo(0, 0);
    context.lineTo(
      Math.floor(Math.random() * 700),
      Math.floor(Math.random() * 100)
    );
    context.stroke();
  };

  return (
    <div>
      <div> {index}</div>
      canvas
      <canvas ref={canvas} height={200} width={300} />
      <button onClick={() => run()}> move</button>
    </div>
  );
}

export default Canvas;
