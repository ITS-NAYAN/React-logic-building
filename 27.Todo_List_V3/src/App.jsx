import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Learn Javascript", completed: false },
    { id: 3, task: "Learn Python", completed: false },
    { id: 4, task: "Learn Rust", completed: true },
    { id: 5, task: "Learn C++", completed: true },
  ]);

  const [filter, setFilter] = useState("all");

  let filteredTodo = [];

  if (filter === "all") {
    filteredTodo = todo;
  } else if (filter === "active") {
    filteredTodo = todo.filter((items) => !items.completed);
  } else if (filter === "done") {
    filteredTodo = todo.filter((items) => items.completed);
  }

  return (
    <div>
      <h1>Todo Filters (All/Active/Done)</h1>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="done">Done</option>
      </select>

      {filteredTodo.map((items) => (
        <p key={items.id}>{items.task}</p>
      ))}
    </div>
  );
};

export default App;