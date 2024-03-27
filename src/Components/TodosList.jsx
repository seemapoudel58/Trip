// Always try to start your component's name with uppercase - TodosList, SectionTwo, Sectionone, Footer, Header

import React from "react";
import { MdDelete } from "react-icons/md";

const TodosList = ({ todos, onDelete }) => {
  if (!todos.length)
    return (
      <p className="text-red-700 py-20 text-center font-semibold text-3xl bg-green-200 min-h-[30vh] flex flex-row px-8 flex-wrap justify-center items-center gap-4">
        There is nothing in the list. Start adding some.
      </p>
    );

  return (
    <ul className="bg-green-200 min-h-[30vh] py-20 flex flex-row px-8 flex-wrap justify-center items-center gap-4">
      {todos.map((item, index) => (
        <li
          className="bg-black/70 max-w-lg w-full aspect-[9/1] text-white px-4 py-2 rounded-md cursor-pointer flex items-center justify-between "
          key={index}
        >
          {item}
          <span
            onClick={() => {
              onDelete(index);
            }}
            className=" text-2xl transform hover:scale-[1.2] transition-transform duration-500 cursor-pointer"
          >
            <MdDelete />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
