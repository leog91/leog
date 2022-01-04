import React from "react";
import { RIGHT, LEFT, DOWN, UP } from "../../constants/walker";

function MapCel({ cell, walkerPosition }) {
  return (
    <div className="m-1 bg-blue-500 h-8 w-8 hover:bg-red-200">
      {/* ➤{j === "player" ? "x" : ""} */}
      {cell === "player"
        ? walkerPosition.direction === RIGHT
          ? "►"
          : walkerPosition.direction === LEFT
          ? "◄"
          : walkerPosition.direction === UP
          ? "▲"
          : "▼ "
        : // : ""}
        cell === "tree"
        ? "🌳"
        : cell === "mushroom"
        ? "🍄"
        : ""}
    </div>
  );
}

export default MapCel;
