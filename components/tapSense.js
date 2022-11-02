import React, { useState } from "react";

function TapSense() {
  const [taps, setTaps] = useState(0);

  const [ix, setIx] = useState(0);

  //   const handleTap = () => {
  //       let started = true;

  //     setTimeout(() => {
  //       console.log("timeout");
  //       started = false;
  //     }, 500);

  //     console.log("time2");
  //     setTaps((prev) => prev + 1);
  //   };

  let timer;

  const handleTap = () => {
    // if (timer) clearTimeout(timer);
    setIx((prev) => prev + 1);
    // setTaps((prev) => prev + 1);

    if (true) {
      console.log("with timer");
      timer = setTimeout(() => {
        //   timer = null;
        console.log("time2");
        // setTaps((prev) => prev + 1);

        // setIx(0);
        clearTimeout(timer);
      }, 1500);
    }
    if (!timer) {
      console.log("without timer");
      setTaps(ix);
      setIx(0);
    }
  };

  return (
    <>
      TapSense
      <div>taps = {taps}</div>
      <div>ix = {ix}</div>
      <button
        onClick={() => handleTap()}
        className="border-2 bg-orange-600 p-2"
      >
        boop!
      </button>
    </>
  );
}

export default TapSense;
