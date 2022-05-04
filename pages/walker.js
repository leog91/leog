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
  recipes,
  getInvFromCode,
} from "../constants/walker";
import { nextCell, addToBackpack } from "../utils/walker/mapInteraction";
import { initialMap, getMap } from "../utils/walker/world";

function Walker() {
  const [backpack, setBackpack] = useState({
    gold: 2,
    items: [
      { item: INV_ELEM.WATER, qty: 1 },
      { item: INV_ELEM.MUSHROOM, qty: 1 },
    ],
  });

  const [time, setTime] = useState(0);

  const [mode, setMode] = useState("map");

  const [map, setMap] = useState([[]]);

  const [payload, setPayload] = useState(null);

  const initialInteractionBox = { cursor: 0, target: null };

  const [interactionBox, setInteractionBox] = useState(initialInteractionBox);

  const [walkerPosition, setWalkerPosition] = useState({
    x: 0,
    y: 0,
    direction: RIGHT,
  });

  const [menuCursor, setMenuCursor] = useState(0);

  useEffect(() => {
    const newMap = [...initialMap()];
    setMap(newMap);
  }, []);

  useEffect(() => {}, [walkerPosition]);

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
    let [x, y] = nextCell(walkerPosition);
    return map[x][y].content === MAP_ELEM.WALL.code;
  };

  const removeFromBackpack = (code, qty) => {
    const item = backpack.items.find((i) => i.item.code === code);

    if (item.qty > qty) {
      item.qty = item.qty - qty;

      setBackpack((prev) => {
        return {
          ...prev,
          items: [
            ...prev.items.filter((i) => i.item.code !== item.item.code),
            item,
          ],
        };
      });
    } else {
      setBackpack((prev) => {
        return {
          ...prev,
          items: [...prev.items.filter((i) => i.item.code !== item.item.code)],
        };
      });
    }
  };

  //merge with pick add backpack
  const craft = () => {
    //to-do-rename & params
    const checkInBackpack = (code, qty) =>
      backpack.items.find((i) => i.item.code === code && i.qty >= qty);

    const canCraft = () =>
      payload.require.filter(
        (r) => r.item.code === checkInBackpack(r.item.code, r.qty)?.item.code
      ).length === payload.require.length;

    if (canCraft()) {
      let item = backpack.items.find(
        (i) => i.item.code === payload.create.code
      );

      if (item) {
        item.qty = item.qty + 1;
      } else {
        item = {};
        item.item = getInvFromCode(payload.create.code);
        item.qty = 1;
      }

      payload.require.forEach((r) => {
        removeFromBackpack(r.item.code, r.qty);
      });

      setBackpack((prev) => {
        return {
          ...prev,
          items: [
            ...prev.items.filter((i) => i.item.code !== payload.create.code),
            item,
          ],
        };
      });
    }
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

    let [x, y] = nextCell(walkerPosition);

    setTime(time + 1);
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
          addToBackpack(backpack, interactionBox, setBackpack);

          //
          if (interactionBox.target.pick === FINITE) {
            const newMap = JSON.parse(JSON.stringify(map));

            newMap[interactionBox.pos[0]][interactionBox.pos[1]].content = "";

            setMap(newMap);
          }

          setInteractionBox(initialInteractionBox);

          break;
        }

        let [x, y] = nextCell(walkerPosition);

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
        : mode === "craft"
        ? recipes.length
        : 0;

    if (key === "ArrowUp") {
      setMenuCursor(menuCursor === 0 ? 0 : menuCursor - 1);
    }

    if (key === "ArrowDown") {
      setMenuCursor(
        menuCursor === cursorLength - 1 ? menuCursor : menuCursor + 1
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

  const requireHandler = (key) => {
    cursorHandler(key);
    if (key === "x") {
      craft();
    }
  };

  const craftHandler = (key) => {
    cursorHandler(key);

    if (key === "x") {
      setPayload(recipes[menuCursor]);
      setMode("require");
    }
  };

  const initialState = () => {
    setMode("map");
    setInteractionBox(initialInteractionBox);
    setMenuCursor(0);
  };

  useEffect(() => {
    setInteractionBox(initialInteractionBox);
  }, [walkerPosition]);

  const backpackStock = (code) => {
    const stock = backpack.items.find((i) => i.item.code === code)?.qty;
    return stock ? stock : 0;
  };

  const handler = (key) => {
    if (key === "z") {
      if (mode === "require") {
        setMode("craft");

        return;
      }
      initialState();
      return;
    }

    mode === "map" && mapHandler(key);

    mode === "craft" && craftHandler(key);

    mode === "menu" && menuHandler(key);

    mode === "inventory" && inventoryHandler(key);

    mode === "require" && requireHandler(key);
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

          <div>time = {time}</div>

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
                    <div className="text-center">crafting</div>

                    {recipes.map((e, i) => (
                      <div className="flex" key={e.create.code}>
                        {" "}
                        <div className="w-5">{i === menuCursor && ">"}</div>
                        {e.create.name}
                      </div>
                    ))}
                  </div>
                )}

                {mode === "require" && (
                  <div>
                    <div className="text-center">require</div>

                    {payload &&
                      payload.require.map((e, i) => (
                        <div className="flex justify-between" key={e.item.code}>
                          {" "}
                          {/* <div className="w-5">{i === menuCursor && ">"}</div> */}
                          {e.item.name}
                          <div
                            className={`${
                              backpackStock(e.item.code) < e.qty &&
                              "text-red-700"
                            }`}
                          >
                            {backpackStock(e.item.code)}/{e.qty}
                          </div>
                        </div>
                      ))}
                    <div className="">craft[x]</div>
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
