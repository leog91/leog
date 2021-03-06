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
        <div className="flex space-x-1 place-content-center pt-40 mb-10 items-center">
          <div className="bg-green-500  p-1 rounded-full">
            <div className="text-white rounded-full p-1">Previous</div>
          </div>
          <div className="bg-green-500  p-1 rounded-full">
            <div className="text-white rounded-full p-1">Play/Pause</div>
          </div>

          <div className="h-8 w-8 text-gray-200 ">
            {/* SHUFFLE */}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 477.88 477.88"
            >
              <path d="M472.897 124.269a.892.892 0 01-.03-.031l-.017.017-68.267-68.267c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.713l39.151 39.151h-95.334c-65.948.075-119.391 53.518-119.467 119.467-.056 47.105-38.228 85.277-85.333 85.333h-102.4C7.641 324.072 0 331.713 0 341.139s7.641 17.067 17.067 17.067h102.4c65.948-.075 119.391-53.518 119.467-119.467.056-47.105 38.228-85.277 85.333-85.333h95.334l-39.134 39.134c-6.78 6.548-6.968 17.353-.419 24.132 6.548 6.78 17.353 6.968 24.132.419.142-.137.282-.277.419-.419l68.267-68.267c6.674-6.657 6.687-17.463.031-24.136z" />
              <path d="M472.897 329.069l-.03-.03-.017.017-68.267-68.267c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l39.151 39.151h-95.334a85.209 85.209 0 01-56.9-21.726c-7.081-6.222-17.864-5.525-24.086 1.555-6.14 6.988-5.553 17.605 1.319 23.874a119.28 119.28 0 0079.667 30.43h95.334l-39.134 39.134c-6.78 6.548-6.968 17.352-.42 24.132 6.548 6.78 17.352 6.968 24.132.42.142-.138.282-.277.42-.42l68.267-68.267c6.673-6.656 6.686-17.462.03-24.135zM199.134 149.702a119.28 119.28 0 00-79.667-30.43h-102.4C7.641 119.272 0 126.913 0 136.339s7.641 17.067 17.067 17.067h102.4a85.209 85.209 0 0156.9 21.726c7.081 6.222 17.864 5.525 24.086-1.555 6.14-6.989 5.553-17.606-1.319-23.875z" />
            </svg>
          </div>
          <div className="h-14 w-14 text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
              />
            </svg>
          </div>

          <div className="h-14 w-14 text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin=""
                strokeWidth={1}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="h-14 w-14 text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="h-14 w-14 text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
              />
            </svg>
          </div>
          <div className="h-8 w-8 text-gray-200 ">
            {/* repeat */}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.979 511.979"
            >
              <path d="M341.552 85.334c-.077-.001-.152-.012-.229-.012H222.159l27.582-27.582c8.331-8.331 8.331-21.839 0-30.17-8.331-8.331-21.839-8.331-30.17 0l-64 64a21.56 21.56 0 00-1.413 1.563c-.202.246-.378.506-.568.759-.228.304-.463.601-.674.917-.203.303-.379.618-.564.929-.171.286-.351.566-.509.861-.169.317-.313.643-.465.966-.145.308-.299.611-.43.926-.13.314-.235.635-.349.953-.122.338-.251.672-.356 1.018-.096.318-.167.642-.248.964-.089.353-.188.701-.259 1.061-.074.372-.118.748-.171 1.122-.045.314-.104.622-.136.94a21.336 21.336 0 00-.105 2.084l-.001.021.001.023c.001.695.037 1.39.105 2.082.031.318.091.627.136.941.054.375.097.75.171 1.122.071.36.17.708.259 1.061.081.322.151.645.248.963.105.346.235.68.356 1.019.114.318.219.638.348.951.131.316.285.619.43.927.152.323.296.649.465.965.158.295.338.576.51.862.185.31.361.625.564.928.212.317.448.615.676.919.189.252.364.512.566.757.446.544.916 1.067 1.413 1.564l64 64c8.331 8.331 21.839 8.331 30.17 0 8.331-8.331 8.331-21.839 0-30.17l-27.582-27.582h118.984c.057 0 .112.009.169.009 70.778 0 128 57.222 128 128 0 31.068-12.408 60.299-34.121 82.031-8.328 8.335-8.322 21.842.013 30.17 8.335 8.328 21.842 8.322 30.17-.013 29.612-29.637 46.605-69.67 46.605-112.188 0-94.259-76.196-170.531-170.427-170.661zM358.39 418.083c.227-.303.462-.6.673-.915.203-.304.379-.619.565-.931.171-.286.35-.565.507-.859.17-.318.314-.645.467-.97.145-.306.298-.608.428-.922.13-.315.236-.637.35-.957.121-.337.25-.669.354-1.013.097-.32.168-.646.249-.969.089-.351.187-.698.258-1.055.074-.375.118-.753.173-1.13.044-.311.104-.617.135-.932.138-1.4.138-2.811 0-4.211-.031-.316-.09-.622-.135-.933-.054-.377-.098-.755-.172-1.13-.071-.358-.169-.705-.258-1.056-.081-.323-.152-.648-.249-.968-.104-.345-.234-.677-.355-1.014-.115-.32-.22-.642-.35-.957-.13-.314-.283-.615-.428-.921-.153-.325-.297-.653-.468-.971-.157-.293-.336-.572-.506-.857-.186-.312-.363-.628-.566-.932-.211-.315-.445-.611-.671-.913-.191-.255-.368-.516-.571-.764a21.366 21.366 0 00-1.392-1.54l-.021-.023-64-64c-8.331-8.331-21.839-8.331-30.17 0-8.331 8.331-8.331 21.839 0 30.17l27.582 27.582H170.836c-.057 0-.112-.009-.169-.009-70.778 0-128-57.222-128-128 0-31.068 12.408-60.299 34.121-82.031 8.328-8.335 8.322-21.842-.013-30.17-8.335-8.328-21.842-8.322-30.17.013C16.993 173.43 0 213.463 0 255.981c0 94.262 76.196 170.534 170.427 170.664.077.001.152.012.229.012h119.163l-27.582 27.582c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l64-64 .011-.012c.492-.493.959-1.012 1.402-1.551.204-.249.38-.509.57-.763z" />
            </svg>
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
        {/* audioComponent */}
        {/* <div>
          <audio controls src="audio/Dee Yan-Key - Forlorn City.mp3">
            Your browser does not support the audio element.
          </audio>
        </div> */}
      </div>
    </>
  );
}

export default Player;
