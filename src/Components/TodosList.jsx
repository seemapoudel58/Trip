// Always try to start your component's name with uppercase - TodosList, SectionTwo, Sectionone, Footer, Header

import React from "react";
import TodoItem from "./TodoItem";

const dummyTodo = [
  { id: 1, bgColor: "bg-red-400", todo: "Learn HTML" },
  { id: 2, bgColor: "bg-green-400", todo: "Learn JavaScript" },
  { id: 3, bgColor: "bg-yellow-400", todo: "Learn React Node Next" },
  { id: 4, bgColor: "bg-blue-400", todo: "Live your life" },
  { id: 5, todo: "Rock the web development" },
];

const TodosList = () => {
  return (
    <ul className="bg-green-200 min-h-[30vh] px-8 flex justify-center items-center gap-4 flex-wrap">
      {dummyTodo.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodosList;
