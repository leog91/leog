export const RIGHT = "RIGHT";
export const LEFT = "LEFT";
export const UP = "UP";
export const DOWN = "DOWN";

export const FINITE = "FINITE";
export const INFINITE = "INFINITE";

export const INV_ELEM = {
  MUSHROOM: { desc: "power up", code: "I_M", name: "mushroom", price: 3 },
  WATER: { desc: "fresh", code: "I_W", name: "water", price: 1 },
  WOOD: { desc: "brownish", code: "I_WO", name: "wood", price: 2 },
};

export const getInvFromCode = (code = "I_W") => {
  let elem;
  for (const key in INV_ELEM) {
    INV_ELEM[key].code === code && (elem = INV_ELEM[key]);
  }

  return elem;
};

export const MAP_ELEM = {
  TREE: {
    desc: "has leafs",
    code: "TREE",
    interact: "feels rough",
    pick: INFINITE,
    i_code: INV_ELEM.WOOD.code,
  },
  ROCK: { desc: "heavy", code: "rock" },
  MUSHROOM: {
    desc: "power up",
    code: "MUSHROOM",
    pick: FINITE,
    i_code: INV_ELEM.MUSHROOM.code,
  },
  WALL: { desc: "BIG", interact: "road blocked", code: "WALL" },
  WELL: {
    desc: "seems deep",
    interact: "can drink",
    code: "WELL",
    pick: INFINITE,
    i_code: INV_ELEM.WATER.code,
  },
  TRADER: { desc: "looks rich", interact: "buy & sell", code: "TRADER" },
};
