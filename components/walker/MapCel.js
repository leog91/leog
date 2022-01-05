import React from "react";
import { RIGHT, LEFT, DOWN, UP } from "../../constants/walker";

function MapCel({ cell, walkerPosition }) {
  return (
    <div
      className={`m-1 
      ${cell.passage ? "bg-blue-800" : "bg-blue-500"} h-8 w-8 hover:bg-red-200`}
    >
      {/* ➤{j === "player" ? "x" : ""} */}
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
      ) : cell.content === "tree" ? (
        <img className="" src="/walker/icons/tree.svg" />
      ) : cell.content === "mushroom" ? (
        <img className="p-1" src="/walker/icons/mushroom.svg" />
      ) : cell.content === "wall" ? (
        "⬛"
      ) : (
        ""
      )}
    </div>
  );
}

export default MapCel;
