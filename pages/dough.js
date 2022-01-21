import React, { useEffect, useState } from "react";
import Link from "next/link";

//translate
//guides
//lev
//time
//style
//recipes
//type
//> pizza g
//>bread

const recipes = [
  { name: "pizza", url: "someUrl" },
  { name: "bread", url: "someUrl" },
];

function Dough() {
  const [flour, setFlour] = useState(500);
  const [water, setWater] = useState(300);
  const [ratio, setRatio] = useState(60);

  const handleWater = (v) => {
    setWater(v);
    setFlour(Math.round(v / (ratio / 100)));
  };
  const handleFlour = (v) => {
    setFlour(v);

    setWater(Math.round(v * (ratio / 100)));
  };

  const handleRatio = (v) => {
    setRatio(v);
    setWater(Math.round(flour * (v / 100)));
  };

  return (
    <div className="h-screen bg-yellow-200 flex flex-col  items-center text-center ">
      <div className="text-xl font-bold bg-yellow-500 w-full ">bread</div>
      <form>
        <div className="flex m-3">
          <div>flour: </div>
          <input
            value={flour}
            type="number"
            onChange={(e) => handleFlour(e.target.value)}
          ></input>{" "}
          g
        </div>
        <div className="flex  m-3">
          <div>water: </div>
          <input
            value={water}
            type="number"
            onChange={(e) => handleWater(e.target.value)}
          ></input>
          g
        </div>
        <div className="flex m-3">
          <div>% </div>
          <input
            value={ratio}
            type="number"
            onChange={(e) => handleRatio(e.target.value)}
          ></input>
        </div>
      </form>
      <div>
        {recipes.map((r) => (
          <div
            className="cursor-pointer bg-yellow-300 rounded-lg p-1 m-2"
            key={r.name}
          >
            {"#"}
            {r.name}
            {/* <Link href={r.url}>
              <a>{r.name}</a>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dough;
