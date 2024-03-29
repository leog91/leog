import React from "react";

export default function jukebox() {
  return (
    <div className="flex min-h-screen flex-col  items-center justify-center  border-black bg-black text-center font-mono text-7xl text-white   ">
      <div className="  hover:underline hover:first-letter:text-pink-600">
        <a
          className=" group decoration-pink-600 underline-offset-4  "
          href="https://jukebox-seven.vercel.app/"
        >
          new site<span className="group-hover:text-pink-600">!</span>
        </a>
      </div>
    </div>
  );
}

// import React, { useState, useRef } from "react";
// import { createPortal } from "react-dom"; //???update

// const T = {
//   ALBUM: "ALBUM",
//   COVER: "COVER",
//   SONG: "SONG",
//   LIVE: "LIVE",
//   ANALOG: "ANALOG",
//   RADIO: "RADIO",
//   VIDEO: "VIDEO",
//   TECHNO: "TECHNO",
//   VINYL: "VINYL",
//   CHILL: "CHILL",
//   PIANO: "PIANO",
//   VOICE: "VOICE",
//   JUNGLE: "JUNGLE",
//   EDM: "EDM", //Electronic dance music
// };

// //video/audio MODE

// //album, to set/long

// // "https://www.youtube-nocookie.com/embed/"
// // "https://www.youtube.com/embed/
// const musicList = [
//   {
//     src: "sp3B97N67Cw",
//     title: "Hania Rani - @arteconcert's Piano Day",
//     tags: [T.ALBUM, T.PIANO],
//   },

//   {
//     src: "QVTWvOzktbE",
//     title: "Deep Lo-Fi House Mix #2",
//     tags: [T.ALBUM, T.EDM],
//   },

//   {
//     src: "dfWzm_I5euQ",
//     title: "Another day | Minimal & Lofi House Mix | dj cakewaffle",
//     tags: [T.ALBUM, T.EDM],
//   },

//   {
//     src: "s-jtdKjzQaE",
//     title:
//       "70s Japanese Jazz Mix (Jazz-funk, Soul Jazz, Rare groove, Drum Breaks..)",
//     tags: [T.ALBUM, T.PIANO],
//   },

//   {
//     src: "0Itos0zfA3s",
//     title: "Coldhands - Oncle House",
//     tags: [T.ALBUM, T.EDM],
//   },
//   //

//   {
//     src: "J0yHr-h0apc",
//     title: "Best Acid Jazz and Funky Instrumentals Vol 3 - 2 h. Non Stop 2023",
//     tags: [T.ALBUM, T.LIVE],
//   },

//   {
//     src: "sWqDIZxO-nU",
//     title: "In Rainbows | Radiohead | From The Basement",
//     tags: [T.ALBUM, T.LIVE],
//   },

//   {
//     src: "VGF8FAV1eeM",
//     title: "3 hour vinyl deep house & techno dj mix | Joe Sansom",
//     tags: [T.ALBUM, T.EDM],
//   },

//   {
//     src: "HHOn8u-c2wk",
//     title: "Himiko Kikuchi - Flying Beagle (1987)",
//     tags: [T.ALBUM, T.PIANO],
//   },

//   {
//     src: "bEMqVrbAPtA",
//     title: "Barber Beats but I tell you what all the samples are",
//     tags: [T.ALBUM, T.CHILL],
//   },

//   //

//   {
//     src: "b1zR9zm5J1A",
//     title: "Àbáse – Laroyê (2021 - Album)",
//     tags: [T.ALBUM],
//   },

//   {
//     src: "vnKKNZLVh2Q",
//     title: "Best Of French 79",
//     tags: [T.ALBUM, T.EDM],
//   },

//   {
//     src: "Oa4MT9LPcaU",
//     title: "P I Z Z A H O T L I N E - L E V E L S E L E C T",
//     tags: [T.ALBUM, T.EDM, T.JUNGLE],
//   },
//   //

//   {
//     src: "KcYU6b_9hSw",
//     title: "Pizza Hotline - DELIVERY BOY 2099 // 配達少年2099",
//     tags: [T.ALBUM, T.CHILL],
//   },

//   {
//     src: "DXKojYz25Gw",
//     title:
//       "Japanese soft indie/rock, that would be in Goodnight Punpun's playlist",
//     tags: [T.ALBUM],
//   },

