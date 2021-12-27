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

  const [map, setMap] = useState([[]]);

  const initialMap = Array(10)
    .fill(Array(10).fill(""))
    .map((c, ix) => c.map((elem, ir) => `x${ix}y${ir}`));

  // column row

  // const res = mapp.map((c, ix) => c.map((elem, ir) => `x${ix}y${ir}`));

  // console.log("res", res);

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
    x: 0,
    y: 0,
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

  useEffect(() => {
    const newMap = [...initialMap];
    newMap[0][0] = "player";

    setMap(newMap);
  }, []);

  useEffect(() => {
    const newMap = [...initialMap];
    newMap[walkerPosition.x][walkerPosition.y] = "player";

    setMap(newMap);
  }, [walkerPosition]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (
        ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
          e.code
        ) > -1
      ) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKeyDown, false);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const moveDown = () => {
    if (walkerPosition.y === 9) return;
    setWalkerPosition({ ...walkerPosition, y: walkerPosition.y + 1 });
  };

  const moveLeft = () => {
    if (walkerPosition.x === 0) return;
    setWalkerPosition({ ...walkerPosition, x: walkerPosition.x - 1 });
  };
  const moveRight = () => {
    if (walkerPosition.x === 9) return;
    setWalkerPosition({ ...walkerPosition, x: walkerPosition.x + 1 });
  };

  const moveUp = () => {
    if (walkerPosition.y === 0) return;
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
    // console.log("handler", e);

    // console.log("handler", e.key);

    switch (e.key) {
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowRight":
        moveRight();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowDown":
        moveDown();
        break;

      default:
        break;
    }
  };

  /*

  position(x,y)?

   */

  useEffect(() => {}, [grid, step]);

  return (
    <>
      <div tabIndex="0" onKeyDown={(e) => handler(e)}>
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

          <div className="grid grid-cols-3 text-center text-2xl ">
            <div> </div>

            <div
              onClick={() => moveUp()}
              className="flex rounded-md justify-center items-center bg-slate-400 w-14 h-14 m-1 hover:bg-slate-200 hover:text-black"
            >
              ▲
            </div>
            <div> </div>
            <div
              onClick={() => moveLeft()}
              className="flex rounded-md justify-center items-center bg-slate-400 w-14 h-14 m-1 hover:bg-slate-200 hover:text-black"
            >
              ◄
            </div>
            <div
              onClick={() => moveDown()}
              className="flex rounded-md justify-center items-center bg-slate-400 w-14 h-14 m-1 hover:bg-slate-200 hover:text-black"
            >
              ▼
            </div>
            <div
              onClick={() => moveRight()}
              className="flex rounded-md justify-center items-center bg-slate-400 w-14 h-14 m-1 hover:bg-slate-200 hover:text-black"
            >
              ►
            </div>
          </div>

          <div>
            {" "}
            currentPos = x:{walkerPosition.x} / y:{walkerPosition.y}
          </div>

          <div className="flex p-3 m-3 bg-blue-900">
            {map.map((e, i) => (
              <div key={i} className=" text-center ">
                {/* [x:{i}]{" "} */}
                {e.map((j) => (
                  <div
                    className="m-1 bg-blue-500 h-8 w-8 hover:bg-red-200"
                    key={j}
                  >
                    {j === "player" ? "x" : ""}
                    {/* {}
                    {j}{" "} */}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button
            onClick={() => move()}
            onKeyPress={(e) => handler(e)}
            className="bg-indigo-500 text-white  p-3 w-14 h-14 mt-8  hover:bg-indigo-700"
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
