import React from "react";

function SectionTwo({message , handleClearTodos}) {

  
  return (
    <div>
      <article className=" h-[40vh] bg-red-200  flex items-center justify-center space-x-11">
        <div className="">
          <select className= "bg-gray-200 border-2 border-black outline-none rounded-md py-2 px-4">
            <option value="option1">Sort By Input Order</option>
            <option value="option2">Sort By Packed Status</option>
            <option value="option3">Sort By Description</option>
          </select>
        </div>
        <div className="border-2 border-black bg-gray-200 rounded-lg p-2">
          <button onClick={
            handleClearTodos
          }>Clear List</button>
          
        </div>
      </article>
    </div>
  );
}

export default SectionTwo;