//   {
//     src: "Fs0el7QmrOs",
//     title: "Melodic Techno w/ M&K || Artbat, Solomun, Adriatique, Monolink",
//     tags: [T.ALBUM, T.EDM],
//   },

//   {
//     src: "hzWl_j__KFU",
//     title: "Songs that will Cure Your Hangover with Ceylan Göksel",
//     tags: [T.ALBUM, T.ANALOG],
//   },

//   {
//     src: "dJTUe_WDgro",
//     title: "Space Jazz | Jazzy Beats | 1 Hour Playlist",
//     tags: [T.ALBUM, T.CHILL],
//   },

//   {
//     src: "9qcr708w1HY",
//     title: "Jazz Sabbath - Jazz Sabbath (2020) [Full Album]",
//     tags: [T.ALBUM, T.CHILL],
//   },
//   //

//   {
//     src: "EBEmAFHF4XA",
//     title: "Relaxing music from Gran Turismo #1 (GT2 - 6)",
//     tags: [T.ALBUM],
//   },

//   {
//     src: "k7HmLM7ZBBU",
//     title: "Soft Chill House Mix - Amii Watson B2B Jimmi Harvey",
//     tags: [T.ALBUM, T.EDM],
//   },
//   //

//   //
//   {
//     src: "0RXdd0pCJ9Q",
//     title: "DWIG - Orange Evening - Laut & Luise (LUL007) ",
//     tags: [T.SONG, T.VIDEO, T.EDM],
//   },
//   //

//   {
//     src: "rtL5oMyBHPs",
//     title: "MGMT - Little Dark Age ",
//     tags: [T.SONG, T.VIDEO],
//   },

//   //
//   {
//     src: "5w7Lv4rVoLU",
//     title: "Amsterdam Rooftop House Mix by FR3ADY | Rooftop Tapes Vol. I",
//     tags: [T.EDM, T.ALBUM],
//   },
//   {
//     src: "bJwjJc4Op30",
//     title: "FLOW TECHNO DJ SET - DREAMORAVE",
//     tags: [T.EDM, T.ALBUM],
//   },
//   //
//   {
//     src: "Pn-R9HhUQZs",
//     title: "WAKE UP TECHNO SET - DREAMORAVE",
//     tags: [T.EDM, T.ALBUM],
//   },
//   //
//   {
//     src: "5zqlgMh4aYs",
//     title: "Feel Like Makin' Love - Toshiki Soejima Neo-Soul Guitar",
//     tags: [T.LIVE, T.SONG],
//   },

//   {
//     src: "v_9qEOENM9M",
//     title: "Selected Sessions Dom Dolla Belgrade DJ Set",
//     tags: [T.LIVE, T.TECHNO, T.EDM],
//   },

//   {
//     src: "J5oZ80Daduc",
//     title: "Hania Rani live at Invalides - Cercle",
//     tags: [T.ALBUM, T.VOICE, T.PIANO, T.CHILL, T.LIVE],
//   },

//   {
//     src: "_3EuiU1qdpE",
//     title: "Hania Rani - (Live on KEXP)",
//     tags: [T.ALBUM, T.VOICE, T.PIANO, T.CHILL, T.LIVE],
//   },

//   {
//     src: "fYdVbUMyBGE",
//     title: "Japanese City Pop",
//     tags: [T.ALBUM],
//   },

//   {
//     src: "QPPFM8NyuaQ",
//     title:
//       "Miss Monique at the Biosphere Museum, in Montreal, Canada for Cercle",
//     tags: [T.TECHNO],
//   },
//   {
//     src: "2CCNswShJRc",
//     title: "Daft Punk | Something About Us | Pomplamoose",
//     tags: [T.COVER],
//   },

//   {
//     src: "4Mk_hGfIWIc",
//     title: "American Boy | funk cover",
//     tags: [T.LIVE, T.COVER],
//   },
//   {
//     src: "KGPhGui0U-g",
//     title: "Guest Mix: Salsa Records from Venezuela with Gia Fu",
//     tags: [T.VINYL],
//   },
//   {
//     src: "15Nqbic6HZs",
//     title: "Alfa Mist 'Bring Backs' Live at Metropolis",
//     tags: [T.ALBUM, T.LIVE],
//   },

