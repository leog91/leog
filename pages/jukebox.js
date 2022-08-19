import React, { useState, useRef } from "react";
import { createPortal } from "react-dom"; //???update

const T = {
  ALBUM: "ALBUM",
  SONG: "SONG",
  LIVE: "LIVE",
  ANALOG: "ANALOG",
  RADIO: "RADIO",
  VIDEO: "VIDEO",
  TECHNO: "TECHNO",
  VINYL: "VINYL",
};

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
    tags: [T.VINYL],
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
    tags: [T.VINYL],
  },

  {
    src: "mQGJ9FQC2Hw",
    title:
      "Dream Sounds | Poolside Disco Deep & Lofi House Mix | Tom Jarney, Lemin, Folamour",
    tags: [T.ALBUM],
  },
  {
    src: "zw79RVnlCb0",
    title: "Hellraiser (30th Anniversary Edition - Official Animated Video)",
    tags: [T.VIDEO, T.SONG],
  },
  {
    src: "DgkgGbJwRyo",
    title: "Crooked Colours - Flow [Official Video]",
    tags: [T.VIDEO, T.SONG],
  },

  {
    src: "Koq_6Z_oRBc",
    title: "Jamiroquai medley",
    tags: [T.ALBUM],
  },
  {
    src: "qgUhkbMNkkw",
    title: "groovy house mix on a boat",
    tags: [T.TECHNO],
  },
  {
    src: "Yy4pcKn0Y_k",
    title: "The Yussef Dayes Experience - Live At Joshua Tree",
    tags: [T.LIVE, T.ALBUM],
  },

  {
    src: "d33C8IE7WnQ",
    title: "Tame Impala - InnerSpeaker",
    tags: [T.LIVE, T.ALBUM],
  },
  {
    src: "YSykw8vOJ-Y",
    title: "Tommy Guerrero - Soul Food Taqueria ",
    tags: [T.ALBUM],
  },
  {
    src: "VyJXkKWsxko",
    title: "Macroblank - 行方不明 ",
    tags: [T.ALBUM],
  },

  {
    src: "F8M3UKx7WkQ",
    title: "Brazilian Samba Grooves with Carla from Batukizer",
    tags: [T.VINYL],
  },

  {
    src: "MF8RFD7tk48",
    title: "Persona 5 Jazz Cafe Mix (w/ Cafe & Rain Ambience)",
    tags: [T.ALBUM],
  },

  {
    src: "5QEs2kBZwBg",
    title: "Santana/Fleetwood Mac Cover - Live",
    tags: [T.LIVE],
  },

  {
    src: "HXRh-7BJD2E",
    title: "Martin Miller & Paul Gilbert - Superstition",
    tags: [T.LIVE],
  },

  {
    src: "LtUKEfpNTNI",
    title: "Phil Collins cover",
    tags: [T.LIVE],
  },

  {
    src: "jOUtIdXVySA",
    title: "Female Japanese '80s",
    tags: [T.VINYL],
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
      {/* channge, to singleton, only 1 player */}
      {radioList.map((r) => (
        <div
          className="my-1 flex w-full cursor-pointer justify-between bg-slate-600  px-2"
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
      {/* <div>player</div> */}
      {tuned && (
        <div className=" flex w-full flex-col items-center ">
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
            <audio style={{ width: "100%" }} controls autoPlay>
              {tuned.src.map((url, i) => (
                <source key={url + i} src={url} type="audio/mpeg" />
              ))}
            </audio>
          </CustomIframe>
          <button
            className="-mt-5  w-24 border-2 border-slate-400 bg-slate-800 p-2 text-slate-300 hover:border-slate-200 hover:text-slate-100"
            onClick={() => setTuned(null)}
          >
            Clear{" "}
          </button>
        </div>
      )}
    </>
  );
};

const playListType = () => Object.entries(T).map((e) => e[0]);

const CustomIframe = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe
      scrolling="no"
      className=" -mr-2 w-full"
      {...props}
      ref={setContentRef}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

const Youtube = () => {
  const [selected, setSelected] = useState(null);
  const [currentFilter, setCurrentFilter] = useState([]);

  const playerRef = useRef(null);

  const handleRandom = () => {
    // const random = Math.floor(Math.random() * musicList.length);

    const random = Math.floor(Math.random() * filteredList().length);
    //random with filter

    setSelected(filteredList()[random]);
  };

  const addFilter = (tag) => {
    currentFilter.includes(tag)
      ? setCurrentFilter(currentFilter.filter((f) => f !== tag))
      : setCurrentFilter([...currentFilter, tag]);
  };

  //usememo
  const filteredList = () => {
    return musicList.filter((m) =>
      currentFilter.every((f) => m.tags.includes(f))
    );
  };

  // checkDuplicate
  return (
    <>
      <div className=" m-2 space-x-2">
        <button
          className="border-2 border-slate-400 bg-slate-800 p-2 text-slate-300 hover:border-slate-200 hover:text-slate-100"
          onClick={() => handleRandom()}
        >
          Random
        </button>

        {/* <button
          className="border-2 border-slate-400 bg-slate-800 p-2 text-slate-300 hover:border-slate-200 hover:text-slate-100"
          onClick={() => console.log("todo")}
        >
          Autoplay
        </button> */}

        <button
          onClick={() => setSelected(null)}
          className={` border-2  border-slate-400 p-2  ${
            selected
              ? " bg-slate-800 hover:border-slate-200 hover:text-slate-100"
              : " bg-slate-500 text-slate-300"
          }`}
          disabled={!selected}
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {playListType().map((tag) => {
          return (
            <button
              key={tag}
              onClick={() => addFilter(tag)}
              className={`m-1  rounded-sm bg-slate-300 px-1 text-sm font-semibold text-black hover:cursor-pointer ${
                currentFilter.includes(tag)
                  ? "border-2 border-green-700 text-green-700"
                  : "border-2 border-slate-800"
              }`}
            >
              {tag}
            </button>
          );
        })}
        <button
          onClick={() => setCurrentFilter([])}
          className="m-1 rounded-sm border-2 border-slate-800 bg-slate-300 px-1 text-sm font-extrabold text-red-700 hover:cursor-pointer"
        >
          X
        </button>
      </div>

      <div className="my-4 w-full">
        {filteredList().map((m) => (
          <div
            onClick={() => {
              setSelected(m);
              playerRef.current.scrollIntoView();
            }}
            className={`my-1 flex cursor-pointer justify-between bg-slate-600 ${
              selected && m.src === selected.src
                ? "bg-slate-400 font-semibold text-black"
                : ""
            } `}
            key={m.src}
          >
            {" "}
            <div className="px-2"> {m.title} </div>{" "}
            {/* <div>
              {" "}
              {m.tags.map((t) => (
                <div className="ml-3" key={t}>
                  {t}
                </div>
              ))}{" "}
            </div>{" "} */}
          </div>
        ))}
      </div>
      <div ref={playerRef} className=" mb-4 w-full ">
        {selected && (
          <iframe
            className=" h-56 w-full sm:h-80"
            // src={`https://www.youtube.com/embed/${selected.src}`}
            src={`https://www.youtube-nocookie.com/embed/${selected.src}`}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        )}
      </div>
    </>
  );
};
function Jukebox() {
  const [youtube, setYoutube] = useState(true);
  const [radio, setRadio] = useState(false);

  return (
    <div className="h-screen bg-slate-700">
      <div className="flex  flex-col items-center bg-slate-700 text-white">
        <p className="mb-2 w-full border-b-4 border-b-slate-400  text-center text-3xl  font-black">
          JUKEBOX
        </p>

        <div className="  mb-10 flex w-screen max-w-2xl flex-col items-center ">
          <div className="mb-2 flex w-full justify-evenly text-center">
            <button
              onClick={() => setYoutube(!youtube)}
              className={`w-1/2  ${
                youtube
                  ? "bg-slate-400 shadow-md shadow-slate-900"
                  : "bg-slate-300"
              } py-1 px-6 font-bold text-black`}
            >
              Youtube
            </button>
            <div className="w-1 bg-black"></div>
            <button
              onClick={() => setRadio(!radio)}
              className={`w-1/2  ${
                radio
                  ? "bg-slate-400 shadow-md shadow-slate-900"
                  : "bg-slate-300"
              } py-1 px-6 font-bold text-black`}
            >
              Radio
            </button>
          </div>

          {youtube && <Youtube />}
          {youtube && radio && (
            <div
              className=" w-full  border-t-4 
              border-t-slate-400 py-2   text-center text-xl  font-bold text-slate-300
            "
            >
              RADIO
            </div>
          )}
          {radio && <Radio />}
          {/* <div>contact form</div> */}
        </div>
      </div>
    </div>
  );
}

export default Jukebox;
