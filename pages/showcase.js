import React from "react";

const events = [
  {
    img: "/showcase/cliff01.jpg",
    title: "The Workshop",
    info: "BESPOKE FESTIVAL EXPERIENCES",
  },
  {
    img: "/showcase/building.jpg",
    title: "The Workshop",
    info: "BESPOKE FESTIVAL EXPERIENCES",
  },
  {
    img: "/showcase/cupula.jpg",
    title: "The Workshop",
    info: "BESPOKE FESTIVAL EXPERIENCES",
  },
  {
    img: "/showcase/faro.jpg",
    title: "The Workshop",
    info: "BESPOKE FESTIVAL EXPERIENCES",
  },
  {
    img: "/showcase/food01.jpg",
    title: "The Workshop",
    info: "BESPOKE FESTIVAL EXPERIENCES",
  },
  {
    img: "/showcase/japan.jpg",
    title: "The Workshop",
    info: "BESPOKE FESTIVAL EXPERIENCES",
  },
  {
    img: "/showcase/route01.jpg",
    title: "The Workshop",
    info: "BESPOKE FESTIVAL EXPERIENCES",
  },
];

const emojis = ["🫡", "🐵", "😊", "🤗", "🙉", "🐱", "🐉", "👀"];

const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

function Showcase() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-neutral-200 px-4">
      <div className=" mt-4 flex w-full max-w-7xl justify-between">
        <div className="flex h-48 w-48 items-center  justify-center  bg-black font-mono text-5xl font-bold text-white">
          logo
        </div>
        <div className=" flex flex-col items-end ">
          <div className="mb-2 flex gap-1">
            <div className=" h-6  border-b-2 border-green-500">🇬🇧</div>
            <div className=" h-6  border-b-2 border-red-500">🇪🇸</div>
          </div>
          <div className="text-center font-sans  text-xl font-semibold  ">
            30 JUNE - 01 JULY 2023<span className="px-1 text-sky-500">/</span>
            LONDON
          </div>

          <button className="group relative m-3 flex h-8 w-36 flex-col hover:cursor-pointer sm:w-80 sm:px-0">
            <span
              className="absolute top-1 left-1  h-full w-full border-2 border-black bg-black"
              aria-hidden="true"
            ></span>
            <span className="group-hover::left-1   relative h-full w-full border-2 border-black bg-sky-300 text-center font-bold  group-hover:top-1 group-hover:left-1 ">
              TICKETS {">>>"}
            </span>
          </button>
          <nav>
            <ul className="flex flex-wrap">
              <li className="relative mx-4 font-bold hover:cursor-pointer">
                <span className=" absolute h-3  w-full bg-sky-500  "></span>
                <span className="relative px-1">WHATS'S ON</span>
              </li>
              <li className="group relative mx-4 font-bold hover:cursor-pointer">
                <span className=" absolute h-3  w-full group-hover:bg-sky-500   "></span>
                <span className="relative px-1">WHO'S THERE</span>
              </li>
              <li className="group relative mx-4 font-bold hover:cursor-pointer">
                <span className=" absolute h-3  w-full group-hover:bg-sky-500  "></span>
                <span className="relative px-1">ROAST MASTERS</span>
              </li>
              <li className="group relative mx-4 font-bold hover:cursor-pointer">
                <span className=" absolute h-3  w-full group-hover:bg-sky-500  "></span>
                <span className="relative px-1">VENUE & FAQ</span>
              </li>
              <li className="group relative mx-4 font-bold hover:cursor-pointer">
                <span className=" absolute h-3  w-full group-hover:bg-sky-500  "></span>
                <span className="relative px-1">EVENT GUIDE</span>
              </li>
              <li className="group relative mx-4 font-bold hover:cursor-pointer">
                <span className=" absolute h-3  w-full group-hover:bg-sky-500  "></span>
                <span className="relative px-1">MORE</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <h1 className="text-8xl">What's ON!</h1>

      <div className=" relative border-2 border-black ">
        <div className="absolute left-2 top-2 h-full w-full bg-black " />
        <div className="relative bg-white">
          <img
            className=" h-60  w-80  object-cover "
            src="/showcase/cliff01.jpg"
          ></img>
          <div className="space-y-2 p-6">
            <div className="text-xs font-bold text-sky-500">
              BESPOKE FESTIVAL EXPERIENCES
            </div>
            <h4 className="text-2xl font-bold">The Workshop</h4>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-5">
        {events.map((e) => (
          <div
            key={e.img}
            className="group relative border-2 border-black transition-all delay-75 hover:scale-105 hover:cursor-pointer "
          >
            <div className="absolute left-2 top-2 h-full w-full bg-black " />

            <div className="relative bg-white">
              <img className=" h-60  w-80  object-cover " src={e.img}></img>
              <div className="space-y-2 p-6">
                <div className="text-xs font-bold text-sky-500">{e.info}</div>
                <h4 className="text-2xl font-bold">{e.title}</h4>
              </div>
            </div>
            <div className="absolute inset-1/2 hidden h-full w-full text-4xl   group-hover:block  ">
              🫡
            </div>
          </div>
        ))}
      </div>

      <div className="my-8 flex flex-wrap justify-center gap-3 ">
        <div className="flex w-80 flex-col space-y-2">
          <div className="h-48 w-full bg-green-400"> </div>
          <div className="h-36 w-full bg-green-900"> </div>
          <div className="h-36 w-full bg-blue-900"> </div>
          <div className="h-20 w-full bg-red-400"> </div>
          <div className="h-52 w-full bg-yellow-900"> </div>
          <div className="h-28 w-full bg-orange-400"> </div>
          <div className="h-48 w-full bg-green-400"> </div>
          <div className="h-36 w-full bg-green-900"> </div>
        </div>

        <div className="flex w-80 flex-col space-y-2">
          <div className="h-20 w-full bg-red-400"> </div>
          <div className="h-52 w-full bg-yellow-900"> </div>
          <div className="h-36 w-full bg-green-300"> </div>
          <div className="h-36 w-full bg-blue-900"> </div>
          <div className="h-20 w-full bg-red-400"> </div>
          <div className="h-52 w-full bg-yellow-900"> </div>
          <div className="h-36 w-full bg-red-600"> </div>
          <div className="h-36 w-full bg-blue-900"> </div>
        </div>
        <div className="flex w-80 flex-col space-y-2">
          <div className="h-36 w-full bg-orange-400"> </div>
          <div className="h-52 w-full bg-green-900"> </div>
          <div className="h-36 w-full bg-slate-500"> </div>
          <div className="h-36 w-full bg-blue-900"> </div>
          <div className="h-20 w-full bg-red-400"> </div>
          <div className="h-52 w-full bg-yellow-900"> </div>
          <div className="h-48 w-full bg-green-400"> </div>
          <div className="h-36 w-full bg-pink-300"> </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
