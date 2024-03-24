import "./App.css";
import Header from "./Components/header";
import SectionOne from "./Components/section0ne";
import SectionTwo from "./Components/sectionTwo";
import Footer from "./Components/footer";
import TodosList from "./Components/TodosList";
import { useState } from "react";

function App() {
  // const [todos, setTodos]= useState([]);

  // const handleAddTodo = (item) => {
  //   setTodos([...todos, item]);
  // };
  // // count state
  const [count, setCount] = useState(0);

  console.log("I am re-rendered");

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const[ todos , setTodos] = useState([]);

  const handleAddTodo = (todo) =>{
    setTodos([...todos , todo])
  }

  return (
    <>
      <div className="min-h-[50dvh] bg-green-200 flex justify-center items-center gap-4">
        <button
          onClick={handleIncrease}
          className="bg-blue-300 py-1 px-2 rounded-md font-bold text-white"
        >
          INCREASE
        </button>
        <div className="text-5xl bg-red-300 flex justify-center items-center rounded-full p-4 h-16 w-16 text-white">
          {count}
        </div>
        <button
          onClick={handleDecrease}
          className="bg-blue-300 py-1 px-2 rounded-md font-bold text-white"
        >
          DECREASE
        </button>
      </div>
      <Header />
      <SectionOne ToDo={handleAddTodo} />
      <TodosList todos={todos} />
      
      <SectionTwo />
      <Footer />
    </>
  );
}

export default App;
