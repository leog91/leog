import React from "react";

const Burger = () => {
  return (
    <div className="transition-all duration-300  hover:-rotate-180">
      <div className="m-1 h-0.5 w-5 bg-black"></div>
      <div className="m-1 h-0.5 w-5 bg-black"></div>
      <div className="m-1 h-0.5  w-5 bg-black"></div>
    </div>
  );
};

export default Burger;
