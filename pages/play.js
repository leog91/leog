import Link from "next/link";
import Image from "next/image";

import Header from "../components/header";

import styles from "../styles/About.module.css";

function Play() {
  return (
    <>
      <div className=" bg-blue-800 flex flex-col h-screen text-green-300 font-semibold place-items-center  ">
        <div className="text-4xl   mb-8">Your Top Songs</div>
        <div>
          <div className="flex my-8 flex-row h-16 items-center ">
            <div className="m-2 text-xl">#1</div>
            <div className="m-2 rounded-full text-gray-200 bg-green-600 h-20 w-20 flex items-center justify-center">
              <Image
                src="/fruit/shakespeare.jpg"
                alt="Picture of the author"
                width={65}
                height={65}
              />
            </div>
            <div className="m-2 text-lg flex flex-col">
              <div className="text-white ">Song1</div>
              <div>Band1</div>
            </div>
          </div>
          <div className="flex my-8 flex-row h-16 items-center ">
            <div className="m-2 text-xl">#2</div>
            <div className="m-2 rounded-full text-gray-200 bg-green-600 h-20 w-20 flex items-center justify-center">
              Logo2
            </div>
            <div className="m-2 text-lg flex flex-col">
              <div className="text-white ">Song2</div>
              <div>Band2</div>
            </div>
          </div>
          <div className="flex my-8 flex-row h-16 items-center ">
            <div className="m-2 text-xl">#3</div>
            <div className="m-2 rounded-full text-gray-200 bg-green-600 h-20 w-20 flex items-center justify-center">
              <Image
                src="/fruit/ludwig-van-beethoven.jpg"
                alt="Picture of the author"
                width={65}
                height={65}
              />
            </div>
            <div className="m-2 text-lg flex flex-col">
              <div className="text-white ">Song3</div>
              <div>Band3</div>
            </div>
          </div>
          <div className="flex my-8 flex-row h-16 items-center ">
            <div className="m-2 text-xl">#4</div>
            <div className="m-2 rounded-full text-gray-200 bg-green-600 h-20 w-20 flex items-center justify-center">
              Logo4
            </div>
            <div className="m-2 text-lg flex flex-col">
              <div className="text-white ">Song4</div>
              <div>Band4</div>
            </div>
          </div>
        </div>
        <div className="mt-auto mb-5">Share this</div>
      </div>
    </>
  );
}

export default Play;
