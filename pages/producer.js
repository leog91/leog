import React from "react";

const Producer = () => {
  console.log("asdW");

  return (
    <div className="flex flex-col ">
      <h1>asdas</h1>
      <Single x={3} />
      <Single />

      <h1>asdas</h1>
      <h1>asdas</h1>
    </div>
  );
};

const Single = (props) => {
  console.log("props", props);
  return (
    <div className={"flex justify-center items-center"}>
      <div>some data www</div>
      {props.x && (
        <div className={"text-purple-700 text-2xl p-2"}> asdds {props.x}</div>
      )}
    </div>
  );
};

export default Producer;
