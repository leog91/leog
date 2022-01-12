export const RIGHT = "RIGHT";
export const LEFT = "LEFT";
export const UP = "UP";
export const DOWN = "DOWN";

const FINITE = "FINITE";
const INFINITE = "INFINITE";

export const MAP_ELEM = {
  TREE: {
    desc: "has leafs",
    code: "TREE",
    interact: "feels rough",
    pick: INFINITE,
  },
  ROCK: { desc: "heavy", code: "rock" },
  MUSHROOM: { desc: "power up", code: "MUSHROOM", pick: FINITE },
  WALL: { desc: "BIG", interact: "road blocked", code: "WALL" },
  WELL: { desc: "seems deep", interact: "can drink", code: "WELL" },
  TRADER: { desc: "looks rich", interact: "buy & sell", code: "TRADER" },
};

export const INV_ELEM = {
  MUSHROOM: { desc: "power up", code: "I_M", name: "mushroom" },
  WATER: { desc: "power up", code: "I_W", name: "water" },
};
