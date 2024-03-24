// Always try to start your component's name with uppercase - TodosList, SectionTwo, Sectionone, Footer, Header

import React from "react";


const TodosList = ({todos}) => {
  return (
    <ul className="bg-green-200 min-h-[30vh] px-8 flex justify-center items-center gap-4 flex-wrap">
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TodosList;