//   {
//     src: "hUkMnNNc5NU",
//     title: "Parcels - Live At Abbey Road - 90th Anniversary Session",
//     tags: [T.LIVE],
//   },
//   {
//     src: "ePZuJl06AuU",
//     title: "UK Jazz and Groove with Tina Edwards",
//     tags: [T.VINYL],
//   },

//   {
//     src: "mQGJ9FQC2Hw",
//     title:
//       "Dream Sounds | Poolside Disco Deep & Lofi House Mix | Tom Jarney, Lemin, Folamour",
//     tags: [T.ALBUM],
//   },
//   {
//     src: "zw79RVnlCb0",
//     title: "Hellraiser (30th Anniversary Edition - Official Animated Video)",
//     tags: [T.VIDEO, T.SONG],
//   },
//   {
//     src: "DgkgGbJwRyo",
//     title: "Crooked Colours - Flow [Official Video]",
//     tags: [T.VIDEO, T.SONG],
//   },

//   {
//     src: "Koq_6Z_oRBc",
//     title: "Jamiroquai medley",
//     tags: [T.ALBUM],
//   },
//   {
//     src: "qgUhkbMNkkw",
//     title: "groovy house mix on a boat",
//     tags: [T.TECHNO],
//   },
//   {
//     src: "Yy4pcKn0Y_k",
//     title: "The Yussef Dayes Experience - Live At Joshua Tree",
//     tags: [T.LIVE, T.ALBUM],
//   },

//   {
//     src: "d33C8IE7WnQ",
//     title: "Tame Impala - InnerSpeaker",
//     tags: [T.LIVE, T.ALBUM],
//   },
//   {
//     src: "YSykw8vOJ-Y",
//     title: "Tommy Guerrero - Soul Food Taqueria ",
//     tags: [T.ALBUM],
//   },
//   {
//     src: "VyJXkKWsxko",
//     title: "Macroblank - 行方不明 ",
//     tags: [T.ALBUM],
//   },

//   {
//     src: "F8M3UKx7WkQ",
//     title: "Brazilian Samba Grooves with Carla from Batukizer",
//     tags: [T.VINYL],
//   },
//   {
//     src: "Tqm7-zN5s8k",
//     title: "Harry Styles Covers Peter Gabriel’s “Sledgehammer” ",
//     tags: [T.LIVE, T.COVER],
//   },

//   {
//     src: "MF8RFD7tk48",
//     title: "Persona 5 Jazz Cafe Mix (w/ Cafe & Rain Ambience)",
//     tags: [T.ALBUM],
//   },

//   {
//     src: "5QEs2kBZwBg",
//     title: "Santana/Fleetwood Mac Cover - Live",
//     tags: [T.LIVE, T.COVER],
//   },

//   {
//     src: "HXRh-7BJD2E",
//     title: "Martin Miller & Paul Gilbert - Superstition",
//     tags: [T.LIVE, T.COVER],
//   },

//   {
//     src: "LtUKEfpNTNI",
//     title: "Phil Collins cover",
//     tags: [T.LIVE, T.COVER],
//   },

//   {
//     src: "jOUtIdXVySA",
//     title: "Female Japanese '80s",
//     tags: [T.VINYL],
//   },
// ];

// const radioList = [
//   {
//     name: "Balearica Music Selections",
//     src: ["https://control.streaming-pro.com:8040/live.mp3"],
//   },
//   {
//     name: "RT2 FM - 🇮🇪",
//     src: ["https://www.liveradio.es/http://icecast.rte.ie/ie2fm"],
//   },
//   {
//     name: "HAURAKI - 🇳🇿",
//     src: ["https://ais-nzme.streamguys1.com/nz_009_aac"],
//   },
//   {
//     name: "Antenne 80s - 🇩🇪",
//     src: ["http://s6-webradio.antenne.de/80er-kulthits"],
//   },
//   {
//     name: "The Rock - 🇳🇿",
//     src: ["https://tunein-icecast.mediaworks.nz/rock_128kbps"],
//   },

//   {
//     name: "CADENA 3 FM - 🇦🇷",
//     src: ["https://26373.live.streamtheworld.com/CADENA3.mp3"],
//   },
//   {
//     name: "Radio NOVA 100 FM - 🇮🇪",
//     src: ["https://stream.audioxi.com/NOVA"],
//   },

