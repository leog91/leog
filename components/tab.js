import React from "react";

const tabs = Array.from(Array(10)).map((e, i) => i + "asdasdasdsdd");

function Tab() {
  console.log(tabs);
  return (
    <div className="flex justify-center bg-black">
      {tabs.map((t) => (
        <div
          className=" w-8 overflow-hidden border-2 bg-red-400 hover:w-auto hover:scale-110 hover:border-red-100 "
          key={t}
        >
          {t}{" "}
        </div>
      ))}
    </div>
  );
}

export default Tab;
