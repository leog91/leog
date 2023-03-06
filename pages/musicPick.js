import React, { useState, useEffect } from "react";

import Router from "next/router";

import { useSession } from "next-auth/react";

//checkUnique zod?
//sort script, external file
const artists = [
  "STP",
  "Gorillas",
  "arctic monkeys",
  "pearl jam",
  "nin",
  "divididos",
  "Patricio Rey y sus Redonditos de Ricota",
  "incubus",
  "disturbed",
];

// const singleGenre = {img:"", "name"}
const genre = ["punk", "stoner", "Metal", "thrash", "funk", "Hard"];

function AddArtist() {
  const [artist, setArtist] = useState("");
  const { data: session, status } = useSession();

  //  "loading";

  //      "authenticated";

  // return loading;

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "unauthenticated") {
    Router.push("/login");
  }

  const handleInput = (e) => {
    e.preventDefault();

    console.log("handleInput");

    fetch("/api/jukebox", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ artist: artist }),
    })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // console.log(e, "e");
    // setArtist(e.target.value);
  };

  return (
    <div className="m-10 border-2 border-black bg-violet-400 p-5">
      <form onSubmit={(e) => handleInput(e)}>
        musicPick
        <input
          disabled
          onChange={(e) => setArtist(e.target.value)}
          value={artist}
        />
      </form>
    </div>
  );
}

export const MusicPick = () => {
  return (
    <div className=" flex min-h-screen  flex-col items-center bg-purple-500">
      MusicPick
      <button className=" bg-green-400">ADD</button>
      <button className="m-2 rounded-md border-2 border-black bg-violet-300 p-1">
        random
      </button>
      byStyle
      <div className="flex   max-w-md flex-col   bg-slate-400">
        {artists.map((a) => (
          <button
            className=" m-1 rounded-md bg-purple-800 px-2 font-semibold text-purple-100"
            key={a}
          >
            {a}
          </button>
        ))}
      </div>
      <div className="flex max-w-6xl flex-wrap">
        {genre.map((g) => (
          <div
            className="m-1 rounded-md bg-stone-700 p-4 font-bold hover:cursor-pointer  hover:bg-stone-500"
            key={g}
            onClick={() => alert(g)}
          >
            <div className="flex h-40 w-40 flex-col items-center rounded-md bg-yellow-700 ">
              <h3 className="w-full px-4 py-1 text-right capitalize"> {g}</h3>
              {/* img */}
              <div className=" m-2 h-32 w-36 bg-blue-700">🐵🙈🙉🙊🐒</div>
            </div>
          </div>
        ))}
      </div>
      <AddArtist />
    </div>
  );
};

export default MusicPick;
