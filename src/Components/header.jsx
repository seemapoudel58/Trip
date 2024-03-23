import React from "react";
import { PiTreePalmBold } from "react-icons/pi";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

function Header() {
  return (
    <div className=" bg-red-500 h-[30vh]  flex flex-row items-center justify-center space-x-[1rem] md:space-x-[7rem]">
      <div className=" flex space-x-1 text-[2rem] md:space-x-[2rem] md:text-[4rem]">
        <PiTreePalmBold  />
        <PiTreePalmBold />
      </div>
      <h3 className="text-[3rem] font-bold">Far Away</h3>
      <div className=" flex space-x-1 text-[2rem] md:space-x-[2rem] md:text-[4rem]">
        <BiSolidShoppingBagAlt />
        <BiSolidShoppingBagAlt />
      </div>
    </div>
  );
}

export default Header;
