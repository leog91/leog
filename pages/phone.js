import React, { useState, createContext, useContext } from "react";

const NotesContext = React.createContext();
const PlayerContext = React.createContext();

export const Home = ({ setContext }) => {
  return (
    <div className="flex justify-between m-6">
      <button
        onClick={() => setContext("Notes")}
        className="bg-slate-400 rounded-md p-3"
      >
        Notes
      </button>
      <button
        onClick={() => setContext("Player")}
        className="bg-zinc-500 rounded-md p-3"
      >
        Player
      </button>
    </div>
  );
};

export const Notes = () => {
  const { note, setNote } = useContext(NotesContext);

  return (
    <div className="flex flex-col px-3">
      <div>Notes</div>

      <textarea
        className=" w-full h-80 resize-none bg-yellow-100 rounded-lg p-1 pt-3"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      ></textarea>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4  rounded-full "
        onClick={() => alert(note)}
      >
        Save
      </button>
    </div>
  );
};
export const Player = () => {
  const { player, setPlayer } = useContext(PlayerContext);

  return (
    <div className="flex flex-col">
      Player
      <div className="flex flex-col place-items-center">
        <div className="pt-9">
          <img
            src="/fruit/shakespeare.jpg"
            alt="Picture of the author"

            // width={150}
            // height={150}
          />
        </div>
        <div className="text-white  m-3 font-semibold">{player.song.name}</div>
        <div className="text-gray-400">{player.song.artist}</div>

        <div className=" bg-white p-0.5 rounded-full w-28 m-4">
          <div className="bg-gray-800 text-white text-xs  font-semibold rounded-full text-center  p-1">
            ADD SONG
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="m-1 hover:text-red-700 hover:cursor-pointer">🔀</div>
        <div className="m-1 hover:text-red-700 hover:cursor-pointer">⏮</div>

        {player.status === "pause" ? (
          <div
            onClick={() => setPlayer({ ...player, status: "playing" })}
            className="m-1 hover:text-red-700 hover:cursor-pointer"
          >
            ▶
          </div>
        ) : (
          <div
            onClick={() => setPlayer({ ...player, status: "pause" })}
            className="m-1 hover:text-red-700 hover:cursor-pointer"
          >
            ⏸
          </div>
        )}

        <div className="m-1 hover:text-red-700 hover:cursor-pointer">⏭</div>
        <div className="m-1 hover:text-red-700 hover:cursor-pointer">🔁</div>
      </div>
    </div>
  );
};

export const Main = ({ context }) => {
  return <div className="h-[32rem] bg-orange-500  w-full">{context}</div>;
};

export const NotificationBar = () => {
  return (
    <div className="flex bg-slate-700 text-stone-200 justify-between">
      <div className="mx-2">carrier</div>
      <div className="mx-2">battery</div>
    </div>
  );
};

function Phone() {
  const [context, setContext] = useState("Home");
  const [note, setNote] = useState("");
  const [player, setPlayer] = useState({
    status: "pause",
    song: { name: "song name", artist: "artist" },
  });

  let main;

  switch (context) {
    case "Notes":
      main = (
        <NotesContext.Provider value={{ note, setNote }}>
          <Notes />{" "}
        </NotesContext.Provider>
      );
      break;
    case "Player":
      main = (
        <PlayerContext.Provider value={{ player, setPlayer }}>
          <Player />
        </PlayerContext.Provider>
      );
      break;

    default:
      main = <Home setContext={setContext} />;
      break;
  }
  <Home />;

  return (
    <div className="bg-orange-100 h-screen">
      <div className="h-2"></div>
      <div className="w-80  my-7 m-auto">
        <div className="flex flex-col">
          <NotificationBar />
          <Main context={main} setContext={setContext} />
          <div
            onClick={() => setContext("Home")}
            className="bg-slate-800 text-stone-200 text-center cursor-pointer"
          >
            ▲
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
