import React, { useState } from "react";
import { createPortal } from "react-dom"; //???update

const T = { ALBUM: "ALBUM", SONG: "SONG", LIVE: "LIVE", ANALOG: "ANALOG" };

// "https://www.youtube-nocookie.com/embed/"
// "https://www.youtube.com/embed/
const musicList = [
  {
    src: "b1zR9zm5J1A",
    title: "Àbáse – Laroyê (2021 - Album)",
    tags: [T.ALBUM],
  },
  {
    src: "KGPhGui0U-g",
    title: "Guest Mix: Salsa Records from Venezuela with Gia Fu",
    tags: [T.ALBUM, T.ANALOG],
  },
  {
    src: "15Nqbic6HZs",
    title: "Alfa Mist 'Bring Backs' Live at Metropolis",
    tags: [T.ALBUM, T.LIVE],
  },

  {
    src: "hUkMnNNc5NU",
    title: "Parcels - Live At Abbey Road - 90th Anniversary Session",
    tags: [T.LIVE],
  },
  {
    src: "ePZuJl06AuU",
    title: "UK Jazz and Groove with Tina Edwards",
    tags: [T.ANALOG],
  },
  ,
];

const radioList = [
  {
    name: "Balearica Music Selections",
    src: ["https://control.streaming-pro.com:8040/live.mp3"],
  },
  {
    name: "RT2 FM",

    src: ["https://www.liveradio.es/http://icecast.rte.ie/ie2fm"],
  },
];

const Radio = () => {
  const [tuned, setTuned] = useState(null);

  return (
    <>
      radio - alpha
      {/* channge, to singleton, only 1 player */}
      {radioList.map((r) => (
        <div
          className="my-1 flex cursor-pointer justify-between bg-slate-600  px-2"
          onClick={() => {
            setTuned(null);
            setTimeout(() => {
              console.log("interval -> audio element");
              //"hack"
              setTuned(r);
            }, 100);
          }}
          key={r.name}
        >
          {" "}
          {r.name}
        </div>
      ))}
      <div>player</div>
      {tuned && (
        <div>
          <CustomIframe title="A custom made iframe">
            <p
              style={{
                fontWeight: "900",
                fontFamily: "sans-serif",
                color: "rgb(203 213 225",
              }}
              className="  text-white "
            >
              {tuned.name}
            </p>
            <audio style={{ width: "286px" }} controls autoPlay>
              {tuned.src.map((url, i) => (
                <source key={url + i} src={url} type="audio/mpeg" />
              ))}
            </audio>
          </CustomIframe>
        </div>
      )}
      <button onClick={() => setTuned(null)}>clear </button>
    </>
  );
};

const playListType = () => Object.entries(T).map((e) => e[0]);

const CustomIframe = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe scrolling="no" className="m-0 w-80" {...props} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

function Jukebox() {
  const [selected, setSelected] = useState(null);
  const [currentFilter, setCurrentFilter] = useState([]);

  const handleRandom = () => {
    const random = Math.floor(Math.random() * musicList.length);
    setSelected(musicList[random]);
  };

  const addFilter = (tag) => {
    currentFilter.includes(tag)
      ? setCurrentFilter(currentFilter.filter((f) => f !== tag))
      : setCurrentFilter([...currentFilter, tag]);
  };

  const filteredList = () => {
    return musicList.filter((m) =>
      currentFilter.every((f) => m.tags.includes(f))
    );
  };

  // checkDuplicate

  return (
    <div className="h-screen bg-slate-700">
      <div className="flex   flex-col items-center bg-slate-700 text-white">
        <p className="mb-2 w-screen border-b-4 border-b-slate-400  text-center text-3xl  font-black">
          JUKEBOX
        </p>

        <div className=" m-2 space-x-2">
          <button
            className="bg-slate-300 text-black"
            onClick={() => handleRandom()}
          >
            Random
          </button>

          <button
            onClick={() => setSelected(null)}
            className={`bg-slate-300 text-black ${
              !selected ? "bg-slate-500 " : ""
            }`}
            disabled={!selected}
          >
            Clear
          </button>
        </div>

        <div className="flex">
          {playListType().map((tag) => {
            return (
              <button
                key={tag}
                onClick={() => addFilter(tag)}
                className={`m-1 rounded-sm bg-slate-300 px-1 text-sm font-semibold text-black hover:cursor-pointer ${
                  currentFilter.includes(tag)
                    ? "border-2 border-green-700 text-green-700"
                    : "border-2 border-slate-800"
                }`}
              >
                {tag}
              </button>
            );
          })}
          <div
            onClick={() => setCurrentFilter([])}
            className="m-1 rounded-sm border-2 border-slate-800 bg-slate-300 px-1 text-sm font-extrabold text-red-700 hover:cursor-pointer"
          >
            X
          </div>
        </div>

        <div className="my-4">
          {filteredList().map((m) => (
            <div
              onClick={() => setSelected(m)}
              className="my-1 flex cursor-pointer justify-between bg-slate-600  px-2"
              key={m.src}
            >
              {" "}
              <div> {m.title} </div>{" "}
              <div>
                {" "}
                {m.tags.map((t) => (
                  <div className="ml-3" key={t}>
                    {t}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>
          ))}
        </div>
        {selected && (
          <div className="   w-96">
            <iframe
              className=" h-56 w-full"
              // src={`https://www.youtube.com/embed/${selected.src}`}
              src={`https://www.youtube-nocookie.com/embed/${selected.src}`}
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        )}
        <Radio />
      </div>
    </div>
  );
}

export default Jukebox;
