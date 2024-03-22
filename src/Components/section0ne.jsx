import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

function SectionOne() {
  return (
    <div className=" bg-slate-400 h-[20vh] flex items-center justify-center space-x-8 ">
      <h2 className="text-xl font-semibold">What do you need for your trip?</h2>
      <article className="border-[0.12rem] border-black rounded-lg p-[0.25rem] flex justify-between space-x-[2rem] bg-gray-200 ">
        <div className="flex items-center ">
          <button>1</button>
        </div>
        <div className="flex items-center cursor-pointer">
          <AiOutlineArrowDown size={20} />
        </div>
      </article>
        
      <article className="rounded">
        <input type="text" placeholder="Item" className="bg-gray-200 appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 "/>
      </article>
      <article className=" bg-gray-200 border-[0.12rem] border-black rounded-lg py-[0.3rem] px-[1rem]">
        <button>Add</button>
      </article>
    </div>
  );
}

export default SectionOne;
