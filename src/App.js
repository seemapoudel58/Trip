import "./App.css";
import Header from "./Components/header";
import SectionOne from "./Components/section0ne";
import SectionTwo from "./Components/sectionTwo";
import Footer from "./Components/footer";
import TodosList from "./Components/TodosList";

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <TodosList />
      <SectionTwo />
      <Footer />
    </>
  );
}

export default App;
