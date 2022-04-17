import React from "react";

const Card = () => {
  return (
    <div className="flex  w-60 flex-col rounded-lg border-8 border-black bg-blue-500 p-1">
      <div className="flex bg-blue-300 text-lg font-bold">
        <div>Sensory Deprivation</div> <div className="ml-auto">💦</div>
      </div>
      <div className="flex ">
        <div className=" my-1   w-56  bg-slate-600">
          <img src="https://assets.echomtg.com/magic/cards/cropped/91386.hq.jpg" />
        </div>
      </div>
      <div className="flex bg-blue-300 font-bold">
        <div>Enchantment — Aura</div> <div className="ml-auto "> M-14</div>
      </div>
      <div className="bg-blue-200">
        <div> Enchant creature </div>
        <div> Enchanted creature gets -3/0. </div>
        <div className="break-words text-sm italic">
          They call it “stitcher’s anesthesia,” a spell to deaden the senses
          while the mad doctors begin their grisly work.
        </div>
      </div>
      <div className="text-xs"> 🖌 Steven Belledin </div>
    </div>
  );
};

export default Card;
