import { useState, useEffect } from "react";

function Walker() {
  //   const grid = [
  //     ["O", "O", "O", "O"],
  //     ["O", "O", "O", "O"],
  //     ["O", "X", "O", "O"],
  //     ["O", "O", "O", "O"],
  //   ];

  // render mode
  // center(zelda, pokemon)
  // clasic (chess)
  // build world (world)/ randomize, vanilla
  //last 10 steps/timemachine/ undo
  //walk-transition animation
  //on key press
  // next map

  // check keys

  const [step, setStep] = useState(0);
  const items = Array(100).fill({});

  const [grid, setGrid] = useState([
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "X", "O", "O"],
    ["O", "O", "O", "O"],
  ]);

  const [mapSize, setMapSize] = useState({
    x: 4,
    y: 4,
  });

  const [walkerPosition, setWalkerPosition] = useState({
    x: 1,
    y: 1,
  });

  const move = () => {
    console.log("moving");
    setGrid([
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["O", "O", "X", "O"],
      ["O", "O", "O", "O"],
    ]);
    setStep(step + 1);
  };

  const moveDown = () => {
    console.log("moving Down");
    console.log("position", walkerPosition);
    setWalkerPosition({ ...walkerPosition, y: walkerPosition.y + 1 });
  };

  const moveUp = () => {
    console.log("moving Up");
    console.log("position", walkerPosition);
    setWalkerPosition({ ...walkerPosition, y: walkerPosition.y - 1 });
  };

  const reset = () => {
    console.log("reseting");
    setGrid([
      ["O", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["O", "X", "O", "O"],
      ["O", "O", "O", "O"],
    ]);
    setStep(0);
  };

  const handler = (e) => {
    console.log("handler", e.key);
  };

  /*

  position(x,y)?

   */

  useEffect(() => {}, [grid, step]);

  return (
    <>
      <div onKeyPress={(e) => handler(e)}>
        <div className=" bg-blue-800 flex flex-col  text-green-300 font-semibold place-items-center  ">
          <div className="text-4xl   mb-8">Walker</div>
          <div>steps = {step}</div>
          <div>
            {grid.map((l, ixl) => (
              <div key={ixl} className="flex">
                {l.map((e, eix) => (
                  <div className="flex" key={eix}>
                    {e}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button
            onClick={() => move()}
            //   onKeyPress={(e) => handler(e)}
            className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700"
          >
            {" "}
            move
          </button>
          <button
            onClick={() => reset()}
            className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700"
          >
            {" "}
            reset
          </button>

          <button
            onClick={() => moveDown()}
            //   onKeyPress={(e) => handler(e)}
            className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700"
          >
            {" "}
            moveDown
          </button>
          <button
            onClick={() => moveUp()}
            //   onKeyPress={(e) => handler(e)}
            className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700"
          >
            {" "}
            moveUp
          </button>
          <div className="mt-auto mb-5">Share this</div>
          <div className="grid grid-cols-10  grid-rows-10 gap-1 bg-black">
            {items.map((e, i) => (
              <div key={i} className="bg-red-600 text-center hover:bg-red-200">
                {i} : x{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Walker;
