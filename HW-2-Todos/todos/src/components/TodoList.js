import { useState } from "react";

function TodoList({ setAllTodos, allTodos }) {
  const [addInput, setAddInput] = useState("");

  const addTodoToList = (addInput) => {
    setAddInput("");
    setAllTodos([
      ...allTodos,
      {
        name: addInput,
        id: Math.random(),
        opacity: 1,
        checked: false,
      },
    ]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const deleteATodo = (id) => {
    const remainings = allTodos.filter((todo) => todo.id !== id);
    setAllTodos(remainings);
  };

  const completedTodos = (id) => {
    const a = allTodos.map((todo) => {
      if (todo.id === id) {
        if (todo.opacity === 0.7) {
          todo.opacity = 1;
          todo.checked = false;
        } else {
          todo.opacity = 0.7;
          todo.checked = true;
        }
      }

      return todo;
    });

    setAllTodos(a);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => setAddInput(e.target.value)}
          value={addInput}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              addTodoToList(addInput);
            }
          }}
        />
      </form>

      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {allTodos.map((todo) => {
            return (
              <li key={todo.id}>
                <div className="view">
                  <input
                    onChange={(e) => {
                      completedTodos(todo.id);
                    }}
                    checked={todo.checked}
                    className="toggle"
                    type="checkbox"
                  />
                  <label style={{ opacity: todo.opacity }}>{todo.name}</label>
                  <button
                    onClick={() => deleteATodo(todo.id)}
                    className="destroy"
                  ></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default TodoList;