//   {
//     name: "VERONICA - 🇳🇱",
//     src: ["https://22543.live.streamtheworld.com/VERONICA.mp3"],
//   },
//   {
//     name: "The Breeze Auckland - 🇳🇿",
//     src: ["http://tunein-icecast.mediaworks.nz/breeze_128kbps"],
//   },
// ];

// const Radio = () => {
//   const [tuned, setTuned] = useState(null);

//   return (
//     <>
//       {/* channge, to singleton, only 1 player */}
//       {radioList.map((r) => (
//         <div
//           className="my-1 flex w-full cursor-pointer justify-between bg-slate-600  px-2"
//           onClick={() => {
//             setTuned(null);
//             setTimeout(() => {
//               console.log("interval -> audio element");
//               //"hack"
//               setTuned(r);
//             }, 100);
//           }}
//           key={r.name}
//         >
//           {" "}
//           {r.name}
//         </div>
//       ))}
//       {/* <div>player</div> */}
//       {tuned && (
//         <div className=" flex w-full flex-col items-center ">
//           <CustomIframe title="A custom made iframe">
//             <p
//               style={{
//                 fontWeight: "900",
//                 fontFamily: "sans-serif",
//                 color: "rgb(203 213 225",
//               }}
//               className="  text-white "
//             >
//               {tuned.name}
//             </p>
//             <audio style={{ width: "100%" }} controls autoPlay>
//               {tuned.src.map((url, i) => (
//                 <source key={url + i} src={url} type="audio/mpeg" />
//               ))}
//             </audio>
//           </CustomIframe>
//           <button
//             className="-mt-5  w-24 border-2 border-slate-400 bg-slate-800 p-2 text-slate-300 hover:border-slate-200 hover:text-slate-100"
//             onClick={() => setTuned(null)}
//           >
//             Clear{" "}
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// const playListType = () => Object.entries(T).map((e) => e[0]);

// const CustomIframe = ({ children, ...props }) => {
//   const [contentRef, setContentRef] = useState(null);

//   const mountNode = contentRef?.contentWindow?.document?.body;

//   return (
//     <iframe
//       scrolling="no"
//       className=" -mr-2 w-full"
//       {...props}
//       ref={setContentRef}
//     >
//       {mountNode && createPortal(children, mountNode)}
//     </iframe>
//   );
// };

// const Youtube = () => {
//   const [selected, setSelected] = useState(null);
//   const [currentFilter, setCurrentFilter] = useState([]);
//   // const [history, setHistory] = useState([]);

//   const playerRef = useRef(null);

//   const handleRandom = () => {
//     const random = Math.floor(Math.random() * musicList.length);

//     // const random = Math.floor(Math.random() * filteredList().length);
//     //random with filter

//     const toSelect = filteredList()[random];
//     // setHistory([...history, toSelect]);
//     setSelected(toSelect);
//     playerRef.current.scrollIntoView();
//   };

//   const addFilter = (tag) => {
//     currentFilter.includes(tag)
//       ? setCurrentFilter(currentFilter.filter((f) => f !== tag))
//       : setCurrentFilter([...currentFilter, tag]);
//   };

//   //usememo
//   const filteredList = () => {
//     return musicList.filter((m) =>
//       currentFilter.every((f) => m.tags.includes(f))
//     );
//   };

//   // checkDuplicate
//   return (
//     <>
//       <div className=" m-2 space-x-2">
//         {/* <button
//           disabled={history.length === 0}
//           className="border-2 border-slate-400 bg-slate-800 p-2 text-slate-300 hover:border-slate-200 hover:text-slate-100 disabled:border-slate-400 disabled:bg-slate-500  disabled:text-slate-300"
//           onClick={() => handlePrevious()}
//         >
//           ⏮<span className="hidden sm:inline-block">Previous</span>
//         </button> */}
//         <button
//           className="border-2 border-slate-400 bg-slate-800 p-2 text-slate-300 hover:border-slate-200 hover:text-slate-100"
//           onClick={() => handleRandom()}
//         >
//           🔀<span className="hidden sm:inline-block">Random</span>
//         </button>
//         {/* <button
//           disabled={history.length === 0}
//           className="border-2 border-slate-400 bg-slate-800 p-2 text-slate-300 hover:border-slate-200 hover:text-slate-100 disabled:border-slate-400 disabled:bg-slate-500  disabled:text-slate-300"
//           onClick={() => handleNext()}
//         >
//           ⏭<span className="hidden sm:inline-block">Next</span>
//         </button> */}

