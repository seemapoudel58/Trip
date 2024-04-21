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
    { text: "Passport (1)", completed: false },
    { text: "Visa (if required) (1)", completed: false },
    { text: "Travel tickets (1 set)", completed: false },
    { text: "Accommodation details (1)", completed: false },
    { text: "Travel itinerary (1)", completed: false },
    { text: "Travel insurance documents (1)", completed: false },
    { text: "Wallet with cash, credit/debit cards (1)", completed: false },
    { text: "Mobile phone and charger (1)", completed: false },
    { text: "Maps or navigation apps (1)", completed: false },
    { text: "Medications and first aid kit (1)", completed: false },
    {
      text: "Travel-sized toiletries (toothbrush, toothpaste, shampoo, etc.) (1 set)",
      completed: false,
    },
    { text: "Sunscreen and insect repellent (1 each)", completed: false },
    { text: "Weather-appropriate clothing (1 set)", completed: false },
    { text: "Comfortable walking shoes (1 pair)", completed: false },
    { text: "Travel pillow and blanket (1 each)", completed: false },
    { text: "Reusable water bottle (1)", completed: false },
    { text: "Snacks and refreshments (as needed)", completed: false },
    {
      text: "Travel guidebook or language translation app (1)",
      completed: false,
    },
    {
      text: "Camera or smartphone for capturing memories (1)",
      completed: false,
    },
    {
      text: "Travel documents organizer (folder or pouch) (1)",
      completed: false,
    },
    {
      text: "Entertainment (books, music, games) (as needed)",
      completed: false,
    },
  ]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  const handleCompleted = (index) => {
    const newTodo = todos.map((todo, i) => {
      if (index === i) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  const message =
    todos.length > 0
      ? false
      : "There is nothing in the todo. Start adding some.";

  const [sort, setSort] = useState("option1");

  const sortTodos = () => {
    if (sort === "status") {
      setTodos([...todos].sort((a, b) => a.completed - b.completed));
    } else if (sort === "description") {
      setTodos([...todos].sort((a, b) => a.text.localeCompare(b.text)));
    } else {
      // No sorting needed for 'input'
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    sortTodos();
  };

  const[editedText , setEditedText] = useState();
  const[editingId, setEditingId] = useState(null);
  const[isEditing , setIsEditing] = useState(false);

  const handleEdit = ( index) =>{
    setEditingId(index);
    setEditedText(todos[index].text);
    setIsEditing(true);
    if (index === editingId) {
      setIsEditing(!isEditing);
    }
  }
  const handleChange = (e) =>{
    setEditedText(e.target.value);
    // setEditingId(index);

  }
  const handleSave = () => {
    const updatedTodos = [...todos ];
    updatedTodos[editingId].text = editedText;
    setTodos(updatedTodos);
    setIsEditing(false);
    setEditingId(null);
    setEditedText('');

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
      <TodosList
        todos={todos}
        onDelete={handleDeleteTodo}
        onComplete={handleCompleted}
        message={message}
        handleEdit={ handleEdit}
        handleSave = {handleSave}
        handleChange = {handleChange}
        isEditing = {isEditing}
        editingId={ editingId}
        editedText={editedText}
      />

      <SectionTwo
        handleClearTodos={handleClearTodos}
        handleSort={handleSort}
        sort={sort}
      />
      <Footer />
    </>
  );
}

export default App;
