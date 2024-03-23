// Always try to start your component's name with uppercase - TodosList, SectionTwo, Sectionone, Footer, Header

import React from "react";

const dummyTodo = [
  { id: 1, todo: "Learn HTML" },
  { id: 2, todo: "Learn JavaScript" },
  { id: 3, todo: "Learn React Node Next" },
  { id: 4, todo: "Live your life" },
];

const TodosList = () => {
  return (
    <ul className="bg-green-200 min-h-[30vh] px-8 flex justify-center items-center gap-4 flex-wrap">
      <li className="bg-black/70 px-3 py-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-100 text-white">
        Learn HTML
      </li>
    </ul>
  );
};

export default TodosList;
