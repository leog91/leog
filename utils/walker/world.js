import { DOWN, LEFT, RIGHT, UP } from "../../constants/walker";

const cell = { position: { x: 0, y: 0 }, elem: "tree" };

const mapSection = { position: { x: 0, y: 0 }, cells: [cell, cell, cell] };

export const emptyMap = (x = 10, y = 10) =>
  Array(x)
    .fill(Array(y).fill(""))
    .map((c, ix) =>
      c.map((elem, ir) => {
        return {
          id: `x${ix}y${ir}`,
        };
      })
    );

export const initialMap = () => {
  const map = emptyMap();

  map[3][3].content = "TREE";

  map[5][3].content = "MUSHROOM";

  map[9][2].content = "WALL";
  map[9][3].content = "WALL";
  map[9][4].content = "WALL";
  map[9][7].content = "WALL";
  map[9][8].content = "WALL";
  map[9][9].content = "WALL";

  map[4][6].content = "WELL";

  map[9][6].passage = { map: "2-1", walkerPosition: [0, 5], direction: RIGHT };

  map[4][9].passage = { map: "2-1", walkerPosition: [0, 8], direction: DOWN };

  map[3][0].passage = { map: "2-1", walkerPosition: [3, 9], direction: UP };

  return map;
};

export const RightMap = () => {
  const map = emptyMap();

  map[2][3].content = "TREE";

  map[5][3].content = "MUSHROOM";

  map[5][2].content = "WALL";
  map[5][3].content = "WALL";
  map[5][4].content = "WALL";
  map[5][7].content = "WALL";
  map[5][8].content = "WALL";
  map[5][9].content = "WALL";

  map[0][1].passage = { map: "1-1", walkerPosition: [9, 1], direction: LEFT };

  return map;
};

export const getMap = (coord) => {
  let map;

  switch (coord) {
    case "0-0":
      map = emptyMap();
      break;
    case "1-1":
      map = initialMap();
      console.log("11111");
      break;
    case "2-1":
      map = RightMap();
      break;
    default:
      console.log("defaultswitch");
      break;
  }
  return map;
};
