import { useState, useEffect } from "react";
import MapCel from "../components/walker/MapCel";
import { RIGHT, LEFT, UP, DOWN } from "../constants/walker";
import {
  emptyMap,
  newemptyMap,
  initialMap,
  RightMap,
  getMap,
} from "../utils/walker/world";

const MAP_ELEM = {
  TREE: { desc: "has leafs", code: "tree", interact: "feels rough" },
  ROCK: { desc: "heavy", code: "rock" },
  MUSHROOM: { desc: "power up", code: "mushroom" },
};

const canPick = [MAP_ELEM.MUSHROOM];

function Walker() {
  //   const grid = [
  //     ["O", "O", "O", "O"],
  //     ["O", "O", "O", "O"],
  //     ["O", "X", "O", "O"],
  //     ["O", "O", "O", "O"],
  //   ];

  //check keys, idx(ixiy)

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

  const [interactionTarget, setInteractionTarget] = useState(null);

  // const initialMap = Array(10)
  //   .fill(Array(10).fill(""))
  //   .map((c, ix) => c.map((elem, ir) => `x${ix}y${ir}`));

  // const initialMap = emptyMap();

  // initialMap[3][3].content = "tree";

  // initialMap[5][3].content = "mushroom";

  // initialMap[9][2].content = "wall";
  // initialMap[9][3].content = "wall";
  // initialMap[9][4].content = "wall";
  // initialMap[9][7].content = "wall";
  // initialMap[9][8].content = "wall";
  // initialMap[9][9].content = "wall";

  // initialMap[9][6].passage = { map: [2, 1], walkerPosition: [0, 5] };

  // console.log(">>>>>>", newemptyMap());

  // console.log(initialMap);

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
    direction: RIGHT,
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
    const newMap = [...initialMap()];
    // newMap[0][0].content = "player";

    setMap(newMap);
  }, []);

  useEffect(() => {
    // const newMap = [...initialMap()];
    // newMap[walkerPosition.x][walkerPosition.y].content = "player";
    // setMap(newMap);
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
    if (walkerPosition.direction !== DOWN) {
      setWalkerPosition({ ...walkerPosition, direction: DOWN });
      return;
    }

    if (map[walkerPosition.x][walkerPosition.y].passage?.direction === DOWN) {
      setMap(getMap(map[walkerPosition.x][walkerPosition.y].passage.map));
      setWalkerPosition({
        ...walkerPosition,
        x: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[0],
        y: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[1],
      });
    }

    if (
      walkerPosition.y === map[0].length - 1 ||
      map[walkerPosition.x][walkerPosition.y + 1].content === "wall"
    ) {
      return;
    }

    walkerPosition.direction === DOWN &&
      setWalkerPosition({ ...walkerPosition, y: walkerPosition.y + 1 });
  };

  const moveLeft = () => {
    if (walkerPosition.direction !== LEFT) {
      setWalkerPosition({ ...walkerPosition, direction: LEFT });
      return;
    }

    if (map[walkerPosition.x][walkerPosition.y].passage?.direction === LEFT) {
      setMap(getMap(map[walkerPosition.x][walkerPosition.y].passage.map));
      setWalkerPosition({
        ...walkerPosition,
        x: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[0],
        y: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[1],
      });
    }

    if (
      walkerPosition.x === 0 ||
      map[walkerPosition.x - 1][walkerPosition.y].content === "wall"
    ) {
      return;
    }

    walkerPosition.direction === LEFT &&
      setWalkerPosition({ ...walkerPosition, x: walkerPosition.x - 1 });
  };

  const moveRight = () => {
    if (walkerPosition.direction !== RIGHT) {
      setWalkerPosition({ ...walkerPosition, direction: RIGHT });
      return;
    }

    if (map[walkerPosition.x][walkerPosition.y].passage?.direction === RIGHT) {
      setMap(getMap(map[walkerPosition.x][walkerPosition.y].passage.map));
      setWalkerPosition({
        ...walkerPosition,
        x: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[0],
        y: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[1],
      });
    }

    if (
      walkerPosition.x === map.length - 1 ||
      map[walkerPosition.x + 1][walkerPosition.y].content === "wall"
    ) {
      return;
    }

    walkerPosition.direction === RIGHT &&
      setWalkerPosition({ ...walkerPosition, x: walkerPosition.x + 1 });
  };

  const moveUp = () => {
    if (walkerPosition.direction !== UP) {
      setWalkerPosition({ ...walkerPosition, direction: UP });
      return;
    }

    if (map[walkerPosition.x][walkerPosition.y].passage?.direction === UP) {
      setMap(getMap(map[walkerPosition.x][walkerPosition.y].passage.map));
      setWalkerPosition({
        direction: map[walkerPosition.x][walkerPosition.y].passage.direction,
        x: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[0],
        y: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[1],
      });
    }

    if (
      walkerPosition.y === 0 ||
      map[walkerPosition.x][walkerPosition.y - 1].content === "wall"
    ) {
      return;
    }

    walkerPosition.direction === UP &&
      setWalkerPosition({ ...walkerPosition, y: walkerPosition.y - 1 });
    // if (walkerPosition.y === 0) return;
    // walkerPosition.direction === UP
    //   ? setWalkerPosition({ ...walkerPosition, y: walkerPosition.y - 1 })
    //   : setWalkerPosition({ ...walkerPosition, direction: UP });
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

  useEffect(() => {
    setInteractionTarget(null);
  }, [walkerPosition]);

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

      case "x":
        console.log("pressing x");

        console.log(walkerPosition.direction);
        // switch (walkerPosition.direction) {
        if (
          walkerPosition.direction === DOWN &&
          walkerPosition.y < map[0].length - 1 &&
          map[walkerPosition.x][walkerPosition.y + 1].content === "tree"
        )
          setInteractionTarget(MAP_ELEM.TREE);

        if (
          walkerPosition.direction === UP &&
          walkerPosition.y > 0 &&
          map[walkerPosition.x][walkerPosition.y - 1].content === "tree"
        )
          setInteractionTarget(MAP_ELEM.TREE);
        if (
          walkerPosition.direction === RIGHT &&
          walkerPosition.x < map.length - 1 &&
          map[walkerPosition.x + 1][walkerPosition.y].content === "tree"
        )
          setInteractionTarget(MAP_ELEM.TREE);
        if (
          walkerPosition.direction === LEFT &&
          walkerPosition.x > 0 &&
          map[walkerPosition.x - 1][walkerPosition.y].content === "tree"
        )
          setInteractionTarget(MAP_ELEM.TREE);

        break;

      case "z":
        setInteractionTarget(null);
        break;
      default:
        console.log("key", e.key);
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

          <div className="flex m-4">
            <div className="grid mx-14 grid-cols-3 text-center text-2xl ">
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

            <div className="flex bg-blue-500 items-center   rounded-3xl">
              TODO
              <div className="flex flex-col items-center">
                <div>press z</div>
                <button className="rounded-full m-2 w-16 h-16 bg-blue-900 font-black text-lg">
                  z
                </button>
              </div>
              <div className="flex flex-col items-center">
                <div>press z</div>
                <button className="rounded-full m-2 w-16 h-16 bg-blue-900 font-black text-lg">
                  x
                </button>
              </div>
            </div>
          </div>

          <div>
            {" "}
            currentPos = x:{walkerPosition.x} / y:{walkerPosition.y}
          </div>
          <div>direction = {walkerPosition.direction}</div>

          <div className="flex">
            <div className="flex p-3 m-3 bg-blue-900">
              {map.map((e, i) => (
                <div key={i} className=" text-center ">
                  {/* [x:{i}]{" "} */}
                  {e.map((j, iy) => (
                    <MapCel
                      key={j.id}
                      cell={j}
                      walkerPosition={
                        walkerPosition.x === i && walkerPosition.y === iy
                          ? walkerPosition
                          : null
                      }
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-sky-800 w-56 h-36 m-3 p-3">
              <div className="font-bold text-center">*interaction box*</div>
              <div>
                {interactionTarget && (
                  <div>
                    {" "}
                    <div>
                      {">"} {interactionTarget.code}
                    </div>
                    {interactionTarget.desc && (
                      <div>
                        {">"} {interactionTarget.desc}{" "}
                      </div>
                    )}
                    {interactionTarget.interact && (
                      <div>
                        {"> action - "} {interactionTarget.interact}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
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
