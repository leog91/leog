import React, { useState } from "react";
import { useEffect } from "react";

const loadTasks = [
  {
    name: "Powerbank",
    checked: true,
  },
  {
    name: "Headphones",
    checked: false,
  },
  {
    name: "socks",
    checked: false,
  },
  {
    name: "t-shirt",
    checked: false,
  },
];
// ["Powerbank", "Headphones", "socks", "t-shirt"].map( t => {return  {name :t, checked:false}})

const emptyDialog = { selected: null, open: false, draft: null };

const Travel = () => {
  const [tasks, setTasks] = useState([]);
  const [dialog, setDialog] = useState(emptyDialog);

  useEffect(() => {
    setTasks(loadTasks.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }, []);

  console.log("render");

  const handleDialogChange = (value) => {
    setDialog({ ...dialog, draft: { ...dialog.draft, name: value } });
  };

  const handleSave = () => {
    const notSelectedTasks = tasks.filter(
      (t) => t.name !== dialog.selected?.name
    );

    if (notSelectedTasks.some((t) => t.name === dialog.draft.name)) {
      alert("nope, already in list");
      return;
    }

    setTasks(
      [...notSelectedTasks, dialog.draft].sort((a, b) =>
        a.name > b.name ? 1 : -1
      )
    );

    setDialog(emptyDialog);
  };

  const handleCheck = (selected) => {
    setTasks(
      [
        ...tasks.filter((t) => t.name !== selected.name),
        { ...selected, checked: !selected.checked },
      ].sort((a, b) => (a.name > b.name ? 1 : -1))
    );
  };
  return (
    <div className="flex min-h-screen flex-col  items-center bg-pink-300">
      <h1 className="mb-4 w-full border-b-2 border-red-700 p-1 text-center text-4xl font-light ">
        Travel
      </h1>
      <div className="absolute right-1 font-semibold">v:13</div>

      <div className="flex  w-full max-w-xs flex-col items-center ">
        <button
          onClick={() =>
            setDialog({
              open: true,
              draft: {
                name: "",
                checked: false,
              },
            })
          }
          className="flex rounded-md border-2 border-pink-700 bg-pink-700 py-0.5 px-1 text-xl font-bold text-white hover:border-white"
        >
          +
        </button>
        <ul className="w-full">
          {tasks.map((t) => (
            <li className="flex   align-middle  " key={t.name}>
              <div
                className="mr-1 w-full rounded-md px-2 hover:cursor-pointer hover:bg-pink-400"
                onClick={() => handleCheck(t)}
              >
                <input
                  type={"checkbox"}
                  onChange={() => null}
                  checked={t.checked}
                />
                {t.name}
              </div>
              <button
                onClick={() => setDialog({ open: true, selected: t, draft: t })}
                className="ml-auto  px-1"
              >
                📝
              </button>
            </li>
          ))}
        </ul>
      </div>

      {dialog.open ? (
        <dialog open={dialog.open} className="top-12 w-full max-w-xs p-0">
          <div className=" flex  flex-col  bg-pink-400 p-0">
            <span
              onClick={() => setDialog(emptyDialog)}
              className=" ml-auto cursor-pointer bg-red-600 px-2 py-1 font-semibold text-white"
            >
              X
            </span>
            {/* {JSON.stringify(dialog.selected)} */}
            {dialog.selected ? <p>edit</p> : <p>new</p>}
            <input
              value={dialog.draft.name}
              onChange={(e) => handleDialogChange(e.target.value)}
              className="m-4"
            ></input>
            <button
              onClick={() => handleSave()}
              className="m-2 mx-auto w-1/2  rounded-md border-2 border-pink-300 bg-pink-300  hover:border-red-100"
            >
              💾
            </button>
          </div>
        </dialog>
      ) : null}

      <div className="mt-4 flex space-x-2">
        <button className="group flex border-2 border-pink-700 bg-pink-700 p-1 text-white hover:border-white">
          share <p className="group-hover:text-green-400">[text]</p>
        </button>
        <button className="group flex border-2 border-pink-700 bg-pink-700 p-1 text-white hover:border-white">
          share <p className=" group-hover:text-green-400">[link]</p>
        </button>
      </div>
    </div>
  );
};

export default Travel;
