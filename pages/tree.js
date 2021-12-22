import React, { useState } from "react";
import { Badge } from "../components/atomic/Badge";

//to-do
const Elem = ({ c, i, setTooltip }) => {
  return (
    <div
      onMouseOver={() => setTooltip(c.name)}
      onMouseLeave={() => setTooltip(null)}
      className="m-1 w-32 h-8"
    >
      {c.name} {c.pos} index{i}
    </div>
  );
};

const Tree = () => {
  const [tooltip, setTooltip] = useState(null);

  const buildObj = (a = "aaaa", b = "bbbbb", c = "ccccc") => {
    return { asdd: a, bbb: b, ccc: c };
  };

  const data = [
    {
      pos: ["1", "1"],
      name: "name",
      info: "info",
      img: "img",
    },
    {
      pos: ["1", "2"],
      name: "name2",
      info: "info2",
      img: "img",
    },
  ];

  const data2 = [
    [
      {
        pos: ["0", "0"],
        name: "name00",
        info: "info",
        img: "img",
      },
      {
        pos: ["0", "1"],
        name: "name01",
        info: "info",
        img: "img",
      },

      {
        pos: ["0", "2"],
        name: "name02",
        info: "info",
        img: "img",
      },
    ],
    [
      {
        pos: ["1", "0"],
        name: "name2",
        info: "info",
        img: "img",
      },
      {
        pos: ["1", "1"],
        name: "name3",
        info: "info",
        img: "img",
      },
      {
        pos: ["1", "2"],
        name: "name12",
        info: "info",
        img: "img",
      },
    ],

    [
      {
        pos: ["2", "0"],
        name: "name4",
        info: "info",
        img: "img",
      },
      {
        pos: ["2", "1"],
        name: "name5",
        info: "info",
        img: "img",
      },
      {
        pos: ["2", "2"],
        name: "name22",
        info: "info",
        img: "img",
      },
    ],
  ];

  return (
    <>
      <div className="flex  flex-col  items-center">
        {data2.map((d, i) => (
          <div
            className={` flex ${i % 2 ? "bg-red-400" : "bg-red-600"}`}
            key={d[0].name}
          >
            {d.map((c) => (
              <Elem key={c.name} setTooltip={setTooltip} c={c} irow={i} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex m-auto mt-8 justify-center  rounded-full items-center w-28 h-12 bg-red-500  ">
        {tooltip && (
          <div className="bg-red-300 px-3 py-1 rounded-full"> {tooltip}</div>
        )}
      </div>
      from end to start, linear?, quad?, mid point ,
      <div className="m-4 w-24 h-24">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polyline stroke="black" fill="none" points={`0,0 100,100`} />
        </svg>
      </div>
      <div className="m-4 flex">
        <div className="m-2">
          <Badge />
        </div>
        <div className="m-2">
          <Badge />
        </div>
        <div className="m-2">
          <Badge label={"Sarasa"} />
        </div>
      </div>
    </>
  );
};

export default Tree;
