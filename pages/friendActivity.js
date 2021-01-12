import Image from "next/image";

function FriendActivity() {
  return (
    <>
      <div className=" bg-black flex flex-col h-screen text-white font-semibold divide-y divide-gray-700 place-items-center  ">
        <div className="text-2xl font-bold mb-3">Friend Activity</div>
        <div>
          <div className="flex my-9 flex-row h-16 items-center ">
            <div className="m-2 rounded-full text-gray-200 flex items-center justify-center">
              <Image
                src="/fruit/msn-logo.jpg"
                alt="profile"
                width={65}
                height={65}
                className="rounded-full"
              />
            </div>
            <div className="m-2 text-gray-400 text-xs flex flex-col">
              <div className="text-white text-base">John Doe</div>
              <div>Moby Dick</div>
              <div>Led Zeppelin</div>
              <div className="mt-1">💿Led Zeppelin II</div>
            </div>
          </div>
          <div className="flex my-9 flex-row h-16 items-center ">
            <div className="m-2 rounded-full text-gray-200 flex items-center justify-center">
              <Image
                src="/fruit/yahoo-social.png"
                alt="profile"
                width={65}
                height={65}
                className="rounded-full"
              />
            </div>
            <div className="m-2 text-gray-400 text-xs flex flex-col">
              <div className="text-white text-base">Jane Doe</div>
              <div>Bulls on Parade</div>
              <div>Rage Against the Machine</div>
              <div className="mt-1">🎵 Heavy</div>
            </div>
          </div>
          <div className="flex my-9 flex-row h-16 items-center ">
            <div className="m-2 rounded-full text-gray-200 flex items-center justify-center">
              <Image
                src="/fruit/batman-face.png"
                alt="profile"
                width={65}
                height={65}
                className="rounded-full"
              />
            </div>
            <div className="m-2 text-gray-400 text-xs flex flex-col">
              <div className="text-white text-base">Bruce Wayne</div>
              <div>Kiss From A Rose</div>
              <div>Seal</div>
              <div className="mt-1">🎵 OST Batman Forever</div>
            </div>
          </div>
          --- hover , play. ?? .. ??---
        </div>
      </div>
    </>
  );
}

export default FriendActivity;
