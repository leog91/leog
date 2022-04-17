import { RIGHT, LEFT, UP, DOWN, getInvFromCode } from "../../constants/walker";

export const nextCell = (walkerPosition) => {
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

export const addToBackpack = (backpack, interactionBox, setBackpack) => {
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
export const removeFromBackpack = () => {
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
