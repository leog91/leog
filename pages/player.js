import Image from "next/image";

function Player() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="flex flex-col place-items-center">
          <div className="pt-9">
            <Image
              src="/fruit/shakespeare.jpg"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div className="text-white  m-3 font-semibold">Song name</div>
          <div className="text-gray-400">Band</div>

          <div className=" bg-white p-0.5 rounded-full w-28 m-4">
            <div className="bg-gray-800 text-white text-xs  font-semibold rounded-full text-center  p-1">
              ADD SONG
            </div>
          </div>
        </div>
        <div className="flex space-x-1 place-content-center pt-40 mb-10 ">
          <div className="bg-green-500  p-1 rounded-full">
            <div className="text-white rounded-full p-1">Previous</div>
          </div>
          <div className="bg-green-500  p-1 rounded-full">
            <div className="text-white rounded-full p-1">Play/Pause</div>
          </div>
          <div className="bg-green-500  p-1 rounded-full">
            <div className="text-white rounded-full p-1">Next</div>
          </div>
          <div className="bg-green-500  p-1 rounded-full">
            <div className="text-white rounded-full p-1">SHUFFLE PLAY</div>
          </div>
        </div>

        <div className=" bg-blue-800 flex flex-col h-screen text-green-300 font-semibold place-items-center  ">
          <div className="mt-auto mb-5">Share this</div>
        </div>
      </div>
    </>
  );
}

export default Player;
