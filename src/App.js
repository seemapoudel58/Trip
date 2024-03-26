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

  const [todos, setTodos] = useState([
    "Passport (1)",
    "Visa (if required) (1)",
    "Travel tickets (1 set)",
    "Accommodation details (1)",
    "Travel itinerary (1)",
    "Travel insurance documents (1)",
    "Wallet with cash, credit/debit cards (1)",
    "Mobile phone and charger (1)",
    "Maps or navigation apps (1)",
    "Medications and first aid kit (1)",
    "Travel-sized toiletries (toothbrush, toothpaste, shampoo, etc.) (1 set)",
    "Sunscreen and insect repellent (1 each)",
    "Weather-appropriate clothing (1 set)",
    "Comfortable walking shoes (1 pair)",
    "Travel pillow and blanket (1 each)",
    "Reusable water bottle (1)",
    "Snacks and refreshments (as needed)",
    "Travel guidebook or language translation app (1)",
    "Camera or smartphone for capturing memories (1)",
    "Travel documents organizer (folder or pouch) (1)",
    "Entertainment (books, music, games) (as needed)",
  ]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const onDelete = (index) => {
    const newTodos = todos.filter((itemIndex) =>index !== itemIndex);
    setTodos(newTodos);
};


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
      <SectionOne ToDo={handleAddTodo}  />
      <TodosList todos={todos} onDelete = {onDelete} />
      <SectionTwo />
      <Footer />
    </>
  );
}

export default App;
