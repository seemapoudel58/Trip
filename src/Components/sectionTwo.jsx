import React from "react";

function SectionTwo({ handleClearTodos, handleSort, sort }) {
  return (
    <div>
      <article className=" h-[40vh] bg-red-200  flex items-center justify-center space-x-11">
        <div className="">
          <select
            value={sort}
            onChange={handleSort}
            className="bg-gray-200 border-2 border-black outline-none rounded-md py-2 px-4"
          >
            <option value="input">Sort By Input Order</option>
            <option value="status">Sort By Packed Status</option>
            <option value="description">Sort By Description</option>
          </select>
        </div>
        <div className="border-2 border-black bg-gray-200 rounded-lg p-2">
          <button onClick={handleClearTodos}>Clear List</button>
        </div>
      </article>
    </div>
  );
}

export default SectionTwo;
