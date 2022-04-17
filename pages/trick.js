import React, { useEffect, useState } from "react";
import Card from "../components/card";
import PokeCard from "../components/pokeCard";

function Trick() {
  const [flour, setFlour] = useState(500);
  const [water, setWater] = useState(300);
  const [ratio, setRatio] = useState(60);

  return (
    <div className="flex h-screen flex-col  items-center bg-yellow-200  pt-8 text-center ">
      <div className="hover:relative hover:z-10 hover:scale-105">
        <Card />
      </div>
      <div className="-translate-y-80 hover:relative hover:z-10 hover:scale-105">
        <PokeCard />
      </div>
      <div className="-translate-y-[40rem] hover:relative hover:z-10 hover:scale-105">
        <PokeCard />
      </div>
    </div>
  );
}

export default Trick;