//         {/* <button
//           className="border-2 border-slate-400 bg-slate-800 p-2 text-slate-300 hover:border-slate-200 hover:text-slate-100"
//           onClick={() => console.log("todo")}
//         >
//           Autoplay
//         </button> */}
//         <button
//           onClick={() => setSelected(null)}
//           className={` border-2  border-slate-400 p-2  ${
//             selected
//               ? " bg-slate-800 hover:border-slate-200 hover:text-slate-100"
//               : " bg-slate-500 text-slate-300"
//           }`}
//           disabled={!selected}
//         >
//           Clear
//         </button>
//       </div>

//       <div className="flex flex-wrap justify-center">
//         {playListType().map((tag) => {
//           return (
//             <button
//               key={tag}
//               onClick={() => addFilter(tag)}
//               className={`m-1  rounded-sm bg-slate-300 px-1 text-sm font-semibold text-black hover:cursor-pointer ${
//                 currentFilter.includes(tag)
//                   ? "border-2 border-green-700 text-green-700"
//                   : "border-2 border-slate-800"
//               }`}
//             >
//               {tag}
//             </button>
//           );
//         })}
//         <button
//           onClick={() => setCurrentFilter([])}
//           className="m-1 rounded-sm border-2 border-slate-800 bg-slate-300 px-1 text-sm font-extrabold text-red-700 hover:cursor-pointer"
//         >
//           X
//         </button>
//       </div>

//       <div className="my-4 w-full">
//         {filteredList().map((m) => (
//           <div
//             onClick={() => {
//               setSelected(m);
//               playerRef.current.scrollIntoView();
//             }}
//             className={`my-1 flex cursor-pointer justify-between   hover:bg-gray-800   hover:text-white ${
//               selected && m.src === selected.src
//                 ? "border-l-4 border-white bg-gray-800 text-white"
//                 : "bg-gray-900 text-gray-300"
//             } `}
//             key={m.src}
//           >
//             {" "}
//             <div className="px-2"> {m.title} </div>{" "}
//             {/* <div>
//               {" "}
//               {m.tags.map((t) => (
//                 <div className="ml-3" key={t}>
//                   {t}
//                 </div>
//               ))}{" "}
//             </div>{" "} */}
//           </div>
//         ))}
//       </div>
//       <div ref={playerRef} className=" mb-4 w-full  ">
//         {selected && (
//           <iframe
//             className=" h-56 w-full sm:h-80"
//             // src={`https://www.youtube.com/embed/${selected.src}`}
//             src={`https://www.youtube-nocookie.com/embed/${selected.src}`}
//             allowFullScreen
//             frameBorder="0"
//           ></iframe>
//         )}
//       </div>
//     </>
//   );
// };
// function Jukebox() {
//   const [youtube, setYoutube] = useState(true);
//   const [radio, setRadio] = useState(true);

//   return (
//     <div className="h-screen   bg-slate-700">
//       <div className="flex  flex-col items-center bg-slate-700 text-white">
//         <p className="mb-2 w-full border-b-4 border-b-slate-400  text-center text-3xl  font-black">
//           JUKEBOX
//         </p>

//         <div className="  mb-10 flex w-full max-w-2xl flex-col items-center ">
//           <div className="mb-4 flex w-full justify-evenly text-center">
//             <button
//               onClick={() => setRadio(!radio)}
//               className={`w-1/2  ${
//                 radio
//                   ? "bg-slate-400 shadow-md shadow-slate-900"
//                   : "bg-slate-300"
//               } py-1 px-6 font-bold text-black`}
//             >
//               Radio
//             </button>
//             <div className="w-1 bg-black"></div>

//             <button
//               onClick={() => setYoutube(!youtube)}
//               className={`w-1/2  ${
//                 youtube
//                   ? "bg-slate-400 shadow-md shadow-slate-900"
//                   : "bg-slate-300"
//               } py-1 px-6 font-bold text-black`}
//             >
//               Youtube
//             </button>
//           </div>

//           {radio && <Radio />}

//           {youtube && radio && (
//             <div
//               className=" mt-4 w-full
//               border-t-4 border-t-slate-400  py-2 text-center text-xl  font-bold text-slate-300
//             "
//             >
//               YOUTUBE
//             </div>
//           )}

//           {youtube && <Youtube />}

//           {/* <div>contact form</div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Jukebox;
