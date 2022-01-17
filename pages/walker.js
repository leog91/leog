import { useState, useEffect } from "react";
import MapCel from "../components/walker/MapCel";
import {
  RIGHT,
  LEFT,
  UP,
  DOWN,
  MAP_ELEM,
  INV_ELEM,
  FINITE,
  getInvFromCode,
} from "../constants/walker";
import { initialMap, getMap } from "../utils/walker/world";

//mobile
// ..
//move-constants

//constanst
// const checkUniqueCode = () => true

//check descriptions

// canPick, water?, terrain Bg, pick fruit, drink water,

const canPick = [MAP_ELEM.MUSHROOM];

function Walker() {
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

  const [backpack, setBackpack] = useState({
    gold: 2,
    items: [
      { item: INV_ELEM.WATER, qty: 1 },
      { item: INV_ELEM.MUSHROOM, qty: 1 },
    ],
  });

  const [map, setMap] = useState([[]]);

  const initialInteractionBox = { cursor: 0, target: null };

  const [interactionBox, setInteractionBox] = useState(initialInteractionBox);

  const [walkerPosition, setWalkerPosition] = useState({
    x: 0,
    y: 0,
    direction: RIGHT,
  });

  // const inventoryCodeMapping = (code) => interactionBox.target.i_code;

  useEffect(() => {
    const newMap = [...initialMap()];
    setMap(newMap);
  }, []);

  useEffect(() => {}, [walkerPosition]);

  const addToBackpack = () => {
    let item = backpack.items.find(
      (i) => i.item.code === interactionBox.target.i_code
    );

    if (item) {
      item.qty = item.qty + 1;
    } else {
      item = {};
      item.item = getInvFromCode(interactionBox.target.i_code);
      item.qty = 1;
    }

    setBackpack({
      ...backpack,
      items: [
        ...backpack.items.filter(
          (i) => i.item.code !== interactionBox.target.i_code
        ),
        item,
      ],
    });
  };

  //parameter?
  //update
  const removeFromBackpack = () => {
    console.log("addtoback =>>");

    let newItems = { ...backpack.items };

    const i_code = inventoryCodeMapping(interactionBox.target.code);

    //remove logic
    if (backpack.items[i_code] > 1) {
      newItems[i_code] = newItems[i_code] - 1;

      console.log("removing on >1");
    } else {
      console.log(newItems, "full items");
      delete newItems[i_code];
      console.log(newItems, "newwwwitems");
    }
    setBackpack({ ...backpack, items: newItems });
  };

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
      map[walkerPosition.x][walkerPosition.y + 1].content === MAP_ELEM.WALL.code
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
      map[walkerPosition.x - 1][walkerPosition.y].content === MAP_ELEM.WALL.code
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
      map[walkerPosition.x + 1][walkerPosition.y].content === MAP_ELEM.WALL.code
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
      map[walkerPosition.x][walkerPosition.y - 1].content === MAP_ELEM.WALL.code
    ) {
      return;
    }

    walkerPosition.direction === UP &&
      setWalkerPosition({ ...walkerPosition, y: walkerPosition.y - 1 });
  };

  useEffect(() => {
    setInteractionBox(initialInteractionBox);
  }, [walkerPosition]);

  const handler = (key) => {
    switch (key) {
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
        if (interactionBox.target?.pick) {
          addToBackpack();

          if (interactionBox.target.pick === FINITE) {
            const newMap = JSON.parse(JSON.stringify(map));

            newMap[interactionBox.pos[0]][interactionBox.pos[1]].content = "";

            setMap(newMap);
          }

          setInteractionBox(initialInteractionBox);

          break;
        }

        if (
          walkerPosition.direction === DOWN &&
          walkerPosition.y < map[0].length - 1 &&
          map[walkerPosition.x][walkerPosition.y + 1].content
        )
          setInteractionBox({
            ...initialInteractionBox,
            target:
              MAP_ELEM[map[walkerPosition.x][walkerPosition.y + 1].content],
            pos: [walkerPosition.x, walkerPosition.y + 1],
          });

        if (
          walkerPosition.direction === UP &&
          walkerPosition.y > 0 &&
          map[walkerPosition.x][walkerPosition.y - 1].content
        )
          setInteractionBox({
            ...initialInteractionBox,
            target:
              MAP_ELEM[map[walkerPosition.x][walkerPosition.y - 1].content],
            pos: [walkerPosition.x, walkerPosition.y - 1],
          });
        if (
          walkerPosition.direction === RIGHT &&
          walkerPosition.x < map.length - 1 &&
          map[walkerPosition.x + 1][walkerPosition.y].content
        ) {
          setInteractionBox({
            ...initialInteractionBox,
            target:
              MAP_ELEM[map[walkerPosition.x + 1][walkerPosition.y].content],
            pos: [walkerPosition.x + 1, walkerPosition.y],
          });
        }
        if (
          walkerPosition.direction === LEFT &&
          walkerPosition.x > 0 &&
          map[walkerPosition.x - 1][walkerPosition.y].content
        )
          setInteractionBox({
            ...initialInteractionBox,
            target:
              MAP_ELEM[map[walkerPosition.x - 1][walkerPosition.y].content],
            pos: [walkerPosition.x - 1, walkerPosition.y],
          });

        break;

      case "z":
        setInteractionBox(initialInteractionBox);
        break;
      default:
        console.log("key", key);
        break;
    }
  };

  return (
    <>
      <div
        className="bg-blue-800 h-screen"
        tabIndex="0"
        onKeyDown={(e) => handler(e.key)}
      >
        <div className="   flex flex-col bg-blue-800  text-green-300 font-semibold place-items-center  ">
          <div className="text-4xl   mb-8">Walker</div>

          <div>
            currentPos = x:{walkerPosition.x} / y:{walkerPosition.y}
          </div>
          <div>direction = {walkerPosition.direction}</div>

          <div className="flex flex-col items-center sm:flex-row">
            <div
              className={`flex p-3 m-3 bg-blue-900  ${
                interactionBox.target && "opacity-50"
              }  `}
            >
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

            <div>
              <div className="">
                <div className="font-bold text-center">Inventory</div>
                <div className="pl-6">
                  <div>{backpack.gold} gold</div>
                  <div>
                    {backpack.items.map((i) => (
                      <div key={i.item.code}>
                        {i.qty} - {i.item.name} - [$ {i.item.price}]
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`bg-sky-800 w-56 h-36 m-3 p-3 border-2 border-sky-800 ${
                  interactionBox.target && "border-2 border-sky-300"
                }`}
              >
                <div className="font-bold text-center">*interaction box*</div>
                <div>
                  {interactionBox.target && (
                    <div>
                      {" "}
                      <div>
                        {">"} {interactionBox.target.code}
                      </div>
                      {interactionBox.target.desc && (
                        <div>
                          {">"} {interactionBox.target.desc}{" "}
                        </div>
                      )}
                      {interactionBox.target.interact && (
                        <div>
                          {"> [action] - "} {interactionBox.target.interact}
                        </div>
                      )}
                      {interactionBox.target.pick && (
                        <div>{"> [PICK] - x "}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex ">
            <div className="grid grid-cols-3 text-center text-2xl content-center m-6">
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

            <div className="flex flex-col sm:flex-row bg-blue-500 items-center   rounded-3xl m-6">
              <div className="flex flex-col items-center">
                <div>press z</div>
                <button
                  onClick={() => handler("z")}
                  className="rounded-full m-2 w-16 h-16 bg-blue-900 font-black text-lg"
                >
                  z
                </button>
              </div>
              <div className="flex flex-col items-center">
                <div>press z</div>
                <button
                  onClick={() => handler("x")}
                  className="rounded-full m-2 w-16 h-16 bg-blue-900 font-black text-lg"
                >
                  x
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Walker;
