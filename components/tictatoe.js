import React, { useState } from "react";
import { array } from "yup";

// const game = new Map();

// const game =

const initialState = [...Array(9).fill("❓")];

function Tictatoe() {
  const [currentUser, setCurrentUser] = useState(false);
  const [game, setGame] = useState(initialState);
  const [previousGame, setPreviousGame] = useState(null);

  const restart = () => {
    setPreviousGame(previousGame);
    setGame(initialState);
  };

  const rollBack = () => {
    setGame(previousGame);
    setPreviousGame(null);
  };
  // const savePreviousGame = () => {

  // }

  return (
    <div className="flex flex-col items-center justify-center">
      Tictatoe
      <div>{JSON.stringify(currentUser)}</div>
      <div className="grid grid-cols-3  gap-1">
        {game.map((slot, i) => (
          <div
            className=" h-9 w-9 bg-slate-600 p-2 text-center"
            onClick={() => {
              let aux = [...game];
              aux[i] = currentUser ? "X" : "O";

              setCurrentUser(!currentUser);
              setGame(aux);
            }}
            key={i}
          >
            {" "}
            {slot}
          </div>
        ))}
      </div>
      <button
        className="m-2 w-20 border-2 border-white bg-black p-2 text-white  underline-offset-4  hover:border-pink-500  hover:underline"
        onClick={() => restart()}
      >
        restart
      </button>
      <button
        className="m-2 w-20 border-2 border-white bg-black p-2 text-white  underline-offset-4  hover:border-pink-500  hover:underline"
        onClick={() => rollBack()}
      >
        rollBack
      </button>
    </div>
  );
}

export default Tictatoe;
