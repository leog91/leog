import React from "react";

import { useState, useEffect } from "react";

//info , details , where to buy, frozen ?
const aProduct = (name = "asd", qty = 1) => {
  return { name: name, quantity: qty };
};

//
// `e` input number
//

const buildProducts = (qty = 4) => {
  let products = [];

  for (let index = 0; index < qty; index++) {
    products = [...products, aProduct()];
  }
  return products;
};

const initialCurrentItem = { name: "", quantity: 0 };

const Stock = () => {
  // const [products, setProducts] = useState([aProduct(), aProduct()]);
  const [products, setProducts] = useState([]);
  // group members
  // const members
  const [currentItem, setCurrentItem] = useState(initialCurrentItem);
  const [status, setStatus] = useState(null);
  const [focusedItem, setFocusedItem] = useState(null);

  useEffect(() => {
    // setProducts(new Map(buildProducts(6).map((p) => [p.name, { ...p }])));
    // setProducts(buildProducts(1));
    //getProducts
  }, []);

  const addProduct = (e) => {
    e.preventDefault();

    setStatus(null);
    if (products.find((p) => p.name === currentItem.name)) {
      setStatus("duplicated");
      return;
    }

    if (currentItem.name === "") {
      setStatus("required");
      return;
    }

    const uniqueProds = products.filter(
      (p, i) => products.map((w) => w.name).indexOf(p.name) === i
    );

    const isDuplicateRef = products.some(
      (p, i) => products.map((w) => w.name).indexOf(p.name) !== i
    );

    setProducts((prev) => [...prev, { ...currentItem }]);
    setCurrentItem(initialCurrentItem);

    //post & update
  };

  const updateItem = (e) => {
    e.preventDefault();
    const notSelectedProducts = products.filter(
      (p) => p.name !== focusedItem.name
    );

    //check duplicated
    // abstract add to list
    console.log("updating .. .");
    setProducts([...notSelectedProducts, { ...currentItem }]);

    setCurrentItem(initialCurrentItem);
    setFocusedItem(null);
  };

  const deleteItem = () => {
    setProducts(products.filter((p) => p.name !== focusedItem.name));
    // setCurrentItem(null)
    setFocusedItem(null);
    setCurrentItem(initialCurrentItem);
  };

  const handleItemFocus = (p) => {
    console.log("focus", p);
    setFocusedItem(p);
    //remove focusItem ?
    setCurrentItem(p);
  };

  //todo , on update item, check duplicates

  return (
    <div className=" flex min-h-screen w-full max-w-lg flex-col  bg-slate-700 p-2  text-slate-200">
      {focusedItem && (
        <dialog
          onKeyDown={(e) => {
            if (e.code === "Escape") {
              setFocusedItem(null);
              setCurrentItem(initialCurrentItem);
              //closeDialog()call
            }
          }}
          open={focusedItem}
          className="absolute top-1/3 w-full max-w-lg border-4 border-green-600 bg-slate-600"
        >
          <div className="flex flex-col items-center">
            <div className="flex">
              <span className="font-bold">Editing: {focusedItem.name} </span>

              <button
                type="button"
                onClick={() => {
                  setFocusedItem(null);
                  setCurrentItem(initialCurrentItem);
                }}
                // relative position fix
                className="  relative -right-32 -top-4 px-1 text-white"
              >
                ❌
              </button>
            </div>

            {/* 
          
          to refactor
          */}
            <form>
              <input
                placeholder="product"
                autoFocus
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, name: e.target.value })
                }
                className="border-2 border-black bg-slate-100 text-black"
                value={currentItem.name}
              ></input>
              <input
                placeholder="how many?"
                value={currentItem.quantity}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    quantity: parseInt(e.target.value),
                  })
                }
                type="number"
                className="border-2 border-black bg-slate-100 text-black"
              ></input>

              {status === "duplicated" && (
                <div className="h-6 bg-red-700 text-white">duplicated item</div>
              )}
              {status === "required" && (
                <div className="h-6 bg-red-700 text-white">name required</div>
              )}
              {!status && <div className="h-6 "></div>}
              <div className="float-right space-x-1">
                <button
                  type="submit"
                  onClick={(e) => updateItem(e)}
                  className="  px-1 text-white"
                >
                  {" "}
                  💾
                </button>
                <button
                  onClick={() => deleteItem()}
                  type="button"
                  className="  px-1 text-white"
                >
                  {" "}
                  🗑️
                </button>
              </div>
            </form>
            {/* 
          to refactor
          */}
          </div>
        </dialog>
      )}
      <h1 className="text-xl-  mt-1 mb-3 font-extrabold">STOCK</h1>

      {/* {!focusedItem && ( */}
      {true && (
        <div
          // onClick={() => {
          //   focusedItem && setFocusedItem(null);
          // }}

          className={`w-full ${focusedItem ? "hidden" : ""}`}
        >
          <form>
            <input
              placeholder="product"
              onChange={(e) =>
                setCurrentItem({ ...currentItem, name: e.target.value })
              }
              className="border-2 border-black text-black"
              value={currentItem.name}
            ></input>
            <input
              placeholder="how many?"
              value={currentItem.quantity}
              onChange={(e) =>
                setCurrentItem({
                  ...currentItem,
                  quantity: parseInt(e.target.value),
                })
              }
              type="number"
              className=" border-2 border-black text-black"
            ></input>
            <button className="bg-green-700" onClick={(e) => addProduct(e)}>
              add
            </button>
            {status === "duplicated" && (
              <div className="h-6 bg-red-700">duplicated item</div>
            )}
            {status === "required" && (
              <div className="h-6 bg-red-700">name required</div>
            )}
            {!status && <div className="h-6 "></div>}
          </form>

          <div className=" ">
            awesome list
            {products &&
              products.map((p) => (
                <div
                  className="my-1 bg-slate-600 p-1  hover:bg-slate-300 hover:text-slate-800"
                  key={p.name}
                  onClick={() => handleItemFocus(p)}
                >
                  <span>{p.name}</span>{" "}
                  <span className="float-right mr-0">qty = {p.quantity}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

function Fridge() {
  const item = { name: "sauce", size: 1, pos: [0, 0] };

  const stock = [
    { name: "sauce1", size: 1, pos: [0, 0] },
    { name: "sauce2", size: 1, pos: [1, 0] },
    { name: "sauce3", size: 1, pos: [4, 0] },
  ];

  const size = [7, 4];

  let fridge = [];

  for (let y = 0; y < size[1]; y++) {
    let fridgey = [];

    for (let x = 0; x < size[0]; x++) {
      //check if more than 1
      const correct = stock.filter((s) => s.pos[0] === x && s.pos[1] === y);

      correct[0]
        ? (fridgey = [...fridgey, correct[0]])
        : (fridgey = [...fridgey, "empty"]);

      // console.log(correct)
    }

    fridge = [...fridge, fridgey];
  }

  // console.log(fridge);

  return (
    <div className="flex flex-col  items-center overflow-hidden bg-slate-800">
      <Stock />
      <div className="my-8 w-[44rem]  bg-slate-800 text-white sm:bg-slate-300 sm:text-yellow-500 md:bg-slate-600 lg:bg-slate-400">
        <div className="py-4 text-center text-xl font-black text-black ">
          {" "}
          FRIDGE
        </div>

        <div>
          <div className=" flex flex-col items-center ">
            {fridge.map((row, ir) => (
              <div key={ir} className="flex items-center">
                <div className="border-4 border-slate-600  bg-slate-400 p-1 text-xl text-black">
                  {ir}
                </div>
                {row.map((slot, is) => (
                  <div
                    className="m-1 border-2 border-red-700 text-center"
                    key={is}
                  >
                    <div className="text verticalText  flex h-32 w-20 items-center justify-center bg-slate-600 ">
                      {slot !== "empty" ? slot.name : "FREE"}
                    </div>

                    <div className="border-2 border-black bg-orange-400 font-semibold text-black">
                      x: {is} y: {ir}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fridge;
