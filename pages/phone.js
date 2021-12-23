import React, { useState, createContext, useContext } from "react";

const NotesContext = React.createContext();

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
    <div className="flex-col px-3">
      <div>Notes</div>

      <textarea
        className=" w-full h-80"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      ></textarea>

      <button onClick={() => alert(note)}>Save</button>
    </div>
  );
};
export const Player = () => {
  return <div className="">Player</div>;
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
      main = <Player />;
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
