import React, { useState } from "react";

function Folder() {
  const [toggle, setToggle] = useState(false);
  const [triggered, setTriggered] = useState(false);

  const handleToggle = () => {
    console.log(111);
    if (toggle) {
      setTriggered(true);
    }
    setToggle(true);

    setTimeout(() => {
      setToggle(false);
      console.log(222);
    }, 1000);

    console.log(333);
  };

  return (
    <div className="h-screen bg-sky-800 text-center text-green-300">
      <h1>folder</h1>
      <div>toggle: {toggle.toString()}</div>
      <div>triggered: {triggered.toString()}</div>
      <button
        onClick={() => handleToggle()}
        className="m-2 rounded-lg border-2 border-blue-300 bg-blue-900 p-2"
      >
        {" "}
        hello!
      </button>
      <button
        onClick={() => setTriggered(false)}
        className="m-2 rounded-lg border-2 border-blue-300 bg-blue-900 p-2"
      >
        {" "}
        clear
      </button>

      <div className="m-2  rounded-lg border-2 border-dashed border-blue-300 bg-blue-900 p-2">
        123
      </div>
    </div>
  );
}

export default Folder;
