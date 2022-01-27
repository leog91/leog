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

  const [mode, setMode] = useState("map");

  const [map, setMap] = useState([[]]);

  const initialInteractionBox = { cursor: 0, target: null };

  const [interactionBox, setInteractionBox] = useState(initialInteractionBox);

  const [walkerPosition, setWalkerPosition] = useState({
    x: 0,
    y: 0,
    direction: RIGHT,
  });

  const [menuCursor, setMenuCursor] = useState(0);

  const nextCell = () => {
    switch (walkerPosition.direction) {
      case RIGHT:
        return [walkerPosition.x + 1, walkerPosition.y];
      case LEFT:
        return [walkerPosition.x - 1, walkerPosition.y];
      case DOWN:
        return [walkerPosition.x, walkerPosition.y + 1];
      case UP:
        return [walkerPosition.x, walkerPosition.y - 1];
    }
  };

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

  const menu = ["Inventory", "exit"];

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

  const isMapLimit = () => {
    switch (walkerPosition.direction) {
      case DOWN:
        return walkerPosition.y === map[0].length - 1;
      case UP:
        return walkerPosition.y === 0;
      case RIGHT:
        return walkerPosition.x === map.length - 1;
      case LEFT:
        return walkerPosition.x === 0;
    }
  };

  const isBlockedPath = () => {
    let [x, y] = nextCell();
    return map[x][y].content === MAP_ELEM.WALL.code;
  };

  const move = (dir) => {
    if (walkerPosition.direction !== dir) {
      setWalkerPosition({ ...walkerPosition, direction: dir });
      return;
    }

    if (map[walkerPosition.x][walkerPosition.y].passage?.direction === dir) {
      setMap(getMap(map[walkerPosition.x][walkerPosition.y].passage.map));
      setWalkerPosition({
        ...walkerPosition,
        x: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[0],
        y: map[walkerPosition.x][walkerPosition.y].passage.walkerPosition[1],
      });
    }

    if (isMapLimit() || isBlockedPath()) {
      return;
    }

    let [x, y] = nextCell();
    walkerPosition.direction === dir &&
      setWalkerPosition({
        ...walkerPosition,
        x: x,
        y: y,
      });
  };

  const openMenu = () => {
    setMode("menu");
  };

  const mapHandler = (key) => {
    switch (key) {
      case "ArrowUp":
        move(UP);
        break;
      case "ArrowRight":
        move(RIGHT);
        break;
      case "ArrowLeft":
        move(LEFT);
        break;
      case "ArrowDown":
        move(DOWN);
        break;

      case "Enter":
        openMenu();
        break;

      case "x":
        //add item

        if (interactionBox.target?.pick) {
          addToBackpack();

          //
          if (interactionBox.target.pick === FINITE) {
            const newMap = JSON.parse(JSON.stringify(map));

            newMap[interactionBox.pos[0]][interactionBox.pos[1]].content = "";

            setMap(newMap);
          }

          setInteractionBox(initialInteractionBox);

          break;
        }

        let [x, y] = nextCell();

        if (!isMapLimit() && map[x][y].content) {
          if (
            map[x][y].content === MAP_ELEM.CAULDRON.code ||
            map[x][y].content === MAP_ELEM.TRADER.code
          ) {
            setMode("craft");
          } else {
            setInteractionBox({
              ...initialInteractionBox,
              target: MAP_ELEM[map[x][y].content],
              pos: [x, y],
            });
          }
        }

        break;

      default:
        console.log("key", key);
        break;
    }
  };

  const cursorHandler = (key) => {
    const cursorLength =
      mode === "menu"
        ? menu.length
        : mode === "inventory"
        ? backpack.items.length
        : 0;

    if (key === "ArrowUp") {
      setMenuCursor(menuCursor === 0 ? 0 : menuCursor - 1);
    }

    if (key === "ArrowDown") {
      setMenuCursor(
        menuCursor === cursorLength - 1 ? menu.length - 1 : menuCursor + 1
      );
    }
  };

  const menuHandler = (key) => {
    cursorHandler(key);

    if (key === "x") {
      if (menu.indexOf("Inventory") === menuCursor) {
        setMode("inventory");
        setMenuCursor(0);
      }
      if (menu.indexOf("exit") === menuCursor) {
        initialState();
      }
    }
  };

  const inventoryHandler = (key) => {
    cursorHandler(key);
  };

  const initialState = () => {
    setMode("map");
    setInteractionBox(initialInteractionBox);
    setMenuCursor(0);
  };

  useEffect(() => {
    setInteractionBox(initialInteractionBox);
  }, [walkerPosition]);

  const handler = (key) => {
    if (key === "z") {
      initialState();
      return;
    }

    mode === "map" && mapHandler(key);

    mode === "craft" && console.log(`craft mode ${key}`);

    mode === "menu" && menuHandler(key);

    mode === "inventory" && inventoryHandler(key);
  };

  return (
    <>
      <div
        className="h-screen bg-blue-800"
        tabIndex="0"
        onKeyDown={(e) => handler(e.key)}
      >
        <div className="flex flex-col place-items-center  bg-blue-800 font-semibold text-green-300">
          <div className="mb-8   text-4xl">Walker</div>

          <div>
            currentPos = x:{walkerPosition.x} / y:{walkerPosition.y}
          </div>
          <div>direction = {walkerPosition.direction}</div>

          <div className="flex flex-col items-center sm:flex-row">
            <div
              className={`m-3 flex bg-blue-900 p-3  ${
                (interactionBox.target || mode !== "map") && "opacity-50"
              }  `}
            >
              {map.map((e, i) => (
                <div key={i} className="text-center">
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
                <div className="text-center font-bold">Stats</div>
                <div className="pl-6">
                  <div>{backpack.gold} gold</div>
                </div>
              </div>
              <div
                className={`m-3 h-36 w-56 border-2 border-sky-800 bg-sky-800 p-3 ${
                  interactionBox.target && "border-2 border-sky-300"
                }`}
              >
                {mode === "map" && (
                  <div>
                    {" "}
                    <div className="text-center font-bold">
                      *interaction box*
                    </div>
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
                )}

                {mode === "craft" && (
                  <div>
                    <div>crafting</div>

                    <div>z - exit</div>
                  </div>
                )}
                {mode === "menu" && (
                  <div>
                    <div className="text-center">menu</div>

                    {menu.map((e, i) => (
                      <div className="flex" key={e}>
                        {" "}
                        <div className="w-5">{i === menuCursor && ">"}</div>
                        {e}
                      </div>
                    ))}
                  </div>
                )}
                {mode === "inventory" && (
                  <div>
                    <div className="text-center">Inventory</div>

                    {backpack.items.map((e, i) => (
                      <div className="flex" key={e.item.code}>
                        {" "}
                        <div className="w-5">{i === menuCursor && ">"}</div>
                        {e.qty} - {e.item.name} - [$ {e.item.price}]
                        {/* {e.item.name} */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="m-6 grid grid-cols-3 content-center text-center text-2xl">
              <div> </div>

              <div
                onClick={() => move(UP)}
                className="m-1 flex h-14 w-14 items-center justify-center rounded-md bg-slate-400 hover:bg-slate-200 hover:text-black"
              >
                ▲
              </div>
              <div> </div>
              <div
                onClick={() => move(LEFT)}
                className="m-1 flex h-14 w-14 items-center justify-center rounded-md bg-slate-400 hover:bg-slate-200 hover:text-black"
              >
                ◄
              </div>
              <div
                onClick={() => move(DOWN)}
                className="m-1 flex h-14 w-14 items-center justify-center rounded-md bg-slate-400 hover:bg-slate-200 hover:text-black"
              >
                ▼
              </div>
              <div
                onClick={() => move(RIGHT)}
                className="m-1 flex h-14 w-14 items-center justify-center rounded-md bg-slate-400 hover:bg-slate-200 hover:text-black"
              >
                ►
              </div>
            </div>

            <div className="m-6 flex flex-col items-center rounded-3xl   bg-blue-500 sm:flex-row">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => handler("z")}
                  className="m-2 h-16 w-16 rounded-full bg-blue-900 text-lg font-black"
                >
                  z
                </button>
              </div>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => handler("x")}
                  className="m-2 h-16 w-16 rounded-full bg-blue-900 text-lg font-black"
                >
                  x
                </button>
              </div>

              <div className="flex flex-col items-center">
                <button
                  onClick={() => handler("Enter")}
                  className="m-2 h-16 w-16 rounded-full bg-blue-900 text-lg font-black"
                >
                  ↵
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
