import React from "react";

function Billboard() {
  return (
    <div className="relative m-2 border-4  border-red-800 bg-orange-300 p-6 font-bold text-black ">
      Billboard
      <button className="absolute -bottom-3 right-2 border-2 border-yellow-600 bg-red-800 px-1 text-center text-sm font-semibold text-yellow-400 hover:bg-red-700 ">
        OK
      </button>
    </div>
  );
}

export default Billboard;
