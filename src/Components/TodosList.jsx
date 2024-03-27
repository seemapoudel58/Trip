// Always try to start your component's name with uppercase - TodosList, SectionTwo, Sectionone, Footer, Header

import React from "react";
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const TodosList = ({ todos, onDelete, onComplete, message }) => {
  // if (!todos.length)
  //   return (
  //     <p className="text-red-700 py-20 text-center font-semibold text-3xl bg-green-200 min-h-[30vh] flex flex-row px-8 flex-wrap justify-center items-center gap-4">
  //       There is nothing in the list. Start adding some.
  //     </p>
  //   );

  if (!todos.length) {
    return (
      <p>
        The todo list is empty. Please try to add something in the todo list.
      </p>
    );
  }
  return (
    <ul className="bg-green-200 min-h-[30vh] py-20 flex flex-row px-8 flex-wrap justify-center items-center gap-4">
      {todos.map((item, index) => (
        <li
          className="bg-black/70 max-w-lg w-full aspect-[9/1] text-white px-4 py-2 rounded-md cursor-pointer flex items-center justify-between "
          key={index}
        >
          <span
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.text}
          </span>
          <div className="flex items-center justify-between space-x-7">
            <span
              onClick={() => {
                onComplete(index);
              }}
              className="text-2xl transform hover:scale-[1.2] transition-transform duration-500 cursor-pointer"
            >
              <FaCheckCircle />
            </span>
            <span
              onClick={() => {
                onDelete(index);
              }}
              className=" text-3xl transform hover:scale-[1.2] transition-transform duration-500 cursor-pointer"
            >
              <MdDelete />
            </span>
          </div>
        </li>
      ))}
      {message && (
        <p className="text-red-600 font-2xl font-semibold">{message}</p>
      )}
    </ul>
  );
};

export default TodosList;
