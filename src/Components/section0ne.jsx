import React from "react";

function SectionOne() {
  return (
    <div className=" bg-slate-400 min-h-[20vh] flex items-center justify-center space-x-8 ">
      <h2 className="text-xl font-semibold">What do you need for your trip?</h2>
      <div className="">
        <select className="bg-gray-200 border-2 border-black outline-none rounded-md py-2 px-4">
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option4">4</option>
          <option value="option5">5</option>
          <option value="option6">6</option>
          <option value="option7">7</option>
          <option value="option8">8</option>
          <option value="option9">9</option>
          <option value="option10">10</option>
        </select>
      </div>

      <article className="rounded">
        <input
          type="text"
          placeholder="Item"
          className="bg-gray-200 appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 "
        />
      </article>
      <article className=" bg-gray-200 border-[0.12rem] border-black rounded-lg py-[0.3rem] px-[1rem]">
        <button>Add</button>
      </article>
    </div>
  );
}

export default SectionOne;
