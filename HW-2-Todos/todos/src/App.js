import { useState } from "react";
import "./App.css";
import Actions from "./components/Actions";
import TodoList from "./components/TodoList";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
        </header>
        <TodoList setAllTodos={setAllTodos} allTodos={allTodos} />
        <Actions allTodos={allTodos} setAllTodos={setAllTodos} />
      </section>
    </div>
  );
}

export default App;
