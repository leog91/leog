import React from "react";
import { RIGHT, LEFT, DOWN, UP, MAP_ELEM } from "../../constants/walker";

function MapCel({ cell, walkerPosition }) {
  return (
    <div
      className={`m-1 
      ${cell.passage ? "bg-blue-800" : "bg-blue-500"} h-8 w-8 hover:bg-red-200`}
    >
      {walkerPosition ? (
        walkerPosition && walkerPosition.direction === RIGHT ? (
          "►"
        ) : walkerPosition && walkerPosition.direction === LEFT ? (
          "◄"
        ) : walkerPosition && walkerPosition.direction === UP ? (
          "▲"
        ) : (
          "▼ "
        )
      ) : cell.content === MAP_ELEM.TREE.code ? (
        <img className="" src="/walker/icons/tree.svg" />
      ) : cell.content === MAP_ELEM.MUSHROOM.code ? (
        <img className="p-1" src="/walker/icons/mushroom.svg" />
      ) : cell.content === MAP_ELEM.WALL.code ? (
        "⬛"
      ) : cell.content === MAP_ELEM.TRADER.code ? (
        "🗣"
      ) : cell.content === MAP_ELEM.WELL.code ? (
        <img className="" src="/walker/icons/well.svg" />
      ) : (
        ""
      )}
    </div>
  );
}

export default MapCel;
