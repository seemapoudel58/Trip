import React, { useState } from "react";

function SectionOne({AddToDo}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("value", value);
  };

  const[number, setNumber]= useState('1');
  const handleChangeNumber = (e) =>{
    setNumber(e.target.value);
  }
  const addToDo = () => {
    if (value.trim()) {
      const newTodo = `${number} - ${value}`;
      AddTodo(newTodo); 
      setValue("");
    }
  };
  

  return (
    <div className=" bg-slate-400 min-h-[20vh] flex items-center justify-center space-x-8 ">
      <h2 className="text-xl font-semibold">What do you need for your trip?</h2>
      <div className="">
        <select 
        value= {number}
        onChange={handleChangeNumber} className="bg-gray-200 border-2 border-black outline-none rounded-md py-2 px-4">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <article className="rounded">
        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="Item"
          className="bg-gray-200 appearance-none border-2 border-black rounded w-full py-2 px-4 text-gray-700 "
        />
      </article>
      <article className=" bg-gray-200 border-[0.12rem] border-black rounded-lg py-[0.3rem] px-[1rem]">
        <button onClick={addToDo}>Add</button>
      </article>
      
    </div>
  );
}

export default SectionOne;
