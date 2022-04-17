import React from "react";

const PokeCard = () => {
  return (
    <div className="flex  w-60 flex-col rounded-lg border-8 border-yellow-500 bg-yellow-200 p-1">
      <div className="  text-lg font-bold">
        <div className="text-xs">Basic Pokémon</div>
        <div className="flex">
          <div>Pikachu</div>{" "}
          <div className="ml-auto">
            <span className="text-red-600"> 40 HP</span>
            <span className=""> ⚡</span>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className=" my-1    w-56 border-4 border-yellow-500 bg-slate-600">
          <img src="https://i.pinimg.com/564x/99/95/d8/9995d8fed018f9e55174911a7bbeef7d.jpg" />
        </div>
      </div>

      <div className="bg-yellow-500 text-[10px] font-semibold">
        Mouse Pokémon. Length: 1'44'', Weight: 13 lbs.
      </div>
      <div className=" m-1 divide-y-2  divide-black font-bold">
        <div className="flex justify-between">
          <div>◎</div>
          <div>Gnaw</div> <div>10</div>
        </div>
        <div className="mb-2 flex justify-between ">
          <div>〄</div>
          <div className="">
            Thunder Jolt
            <div className=" text-xs font-normal ">
              Flip a coin. If tails, Pikachu does 10 damage to itself.
            </div>
          </div>
          <div>30</div>
        </div>
        <div className="flex justify-between  text-xs">
          <div className="flex flex-col items-center">
            <div>weakness</div>
            <div>〶</div>
          </div>
          <div className="flex flex-col items-center">
            <div>resistance</div>
          </div>
          <div className="flex flex-col items-center">
            <div>retreat cost</div>
            <div>◎</div>
          </div>
        </div>
      </div>
      <div className="border-2 border-yellow-500 text-[10px]">
        When several of these Pokémon gather, their electricity can cause
        lightning storms.
      </div>
    </div>
  );
};

export default PokeCard;
