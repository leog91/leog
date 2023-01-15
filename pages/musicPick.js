import React, { useState, useEffect } from "react";

import Router from "next/router";

import { useSession } from "next-auth/react";

const artists = ["STP", "Gorillas", "arctic monkeys", "pearl jam", "nin"];

function AddArtist() {
  const [artist, setArtist] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log(`Signed in as ${session.user.email}`);
    } else {
      console.log("not authenticated, redirecting . . ");
      Router.push("/login");
    }
  }, []);

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
    <div>
      <form onSubmit={(e) => handleInput(e)}>
        musicPick
        <input onChange={(e) => setArtist(e.target.value)} value={artist} />
      </form>
    </div>
  );
}

export const MusicPick = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center bg-purple-500">
      MusicPick
      <button className=" bg-green-400">ADD</button>
      <div className="flex  h-32 w-56 flex-col overflow-scroll overflow-x-hidden bg-slate-400">
        {artists.map((a) => (
          <button
            className=" m-1 rounded-md bg-purple-800 px-2 font-semibold text-purple-100"
            key={a}
          >
            {a}
          </button>
        ))}
      </div>
      <AddArtist />
    </div>
  );
};

export default MusicPick;
