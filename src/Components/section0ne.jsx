import React, { useState } from "react";

function SectionOne() {
  const[value , setValue] = useState('');

  const handleChange = (e) =>{
    setValue(e.target.value);
    console.log('value' , value);
  }
  const[todos, setTodos] = useState([]);

   const addToDo = () => {
    if(value.trim()){
      const newValue = setTodos ([...todos, value]);
      console.log(newValue);
      
    
   }
  }



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
      <ul>
        {todos.map((todo , index) => (
          <li key={index}>
          {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SectionOne;
