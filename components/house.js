import React from "react";

const House = () => {
  // use

  return (
    <div className="flex flex-col items-center bg-zinc-800 p-4 text-white">
      <h2 className="text-3xl font-light">Flat 302</h2>

      <div className=" mt-4 flex flex-col items-center  text-center  sm:flex-row-reverse">
        <div className="w-64">
          <div className="my-2 h-2 rounded-md bg-zinc-300" />
          <div className="my-2 h-2 rounded-md bg-zinc-300" />
          <div className="   rounded-md bg-zinc-700 ">
            <div className="space-y-4 py-5">
              <div className="mx-auto w-4/5 rounded bg-slate-300 font-medium text-black">
                Carlos
              </div>
              <div className="mx-auto w-4/5 rounded bg-slate-300 font-medium text-black">
                Michael
              </div>
              <div className="mx-auto w-4/5 rounded bg-slate-300 font-medium text-black">
                Mar
              </div>
            </div>
          </div>
          <div className="my-2 h-2 rounded-md bg-zinc-300" />
          <div className="my-2 h-2 rounded-md bg-zinc-300" />
          <div className="my-2 h-2 rounded-md bg-zinc-300" />
        </div>
        <div className="mr-0 flex flex-col sm:mr-3 ">
          <button className="m-1 rounded-md  bg-zinc-400 px-3 py-1">UP</button>
          <button className="m-1 rounded-md bg-zinc-400 px-3 py-1">DOWN</button>
        </div>
      </div>
    </div>
  );
};

export default House;
