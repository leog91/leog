import React from "react";

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

  console.log(fridge);

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="w-[44rem] bg-slate-800   text-white sm:bg-slate-300 sm:text-yellow-500 md:bg-slate-600 lg:bg-slate-400">
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
