// Always try to start your component's name with uppercase - TodosList, SectionTwo, Sectionone, Footer, Header

import React from "react";

const TodosList = ({ todos }) => {
  return (
    <ul className="bg-green-200 min-h-[30vh] py-20 flex flex-row px-8 flex-wrap justify-center items-center gap-4">
      {todos.map((item, index) => (
        <li
          className="bg-black/70 max-w-lg w-full aspect-[9/1] text-white px-4 py-2 rounded-md hover:scale-105 cursor-pointer transition-all"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
