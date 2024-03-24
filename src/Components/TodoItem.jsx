import React from "react";

const TodoItem = ({ item }) => {
  return (
    <li
      className={`${
        item.bgColor || "bg-black/70"
      } px-3 py-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-100 text-white`}
    >
      {item.todo}
    </li>
  );
};
export default TodoItem;
