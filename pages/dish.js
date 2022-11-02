import React from "react";

const ingredients = "todo";

const toppings = ["tomato", "avocado", "onion", "cheese", "ham", "mushroom"];

//filterbyingredients

const dishes = [
  { name: "omelette", ingredients: ["egg"] },
  { name: "lentils", ingredients: null },
  { name: "tuna toast", ingredients: ["tuna", "bread"] },
  { name: "Scrambled eggs", ingredients: ["egg"] },
];

function Dish() {
  return (
    <div className=" h-screen w-full bg-green-900">
      <div className="flex  flex-col items-center bg-green-900  text-green-100">
        <h1 className="mb-2 text-2xl font-bold">Dish</h1>

        <div className="w-full max-w-md ">
          {dishes.map((d) => (
            <div
              key={d.name}
              className="flex items-center space-x-1   border-t-2 border-slate-300 px-2"
            >
              <div className="w-full text-lg">{d.name}</div>
              <div className=" flex w-full flex-wrap justify-end ">
                {d.ingredients?.map((i) => (
                  <div className="m-1 rounded-md bg-green-700 px-1" key={i}>
                    {i}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dish;
