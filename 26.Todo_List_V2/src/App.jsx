import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, task: "LEARN REACT", completed: false },
    { id: 2, task: "LEARN EXPRESS", completed: false },
    { id: 3, task: "LEARN JAVASCRIPT", completed: false },
  ]);

  const [addtodo, setAddTodo] = useState("");

  // Add Todo
  const add = () => {
    if (addtodo.trim() === "") return;

    const newId = Math.max(0, ...todo.map((item) => item.id)) + 1;

    const newTask = {
      id: newId,
      task: addtodo.trim(),
      completed: false,
    };

    setTodo([...todo, newTask]);
    setAddTodo("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
  };

  // Complete / Undo Todo
  const toggleTodo = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <div>
      <h1>Todo App</h1>

      {/* Add Todo */}
      <label htmlFor="task">ENTER TASK: </label>

      <input
        id="task"
        type="text"
        value={addtodo}
        onChange={(e) => setAddTodo(e.target.value)}
      />

      <button onClick={add}>ADD TASK</button>

      {/* Display Todo */}
      {todo.map((item) => (
        <div key={item.id}>
          <br />

          {/* Complete / Undo */}
          <span
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.task}
          </span>

          <button onClick={() => toggleTodo(item.id)}>
            {item.completed ? "UNDO" : "COMPLETE"}
          </button>

          {/* Delete */}
          <button onClick={() => deleteTodo(item.id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default App;
