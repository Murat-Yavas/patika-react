function Actions({ allTodos, setAllTodos }) {
  const deleteAllTodos = () => {
    allTodos.splice(0, allTodos.length);
    setAllTodos([]);
  };

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{allTodos.length}</strong> - todos left
        </span>

        <button onClick={() => deleteAllTodos()} className="clear-completed">
          Clear All
        </button>
      </footer>
    </div>
  );
}

export default Actions;
