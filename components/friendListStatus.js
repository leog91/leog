import Image from "next/image";

function FriendActivity() {
  return (
    <>
      <div className=" flex flex-col  place-items-center divide-y divide-gray-700 border-4 bg-black font-semibold text-white shadow-2xl shadow-white   ">
        <div className="mb-3 text-2xl font-bold">Friend Activity</div>
        <div>
          <div className="my-9 flex h-16 flex-row items-center ">
            <div className="m-2 flex items-center justify-center rounded-full text-gray-200">
              <Image
                src="/fruit/msn-logo.jpg"
                alt="profile"
                width={65}
                height={65}
                className="rounded-full"
              />
            </div>
            <div className="m-2 flex flex-col text-xs text-gray-400">
              <div className="text-base text-white">John Doe</div>
              <div>Moby Dick</div>
              <div>Led Zeppelin</div>
              <div className="mt-1">💿Led Zeppelin II</div>
            </div>
          </div>
          <div className="my-9 flex h-16 flex-row items-center ">
            <div className="m-2 flex items-center justify-center rounded-full text-gray-200">
              <Image
                src="/fruit/yahoo-social.png"
                alt="profile"
                width={65}
                height={65}
                className="rounded-full"
              />
            </div>
            <div className="m-2 flex flex-col text-xs text-gray-400">
              <div className="text-base text-white">Jane Doe</div>
              <div>Bulls on Parade</div>
              <div>Rage Against the Machine</div>
              <div className="mt-1">🎵 Heavy</div>
            </div>
          </div>
          <div className="my-9 flex h-16 flex-row items-center ">
            <div className="m-2 flex items-center justify-center rounded-full text-gray-200">
              <Image
                src="/fruit/batman-face.png"
                alt="profile"
                width={65}
                height={65}
                className="rounded-full"
              />
            </div>
            <div className="m-2 flex flex-col text-xs text-gray-400">
              <div className="text-base text-white">Bruce Wayne</div>
              <div>Kiss From A Rose</div>
              <div>Seal</div>
              <div className="mt-1">🎵 OST Batman Forever</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendActivity;
