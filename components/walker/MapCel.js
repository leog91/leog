import React from "react";
import { RIGHT, LEFT, DOWN, UP, buildMapElement } from "../../constants/walker";

function MapCel({ cell, walkerPosition }) {
  const Walker = () =>
    walkerPosition.direction === RIGHT
      ? "►"
      : walkerPosition.direction === LEFT
      ? "◄"
      : walkerPosition.direction === UP
      ? "▲"
      : "▼ ";

  const MAP_E = () =>
    cell.content && cell.content !== "" ? (
      <img src={buildMapElement(cell.content).img} />
    ) : (
      ""
    );

  return (
    <div
      className={`m-1 
      ${cell.passage ? "bg-blue-800" : "bg-blue-500"} h-8 w-8 hover:bg-red-200`}
    >
      {walkerPosition ? <Walker /> : <MAP_E />}
    </div>
  );
}

export default MapCel;
